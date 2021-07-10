const app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: []
};

const onFormSubmit = (e) => {
	e.preventDefault();
	const option = e.target.elements.option.value;
	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		render();
	}
};

const appRoot = document.querySelector('#app');

const render = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			{app.options.length > 0 ? 'Here are you options' : 'No options'}
			<ol>
				{app.options.map((option) => {
					return <li key={option}>{option}</li>;
				})}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" />
				<button>Add Option</button>
			</form>
		</div>
	);

	ReactDOM.render(template, appRoot);
};

render();
