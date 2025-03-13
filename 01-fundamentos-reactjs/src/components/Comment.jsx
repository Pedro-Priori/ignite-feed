import { Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { ThumbsUp } from '@phosphor-icons/react/dist/ssr'
import { Avatar } from './Avatar'

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder ={false} src="https://media.licdn.com/dms/image/v2/D4D03AQEAXy4QT3FM8w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699627425714?e=1747267200&v=beta&t=_jwT_MnaYrfXzY4cRCY9Qiaki0frl7-kv0fk1o4tH2k" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                        <strong>Pedro Priori</strong>
                        <time title="10 de março de 2025 as 21 e 24" dateTime="2025-03-10  21:24:30">Cerca de 1h atrás </time>
                        </div>
                        <button title='deletar comentario'> 
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>
                    Muito bom Devon, parabéns!! 👏👏
                    </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}