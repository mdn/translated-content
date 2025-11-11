---
title: "HTMLElement: offsetLeft プロパティ"
short-title: offsetLeft
slug: Web/API/HTMLElement/offsetLeft
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.offsetLeft`** プロパティは読み取り専用で、現在の要素の*左上隅*が {{domxref("HTMLElement.offsetParent")}} ノード内で左へオフセットされるピクセル数を返します。

ブロックレベル要素では、 `offsetTop`, `offsetLeft`, `offsetWidth`, `offsetHeight` が `offsetParent` からの相対的な要素の境界ボックスを記述します。

しかし、 (**span** などの) インラインレベル要素は行をまたいで折り返すことがあるので、 `offsetTop` および `offsetLeft` は*最初の*境界ボックス (その幅と高さを取得するには {{domxref("Element.getClientRects()")}} を使用) の位置を記述するのに対し、 `offsetWidth` および `offsetHeight` は*囲む*境界ボックス (位置を取得するには {{domxref("Element.getBoundingClientRect()")}} を使用) の寸法を記述します。したがって、 `offsetLeft`, `offsetTop`, `offsetWidth`, `offsetHeight` による左、上、幅、高さは折り返されたテキストの区間を囲むボックスにはなりません。

## 値

整数です。

## 例

```js
const colorTable = document.getElementById("t1");
const tOLeft = colorTable.offsetLeft;

if (tOLeft > 5) {
  // large left offset: do something here
}
```

この例は、 div 内で折り返す「長い」文を青い境界線で表示し、 span の境界を記述すると考えられるものを赤いボックスで表示します。

![Short span. という文があります。このテキストは青い境界の div に完全に収まっています。Long span that wraps within this div. という文があります。"long span that wraps" の部分は赤い境界のボックスに入っています。"within this div" の部分は青い境界の div の中に入っています。](offsetleft.jpg)

```html
<div
  style="width: 300px; border-color:blue; border-style:solid; border-width:1;">
  <span>Short span. </span>
  <span id="longspan">Long span that wraps within this div.</span>
</div>

<div
  id="box"
  style="position: absolute; border-color: red; border-width: 1; border-style: solid; z-index: 10"></div>

<script>
  const box = document.getElementById("box");
  const longspan = document.getElementById("longspan");
  box.style.left = longspan.offsetLeft + document.body.scrollLeft + "px";
  box.style.top = longspan.offsetTop + document.body.scrollTop + "px";
  box.style.width = longspan.offsetWidth + "px";
  box.style.height = longspan.offsetHeight + "px";
</script>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLElement.offsetParent")}}, {{domxref("HTMLElement.offsetTop")}}, {{domxref("HTMLElement.offsetWidth")}}, {{domxref("HTMLElement.offsetHeight")}}
