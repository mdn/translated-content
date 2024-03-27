---
title: IDBRequest.error
slug: Web/API/IDBRequest/error
l10n:
  sourceCommit: 2a213654043eb25819c3f7e90b7853dfe1386716
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBRequest")}} インターフェイスの読み取り専用プロパティ **`error`** は、要求が失敗したときエラーを返します。

{{AvailableInWorkers}}

## 値

{{domxref("DOMException")}}、もしくはエラーがないときは `null` です。例外オブジェクトでは、以下のエラー名が返されます。

- `AbortError`
  - : トランザクションをアボートすると、進行中の全ての要求がこのエラーとなります。
- `ConstraintError`
  - : 制約を満たさないデータを追加しようとしたことを示します。これはデータストアやインデックスの作成用の例外タイプです。例えば、既に存在するキーを追加しようとすると、このエラーになります。
- `QuotaExceededError`
  - : 割り当てられたディスク領域を使い切り、ユーザーが容量の追加を拒否したことを示します。
- `UnknownError`
  - : データベース自体とは関係ない理由により操作が失敗したことを示します。たとえば、ディスクの I/O エラーによる失敗が該当します。
- `VersionError`
  - : データベースの現在のバージョンより低いバージョンでデータベースを開こうとしたことを示します。

{{ domxref("IDBRequest") }} オブジェクトに送られるエラーコードに加え、非同期の操作も例外を発生させる可能性があります。この表は要求の実行中に起こりうる問題を説明していますが、要求を生成するときに他の問題が発生する可能性もあります。たとえば、要求がまだ完了していないときに結果にアクセスすると、`InvalidStateError` 例外が投げられます。

## 例

以下の例では、レコードのタイトルを指定して要求し、`onsuccess` で {{domxref("IDBObjectStore")}} から (`objectStoreTitleRequest.result` で参照できるようになった) 対応するレコードを取得し、レコードのプロパティ 1 個を更新し、更新したレコードをオブジェクトストアに書き戻します。また、最後には要求が失敗した場合に発生したエラーを報告する `onerror` 関数もあります。動く例全体は、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))

```js
const title = "Walk dog";

// 通常通りトランザクションを開始します
const objectStore = db
  .transaction(["toDoList"], "readwrite")
  .objectStore("toDoList");

// 指定したタイトルの TO-DO リストを取得します
const objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = () => {
  // result として返されたデータオブジェクトを取得します
  const data = objectStoreTitleRequest.result;

  // オブジェクトの notified の値を "yes" に更新します
  data.notified = "yes";

  // アイテムをデータベースに書き戻すための新たな要求を生成します
  const updateTitleRequest = objectStore.put(data);

  // この新たな要求が成功したら、再び displayData() 関数を
  // 実行し、表示を更新します
  updateTitleRequest.onsuccess = () => {
    displayData();
  };
};

objectStoreTitleRequest.onerror = () => {
  // 要求でエラーが発生したら、発生したエラーを記録します
  console.log(
    `データの取得中にエラーが発生しました: ${objectStoreTitleRequest.error}`,
  );
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
