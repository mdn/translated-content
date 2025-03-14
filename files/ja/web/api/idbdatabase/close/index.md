---
title: "IDBDatabase: close() メソッド"
short-title: close()
slug: Web/API/IDBDatabase/close
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("IndexedDB") }}

**`close()`** は {{domxref("IDBDatabase")}} インターフェイスのメソッドで、ただちに戻り、別スレッドで接続を閉じます。

実際には、この接続を使用していて生成されたすべてのトランザクションが完了するまで、接続は閉じられません。一度このメソッドが呼び出されたら、この接続では、新しいトランザクションを生成することはできません。終了処理がペンディングされている場合は、トランザクションを生成するメソッドは、例外を発生させます。

{{AvailableInWorkers}}

## 構文

```js-nolint
close()
```

### 引数

なし。

### 返値

なし。

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

  // データベースを開いた結果を変数 db に保存します｡
  db = DBOpenRequest.result;

  // さあ、データベースを再び閉じましょう！
  db.close();
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- トランザクションの開始 : {{domxref("IDBDatabase")}}
- トランザクションの使用 : {{domxref("IDBTransaction")}}
- キーの範囲の設定 : {{domxref("IDBKeyRange")}}
- データの取得と変更 : {{domxref("IDBObjectStore")}}
- カーソルの使用 : {{domxref("IDBCursor")}}
- リファレンス例 : [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
