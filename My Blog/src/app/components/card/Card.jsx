import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href="/">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eos
          numquam adipisci sunt distinctio? Voluptatibus qui culpa at esse, sunt
          doloremque non excepturi quod quidem obcaecati, blanditiis quasi
          beatae rem?
        </p>
        <Link href="/" className={styles.link}>Read more</Link>
      </div>
    </div>
  );
};

export default Card;
