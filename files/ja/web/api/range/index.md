---
title: Range
slug: Web/API/Range
---

{{APIRef("DOM")}}

**`Range`** インターフェイスは、ノードやテキストノードの部品を含むことができる文書の範囲を表します。

範囲は {{ domxref("Document.createRange()") }} メソッドにより生成することができます。また、 {{domxref("Selection")}} オブジェクトの {{domxref("Selection/getRangeAt", "getRangeAt()")}} メソッドや {{domxref("Document")}} オブジェクトの {{domxref("Document/caretRangeFromPoint", "caretRangeFromPoint()")}} メソッドにより取得することもできます。

さらに、{{domxref("Range.Range()", "Range()")}} コンストラクターも使用できます。

{{InheritanceDiagram}}

## プロパティ

_継承しているプロパティはありません。_

- {{domxref("Range.collapsed")}} {{readonlyInline}}
  - : 論理値で、範囲の始点と終点が同じ位置にあるか否かを示します。
- {{domxref("Range.commonAncestorContainer")}} {{readonlyInline}}
  - : `startContainer` と `endContainer` をともに含む、最も深い {{ domxref("Node") }} を返します。
- {{domxref("Range.endContainer")}} {{readonlyInline}}
  - : `Range` の終点を含む {{ domxref("Node") }} を返します。
- {{domxref("Range.endOffset")}} {{readonlyInline}}
  - : `endContainer` の中での `Range` の終点の位置を示す数字を返します。
- {{domxref("Range.startContainer")}} {{readonlyInline}}
  - : `Range` の始点を含む {{ domxref("Node") }} を返します。
- {{domxref("Range.startOffset")}} {{readonlyInline}}
  - : `startContainer` の中での `Range` の始点の位置を示す数字を返します。

## コンストラクター

- {{ domxref("Range.Range()", "Range()") }} {{experimental_inline}}
  - : 始点および終点がグローバルな {{domxref("Document")}} である `Range` オブジェクトを返します。

## メソッド

_継承しているメソッドはありません。_

- {{ domxref("Range.collapse()")}}
  - : `Range` をその端点の一方へ折りたたみます。
- {{ domxref("Range.compareBoundaryPoints()")}}
  - : `Range` の端点を、他の `Range` の端点と比較します。
- {{ domxref("Range.compareNode()")}} {{deprecated_inline}} {{non-standard_inline}}
  - : {{ domxref("Node") }} が範囲の前、後、中、外のうちのいずれの場所にあるかを示す定数を返します。
- {{ domxref("Range.comparePoint()")}} {{experimental_inline}}
  - : この点が `Range` の前、中、後のうちのいずれの場所にあるかを示す -1、0、1 を返します。
- {{ domxref("Range.cloneContents()")}}
  - : `Range` の中身をコピーした {{ domxref("DocumentFragment") }} を返します。
- {{ domxref("Range.cloneRange()")}}
  - : 元の `Range` と同じ端点を持つ複製された `Range` オブジェクトを返します。
- {{ domxref("Range.createContextualFragment()")}}{{experimental_inline}}
  - : 渡されたコードの文字列から生成した {{domxref("DocumentFragment")}} を返します。
- {{ domxref("Range.deleteContents()")}}
  - : `Range` の中身を {{ domxref("Document") }} から削除します。
- {{ domxref("Range.detach()")}}
  - : パフォーマンスを改善するために、 `Range` を使用状態から解放します。
- {{ domxref("Range.extractContents()")}}
  - : `Range` の中身を文書ツリーから {{ domxref("DocumentFragment") }} へ移動します。
- {{ domxref("Range.getBoundingClientRect()") }} {{experimental_inline}}
  - : `Range` の内容の全体に結びつく {{ domxref("DOMRect") }} オブジェクトを返します。これは、 {{ domxref("range.getClientRects()") }} が返します。すべての長方形の集合体です。
- {{ domxref("Range.getClientRects()") }} {{experimental_inline}}
  - : `Range` 内のすべての要素について、{{ domxref("Element.getClientRects()") }} の結果をまとめた {{ domxref("DOMRect") }} オブジェクトのリストを返します。
- {{ domxref("Range.isPointInRange()")}} {{experimental_inline}}
  - : 与えられた点が `Range` の中にあるか否かを示す論理値を返します。
- {{ domxref("Range.insertNode()")}}
  - : `Range` の始点に {{ domxref("Node") }} を挿入します。
- {{ domxref("Range.intersectsNode()")}} {{experimental_inline}}
  - : 指定ノードの範囲が `Range` と交差するか否かを示す論理値を返します。
- {{ domxref("Range.selectNode()")}}
  - : `Range` を、ある {{ domxref("Node") }} とその内容を含むように設定します。
- {{ domxref("Range.selectNodeContents()")}}
  - : `Range` を、ある {{ domxref("Node") }} の内容を含むように設定します。
- {{ domxref("Range.setEnd()")}}
  - : `Range` の終点を設定します。
- {{ domxref("Range.setStart()")}}
  - : `Range` の始点を設定します。
- {{ domxref("Range.setEndAfter()")}}
  - : 他の {{ domxref("Node") }} を基準に `Range` の終点を設定します。
- {{ domxref("Range.setEndBefore()")}}
  - : 他の {{ domxref("Node") }} を基準に `Range` の終点を設定します。
- {{ domxref("Range.setStartAfter()")}}
  - : 他の {{ domxref("Node") }} を基準に `Range` の始点を設定します。
- {{ domxref("Range.setStartBefore()")}}
  - : 他の {{ domxref("Node") }} を基準に `Range` の始点を設定します。
- {{ domxref("Range.surroundContents()")}}
  - : `Range` の中身を新しい {{ domxref("Node") }} の中に移動します。
- {{ domxref("Range.toString()")}}
  - : `Range` の内容を文字列として返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイスの索引](/ja/docs/Web/API/Document_Object_Model)
