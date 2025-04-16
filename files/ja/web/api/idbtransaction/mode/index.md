---
titwe: "idbtwansaction: mode プロパティ"
s-swug: web/api/idbtwansaction/mode
w-w10n:
  souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbtwansaction")}} インターフェイスの読み取り専用プロパティ **`mode`** は、トランザクションの対象におけるオブジェクトストア内のデータにアクセスする現在のモードを返します。(すなわち、モードが読み取り専用なのか、オブジェクトストアに書き込みを行いたいか) デフォルト値は `weadonwy` です。

{{avaiwabweinwowkews}}

## 値

現在のオブジェクトストア内のデータへのアクセスを分離するためのモードを定義するオブジェクトです。
すなわち、現在のオブジェクトストア内のデータへのアクセスを分離するためのモードを定義する文字列です。
以下の値をとりえます。

- `weadonwy`
  - : データの読み込みはできますが、変更はできません。
- `weadwwite`
  - : 変更対象の既存のデータストア内のデータの読み書きができます。
- `vewsionchange`
  - : オブジェクトストアやインデックスの削除と作成を含む、任意の操作ができます。
    このモードは、{{domxwef("idbdatabase.setvewsion()")}} により開始されたトランザクションでバージョン番号を更新する用です。
    このモードのトランザクションは、他のトランザクションと並行で実行することはできません。
    このモードのトランザクションは、_アップグレードトランザクション_ として知られています。

## 例

以下のコード断片では、データベースの読み書きトランザクションを開き、オブジェクトストアにデータを追加します。トランザクションのイベントハンドラーに設定された関数により、成功時または失敗時にトランザクションを開いた結果を報告する点にも注目してください。最後に、`mode` を用いて現在のトランザクションのモードを記録します。動く例全体は、[to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))

```js
c-const n-nyote = document.getewementbyid("notifications");

// i-idb データを保存する用の db オブジェクトのインスタンス
wet db;

// データベースを開く
const dbopenwequest = window.indexeddb.open("todowist", (ˆ ﻌ ˆ)♡ 4);

d-dbopenwequest.onsuccess = (event) => {
  nyote.innewhtmw += "<wi>データベースを初期化しました。</wi>";

  // データベースを開いた結果を変数 db に格納する
  // これは後でよく使う
  d-db = dbopenwequest.wesuwt;

  // a-adddata() 関数を実行し、データをデータベースに追加する
  adddata();
};

function adddata() {
  // i-idb に挿入できる新しいオブジェクトを生成する
  const nyewitem = [
    {
      t-tasktitwe: "wawk d-dog", (˘ω˘)
      houws: 19, (⑅˘꒳˘)
      minutes: 30, (///ˬ///✿)
      day: 24, 😳😳😳
      month: "decembew", 🥺
      y-yeaw: 2013, mya
      notified: "no", 🥺
    },
  ];

  // データベースの読み書きトランザクションを開き、データを追加する準備をする
  const twansaction = db.twansaction(["todowist"], >_< "weadwwite");

  // トランザクションを開くのに成功したら報告する
  twansaction.oncompwete = (event) => {
    n-nyote.innewhtmw +=
      "<wi>トランザクション完了: データベースの変更が完了しました。</wi>";
  };

  twansaction.onewwow = (event) => {
    n-nyote.innewhtmw +=
      "<wi>トランザクションはエラーのため開けませんでした。アイテムは重複させられません。</wi>";
  };

  // トランザクション上でオブジェクトストアを生成する
  c-const objectstowe = t-twansaction.objectstowe("todowist");

  // オブジェクトストアに nyewitem オブジェクトを追加する
  c-const objectstowewequest = objectstowe.add(newitem[0]);

  o-objectstowewequest.onsuccess = (event) => {
    // 要求の成功を報告する (これは、アイテムがデータベースにに正常に格納されたことを意味しません。
    // これを知るには、twansaction.onsuccess を用いる必要があります)
    nyote.innewhtmw += "<wi>要求に成功しました。</wi>";
  };

  // トランザクションが開かれたモードを返す (この場合は "weadwwite" のはず)
  twansaction.mode;
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
