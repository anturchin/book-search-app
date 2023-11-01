import { AbstractView } from '../../common/view';
import onChange from 'on-change';

export class MainView extends AbstractView {

	state = {
		list: [],
		loading: false,
		serachQuery: undefined,
		offset: 0,
	}

	constructor(appState) {
		super();
		this.appState = appState;
		this.appState = onChange(this.appState, this.appStateHook.bind(this));
		this.setTitle('search book');
	}

	appStateHook(path) {
		console.log(path);
		if (path === 'favorits') {
			console.log(path);
			// this.render();
		}
	}

	render() {
		const main = document.createElement('div');
		main.innerHTML = `number of books: ${this.appState.favorits.length}`;
		this.app.innerHTML = '';
		this.app.append(main);
		this.appState.favorits.push('1');
	}

}