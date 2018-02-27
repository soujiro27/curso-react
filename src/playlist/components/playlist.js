import React from 'react';
import Media from './media'
function Playlist (props) {
    const albums = props.data.topalbums.album
    return (
        <div className="Media-container">
            {
                albums.map((item)=>{
                    
                    return <Media 
                                title={item.name} 
                                author={item.artist.name} 
                                image={item.image[2]['#text']}
                                key={item.playcount} 
                            
                            />
                
                })
            }
        </div>
    )

}

export default Playlist;