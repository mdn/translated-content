---
title: MouseEvent.pageY
slug: Web/API/MouseEvent/pageY
tags:
  - API
  - DOM
  - プロパティ
  - 読み取り専用
  - リファレンス
browser-compat: api.MouseEvent.pageY
translation_of: Web/API/MouseEvent/pageY
---
{{APIRef("DOM Events")}}

**`pageY`** は {{domxref("MouseEvent")}} インターフェイスの読み取り専用プロパティで、マウスがクリックされた位置の Y（垂直）座標を、文書全体の相対座標で返します。
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
