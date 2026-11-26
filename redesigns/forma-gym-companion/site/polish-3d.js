/* Forma 3D: mounts the product renders (Taste skill, product-render) that the polish layer
   places on a screen, and frees their WebGL contexts when the screen is replaced. */
import { mountAll, products } from './assets/objects/product-render/auto.js';

window.formaMount3D = () => {
  for (const [el, ctrl] of products) {
    if (!el.isConnected) { try { ctrl.destroy(); } catch (e) { /* already gone */ } products.delete(el); }
  }
  return mountAll(document);
};
window.formaMount3D();
