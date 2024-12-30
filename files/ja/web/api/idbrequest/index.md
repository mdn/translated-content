---
title: IDBRequest
slug: Web/API/IDBRequest
---

{{APIRef("IndexedDB")}}

**`IDBRequest`** は [IndexedDB API](/ja/docs/Web/API/IndexedDB_API) のインターフェイスで、データベースやデータベースオブジェクトへの非同期の要求の結果へのアクセスをイベントハンドラープロパティによって提供します。データベースの読み書きは、それぞれ要求を用いて行います。

要求オブジェクトは、最初は操作の結果の情報を何も持っていません。情報が得られるようになると、要求でイベントが発生し、`IDBRequest` のインスタンスのプロパティを通じて情報が得られるようになります。

全ての非同期操作は、すぐに {{domxref("IDBRequest")}} のインスタンスを返します。それぞれの要求は `'pending'` 状態に設定された `readyState` を持ちます。要求が完了するか失敗すると、これは `'done'` に変わります。状態が `done` に設定されると、それぞれの要求は `result` と `error` を返し、要求でイベントが発生します。状態が `pending` のままである間は、`result` や `error` にアクセスしようとすると `InvalidStateError` 例外が発生します。

平たく言えば、全ての非同期メソッドは要求オブジェクトを返します。要求が正常に完了すると、結果が `result` プロパティを通じて取得できるようになり、成功を表すイベント ({{domxref("IDBRequest.onsuccess")}}) が発生します。操作の実行中にエラーが発生すると、例外が `error` プロパティを通じて取得できるようになり、エラーイベント ({{domxref("IDBRequest.onerror")}}) が発生します。

{{domxref("IDBOpenDBRequest")}} インターフェイスは `IDBRequest` から派生しています。

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## インスタンスプロパティ

_{{domxref("EventTarget")}} からもプロパティを継承しています。_

- {{domxref("IDBRequest.error")}} {{readonlyInline}}
  - : 要求が失敗したとき {{domxref("DOMException")}} を返し、何が失敗したのかを示します。
- {{domxref("IDBRequest.result")}} {{readonlyInline}}
  - : 要求の結果を返します。要求が完了していない場合は結果は参照できず、`InvalidStateError` 例外が投げられます。
- {{domxref("IDBRequest.source")}} {{readonlyInline}}
  - : {{domxref("IDBIndex")}} や {{domxref("IDBObjectStore")}} などの要求元です。({{domxref("IDBFactory.open")}} を呼んだときなど) 要求元が存在しない場合は `null` を返します。
- {{domxref("IDBRequest.readyState")}} {{readonlyInline}}
  - : 要求の状態です。全ての要求は開始時 `pending` 状態です。要求が正常に完了するか、エラーが発生すると、状態は `done` に変わります。
- {{domxref("IDBRequest.transaction")}} {{readonlyInline}}
  - : 要求用のトランザクションです。例えばアップグレードが不要な場合に {{domxref("IDBFactory.open")}} から返される要求など、このプロパティが `null` になる要求もあります。(データベースに接続するだけなので、返すべきトランザクションがありません)

## インスタンスメソッド

_メソッドはありませんが、メソッドを {{domxref("EventTarget")}} から継承しています。_

## イベント

`addEventListener()` を用いるか、このインターフェイスの `oneventname` プロパティにイベントリスナーを代入することで、これらのイベントをリッスンします。

- [`error`](/ja/docs/Web/API/IDBRequest/error_event)
  - : エラーにより要求が失敗した場合に発生します。
    [`onerror`](/ja/docs/Web/API/IDBRequest/error_event) プロパティ経由でも利用可能です。
- [`success`](/ja/docs/Web/API/IDBRequest/success_event)
  - : `IDBRequest` が成功した場合に発生します。
    [`onsuccess`](/ja/docs/Web/API/IDBRequest/success_event) プロパティ経由でも利用可能です。

## 例

以下のコードスニペットでは、データベースを非同期で開いて要求を作成します。`onerror` および `onsuccess` 関数が、成功と失敗のケースを扱うために入っています。動く例全体は､[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリケーション ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/)) を見てください｡

```js
var db;

// 我々のデータベースを開きましょう
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// これら 2 個のイベントハンドラーは､データベースが正常に開かれたか､
// 失敗した時に動作します｡
DBOpenRequest.onerror = function (event) {
  note.innerHTML += "<li>データベースの読み込みに失敗しました。</li>";
};

DBOpenRequest.onsuccess = function (event) {
  note.innerHTML += "<li>データベースを初期化しました。</li>";

  // データベースを開いた結果を保存します｡
  db = DBOpenRequest.result;
};
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
