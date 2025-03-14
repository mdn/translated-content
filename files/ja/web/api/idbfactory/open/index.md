---
title: "IDBFactory: open() メソッド"
short-title: open()
slug: Web/API/IDBFactory/open
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

**`open()`** は {{domxref("IDBFactory")}} インターフェイスのメソッドで、[データベースへの接続](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#データベースコネクション)を開くことを要求します。

このメソッドは即座に {{domxref("IDBOpenDBRequest")}} オブジェクトを返し、そして非同期でデータベースを開きます。
操作が成功した場合、このメソッドから返されるリクエストオブジェクトに `result` の属性として接続のための新しい {{domxref("IDBDatabase")}} オブジェクトが設定されて、`success` イベントが発生します。

`upgradeneeded`, `blocked`, `versionchange` イベントが発生することがあります。

## 構文

```js-nolint
open(name)
open(name, version)
```

### 引数

- `name`
  - : データベースの名前。
- `version` {{optional_inline}}
  - : 省略可。データベースを開くバージョン。バージョンが提供されずにデータベースが存在した場合、データベースへの接続はバージョンを変更せずに開かれます。
    バージョンが提供されず、データベースも存在しなかった場合、バージョン番号 `1` が生成されます。

### 返値

この要求に関連のある連続したイベントが発生する {{domxref("IDBOpenDBRequest")}} オブジェクト。

操作に成功した場合、リクエストの {{domxref("IDBRequest.result", "result")}} プロパティの値は、データベースへの接続を表す {{domxref("IDBDatabase")}} オブジェクトとなります。

### 例外

- {{jsxref("TypeError")}}
  - : `version` の値がゼロかマイナスの値、または数値でない場合。

## 例

`open` を現在の仕様書の `version` 引数を付けて呼び出す例です。

```js
const request = window.indexedDB.open("toDoList", 4);
```

次のコードスニペットは、データベースを開く要求をして、成功の場合と失敗の場合のイベントハンドラーを登録しています。完璧に動作する例は、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリケーション ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/)) を見てください。

```js
const note = document.querySelector("ul");

// データベースのバージョン 4 を開きましょう｡
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// これら 2 個のイベントハンドラーは､データベースが正常に開かれたか､
// 失敗した時に動作します｡
DBOpenRequest.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "データベースの読み込みに失敗しました。";
};

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "データベースを初期化しました。";

  // データベースを開いた結果を変数 db に保存します｡
  // これはトランザクションを開くときなど、
  // 後でたくさん使います｡
  db = DBOpenRequest.result;
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [ブラウザーのストレージ容量と削除基準](/ja/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
- トランザクションの開始 : {{domxref("IDBDatabase")}}
- トランザクションの使用 : {{domxref("IDBTransaction")}}
- キーの範囲の設定 : {{domxref("IDBKeyRange")}}
- データの取得と変更 : {{domxref("IDBObjectStore")}}
- カーソルの使用 : {{domxref("IDBCursor")}}
- リファレンス例 : [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
