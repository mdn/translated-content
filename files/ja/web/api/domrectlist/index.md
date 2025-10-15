---
title: DOMRectList
slug: Web/API/DOMRectList
l10n:
  sourceCommit: f8554061e8e76aaa3f08ba1b5f9b939d436f5ded
---

{{APIRef("Geometry Interfaces")}}

**`DOMRectList`** インターフェイスは、 {{domxref("DOMRect")}} オブジェクトの集合を表します。通常、 {{domxref("Element.getClientRects", "getClientRects()")}} などのメソッドによって返される境界ボックスなど、具体的な要素に関連付けられた長方形を保持するために使用されます。このインターフェイスは、リスト内の各長方形にインデックスを介してアクセスする機能と、リスト内の長方形の総数を表す `length` プロパティを提供します。

> [!NOTE]
> `DOMRectList` は、古いウェブコンテンツとの互換性のために存在しており、新しい API を作成する際には使用しないことをお勧めします。

## インスタンスプロパティ

- {{domxref("DOMRectList.length")}} {{ReadOnlyInline}}
  - : `DOMRectList` 内の {{domxref("DOMRect")}} オブジェクトの総数を返す読み取り専用のプロパティです。

## インスタンスメソッド

- {{domxref("DOMRectList.item")}}
  - : 指定したインデックスの {{domxref("DOMRect")}} オブジェクトを返します。 `index` が範囲外の場合、 `null` を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMRect")}}
- {{domxref("DOMRectReadOnly")}}
