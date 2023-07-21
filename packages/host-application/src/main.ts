import { GlobalStore } from 'redux-micro-frontend';
import { legacy_createStore as createStore } from 'redux';

const globalStore = GlobalStore.Get();
const appStore = createStore(() => { /**/}); // Redux Store
globalStore.RegisterStore("RootApplicationStore", appStore);
globalStore.RegisterGlobalActions("App1", ["Action-1", "Action-2"]);
