---
title: <i>：斜體文字元素
slug: Web/HTML/Reference/Elements/i
---

**`<i>`** [HTML](/zh-TW/docs/Web/HTML) 元素代表一段文字，由於某些原因與正常文字有所區分，例如成語、專業術語、分類設計等。歷史上，這些元素通常以斜體字來呈現，這也是這個元素被命名為 `<i>` 的原因。

{{InteractiveExample("HTML Demo: &lt;i&gt;", "tabbed-shorter")}}

```html interactive-example
<p>I looked at it and thought <i>This can't be real!</i></p>

<p>
  <i>Musa</i> is one of two or three genera in the family <i>Musaceae</i>; it
  includes bananas and plantains.
</p>

<p>
  The term <i>bandwidth</i> describes the measure of how much information can
  pass through a data connection in a given amount of time.
</p>
```

```css interactive-example
/* stylelint-disable-next-line block-no-empty */
i {
}
```

## 屬性

此元素僅包含[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

## 使用注意事項

- 使用 `<i>` 元素將文字區分出來，以提高可讀性。這可能是一段與周圍文字語義有所不同的文字範圍。`<i>` 元素的用例包括：
  - 替代語氣或情感
  - 分類設計（如屬名和種名「_Homo sapiens_」）
  - 來自其他語言的成語（例如「_et cetera_」）；這些應該包含 [`lang`](/zh-TW/docs/Web/HTML/Reference/Global_attributes#lang) 屬性以標識語言
  - 專業術語
  - 轉寫
  - 思想（例如 「她想知道，_這個作者到底在說什麼？_」）
  - 西方文字系統中的船名或船舶名稱（例如「他們在碼頭上尋找 _Empress of the Galaxy_，這是他們被分配的船。」）

- 在 HTML 規範的早期版本中，`<i>` 元素僅是一個表示性元素，用於以斜體顯示文字，就像 `<b>` 元素用於以粗體顯示文字一樣。但現在情況已經改變，這些標籤現在定義了語義，而不是外觀。瀏覽器通常仍會以斜體類型顯示 `<i>` 元素的內容，但根據定義，不再需要這樣做。要顯示斜體文字，作者應該使用 CSS 的 {{cssxref("font-style")}} 屬性。
- 請確保所討論的文字實際上不是更適合使用其他元素標記。
  - 使用 {{HTMLElement("em")}} 來表示強調。
  - 使用 {{HTMLElement("strong")}} 表示重要性、嚴重性或緊迫性。
  - 使用 {{HTMLElement("mark")}} 表示相關性。
  - 使用 {{HTMLElement("cite")}} 標記作品的名稱，如書籍、劇本或歌曲。
  - 使用 {{HTMLElement("dfn")}} 標記術語的定義實例。

## 範例

此範例演示使用 `<i>` 元素標記另一種語言的文字。

```html
<p>
  The Latin phrase <i lang="la">Veni, vidi, vici</i> is often mentioned in
  music, art, and literature.
</p>
```

### 結果

{{EmbedLiveSample("範例")}}

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

- {{HTMLElement("em")}}
- 其他斜體元素：{{HTMLElement("var")}}、{{HTMLElement("dfn")}}、{{HTMLElement("cite")}}、{{HTMLElement("address")}}
