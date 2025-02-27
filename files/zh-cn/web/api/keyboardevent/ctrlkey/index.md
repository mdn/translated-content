---
title: KeyboardEvent.ctrlKey
slug: Web/API/KeyboardEvent/ctrlKey
---

{{APIRef("UI Events")}}

**`KeyboardEvent.ctrlKey`** 只读属性返回一个 {{jsxref("Boolean")}} 值，表示事件触发时 <kbd>control</kbd> 键是 (`true`) 否 (`false`) 按下。

## 返回值

一个布尔值。

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

## 参考

- {{ domxref("KeyboardEvent") }}
