---
title: <small>：備註元素
slug: Web/HTML/Reference/Elements/small
---

**`<small>`** [HTML](/zh-TW/docs/Web/HTML) 元素表示側注和小字印刷，如版權和法律文本，獨立於其風格化呈現。默認情況下，它以比其中的文本小一號的字體大小呈現，例如從 `small` 到 `x-small`。

{{InteractiveExample("HTML Demo: &lt;small&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  MDN Web Docs is a learning platform for Web technologies and the software that
  powers the Web.
</p>

<hr />

<p>
  <small
    >The content is licensed under a Creative Commons Attribution-ShareAlike 2.5
    Generic License.</small
  >
</p>
```

```css interactive-example
small {
  font-size: 0.7em;
}
```

## 屬性

此元素僅包括[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

## 範例

### 基本使用

```html
<p>
  This is the first sentence.
  <small>This whole sentence is in small letters.</small>
</p>
```

#### 結果

{{EmbedLiveSample("基本使用")}}

### CSS 替代方法

```html
<p>
  This is the first sentence.
  <span style="font-size:0.8em">This whole sentence is in small letters.</span>
</p>
```

#### 結果

{{EmbedLiveSample("CSS 替代方法")}}

## 注意事項

儘管 `<small>` 元素，像 {{htmlelement("b")}} 和 {{htmlelement("i")}} 元素一樣，可能被認為違反結構和表示之間的分離原則，這三者在 HTML 中都是有效的。鼓勵作者在確定使用 `<small>` 還是 CSS 時應據其最佳判斷。

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">內容類別</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容"
          >流內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容"
          >段落型內容</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容"
          >段落型內容</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，必須有開始標籤和結束標籤。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容"
          >段落型內容</a
        >的元素，或任何接受<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容"
          >流內容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
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
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTMLElement("b")}}
- {{HTMLElement("sub")}} 和 {{HTMLElement("sup")}}
- {{HTMLElement("font")}}
- {{HTMLElement("style")}}
- HTML 4.01 規範：[字體樣式](https://www.w3.org/TR/html4/present/graphics.html#h-15.2)
