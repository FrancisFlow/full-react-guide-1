import {Player} from 'video-react';

import "./Editor.css";
const Editor = () => {
    return ( 
        <>
        <div className="editor">

        <h2>World-class Editor</h2>

        <Player
        src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
        />
        </div>
        </>
     );
}
 
export default Editor;