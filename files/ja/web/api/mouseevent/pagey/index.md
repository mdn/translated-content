---
title: MouseEvent.pageY
slug: Web/API/MouseEvent/pageY
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("UI Events")}}

**`pageY`** は {{domxref("MouseEvent")}} インターフェイスの読み取り専用プロパティで、マウスがクリックされた位置の Y （垂直）座標を、文書全体の相対座標で返します。
このプロパティはページの垂直スクロールを加味します。

## 値

`double` 型の浮動小数点値。

## 例

```js
let pageY = event.pageY;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MouseEvent.pageX")}}
