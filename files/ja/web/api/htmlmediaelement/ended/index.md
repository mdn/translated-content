---
title: HTMLMediaElement.ended
slug: Web/API/HTMLMediaElement/ended
l10n:
  sourceCommit: 5e10a2aab4ec9ecbcf8cf79f589f9b7ece88ef60
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.ended`** は、メディア要素が再生を終了したかどうかを示します。

## 値

論理値で、要素に含まれているメディアの再生が終了した場合に `true` となります。

メディアのソースが {{domxref("MediaStream")}} の場合、ストリームの {{domxref("MediaStream.active", "active")}} プロパティの値が `false` であれば、この値は `true` です。

## 例

```js
const obj = document.createElement('video');
console.log(obj.ended); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 定義している {{domxref("HTMLMediaElement")}} インターフェイス
- {{domxref("MediaStream")}}
- {{domxref("MediaStream.active")}}
