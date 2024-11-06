---
title: "CSSStyleSheet: insertRule() メソッド"
slug: Web/API/CSSStyleSheet/insertRule
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSSOM")}}

**CSSStyleSheet.insertRule()** メソッドは、新しい [CSS ルール](/ja/docs/Web/API/CSSRule)を[現在のスタイルシート](/ja/docs/Web/API/CSSStyleSheet)に挿入します。

> **メモ:** `insertRule()` は {{domxref("CSSStyleSheet")}} 専用のメソッドですが、実際にはルールを `{{domxref("CSSStyleSheet", "", "", "1")}}.cssRules` に、内部的には {{domxref("CSSRuleList")}} に挿入します。

## 構文

```js-nolint
insertRule(rule)
insertRule(rule, index)
```

### 引数

- `rule`

  - : 挿入されるルールが入った文字列です。どのようなルールを挿入するかは、種類によります。

    - **[ルールセット](/ja/docs/Web/CSS/Syntax#css_の文)** の場合、[セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors)とスタイル定義です。
    - **[アットルール](/ja/docs/Web/CSS/At-rule)** の場合、アットマーク付き識別子とルールの内容です。

- `index` {{optional_inline}}
  - : `stylesheet.cssRules.length` 以下の正の数で、 `{{domxref("CSSStyleSheet", "", "", "1")}}.cssRules` の中で新しく挿入されるルールの位置を示します。既定値は `0` です。（古い実装では、これは必須でした。詳しくは[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。）

### 返値

スタイルシートのルールリスト内の、新たに挿入されたルールの位置です。

### 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : `index` > `{{domxref("CSSRuleList", "", "", "1")}}.length` の場合に発生します。
- `HierarchyRequestError` {{domxref("DOMException")}}
  - : CSS の制約上、`rule` が `index` `0` に挿入できない場合に発生します。
- `SyntaxError` {{domxref("DOMException")}}
  - : `rule` 引数に 2 つ以上のルールが与えられた場合に発生します。
- `HierarchyRequestError` {{domxref("DOMException")}}
  - : スタイルルールの後に {{cssxref("@import")}} アットルールを挿入しようとした場合に発生します。
- `InvalidStateError` {{domxref("DOMException")}}
  - : `rule` が {{cssxref("@namespace")}} であり、ルールリストに `@import` アットルールや `@namespace` アットルール以外のものがあった場合に発生します。

## 例

### 新しいルールの挿入

このスニペットは、新しいルールをスタイルシートの先頭に追加します。

```js
myStyle.insertRule("#blanc { color: white }", 0);
```

### スタイルシートルールを追加する関数

```js
/**
 * Add a stylesheet rule to the document (it may be better practice
 * to dynamically change classes, so style information can be kept in
 * genuine stylesheets and avoid adding extra elements to the DOM).
 * Note that an array is needed for declarations and rules since ECMAScript does
 * not guarantee a predictable object iteration order, and since CSS is
 * order-dependent.
 * @param {Array} rules Accepts an array of JSON-encoded declarations
 * @example
addStylesheetRules([
  ['h2', // Also accepts a second argument as an array of arrays instead
    ['color', 'red'],
    ['background-color', 'green', true] // 'true' for !important rules
  ],
  ['.myClass',
    ['background-color', 'yellow']
  ]
]);
*/
function addStylesheetRules(rules) {
  const styleEl = document.createElement("style");

  // Append <style> element to <head>
  document.head.appendChild(styleEl);

  // Grab style element's sheet
  const styleSheet = styleEl.sheet;

  for (let i = 0; i < rules.length; i++) {
    let j = 1,
      rule = rules[i],
      selector = rule[0],
      propStr = "";
    // If the second argument of a rule is an array of arrays, correct our variables.
    if (Array.isArray(rule[1][0])) {
      rule = rule[1];
      j = 0;
    }

    for (let pl = rule.length; j < pl; j++) {
      const prop = rule[j];
      propStr += `${prop[0]}: ${prop[1]}${prop[2] ? " !important" : ""};\n`;
    }

    // Insert CSS Rule
    styleSheet.insertRule(
      `${selector}{${propStr}}`,
      styleSheet.cssRules.length,
    );
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CSSStyleSheet.deleteRule")}}
- [Constructable Stylesheets](https://web.dev/constructable-stylesheets/) (web.dev)
