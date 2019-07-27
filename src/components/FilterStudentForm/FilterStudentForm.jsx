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
	}

	handleSubmit = async (e) => {
		e.preventDefault();
	}

	isFormInvalid() {
		return !(this.state.email && this.state.classYear && this.state.major && this.state.class1);
	}

	render() {
		return (
			<div>
				<header>Find Students to Connect with:</header>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label>Enter your student email address:
							<input type="email" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
						</label>
					</div>
					<div>
						<label>Class of:
							<input type="number" placeholder="Year" value={this.state.classYear} name="classYear" onChange={this.handleChange} />
						</label>
					</div>
					<div>
						<label>Major:
							<input type="text" placeholder="Major" value={this.state.major} name="major" onChange={this.handleChange} />
						</label>
					</div>
					<div>
						<label>Class 1:
							<input type="text" value={this.state.class1} name="class1" onChange={this.handleChange} />
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
