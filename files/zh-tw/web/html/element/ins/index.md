---
title: <ins>：插入文字元素
slug: Web/HTML/Element/ins
---

{{HTMLSidebar}}

**`<ins>`** [HTML](/zh-TW/docs/Web/HTML) 元素代表已添加到文件的一段文字範圍。你可以使用 {{HTMLElement("del")}} 元素來類似地表示已從文件中刪除的文字範圍。

{{EmbedInteractiveExample("pages/tabbed/ins.html", "tabbed-standard")}}

## 屬性

此元素包含[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

- `cite`
  - : 此屬性定義解釋變更的資源的 URI，例如連結到會議記錄或故障排除系統中的票證。
- `datetime`
  - : 此屬性指示變更的時間和日期，必須是帶有可選時間字串的有效日期。如果值無法解析為帶有可選時間字串的日期，該元素將沒有相關的時間戳記。有關不帶時間的字串的格式，請參閱[有效日期字串的格式](/zh-TW/docs/Web/HTML/Date_and_time_formats#date_strings)。如果字串包含日期和時間，其格式則在[有效本地日期和時間字串的格式](/zh-TW/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings)中有所描述。

## 範例

```html
<ins>This text has been inserted</ins>
```

### 結果

{{EmbedLiveSample("範例")}}

## 可訪問性考慮事項

大多數屏幕閱讀技術在默認配置中不會宣告 `<ins>` 元素的存在。通過使用 CSS {{cssxref("content")}} 屬性以及 {{cssxref("::before")}} 和 {{cssxref("::after")}} 擬似元素，可以使其被宣告。

```css
ins::before,
ins::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

ins::before {
  content: " [insertion start] ";
}

ins::after {
  content: " [insertion end] ";
}
```

一些使用屏幕閱讀器的人有意禁用宣告內容以避免冗長。因此，重要的是不濫用此技術，僅在不知道內容已插入將對理解產生不利影響的情況下應用它。

- [製作你的標記（更具可訪問性）的簡短說明 | The Paciello Group](https://www.tpgi.com/short-note-on-making-your-mark-more-accessible/)
- [微調文本級樣式 | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

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
          >透明內容</a
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
        任何接受<a
          href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容"
          >段落型內容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">insertion</a
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

- {{HTMLElement("del")}} 元素，用於標記刪除到文件的內容
