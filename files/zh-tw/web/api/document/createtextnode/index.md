---
title: Document.createTextNode()
slug: Web/API/Document/createTextNode
---

{{APIRef("DOM")}}

創建一個新的文字節點.

## Syntax

```plain
var text = document.createTextNode(data);
```

- 文字屬於一個文字節點.
- 將含有數據的串加入文字節點中.

## Example

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
