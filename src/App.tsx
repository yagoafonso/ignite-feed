import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

interface Author {
  name: string
  role: string
  avatarUrl: string
}

interface Content {
  type: 'paragraph' | 'link'
  content: string
}

export interface PostProps {
  id: number
  author: Author
  publishedAt: Date
  content: Content[]
}


const posts:PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/yagoafonso.png',
      name: 'Yago Afonso',
      role: 'Web developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋', },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite Trilha ReactJS, na Rocketseat. O nome do projeto é IgniteFeed. 🚀', },
      {type: 'link', content: 'github.com/yagoafonso' },      
    ],
    publishedAt: new Date('2022-08-20 09:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      {type: 'paragraph', content:'Fala dev 👋'},
      {type: 'paragraph', content:'Embarque na missão rumo ao seu próximo nível na programação Desenvolva um projeto inédito do universo dos games, aprenda novas habilidades e tecnologias e acelere sua carreira como dev.'},
      {type: 'link', content:'https://lp.rocketseat.com.br/nlw'},      
    ],
    publishedAt: new Date('2022-08-25 09:00:00')
  },
];


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id} 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>

  );
}


