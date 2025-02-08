---
sidebar_position: 4
title: Roadmap & Todos
---

# Roadmap & Todos

Here are our current development plans and to-dos:

## Todo

- Cover the barometer on the navio2 flight controller with a piece of cell foam before drone use outside
- Design/3d-print adapter mount and screw to bottom of frame (for camera)
- Install camera
    - Determine which camera to use
    - If using normal raspberry pi camera (using tool?), use camera (when on drone) to collect data, sort through images to make a dataset, and train a model; then, put into TensorFlow Lite and load onto raspberry pi

### Coral USB Accelerator (TPU)

The Google Coral USB Accelerator is a compact device that adds fast, efficient machine learning inference to the Raspberry Pi. Powered by an Edge TPU, it enables real-time computer vision tasks like object detection and image classification on edge devices.

- Pre-req: setting up TensorFlow on the pi (tutorial)
- https://www.youtube.com/watch?v=qJMwNHQNOVU
    - https://github.com/EdjeElectronics/TensorFlow-Lite-Object-Detection-on-Android-and-Raspberry-Pi/tree/master
- https://www.youtube.com/watch?v=S0IRWtHtMFw
- https://www.youtube.com/watch?v=6O0M7MaRjTs
