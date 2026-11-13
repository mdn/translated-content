---
title: StorageArea.getBytesInUse()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/getBytesInUse
l10n:
  sourceCommit: 81c80db5f9f98dd2ac197474829fe52cd75acf1b
---

ストレージ領域に格納された 1 つ以上のアイテムが使用しているストレージ容量をバイト単位で取得します。

> [!NOTE]
> Firefox では、このメソッドは次のストレージに対応しています。
>
> - {{WebExtAPIRef("storage.sync")}}
> - Firefox 131 以降の {{WebExtAPIRef("storage.session")}}
> - Firefox 144 以降の {{WebExtAPIRef("storage.local")}} および {{WebExtAPIRef("storage.managed")}}

> [!NOTE]
> 少なくとも Chrome と Firefox では、`storage.managed.getBytesInUse()` は常に 0 を返します。

## 構文

```js-nolint
let gettingSpace = browser.storage.<storageType>.getBytesInUse(
  keys                      // null、文字列、または文字列の配列
)
```

`<storageType>` は次のいずれかのストレージタイプです: {{WebExtAPIRef("storage.sync", "sync")}}、{{WebExtAPIRef("storage.local", "local")}}、{{WebExtAPIRef("storage.session", "session")}}、または {{WebExtAPIRef("storage.managed", "managed")}}。

### 引数

- `keys`
  - : ストレージ容量を取得するアイテムを特定するキー（文字列または文字列の配列）です。空の配列を渡すと、0 が返されます。`null` または `undefined` を渡すと、ストレージ領域全体で使用されている容量が返されます。

### 返値

`keys` で指定されたオブジェクトが使用しているストレージ容量を表す整数 `bytesUsed` で履行される [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返します。操作に失敗した場合、Promise はエラーメッセージとともに拒否されます。

{{WebExtExamples}}

## ブラウザーの互換性

{{Compat}}

> [!NOTE]
> この API は Chromium の [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage)<sup>(英語)</sup> API に基づいています。このドキュメントは Chromium のコードにある [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) から派生したものです。
