---
title: prefers-color-scheme
slug: Web/CSS/@media/prefers-color-scheme
---

{{CSSRef}}

**`prefers-color-scheme`** [CSS](/zh-CN/docs/CSS) [媒体特性](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries#Media_features)用于检测用户是否有将系统的主题色设置为亮色或者暗色。

## 语法

- `no-preference`
  - : 表示系统未得知用户在这方面的选项。在[布尔值上下文](https://drafts.csswg.org/mediaqueries-5/#boolean-context)中，其执行结果为 `false`。
- `light`
  - : 表示用户已告知系统他们选择使用浅色主题的界面。
- `dark`
  - : 表示用户已告知系统他们选择使用暗色主题的界面。

> **备注：** “未得知”、“已告知”等用语，英文原文如此。
> “未得知”可理解为：浏览器的宿主系统不支持设置主题色，或者支持主题色并默认为/被设为了未设置/无偏好。
> “已告知”为：浏览器的宿主系统支持设置主题色，且被设置为了亮色或者暗色。
>
> 目前，若结果为 `no-preference`，无法通过此媒体特性获知宿主系统是否支持设置主题色，或者用户是否主动将其设置为无偏好。出于隐私保护等方面的考虑，用户或用户代理也可能在一些情况下在浏览器内部将其设置为 `no-preference`。

## 示例

这个例子使用了一个有黑色背景和白色文字的元素，当用户使用浅色主题时，会翻转黑白颜色。

### HTML

```html
<div class="day">Day (initial)</div>
<div class="day light-scheme">Day (changes in light scheme)</div>
<div class="day dark-scheme">Day (changes in dark scheme)</div>
<br />

<div class="night">Night (initial)</div>
<div class="night light-scheme">Night (changes in light scheme)</div>
<div class="night dark-scheme">Night (changes in dark scheme)</div>
```

### CSS

```css
.day {
  background: #eee;
  color: black;
}
.night {
  background: #333;
  color: white;
}

@media (prefers-color-scheme: dark) {
  .day.dark-scheme {
    background: #333;
    color: white;
  }
  .night.dark-scheme {
    background: black;
    color: #ddd;
  }
}

@media (prefers-color-scheme: light) {
  .day.light-scheme {
    background: white;
    color: #555;
  }
  .night.light-scheme {
    background: #eee;
    color: black;
  }
}

.day,
.night {
  display: inline-block;
  padding: 1em;
  width: 7em;
  height: 2em;
  vertical-align: middle;
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Video tutorial: Coding a Dark Mode for your Website](https://www.youtube.com/watch?v=jmepqJ5UbuM)
- [Redesigning your product and website for dark mode](https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode)
- Changing color schemes in [Windows](https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/), [macOS](https://developer.apple.com/design/human-interface-guidelines/macos/visual-design/dark-mode/) and [Android](https://www.theverge.com/2019/5/7/18530599/google-android-q-features-hands-on-dark-mode-gestures-accessibility-io-2019).
