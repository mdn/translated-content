---
title: <ul>：無序清單元素
slug: Web/HTML/Element/ul
---

{{HTMLSidebar}}

**`<ul>`** [HTML](/zh-TW/docs/Web/HTML) 元素表示項目的無序清單，通常呈現為項目符號清單。

{{EmbedInteractiveExample("pages/tabbed/ul.html", "tabbed-standard")}}

## 屬性

此元素包含[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

- `compact` {{Deprecated_inline}}

  - : 此布林屬性提示應以緊湊樣式呈現清單。此屬性的解釋取決於{{glossary("user agent")}}，並且並非所有瀏覽器都支援。

    > [!WARNING]
    > 請勿使用此屬性，因為它已被棄用：請改用 [CSS](/zh-TW/docs/Web/CSS)。要達到與 `compact` 屬性類似的效果，可以使用具有值 `80%` 的 CSS 屬性{{cssxref("line-height")}}。

- `type` {{Deprecated_inline}}

  - : 此屬性設置清單的項目符號樣式。在HTML3.2和HTML 4.0/4.01的過渡版本中定義的值有：

    - `circle`
    - `disc`
    - `square`

    WebTV界面中定義了第四種項目符號類型，但並非所有瀏覽器都支援：`triangle`。

    如果未出現，且如果元素未應用 [CSS](/zh-TW/docs/Web/CSS) {{ cssxref("list-style-type") }} 屬性，則使用者代理程式將根據清單的巢狀層級選擇項目符號類型。

    > [!WARNING]
    > 請勿使用此屬性，因為它已被棄用；請改用 [CSS](/zh-TW/docs/Web/CSS) {{ cssxref("list-style-type") }} 屬性。

## 使用注意事項

- `<ul>` 元素用於將無意義的項目集合分組，它們在清單中的順序毫無意義。通常，無序清單項目顯示為項目符號，可以是點、圓圈或正方形等多種形式。項目符號樣式未在頁面的HTML描述中定義，而是在其相關的CSS中使用 {{ cssxref("list-style-type") }} 屬性。
- `<ul>` 和 {{HTMLElement("ol")}} 元素可以嵌套得深入。此外，巢狀清單可以在 `<ol>` 和 `<ul>` 之間自由交替，沒有限制。
- {{ HTMLElement("ol") }} 和 `<ul>` 元素都表示項目的清單。它們之間的區別在於對 {{ HTMLElement("ol") }} 元素而言，順序是有意義的。要確定使用哪一個，請嘗試更改清單項目的順序；如果含義更改，則應使用 {{ HTMLElement("ol") }} 元素，否則可以使用 `<ul>`。

## 範例

### 簡單範例

```html
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>
```

#### 結果

{{EmbedLiveSample("簡單範例", 400, 120)}}

### 嵌套清單

```html
<ul>
  <li>first item</li>
  <li>
    second item
    <!-- Look, the closing </li> tag is not placed here! -->
    <ul>
      <li>second item first subitem</li>
      <li>
        second item second subitem
        <!-- Same for the second nested unordered list! -->
        <ul>
          <li>second item second subitem first sub-subitem</li>
          <li>second item second subitem second sub-subitem</li>
          <li>second item second subitem third sub-subitem</li>
        </ul>
      </li>
      <!-- Closing </li> tag for the li that
                  contains the third unordered list -->
      <li>second item third subitem</li>
    </ul>
    <!-- Here is the closing </li> tag -->
  </li>
  <li>third item</li>
</ul>
```

#### 結果

{{EmbedLiveSample("嵌套列表", 400, 340)}}

### 無序清單內的有序清單

```html
<ul>
  <li>first item</li>
  <li>
    second item
    <!-- Look, the closing </li> tag is not placed here! -->
    <ol>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ol>
    <!-- Here is the closing </li> tag -->
  </li>
  <li>third item</li>
</ul>
```

#### 結果

{{EmbedLiveSample("有序列表內部的無序列表", 400, 190)}}

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
        >，如果 <code>&#x3C;ul></code> 元素的子元素包含至少一個 {{HTMLElement("li")}} 元素，則包括
        <a href="/zh-TW/docs/Web/HTML/Content_categories#捫及內容"
          >捫及內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        零個或多個 {{HTMLElement("li")}}、
        {{HTMLElement("script")}} 和
        {{HTMLElement("template")}} 元素。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，開始標籤和結束標籤均為必需。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Content_categories#流內容"
          >流內容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/List_role"
            >list</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/directory_role"><code>directory</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/listbox_role"><code>listbox</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/menu_role"><code>menu</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/menubar_role"><code>menubar</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/radiogroup_role"><code>radiogroup</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/tablist_role"><code>tablist</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/toolbar_role"><code>toolbar</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/tree_role"><code>tree</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLUListElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 其他與清單相關的HTML元素：{{HTMLElement("ol")}}、{{HTMLElement("li")}}、{{HTMLElement("menu")}}
- 可能對樣式化 `<ul>` 元素特別有用的 CSS 屬性：

  - {{CSSxRef("list-style")}} 屬性，選擇序數的顯示方式。
  - [CSS 計數器](/zh-TW/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)，處理複雜的巢狀清單。
  - {{CSSxRef("line-height")}} 屬性，模擬已棄用的 [`compact`](#compact) 屬性。
  - {{CSSxRef("margin")}} 屬性，控制清單的縮進。
