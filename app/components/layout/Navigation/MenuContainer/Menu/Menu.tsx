import { FC } from '@/types/react'

import { MenuItem } from '../MenuItem'
import { AuthItems } from '../auth'

import { IMenu } from './Menu.interface'
import styles from './Menu.module.scss'

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul className={styles.ul}>
				{title !== 'General' ? (
					items.map((item) => <MenuItem item={item} key={item.link} />)
				) : (
					<AuthItems />
				)}
			</ul>
		</div>
	)
}
export default Menu
