---
title: SVGTransformList
slug: Web/API/SVGTransformList
l10n:
  sourceCommit: cf6c3ad3156adcbed110eb71dadc5c5f85feba37
---

{{APIRef("SVG")}}

**`SVGTransformList`** インターフェイスは、 {{ domxref("SVGTransform") }} オブジェクトのリストを定義します。

`SVGTransformList` オブジェクトは読み取り専用として指定することができます。すなわち、オブジェクトを変更しようとすると例外が発生するようにすることができます。

`SVGTransformList` オブジェクトはインデックス指定可能であり、配列のようにアクセスすることができます。

## インスタンスプロパティ

- {{domxref("SVGTransformList.numberOfItems", "numberOfItems")}}
  - : リスト内のアイテム数です。
- {{domxref("SVGTransformList.length", "length")}}
  - : リスト内のアイテム数です。

## インスタンスメソッド

- {{domxref("SVGTransformList.clear", "clear()")}}
  - : リストから既存のアイテムをすべて削除し、リストを空にします。
- {{domxref("SVGTransformList.initialize", "initialize()")}}
  - : リストから既存のアイテムをすべて削除し、引数で指定した単一のアイテムを保持するようにリストを再初期化します。挿入されたアイテムがすでにリストに含まれている場合、このリストに挿入される前に前のリストから除去されます。挿入されたアイテムはアイテムそのものであり、コピーされることはありません。返値は、リストに挿入されたアイテムです。
- {{domxref("SVGTransformList.getItem", "getItem()")}}
  - : リストから指定されたアイテムを返します。返されるアイテムはアイテムそのものであり、コピーされるわけではありません。アイテムに加えられた変更は即座にリストに反映されます。最初のアイテムは数値 `0` です。
- {{domxref("SVGTransformList.insertItemBefore", "insertItemBefore()")}}
  - : 指定した位置に新しいアイテムをリストに挿入します。最初のアイテムのインデックスは `0` です。挿入されるアイテムはアイテムそのものであり、コピーではありません。 `newItem` がすでにリスト内にある場合、このリストに挿入される前に、前回あったリストから除去されます。アイテムがすでにこのリスト内にある場合、挿入するアイテムの位置は、アイテムが除去される前の時点のものであることに注意してください。 `index` が 0 である場合、新しいアイテムはリストの先頭に挿入されます。インデックスが `numberOfItems` 以上である場合、新しいアイテムはリストの末尾に追加されます。
- {{domxref("SVGTransformList.replaceItem", "replaceItem()")}}
  - : リスト内の既存のアイテムを新しいアイテムに置き換えます。挿入されるアイテムはアイテムそのものであり、コピーではありません。 `newItem` がすでにリスト内に存在する場合は、このリストに挿入される前に、以前のリストから除去されます。アイテムがすでにこのリスト内に存在する場合は、置き換えられるアイテムのインデックスは、アイテムが除去される前であることに注意してください。
- {{domxref("SVGTransformList.removeItem", "removeItem()")}}
  - : リストから既存のアイテムを除去します。
- {{domxref("SVGTransformList.appendItem", "appendItem()")}}
  - : リストの末尾に新しいアイテムをを追加します。 `newItem` がすでにリスト内に存在する場合は、このリストに挿入される前に、以前のリストから除去されます。挿入されるアイテムはアイテムそのものであり、コピーではありません。
- {{domxref("SVGTransformList.createSVGTransformFromMatrix", "createSVGTransformFromMatrix()")}}
  - : `SVG_TRANSFORM_MATRIX` 型の変換に初期化され、その値が指定された行列である `SVGTransform` オブジェクトを作成します。引数行列の値はコピーされます。この行列引数は `SVGTransform::matrix` に取りつけられません。
- {{domxref("SVGTransformList.consolidate", "consolidate()")}}
  - : 別個の `SVGTransform` オブジェクトのリストを、等価な変換行列を掛け合わせることで統合し、 `SVG_TRANSFORM_MATRIX` 型の単一の `SVGTransform` オブジェクトで構成されるリストを生成します。この統合操作では、新しい `SVGTransform` オブジェクトをリストの最初の、そして唯一のアイテムとして作成します。返されたアイテムはアイテムそのものであり、コピーではありません。アイテムに変更が加えられた場合、その変更は即座にリストに反映されます。

## 例

### 複数の SVGTransform オブジェクトの使用

この例では、クリックされた SVG 要素に 3 つの異なる変換を適用する関数を作成します。これを行うには、各変換（例えば、`translate`、`rotate`、`scale`）に対して別個の {{domxref("SVGTransform")}} オブジェクトを作成します。 SVG 要素に関連付けられた `SVGTransformList` に変換オブジェクトを追加することで、複数の変換を適用します。

```html-nolint
<svg
  id="my-svg"
  viewBox="0 0 300 280"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1">
  <desc>
    例： SVGTransform オブジェクトを使用する SVG 要素を変換する方法を示します
  </desc>
  <script type="application/ecmascript">
    <![CDATA[
      function transformMe(evt) {
        // svg root element to access the createSVGTransform() function
        const svgRoot = evt.target.parentNode;
        // SVGTransformList of the element that has been clicked on
        const tfmList = evt.target.transform.baseVal;

        // Create a separate transform object for each transform
        const translate = svgRoot.createSVGTransform();
        translate.setTranslate(50,5);
        const rotate = svgRoot.createSVGTransform();
        rotate.setRotate(10,0,0);
        const scale = svgRoot.createSVGTransform();
        scale.setScale(0.8,0.8);

        // apply the transformations by appending the SVGTransform objects to the SVGTransformList associated with the element
        tfmList.appendItem(translate);
        tfmList.appendItem(rotate);
        tfmList.appendItem(scale);
      }
    ]]>
  </script>

  <polygon
    fill="orange"
    stroke="black"
    stroke-width="5"
    points="100,225 100,115 130,115 70,15 70,15 10,115 40,115 40,225"
    onclick="transformMe(evt)" />
  <rect
    x="200"
    y="100"
    width="100"
    height="100"
    fill="yellow"
    stroke="black"
    stroke-width="5"
    onclick="transformMe(evt)" />
  <text x="40" y="250" font-family="Verdana" font-size="16" fill="green">
    座標変換する図形をクリックしてください
  </text>
</svg>
```

ライブプレビュー:

{{EmbedLiveSample("Using_multiple_SVGTransform_objects",300,280)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
