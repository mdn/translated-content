---
title: IDBDatabase.createObjectStore
slug: Web/API/IDBDatabase/createObjectStore
---

{{ APIRef("IDBDatabase") }}

{{domxref("IDBDatabase")}} インターフェイスの **`createObjectStore()`** メソッドは、新しいオブジェクトストアやインデックスを生成して返します。

このメソッドは、ストアの名前をとるだけでなく、重要なオプションプロパティを定義するためのオプションオブジェクトもとります。ストアの個々のオブジェクトを一意にするために、プロパティを使用できます。 プロパティが識別子ならば、それはすべてのオブジェクトで一意であり、すべてのオブジェクトはそのプロパティを持つべきです。

WebKit ブラウザでは、オブジェクトストアやインデックスを生成できるようになる前に、{{ domxref("IDBVersionChangeRequest.setVersion")}} メソッドを呼び出さなければなりません。

## 構文

```
IDBDatabase.createObjectStore(name);
IDBDatabase.createObjectStore(name, options);
```

### 返値

- {{domxref("IDBObjectStore")}}
  - : 新しく生成されたオブジェクトストア。

### 例外

このメソッドは、次の型の 1 つを含む {{domxref("DOMError")}} を伴う {{domxref("DOMException")}} を発生させるかもしれません。

| 例外                 | 説明                                                                                                                                                                                                                                                                              |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `InvalidStateError`  | このメソッドが `versionchange` トランザクションのコールバックとして呼び出されませんでした。WebKit ブラウザでは、はじめに {{ APIRef("IDBVersionChangeRequest.setVersion")}} を呼び出さなければなりません。既に削除されたか取り除かれたオブジェクトを要求した場合も発生します。 |
| `ConstraintError`    | 与えられた名前のオブジェクトストア (大文字と小文字を区別する比較に基づく) が接続中のデータベースに既に存在します。                                                                                                                                                                     |
| `InvalidAccessError` | `autoIncrement` が `true` に設定されていて、`keyPath` が空文字か空文字を含む配列の場合。`                                                                                                                                                                                              |

## 例

```js
// 我々のデータベースを開きましょう
  var request = window.indexedDB.open("toDoList", 4);

  // このイベントハンドラーは､新しいバージョンのデータベースの作成が必要なことを表すイベントを処理します｡
  // これは､データベースが作成されていないときや､上の行の window.indexedDB.open に
  // 新しいバージョン番号が渡されたときです｡
  // これは、最近のブラウザーでしか実装されていません。
  request.onupgradeneeded = function(event) {
    var db = event.target.result;

    db.onerror = function(event) {
      note.innerHTML += '<li>データベースの読み込みに失敗しました。</li>';
    };

    // データベースにオブジェクトストアを作成します｡

    var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

    // オブジェクトストアにどのようなデータ項目が入るかを定義します｡

    objectStore.createIndex("hours", "hours", { unique: false });
    objectStore.createIndex("minutes", "minutes", { unique: false });
    objectStore.createIndex("day", "day", { unique: false });
    objectStore.createIndex("month", "month", { unique: false });
    objectStore.createIndex("year", "year", { unique: false });

    objectStore.createIndex("notified", "notified", { unique: false });

    note.innerHTML += '<li>オブジェクトストアが作成されました。</li>';
  };
```

## 引数

- `name`
  - : 新しく作られるオブジェクトストア名。
- `optionalParameters`

  - : *オプション。* メソッドのオプションパラメーターとなる属性を持つオプションオブジェクト。これは次のプロパティを持ちます。

    | プロパティ      | 説明                                                                                                                                                                                                                                                                               |
    | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `keyPath`       | 新しいオブジェクトストアで使用される[キーパス](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#%E3%82%AD%E3%83%BC%E3%83%91%E3%82%B9)。空や特定されていない場合、オブジェクトストアはキーパスなしで生成されて、[アウトオブラインキー](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#%E3%82%A2%E3%82%A6%E3%83%88%E3%82%AA%E3%83%96%E3%83%A9%E3%82%A4%E3%83%B3%E3%82%AD%E3%83%BC) が使用されます。 |
    | `autoIncrement` | `true` だった場合、オブジェクトストアは[キージェネレーター](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#%E3%82%AD%E3%83%BC%E3%82%B8%E3%82%A7%E3%83%8D%E3%83%AC%E3%83%BC%E3%82%BF%E3%83%BC)を持ちます。既定値は `false`。                                                                                                                                                             |

    未知のパラメーターは無視されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.IDBDatabase.createObjectStore")}}

## 関連項目

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- トランザクションの開始 : {{domxref("IDBDatabase")}}
- トランザクションの使用 : {{domxref("IDBTransaction")}}
- キーの範囲の設定 : {{domxref("IDBKeyRange")}}
- データの取得と変更 : {{domxref("IDBObjectStore")}}
- カーソルの使用 : {{domxref("IDBCursor")}}
- リファレンス例 : [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
