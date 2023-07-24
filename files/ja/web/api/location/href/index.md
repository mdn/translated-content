---
title: "location: href プロパティ"
slug: Web/API/Location/href
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ApiRef("Location")}}

**`href`** は {{domxref("Location")}} インターフェイスのプロパティで、{{Glossary("stringifier", "文字列化")}}です。文字列で URL 全体を表し、href を更新することができます。

`href` の値を設定すると、指定された URL に*移動*します。もし、_redirection_ が欲しい場合は、{{domxref("Location/replace", "location.replace()")}}を使用してください。`href` プロパティ値の設定との違いは、 `location.replace()` メソッドを使用した場合、指定した URL に移動した後、現在のページはセッションの[履歴](/ja/docs/Web/API/History_API)に保存されないことです - つまりユーザーは戻るボタンで移動することはできません。

## 文字列

文字列です。

## 例

```js
// 文書内に <a id="myAnchor" href="/ja/docs/Location/href"> 要素があるとする
const anchor = document.getElementById("myAnchor");
const result = anchor.href; // Returns: 'https://developer.mozilla.org/ja/Location/href'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
