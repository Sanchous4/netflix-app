import * as MaterialIcons from 'react-icons/md'

import { FC } from '@/types/react'

import { TypeMaterialIconName } from '@/shared/types'

const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
	const Icon = MaterialIcons[name] || <MaterialIcons.MdPolymer />
	return <Icon />
}
export default MaterialIcon
