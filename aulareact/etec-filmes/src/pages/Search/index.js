import styles from "./Search.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Container from "../../components/Container";
import SearchVL from "../../components/SearchVL";
import videos from "../../json/videos.json";


function Search(){

    return(

        <>

        <Header/>

        <Container>

          <section className ={styles.search}>

              <h2>Pesquisar</h2>

              <SearchVL videos={videos}></SearchVL>

          </section>


        </Container>
        
           
        <Footer/>

      </>
        
    );

}

export default Search;