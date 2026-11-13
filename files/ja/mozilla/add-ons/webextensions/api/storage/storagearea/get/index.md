---
title: StorageArea.get()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get
l10n:
  sourceCommit: 81c80db5f9f98dd2ac197474829fe52cd75acf1b
---

ストレージ領域から 1 つ以上のアイテムを取得します。

この関数は [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返す非同期関数です。

## 構文

```js-nolint
let results = browser.storage.<storageType>.get(
  keys    // null、文字列、オブジェクト、または文字列の配列
)
```

`<storageType>` は、書き込み可能なストレージ種別であり、{{WebExtAPIRef("storage.local")}}、{{WebExtAPIRef("storage.session")}}、{{WebExtAPIRef("storage.sync")}} のいずれかです。

### 引数

- `keys`
  - : ストレージから取得するアイテムを特定するキー（`string`）、キーの配列、またはデフォルト値を指定するオブジェクトです。空のオブジェクトまたは配列を渡すと、空のオブジェクトが返されます。`null` または `undefined` を渡すと、ストレージ内のすべてのアイテムが返されます。

### 返値

`keys` で指定され、ストレージ領域内に存在する各キーと値のペアを含む `results` オブジェクトで履行される [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) です。`keys` がオブジェクトの場合、ストレージ内にないキーには `keys` オブジェクトで指定されたデフォルト値が使用されます。

操作に失敗した場合、Promise はエラーメッセージとともに拒否されます。

managed ストレージが設定されていない場合、`undefined` が返されます。

> [!WARNING]
> Firefox では、拡張機能の managed ストレージが[ネイティブマニフェスト](/ja/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#managed_storage_manifests)または [`3rdparty` エンタープライズポリシー](https://mozilla.github.io/policy-templates/#3rdparty)<sup>(英語)</sup>で設定されていない場合、この関数で managed ストレージにアクセスすると例外が発生します（[Firefox バグ 1868153](https://bugzil.la/1868153)を参照）。エラーを捕捉すれば、この問題を回避できます。この問題は、マニフェストキー [`storage.managed_schema`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/storage) に対応していないことに関連しています（[Firefox バグ 1771731](https://bugzil.la/1771731)を参照）。

## 例

ストレージに次の 2 つのアイテムが格納されているとします。

```js
// ストレージに "kitten" と "monster" の 2 つのアイテムが格納されています
browser.storage.local.set({
  kitten: { name: "Mog", eats: "mice" },
  monster: { name: "Kraken", eats: "people" },
});
```

プロミスの成功時と失敗時のハンドラーを定義します。

```js
function onGot(item) {
  console.log(item);
}

function onError(error) {
  console.log(`Error: ${error}`);
}
```

`keys` 引数を指定せずに、すべてのアイテムを取得します。

```js
let gettingItem = browser.storage.local.get();
gettingItem.then(onGot, onError);

// -> Object { kitten: Object, monster: Object }
```

空の `keys` 引数を渡すと、何も取得されません。

```js
// 空の配列を渡すと、何も取得されません
let gettingItem = browser.storage.local.get([]);
gettingItem.then(onGot, onError);

// -> Object { }
```

オブジェクト名を指定して、一致するアイテムを取得します。

```js
let gettingItem = browser.storage.local.get("kitten");
gettingItem.then(onGot, onError);

// -> Object { kitten: Object }
```

オブジェクト名の配列を指定して、一致するアイテムをすべて取得します。

```js
let gettingItem = browser.storage.local.get([
  "kitten",
  "monster",
  "grapefruit",
]);
gettingItem.then(onGot, onError);

// -> Object { kitten: Object, monster: Object }
```

オブジェクト名をキー、デフォルト値を値とするオブジェクトを指定して取得します。

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
chrome.storage.local.get("kitten", (items) => {
  console.log(items.kitten); // -> {name:"Mog", eats:"mice"}
});
```

Promise を使用する例です。

```js
let gettingItem = new Promise((resolve) =>
  chrome.storage.local.get("kitten", resolve),
);
gettingItem.then(onGot); // -> Object { kitten: Object }
```

## ブラウザーの互換性

{{Compat}}

> [!NOTE]
> この API は Chromium の [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage)<sup>(英語)</sup> API に基づいています。このドキュメントは Chromium のコードにある [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) から派生したものです。
