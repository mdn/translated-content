---
title: SVGStringList
slug: Web/API/SVGStringList
l10n:
  sourceCommit: d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{APIRef("SVG")}}

**`SVGStringList`** インターフェイスは、文字列のリストを定義します。

`SVGStringList` オブジェクトは読み取り専用として指定することができます。すなわち、オブジェクトを変更しようとすると例外が発生するようにすることができます。

`SVGStringList` オブジェクトはインデックスが利用可能で、配列のようにアクセスすることができます。

## インスタンスプロパティ

- {{domxref("SVGStringList.length", "length")}}
  - : リスト内のアイテムの数です。
- {{domxref("SVGStringList.numberOfItems", "numberOfItems")}}
  - : リスト内のアイテムの数です。

## インスタンスメソッド

- {{domxref("SVGStringList.appendItem", "appendItem()")}}
  - : 新しいアイテムをリストの末尾に追加します。
- {{domxref("SVGStringList.clear", "clear()")}}
  - : リストから既存のアイテムをすべて削除し、リストを空にします。
- {{domxref("SVGStringList.initialize", "initialize()")}}
  - : リストから既存のアイテムをすべて削除し、引数で指定した単一のアイテムを保持するようにリストを再初期化します。
- {{domxref("SVGStringList.getItem", "getItem()")}}
  - : リストから特定のアイテムを返します。
- {{domxref("SVGStringList.insertItemBefore", "insertItemBefore()")}}
  - : 新しいアイテムをリストの指定した位置に挿入します。
- {{domxref("SVGStringList.removeItem", "removeItem()")}}
  - : リストから既存のアイテムを除去します。
- {{domxref("SVGStringList.replaceItem", "replaceItem()")}}
  - : リスト内の既存のアイテムを新しいアイテムで置き換えます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
