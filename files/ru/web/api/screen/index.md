---
title: Screen
slug: Web/API/Screen
l10n:
  sourceCommit: ee0b1ae4976a379b0305813cbd84f05aa7e8d95e
---

{{APIRef("CSSOM")}}

Интерфейс `Screen` представляет экран, обычно отображающий текущее окно, его можно получить с помощью {{DOMxRef("window.screen")}}.

Обратите внимание, что браузеры определяют текущим тот экран, который находится в центре окна браузера.

{{InheritanceDiagram}}

## Свойства экземпляра

_Также наследует свойства от своего родительского объекта {{domxref("EventTarget")}}_.

- {{DOMxRef("Screen.availHeight")}}
  - : Возвращает высоту экрана в пикселях за исключением постоянных или «полупостоянных» элементов пользовательского интерфейса, отображаемых операционной системой, таких как панель задач в Windows.
- {{DOMxRef("Screen.availWidth")}}
  - : Возвращает размер доступного окну горизонтального пространства в пикселях.
- {{DOMxRef("Screen.colorDepth")}}
  - : Возвращает глубину цвета экрана.
- {{DOMxRef("Screen.height")}}
  - : Возвращает высоту экрана в пикселях.
- {{domxref("Screen.isExtended")}} {{experimental_inline}} {{securecontext_inline}}
  - : Возвращает `true` если устройство пользователя имеет несколько экранов и `false` в противном случае.
- {{DOMxRef("Screen.orientation")}}
  - : Возвращает экземпляр {{DOMxRef("ScreenOrientation")}} связанный с экраном.
- {{DOMxRef("Screen.pixelDepth")}}
  - : Возвращает количество битов информации на один пиксель экрана.
- {{DOMxRef("Screen.width")}}
  - : Возвращает ширину экрана.
- {{DOMxRef("Screen.mozEnabled")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Значение типа `Boolean`. Установка в `false` отключает экран.
- {{DOMxRef("Screen.mozBrightness")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Управляет яркостью экрана. Ожидается значение в диапазоне от 0 до 1.0.

## Методы экземпляра

_Также наследует методы от своего родительского объекта {{domxref("EventTarget")}}_.

- {{DOMxRef("Screen.lockOrientation")}} {{Deprecated_Inline}}
  - : Блокирует ориентацию экрана (доступно только в полноэкранном режиме или для установленных приложений)
- {{DOMxRef("Screen.unlockOrientation")}} {{Deprecated_Inline}}
  - : Разблокирует ориентацию экрана (доступно только в полноэкранном режиме или для установленных приложений)

### События

- {{domxref("Screen.change_event", "change")}} {{experimental_inline}} {{securecontext_inline}}
  - : Возникает, когда происходит изменение экрана — его ширины или высоты, доступной ширины или высоты, глубины цвета или ориентации.
- {{DOMxRef("Screen.orientationchange_event", "orientationchange")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Возникает, когда происходит изменение ориентации экрана.

## Примеры

```js
if (screen.colorDepth < 8) {
  // использовать версию страницы с неполным количеством цветов
} else {
  // использовать обычную полноцветную версию страницу
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
