---
title: IDBVersionChangeEvent.newVersion
slug: Web/API/IDBVersionChangeEvent/newVersion
l10n:
  sourceCommit: d42b609444efb915ab46117f59985d67dda21eb6
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBVersionChangeEvent")}} インターフェイスの読み取り専用プロパティ **`newVersion`** は、データベースの新しいバージョン番号を返します。

{{AvailableInWorkers}}

## 値

64 ビットの整数、またはデータベースが削除される場合は `null` です。

## 例

このコードスニペットでは、データベースを開く要求をし、成功した場合と失敗した場合用のハンドラーを用意します。これらのイベントはカスタムの `IDBVersionChangeEvent` インターフェイスによって発火します。動く例全体は、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) を参照してください。([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))

```js
const note = document.querySelector("ul");

// 我々のデータベースのバージョン 4 を開きましょう
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// これらの 2 個のイベントハンドラーは、データベースが開かれる時動作します
DBOpenRequest.onerror = (event) => {
  note.innerHTML += "<li>データベースの読み込み中にエラーが発生しました。</li>";
};

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += "<li>データベースの初期化が完了しました。</li>";

  // データベースを開いた結果を変数 db に格納します。
  // これは後でトランザクションの開始などにたくさん使います。
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
