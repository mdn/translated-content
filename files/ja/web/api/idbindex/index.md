---
title: IDBIndex
slug: Web/API/IDBIndex
l10n:
  sourceCommit: 59a0a003281f70f55ac524bb3c370b19f0a7a14a
---

{{APIRef("IndexedDB")}}

[IndexedDB API](/ja/docs/Web/API/IndexedDB_API) の `IDBIndex` インターフェイスは、データベース内の[インデックス](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#%E3%82%A4%E3%83%B3%E3%83%87%E3%83%83%E3%82%AF%E3%82%B9)への非同期アクセスを提供します。インデックスはオブジェクトストアの一種で、参照先オブジェクトストアと呼ばれる別のオブジェクトストア内のレコードを検索するためのものです。データを取り出すためにこのインターフェイスを使用します。

オブジェクトストア内のレコードは、主キーを使用して取り出すことも、インデックスを使用して取り出すこともできます。インデックスにより、オブジェクトストア内のレコードに格納されている主キー以外の値の性質を用いてオブジェクトストアからレコードを検索できるようになります。

インデックスは永続的なキー-値ストレージで、そのレコードの値の部分は参照先オブジェクトストア内のレコードのキーの部分になります。参照先オブジェクトストアでレコードが挿入・更新・削除されると、そのたびにインデックス内でもレコードが自動で作成されます。あるインデックス内のレコードはそれぞれ参照先オブジェクトストア内のレコード 1 個だけを指すことができますが、複数のインデックスが同じオブジェクトストアを参照することができます。オブジェクトストアが変更されると、そのオブジェクトストアを参照する全てのインデックスが自動で更新されます。

ある範囲に含まれるキーの集合を得ることができます。詳しくは、{{domxref("IDBKeyRange")}} を参照してください。

{{AvailableInWorkers}}

## インスタンスプロパティ

- {{domxref("IDBIndex.isAutoLocale")}} {{ReadOnlyInline}} {{ Non-Standard_inline() }} {{Experimental_Inline}}
  - : インデックスの作成時に `locale` の値が `auto` に設定されたかを表す {{jsxref("boolean")}} 値を返します。([`createIndex()`](/ja/docs/Web/API/IDBObjectStore/createIndex) の引数 [`options`](/ja/docs/Web/API/IDBObjectStore/createIndex#options) を参照してください)
- {{domxref("IDBIndex.locale")}} {{ReadOnlyInline}} {{ Non-Standard_inline() }} {{Experimental_Inline}}
  - : 作成時に `locale` の値が指定されていれば、インデックスのロケール (たとえば `en-US` や `pl`) を返します。([`createIndex()`](/ja/docs/Web/API/IDBObjectStore/createIndex) の引数 [`options`](/ja/docs/Web/API/IDBObjectStore/createIndex#options) を参照してください)
- {{domxref("IDBIndex.name")}}
  - : このインデックスの名前です。
- {{domxref("IDBIndex.objectStore")}} {{ReadOnlyInline}}
  - : このインデックスが参照するオブジェクトストアの名前です。
- {{domxref("IDBIndex.keyPath")}} {{ReadOnlyInline}}
  - : このインデックスの[キーパス](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#%E3%82%AD%E3%83%BC%E3%83%91%E3%82%B9)です。`null` である場合は、このインデックスは自動で作成されません。
- {{domxref("IDBIndex.multiEntry")}} {{ReadOnlyInline}}
  - : インデックスのキーパスを評価した結果が配列になったとき、インデックスがどのようにふるまうかを変更します。`true` の場合は、インデックスにキーの配列内の各アイテムに対応するレコードをそれぞれ作成します。`false` の場合は、配列であるキーに対応するレコード 1 個を作成します。
- {{domxref("IDBIndex.unique")}} {{ReadOnlyInline}}
  - : `true` の場合は、このインデックスはあるキーに対応する値の重複を許しません。

## インスタンスメソッド

[EventTarget](/ja/docs/Web/API/EventTarget) から継承します。

- {{domxref("IDBIndex.count()")}}
  - : {{domxref("IDBRequest")}} オブジェクトを返し、別のスレッドでキーの範囲に含まれるレコードの数を返します。
- {{domxref("IDBIndex.get()")}}
  - : {{domxref("IDBRequest")}} オブジェクトを返し、別のスレッドで参照先オブジェクトストア内の指定されたキーに対応する値、もしくは `key` が {{domxref("IDBKeyRange")}} のときは対応する最初の値を検索します。
- {{domxref("IDBIndex.getKey()")}}
  - : {{domxref("IDBRequest")}} オブジェクトを返し、指定されたキーに対応する主キー、もしくは `key` が {{domxref("IDBKeyRange")}} のときは対応する最初の主キーを別のスレッドで検索します。
- {{domxref("IDBIndex.getAll()")}}
  - : {{domxref("IDBRequest")}} オブジェクトを返し、指定されたキー、もしくは `key` が {{domxref("IDBKeyRange")}} の場合はキーの範囲に対応する参照先オブジェクトストア内の全ての値を別のスレッドで検索します。
- {{domxref("IDBIndex.getAllKeys()")}}
  - : {{domxref("IDBRequest")}} オブジェクトを返し、指定されたキー、もしくは `key` が {{domxref("IDBKeyRange")}} の場合はキーの範囲に対応する参照先オブジェクトストア内の全てのキーを別のスレッドで検索します。
- {{domxref("IDBIndex.openCursor()")}}
  - : {{domxref("IDBRequest")}} オブジェクトを返し、指定されたキーの範囲を走査するための[カーソル](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#%E3%82%AB%E3%83%BC%E3%82%BD%E3%83%AB)を別のスレッドで作成します。
- {{domxref("IDBIndex.openKeyCursor()")}}
  - : {{domxref("IDBRequest")}} オブジェクトを返し、指定されたキーの範囲をこのインデックスの順番で走査するためのカーソルを別のスレッドで作成します。

## 例

以下の例では、トランザクションとオブジェクトストアを開き、シンプルな連絡先データベースからインデックス `lName` を取得します。そして、{{domxref("IDBIndex.openCursor")}} を用いてそのインデックスで基本的なカーソルを開きます。これは、返されるレコードが主キーではなくこのインデックスによりソートされること以外、{{domxref("IDBObjectStore.openCursor")}} を用いて `ObjectStore` で直接カーソルを開いたときと同じように動作します。

最後に、レコードを走査し、データを HTML テーブルに追加します。動く例全体は、[IndexedDB-examples demo レポジトリ](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex)を参照してください。([動く例を見る](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/))

```js
function displayDataByIndex() {
  tableEntry.innerHTML = "";
  const transaction = db.transaction(["contactsList"], "readonly");
  const objectStore = transaction.objectStore("contactsList");

  const myIndex = objectStore.index("lName");
  myIndex.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const tableRow = document.createElement("tr");
      tableRow.innerHTML =
        `<td>${cursor.value.id}</td>` +
        `<td>${cursor.value.lName}</td>` +
        `<td>${cursor.value.fName}</td>` +
        `<td>${cursor.value.jTitle}</td>` +
        `<td>${cursor.value.company}</td>` +
        `<td>${cursor.value.eMail}</td>` +
        `<td>${cursor.value.phone}</td>` +
        `<td>${cursor.value.age}</td>`;
      tableEntry.appendChild(tableRow);

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

{{Compat}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- トランザクションの開始: {{domxref("IDBDatabase")}}
- トランザクションの使用: {{domxref("IDBTransaction")}}
- キーの範囲の設定: {{domxref("IDBKeyRange")}}
- データの取得と変更: {{domxref("IDBObjectStore")}}
- カーソルの使用: {{domxref("IDBCursor")}}
- リファレンス例: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
