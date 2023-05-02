import React from 'react'
import {
    FlexCol,
    DescriptionTitle,
    DescriptionFor,
    FlexRow,
    DescriptionSubtitle,
    DescriptionPara,
} from '../utilities/exports'


const JobTitle = ({ data, mobile }) => {
	return (
		<>
			<FlexRow className='!justify-between'>
				<DescriptionTitle
					text='Job Description'
					mobile={mobile}
				/>
				<DescriptionFor
					text={data?.for}
					mobile={mobile}
				/>
			</FlexRow>
		</>
	)
}

const JobPara = ({ data, mobile, keyname, title }) => {
	return (
		<>
			<FlexCol className='!items-start !gap-1'>
				<DescriptionSubtitle
					text={title}
					mobile={mobile}
				/>
				<DescriptionPara
					text={data?.[keyname]}
					mobile={mobile}
				/>
			</FlexCol>
		</>
	)
}

const JobList = ({ data, mobile, keyname, title }) => {
	return (
		<>
			<FlexCol className='!items-start'>
				<DescriptionSubtitle
					text={title}
					mobile={mobile}
				/>
				<ol className='!list-decimal !pl-6'>
					{data?.[keyname].map((item, index) => (
						<li key={index}>
							<DescriptionPara
								text={item}
								mobile={mobile}
							/>
						</li>
					))}
				</ol>
			</FlexCol>
		</>
	)
}

const JobOpenings = ({ data, mobile, route }) => {
	const gap = !mobile ? ['!gap-8', '!gap-3'] : ['!gap-6', '!gap-2']
	return (
		<>
			<FlexCol className='!items-start'>
				<DescriptionSubtitle
					text='No. of Openings'
					mobile={mobile}
				/>
				{route === 'heads' ? (
					<>
						<FlexRow className={`!justify-start !items-start ${gap[0]}`}>
							<DescriptionPara
								text={`${data?.title} : `}
								mobile={mobile}
							/>
							<DescriptionPara
								text={`${data?.openings[0]}`}
								mobile={mobile}
							/>
						</FlexRow>
						<FlexRow className={`!justify-start !items-start ${gap[1]}`}>
							<DescriptionPara
								text={`Jt ${data?.title} : `}
								mobile={mobile}
							/>
							<DescriptionPara
								text={`${data?.openings[0]}`}
								mobile={mobile}
							/>
						</FlexRow>
					</>
				) : (
					<DescriptionPara
						text={data?.openings}
						mobile={mobile}
					/>
				)}
			</FlexCol>
		</>
	)
}

export {
    JobTitle,
    JobPara,
    JobList,
    JobOpenings,
}