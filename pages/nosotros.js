import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/nosotros.module.css'


function Nosotros() {
	return (
	<Layout
		title={'Nosotros'}
		description={'Sobre nosotros, guitarLA, tienda de musica'}
	>
		<main className='contenedor'>
			<h1 className='heading'>Nosotros</h1>

			<div className={styles.contenido}>
				<Image src="/img/nosotros.jpg" width={1000} height={800} alt='Imagen sobre nosotros' />
				<div>
					<p>Praesent mollis, libero in blandit dignissim, arcu porttitor, Pellentesque ultricies eleifend est, et imperdiet elit molestie ac. Maecenas quis risus sed elit lacinia sagittis. Donec lacinia lacus quis velit facilisis, id pretium nunc dignissim. Ut venenatis, nisl sit amet dapibus tempus, libero urna iaculis augue, viverra laoreet nisl libero sed augue. Pellentesque vestibulum venenatis quam, sit amet dictum leo convallis nec. Duis sollicitudin volutpat velit. Phasellus quis laoreet arcu, ac efficitur lorem. Maecenas vestibulum tellus non nibh hendrerit sagittis luctus nec ex.</p>
					<p>Proin tincidunt nisi non varius tincidunt.posuere cubilia curae; posuere cubilia curae; Etiam eleifend risus sed tellus fringilla, eu porta tortor venenatis. Quisque odio magna, posuere in bibendum vitae, ultrices ac nunc.</p>
				</div>
			</div>
		</main>
	</Layout>
	
  )
}

export default Nosotros