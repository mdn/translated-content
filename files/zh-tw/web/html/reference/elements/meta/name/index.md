---
title: <meta> name 屬性
slug: Web/HTML/Reference/Elements/meta/name
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{htmlelement("meta")}} 元素的 **`name`** 屬性以鍵值對的形式提供後設資料。當 `<meta>` 元素具有 `name` 屬性時，[`content`](/zh-TW/docs/Web/HTML/Reference/Elements/meta#content) 屬性定義了其對應的值。這些後設資料是*文件層級的後設資料*，適用於整個頁面。

例如，以下的 `<meta>` 標籤為文件提供了一個 `description` 作為後設資料：

```html
<meta
  name="description"
  content="HTML 參考文件描述了 HTML 的所有元素和屬性，包括適用於所有元素的全域屬性。" />
```

## 值

### HTML 規範中定義的 meta 名稱

HTML 規範定義了以下一組標準後設資料名稱：

- `application-name`
  - : 瀏覽器可以使用它來識別在網頁中執行的應用程式。這與 {{HTMLElement("title")}} 元素不同，後者可能包含應用程式（或網站）名稱，但 `<title>` 可能會加入如文件名稱或狀態等上下文資訊。個別頁面不應定義自己獨特的 `application-name`。若要提供翻譯，請為每種語言使用帶有 `lang` 屬性的多個 `<meta>` 標籤：

    ```html
    <meta name="application-name" content="Weather Wizard" lang="en" />
    <meta name="application-name" content="Mago del Clima" lang="es" />
    ```

- `author`
  - : 文件作者的姓名。
- [`color-scheme`](/zh-TW/docs/Web/HTML/Reference/Elements/meta/name/color-scheme)
  - : 指定文件相容的一或多個色彩配置。瀏覽器會將此訊息與使用者的瀏覽器或裝置設定結合使用，以決定從背景、前景到表單控制項和捲軸等所有內容要使用的顏色。`<meta name="color-scheme">` 的主要用途是表示對淺色和深色模式的相容性及偏好順序。
- `description`
  - : 頁面內容的簡短而準確的摘要，通常稱為「後設描述」。像 Google 這樣的搜尋引擎會使用這些後設資料來調整[網頁在搜尋結果中的外觀](https://developers.google.com/search/docs/appearance/snippet#meta-descriptions)。
- `generator`
  - : 產生該頁面的軟體識別碼。
- `keywords`
  - : 與頁面內容相關的單字，以逗號分隔。
- [`referrer`](/zh-TW/docs/Web/HTML/Reference/Elements/meta/name/referrer)
  - : 控制從文件發送的請求的 HTTP {{httpheader("Referer")}} 標頭。
- [`theme-color`](/zh-TW/docs/Web/HTML/Reference/Elements/meta/name/theme-color)
  - : 指示使用者代理程式應用於自訂頁面顯示或周圍使用者介面的建議顏色。[`content`](/zh-TW/docs/Web/HTML/Reference/Attributes/content) 屬性包含一個有效的 CSS {{cssxref("&lt;color&gt;")}}。可以包含帶有有效媒體查詢列表的 [`media`](/zh-TW/docs/Web/HTML/Reference/Elements/meta#media) 屬性，以設定主題顏色後設資料所適用的媒體。

### 其他規範中定義的 meta 名稱

CSS 裝置適應性規範定義了以下後設資料名稱：

- [`viewport`](/zh-TW/docs/Web/HTML/Reference/Elements/meta/name/viewport)
  - : 提供關於{{glossary("viewport", "視區")}}初始大小的提示。

### WHATWG MetaExtensions 維基中定義的 meta 名稱

[WHATWG Wiki MetaExtensions 頁面](https://wiki.whatwg.org/wiki/MetaExtensions)包含大量非標準的後設資料名稱。其中包含的一些名稱在實務中相當常用，特別是以下幾個：

- `creator`
  - : 文件建立者的名稱，例如組織或機構。如果有多個建立者，應使用多個 {{HTMLElement("meta")}} 元素。
- `googlebot`
  - : `robots` 的同義詞，僅由 Googlebot（Google 的索引爬蟲）遵循。
- `publisher`
  - : 文件發布者的名稱。
- [`robots`](/zh-TW/docs/Web/HTML/Reference/Elements/meta/name/robots)
  - : 一個以逗號分隔的值列表，定義了合作的爬蟲（或稱「機器人」）在處理該頁面時應採用的爬取行為。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Viewport `<meta>` 標籤](/zh-TW/docs/Web/HTML/Guides/Viewport_meta_element)
- [後設資料：`<meta>` 元素](/zh-TW/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_meta_元素)
