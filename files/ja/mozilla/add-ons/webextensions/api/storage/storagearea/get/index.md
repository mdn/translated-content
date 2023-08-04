---
title: StorageArea.get()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get
---

{{AddonSidebar()}}

ストレージ領域から 1 つ以上のアイテムを取得します。

この関数は [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返す非同期関数です。

## 構文

```
let gettingItem = browser.storage.<storageType>.get(
  keys    // null, string, object or array of strings
)
```

`<storageType>` は [`storage.sync`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync) または [`storage.local`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/local) の書き込み可能なストレージタイプです。

### 引数

- `keys`
  - : 取得したいアイテムのキー(文字列・文字列の配列またはデフォルト値を指定するオブジェクト)を指定します。空文字列・オブジェクト・配列を指定すると空のオブジェクトが取得できます。 `null` か未定義の値を指定するとストレージ全体のアイテムが取得できます。

### 返り値

成功時は `keys` で指定されたストレージ領域内のアイテム全てを含む `results` オブジェクトを引数に持つ [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返します。 失敗した場合 promise はエラーメッセージと共にリジェクトされます。

> **警告:** 52 より前の Firefox バージョンのコンテンツスクリプトで使用する場合、 `browser.storage.local.get()` で返される Promise は 1 つのオブジェクトを持つ配列を引数に持ちます。配列内のオブジェクトは上記に記述したようにストレージ領域内の `keys` を持っています。 The Promise is correctly fulfilled with an Object when used in the background context (background scripts, popups, options pages, etc.). When this API is used as `chrome.storage.local.get()`, it correctly passes an Object to the callback function.

## ブラウザーの互換性

{{Compat("webextensions.api.storage.StorageArea.get")}}

## 例

あらかじめストレージ領域に 2 つのアイテムを格納しておきます。

```js
// "kitten" と "monster" を格納
browser.storage.local.set({
  kitten: { name: "Mog", eats: "mice" },
  monster: { name: "Kraken", eats: "people" },
});
```

次に promise で使う成功時と失敗時のハンドラを定義しておきます。

```js
function onGot(item) {
  console.log(item);
}

function onError(error) {
  console.log(`Error: ${error}`);
}
```

`keys` を指定せずに呼び出すと全て取得します。

```js
let gettingItem = browser.storage.local.get();
gettingItem.then(onGot, onError);

// -> Object { kitten: Object, monster: Object }
```

空のキーを指定すると何も返しません。

```js
// 空の配列を指定すると何も返らない
let gettingItem = browser.storage.local.get([]);
gettingItem.then(onGot, onError);

// -> Object { }
```

オブジェクト名を指定すると、合致するものを返します。

```js
let gettingItem = browser.storage.local.get("kitten");
gettingItem.then(onGot, onError);

// -> Object { kitten: Object }
```

オブジェクト名の配列を指定すると合致するものを全て返します。

```js
let gettingItem = browser.storage.local.get([
  "kitten",
  "monster",
  "grapefruit",
]);
gettingItem.then(onGot, onError);

// -> Object { kitten: Object, monster: Object }
```

オブジェクト名をキー、デフォルト値を value に指定したオブジェクトを指定する場合

```js
let gettingItem = browser.storage.local.get({
  kitten: "no kitten",
  monster: "no monster",
  grapefruit: {
    name: "Grape Fruit",
    eats: "Water",
  },
});

// -> Object { kitten: Object, monster: Object, grapefruit: Object }
```

{{WebExtExamples}}

### Chrome での例

```js
chrome.storage.local.get("kitten", function (items) {
  console.log(items.kitten); // -> {name:"Mog", eats:"mice"}
});
```

Or with an arrow function

```js
chrome.storage.local.get("kitten", (items) => {
  console.log(items.kitten); // -> {name:"Mog", eats:"mice"}
});
```

> **メモ:** この API は Chromium の [`chrome.storage`](https://developer.chrome.com/extensions/storage) API に基づいています。また、このドキュメントは [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) における Chromium のコードに基づいています。Microsoft Edge での実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従っています。
