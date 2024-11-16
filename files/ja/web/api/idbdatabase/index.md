---
title: IDBDatabase
slug: Web/API/IDBDatabase
l10n:
  sourceCommit: 89c582f832c8700f7bccef50dabea59350fe3906
---

{{APIRef("IndexedDB")}}

IndexedDB API の `IDBDatabase` インターフェイスは、[データベースへの接続](/ja/docs/Web/API/IndexedDB_API#%データベースへの接続)を提供します。`IDBDatabase` オブジェクトで、データベースの[トランザクション](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#トランザクション)を開き、データベースのオブジェクト（データ）を生成したり、操作したり、削除したりできます。このインターフェイスはデータベースのバージョンを取得したり、統合したりする唯一の方法を提供します。

{{AvailableInWorkers}}

> [!NOTE]
> IndexedDB 内で行う全ての操作は、データベース内のデータとの作用を表す[トランザクション](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#トランザクション)の文脈で起こります。IndexedDB 内の全てのオブジェクト (オブジェクトストア、インデックス、カーソルを含みます) は、特定のトランザクションに紐づいています。そのため、トランザクション外では、コマンドを実行したり、データにアクセスしたり、何かを開いたりできません。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{domxref("IDBDatabase.name")}} {{ReadOnlyInline}}
  - : 文字列で、接続しているデータベース名が入ります。
- {{domxref("IDBDatabase.version")}} {{ReadOnlyInline}}
  - : 64 ビット整数で、接続しているデータベースのバージョンが入ります。データベースが初めて作られた場合、この属性は空文字列です。
- {{domxref("IDBDatabase.objectStoreNames")}} {{ReadOnlyInline}}
  - : 接続しているデータベースの[オブジェクトストア](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%82%B9%E3%83%88%E3%82%A2)名のリストを含む{{ domxref("DOMStringList") }}。

## インスタンスメソッド

[EventTarget](/ja/docs/Web/API/EventTarget) から継承しています。

- {{domxref("IDBDatabase.close()")}}
  - : 即座に応答して、別スレッドでデータベースを閉じます。
- {{domxref("IDBDatabase.createObjectStore()")}}
  - : 新しくオブジェクトストアかインデックスを生成して返します。
- {{domxref("IDBDatabase.deleteObjectStore()")}}
  - : 接続中のデータベース内の与えられた名前のオブジェクトストアを、参照しているインデックスとともに削除します。
- {{domxref("IDBDatabase.transaction()")}}
  - : オブジェクトストアにアクセスできる{{domxref("IDBTransaction.objectStore")}}メソッドを含むトランザクションオブジェクト ({{domxref("IDBTransaction")}}) を即座に返します。別スレッドで実行されます。

## イベント

`addEventListener()` を用いるか、このインターフェイスの `oneventname` プロパティにイベントリスナーを代入することで、これらのイベントを待ち受けできます。

- [`close`](/ja/docs/Web/API/IDBDatabase/close_event)

  - : データベースへの接続が予期せず閉じられたとき発行されるイベントです。

- [`versionchange`](/ja/docs/Web/API/IDBDatabase/versionchange_event)
  - : データベースの構造の変更が要求されたとき発行されるイベントです。

{{domxref("IDBTransaction")}} からのイベントバブリングにより、`IDBDatabase` で以下のイベントが利用可能です。

- `IDBTransaction` [`abort`](/ja/docs/Web/API/IDBTransaction/abort_event)
  - : トランザクションが中止されたときに発行されるイベントです。
- `IDBTransaction` [`error`](/ja/docs/Web/API/IDBTransaction/error_event)
  - : 要求がエラーを返し、イベントが接続オブジェクトにバブリングしたとき発行されるイベントです。

## 例

次のコードスニペットでは、データベースを非同期で開き ({{domxref("IDBFactory")}})、成功と失敗の場合にイベントを登録し、アップグレードが必要な場合には、新しいオブジェクトストアを生成しています ({{ domxref("IDBdatabase") }})。 完璧に動作する例は、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリケーション ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/)) を見てください。

```js
// データベースを開く
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// これら 2 個のイベントハンドラーは､データベースが正常に開かれたか､失敗した時に動作します｡
DBOpenRequest.onerror = (event) => {
  note.innerHTML += "<li>データベースの読み込みに失敗しました｡</li>";
};

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += "<li>データベースを初期化しました｡</li>";

  // データベースを開いた結果を変数 db に保存します｡
  // これは後でたくさん使います｡
  db = DBOpenRequest.result;

  // displayData() 関数を実行し、タスクリストに既に IDB にある全ての to-do リストデータを入れます。
  displayData();
};

// このイベントハンドラーは、新しいバージョンのデータベースの作成が必要なことを表すイベントを処理します。
// これは、データベースが作成されていないときや、上の行の window.indexedDB.open に
// 新しいバージョン番号が渡されたときです。

DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = (event) => {
    note.innerHTML += "<li>データベースの読み込みに失敗しました｡</li>";
  };

  // IDBDatabase.createObjectStore を用いてデータベースにオブジェクトストアを作成します。

  const objectStore = db.createObjectStore("toDoList", {
    keyPath: "taskTitle",
  });

  // オブジェクトストアにどのようなデータ項目が入るかを定義します。

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });

  objectStore.createIndex("notified", "notified", { unique: false });

  note.innerHTML += "<li>オブジェクトストアが作成されました。</li>";
};
```

次の行は、データベースでトランザクションを開いて、そしてオブジェクトストアを開いて、中のデータを操作しています。

```js
const objectStore = db
  .transaction("toDoList", "readwrite")
  .objectStore("toDoList");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- トランザクションの開始 : {{domxref("IDBDatabase")}}
- トランザクションの使用 : {{domxref("IDBTransaction")}}
- キーの範囲の設定 : {{domxref("IDBKeyRange")}}
- データの取得と変更 : {{domxref("IDBObjectStore")}}
- カーソルの使用 : {{domxref("IDBCursor")}}
- リファレンス例 : [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
