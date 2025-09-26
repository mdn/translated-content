---
title: MouseEvent.altKey
slug: Web/API/MouseEvent/altKey
---

{{APIRef("UI Events")}}

**`MouseEvent.altKey`** 只读属性是一个{{jsxref("Boolean")}}变量。当事件触发时，如果<kbd>alt</kbd> 被按下，则返回 true，否则返回 false。

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

## 相关

- {{ domxref("MouseEvent") }}
