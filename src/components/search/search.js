import { DivComponent } from '../../common/div-component';
import './search.css';

export class Search extends DivComponent {

	constructor(state) {
		super();
		this.state = state;
	}

	search() {
		const val = this.el.querySelector('input').value;
		this.state.serachQuery = val;

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
		this.el.querySelector('button').addEventListener('click', this.search.bind(this));
		this.el.querySelector('input').addEventListener('keydown', (e) => {
			if (e.code === 'Enter') {
				this.search();
			}
		});
		return this.el;
	}

}