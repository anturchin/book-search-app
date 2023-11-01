import onChange from 'on-change';
import { AbstractView } from '../../common/view';
import { Header } from '../../components/header/header';
import { CardList } from '../../components/cardList/cardList';

export class FavoritesView extends AbstractView {


	constructor(appState) {
		super();
		this.appState = appState;
		this.appState = onChange(this.appState, this.appStateHook.bind(this));
		this.setTitle('my favorite book');
	}

	destroy() {
		onChange.unsubscribe(this.appState);
	}

	appStateHook(path) {

		if (path === 'favorits') {
			this.render();
		}
	}


	render() {
		const main = document.createElement('div');
		main.innerHTML = `
		<h2>favorites books</h2>
		`;
		main.append(new CardList(this.appState, { list: this.appState.favorits }).render());
		this.app.innerHTML = '';
		this.app.append(main);
		this.renderHeader();
	}

	renderHeader() {
		const header = new Header(this.appState).render();
		this.app.prepend(header);
	}

}