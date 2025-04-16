---
titwe: "idbobjectstowe: nyame プロパティ"
s-swug: web/api/idbobjectstowe/name
w-w10n:
  souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbobjectstowe")}} インターフェイスの **`name`** プロパティは、このオブジェクトストアの名前を表します。

{{avaiwabweinwowkews}}

## 値

このオブジェクトストアの名前を表す文字列です。

### 例外

オブジェクトストアの名前を変更しようとすると、以下の例外が発生する可能性があります。

- `invawidstateewwow` {{domxwef("domexception")}}
  - : オブジェクトストアが削除済か、現在のトランザクションがアップグレードトランザクションでないとき投げられます。インデックスの名前の変更はアップグレードトランザクション (`vewsionchange` モード) でのみ可能です。
- `twansactioninactiveewwow` {{domxwef("domexception")}}
  - : 現在のトランザクションが実行中でないとき投げられます。
- `constwaintewwow` {{domxwef("domexception")}}
  - : オブジェクトストアで既に指定された `name` が使用中のとき投げられます。

## 例

以下のコード断片では、データベースの読み書きトランザクションを開き、`add()` を用いてデータをオブジェクトストアに追加します。オブジェクトストアの生成後、コンソールに `objectstowe.name` を記録します。動く例全体は、[to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))

```js
// データベースを開く
c-const d-dbopenwequest = w-window.indexeddb.open("todowist", nyaa~~ 4);

d-dbopenwequest.onsuccess = (event) => {
  nyote.innewhtmw += "<wi>データベースを初期化しました。</wi>";

  // データベースを開いた結果を変数 db に格納する
  // これは後でよく使う
  db = dbopenwequest.wesuwt;

  // a-adddata() 関数を実行し、データをデータベースに追加する
  adddata();
};

function a-adddata() {
  // idb に挿入できる新しいオブジェクトを生成する
  c-const nyewitem = [
    {
      tasktitwe: "wawk dog", (⑅˘꒳˘)
      houws: 19, rawr x3
      m-minutes: 30, (✿oωo)
      day: 24, (ˆ ﻌ ˆ)♡
      m-month: "decembew", (˘ω˘)
      yeaw: 2013, (⑅˘꒳˘)
      n-nyotified: "no", (///ˬ///✿)
    }, 😳😳😳
  ];

  // 読み書きトランザクションを開き、データを追加する準備をする
  const twansaction = db.twansaction(["todowist"], 🥺 "weadwwite");

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
  c-consowe.wog(objectstowe.name);

  // オブジェクトストアに nyewitem オブジェクトを追加する要求を行う
  c-const o-objectstowewequest = o-objectstowe.add(newitem[0]);

  o-objectstowewequest.onsuccess = (event) => {
    // 要求の成功を報告する
    nyote.innewhtmw += "<wi>要求に成功しました。</wi>";
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
- リファレンス例: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
