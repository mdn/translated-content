---
title: Элемент.scrollTop
slug: Web/API/Element/scrollTop
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

Свойство **`Element.scrollTop`** считывает или устанавливает количество пикселей, на которое содержимое элемента прокручено по вертикали.

Значение `scrollTop` элемента — это расстояние от верха элемента до его самого верхнего _видимого_ содержимого. Если содержимое элемента не создает вертикальную полосу прокрутки, его значение `scrollTop` равно `0`.

`scrollTop` может быть любым целым числом с определёнными оговорками:

- Если элемент не может быть прокручен (например, у него нет переполнения или если элемент является **не прокручиваемым**), то `scrollTop` устанавливается в `0`.
- Если значение меньше `0`, то `scrollTop` устанавливается в `0`.
- Если установлено значение, превышающее максимально доступное для элемента, то `scrollTop` устанавливает максимальное значение.

Когда `scrollTop` используется в корневом элементе (элементе `<html>`), возвращается `scrollY` окна. [Это особый случай `scrollTop`] (https://www.w3.org/TR/2016/WD-cssom-view-1-20160317/#dom-element-scrolltop).

> [!WARNING]
> В системах, использующих масштабирование дисплея, `scrollTop` может возвращать десятичное значение.

## Значение

Число.

## Примеры

### Прокрутка элемента

В этом примере попробуйте прокрутить внутренний контейнер с пунктирной рамкой и посмотрите, как меняется значение `scrollTop`.

#### HTML

```html
<div id="container">
  <div id="scroller">
    <p>
      Далеко-далеко на неизведанных, да и никому не интересных, задворках
      западного спирального рукава Галактики затеряно маленькое, невзрачное
      жёлтое солнце. Вокруг него на расстоянии приблизительно девяноста восьми
      миллионов миль вращается по своей орбите ничтожнейшая зелёно-голубая
      планета. Некоторые обитающие на ней живые организмы происходят от обезьян
      и так восхитительно примитивны, что до сих пор считают электронные часы
      довольно-таки гениальным изобретением.
    </p>
  </div>
</div>

<div id="output">scrollTop: 0</div>
```

#### CSS

```css
#scroller {
  overflow: scroll;
  height: 150px;
  width: 150px;
  border: 5px dashed orange;
}

#output {
  padding: 1rem 0;
}
```

#### JavaScript

```js
const scroller = document.querySelector("#scroller");
const output = document.querySelector("#output");

scroller.addEventListener("scroll", (event) => {
  output.textContent = `scrollTop: ${scroller.scrollTop}`;
});
```

#### Результат

{{EmbedLiveSample("Прокрутка_элемента", 400, 250)}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Measuring Element Dimension and Location with CSSOM in Windows Internet Explorer 9](<https://learn.microsoft.com/ru-ru/previous-versions/hh781509(v=vs.85)>)
- {{domxref("Element.scrollLeft")}}
- {{domxref("Element.scrollTo()")}}
