import {useRef, useEffect} from 'react'
import { cleanupScene, mountScene } from './script'
import Typical from 'react-typical'
import HackerText from 'react-hacker-text'


const Scene = () => {

  const mountRef = useRef(null)
  useEffect(() => {
    //init Scene
    mountScene(mountRef)
    
    //clean up scene 
    return () => {
      cleanupScene()
    }
    
  }, [])

  return (
    <div 
      className='Contenedor3D'
      ref={mountRef}
      style={{width: '100%', height:'100vh'}}
    >
  
    <div className="progress">
      <div className='loader'></div>
      <label for="progress-bar">Loading...</label>
      <progress id='progress-bar' value='0' max='100' ></progress>
    </div>

    <div className='contenedor'>
      <Typical 
        steps={['Troyano', 1000, 'Troyano.zip!', 500, ]}
        loop={Infinity}
        wrapper="h1" className="Typical"
      />
     
      <a className='links' href="https://oscarxo.studio/" target="_blank" rel="noopener noreferrer"><HackerText text='oscarxo.studio 🎧🎧🖼'changes='6'/></a>
      <a className='links' href="https://visualsucios.netlify.app/" target="_blank" rel="noopener noreferrer"><HackerText text='visual sucios 👀🤢'changes='6' /></a>
      <img src="./patrick-spongebob.gif" alt="Descripción de la imagen" />

      <footer className='footer'>
        <a className='links' href="https://github.com/terqo" target="_blank" rel="noopener noreferrer"><HackerText text='| github |' /></a>
        <a className='links' href="https://twitter.com/terqoo" target="_blank" rel="noopener noreferrer"><HackerText text='| twitter |' /></a>
        <a className='links' href="https://www.instagram.com/keepitdopecop/" target="_blank" rel="noopener noreferrer"><HackerText text='| instragram |' /></a>
        {/* <a className='links' href="https://www.linkedin.com/in/oscqr/" target="_blank" rel="noopener noreferrer"><HackerText text='| linkedin |' /></a> */}
      </footer>
     
     </div>
    
     
    
    </div>
    
  )
}

export default Scene