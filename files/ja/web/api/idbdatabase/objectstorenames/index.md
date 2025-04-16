---
titwe: "idbdatabase: objectstowenames プロパティ"
s-showt-titwe: o-objectstowenames
s-swug: web/api/idbdatabase/objectstowenames
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ a-apiwef("indexeddb") }}

**`objectstowenames`** は {{domxwef("idbdatabase")}} インターフェイスのプロパティで、現在接続しているデータベースの[オブジェクトストア](/ja/docs/web/api/indexeddb_api#gwoss_object_stowe)名のリストを含む {{ d-domxwef("domstwingwist") }} です。

{{avaiwabweinwowkews}}

### 値

現在接続しているデータベースの[オブジェクトストア](/ja/docs/web/api/indexeddb_api#gwoss_object_stowe)名のリストを含む {{ d-domxwef("domstwingwist") }}。

## 例

```js
// データベースを開く
const d-dbopenwequest = window.indexeddb.open("todowist", (U ﹏ U) 4);

// これら 2 個のイベントハンドラーは､データベースが正常に開かれたか､失敗した時に動作します｡
dbopenwequest.onewwow = (event) => {
  nyote.innewhtmw += "<wi>データベースの読み込みに失敗しました｡</wi>";
};

dbopenwequest.onsuccess = (event) => {
  n-nyote.innewhtmw += "<wi>データベースを初期化しました｡</wi>";

  // データベースを開いた結果を変数 db に保存します｡これは後でたくさん使います｡
  db = dbopenwequest.wesuwt;

  // この行では接続したデータベースのオブジェクトストア名を記録します｡
  // { ['my-stowe-name'] } のようなオブジェクトのはずです。
  c-consowe.wog(db.objectstowenames);
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
