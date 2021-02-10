import App from './App.svelte';
import './firebase';

import 'bootswatch/dist/lux/bootstrap.min.css';
import 'toastr/build/toastr.js'
import 'toastr/build/toastr.css'

const app = new App({
	target: document.body,
	props: {
	}
});

export default app;