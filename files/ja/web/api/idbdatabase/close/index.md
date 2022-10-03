---
title: IDBDatabase.close
slug: Web/API/IDBDatabase/close
---

{{ APIRef("IDBDatabase") }}

{{domxref("IDBDatabase")}}インターフェイスの`close()は、`ただちに戻り、別スレッドで接続を閉じます。

実際には、この接続を使用していて生成されたすべてのトランザクションが完了するまで、接続は閉じられません。一度このメソッドが呼び出されたら、この接続では、新しいトランザクションを生成することはできません。終了処理がペンディングされている場合は、トランザクションを生成するメソッドは、例外を発生させます。

## 構文

```js
db.close();
```

### 戻り値

Void。

## 例

```js
// Let us open our database
  var DBOpenRequest = window.indexedDB.open("toDoList", 4);

  // these two event handlers act on the database being opened successfully, or not
  DBOpenRequest.onerror = function(event) {
    note.innerHTML += '<li>Error loading database.</li>';
  };

  DBOpenRequest.onsuccess = function(event) {
    note.innerHTML += '<li>Database initialised.</li>';

    // store the result of opening the database in the db variable.
    db = DBOpenRequest.result;

    // now let's close the database again!
    db.close();
  }
```

## 仕様

| Specification                                                                                | Status                       | Comment |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ------- |
| {{SpecName('IndexedDB', '#widl-IDBDatabase-close-void', 'close()')}} | {{Spec2('IndexedDB')}} |         |

## ブラウザ実装状況

{{Compat("api.IDBDatabase.close")}}

## 関連項目

- [Using IndexedDB](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](http://mdn.github.io/to-do-notifications/).)
