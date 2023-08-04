---
title: font-feature-settings
slug: Web/CSS/font-feature-settings
---

{{CSSRef}}

**`font-feature-settings`** 属性用于控制 OpenType 字体中的高级印刷功能。

{{EmbedInteractiveExample("pages/css/font-feature-settings.html")}}

## 语法

```css
/* 默认设置 */
font-feature-settings: normal;

/* 设置 OpenType 功能标签的值 */
font-feature-settings: "smcp";
font-feature-settings: "smcp" on;
font-feature-settings: "swsh" 2;
font-feature-settings:
  "smcp",
  "swsh" 2;

/* 全局值 */
font-feature-settings: inherit;
font-feature-settings: initial;
font-feature-settings: unset;
```

> **备注：** Web 开发者应该尽可能的使用类似 {{cssxref("font-variant")}} 这样的短标记属性或者相关的速记标识属性等，类似 {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-numeric")}} or {{cssxref("font-variant-position")}}.
>
> 该属性是一个比较偏底层的功能接口，用于解决由于没有其他方法去访问和设置 OpenType 字体某些特性而无法解决一些特殊功能需求。
>
> 特别需要注意的是，该 CSS 属性不应该用来开启大写字母转换。

{{cssinfo}}

### 值

- `normal`
  - : 文本使用默认设置进行布局。
- `<feature-tag-value>`
  - : 在呈现文本时，OpenType 要素标记值的列表被传递到文本布局引擎以启用或禁用字体特征。标签始终是 4 个 ASCII 字符的 {{cssxref("&lt;string&gt;")}} 。如果是 U + 20 - U + 7E 代码点范围以外的字符或字符个数不对，则整个属性无效。
    值是一个正整数。两个关键字 on 和 off 分别是 1 和 0 的同义词。如果未设置任何值，则默认值为 1。对于非布尔型 OpenType 功能（例如，文体替代 [stylistic alternates](http://www.microsoft.com/typography/otspec/features_pt.htm#salt)），该值意味着要选择特定的字形；对于布尔值，它是一个开关。

### 形式语法

{{csssyntax}}

## 实例

```css
/* use small-cap alternate glyphs */
.smallcaps {
  font-feature-settings: "smcp" on;
}

/* convert both upper and lowercase to small caps (affects punctuation also) */
.allsmallcaps {
  font-feature-settings: "c2sc", "smcp";
}

/* enable historical forms */
.hist {
  font-feature-settings: "hist";
}

/* disable common ligatures, usually on by default */
.noligs {
  font-feature-settings: "liga" 0;
}

/* enable tabular (monospaced) figures */
td.tabular {
  font-feature-settings: "tnum";
}

/* enable automatic fractions */
.fractions {
  font-feature-settings: "frac";
}

/* use the second available swash character */
.swash {
  font-feature-settings: "swsh" 2;
}

/* enable stylistic set 7 */
.fancystyle {
  font-family: Gabriola; /* available on Windows 7, and on Mac OS */
  font-feature-settings: "ss07";
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 其他参考

- [FontFont OpenType User Guide (pdf)](https://www.fontfont.com/staticcontent/downloads/FF_OT_User_Guide.pdf)
- [OpenType Feature Tags](http://www.microsoft.com/typography/otspec/featurelist.htm) 列表
- [Using the whole font](http://blogs.msdn.com/b/ie/archive/2012/01/09/css-corner-using-the-whole-font.aspx) ( -moz 语法是旧的。在 Gecko 上，使用-ms 语法，但使用-moz ).
