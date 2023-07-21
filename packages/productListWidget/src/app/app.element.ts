import { html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import * as styles from './app.element.css?inline';

@customElement('product-list-widget')
export class ShopingCardWidget extends HTMLElement {
  static styles = unsafeCSS(styles.default);

  render() {
    return html`Product list widget`;
  }
}
