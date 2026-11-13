---
title: "IDBDatabase: objectStoreNames プロパティ"
short-title: objectStoreNames
slug: Web/API/IDBDatabase/objectStoreNames
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("IndexedDB") }}

**`objectStoreNames`** は {{domxref("IDBDatabase")}} インターフェイスのプロパティで、現在接続しているデータベースの[オブジェクトストア](/ja/docs/Web/API/IndexedDB_API#gloss_object_store)名のリストを含む {{ domxref("DOMStringList") }} です。

{{AvailableInWorkers}}

### 値

現在接続しているデータベースの[オブジェクトストア](/ja/docs/Web/API/IndexedDB_API#gloss_object_store)名のリストを含む {{ domxref("DOMStringList") }}。

## 例

```js
// データベースを開く
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// これら 2 個のイベントハンドラーは､データベースが正常に開かれたか､失敗した時に動作します｡
DBOpenRequest.onerror = (event) => {
  note.innerHTML += "<li>データベースの読み込みに失敗しました｡</li>";
};

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += "<li>データベースを初期化しました｡</li>";

  // データベースを開いた結果を変数 db に保存します｡これは後でたくさん使います｡
  db = DBOpenRequest.result;

  // この行では接続したデータベースのオブジェクトストア名を記録します｡
  // { ['my-store-name'] } のようなオブジェクトのはずです。
  console.log(db.objectStoreNames);
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
