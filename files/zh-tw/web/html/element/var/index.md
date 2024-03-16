---
title: <var>：變數元素
slug: Web/HTML/Element/var
---

{{HTMLSidebar}}

**`<var>`** [HTML](/zh-TW/docs/Web/HTML) 元素用於表示數學表達式或編程上下文中的變數名稱。通常使用斜體版本的當前字型呈現，儘管該行為依賴於瀏覽器。

{{EmbedInteractiveExample("pages/tabbed/var.html", "tabbed-shorter")}}

## 屬性

此元素僅包括[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

## 使用注意事項

### 相關元素

在常見使用 `<var>` 的情境中使用的其他元素包括：

- {{HTMLElement("code")}}：HTML Code 元素
- {{HTMLElement("kbd")}}：HTML Keyboard input 元素
- {{HTMLElement("samp")}}：HTML Sample Output 元素

如果遇到將 `<var>` 用於樣式而不是語義目的的代碼，應使用帶有適當 CSS 的 {{HTMLElement("span")}} 或以下選項中的適當語義元素：

- {{HTMLElement("em")}}
- {{HTMLElement("i")}}
- {{HTMLElement("q")}}

### 默認樣式

大多數瀏覽器在呈現 `<var>` 時將 {{cssxref("font-style")}} 應用為 `"italic"`。這可以在 CSS 中覆蓋，如下所示：

```css
var {
  font-style: normal;
}
```

## 範例

### 基本範例

這是一個簡單的例子，使用 `<var>` 來表示數學等式中的變數名稱。

```html
<p>A simple equation: <var>x</var> = <var>y</var> + 2</p>
```

#### 結果

{{EmbedLiveSample("基本範例", 650,80)}}

### 覆蓋默認樣式

使用 CSS，可以覆蓋 `<var>` 元素的默認樣式。在此示例中，如果可用，變數名稱將使用粗體 Courier 來呈現，否則將退回到默認的等寬字型。

#### CSS

```css
var {
  font:
    bold 15px "Courier",
    "Courier New",
    monospace;
}
```

#### HTML

```html
<p>
  The variables <var>minSpeed</var> and <var>maxSpeed</var> control the minimum
  and maximum speed of the apparatus in revolutions per minute (RPM).
</p>
```

此 HTML 使用 `<var>` 將兩個變數的名稱括起來。

#### 結果

{{EmbedLiveSample("覆蓋預設樣式", 650, 140)}}

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
        >、可觸及的內容。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容"
          >段落型內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，開始標籤和結束標籤均為必需。</td>
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
          >無對應角色</a
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
