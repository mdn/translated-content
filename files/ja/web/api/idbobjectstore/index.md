---
title: IDBObjectStore
slug: Web/API/IDBObjectStore
l10n:
  sourceCommit: 066257cb0d23e29e269703450e4b1216a65e3b26
---

{{APIRef("IndexedDB")}}

[IndexedDB API](/ja/docs/Web/API/IndexedDB_API) の **`IDBObjectStore`** インターフェイスは、データベース内のオブジェクトストアを表します。オブジェクトストア内のレコードは、キーによってソートされています。ソートしておくことで、高速な挿入、検索、そして順番での取り出しを可能にします。

{{AvailableInWorkers}}

## インスタンスプロパティ

- {{domxref("IDBObjectStore.indexNames")}} {{ReadOnlyInline}}
  - : このオブジェクトストア内のオブジェクトの[インデックス](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#%E3%82%A4%E3%83%B3%E3%83%87%E3%83%83%E3%82%AF%E3%82%B9)の名前のリストです。
- {{domxref("IDBObjectStore.keyPath")}} {{ReadOnlyInline}}
  - : このオブジェクトストアの[キーパス](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#%E3%82%AD%E3%83%BC%E3%83%91%E3%82%B9)です。この属性が `null` のときは、アプリケーションはそれぞれの更新操作のためにキーを提供しなければなりません。
- {{domxref("IDBObjectStore.name")}}
  - : このオブジェクトストアの名前です。
- {{domxref("IDBObjectStore.transaction")}} {{ReadOnlyInline}}
  - : このオブジェクトストアが属している {{domxref("IDBTransaction")}} オブジェクトです。
- {{domxref("IDBObjectStore.autoIncrement")}} {{ReadOnlyInline}}
  - : このオブジェクトストアのオートインクリメントフラグの値です。

## インスタンスメソッド

- {{domxref("IDBObjectStore.add()")}}
  - : {{domxref("IDBRequest")}} オブジェクトを返し、別のスレッドで `value` の[構造化複製](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#structured-clone)を生成し、複製した値をオブジェクトストアに保存します。これはオブジェクトストアに新しいレコードを追加する操作です。
- {{domxref("IDBObjectStore.clear()")}}
  - : {{domxref("IDBRequest")}} オブジェクトを生成してすぐに返し、別のスレッドでこのオブジェクトストアをクリアします。これはオブジェクトストア内に現在ある全レコードを削除する操作です。
- {{domxref("IDBObjectStore.count()")}}
  - : {{domxref("IDBRequest")}} オブジェクトを返し、別のスレッドで指定のキーまたは {{domxref("IDBKeyRange")}} にマッチするレコードの数を返します。引数なしで呼ばれた場合は、ストア内の全レコードの数を返します。
- {{domxref("IDBObjectStore.createIndex()")}}
  - : バージョンの更新中に新しいインデックスを作成し、接続中のデータベースにおける新しい {{domxref("IDBIndex")}} を返します。
- {{domxref("IDBObjectStore.delete()")}}
  - : {{domxref("IDBRequest")}} オブジェクトを返し、指定したキーによって選択されたストア内のオブジェクトを別のスレッドで削除します。これはオブジェクトストアから個別のレコードを削除する操作です。
- {{domxref("IDBObjectStore.deleteIndex()")}}
  - : バージョンの更新中に用い、接続中のデータベースから指定したインデックスを削除します。
- {{domxref("IDBObjectStore.get()")}}
  - : {{domxref("IDBRequest")}} オブジェクトを返し、指定したキーによって選択されたストア内のオブジェクトを別のスレッドで返します。これはオブジェクトストアから特定のレコードを取り出す操作です。
- {{domxref("IDBObjectStore.getKey()")}}
  - : {{domxref("IDBRequest")}} オブジェクトを返し、指定したパラメーターにマッチするオブジェクトストア内のオブジェクトのレコードキーを別のスレッドで取得して返します。
- {{domxref("IDBObjectStore.getAll()")}}
  - : {{domxref("IDBRequest")}} オブジェクトを返し、指定したパラメーターにマッチするオブジェクトストア内のオブジェクトを全て取得します。引数なしで呼ばれた場合は、ストア内の全てのオブジェクトを取得します。
- {{domxref("IDBObjectStore.getAllKeys()")}}
  - : {{domxref("IDBRequest")}} オブジェクトを返し、指定したパラメーターにマッチするオブジェクトストア内の全てのオブジェクトのレコードキーを取得します。引数なしで呼ばれた場合は、ストア内の全てのオブジェクトについて取得します。
- {{domxref("IDBObjectStore.index()")}}
  - : このオブジェクトストアでインデックスを開きます。これは、たとえば、カーソルを用いてこのインデックスでソートされたレコードの列を得るのに用いることができます。
- {{domxref("IDBObjectStore.openCursor()")}}
  - : {{domxref("IDBRequest")}} オブジェクトを返し、別のスレッドで新しい {{domxref("IDBCursorWithValue")}} オブジェクトを返します。これはカーソルを用いて主キーでオブジェクトストアを走査するのに用います。
- {{domxref("IDBObjectStore.openKeyCursor()")}}
  - : {{domxref("IDBRequest")}} オブジェクトを返し、別のスレッドで新しい {{domxref("IDBCursor")}} を返します。これはキーでオブジェクトストアを走査するのに用います。
- {{domxref("IDBObjectStore.put()")}}
  - : {{domxref("IDBRequest")}} オブジェクトを返し、別のスレッドで `value` の[構造化複製](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#structured-clone)を作成し、複製した値をオブジェクトストアに保存します。これはトランザクションのモードが `readwrite` のときに既存のレコードを更新する操作です。

## 例

この例では、`onupgradeneeded` 関数内での {{domxref("IDBObjectStore.createIndex")}} を用いたデータ構造の更新から、{{domxref("IDBObjectStore.add")}} によるオブジェクトストアへのアイテムの追加まで、オブジェクトストアの様々な使用法を紹介します。動く例全体は、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))

```js
// 我々のデータベースを開きましょう
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += "<li>データベースを初期化しました。</li>";

  // データベースを開いた結果を db に格納します
  db = DBOpenRequest.result;
};

// このイベントは、データベースがまだ作成されていないか、
// 上の window.indexedDB.open の行で新しいバージョン番号が
// 指定されたかで、新しいバージョンのデータベースを作成する
// 必要がある場合を処理します
DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = (event) => {
    note.innerHTML +=
      "<li>データベースの読み込み中にエラーが発生しました。</li>";
  };

  // このデータベース用の objectStore を作ります

  const objectStore = db.createObjectStore("toDoList", {
    keyPath: "taskTitle",
  });

  // objectStore に格納するデータアイテムを定義します

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });

  objectStore.createIndex("notified", "notified", { unique: false });

  note.innerHTML += "<li>オブジェクトストアを作成しました。</li>";
};

// オブジェクトストアに追加する新しいアイテムを作成します
const newItem = [
  {
    taskTitle: "Walk dog",
    hours: 19,
    minutes: 30,
    day: 24,
    month: "December",
    year: 2013,
    notified: "no",
  },
];

// 読み書き用のトランザクションを開き、データを追加する準備をします
const transaction = db.transaction(["toDoList"], "readwrite");

// 全て完了した時、トランザクションの正常終了を報告します
transaction.oncomplete = (event) => {
  note.innerHTML += "<li>トランザクションが完了しました。</li>";
};

transaction.onerror = (event) => {
  note.innerHTML +=
    "<li>トランザクションはエラーのため開けませんでした。アイテムの重複は許可されていません。</li>";
};

// トランザクションでオブジェクトストアを作成します
const objectStore = transaction.objectStore("toDoList");
// オブジェクトストアに newItem オブジェクトを追加する要求をします
const objectStoreRequest = objectStore.add(newItem[0]);

objectStoreRequest.onsuccess = (event) => {
  note.innerHTML += "<li>要求は成功しました。</li>";
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
- キーの範囲の設定: {{domxref("IDBKeyRange")}}
- データの取得と変更: {{domxref("IDBObjectStore")}}
- カーソルの使用: {{domxref("IDBCursor")}}
- リファレンス例: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
