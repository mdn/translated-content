---
title: "HTMLAreaElement: coords プロパティ"
short-title: coords
slug: Web/API/HTMLAreaElement/coords
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

**`coords`** は {{DOMxRef("HTMLAreaElement")}} インターフェイスのプロパティで、要素の図形の座標を浮動小数点数のリストとして指定します。これは、 {{htmlelement("area")}} 要素の [`coords`](/ja/docs/Web/HTML/Reference/Elements/area#coords) 属性を反映します。

`shape` が `rect` の場合、図形は長方形となり、文字列の値は 4 つのカンマ区切りの数値で、長方形の左上隅と右下隅の座標を指定します。例えば、`0,0,200,20` は、座標を `0,0` （イメージマップの左上） および `200,20` （画像マップの左上から 200 ピクセル、上から 20 ピクセル） と定義します。

`shape` が `circle` の場合、カンマで区切られた 3 つの数値は、円の中心の x 座標と y 座標、および半径を表します。

shape が `poly` の場合、文字列は、多角形の頂点を定義する 3 組以上の座標を表す、カンマで区切られた 6 以上の数値で構成されます。

すべての座標の原点は、 {{htmlelement("map")}} 要素の画像の左上隅です。

## 値

文字列です。カンマで区切られた一連の数値で構成されます。

## 例

```js
const areaElement = document.getElementById("circleArea");
console.log(areaElement.coords);
areaElement.coords = "25,25,25";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMXref("HTMLAreaElement.shape")}}
- {{DOMXref("HTMLAreaElement.alt")}}
- {{DOMXref("HTMLMapElement")}}
- {{HTMLElement("area")}}
- {{HTMLElement("map")}}
- {{HTMLElement("a")}}
