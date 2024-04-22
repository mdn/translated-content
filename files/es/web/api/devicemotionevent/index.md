---
title: DeviceMotionEvent
slug: Web/API/DeviceMotionEvent
---

{{APIRef("Device Orientation Events")}}{{SeeCompatTable}}

El evento `DeviceMotionEvent` proporciona a los desarrolladores información acerca de la velocidad de los cambios en la posición y orientación del dispositivo.

> **Advertencia:** **Aviso:** Acualmente, Firefox and Chrome no manejan las corrdenadas de la misma forma. Tenga en cuenta esto cuando lo use.

## Constructor

- {{DOMxRef("DeviceMotionEvent.DeviceMotionEvent()")}} {{Non-standard_Inline}}
  - : Crea un nuevo `DeviceMotionEvent`.

## Properties

- {{DOMxRef("DeviceMotionEvent.acceleration")}}{{ReadOnlyInline}}
  - : Objeto que nos proporciona la aceleración del dispositivo en los ejes X, Y y Z. La aceleración está expresada en [m/s2](https://en.wikipedia.org/wiki/Meter_per_second_squared).
- {{DOMxRef("DeviceMotionEvent.accelerationIncludingGravity")}}{{ReadOnlyInline}}
  - : Objeto que nos proporciona la aceleración del dispositivo en los ejes X, Y y Z con el efecto de la gravedad. La aceleración está expresada en [m/s2](https://en.wikipedia.org/wiki/Meter_per_second_squared).
- {{DOMxRef("DeviceMotionEvent.rotationRate")}}{{ReadOnlyInline}}
  - : Objeto que nos proporciona los cambios en la orientación del dispositivo en los ejes alpha, beta y gamma. La velocidad de rotación se expresa en grados por segundo
- {{DOMxRef("DeviceMotionEvent.interval")}}{{ReadOnlyInline}}
  - : Número que representa el intervalo de tiempo, en milisegundos, en el que se obtienen los datos del dispositivo..

## Ejemplo

```js
window.addEventListener("devicemotion", function (event) {
  console.log(event.acceleration.x + " m/s2");
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [`deviceorientation`](/es/docs/Web/Reference/Events/deviceorientation)
- {{DOMxRef("DeviceOrientationEvent")}}
- [`devicemotion`](/es/docs/Web/Reference/Events/devicemotion)
- [Detecting device orientation](/es/docs/WebAPI/Detecting_device_orientation)
- [Orientation and motion data explained](/es/DOM/Orientation_and_motion_data_explained)
