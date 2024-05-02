---
title: Элемент.scrollTop
slug: Web/API/Element/scrollTop
---

{{ APIRef("DOM") }}

`Свойство scrollTop` считывает или устанавливает количество пикселей, прокрученных от верха элемента. `scrollTop` измеряет дистанцию от верха элемента до верхней точки видимого контента. Когда контент элемента не создаёт вертикальную прокрутку, его `scrollTop` равно `0`.

## Синтаксис

```
//Получаем количество прокрученных пикселей
var  intElemScrollTop = someElement.scrollTop;
```

_После выполнения этого кода, _`intElemScrollTop` - целое число пикселей, на которое контент {{domxref("element")}} был прокручен от верха.

```
// Устанавливаем количество прокрученных пикселей
element.scrollTop = intValue;
```

`scrollTop` может быть любым целым числом, с определёнными оговорками:

- Если элемент не может быть прокручен (т.е. у него нет переполнения или если элемент **не прокручиваем**), `scrollTop` устанавливается в `0`.
- Если значение меньше `0`, `scrollTop` устанавливается в `0`.
- Если установлено значение больше, чем максимум прокручиваемого контента, `scrollTop` устанавливается в максимум.

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
      желтое солнце. Вокруг него на расстоянии приблизительно девяноста восьми
      миллионов миль вращается по своей орбите ничтожнейшая зелено-голубая
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

## Ссылки

- [W3C Draft CSSOM View Module](http://dev.w3.org/csswg/cssom-view/#dom-element-scrolltop)
- [MSDN's scrollTop definition](<http://msdn.microsoft.com/en-us/library/ms534618(VS.85).aspx>)
- [MSDN's Measuring Element Dimension and Location](<http://msdn.microsoft.com/en-us/library/hh781509(v=vs.85).aspx>)
