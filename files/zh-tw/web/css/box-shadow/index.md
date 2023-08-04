---
title: box-shadow
slug: Web/CSS/box-shadow
---

{{CSSRef}}

`box-shadow` 屬性為一個逗號分隔的列表描述一個或多個的陰影效果. 這使的你能夠從幾乎任何元素的框架放入陰影. 如果一個標記了 {{cssxref("border-radius")}} 的元素也標記了 box shadow, 這將使得他們有相同的圓邊. 多重 box shadows 的 z-index 排序跟多重 [text shadows](/zh-TW/CSS/text-shadow) 一樣(第一個備標記的陰影在最上面).

{{cssinfo}}

### Box-shadow 產生器

[Interactive tool](/zh-TW/docs/Web/CSS/Tools/Box-shadow_generator) 可以產生 box-shadow.

## 表達式

```css
/* offset-x | offset-y | color */
box-shadow: 60px -16px teal;

/* offset-x | offset-y | blur-radius | color */
box-shadow: 10px 5px 5px black;

/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* inset | offset-x | offset-y | color */
box-shadow: inset 5em 1em gold;

/* Any number of shadows, separated by commas */
box-shadow:
  3px 3px red,
  -1em 0 0.4em olive;
```

### 參數

- `inset`
  - : 如果未指定（默認），則假定陰影為陰影（就好像該框被提升到內容之上）。 inset 關鍵字的存在將陰影更改為幀內的陰影（就好像內容在框內被壓下）。在邊框內部（甚至是透明的）繪製插入陰影，在背景上方，但在內容下方。
- `<offset-x> <offset-y>`
  - : 這兩個 {{cssxref("&lt;length&gt;")}} 值用於設置陰影偏移量。 \<offset-x>指定水平距離。負值將陰影置於元素的左側。 \<offset-y>指定垂直距離。負值將陰影置於元素上方。有關可能的單位，請參見 {{cssxref("&lt;length&gt;")}}。 如果兩個值均為 0，則陰影位於元素後面（如果設置了\<blur-radius>和/或\<spread-radius>，則可能會生成模糊效果）。
- `<blur-radius>`
  - : 這是第三個 {{cssxref("&lt;length&gt;")}} 值。此值越大，模糊越大，陰影變得越來越大。不允許使用負值。如果未指定，則為 0（陰影邊緣清晰）。
- `<spread-radius>`
  - : 這是第四個 {{cssxref("&lt;length&gt;")}} 值。正值將導致陰影擴大並變大，負值將導致陰影縮小。如果未指定，則為 0（陰影將與元素的大小相同）。
- `<color>`
  - : 有關可能的關鍵字和符號，請參閱 {{cssxref("&lt;color&gt;")}} 值。 如果未指定，則使用的顏色取決於瀏覽器 - 它通常是 {{cssxref("color")}} 屬性的值，但請注意，Safari 在此情況下當前繪製透明陰影。

### 語法

{{csssyntax}}

## 範例

- [CSS box-shadow examples](https://techmoon.xyz/css-box-shadow-examples-by-css-scan/)
- [box-shadow test](http://www.elektronotdienst-nuernberg.de/bugs/box-shadow_inset.html)
- [box-shadow tutorial and examples](http://markusstange.wordpress.com/2009/02/15/fun-with-box-shadows/)

```plain
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
```

```plain
box-shadow: 60px -16px teal;
```

```plain
box-shadow: 10px 5px 5px black;
```

```plain
box-shadow: 3px 3px red, -1em 0 0.4em olive;
```

```plain
box-shadow: inset 5em 1em gold;
```

```plain
box-shadow: 0 0 1em gold;
```

```plain
box-shadow: inset 0 0 1em gold;
```

```plain
box-shadow: inset 0 0 1em gold, 0 0 1em red;
```

## 規範

{{Specifications}}

## 瀏覽相容性

{{Compat}}
