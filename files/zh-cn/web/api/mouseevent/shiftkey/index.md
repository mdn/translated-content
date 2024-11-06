---
title: MouseEvent.shiftKey
slug: Web/API/MouseEvent/shiftKey
---

{{APIRef("UI Events")}}

**`MouseEvent.shiftKey`** 是只读属性，指出触发鼠标事件时是否按住了 `shift` 键

## Syntax

```plain
var shiftKeyPressed = instanceOfMouseEvent.shiftKey
```

### Return value

A boolean

## Example

```js
<html>
<head>
<title>shiftKey example</title>

<script type="text/javascript">

function showChar(e){
  alert(
    "Key Pressed: " + String.fromCharCode(e.charCode) + "\n"
    + "charCode: " + e.charCode + "\n"
    + "SHIFT key pressed: " + e.shiftKey + "\n"
    + "ALT key pressed: " + e.altKey + "\n"
  );
}

</script>
</head>

<body onkeypress="showChar(event);">
<p>Press any character key, with or without holding down
 the SHIFT key.<br />
You can also use the SHIFT key together with the ALT key.</p>
</body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("MouseEvent") }}
