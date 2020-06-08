import React from 'react'
import Section from './section.jsx'

export default function Menu(props) {

    const { menu } = props 

    return(
        <div>
            {menu.map((menuSection) => {
                // console.log(menuSection)
                return(
                    <Section sectionName={menuSection.name} menuItems={menuSection.items} />
                )
            })}
            {/* {console.log(menu)} */}
            
        </div>
    )
}