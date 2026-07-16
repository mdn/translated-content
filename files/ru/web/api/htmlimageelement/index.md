---
title: HTMLImageElement
slug: Web/API/HTMLImageElement
---

{{APIRef("HTML DOM")}}

Интерфейс **`HTMLImageElement`** предоставляет специальные свойства и методы (расширяя обычный интерфейс {{domxref("HTMLElement")}} ) для управления вёрсткой и отображением элемента {{HTMLElement("img")}}.

{{InheritanceDiagram}}

## Свойства

_Наследует свойства родителя, {{domxref("HTMLElement")}}._

| Имя                                                   | Тип                    | Описание                                                                                                                                                                                                            |
| ----------------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `align`                                               | {{jsxref("String")}}   | Указывает расположение картинки зависящее от окружающего контента. Возможные значения: `"left"`, `"right"`, `"justify"`, и `"center"`.                                                                              |
| `alt`                                                 | {{jsxref("String")}}   | Повторяет атрибут HTML [`alt`](/ru/docs/Web/HTML/Reference/Elements/img#alt) указывающий на запасной контекст картинки.                                                                                             |
| `border`                                              | {{jsxref("String")}}   | Ширина рамки вокруг картинки. Устарело и вместо него следует использовать свойство CSS {{cssxref("border")}}.                                                                                                       |
| `complete` {{readonlyInline}}                         | {{domxref("Boolean")}} | Возвращает true, если браузер закончил загрузку картинки с ошибкой или успешно. Также возвращает true, когда не установлено значение {{domxref("HTMLImageElement.src", "src")}}, во всех остальных случаях - false. |
| `crossOrigin`                                         | {{jsxref("String")}}   | Является {{jsxref("String")}}, с настройками CORS для этого элемента изображения. Дополнительная информация: [Атрибуты настроек CORS](/ru/docs/Web/HTML/Reference/Attributes/crossorigin).                          |
| `currentSrc`{{readonlyInline}}{{experimental_inline}} | {{jsxref("String")}}   | Возвращает {{jsxref("String")}} с URL-адресом текущего изображения (что может измениться, например, в ответ на запросы мультимедиа).                                                                                |
| `height`                                              | `unsigned long`        | Отражает атрибут [`height`](/ru/docs/Web/HTML/Reference/Elements/img#height) HTML, указывая визуализированную высоту изображения в пикселях CSS.                                                                    |
| `hspace`                                              | `long`                 | Space to the left and right of the image.                                                                                                                                                                           |
| `isMap`                                               | {{domxref("Boolean")}} | Reflects the [`ismap`](/ru/docs/Web/HTML/Reference/Elements/img#ismap) HTML attribute, indicating that the image is part of a server-side image map.                                                                |
| `longDesc`                                            | {{jsxref("String")}}   | URI of a long description of the image.                                                                                                                                                                             |
| `lowSrc`                                              | {{jsxref("String")}}   | A reference to a low-quality (but faster to load) copy of the image.                                                                                                                                                |
| `name`                                                | {{jsxref("String")}}   |                                                                                                                                                                                                                     |
| `naturalHeight` {{readonlyInline}}                    | `unsigned long`        | Intrinsic height of the image in CSS pixels, if it is available; otherwise, `0`.                                                                                                                                    |
| `naturalWidth` {{readonlyInline}}                     | `unsigned long`        | Intrinsic width of the image in CSS pixels, if it is available; otherwise, `0`.                                                                                                                                     |
| `src`                                                 | {{jsxref("String")}}   | Reflects the [`src`](/ru/docs/Web/HTML/Reference/Global_attributes#src) HTML attribute, containing the URL of the image.                                                                                            |
| `srcset` {{experimental_inline}}                      |                        |                                                                                                                                                                                                                     |
| `useMap`                                              | {{jsxref("String")}}   | Reflects the [`usemap`](/ru/docs/Web/HTML/Reference/Elements/img#usemap) HTML attribute, containing a partial URL of a map element.                                                                                 |
| `vspace`                                              | `long`                 | Space above and below the image.                                                                                                                                                                                    |
| `width`                                               | `unsigned long`        | Reflects the [`width`](/ru/docs/Web/HTML/Reference/Elements/img#width) HTML attribute, indicating the rendered width of the image in CSS pixels.                                                                    |
| `x` {{readonlyInline}}{{non-standard_inline}}         | `long`                 | The horizontal offset from the nearest layer. (Mimic an old Netscape 4 behavior)                                                                                                                                    |
| `y` {{readonlyInline}}{{non-standard_inline}}         | `long`                 | The vertical offset from the nearest layer. (Mimic an old Netscape 4 behavior)                                                                                                                                      |

## Методы

_Наследует методы родителя, {{domxref("HTMLElement")}}._

- {{domxref("HTMLImageElement.Image()")}}
  - : The `Image()` constructor, taking two optional `unsigned` `long`, the width and the height of the resource, creates an instance of `HTMLImageElement` not inserted in a DOM tree.

## Пример

```js
var img1 = new Image(); // Конструктор HTML5
img1.src = "image1.png";
img1.alt = "alt";
document.body.appendChild(img1);

var img2 = document.createElement("img"); // Используем HTMLImageElement
img2.src = "image2.jpg";
img2.alt = "alt text";
document.body.appendChild(img2);

// выбираем первое изображение на странице
alert(document.images[0].src);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Элемент HTML, реализующий этот интерфейс: {{HTMLElement("img")}}
