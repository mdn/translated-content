---
title: StorageArea.set()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set
---

{{AddonSidebar()}}

1 つ以上のアイテムをストレージ領域に保存または上書きします。

この API を使用して保存や上書きをする場合、{{WebExtAPIRef("storage.onChanged")}} イベントが発火します。

この関数は [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返す非同期関数です。

## 構文

```js
let settingItem = browser.storage.<storageType>.set(
  keys             // オブジェクト
)
```

`<storageType>` は [`storage.sync`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync) または [`storage.local`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/local) の書き込み可能なストレージタイプです。

### Parameters

- `keys`

  - : 保存したい 1 つ以上のキー/値ペアを持つオブジェクトを指定します。アイテムが既に存在する場合、値は上書きされます。

    値は [primitive 型](/ja/docs/Glossary/Primitive) (整数型・ブール型・文字列) または[`配列`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array) を指定でできます。

    通常は他の型 (`Function`, `Date`, `RegExp`, `Set`, `Map`, `ArrayBuffer` など)は格納できません。これらのサポートされていない型の中には空のオブジェクトとして復元されたり、 `set()` がエラーをスローする場合があります。この場合の挙動はブラウザに依存します。

### 返り値

成功時は引数の無い [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返します。 失敗した場合 promise はエラーメッセージと共にリジェクトされます。

## ブラウザーの互換性

{{Compat("webextensions.api.storage.StorageArea.set")}}

## 例

```js
function setItem() {
  console.log("OK");
}

function gotKitten(item) {
  console.log(`${item.kitten.name} has ${item.kitten.eyeCount} eyes`);
}

function gotMonster(item) {
  console.log(`${item.monster.name} has ${item.monster.eyeCount} eyes`);
}

function onError(error) {
  console.log(error);
}

// オブジェクトを2つ定義
var monster = {
  name: "Kraken",
  tentacles: true,
  eyeCount: 10,
};

var kitten = {
  name: "Moggy",
  tentacles: false,
  eyeCount: 2,
};

// オブジェクト2つを格納
browser.storage.local.set({ kitten, monster }).then(setItem, onError);

browser.storage.local.get("kitten").then(gotKitten, onError);
browser.storage.local.get("monster").then(gotMonster, onError);
```

{{WebExtExamples}}

> **メモ:** この API は Chromium の [`chrome.storage`](https://developer.chrome.com/extensions/storage) API に基づいています。また、このドキュメントは [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) における Chromium のコードに基づいています。
