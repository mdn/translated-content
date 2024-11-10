---
title: StorageArea.getBytesInUse()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/getBytesInUse
---

{{AddonSidebar}}

1 つ以上のストレージ領域内に格納されたアイテムが占めるストレージ空間をバイト単位で取得します。

この関数は [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返す非同期関数です。

## 構文

```js
var gettingSpace = browser.storage.<storageType>.getBytesInUse(
  keys                      // null, string, or array of strings
)
```

`<storageType>` は {{WebExtAPIRef("storage.sync")}} または {{WebExtAPIRef("storage.local")}} の書き込み可能なストレージタイプです。

### 引数

- `keys`
  - : ストレージ空間を取得したいアイテムのキー(文字列または文字列の配列)を指定します。 空の文字列か配列を渡すと 0 が返ります。 `null` を指定すると、ストレージ領域全体の使用中ストレージ空間を返します。

### 返り値

成功時は `keys` で指定されたオブジェクトが占めるストレージ空間を持つ整数 `bytesUsed` を引数に持つ [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返します。失敗した場合 Promise はエラーメッセージと共にリジェクトされます。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> この API は Chromium の [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API に基づいています。また、このドキュメントは [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) における Chromium のコードに基づいています。Microsoft Edge での実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従っています。
