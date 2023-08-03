---
title: Element.scrollTo()
slug: Web/API/Element/scrollTo
---

{{ APIRef }}

**`scrollTo()`** метод интерфейса {{domxref("Element")}}, осуществляет прокрутку по заданному набору координат внутри данного элемента.

## Синтаксис

```
element.scrollTo(x-coord, y-coord)
element.scrollTo(options)
```

### Параметры

- `x-coord` координаты пикселя по горизонтальной оси элемента, который необходимо отобразить вверху слева.
- `y-coord` координаты пикселя по вертикальной оси элемента, который необходимо отобразить вверху слева.

\- or -

- `options` как объект {{domxref("ScrollToOptions")}}, с тремя свойствами.

## Примеры

```js
element.scrollTo(0, 1000);
```

С помощью `options`:

```js
element.scrollTo({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## Спецификации

{{Specifications}}

## Браузерная совместимость

{{Compat}}

## Смотрите также

- {{domxref("Element.scrollTop")}}, {{domxref("Element.scrollLeft")}}
- {{domxref("Window.scrollTo()")}}
