---
title: HTMLSelectElement.selectedIndex
slug: Web/API/HTMLSelectElement/selectedIndex
---

{{APIRef("HTML DOM")}}

**`HTMLSelectElement.selectedIndex`** показывает порядковый номер первого выбранного элемента `{{HTMLElement("option")}}`. Значение -1 означает, что ни один из элементов не выбран.

## Синтаксис

```
var index = selectElem.selectedIndex;
selectElem.selectedIndex = index;
```

## Пример

### HTML

```html
<p id="p">Индекс выбранного элемента: 0</p>

<select id="select">
  <option selected>Option A</option>
  <option>Option B</option>
  <option>Option C</option>
  <option>Option D</option>
  <option>Option E</option>
</select>
```

### JavaScript

```js
var selectElem = document.getElementById("select");
var pElem = document.getElementById("p");

// Когда выбран новый элемент <option>
selectElem.addEventListener("change", function () {
  var index = selectElem.selectedIndex;
  // Добавить данные в <p>
  pElem.innerHTML = "selectedIndex: " + index;
});
```

{{EmbedLiveSample("Пример", "200px", "80px")}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
