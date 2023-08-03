---
title: deviceorientation
slug: Web/API/Window/deviceorientation_event
---

Событие `deviceorientation` срабатывает, когда с сенсоров ориентации поступают новые данные о текущем положении устройства внутри Земной системы координат. Эти данные собираются с помощью магнитометра устройства. Более детальное объяснение дано в [Ориентация и объяснение данных движения](/ru/docs/DOM/Orientation_and_motion_data_explained).

## Общая информация

- Спецификация
  - : Событие [DeviceOrientation](http://www.w3.org/TR/orientation-event/#deviceorientation)
- Определение
  - : DeviceOrientationEvent
- Всплывает
  - : Нет
- Отменяемо
  - : Нет
- Целевой элемент
  - : По умолчанию (`window`)
- Действие по умолчанию
  - : Нет

## Свойства

| Property                        | Type                       | Description                                                                                                                                                                                                           |
| ------------------------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree).                                                                                                                                                                |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | The type of event.                                                                                                                                                                                                    |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not                                                                                                                                                                             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Whether the event is cancellable or not?                                                                                                                                                                              |
| `alpha` {{readonlyInline}}      | double (float)             | The current orientation of the device around the Z axis; that is, how far the device is rotated around a line perpendicular to the device.                                                                            |
| `beta` {{readonlyInline}}       | double (float)             | The current orientation of the device around the X axis; that is, how far the device is tipped forward or backward.                                                                                                   |
| `gamma` {{readonlyInline}}      | double (float)             | The current orientation of the device around the Y axis; that is, how far the device is turned left or right.                                                                                                         |
| `absolute` {{readonlyInline}}   | {{jsxref("boolean")}}      | This value is `true` if the orientation is provided as a difference between the device coordinate frame and the Earth coordinate frame; if the device can't detect the Earth coordinate frame, this value is `false`. |

## Пример

```js
if (window.DeviceOrientationEvent) {
  window.addEventListener(
    "deviceorientation",
    function (event) {
      // alpha: rotation around z-axis
      var rotateDegrees = event.alpha;
      // gamma: left to right
      var leftToRight = event.gamma;
      // beta: front back motion
      var frontToBack = event.beta;

      handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
    },
    true,
  );
}

var handleOrientationEvent = function (
  frontToBack,
  leftToRight,
  rotateDegrees,
) {
  // Сделайте что-нибудь необычное здесь
};
```

## Совместимость с браузерами

{{Compat}}

## Похожие события

- [`devicemotion`](/ru/docs/Web/Events/devicemotion)

## Смотрите также

- {{domxref("DeviceMotionEvent")}}
- {{domxref("window.ondeviceorientation")}}
- [Определение ориентации устройства](/ru/docs/Web/API/Detecting_device_orientation)
- [Ориентация и объяснение данных о движении](/ru/docs/Web/Guide/Events/Orientation_and_motion_data_explained)
- Имитация события смены ориентации в настольный браузерах с помощью [orientation-devtool](http://louisremi.github.com/orientation-devtool/)
