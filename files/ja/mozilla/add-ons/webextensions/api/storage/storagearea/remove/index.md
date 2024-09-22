---
title: StorageArea.remove()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/remove
---

{{AddonSidebar}}

1 つ以上のアイテムをストレージ領域から削除します。

この関数は [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返す非同期関数です。

## 構文

```js
let removingItem = browser.storage.<storageType>.remove(
  keys             // string, or array of strings
)
```

`<storageType>` は {{WebExtAPIRef("storage.sync")}} または {{WebExtAPIRef("storage.local")}} の書き込み可能なストレージタイプです。

### 引数

- `keys`
  - : 削除したいアイテムのキー(文字列または文字列の配列)を指定します。

### 返り値

成功時は引数の無い [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返します。 失敗した場合 promise はエラーメッセージと共にリジェクトされます。

## ブラウザーの互換性

{{Compat}}

## 例

1 つのアイテムを削除する例です。

```js
function onRemoved() {
  console.log("OK");
}

function onError(e) {
  console.log(e);
}

let removeKitten = browser.storage.remove("kitten");
removeKitten.then(onRemoved, onError);
```

{{WebExtExamples}}

> [!NOTE]
> この API は Chromium の [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API に基づいています。また、このドキュメントは [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) における Chromium のコードに基づいています。Microsoft Edge での実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従っています。
