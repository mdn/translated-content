---
title: <bdo>：雙向文字覆蓋元素
slug: Web/HTML/Reference/Elements/bdo
---

**`<bdo>`** [HTML](/zh-TW/docs/Web/HTML) 元素覆蓋了文本的當前方向性，使其中的文本以不同的方向呈現。

{{InteractiveExample("HTML Demo: &lt;bdo&gt;", "tabbed-standard")}}

```html interactive-example
<h1>Famous seaside songs</h1>

<p>The English song "Oh I do like to be beside the seaside"</p>

<p>
  Looks like this in Hebrew:
  <span dir="rtl">אה, אני אוהב להיות ליד חוף הים</span>
</p>

<p>
  In the computer's memory, this is stored as
  <bdo dir="ltr">אה, אני אוהב להיות ליד חוף הים</bdo>
</p>
```

```css interactive-example
html {
  font-family: sans-serif;
}

/* stylelint-disable-next-line block-no-empty */
bdo {
}
```

文本的字符從給定方向的起點繪製；個別字符的方向不受影響（例如，字符不會倒置繪製）。

## 屬性

此元素的屬性包括[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

- `dir`
  - : 此元素內容中文本應該呈現的方向。可能的值有：
    - `ltr`：表示文本應該從左到右顯示。
    - `rtl`：表示文本應該從右到左顯示。

## 範例

```html
<!-- Switch text direction -->
<p>This text will go left to right.</p>
<p><bdo dir="rtl">This text will go right to left.</bdo></p>
```

### 結果

{{EmbedLiveSample('範例')}}

## 備註

HTML 4 規範未為此元素指定事件；這可能是一個疏忽。

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories"
          >內容類別</a
        >
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容"
          >流內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容"
          >段落型內容</a
        >、可感知內容。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容"
          >段落型內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，起始和結束標籤均為必需的。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容"
          >段落型內容</a
        > 的元素。
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
      <td>
        {{domxref("HTMLElement")}} 在 Gecko 1.9.2（Firefox 4）及之前版本中，Firefox 使用 <code
          ><a href="/zh-TW/docs/Web/API/HTMLSpanElement"
            >HTMLSpanElement</a
          ></code
        > 接口來實現此元素。
      </td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 相關的 HTML 元素：{{HTMLElement("bdi")}}
