import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
loader.load('alfa_romeo_75.glb', function (gltf) {
  const carModel = gltf.scene;
  carModel.scale.set(0.5, 0.5, 0.5);
  carModel.position.set(0, 0, 0);
  scene.add(carModel);
});
