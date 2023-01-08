import { Fragment, FunctionComponent } from 'react'

import { ITextSeparator } from './TextSeparator.interface'

const TextSeparator: FunctionComponent<ITextSeparator> = ({
	children,
	separator,
	className,
	classNameSeparator,
}) => {
	return (
		<span className={className}>
			{children.split(separator).map((element, index, arr) => (
				<Fragment key={index}>
					{element}
					{index + 1 !== arr.length && (
						<span className={classNameSeparator}>{separator}</span>
					)}
				</Fragment>
			))}
		</span>
	)
}
export default TextSeparator
