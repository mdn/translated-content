---
title: "StorageEvent: initStorageEvent() メソッド"
short-title: initStorageEvent()
slug: Web/API/StorageEvent/initStorageEvent
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{ ApiRef("Web Storage API") }}{{deprecated_header}}

**`StorageEvent.initStorageEvent()`** メソッドは {{ domxref("StorageEvent") }} の値を初期化するために使用します。

## 構文

```js-nolint
initStorageEvent(type)
initStorageEvent(type, canBubble)
initStorageEvent(type, canBubble, cancelable)
initStorageEvent(type, canBubble, cancelable, key)
initStorageEvent(type, canBubble, cancelable, key, oldValue)
initStorageEvent(type, canBubble, cancelable, key, oldValue, newValue)
initStorageEvent(type, canBubble, cancelable, key, oldValue, newValue, url)
initStorageEvent(type, canBubble, cancelable, key, oldValue, newValue, url, storageArea)
```

### 引数

- `typeArg`
  - : イベントの名前です。
- `canBubble` {{optional_inline}}
  - : 論理値で、イベントが DOM を介してバブリングするかどうかを示します。
- `cancelable` {{optional_inline}}
  - : 論理値で、イベントがキャンセル可能であるかどうかを示します。
- `key` {{optional_inline}}
  - : このイベントの結果として値を変更しようとしているキーです。
- `oldValue` {{optional_inline}}
  - : キーの古い値です。
- `newValue` {{optional_inline}}
  - : キーの新しい値です。
- `url` {{optional_inline}}
  - : 変更を行おうとしている文書の URL です。
- `storageArea` {{optional_inline}}
  - : このイベントが発生したストレージ領域を表す {{DOMxRef("Storage")}} オブジェクトです。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- この非推奨のメソッドの代わりに使用するコンストラクター: {{domxref("StorageEvent.StorageEvent", "StorageEvent()")}}
