import { LitElement, html, unsafeCSS } from 'lit';
import { map } from 'lit/directives/map.js';
import * as styles from './app.element.css?inline';

export const storeAddToshoppingCartAction = "add-to-shopping-cart";

export abstract class AbstractProductListWidget extends LitElement {
	static styles = unsafeCSS(styles.default);

	createRenderRoot() {
		return this;
	}

	render() {
		const products = [{ name: 'Red phone', price: 100 }, { name: 'Also red phone', price: 250 }];

		return html`
      <div class="container">
        <div class="content">
	 				<div class="row">
	 					<div class="col-md-12 col-lg-10">
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
							 						<div class="col-md-6 product-name">
							 							<div class="product-name">
								 							<h3>${i.name}</h3>
								 							<div class="product-info">
									 							<div>Display: <span class="value">5 inch</span></div>
									 							<div>RAM: <span class="value">4GB</span></div>
									 							<div>Memory: <span class="value">32GB</span></div>
									 						</div>
									 					</div>
							 						</div>
							 						<div class="col-md-2 price">
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

	protected abstract onAddToshoppingCart(product: any): void;
}
