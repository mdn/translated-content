---
title: window.getComputedStyle()
slug: Web/API/Window/getComputedStyle
---

Метод **`Window.getComputedStyle()`** возвращает объект, содержащий значения всех CSS-свойств элемента, полученных после применения всех активных таблиц стилей, и завершения базовых вычислений значений, которые они могут содержать. Некоторые CSS-свойства доступны через API, предоставляемые объектом, или индексацию по именам CSS-свойств.

## Синтаксис

```
var style = window.getComputedStyle(element [, pseudoElt]);
```

- `element`
  - : {{domxref("Element")}}, свойства которого необходимо получить.
- `pseudoElt` {{optional_inline}}
  - : Строка указывающая на найденный псевдо-элемент. Опускается (или `null`) для не псевдо-элементов.

Возвращённый `style` живой {{domxref("CSSStyleDeclaration")}} объект, который обновляется автоматически когда элемент стилей изменяется.

## Выводы

Метод `Window.getComputedStyle()` предоставляет все значения CSS-свойств элементов после применения текущей таблицы стилей или базового расчёта каких-либо значений, которые могут быть.

## Пример

```js
var elem1 = document.getElementById("elemId");
var style = window.getComputedStyle(elem1, null);

// this is equivalent:
// var style = document.defaultView.getComputedStyle(elem1, null);
```

```js
<style>
 #elem-container{
   position: absolute;
   left:     100px;
   top:      200px;
   height:   100px;
 }
</style>

<div id="elem-container">dummy</div>
<div id="output"></div>

<script>
  function getTheStyle(){
    var elem = document.getElementById("elem-container");
    var theCSSprop = window.getComputedStyle(elem,null).getPropertyValue("height");
    document.getElementById("output").innerHTML = theCSSprop;
   }
  getTheStyle();
</script>
```

```js
function dumpComputedStyles(elem, prop) {
  var cs = window.getComputedStyle(elem, null);
  if (prop) {
    console.log(prop + " : " + cs.getPropertyValue(prop));
    return;
  }
  var len = cs.length;
  for (var i = 0; i < len; i++) {
    var style = cs[i];
    console.log(style + " : " + cs.getPropertyValue(style));
  }
}
```

## Описание

Возвращённый объект - это такой же объект, который возвращается из свойства элемента {{domxref("HTMLElement.style", "style")}}; Так или иначе, эти два объекта имеют разные назначения. Объект который возвращается из `getComputedStyle` только для чтения и может быть использован для инспектирования стиля элемента (включая описание из `<style>` элемента или внешней таблицы стилей). Объект `element.style` следует использовать для установки стилей на специфических элементах.

Первый аргумент должен быть элементом (вставка узлов которые не являются элементами, например `#text` выдаст ошибку).

## `defaultView`

Во многих примерах кода, `getComputedStyle` используется из объекта `document.defaultView`. Почти во всех случаях это не нужно, поскольку `getComputedStyle` существует в объекте `window`. Это что-то на подобии шаблона defaultView который был некой прослойкой. Люди не хотели писать спецификацию для `window` и создавали `API` которое также могло использоваться для Java. Так или иначе [есть только один случай](https://github.com/jquery/jquery/pull/524#issuecomment-2241183) когда метод `defaultView` должен использоваться: когда вы используете Firefox 3.6 чтобы получить доступ к вычисленным стилям.

## Использования с псевдо-элементами

`getComputedStyle` может получить информацию о стилях из псевдо-элемента (например - `::after`, `::before`, `::marker`, `::line-marker` - [спецификация](https://www.w3.org/TR/css-pseudo-4/)).

```html
<style>
  h3::after {
    content: "rocks!";
  }
</style>

<h3>generated content</h3>

<script>
  var h3 = document.querySelector("h3");
  var result = getComputedStyle(h3, ":after").content;

  console.log("the generated content is: ", result); // возвратит 'rocks!'
</script>
```

## Notes

The values returned by `getComputedStyle` are known as {{cssxref("resolved_value", "resolved values")}}. These are usually the same as the CSS 2.1 {{cssxref("computed_value","computed values")}}, but for some older properties like `width`, `height` or `padding`, they are instead the {{cssxref("used_value","used values")}}. Originally, CSS 2.0 defined the computed values to be the "ready to be used" final values of properties after cascading and inheritance, but CSS 2.1 redefined computed values as pre-layout, and used values as post-layout. For CSS 2.0 properties, the `getComputedStyle` function returns the old meaning of computed values, now called **used values**. An example of difference between pre- and post-layout values includes the resolution of percentages that represent the width or the height of an element (also known as its layout), as those will be replaced by their pixel equivalent only in the used value case.

The returned value is, in certain known cases, expressly inaccurate by deliberate intent. In particular, to avoid the so called CSS History Leak security issue, browsers may expressly "lie" about the used value for a link and always return values as if a user has never visited the linked site. See <http://blog.mozilla.com/security/2010/03/31/plugging-the-css-history-leak/> and <http://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/> for details of the examples of how this is implemented. Most other modern browsers have applied similar changes to the application of pseudo-selector styles and the values returned by `getComputedStyle`.

During a CSS transition, `getComputedStyle` returns the original property value in Firefox, but the final property value in WebKit.

In Firefox, properties with the value `auto` return the used value, not the value `auto`. So if you apply `top:auto;` and `bottom:0`; on an element with `height:30px` and its containing block is `height:100px;`, upon requesting the computed style for `top`, Firefox will return `top:70px`, as `100px-30px=70px`.

## Браузерная поддержка

{{Compat}}

## Спецификации

- [DOM Level 2 Style: getComputedStyle](https://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSview-getComputedStyle)
- [CSS Object Model specification](https://drafts.csswg.org/cssom/#dom-window-getcomputedstyle)

## Смотреть также

- {{domxref("window.getDefaultComputedStyle")}}
- {{cssxref("resolved_value", "Resolved Value")}}
