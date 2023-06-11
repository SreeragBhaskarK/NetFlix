import React from 'react'
import Banner from '../../Components/Home/Banner/Banner'
import RowPost from '../../Components/Home/RowPost/RowPost'
import { action, adventure, animation, comady, crime, documentary, family, fantasy, history, horror, music, mystery, orginals, romance, scienceFiction, tending, thriller, tvMovie, war, western } from '../../urls'
function Home() {
    return (
        <div>
        {/*     //Home page banner */}
            <Banner url={tending} />
            {/* //TV */}
            <RowPost keyVal={0} url={orginals} title="Netflix Orginals" />
            {/* // Movie */}
            <RowPost keyVal={1} url={action} title="Action" isSmall />
            <RowPost keyVal={2} url={adventure} title="Adventure" isSmall />
            <RowPost keyVal={2} url={animation} title="Animation" isSmall />
            <RowPost keyVal={3} url={comady} title="Comady" isSmall />
            <RowPost keyVal={4} url={crime} title="Crime" isSmall />
            <RowPost keyVal={5} url={documentary} title="Documentary" isSmall />
            <RowPost keyVal={6} url={family} title="Family" isSmall />
            <RowPost keyVal={7} url={fantasy} title="Fantasy" isSmall />
            <RowPost keyVal={8} url={history} title="History" isSmall />
            <RowPost keyVal={9} url={horror} title="Horror" isSmall />
            <RowPost keyVal={10} url={music} title="Music" isSmall />
            <RowPost keyVal={11} url={mystery} title="Mystery" isSmall />
            <RowPost keyVal={12} url={romance} title="Romance" isSmall />
            <RowPost keyVal={13} url={scienceFiction} title="Science Fiction" isSmall />
            <RowPost keyVal={14} url={tending} title="Tending" isSmall />
            <RowPost keyVal={15} url={thriller} title="Thriller" isSmall />
            <RowPost keyVal={16} url={tvMovie} title="TV Movie" isSmall />
            <RowPost keyVal={17} url={war} title="War" isSmall />
            <RowPost keyVal={18} url={western} title="Western" isSmall />
        </div>
    )
}

export default Home