import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import * as styles from './app.element.css?inline';
import { GlobalStore, IGlobalStore } from 'redux-micro-frontend';

@customElement('shoping-card-widget')
export class ShopingCardWidget extends LitElement {
  static styles = unsafeCSS(styles.default);
  private store: IGlobalStore = GlobalStore.Get();

  private cart = [];

  createRenderRoot() {
    return this;
  }

  connectedCallback(): void {
      super.connectedCallback();
      this.store.Subscribe("product-list-widget", (state) => {
        this.cart = state.shoppingCart;
        this.requestUpdate();
      });
  }

  render() {
    const sum = this.cart.reduce((sum, i: { price: number; }) => sum += i.price, 0);
    return html`
        <div class="summary">
          <h3>Summary</h3>
          <div class="summary-item"><span class="text">Subtotal</span><span class="price">$${sum}</span></div>
          <div class="summary-item"><span class="text">Discount</span><span class="price">$0</span></div>
          <div class="summary-item"><span class="text">Shipping</span><span class="price">$0</span></div>
          <div class="summary-item"><span class="text">Total</span><span class="price">$${sum}</span></div>
          <button type="button" class="btn btn-primary btn-lg btn-block">Checkout</button>
        </div>
    `;
  }
}
