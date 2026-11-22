---
title: IDBTransaction
slug: Web/API/IDBTransaction
l10n:
  sourceCommit: 4bb8f0d1f9cb2d0e23b9e19f798a7ff39ac34a49
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

**`IDBTransaction`** は [IndexedDB API](/ja/docs/Web/API/IndexedDB_API) のインターフェイスで、イベントハンドラー属性を使って、データベース上の静的かつ非同期なトランザクションを提供します。すべてのデータの読み書きはトランザクション内で行われます。{{domxref("IDBDatabase")}} を使ってトランザクションを開始し、`IDBTransaction` でトランザクションのモード (例: `readonly` または `readwrite`) を設定します。また、{{domxref("IDBObjectStore")}} にアクセスしてリクエストを作成します。`IDBTransaction` オブジェクトを使ってトランザクションを中止することもできます。

{{InheritanceDiagram}}

トランザクションは、最初のリクエストが発行された時ではなく、トランザクションが生成されたときに開始します。例えば、次のものを考えてください。

```js
const trans1 = db.transaction("foo", "readwrite");
const trans2 = db.transaction("foo", "readwrite");
const objectStore2 = trans2.objectStore("foo");
const objectStore1 = trans1.objectStore("foo");
objectStore2.put("2", "key");
objectStore1.put("1", "key");
```

このコードが実行された後で、オブジェクトストアには "2" が含まれているはずであり、これは `trans2` が `trans1` の後に実行されるからです。

トランザクションは、イベントループのタスク間でアクティブ状態と非アクティブ状態を交互に取ります。作成されたタスクと、リクエストの [`success`](/ja/docs/Web/API/IDBRequest/success_event) または [`error`](/ja/docs/Web/API/IDBRequest/error_event) イベントハンドラーを実行する各タスクではアクティブです。それ以外のタスクでは非アクティブで、その間にリクエストを発行すると失敗します。トランザクションがアクティブな間に新しいリクエストが発行されず、ほかに未処理のリクエストもなければ、トランザクションは自動的にコミットされます。

## トランザクションの失敗

トランザクションは決まった数の理由で失敗することがあり（ユーザーエージェントのクラッシュを除く）、いずれの場合も `abort` コールバックを起動します。

- 不正な要求による失敗。例えば、`add()` で同じキーを 2 回追加しようとしたり、`put()` で一意性制約に反して同じインデックスキーを追加しようとした場合。これは要求のエラーを起こし、このエラーはトランザクションのエラーとして伝搬し、これによりトランザクションがアボートします。これは、要求の `error` イベントで `preventDefault()` を用いることで回避できます。
- スクリプトによる明示的な `abort()` の呼び出し。
- 要求の `success` / `error` ハンドラー内で捕捉されない例外。
- I/O エラー (ディスクへの書き込みの失敗や、他の OS / ハードウェアのエラーなど)
- 制限の超過。
- ユーザーエージェントのクラッシュ。

## Firefox における永続性の保証

Firefox 40 以降、IndexedDB のトランザクションはパフォーマンスを向上させるために永続性の保証が緩くなりました。([Firefox バグ 1112702](https://bugzil.la/1112702) を参照してください) これまでは、`readwrite` のトランザクションでは {{domxref("IDBTransaction.complete_event", "complete")}} イベントはすべてのデータがディスクに書き込まれたことが保証されてから発生していました。Firefox 40 以降では、`complete` イベントは OS にデータの書き込みを指示した後に発生しますが、データが実際にディスクに書き込まれる前である可能性があります。`complete` イベントは以前より早く通知されますが、データがディスクに書き込まれる前にシステムの電源が失われたり、OS がクラッシュしたりすると、わずかながらトランザクション全体が失われる可能性があります。このような壊滅的な事象はほとんど起こらないため、ほとんどの利用者は心配しなくていいでしょう。

何らかの理由で永続性を保証する必要がある場合 (たとえば、後で再計算できない重要なデータを保存しようとしている場合) 実験的な (標準でない) `readwriteflush` モードを利用してトランザクションを生成することで、`complete` イベントを通知する前にディスクへ書き込むことを強制することができます。({{domxref("IDBDatabase.transaction")}} を参照してください)

## インスタンスプロパティ

- {{domxref("IDBTransaction.db")}} {{ReadOnlyInline}}
  - : このトランザクションが紐づいているデータベースへの接続です。
- {{domxref("IDBTransaction.durability")}} {{ReadOnlyInline}}
  - : トランザクションの作成時に指定された耐久性のヒントを返します。
- {{domxref("IDBTransaction.error")}} {{ReadOnlyInline}}
  - : トランザクションが失敗したとき、発生したエラーの種類を表す {{domxref("DOMException")}} を返します。トランザクションが完了していないとき、完了して正常にコミットしたとき、{{domxref("IDBTransaction.abort()")}} 関数によりアボートされたときは `null` です。
- {{domxref("IDBTransaction.mode")}} {{ReadOnlyInline}}
  - : トランザクションの対象のオブジェクトストア内のデータへのアクセスを隔離するためのモードです。デフォルト値は `readonly` です。
- {{domxref("IDBTransaction.objectStoreNames")}} {{ReadOnlyInline}}
  - : トランザクションに関連付いた {{domxref("IDBObjectStore")}} の名前を格納した {{domxref("DOMStringList")}} を返します。

## インスタンスメソッド

{{domxref("EventTarget")}} から継承します。

- {{domxref("IDBTransaction.abort()")}}
  - : このトランザクションに関連付いたデータベース内のオブジェクトへの変更をロールバックします。このトランザクションがアボート済または完了済のときは、このメソッドは `error` イベントを発生させます。
- {{domxref("IDBTransaction.objectStore()")}}
  - : このトランザクションの対象に含まれるオブジェクトストアを表す {{domxref("IDBObjectStore")}} オブジェクトを返します。
- {{domxref("IDBTransaction.commit()")}}
  - : 進行中のトランザクションをコミットします。なお、このメソッドは通常呼ばれる _必要_ はありません。進行中の要求が全て満たされ、新しい要求がなされなかったとき、トランザクションは自動的にコミットされます。`commit()` は、進行中の要求からのイベントが処理されるのを待たずにコミット処理を開始するために使用できます。

## イベント

`addEventListener()` を用いるか、このインターフェイスの `oneventname` プロパティにイベントリスナーを代入することにより、これらのイベントをリッスンします。

- [`abort`](/ja/docs/Web/API/IDBTransaction/abort_event)
  - : `IndexedDB` のトランザクションがアボートされたときに発生します。
    [`onabort`](/ja/docs/Web/API/IDBTransaction/abort_event) プロパティからも利用でき、このイベントは {{domxref("IDBDatabase")}} にバブリングします。
- [`complete`](/ja/docs/Web/API/IDBTransaction/complete_event)
  - : トランザクションが正常に完了したときに発生します。
    [`oncomplete`](/ja/docs/Web/API/IDBTransaction/complete_event) プロパティからも利用できます。
- [`error`](/ja/docs/Web/API/IDBTransaction/error_event)
  - : リクエストがエラーを返し、イベントがデータベース接続オブジェクト ({{domxref("IDBDatabase")}}) にバブリングしたときに発生します。
    [`onerror`](/ja/docs/Web/API/IDBTransaction/error_event) プロパティからも利用できます。

## モード定数

> [!WARNING]
> これらの定数はもう利用可能ではありません。Gecko 25 で削除されました。かわりに、これらの文字列定数を直接使用するべきです。([Firefox バグ 888598](https://bugzil.la/888598))

トランザクションはこれらの 3 種類のモードのうち 1 個を持つことができます。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">定数</th>
      <th scope="col">値</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>READ_ONLY</code>
      </td>
      <td>"readonly" (Chrome では 0)</td>
      <td><p>データを読み取れますが、変更はできません。</p></td>
    </tr>
    <tr>
      <td>
        <code>READ_WRITE</code>
      </td>
      <td>"readwrite" (Chrome では 1)</td>
      <td>
        既存のデータストア内のデータを読み書きできます。
      </td>
    </tr>
    <tr>
      <td>
        <code>VERSION_CHANGE</code>
      </td>
      <td>"versionchange" (Chrome では 2)</td>
      <td>
        オブジェクトストアやインデックスの作成・削除など、任意の操作ができます。
        このモードのトランザクションは他のトランザクションと並行して実行できません。
        このモードのトランザクションは「アップグレードトランザクション」と呼ばれます。
      </td>
    </tr>
  </tbody>
</table>

これらの定数は非推奨ですが、必要であれば後方互換性のために使用できます。オブジェクトが利用できなくなる場合に備え、以下のように保守的なコードを書くべきです。

```js
const myIDBTransaction = window.IDBTransaction ||
  window.webkitIDBTransaction || { READ_WRITE: "readwrite" };
```

## 例

次のコードスニペットでは、データベース上で読み書きトランザクションを開き、オブジェクトストアにデータを追加します。また、トランザクションの成功または失敗を知らせるため、トランザクションのイベントハンドラーに関数を割り当てている点にも注目してください。完全な動作例については、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリ ([動作例を見る](https://mdn.github.io/dom-examples/to-do-notifications/)) を参照してください。

```js
const note = document.getElementById("notifications");

// IDB データを保存するデータベースオブジェクト
let db;

// データベースを開く
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Database initialized.";

  // データベースを開いた結果を db に保存
  // 以下で頻繁に使用
  db = DBOpenRequest.result;

  // データベースにデータを追加
  addData();
};

function addData() {
  // IDB に挿入するオブジェクトを作成
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

  // 読み書きトランザクションを開いてデータ追加の準備
  const transaction = db.transaction(["toDoList"], "readwrite");

  // トランザクション開始の成功を報告
  transaction.oncomplete = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "トランザクション完了 : データベースの変更が完了しました。";
  };

  transaction.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "トランザクションはエラーのため開けませんでした。重複するアイテムは許されません。";
  };

  // トランザクションにオブジェクトストアを作成
  const objectStore = transaction.objectStore("toDoList");

  // newItem をオブジェクトストアに追加
  const objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = (event) => {
    // リクエストの成功を報告 (DB への保存成功を意味するわけではない)
    // 保存確認には transaction.oncomplete が必要
    note.appendChild(document.createElement("li")).textContent =
      "Request successful.";
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
- キーの範囲の設定 : {{domxref("IDBKeyRange")}}
- データの受け取りや変更 : {{domxref("IDBObjectStore")}}
- カーソルの使用 : {{domxref("IDBCursor")}}
- リファレンスの例 : [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
