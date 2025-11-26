// // // // // // import * as THREE from 'three'

// // // // // // const scene=new THREE.Scene()
// // // // // // const camera=new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1, 1000)
// // // // // // const renderer=new THREE.WebGLRenderer()
// // // // // // renderer.setSize(window.innerWidth,window.innerHeight)
// // // // // // renderer.setAnimationLoop(animate)
// // // // // // document.body.appendChild(renderer.domElement)

// // // // // // const geometry=new THREE.BoxGeometry(1,1,1)
// // // // // // const material=new THREE.MeshBasicMaterial({color:0x00ff00})
// // // // // // const cube=new THREE.Mesh(geometry,material)
// // // // // // scene.add(cube)

// // // // // // camera.position.z=5
// // // // // // function animate(){
// // // // // //     cube.rotation.x += 0.01
// // // // // //     cube.rotation.y += 0.01

// // // // // // renderer.render(scene,camera)
// // // // // // }


// // // // // import * as THREE from 'three';
// // // // // const scene = new THREE.Scene();
// // // // // const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1,1000);
// // // // // camera.position.z = 5;

// // // // // const renderer = new THREE.WebGLRenderer();
// // // // // renderer.setSize(window.innerWidth, window.innerHeight);
// // // // // document.body.appendChild(renderer.domElement);
// // // // // const geometry = new THREE.CircleGeometry(2, 32); // radius=2, 32 segments
// // // // // const material = new THREE.MeshBasicMaterial({
// // // // //   color: 0x0077ff,
// // // // //   side: THREE.DoubleSide, 
// // // // // });
// // // // // const circle = new THREE.Mesh(geometry, material);
// // // // // scene.add(circle);

// // // // // function animate() {
// // // // //   requestAnimationFrame(animate);
// // // // //   circle.rotation.y += 0.01;
// // // // //   renderer.render(scene, camera);
// // // // // }
// // // // // animate();
// // // // import * as THREE from 'three';
// // // // const scene = new THREE.Scene();
// // // // const camera = new THREE.PerspectiveCamera(
// // // //   75,                                     
// // // //   window.innerWidth / window.innerHeight, 
// // // //   0.1,                                   
// // // //   1000                                    
// // // // );
// // // // camera.position.z = 5; 


// // // // const renderer = new THREE.WebGLRenderer();
// // // // renderer.setSize(window.innerWidth, window.innerHeight);
// // // // document.body.appendChild(renderer.domElement);


// // // // const geometry = new THREE.ConeGeometry(1, 2, 100);


// // // // const material = new THREE.MeshBasicMaterial({ color: 0xff6347, });


// // // // const cone = new THREE.Mesh(geometry, material);
// // // // scene.add(cone);


// // // // function animate() {
// // // //   requestAnimationFrame(animate);
  
// // // //   cone.rotation.x += 0.01;
// // // //   cone.rotation.y += 0.01;

// // // //   renderer.render(scene, camera);
// // // // }

// // // // animate();

// // // // // // 8️⃣ Adjust renderer when window resizes
// // // // // window.addEventListener('resize', () => {
// // // // //   camera.aspect = window.innerWidth / window.innerHeight;
// // // // //   camera.updateProjectionMatrix();
// // // // //   renderer.setSize(window.innerWidth, window.innerHeight);
// // // // // });
// // // // import * as THREE from "three"
// // // // import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
// // // // import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

// // // // let scene, camera, renderer, group;

// // // // function init() {
// // // //   scene = new THREE.Scene();
// // // //   scene.background = new THREE.Color('white');
// // // //   scene.fog = new THREE.Fog('blue', 250, 1400);

// // // //   camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
// // // //   camera.position.set(0, 200, 400);

// // // //   renderer = new THREE.WebGLRenderer({ antialias: true });
// // // //   renderer.setSize(window.innerWidth, window.innerHeight);
// // // //   document.body.appendChild(renderer.domElement);

// // // //   const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
// // // //   dirLight.position.set(0, 0, 1).normalize();
// // // //   scene.add(dirLight);

// // // //   const pointLight = new THREE.PointLight(0xffffff, 4.5, 0, 0);
// // // //   pointLight.color.setHSL(Math.random(), 1, 0.5);
// // // //   pointLight.position.set(0, 100, 90);
// // // //   scene.add(pointLight);

// // // //   group = new THREE.Group();
// // // //   group.position.y = 100;
// // // //   scene.add(group);

// // // //   const loader = new FontLoader();
// // // //   loader.load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json", function (font) {
// // // //     const textGeometry = new TextGeometry("Hello Three.js", {
// // // //       font: font,
// // // //       size: 40,
// // // //       height: 10,
// // // //       curveSegments: 12,
// // // //       bevelEnabled: true,
// // // //       bevelThickness: 2,
// // // //       bevelSize: 1.5,
// // // //       bevelSegments: 5,
// // // //     });

// // // //     textGeometry.computeBoundingBox();
// // // //     const centerOffset = -0.5 * (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x);

// // // //     const materials = [
// // // //       // new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }),
// // // //       new THREE.MeshPhongMaterial({ color: 0xffffff }),
// // // //     ];

// // // //     const textMesh = new THREE.Mesh(textGeometry, materials);
// // // //     textMesh.position.x = centerOffset;
// // // //     textMesh.rotation.y = Math.PI * 0.05;

// // // //     group.add(textMesh);
// // // //   });

// // // //   window.addEventListener("resize", onWindowResize);
// // // // }

// // // // function onWindowResize() {
// // // //   camera.aspect = window.innerWidth / window.innerHeight;
// // // //   camera.updateProjectionMatrix();
// // // //   renderer.setSize(window.innerWidth, window.innerHeight);
// // // // }

// // // // function animate() {
// // // //   requestAnimationFrame(animate);
// // // //   group.rotation.y -= 0.01;
// // // //   group.rotation.x += 0.01;
// // // //   renderer.render(scene, camera);
// // // // }

// // // // init();
// // // // animate();



// // // // import * as THREE from 'three';
// // // // import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// // // // let scene, camera, renderer, cube, controls;

// // // // init();
// // // // animate();

// // // // function init() {
// // // //   // 1️⃣ Create scene
// // // //   scene = new THREE.Scene();
// // // //   scene.background = new THREE.Color(0x202020);

// // // //   // 2️⃣ Create camera
// // // //   camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// // // //   camera.position.set(2, 2, 5);

// // // //   // 3️⃣ Create renderer
// // // //   renderer = new THREE.WebGLRenderer({ antialias: true });
// // // //   renderer.setSize(window.innerWidth, window.innerHeight);
// // // //   document.body.appendChild(renderer.domElement);

// // // //   // 4️⃣ Add geometry (a simple cube)
// // // //   const geometry = new THREE.BoxGeometry();
// // // //   const material = new THREE.MeshStandardMaterial({ color: 0x00ff99 });
// // // //   cube = new THREE.Mesh(geometry, material);
// // // //   scene.add(cube);

// // // //   // 5️⃣ Add light
// // // //   const light = new THREE.DirectionalLight(0xffffff, 1);
// // // //   light.position.set(5, 5, 5);
// // // //   scene.add(light);

// // // //   // 6️⃣ Add orbit controls
// // // //   controls = new OrbitControls(camera, renderer.domElement);
// // // //   controls.enableDamping = true;  // smooth motion
// // // //   controls.dampingFactor = 0.05;  // control smoothness
// // // //   // controls.enableZoom = true;     // allow zooming
// // // //   controls.enablePan = true;      // allow panning

// // // //   // 7️⃣ Handle window resizing
// // // //   window.addEventListener('resize', onWindowResize);
// // // // }

// // // // function onWindowResize() {
// // // //   camera.aspect = window.innerWidth / window.innerHeight;
// // // //   camera.updateProjectionMatrix();
// // // //   renderer.setSize(window.innerWidth, window.innerHeight);
// // // // }

// // // // function animate() {
// // // //   requestAnimationFrame(animate);

// // // //   // rotate the cube slowly
// // // //   cube.rotation.x += 0.01;
// // // //   cube.rotation.y += 0.01;

// // // //   // update the orbit controls
// // // //   controls.update();

// // // //   renderer.render(scene, camera);
// // // // }


// // // // import * as THREE from 'three';


// // // // const renderer = new THREE.WebGLRenderer();
// // // // renderer.setSize( window.innerWidth, window.innerHeight );
// // // // document.body.appendChild( renderer.domElement );

// // // // const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500 );
// // // // camera.position.set( 0, 0, 100 );
// // // // camera.lookAt( 0, 0, 0 );

// // // // const scene = new THREE.Scene();

// // // // const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

// // // // const points = [];
// // // // points.push( new THREE.Vector3( - 10, 0, 0 ) );
// // // // points.push( new THREE.Vector3( 0, 10, 0 ) );
// // // // points.push( new THREE.Vector3( 10, 0, 0 ) );

// // // // const geometry = new THREE.BufferGeometry().setFromPoints( points );

// // // // const line = new THREE.Line( geometry, material );
// // // // scene.add( line );
// // // // renderer.render( scene, camera );


// // // // import * as THREE from 'three';

// // // // // Create scene
// // // // const scene = new THREE.Scene();

// // // // // Create a cube
// // // // const geometry = new THREE.BoxGeometry(1, 1, 1);
// // // // const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
// // // // const cube = new THREE.Mesh(geometry, material);
// // // // scene.add(cube);

// // // // // Add ambient light
// // // // const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // white light, half intensity
// // // // scene.add(ambientLight);

// // // // // Add directional light
// // // // const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// // // // directionalLight.position.set(5, 5, 5);
// // // // scene.add(directionalLight);

// // // // // Set up camera
// // // // const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
// // // // camera.position.z = 3;

// // // // // Renderer
// // // // const renderer = new THREE.WebGLRenderer();
// // // // renderer.setSize(window.innerWidth, window.innerHeight);
// // // // document.body.appendChild(renderer.domElement);

// // // // // Render loop
// // // // function animate() {
// // // //   requestAnimationFrame(animate);
// // // //   cube.rotation.x += 0.01;
// // // //   cube.rotation.y += 0.01;
// // // //   renderer.render(scene, camera);
// // // // }
// // // // animate();

// // //   //  import * as THREE from 'three'
// // //   //    import { FlyControls } from 'three/addons/controls/FlyControls.js';
// // //   //     // --- Scene setup ---
// // //   //     const scene = new THREE.Scene();
// // //   //     scene.background = new THREE.Color(0x202020);

// // //   //     const camera = new THREE.PerspectiveCamera(
// // //   //       75,
// // //   //       window.innerWidth / window.innerHeight,
// // //   //       0.1,
// // //   //       2000
// // //   //     );
// // //   //     camera.position.set(0, 10, 30);

// // //   //     const renderer = new THREE.WebGLRenderer({ antialias: true });
// // //   //     renderer.setSize(window.innerWidth, window.innerHeight);
// // //   //     document.body.appendChild(renderer.domElement);

// // //   //     // --- Lighting ---
// // //   //     const ambient = new THREE.AmbientLight(0xffffff, 0.4);
// // //   //     scene.add(ambient);

// // //   //     const pointLight = new THREE.PointLight(0xffffff, 1);
// // //   //     pointLight.position.set(50, 50, 50);
// // //   //     scene.add(pointLight);

// // //   //     // --- Add objects (cubes) ---
// // //   //     const geometry = new THREE.BoxGeometry(5, 5, 5);
// // //   //     const material = new THREE.MeshStandardMaterial({ color: 0x00ffcc });

// // //   //     for (let i = 0; i < 50; i++) {
// // //   //       const box = new THREE.Mesh(geometry, material);
// // //   //       box.position.set(
// // //   //         Math.random() * 400 - 200,
// // //   //         Math.random() * 200 - 100,
// // //   //         Math.random() * 400 - 200
// // //   //       );
// // //   //       scene.add(box);
// // //   //     }

// // //   //     // --- Fly Controls ---
// // //   //     const controls = new FlyControls(camera, renderer.domElement);
// // //   //     controls.movementSpeed = 50;      // how fast the camera moves
// // //   //     controls.rollSpeed = Math.PI / 12; // how fast it rolls/turns
// // //   //     controls.dragToLook = true;        // must hold left mouse to look
// // //   //     controls.autoForward = false;

// // //   //     // --- Resize handling ---
// // //   //     window.addEventListener('resize', () => {
// // //   //       camera.aspect = window.innerWidth / window.innerHeight;
// // //   //       camera.updateProjectionMatrix();
// // //   //       renderer.setSize(window.innerWidth, window.innerHeight);
// // //   //     });

// // //   //     // --- Animation loop ---
// // //   //     const clock = new THREE.Clock();

// // //   //     function animate() {
// // //   //       requestAnimationFrame(animate);
// // //   //       const delta = clock.getDelta();
// // //   //       controls.update(delta);
// // //   //       renderer.render(scene, camera);
// // //   //     }

// // //   //     animate();

  
// // // // import * as THREE from 'three'
// // // //   const scene = new THREE.Scene()
// // // //   const camera=new THREE.PerspectiveCamera(75,window.innerHeight,window.innerWidth,0.1,1000)
// // // //   const renderer=new THREE.WebGLRenderer()
// // // //   renderer.setSize(window.innerHeight,window,innerWidth)
// // // //   document.body.appendChild(renderer.domElement)

// // // //   const geometry=new THREE.BoxGeometry()
// // // //   const material=new THREE.MeshBasicMaterial({color: 0x00ff00 })
// // // //   const cube=new THREE.Mesh(geometry,material)
// // // //   scene.add(cube)

// // // //   camera.position.z=5

// // // //   const times=[0,2,4]
// // // //   const values=[0,0,0,  0,Math.PI,0,  0,Math.PI*2,0]
// // // //   const rotationtrack=new THREE.VectorKeyframeTrack('.rotation',times, values)

// // // //   const clip=new THREE.AnimationClip('rotateY',4,[rotationtrack])

// // // //   const mixer=new THREE.AnimationMixer(cube)
// // // //   const action=mixer.clipAction(clip)
// // // //   action.loop=THREE.LoopRepeat
// // // //   action.play()

// // // //   const clock=new THREE.Clock()

// // // //   function animate() {
// // // //   requestAnimationFrame(animate);
// // // //   const delta = clock.getDelta();
// // // //   mixer.update(delta);
// // // //   renderer.render(scene, camera);
// // // // }

// // // // animate()

// // // // import * as THREE from 'three';

// // // // // 1️⃣ Basic setup
// // // // const scene = new THREE.Scene();
// // // // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// // // // const renderer = new THREE.WebGLRenderer();
// // // // renderer.setSize(window.innerWidth, window.innerHeight);
// // // // document.body.appendChild(renderer.domElement);

// // // // // 2️⃣ Create a cube
// // // // const geometry = new THREE.BoxGeometry();
// // // // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// // // // const cube = new THREE.Mesh(geometry, material);
// // // // scene.add(cube);

// // // // camera.position.z = 5;

// // // // // 3️⃣ Create a rotation keyframe track
// // // // // Each quaternion has 4 components (x, y, z, w)
// // // // const times = [0, 2, 4];
// // // // const values = [
// // // //   0, 0, 0, 1,                              // start (no rotation)
// // // //   0, Math.sin(Math.PI / 2), 0, Math.cos(Math.PI / 2),  // halfway (180° Y)
// // // //   0, 0, 0, 1                               // back to start
// // // // ];
// // // // const rotationTrack = new THREE.QuaternionKeyframeTrack('.quaternion', times, values);


// // // // // 4️⃣ Create the AnimationClip (name, duration, [tracks])
// // // // const clip = new THREE.AnimationClip('rotateY', 4, [rotationTrack]);

// // // // // 5️⃣ Create mixer and action
// // // // const mixer = new THREE.AnimationMixer(cube);
// // // // const action = mixer.clipAction(clip);
// // // // action.loop = THREE.LoopRepeat;
// // // // action.play();

// // // // // 6️⃣ Render & update animation
// // // // const clock = new THREE.Clock();

// // // // function animate() {
// // // //   requestAnimationFrame(animate);
// // // //   const delta = clock.getDelta();
// // // //   mixer.update(delta); // advance animation
// // // //   renderer.render(scene, camera);
// // // // }

// // // // animate();


// // // // import * as THREE from 'three';

// // // // // Create scene, camera, renderer
// // // // const scene = new THREE.Scene();
// // // // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
// // // // camera.position.z = 5;
// // // // const renderer = new THREE.WebGLRenderer();
// // // // renderer.setSize(window.innerWidth, window.innerHeight);
// // // // document.body.appendChild(renderer.domElement);

// // // // // Create cube
// // // // const cube = new THREE.Mesh(
// // // //   new THREE.BoxGeometry(),
// // // //   new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// // // // );
// // // // scene.add(cube);

// // // // // Boolean keyframe track — toggling visibility
// // // // const times = [0, 1, 2, 3, 4];
// // // // const values = [true, false, true, false, true];
// // // // const visibilityTrack = new THREE.BooleanKeyframeTrack('.visible', times, values);

// // // // // Create clip
// // // // const clip = new THREE.AnimationClip('Blink', -1, [visibilityTrack]);

// // // // // Mixer + action
// // // // const mixer = new THREE.AnimationMixer(cube);
// // // // const action = mixer.clipAction(clip);
// // // // action.play();

// // // // // Animate loop
// // // // const clock = new THREE.Clock();
// // // // function animate() {
// // // //   requestAnimationFrame(animate);
// // // //   mixer.update(clock.getDelta());
// // // //   renderer.render(scene, camera);
// // // // }
// // // // animate();

// // // // import * as THREE from 'three';

// // // // // Setup scene
// // // // const scene = new THREE.Scene();
// // // // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
// // // // camera.position.z = 5;

// // // // const renderer = new THREE.WebGLRenderer();
// // // // renderer.setSize(window.innerWidth, window.innerHeight);
// // // // document.body.appendChild(renderer.domElement);

// // // // // Create cube
// // // // const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// // // // const cube = new THREE.Mesh(new THREE.BoxGeometry(), material);
// // // // scene.add(cube);

// // // // // Define color keyframe animation
// // // // const times = [0, 2, 4]; // in seconds
// // // // const values = [
// // // //   1, 0, 0,   // Red (t=0)
// // // //   0, 1, 0,   // Green (t=2)
// // // //   0, 0, 1    // Blue (t=4)
// // // // ];
// // // // const colorTrack = new THREE.ColorKeyframeTrack('.material.color', times, values);

// // // // // Create animation clip
// // // // const clip = new THREE.AnimationClip('ColorChange', -1, [colorTrack]);

// // // // // Mixer and action
// // // // const mixer = new THREE.AnimationMixer(cube);
// // // // const action = mixer.clipAction(clip);
// // // // action.play();

// // // // // Animation loop
// // // // const clock = new THREE.Clock();
// // // // function animate() {
// // // //   requestAnimationFrame(animate);
// // // //   mixer.update(clock.getDelta());
// // // //   renderer.render(scene, camera);
// // // // }
// // // // animate();


// // // import * as THREE from 'three';

// // // // Setup scene
// // // const scene = new THREE.Scene();
// // // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
// // // camera.position.z = 5;

// // // const renderer = new THREE.WebGLRenderer();
// // // renderer.setSize(window.innerWidth, window.innerHeight);
// // // document.body.appendChild(renderer.domElement);

// // // // Create semi-transparent cube
// // // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 1 });
// // // const cube = new THREE.Mesh(new THREE.BoxGeometry(), material);
// // // scene.add(cube);

// // // // Define NumberKeyframeTrack for opacity
// // // const times = [0, 1, 2, 3, 4];
// // // const values = [1, 0, 1, 0, 1]; // fade in/out repeatedly
// // // const opacityTrack = new THREE.NumberKeyframeTrack('.material.opacity', times, values);

// // // // Create animation clip
// // // const clip = new THREE.AnimationClip('Fade', -1, [opacityTrack]);

// // // // Mixer and action
// // // const mixer = new THREE.AnimationMixer(cube);
// // // const action = mixer.clipAction(clip);
// // // action.play();

// // // // Animate
// // // const clock = new THREE.Clock();
// // // function animate() {
// // //   requestAnimationFrame(animate);
// // //   mixer.update(clock.getDelta());
// // //   renderer.render(scene, camera);
// // // }
// // // animate();
// // import * as THREE from 'three';
// // import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// // const scene = new THREE.Scene();
// // scene.background=new THREE.Color('white')
// // const camera = new THREE.PerspectiveCamera(
// //   75,
// //   window.innerWidth / window.innerHeight,
// //   0.1,
// //   1000
// // );

// // const renderer = new THREE.WebGLRenderer({ antialias: true });
// // renderer.setSize(window.innerWidth, window.innerHeight);
// // renderer.setAnimationLoop(animate);
// // document.body.appendChild(renderer.domElement);

// // // === LIGHTS (GLB needs lights) ===
// // const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
// // scene.add(light);

// // const dirLight = new THREE.DirectionalLight(0xffffff, 1);
// // dirLight.position.set(5, 10, 7);
// // scene.add(dirLight);

// // // === LOAD YOUR GLB MODEL ===
// // const loader = new GLTFLoader();
// // let model;

// // loader.load(
// //   'assests/bench_model_free.glb',               // <<--- put your glb path here
// //   (gltf) => {
// //    model = gltf.scene;
// // model.scale.set(1, 1, 1);

// // // Change all materials to blue
// // model.traverse((child) => {
// //   if (child.isMesh) {
// //     child.material = new THREE.MeshStandardMaterial({
// //       color: 0x1f6fff,   // blue color
// //       metalness: 0.2,
// //       roughness: 0.7
// //     });
// //   }
// // });

// // scene.add(model);
// //   },
// //   undefined,
// //   (error) => {
// //     console.error('Error loading GLB:', error);
// //   }
// // );

// // camera.position.z = 5;

// // // === ANIMATION ===
// // function animate() {
// //   if (model) {
// //     model.rotation.y += 0.01;
// //   }
// //   renderer.render(scene, camera);
// // }



// import * as THREE from 'three';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 20;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Light
// const light = new THREE.PointLight(0xffffff, 1);
// light.position.set(10, 10, 10);
// scene.add(light);

// // Audio listener
// const listener = new THREE.AudioListener();
// camera.add(listener);

// // Simple geometry
// const cube = new THREE.Mesh(
//   new THREE.BoxGeometry(),
//   new THREE.MeshStandardMaterial({ color: 0x00ff00 })
// );
// scene.add(cube);

// // Positional audio
// const sound = new THREE.PositionalAudio(listener);
// const audioLoader = new THREE.AudioLoader();
// audioLoader.load('sounds/beep.wav', (buffer) => {
//   sound.setBuffer(buffer);
//   sound.setRefDistance(10);
//   sound.setLoop(true);
//   sound.play();
// });

// // Attach sound to cube
// cube.add(sound);

// function animate() {
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//   renderer.render(scene, camera);
//   requestAnimationFrame(animate);
// }
// animate();


// // const vertices = new Float32Array([
// //   0, 0, 0,  // vertex 1
// //   1, 0, 0,  // vertex 2
// //   0, 1, 0   // vertex 3
// // ]);

// // const positionAttribute = new THREE.BufferAttribute(vertices, 3);



// const clock = new THREE.Clock();

// function animate() {
//   requestAnimationFrame(animate);

//   const delta = clock.getDelta();        // time since last frame
//   const elapsed = clock.getElapsedTime(); // total time

//   mesh.rotation.y += 1 * delta;  // smooth speed
//   mesh.position.y = Math.sin(elapsed) * 2;

//   renderer.render(scene, camera);
// }
// animate();

// // import * as THREE from 'three';
// // import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// // let scene, camera, renderer, raycaster, mouse, cube;

// // init();
// // animate();

// // function init() {

// //   // Scene
// //   scene = new THREE.Scene();

// //   // Camera
// //   camera = new THREE.PerspectiveCamera(
// //     60,
// //     window.innerWidth / window.innerHeight,
// //     0.1,
// //     100
// //   );
// //   camera.position.set(2, 2, 5);

// //   // Renderer
// //   renderer = new THREE.WebGLRenderer({ antialias: true });
// //   renderer.setSize(window.innerWidth, window.innerHeight);
// //   document.body.appendChild(renderer.domElement);

// //   // Controls
// //   const controls = new OrbitControls(camera, renderer.domElement);

// //   // Cube
// //   const geometry = new THREE.BoxGeometry(1, 1, 1);
// //   const material = new THREE.MeshStandardMaterial({ color: 0x00aaff });
// //   cube = new THREE.Mesh(geometry, material);
// //   scene.add(cube);

// //   // Light
// //   const light = new THREE.DirectionalLight(0xffffff, 1);
// //   light.position.set(3, 5, 2);
// //   scene.add(light);

// //   // Raycaster
// //   raycaster = new THREE.Raycaster();
// //   mouse = new THREE.Vector2();

// //   // Mouse click event
// //   window.addEventListener('click', onMouseClick, false);

// //   // Resize
// //   window.addEventListener('resize', onWindowResize, false);
// // }

// // function onMouseClick(event) {
// //   // Convert mouse position to -1 → +1 range
// //   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
// //   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

// //   // Set ray from camera using mouse coordinates
// //   raycaster.setFromCamera(mouse, camera);

// //   // Objects to test
// //   const intersects = raycaster.intersectObjects(scene.children);

// //   if (intersects.length > 0) {
// //     // Get the first (closest) object
// //     const obj = intersects[0].object;

// //     // Change to a random color
// //     obj.material.color.set(Math.random() * 0xffffff);
// //   }
// // }

// // function onWindowResize() {
// //   camera.aspect = window.innerWidth / window.innerHeight;
// //   camera.updateProjectionMatrix();
// //   renderer.setSize(window.innerWidth, window.innerHeight);
// // }

// // function animate() {
// //   requestAnimationFrame(animate);

// //   // Rotate the cube
// //   cube.rotation.y += 0.01;
// //   cube.rotation.x += 0.01;

// //   renderer.render(scene, camera);
// // }


// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.set(0, 0, 10);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // ---- ARC CURVE ----
// // ArcCurve(x, y, radius, startAngle, endAngle, clockwise)
// const arc = new THREE.ArcCurve(0, 0, 3, 0, Math.PI, false);

// // Convert curve points into geometry
// const points = arc.getPoints(50);
// const geometry = new THREE.BufferGeometry().setFromPoints(points);

// // Create material
// const material = new THREE.LineBasicMaterial({ color: 0xff0000 });

// // Create line (arc)
// const arcLine = new THREE.Line(geometry, material);
// scene.add(arcLine);

// // Controls
// const controls = new OrbitControls(camera, renderer.domElement);

// // Animate
// function animate() {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }
// animate();
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(5, 5, 10);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // ----- SMOOTH SPLINE (CatmullRomCurve3) -----
// const points = [
//   new THREE.Vector3(0, 0, 0),
//   new THREE.Vector3(2, 3, 1),
//   new THREE.Vector3(5, 1, 0),
//   new THREE.Vector3(8, 4, 2),
// ];

// // Create smooth spline curve
// const splineCurve = new THREE.CatmullRomCurve3(points);

// // Convert curve into 100 line points
// const curvePoints = splineCurve.getPoints(100);

// const geometry = new THREE.BufferGeometry().setFromPoints(curvePoints);
// const material = new THREE.LineBasicMaterial({ color: 0xff0000 });

// const splineLine = new THREE.Line(geometry, material);
// scene.add(splineLine);

// // Add points as small spheres for reference
// points.forEach((p) => {
//   const sphere = new THREE.Mesh(
//     new THREE.SphereGeometry(0.1),
//     new THREE.MeshBasicMaterial({ color: 0x00ff00 })
//   );
//   sphere.position.copy(p);
//   scene.add(sphere);
// });

// // Orbit Controls
// const controls = new OrbitControls(camera, renderer.domElement);

// // Animate
// function animate() {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }
// animate();


// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(5, 5, 10);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // ------ CUBIC BEZIER CURVE ------
// const p0 = new THREE.Vector3(0, 0, 0);   // Start point
// const p1 = new THREE.Vector3(2, 5, 0);   // Control point 1
// const p2 = new THREE.Vector3(5, 5, 0);   // Control point 2
// const p3 = new THREE.Vector3(8, 0, 0);   // End point

// // Create Bezier curve
// const bezierCurve = new THREE.CubicBezierCurve3(p0, p1, p2, p3);

// // Convert curve into line segments
// const curvePoints = bezierCurve.getPoints(100);
// const geometry = new THREE.BufferGeometry().setFromPoints(curvePoints);

// const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
// const curveLine = new THREE.Line(geometry, material);
// scene.add(curveLine);

// // Add spheres to show points
// [p0, p1, p2, p3].forEach((p) => {
//   const sphere = new THREE.Mesh(
//     new THREE.SphereGeometry(0.15),
//     new THREE.MeshBasicMaterial({ color: 0x00ff00 })
//   );
//   sphere.position.copy(p);
//   scene.add(sphere);
// });

// // Orbit Controls
// const controls = new OrbitControls(camera, renderer.domElement);

// // Animation Loop
// function animate() {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }
// animate();

// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import earcut from "three/examples/jsm/utils/Earcut.js";

// const scene = new THREE.Scene();

// // Camera
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(5, 5, 10);

// // Renderer
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // ---------------------
// // EAR CUT EXAMPLE START
// // ---------------------

// // A simple square polygon
// const vertices = [
//   0, 0,   // 0: A
//   4, 0,   // 1: B
//   4, 3,   // 2: C
//   0, 3    // 3: D
// ];

// // Triangulate using Earcut
// const triangles = THREE.ShapeUtils.earcut(vertices);
// console.log("Triangle Indices:", triangles);

// // Convert triangles into 3D points
// const positions = [];

// triangles.forEach(i => {
//   positions.push(vertices[i * 2], vertices[i * 2 + 1], 0); // (x, y, z)
// });

// // Build geometry
// const geometry = new THREE.BufferGeometry();
// geometry.setAttribute(
//   "position",
//   new THREE.Float32BufferAttribute(positions, 3)
// );

// // Material
// const material = new THREE.MeshBasicMaterial({
//   color: 0xff0000,
//   side: THREE.DoubleSide
// });

// // Mesh
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// // ---------------------
// // EAR CUT EXAMPLE END
// // ---------------------

// // Orbit Controls to move camera
// const controls = new OrbitControls(camera, renderer.domElement);

// // Animation Loop
// function animate() {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }
// animate();

// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// const scene = new THREE.Scene();

// // Camera
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(5, 5, 10);

// // Renderer
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // ----------------
// // OBJECT (CUBE)
// // ----------------
// const geometry = new THREE.BoxGeometry(2, 2, 2);
// const material = new THREE.MeshNormalMaterial();
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// // ----------------
// // BOX HELPER
// // ----------------
// const helper = new THREE.BoxHelper(cube, 0xff0000); // Red outline
// scene.add(helper);

// // Orbit Controls
// const controls = new OrbitControls(camera, renderer.domElement);

// // Animation Loop
// function animate() {
//   requestAnimationFrame(animate);

//   // Rotate cube
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

//   // Update box helper after cube moves/rotates
//   helper.update();

//   renderer.render(scene, camera);
// }

// animate();

// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// const scene = new THREE.Scene();

// // -----------------------------
// // CAMERA (Main Scene Camera)
// // -----------------------------
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(5, 5, 10);

// // Renderer
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // -----------------------------
// // OBJECT (Cube)
// // -----------------------------
// const boxGeo = new THREE.BoxGeometry(2, 2, 2);
// const boxMat = new THREE.MeshNormalMaterial();
// const cube = new THREE.Mesh(boxGeo, boxMat);
// scene.add(cube);

// // -----------------------------
// // SECOND CAMERA (For Helper)
// // -----------------------------
// const debugCamera = new THREE.PerspectiveCamera(
//   40,     // fov
//   window.innerWidth / window.innerHeight,
//   1,      // near
//   20      // far
// );
// debugCamera.position.set(0, 5, 5);
// debugCamera.lookAt(cube.position);

// // -----------------------------
// // CAMERA HELPER
// // -----------------------------
// const helper = new THREE.CameraHelper(debugCamera);
// scene.add(helper);

// // Controls
// const controls = new OrbitControls(camera, renderer.domElement);

// // Animation
// function animate() {
//   requestAnimationFrame(animate);

//   // Rotate cube
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

//   // Update helper (important)
//   helper.update();

//   renderer.render(scene, camera);
// }

// animate();

// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// const scene = new THREE.Scene();

// // Camera
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(5, 5, 10);

// // Renderer
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // ----------------------
// // GRID HELPER
// // ----------------------
// const gridHelper = new THREE.GridHelper(20, 20);  
// scene.add(gridHelper);

// // Add a cube for testing
// const cube = new THREE.Mesh(
//   new THREE.BoxGeometry(1, 1, 1),
//   new THREE.MeshNormalMaterial()
// );
// cube.position.y = 0.5;
// scene.add(cube);

// // Controls
// const controls = new OrbitControls(camera, renderer.domElement);

// // Animation
// function animate() {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }
// animate();


// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// const scene = new THREE.Scene();

// // Camera
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.set(5, 5, 5);

// // Renderer
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Controls
// const controls = new OrbitControls(camera, renderer.domElement);

// // 1. Create a mathematical plane
// // (normal direction, constant)
// const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
// // This is a horizontal infinite plane at Y = 0

// // 2. Create a PlaneHelper (size = 5 units)
// const planeHelper = new THREE.PlaneHelper(plane, 5, 0xff0000);
// scene.add(planeHelper);

// // Add a cube for reference
// const box = new THREE.Mesh(
//   new THREE.BoxGeometry(1, 1, 1),
//   new THREE.MeshStandardMaterial({ color: 0x00ff00 })
// );
// box.position.set(0, 0.5, 0);
// scene.add(box);

// // Light
// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(3, 5, 2);
// scene.add(light);

// // Animate
// function animate() {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }
// animate();

// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// const scene = new THREE.Scene();

// // Camera
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
// camera.position.set(3, 3, 3);

// // Renderer
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Controls
// const controls = new OrbitControls(camera, renderer.domElement);

// // Add Ambient Light
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); 
// // color = white, intensity = 0.5
// scene.add(ambientLight);

// // // Add another light to see shadows and highlights
// const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// directionalLight.position.set(5, 5, 5);
// scene.add(directionalLight);

// // Add an object
// const box = new THREE.Mesh(
//   new THREE.BoxGeometry(1, 1, 1),
//   new THREE.MeshStandardMaterial({ color: 0x00ff88 })
// );
// scene.add(box);

// // Animate
// function animate() {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }
// animate();


// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// const scene = new THREE.Scene();

// // Camera
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   100
// );
// camera.position.set(3, 3, 5);

// // Renderer
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Controls
// const controls = new OrbitControls(camera, renderer.domElement);

// // 🌈 Hemisphere Light
// const hemiLight = new THREE.HemisphereLight(
//   0x87ceeb, // Sky color (light blue)
//   0x444444, // Ground color (dark gray)
//   1.0       // Intensity
// );
// scene.add(hemiLight);

// // Helper to visualize hemisphere light
// const helper = new THREE.HemisphereLightHelper(hemiLight, 2);
// scene.add(helper);

// // Ground
// const ground = new THREE.Mesh(
//   new THREE.PlaneGeometry(10, 10),
//   new THREE.MeshStandardMaterial({ color: 0x888888 })
// );
// ground.rotation.x = -Math.PI / 2;
// scene.add(ground);

// // Sphere to show lighting effect
// const sphere = new THREE.Mesh(
//   new THREE.SphereGeometry(1, 32, 32),
//   new THREE.MeshStandardMaterial({ color: 0xff5533 })
// );
// sphere.position.y = 1;
// scene.add(sphere);

// // Animation loop
// function animate() {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }
// animate();

// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// const scene = new THREE.Scene();

// // Camera
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(5, 5, 10);

// // Renderer
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // ----------------------------
// // LINE USING LINEBASICMATERIAL
// // ----------------------------

// // Create points
// const points = [
//   new THREE.Vector3(0, 0, 0),
//   new THREE.Vector3(2, 3, 1),
//   // new THREE.Vector3(5, 1, 0),
// ];

// // Convert to buffer geometry
// const geometry = new THREE.BufferGeometry().setFromPoints(points);

// // Material
// const material = new THREE.LineBasicMaterial({
//   color: 0xff0000,   // red
//   linewidth: 1       // ignored in most browsers
// });

// // Line object
// const line = new THREE.Line(geometry, material);
// scene.add(line);

// // Orbit Controls
// const controls = new OrbitControls(camera, renderer.domElement);

// // Animate
// function animate() {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }
// animate();


// lambertExample.js
// import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";

// // Scene, camera, renderer
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Geometry
// const geometry = new THREE.BoxGeometry(2, 2, 2);

// // MeshLambertMaterial
// const material = new THREE.MeshLambertMaterial({
//   color: 0x00ff99, // greenish color
// });

// // Mesh
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// // Light (Lambert Material needs light!!)
// const light = new THREE.PointLight(0xffffff, 1, 100);
// light.position.set(10, 10, 10);
// scene.add(light);

// // Camera position
// camera.position.z = 5;

// // Animation
// function animate() {
//   requestAnimationFrame(animate);
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//   renderer.render(scene, camera);
// }
// animate();

// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// const scene = new THREE.Scene();

// // Camera
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(5, 5, 10);

// // Renderer
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // ----------------------------
// // MESH USING MESHPHONGMATERIAL
// // ----------------------------

// // Geometry (cube)
// const geometry = new THREE.BoxGeometry(2, 2, 2);

// // Material
// const material = new THREE.MeshPhongMaterial({
//   color: 0x00aaff,     // blue color
//   shininess: 80,       // how shiny it looks
//   specular: 0xffffff,  // specular highlight color
// });

// // Mesh
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// // ----------------------------
// // LIGHT (Phong needs light!)
// // ----------------------------

// // Point light
// const pointLight = new THREE.PointLight(0xffffff, 1.2);
// pointLight.position.set(10, 10, 10);
// scene.add(pointLight);

// // Optional: Ambient light (soft global light)
// const ambient = new THREE.AmbientLight(0x404040);
// scene.add(ambient);

// // Orbit Controls
// const controls = new OrbitControls(camera, renderer.domElement);

// // Animate
// function animate() {
//   requestAnimationFrame(animate);

//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

//   renderer.render(scene, camera);
// }
// animate();



import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(5, 5, 10);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// -------------------------------
// MESH USING MESHSTANDARDMATERIAL
// -------------------------------

// Geometry
const geometry = new THREE.SphereGeometry(2, 32, 32);

// Material
const material = new THREE.MeshStandardMaterial({
  color: 0xff9900,   // orange
  metalness: 0.6,    // how metallic (0 to 1)
  roughness: 0.3     // how rough (0 → shiny, 1 → rough)
});

// Mesh
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// ---------------------------------
// LIGHT (StandardMaterial requires)
// ---------------------------------

// Directional light
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 10, 7);
scene.add(dirLight);

// Optional: Ambient soft light
const ambient = new THREE.AmbientLight(0x404040);
scene.add(ambient);

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);

// Animate
function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();
