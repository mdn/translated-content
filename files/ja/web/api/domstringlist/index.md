---
title: DOMStringList
slug: Web/API/DOMStringList
l10n:
  sourceCommit: f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{APIRef("DOM")}}

**`DOMStringList`** インターフェイスは、一部の API が返す古い型で、文字列 (`DOMString`) の変更不可能なリストを表します。現代の API は、代わりに {{jsxref("Array")}} オブジェクト（WebIDL では `sequence<DOMString>`）を返します。

このインターフェイスは [IndexedDB](/ja/docs/Web/API/IndexedDB_API) や {{domxref("Location")}} API で使用されています。

- {{domxref("IDBDatabase.objectStoreNames")}}
- {{domxref("IDBObjectStore.indexNames")}}
- {{domxref("Location.ancestorOrigins")}}

## インスタンスプロパティ

- {{domxref("DOMStringList.length")}} {{ReadOnlyInline}}
  - : リストの長さを返します。

## インスタンスメソッド

- {{domxref("DOMStringList.item()")}}
  - : リストから指定されたインデックスの文字列を返します。
- {{domxref("DOMStringList.contains()")}}
  - : 指定された文字列がリストに含まれるかどうかを示す論理値を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
