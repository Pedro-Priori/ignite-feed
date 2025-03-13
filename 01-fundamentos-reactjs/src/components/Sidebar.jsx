import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilLine } from '@phosphor-icons/react'
export function Sidebar(){
    return (
        <aside className={styles.Sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?w=500&auto=format&fit=crop&q=40&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fHww" />



            <div className={styles.profile}>
                <Avatar hasBorder src = 'https://media.licdn.com/dms/image/v2/D4D03AQEAXy4QT3FM8w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699627425714?e=1747267200&v=beta&t=_jwT_MnaYrfXzY4cRCY9Qiaki0frl7-kv0fk1o4tH2k'/>

                <strong>Pedro Priori</strong>
                <span> Developer FullStack JR</span>
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