---
title: <div>：內容分區元素
slug: Web/HTML/Reference/Elements/div
---

**`<div>`** [HTML](/zh-TW/docs/Web/HTML) 元素是流內容的通用容器。除非以某種方式使用 {{glossary("CSS")}} 進行樣式化（例如直接應用樣式或應用某種佈局模型，如 [Flexbox](/zh-TW/docs/Web/CSS/Guides/Flexible_box_layout) 到其父元素上），否則它對內容或佈局沒有影響。

{{InteractiveExample("HTML Demo: &lt;div&gt;", "tabbed-standard")}}

```html interactive-example
<div class="warning">
  <img
    src="/shared-assets/images/examples/leopard.jpg"
    alt="An intimidating leopard." />
  <p>Beware of the leopard</p>
</div>
```

```css interactive-example
.warning {
  border: 10px ridge #f00;
  background-color: #ff0;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
}

.warning img {
  width: 100%;
}

.warning p {
  font: small-caps bold 1.2rem sans-serif;
  text-align: center;
}
```

作為「純粹」的容器，`<div>` 元素本身並不具有代表性。相反，它用於將內容分組，以便可以輕鬆地使用 [`class`](/zh-TW/docs/Web/HTML/Reference/Global_attributes#class) 或 [`id`](/zh-TW/docs/Web/HTML/Reference/Global_attributes#id) 屬性進行樣式化，標記文件的某一部分為使用不同語言編寫（使用 [`lang`](/zh-TW/docs/Web/HTML/Reference/Global_attributes#lang) 屬性），等等。

## 屬性

此元素包括[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

> [!NOTE]
> `align` 屬性已廢棄；請不要再使用。取而代之應該使用 CSS 屬性或技術，例如 [CSS Grid](/zh-TW/docs/Web/CSS/Guides/Grid_layout) 或 [CSS Flexbox](/zh-TW/docs/Learn_web_development/Core/CSS_layout/Flexbox) 來對頁面上的 `<div>` 元素進行對齊和定位。

## 使用注意事項

- 只有在沒有其他語義元素（例如 {{HTMLElement("article")}} 或 {{HTMLElement("nav")}}）適用時，應使用 `<div>` 元素。

## 範例

### 簡單範例

```html
<div>
  <p>
    Any kind of content here. Such as &lt;p&gt;, &lt;table&gt;. You name it!
  </p>
</div>
```

#### 結果

{{EmbedLiveSample("簡單範例", 650, 60)}}

### 帶樣式的範例

此範例通過使用 CSS 對 `<div>` 應用樣式來創建一個陰影框。請注意，在 `<div>` 上使用 [`class`](/zh-TW/docs/Web/HTML/Reference/Global_attributes#class) 屬性來將名為 `"shadowbox"` 的樣式應用於該元素。

#### HTML

```html
<div class="shadowbox">
  <p>Here's a very interesting note displayed in a lovely shadowed box.</p>
</div>
```

#### CSS

```css
.shadowbox {
  width: 15em;
  border: 1px solid #333;
  box-shadow: 8px 8px 5px #444;
  padding: 8px 12px;
  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);
}
```

#### 結果

{{EmbedLiveSample("帶樣式的範例", 650, 120)}}

## 無障礙議題

`<div>` 元素具有[隱含的 `generic` 角色](https://www.w3.org/TR/wai-aria-1.2/#generic)，而不是沒有。這可能會影響某些 ARIA 組合聲明，這些聲明期望具有特定角色的直接後代元素才能正常運作。

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
        >、<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#捫及內容">捫及內容</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容"
          >流內容</a
        >。<br />或（在 {{glossary("WHATWG")}} HTML 中）：如果父元素是
        {{HTMLElement("dl")}} 元素：一個或多個
        {{HTMLElement("dt")}} 元素，後跟一個或多個
        {{HTMLElement("dd")}} 元素，可選地與
        {{HTMLElement("script")}} 和
        {{HTMLElement("template")}} 元素交錯。
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
        >的元素。<br />或（在 {{glossary("WHATWG")}} HTML 中）：
        {{HTMLElement("dl")}} 元素。
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
      <td>{{domxref("HTMLDivElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 語義化分段元素：{{HTMLElement("section")}}、{{HTMLElement("article")}}、{{HTMLElement("nav")}}、{{HTMLElement("header")}}、{{HTMLElement("footer")}}
- {{HTMLElement("span")}} 元素用於樣式化段落內容
