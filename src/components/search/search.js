import { DivComponent } from '../../common/div-component';
import './search.css';

export class Search extends DivComponent {

	constructor(state) {
		super();
		this.state = state;
	}

	render() {
		this.el.classList.add('search');
		this.el.innerHTML = `
		<div class="serach__wrapper">
			<input 
				type="text" 
				placeholder="search book or author" 
				class="search__input" 
				value='${this.state.serachQuery ? this.state.serachQuery : ""}' />
			<img src="./static/search.svg" alt="search icon">
		</div>
		<button aria-label="search">
			<img src="./static/searchBtn.svg" alt="serach btn">
		</button>
		`;
		return this.el;
	}

}