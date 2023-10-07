---
title: IDBRequest.transaction
slug: Web/API/IDBRequest/transaction
l10n:
  sourceCommit: d42b609444efb915ab46117f59985d67dda21eb6
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBRequest")}} インターフェイスの読み取り専用プロパティ **`transaction`** は、要求のトランザクション、すなわちこの要求がその中で生成されたトランザクションを返します。

このプロパティは、{{domxref("IDBFactory.open")}} が返した要求 (データベースに接続するだけなので、返すべきトランザクションが存在しない) など、トランザクション内で生成されていない要求では `null` になり得ます。データベースを開くときにバージョンの更新が必要な場合は、{{domxref("IDBOpenDBRequest.upgradeneeded_event", "upgradeneeded")}} イベントハンドラーの実行中、**`transaction`** プロパティは {{domxref("IDBTransaction.mode", "mode")}} が `"versionchange"` と等しい {{domxref("IDBTransaction")}} となり、既存のオブジェクトストアやインデックスにアクセスしたり、更新を中止したりするのに使用できます。更新の後は、**`transaction`** プロパティは再び `null` になるでしょう。

{{AvailableInWorkers}}

## 値

{{domxref("IDBTransaction")}} です。

## 例

以下の例では、指定のタイトルのレコードを要求し、`onsuccess` で {{domxref("IDBObjectStore")}} から (`objectStoreTitleRequest.result` として参照できるようになった) 対応するレコードを取得し、レコードのプロパティ 1 個を更新し、更新したレコードを別の要求でオブジェクトストアに書き戻します。要求元を開発者コンソールに記録します。両方とも同じトランザクションに由来しています。動く例全体は、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))

```js
const title = "Walk dog";

// 通常通りトランザクションを開始します
const objectStore = db
  .transaction(["toDoList"], "readwrite")
  .objectStore("toDoList");

// 指定の title をタイトルとして持つ TO-DO リストのオブジェクトを取得します
const objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = () => {
  // result として返されたデータオブジェクトを取得します
  const data = objectStoreTitleRequest.result;

  // オブジェクトの notified の値を "yes" に更新します
  data.notified = "yes";

  // アイテムをデータベースに書き戻す別の要求を生成します
  const updateTitleRequest = objectStore.put(data);

  // この要求が由来するトランザクションを記録します
  console.log(
    `この要求が由来するトランザクションは ${updateTitleRequest.transaction} です`,
  );

  // 新しい要求が成功したら、また displayData() 関数を
  // 実行し、表示を更新します
  updateTitleRequest.onsuccess = () => {
    displayData();
  };
};
```

この例では、**`transaction`** プロパティをバージョンの更新中に既存のオブジェクトストアへアクセスするのに使う方法を示します。

```js
const openRequest = indexedDB.open("db", 2);
console.log(openRequest.transaction); // "null" が記録されるはずです

openRequest.onupgradeneeded = (event) => {
  console.log(openRequest.transaction.mode); // "versionchange" が記録されるはずです
  const db = openRequest.result;
  if (event.oldVersion < 1) {
    // 新規データベースなので、オブジェクトストア "books" を作成します。
    db.createObjectStore("books");
  }
  if (event.oldVersion < 2) {
    // v1 データベースからの更新です。オブジェクトストア "books" の "title" にインデックスを追加します。
    const bookStore = openRequest.transaction.objectStore("books");
    bookStore.createIndex("by_title", "title");
  }
};

openRequest.onsuccess = () => {
  console.log(openRequest.transaction); // "null" が記録されるはずです
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- トランザクションの開始: {{domxref("IDBDatabase")}}
- トランザクションの使用: {{domxref("IDBTransaction")}}
- キーの範囲の設定: {{domxref("IDBKeyRange")}}
- データの取得と変更: {{domxref("IDBObjectStore")}}
- カーソルの使用: {{domxref("IDBCursor")}}
- リファレンス例: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
