import { FlexCol } from './Flex'
import { ModalTitle, ModalSubtitle, CardTitle, CardSubtitle } from './Typography'

const ModalCard = ({ title, subtitle }) => {
	return (
		<div className='bg-[#FCFEFE] p-10 rounded-lg shadow-lg'>
			<FlexCol className='!items-start !justify-center !space-y-2'>
				<ModalTitle text={title} />
				<ModalSubtitle text={subtitle} />
			</FlexCol>
		</div>
	)
}

const HeadsCard = ({ title, subtitle, image, mobile }) => {
	const size = mobile ? '!w-[70vw]' : '!w-[15vw]'
	const classes =
		'!items-start !justify-end bg-[#FCFEFE80] border-2 border-[#FFF] rounded-lg !h-[auto] px-4 pt-20 py-6 shadow-xl gap-1 ' +
		size
	return (
		<>
			<FlexCol>
				<img
					src={image}
					alt='asset'
					className='w-[130px] translate-y-16'
				/>
				<FlexCol className={classes}>
					<CardTitle text={title} />
					<CardSubtitle text={subtitle} />
				</FlexCol>
			</FlexCol>
		</>
	)
}

const MembersCard = ({ title, subtitle, image, mobile }) => {
	const size = mobile ? '!w-[70vw]' : '!w-[15vw]'
	const classes =
		'!items-start !justify-end bg-[#FCFEFE80] border-2 border-[#FFF] rounded-lg !h-[auto] px-4 pt-20 py-6 shadow-xl gap-1 ' +
		size
	return (
		<>
			<FlexCol>
				<img
					src={image}
					alt='asset'
					className='w-[130px] translate-y-16'
				/>
				<FlexCol className={classes}>
					<CardTitle text={title} />
					<CardSubtitle text={subtitle} />
				</FlexCol>
			</FlexCol>
		</>
	)
}

export { ModalCard, HeadsCard, MembersCard }
