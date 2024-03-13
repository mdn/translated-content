---
title: IDBRequest.result
slug: Web/API/IDBRequest/result
l10n:
  sourceCommit: 4deda8776019992a83a25313817c0de3b16bef7a
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBRequest")}} インターフェイスの読み取り専用プロパティ **`result`** は、要求の結果を返します。要求が完了していない場合、結果は参照できず、`InvalidStateError` 例外が投げられます。

{{AvailableInWorkers}}

## 値

任意

## 例

この例では、タイトルを指定してレコードを要求し、`onsuccess` で {{domxref("IDBObjectStore")}} から (`objectStoreTitleRequest.result` として参照できるようになった) 対応するレコードを取得し、レコードのプロパティ 1 個を更新し、更新したレコードをオブジェクトストアに書き戻します。動く例全体は、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) を参照してください。([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))

```js
const title = "Walk dog";

// 通常通りトランザクションを開始します
const objectStore = db
  .transaction(["toDoList"], "readwrite")
  .objectStore("toDoList");

// この title をタイトルとして持つ TO-DO リストのオブジェクトを取得します
const objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = () => {
  // result として返されたデータオブジェクトを取得します
  const data = objectStoreTitleRequest.result;

  // オブジェクトの notified の値を "yes" に更新します
  data.notified = "yes";

  // アイテムをデータベースに書き戻す別のリクエストを生成します
  const updateTitleRequest = objectStore.put(data);

  // 新しいリクエストが成功したら、また displayData() 関数を
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
