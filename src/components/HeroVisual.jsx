import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroVisual() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.04);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x050505, 0);
    container.appendChild(renderer.domElement);

    // Group for the mechanical engineering sculpture
    const group = new THREE.Group();
    scene.add(group);

    // Materials - Titanium, Brushed Silver, Subtle Glow Wireframes
    const titaniumMaterial = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.95,
      roughness: 0.2,
      wireframe: false
    });

    const wireframeSilverMaterial = new THREE.MeshBasicMaterial({
      color: 0xe2e8f0,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });

    const chromeThinMaterial = new THREE.LineBasicMaterial({
      color: 0xd4d4d8,
      transparent: true,
      opacity: 0.35
    });

    // 1. Central Precision Turbine Ring (Toruses)
    const torusGeometry = new THREE.TorusGeometry(4.2, 0.08, 16, 100);
    const torusMesh1 = new THREE.Mesh(torusGeometry, wireframeSilverMaterial);
    group.add(torusMesh1);

    const torusGeometry2 = new THREE.TorusGeometry(5.2, 0.04, 16, 120);
    const torusMesh2 = new THREE.Mesh(torusGeometry2, wireframeSilverMaterial);
    torusMesh2.rotation.x = Math.PI / 3;
    group.add(torusMesh2);

    const torusGeometry3 = new THREE.TorusGeometry(3.2, 0.05, 16, 80);
    const torusMesh3 = new THREE.Mesh(torusGeometry3, wireframeSilverMaterial);
    torusMesh3.rotation.y = Math.PI / 4;
    group.add(torusMesh3);

    // 2. Aerodynamic Lattice Blades / Precision Engineering Fins
    const finCount = 18;
    const finGroup = new THREE.Group();
    for (let i = 0; i < finCount; i++) {
      const angle = (i / finCount) * Math.PI * 2;
      const finGeometry = new THREE.BoxGeometry(0.08, 2.8, 0.4);
      const fin = new THREE.Mesh(finGeometry, titaniumMaterial);
      fin.position.x = Math.cos(angle) * 3.6;
      fin.position.y = Math.sin(angle) * 3.6;
      fin.rotation.z = angle + Math.PI / 4;
      fin.rotation.y = Math.PI / 6;
      finGroup.add(fin);
    }
    group.add(finGroup);

    // 3. Inner Kinetic Octahedron Core (representing computational logic)
    const octaGeometry = new THREE.OctahedronGeometry(1.6, 1);
    const octaMesh = new THREE.Mesh(octaGeometry, wireframeSilverMaterial);
    group.add(octaMesh);

    // 4. Subtle Orbital Engineering Dust Particles
    const particleCount = 220;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const r = 4 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = r * Math.cos(phi);
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xc4c4c4,
      size: 0.05,
      transparent: true,
      opacity: 0.4
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Subtle Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
    directLight1.position.set(10, 15, 10);
    scene.add(directLight1);

    const directLight2 = new THREE.DirectionalLight(0x71717a, 0.8);
    directLight2.position.set(-10, -10, -5);
    scene.add(directLight2);

    // Mouse Parallax
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      targetMouseX = x * 0.4;
      targetMouseY = y * 0.3;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;

      if (!prefersReducedMotion) {
        // Slow cinematic movement
        group.rotation.y = elapsedTime * 0.12 + currentMouseX;
        group.rotation.x = Math.sin(elapsedTime * 0.08) * 0.15 + currentMouseY;
        
        torusMesh2.rotation.z = elapsedTime * 0.08;
        torusMesh3.rotation.x = elapsedTime * 0.09;
        finGroup.rotation.z = elapsedTime * -0.06;
        octaMesh.rotation.y = elapsedTime * 0.2;
        octaMesh.rotation.z = elapsedTime * 0.15;

        particles.rotation.y = elapsedTime * 0.02;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      torusGeometry.dispose();
      torusGeometry2.dispose();
      torusGeometry3.dispose();
      octaGeometry.dispose();
      particleGeometry.dispose();
      titaniumMaterial.dispose();
      wireframeSilverMaterial.dispose();
      particleMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-75 md:opacity-85"
      aria-hidden="true"
    />
  );
}

