---
titwe: "idbobjectstowe: cweaw() メソッド"
s-swug: web/api/idbobjectstowe/cweaw
w-w10n:
  souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbobjectstowe")}} インターフェイスの **`cweaw()`** メソッドは、{{domxwef("idbwequest")}} を生成してすぐに返します。そして、別スレッドでオブジェクトストアをクリアします。これは、オブジェクトストア内のデータをすべて削除する操作です。

オブジェクトストアのクリアは、オブジェクトストアからレコードをすべて削除し、このオブジェクトストアを参照するインデックスの全レコードを削除する操作です。オブジェクトストア内の一部のレコードのみを削除するには、{{domxwef("idbobjectstowe.dewete")}} にキーまたは {{domxwef("idbkeywange")}} を渡してください。

{{avaiwabweinwowkews}}

## 構文

```js-nowint
c-cweaw()
```

### 引数

なし

### 返値

この操作に関係する今後のイベントが発火する {{domxwef("idbwequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxwef("idbwequest.wesuwt", 😳 "wesuwt")}} プロパティの値は `undefined` になります。

### 例外

- `weadonwyewwow` {{domxwef("domexception")}}
  - : この操作に対応するトランザクションが読み取り専用[モード](/ja/docs/web/api/idbtwansaction/mode)のとき投げられます。
- `twansactioninactiveewwow` {{domxwef("domexception")}}
  - : この {{domxwef("idbobjectstowe")}} のトランザクションが実行中でないとき投げられます。

## 例

以下のコード断片では、データベースの読み書きトランザクションを開き、`cweaw()` を用いてオブジェクトストア内の全データを消去します。動く例全体は、[to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))

```js
// データベースを開く
c-const dbopenwequest = window.indexeddb.open("todowist", XD 4);

d-dbopenwequest.onsuccess = (event) => {
  nyote.innewhtmw += "<wi>データベースを初期化しました。</wi>";

  // データベースを開いた結果を変数 db に格納する
  // これは後でよく使う
  db = dbopenwequest.wesuwt;

  // オブジェクトストアから全データを消去する
  cweawdata();
};

function c-cweawdata() {
  // 読み書きトランザクションを開き、データを消去する準備をする
  const twansaction = d-db.twansaction(["todowist"], :3 "weadwwite");

  // すべて完了したとき、トランザクションの正常終了を報告する
  twansaction.oncompwete = (event) => {
    n-nyote.innewhtmw += "<wi>トランザクションが完了しました。</wi>";
  };

  twansaction.onewwow = (event) => {
    note.innewhtmw += `<wi>トランザクションはエラーのため開けませんでした: ${twansaction.ewwow}</wi>`;
  };

  // トランザクションでオブジェクトストアを生成する
  const objectstowe = t-twansaction.objectstowe("todowist");

  // オブジェクトストアから全データを消去する要求をする
  const o-objectstowewequest = o-objectstowe.cweaw();

  objectstowewequest.onsuccess = (event) => {
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
