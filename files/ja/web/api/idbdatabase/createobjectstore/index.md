---
title: IDBDatabase.createObjectStore
slug: Web/API/IDBDatabase/createObjectStore
---

{{ APIRef("IDBDatabase") }}

{{domxref("IDBDatabase")}} インターフェイスの`createObjectStore()` メソッドは、新しいオブジェクトストアやインデックスを生成して返します。

このメソッドは、ストアの名前をとるだけでなく、重要なオプションプロパティを定義するためのオプションオブジェクトもとります。ストアの個々のオブジェクトを一意にするために、プロパティを使用できます。 プロパティが識別子ならば、それはすべてのオブジェクトで一意であり、すべてのオブジェクトはそのプロパティを持つべきです。

WebKit ブラウザでは、オブジェクトストアやインデックスを生成できるようになる前に、{{ domxref("IDBVersionChangeRequest.setVersion")}}メソッドを呼び出さなければなりません。

## 構文

```
IDBDatabase.createObjectStore(name);
IDBDatabase.createObjectStore(name, options);
```

### 戻り値

- {{domxref("IDBObjectStore")}}
  - : 新しく生成されたオブジェクトストア。

### 例外

このメソッドは、次の型の 1 つを含む{{domxref("DOMError")}}を伴う{{domxref("DOMException")}}を発生させるかもしれません。

| Exception            | Description                                                                                                                                                                                                                                                                       |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `InvalidStateError`  | このメソッドが`versionchange`トランザクションのコールバックとして呼び出されなかった。WebKit ブラウザでは、はじめに {{ APIRef("IDBVersionChangeRequest.setVersion")}}を呼び出さなければならない。既に削除されたか取り除かれたオブジェクトを要求した場合も発生する。 |
| `ConstraintError`    | 与えられた名前のオブジェクトストア(based on case-sensitive comparison) が接続中のデータベースに既に存在する。                                                                                                                                                                     |
| `InvalidAccessError` | `autoIncrement`が true に設定されていて、`keyPathが空文字か空文字を含む配列の場合。`                                                                                                                                                                                              |

## 例

```js
 // Let us open our database
  var request = window.indexedDB.open("toDoList", 4);

  // This event handles the event whereby a new version of the database needs to be created
  // Either one has not been created before, or a new version number has been submitted via the
  // window.indexedDB.open line above
  //it is only implemented in recent browsers
  request.onupgradeneeded = function(event) {
    var db = event.target.result;

    db.onerror = function(event) {
      note.innerHTML += '<li>Error loading database.</li>';
    };

    // Create an objectStore for this database

    var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

    // define what data items the objectStore will contain

    objectStore.createIndex("hours", "hours", { unique: false });
    objectStore.createIndex("minutes", "minutes", { unique: false });
    objectStore.createIndex("day", "day", { unique: false });
    objectStore.createIndex("month", "month", { unique: false });
    objectStore.createIndex("year", "year", { unique: false });

    objectStore.createIndex("notified", "notified", { unique: false });

    note.innerHTML += '<li>Object store created.</li>';
  };
```

## パラメーター

- name
  - : 新しく作られるオブジェクトストア名。
- optionalParameters

  - : *オプション。*メソッドのオプションパラメーターとなる属性を持つオプションオブジェクト。これは次のプロパティを持つ。

    | Attribute       | Description                                                                                                                                                                                                                                                                        |
    | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `keyPath`       | 新しいオブジェクトストアで使用される[key path](/ja/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB#gloss_keypath)。空や特定されていない場合、オブジェクトストアは Key Path なしで生成されて、[out-of-line keys](/ja/docs/IndexedDB#gloss_out-of-line_key)が使用される。 |
    | `autoIncrement` | `trueだった場合、オブジェクトストアは`[key generator](/ja/docs/IndexedDB#gloss_key_generator)を持つ。既定値は`false。`                                                                                                                                                             |

    未知のパラメーターは無視される。

## 仕様

| Specification                                                                                                                                                                                                            | Status                       | Comment |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------- |
| {{SpecName('IndexedDB', '#widl-IDBDatabase-createObjectStore-IDBObjectStore-DOMString-name-IDBObjectStoreParameters-optionalParameters', 'createObjectStore()')}} | {{Spec2('IndexedDB')}} |         |

## ブラウザ実装状況

{{Compat("api.IDBDatabase.createObjectStore")}}

## 関連項目

- [Using IndexedDB](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](http://mdn.github.io/to-do-notifications/).)
