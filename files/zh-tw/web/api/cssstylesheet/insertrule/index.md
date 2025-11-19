---
title: CSSStyleSheet：insertRule() 方法
slug: Web/API/CSSStyleSheet/insertRule
l10n:
  sourceCommit: d64189632da72d059dcc110f4d0b0684ef45ba16
---

{{APIRef("CSSOM")}}

**`CSSStyleSheet.insertRule()`** 方法會將新的 [CSS 規則](/zh-TW/docs/Web/API/CSSRule)插入到[目前的樣式表](/zh-TW/docs/Web/API/CSSStyleSheet)中。

> [!NOTE]
> 雖然 `insertRule()` 是 {{domxref("CSSStyleSheet")}} 專屬的方法，但實際上它是將規則插入至 `{{domxref("CSSStyleSheet", "", "", "1")}}.cssRules` 中——其內部的 {{domxref("CSSRuleList")}}。

## 語法

```js-nolint
insertRule(rule)
insertRule(rule, index)
```

### 參數

- `rule`
  - : 包含要插入規則的字串。插入規則的內容需視其類型而定：
    - **針對[規則集](/zh-TW/docs/Web/CSS/Guides/Syntax/Introduction#css_語句)**，需包含[選擇器](/zh-TW/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)及樣式宣告。
    - **針對 [at-規則](/zh-TW/docs/Web/CSS/Guides/Syntax/At-rules)**，需包含 at-識別符與規則內容。

- `index` {{optional_inline}}
  - : 一個小於等於 `stylesheet.cssRules.length` 的正整數，表示新插入規則在 `{{domxref("CSSStyleSheet", "", "", "1")}}.cssRules` 中的位置。預設值為 `0`。（在舊版實作中此參數為必要。參見[瀏覽器相容性](#瀏覽器相容性)。）

### 回傳值

新插入規則在樣式表規則清單中的索引值。

### 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : 若 `index` 大於 `{{domxref("CSSRuleList", "", "", "1")}}.length`，則會拋出此錯誤。
- `HierarchyRequestError` {{domxref("DOMException")}}
  - : 若因某些 CSS 限制而無法在索引 `0` 插入 `rule`，則會拋出此錯誤。
- `SyntaxError` {{domxref("DOMException")}}
  - : 若 `rule` 參數中包含超過一個規則，則會拋出此錯誤。
- `HierarchyRequestError` {{domxref("DOMException")}}
  - : 若嘗試在樣式規則之後插入 {{cssxref("@import")}} at-規則，則會拋出此錯誤。
- `InvalidStateError` {{domxref("DOMException")}}
  - : 若 `rule` 為 {{cssxref("@namespace")}}，且規則清單中已有不只 `@import` 或 `@namespace` 的 at-規則，則會拋出此錯誤。

## 範例

### 插入新規則

以下程式碼片段會將一個新規則插入樣式表的最上方。

```js
myStyle.insertRule("#blanc { color: white }", 0);
```

### 新增樣式表規則的函式

```js
/**
 * 將樣式表規則加入文件中（建議最佳做法是動態變更 class，
 * 如此一來樣式資訊可以保留在正規樣式表中，避免將額外元素加入 DOM）。
 * 注意由於 ECMAScript 不保證物件的屬性順序可預期，
 * 且 CSS 對順序有依賴，因此此處使用陣列來表示宣告與規則。
 * @param {Array} rules 接受一個以 JSON 編碼的宣告陣列
 * @example
addStylesheetRules([
  ['h2', // 第二個參數也可以是由多個陣列組成的陣列
    ['color', 'red'],
    ['background-color', 'green', true] // 第三個參數設為 true 表示使用 !important
  ],
  ['.myClass',
    ['background-color', 'yellow']
  ]
]);
*/
function addStylesheetRules(rules) {
  const styleEl = document.createElement("style");

  // 將 <style> 元素加到 <head>
  document.head.appendChild(styleEl);

  // 取得樣式表
  const styleSheet = styleEl.sheet;

  for (let rule of rules) {
    let i = 1,
      selector = rule[0],
      propStr = "";
    // 若第二個參數是由多個陣列組成的陣列，則重新設定變數。
    if (Array.isArray(rule[1][0])) {
      rule = rule[1];
      i = 0;
    }

    for (; i < rule.length; i++) {
      const prop = rule[i];
      propStr += `${prop[0]}: ${prop[1]}${prop[2] ? " !important" : ""};\n`;
    }

    // 插入 CSS 規則
    styleSheet.insertRule(
      `${selector}{${propStr}}`,
      styleSheet.cssRules.length,
    );
  }
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("CSSStyleSheet.deleteRule")}}
- [可構造樣式表](https://web.dev/articles/constructable-stylesheets)（web.dev）
