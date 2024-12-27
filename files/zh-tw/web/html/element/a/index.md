---
title: <a>：超連結元素
slug: Web/HTML/Element/a
---

{{HTMLSidebar}}

**`<a>`** [HTML](/zh-TW/docs/Web/HTML) 元素（或稱*錨點*元素），具有[其 `href` 屬性](#href)，用於創建指向網頁、文件、電子郵件地址、同一頁面中的位置或任何其他 URL 可定位的東西。

每個 `<a>` 元素內的內容*應該*指示連結的目的地。如果存在 `href` 屬性，則在焦點位於 `<a>` 元素上時按下 Enter 鍵將激活它。

{{EmbedInteractiveExample("pages/tabbed/a.html", "tabbed-shorter")}}

## 屬性

此元素的屬性包括[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

- `download`

  - : 導致瀏覽器將連結的 URL 視為下載。可與或不與 `filename` 值一起使用：

    - 沒有值時，瀏覽器將從各種來源生成的文件名/擴展名提供建議：

      - {{HTTPHeader("Content-Disposition")}} HTTP 標頭
      - URL [路徑](/zh-TW/docs/Web/API/URL/pathname)中的最終段落
      - {{HTTPHeader("Content-Type")}} 標頭中的{{Glossary("MIME_type", "媒體類型")}}，以及 [`data:` URL](/zh-TW/docs/Web/URI/Schemes/data) 的開頭，或是 [`blob:` URL](/zh-TW/docs/Web/API/URL/createObjectURL_static) 的 {{domxref("Blob.type")}}。

    - `filename`：定義值可建議作為文件名。`/` 和 `\` 字符將轉換為底線（`_`）。檔案系統可能禁止文件名中的其他字符，因此如果需要，瀏覽器將調整建議的名稱。

    > [!NOTE]
    >
    > - `download` 只適用於[同源 URL](/zh-TW/docs/Web/Security/Same-origin_policy)，或者 `blob:` 和 `data:` 方案。
    > - 瀏覽器如何處理下載因瀏覽器、用戶設置和其他因素而異。用戶在下載開始之前可能會收到提示，文件可能會自動保存，或者它可能會自動打開，無論是在外部應用程序中還是在瀏覽器本身中。
    > - 如果 `Content-Disposition` 標頭與 `download` 屬性的信息不同，則結果行為可能不同：
    >
    >   - 如果標頭指定了 `filename`，則優先於 `download` 屬性中指定的文件名。
    >   - 如果標頭指定了 `inline` 的配置，Chrome 和 Firefox 會將屬性視為下載並優先處理它。舊版 Firefox（82 版之前）會優先處理標頭並在內聯中顯示內容。

- `href`

  - : 超連結指向的 URL。連結不限於基於 HTTP 的 URL——它們可以使用瀏覽器支持的任何 URL 方案：

    - 具有文件片段的頁面部分
    - 具有[文字片段](/zh-TW/docs/Web/URI/Fragment/Text_fragments)的特定文本部分
    - 具有媒體片段的媒體文件部分
    - 使用 `tel:` URL 的電話號碼
    - 使用 `mailto:` URL 的電子郵件地址
    - 使用 `sms:` URL 的短信文字消息
    - 儘管網頁瀏覽器可能不支持其他 URL 方案，但網站可以使用 [`registerProtocolHandler()`](/zh-TW/docs/Web/API/Navigator/registerProtocolHandler) 進行設置

- `hreflang`
  - : 指示連結 URL 的人類語言的提示。沒有內建功能。允許的值與[全域 `lang` 屬性](/zh-TW/docs/Web/HTML/Global_attributes/lang)相同。
- `ping`
  - : URL 的空格分隔列表。當點擊連結時，瀏覽器將向這些 URL 發送 {{HTTPMethod("POST")}} 請求，內容為 `PING`。通常用於跟蹤。
- `referrerpolicy`

  - : 跟隨連結時發送的[引用者](/zh-TW/docs/Web/HTTP/Headers/Referer)的程度。

    - `no-referrer`：不發送 {{HTTPHeader("Referer")}} 標頭。
    - `no-referrer-when-downgrade`：不發送 {{HTTPHeader("Referer")}} 標頭至沒有 {{Glossary("TLS")}}（{{Glossary("HTTPS")}}）的[來源](/zh-TW/docs/Web/Security/Same-origin_policy)。
    - `origin`：發送的引用者將僅限於引用頁面的來源：其[協定](/zh-TW/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)、{{Glossary("host", "主機")}}和{{Glossary("port", "通訊埠")}}。
    - `origin-when-cross-origin`：發送給其他來源的引用者將僅限於協定、主機和端口。對同一來源的導航仍將包含路徑。
    - `same-origin`：對於{{Glossary("Same-origin policy", "同一來源")}}，將發送引用者，但跨來源請求將不包含引用者信息。
    - `strict-origin`：僅在協定安全級別保持不變時（HTTPS→HTTPS）發送文件的源作為引用者，但不要將其發送給不太安全的目的地（HTTPS→HTTP）。
    - `strict-origin-when-cross-origin`（默認值）：對於同一來源請求，發送完整的 URL；僅在協定安全級別保持不變時（HTTPS→HTTPS）發送源；對於不太安全的目的地（HTTPS→HTTP），不發送標頭。
    - `unsafe-url`：引用者將包括來源*和*路徑（但不包括[片段](/zh-TW/docs/Web/API/HTMLAnchorElement/hash)、[密碼](/zh-TW/docs/Web/API/HTMLAnchorElement/password)或[用戶名](/zh-TW/docs/Web/API/HTMLAnchorElement/username)）。**此值不安全**，因為它將來自 TLS 保護資源的來源和路徑洩露給不安全的來源。

- `rel`
  - : 連結 URL 的關係，作為空格分隔的連結類型。
- `target`

  - : 要在何處顯示連結 URL，作為*瀏覽上下文*（一個選項卡、窗口或 {{HTMLElement("iframe")}}）的名稱。以下關鍵字對於加載 URL 的位置具有特殊意義：

    - `_self`：當前瀏覽上下文。（默認）
    - `_blank`：通常是一個新選項卡，但用戶可以配置瀏覽器以打開新窗口。
    - `_parent`：當前瀏覽上下文的父級。如果沒有父級，則與 `_self` 行為相同。
    - `_top`：最上層的瀏覽上下文。具體來說，這意味著當前上下文的祖先中的「最高」上下文。如果沒有祖先，則與 `_self` 行為相同。
    - `_unfencedTop`：允許嵌入的[有圍欄框架](/zh-TW/docs/Web/API/Fenced_frame_API)導航到最頂層框架（即超出有圍欄框架根的遍歷，與其他保留目標不同）。請注意，如果在有圍欄框架上下文之外使用此選項，則導航仍將成功，但它不會像保留關鍵字那樣運作。

    > [!NOTE]
    > 將 `target="_blank"` 設置在 `<a>` 元素上，隱含提供了與設置 [`rel="noopener"`](/zh-TW/docs/Web/HTML/Attributes/rel/noopener) 相同的 `rel` 行為，它不設置 `window.opener`。

- `type`
  - : 提示連結 URL 的格式，使用 {{Glossary("MIME type", "MIME 類型")}}。沒有內建功能。

### 已棄用的屬性

- `charset` {{Deprecated_Inline}}

  - : 指示連結 URL 的 {{Glossary("character encoding")}}。

    > [!NOTE]
    > 這個屬性已棄用，**不應該被作者使用**。請在連結的 URL 上使用 HTTP {{HTTPHeader("Content-Type")}} 標頭。

- `coords` {{Deprecated_Inline}}
  - : 與 [`shape` 屬性](#shape)一起使用。逗號分隔的座標列表。
- `name` {{Deprecated_Inline}}

  - : 用於在頁面中定義可能的目標位置。在 HTML 4.01 中，`id` 和 `name` 都可以在 `<a>` 上使用，只要它們具有相同的值。

    > [!NOTE]
    > 請改用全域屬性 [`id`](/zh-TW/docs/Web/HTML/Global_attributes#id)。

- `rev` {{Deprecated_Inline}}
  - : 指定反向連結；與[形狀屬性](#rel)相反。由於非常混亂而被棄用。
- `shape` {{Deprecated_Inline}}

  - : 圖像地圖中超連結區域的形狀。

    > [!NOTE]
    > 請改用 {{HTMLElement("area")}} 元素代替圖像地圖。

## 範例

### 鏈接到絕對 URL

#### HTML

```html
<a href="https://www.mozilla.com">Mozilla</a>
```

#### 結果

{{EmbedLiveSample('鏈接到絕對 URL')}}

### 鏈接到相對 URL

#### HTML

```html
<a href="//example.com">Scheme-relative URL</a>
<a href="/zh-TW/docs/Web/HTML">Origin-relative URL</a>
<a href="./p">Directory-relative URL</a>
```

```css hidden
a {
  display: block;
  margin-bottom: 0.5em;
}
```

#### 結果

{{EmbedLiveSample('鏈接到相對 URL')}}

### 鏈接到同一頁面上的元素

```html
<!-- <a> element links to the section below -->
<p><a href="#Section_further_down">Jump to the heading below</a></p>

<!-- Heading to link to -->
<h2 id="Section_further_down">Section further down</h2>
```

#### 結果

{{EmbedLiveSample('鏈接到同一頁面上的元素')}}

> [!NOTE]
> 你可以使用 `href="#top"` 或空片段（`href="#"`）來鏈接到當前頁面的頂部，[如 HTML 規範中所定義](https://html.spec.whatwg.org/multipage/browsing-the-web.html#scroll-to-the-fragment-identifier)。

### 鏈接到電子郵件地址

要創建鏈接，讓用戶可以使用他們的電子郵件程序打開新消息，請使用 `mailto:` 方案：

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

#### 結果

{{EmbedLiveSample('鏈接到電子郵件地址')}}

有關 `mailto:` URL 的詳細信息，例如包括主題或正文，請參見[電子郵件鏈接](/zh-TW/docs/Learn_web_development/Core/Structuring_content/Creating_links#e-mail_連結)或 {{RFC(6068)}}。

### 鏈接到電話號碼

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(800)555-0123">(800) 555-0123</a>
```

#### 結果

{{EmbedLiveSample('鏈接到電話號碼')}}

`tel:` 鏈接的行為因設備能力而異：

- 手機設備會自動撥打號碼。
- 大多數操作系統都有可以撥打電話的程序，如 Skype 或 FaceTime。
- 網站可以使用 {{domxref("Navigator/registerProtocolHandler", "registerProtocolHandler")}} 來打電話，例如 `web.skype.com`。
- 其他行為包括將號碼保存到聯繫人中，或將號碼發送到另一個設備。

有關 `tel:` URL 方案的語法、其他功能和詳細信息，請參見 {{RFC(3966)}}。

### 使用 download 屬性將 \<canvas> 另存為 PNG

要將 {{HTMLElement("canvas")}} 元素的內容保存為圖像，你可以創建一個鏈接，其中 `href` 是使用 JavaScript 創建的 `data:` URL 的畫布數據，而 `download` 屬性提供下載的 PNG 文件的文件名：

#### 具有處存鏈接的範例繪畫應用程式

##### HTML

```html
<p>
  Paint by holding down the mouse button and moving it.
  <a href="" download="my_painting.png">Download my painting</a>
</p>

<canvas width="300" height="300"></canvas>
```

##### CSS

```css
html {
  font-family: sans-serif;
}
canvas {
  background: #fff;
  border: 1px dashed;
}
a {
  display: inline-block;
  background: #69c;
  color: #fff;
  padding: 5px 10px;
}
```

##### JavaScript

```js
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
c.fillStyle = "hotpink";
let isDrawing;

function draw(x, y) {
  if (isDrawing) {
    c.beginPath();
    c.arc(x, y, 10, 0, Math.PI * 2);
    c.closePath();
    c.fill();
  }
}

canvas.addEventListener("mousemove", (event) =>
  draw(event.offsetX, event.offsetY),
);
canvas.addEventListener("mousedown", () => (isDrawing = true));
canvas.addEventListener("mouseup", () => (isDrawing = false));

document
  .querySelector("a")
  .addEventListener(
    "click",
    (event) => (event.target.href = canvas.toDataURL()),
  );
```

##### 結果

{{EmbedLiveSample('具有處存鏈接的範例繪畫應用程式', '100%', '400')}}

## 安全性和隱私

`<a>` 元素可能對用戶的安全性和隱私造成影響。有關信息，請參見 [Referer 標頭：隱私和安全問題](/zh-TW/docs/Web/Security/Referer_header:_privacy_and_security_concerns)。

在不使用 [`rel="noreferrer"`](/zh-TW/docs/Web/HTML/Attributes/rel/noreferrer) 和 [`rel="noopener"`](/zh-TW/docs/Web/HTML/Attributes/rel/noopener) 的情況下使用 `target="_blank"` 會使網站容易受到 {{domxref("window.opener")}} API 攻擊，但請注意，在新版瀏覽器中，設置 `target="_blank"` 隱含地提供了與設置 `rel="noopener"` 相同的保護機制。詳細信息請參見[瀏覽器相容性](#瀏覽器相容性)。

## 無障礙議題

### 強鏈接文字

**鏈接內容應指示鏈接的目的地**，即使是在上下文之外。

#### 無障礙性差的弱鏈接文字

一個常見的錯誤是只將「點擊此處」或「這裡」之類的詞作為鏈接：

```html example-bad
<p>Learn more about our products <a href="/products">here</a>.</p>
```

##### 結果

{{EmbedLiveSample('無障礙性差的弱鏈接文字')}}

#### 強鏈接文字

幸運的是，這是一個容易解決的問題，而且實際上比無法訪問的版本還要短！

```html example-good
<p>Learn more <a href="/products">about our products</a>.</p>
```

##### 結果

{{EmbedLiveSample('強鏈接文字')}}

輔助軟件有捷徑可以列出頁面上的所有鏈接。然而，強鏈接文字有益於所有用戶——「列出所有鏈接」的快捷方式模擬了視覺用戶快速掃描頁面的方式。

### 點擊事件

常常將錨點元素誤用為假按鈕，將它們的 `href` 設置為 `#` 或 `javascript:void(0)` 以防止頁面刷新，然後監聽它們的 `click` 事件。

這些虛假的 `href` 值在複製/拖動鏈接、在新標籤/窗口中打開鏈接、書籤或當 JavaScript 加載、錯誤或禁用時會引起意外行為。它們也向輔助技術（如螢幕閱讀器）傳遞了不正確的語義。

請改用 {{HTMLElement("button")}}。一般來說，**你應該僅將超鏈接用於導航到實際 URL**。

### 外部鏈接和鏈接到非 HTML 資源

通過 `target="_blank"` 在新標籤/窗口中打開的鏈接，或者指向下載文件的鏈接應該指示當鏈接被點擊時會發生什麼。

視力受損的人、使用螢幕閱讀技術進行導航的人或存在認知問題的人，在新標籤、窗口或應用程序意外打開時可能會感到困惑。較舊的螢幕閱讀軟件甚至可能不會宣告這種行為。

#### 在新標籤/窗口中打開的鏈接

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

##### 結果

{{EmbedLiveSample('在新標籤/窗口中打開的鏈接')}}

#### 鏈接到非 HTML 資源

```html
<a href="2017-annual-report.ppt">2017 Annual Report (PowerPoint)</a>
```

如果使用圖標來表示鏈接行為，請確保它具有 [_alt 文本_](/zh-TW/docs/Web/HTML/Element/img#alt)：

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia
  <img alt="(opens in new tab)" src="newtab.svg" />
</a>

<a href="2017-annual-report.ppt">
  2017 Annual Report
  <img alt="(PowerPoint file)" src="ppt-icon.svg" />
</a>
```

##### 結果

{{EmbedLiveSample('鏈接到非 HTML 資源')}}

- [WebAIM: 鏈接和超文本——超文本鏈接](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / 了解 WCAG，指導方針 3.2](/zh-TW/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: 僅在必要時從鏈接中打開新窗口和新標籤](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: 在打開新窗口時給予用戶高級警告](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### 跳轉鏈接

**跳轉鏈接**是一個盡可能放在 {{HTMLElement("body")}} 內容的最前面的鏈接，指向頁面主要內容的開頭。通常，CSS 將跳轉鏈接隱藏在螢幕之外，直到被聚焦為止。

```html
<body>
  <a href="#content" class="skip-link">Skip to main content</a>

  <header>…</header>

  <!-- The skip link jumps to here -->
  <main id="content"></main>
</body>
```

```css
.skip-link {
  position: absolute;
  top: -3em;
  background: #fff;
}
.skip-link:focus {
  top: 0;
}
```

#### 結果

{{EmbedLiveSample('跳轉鏈接')}}

跳轉鏈接讓使用鍵盤的用戶可以跳過在多個頁面中重複出現的內容，例如頭部導航。

對於使用輔助技術，如切換控制、語音命令或口杖/頭桿進行導航的人來說，跳轉鏈接尤其有用，因為移動過程中重複鏈接的行為可能很費勁。

- [WebAIM：「跳轉導航」鏈接](https://webaim.org/techniques/skipnav/)
- [如何使用跳過導航鏈接](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN / 了解 WCAG，指導方針 2.4 說明](/zh-TW/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [理解成功標準 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### 尺寸與相近性

#### 尺寸

互動元素，例如連結，應該提供足夠大的區域，以便輕鬆地啟動它們。這有助於各種人，包括那些有運動控制問題的人以及使用不精確輸入（例如觸摸螢幕）的人。建議的最小尺寸為 44×44 [CSS 像素](https://www.w3.org/TR/WCAG21/#dfn-css-pixels)。

在散文內容中僅包含文本的鏈接不受此要求的限制，但確保有足夠的文本被超鏈接以便輕鬆啟動仍然是一個好主意。

- [理解成功標準 2.5.5：目標尺寸](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [目標尺寸和 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [快速測試：大觸摸目標](https://www.a11yproject.com/posts/large-touch-targets/)

#### 相近性

放置在視覺上相鄰的互動元素，例如連結，應該有空間將它們分開。間距有助於運動控制問題的人，否則他們可能會意外啟動錯誤的互動內容。

間距可以使用 CSS 屬性如 {{CSSxRef("margin")}} 創建。

- [手抖和大按鈕問題](https://axesslab.com/hand-tremors/)

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
        >、 <a
          href="/zh-TW/docs/Web/HTML/Content_categories#互動型內容"
          >互動型內容</a
        >、捫及內容。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a
          href="/zh-TW/docs/Web/HTML/Content_categories#透明內容模型"
          >透明內容模型</a
        >，除了沒有子孫可以是<a
          href="/zh-TW/docs/Web/HTML/Content_categories#互動型內容"
          >互動型內容</a
        >或一個 <a href="/zh-TW/docs/Web/HTML/Element/a"
          >a</a
        > 元素，並且沒有子孫可以具有指定的
        <a
          href="/zh-TW/docs/Web/HTML/Global_attributes/tabindex"
          >tabindex</a
        > 屬性。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Content_categories#流內容"
          >流內容</a
        >的元素，但不包括其他 <code>&#x3C;a></code> 元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        當存在 <code>href</code> 屬性時為 <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a>，否則為
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/generic_role"><code>generic</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>
        <p>當存在 <code>href</code> 屬性時：</p>
        <ul>
          <li><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a></li>
          <li><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/checkbox_role"><code>checkbox</code></a></li>
          <li><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a></li>
          <li><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a></li>
          <li><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a></li>
          <li><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a></li>
          <li><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a></li>
          <li><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/switch_role"><code>switch</code></a></li>
          <li><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a></li>
          <li><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/treeitem_role"><code>treeitem</code></a></li>
        </ul>
        <p>當不存在 <code>href</code> 屬性時：</p>
        <ul>
          <li>任何</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{DOMxRef("HTMLAnchorElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTMLElement("link")}} 類似於 `<a>`，但用於對用戶不可見的元數據超鏈接。
- {{CSSxRef(":link")}} 是一個 CSS 虛擬類，將匹配 `<a>` 元素，其中 `href` 屬性中的 URL 尚未被用戶訪問過。
- {{CSSxRef(":visited")}} 是一個 CSS 虛擬類，將匹配 `<a>` 元素，其中 `href` 屬性中的 URL 曾經被用戶訪問過。
- {{CSSxRef(":any-link")}} 是一個 CSS 虛擬類，將匹配具有 `href` 屬性的 `<a>` 元素。
- [文字片段](/zh-TW/docs/Web/URI/Fragment/Text_fragments)是添加到 URL 中的用戶代理指令，允許內容作者鏈接到頁面上的特定文本，而不需要 ID。
