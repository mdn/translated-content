---
title: "::cue (:cue)"
slug: Web/CSS/::cue
---

{{CSSRef}}

::cue CSS [伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)匹配所选元素中的[WebVTT](/zh-CN/docs/Web/API/WebVTT_API)提示。这可以用于在 VTT 轨道的媒体中使用字幕和其他线索。

只有 CSS 一小部分属性可以与 `::cue` 伪元素一起使用：

- {{cssxref("color")}}
- {{cssxref("opacity")}}
- {{cssxref("visibility")}}
- {{cssxref("text-decoration")}} and its longhand properties: {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, and {{cssxref("text-decoration-style")}}
- {{cssxref("text-shadow")}}
- {{cssxref("background")}} and its longhand properties: {{Cssxref("background-color")}}, {{cssxref("background-clip")}}, {{Cssxref("background-image")}}, {{cssxref("background-origin")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}}, {{cssxref("background-size")}}, {{Cssxref("background-attachment")}}, and {{cssxref("background-blend-mode")}}
- {{cssxref("outline")}} and its longhand properties: {{cssxref("outline-color")}}, {{cssxref("outline-style")}}, {{cssxref("outline-width")}}
- {{Cssxref("font")}} and its longhand properties: {{cssxref("font-kerning")}}, {{Cssxref("font-style")}}, {{Cssxref("font-variant")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-synthesis")}}, {{cssxref("font-feature-settings")}}, {{cssxref("font-language-override")}}, {{Cssxref("font-weight")}}, {{Cssxref("font-size")}}, {{cssxref("font-size-adjust")}}, {{cssxref("font-stretch")}}, and {{Cssxref("font-family")}}
- {{cssxref("line-height")}}
- {{cssxref("white-space")}}
- {{cssxref("text-combine-upright")}}
- {{cssxref("ruby-position")}}

属性应用于整个提示集，就像它们是单个单元一样。唯一的例外是背景及其简写属性可以单独应用于每个提示，以避免创建框并遮盖意外大面积的媒体。

## 语法

```
::cue | ::cue( <selector> )
```

## 示例

以下 CSS 设置提示样式，使文本为白色，背景为半透明黑盒。

```css
::cue {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [网络视频轨道格式（WebVTT）](/zh-CN/docs/Web/API/WebVTT_API)
