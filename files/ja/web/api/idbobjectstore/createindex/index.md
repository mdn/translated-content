---
title: "IDBObjectStore: createIndex() メソッド"
slug: Web/API/IDBObjectStore/createIndex
l10n:
  sourceCommit: 582d8c0192fdc085bf1e33ceb5f4f4acf224f28a
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBObjectStore")}} インターフェイスの **`createIndex()`** メソッドは、接続中のデータベースに新しい {{domxref("IDBIndex")}} オブジェクトを作成して返します。これは、データベースの各レコードが持つべき新しいデータポイントを定義するフィールド (列) を定義します。

IndexedDB のインデックスには _任意の_ JavaScript のデータ型を入れることができることを覚えておいてください。IndexedDB は保存するオブジェクトのシリアライズに[構造化複製アルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)を用いるので、単純なオブジェクトも複雑なオブジェクトも保存できます。

このメソッドは `VersionChange` トランザクションモードのコールバックからのみ呼び出せることに注意してください。

{{AvailableInWorkers}}

## 構文

```js-nolint
createIndex(indexName, keyPath)
createIndex(indexName, keyPath, options)
```

### 引数

- `indexName`
  - : 作成するインデックスの名前です。なお、空の名前のインデックスを作成することもできます。
- `keyPath`
  - : インデックスで使用するキーパスです。なお、空の `keyPath` でインデックスを作成することも、`keyPath` としてシーケンス (配列) を渡すこともできます。
- `options` {{optional_inline}}

  - : 以下のプロパティを持ちうるオブジェクトです。
    - `unique`
      - : `true` に設定した場合、このインデックスは単一のキーについて重複した値を許可しません。デフォルトは `false` です。
    - `multiEntry`
      - : `true` に設定した場合、このインデックスは `keyPath` が配列に解決したとき、配列の各要素についてインデックスにエントリーを追加します。
        `false` に設定した場合、配列を 1 個のエントリーとして追加します。デフォルトは `false` です。
    - `locale` {{non-standard_inline}}
      - : 現在 Firefox (43+) でのみ対応しています。インデックスのロケールを指定できます。
        指定すると、キー範囲によるデータのソート操作はすべて、このロケールのソート規則に沿います。
        ([ロケールを意識した並べ替え](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB#ロケールを意識した並べ替え)を参照してください)
        以下の 3 通りの方法のいずれかで指定できます。
        - `string`: 特定のロケールコードの文字列、たとえば `en-US` や `pl` です。
        - `auto`: プラットフォームのデフォルトのロケールを用います。(ユーザーエージェントの設定で変わる可能性があります)
        - `null` もしくは `undefined`: ロケールが指定されない場合、通常の JavaScript のソートが用いられます。(ロケールを意識しません)

### 返値

新しく作成されたインデックスを表す {{domxref("IDBIndex")}} オブジェクトを返します。

### 例外

このメソッドは、以下の種類のいずれかの {{domxref("DOMException")}} を投げる可能性があります。

- `ConstraintError` {{domxref("DOMException")}}
  - : 同じ名前のインデックスが既にデータベースに存在するとき投げられます。インデックスの名前は大文字と小文字を区別します。
- `InvalidAccessError` {{domxref("DOMException")}}
  - : 与えられたキーパスがシーケンスで、かつ `objectParameters` オブジェクトで `multiEntry` が `true` に設定されているとき投げられます。
- `InvalidStateError` {{domxref("DOMException")}}
  - : 以下のとき投げられます。
    - このメソッドが `versionchange` トランザクションモードのコールバック、すなわち {{domxref("IDBOpenDBRequest.upgradeneeded_event", "onupgradeneeded")}} のハンドラーから呼ばれていないとき。
    - オブジェクトストアが削除済のとき。
- `SyntaxError` {{domxref("DOMException")}}
  - : 指定された `keyPath` が[有効なキーパス](https://www.w3.org/TR/IndexedDB/#dfn-valid-key-path)でないとき投げられます。
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : この {{domxref("IDBObjectStore")}} が属するトランザクションが実行中でないとき (たとえば、削除されたか取り除かれたとき) 投げられます。Firefox のバージョン 41 より前では、この場合も `InvalidStateError` が投げられ、誤解を招いていました。これは今では修正されています。([Webkit bug 1176165](https://bugzil.la/1176165) を参照してください)

## 例

以下の例では、より高いバージョン番号のデータベースが読み込まれた際にデータベースの構造を更新する {{domxref("IDBOpenDBRequest.upgradeneeded_event", "onupgradeneeded")}} のハンドラーがあります。オブジェクトストアに新しいインデックスを作成するため、`createIndex()` が使われています。動く例全体は、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))

```js
let db;

// データベースを開く
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// データベースを開く用の 2 個のイベントハンドラー
DBOpenRequest.onerror = (event) => {
  note.innerHTML += "<li>データベースの読み込みエラー</li>";
};

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += "<li>データベースを初期化しました。</li>";

  // データベースを開いた結果を変数 db に格納する
  // これは後でよく使う
  db = request.result;

  // displayData() 関数を実行し、IDB に既に入っている
  // to-do リストのデータすべてをタスクリストに入れる
  displayData();
};

// このハンドラーは、データベースが新しく作られたときに発火し、
// データベースが作成されていなかったか、
// window.indexedDB.open() (前を参照) で新しいバージョン番号が指定されたことを示します。
// これは最近のブラウザーでしか実装されていません。
DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = (event) => {
    note.innerHTML += "<li>データベース読み込みエラー</li>";
  };

  // このデータベース用の objectStore を作成する
  const objectStore = db.createObjectStore("toDoList", {
    keyPath: "taskTitle",
  });

  // この objectStore に格納するデータアイテムを定義する

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
- トランザクションの開始: {{domxref("IDBDatabase")}}
- トランザクションの使用: {{domxref("IDBTransaction")}}
- キー範囲の設定: {{domxref("IDBKeyRange")}}
- データの取得と変更: {{domxref("IDBObjectStore")}}
- カーソルの使用: {{domxref("IDBCursor")}}
- リファレンス例: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
