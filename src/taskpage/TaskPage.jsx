import React from "react";
import { useState, useRef, useEffect } from "react";
import axios from 'axios'

function TaskPage() {
    

    const [vidlinks, setVidlink] = useState('');
    const [renderCount, setRenderCount] = useState(0)
    const [videoDetails, setVideoDetails] = useState('')
    const apiKey = 'AIzaSyBfkSP-wRQTfNikOPwHWHCS2qLbsb2AadQ'
    // useEffect (()=>{
    //     setRenderCount(renderCount+1)
    // })
   
   function stateChange(){
     alert(vidlinks)
   }
   function change(event){
    const newValue = event.target.value;
    setVidlink(newValue)
    
   }
   const fetchVideoDetails = async (id) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${apiKey}&part=snippet`
      );
      setVideoDetails(response.data);
      console.log(videoDetails)
    } catch (error) {
      console.error('Error fetching video details:', error);
    }
  };
   fetchVideoDetails();
    return (
        <div>
            <p>I counted {renderCount} times</p>
            <div>
                <div>
                    <p className="text-[30px] font-bold">💁Youtube Transcription</p>

                </div>
                <div className="flex flex-wrap space-x-3">
                    <form>
                        <div>
                            <input type="text" onChange={change}  value={vidlinks}  className="border-[3px] pr-[5px] py-[10px] w-[260px] rounded-lg" />
                            
                            <p></p>
                        </div>
                       
                    </form>
                   
                
                </div>
            </div>
            <div>
                        <p>The Link You Pasted is <b>{vidlinks}</b></p>
                    </div>
            <div>
                <div>
                    <div>
                    
                    
                    <iframe width="360"
                        height="215"
                        src={vidlinks}
                        title="YouTube video player"
                        allowFullScreen
                        ></iframe>
                    </div>
                   
                </div>
                <div>
                    <p>Link Details</p>
                    <textarea name="" id=""></textarea>
                    <button></button>
                    <div>
                            <button onClick={stateChange} className="bg-[#9705EA] text-white px-[15px] py-[10px] rounded-sm" >
                                Transcribe
                            </button>
                        </div>
                </div>


            </div>
        </div>
    )

}

export default TaskPage;