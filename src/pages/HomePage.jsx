import React from 'react';
import SearchField from "react-search-field";
import Image from "react-bootstrap/Image"

import Hero from "../components/Hero";
import SoundOfTheDay from "../images/soundOfTheDay.png"

function HomePage(props) {

    return(
        <div>
        <Hero id="hereOnHomePage" title={props.title} subTitle={props.subTitle} />
        <SearchField
            placeholder="Search..."
            searchText="Search for Rainforest Sounds!"
            classNames="searchBarHomePage"
        />

        <div class="container threeColumn">
            <div class="row">
                <div class="col-sm">
                There are<mark className="red">565</mark>users currently online 
                </div>
                <div class="col-sm">
                There are<mark className="red">120,146</mark>sounds uploaded 
                </div>
                <div class="col-sm">
                Sounds have been downloaded<mark className="red">2,123,046</mark>times
                </div>
            </div>
        </div>
        
        <div class="container twoColumm">
            <div class="row">
                <div class="col-sm twoColummItem">
                    <u>Random Sound of the Day</u>
                    <Image id="soundOfTheDayPng" src={SoundOfTheDay} rounded className="mx-auto" />
                </div>
                <div class="col-sm twoColummItem">
                    <u>FreeSound Blog</u>
                    <div id="blogHeader">Blog Post Example</div>
                    <div id="blogNotHeader">Octover 5th, 2020  by user.name</div>
                    <div id="blogText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummytext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum … [READ MORE]</div>
                </div>
            </div>
        </div>


    </div>
    )
} 

export default HomePage;