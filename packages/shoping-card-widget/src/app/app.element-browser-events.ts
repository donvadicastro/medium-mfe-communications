import { customElement } from 'lit/decorators.js';
import { AbstractShopingCardWidget } from './app.element.base';

@customElement('shoping-card-browser-events-communications-widget')
export class ShopingCardBrowserEventsCommunicationsWidget extends AbstractShopingCardWidget {
  connectedCallback(): void {
      super.connectedCallback();

      window.addEventListener("message", (e: MessageEvent) => {
        if (e.data.type === "add-to-shopping-cart") {
          this.cart.push(e.data.data);
          this.requestUpdate();
        }
      });
  }
}
