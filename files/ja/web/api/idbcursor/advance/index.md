---
title: IDBCursor.advance()
slug: Web/API/IDBCursor/advance
---

{{APIRef("IndexedDB")}}

{{domxref("IDBCursor")}} インターフェイスの **`advance()`** メソッドはカーソルが位置を前進させる回数をセットします。

{{AvailableInWorkers}}

## 構文

```
cursor.advance(count);
```

### パラメータ

- count
  - : カーソルが前進する回数

### 戻り値

{{jsxref('undefined')}}

### 例外

このメソッドは次のいずれかの {{domxref("DOMException")}} を発生することがあります:

| 例外                       | 説明                                                    |
| -------------------------- | ------------------------------------------------------- |
| `TransactionInactiveError` | この IDBCursor のトランザクションは活性化していません。 |
| `TypeError`                | `count` パラメーターに渡された値がゼロや負の数です。    |
| `InvalidStateError`        | カーソルは現在繰り返し中か、最後を過ぎています。        |

## 例

このシンプルな断片でトランザクションを作成し、オブジェクトストアを取得し、オブジェクトストアのレコードを一通り繰り返すカーソルを使っています。ここで `cursor.advance(2)` を使ってそれぞれ 2 回前進していて、つまり 1 つおきの結果だけが表示されます。`advance()` は {{domxref("IDBCursor.continue")}} と同様に動作しますが、常に次のレコードに移動するのでなく、一度に複数のレコードを飛び越えられるのが違います。

注意点としてループの繰り返しで、カーソルオブジェクトの現在のレコードのテータを `cursor.value.foo`を使って取得できます。完全な動作例は、[IDBCursor の例](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor)([ライブ例を見る](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/))を見てください。

```js
function advanceResult() {
  list.innerHTML = '';
  var transaction = db.transaction(['rushAlbumList'], "readonly");
  var objectStore = transaction.objectStore('rushAlbumList');

  objectStore.openCursor().onsuccess = function(event) {
    var cursor = event.target.result;
    if(cursor) {
      var listItem = document.createElement('li');
      listItem.innerHTML = '<strong>' + cursor.value.albumTitle + '</strong>, ' + cursor.value.year;
      list.appendChild(listItem);
      cursor.advance(2);
    } else {
      console.log('Every other entry displayed.');
    }
  };
};
```

## 仕様

| 仕様書                                                                                                                   | 策定状況                         | コメント |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName('IndexedDB', '#widl-IDBCursor-advance-void-unsigned-long-count', 'advance()')}} | {{Spec2('IndexedDB')}}     |          |
| {{SpecName("IndexedDB 2", "#dom-idbcursor-advance", "advance()")}}                                 | {{Spec2("IndexedDB 2")}} |          |

## ブラウザー実装状況

{{Compat("api.IDBCursor.advance")}}

## 関連情報

- [IndexedDB を使用する](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- トランザクションを開始する: {{domxref("IDBDatabase")}}
- トランザクションを使用する: {{domxref("IDBTransaction")}}
- キーレンジを設定する: {{domxref("IDBKeyRange")}}
- データの取得と変更: {{domxref("IDBObjectStore")}}
- カーソルを使用する: {{domxref("IDBCursor")}}
- リファレンスの例: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([ライブ例を見る](http://mdn.github.io/to-do-notifications/)。)
