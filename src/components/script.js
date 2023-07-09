import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'


let currentMount = null

      //scene
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(
        20,
        100 / 100,
        0.1,
        1000
    )

    camera.position.z = 3
    scene.add(camera)
    
    //renderer
    const renderer = new THREE.WebGLRenderer()
    

    //Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = false 
    controls.enableRotate = true
    controls.enableZoom=false
    controls.rotateSpeed = .1;
    controls.autoRotate= true;


    //resize
    const resize = () => {
      renderer.setSize(currentMount.clientWidth,
        currentMount.clientHeight)
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight
        camera.updateProjectionMatrix()
    }   
    window.addEventListener('resize', resize)


    //const clock = new THREE.Clock()
    //load model3d
    const loadingManager = new THREE.LoadingManager(
      ()=>{
        const progressBarContainer = document.querySelector('.progress')
        progressBarContainer.style.display = 'none'
        console.log('Model cargado')
      },
      (itemUrl,
        itemsToLoad,
        itemsLoaded
        )=>{
        const progressBar = document.getElementById('progress-bar')
        progressBar.value = (itemsLoaded/itemsLoaded)*100;
        console.log((itemsToLoad/itemsLoaded)*100)
      },
      ()=>{
        console.error('hubo un problema al cargar')
      }
    )
 
    //loader
    const gltfLoader = new GLTFLoader(loadingManager)
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath( '/draco/' );

    gltfLoader.setDRACOLoader(dracoLoader)
    gltfLoader.load('./model/mark2.glb',
        (gltf)=> {
          const model = gltf.scene;
          //const elapsedtime = clock.getElapsedTime();
          //model.rotation.y = elapsedtime;

          //se agrega el mouse para que objeto siga al mouse
          // var plane = new THREE.Plane(new THREE.Vector3(0, 0, 5), -2);
          // var raycaster = new THREE.Raycaster();
          // var mouse = new THREE.Vector2();
          // var pointOfIntersection = new THREE.Vector3();
          // currentMount.addEventListener("mousemove", onMouseMove, false);
          
          // function onMouseMove(event){
          //   mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
          //   mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
          //   raycaster.setFromCamera(mouse, camera);
          //   raycaster.ray.intersectPlane(plane, pointOfIntersection);
          //   model.lookAt(pointOfIntersection);
          // }
          //se modifica la posicion y escala
          model.position.x =1
          model.position.y =-1
          model.scale.set(4,4,4)
          model.rotation.y=-1.5
          //modify materials using .traverse().
          // model.traverse((node) => {
          //   if (!node.isMesh) return;
          //   node.material.wireframe = true;
          // });
          scene.add(model)
        },
        ()=>{
          
        },
        ()=>{
          
        }
        
    )

    

     //lights
     const enviromentMap = new THREE.CubeTextureLoader()
     const envMap = enviromentMap.load([
       './envmp/px.png',
       './envmp/nx.png',
       './envmp/py.png',
       './envmp/ny.png',
       './envmp/pz.png',
       './envmp/nz.png',
     ])
     scene.environment = envMap
     scene.background = envMap

    const directional = new THREE.DirectionalLight('white',0.5)
    directional.position.set(-20,30,30)
    scene.add(directional)

   
    //render the scene 
    const animate = () => {
      controls.update()
      renderer.render(scene, camera)
      requestAnimationFrame(animate)


    }
    animate()
    

     //Mount Scene
     export const mountScene = (mountRef) => {
        currentMount = mountRef.current
        resize()
        currentMount.appendChild(renderer.domElement)
     }

     //clean Up Scene
    export const cleanupScene = () => {
        renderer.dispose()
        currentMount.removeChild(renderer.domElement)
        
    }

