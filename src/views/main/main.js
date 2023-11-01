import onChange from 'on-change';
import { AbstractView } from '../../common/view';
import { Header } from '../../components/header/header';

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
		this.app.innerHTML = '';
		this.app.append(main);
		this.renderHeader();
		this.appState.favorits.push('1');
	}

	renderHeader() {
		const header = new Header(this.appState).render();
		this.app.prepend(header);
	}

}