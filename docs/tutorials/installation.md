---
sidebar_position: 1
title: Installation
---

# Installation

## ROS Installation

**Robot Operating System (ROS)** is the core framework for building and running robotic applications. It provides the middleware, communication tools, and libraries for developing robotics software.

- Ubuntu: https://wiki.ros.org/noetic/Installation/Ubuntu
- Source: https://wiki.ros.org/noetic/Installation/Source

## MAVROS-Noetic Installation

**MAVROS** is a ROS package that acts as a bridge between ROS and **MAVLink**-based autopilots (e.g., PX4, **ArduPilot**). It allows you to communicate with drones and other MAVLink-compatible devices using ROS topics, services, and parameters.

- Source: https://github.com/mavlink/mavros/tree/master/mavros#installation

## SMACH-Noetic Installation

**SMACH** is a Python library in ROS used for creating **state machines** to manage complex robot behaviors. It provides a structured way to define and execute **finite state machines (FSMs)**, where a robot's behavior is broken down into discrete states, and transitions between these states are defined based on conditions or events.
