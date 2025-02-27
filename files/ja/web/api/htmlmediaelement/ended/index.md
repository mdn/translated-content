---
title: "HTMLMediaElement: ended プロパティ"
short-title: ended
slug: Web/API/HTMLMediaElement/ended
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.ended`** は、メディア要素が再生を終了したかどうかを示します。

## 値

論理値で、要素に含まれているメディアの再生が終了した場合に `true` となります。

メディアのソースが {{domxref("MediaStream")}} の場合、ストリームの {{domxref("MediaStream.active", "active")}} プロパティの値が `false` であれば、この値は `true` です。

## 例

```js
const obj = document.createElement("video");
console.log(obj.ended); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLMediaElement")}}: `HTMLMediaElement.ended` プロパティを定義しているインターフェイス
- {{domxref("MediaStream")}}
- {{domxref("MediaStream.active")}}
