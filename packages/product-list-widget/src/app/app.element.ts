import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import * as styles from './app.element.css?inline';
import { GlobalStore, IAction } from 'redux-micro-frontend';
import { legacy_createStore as createStore } from 'redux';

const storeAddToshoppingCartAction = "add-to-shopping-cart";

@customElement('product-list-widget')
export class ProductListWidget extends LitElement {
  static styles = unsafeCSS(styles.default);

  private store = GlobalStore.Get();

  createRenderRoot() {
    return this;
  }

  connectedCallback(): void {
    super.connectedCallback();

    const reducer = (state: any = { shoppingCart: [] }, action: IAction) => {
      switch (action.type) {
        case storeAddToshoppingCartAction:
          return { ...state, shoppingCart: [...state.shoppingCart, action.payload] };
        default:
          return state;
      }
    };

    const appStore = createStore(reducer);
    this.store.RegisterStore("product-list-widget", appStore, [storeAddToshoppingCartAction]);
  }

  render() {
    const products = [{name: 'product1', price: 100}, {name: 'product2', price: 250}];

    return html`
      <div class="container">
        <div class="content">
	 				<div class="row">
	 					<div class="col-md-12 col-lg-8">
	 						<div class="items">
               ${map(products, (i) => html`
				 				<div class="product">
				 					<div class="row">
					 					<div class="col-md-3">
					 						<img class="img-fluid mx-auto d-block image" src="phone.png" width="100px">
					 					</div>
					 					<div class="col-md-9">
					 						<div class="info">
						 						<div class="row">
							 						<div class="col-md-5 product-name">
							 							<div class="product-name">
								 							<h3>${i.name}</h3>
								 							<div class="product-info">
									 							<div>Display: <span class="value">5 inch</span></div>
									 							<div>RAM: <span class="value">4GB</span></div>
									 							<div>Memory: <span class="value">32GB</span></div>
									 						</div>
									 					</div>
							 						</div>
							 						<div class="col-md-3 price">
							 							<span>$${i.price}</span>
							 						</div>
                           <div class="col-md-4 price">
							 							<button type="button" class="btn btn-primary btn-lg btn-block" @click=${() => this.onAddToshoppingCart(i)}>Add to cart</button>
							 						</div>
							 					</div>
							 				</div>
					 					</div>
					 				</div>
				 				</div>
                 `)}
				 			</div>
			 			</div>
			 		</div>
		 		</div>
	 		</div>
    `;
  }

  private onAddToshoppingCart(product: any) {
    this.store.DispatchAction("product-list-widget", { type: storeAddToshoppingCartAction, payload: product });
  }
}
