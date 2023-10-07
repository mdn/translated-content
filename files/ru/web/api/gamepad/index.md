---
title: Gamepad
slug: Web/API/Gamepad
---

{{APIRef("Gamepad API")}}

Интерфейс **`Gamepad`** [Gamepad API](/ru/docs/Web/API/Gamepad_API) определяет отдельный геймпад или контроллер, предоставляющий доступ к такой информации, как: нажатие кнопок, позиции осей, и id.

Объект `Gamepad` может быть возвращён в одном из двух случаев: как свойство `gamepad` событий {{event("gamepadconnected")}} и {{event("gamepaddisconnected")}}, или считыванием любой позиции в массиве, возвращённом методом {{domxref("Navigator.getGamepads()")}}.

## Свойства

- {{domxref("Gamepad.displayId")}} {{readonlyInline}}
  - : _Возвращает {{domxref("VRDisplay.displayId")}} связанный с {{domxref("VRDisplay")}} (при необходимости) — `VRDisplay` отображаемая область которого управляется геймпадом._
- {{domxref("Gamepad.id")}} {{readonlyInline}}
  - : {{domxref("DOMString")}} содержит идентификационную информацию о контроллере.
- {{domxref("Gamepad.index")}} {{readonlyInline}}
  - : Целое автоинкрементируемое значение, уникальное для каждого устройства, подключённого в данный момент к системе.
- {{domxref("Gamepad.mapping")}} {{readonlyInline}}
  - : Строка, указывающая, переназначил ли браузер элементы управления устройства на уже известный шаблон.
- {{domxref("Gamepad.connected")}} {{readonlyInline}}
  - : Логическое свойство показывающее, подключён ли геймпад к системе в данный момент.
- {{domxref("Gamepad.buttons")}} {{readonlyInline}}
  - : Массив объектов {{domxref("gamepadButton")}} представляющих кнопки устройства.
- {{domxref("Gamepad.axes")}} {{readonlyInline}}
  - : Массив, представляющий элементы управления осями устройства (например, аналоговые стики).
- {{domxref("Gamepad.timestamp")}} {{readonlyInline}}
  - : {{domxref("DOMHighResTimeStamp")}} представляет время последнего обновления данных геймпада.

### Экспериментальные расширения для Gamepad

Следующие интерфейсы определены в спецификации {{SpecName("GamepadExtensions")}}, и предоставляют доступ к экспериментальным возможностям, таким как тактильная обратная связь (haptic feedback) и информация о положении WebVR контроллера.

- {{domxref("Gamepad.hand")}} {{readonlyInline}}
  - : Перечисляемое значение, которое определяет в какой руке находится контроллер.
- {{domxref("Gamepad.hapticActuators")}} {{readonlyInline}}
  - : Массив, содержащий объекты {{domxref("GamepadHapticActuator")}}, каждый из которых представляет собой аппаратные средства тактильной обратной связи (haptic feedbac) доступные для контроллера.
- {{domxref("Gamepad.pose")}} {{readonlyInline}}
  - : Объект {{domxref("GamepadPose")}} представляет информацию о положении WebVR контроллера (например, позиция и ориентация в 3D пространстве).

## Пример

```js
window.addEventListener("gamepadconnected", function (e) {
  console.log(
    "Gamepad connected at index %d: %s. %d buttons, %d axes.",
    e.gamepad.index,
    e.gamepad.id,
    e.gamepad.buttons.length,
    e.gamepad.axes.length,
  );
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Using the Gamepad API](/ru/docs/Web/Guide/API/Gamepad)
- [Gamepad API](/ru/docs/Web/API/Gamepad_API)
