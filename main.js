// // // // import * as THREE from 'three'

// // // // const scene=new THREE.Scene()
// // // // const camera=new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1, 1000)
// // // // const renderer=new THREE.WebGLRenderer()
// // // // renderer.setSize(window.innerWidth,window.innerHeight)
// // // // renderer.setAnimationLoop(animate)
// // // // document.body.appendChild(renderer.domElement)

// // // // const geometry=new THREE.BoxGeometry(1,1,1)
// // // // const material=new THREE.MeshBasicMaterial({color:0x00ff00})
// // // // const cube=new THREE.Mesh(geometry,material)
// // // // scene.add(cube)

// // // // camera.position.z=5
// // // // function animate(){
// // // //     cube.rotation.x += 0.01
// // // //     cube.rotation.y += 0.01

// // // // renderer.render(scene,camera)
// // // // }


// // // import * as THREE from 'three';
// // // const scene = new THREE.Scene();
// // // const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1,1000);
// // // camera.position.z = 5;

// // // const renderer = new THREE.WebGLRenderer();
// // // renderer.setSize(window.innerWidth, window.innerHeight);
// // // document.body.appendChild(renderer.domElement);
// // // const geometry = new THREE.CircleGeometry(2, 32); // radius=2, 32 segments
// // // const material = new THREE.MeshBasicMaterial({
// // //   color: 0x0077ff,
// // //   side: THREE.DoubleSide, 
// // // });
// // // const circle = new THREE.Mesh(geometry, material);
// // // scene.add(circle);

// // // function animate() {
// // //   requestAnimationFrame(animate);
// // //   circle.rotation.y += 0.01;
// // //   renderer.render(scene, camera);
// // // }
// // // animate();
// // import * as THREE from 'three';
// // const scene = new THREE.Scene();
// // const camera = new THREE.PerspectiveCamera(
// //   75,                                     
// //   window.innerWidth / window.innerHeight, 
// //   0.1,                                   
// //   1000                                    
// // );
// // camera.position.z = 5; 


// // const renderer = new THREE.WebGLRenderer();
// // renderer.setSize(window.innerWidth, window.innerHeight);
// // document.body.appendChild(renderer.domElement);


// // const geometry = new THREE.ConeGeometry(1, 2, 100);


// // const material = new THREE.MeshBasicMaterial({ color: 0xff6347, });


// // const cone = new THREE.Mesh(geometry, material);
// // scene.add(cone);


// // function animate() {
// //   requestAnimationFrame(animate);
  
// //   cone.rotation.x += 0.01;
// //   cone.rotation.y += 0.01;

// //   renderer.render(scene, camera);
// // }

// // animate();

// // // // 8️⃣ Adjust renderer when window resizes
// // // window.addEventListener('resize', () => {
// // //   camera.aspect = window.innerWidth / window.innerHeight;
// // //   camera.updateProjectionMatrix();
// // //   renderer.setSize(window.innerWidth, window.innerHeight);
// // // });
// // import * as THREE from "three"
// // import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
// // import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

// // let scene, camera, renderer, group;

// // function init() {
// //   scene = new THREE.Scene();
// //   scene.background = new THREE.Color('white');
// //   scene.fog = new THREE.Fog('blue', 250, 1400);

// //   camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
// //   camera.position.set(0, 200, 400);

// //   renderer = new THREE.WebGLRenderer({ antialias: true });
// //   renderer.setSize(window.innerWidth, window.innerHeight);
// //   document.body.appendChild(renderer.domElement);

// //   const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
// //   dirLight.position.set(0, 0, 1).normalize();
// //   scene.add(dirLight);

// //   const pointLight = new THREE.PointLight(0xffffff, 4.5, 0, 0);
// //   pointLight.color.setHSL(Math.random(), 1, 0.5);
// //   pointLight.position.set(0, 100, 90);
// //   scene.add(pointLight);

// //   group = new THREE.Group();
// //   group.position.y = 100;
// //   scene.add(group);

// //   const loader = new FontLoader();
// //   loader.load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json", function (font) {
// //     const textGeometry = new TextGeometry("Hello Three.js", {
// //       font: font,
// //       size: 40,
// //       height: 10,
// //       curveSegments: 12,
// //       bevelEnabled: true,
// //       bevelThickness: 2,
// //       bevelSize: 1.5,
// //       bevelSegments: 5,
// //     });

// //     textGeometry.computeBoundingBox();
// //     const centerOffset = -0.5 * (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x);

// //     const materials = [
// //       // new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }),
// //       new THREE.MeshPhongMaterial({ color: 0xffffff }),
// //     ];

// //     const textMesh = new THREE.Mesh(textGeometry, materials);
// //     textMesh.position.x = centerOffset;
// //     textMesh.rotation.y = Math.PI * 0.05;

// //     group.add(textMesh);
// //   });

// //   window.addEventListener("resize", onWindowResize);
// // }

// // function onWindowResize() {
// //   camera.aspect = window.innerWidth / window.innerHeight;
// //   camera.updateProjectionMatrix();
// //   renderer.setSize(window.innerWidth, window.innerHeight);
// // }

// // function animate() {
// //   requestAnimationFrame(animate);
// //   group.rotation.y -= 0.01;
// //   group.rotation.x += 0.01;
// //   renderer.render(scene, camera);
// // }

// // init();
// // animate();



// // import * as THREE from 'three';
// // import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// // let scene, camera, renderer, cube, controls;

// // init();
// // animate();

// // function init() {
// //   // 1️⃣ Create scene
// //   scene = new THREE.Scene();
// //   scene.background = new THREE.Color(0x202020);

// //   // 2️⃣ Create camera
// //   camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// //   camera.position.set(2, 2, 5);

// //   // 3️⃣ Create renderer
// //   renderer = new THREE.WebGLRenderer({ antialias: true });
// //   renderer.setSize(window.innerWidth, window.innerHeight);
// //   document.body.appendChild(renderer.domElement);

// //   // 4️⃣ Add geometry (a simple cube)
// //   const geometry = new THREE.BoxGeometry();
// //   const material = new THREE.MeshStandardMaterial({ color: 0x00ff99 });
// //   cube = new THREE.Mesh(geometry, material);
// //   scene.add(cube);

// //   // 5️⃣ Add light
// //   const light = new THREE.DirectionalLight(0xffffff, 1);
// //   light.position.set(5, 5, 5);
// //   scene.add(light);

// //   // 6️⃣ Add orbit controls
// //   controls = new OrbitControls(camera, renderer.domElement);
// //   controls.enableDamping = true;  // smooth motion
// //   controls.dampingFactor = 0.05;  // control smoothness
// //   // controls.enableZoom = true;     // allow zooming
// //   controls.enablePan = true;      // allow panning

// //   // 7️⃣ Handle window resizing
// //   window.addEventListener('resize', onWindowResize);
// // }

// // function onWindowResize() {
// //   camera.aspect = window.innerWidth / window.innerHeight;
// //   camera.updateProjectionMatrix();
// //   renderer.setSize(window.innerWidth, window.innerHeight);
// // }

// // function animate() {
// //   requestAnimationFrame(animate);

// //   // rotate the cube slowly
// //   cube.rotation.x += 0.01;
// //   cube.rotation.y += 0.01;

// //   // update the orbit controls
// //   controls.update();

// //   renderer.render(scene, camera);
// // }


// // import * as THREE from 'three';


// // const renderer = new THREE.WebGLRenderer();
// // renderer.setSize( window.innerWidth, window.innerHeight );
// // document.body.appendChild( renderer.domElement );

// // const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500 );
// // camera.position.set( 0, 0, 100 );
// // camera.lookAt( 0, 0, 0 );

// // const scene = new THREE.Scene();

// // const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

// // const points = [];
// // points.push( new THREE.Vector3( - 10, 0, 0 ) );
// // points.push( new THREE.Vector3( 0, 10, 0 ) );
// // points.push( new THREE.Vector3( 10, 0, 0 ) );

// // const geometry = new THREE.BufferGeometry().setFromPoints( points );

// // const line = new THREE.Line( geometry, material );
// // scene.add( line );
// // renderer.render( scene, camera );


// // import * as THREE from 'three';

// // // Create scene
// // const scene = new THREE.Scene();

// // // Create a cube
// // const geometry = new THREE.BoxGeometry(1, 1, 1);
// // const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
// // const cube = new THREE.Mesh(geometry, material);
// // scene.add(cube);

// // // Add ambient light
// // const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // white light, half intensity
// // scene.add(ambientLight);

// // // Add directional light
// // const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// // directionalLight.position.set(5, 5, 5);
// // scene.add(directionalLight);

// // // Set up camera
// // const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
// // camera.position.z = 3;

// // // Renderer
// // const renderer = new THREE.WebGLRenderer();
// // renderer.setSize(window.innerWidth, window.innerHeight);
// // document.body.appendChild(renderer.domElement);

// // // Render loop
// // function animate() {
// //   requestAnimationFrame(animate);
// //   cube.rotation.x += 0.01;
// //   cube.rotation.y += 0.01;
// //   renderer.render(scene, camera);
// // }
// // animate();

//   //  import * as THREE from 'three'
//   //    import { FlyControls } from 'three/addons/controls/FlyControls.js';
//   //     // --- Scene setup ---
//   //     const scene = new THREE.Scene();
//   //     scene.background = new THREE.Color(0x202020);

//   //     const camera = new THREE.PerspectiveCamera(
//   //       75,
//   //       window.innerWidth / window.innerHeight,
//   //       0.1,
//   //       2000
//   //     );
//   //     camera.position.set(0, 10, 30);

//   //     const renderer = new THREE.WebGLRenderer({ antialias: true });
//   //     renderer.setSize(window.innerWidth, window.innerHeight);
//   //     document.body.appendChild(renderer.domElement);

//   //     // --- Lighting ---
//   //     const ambient = new THREE.AmbientLight(0xffffff, 0.4);
//   //     scene.add(ambient);

//   //     const pointLight = new THREE.PointLight(0xffffff, 1);
//   //     pointLight.position.set(50, 50, 50);
//   //     scene.add(pointLight);

//   //     // --- Add objects (cubes) ---
//   //     const geometry = new THREE.BoxGeometry(5, 5, 5);
//   //     const material = new THREE.MeshStandardMaterial({ color: 0x00ffcc });

//   //     for (let i = 0; i < 50; i++) {
//   //       const box = new THREE.Mesh(geometry, material);
//   //       box.position.set(
//   //         Math.random() * 400 - 200,
//   //         Math.random() * 200 - 100,
//   //         Math.random() * 400 - 200
//   //       );
//   //       scene.add(box);
//   //     }

//   //     // --- Fly Controls ---
//   //     const controls = new FlyControls(camera, renderer.domElement);
//   //     controls.movementSpeed = 50;      // how fast the camera moves
//   //     controls.rollSpeed = Math.PI / 12; // how fast it rolls/turns
//   //     controls.dragToLook = true;        // must hold left mouse to look
//   //     controls.autoForward = false;

//   //     // --- Resize handling ---
//   //     window.addEventListener('resize', () => {
//   //       camera.aspect = window.innerWidth / window.innerHeight;
//   //       camera.updateProjectionMatrix();
//   //       renderer.setSize(window.innerWidth, window.innerHeight);
//   //     });

//   //     // --- Animation loop ---
//   //     const clock = new THREE.Clock();

//   //     function animate() {
//   //       requestAnimationFrame(animate);
//   //       const delta = clock.getDelta();
//   //       controls.update(delta);
//   //       renderer.render(scene, camera);
//   //     }

//   //     animate();

  
// // import * as THREE from 'three'
// //   const scene = new THREE.Scene()
// //   const camera=new THREE.PerspectiveCamera(75,window.innerHeight,window.innerWidth,0.1,1000)
// //   const renderer=new THREE.WebGLRenderer()
// //   renderer.setSize(window.innerHeight,window,innerWidth)
// //   document.body.appendChild(renderer.domElement)

// //   const geometry=new THREE.BoxGeometry()
// //   const material=new THREE.MeshBasicMaterial({color: 0x00ff00 })
// //   const cube=new THREE.Mesh(geometry,material)
// //   scene.add(cube)

// //   camera.position.z=5

// //   const times=[0,2,4]
// //   const values=[0,0,0,  0,Math.PI,0,  0,Math.PI*2,0]
// //   const rotationtrack=new THREE.VectorKeyframeTrack('.rotation',times, values)

// //   const clip=new THREE.AnimationClip('rotateY',4,[rotationtrack])

// //   const mixer=new THREE.AnimationMixer(cube)
// //   const action=mixer.clipAction(clip)
// //   action.loop=THREE.LoopRepeat
// //   action.play()

// //   const clock=new THREE.Clock()

// //   function animate() {
// //   requestAnimationFrame(animate);
// //   const delta = clock.getDelta();
// //   mixer.update(delta);
// //   renderer.render(scene, camera);
// // }

// // animate()

// // import * as THREE from 'three';

// // // 1️⃣ Basic setup
// // const scene = new THREE.Scene();
// // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// // const renderer = new THREE.WebGLRenderer();
// // renderer.setSize(window.innerWidth, window.innerHeight);
// // document.body.appendChild(renderer.domElement);

// // // 2️⃣ Create a cube
// // const geometry = new THREE.BoxGeometry();
// // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// // const cube = new THREE.Mesh(geometry, material);
// // scene.add(cube);

// // camera.position.z = 5;

// // // 3️⃣ Create a rotation keyframe track
// // // Each quaternion has 4 components (x, y, z, w)
// // const times = [0, 2, 4];
// // const values = [
// //   0, 0, 0, 1,                              // start (no rotation)
// //   0, Math.sin(Math.PI / 2), 0, Math.cos(Math.PI / 2),  // halfway (180° Y)
// //   0, 0, 0, 1                               // back to start
// // ];
// // const rotationTrack = new THREE.QuaternionKeyframeTrack('.quaternion', times, values);


// // // 4️⃣ Create the AnimationClip (name, duration, [tracks])
// // const clip = new THREE.AnimationClip('rotateY', 4, [rotationTrack]);

// // // 5️⃣ Create mixer and action
// // const mixer = new THREE.AnimationMixer(cube);
// // const action = mixer.clipAction(clip);
// // action.loop = THREE.LoopRepeat;
// // action.play();

// // // 6️⃣ Render & update animation
// // const clock = new THREE.Clock();

// // function animate() {
// //   requestAnimationFrame(animate);
// //   const delta = clock.getDelta();
// //   mixer.update(delta); // advance animation
// //   renderer.render(scene, camera);
// // }

// // animate();


// // import * as THREE from 'three';

// // // Create scene, camera, renderer
// // const scene = new THREE.Scene();
// // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
// // camera.position.z = 5;
// // const renderer = new THREE.WebGLRenderer();
// // renderer.setSize(window.innerWidth, window.innerHeight);
// // document.body.appendChild(renderer.domElement);

// // // Create cube
// // const cube = new THREE.Mesh(
// //   new THREE.BoxGeometry(),
// //   new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// // );
// // scene.add(cube);

// // // Boolean keyframe track — toggling visibility
// // const times = [0, 1, 2, 3, 4];
// // const values = [true, false, true, false, true];
// // const visibilityTrack = new THREE.BooleanKeyframeTrack('.visible', times, values);

// // // Create clip
// // const clip = new THREE.AnimationClip('Blink', -1, [visibilityTrack]);

// // // Mixer + action
// // const mixer = new THREE.AnimationMixer(cube);
// // const action = mixer.clipAction(clip);
// // action.play();

// // // Animate loop
// // const clock = new THREE.Clock();
// // function animate() {
// //   requestAnimationFrame(animate);
// //   mixer.update(clock.getDelta());
// //   renderer.render(scene, camera);
// // }
// // animate();

// // import * as THREE from 'three';

// // // Setup scene
// // const scene = new THREE.Scene();
// // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
// // camera.position.z = 5;

// // const renderer = new THREE.WebGLRenderer();
// // renderer.setSize(window.innerWidth, window.innerHeight);
// // document.body.appendChild(renderer.domElement);

// // // Create cube
// // const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// // const cube = new THREE.Mesh(new THREE.BoxGeometry(), material);
// // scene.add(cube);

// // // Define color keyframe animation
// // const times = [0, 2, 4]; // in seconds
// // const values = [
// //   1, 0, 0,   // Red (t=0)
// //   0, 1, 0,   // Green (t=2)
// //   0, 0, 1    // Blue (t=4)
// // ];
// // const colorTrack = new THREE.ColorKeyframeTrack('.material.color', times, values);

// // // Create animation clip
// // const clip = new THREE.AnimationClip('ColorChange', -1, [colorTrack]);

// // // Mixer and action
// // const mixer = new THREE.AnimationMixer(cube);
// // const action = mixer.clipAction(clip);
// // action.play();

// // // Animation loop
// // const clock = new THREE.Clock();
// // function animate() {
// //   requestAnimationFrame(animate);
// //   mixer.update(clock.getDelta());
// //   renderer.render(scene, camera);
// // }
// // animate();


// import * as THREE from 'three';

// // Setup scene
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
// camera.position.z = 5;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Create semi-transparent cube
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 1 });
// const cube = new THREE.Mesh(new THREE.BoxGeometry(), material);
// scene.add(cube);

// // Define NumberKeyframeTrack for opacity
// const times = [0, 1, 2, 3, 4];
// const values = [1, 0, 1, 0, 1]; // fade in/out repeatedly
// const opacityTrack = new THREE.NumberKeyframeTrack('.material.opacity', times, values);

// // Create animation clip
// const clip = new THREE.AnimationClip('Fade', -1, [opacityTrack]);

// // Mixer and action
// const mixer = new THREE.AnimationMixer(cube);
// const action = mixer.clipAction(clip);
// action.play();

// // Animate
// const clock = new THREE.Clock();
// function animate() {
//   requestAnimationFrame(animate);
//   mixer.update(clock.getDelta());
//   renderer.render(scene, camera);
// }
// animate();
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
scene.background=new THREE.Color('white')
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// === LIGHTS (GLB needs lights) ===
const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
scene.add(light);

const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 10, 7);
scene.add(dirLight);

// === LOAD YOUR GLB MODEL ===
const loader = new GLTFLoader();
let model;

loader.load(
  'assests/bench_model_free.glb',               // <<--- put your glb path here
  (gltf) => {
   model = gltf.scene;
model.scale.set(1, 1, 1);

// Change all materials to blue
model.traverse((child) => {
  if (child.isMesh) {
    child.material = new THREE.MeshStandardMaterial({
      color: 0x1f6fff,   // blue color
      metalness: 0.2,
      roughness: 0.7
    });
  }
});

scene.add(model);
  },
  undefined,
  (error) => {
    console.error('Error loading GLB:', error);
  }
);

camera.position.z = 5;

// === ANIMATION ===
function animate() {
  if (model) {
    model.rotation.y += 0.01;
  }
  renderer.render(scene, camera);
}
