---
title: Screen.availTop
slug: Web/API/ScreenDetailed/availTop
---

{{APIRef("CSSOM")}}{{Non-standard_Header}}

固定あるいは半固定されているユーザーインターフェイス部分を含まない、最初のピクセルの Y 座標を示します。

## 値

数値です。

## 例

```js
let setX = window.screen.width - window.screen.availLeft;
let setY = window.screen.height - window.screen.availTop;
window.moveTo(setX, setY);
```

## メモ

ほとんどの場合において、このプロパティは、 `0` を返します。

## ブラウザーの互換性

{{Compat}}
