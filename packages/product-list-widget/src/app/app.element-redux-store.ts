import { customElement } from 'lit/decorators.js';
import { legacy_createStore as createStore } from 'redux';
import { GlobalStore, IAction } from 'redux-micro-frontend';
import { AbstractProductListWidget, storeAddToshoppingCartAction } from './app.element.base';

@customElement('product-list-redux-store-communications-widget')
export class ProductListWidget extends AbstractProductListWidget {
	private store = GlobalStore.Get();

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

	protected override onAddToshoppingCart(product: any) {
		this.store.DispatchAction("product-list-widget", { type: storeAddToshoppingCartAction, payload: product });
	}
}
