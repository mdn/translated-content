---
title: Accelerometer
slug: Web/API/Accelerometer
---

{{APIRef("Generic Sensor API")}}

The **`Accelerometer`** interface of the [Sensor APIs](/zh-CN/docs/Web/API/Sensor_APIs) provides on each reading the acceleration applied to the device along all three axes.

To use this sensor, the user must grant permission to the `'accelerometer'`, device sensor through the [`Permissions`](/zh-CN/docs/Web/API/Permissions) API.

If a feature policy blocks the use of a feature, it is because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. See {{httpheader('Permissions-Policy')}} for implementation instructions.

## Constructor

- {{domxref("Accelerometer.Accelerometer()")}}
  - : Creates a new `Accelerometer` object.

## Properties

- {{domxref('Accelerometer.x')}} {{readonlyinline}}
  - : Returns a double containing the acceleration of the device along the device's x axis.
- {{domxref('Accelerometer.y')}} {{readonlyinline}}
  - : Returns a double containing the acceleration of the device along the device's y axis.
- {{domxref('Accelerometer.z')}} {{readonlyinline}}
  - : Returns a double containing the acceleration of the device along the device's z axis.

## Example

Acceleration is typically read in the {{domxref('Sensor.onreading')}} event callback. In the example below this occurs sixty times a second.

```js
let accelerometer = new Accelerometer({frequency: 60});

accelerometer.addEventListener('reading', e => {
  console.log("Acceleration along the X-axis " + accelerometer.x);
  console.log("Acceleration along the Y-axis " + accelerometer.y);
  console.log("Acceleration along the Z-axis " + accelerometer.z);
});
accelerometer.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
