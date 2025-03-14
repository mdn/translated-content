---
title: IDBVersionChangeEvent
slug: Web/API/IDBVersionChangeEvent
l10n:
  sourceCommit: 066257cb0d23e29e269703450e4b1216a65e3b26
---

{{APIRef("IndexedDB")}}

[IndexedDB API](/ja/docs/Web/API/IndexedDB_API) の **`IDBVersionChangeEvent`** インターフェイスは、{{domxref("IDBOpenDBRequest.upgradeneeded_event", "onupgradeneeded")}} イベントハンドラー関数の結果として、データベースのバージョンが変更されたことを表します。

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("IDBVersionChangeEvent.IDBVersionChangeEvent", "IDBVersionChangeEvent()")}}
  - : データベースのバージョンが変更されたことを表す新しい `IDBVersionChangeEvent` オブジェクトを作成して返します。

## インスタンスプロパティ

_親の {{domxref("Event")}} インターフェイスからもプロパティを継承します。_

- {{ domxref("IDBVersionChangeEvent.oldVersion") }} {{ReadOnlyInline}}
  - : データベースの古いバージョンを返します。
- {{ domxref("IDBVersionChangeEvent.newVersion") }} {{ReadOnlyInline}}
  - : データベースの新しいバージョンを返します。

## インスタンスメソッド

_固有のメソッドはありませんが、親の {{domxref("Event")}} インターフェイスからメソッドを継承します。_

## 例

以下のコードスニペットでは、データベースを開く要求をし、成功した場合と失敗した場合用のハンドラーを用意します。バージョンが変更された時 (`upgradeneeded` イベントの後)、`success` イベントは `IDBVersionChangeEvent` インターフェイスを実装します。動く例全体は、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))

```js
const note = document.querySelector("ul");

// 我々のデータベースのバージョン 4 を開きましょう
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// これらの 2 個のイベントハンドラーは、データベースが正常に開かれた時と、そうでない時に動きます
DBOpenRequest.onerror = (event) => {
  note.innerHTML += "<li>データベースの読み込み中にエラーが発生しました。</li>";
};

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += "<li>データベースの初期化が完了しました。</li>";

  // データベースを開いた結果を変数 db に格納します。これは後で、トランザクションの開始などたくさん使います。
  const db = DBOpenRequest.result;
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
