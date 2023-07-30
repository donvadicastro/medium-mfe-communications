import { customElement } from 'lit/decorators.js';
import { AbstractProductListWidget, storeAddToshoppingCartAction } from './app.element.base';

@customElement('product-list-browser-events-communications-widget')
export class ProductListBrowserEventsCommunicationWidget extends AbstractProductListWidget {
  protected override onAddToshoppingCart(product: {name: string, price: number}) {
    window.postMessage({ type: storeAddToshoppingCartAction, data: product });
  }
}
