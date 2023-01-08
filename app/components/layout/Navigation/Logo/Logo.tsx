import Image from 'next/image'
import Link from 'next/link'

import { FC } from '@/types/react'

import logoImage from '@/assets/images/logo.svg'

import { TextSeparator } from '@/components/ui/TextSeparator'

import styles from './Logo.module.scss'

const Logo: FC = () => {
	return (
		<Link href="/" className={styles.link}>
			<Image
				className={styles.image}
				src={logoImage}
				alt="Online cinema"
				draggable={false}
			/>
			<TextSeparator separator="." classNameSeparator="text-primary" className={styles.text}>
				{'CINEMA.RU'}
			</TextSeparator>
		</Link>
	)
}
export default Logo
