---
title: "IntersectionObserver: root プロパティ"
short-title: root
slug: Web/API/IntersectionObserver/root
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

**`root`** は {{domxref("IntersectionObserver")}} インターフェイスの読み取り専用のプロパティで、オブザーバーの対象となる要素の{{Glossary("bounding box", "境界ボックス")}}を{{Glossary("viewport", "ビューポート")}}として扱う {{domxref("Element")}} または {{domxref("Document")}} を識別します。

もし `root` が `null` であれば、現在の文書のビューポートの境界が使用されます。

## 値

{{domxref("Element")}} または {{domxref("Document")}} オブジェクトで、この境界ボックスが、対象要素のどの程度が見えるかを決定するためのビューポートの境界として使用されます。
この境界矩形が {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} コンストラクターに渡されたオプションで指定されたマージンによってオフセットされたものと、対象要素の、対象要素に重なる全ての要素または他のオブジェクトの境界を引いた交差部分が、対象要素の可視領域と見なされます。

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

- [交差オブザーバー API による要素の表示時間設定](/ja/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
