import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar () {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://media-exp1.licdn.com/dms/image/D4D35AQGAs-3CCMPVWA/profile-framedphoto-shrink_200_200/0/1650728867882?e=1661871600&v=beta&t=NcvVQf5v48ngcM69oY61Ezy8Cv51eo_lBG7WVdf5qLs" />

                <strong>Yago Afonso</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}