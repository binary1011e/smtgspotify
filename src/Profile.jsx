import React from 'react'
import { useState } from 'react'
import { useEffect} from 'react'
function Profile({token}) {
    const [profile, setProfile] = useState(null);


    const getProfile = async () =>{
        const result = await fetch("https://api.spotify.com/v1/me/top/tracks", {
            method: "GET", headers: { Authorization: `Bearer ${token}` }
        });
        setProfile(await result.json());
    }
    useEffect(() => {
        getProfile()
        return;
    }, [])
    return (
    <>
        <p>{JSON.stringify(profile)}</p> 
    </>
    )
}

export default Profile
