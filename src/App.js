import React from "react";
import Hero from "./Components/Hero";
import styles from "./App.module.css";
import Card from "./Components/Cards";
import posts from "./Components/Posts";
import Headlines from "./Components/Headline_card";

import Nav from "./Components/Nav";

function App() {
  return (
    <>
      <Nav />

      <Hero />
      <Headlines />
      <main className={styles.section}>
        <section className={styles.containerr}>
          <div className={styles.layout}>
            {posts.map((element, index) => (
              <Card
                key={index}
                title={element.title}
                likes={element.likes}
                order={index + 1}
                image={element.image}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
