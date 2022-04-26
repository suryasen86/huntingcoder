import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
export default function Home() {
  let imgSrc='https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  return (
    <div  >
   
      <Header title={"Home"} />
      <div><center> <h1>my Blogs</h1></center></div>
      <div className="container d-flex">
     
        <Image className={styles.mainLogo} alt='Main Logo'   src={imgSrc} height={300} width={300} >

        </Image>
 
       
      </div>
    </div>
  )
}
