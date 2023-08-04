---
title: IDBCursor
slug: Web/API/IDBCursor
---

{{APIRef("IndexedDB")}}

[IndexedDB API](/ja/docs/IndexedDB) の **`IDBCursor`** インターフェイスはデータベースの複数レコードを横断したり繰り返すための[カーソル](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#%E3%82%AB%E3%83%BC%E3%82%BD%E3%83%AB)です。

このカーソルはどのインデックスやオブジェクトをループしているかを示す元です。これは範囲内の位置を示し、レコードのキー順に増/減して動きます。カーソルはアプリケーションからカーソル範囲内の全レコードに非同期に処理できるようにします。

一度に無制限の数のカーソルを持つことができます。あるカーソルを表す同一の `IDBCursor` オブジェクトを取得できます。操作はインデックスやオブジェクトストアに対して実行されます。

{{AvailableInWorkers}}

## インスタンスプロパティ

- {{domxref("IDBCursor.source")}} {{readonlyInline}}
  - : カーソルが繰り返している{{domxref("IDBObjectStore")}} か {{domxref("IDBIndex")}} を返します。この関数は、カーソルが現在繰り返されていたり、繰り返しが終わりを過ぎたり、トランザクションがアクティブでなくても、`null` や例外を返しません。
- {{domxref("IDBCursor.direction")}} {{readonlyInline}}
  - : カーソルの横断の向きを返します。取りうる値については[定数](/ja/docs/Web/API/IDBCursor#%E5%AE%9A%E6%95%B0)を見てください。
- {{domxref("IDBCursor.key")}} {{readonlyInline}}
  - : カーソル位置のレコードのキーを返します。カーソルが範囲外の場合、`undefined` にセットされます。カーソルキーはあらゆるデータ型となりえます。
- {{domxref("IDBCursor.value")}} {{readonlyInline}}
  - : カーソル位置のレコードの値を返します。カーソルの値はあらゆるデータ型となりえます。
- {{domxref("IDBCursor.primaryKey")}} {{readonlyInline}}
  - : カーソルの現在有効な主キーを返します。カーソルが現在繰り返されていたり範囲外で繰り返されていた場合、これは `undefined` にセットされます。カーソルの主キーはあらゆるデータ型となりえます。

## インスタンスメソッド

- {{domxref("IDBCursor.advance()")}}
  - : カーソルが位置を前進させる回数を設定します。
- {{domxref("IDBCursor.continue()")}}
  - : カーソルを現在の方向の次の位置、省略可能な `key` 引数に当てはまるアイテムに進めます。
- {{domxref("IDBCursor.continuePrimaryKey()")}}
  - : カーソルを引数で与えられたインデックスキーと主キーに従って設定します。
- {{domxref("IDBCursor.delete()")}}
  - : {{domxref("IDBRequest")}} オブジェクトを返し、別のスレッドでカーソルの位置を変えずにカーソルの位置にあるレコードを削除します。これは、特定のレコードを削除するのに使用できます。
- {{domxref("IDBCursor.update()")}}
  - : {{domxref("IDBRequest")}} オブジェクトを返し、別のスレッドでオブジェクトストア内のカーソルの現在の位置にある値を更新します。これは、特定のレコードを更新するのに使用できます。

## 定数

{{ deprecated_header(13) }}

> **警告:** これらの定数は利用できません。Gecko 25 で削除されました。代わりに文字列定数を直接使う必要があります。([Firefox バグ 891944](https://bugzil.la/891944))

- `NEXT`: `"next"` : カーソルは重複を含む全てのレコードを提示します。キーの範囲の下限から開始し、上方向に動きます。(キーの順番に単調増加します)
- `NEXTUNIQUE` : `"nextunique"` : カーソルは重複を除いた全てのレコードを提示します。同じキーを持つ複数のレコードが存在する場合、走査の順で最初のレコードのみを取得できます。キーの範囲の下限から開始し、上方向に動きます。
- `PREV`: `"prev"` : カーソルは重複を含む全てのレコードを提示します｡キーの範囲の上限から開始し､下方向に動きます｡(キーの順番に単調減少します)
- `PREVUNIQUE`: `"prevunique"` : カーソルは重複を除いた全てのレコードを提示します｡同じキーを持つ複数のレコードが存在する場合､走査の順で最初のレコードのみを取得できます｡キーの範囲の上限から開始し､下方向に動きます｡

## 例

この単純なコードスニペットでは、トランザクションを生成し、オブジェクトストアを取得し、そしてカーソルを用いてオブジェクトストア内の全レコードを走査します。カーソルを使う場合、データをキーを用いて選択する必要はなく、単に全部を取得できます。ループにおけるそれぞれの繰り返しにおいて、カーソルオブジェクトの現在のレコードから `cursor.value.foo` でデータを取り出せることにも注目してください。動く例全体は、[IDBCursor example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) を参照してください。([動く例を見る](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/))

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
      console.log('全エントリーを表示しました。');
    }
  };
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.IDBCursor")}}

## 関連情報

- [IndexedDB を使用する](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- トランザクションを開始する : {{domxref("IDBDatabase")}}
- トランザクションを使用する : {{domxref("IDBTransaction")}}
- キーの範囲をセットする : {{domxref("IDBKeyRange")}}
- データを取得、変更する : {{domxref("IDBObjectStore")}}
- カーソルを使用する : {{domxref("IDBCursor")}}
- リファレンスの例 : [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
