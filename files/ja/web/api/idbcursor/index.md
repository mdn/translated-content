---
title: IDBCursor
slug: Web/API/IDBCursor
---

{{APIRef("IndexedDB")}}

[IndexedDB API](/ja/docs/IndexedDB) の **`IDBCursor`** インターフェイスはデータベースの複数レコードを横断したり繰り返すための[カーソル](/ja/docs/IndexedDB/Basic_Concepts_Behind_IndexedDB#gloss_cursor)です。

このカーソルはどのインデックスやオブジェクトをループしているかを示す元です。これは範囲内の位置を示す持ち、レコードのキー順に増/減して動きます。カーソルはアプリケーションからカーソル範囲内の全レコードに非同期に処理できるようにします。

一度に無制限の数のカーソルを持つことができます。あるカーソルを表す同一の `IDBCursor` オブジェクトを取得できます。操作はインデックスやオブジェクトストアに対して実行されます。

{{AvailableInWorkers}}

## プロパティ

- {{domxref("IDBCursor.source")}} {{readonlyInline}}
  - : カーソルが繰り返している{{domxref("IDBObjectStore")}} か {{domxref("IDBIndex")}} を返します。この関数は、カーソルが現在繰り返されていたり、繰り返しが終わりを過ぎたり、トランザクションがアクティブでなくても、null や例外を返しません。
- {{domxref("IDBCursor.direction")}} {{readonlyInline}}
  - : カーソルの横断の向きを返します。取りうる値については [Constants](/ja/docs/Web/API/IDBCursor#const_next) を見てください。
- {{domxref("IDBCursor.key")}} {{readonlyInline}}
  - : カーソル位置のレコードのキーを返します。カーソルが範囲外の場合、`undefined` にセットされます。カーソルキーはあらゆるデータ型となりえます。
- {{domxref("IDBCursor.value")}} {{readonlyInline}}
  - : カーソル位置のレコードの値を返します。カーソルの値はあらゆるデータ型となりえます。
- {{domxref("IDBCursor.primaryKey")}} {{readonlyInline}}
  - : カーソルの現在有効な主キーを返します。カーソルが現在繰り返されていたり範囲外で繰り返されていた場合、これは `undefined` にセットされます。カーソルの主キーはあらゆるデータ型となりえます。

## メソッド

- {{domxref("IDBCursor.advance()")}}
  - : Sets the number times a cursor should move its position forward.
- {{domxref("IDBCursor.continue()")}}
  - : Advances the cursor to the next position along its direction, to the item whose key matches the optional `key` parameter.
- {{domxref("IDBCursor.continuePrimaryKey()")}}
  - : Sets the cursor to the given index key and primary key given as arguments.
- {{domxref("IDBCursor.delete()")}}
  - : Returns an {{domxref("IDBRequest")}} object, and, in a separate thread, deletes the record at the cursor's position, without changing the cursor's position. This can be used to delete specific records.
- {{domxref("IDBCursor.update()")}}
  - : Returns an {{domxref("IDBRequest")}} object, and, in a separate thread, updates the value at the current position of the cursor in the object store. This can be used to update specific records.

## Constants

{{ deprecated_header(13) }}

> **警告:** これらの constants は利用できません — Gecko 25 で削除されました。代わりに直接 string constants を使う必要があります。({{ bug(891944) }})

- `NEXT`: `"next"` : The cursor shows all records, including duplicates. It starts at the lower bound of the key range and moves upwards (monotonically increasing in the order of keys).
- `NEXTUNIQUE` : `"nextunique"` : The cursor shows all records, excluding duplicates. If multiple records exist with the same key, only the first one iterated is retrieved. It starts at the lower bound of the key range and moves upwards.
- `PREV`: `"prev"` : The cursor shows all records, including duplicates. It starts at the upper bound of the key range and moves downwards (monotonically decreasing in the order of keys).
- `PREVUNIQUE`: `"prevunique"` : The cursor shows all records, excluding duplicates. If multiple records exist with the same key, only the first one iterated is retrieved. It starts at the upper bound of the key range and moves downwards.

## 例

In this simple fragment we create a transaction, retrieve an object store, then use a cursor to iterate through all the records in the object store. The cursor does not require us to select the data based on a key; we can just grab all of it. Also note that in each iteration of the loop, you can grab data from the current record under the cursor object using `cursor.value.foo`. For a complete working example, see our [IDBCursor example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([view example live](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

```js
function displayData() {
  var transaction = db.transaction(['rushAlbumList'], "readonly");
  var objectStore = transaction.objectStore('rushAlbumList');

  objectStore.openCursor().onsuccess = function(event) {
    var cursor = event.target.result;
    if(cursor) {
      var listItem = document.createElement('li');
      listItem.innerHTML = cursor.value.albumTitle + ', ' + cursor.value.year;
      list.appendChild(listItem);

      cursor.continue();
    } else {
      console.log('Entries all displayed.');
    }
  };
}
```

## 仕様

| 仕様書                                                                       | 策定状況                     | コメント |
| ---------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('IndexedDB', '#idl-def-IDBCursor', 'cursor')}} | {{Spec2('IndexedDB')}} |          |

## ブラウザー実装状況

{{Compat("api.IDBCursor")}}

## 関連情報

- [IndexedDB を使用する](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- トランザクションを開始する: {{domxref("IDBDatabase")}}
- トランザクションを使用する: {{domxref("IDBTransaction")}}
- キーの範囲をセットする: {{domxref("IDBKeyRange")}}
- データを取得、変更する: {{domxref("IDBObjectStore")}}
- カーソルを使用する: {{domxref("IDBCursor")}}
- リファレンスの例: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](http://mdn.github.io/to-do-notifications/).)
