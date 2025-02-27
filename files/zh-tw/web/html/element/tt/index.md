---
title: <tt>：電報文字元素
slug: Web/HTML/Element/tt
---

{{HTMLSidebar}}{{deprecated_header}}

**`<tt>`** [HTML](/zh-TW/docs/Web/HTML) 元素創建內嵌文本，使用{{Glossary("user agent", "使用者代理")}}預設的等寬字體呈現。此元素是為了渲染文本而創建的，就像在固定寬度顯示器上顯示的那樣，例如電報機、僅文字螢幕或列印機。

**非比例**、**等寬**和**等寬字型**是可互換使用的術語，具有相同的一般含義：它們描述了所有字符寬度相同的字體。

但是，此元素已過時。你應該使用更具語義的 {{HTMLElement("code")}}、{{HTMLElement("kbd")}}、{{HTMLElement("samp")}} 或 {{HTMLElement("var")}} 元素來呈現需要以等寬字體呈現的內嵌文本，或者使用 {{HTMLElement("pre")}} 標籤來呈現應該被呈現為單獨區塊的內容。

> [!NOTE]
> 如果沒有語義元素適用於你的用例（例如，如果你需要在非比例字體中顯示一些內容），你應該考慮使用 {{ HTMLElement("span") }} 元素，並使用 CSS 自訂其樣式。{{cssxref("font-family")}} 屬性是一個很好的起點。

## 屬性

此元素僅包括[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)

## 範例

### 基本範例

此範例使用 `<tt>` 顯示輸入到終端應用程式中的文字以及輸出。

```html
<p>
  Enter the following at the telnet command prompt:
  <code>set localecho</code><br />

  The telnet client should display: <tt>Local Echo is on</tt>
</p>
```

#### 結果

{{EmbedLiveSample("基本範例", 650, 80)}}

### 覆寫默認字體

你可以使用 CSS 覆寫瀏覽器的默認字體，如果瀏覽器允許的話（它不一定要允許）：

#### CSS

```css
tt {
  font-family: "Lucida Console", "Menlo", "Monaco", "Courier", monospace;
}
```

#### HTML

```html
<p>
  Enter the following at the telnet command prompt:
  <code>set localecho</code><br />

  The telnet client should display: <tt>Local Echo is on</tt>
</p>
```

#### 結果

{{EmbedLiveSample("覆寫默認字體", 650, 80)}}

## 使用注意事項

`<tt>` 元素默認使用瀏覽器的默認非比例字體呈現。你可以通過使用 CSS 創建使用 `tt` 選擇器的規則來覆寫此設置，就像上面的[覆寫默認字體](#覆寫默認字體)範例中所示。

> [!NOTE]
> 使用者配置的默認等寬字體設置可能優先於你的 CSS。

雖然在 HTML 4.01 中並未正式將此元素廢棄，但建議使用語義元素和/或 CSS。在 HTML 5 中，`<tt>` 元素已過時。

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
      <th scope="row">允許的內容</th>
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
      <th scope="row">允許的 ARIA 角色</th>
      <td>任何</td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 語義 {{HTMLElement("code")}}、{{HTMLElement("var")}}、{{HTMLElement("kbd")}} 和 {{HTMLElement("samp")}} 元素
- 用於顯示預格式化文本塊的 {{HTMLElement("pre")}} 元素
