---
title: KeyboardEvent.charCode
slug: Web/API/KeyboardEvent/charCode
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

{{domxref("KeyboardEvent.charCode")}} 只读属性，返回 {{ domxref("element.onkeypress", "keypress") }} 事件触发时按下的字符键的字符 Unicode 值。

与这些数值代码等价的常量，请参考 {{ domxref("KeyboardEvent", "KeyEvent") }}.

> [!NOTE]
>
> 该属性已被弃用，请勿再使用该属性。要获取字符的 Unicode 值，请改用 {{domxref("KeyboardEvent.key", "key")}} 属性。

## 值

一个表示按下的字符键的 Unicode 值的数字。

## 示例

```js
<html>
<head>
<title>charCode example</title>

<script type="text/javascript">

function showChar(e)
{
alert("Key Pressed: " + String.fromCharCode(e.charCode) + "\n"
      + "charCode: " + e.charCode);
}

</script>
</head>

<body onkeypress="showChar(event);">
<p>Press any 'character' type key.</p>
</body>
</html>
```

## 注意

在 {{ domxref("element.onkeypress", "keypress") }} 事件中，按键的 Unicode 值保存在 {{ domxref("event.keyCode", "keyCode") }} 或 {{ domxref("event.charCode", "charCode") }} 属性其中之一，不会二者同时都有。如果按下的是字符键 (例如 'a'), `charCode` 被设置为字符的代码值，并区分大小写。（即 `charCode` 会考虑 `Shift` 键是否被按下）。否则，被按下的键的代码被存储在 `keyCode` 中。

如果有一个或多个修饰键被按下，有一些复杂的规则来产生 `charCode` 的值，细节可参考 [Gecko Keypress 事件](/zh-CN/Gecko_Keypress_Event) 。

`charCode` 用于不会在 {{ domxref("element.onkeydown", "keydown") }} 和 {{ domxref("element.onkeyup", "keyup") }} 事件中被设置。这两种情况下，`keyCode` 会被设置。

要获取按键代码而不考虑是 `keyCode` 还是`charCode`, 请使用 {{ domxref("event.which", "which") }} 属性。

通过输入法输入的字符，不会被设置到注册到通过 `keyCode` 和 `charCode`。 Actually with the Chinese IME I'm using, entering the IME results in a keypress event with keyCode = 229 and no other key events fire until the IME exits (which may happen after multiple characters are inputted). I'm not sure if other IME's work this way.

要查看特定按键的 `charCode` 值的列表，运行这个示例页面 [Gecko DOM Reference:Examples #Example 7: Displaying Event Object Constants](/zh-CN/Gecko_DOM_Reference/Examples#Example_7:_Displaying_Event_Object_Constants) ，然后查看 HTML 表格结果。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
