// // // import * as THREE from 'three'

// // // const scene=new THREE.Scene()
// // // const camera=new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1, 1000)
// // // const renderer=new THREE.WebGLRenderer()
// // // renderer.setSize(window.innerWidth,window.innerHeight)
// // // renderer.setAnimationLoop(animate)
// // // document.body.appendChild(renderer.domElement)

// // // const geometry=new THREE.BoxGeometry(1,1,1)
// // // const material=new THREE.MeshBasicMaterial({color:0x00ff00})
// // // const cube=new THREE.Mesh(geometry,material)
// // // scene.add(cube)

// // // camera.position.z=5
// // // function animate(){
// // //     cube.rotation.x += 0.01
// // //     cube.rotation.y += 0.01

// // // renderer.render(scene,camera)
// // // }


// // import * as THREE from 'three';
// // const scene = new THREE.Scene();
// // const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1,1000);
// // camera.position.z = 5;

// // const renderer = new THREE.WebGLRenderer();
// // renderer.setSize(window.innerWidth, window.innerHeight);
// // document.body.appendChild(renderer.domElement);
// // const geometry = new THREE.CircleGeometry(2, 32); // radius=2, 32 segments
// // const material = new THREE.MeshBasicMaterial({
// //   color: 0x0077ff,
// //   side: THREE.DoubleSide, 
// // });
// // const circle = new THREE.Mesh(geometry, material);
// // scene.add(circle);

// // function animate() {
// //   requestAnimationFrame(animate);
// //   circle.rotation.y += 0.01;
// //   renderer.render(scene, camera);
// // }
// // animate();
// import * as THREE from 'three';
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,                                     
//   window.innerWidth / window.innerHeight, 
//   0.1,                                   
//   1000                                    
// );
// camera.position.z = 5; 


// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);


// const geometry = new THREE.ConeGeometry(1, 2, 100);


// const material = new THREE.MeshBasicMaterial({ color: 0xff6347, });


// const cone = new THREE.Mesh(geometry, material);
// scene.add(cone);


// function animate() {
//   requestAnimationFrame(animate);
  
//   cone.rotation.x += 0.01;
//   cone.rotation.y += 0.01;

//   renderer.render(scene, camera);
// }

// animate();

// // // 8️⃣ Adjust renderer when window resizes
// // window.addEventListener('resize', () => {
// //   camera.aspect = window.innerWidth / window.innerHeight;
// //   camera.updateProjectionMatrix();
// //   renderer.setSize(window.innerWidth, window.innerHeight);
// // });
// import * as THREE from "three"
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

// let scene, camera, renderer, group;

// function init() {
//   scene = new THREE.Scene();
//   scene.background = new THREE.Color('white');
//   scene.fog = new THREE.Fog('blue', 250, 1400);

//   camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
//   camera.position.set(0, 200, 400);

//   renderer = new THREE.WebGLRenderer({ antialias: true });
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   document.body.appendChild(renderer.domElement);

//   const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
//   dirLight.position.set(0, 0, 1).normalize();
//   scene.add(dirLight);

//   const pointLight = new THREE.PointLight(0xffffff, 4.5, 0, 0);
//   pointLight.color.setHSL(Math.random(), 1, 0.5);
//   pointLight.position.set(0, 100, 90);
//   scene.add(pointLight);

//   group = new THREE.Group();
//   group.position.y = 100;
//   scene.add(group);

//   const loader = new FontLoader();
//   loader.load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json", function (font) {
//     const textGeometry = new TextGeometry("Hello Three.js", {
//       font: font,
//       size: 40,
//       height: 10,
//       curveSegments: 12,
//       bevelEnabled: true,
//       bevelThickness: 2,
//       bevelSize: 1.5,
//       bevelSegments: 5,
//     });

//     textGeometry.computeBoundingBox();
//     const centerOffset = -0.5 * (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x);

//     const materials = [
//       // new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }),
//       new THREE.MeshPhongMaterial({ color: 0xffffff }),
//     ];

//     const textMesh = new THREE.Mesh(textGeometry, materials);
//     textMesh.position.x = centerOffset;
//     textMesh.rotation.y = Math.PI * 0.05;

//     group.add(textMesh);
//   });

//   window.addEventListener("resize", onWindowResize);
// }

// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// }

// function animate() {
//   requestAnimationFrame(animate);
//   group.rotation.y -= 0.01;
//   group.rotation.x += 0.01;
//   renderer.render(scene, camera);
// }

// init();
// animate();



import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let scene, camera, renderer, cube, controls;

init();
animate();

function init() {
  // 1️⃣ Create scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x202020);

  // 2️⃣ Create camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(2, 2, 5);

  // 3️⃣ Create renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // 4️⃣ Add geometry (a simple cube)
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({ color: 0x00ff99 });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // 5️⃣ Add light
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 5, 5);
  scene.add(light);

  // 6️⃣ Add orbit controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;  // smooth motion
  controls.dampingFactor = 0.05;  // control smoothness
  controls.enableZoom = true;     // allow zooming
  controls.enablePan = true;      // allow panning

  // 7️⃣ Handle window resizing
  window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  // rotate the cube slowly
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // update the orbit controls
  controls.update();

  renderer.render(scene, camera);
}
