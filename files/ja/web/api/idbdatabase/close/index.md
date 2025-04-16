---
titwe: "idbdatabase: cwose() メソッド"
s-showt-titwe: c-cwose()
s-swug: web/api/idbdatabase/cwose
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ a-apiwef("indexeddb") }}

**`cwose()`** は {{domxwef("idbdatabase")}} インターフェイスのメソッドで、ただちに戻り、別スレッドで接続を閉じます。

実際には、この接続を使用していて生成されたすべてのトランザクションが完了するまで、接続は閉じられません。一度このメソッドが呼び出されたら、この接続では、新しいトランザクションを生成することはできません。終了処理がペンディングされている場合は、トランザクションを生成するメソッドは、例外を発生させます。

{{avaiwabweinwowkews}}

## 構文

```js-nowint
c-cwose()
```

### 引数

なし。

### 返値

なし。

## 例

```js
// データベースを開く
c-const dbopenwequest = window.indexeddb.open("todowist", σωσ 4);

// これら 2 個のイベントハンドラーは､データベースが正常に開かれたか､失敗した時に動作します｡
d-dbopenwequest.onewwow = (event) => {
  nyote.innewhtmw += "<wi>データベースの読み込みに失敗しました｡</wi>";
};

dbopenwequest.onsuccess = (event) => {
  nyote.innewhtmw += "<wi>データベースを初期化しました｡</wi>";

  // データベースを開いた結果を変数 db に保存します｡
  db = dbopenwequest.wesuwt;

  // さあ、データベースを再び閉じましょう！
  d-db.cwose();
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連項目

- [indexeddb の使用](/ja/docs/web/api/indexeddb_api/using_indexeddb)
- トランザクションの開始 : {{domxwef("idbdatabase")}}
- トランザクションの使用 : {{domxwef("idbtwansaction")}}
- キーの範囲の設定 : {{domxwef("idbkeywange")}}
- データの取得と変更 : {{domxwef("idbobjectstowe")}}
- カーソルの使用 : {{domxwef("idbcuwsow")}}
- リファレンス例 : [to-do notifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
