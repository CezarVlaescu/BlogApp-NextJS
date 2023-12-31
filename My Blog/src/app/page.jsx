import Menu from "./components/Menu/menu";
import CardList from "./components/cardList/CardList";
import CategoryList from "./components/categoryList/categoryList";
import Featured from "./components/featured/featured";
import styles from "./homepage.module.css";

export default function Home() {
  return( 
  <div className={styles.container}>
    <Featured/>
    <CategoryList/>
    <div className={styles.content}>
      <CardList/>
      <Menu/>
    </div>
  </div>
  );
}
