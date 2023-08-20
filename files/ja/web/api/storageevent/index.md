---
title: StorageEvent
slug: Web/API/StorageEvent
---

{{APIRef("Web Storage API")}}

`StorageEvent` は、保存領域が変更されたときに window へ送信されます。

> **メモ:** Gecko 2.0 より前にもこのイベントは存在していましたが、仕様書に合致していませんでした。古いイベント形式は `nsIDOMStorageEventObsolete` インターフェイスで表します。

## メソッドの概要

| `void initStorageEvent(in DOMString typeArg, in boolean canBubbleArg, in boolean cancelableArg, in DOMString keyArg, in DOMString oldValueArg, in DOMString newValueArg, in DOMString urlArg, in nsIDOMStorage storageAreaArg);` |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## 属性

| 属性          | 型                       | 説明                                                                                                                                                                              |
| ------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `key`         | {{domxref("DOMString")}} | 変更されたキーを表します。storage の `clear()` メソッドで変更された場合は、`key` 属性が `null` になります。**読み取り専用です。**                                                 |
| `newValue`    | {{domxref("DOMString")}} | `key` の新しい値です。storage の `clear()` メソッドで変更された場合や `key` がストレージから削除された場合は、`newValue` 属性が `null` になります。**読み取り専用です。**         |
| `oldValue`    | {{domxref("DOMString")}} | `key` の元の値です。storage の `clear()` メソッドで変更された場合や `key` が新たに追加されたため以前の値がない場合は、`oldValue` 属性が `null` になります。**読み取り専用です。** |
| `storageArea` | `nsIDOMStorage`          | 影響を受けた Storage オブジェクトを表します。**読み取り専用です。**                                                                                                               |
| `url`         | {{domxref("DOMString")}} | `key` が変更されたドキュメントの URL です。**読み取り専用です。**                                                                                                                 |

## メソッド

### initStorageEvent()

DOM イベントインターフェイス内の同様の名前のメソッドに似た方法で、イベントを初期化します。

```js
void initStorageEvent(
  in DOMString typeArg,
  in boolean canBubbleArg,
  in boolean cancelableArg,
  in DOMString keyArg,
  in DOMString oldValueArg,
  in DOMString newValueArg,
  in DOMString urlArg,
  in nsIDOMStorage storageAreaArg
);
```

#### 引数

- `typeArg`
  - : イベントの名称。
- `canBubbleArg`
  - : イベントが DOM 内でバブリングするか否かを示す論理値。
- `cancelableArg`
  - : イベントがキャンセル可能であるかを示す論理値。
- `keyArg`
  - : イベントの結果として、値が変化したキー。
- `oldValueArg`
  - : キーに対する以前の値。
- `newValueArg`
  - : キーに対する新しい値。
- `urlArg`
  - : 値を変化させたドキュメントの URL。
- `storageAreaArg`
  - : イベントが発生したストレージエリアを表す DOM {{domxref("Storage")}} オブジェクト。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
