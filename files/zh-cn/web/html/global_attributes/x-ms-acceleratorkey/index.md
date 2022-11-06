---
title: x-ms-加速装置键
slug: Web/HTML/Global_attributes/x-ms-acceleratorkey
original_slug: Web/HTML/Global_attributes/x-ms-加速装置键
---

{{HTMLSidebar("Global_attributes")}}{{Non-standard_Header}}

**`x-ms-acceleratorkey`** 属性声明 [accelerator key](https://docs.microsoft.com/en-us/windows/uwp/design/input/keyboard-accelerators) 已经分配给一个元素：当按下键盘上的键时，通过 JavaScript 激活该元素。

{{Non-standard_Inline}} 此专有属性是特定于 Internet Explorer 和 Microsoft Edge 的。

对于屏幕阅读器和其他辅助技术，`x-ms-acceleratorkey` 在无障碍树中公开一个通知，即该元素存在一个加速器键。此属性不提供加速器键行为。必须提供 JavaScript 事件处理程序，如`onkeypress`, `onkeydown`, 或者 `onkeyup`, 来侦听声明的加速器键并相应地激活元素。

为下列元素提供键盘快捷方式：不需要 JavaScript 的，请使用 [the `accesskey` 属性](/zh-CN/docs/Web/HTML/Global_attributes/accesskey)。

## 语法

```html
<button x-ms-acceleratorkey="[explanation of key combination]">…</button>
```

## 价值

加速器键组合。例如：

- `"Ctrl+B"` 的组合

  <kbd>Ctrl</kbd>

  和

  <kbd>B</kbd>

  秘钥。

- `"J"` 只是为了

  <kbd>J</kbd>

  钥匙。

- `"Ctrl+; then K"` 的快捷方式，类似于 [FogBugz 的就键盘模式](https://help.manuscript.com/7558/fogbugz-keyboard-shortcuts#For_Your_Server_or_non-Ocelot_Keyboard_Shortcuts)。这种方法比较复杂，但不覆盖用户浏览器或操作系统提供的现有键盘快捷键。

## 另请参阅

- [全球 `accesskey` 属性](/zh-CN/docs/Web/HTML/Global_attributes/accesskey)
- [这个 `-ms-accelerator` CSS 属性](/zh-CN/docs/Web/CSS/-ms-accelerator)
- [Microsoft API 扩展](/zh-CN/docs/Web/API/Microsoft_API_extensions)
