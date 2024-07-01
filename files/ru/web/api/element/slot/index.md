---
title: Element.slot
slug: Web/API/Element/slot
---

{{APIRef("Shadow DOM")}}

Свойство **`slot`** интерфейса {{domxref("Element")}} возвращает имя слота теневого DOM, в который вставлен элемент.

Слот slot это заполнитель внутри [веб компонента](/ru/docs/Web/Web_Components), который пользователи могут заполнить собственной разметкой (смотри [Использование шаблонов и слотов](/ru/docs/Web/Web_Components/Using_templates_and_slots) для получения дополнительной информации).

## Синтаксис

```
var aString = element.slot
element.slot = aString
```

### Значение

{{domxref("DOMString")}}.

## Примеры

В нашем [примере простого шаблона](https://github.com/mdn/web-components-examples/tree/master/simple-template) ([смотри в прямом эфире](https://mdn.github.io/web-components-examples/simple-template/)), мы создаём тривиальный пример пользовательского элемента с именем `<my-paragraph>`, в котором прикрепляется теневой корень, а затем заполняется с использованием содержимого шаблона, содержащего слот с именем `my-text`.

Когда в документе используется `<my-paragraph>`, слот заполняется слот-элементом, включая его в элемент с атрибутом [`slot`](/ru/docs/Web/HTML/Global_attributes/slot) со значением `my-text`. Вот один из таких примеров:

```html
<my-paragraph>
  <span slot="my-text">Let's have some different text!</span>
</my-paragraph>
```

В нашем JavaScript файле мы получаем ссылку {{htmlelement("span")}}, показанную выше, а затем регистрируем ссылку на имя соответствующего элемента `<slot>`.

```js
let slottedSpan = document.querySelector("my-paragraph span");
console.log(slottedSpan.slot); // logs 'my-text'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
