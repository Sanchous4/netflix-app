import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { FC } from '@/types/react'

import { MaterialIcon } from '@/components/ui/MaterialIcon'

import { IMenuItem } from './MenuItem.interface'
import styles from './MenuItem.module.scss'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()
	return (
		<li
			className={cn(styles.li, {
				[styles.active]: asPath === item.link,
			})}
		>
			<Link href={item.link} className={styles.link}>
				<MaterialIcon name={item.icon} />
				<span>{item.title}</span>
			</Link>
		</li>
	)
}
export default MenuItem
