import { useState } from "react";
import VideoList from "../VideoList";
import styles from "./SearchVL.module.css"


function filterVideos({videos, searchText}){

    return videos.filter( (video) => video.category.includes(searchText) || 
    video.title.includes(searchText) )

}

function SearchVL({videos}){

    const [searchText, setSearchText] = useState('')  
    const foundVideos = filterVideos({videos, searchText})


    return(

        <section className={styles.container}>

            <input 
            type="search" 
            placeholder="Pesquisar..." 
            value = {searchText} 
            onChange = {e => setSearchText(e.target.value )}
            >
            </input>

            <VideoList 
                videos={foundVideos}
                emptyHeading={`Sem Videos sobre ${searchText}`}
            >

                </VideoList>

        </section>


    );

}

export default SearchVL;