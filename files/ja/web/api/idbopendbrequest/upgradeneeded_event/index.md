---
title: "IDBOpenDBRequest: upgradeneeded イベント"
slug: Web/API/IDBOpenDBRequest/upgradeneeded_event
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef("IndexedDB")}}

`upgradeneeded` イベントは、現在のバージョンより高いバージョン番号でデータベースを開こうとしたとき発火します。

このイベントはキャンセルできず、バブリングしません。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドでイベント名を使うか、イベントハンドラープロパティを設定します。

```js
addEventListener('upgradeneeded', (event) => { });

onupgradeneeded = (event) => { };
```

## イベント型

{{domxref("IDBVersionChangeEvent")}} です。{{domxref("Event")}} を継承します。

{{InheritanceDiagram("IDBVersionChangeEvent")}}

## イベントプロパティ

_親の {{domxref("Event")}} インターフェイスからもプロパティを継承します。_

- {{ domxref("IDBVersionChangeEvent.oldVersion") }} {{ReadOnlyInline}}
  - : データベースの古いバージョンを返します。
- {{ domxref("IDBVersionChangeEvent.newVersion") }} {{ReadOnlyInline}}
  - : データベースの新しいバージョンを返します。

## 例

この例ではデータベースを開き、`upgradeneeded` イベントの処理としてオブジェクトストアに必要な更新を行います。

```js
// データベースを開きます
const dBOpenRequest = window.indexedDB.open('toDoList', 4);

dBOpenRequest.addEventListener('upgradeneeded', (event) => {
  const db = event.target.result;
  console.log(`バージョン ${db.version} に更新します`);

  // このデータベース用の objectStore を作ります
  const objectStore = db.createObjectStore('toDoList', { keyPath: 'taskTitle' });

  // objectStore に保存するデータアイテムを定義します
  objectStore.createIndex('hours', 'hours', { unique: false });
  objectStore.createIndex('minutes', 'minutes', { unique: false });
  objectStore.createIndex('day', 'day', { unique: false });
  objectStore.createIndex('month', 'month', { unique: false });
  objectStore.createIndex('year', 'year', { unique: false });
});
```

これは同じ例ですが、`onupgradeneeded` イベントハンドラープロパティを用います。

```js
// データベースを開きます
const dBOpenRequest = window.indexedDB.open('toDoList', 4);

dBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;
  console.log(`バージョン ${db.version} に更新します`);

  // このデータベース用の objectStore を作ります
  const objectStore = db.createObjectStore('toDoList', { keyPath: 'taskTitle' });

  // objectStore に保存するデータアイテムを定義します
  objectStore.createIndex('hours', 'hours', { unique: false });
  objectStore.createIndex('minutes', 'minutes', { unique: false });
  objectStore.createIndex('day', 'day', { unique: false });
  objectStore.createIndex('month', 'month', { unique: false });
  objectStore.createIndex('year', 'year', { unique: false });
};
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
