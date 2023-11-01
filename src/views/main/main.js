import { AbstractView } from '../../common/view';

export class MainView extends AbstractView {

	constructor() {
		super();
		this.setTitle('search book');
	}

	render() {
		const main = document.createElement('div');
		main.innerHTML = 'test';
		this.app.innerHTML = '';
		this.app.append(main);
	}

}