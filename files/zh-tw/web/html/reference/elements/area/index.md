---
title: <area>：圖像地圖區域元素
slug: Web/HTML/Reference/Elements/area
---

**`<area>`** [HTML](/zh-TW/docs/Web/HTML) 元素定義了圖像地圖中具有預定義可點擊區域的區域。圖像地圖允許將圖像上的幾何區域與{{Glossary("Hyperlink", "超連結")}}關聯。

此元素僅在 {{HTMLElement("map")}} 元素內使用。

{{InteractiveExample("HTML Demo: &lt;area&gt;", "tabbed-taller")}}

```html interactive-example
<map name="infographic">
  <area
    shape="poly"
    coords="129,0,260,95,129,138"
    href="https://developer.mozilla.org/docs/Web/HTTP"
    alt="HTTP" />
  <area
    shape="poly"
    coords="260,96,209,249,130,138"
    href="https://developer.mozilla.org/docs/Web/HTML"
    alt="HTML" />
  <area
    shape="poly"
    coords="209,249,49,249,130,139"
    href="https://developer.mozilla.org/docs/Web/JavaScript"
    alt="JavaScript" />
  <area
    shape="poly"
    coords="48,249,0,96,129,138"
    href="https://developer.mozilla.org/docs/Web/API"
    alt="Web APIs" />
  <area
    shape="poly"
    coords="0,95,128,0,128,137"
    href="https://developer.mozilla.org/docs/Web/CSS"
    alt="CSS" />
</map>
<img
  usemap="#infographic"
  src="/shared-assets/images/examples/mdn-info.png"
  alt="MDN infographic" />
```

```css interactive-example
img {
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 260px;
}
```

## 屬性

此元素的屬性包括[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

- `alt`
  - : 在不顯示圖像的瀏覽器上顯示的文本字符串替代品。文本應該構造成當不顯示替代文本時向用戶呈現與圖像相同類型的選擇。只有在使用 [`href`](#href) 屬性時才需要此屬性。
- `coords`
  - : `coords` 屬性詳細描述了 `<area>` 的 [`shape`](#shape) 屬性的大小、形狀和位置的坐標。如果 `shape` 設置為 `default`，則不能使用此屬性。
    - `rect`：值為 `x1,y1,x2,y2`。該值指定了矩形的左上角和右下角的坐標。例如，在 `<area shape="rect" coords="0,0,253,27" href="#" target="_blank" alt="Mozilla">` 中，坐標為 `0,0` 和 `253,27`，分別表示矩形的左上角和右下角。
    - `circle`：值為 `x,y,radius`。值指定了圓的中心和半徑的坐標。例如：`<area shape="circle" coords="130,136,60" href="#" target="_blank" alt="MDN">`
    - `poly`：值為 `x1,y1,x2,y2,..,xn,yn`。值指定了多邊形的邊緣的坐標。如果第一對和最後一對坐標不相同，則瀏覽器將添加最後一對坐標以閉合多邊形。

    值為 CSS 像素的數字。

- `download`
  - : 如果存在此屬性，則表示作者打算使用該超連結下載資源。有關 [`download`](/zh-TW/docs/Web/HTML/Reference/Elements/a#download) 屬性的詳細描述，請參見 {{HTMLElement("a")}}。
- `href`
  - : 區域的超連結目標。它的值是有效的 URL。如果省略此屬性，則 `<area>` 元素不表示超連結。
- `ping`
  - : 包含一個以空格分隔的 URL 列表，當點擊超連結時，瀏覽器（後台）將發送帶有 `PING` 主體的 {{HTTPMethod("POST")}} 請求到這些 URL。通常用於跟蹤。
- `referrerpolicy`
  - : 指示在提取資源時使用哪個引用網址的字符串：
    - `no-referrer`：不會發送 {{HTTPHeader("Referer")}} 標頭。
    - `no-referrer-when-downgrade`：不會將 {{HTTPHeader("Referer")}} 標頭發送給沒有 {{Glossary("TLS")}}（{{Glossary("HTTPS")}}）的 {{Glossary("origin")}}。
    - `origin`：發送的引用網址將被限制為引用頁面的原始位置：其 [scheme](/zh-TW/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)、{{Glossary("host")}} 和 {{Glossary("port")}}。
    - `origin-when-cross-origin`：發送到其他來源的引用網址將被限制為方案、主機和端口。相同來源的導航仍將包括路徑。
    - `same-origin`：對於{{Glossary("Same-origin policy", "相同源策略")}}，將發送一個引用網址，但跨來源請求將不包含引用網址信息。
    - `strict-origin`：僅在協議安全等級保持不變（HTTPS→HTTPS）時發送文件的原始位置作為引用網址，但不要將其發送到較不安全的目的地（HTTPS→HTTP）。
    - `strict-origin-when-cross-origin`（默認）：在執行同源請求時發送完整 URL，只有在協議安全等級保持不變時（HTTPS→HTTPS）才發送原始位置，並且不將標頭發送到較不安全的目的地（HTTPS→HTTP）。
    - `unsafe-url`：引用網址將包括原始位置和路徑（但不包括[片段](/zh-TW/docs/Web/API/HTMLAnchorElement/hash)、[密碼](/zh-TW/docs/Web/API/HTMLAnchorElement/password)或[用戶名](/zh-TW/docs/Web/API/HTMLAnchorElement/username)）。**此值不安全**，因為它會將來自 TLS 保護資源的原始位置和路徑洩漏給不安全的來源。

- `rel`
  - : 對包含 [`href`](#href) 屬性的錨點，此屬性指定了目標對象與鏈接對象的關係。值是一個以空格分隔的鏈接類型列表。這些值及其語義將由一些可能對文件作者有意義的機構註冊。如果未給出其他關係，則默認關係是空。只有在 [`href`](#href) 屬性存在時才使用此屬性。
- `shape`
  - : 關聯熱點的形狀。 HTML 的規範定義了 `rect`，它定義了矩形區域；`circle`，它定義了圓形區域；`poly`，它定義了多邊形；以及 `default`，它表示任何已定義形狀之外的整個區域。
- `target`
  - : 用於顯示鏈接資源的關鍵字或作者定義的 {{Glossary("browsing context", "瀏覽上下文")}} 名稱。以下關鍵字具有特殊含義：
    - `_self`（默認）：在當前的瀏覽上下文中顯示資源。
    - `_blank`：在新的未命名的瀏覽上下文中顯示資源。
    - `_parent`：在當前頁面位於框架內時，在當前瀏覽上下文的父瀏覽上下文中顯示資源。如果沒有父親，則與 `_self` 作用相同。
    - `_top`：在最上層的瀏覽上下文中顯示資源（即當前瀏覽上下文的祖先且沒有父親）。如果沒有父親，則與 `_self` 作用相同。

    只有在 [`href`](#href) 屬性存在時才使用此屬性。

    > [!NOTE]
    > 在 `<area>` 元素上設置 `target="_blank"` 將隱式提供與設置 [`rel="noopener"`](/zh-TW/docs/Web/HTML/Reference/Attributes/rel/noopener) 相同的 `rel` 行為，該行為不設置 `window.opener`。有關支援狀態，請參見[瀏覽器相容性](#瀏覽器相容性)。

## 範例

```html
<map name="primary">
  <area
    shape="circle"
    coords="75,75,75"
    href="left.html"
    alt="Click to go Left" />
  <area
    shape="circle"
    coords="275,75,75"
    href="right.html"
    alt="Click to go Right" />
</map>
<img
  usemap="#primary"
  src="https://via.placeholder.com/350x150"
  alt="350 x 150 pic" />
```

### 結果

{{EmbedLiveSample('範例', 360, 160) }}

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories">內容類型</a>
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容">流內容</a>、<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容">段落型內容</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">允許內容</th>
      <td>無，它是一個{{Glossary("void element", "空元素")}}。</td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>必須有開始標籤，並且不能有結束標籤。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容">段落型內容</a>的元素。<code>&#x3C;area></code> 元素必須具有祖先 {{HTMLElement("map")}}，但不必是直接父元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        當存在 <a href="/zh-TW/docs/Web/HTML/Reference/Elements/area#href"><code>href</code></a> 屬性時，為<a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a>，否則為 <a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"><code>generic</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>沒有允許的 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLAreaElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
