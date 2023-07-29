import { customElement } from 'lit/decorators.js';
import { AbstractProductListWidget, storeAddToshoppingCartAction } from './app.element.base';

@customElement('product-list-browser-events-communications-widget')
export class ProductListWidget extends AbstractProductListWidget {
  protected override onAddToshoppingCart(product: any) {
    window.postMessage({ type: storeAddToshoppingCartAction, data: product });
  }
}
