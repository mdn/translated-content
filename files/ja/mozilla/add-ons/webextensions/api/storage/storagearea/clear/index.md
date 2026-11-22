---
title: StorageArea.clear()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/clear
l10n:
  sourceCommit: 81c80db5f9f98dd2ac197474829fe52cd75acf1b
---

全てのアイテムをストレージ領域から削除します。

この関数は [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返す非同期関数です。

## 構文

```js-nolint
let clearing = browser.storage.<storageType>.clear()
```

`<storageType>` は、書き込み可能なストレージ種別であり、{{WebExtAPIRef("storage.local")}}、{{WebExtAPIRef("storage.session")}}、{{WebExtAPIRef("storage.sync")}} のいずれかです。

### 引数

なし

### 返値

操作に成功した場合は引数なしで履行される [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) です。操作に失敗した場合、このプロミスはエラーメッセージとともに拒否されます。

## 例

```js
function onCleared() {
  console.log("OK");
}

function onError(e) {
  console.log(e);
}

let clearStorage = browser.storage.local.clear();
clearStorage.then(onCleared, onError);
```

{{WebExtExamples}}

## ブラウザーの互換性

{{Compat}}

> [!NOTE]
> この API は Chromium の [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage)<sup>(英語)</sup> API に基づいています。このドキュメントは Chromium のコードにある [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) から派生したものです。
