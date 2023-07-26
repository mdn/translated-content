---
title: HTMLMediaElement.paused
slug: Web/API/HTMLMediaElement/paused
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.paused`** プロパティは読み取り専用で、メディア要素が一時停止しているかどうかを示します。

## 値

論理値です。 `true` は一時停止中で、`false` は一時停止していません。

## 例

```js
const obj = document.createElement('video');
console.log(obj.paused); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 定義している {{domxref("HTMLMediaElement")}} インターフェイス
