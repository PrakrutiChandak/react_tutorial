import React from 'react';

const Hero = ({ heroes, deleteHero }) => {
    const heroList = heroes.map(hero => {
        if (hero.age > 20) {
            return (
                <div className="hero" key={hero.id}>
                    <p> -- --  -- -- -- -- -- -- -- -- - </p>
                    <div> Name: {hero.name} </div>
                    <div> Age: {hero.age} </div>
                    <div> Belt: {hero.belt} </div>

                    <button onClick={() => {deleteHero(hero.id)}}>Delete Hero</button>
                </div>
            )
        } else {
            return null
        }
    })

    return (<
        div className="hero-list" > {heroList} <
        /div>
    )

}

export default Hero;