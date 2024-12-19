import React from 'react'
import { useState } from 'react'
import { useEffect} from 'react'
function Profile({token}) {
    const [profile, setProfile] = useState(null);


    const getProfile = async () =>{
        const result = await fetch("https://api.spotify.com/v1/me", {
            method: "GET", headers: { Authorization: `Bearer ${token}` }
        });
        setProfile(await result.json());
    }
    useEffect(() => {
        getProfile()
        return;
    }, [])
    if (profile == null) {
        return <h1>no work </h1>
    } else {
        let hasProfileImage = true;
        const profileImage = new Image(200, 200)
        if (profile.images[0]) {
            profileImage.src = profile.images[0].url;
        } else {
            hasProfileImage = false;
        }
        return (
        <>
            <h1>hello</h1>
            <h1>Display your Spotify profile data</h1>

            <section id="profile">
                <h2>Logged in as <span id="displayName">{profile.display_name}</span></h2>
                <span id="avatar"></span>
                {hasProfileImage ? <span id="avatar"><img src={profileImage.src}/ ></span> :
                    <span id="avatar">No Profile Image</span>}
                <ul>
                    <li>User ID: <span id="id">{profile.id}</span></li>
                    <li>Email: <span id="email">{profile.email}</span></li>
                    <li>Spotify URI: <a id="uri" href={profile.external_urls.spotify}>{profile.uri}</a></li>
                    <li>Link: <a id="url" href={profile.href}></a>{profile.href}</li>
                    {hasProfileImage ? <li>Profile Image: <span id="imgUrl">{profileImage.src}</span></li> :
                    <li>Profile Image: <span id="imgUrl">No Profile Image</span></li>}
                    
                    <li>Profile Image: <span id="imgUrl"></span></li>
                </ul>
            </section>
        </>
        )
    }
}

export default Profile
