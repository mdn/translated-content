---
title: "IDBCursor: continuePrimaryKey() メソッド"
short-title: continuePrimaryKey()
slug: Web/API/IDBCursor/continuePrimaryKey
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

**`continuePrimaryKey()`** は {{domxref("IDBCursor")}} インターフェイスのメソッドで、カーソルを、キーが引数として指定するキーと一致し、かつ主キーが引数として指定する主キーと一致するアイテムに進めます。

典型的な使用例は、キーを 1 個ずつ比較することなく、前に使用したカーソルが閉じた場所から反復を再開することです。

新しいカーソルのデータを読み込む前にこのメソッドを複数回呼び出す (たとえば、同じ `onsuccess` ハンドラーで `continuePrimaryKey()` を 2 回呼び出す) と、カーソルの値を得たフラグがクリアされているため、2 回目の呼び出しで `InvalidStateError` 例外が発生します。

このメソッドは、インデックスを対象とするカーソルでのみ有効です。オブジェクトストアを対象とするカーソルで使うと、エラーが発生します。

## 構文

```js-nolint
continuePrimaryKey(key, primaryKey)
```

### 引数

- `key`
  - : カーソルの位置を設定したいキーです。
- `primaryKey`
  - : カーソルの位置を設定したい主キーです。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

このメソッドは、以下の種類の {{domxref("DOMException")}} を発生させる可能性があります。

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : この `IDBCursor` のトランザクションが活性状態でないとき投げられます。
- `DataError` {{domxref("DOMException")}}
  - : 引数のキーが以下の条件のいずれかを満たすとき投げられます。
    - キーが有効でない
    - キーがカーソルの位置以下であり、かつカーソルの方向が `next` または `nextunique` である
    - キーがカーソルの位置以上であり、かつカーソルの方向が `prev` または `prevunique` である
- `InvalidStateError` {{domxref("DOMException")}}
  - : カーソルが現在反復中であるか、最後まで反復済みであるとき投げられます。
- `InvalidAccessError` {{domxref("DOMException")}}
  - : カーソルの方向が `prev` でも `next` でもないとき投げられます。

## 例

以下のようにすると、前回の訪問から `"javascript"` のタグがついた全記事に対する反復を再開できます。

```js
let request = articleStore.index("tag").openCursor();
let count = 0;
let unreadList = [];
request.onsuccess = (event) => {
  let cursor = event.target.result;
  if (!cursor) {
    return;
  }
  let lastPrimaryKey = getLastIteratedArticleId();
  if (lastPrimaryKey > cursor.primaryKey) {
    cursor.continuePrimaryKey("javascript", lastPrimaryKey);
    return;
  }
  // lastIteratedArticleId を更新する
  setLastIteratedArticleId(cursor.primaryKey);
  // unreadList に 5 本の記事を追加しておく
  unreadList.push(cursor.value);
  if (++count < 5) {
    cursor.continue();
  }
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
- 参考例: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
