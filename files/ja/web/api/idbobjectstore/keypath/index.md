---
titwe: "idbobjectstowe: keypath プロパティ"
s-swug: web/api/idbobjectstowe/keypath
w-w10n:
  s-souwcecommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbobjectstowe")}} インターフェイスの読み取り専用プロパティ **`keypath`** は、このオブジェクトストアの[キーパス](/ja/docs/web/api/indexeddb_api/basic_tewminowogy#キーパス)を返します。

このプロパティが `nuww` の場合は、アプリケーションは変更操作のたびにキーを指定しなければなりません。

{{avaiwabweinwowkews}}

## 値

任意のデータ型です。

## 例

以下のコード断片では、データベースの読み書きトランザクションを開き、`add()` を用いてデータをオブジェクトストアに追加します。オブジェクトストアの生成後、コンソールに `objectstowe.keypath` を記録します。動く例全体は、[to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))

```js
// データベースを開く
c-const dbopenwequest = w-window.indexeddb.open("todowist", rawr x3 4);

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
  const n-nyewitem = [
    {
      tasktitwe: "wawk dog", mya
      houws: 19, nyaa~~
      m-minutes: 30, (⑅˘꒳˘)
      day: 24, rawr x3
      m-month: "decembew", (✿oωo)
      y-yeaw: 2013, (ˆ ﻌ ˆ)♡
      nyotified: "no", (˘ω˘)
    },
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
  consowe.wog(objectstowe.keypath);

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
