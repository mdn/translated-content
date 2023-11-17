---
title: <script>
slug: Web/HTML/Element/script
---

{{HTMLSidebar}}

**HTML `<script>` 元素**能嵌入或引用要執行的程式碼。最常見的用途是嵌入或引用 JavaScript 程式碼。`<script>` 元素也能執行其他語言，例如 [WebGL](/zh-TW/docs/Web/API/WebGL_API) 的 GLSL shader 程式語言。

| [內容類型](/zh-TW/docs/Web/HTML/Content_categories) | [元資料內容](/zh-TW/docs/Web/HTML/Content_categories#Metadata_content)、[流型內容](/zh-TW/docs/Web/HTML/Content_categories#Flow_content)、[Phrasing content](/zh-TW/docs/Web/HTML/Content_categories#Phrasing_content). |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 允許的內容                                          | 動態腳本如 `text/javascript`.                                                                                                                                                                                           |
| 標籤省略                                            | {{no_tag_omission}}                                                                                                                                                                                                     |
| 允許的父元素                                        | 任何可接受 [元資料內容](/zh-TW/docs/Web/HTML/Content_categories#Metadata_content)或 [phrasing content](/zh-TW/docs/Web/HTML/Content_categories#Phrasing_content) 的元素。                                               |
| 允許的 ARIA role                                    | None                                                                                                                                                                                                                    |
| DOM 介面                                            | {{domxref("HTMLScriptElement")}}                                                                                                                                                                                        |

## 屬性

此元素包含了[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

- `async`

  - : 這個布林屬性告訴瀏覽器說：如果可以，就以非同步的方法執行腳本。

    > **警告：** 如果沒有 `src` 屬性的話，就不能用這個屬性（例如行內腳本）：在這種情況下，它將失去作用。

- `async`

  - : 在 HTML 解析時，瀏覽器通常會假定最壞的情況，並同步地載入腳本（例如 `async=false`）。

    動態插入的腳本（例如 `document.createElement`）一般來說是非同步執行的。因此，如果設定同步的話（腳本按照被插入的順序執行），會被設為 `async=false`。

    請參見[相容性註解](#相容性註解)的瀏覽器支援備註。另請參見 [Async scripts for asm.js](/zh-TW/docs/Games/Techniques/Async_scripts)。

- `crossorigin`
  - : 針對沒有通過標準 [CORS](/zh-TW/docs/HTTP_access_control) 的一般 `script` 元素，會把最少的資訊傳給 {{domxref('GlobalEventHandlers.onerror', 'window.onerror')}}。若要允許另一個域名站點的靜態內容，列出錯誤訊息，請使用此屬性。請參見 [CORS settings attributes](/zh-TW/docs/Web/HTML/CORS_settings_attributes) 以以取得對其有效參數的，更具描述性的解釋。
- `defer`

  - : 設置此 Boolean attribute 是為了指示瀏覽器，腳本應在 document 解析後，但在觸發 [`DOMContentLoaded`](/zh-TW/docs/Web/API/Document/DOMContentLoaded_event) 之前被執行。具有 `defer` 屬性的腳本將阻止觸發 `DOMContentLoaded` 事件，直到腳本 load 完成並且 finished evaluating。

    > **警告：** 如果沒有 `src` 屬性的話，就不能用這個屬性（例如行內腳本）：在這種情況下，它將失去作用。The `defer` attribute has no effect on [module script](/zh-TW/docs/Web/JavaScript/Guide/Modules) — they defer by default.

- `fetchpriority`
  - : Scripts with the `defer` attribute will execute in the order in which they appear in the document.This attribute allows the elimination of **parser-blocking JavaScript** where the browser would have to load and evaluate scripts before continuing to parse. `async` has a similar effect in this case.
- `integrity`
  - : This attribute contains inline metadata that a user agent can use to verify that a fetched resource has been delivered free of unexpected manipulation. See [Subresource Integrity](/zh-TW/docs/Web/Security/Subresource_Integrity).
- `nomodule`
  - : 這個布林屬性，會要求支援 [ES2015 modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) 的瀏覽器，不執行裡面的程式。這能用來給不支援 JavaScript 模組的老舊瀏覽器，提供用於向下支援的服務。
- `nonce`
  - : A cryptographic nonce (number used once) to whitelist inline scripts in a [script-src Content-Security-Policy](/zh-TW/docs/Web/HTTP/Headers/Content-Security-Policy/script-src). The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource's policy is otherwise trivial.
- `src`

  - : 此屬性指定外部程式的 URI，可以用來取代直接在文件內中嵌入腳本。

    > **警告：** 如果 `script` 元素有指定 `src` 屬性的話，標籤內就不能有嵌入的腳本。

- `text`
  - : Like the `textContent` attribute, this attribute sets the text content of the element. Unlike the `textContent` attribute, however, this attribute is evaluated as executable code after the node is inserted into the DOM.
- `type`

  - : 此屬性指定程式碼應該表示的類型。此屬性的值會屬於以下類別之一：**省略或 JavaScript MIME 類型**：針對相容 HTML5 的瀏覽器來說，元素內會執行 JavaScript。HTML5 規範敦促作者省略此屬性，不需要寫冗長的 MIME 類型。在早期的瀏覽器中，這確定了嵌入或引入（透過 `src` 屬性）腳本的語言。JavaScript MIME 類型[有列在規範內](/zh-TW/docs/Web/HTTP/Basics_of_HTTP/MIME_types)。

    - **`module`**：針對相容 HTML5 的瀏覽器來說，這段程式碼會當成 JavaScript 模組（module）。腳本內容的處理不受 `charset` 與 `defer` 屬性影響。針對 `module` 的資訊，請參閱 [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)。在使用 `module` 關鍵字時，程式碼的行為會有所不同。
    - **其他值**：嵌入的內容會被當成一段不給瀏覽器執行的資料塊（data block）。開發者應當使用非 JavaScript 的有效 MIME 類型，以標明資料塊。`src` 屬性也將被忽略。

    > **備註：** 在 Firefox 你可以在 `<script>` 元素的 `type` 屬性，透過標明非標準參數 `version`，指定要使用的 JavaScript 版本：例如說 `type="application/javascript;version=1.8"`。這個功能在 Firefox 59 移除了（請參見 [Firefox bug 1428745](https://bugzil.la/1428745)）。

### 棄用屬性

- `language` {{Deprecated_inline}}
  - : 如同 `type` 屬性，此屬性指定正在使用的腳本語言。但與 `type` 屬性不同，此屬性的可用值從未標準化。應當使用 `type` 屬性。

## 註解

Scripts without `async` or `defer` attributes, as well as inline scripts, are fetched and executed immediately, before the browser continues to parse the page.

The script should be served with the `text/javascript` MIME type, but browsers are lenient and only block them if the script is served with an image type (`image/*`); a video type (`video/*`); an audio (`audio/*`) type; or `text/csv`. If the script is blocked, an [`error`](/zh-TW/docs/Web/API/Element/error_event) is sent to the element, if not a [`load`](/zh-TW/docs/Web/API/Window/load_event) event is sent.

## 示例

### 基本

以下示例展示如何在 HTML4 與 HTML5 使用 `<script>` 屬性。

```html
<!-- HTML4 與  (x)HTML -->
<script type="text/javascript" src="javascript.js"></script>

<!-- HTML5 -->
<script src="javascript.js"></script>
```

### 模組的向下支援方案

有針對 type 屬性支援 module（模組）的瀏覽器，會忽略 nomodule 屬性的程式碼。這能讓那些不支援模組的瀏覽器，提供替代的使用方法。

```js
<script type="module" src="main.mjs"></script>
<script nomodule src="fallback.js"></script>
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 相容性註解

In older browsers that don't support the `async` attribute, parser-inserted scripts block the parser; script-inserted scripts execute asynchronously in IE and WebKit, but synchronously in Opera and pre-4 Firefox. In Firefox 4, the `async` DOM property defaults to `true` for script-created scripts, so the default behaviour matches the behaviour of IE and WebKit.

To request script-inserted external scripts be executed in the insertion order in browsers where the `document.createElement("script").async` evaluates to `true` (such as Firefox 4), set `.async=false` on the scripts you want to maintain order.

> **警告：** Never call `document.write()` from an async script. In Firefox 3.6, calling `document.write()` has an unpredictable effect. In Firefox 4, calling `document.write()` from an async script has no effect (other than printing a warning to the error console).

## 參見

- {{domxref("document.currentScript")}}
- [Ryan Grove's \<script> and \<link> node event compatibility chart](https://pie.gd/test/script-link-events/)
