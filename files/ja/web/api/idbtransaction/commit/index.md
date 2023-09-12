---
title: "IDBTransaction: commit() メソッド"
slug: Web/API/IDBTransaction/commit
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBTransaction")}} インターフェイスの **`commit()`** メソッドは、実行中のトランザクションで呼ばれると、トランザクションをコミットします。

なお、`commit()` は通常呼ばれる _必要は_ ありません。未完了の要求がすべて完了し、新しい要求がなされないとき、トランザクションは自動でコミットされます。`commit()` は未完了の要求に関するイベントが発火するのを待たずにコミットプロセスを開始するために使用できます。

実行中でないトランザクションで呼ばれたときは、`InvalidStateError` {{domxref("DOMException")}} を投げます。

{{AvailableInWorkers}}

## 構文

```js-nolint
commit()
```

### 引数

なし

### 返値

なし ({{jsxref("undefined")}})

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : トランザクションの状態が実行中でないとき投げられます。

## 例

```js
const note = document.getElementById("notifications");

// データベースの読み書きトランザクションを開き、データを追加する準備をする
const transaction = db.transaction(["myDB"], "readwrite");

// トランザクションを開くのに成功したら報告する
transaction.oncomplete = (event) => {
  note.innerHTML +=
    "<li>トランザクション完了: データベースの変更が完了しました。</li>";
};

transaction.onerror = (event) => {
  note.innerHTML +=
    "<li>トランザクションはエラーのため開けませんでした。アイテムは重複させられません。</li>";
};

// トランザクション上でオブジェクトストアを生成する
const objectStore = transaction.objectStore("myObjStore");

// オブジェクトストアに newItem オブジェクトを追加する
const objectStoreRequest = objectStore.add(newItem[0]);

objectStoreRequest.onsuccess = (event) => {
  // 要求の成功を報告する (これは、アイテムがデータベースにに正常に格納されたことを意味しません。
  // これを知るには、transaction.onsuccess を用いる必要があります)
  note.innerHTML += "<li>要求に成功しました。</li>";
};

// 今すぐ変更をデータベースにコミットさせる
transaction.commit();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- トランザクションの開始: {{domxref("IDBDatabase")}}
- トランザクションの使用: {{domxref("IDBTransaction")}}
- キー範囲の設定: {{domxref("IDBKeyRange")}}
- データの取得と変更: {{domxref("IDBObjectStore")}}
- カーソルの使用: {{domxref("IDBCursor")}}
- リファレンス例: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
