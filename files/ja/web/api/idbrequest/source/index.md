---
title: IDBRequest.source
slug: Web/API/IDBRequest/source
l10n:
  sourceCommit: dcee5b3eed05921d697c4d3a8006725674da396b
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBRequest")}} インターフェイスの読み取り専用プロパティ **`source`** は、要求元 (インデックスやオブジェクトストアなど) を返します。({{domxref("IDBFactory.open")}} を呼んだときなど) 要求元が存在しない場合、`null` を返します。

{{AvailableInWorkers}}

## 値

{{domxref("IDBIndex")}}、{{domxref("IDBObjectStore")}}、{{domxref("IDBCursor")}} などの、要求元を表すオブジェクトです。

## 例

以下の例では、タイトルを指定してレコードを要求し、`onsuccess` で {{domxref("IDBObjectStore")}} から (`objectStoreTitleRequest.result` として参照できるようになった) 対応するレコードを取得し、レコードのプロパティ 1 個を更新し、更新したレコードを別の要求でオブジェクトストアに書き戻します。2 番目の要求の要求元が、開発者コンソールに記録されます。動く例全体は、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))

```js
const title = "Walk dog";

// 通常通りトランザクションを開始します
const objectStore = db
  .transaction(["toDoList"], "readwrite")
  .objectStore("toDoList");

// 指定した title をタイトルとして持つ TO-DO リストのオブジェクトを取得します
const objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = () => {
  // result として返されたデータオブジェクトを取得します
  const data = objectStoreTitleRequest.result;

  // オブジェクトの notified の値を "yes" に更新します
  data.notified = "yes";

  // アイテムをデータベースに書き戻す別の要求を生成します
  const updateTitleRequest = objectStore.put(data);

  // この要求の要求元を記録します
  console.log(`この要求の要求元は ${updateTitleRequest.source} です`);
  // 新しい要求が成功したら、また displayData() 関数を
  // 実行し、表示を更新します
  updateTitleRequest.onsuccess = () => {
    displayData();
  };
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
