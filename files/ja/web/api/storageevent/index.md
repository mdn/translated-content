---
title: StorageEvent
slug: Web/API/StorageEvent
l10n:
  sourceCommit: 6d194a9afcce7beef0082c1dc50644bd0fcda635
---

{{APIRef("Web Storage API")}}

**`StorageEvent`** インターフェイスは {{domxref("Window/storage_event", "storage")}} イベントによって実装され、ウィンドウがアクセスするストレージ領域が他の文書のコンテキスト内で変更されたときにウィンドウに送られます。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("StorageEvent.StorageEvent()", "StorageEvent()")}}
  - : 新しく構築された `StorageEvent` オブジェクトを返します。

## インスタンスプロパティ

_以下の挙げたプロパティに加え、このインターフェイスは親インターフェイスである {{domxref("Event")}} から継承したプロパティがあります。_

- {{domxref("StorageEvent.key", "key")}} {{ReadOnlyInline}}
  - : 変更されたキーを表す文字列を返します。
    `key` 属性は、ストレージの`clear()` メソッドで変更された場合は [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) になります。
- {{domxref("StorageEvent.newValue", "newValue")}} {{ReadOnlyInline}}
  - : `key` の新しい値を文字列で返します。
    ストレージの `clear()` メソッドによって変更された場合、または `key` がストレージから除去された場合、この値は `null` となります。
- {{domxref("StorageEvent.oldValue", "oldValue")}} {{ReadOnlyInline}}
  - : `key` の元の値を文字列で返します。
    この値は `key` が新しく追加された場合で、前回の値がない場合は `null` となります。
- {{domxref("StorageEvent.storageArea", "storageArea")}} {{ReadOnlyInline}}
  - : 影響を受けたストレージを表す {{DOMxRef("Storage")}} オブジェクトを返します。
- {{domxref("StorageEvent.url", "url")}} {{ReadOnlyInline}}
  - : `key` が変更された文書の URL を文字列で返します。

## インスタンスメソッド

_以下の挙げたメソッドに加え、このインターフェイスは親インターフェイスである {{domxref("Event")}} から継承したメソッドがあります。_

- {{domxref("StorageEvent.initStorageEvent", "initStorageEvent()")}} {{deprecated_inline}}
  - : DOM の Event インターフェイスにおける同様の名前の {{domxref("Event.initEvent", "initEvent()")}} メソッドに類似した方法でイベントを初期化します。代わりにコンストラクターを使用してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
