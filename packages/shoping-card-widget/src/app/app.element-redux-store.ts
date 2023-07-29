import { customElement } from 'lit/decorators.js';
import { GlobalStore, IGlobalStore } from 'redux-micro-frontend';
import { AbstractShopingCardWidget } from './app.element.base';

@customElement('shoping-card-redux-store-communications-widget')
export class ShopingCardWidget extends AbstractShopingCardWidget {
  private store: IGlobalStore = GlobalStore.Get();

  connectedCallback(): void {
      super.connectedCallback();
      this.store.Subscribe("product-list-widget", (state) => {
        this.cart = state.shoppingCart;
        this.requestUpdate();
      });
  }
}
