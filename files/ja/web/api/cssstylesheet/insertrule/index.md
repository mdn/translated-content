---
title: "CSSStyleSheet: insertRule() メソッド"
short-title: insertRule()
slug: Web/API/CSSStyleSheet/insertRule
l10n:
  sourceCommit: 3ee2355c3c90cf92c3119b82f8ebfa5d16c91c53
---

{{APIRef("CSSOM")}}

**CSSStyleSheet.insertRule()** メソッドは、新しい [CSS ルール](/ja/docs/Web/API/CSSRule)を[現在のスタイルシート](/ja/docs/Web/API/CSSStyleSheet)に挿入します。

> [!NOTE]
> `insertRule()` は {{domxref("CSSStyleSheet")}} 専用のメソッドですが、実際にはルールを `{{domxref("CSSStyleSheet", "", "", "1")}}.cssRules` に、内部的には {{domxref("CSSRuleList")}} に挿入します。

## 構文

```js-nolint
insertRule(rule)
insertRule(rule, index)
```

### 引数

- `rule`
  - : 挿入されるルールが入った文字列です。どのようなルールを挿入するかは、種類によります。
    - **[ルールセット](/ja/docs/Web/CSS/Guides/Syntax/Introduction#css_の文)** の場合、[セレクター](/ja/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)とスタイル定義です。
    - **[アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)** の場合、アットマーク付き識別子とルールの内容です。

- `index` {{optional_inline}}
  - : `stylesheet.cssRules.length` 以下の正の数で、 `{{domxref("CSSStyleSheet", "", "", "1")}}.cssRules` の中で新しく挿入されるルールの位置を示します。デフォルトは `0` です。（古い実装では、これは必須でした。詳しくは[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。）

### 返値

スタイルシートのルールリスト内の、新たに挿入されたルールの位置です。

### 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : `index` > `{{domxref("CSSRuleList", "", "", "1")}}.length` の場合に発生します。
- `HierarchyRequestError` {{domxref("DOMException")}}
  - : CSS の制約上、`rule` を指定された位置に挿入できない場合に発生します。例えば、スタイルルールの後に {{cssxref("@import")}} アットルールを挿入しようとした場合です。
- `SyntaxError` {{domxref("DOMException")}}
  - : `rule` 引数に 2 つ以上のルールが与えられた場合に発生します。
- `InvalidStateError` {{domxref("DOMException")}}
  - : `rule` が {{cssxref("@namespace")}} であり、[ルールリスト](/ja/docs/Web/CSS/Reference/Values/rule-list)に `@import` および `@namespace` 以外のアットルールが含まれている場合に発生します。

## 例

### 新しいルールの挿入

このスニペットは、新しいルールをスタイルシートの先頭に追加します。

```js
myStyle.insertRule("#blanc { color: white }", 0);
```

### スタイルシートルールを追加する関数

```js
/**
 * 文書にスタイルシートルールを追加します（スタイル情報を実際のスタイルシートに保持し、
 * DOM に余分な要素を追加せずに済むよう、クラスを動的に変更する方がよい場合があります）。
 * ECMAScript はオブジェクトの反復順序が予測可能であることを保証せず、CSS は順序に依存するため、
 * 宣言とルールには配列が必要です。
 * @param {Array} rules JSON でエンコードされた宣言の配列を受け取ります
 * @example
addStylesheetRules([
  ['h2', // 2 番目の引数として配列の配列を指定することもできます
    ['color', 'red'],
    ['background-color', 'green', true] // !important ルールの場合は true
  ],
  ['.myClass',
    ['background-color', 'yellow']
  ]
]);
*/
function addStylesheetRules(rules) {
  const styleEl = document.createElement("style");

  // <style> 要素を <head> に追加
  document.head.appendChild(styleEl);

  // <style> 要素のスタイルシートを取得
  const styleSheet = styleEl.sheet;

  for (let rule of rules) {
    let i = 1,
      selector = rule[0],
      propStr = "";
    // ルールの 2 番目の引数が配列の配列であれば、変数を設定し直す
    if (Array.isArray(rule[1][0])) {
      rule = rule[1];
      i = 0;
    }

    for (; i < rule.length; i++) {
      const prop = rule[i];
      propStr += `${prop[0]}: ${prop[1]}${prop[2] ? " !important" : ""};\n`;
    }

    // CSS ルールを挿入
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
- [Constructable Stylesheets](https://web.dev/articles/constructable-stylesheets) (web.dev)
