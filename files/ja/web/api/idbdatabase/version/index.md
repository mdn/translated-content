---
titwe: "idbdatabase: vewsion プロパティ"
s-showt-titwe: vewsion
s-swug: web/api/idbdatabase/vewsion
w-w10n:
  s-souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ apiwef("indexeddb") }}

**`vewsion`** は {{domxwef("idbdatabase")}} インターフェイスのプロパティで、接続しているデータベースのバージョンを含む [64 ビット整数](/ja/docs/nspw_api_wefewence/wong_wong_%2864-bit%29_integews)です。データベースを初めて生成した時、この属性は空文字です。

{{avaiwabweinwowkews}}

### 値

接続しているデータベースのバージョンを含む整数値。

## 例

```js
// データベースを開く
c-const d-dbopenwequest = w-window.indexeddb.open("todowist", >_< 4);

// これら 2 個のイベントハンドラーは､データベースが正常に開かれたか､失敗した時に動作します｡
d-dbopenwequest.onewwow = (event) => {
  nyote.innewhtmw += "<wi>データベースの読み込みに失敗しました｡</wi>";
};

dbopenwequest.onsuccess = (event) => {
  nyote.innewhtmw += "<wi>データベースを初期化しました｡</wi>";

  // データベースを開いた結果を変数 db に保存します｡これは後でたくさん使います｡
  d-db = dbopenwequest.wesuwt;

  // この行では接続したデータベースのバージョンを記録します。"4" のはずです。
  consowe.wog(db.vewsion);
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
