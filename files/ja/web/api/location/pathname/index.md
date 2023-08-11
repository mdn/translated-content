---
title: "location: pathname プロパティ"
slug: Web/API/Location/pathname
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ApiRef("Location")}}

**`pathname`** は {{domxref("Location")}} インターフェイスのプロパティで、その位置を表す URL のパスが入った文字列です。パスがない場合は空文字列になります。そうでない場合、`pathname` には最初の '\' に続いて URL のパス部分が入り、クエリー文字列やフラグメントは含みません。

## 値

文字列です。

## 例

```js
// 文書内に <a id="myAnchor" href="/ja/docs/Location.pathname"> 要素があるとする
const anchor = document.getElementById("myAnchor");
const result = anchor.pathname; // 返値:'/ja/docs/Location.pathname'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
