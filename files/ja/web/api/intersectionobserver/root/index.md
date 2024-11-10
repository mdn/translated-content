---
title: "IntersectionObserver: root プロパティ"
short-title: root
slug: Web/API/IntersectionObserver/root
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Intersection Observer API")}}

{{domxref("IntersectionObserver")}} インターフェイスの読み取り専用の **`root`** プロパティは、 オブザーバーの対象となる要素の{{Glossary("bounding box", "外接ボックス")}}の境界を{{Glossary("viewport", "ビューポート")}}として扱う {{domxref("Element")}} または {{domxref("Document")}} を識別します。

もし `root` が `null` であれば、実際の文書のビューポートの境界が使用されます。

## 値

{{domxref("Element")}} または {{domxref("Document")}} オブジェクトで、この外接ボックスが、対象要素のどの程度が見えるかを決定するためのビューポートの境界として使用されます。
この外接矩形が {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} コンストラクターに渡されたオプションで指定されたマージンによってオフセットされたものと、対象要素の、対象要素に重なる全ての要素または他のオブジェクトの境界を引いた交差部分が、対象要素の可視領域と見なされます。

もし `root` が `null` であれば、自分の文書をルートとして使用し、そのビューポートの境界（つまり、文書の可視領域）をルート境界として使用します。

## 例

この例では、交差オブザーバのルート要素の {{cssxref("border")}} を、 2 ピクセルの中緑色の線に設定しています。

```js
observer.root.style.border = "2px solid #44aa44";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [交差オブザーバー API を使用して要素の可視状態のタイミングを取る](/ja/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
