---
title: StorageArea.getKeys()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/getKeys
l10n:
  sourceCommit: 81c80db5f9f98dd2ac197474829fe52cd75acf1b
---

ストレージ領域内のすべてのアイテムのキーを取得します。

## 構文

```js-nolint
let results = browser.storage.<storageType>.getKeys();
```

`<storageType>` はストレージ種別で、{{WebExtAPIRef("storage.sync", "sync")}}、{{WebExtAPIRef("storage.local", "local")}}、{{WebExtAPIRef("storage.session", "session")}}、{{WebExtAPIRef("storage.managed", "managed")}} のいずれかです。

### 引数

このメソッドに引数はありません。

### 返値

ストレージアイテムのキーを含む配列で履行される [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) です。

操作に失敗した場合、このプロミスはエラーメッセージとともに拒否されます。

managed ストレージが設定されていない場合、`undefined` が返されます。

> [!WARNING]
> Firefox では、拡張機能の managed ストレージが [ネイティブマニフェスト](/ja/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#managed_storage_manifests)または [`3rdparty` エンタープライズポリシー](https://mozilla.github.io/policy-templates/#3rdparty)で設定されていない場合、この関数で managed ストレージにアクセスすると例外が発生します（[Firefox バグ 1868153](https://bugzil.la/1868153)を参照）。エラーを捕捉すれば、この問題を回避できます。この問題は、マニフェストキー [`storage.managed_schema`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/storage) に対応していないことに関連しています（[Firefox バグ 1771731](https://bugzil.la/1771731)を参照）。

## 例

ストレージに次の 2 つのアイテムが格納されているとします。

```js
// ストレージには "kitten" と "monster" の 2 つのアイテムが格納されています
browser.storage.local.set({
  kitten: { name: "Mog", eats: "mice" },
  monster: { name: "Kraken", eats: "people" },
});
```

storage.local 内のすべてのアイテムのキーを取得し、結果をログに出力します。

```js
browser.storage.local
  .getKeys()
  .then((keys) => console.log(keys)) // [ "kitten", "monster" ]
  .catch((err) => console.error(`Error: ${err}`));
```

{{WebExtExamples}}

## ブラウザーの互換性

{{Compat}}
