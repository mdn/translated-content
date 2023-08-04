---
title: Element.getElementsByTagName()
slug: Web/API/Element/getElementsByTagName
---

{{ APIRef("DOM") }}

**`Element.getElementsByTagName()`** метод возвращает живую коллекцию элементов {{domxref("HTMLCollection")}} , учитывая [имя тэга](/en/DOM/element.tagName). Поиск осуществляется в поддереве указанного элемента, в результат поиска не попадает сам элемент, в поддереве которого осуществлялся поиск. Возвращает живой список, который автоматически обновляется при изменении DOM. Поэтому не нужно вызывать метод `Element.getElementsByTagName()` несколько раз с одними и теми же аргументами, содержимое списка обновляется автоматически.

При вызове на HTML-элементе в HTML-документе метод `getElementsByTagName` переводит аргумент по которому осуществляется поиск (имя тега) в нижний регистр до того как начать поиск. Это нежелательно, когда необходимо использовать метод для поиска SVG элементов, где в наименовании тега может использоваться верблюжья (camel-cased) нотация. В этом случае правильно использовать метод {{ domxref("Element.getElementsByTagNameNS()") }}.

`Element.getElementsByTagName` похож на {{domxref("Document.getElementsByTagName()")}}, за исключением того, что поиск осуществляется среди потомков конкретного элемента, а не во всём HTML-документе.

## Синтаксис

```
elements = element.getElementsByTagName(tagName)
```

- `elements` это живая коллекция {{domxref("HTMLCollection")}} найденных элементов в том порядке, в котором они были найдены в дереве. Если не найдено ни одного элемента, удовлетворяющего условиям поиска, то коллекция будет пустой.
- `element` это элемент в котором будет осуществляться поиск. Обратите внимание, что поиск будет осуществляться только в потомках этого элемента. Сам элемент не будет включён в результат поиска.
- `tagName` определяет имя тега для поиска. Если значением tagName будет `"*", то в результате будут получены все потомки элемента по которому осуществляется поиск`. Для совместимости с XHTML следует использовать нижний регистр в имени тега.

## Пример

```js
// check the alignment on a number of cells in a table.
var table = document.getElementById("forecast-table");
var cells = table.getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
  var status = cells[i].getAttribute("data-status");
  if (status == "open") {
    // grab the data
  }
}
```

## Спецификации

{{Specifications}}

## Совместимость браузеров

{{Compat}}
