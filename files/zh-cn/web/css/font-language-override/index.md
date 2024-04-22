---
title: font-language-override
slug: Web/CSS/font-language-override
---

{{CSSRef}}

**font-language-override** CSS 属性控制在指定的语言中使用特定的字形。

```css
/* 关键字作为值 */
font-language-override: normal;

/* 字符串作为值 */
font-language-override: "ENG"; /* Use English glyphs */
font-language-override: "TRK"; /* Use Turkish glyphs */

/* 使用全局值 */
font-language-override: initial;
font-language-override: inherit;
font-language-override: unset;
```

默认情况下，HTML 的 `lang` 属性告诉浏览器使用语言的特定字形。例如，很多字体都有针对合成符 `fi` 的字形（i 上的点会被合并进 f 里）。而当使用土耳其语时，字体就不会使用合成字形。因为土耳其语有两个版本的 i: 一个带点 (`i`) 一个不带点 (`ı`)。这种情况下如果使用连写会把带点的 `i` 不正确地渲染成不带点的 `ı`。

`font-language-override`属性可以使你重载针对特定语言的字体行为。当你使用的字体缺少对某种语言的正确支持时，这很有用。例如，如果一种字体没有针对阿塞拜疆语的适当规则，你可以强制字体使用遵循类似规则的土耳其语字形。

{{cssinfo}}

## 语法

`font-language-override` 属性被指定为关键词 `normal` 或者一个字符串 `<string>`。

### 值

- `normal`
  - : 指示浏览器使用适合 `lang` 属性指定的语言的字体字形。这是默认值。
- {{cssxref("string")}}
  - : 指示浏览器使用适合该字符串指定的语言的字体字形。该字符串必须与 [OpenType 语言系统](http://www.microsoft.com/typography/otspec/languagetags.htm)中的语言标签相匹配。例如，"ENG "是英语，"KOR "是韩语。

### 正式语法

{{csssyntax}}

## 示例

### 使用丹麦文字形

#### HTML

```html
<p class="para1">Default language setting.</p>
<p class="para2">
  This is a string with the <code>font-language-override</code> set to Danish.
</p>
```

#### CSS

```css
p.para1 {
  font-language-override: normal;
}

p.para2 {
  font-language-override: "DAN";
}
```

#### 结果

{{ EmbedLiveSample('使用丹麦文字形', '600') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("font-variant")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-synthesis")}}, {{cssxref("font-kerning")}}.
