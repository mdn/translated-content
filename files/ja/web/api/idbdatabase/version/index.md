---
title: "IDBDatabase: version プロパティ"
short-title: version
slug: Web/API/IDBDatabase/version
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("IndexedDB") }}

**`version`** は {{domxref("IDBDatabase")}} インターフェイスのプロパティで、接続しているデータベースのバージョンを含む [64 ビット整数](/ja/docs/NSPR_API_Reference/Long_Long_%2864-bit%29_Integers)です。データベースを初めて生成した時、この属性は空文字です。

{{AvailableInWorkers}}

### 値

接続しているデータベースのバージョンを含む整数値。

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

  // この行では接続したデータベースのバージョンを記録します。"4" のはずです。
  console.log(db.version);
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
