import React from 'react';

const Hero = ({ heroes }) => {
    const heroList = heroes.map(hero => {
        if (hero.age > 20) {
            return ( <
                div className = "hero"
                key = { hero.id } >
                <
                p > -- --  -- -- -- -- -- -- -- -- - < /p> <
                div > Name: { hero.name } < /div> <
                div > Age: { hero.age } < /div> <
                div > Belt: { hero.belt } < /div> < /
                div >
            )
        } else {
            return null
        }
    })

    return ( <
        div className = "hero-list" > { heroList } <
        /div>
    )

}

export default Hero;