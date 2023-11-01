import { DivComponent } from '../../common/div-component';
import './card.css';

export class Card extends DivComponent {

	constructor(appState, cardState) {
		super();
		this.appState = appState;
		this.cardState = cardState;
	}

	#addToFavorites() {
		this.appState.favorits.push(this.cardState);
	}

	#deleteFromFavorites() {
		this.appState.favorits = this.appState.favorits.filter(
			b => b.key !== this.cardState.key
		);
	}

	render() {
		this.el.classList.add('card');
		const existInFavorites = this.appState.favorits.find(
			b => b.key == this.cardState.key
		);
		this.el.innerHTML = `
		<div class="card__image">
		<img 
			src="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg" 
			alt="card img">
		</div>
		<div class="card__info">
			<div class="card__tag">
				${this.cardState.subject ? this.cardState.subject[0] : 'not found'}
			</div>
			<div class="card__name">
				${this.cardState.title}
			</div>
			<div class="card__author">
				${this.cardState.author_name ? this.cardState.author_name[0] : 'not found'}
			</div>
			<div class="card__footer">
			<button class="button__add ${existInFavorites ? 'button__active' : ''}">
				${existInFavorites
				? '<img src="./static/favorites.svg" alt="favorit icon-two">'
				: '<img src="./static/favorite-white.svg" alt="favorit icon-two">'
			}
			</button>
		</div>
		</div>
		`;

		if (existInFavorites) {
			this.el.querySelector('button')
				.addEventListener('click', this.#deleteFromFavorites.bind(this))
		} else {
			this.el.querySelector('button')
				.addEventListener('click', this.#addToFavorites.bind(this))
		}

		return this.el;
	}

}