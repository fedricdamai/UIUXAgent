# 15 UX Laws: Reference for Review Agents

Source: a 30-second short, "15 UX laws every designer should know in 30 seconds" (shared 24 November 2026). Each law got one line and one tiny demo. Both are recorded below, word for word where the video had text, then expanded into checks an agent can run during a review.

## How to use this file

1. Name the law only when it explains a real problem on the screen. Never list laws for decoration.
2. Pair every law with a fix the team can ship. "Hick's law" is a label. "Cut the 9 plan cards to 3" is a review.
3. Make the finding falsifiable: count the options, time the response, measure the button.

## Cheat sheet

| # | Law | One line (from the video) | What the video showed |
| --- | --- | --- | --- |
| 1 | Jakob's law | People expect your app to work like the ones they already use | A standard nav bar with the cart icon top right |
| 2 | Aesthetic-usability | Pretty designs feel easier to use | Beige form with a grey SUBMIT vs clean form with an orange Continue. Badge: "Feels easier" |
| 3 | Cognitive load | Every extra thing on screen costs brainpower | Cluttered card of colored blocks, then one card: "One thing to do." + Continue |
| 4 | Hick's law | More choices, slower decisions | 12 grey tiles = slow decision. 4 orange tiles = fast decision |
| 5 | Fitts's law | Bigger, closer buttons are faster to hit | Tiny far-off dot vs a big orange target hit in 0.4s |
| 6 | Miller's law | We hold only a few things in mind, so chunk it | 4111111111111111 (16 digits) becomes 4111 1111 1111 1111 (4 chunks) |
| 7 | Doherty threshold | Respond in under 400ms or it feels slow | A like button on a timeline. Under 400ms "feels instant", over it "feels slow" |
| 8 | Von Restorff effect | The thing that's different gets remembered | Row of grey dots, one orange. "You looked here." |
| 9 | Serial position | People remember the first and last items | Tab bar Home, Search, Shop, Inbox, Profile. Home and Profile light up. U-shaped memory curve |
| 10 | Peak-end rule | We judge an experience by its peak and its end | Flat line, a spike labeled Peak, a rise labeled End. Caption: "what people remember" |
| 11 | Goal gradient | People speed up as they near the finish | 5-step progress bar. "Almost there..." Speed rises with each step |
| 12 | Zeigarnik effect | Unfinished tasks stick in our heads | Profile ring at 61%, then 80%: "...you want to finish it." |
| 13 | Tesler's law | Complexity can't be deleted, only moved | A "complexity" block sits in the System column, not the User column: "app deals with it" |
| 14 | Postel's law | Accept messy input, give back clean output | They type `555.123 4567`. You show `(555) 123-4567` with a check |
| 15 | Law of proximity | Things close together look related | 27 dots in three tight 3x3 clusters read as "3 groups" |

## The laws, expanded

### 1. Jakob's law
**Rule:** Users spend most of their time on other products. They arrive expecting yours to work the same way.
**Look for:** logo that isn't a home link, cart or account icon in an odd spot, custom scrollbars, swipe gestures where a tap is standard, invented names for standard things ("Vault" for "Wallet").
**Fix pattern:** Copy the convention unless breaking it is the product. Spend novelty on the value, not the navigation.
**Origin:** Jakob Nielsen, Nielsen Norman Group.

### 2. Aesthetic-usability effect
**Rule:** People rate good-looking interfaces as easier to use, and forgive their small flaws.
**Look for:** default browser form styles, mismatched corner radii, cramped spacing, low-contrast buttons, stock-template feel.
**Fix pattern:** Consistent spacing scale, one accent color for the primary action, real type hierarchy.
**Watch out:** Polish hides problems in user testing too. A pretty prototype can pass a test a plain one would fail. Ask what users did, not just what they said.
**Origin:** Kurosu and Kashimura, Hitachi, 1995.

### 3. Cognitive load
**Rule:** Every element on screen asks for a slice of attention. Spend it on the task.
**Look for:** more than one primary button, decorative blocks competing with the CTA, walls of helper text, side panels nobody opens.
**Fix pattern:** One screen, one job. The video's fix was literal: "One thing to do." plus one button.
**Check:** Count the elements a first-time user must read before they can act. Then cut.

### 4. Hick's law
**Rule:** Decision time rises with the number of choices.
**Look for:** pricing pages with 4+ tiers, 10-item nav menus, settings screens with every toggle visible, onboarding that asks users to pick from 20 interests.
**Fix pattern:** Fewer options, a highlighted default, progressive disclosure ("More options").
**Check:** Count the choices on the decision screen. The video went from 12 to 4.
**Origin:** Hick and Hyman, 1952.

### 5. Fitts's law
**Rule:** Time to hit a target depends on its size and distance. Big and close wins.
**Look for:** small tap targets on mobile, primary action far from the thumb, destructive and confirm buttons side by side at equal size, tiny close icons.
**Fix pattern:** Primary actions full-width or in the thumb zone. Minimum touch target 44x44 pt (Apple HIG) or 48x48 dp (Material). Keep destructive actions small and away from the main path.
**Check:** Measure the target. Note its distance from the last tap.
**Origin:** Paul Fitts, 1954.

### 6. Miller's law
**Rule:** Working memory holds only a handful of items. Group long strings into chunks.
**Look for:** unformatted card, phone, IBAN and wallet numbers; recovery phrases shown as one block; nav menus with 12 flat items.
**Fix pattern:** Chunk numbers (4111 1111 1111 1111). Group menus into labeled sections. Show seed phrases as a numbered grid.
**Note:** Miller's 1956 paper said "seven, plus or minus two." Later work (Cowan, 2001) puts it nearer four chunks. Design for four.

### 7. Doherty threshold
**Rule:** When the system answers in under 400ms, users stay in flow. Past that, it feels slow.
**Look for:** buttons with no pressed state, likes that wait for the server, spinners on actions that could be optimistic, page loads with no skeleton.
**Fix pattern:** Optimistic UI (show the heart filled now, sync later). Skeleton screens. Instant visual feedback on tap even when the work takes longer.
**Check:** Time the gap between tap and the first visible change.
**Origin:** Doherty and Thadani, IBM, 1982.

### 8. Von Restorff effect (isolation effect)
**Rule:** The one item that looks different gets noticed and remembered.
**Look for:** primary CTA styled like secondary buttons, "recommended" plan that looks like the others, or the opposite problem: five things highlighted so nothing stands out.
**Fix pattern:** One accent per screen, on the thing you want chosen. Don't rely on color alone (accessibility): add size, weight, a label or an icon.
**Origin:** Hedwig von Restorff, 1933.

### 9. Serial position effect
**Rule:** People recall the first and last items in a list best. The middle fades.
**Look for:** key nav items buried in the middle of a tab bar, important terms in the middle of a list, the best plan placed second of four.
**Fix pattern:** Put the most important items first and last. The video lit up Home and Profile in a five-tab bar.
**Origin:** Hermann Ebbinghaus.

### 10. Peak-end rule
**Rule:** People judge an experience by its most intense moment and its final moment, not the average.
**Look for:** flat, forgettable success screens; flows that end on a form error or an upsell; quizzes and onboarding that end with a plain "Done."
**Fix pattern:** Design the high point on purpose (the reveal, the result, the reward). End clean: a clear success state, a next step, something worth sharing.
**Origin:** Daniel Kahneman and colleagues, 1993.

### 11. Goal gradient effect
**Rule:** Motivation rises as people get closer to a goal.
**Look for:** multi-step flows with no progress indicator, progress bars that start at zero, long forms shown as one page.
**Fix pattern:** Show steps and progress. Give an early head start (mark step 1 complete on sign-up). Copy like "Almost there..." near the end.
**Proof:** Kivetz, Urminsky and Zheng (2006): a coffee card with 12 stamps and 2 pre-filled got completed faster than a 10-stamp card starting empty. Same 10 purchases.
**Origin:** Clark Hull, 1932.

### 12. Zeigarnik effect
**Rule:** People remember unfinished tasks better than finished ones, and feel a pull to complete them.
**Look for:** profiles, setups and checklists with no visible completion state.
**Fix pattern:** Progress rings ("80% profile complete"), setup checklists, saved drafts with a "pick up where you left off" prompt.
**Watch out:** Fake incompleteness used to nag is a dark pattern. Only show progress toward something the user wants.
**Origin:** Bluma Zeigarnik, 1927.

### 13. Tesler's law (conservation of complexity)
**Rule:** Every product has a fixed amount of complexity. Either the user carries it or the system does.
**Look for:** users asked to enter things the app could detect (country, card type, timezone), manual formatting, config screens that expose internals.
**Fix pattern:** Move the work to the system. Detect, default, autofill. The video's caption: "app deals with it."
**Origin:** Larry Tesler, Xerox PARC.

### 14. Postel's law (robustness principle)
**Rule:** Be liberal in what you accept, strict in what you return.
**Look for:** phone fields that reject dots or spaces, date fields that need one exact format, "invalid input" errors for things the app could clean up, case-sensitive emails.
**Fix pattern:** Accept any reasonable format, normalize it, show the clean version back. `555.123 4567` in, `(555) 123-4567` out.
**Origin:** Jon Postel, TCP spec (RFC 761, 1980).

### 15. Law of proximity
**Rule:** Elements near each other read as a group. Spacing carries meaning.
**Look for:** labels equidistant between two fields, uniform spacing across unrelated sections, buttons floating far from the content they act on.
**Fix pattern:** Tighter space inside groups, wider space between them. Labels sit closer to their own field than to the next one.
**Origin:** Gestalt psychology.

## Quick review pass

Run these on every screen. Each line maps to a law above.

- [ ] Does it work like the apps users already know? (1)
- [ ] Does it look finished and consistent? (2)
- [ ] Is there one clear thing to do? (3)
- [ ] Can the choices be cut or defaulted? (4)
- [ ] Is the main button big and in reach? (5)
- [ ] Are long numbers and lists chunked? (6)
- [ ] Does every tap show feedback in under 400ms? (7)
- [ ] Does the one thing that matters stand out, and only that thing? (8)
- [ ] Are the key items first or last? (9)
- [ ] Is there a designed high point, and does the flow end well? (10)
- [ ] Can users see how close they are to done? (11, 12)
- [ ] Is the app doing the work the user shouldn't have to? (13)
- [ ] Do inputs forgive messy formats? (14)
- [ ] Does spacing show what belongs together? (15)
