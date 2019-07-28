import React, { Component } from 'react';
import mahtab from '../../images/Mahtab.jpeg';

const majors = ["English Literature", "Mathematics", "Electrical Engineering", "Computer Science", "Statistics", "Psychology", "Philosophy", "History", "Political Science", "English", "Accounting", "Advertising", "Architecture", "Biology", "Biophysics", "Chemistry", "Chemical Engineering", "Theater", "Women's Studies", "Telecommunications", "Sociology", "Religious Studies", "Physics", "Nutrition", "Microbiology", "Nuclear Engineering", "Music Education", "Marine Biology", "Industrial Engineering", "Journalism", "Meteorology", "Marketing", "Food Science", "Forest Science", "Geography", "Finance", "Earth Sciences", "Civil Engineering", "Dance", "Environmental Sciences"]
const class_names = ["English Literature 101", "English Literature 102", "English Literature 103", "Mathematics 101", "Mathematics 102", "Mathematics 103", "Electrical Engineering 101", "Electrical Engineering 102", "Electrical Engineering 103", "Computer Science", "Statistics 101", "Statistics 102", "Statistics 103", "Psychology 101", "Psychology 102", "Psychology 103", "Philosophy 101", "Philosophy 102", "Philosophy 103", "History 101", "History 102", "History 103", "Political Science 101", "Political Science 102", "Political Science 103", "English 101", "English 102", "English 103", "Accounting 101", "Accounting 102", "Accounting 103", "Advertising 101", "Advertising 102", "Advertising 103", "Architecture 101", "Architecture 102", "Architecture 103", "Biology 101", "Biology 102", "Biology 103", "Biophysics 101", "Biophysics 102", "Biophysics 103", "Chemistry 101", "Chemistry 102", "Chemistry 103", "Chemical Engineering 101", "Chemical Engineering 102", "Chemical Engineering 103", "Theater 101", "Theater 102", "Theater 103", "Women's Studies 101", "Women's Studies 102", "Women's Studies 103", "Telecommunications 101", "Telecommunications 102", "Telecommunications 103", "Sociology 101", "Sociology 102", "Sociology 103", "Religious Studies 101", "Religious Studies 102", "Religious Studies 103", "Physics 101", "Physics 102", "Physics 103", "Nutrition 101", "Nutrition 102", "Nutrition 103", "Microbiology 101", "Microbiology 102", "Microbiology 103", "Nuclear Engineering 101", "Nuclear Engineering 102", "Nuclear Engineering 103", "Music Education 101", "Music Education 102", "Music Education 103", "Marine Biology 101", "Marine Biology 102", "Marine Biology 103", "Industrial Engineering 101", "Industrial Engineering 102", "Industrial Engineering 103", "Journalism 101", "Journalism 102", "Journalism 103", "Meteorology 101", "Meteorology 102", "Meteorology 103", "Marketing 101", "Marketing 102", "Marketing 103", "Food Science 101", "Food Science 102", "Food Science 103", "Forest Science 101", "Forest Science 102", "Forest Science 103", "Geography 101", "Geography 102", "Geography 103", "Finance 101", "Finance 102", "Finance 103", "Earth Sciences 101", "Earth Sciences 102", "Earth Sciences 103", "Civil Engineering 101", "Civil Engineering 102", "Civil Engineering 103", "Dance 101", "Dance 102", "Dance 103", "Environmental Sciences 101", "Environmental Sciences 102", "Environmental Sciences 103"]


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
			<div className="flex-container">			
				<div className="hero col-1-2">
					<h1> Welcome to Bridge</h1>
					<p>Connect to people</p>
					<p>Learn from classmates</p>
					<p>Collaborate with students from other fields</p>
				</div>
				<div className="form col-1-2">
					<ul>
						<form onSubmit={this.handleSubmit}>
							<li>
								<label htmlFor="emailBox">Your Student Email</label>
								<input 
									id="emailBox" 
									name="email" 
									type="text" 
									placeholder="example@cca.edu" 
									value={this.state.email}
									onChange={this.handleChange} 
									required
								/>
							</li>
							<li>
								<label htmlFor="classYear">Class of</label>
								<input 
									id="classYear"
									type="number" 
									placeholder="Year" 
									value={this.state.classYear} 
									name="classYear" 
									onChange={this.handleChange} 
								/>
							</li>
							<li>
								<label htmlFor="majorBox">Major</label>
								<input 
									id="majorBox" 
									name="major" 
									type="text" 
									placeholder="Political Sciences" 
									value={this.state.major}
									onChange={this.handleChange} 
									required
								/>
							</li>
							<li>
								<label htmlFor="classBox">Classes</label>
								<div id="classBox" className="class-cols flex-container">
									<div className="class-col-l col-1-2">
										<input 
											id="classBox1" 
											name="class" 
											type="text" 
											placeholder="Statistics 101"/>
										<input 
											id="classBox2" 
											name="class" 
											type="text" 
											placeholder="English 102"/>
									</div>
									<div className="class-col-r col-1-2">
										<input 
											id="classBox3" 
											name="class" 
											type="text" 
											placeholder="Electrical Engineering 103"/>
										<input 
											id="classBox4" 
											name="class" 
											type="text" 
											placeholder="Statistics 101"/>
									</div>
								</div>
							</li>
							<li className="formButton">
								<button id="findStudents" disabled={this.isFormInvalid()}>
									<span className="buttonLabel">Find Students</span>
								</button>
							</li>
						</form>
					</ul>
				</div>
			</div>


		);
	}
}

export default FilterStudentForm;

{/* <img src={mahtab} alt="user_pic" height='100px' width='100px'/> 

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
				
												<div className="dropdown">
									<ul>
										<li>Economics 101</li>
										<li>English 101</li>
										<li>Sociology 101</li>
									</ul>
								</div>
				*/}
