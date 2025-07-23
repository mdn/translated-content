---
title: IDBCursor
slug: Web/API/IDBCursor
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

> [!NOTE]
> {{domxref("IDBCursorWithValue")}} と混同しないでください。これは **`IDBCursor`** インターフェイスに **`value`** プロパティを追加しただけのものです。

**`IDBCursor`** は [IndexedDB API](/ja/docs/Web/API/IndexedDB_API) のインターフェイスで、複数レコードを走査したり繰り返し処理をしたりするための[カーソル](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#%E3%82%AB%E3%83%BC%E3%82%BD%E3%83%AB)です。

このカーソルはどのインデックスやオブジェクトをループしているかを示す情報源です。これは範囲内の位置を示し、レコードのキー順に増減して動きます。カーソルにより、アプリケーションからカーソル範囲内の全レコードに非同期に処理できます。

一度に無制限の数のカーソルを持つことができます。あるカーソルを表す同一の `IDBCursor` オブジェクトを取得できます。操作はインデックスやオブジェクトストアに対して実行されます。

## インスタンスプロパティ

> [!NOTE]
> {{domxref("IDBCursorWithValue")}} は **`IDBCursor`** インターフェイスに **`value`** プロパティを追加したものです。

- {{domxref("IDBCursor.source")}} {{ReadOnlyInline}}
  - : カーソルが繰り返している{{domxref("IDBObjectStore")}} か {{domxref("IDBIndex")}} を返します。この関数は、カーソルが現在繰り返されていたり、繰り返しが終わりを過ぎたり、トランザクションがアクティブでなくても、`null` や例外を返しません。
- {{domxref("IDBCursor.direction")}} {{ReadOnlyInline}}
  - : カーソルの走査の移動方向を返します。
- {{domxref("IDBCursor.key")}} {{ReadOnlyInline}}
  - : カーソル位置のレコードのキーを返します。カーソルが範囲外の場合、`undefined` にセットされます。カーソルキーはあらゆるデータ型となりえます。
- {{domxref("IDBCursor.primaryKey")}} {{ReadOnlyInline}}
  - : カーソルの現在有効な主キーを返します。カーソルが現在繰り返されていたり範囲外で繰り返されていた場合、これは `undefined` にセットされます。カーソルの主キーはあらゆるデータ型となりえます。
- {{domxref("IDBCursor.request")}} {{ReadOnlyInline}}
  - : カーソルを使用した {{domxref("IDBRequest")}} を返します。

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

{{Deprecated_Header}}

> [!WARNING]
> これらの定数は利用できません。Gecko 25 で削除されました。代わりに文字列定数を直接使う必要があります。([Firefox バグ 891944](https://bugzil.la/891944))

- `NEXT`: `"next"` : カーソルは重複を含む全てのレコードを提示します。キーの範囲の下限から開始し、上方向に動きます。(キーの順番に単調増加します)
- `NEXTUNIQUE` : `"nextunique"` : カーソルは重複を除いた全てのレコードを提示します。同じキーを持つ複数のレコードが存在する場合、走査の順で最初のレコードのみを取得できます。キーの範囲の下限から開始し、上方向に動きます。
- `PREV`: `"prev"` : カーソルは重複を含む全てのレコードを提示します｡キーの範囲の上限から開始し､下方向に動きます｡(キーの順番に単調減少します)
- `PREVUNIQUE`: `"prevunique"` : カーソルは重複を除いた全てのレコードを提示します｡同じキーを持つ複数のレコードが存在する場合､走査の順で最初のレコードのみを取得できます｡キーの範囲の上限から開始し､下方向に動きます｡

## 例

この単純なコードスニペットでは、トランザクションを生成し、オブジェクトストアを取得し、そしてカーソルを用いてオブジェクトストア内の全レコードを走査します。カーソルを使う場合、データをキーを用いて選択する必要はなく、単に全部を取得できます。ループにおけるそれぞれの繰り返しにおいて、カーソルオブジェクトの現在のレコードから `cursor.value.foo` でデータを取り出せることにも注目してください。動く例全体は、[IDBCursor example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) を参照してください。([動く例を見る](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/))

```js
function displayData() {
  const transaction = db.transaction(["rushAlbumList"], "readonly");
  const objectStore = transaction.objectStore("rushAlbumList");

  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const listItem = document.createElement("li");
      listItem.textContent = `${cursor.value.albumTitle}, ${cursor.value.year}`;
      list.appendChild(listItem);

      cursor.continue();
    } else {
      console.log("項目をすべて表示しました。");
    }
  };
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [IndexedDB を使用する](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- トランザクションの開始: {{domxref("IDBDatabase")}}
- トランザクションの使用: {{domxref("IDBTransaction")}}
- キーの範囲の設定: {{domxref("IDBKeyRange")}}
- データを取得・変更: {{domxref("IDBObjectStore")}}
- 参考例: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
