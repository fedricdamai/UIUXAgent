# Chimera Bitcoin Quiz: Website and Leaderboard Review

- **Site:** https://chimera-bitcoin-quiz.tyahas.chatgpt.site/
- **Google Doc (full review):** [Chimera Quiz: Website and Leaderboard Review](https://docs.google.com/document/d/1kRM94AI38avCWH5NN-kNSPQLaqz218xBW8JEzzYRD2M/edit)
- **Related doc:** [Chimera Quiz Campaign Review and Additional Ideas](https://docs.google.com/document/d/1_P0aOrSx8bJckr7skISYAllImAHjxQ4YPKN5FAvVGeM/edit)

## Status

The first review is done (20 October 2026). A re-check of the latest version is open.

**Blocked:** the cloud session's network policy refuses `chimera-bitcoin-quiz.tyahas.chatgpt.site`, so the page can't be loaded or screenshotted. To unblock, either:

1. Add `chimera-bitcoin-quiz.tyahas.chatgpt.site` under Allowed domains in the environment's Network access settings ([steps](https://code.claude.com/docs/en/cloud-environments#network-access)), or
2. Send screenshots of the landing page, one question, the result and the leaderboard on mobile and desktop, plus the five questions and answers.

## Next steps

- [ ] Load the latest site and screenshot every screen (mobile and desktop).
- [ ] Compare against the 20 October review: what's fixed, what's still open.
- [ ] Review the five quiz scenarios and answer explanations (not covered yet).
- [ ] Add visual design notes (not covered yet).
- [ ] Write the update as a new Google Doc, or a "What changed" section in the existing one.

## Summary of the 20 October review

### Blockers before sharing

| Issue | Fix |
| --- | --- |
| Hosted on a chatgpt.site subdomain. A scam-awareness quiz on an unfamiliar domain teaches the habit it warns against. | Serve it from a chimerawallet.com subdomain or path. |
| No preview image on shared links. | Add `og:image` and `twitter:card` (`summary_large_image`). |
| Meta description and page subhead pitch different things. | Use one line in both places. |
| Leaderboard marked "Preview, Not live". | Hide it or launch with final rules. |

### Landing screen

The page uses five frames for one quiz: scams, getting hacked, security decisions, internet instincts and an Internet Driver's Licence. Keep the licence as the reward and drop the rest.

| Current | Suggested |
| --- | --- |
| Can you spot the scam? | 5 scams. About a minute. |
| Would you get hacked? | Keep. A/B test "Would you get drained?" |
| See how many scams you can spot in this quick test. | Pick what you would do. Get your Internet Driver's Licence. |
| Shown on your result card. No X sign-in needed. | Goes on your card. No sign-in. |
| Start the quiz ↗ | Start the quiz → |
| Your internet instincts. Your own card. | Pass and this is yours. |
| Stray "↖" after the card | Remove |

### Quiz screen

| Current | Suggested |
| --- | --- |
| What would you do? Choose one outlined action, then select Continue. | What do you do? |
| Continue → | Lock it in → |
| Choose an action to continue. | Pick one first. |
| No visible progress | Add "2 of 5" |

Repeat "Simulation. Never type real recovery words." inline on any scenario that asks for recovery words.

### Results screen

- **Order:** score and card, share, answer review, wallet CTA. The wallet pitch currently lands before the card.
- **Score verdicts:** 5/5 Unphishable. 4/5 One click from trouble. 3/5 Coin flip. 1 to 2/5 Your wallet is nervous. 0/5 Drained.
- **Share flow:** give each result its own URL and preview image so the card shows on X without a manual attach step.
- **X draft:** "Scored {score}/5 on @chimera_wallet's scam test. {verdict} Would you get hacked? {link}"

### Leaderboard

Don't ship it as a preview. Launch with final rules, identity checks and a reward, or replace it with: "Leaderboard opens [date]. Top [N] win [reward]. Follow @chimera_wallet for the drop."

Problems to fix before launch:

1. Handles are typed with no sign-in, so anyone can opt in someone else or farm referrals with fake entries.
2. The answer review shows the right answers, so every retry scores 50.
3. Five referrals equal a perfect quiz. With no cap, the board ranks audience size.
4. No prize, end date or top-N cutoff.
5. "Proposed rules" undercuts trust.

Suggested rules: X sign-in to join the board. First attempt only, 10 points per correct answer, max 50. 10 points per referral who verifies and finishes, capped. Filter new or low-follower accounts and review the top N by hand. Ties go to whoever got there first. Publish an end date and a reward.

### Footer and consistency

- Pick self-custodial or non-custodial and use it everywhere.
- Pick British or American spelling (Licence vs personalized).
- "Your handle and answers stay in this browser" becomes false once the leaderboard publishes handles.
- The community link points to one message (t.me/Chimera_Community/2131), not the group.
