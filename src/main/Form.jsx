import React, { useState } from 'react';
import { DescriptionTitle, CardContainer, FlexCol, TextInput, SelectInput, Button } from '../utilities/exports';
import formdata from '../data/form/form.json';

const Form = ({ mobile }) => {
	const initialData = {
		username: '',
		email: '',
		roll: '',
		phone: '',
		linkedin: '',
		branch: '',
		year: '',
		preference1: '',
		preference2: '',
		preference3: '',
		q1: '',
		q2: '',
	};

	const [data, setData] = useState(initialData);

	const updateData = (key, value) => {
		setData((prev) => {
			return { ...prev, [key]: value };
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(data);
		setData(initialData);
	};

	return (
		<>
			<CardContainer
				form={true}
				className={mobile ? '!px-8' : ''}
				mobile={mobile}
			>
				<DescriptionTitle
					text='Application Form'
					mobile={mobile}
				/>
				<FlexCol className='!gap-6 !w-full'>
					<TextInput
						label='Full Name'
						onData={(value) => {
							updateData('username', value);
						}}
						display={data?.username}
					/>
					<TextInput label='Somaiya Email' />
					<TextInput label='Roll Number' />
					<TextInput label='Phone Number' />
					<TextInput label='LinkedIn Profile' />
					<SelectInput
						label='Branch'
						menu={formdata?.branch}
						onData={(value) => {
							updateData('branch', value);
						}}
						display={data?.branch}
					/>
					<SelectInput
						label='Graduation Year'
						menu={formdata?.year}
					/>
					<SelectInput
						label='Preference 1'
						menu={formdata?.preference[2025]}
					/>
					<SelectInput
						label='Preference 2'
						menu={formdata?.preference[2025]}
					/>
					<SelectInput
						label='Preference 3'
						menu={formdata?.preference[2025]}
					/>
					<TextInput label='Resume Drive Link' />
					<TextInput
						label='Why do you want to be a part of the CSI-KJSCE?'
						placeholder={mobile ? 'Why do you want to be a part of the CSI-KJSCE?' : null}
						rows='4'
					/>
					<TextInput
						label='What makes you a strong candidate for the CSI-KJSCE?'
						placeholder={mobile ? 'What makes you a strong candidate for the CSI-KJSCE?' : null}
						rows='4'
					/>
					<Button
						text='Submit Application'
						className='!px-6 !mt-10'
						onClick={handleSubmit}
						mobile={true}
					/>
				</FlexCol>
			</CardContainer>
		</>
	);
};

export default Form;
