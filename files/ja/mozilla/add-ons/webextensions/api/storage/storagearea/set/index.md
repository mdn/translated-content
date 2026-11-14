---
title: StorageArea.set()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set
l10n:
  sourceCommit: 81c80db5f9f98dd2ac197474829fe52cd75acf1b
---

1 つ以上のアイテムをストレージ領域に保存または上書きします。

この API で値を保存または更新すると、{{WebExtAPIRef("storage.onChanged")}} イベントが発生します。

[`sync`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync) ストレージ領域に値を保存する場合、ブラウザーは拡張機能が保存できるデータ量にクォータを適用します。詳しくは[同期データのストレージクォータ](/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync#storage_quotas_for_sync_data)を参照してください。

この関数は [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返す非同期関数です。

## 構文

```js-nolint
let settingItem = browser.storage.<storageType>.set(
  keys             // オブジェクト
)
```

`<storageType>` は、書き込み可能なストレージ種別であり、{{WebExtAPIRef("storage.local")}}、{{WebExtAPIRef("storage.session")}}、{{WebExtAPIRef("storage.sync")}} のいずれかです。

### 引数

- `keys`
  - : 保存するキーと値のペアを 1 つ以上含むオブジェクトです。アイテムがストレージに存在する場合、その値が更新されます。

    値には、[プリミティブ](/ja/docs/Glossary/Primitive)（数値、論理値、文字列など）、{{jsxref("Array")}}、または {{jsxref("Object")}} 型を指定できます。

    通常、`Function`、`Date`、`RegExp`、`Set`、`Map`、`ArrayBuffer` などの他の型は保存できません。サポートされていない型のうち、空のオブジェクトとして復元されるものもあれば、`set()` でエラーが発生するものもあります。この動作はブラウザーによって異なります。

> [!NOTE]
> ストレージからキーを削除するには、{{WebExtAPIRef("storage.storageArea.remove")}} を使用してください。値を値なしとして上書きするには、`key: null` のように `null` を使用してください。

### 返値

操作が成功した場合は引数なしで履行される {{jsxref("Promise")}} です。操作に失敗した場合、このプロミスはエラーメッセージとともに拒否されます。

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

// 2 つのオブジェクトを定義
let monster = {
  name: "Kraken",
  tentacles: true,
  eyeCount: 10,
};

let kitten = {
  name: "Moggy",
  tentacles: false,
  eyeCount: 2,
};

// オブジェクトを格納
browser.storage.local.set({ kitten, monster }).then(setItem, onError);

browser.storage.local.get("kitten").then(gotKitten, onError);
browser.storage.local.get("monster").then(gotMonster, onError);
```

{{WebExtExamples}}

## ブラウザーの互換性

{{Compat}}

> [!NOTE]
> この API は Chromium の [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage)<sup>(英語)</sup> API に基づいています。このドキュメントは Chromium のコードにある [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) から派生したものです。
