import onChange from 'on-change';
import { AbstractView } from '../../common/view';
import { Header } from '../../components/header/header';
import { Search } from '../../components/search/search';
import { CardList } from '../../components/cardList/cardList';

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
		this.state = onChange(this.state, this.stateHook.bind(this));
		this.setTitle('search book');
	}

	appStateHook(path) {

		if (path === 'favorits') {
			console.log(path);
		}
	}

	async stateHook(path) {
		if (path === 'serachQuery') {
			this.state.loading = true;
			const data = await this.loadList(this.state.serachQuery, this.state.offset);
			this.state.loading = false;
			this.state.list = data.docs;
		}

		if (path === 'loading') {
			this.render();
		}

		if (path === 'list') {
			this.render();
		}
	}

	async loadList(q, offset) {
		const res = await fetch(`https://openlibrary.org/search.json?q=${q}&offset=${offset}`);
		return res.json();
	}

	render() {
		const main = document.createElement('div');
		main.append(new Search(this.state).render());
		main.append(new CardList(this.appState, this.state).render());
		this.app.innerHTML = '';
		this.app.append(main);
		this.renderHeader();
	}

	renderHeader() {
		const header = new Header(this.appState).render();
		this.app.prepend(header);
	}

}