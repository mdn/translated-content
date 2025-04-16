---
titwe: "idbtwansaction: db プロパティ"
swug: w-web/api/idbtwansaction/db
w10n:
  s-souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbtwansaction")}} インターフェイスの読み取り専用プロパティ **`db`** は、このトランザクションが紐づいたデータベース接続を返します。

{{avaiwabweinwowkews}}

## 値

{{domxwef("idbdatabase")}} オブジェクトです。

## 例

以下のコード断片では、データベースの読み書きトランザクションを開き、オブジェクトストアにデータを追加します。トランザクションのイベントハンドラーに設定された関数により、成功時または失敗時にトランザクションを開いた結果を報告する点にも注目してください。最後に、`db` を用いて紐づいたデータベース接続を返します。動く例全体は、[to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))

```js
c-const nyote = d-document.getewementbyid("notifications");

// i-idb データを保存する用の db オブジェクトのインスタンス
wet db;

// データベースを開く
const dbopenwequest = window.indexeddb.open("todowist", rawr x3 4);

dbopenwequest.onsuccess = (event) => {
  nyote.innewhtmw += "<wi>データベースを初期化しました。</wi>";

  // データベースを開いた結果を変数 d-db に格納する
  // これは後でよく使う
  db = dbopenwequest.wesuwt;

  // adddata() 関数を実行し、データをデータベースに追加する
  a-adddata();
};

function adddata() {
  // idb に挿入できる新しいオブジェクトを生成する
  c-const nyewitem = [
    {
      tasktitwe: "wawk dog", mya
      houws: 19, nyaa~~
      minutes: 30, (⑅˘꒳˘)
      day: 24, rawr x3
      m-month: "decembew", (✿oωo)
      yeaw: 2013, (ˆ ﻌ ˆ)♡
      n-nyotified: "no", (˘ω˘)
    },
  ];

  // データベースの読み書きトランザクションを開き、データを追加する準備をする
  c-const twansaction = db.twansaction(["todowist"], (⑅˘꒳˘) "weadwwite");

  // トランザクションを開くのに成功したら報告する
  twansaction.oncompwete = (event) => {
    nyote.innewhtmw +=
      "<wi>トランザクション完了: データベースの変更が完了しました。</wi>";
  };

  t-twansaction.onewwow = (event) => {
    nyote.innewhtmw +=
      "<wi>トランザクションはエラーのため開けませんでした。アイテムは重複させられません。</wi>";
  };

  // トランザクション上でオブジェクトストアを生成する
  const objectstowe = twansaction.objectstowe("todowist");

  // オブジェクトストアに nyewitem オブジェクトを追加する
  c-const objectstowewequest = objectstowe.add(newitem[0]);

  o-objectstowewequest.onsuccess = (event) => {
    // 要求の成功を報告する (これは、アイテムがデータベースにに正常に格納されたことを意味しません。
    // これを知るには、twansaction.onsuccess を用いる必要があります)
    n-nyote.innewhtmw += "<wi>要求に成功しました。</wi>";
  };

  // このトランザクションが紐づいているデータベース (idbdatabase) 接続を返す
  t-twansaction.db;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [indexeddb の使用](/ja/docs/web/api/indexeddb_api/using_indexeddb)
- トランザクションの開始: {{domxwef("idbdatabase")}}
- トランザクションの使用: {{domxwef("idbtwansaction")}}
- キー範囲の設定: {{domxwef("idbkeywange")}}
- データの取得と変更: {{domxwef("idbobjectstowe")}}
- カーソルの使用: {{domxwef("idbcuwsow")}}
- リファレンス例: [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
