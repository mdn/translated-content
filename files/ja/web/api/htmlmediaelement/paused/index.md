---
title: "HTMLMediaElement: paused プロパティ"
short-title: paused
slug: Web/API/HTMLMediaElement/paused
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.paused`** プロパティは読み取り専用で、メディア要素が一時停止しているかどうかを示します。

## 値

論理値です。 `true` は一時停止中で、`false` は一時停止していません。

## 例

```js
const obj = document.createElement("video");
console.log(obj.paused); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLMediaElement")}}: `HTMLMediaElement.paused` プロパティを定義しているインターフェイス
