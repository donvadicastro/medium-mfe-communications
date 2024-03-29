import { LitElement, html } from 'lit';

export abstract class AbstractShopingCardWidget extends LitElement {
  protected cart: any[] = [];

  createRenderRoot() {
    return this;
  }

  render() {
    const sum = this.cart.reduce((sum, i: { price: number; }) => sum += i.price, 0);
    return html`
        <div class="summary" style="border: dashed 5px green">
          <h5 style="float: right; margin: -25px -20px 0 0">APPLICATION 2</h5>
          <h3>Summary</h3>
          <div class="summary-item"><span class="text">Subtotal</span><span class="price">$${sum}</span></div>
          <u>
            ${this.cart.map((i: { name: string; price: number; }) => html`
              <li>${i.name}<span class="price">$${i.price}</span></li>
            `)}
          </u>
          <div class="summary-item"><span class="text">Discount</span><span class="price">$0</span></div>
          <div class="summary-item"><span class="text">Shipping</span><span class="price">$0</span></div>
          <div class="summary-item"><span class="text">Total</span><span class="price">$${sum}</span></div>
          <button type="button" class="btn btn-primary btn-lg btn-block">Checkout</button>
        </div>
    `;
  }
}
