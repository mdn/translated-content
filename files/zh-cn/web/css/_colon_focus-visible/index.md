---
title: ":focus-visible"
slug: Web/CSS/:focus-visible
---

{{CSSRef}}

当元素匹配{{cssxref(":focus")}}伪类并且客户端 (UA) 的启发式引擎决定焦点应当可见 (在这种情况下很多浏览器默认显示“焦点框”。) 时，**`:focus-visible`** 伪类将生效。

这个选择器可以有效地根据用户的输入方式 (鼠标 vs 键盘) 展示不同形式的焦点。

请注意 Firefox 通过较旧的前缀伪类 `:-moz-focusring` 支持类似的功能。更多细节请参考{{cssxref(":-moz-focusring")}}页面。

## 语法

```css
:focus-visible {
  /* ... */
}
```

## 示例

### 基本示例

在这个例子中，`:focus-visible` 选择器利用客户端 (UA) 的行为决定是否匹配。比较一下，当你用鼠标点击控件和用键盘 tab 切换控件有何不同。请注意元素的表现与具有 `:focus` 样式的元素的区别。

```html
<input value="Default styles" /><br />
<button>Default styles</button><br />
<input class="focus-only" value=":focus only" /><br />
<button class="focus-only">:focus only</button><br />
<input class="focus-visible-only" value=":focus-visible only" /><br />
<button class="focus-visible-only">:focus-visible only</button>
```

```css
input,
button {
  margin: 10px;
}

.focus-only:focus {
  outline: 2px solid black;
}

.focus-visible-only:focus-visible {
  outline: 4px dashed darkorange;
}
```

{{EmbedLiveSample('基本示例', '100%', '300')}}

### 选择性地显示焦点

自定义控件，比如按钮[自定义元素](/zh-CN/docs/User:Andreas_Wuest/Custom_Elements)，可以使用 `:focus-visible` 使其仅在键盘操作时才显示焦点样式。这和{{htmlelement("button")}}一类的原生控件表现一致。

```html
<custom-button tabindex="0" role="button">Click Me</custom-button>
```

```css
custom-button {
  display: inline-block;
  margin: 10px;
}

custom-button:focus {
  /* Provide a fallback style for browsers
     that don't support :focus-visible */
  outline: none;
  background: lightgrey;
}

custom-button:focus:not(:focus-visible) {
  /* Remove the focus indicator on mouse-focus for browsers
     that do support :focus-visible */
  background: transparent;
}

custom-button:focus-visible {
  /* Draw a very noticeable focus style for
     keyboard-focus on browsers that do support
     :focus-visible */
  outline: 4px dashed darkorange;
  background: transparent;
}
```

{{EmbedLiveSample('选择性地显示焦点', '100%', '300')}}

## Polyfill

你可以使用 `:focus-visible` 的 polyfill [focus-visible.js](https://github.com/WICG/focus-visible) 。

## 无障碍关注点

保证视觉焦点指示对低视力对人群可见。这对在强光环境下使用屏幕的人同样有益 (比如在户外的阳光下)。 [WCAG 2.1 SC 1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) 要求视觉焦点指示至少在 3 到 1。

可访问的视觉焦点指示：[给你的网站一些焦点！设计有效且可用的焦点指示的一些建议。](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref(":focus")}}
- {{cssxref(":focus-within")}}
