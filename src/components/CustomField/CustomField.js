import React from 'react';

const CustomField = ({ input, meta, placeholder, type, label }) => {
	return (
		<div className={`field ${meta.touched && meta.error ? 'error' : ''}`}>
			<label>{label}</label>
			<input {...input} placeholder={placeholder} type={type} />
			<div style={{color: 'red'}}>{meta.touched && meta.error}</div>
		</div>
	);
};

export default CustomField;
