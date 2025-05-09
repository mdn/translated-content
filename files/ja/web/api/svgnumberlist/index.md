---
title: SVGNumberList
slug: Web/API/SVGNumberList
l10n:
  sourceCommit: d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{APIRef("SVG")}}

**`SVGNumberList`** インターフェイスは、数値のリストを定義します。

`SVGNumberList` オブジェクトは読み取り専用として指定することができます。すなわち、オブジェクトを変更しようとすると例外が発生するようにすることができます。

`SVGNumberList` オブジェクトはインデックス指定可能であり、配列のようにアクセスすることができます。

## インスタンスプロパティ

- {{domxref("SVGNumberList.length", "length")}}
  - : リスト内のアイテム数です。
- {{domxref("SVGNumberList.numberOfItems", "numberOfItems")}}
  - : リスト内のアイテム数です。

## インスタンスメソッド

- {{domxref("SVGNumberList.appendItem", "appendItem()")}}
  - : 新しいアイテムをリストの末尾に追加します。
- {{domxref("SVGNumberList.clear", "clear()")}}
  - : リストから既存のアイテムをすべて削除し、リストを空にします。
- {{domxref("SVGNumberList.initialize", "initialize()")}}
  - : リストから既存のアイテムをすべて削除し、引数で指定した単一のアイテムを保持するようにリストを再初期化します。
- {{domxref("SVGNumberList.getItem", "getItem()")}}
  - : リストから特定のアイテムを返します。
- {{domxref("SVGNumberList.insertItemBefore", "insertItemBefore()")}}
  - : 新しいアイテムをリストの指定した位置に挿入します。
- {{domxref("SVGNumberList.removeItem", "removeItem()")}}
  - : リストから既存のアイテムを除去します。
- {{domxref("SVGNumberList.replaceItem", "replaceItem()")}}
  - : リスト内の既存のアイテムを新しいアイテムで置き換えます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
