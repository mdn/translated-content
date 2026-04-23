---
title: StorageArea.clear()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/clear
---

{{AddonSidebar}}

全てのアイテムをストレージ領域から削除します。

この関数は [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返す非同期関数です。

## 構文

```js
var clearing = browser.storage.<storageType>.clear()
```

`<storageType>` は {{WebExtAPIRef("storage.sync")}} または {{WebExtAPIRef("storage.local")}} の書き込み可能なストレージタイプです。

### 引数

なし

### 返り値

成功時は引数の無い [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返します。 失敗した場合 promise はエラーメッセージと共にリジェクトされます。

## ブラウザーの互換性

{{Compat}}

## 例

```js
function onCleared() {
  console.log("OK");
}

function onError(e) {
  console.log(e);
}

var clearStorage = browser.storage.local.clear();
clearStorage.then(onCleared, onError);
```

{{WebExtExamples}}

> [!NOTE]
> この API は Chromium の [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API に基づいています。また、このドキュメントは [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) における Chromium のコードに基づいています。
