---
title: <del>：刪除的文字元素
slug: Web/HTML/Element/del
---

{{HTMLSidebar}}

**`<del>`** [HTML](/zh-TW/docs/Web/HTML) 元素代表從文件中刪除的文字範圍。例如，這可用於渲染「跟踪更改」或源代碼差異信息。{{HTMLElement("ins")}} 元素可用於相反的目的：指示已添加到文檔中的文字。

{{EmbedInteractiveExample("pages/tabbed/del.html", "tabbed-standard")}}

此元素通常（但不一定）通過對文本應用刪除線樣式來呈現。

## 屬性

此元素的屬性包括[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

- `cite`
  - : 解釋更改的資源的 URI（例如會議記錄）。
- `datetime`
  - : 此屬性表示更改的時間和日期，必須是有效的日期字串，帶有可選時間。如果值無法解析為帶有可選時間字符串的日期，則元素將沒有相關的時間戳。關於沒有時間的字串的格式，請參見[日期字串](/zh-TW/docs/Web/HTML/Date_and_time_formats#日期字串)。如果字串包含日期和時間，則其格式在[本地日期和時間字串](/zh-TW/docs/Web/HTML/Date_and_time_formats#本地日期和時間字串)中有所介紹。

## 範例

```html
<p><del>This text has been deleted</del>, here is the rest of the paragraph.</p>
<del><p>This paragraph has been deleted.</p></del>
```

### 結果

{{EmbedLiveSample("範例")}}

## 無障礙議題

在默認配置中，大多數螢幕閱讀技術不會宣告 `del` 元素的存在。可以使用 CSS {{cssxref("content")}} 屬性以及 {{cssxref("::before")}} 和 {{cssxref("::after")}} 偽元素使其宣告。

```css
del::before,
del::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

del::before {
  content: " [deletion start] ";
}

del::after {
  content: " [deletion end] ";
}
```

一些使用螢幕閱讀器的人故意禁用宣告創建額外冗長的內容。因此，重要的是不要濫用此技術，只在不知道內容已被刪除會對理解產生不良影響的情況下應用它。

- [簡短筆記使你的標記更具無障礙性 | The Paciello Group](https://www.tpgi.com/short-note-on-making-your-mark-more-accessible/)
- [調整文本級別樣式 | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Content_categories"
          >內容類型</a
        >
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容"
          >段落型內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Content_categories#流內容"
          >流內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a
          href="/zh-TW/docs/Web/HTML/Content_categories#透明內容模型"
          >透明內容模型</a
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
        任何接受<a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容"
          >段落型內容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">deletion</a
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
      <td>{{domxref("HTMLModElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 用於將文字插入到文本中的 {{HTMLElement("ins")}} 元素
- 用於表示文本刪除而不是僅表示文本刪除的 {{HTMLElement("s")}} 元素
