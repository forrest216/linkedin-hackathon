import React, { Component } from 'react';

class FilterStudentForm extends Component {

	state = {
		email: '',
		classYear: '',
		major: '',
		class1: '',
		class2: '',
		class3: '',
		class4: ''
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		let classYear = this.state.classYear;
		let major = this.state.major.replace(' ', '+');
		let email = this.state.email.replace('@', "%40");
		let class1 = this.state.class1.replace(' ', '+');
		let class2 = this.state.class2.replace(' ', '+');
		let class3 = this.state.class3.replace(' ', '+');
		let class4 = this.state.class4.replace(' ', '+');

		let results = await fetch(
			`/users?email=${email}&major=${major}&classYear=${classYear}&class1=${class1}&class2=${class2}&class3=${class3}&class4=${class4}`, 
			{method: 'GET'})
			.then(res => res.json());

		this.props.updateResults(results);
		this.props.history.push('/results');
	}

	isFormInvalid() {
		return !(this.state.email && this.state.major && this.state.class1);
	}

	render() {
		return (
			<div>
				<header>Find Students to Connect with:</header>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label>Enter your student email address:
							<input type="email" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} required/>
						</label>
					</div>
					<div>
						<label>Class of:
							<input type="number" placeholder="Year" value={this.state.classYear} name="classYear" onChange={this.handleChange} />
						</label>
					</div>
					<div>
						<label>Major:
							<input type="text" placeholder="Major" value={this.state.major} name="major" onChange={this.handleChange} required/>
						</label>
					</div>
					<div>
						<label>Class 1:
							<input type="text" value={this.state.class1} name="class1" onChange={this.handleChange} required/>
						</label>
					</div>
					<div>
						<label>Class 2:
							<input type="text" value={this.state.class2} name="class2" onChange={this.handleChange} />
						</label>
					</div>
					<div>
						<label>Class 3:
							<input type="text" value={this.state.class3} name="class3" onChange={this.handleChange} />
						</label>
					</div>
					<div>
						<label>Class 4:
							<input type="text" value={this.state.class4} name="class4" onChange={this.handleChange} />
						</label>
					</div>
					<div>
						<button disabled={this.isFormInvalid()}>Find Connections</button>
					</div>
				</form>
			</div>
		);
	}
}

export default FilterStudentForm;
