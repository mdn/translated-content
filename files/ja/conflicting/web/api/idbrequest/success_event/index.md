---
title: IDBRequest.onsuccess
slug: conflicting/Web/API/IDBRequest/success_event
tags:
  - API
  - Database
  - IDBRequest
  - IndexedDB
  - Property
  - Reference
  - Storage
  - onsuccess
translation_of: Web/API/IDBRequest/onsuccess
original_slug: Web/API/IDBRequest/onsuccess
---
{{ APIRef("IndexedDB") }}

{{domxref("IDBRequest")}} インターフェースの**`onsuccess`**イベントハンドラはリクエストの結果が正常に帰ってきた時に着火される[`success`](/ja/docs/Web/API/IDBRequest/success_event)イベントをハンドリングします。

イベントハンドラは、type="success"の成功[イベント](/ja/docs/Web/Events/success)をパラメータとして受け取ります。

{{AvailableInWorkers}}

## 構文

```
request.onsuccess = function(event) { ... };
```

## 例

下記の例は、指定されたレコードタイトルをリクエストします。リクエストの`onsuccess`イベントハンドラは{{domxref("IDBObjectStore")}} (`objectStoreTitleRequest.result`として利用可能)からレコードを取得し、そのプロパティを更新してオブジェクトストアに書き戻します。

完全な例は [To-do Notifications](https://github.com/mdn/to-do-notifications/) app ([example live](http://mdn.github.io/to-do-notifications/))を参照してください。

<pre class="brush: js;highlight:[11]" style="font-size: 14px;">var title = "Walk dog";

// いつものようにトランザクションをオープンする
var objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

// title変数の値をタイトルとして持つTo-Doリストオブジェクトを取得する
var objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = function() {
<code>  // resultとして返却されたデータオブジェクトを取得
  var data = objectStoreTitleRequest.result;

  // データオブジェクトのnotifiedプロパティ値を"yes"に更新する
  data.notified = "yes";</code>

  // データベースにアイテムを書き戻す別のリクエストを作成する
  var updateTitleRequest = objectStore.put(data);

  // この新しいリクエストが成功すると、
  // 表示更新のためにdisplayData()が再度実行される
  <span style="font-size: 1rem;">updateTitleRequest</span><span style="font-size: 1rem;">.onsuccess = function() {</span>
    displayData();
  };
};</pre>

## 仕様書

| 仕様書                                                                                       | 状態                             | 備考 |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('IndexedDB', '#widl-IDBRequest-onsuccess', 'onsuccess')}} | {{Spec2('IndexedDB')}}     |      |
| {{SpecName("IndexedDB 2", "#dom-idbrequest-onsuccess", "onsuccess")}} | {{Spec2("IndexedDB 2")}} |      |

## ブラウザーの対応

{{Compat("api.IDBRequest.onsuccess")}}

## 関連情報

- [Using IndexedDB](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [Success Event](/ja/docs/Web/Events/success)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](http://mdn.github.io/to-do-notifications/).)
- [`success`](/ja/docs/Web/API/IDBRequest/success_event) event
