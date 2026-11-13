---
title: StorageArea.remove()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/remove
l10n:
  sourceCommit: 81c80db5f9f98dd2ac197474829fe52cd75acf1b
---

1 つ以上のアイテムをストレージ領域から削除します。

この関数は [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返す非同期関数です。

## 構文

```js-nolint
let removingItem = browser.storage.<storageType>.remove(
  keys             // 文字列または文字列の配列
)
```

`<storageType>` は、書き込み可能なストレージ種別であり、{{WebExtAPIRef("storage.local")}}、{{WebExtAPIRef("storage.session")}}、{{WebExtAPIRef("storage.sync")}} のいずれかです。

### 引数

- `keys`
  - : 削除するアイテムのキー（文字列または文字列の配列）です。

### 返値

操作に成功した場合は引数なしで履行される [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) です。操作に失敗した場合、このプロミスはエラーメッセージとともに拒否されます。

## 例

次の例では、アイテムを 1 つ削除します。

```js
function onRemoved() {
  console.log("OK");
}

function onError(e) {
  console.log(e);
}

let removeKitten = browser.storage.sync.remove("kitten");
removeKitten.then(onRemoved, onError);
```

{{WebExtExamples}}

## ブラウザーの互換性

{{Compat}}

> [!NOTE]
> この API は Chromium の [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage)<sup>(英語)</sup> API に基づいています。このドキュメントは Chromium のコードにある [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) から派生したものです。
