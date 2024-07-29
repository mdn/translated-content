---
title: "MouseEvent: pageY プロパティ"
short-title: pageY
slug: Web/API/MouseEvent/pageY
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
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
