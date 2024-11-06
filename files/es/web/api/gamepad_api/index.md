---
title: Gamepad API
slug: Web/API/Gamepad_API
---

{{DefaultAPISidebar("Gamepad API")}}

**Gamepad API** es la manera de los desarrolladores de acceder y responder a las señales de los gamepads y otros controles para juegos de una manera simple y consistente. Éste contiene tres interfaces, dos eventos y una función especializada, para responder a los gamepads siendo conectados y desconectados, y acceder a otra información sobre los mismos gamepads, y que botones y otros controles están siendo presionados.

## Interfaces

- [`Gamepad`](/es/docs/Web/API/Gamepad)
  - : Representa un gamepad/control conectado a la computadora.
- [`GamepadButton`](/es/docs/Web/API/GamepadButton)
  - : Representa un botón en uno de los gamepads conectados.
- [`GamepadEvent`](/es/docs/Web/API/GamepadEvent)
  - : El evento objeto representa eventos que son enviados a los gamepads.

### Extensiones experimentales de los gamepads

- [`GamepadHapticActuator`](/es/docs/Web/API/GamepadHapticActuator)
  - : Representa el hardware en el control designado para proveer retroalimentación háptica al usuario (si está disponible), más comunmente hardware de vibración.
- [`GamepadPose`](/es/docs/Web/API/GamepadPose)
  - : Representa la posición de un control (ej. posición y orientación el espacio 3D) en el caso de un controllador [WebVR](/es/docs/Web/API/WebVR_API). Éste no es usado por el nuevo estándar [WebXR](/es/docs/Web/API/WebXR_Device_API).

Ver también las [extensiones para la interfaz del navegador](/es/docs/Web/API/Gamepad#Experimental_extensions_to_Gamepad), para caracteristicas que le permitan acceder a la información mencionada.

### Extensiones y otras interfaces

#### Navigator

- {{domxref("Navigator.getGamepads()")}}
  - : Una extensión a el objeto {{domxref("Navigator")}} que devuelve un arreglo de objetos {{domxref("Gamepad")}}, uno para cada gamepad conectado.

#### Eventos del Window

- {{domxref("Window.ongamepadconnected")}}
  - : Representa un manejador de evento que se ejecutará cuando un gamepad es conectado (cuando se dispara el evento [`gamepadconnected`](/es/docs/Web/Reference/Events/gamepadconnected)).
- {{domxref("Window.ongamepaddisconnected")}}
  - : Representa un manejador de evento que se ejecutará cuando un gamepad es desconectado (cuando se dispara el evento [`gamepaddisconnected`](/es/docs/Web/Reference/Events/gamepaddisconnected)).

## Guías y tutoriales

- [Usando la gamepad API](/es/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- [Implementación de controles usando la gamepad API](/es/docs/Games/Techniques/Controls_Gamepad_API)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [La gamepad API](https://hacks.mozilla.org/2013/12/the-gamepad-api/) por Ted Mielczarek y Robert Nyman
- [Página de demostración simple de la API](http://luser.github.io/gamepadtest/) ([código fuente](https://github.com/luser/gamepadtest))
