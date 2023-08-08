---
title: Sensor
slug: Web/API/Sensor
---

{{APIRef("Generic Sensor API")}}

The **`Sensor`** interface of the the [Sensor APIs](/docs/Web/API/Sensor_APIs) is the base class for all the other sensor interfaces. This interface cannot be used directly. Instead it provides properties, event handlers, and methods accessed by interfaces that inherit from it.

If a feature policy blocks use of a feature it is because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. See {{httpheader('Feature-Policy')}} for implementation instructions.

## Interfaces based on Sensor

Below is a list of interfaces based on the Sensor interface.

- {{domxref('Accelerometer')}}
- {{domxref('AmbientLightSensor')}}
- {{domxref('Gyroscope')}}
- {{domxref('LinearAccelerationSensor')}}
- {{domxref('Magnetometer')}}
- {{domxref('OrientationSensor')}}

## Properties

- {{domxref('Sensor.activated')}} {{readonlyinline}}
  - : Returns a {{jsxref("Boolean")}} indicating whether the sensor is active.
- {{domxref('Sensor.hasReading')}} {{readonlyinline}}
  - : Returns a {{jsxref("Boolean")}} indicating whether the sensor has a reading.
- {{domxref('Sensor.timestamp')}} {{readonlyinline}}
  - : Returns the time stamp of the latest sensor reading.

### Event handlers

- {{domxref('Sensor.onerror')}}
  - : Called when an error occurs on one of the child interfaces of the `Sensor` interface.
- {{domxref('Sensor.onreading')}}
  - : Called when a reading is taken on one of the child interfaces of the Sensor interface.
- {{domxref('Sensor.onactivate')}}
  - : Called when one of the Sensor interface's becomes active.

## Methods

- {{domxref('Sensor.start()')}}
  - : Activates one of the sensors based on `Sensor`.
- {{domxref('Sensor.stop()')}}
  - : Deactivates one of the sensors based on `Sensor`.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
