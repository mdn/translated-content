---
title: IDBTransaction
slug: Web/API/IDBTransaction
---

{{APIRef("IndexedDB")}}

**`IDBTransaction`** は [IndexedDB API](/ja/docs/Web/API/IndexedDB_API) のインターフェイスで、イベントハンドラー属性を使用してデータベース上の静的で非同期のトランザクションを提供します。すべてのデータの読み書きはトランザクション内で行われます。{{domxref("IDBDatabase")}} を使用してトランザクションを開始し、{{domxref("IDBTransaction")}} を使用してトランザクションのモードを設定し (例 `readonly` または `readwrite`)、{{domxref("IDBObjectStore")}} にアクセスしてリクエストを作成します。`IDBTransaction` オブジェクトを使用してトランザクションを中止することもできます。

{{AvailableInWorkers}}

{{InheritanceDiagram}}

トランザクションは、最初のリクエストが発行された時ではなく、トランザクションが生成されたときに開始します。例えば、次のものを考えてください。

```js
var trans1 = db.transaction("foo", "readwrite");
var trans2 = db.transaction("foo", "readwrite");
var objectStore2 = trans2.objectStore("foo");
var objectStore1 = trans1.objectStore("foo");
objectStore2.put("2", "key");
objectStore1.put("1", "key");
```

このコードが実行された後で、オブジェクトストアには "2" が含まれているはずであり、これは `trans2` が `trans1` の後に実行されるからです。

## トランザクションの失敗

トランザクションは一定数の理由で失敗することがあり、(ユーザーエージェントのクラッシュを除いて) すべての場合に `abort` コールバックを起動します。

- 不正な要求による失敗。例えば、`add()` で同じキーを 2 回追加しようとしたり、`put()` で一意性制約に反して同じインデックスキーを追加しようとした場合。これは要求のエラーを起こし、このエラーはトランザクションのエラーとして伝搬し、これによりトランザクションがアボートします。これは、要求の `error` イベントで `preventDefault()` を用いることで回避できます。
- スクリプトによる明示的な `abort()` の呼び出し。
- 要求の `success` / `error` ハンドラー内での補足されない例外。
- I/O エラー (ディスクへの書き込みの失敗や、他の OS / ハードウェアのエラーなど)
- 制限の超過。
- ユーザーエージェントのクラッシュ。

## Firefox における永続性の保証

Firefox 40 以降、IndexedDB のトランザクションはパフォーマンスを向上させるために永続性の保証が緩くなりました。([Firefox バグ 1112702](https://bugzil.la/1112702) を参照してください) これまでは、`readwrite` のトランザクションでは {{domxref("IDBTransaction.oncomplete")}} は全てのデータがディスクに書き込まれたことが保証されてからのみ発火していました。Firefox 40+ では、`complete` イベントは OS にデータの書き込みを指示した後発火しますが、データが実際にディスクに書き込まれるより前の可能性があります。`complete` イベントは以前より早く通知されますが、データがディスクに書き込まれるより前にシステムの電源が失われたり、OS がクラッシュしたりすると、小さい確率でトランザクション全体が失われます。このような壊滅的な事象はほとんど起こらないため、ほとんどの利用者は心配しなくていいでしょう。

何らかの理由で永続性を保証する必要がある場合 (たとえば、後で再計算できない重要なデータを保存しようとしている場合) 実験的な (標準でない) `readwriteflush` モードを利用してトランザクションを生成することで、`complete` イベントを通知する前にディスクへ書き込むことを強制することができます。({{domxref("IDBDatabase.transaction")}} を参照してください)

## インスタンスプロパティ

- {{domxref("IDBTransaction.db")}} {{readonlyInline}}
  - : このトランザクションが紐づいているデータベースへの接続です。
- {{domxref("IDBTransaction.error")}} {{readonlyInline}}
  - : トランザクションが失敗したとき、発生したエラーの種類を表す {{domxref("DOMException")}} を返します。トランザクションが完了していないとき、完了して正常にコミットしたとき、{{domxref("IDBTransaction.abort()")}} 関数によりアボートされたときは `null` です。
- {{domxref("IDBTransaction.mode")}} {{readonlyInline}}
  - : トランザクションの対象のオブジェクトストア内のデータへのアクセスを隔離するためのモードです。デフォルト値は [`readonly`](#const_read_only) です。
- {{domxref("IDBTransaction.objectStoreNames")}} {{readonlyInline}}
  - : トランザクションに関連付いた {{domxref("IDBObjectStore")}} の名前を格納した {{domxref("DOMStringList")}} を返します。

## インスタンスメソッド

{{domxref("EventTarget")}} から継承します。

- {{domxref("IDBTransaction.abort()")}}
  - : このトランザクションに関連付いたデータベース内のオブジェクトへの変更をロールバックします。このトランザクションがアボート済または完了済のときは、このメソッドは `error` イベントを発火します。
- {{domxref("IDBTransaction.objectStore()")}}
  - : このトランザクションの対象に含まれるオブジェクトストアを表す {{domxref("IDBObjectStore")}} オブジェクトを返します。
- {{domxref("IDBTransaction.commit()")}}
  - : 進行中のトランザクションをコミットします。なお、このメソッドは通常呼ばれる _必要_ はありません。進行中の要求が全て満たされ、新しい要求がなされなかったとき、トランザクションは自動的にコミットされます。`commit()` は、進行中の要求からのイベントが処理されるのを待たずにコミット処理を開始するために使用できます。

## イベント

`addEventListener()` を用いるか、このインターフェイスの `oneventname` プロパティにイベントリスナーを代入することにより、これらのイベントをリッスンします。

- [`abort`](/ja/docs/Web/API/IDBTransaction/abort_event)
  - : `IndexedDB` のトランザクションがアボートされたとき発火します。
    [`onabort`](/ja/docs/Web/API/IDBTransaction/abort_event) プロパティからも利用可能です。
- [`complete`](/ja/docs/Web/API/IDBTransaction/complete_event)
  - : トランザクションが正常に完了したとき発火します。
    [`oncomplete`](/ja/docs/Web/API/IDBTransaction/complete_event) プロパティからも利用可能です。
- [`error`](/ja/docs/Web/API/IDBTransaction/error_event)
  - : 要求がエラーを返し、イベントがトランザクションオブジェクトに伝搬したとき発火します。
    [`onerror`](/ja/docs/Web/API/IDBTransaction/error_event) プロパティからも利用可能です。

## モード定数

{{ deprecated_header(13) }}

> [!WARNING]
> これらの定数はもう利用可能ではありません。Gecko 25 で削除されました。かわりに、これらの文字列定数を直接使用するべきです。([Firefox バグ 888598](https://bugzil.la/888598))

トランザクションはこれらの 3 種類のモードのうち 1 個を持つことができます。

| 定数                 | 値                                | 説明                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`READ_ONLY`]()      | `"readonly"`(Chrome では 0)       | データの読み取りができますが、変更はできません。                                                                                                                                                                                                                                                                                                                                                                                |
| [`READ_WRITE`]()     | `"readwrite"` (Chrome では 1)     | 変更対象のデータストア内のデータの読み書きができます。                                                                                                                                                                                                                                                                                                                                                                          |
| [`VERSION_CHANGE`]() | `"versionchange"` (Chrome では 2) | オブジェクトストアやインデックスの作成や削除を含む任意の操作を行えます。このモードは、{{domxref("IDBDatabase")}} オブジェクトの [`setVersion()`](/ja/docs/Web/API/IDBDatabase#setversion) メソッドにより開始されたトランザクションでバージョン番号を更新する用です。このモードのトランザクションは、他のトランザクションと並行で実行することはできません。このモードのトランザクションは、"upgrade transactions" と呼ばれます。 |

これらの定数は現在非推奨ですが、後方互換性を維持するために必要に応じてこれらの定数を使用することができます。(Chrome では、[バージョン 21 で変更がありました](https://peter.sh/2012/05/tab-sizing-string-values-for-indexeddb-and-chrome-21/)) これらのオブジェクトが利用できなくなっている場合に備え、以下のような保守的なコードを書くべきです。

```js
var myIDBTransaction = window.IDBTransaction ||
  window.webkitIDBTransaction || { READ_WRITE: "readwrite" };
```

## 例

次のコードスニペットでは、我々のデータベース上で読み書きのトランザクションを開き、オブジェクトストアにデータを追加します。成功または失敗した時にトランザクションの結果を知らせるため、トランザクションにアタッチしている関数にも注目してください。動く例全体は、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリケーション ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/)) を見てください｡

```js
// 我々のデータベースを開きましょう
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function (event) {
  note.innerHTML += "<li>データベースを初期化しました。</li>";

  // データベースを開いた結果を変数 db に保存します｡
  // これは後でたくさん使います｡
  db = DBOpenRequest.result;

  // データベースにデータを追加します
  addData();
};

function addData() {
  // IDB に挿入する新しいオブジェクトを作成します
  var newItem = [
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

  // 読み書きのトランザクションを開き、データの追加の準備をします
  var transaction = db.transaction(["toDoList"], "readwrite");

  // トランザクションを開くことに成功したら報告します
  transaction.oncomplete = function (event) {
    note.innerHTML +=
      "<li>トランザクション完了 : データベースの変更が完了しました。</li>";
  };

  transaction.onerror = function (event) {
    note.innerHTML +=
      "<li>トランザクションはエラーのため開けませんでした。重複するアイテムは許されません。</li>";
  };

  // トランザクション上でオブジェクトストアを生成します
  var objectStore = transaction.objectStore("toDoList");

  // オブジェクトストアに newItem オブジェクトを加えます
  var objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = function (event) {
    // 要求の成功を報告します (これは DB に項目が正常に保存されたという
    // ことではありません。これの確認には、transaction.oncomplete が必要です)
    note.innerHTML += "<li>要求に成功しました。</li>";
  };
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- トランザクションの開始 : {{domxref("IDBDatabase")}}
- トランザクションの使用 : {{domxref("IDBTransaction")}}
- キーの範囲の設定 : {{domxref("IDBKeyRange")}}
- データの受け取りや変更 : {{domxref("IDBObjectStore")}}
- カーソルの使用 : {{domxref("IDBCursor")}}
- リファレンスの例 : [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
