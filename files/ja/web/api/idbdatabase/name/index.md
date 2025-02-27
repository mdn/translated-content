---
title: "IDBDatabase: name プロパティ"
short-title: name
slug: Web/API/IDBDatabase/name
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("IndexedDB") }}

**`name`** は {{domxref("IDBDatabase")}} インターフェイスのプロパティで、接続しているデータベース名を含む文字列です。

{{AvailableInWorkers}}

## 値

接続しているデータベース名を含む文字列です。

## 例

この例は接続しているデータベースと、DB の `version` と `name` プロパティを持つ {{domxref("IDBDatabase")}} オブジェクトの結果、そしてログを表示します。完全な例は、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリケーション（[動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/)）を見てください。

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

  // この行ではデータベースの名前をログ出力します。 "toDoList" のはずです。
  console.log(db.name);
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
