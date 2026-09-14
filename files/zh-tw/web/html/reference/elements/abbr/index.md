---
title: <abbr>：縮寫元素
slug: Web/HTML/Reference/Elements/abbr
---

**`<abbr>`** [HTML](/zh-TW/docs/Web/HTML) 元素代表縮寫或縮略語。

在包含縮寫或縮略語時，首次使用時需提供該術語的全稱，並使用 `<abbr>` 標記縮寫。這有助於告知使用者縮寫或縮略語的含義。

可選的 [`title`](/zh-TW/docs/Web/HTML/Reference/Global_attributes#title) 屬性可在未提供完整展開時提供縮寫或縮略語的展開。這可為用戶代理提供如何宣布/顯示內容的提示，同時告知所有使用者該縮寫的含義。若存在，`title` 必須包含該完整描述，不能包含其他內容。

{{InteractiveExample("HTML Demo: &lt;abbr&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  You can use <abbr>CSS</abbr> (Cascading Style Sheets) to style your
  <abbr>HTML</abbr> (HyperText Markup Language). Using style sheets, you can
  keep your <abbr>CSS</abbr> presentation layer and <abbr>HTML</abbr> content
  layer separate. This is called "separation of concerns."
</p>
```

```css interactive-example
abbr {
  font-style: italic;
  color: chocolate;
}
```

## 屬性

該元素僅支援[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。當與 `<abbr>` 元素一起使用時，[`title`](/zh-TW/docs/Web/HTML/Reference/Global_attributes#title) 屬性具有特定的語義意義；必須包含縮寫的完整人類可讀描述或展開。該文本通常會在將滑鼠游標懸停在元素上時，由瀏覽器呈現為工具提示。

你使用的每個 `<abbr>` 元素都是獨立的；為其中一個提供 `title` 不會自動將相同的展開文本附加到其他具有相同內容文本的元素上。

## 使用注意事項

### 典型用例

並不要求所有縮寫都必須使用 `<abbr>` 進行標記。但是，有幾種情況可以使用：

- 當使用縮寫且要在文檔內容流之外提供展開或定義時，使用具有適當 [`title`](/zh-TW/docs/Web/HTML/Reference/Global_attributes#title) 的 `<abbr>`。
- 要定義讀者可能不熟悉的縮寫時，使用 `<abbr>` 並內置文字提供定義。僅在內嵌展開或定義不可用時才包含 `title` 屬性。
- 當需要語義地注意縮寫在文本中的存在時，`<abbr>` 元素很有用。這可用於樣式設計或腳本目的。
- 你可以將 `<abbr>` 與 {{HTMLElement("dfn")}} 一起使用，為縮寫或縮略語建立定義。參見下面的範例[定義縮寫](#定義縮寫)。

### 語法注意事項

在具有[語法數量](<https://zh.wikipedia.org/wiki/數_(語法)>)（即，項目數量影響句子語法的語言）的語言中，`title` 屬性中使用與 `<abbr>` 元素內部相同的語法數量。這對於具有超過兩個數字的語言（例如阿拉伯語）尤其重要，但對於英語也是相關的。

## 默認樣式

該元素的目的純粹是方便作者，所有瀏覽器默認都是內聯顯示（{{cssxref('display')}}`: inline`），儘管其默認樣式因瀏覽器而異：

有些瀏覽器向元素內容添加了虛線下劃線。其他在將內容轉換為小型大寫字母時添加了虛線下劃線。其他可能與 {{HTMLElement("span")}} 元素一樣未對其進行區別。要控制此樣式，請使用 {{cssxref('text-decoration')}} 和 {{cssxref('font-variant')}}。

## 範例

### 語義標記縮寫

要標記縮寫而不提供展開或描述，只需使用沒有任何屬性的 `<abbr>`，如此範例所示。

#### HTML

```html
<p>Using <abbr>HTML</abbr> is fun and easy!</p>
```

#### 結果

{{EmbedLiveSample("語義標記縮寫")}}

### 為縮寫設置樣式

你可以使用 CSS 為縮寫設置自定義樣式，如此簡單範例所示。

#### HTML

```html
<p>Using <abbr>CSS</abbr>, you can style your abbreviations!</p>
```

#### CSS

```css
abbr {
  font-variant: all-small-caps;
}
```

#### 結果

{{EmbedLiveSample("為縮寫設置樣式")}}

### 提供展開

添加 [`title`](/zh-TW/docs/Web/HTML/Reference/Global_attributes#title) 屬性可讓你為縮寫或縮略語提供展開或定義。

#### HTML

```html
<p>Ashok's joke made me <abbr title="Laugh Out Loud">LOL</abbr> big time.</p>
```

#### 結果

{{EmbedLiveSample("提供展開")}}

### 定義縮寫

你可以將 `<abbr>` 與 {{HTMLElement("dfn")}} 一起使用，更正式地定義縮寫，如此範例所示。

#### HTML

```html
<p>
  <dfn id="html"><abbr title="HyperText Markup Language">HTML</abbr> </dfn> is a
  markup language used to create the semantics and structure of a web page.
</p>

<p>
  A <dfn id="spec">Specification</dfn> (<abbr>spec</abbr>) is a document that
  outlines in detail how a technology or API is intended to function and how it
  is accessed.
</p>
```

#### 結果

{{EmbedLiveSample("定義縮寫", 600, 120)}}

### 無障礙議題

在頁面上首次使用縮寫或縮略語時拼寫出完整的縮寫或縮略語有助於幫助人們理解，特別是如果內容是技術性的或行業術語。

僅在文本中展開縮寫或縮略語不可行時才包含 `title`。在宣布的單詞或短語與在屏幕上顯示的內容之間存在差異，特別是如果它是讀者可能不熟悉的技術術語時，可能會令人不安。

#### HTML

```html
<p>
  JavaScript Object Notation (<abbr>JSON</abbr>) is a lightweight
  data-interchange format.
</p>
```

#### 結果

{{EmbedLiveSample("無障礙議題")}}

對於不熟悉內容中討論的術語或概念的人、剛接觸該語言的人和有認知問題的人來說，這尤其有助於理解內容。

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
        >、<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容"
          >段落型內容</a
        >、捫及內容
      </td>
    </tr>
    <tr>
      <th scope="row">允許內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容"
          >段落型內容</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        接受任何<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容">段落型內容</a
        >
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

- [使用 `<abbr>` 元素](/zh-TW/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations)
