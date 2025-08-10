---
title: <dl>：描述清單元素
slug: Web/HTML/Reference/Elements/dl
---

**`<dl>`** [HTML](/zh-TW/docs/Web/HTML) 元素代表一個描述清單。該元素包含一組術語（使用 {{HTMLElement("dt")}} 元素指定）和描述（由 {{HTMLElement("dd")}} 元素提供）。此元素的常見用途包括實現詞彙表或顯示後設資料（一組鍵值對的串列）。

{{InteractiveExample("HTML Demo: &lt;dl&gt;", "tabbed-standard")}}

```html interactive-example
<p>Cryptids of Cornwall:</p>

<dl>
  <dt>Beast of Bodmin</dt>
  <dd>A large feline inhabiting Bodmin Moor.</dd>

  <dt>Morgawr</dt>
  <dd>A sea serpent.</dd>

  <dt>Owlman</dt>
  <dd>A giant owl-like creature.</dd>
</dl>
```

```css interactive-example
p,
dt {
  font-weight: bold;
}

dl,
dd {
  font-size: 0.9rem;
}

dd {
  margin-bottom: 1em;
}
```

## 屬性

此元素僅包括[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

## 範例

### 單個術語和描述

```html
<dl>
  <dt>Firefox</dt>
  <dd>
    A free, open source, cross-platform, graphical web browser developed by the
    Mozilla Corporation and hundreds of volunteers.
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

#### 結果

{{EmbedLiveSample("單個術語和描述")}}

### 多個術語，單個描述

```html
<dl>
  <dt>Firefox</dt>
  <dt>Mozilla Firefox</dt>
  <dt>Fx</dt>
  <dd>
    A free, open source, cross-platform, graphical web browser developed by the
    Mozilla Corporation and hundreds of volunteers.
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

#### 結果

{{EmbedLiveSample("多個術語，單個描述")}}

### 單個術語，多個描述

```html
<dl>
  <dt>Firefox</dt>
  <dd>
    A free, open source, cross-platform, graphical web browser developed by the
    Mozilla Corporation and hundreds of volunteers.
  </dd>
  <dd>
    The Red Panda also known as the Lesser Panda, Wah, Bear Cat or Firefox, is a
    mostly herbivorous mammal, slightly larger than a domestic cat (60 cm long).
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

#### 結果

{{EmbedLiveSample("單個術語，多個描述")}}

### 多個術語和描述

也可以通過結合上面的範例來定義多個術語與多個相應描述。

### 後設資料

描述清單可用於將後設資料顯示為鍵值對的串列。

```html
<dl>
  <dt>Name</dt>
  <dd>Godzilla</dd>
  <dt>Born</dt>
  <dd>1952</dd>
  <dt>Birthplace</dt>
  <dd>Japan</dd>
  <dt>Color</dt>
  <dd>Green</dd>
</dl>
```

#### 結果

{{EmbedLiveSample('後設資料')}}

提示：在 CSS 中定義鍵值分隔符可能很方便，例如：

```css
dt::after {
  content: ": ";
}
```

### 將名稱-值組包裝在 `div` 元素中

[WHATWG](/zh-TW/docs/Glossary/WHATWG) HTML 允許將每個名稱-值組包裝在 {{HTMLElement("dl")}} 元素中的 {{HTMLElement("div")}} 元素中。這在使用[微數據](/zh-TW/docs/Web/HTML/Guides/Microdata)或當[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)適用於整個組時或用於樣式目的時很有用。

```html
<dl>
  <div>
    <dt>Name</dt>
    <dd>Godzilla</dd>
  </div>
  <div>
    <dt>Born</dt>
    <dd>1952</dd>
  </div>
  <div>
    <dt>Birthplace</dt>
    <dd>Japan</dd>
  </div>
  <div>
    <dt>Color</dt>
    <dd>Green</dd>
  </div>
</dl>
```

#### 結果

{{EmbedLiveSample('將名稱-值組包裝在 `div` 元素中')}}

## 備註

請勿僅使用此元素（也不要使用 {{HTMLElement("ul")}} 元素）來在頁面上創建縮排。雖然它有效，但這是一種不良實踐，會混淆描述清單的含義。

要更改描述術語的縮排，請使用 [CSS](/zh-TW/docs/Web/CSS) {{cssxref("margin")}} 屬性。

## 無障礙議題

每個螢幕閱讀器以不同方式顯示 `<dl>` 內容，包括總計數、術語/定義上下文和導覽方法。這些差異不一定是錯誤。
截至 iOS 14，VoiceOver 在使用虛擬游標導覽（不是通過讀取所有命令）時將宣告 `<dl>` 內容為列表。VoiceOver 不支援 `<dl>` 的列表導覽命令。請小心將 ARIA `term` 和 `definition` 角色應用於 `<dl>`結構時，因為 VoiceOver（macOS 和 iOS）會調整它們的宣告方式。

- [iOS 14 上的 VoiceOver 支援描述清單](https://adrianroselli.com/2020/09/voiceover-on-ios-14-supports-description-lists.html)
- [關於描述清單支援的簡短說明](https://adrianroselli.com/2022/12/brief-note-on-description-list-support.html)

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
        >，如果 <code>&#x3C;dl></code> 元素的子項目包含一個名稱-值組，則為捫及內容。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <p>
          零個或多個組，每個組都包含一個或多個 {{HTMLElement("dt")}} 元素，後跟一個或多個 {{HTMLElement("dd")}} 元素，可選地與 {{HTMLElement("script")}} 和 {{HTMLElement("template")}} 元素交錯。<br />或（在 {{Glossary("WHATWG")}} HTML、{{Glossary("W3C")}} HTML 5.2 及更高版本中）一個或多個 {{HTMLElement("div")}} 元素，可選地與 {{HTMLElement("script")}} 和 {{HTMLElement("template")}} 元素交錯。
        </p>
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
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >沒有相對應的角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a>、<code
          ><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/List_role"
            >list</a
          ></code
        >、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLDListElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTMLElement("dt")}}
- {{HTMLElement("dd")}}
