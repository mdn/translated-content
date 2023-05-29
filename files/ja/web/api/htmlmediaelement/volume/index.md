---
title: HTMLMediaElement.volume
slug: Web/API/HTMLMediaElement/volume
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.volume`** プロパティは、メディアを再生する音量を設定します。

## 値

`double` 値で 0 から 1 の間でなければなりません。 ここで、0 は効果的にミュートされ、1 が最大の可能な値です。

## 例

```js
const obj = document.createElement('audio');
console.log(obj.volume); // 1
obj.volume = 0.75;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 定義している {{domxref("HTMLMediaElement")}} インターフェイス
- {{domxref("HTMLMediaElement.muted")}}
