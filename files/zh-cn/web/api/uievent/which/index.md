---
title: UIEvent：which 属性
slug: Web/API/UIEvent/which
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

{{domxref("UIEvent")}} 接口的 **`UIEvent.which`** 只读属性返回一个数字，表示按下了鼠标上的哪个按钮，或者是键盘上按下的键的 `keyCode` 或字符代码（`charCode`）的数字值。

## 值

### KeyboardEvent 的值 {{Non-standard_Inline}}

对于 {{domxref("KeyboardEvent")}}，`event.which` 包含按下的特定按键的数字代码，具体取决于是否按下了字母数字键或非字母数字键。有关更多详细信息，请参阅已弃用的{{domxref("KeyboardEvent.charCode")}} 和 {{domxref("KeyboardEvent.keyCode")}}。

> [!NOTE]
> 新代码请考虑使用 {{domxref("KeyboardEvent.key")}} 或 {{domxref("KeyboardEvent.code")}}。

### MouseEvent 的值 {{Non-standard_Inline}}

对于 {{domxref("MouseEvent")}}，`event.which` 是表示给定按钮的数字：

- `0`：无按钮
- `1`：左键
- `2`：中键（如果有）
- `3`：右键

对于配置为左利手使用的鼠标，按钮操作是相反的。在这种情况下，从右到左读取值。

> [!NOTE]
> 新代码请考虑使用 {{domxref("MouseEvent.button")}}。

## 示例

```html
<html lang="zh">
  <head>
    <title>charCode/keyCode/which 示例</title>

    <script>
      function showKeyPress(evt) {
        alert(
          `onkeypress 处理器：\n` +
            `keyCode 属性：${evt.keyCode}\n` +
            `which 属性：${evt.which}\n` +
            `charCode 属性：${evt.charCode}\n` +
            `按下的字符键：${String.fromCharCode(evt.charCode)}\n`,
        );
      }

      function keyDown(evt) {
        alert(
          `onkeydown 处理器：\n` +
            `keyCode 属性：${evt.keyCode}\n` +
            `which 属性：${evt.which}\n`,
        );
      }
    </script>
  </head>

  <body onkeypress="showKeyPress(event);" onkeydown="keyDown(event);">
    <p>请按任意键。</p>
  </body>
</html>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("KeyboardEvent")}}
- {{domxref("MouseEvent")}}
