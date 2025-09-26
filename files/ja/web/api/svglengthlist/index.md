---
title: SVGLengthList
slug: Web/API/SVGLengthList
l10n:
  sourceCommit: d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{APIRef("SVG")}}

**`SVGLengthList`** インターフェイスは、 {{ domxref("SVGLength") }} オブジェクトのリストを定義します。これは、 {{domxref("SVGAnimatedLengthList")}} の {{domxref("SVGAnimatedLengthList.baseVal", "baseVal")}} および {{domxref("SVGAnimatedLengthList.animVal", "animVal")}} プロパティで使用します。

`SVGLengthList` オブジェクトは読み取り専用として指定することができます。すなわち、オブジェクトを変更しようとすると例外が発生するようにすることができます。

`SVGLengthList` オブジェクトはインデックス指定可能であり、配列のようにアクセスすることができます。

## インスタンスプロパティ

- {{domxref("SVGLengthList.length", "length")}}
  - : リスト内のアイテム数です。
- {{domxref("SVGLengthList.numberOfItems", "numberOfItems")}}
  - : リスト内のアイテム数です。

## インスタンスメソッド

- {{domxref("SVGLengthList.appendItem", "appendItem()")}}
  - : 新しいアイテムをリストの末尾に追加します。
- {{domxref("SVGLengthList.clear", "clear()")}}
  - : リストから既存のアイテムをすべて削除し、リストを空にします。
- {{domxref("SVGLengthList.initialize", "initialize()")}}
  - : リストから既存のアイテムをすべて削除し、引数で指定した単一のアイテムを保持するようにリストを再初期化します。
- {{domxref("SVGLengthList.getItem", "getItem()")}}
  - : リストから特定のアイテムを返します。
- {{domxref("SVGLengthList.insertItemBefore", "insertItemBefore()")}}
  - : 新しいアイテムをリストの指定した位置に挿入します。
- {{domxref("SVGLengthList.removeItem", "removeItem()")}}
  - : リストから既存のアイテムを除去します。
- {{domxref("SVGLengthList.replaceItem", "replaceItem()")}}
  - : リスト内の既存のアイテムを新しいアイテムで置き換えます。

## 例

### SVGLengthList の使用

`SVGLengthList` オブジェクトは、 {{domxref("SVGAnimatedLengthList")}} オブジェクトから取得できます。これは、 {{domxref("SVGTextPositioningElement.x")}} などの多くのアニメーション化可能な長さの属性から取得できます。

#### HTML

```html
<svg
  viewBox="0 0 200 100"
  xmlns="http://www.w3.org/2000/svg"
  width="200"
  height="100">
  <text id="text1" x="10" y="50">Hello</text>
</svg>
<button id="equally-distribute">文字を均等配置</button>
<button id="reset-spacing">間隔をリセット</button>
<div>
  <b>現在の <code>SVGLengthList</code></b>
  <pre><output id="output"></output></pre>
</div>
```

#### JavaScript

```js
const text = document.getElementById("text1");
const output = document.getElementById("output");
const list = text.x.baseVal;
function equallyDistribute() {
  list.clear();
  for (let i = 0; i < text.textContent.length; i++) {
    const length = text.ownerSVGElement.createSVGLength();
    length.value = i * 20 + 10;
    list.appendItem(length);
  }
  printList();
}
function resetSpacing() {
  const length = text.ownerSVGElement.createSVGLength();
  length.value = 10;
  list.initialize(length);
  printList();
}
function printList() {
  output.textContent = "";
  for (let i = 0; i < list.length; i++) {
    output.innerText += list.getItem(i).value + "\n";
  }
}
printList();

document
  .getElementById("equally-distribute")
  .addEventListener("click", equallyDistribute);
document
  .getElementById("reset-spacing")
  .addEventListener("click", resetSpacing);
```

#### 結果

{{EmbedLiveSample("Using SVGLengthList", "", "300")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGNumberList")}}
- {{domxref("SVGPointList")}}
- {{domxref("SVGStringList")}}
- {{domxref("SVGTransformList")}}
