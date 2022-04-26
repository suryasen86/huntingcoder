import React,{Fragment} from "react";
import Header from "../components/Header";
import styles from '../styles/Blog.module.css'
import Link from "next/link";
const Blogs = () => {
  return (
    <Fragment>
      <Header title={"Blogs"} />
     <center>
     <div className="container">
            <h3>Blogs </h3>
            <div className={styles.blogItems}>
                <div className={styles.blogItem}>
                    <Link href="/blogpost/my-frist-blog">
                    <h5>my Frist Blog</h5>
                    </Link>
                           
                </div>

                <div className={styles.blogItem}>
                <Link href="/blogpost/my-second-blog">
                            <h5>my Second Blog</h5>
                            </Link>
                </div>
                <div className={styles.blogItem}>
                <Link href="/blogpost/my-third-blog">
                            <h5>my Third Blog</h5>
                            </Link>
                </div>
            </div>
        </div>
     </center>
    </Fragment>
  );
};

export default Blogs;
