---
title: <cite>：引用標籤元素
slug: Web/HTML/Element/cite
---

{{HTMLSidebar}}

**`<cite>`** [HTML](/zh-TW/docs/Web/HTML) 元素用於標記被引用的創意作品的標題。引用可能根據與引用後設資料相關的上下文適當的慣例而以縮寫形式表示。

{{EmbedInteractiveExample("pages/tabbed/cite.html", "tabbed-standard")}}

## 屬性

此元素僅包括[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

## 使用說明

在 `<cite>` 元素的上下文中，可能被引用的創意作品包括但不限於以下：

- 一本書
- 一篇研究論文
- 一篇散文
- 一首詩
- 一部樂譜
- 一首歌曲
- 一部戲劇或電影劇本
- 一部電影
- 一部電視節目
- 一款遊戲
- 一件雕塑
- 一幅畫
- 一個劇場製作
- 一個戲劇
- 一部歌劇
- 一部音樂劇
- 一個展覽
- 一個法律案例報告
- 一個計算機程序
- 一個網站
- 一個網頁
- 一篇部落格文章或評論
- 一個論壇帖子或評論
- 一條推文
- 一條 Facebook 帖子
- 一個書面或口頭聲明
- 等等。

要在包含於 {{HTMLElement("blockquote")}} 或 {{HTMLElement("q")}} 元素內的引用材料的來源之後加上引用，請在該元素上使用 [`cite`](/zh-TW/docs/Web/HTML/Element/blockquote#cite) 屬性。

通常，瀏覽器會將 `<cite>` 元素的內容默認設置為斜體。若要避免此情況，請對 `<cite>` 元素應用 CSS 的 {{cssxref("font-style")}} 屬性。

## 範例

```html
<p>More information can be found in <cite>[ISO-0000]</cite>.</p>
```

### 結果

{{EmbedLiveSample("範例", 640, 80)}}

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
        <a href="/zh-TW/docs/Web/HTML/Content_categories#流內容"
          >流內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容"
          >段落型內容</a
        >、捫及內容。
      </td>
    </tr>
    <tr>
      <th scope="row">允許內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容"
          >段落型內容</a
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
      <td>
        {{domxref("HTMLElement")}} 在 Gecko 1.9.2（Firefox 4）及更早版本中，Firefox 為此元素實現了 {{domxref("HTMLSpanElement")}} 介面。
      </td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 用於長引用的元素 {{HTMLElement("blockquote")}}。
- 用於內嵌引用的元素 {{HTMLElement("q")}} 以及 [`cite`](/zh-TW/docs/Web/HTML/Element/q#cite) 屬性。
