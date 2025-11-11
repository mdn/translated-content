---
title: <pre>：預格式化文本元素
slug: Web/HTML/Reference/Elements/pre
---

**`<pre>`** [HTML](/zh-TW/docs/Web/HTML) 元素表示預格式化文本，將以 HTML 檔案中的原樣呈現。這段文字通常使用非比例或[等寬字體](https://zh.wikipedia.org/wiki/等宽字体)進行渲染。該元素內的空格會按照原樣呈現。

預設情況下，`<pre>` 是[區塊級](/zh-TW/docs/Glossary/Block-level_content)元素，即其預設的 {{cssxref("display")}} 值為 `block`。

{{InteractiveExample("HTML Demo: &lt;pre&gt;", "tabbed-standard")}}

```html interactive-example
<pre>
  L          TE
    A       A
      C    V
       R A
       DOU
       LOU
      REUSE
      QUE TU
      PORTES
    ET QUI T'
    ORNE O CI
     VILISÉ
    OTE-  TU VEUX
     LA    BIEN
    SI      RESPI
            RER       - Apollinaire
</pre>
```

```css interactive-example
pre {
  font-size: 0.7rem;
  margin: 0;
}
```

如果你需要在 `<pre>` 標籤內顯示保留字元，如 `<`、`>`、`&` 和 `"`，這些字元必須使用相應的 [HTML 實體](/zh-TW/docs/Glossary/Entity)進行轉義。

## 屬性

此元素僅包括[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

- `cols` {{non-standard_inline}} {{deprecated_inline}}
  - : 包含應有的行數的*首選*字元數。這是 [`width`](#width) 的非標準同義詞。要實現此效果，請改用 CSS {{Cssxref("width")}}。
- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 包含應有的行數的*首選*字元數。儘管在技術上仍有實現，但此屬性無視視覺效果；要實現此效果，請改用 CSS {{Cssxref("width")}}。
- `wrap` {{non-standard_inline}} {{Deprecated_Inline}}
  - : 是一個指示溢出應發生的*提示*。在現代瀏覽器中，此提示會被忽略且不會有視覺效果；要實現此效果，請改用 CSS {{Cssxref("white-space")}}。

## 可及性考量

對於使用預格式化文本創建的任何圖片或圖表，提供替代描述是重要的。替代描述應清晰簡明地描述圖片或圖表的內容。

使用輔助技術（如屏幕閱讀器）瀏覽的視覺受損人士可能無法理解預格式化文本字符在順序讀出時代表什麼。

{{HTMLElement("figure")}} 和 {{HTMLElement("figcaption")}} 元素的組合，再加上 `pre` 元素上的 [ARIA](/zh-TW/docs/Web/Accessibility/ARIA) `role` 和 [`aria-label`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) 屬性，允許預格式化的 {{Glossary("ASCII")}} 藝術被宣告為帶有替代文本的圖片，`figcaption` 則作為圖片的標題。

### 範例

```html
<figure>
  <pre role="img" aria-label="ASCII COW">
      ___________________________
  &lt; I'm an expert in my field. &gt;
      ---------------------------
          \   ^__^
           \  (oo)\_______
              (__)\       )\/\
                  ||----w |
                  ||     ||
  </pre>
  <figcaption id="cow-caption">
    A cow saying, "I'm an expert in my field." The cow is illustrated using
    preformatted text characters.
  </figcaption>
</figure>
```

- [MDN 了解 WCAG，指南 1.1 解釋](/zh-TW/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [H86: 為 ASCII 藝術、表情符號和 13375p34k 提供文本替代 | W3C WCAG 2.0 技術](https://www.w3.org/TR/WCAG20-TECHS/H86.html)

## 範例

### 基本範例

#### HTML

```html
<p>Using CSS to change the font color is easy.</p>
<pre>
body {
  color: red;
}
</pre>
```

#### 結果

{{EmbedLiveSample("基本範例")}}

### 轉義保留字元

#### HTML

```html
<pre>
let i = 5;

if (i &lt; 10 &amp;&amp; i &gt; 0)
  return &quot;Single Digit Number&quot;
</pre>
```

#### 結果

{{EmbedLiveSample("轉義保留字元")}}

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories"
          >內容類型</a
        >
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容"
          >流內容</a
        >、捫及內容。
      </td>
    </tr>
    <tr>
      <th scope="row">允許內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容"
          >段落型內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容"
          >流內容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>任何</td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLPreElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- CSS：{{Cssxref('white-space')}}、{{Cssxref('word-break')}}
- [HTML 實體](/zh-TW/docs/Glossary/Entity)
- 相關元素：{{HTMLElement("code")}}
