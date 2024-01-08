import React, { Component } from 'react'


interface project {
    name: string,
    description: string,
    link: string

}

const projects: Array<Record<string, string>> = [
    {
        name: "Thesis",
        description: "My thesis is about the impact of the COVID-19 pandemic on the mental health of college students.",
        link: "https://www.google.com"
    },
    {
        name: "Profile",
        description: "This Profile site",
        link: "https://www.google.com"
    },
    {
        name: "Placeholder",
        description: "Lorem ipsum.",
        link: "https://www.google.com"
    }
]

export default class Card extends Component {
    render() {
        return (
            <div className="text-center p-10 outline">
                {projects.map((item) => {
                    return(
                        <h1 className="text-indigo-800 text-5xl py-1">{item.name}</h1>
                    )
                }
    )}
            </div>
        )
    }
}