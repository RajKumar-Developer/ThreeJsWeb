import "./style.css"
import * as Three from 'three';

const scene = new Three.Scene();
const camera = new Three.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
const renderer = new Three.WebGLRenderer({
 canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight)
camera.position.setZ(30);
renderer.render(scene,camera);

const geometry = new Three.TorusGeometry(10,3,16,100)
// const material = new Three.MeshBasicMaterial({color:0xFF6347,wireframe:true})
const material = new Three.MeshStandardMaterial({color:0xFF6347})
const torus = new Three.Mesh(geometry,material);
scene.add(torus)
const pointLight = new Three.PointLight(0xFFFFFF)
pointLight.position.set(5,5,5)

const ambitLight = new Three.AmbientLight(0xffffff);
scene.add(pointLight,ambitLight)
scene.add(pointLight)
function animate(){
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  renderer.render(scene,camera);

}
animate()

