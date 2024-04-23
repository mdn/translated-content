---
title: MouseEvent.ctrlKey
slug: Web/API/MouseEvent/ctrlKey
---

{{APIRef("UI Events")}}

**`MouseEvent.ctrlKey`** 是只读属性，可返回一个布尔值，当 ctrl 键被按下，返回 true，否则返回 false。

## 语法

```plain
var ctrlKeyPressed = instanceOfMouseEvent.ctrlKey
```

### 返回值

A boolean

## 示例

```js
<html>
<head>
<title>ctrlKey example</title>

<script type="text/javascript">

function showChar(e){
  alert(
    "Key Pressed: " + String.fromCharCode(e.charCode) + "\n"
    + "charCode: " + e.charCode + "\n"
    + "CTRL key pressed: " + e.ctrlKey + "\n"
  );
}

</script>
</head>

<body onkeypress="showChar(event);">
<p>Press any character key, with or without holding down the CTRL key.<br />
You can also use the SHIFT key together with the CTRL key.</p>
</body>
</html>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{ domxref("MouseEvent") }}
