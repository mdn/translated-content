---
title: CustomElementRegistry：define() 方法
slug: Web/API/CustomElementRegistry/define
l10n:
  sourceCommit: 66b6d40a37daef8aa0013c44c310eeb2f0bcd7e1
---

{{APIRef("Web Components")}}

{{domxref("CustomElementRegistry")}} 介面的 **`define()`** 方法用於將自訂元素的定義新增到自訂元素註冊表中，將其名稱對應到用於建立該元素的建構子。

## 語法

```js-nolint
define(name, constructor)
define(name, constructor, options)
```

### 參數

- `name`
  - : 新自訂元素的名稱。必須是[有效的自訂元素名稱](#有效的自訂元素名稱)。
- `constructor`
  - : 新自訂元素的建構子。
- `options` {{optional_inline}}
  - : 控制元素定義方式的物件。目前支援一個選項：
    - `extends`
      - : 指定要擴展的內建元素名稱的字串。用於建立自訂的內建元素。

### 回傳值

無（{{jsxref("undefined")}}）。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : 在以下情況下拋出：
    - {{domxref("CustomElementRegistry")}} 已包含具有相同名稱或相同建構子的條目（或已經定義）。
    - <code>extends</code> 選項已被指定且它是一個[有效的自訂元素名稱](#有效的自訂元素名稱)。
    - <code>extends</code> 選項已被指定但嘗試擴展的元素是未知元素。
- `SyntaxError` {{domxref("DOMException")}}
  - : 如果提供的名稱不是[有效的自訂元素名稱](#有效的自訂元素名稱)，則會拋出錯誤。
- {{jsxref("TypeError")}}
  - : 如果引用的建構子不是建構子，則會拋出錯誤。

## 描述

`define()` 方法將自訂元素的定義新增到自訂元素註冊表中，將其名稱對應到用於建立該元素的建構子。

你可以建立兩種類型的自訂元素：

- *獨立自訂元素*是獨立的元素，不繼承內建的 HTML 元素。
- *自訂的內建元素*是繼承並擴展內建 HTML 元素的元素。

若要定義獨立自訂元素，應省略 `options` 參數。

若要定義自訂的內建元素，必須傳遞 `options` 參數，並將其 `extends` 屬性設定為你要擴展的內建元素的名稱，且這必須對應於你的自訂元素類別定義所繼承的介面。例如，要自訂 {{htmlelement("p")}} 元素，必須傳遞 `{extends: "p"}` 給 `define()`，且你的元素類別定義必須繼承自 {{domxref("HTMLParagraphElement")}}。

### 有效的自訂元素名稱

自訂元素名稱必須：

- 以 ASCII 小寫字母（a-z）開頭
- 包含連字號
- 不包含任何 ASCII 大寫字母
- 不包含某些其他字元，詳見[有效的自訂元素名稱](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)的 Web Components 規範部分
- 不得是以下任何名稱：
  - 「annotation-xml」
  - 「color-profile
  - 「font-face」
  - 「font-face-src」
  - 「font-face-uri」
  - 「font-face-format」
  - 「font-face-name」
  - 「missing-glyph」

## 範例

### 定義獨立自訂元素

以下類別實作了一個最小的獨立自訂元素：

```js
class MyAutonomousElement extends HTMLElement {
  constructor() {
    super();
  }
}
```

此元素不執行任何操作：一個真正的獨立元素會在其建構子和標準提供的生命週期回呼中實作其功能。請參見我們的自訂元素使用指南中的[實作自訂元素](/zh-TW/docs/Web/API/Web_components/Using_custom_elements)。

然而，上述類別定義滿足 `define()` 方法的要求，因此我們可以使用以下程式碼定義它：

```js
customElements.define("my-autonomous-element", MyAutonomousElement);
```

然後我們可以在 HTML 頁面中這樣使用它：

```html
<my-autonomous-element>元素內容</my-autonomous-element>
```

### 定義自訂的內建元素

以下類別實作了一個自訂的內建元素：

```js
class MyCustomizedBuiltInElement extends HTMLParagraphElement {
  constructor() {
    super();
  }
}
```

此元素擴展了內建的 {{htmlelement("p")}} 元素。

在此最小範例中，該元素未實作任何自訂功能，因此它的行為將與普通的 `<p>` 元素相同。然而，它確實滿足 `define()` 的要求，因此我們可以這樣定義它：

```js
customElements.define(
  "my-customized-built-in-element",
  MyCustomizedBuiltInElement,
  {
    extends: "p",
  },
);
```

然後我們可以在 HTML 頁面中這樣使用它：

```html
<p is="my-customized-built-in-element"></p>
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用自訂元素](/zh-TW/docs/Web/API/Web_components/Using_custom_elements)
