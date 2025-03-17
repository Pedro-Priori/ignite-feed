
import { Header } from './components/header';
import {Post}  from './components/Post';
import { Sidebar } from './components/sidebar';

import styles from './app.module.css';

import './Global.css';

const posts = [{
  id: 1, 
  author:{
    avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQEAXy4QT3FM8w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699627425714?e=1747267200&v=beta&t=_jwT_MnaYrfXzY4cRCY9Qiaki0frl7-kv0fk1o4tH2k",
    name: "Pedro Priori",
    role: "Developer FullStack JR"
  },
  content: [
    {type: "paragraph", content: "Fala galeraa 👋", },
    {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
    {type: "link", content:"jane.design/doctorcare"}
  ],
  publishedAt: new Date('2025-03-13 23:00:00')
},

  {id:2, 
  author:{
    avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQF2eP3hc2DuFg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710771739127?e=1747267200&v=beta&t=kv0E5yRgbUYlLSKNgeRqVxx349jRJG0YHEGuTbtvDsQ",
    name: "Maria Eugenia", 
    role: "assistente de dados amarante"
  },
  content: [
    {type: "paragraph", content: "Fala galeraa 👋", },
    {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
    {type: "link", content:"jane.design/doctorcare"}
  ],
  publishedAt: new Date('2025-03-13 20:10:00')
}
];

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <aside>
          <Sidebar/>
        </aside>
        <main>
          {posts.map(post =>{
            return (
              <Post
                key={post.id}
                author= {post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
