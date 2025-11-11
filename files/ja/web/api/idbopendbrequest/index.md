---
title: IDBOpenDBRequest
slug: Web/API/IDBOpenDBRequest
l10n:
  sourceCommit: 066257cb0d23e29e269703450e4b1216a65e3b26
---

{{APIRef("IndexedDB")}}

IndexedDB API の **`IDBOpenDBRequest`** インターフェイスは、固有のイベントハンドラー属性を用い、({{domxref("IDBFactory.open")}} や {{domxref("IDBFactory.deleteDatabase")}} により行われた) データベースのオープンや削除の要求の結果へのアクセスを提供します。

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## インスタンスプロパティ

_親の {{domxref("IDBRequest")}} および {{domxref("EventTarget")}} からプロパティを継承しています。_

## インスタンスメソッド

_メソッドはありませんが、親の {{domxref("IDBRequest")}} および {{domxref("EventTarget")}} からメソッドを継承しています。_

## イベント

_親インターフェイスの {{DOMxRef("IDBRequest")}} および {{DOMxRef("EventTarget")}} で定義されているイベントも `IDBOpenDBRequest` オブジェクトで発生させることができます。_

`addEventListener()` を用いるか、このインターフェイスの `oneventname` プロパティにイベントリスナーを代入することで、一般のイベントおよび固有のイベントを監視できます。

このインターフェイスに固有のイベントは、以下です。

- [`blocked`](/ja/docs/Web/API/IDBOpenDBRequest/blocked_event)
  - : データベースへのオープン中の接続が、同じデータベースの `versionchange` トランザクションをブロックしているとき発火します。[`onblocked`](/ja/docs/Web/API/IDBOpenDBRequest/blocked_event) プロパティを用いても利用可能です。
- [`upgradeneeded`](/ja/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event)
  - : 現在のバージョンよりも高いバージョン番号でデータベースをオープンしようとしたとき発火します。[`onupgradeneeded`](/ja/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event) プロパティを用いても利用可能です。

## 例

この例では、高いバージョン番号のデータベースをを読み込もうとした場合に、`onupgradeneeded` ハンドラーによりデータベースの構造を更新します。動く例全体は、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリケーションを見てください。([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))

```js
let db;

// 我々のデータベースを開きましょう
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// これらのイベントハンドラーは、開かれているデータベースを扱います
DBOpenRequest.onerror = (event) => {
  note.innerHTML += "<li>データベースの読み込み中にエラーが発生しました。</li>";
};

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += "<li>データベースの初期化が完了しました。</li>";

  // データベースを開いた結果を変数 db に格納します。
  // これは後でたくさん使います。
  db = DBOpenRequest.result;

  // IDB に既に入っている TO-DO リストのデータ全てを
  // タスクリストに入れるため、displayData() 関数を実行します。
  displayData();
};

// このイベントは、データベースがまだ作成されていないか、
// 上の window.indexedDB.open の行で新しいバージョン番号が
// 指定されたかで、新しいバージョンのデータベースを
// 作成する必要がある場合を扱います。
// これは最近のブラウザーでしか実装されていません。
DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = (event) => {
    note.innerHTML +=
      "<li>データベースの読み込み中にエラーが発生しました｡</li>";
  };

  // このデータベース用の objectStore を作成します
  const objectStore = db.createObjectStore("toDoList", {
    keyPath: "taskTitle",
  });

  // objectStore にどのようなアイテムを保存するかを定義します

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });
  objectStore.createIndex("notified", "notified", { unique: false });
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- トランザクションの開始s: {{domxref("IDBDatabase")}}
- トランザクションの使用: {{domxref("IDBTransaction")}}
- キーの範囲の設定: {{domxref("IDBKeyRange")}}
- データの取得と変更: {{domxref("IDBObjectStore")}}
- カーソルの使用: {{domxref("IDBCursor")}}
- リファレンス例: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
