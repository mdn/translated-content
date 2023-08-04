---
title: Document.createTextNode()
slug: Web/API/Document/createTextNode
---

{{APIRef("DOM")}}

Создаёт новый текстовый узел.

## Синтаксис

```
var text = document.createTextNode(data);
```

- `text` - это текстовый узел.
- `data` - это строка с данными, которые будут помещены в текстовый узел.

## Пример

```js
<!DOCTYPE html>
<html lang="en">
<head>
<title>createTextNode example</title>
<script>
function addTextNode(text) {
  var newtext = document.createTextNode(text),
      p1 = document.getElementById("p1");

  p1.appendChild(newtext);
}
</script>
</head>

<body>
  <button onclick="addTextNode('YES! ');">YES!</button>
  <button onclick="addTextNode('NO! ');">NO!</button>
  <button onclick="addTextNode('WE CAN! ');">WE CAN!</button>

  <hr />

  <p id="p1">First line of paragraph.</p>
</body>
</html>
```

## Спецификации

{{Specifications}}

## Совместимость

{{Compat}}
