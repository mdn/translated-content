---
title: <map>：圖像映射元素
slug: Web/HTML/Element/map
---

{{HTMLSidebar}}

**`<map>`** [HTML](/zh-TW/docs/Web/HTML) 元素與 {{HTMLElement("area")}} 元素一同使用，用於定義圖像映射（可點擊的鏈接區域）。

{{EmbedInteractiveExample("pages/tabbed/map.html", "tabbed-standard")}}

## 屬性

此元素包括[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

- `name`
  - : `name` 屬性給映射一個名稱，以便可以引用它。該屬性必須存在，並且必須具有非空值，沒有空格字符。`name` 屬性的值不能等於同一文件中另一個 `<map>` 元素的 `name` 屬性的值。如果還指定了 [`id`](/zh-TW/docs/Web/HTML/Global_attributes#id) 屬性，則兩個屬性的值必須相同。

## 範例

### 具有兩個區域的圖像映射

單擊左邊的鸚鵡可查看 JavaScript，單擊右邊的鸚鵡可查看 CSS。

#### HTML

```html
<!-- Photo by Juliana e Mariana Amorim on Unsplash -->
<map name="primary">
  <area
    shape="circle"
    coords="75,75,75"
    href="https://developer.mozilla.org/docs/Web/JavaScript"
    target="_blank"
    alt="JavaScript" />
  <area
    shape="circle"
    coords="275,75,75"
    href="https://developer.mozilla.org/docs/Web/CSS"
    target="_blank"
    alt="CSS" />
</map>
<img
  usemap="#primary"
  src="parrots.jpg"
  alt="350 x 150 picture of two parrots" />
```

#### 結果

{{ EmbedLiveSample('具有兩個區域的影像映射', '', '250') }}

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Content_categories"
          >內容類別</a
        >
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#流內容"
          >流內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容"
          >段落型內容</a
        >、可感知的內容。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        任何<a href="/zh-TW/docs/Web/HTML/Content_categories#透明內容模型"
          >透明內容模型</a
        >元素。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，必須有開始標籤和結束標籤。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容"
          >段落型內容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >沒有對應的角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>沒有允許的 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLMapElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTMLElement("a")}}
- {{HTMLElement("area")}}
