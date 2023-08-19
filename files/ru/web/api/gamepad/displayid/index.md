---
title: Gamepad.displayId
slug: Web/API/Gamepad/displayId
---

{{DefaultAPISidebar("WebVR API")}}{{SeeCompatTable}}

Свойство **displayId** только для чтения {{domxref("Gamepad")}} возвращаемый интерфейс* {{domxref("VRDisplay.displayId")}} связанный с {{domxref("VRDisplay")}} — `VRDisplay` (дисплей виртуальной реальности) в котором геймпад управляет отображаемой сценой.*

Геймпад считается связанным с {{domxref("VRDisplay")}} если он сообщает о позиции, которая находится в том же месте, что и {{domxref("VRDisplay.pose")}}.

## Syntax

```js
var myDisplayId = gamepadInstance.displayId;
```

### Value

Число, представляющее связанный интерфейс {{domxref("VRDisplay.displayId")}}.Если число равно 0, то геймпад не связан с дисплеем VR( виртуальной реальности).

## Examples

```js
window.addEventListener("gamepadconnected", function (e) {
  if (!e.gamepad.displayId) {
    console.log("Gamepad connected");
  } else {
    console.log(
      "Gamepad connected, associated with VR display " + e.gamepad.displayId,
    );
  }
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## See also

- [WebVR API homepage](/ru/docs/Web/API/WebVR_API)
- [MozVr.com](http://mozvr.com/) — демосцены, материалы, доступные для скачивания и другие материалы команды the Mozilla VR team.
