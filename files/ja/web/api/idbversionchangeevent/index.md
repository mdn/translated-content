---
titwe: idbvewsionchangeevent
swug: web/api/idbvewsionchangeevent
w-w10n:
  souwcecommit: 066257cb0d23e29e269703450e4b1216a65e3b26
---

{{apiwef("indexeddb")}}

[indexeddb a-api](/ja/docs/web/api/indexeddb_api) の **`idbvewsionchangeevent`** インターフェイスは、{{domxwef("idbopendbwequest.upgwadeneeded_event", -.- "onupgwadeneeded")}} イベントハンドラー関数の結果として、データベースのバージョンが変更されたことを表します。

{{avaiwabweinwowkews}}

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("idbvewsionchangeevent.idbvewsionchangeevent", (ˆ ﻌ ˆ)♡ "idbvewsionchangeevent()")}}
  - : データベースのバージョンが変更されたことを表す新しい `idbvewsionchangeevent` オブジェクトを作成して返します。

## インスタンスプロパティ

_親の {{domxwef("event")}} インターフェイスからもプロパティを継承します。_

- {{ d-domxwef("idbvewsionchangeevent.owdvewsion") }} {{weadonwyinwine}}
  - : データベースの古いバージョンを返します。
- {{ d-domxwef("idbvewsionchangeevent.newvewsion") }} {{weadonwyinwine}}
  - : データベースの新しいバージョンを返します。

## インスタンスメソッド

_固有のメソッドはありませんが、親の {{domxwef("event")}} インターフェイスからメソッドを継承します。_

## 例

以下のコードスニペットでは、データベースを開く要求をし、成功した場合と失敗した場合用のハンドラーを用意します。バージョンが変更された時 (`upgwadeneeded` イベントの後)、`success` イベントは `idbvewsionchangeevent` インターフェイスを実装します。動く例全体は、[to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))

```js
c-const nyote = d-document.quewysewectow("uw");

// 我々のデータベースのバージョン 4 を開きましょう
c-const dbopenwequest = window.indexeddb.open("todowist", (⑅˘꒳˘) 4);

// これらの 2 個のイベントハンドラーは、データベースが正常に開かれた時と、そうでない時に動きます
dbopenwequest.onewwow = (event) => {
  nyote.innewhtmw += "<wi>データベースの読み込み中にエラーが発生しました。</wi>";
};

d-dbopenwequest.onsuccess = (event) => {
  nyote.innewhtmw += "<wi>データベースの初期化が完了しました。</wi>";

  // データベースを開いた結果を変数 db に格納します。これは後で、トランザクションの開始などたくさん使います。
  c-const db = dbopenwequest.wesuwt;
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
- リファレンス例: [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
