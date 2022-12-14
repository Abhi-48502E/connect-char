import React from 'react'
import Chat from '../Components/Chat'
import SideBar from '../Components/SideBar'


function Home() {
    return (
        <div className='home'>
            <div className="container">
                <SideBar />
                <Chat />
            </div>
        </div>
    )
}

export default Home