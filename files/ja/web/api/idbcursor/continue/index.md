---
title: IDBCursor.continue()
slug: Web/API/IDBCursor/continue
---

{{APIRef("IndexedDB")}}

**`continue()`** は {{domxref("IDBCursor")}} インターフェースのメソッドで、カーソルを現在の方向に次の位置、任意のキーパラメーターに一致するキーを持つアイテムまで進めます。キーを指定しない場合、カーソルはその方向に基づいて、すぐ隣の位置へ進みます。

{{AvailableInWorkers}}

## 構文

```js-nolint
cursor.continue(key);
```

### 引数

- `key` {{optional_inline}}
  - : カーソルを進めるためのキーです。

### 例外

このメソッドは次の内いずれかの {{domxref("DOMException")}} を発生させることがあります。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">例外</th>
      <th scope="col">解説</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>TransactionInactiveError</code></td>
      <td>この `IDBCursor` のトランザクションがアクティブではありません。</td>
    </tr>
    <tr>
      <td><code>DataError</code></td>
      <td>
        <p>
          キーパラメーターが以下の状態のうちのいずれかである可能性があります。
        </p>
        <ul>
          <li>キーが妥当なキーではない</li>
          <li>
            キーがこのカーソルの位置と同じかそれより小さく、カーソルの方向が
            <code>next</code> または <code>nextunique</code> である
          </li>
          <li>
            キーがこのカーソルの位置と同じかそれより大きく、カーソルの方向が
            <code>prev</code> または <code>prevunique</code> である
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>InvalidStateError</code></td>
      <td>カーソルが現在走査中または末尾を越えて走査しました。</td>
    </tr>
  </tbody>
</table>

## 例

この単純で部分的な実例ではトランザクションを作り、オブジェクトストアを取得した後、オブジェクトストア内の全ての反復処理するためカーソルを使用しています。カーソルはキーに基づいてデータを選択するには必要ありません。その全てを捕らえることができます。また、それぞれのループ内での繰り返しでカーソルオブジェクトを用い、`cursor.value.foo` とすることで、現在のレコードからカーソルの下のデータを取得できることには注目です。完全な例については [IDBCursor の例](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([ライブデモを見る](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)) を参照してください。

```js
function displayData() {
  var transaction = db.transaction(["rushAlbumList"], "readonly");
  var objectStore = transaction.objectStore("rushAlbumList");

  objectStore.openCursor().onsuccess = function (event) {
    var cursor = event.target.result;
    if (cursor) {
      var listItem = document.createElement("li");
      listItem.innerHTML = cursor.value.albumTitle + ", " + cursor.value.year;
      list.appendChild(listItem);

      cursor.continue();
    } else {
      console.log("全エントリーを表示しました。");
    }
  };
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.IDBCursor.continue")}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- トランザクションの開始 : {{domxref("IDBDatabase")}}
- トランザクションを使う : {{domxref("IDBTransaction")}}
- キーの範囲設定 : {{domxref("IDBKeyRange")}}
- データの取得と変更 : {{domxref("IDBObjectStore")}}
- カーソルを使う : {{domxref("IDBCursor")}}
- リファレンス 実例 : [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
