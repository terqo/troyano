import { useRef, useEffect } from 'react'
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
      style={{ width: '100%', height: '100vh' }}
    >

      <div className="progress">
        <div className='loader'></div>
        <label for="progress-bar">Loading...</label>
        <progress id='progress-bar' value='0' max='100' ></progress>
      </div>
      
      <div className='contenedor'>
        
        <div className='main'>
        <Typical
          steps={['Troyano', 1000, 'Troyano.zip!', 500,]}
          loop={Infinity}
          wrapper="h1" className="Typical"
        />
          <p>
            <HackerText text='En el poema épico de Virgilio, La Eneida, un inteligente estratega militar griego llamado Ulises elabora un plan para que sus hombres entren en la ciudad amurallada de Troya. En lugar de destruir o
            escalar las murallas de la ciudad, Ulises ve otra forma de entrar: con un engaño. Los soldados troyanos observan cómo los griegos parecen marcharse, dejando atrás un gigante caballo de 
            madera como muestra de rendición. Ebrios tras la victoria, los troyanos introducen el caballo en la ciudad amurallada, para descubrir que Ulises y sus hombres habían estado escondidos dentro todo el tiempo.' changes='5' speed='10' />
          </p>
          {/* <a className='links' href="https://visualsucios.netlify.app/" target="_blank" rel="noopener noreferrer"><HackerText text='oscarxo.studio 🎧🖼'changes='8' speed='80'/></a>
        <a className='links' href="https://visualsucios.netlify.app/" target="_blank" rel="noopener noreferrer"><HackerText text='visual sucios 👀🤢'changes='8' speed='80'/></a> */}
        </div>


        <footer className='footer'>
          <a className='links' href="https://github.com/terqo" target="_blank" rel="noopener noreferrer"><HackerText text='| github |' changes='8' speed='80' /></a>
          <a className='links' href="https://twitter.com/terqoo" target="_blank" rel="noopener noreferrer"><HackerText text='| twitter |' changes='8' speed='80' /></a>
          <a className='links' href="https://www.instagram.com/keepitdopecop/" target="_blank" rel="noopener noreferrer"><HackerText text='| instragram |' changes='8' speed='80' /></a>
          {/* <a className='links' href="https://www.linkedin.com/in/oscqr/" target="_blank" rel="noopener noreferrer"><HackerText text='| linkedin |' /></a> */}
          <a className='links' href="https://oscarxo.studio" target="_blank" rel="noopener noreferrer"><HackerText text='| main |' /></a>

        </footer>

      </div>



    </div>

  )
}

export default Scene