import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
export function Post(){
    return (
        <article className={styles.Post}>
            <header>
                <div className= {styles.author}>
                    <Avatar hasBorder  src="https://media.licdn.com/dms/image/v2/D4D03AQEAXy4QT3FM8w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699627425714?e=1747267200&v=beta&t=_jwT_MnaYrfXzY4cRCY9Qiaki0frl7-kv0fk1o4tH2k" />
                    <div className = {styles.authorInfo}>
                        <strong>Pedro Priori</strong>
                        <span>Developer FullStack JR</span>
                    </div>    
                </div>

                <time title="10 de março de 2025 as 21 e 24" dateTime="2025-03-10  21:24:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>    
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href='#'> jane.design/doctorcare</a></p>
                <p>
                    <a href='#'>#novoprojeto</a>{' '}
                    <a href="">#nlw </a>{''}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                
                <strong>Deixe seu Feedback</strong>
                
                <textarea
                placeholder="Deixe um comentário" 
                />

                
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    );
}