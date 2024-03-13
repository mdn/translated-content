---
title: StyleSheetList
slug: Web/API/StyleSheetList
---

{{APIRef("CSSOM")}}

`StyleSheetList` インターフェイスは {{domxref("StyleSheet")}} のリストを表します。

これは配列風のオブジェクトですが、 {{jsxref("Array")}} のメソッドを適用しての反復処理はできません。しかし標準の {{jsxref("Statements/for", "for")}} ループと添字による反復処理、もしくは {{jsxref("Array")}} への変換ができます。

## 例

### for ループを使用して document の [styleSheet](/ja/docs/Web/API/CSSStyleSheet) オブジェクトを取得

```js
for (let i = 0; i < document.styleSheets.length; i++) {
  let styleSheet = document.styleSheets[i];
}
```

### Array のメソッドを適用してすべての CSS ルールを取得

```
const allCSS = [...document.styleSheets]
  .map(styleSheet => {
    try {
      return [...styleSheet.cssRules]
        .map(rule => rule.cssText)
        .join('');
    } catch (e) {
      console.log('Access to stylesheet %s is denied. Ignoring...', styleSheet.href);
    }
  })
  .filter(Boolean)
  .join('\n');
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
