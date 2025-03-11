
import { Header } from './components/header';
import {Post}  from './components/Post';
import { Sidebar } from './components/sidebar';

import styles from './app.module.css';

import './Global.css';


export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <aside>
          <Sidebar/>
        </aside>
        <main>
          <Post/>
          <Post/>
        </main>
      </div>
    </div>
  )
}
