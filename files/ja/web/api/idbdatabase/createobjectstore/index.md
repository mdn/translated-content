---
title: "IDBDatabase: createObjectStore() メソッド"
short-title: createObjectStore()
slug: Web/API/IDBDatabase/createObjectStore
l10n:
  sourceCommit: 88241bf466f1025d3c2f4ce2752586dd85d1ae13
---

{{ APIRef("IndexedDB") }}

**`createObjectStore()`** は {{domxref("IDBDatabase")}} インターフェイスのメソッドで、新しいオブジェクトストアやインデックスを生成して返します。

このメソッドは、ストアの名前をとるだけでなく、重要なオプションプロパティを定義するためのオプションオブジェクトもとります。ストアの個々のオブジェクトを一意にするために、プロパティを使用できます。 プロパティが識別子ならば、それはすべてのオブジェクトで一意であり、すべてのオブジェクトはそのプロパティを持つべきです。

このメソッドは [`versionchange`](/ja/docs/Web/API/IDBTransaction#version_change) トランザクション内でのみ呼び出すことができます。

{{AvailableInWorkers}}

## 構文

```js-nolint
createObjectStore(name)
createObjectStore(name, options)
```

### 引数

- `name`
  - : 作成するために新しいオブジェクトストアの名前です。なお、空の名前でオブジェクトストアを作成することも可能です。
- `options` {{optional_inline}}
  - : 属性がメソッドのオプション引数であるオプションオブジェクトです。以下のプロパティがあります。
    - `keyPath` {{optional_inline}}
      - : 新しいオブジェクトストアで使用するための[キーパス](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#キーパス)。空または指定しなかった場合、オブジェクトストアはキーパスなしで作成され、[アウトオブラインキー](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#アウトオブラインキー)を使用します。
        keyPath として配列を渡すこともできます。
    - `autoIncrement` {{optional_inline}}
      - : `true` の場合、オブジェクトストアは[キージェネレーター](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#キージェネレーター)があります。
        既定値は `false` です。

### 返値

新しい {{domxref("IDBObjectStore")}} です。

### 例外

このメソッドは {{domxref("DOMException")}} を発生させる可能性があり、 `name` は以下の種類のいずれかになります。

- `InvalidStateError` {{domxref("DOMException")}}
  - : このメソッドが `versionchange` トランザクションのコールバックとして呼び出されなかった場合に発生します。
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : 存在しないソースデータベースに対してリクエストが行われた場合に発生します（例えば、データベースが削除された場合など）。バージョン 41 以前の Firefox では、この場合にも `InvalidStateError` が発生し、誤解を招く可能性がありました。これは修正されました（[Firefox bug 1176165](https://bugzil.la/1176165) を参照）。
- `ConstraintError` {{domxref("DOMException")}}
  - : 与えられた名前のオブジェクトストア (大文字と小文字を区別する比較に基づく) が接続中のデータベースに既に存在します。
- `InvalidAccessError` {{domxref("DOMException")}}
  - : `autoIncrement` が `true` に設定されていて、`keyPath` が空文字か空文字を含む配列の場合。

## 例

```js
// データベースを開く
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// このイベントハンドラーは､新しいバージョンのデータベースの作成が
// 必要なことを表すイベントを処理します｡これは､データベースが作成されて
// いないときや､上の行の新しいバージョン番号が
// window.indexedDB.open() に渡されたときです｡
// これは、最近のブラウザーでしか実装されていません。
request.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = (event) => {
    note.innerHTML += "<li>データベースの読み込みに失敗しました。</li>";
  };

  // データベースにオブジェクトストアを作成します｡

  const objectStore = db.createObjectStore("toDoList", {
    keyPath: "taskTitle",
  });

  // オブジェクトストアにどのようなデータ項目が入るかを定義します｡

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });

  objectStore.createIndex("notified", "notified", { unique: false });

  note.innerHTML += "<li>オブジェクトストアが作成されました。</li>";
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- トランザクションの開始: {{domxref("IDBDatabase")}}
- トランザクションの使用: {{domxref("IDBTransaction")}}
- キーの範囲の設定: {{domxref("IDBKeyRange")}}
- データの取得と変更: {{domxref("IDBObjectStore")}}
- カーソルの使用: {{domxref("IDBCursor")}}
- リファレンス例: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
