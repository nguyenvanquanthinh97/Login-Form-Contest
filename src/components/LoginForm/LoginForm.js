import React from 'react';
import { Field, reduxForm } from 'redux-form';

import CustomField from '../CustomField';

const validate = (values) => {
	const errors = {};
	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}
	if (!values.password) {
		errors.password = 'Required';
	}
	return errors;
};

const LoginForm = (props) => {
	const { handleSubmit, pristine, submitting, valid } = props;
	const onSubmit = function(input) {
		alert('email: ' + input.email + '   ' + 'password: ' + input.password);
	};
	return (
		<div style={{ display: 'table', height: '100vh', width: '100%' }}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="ui form error"
				style={{ display: 'table-cell', verticalAlign: 'middle' }}
			>
				<img class="ui medium circular image" src="/door.jpeg" style={{ margin: 'auto' }} />
				<div className="field">
					<Field name="email" component={CustomField} type="text" placeholder="EMAIL" label="EMAIL: " />
				</div>
				<div className="field">
					<Field
						name="password"
						component={CustomField}
						type="password"
						placeholder="PASSWORD"
						label="PASSWORD:"
					/>
				</div>
				<button
					className="ui primary button text-center"
					style={{ display: 'block', margin: 'auto' }}
					type="submit"
					disabled={pristine || submitting || !valid}
				>
					SUBMIT
				</button>
			</form>
		</div>
	);
};

export default reduxForm({
	form: 'loginForm',
	validate
})(LoginForm);
