import React, { Fragment ,useState} from "react";
import Header from "../components/Header";
import styles from '../styles/Blog.module.css'
import Link from "next/link";
const Blogs = (props) => {
  
  const [blogs, setblogs] = useState(props.arr);
  
 
  return (
    <Fragment>
      <Header title={"Blogs"} />
      <center>
        <div className="container">
          <h3>Blogs </h3>
          <div className={styles.blogItems}>
            {blogs.map((item)=>{
              return (  <div key={item.name} className={styles.blogItem}>
                <Link href={"blogpost/"+item.href}>
                  <h5>{item.name}</h5>
                </Link>
  
              </div>)
            })}
          

           
          </div>
        </div>
      </center>
    </Fragment>
  );
};
export async function getServerSideProps(context) {
  let arr=[
    {href:"my-frist-blog",name:"my Frist Blog"},
    {href:"my-second-blog",name:"my Second Blog"},
    {href:"my-third-blog",name:"my Third Blog"}
  ]
  return {
    props: {arr}, // will be passed to the page component as props
  }
}

export default Blogs;
