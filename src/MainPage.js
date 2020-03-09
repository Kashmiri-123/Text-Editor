import React from 'react';
import './App.css';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import ImageTool from '@editorjs/image';

import * as firebase from 'firebase';
import './firestore';


function MainPage() {

    const editor = new EditorJS({
        holderId : 'editor.js',
    
        tools : {
            header : {
                class : Header,
                inlineToolbar : ['link']
            },
    
            list : {
                class : List,
                inlineToolbar : true
            },
    
            embed : {
                class : Embed,
                inlineToolbar : false,
                config : {
                    services : {
                        youtube :true,
                        coub : true
                    }
                }
            },

            image: {
                class: ImageTool,
                config: {
                  endpoints: {
                    byFile: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gettyimages.com%2Fphotos%2Fheaven&psig=AOvVaw0Ro8QdACc55xEcnHCS5rqk&ust=1583834224774000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjtqbmQjegCFQAAAAAdAAAAABAF', // Your backend file uploader endpoint
                    byUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gettyimages.com%2Fphotos%2Fheaven&psig=AOvVaw0Ro8QdACc55xEcnHCS5rqk&ust=1583834224774000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjtqbmQjegCFQAAAAAdAAAAABAF', // Your endpoint that provides uploading by Url
                  }
                }
              }
        }
    });


    // Saver = () => {
    //     editor.save().then((outputData) => {
    //         console.log("Article data : ", outputData)
    //     }).catch((error) => {
    //         console.log("Savind Error : ",error)
    //     });
    // }


  return (
    <div>
     <button onClick={ () => 
      editor.save().then((outputData) => {
        console.log("Article data : ", outputData.blocks)

        const db = firebase.firestore()
        db.collection("Notes").add({
            outputData
        }).then( () => {
            console.log("Data saved in database")
        }).catch((error) => {
            console.log("Sending error : ",error)
        });

    }).catch((error) => {
        console.log("Saving failed : ",error)
    })
    
      }>Save</button>
    </div>
  );
}

export default MainPage;
