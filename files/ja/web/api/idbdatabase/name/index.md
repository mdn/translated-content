---
title: IDBDatabase.name
slug: Web/API/IDBDatabase/name
---

{{ APIRef("IDBDatabase") }}

{{domxref("IDBDatabase")}} インターフェイスの **`name`** プロパティは、接続しているデータベース名を含む {{ domxref("DOMString")}} です。

## 構文

```js
db.name;
```

### 値

接続しているデータベース名を含む {{ domxref("DOMString")}}。

## 例

この例は接続しているデータベースと、DB の `version` と `name` プロパティを持つ {{domxref("IDBDatabase")}} オブジェクトの結果、そしてログを表示します。完全な例は、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリケーション ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))を見てください。

```js
// 我々のデータベースを開きます。
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// これら 2 個のイベントハンドラーは､データベースが正常に開かれたか､失敗した時に動作します｡
DBOpenRequest.onerror = function (event) {
  note.innerHTML += "<li>Error loading database.</li>";
};

DBOpenRequest.onsuccess = function (event) {
  note.innerHTML += "<li>Database initialised.</li>";

  // データベースを開いた結果を変数 db に保存します｡これは後でたくさん使います｡
  db = DBOpenRequest.result;

  // この行ではデータベースの名前を記録します。"toDoList" のはずです。
  console.log(db.name);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.IDBDatabase.name")}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- トランザクションの開始 : {{domxref("IDBDatabase")}}
- トランザクションの使用 : {{domxref("IDBTransaction")}}
- キーの範囲の設定 : {{domxref("IDBKeyRange")}}
- データの取得と変更 : {{domxref("IDBObjectStore")}}
- カーソルの使用 : {{domxref("IDBCursor")}}
- リファレンス例 : [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
