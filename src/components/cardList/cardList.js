import { DivComponent } from '../../common/div-component';
import './cardList.css';

export class CardList extends DivComponent {

	constructor(appState, parentState) {
		super();
		this.appState = appState;
		this.parentState = parentState;
	}

	render() {
		if (this.parentState.loading) {
			this.el.innerHTML = `<div class="card-list__loader">loading...</div>`
			return this.el;
		}
		this.el.innerHTML = `
			<h2>found books - ${this.parentState.list.length}</h2>
		`;

		return this.el;
	}

}