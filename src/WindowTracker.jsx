import React from "react"

export default function WindowTracker() {
    
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = React.useState(window.innerHeight)
    
    React.useEffect(() => {
        window.addEventListener("resize", function() {
            setWindowWidth(window.innerWidth)
            setWindowHeight(window.innerHeight)
        })
    }, [])
    
    return (
        <>
        <h1>Window width: {windowWidth}</h1>
        <h1>Window height: {windowHeight}</h1>
        </>
    )
}
