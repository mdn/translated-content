---
title: CSSStyleSheet.insertRule()
slug: Web/API/CSSStyleSheet/insertRule
---

**CSSStyleSheet.insertRule()** メソッドは、新しい [CSS 規則](/ja/docs/Web/API/CSSRule)を[現在のスタイルシート](/ja/docs/Web/API/CSSStyleSheet)に挿入しますが、いくつかの[制限](#Restrictions)があります。

> **メモ:** **insertRule()** は {{domxref("CSSStyleSheet")}} の排他的なメソッドですが、実際には規則を `{{domxref("CSSStyleSheet", "", "", "1")}}.cssRules`、内部的には {{domxref("CSSRuleList")}} に挿入します。

## 構文

```
stylesheet.insertRule(rule[, index])
```

### 引数

- rule

  - : 挿入される規則が入った {{domxref("DOMString")}} です。どのような規則を挿入するかは、種類に依存します。

    - **[規則セット](/ja/docs/Web/CSS/Syntax#CSS_statements)** の場合、[セレクター](/ja/docs/Web/Guide/CSS/Getting_Started/Selectors)とスタイル定義です。
    - **[アット規則](/ja/docs/Web/CSS/At-rule)** の場合、 @-識別子と規則の内容です。

- index {{optional_inline}}
  - : `stylesheet.cssRules.length` 以下の正の数で、 `{{domxref("CSSStyleSheet", "", "", "1")}}.cssRules` の中で新しく挿入される規則の位置を示します。既定値は `0` です。 (古い実装では、これは必須でした。詳しくは[ブラウザーの対応](#Browser_compatibility)を参照してください。)

### 返値

スタイルシートの規則リスト内の、新たに挿入された規則のインデックスです。

### 制限事項

CSS スタイルシート規則のリストには、規則がどのようにどこへ挿入されるかに影響する、いくつかの直感的な、またはそれほど直感的でない [制限](https://drafts.csswg.org/cssom/#insert-a-css-rule) があります。これらに違反すると、 {{domxref("DOMException")}} のようなエラーを引き起こす原因になるでしょう。

- _index_ 値が `{{domxref("CSSRuleList", "", "", "1")}}.length` を超える場合、 `IndexSizeError` で処理を中止します。
- CSS の制約により _rule_ が _index_ `0` に挿入できない場合、 `HierarchyRequestError` で処理を中止します。
- _rule_ 引数に 2 個以上の規則を与えた場合、 `SyntaxError` で処理を中止します。
- {{domxref("@import")}} アット規則をスタイル規則の後に挿入しようとした場合、 `HierarchyRequestError` で処理を中止します。
- _rule_ が {{domxref("@namespace")}} アット規則であり、リストに `@import` アット規則や `@namespace` アット規則が含まれている場合、 `InvalidStateError` で処理を中止します。

## 例

### 例 1

```js
// myStyle の先頭に新しい規則を挿入
myStyle.insertRule("#blanc { color: white }", 0);
```

### 例 2

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
function addStylesheetRules (rules) {
  var styleEl = document.createElement('style');

  // Append <style> element to <head>
  document.head.appendChild(styleEl);

  // Grab style element's sheet
  var styleSheet = styleEl.sheet;

  for (var i = 0; i < rules.length; i++) {
    var j = 1,
        rule = rules[i],
        selector = rule[0],
        propStr = '';
    // If the second argument of a rule is an array of arrays, correct our variables.
    if (Array.isArray(rule[1][0])) {
      rule = rule[1];
      j = 0;
    }

    for (var pl = rule.length; j < pl; j++) {
      var prop = rule[j];
      propStr += prop[0] + ': ' + prop[1] + (prop[2] ? ' !important' : '') + ';\n';
    }

    // Insert CSS Rule
    styleSheet.insertRule(selector + '{' + propStr + '}', styleSheet.cssRules.length);
  }
}
```

## 仕様書

| 仕様書                                                                                                                           | 状態                             | 備考                                                  |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------- |
| {{SpecName('CSSOM', '#dom-cssstylesheet-insertrule', 'CSSStyleSheet.insertRule')}}                     | {{Spec2('CSSOM')}}         | {{SpecName('DOM2 Style')}} からの変更なし。 |
| {{SpecName('DOM2 Style', 'css.html#CSS-CSSStyleSheet-insertRule', 'CSSStyleSheet.insertRule')}} | {{Spec2('DOM2 Style')}} | 初回定義                                              |

## ポリフィル

以下のポリフィルは、 Internet Explorer 5–8 において、 `insertRule` の引数の入力を標準に準拠させるものです。 `insertRule` を関数で補完し、引数を既定のネイティブの `insertRule` に送る前に、セレクターを規則から分離します。

```js
(function(Sheet_proto){
    var originalInsertRule = Sheet_proto.insertRule;
    if (originalInsertRule.length === 2){ // 2 mandatory arguments: (selector, rules)
        Sheet_proto.insertRule = function(selectorAndRule){
            // First, separate the selector from the rule
            a: for (var i=0, Len=selectorAndRule.length, isEscaped=0, newCharCode=0; i !== Len; ++i) {
                newCharCode = selectorAndRule.charCodeAt(i);
                if (!isEscaped && (newCharCode === 123)) { // 123 = "{".charCodeAt(0)
                    // Secondly, find the last closing bracket
                    var openBracketPos = i, closeBracketPos = -1;
                    for (; i !== Len; ++i) {
                        newCharCode = selectorAndRule.charCodeAt(i);
                        if (!isEscaped && (newCharCode === 125)) { // 125 = "}".charCodeAt(0)
                            closeBracketPos = i;
                        }
                        isEscaped ^= newCharCode===92?1:isEscaped; // 92 = "\\".charCodeAt(0)
                    }
                    if (closeBracketPos === -1) break a; // no closing bracket was found!
                    /*else*/ return originalInsertRule.call(
                        this, // the sheet to be changed
                        selectorAndRule.substring(0, openBracketPos), // the selector
                        selectorAndRule.substring(closeBracketPos), // the rule
                        arguments[3] // the insert index
                    );
                }
                // works by if the char code is a backslash, then isEscaped gets flipped (XOR-ed by
                // 1), and if it is not a backslash then isEscaped gets XORed by itself, zeroing it
                isEscaped ^= newCharCode===92?1:isEscaped; // 92 = "\\".charCodeAt(0)
            }
            // Else, there is no unescaped bracket
            return originalInsertRule.call(this, selectorAndRule, "", arguments[2]);
        };
    }
})(CSSStyleSheet.prototype);
```

## ブラウザーの対応

{{Compat("api.CSSStyleSheet.insertRule")}}

### 古いブラウザーの対応

#### Internet Explorer 8 以前

**addRule**(_selector_, _rule_ \[, _index_]); — 例: `addRule('pre', 'font: 14px verdana'); // 規則を末尾に追加`

_また、標準外の [`removeRule()`](http://www.quirksmode.org/dom/w3c_css.html#change) および [`.rules`](http://www.quirksmode.org/dom/w3c_css.html#access) が、それぞれ {{domxref("CSSStyleSheet.deleteRule","deleteRule()")}} および {{domxref("CSSStyleSheet",".cssRules")}} の代わりに使用されていることにも注意してください。_

## 関連情報

- {{domxref("CSSStyleSheet.deleteRule")}}
- [Cross-Browser CSS-rules ordering (CSS1)](http://www-archive.mozilla.org/docs/web-developer/css1technote/css1tojs.html#priority)
- [Quirksmode - CSS](http://www.quirksmode.org/dom/w3c_css.html)

{{APIRef("CSSOM")}}
