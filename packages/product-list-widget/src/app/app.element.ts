import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';
import * as styles from './app.element.css?inline';
import { GlobalStore, IGlobalStore } from 'redux-micro-frontend';
import { legacy_createStore as createStore } from 'redux';

const storeAddToShoppingCardActions = "add-to-shopping-card";

@customElement('product-list-widget')
export class ShopingCardWidget extends LitElement {
  static styles = unsafeCSS(styles.default);

  private store: IGlobalStore = GlobalStore.Get();

  connectedCallback(): void {
    const appStore = createStore(() => { /* */ }); // Redux Store

    this.store.RegisterStore("product-list-widget", appStore);
    this.store.RegisterGlobalActions("product-list-widget", [storeAddToShoppingCardActions]); // These actions can be dispatched by other apps to this store
  }

  render() {
    return html`
      <h1>Products</h1>
      ${map(['product1', 'product2'], (i) => html`
        ${i} <button @click=${() => this.onAddToShoppingCard(i)}>Add to shopping card</button>
      `)}
    `;
  }

  private onAddToShoppingCard(product: string) {
    this.store.DispatchAction("product-list-widget", {
      type: storeAddToShoppingCardActions,
      payload: product
    });
  }
}
