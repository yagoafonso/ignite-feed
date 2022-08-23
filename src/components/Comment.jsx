import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Coment () {
    return (
        <div className={styles.comment}>
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />


            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Devon Lane</strong>
                            <time title="23 de Agosto às 13:31" dateTime="2022-08-23 13:29">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash  size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>                    
                </footer>
            </div>
        </div>
    );
}