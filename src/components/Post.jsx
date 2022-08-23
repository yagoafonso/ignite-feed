import { Coment } from './Comment';
import styles from './Post.module.css';

export function Post () {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img
                        className={styles.avatar} 
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                    />
                    <div className={styles.authorInfo}>
                        <strong>Jane Cooper</strong>
                        <span>Dev Front-End</span>
                    </div>
                </div>

                <time title="23 de Agosto às 13:31" dateTime="2022-08-23 13:29">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href=""> jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href=""> #nlw </a>{' '}
                    <a href=""> #rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                <Coment />
                <Coment />
                <Coment />
            </div>

        </article>
    );
}