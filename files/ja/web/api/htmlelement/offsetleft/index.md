---
title: "HTMLElement: offsetLeft プロパティ"
short-title: offsetLeft
slug: Web/API/HTMLElement/offsetLeft
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{ APIRef("HTML DOM") }}

**`offsetLeft`** は {{domxref("HTMLElement")}} インターフェイスの読み取り専用プロパティで、現在の要素の*左上隅*が {{domxref("HTMLElement.offsetParent")}} ノード内で左へオフセットされるピクセル数を返します。

ブロックレベル要素では、`offsetTop`、`offsetLeft`、`offsetWidth`、`offsetHeight` は、`offsetParent` を基準とする要素の境界ボックスを表します。

しかし、`<span>` のようなインラインレベル要素は行をまたいで折り返すことがあります。この場合、`offsetTop` と `offsetLeft` は*最初の*境界ボックスの位置を表し（幅と高さを取得するには {{domxref("Element.getClientRects()")}} を使用）、`offsetWidth` と `offsetHeight` は*囲む*境界ボックスの寸法を表します（位置を取得するには {{domxref("Element.getBoundingClientRect()")}} を使用）。したがって、`offsetLeft`、`offsetTop`、`offsetWidth`、`offsetHeight` で得られる左、上、幅、高さは、テキストが折り返された `<span>` の境界ボックスにはなりません。

## 値

整数です。

## 例

```js
const colorTable = document.getElementById("t1");
const tOLeft = colorTable.offsetLeft;

if (tOLeft > 5) {
  // 大きな左オフセットがある場合の処理
}
```

この例では、青い境界線を持つ div 内で折り返す「長い」文と、span の境界を表すと考えられる赤いボックスを示します。

![「短い span。」という文。このテキストは青い境界線の div 内に完全に収まっています。「この div 内で折り返す長い span。」という文。「この div 内で折り返す長い span」の部分は赤い境界線のボックス内にあり、「この div 内」の部分は青い境界線の div 内にあります。](offsetleft.jpg)

```html
<div class="span-container">
  <span>Short span.</span>
  <span id="long-span">Long span that wraps within this div.</span>
</div>

<div id="box"></div>
```

```css
.span-container {
  width: 300px;
  border-color: blue;
  border-style: solid;
  border-width: 1px;
}

#box {
  position: absolute;
  border-color: red;
  border-width: 1px;
  border-style: solid;
  z-index: 10;
}
```

```js
const box = document.getElementById("box");
const longSpan = document.getElementById("long-span");
box.style.left = `${longSpan.offsetLeft}${document.body.scrollLeft}px`;
box.style.top = `${longSpan.offsetTop}${document.body.scrollTop}px`;
box.style.width = `${longSpan.offsetWidth}px`;
box.style.height = `${longSpan.offsetHeight}px`;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [要素の寸法の決定](/ja/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- {{domxref("Element.clientLeft")}}
- {{domxref("Element.scrollLeft")}}
- {{domxref("HTMLElement.offsetHeight")}}
- {{domxref("HTMLElement.offsetWidth")}}
- {{domxref("HTMLElement.offsetTop")}}
- {{domxref("Element.getBoundingClientRect()")}}
