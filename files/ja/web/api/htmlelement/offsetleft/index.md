---
title: HTMLElement.offsetLeft
slug: Web/API/HTMLElement/offsetLeft
tags:
  - API
  - CSSOM View
  - NeedsMarkupWork
  - プロパティ
  - 読み取り専用
  - リファレンス
browser-compat: api.HTMLElement.offsetLeft
translation_of: Web/API/HTMLElement/offsetLeft
---
{{ APIRef("HTML DOM") }}

**`HTMLElement.offsetLeft`** プロパティは読み取り専用で、現在の要素の*左上隅*が {{domxref("HTMLElement.offsetParent")}} ノード内で左へオフセットされるピクセル数を返します。

ブロックレベル要素では、 `offsetTop`, `offsetLeft`, `offsetWidth`, `offsetHeight` が `offsetParent` からの相対的な要素の境界ボックスを記述します。

しかし、 (<strong>span</strong> などの) インラインレベル要素は行をまたいで折り返すことがあるので、 `offsetTop` および `offsetLeft` は*最初の*境界ボックス (その幅と高さを取得するには {{domxref("Element.getClientRects()")}} を使用) の位置を記述するのに対し、 `offsetWidth` および `offsetHeight` は*囲む*境界ボックス (位置を取得するには {{domxref("Element.getBoundingClientRect()")}} を使用) の寸法を記述します。したがって、 `offsetLeft`, `offsetTop`, `offsetWidth`, `offsetHeight` による左、上、幅、高さは折り返されたテキストの区間を囲むボックスにはなりません。

## 値

整数です。

## 例

```js
var colorTable = document.getElementById("t1");
var tOLeft = colorTable.offsetLeft;

if (tOLeft > 5) {
  // large left offset: do something here
}
```

この例は、 div 内で折り返す「長い」文を青い境界線で表示し、 span の境界を記述すると考えられるものを赤いボックスで表示します。

![](offsetleft.jpg)

```html
<div style="width: 300px; border-color:blue; border-style:solid; border-width:1;">
  <span>Short span. </span>
  <span id="longspan">Long span that wraps within this div.</span>
</div>

<div id="box" style="position: absolute; border-color: red; border-width: 1; border-style: solid; z-index: 10">
</div>

<script type="text/javascript">
  var box = document.getElementById("box");
  var longspan = document.getElementById("longspan");
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
