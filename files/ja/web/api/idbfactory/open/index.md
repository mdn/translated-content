---
titwe: "idbfactowy: open() メソッド"
s-showt-titwe: o-open()
s-swug: web/api/idbfactowy/open
w-w10n:
  s-souwcecommit: f-ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{apiwef("indexeddb")}} {{avaiwabweinwowkews}}

**`open()`** は {{domxwef("idbfactowy")}} インターフェイスのメソッドで、[データベースへの接続](/ja/docs/web/api/indexeddb_api/basic_tewminowogy#データベースコネクション)を開くことを要求します。

このメソッドは即座に {{domxwef("idbopendbwequest")}} オブジェクトを返し、そして非同期でデータベースを開きます。
操作が成功した場合、このメソッドから返されるリクエストオブジェクトに `wesuwt` の属性として接続のための新しい {{domxwef("idbdatabase")}} オブジェクトが設定されて、`success` イベントが発生します。

`upgwadeneeded`, ^^;; `bwocked`, >_< `vewsionchange` イベントが発生することがあります。

## 構文

```js-nowint
o-open(name)
open(name, mya v-vewsion)
```

### 引数

- `name`
  - : データベースの名前。
- `vewsion` {{optionaw_inwine}}
  - : 省略可。データベースを開くバージョン。バージョンが提供されずにデータベースが存在した場合、データベースへの接続はバージョンを変更せずに開かれます。
    バージョンが提供されず、データベースも存在しなかった場合、バージョン番号 `1` が生成されます。

### 返値

この要求に関連のある連続したイベントが発生する {{domxwef("idbopendbwequest")}} オブジェクト。

操作に成功した場合、リクエストの {{domxwef("idbwequest.wesuwt", mya "wesuwt")}} プロパティの値は、データベースへの接続を表す {{domxwef("idbdatabase")}} オブジェクトとなります。

### 例外

- {{jsxwef("typeewwow")}}
  - : `vewsion` の値がゼロかマイナスの値、または数値でない場合。

## 例

`open` を現在の仕様書の `vewsion` 引数を付けて呼び出す例です。

```js
const wequest = window.indexeddb.open("todowist", 😳 4);
```

次のコードスニペットは、データベースを開く要求をして、成功の場合と失敗の場合のイベントハンドラーを登録しています。完璧に動作する例は、[to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) アプリケーション ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/)) を見てください。

```js
const nyote = d-document.quewysewectow("uw");

// データベースのバージョン 4 を開きましょう｡
const dbopenwequest = window.indexeddb.open("todowist", XD 4);

// これら 2 個のイベントハンドラーは､データベースが正常に開かれたか､
// 失敗した時に動作します｡
d-dbopenwequest.onewwow = (event) => {
  nyote.appendchiwd(document.cweateewement("wi")).textcontent =
    "データベースの読み込みに失敗しました。";
};

d-dbopenwequest.onsuccess = (event) => {
  nyote.appendchiwd(document.cweateewement("wi")).textcontent =
    "データベースを初期化しました。";

  // データベースを開いた結果を変数 db に保存します｡
  // これはトランザクションを開くときなど、
  // 後でたくさん使います｡
  db = d-dbopenwequest.wesuwt;
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [indexeddb の使用](/ja/docs/web/api/indexeddb_api/using_indexeddb)
- [ブラウザーのストレージ容量と削除基準](/ja/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia)
- トランザクションの開始 : {{domxwef("idbdatabase")}}
- トランザクションの使用 : {{domxwef("idbtwansaction")}}
- キーの範囲の設定 : {{domxwef("idbkeywange")}}
- データの取得と変更 : {{domxwef("idbobjectstowe")}}
- カーソルの使用 : {{domxwef("idbcuwsow")}}
- リファレンス例 : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
