import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yassine El Yousfi</title>
        <meta name="description" content="Yassine El Yousfi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h2 className={styles.title}>Yassine</h2>
          <h2 className={styles.title}>El Yousfi</h2>
        </div>
        <h3>Full Stack Engineer</h3>
        <div>
          <Link href="https://www.linkedin.com/in/Yassine-ElYousfi/">
            <a>
              <FaLinkedin size="30px" />
            </a>
          </Link>
          &nbsp; &nbsp;
          <Link href="mailto:ye@yassine.co">
            <a>
              <FaEnvelope size="30px" />
            </a>
          </Link>
        </div>
      </main>
      <footer>
        <h4 style={{ textAlign: "center" }}>
          "Simple can be harder than complex…” - Steve Jobs
        </h4>
      </footer>
    </div>
  );
};

export default Home;
