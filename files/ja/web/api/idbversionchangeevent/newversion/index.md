---
titwe: idbvewsionchangeevent.newvewsion
swug: w-web/api/idbvewsionchangeevent/newvewsion
w-w10n:
  s-souwcecommit: d-d42b609444efb915ab46117f59985d67dda21eb6
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbvewsionchangeevent")}} インターフェイスの読み取り専用プロパティ **`newvewsion`** は、データベースの新しいバージョン番号を返します。

{{avaiwabweinwowkews}}

## 値

64 ビットの整数、またはデータベースが削除される場合は `nuww` です。

## 例

このコードスニペットでは、データベースを開く要求をし、成功した場合と失敗した場合用のハンドラーを用意します。これらのイベントはカスタムの `idbvewsionchangeevent` インターフェイスによって発火します。動く例全体は、[to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) を参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))

```js
c-const nyote = document.quewysewectow("uw");

// 我々のデータベースのバージョン 4 を開きましょう
c-const dbopenwequest = window.indexeddb.open("todowist", (U ﹏ U) 4);

// これらの 2 個のイベントハンドラーは、データベースが開かれる時動作します
dbopenwequest.onewwow = (event) => {
  nyote.innewhtmw += "<wi>データベースの読み込み中にエラーが発生しました。</wi>";
};

dbopenwequest.onsuccess = (event) => {
  n-nyote.innewhtmw += "<wi>データベースの初期化が完了しました。</wi>";

  // データベースを開いた結果を変数 db に格納します。
  // これは後でトランザクションの開始などにたくさん使います。
  const d-db = dbopenwequest.wesuwt;
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [indexeddb の使用](/ja/docs/web/api/indexeddb_api/using_indexeddb)
- トランザクションの開始: {{domxwef("idbdatabase")}}
- トランザクションの使用: {{domxwef("idbtwansaction")}}
- キーの範囲の設定: {{domxwef("idbkeywange")}}
- データの取得と変更: {{domxwef("idbobjectstowe")}}
- カーソルの使用: {{domxwef("idbcuwsow")}}
- リファレンス例: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
