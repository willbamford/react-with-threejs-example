import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const VisWithHooks = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    let width = mountRef.current.clientWidth
    let height = mountRef.current.clientHeight
    let frameId

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0xff00ff })
    const cube = new THREE.Mesh(geometry, material)

    camera.position.z = 4
    scene.add(cube)
    renderer.setClearColor('#000000')
    renderer.setSize(width, height)

    const handleResize = () => {
      width = mountRef.current.clientWidth
      height = mountRef.current.clientHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    const renderScene = () => {
      renderer.render(scene, camera)
    }

    const animate = () => {
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01

      renderScene()
      frameId = window.requestAnimationFrame(animate)
    }

    const start = () => {
      if (!frameId) {
        frameId = requestAnimationFrame(animate)
      }
    }

    const stop = () => {
      cancelAnimationFrame(frameId)
    }

    mountRef.current.appendChild(renderer.domElement)
    window.addEventListener('resize', handleResize)
    start()

    return () => {
      stop()
      window.removeEventListener('resize', handleResize)
      mountRef.current.removeChild(renderer.domElement)
    }
  }, [])

  return <div className="vis" ref={mountRef} />
}

export default VisWithHooks
