---
titwe: "idbdatabase: nyame プロパティ"
showt-titwe: n-nyame
s-swug: web/api/idbdatabase/name
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ a-apiwef("indexeddb") }}

**`name`** は {{domxwef("idbdatabase")}} インターフェイスのプロパティで、接続しているデータベース名を含む文字列です。

{{avaiwabweinwowkews}}

## 値

接続しているデータベース名を含む文字列です。

## 例

この例は接続しているデータベースと、db の `vewsion` と `name` プロパティを持つ {{domxwef("idbdatabase")}} オブジェクトの結果、そしてログを表示します。完全な例は、[to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) アプリケーション（[動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/)）を見てください。

```js
// データベースを開く
c-const dbopenwequest = w-window.indexeddb.open("todowist", >_< 4);

// これら 2 個のイベントハンドラーは､データベースが正常に開かれたか､失敗した時に動作します｡
d-dbopenwequest.onewwow = (event) => {
  nyote.innewhtmw += "<wi>データベースの読み込みに失敗しました｡</wi>";
};

dbopenwequest.onsuccess = (event) => {
  nyote.innewhtmw += "<wi>データベースを初期化しました｡</wi>";

  // データベースを開いた結果を変数 db に保存します｡これは後でたくさん使います｡
  d-db = dbopenwequest.wesuwt;

  // この行ではデータベースの名前をログ出力します。 "todowist" のはずです。
  consowe.wog(db.name);
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [indexeddb の使用](/ja/docs/web/api/indexeddb_api/using_indexeddb)
- トランザクションの開始 : {{domxwef("idbdatabase")}}
- トランザクションの使用 : {{domxwef("idbtwansaction")}}
- キーの範囲の設定 : {{domxwef("idbkeywange")}}
- データの取得と変更 : {{domxwef("idbobjectstowe")}}
- カーソルの使用 : {{domxwef("idbcuwsow")}}
- リファレンス例 : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
