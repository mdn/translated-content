---
title: KeyboardEvent.altKey
slug: Web/API/KeyboardEvent/altKey
---

{{APIRef("UI Events")}}

**`KeyboardEvent.altKey`** 只读属性返回一个 {{jsxref("Boolean")}} 值，表示事件触发时 <kbd>alt</kbd> 键 (OS X 系统上的 <kbd>Option</kbd> 或 <kbd>⌥</kbd> 键) 是 (`true`) 否 (`false`) 被按下。

## 值

一个布尔值。

## 示例

```js
<html>
<head>
<title>altKey example</title>

<script type="text/javascript">

function showChar(e){
  alert(
    "Key Pressed: " + String.fromCharCode(e.charCode) + "\n"
    + "charCode: " + e.charCode + "\n"
    + "ALT key pressed: " + e.altKey + "\n"
  );
}

</script>
</head>

<body onkeypress="showChar(event);">
<p>
Press any character key,
with or without holding down the ALT key.<br />
You can also use the SHIFT key together with the ALT key.
</p>
</body>
</html>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{ domxref("KeyboardEvent") }}
