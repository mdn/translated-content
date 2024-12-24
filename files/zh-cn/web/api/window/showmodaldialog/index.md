---
title: Window.showModalDialog()
slug: Web/API/Window/showModalDialog
---

{{ deprecated_header() }}{{APIRef}}

**`Window.showModalDialog()`** 用于创建和展示一个指向特定网页的模态对话框。

## 语法

```plain
returnVal = window.showModalDialog(uri[, arguments][, options]);
```

其中

- `returnVal` 集合类型 (Set) 返回值。由`uri`指定的页面返回。
- `uri` 要在模态对话框中打开的页面 URI。
- `arguments` 可选变量。可以通过该参数将需要的值传入对话框。
- `options` 可选字符串参数。用于设置对话框打开的样式，使用一个或多个逗号分隔。

| Syntax                                           | Description                                                                                                                                          |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `center: {on \| off \| yes \| no \| 1 \| 0 }`    | If this argument's value is `on`, `yes`, or 1, the dialog window is centered on the desktop; otherwise it's hidden. The default value is `yes`.      |
| `dialogheight: height`                           | Specifies the height of the dialog box; by default, the size is specified in pixels.                                                                 |
| `dialogleft: left`                               | Specifies the horizontal position of the dialog box in relation to the upper-left corner of the desktop.                                             |
| `dialogwidth: width`                             | Specifies the width of the dialog box; by default, the size is specified in pixels.                                                                  |
| `dialogtop: top`                                 | Specifies the vertical position of the dialog box in relation to the upper-left corner of the desktop.                                               |
| `resizable: {on \| off \| yes \| no \| 1 \| 0 }` | If this argument's value is `on`, `yes`, or 1, the dialog window can be resized by the user; otherwise its size is fixed. The default value is `no`. |
| `scroll: {on \| off \| yes \| no \| 1 \| 0 }`    | If this argument's value is `on`, `yes`, or 1, the dialog window has scroll bars; otherwise its size is fixed. The default value is `no`.            |

> [!NOTE]
> Firefox does not implement the `dialogHide`, `edge`, `status`, or `unadorned` arguments.

## Compatibility

Introduced by Microsoft Internet Explorer 4. Support added to Firefox in Firefox 3 (deprectated in Fx 28), and to Safari in Safari 5.1.

## Examples

[Try out `showModalDialog()`](https://mdn.dev/archives/media/samples/domref/showModalDialog.html).

## Notes

`showModalDialog()` is currently being standardized as part of HTML5. The third argument (for additional options) is not present in the HTML5 version, and is (safely) ignored by both Safari and Chrome.

## Specification

- [`showModalDialog()`](https://msdn.microsoft.com/en-us/library/ms536759%28VS.85%29.aspx?f=255&MSPPError=-2147217396)
- [HTML5 Dialogs implemented using separate documents](https://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dialogs-implemented-using-separate-documents)
