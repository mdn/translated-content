---
title: KeyboardEvent.which
slug: Web/API/UIEvent/which
---

{{ APIRef("DOM Events") }} {{Deprecated_header}}

{{domxref("KeyboardEvent")}} 接口的 **`which`** 只读属性返回所按下键的数字 `keyCode` 或所按下字母数字键的字符代码 (`charCode`) 。

## 语法

```
var keyResult = event.which;
```

### 返回值

- `keyResult` contains the numeric code for a particular key pressed, depending on whether an alphanumeric or non-alphanumeric key was pressed. Please see {{domxref("KeyboardEvent.charCode")}} and {{domxref("KeyboardEvent.keyCode")}} for more details.

## 例子

```html
<html>
  <head>
    <title>charCode/keyCode/which example</title>

    <script type="text/javascript">
      function showKeyPress(evt) {
        alert(
          "onkeypress handler: \n" +
            "keyCode property: " +
            evt.keyCode +
            "\n" +
            "which property: " +
            evt.which +
            "\n" +
            "charCode property: " +
            evt.charCode +
            "\n" +
            "Character Key Pressed: " +
            String.fromCharCode(evt.charCode) +
            "\n",
        );
      }

      function keyDown(evt) {
        alert(
          "onkeydown handler: \n" +
            "keyCode property: " +
            evt.keyCode +
            "\n" +
            "which property: " +
            evt.which +
            "\n",
        );
      }
    </script>
  </head>

  <body onkeypress="showKeyPress(event);" onkeydown="keyDown(event);">
    <p>Please press any key.</p>
  </body>
</html>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- {{domxref("KeyboardEvent")}}, the interface this property belongs too.
