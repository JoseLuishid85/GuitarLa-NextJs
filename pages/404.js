import React from 'react'
import Layout from '../components/layout'
import Link from 'next/link'
import styles from '../styles/guitarras.module.css'

function Pagina404() {
  return (
    <Layout
        title='Pagina no encontrada'
    >
        <p className='error'>Pagina no encontrada</p>
        <Link href="/" className={styles.error_enlace} >
            Ir al Inicio
        </Link>
    </Layout>
  )
}

export default Pagina404