---
title: Node.isEqualNode()
slug: Web/API/Node/isEqualNode
---

{{APIRef("DOM")}}

**`Node.isEqualNode()`** проверяет, равны ли два узла. Два узла равны, когда они имеют один и тот же тип, определяющий характеристики (для элементов это будет их идентификатор, количество потомков и т. д.), Его атрибуты совпадают и т. д. Конкретный набор точек данных, которые должны совпадать, зависит от типов узлов.

## Синтаксис

```
var isEqualNode = node.isEqualNode(otherNode);
```

- `otherNode`: Узел {{domxref("Node")}} с которым надо сравнить.

## Пример

В этом примере мы создаём три блока {{HTMLElement ("div")}}. Первый и третий имеют одинаковое содержание и атрибуты, в то время как второй отличается. Затем мы запускаем некоторый JavaScript-код для сравнения узлов с помощью isEqualNode () и выводим результаты.

### HTML

```html
<div>This is the first element.</div>
<div>This is the second element.</div>
<div>This is the first element.</div>

<p id="output"></p>
```

```css hidden
#output {
  width: 440px;
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
  display: block;
}
```

### JavaScript

```js
let output = document.getElementById("output");
let divList = document.getElementsByTagName("div");

output.innerHTML +=
  "div 0 equals div 0: " + divList[0].isEqualNode(divList[0]) + "<br/>";
output.innerHTML +=
  "div 0 equals div 1: " + divList[0].isEqualNode(divList[1]) + "<br/>";
output.innerHTML +=
  "div 0 equals div 2: " + divList[0].isEqualNode(divList[2]) + "<br/>";
```

### Results

{{ EmbedLiveSample('Пример', 480) }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
