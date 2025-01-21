---
title: 標準後設資料名稱
slug: Web/HTML/Element/meta/name
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

{{htmlelement("meta")}} 元素可用於以名稱—值對的形式提供文件的後設資料，其中 [`name`](/zh-TW/docs/Web/HTML/Element/meta#name) 屬性用於指定後設資料的名稱，[`content`](/zh-TW/docs/Web/HTML/Element/meta#content) 屬性則用於指定其值。

### HTML 規範中定義的標準後設資料名稱

HTML 規範定義了以下標準後設資料名稱：

- `application-name`：正在網頁中運行的應用程式名稱。

  > [!NOTE]
  >
  > - 瀏覽器可能使用此名稱來識別應用程式。它與 {{HTMLElement("title")}} 元素不同，後者通常包含應用程式名稱，但也可能包含文件名稱或狀態等訊息。
  > - 簡單的網頁不應該定義 `application-name`。

- `author`：文件作者的名稱。
- `description`：頁面內容的簡短且準確的摘要。搜尋引擎如 [Google](https://developers.google.com/search/docs/appearance/snippet#meta-descriptions) 可能使用此欄位來控制網頁在搜尋結果中的顯示。
- `generator`：生成此頁面的軟體標識。
- `keywords`：與頁面內容相關的關鍵詞，以逗號分隔。
- `referrer`：控制從文件發出的 HTTP {{httpheader("Referer")}} 標頭：

  <table class="standard-table">
    <caption>
      <code>&#x3C;meta name="referrer"></code> 中 <code>content</code> 屬性的值
    </caption>
    <tbody>
      <tr>
        <td><code>no-referrer</code></td>
        <td>不發送 HTTP {{httpheader("Referer")}} 標頭。</td>
      </tr>
      <tr>
        <td><code>origin</code></td>
        <td>發送文件的 {{glossary("origin")}}。</td>
      </tr>
      <tr>
        <td><code>no-referrer-when-downgrade</code></td>
        <td>
          當目標與當前頁面一樣安全時（HTTP(S)→HTTPS），發送完整 URL，但當目標不如當前頁面安全時（HTTPS→HTTP），則不發送 Referrer。這是預設行為。
        </td>
      </tr>
      <tr>
        <td><code>origin-when-cross-origin</code></td>
        <td>
          同源請求發送完整 URL（去除參數），跨域請求只發送來源。
        </td>
      </tr>
      <tr>
        <td><code>same-origin</code></td>
        <td>
          同源請求發送完整 URL（去除參數）。跨域請求則不發送 Referrer。
        </td>
      </tr>
      <tr>
        <td><code>strict-origin</code></td>
        <td>
          當目標與當前頁面一樣安全時發送來源（HTTP(S)→HTTPS），否則不發送 Referrer（HTTPS→HTTP）。
        </td>
      </tr>
      <tr>
        <td><code>strict-origin-when-cross-origin</code></td>
        <td>
          同源請求發送完整 URL（去除參數）。當目標與當前頁面一樣安全時發送來源（HTTP(S)→HTTPS），否則不發送 Referrer。
        </td>
      </tr>
      <tr>
        <td><code>unsafe-URL</code></td>
        <td>
          無論是同源還是跨域請求，均發送完整 URL（去除參數）。
        </td>
      </tr>
    </tbody>
  </table>

  > [!NOTE]
  >
  > - 動態插入 `<meta name="referrer">`（通過 {{domxref("Document.write", "document.write()")}} 或 {{domxref("Node.appendChild", "appendChild()")}}）會使 Referrer 行為不可預測。
  > - 當定義了多個衝突的策略時，將應用 `no-referrer` 策略。

- [`theme-color`](/zh-TW/docs/Web/HTML/Element/meta/name/theme-color)：指示用戶代理應使用的建議顏色來自訂頁面或周圍使用者界面的顯示。`content` 屬性包含有效的 CSS {{cssxref("&lt;color&gt;")}}。`media` 屬性可以包含有效的媒體查詢列表，以設定主題顏色適用的媒體。
- <a id="color-scheme" href="#color-scheme">`color-scheme`</a>：指定文件可相容的一種或多種顏色方案。

  瀏覽器將根據用戶的瀏覽器或設備設定，與此訊息結合決定從背景到前景、表單控件到滾動條的顏色。`<meta name="color-scheme">` 的主要用途是指示文件對淺色與深色模式的相容性及偏好順序。

  `color-scheme` 的 [`content`](/zh-TW/docs/Web/HTML/Element/meta#content) 屬性值可能是以下之一：

  - `normal`
    - : 文件未考慮顏色方案，應使用預設調色板進行渲染。
  - `light`、`dark`、`light dark`、`dark light`
    - : 文件支援的一個或多個顏色方案。多次指定相同顏色方案與僅指定一次效果相同。多個顏色方案表示文件更偏好第一個方案，但若用戶偏好第二個方案，也可以接受。
  - `only light`
    - : 文件*僅*支援淺色模式，使用淺色背景和深色前景色。根據規範，`only dark` _是無效的_，因為強制文件以深色模式呈現可能導致內容不可讀；所有主要瀏覽器在未進行其他配置時默認使用淺色模式。

  例如，指示文件偏好深色模式，但也可正常呈現於淺色模式：

  ```html
  <meta name="color-scheme" content="dark light" />
  ```

  此功能在文件層級運作，與 CSS {{cssxref("color-scheme")}} 屬性允許單個元素指定其首選和接受的顏色方案的方式類似。你的樣式可以使用 {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} CSS 媒體功能適應當前的顏色方案。

### 定義於其他規範中的標準後設資料名稱

CSS Device Adaptation 規範定義了以下的後設資料名稱：

- `viewport`：提供關於初始{{glossary("viewport", "視區")}}大小的提示。

  <table class="fullwidth-table">
    <caption>
      <code>&#x3C;meta name="viewport"></code>
      的 content 值
    </caption>
    <thead>
      <tr>
        <th scope="col">值</th>
        <th scope="col">可能的次級值</th>
        <th scope="col">描述</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>width</code></td>
        <td>正整數或文字 <code>device-width</code></td>
        <td>定義網站渲染的視區寬度（像素）。</td>
      </tr>
      <tr>
        <td><code>height</code></td>
        <td>正整數或文字 <code>device-height</code></td>
        <td>定義視區高度，瀏覽器不使用此屬性。</td>
      </tr>
      <tr>
        <td><code>initial-scale</code></td>
        <td><code>0.0</code> 至 <code>10.0</code> 間的正數</td>
        <td>定義設備寬度（縱向模式下的 <code>device-width</code> 或橫向模式下的 <code>device-height</code>）與視區大小之間的比例。</td>
      </tr>
      <tr>
        <td><code>maximum-scale</code></td>
        <td><code>0.0</code> 至 <code>10.0</code> 間的正數</td>
        <td>定義最大縮放比例。必須大於或等於 <code>minimum-scale</code>，否則行為未定。瀏覽器設定可能會忽略此規則，且 iOS10+ 預設忽略。</td>
      </tr>
      <tr>
        <td><code>minimum-scale</code></td>
        <td><code>0.0</code> 至 <code>10.0</code> 間的正數</td>
        <td>定義最小縮放比例。必須小於或等於 <code>maximum-scale</code>，否則行為未定。瀏覽器設定可能會忽略此規則，且 iOS10+ 預設忽略。</td>
      </tr>
      <tr>
        <td><code>user-scalable</code></td>
        <td><code>yes</code> 或 <code>no</code></td>
        <td>若設為 <code>no</code>，則使用者無法縮放網頁。預設值為 <code>yes</code>。瀏覽器設定可能會忽略此規則，且 iOS10+ 預設忽略。</td>
      </tr>
      <tr>
        <td><code>viewport-fit</code></td>
        <td><code>auto</code>、<code>contain</code> 或 <code>cover</code></td>
        <td>
          <p><code>auto</code> 值不影響初始佈局視區，整個網頁均可見。</p>
          <p><code>contain</code> 值表示視區會縮放至適配顯示器內的最大矩形。</p>
          <p><code>cover</code> 值表示視區會縮放以填滿設備顯示區域。強烈建議使用<a href="/zh-TW/docs/Web/CSS/env">安全區域內邊距變數</a>確保重要內容不會位於顯示範圍外。</p>
        </td>
      </tr>
    </tbody>
  </table>

  > [!WARNING]
  >
  > 將 `user-scalable` 設為 `no` 以禁用縮放功能，會使視障人士無法閱讀或理解頁面內容。
  >
  > - [MDN 理解 WCAG 指南 1.4 的解釋](/zh-TW/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
  > - [理解成功標準 1.4.4 | W3C 理解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

### 其他後設資料名稱

[WHATWG Wiki MetaExtensions 頁面](https://wiki.whatwg.org/wiki/MetaExtensions) 包含一大批尚未正式採納的非標準後設資料名稱。然而，其中一些名稱已廣泛使用，包括：

- `creator`：文件創建者的名稱，例如機構或組織。若有多個，應使用多個 {{HTMLElement("meta")}} 元素。
- `googlebot`：`robots` 的同義詞，但僅適用於 Googlebot（Google 的索引爬蟲）。
- `publisher`：文件發佈者的名稱。
- `robots`：用於控制合作爬蟲或「機器人」應如何處理頁面的行為，為以下值的逗號分隔列表：

  | 值             | 描述                                         | 使用者                                                                                                                                                                                                                                                   |
  | -------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `index`        | 允許機器人索引頁面（預設值）。               | 所有                                                                                                                                                                                                                                                     |
  | `noindex`      | 請求機器人不索引此頁面。                     | 所有                                                                                                                                                                                                                                                     |
  | `follow`       | 允許機器人追蹤頁面上的連結（預設值）。       | 所有                                                                                                                                                                                                                                                     |
  | `nofollow`     | 請求機器人不要追蹤頁面上的連結。             | 所有                                                                                                                                                                                                                                                     |
  | `all`          | 等同於 `index, follow`。                     | [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965067987211-415685194&rd=1)                                                                                                                            |
  | `none`         | 等同於 `noindex, nofollow`。                 | [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965074074862-574753619&rd=1)                                                                                                                            |
  | `noarchive`    | 請求搜尋引擎不要緩存頁面內容。               | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)、[Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html)、[Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240) |
  | `nosnippet`    | 阻止在搜尋引擎結果中顯示頁面的任何描述。     | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)、[Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                                                     |
  | `noimageindex` | 請求此頁面不要作為已索引圖像的參考頁面出現。 | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)                                                                                                                                                                    |
  | `nocache`      | `noarchive` 的同義詞。                       | [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                                                                                                                                            |

  > [!NOTE]
  >
  > - 僅有合作機器人會遵循這些規則。不要期望用它們來防止電子郵件收集工具。
  > - 機器人仍需訪問頁面以讀取這些規則。為防止頻寬消耗，請考慮是否使用 _{{Glossary("robots.txt")}}_ 文件更為合適。
  > - `<meta name="robots">` 元素與 `robots.txt` 文件具有不同目的：`robots.txt` 控制頁面爬取，並不影響由 `robots` 元素控制的索引或其他行為。一個無法爬取的頁面仍可能因其他文件引用而被索引。
  > - 如果希望移除頁面，`noindex` 可以奏效，但僅在機器人再次訪問頁面後生效。確保 `robots.txt` 文件不阻止後續訪問。
  > - 一些值如 `index` 和 `noindex`，或 `follow` 和 `nofollow` 是互斥的。在這些情況下，機器人的行為未定，可能會有所差異。
  > - 部分爬蟲機器人，如 Google、Yahoo 和 Bing，也支援 HTTP 標頭 {{HTTPHeader("X-Robots-Tag")}} 的相同值；這允許非 HTML 文件（如圖片）也能使用這些規則。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Viewport `<meta>` 標籤](/zh-TW/docs/Web/HTML/Viewport_meta_tag)
- [後設資料：`<meta>` 元素](/zh-TW/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_meta_元素)
