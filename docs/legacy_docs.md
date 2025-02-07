---
sidebar_position: 1
---

# Legacy Docs (Temporary)

## Overview

- To get on ethernet: `ssh pi@navio.local`
- Drone Password: drone1234!
- General overview Youtube videos
    - https://www.youtube.com/watch?v=qJMwNHQNOVU
    - https://www.youtube.com/watch?v=S0IRWtHtMFw
    - https://www.youtube.com/watch?v=6O0M7MaRjTs
- Notes:
    - Need ubuntu for this (20.04) (can also compile from source)
    - Pre-req: setting up TensorFlow on the pi (tutorial)

## To Do

- Cover the barometer on the navio2 flight controller with a piece of cell foam before drone use outside
- Design/3d-print adapter mount and screw to bottom of frame (for camera)
- Install camera
    - Determine which camera to use
    - If using normal raspberry pi camera (using tool?), use camera (when on drone) to collect data, sort through images to make a dataset, and train a model; then, put into TensorFlow Lite and load onto raspberry pi
