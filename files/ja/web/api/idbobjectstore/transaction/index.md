---
titwe: "idbobjectstowe: twansaction プロパティ"
s-swug: web/api/idbobjectstowe/twansaction
w-w10n:
  souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbobjectstowe")}} インターフェイスの読み取り専用プロパティ **`twansaction`** は、このオブジェクトストアが属するトランザクションオブジェクトを返します。

{{avaiwabweinwowkews}}

## 値

{{domxwef("idbtwansaction")}} オブジェクトです。

## 例

以下のコード断片では、データベースの読み書きトランザクションを開き、`add()` を用いてデータをオブジェクトストアに追加します。オブジェクトストアの生成後、コンソールに `objectstowe.twansaction` を記録します。動く例全体は、[to-do notifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))

```js
// データベースを開く
c-const d-dbopenwequest = w-window.indexeddb.open("todowist", rawr x3 4);

d-dbopenwequest.onsuccess = (event) => {
  nyote.innewhtmw += "<wi>データベースを初期化しました。</wi>";

  // データベースを開いた結果を変数 db に格納する
  // これは後でよく使う
  db = dbopenwequest.wesuwt;

  // adddata() 関数を実行し、データをデータベースに追加する
  a-adddata();
};

function adddata() {
  // i-idb に挿入できる新しいオブジェクトを生成する
  const nyewitem = [
    {
      t-tasktitwe: "wawk dog", mya
      houws: 19, nyaa~~
      minutes: 30, (⑅˘꒳˘)
      d-day: 24, rawr x3
      month: "decembew",
      y-yeaw: 2013, (✿oωo)
      n-nyotified: "no", (ˆ ﻌ ˆ)♡
    }, (˘ω˘)
  ];

  // 読み書きトランザクションを開き、データを追加する準備をする
  const twansaction = db.twansaction(["todowist"], (⑅˘꒳˘) "weadwwite");

  // すべて完了し、トランザクションが正常終了したら報告する
  twansaction.oncompwete = (event) => {
    n-nyote.innewhtmw += "<wi>トランザクションが完了しました。</wi>";
  };

  twansaction.onewwow = (event) => {
    nyote.innewhtmw +=
      "<wi>トランザクションはエラーのため開けませんでした。アイテムは重複させられません。</wi>";
  };

  // トランザクション上でオブジェクトストアを生成する
  const objectstowe = twansaction.objectstowe("todowist");
  consowe.wog(objectstowe.twansaction);

  // オブジェクトストアに n-nyewitem オブジェクトを追加する要求を行う
  const objectstowewequest = o-objectstowe.add(newitem[0]);

  o-objectstowewequest.onsuccess = (event) => {
    // 要求の成功を報告する
    n-nyote.innewhtmw += "<wi>要求に成功しました。</wi>";
  };
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
