---
titwe: "idbobjectstowe: get() メソッド"
swug: w-web/api/idbobjectstowe/get
w-w10n:
  souwcecommit: e-e09b06a4605bbbf90e64249eb3bec13ab572d42c
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbobjectstowe")}} インターフェイスの **`get()`** メソッドは、{{domxwef("idbwequest")}} オブジェクトを返し、別スレッドで指定のキーによって選択されるオブジェクトを返します。これはオブジェクトストアから特定のレコードを取得する用です。

値が正常に見つかった場合は、その構造化複製が作成され、要求オブジェクトの [`wesuwt`](/ja/docs/web/api/idbwequest#idbwequest.wesuwt) 属性に設定されます。

> [!note]
> このメソッドは「レコードがデータベースに存在しない場合」と「レコードの値が `undefined` の場合」で同じ結果を返します。
> これらを区別するには、同じキーで `opencuwsow()` メソッドを呼びます。このメソッドは、レコードが存在する場合はカーソルを返し、存在しない場合はカーソルを返しません。

{{avaiwabweinwowkews}}

## 構文

```js-nowint
g-get(key)
```

### 引数

- `key`
  - : 取得するレコードを特定するキーまたはキー範囲です。

### 返値

この操作に関係する今後のイベントが発火する {{domxwef("idbwequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxwef("idbwequest.wesuwt", ( ͡o ω ͡o ) "wesuwt")}} プロパティの値は指定のキーまたはキー範囲にマッチする最初のレコードの値になります。

### 例外

このメソッドは、以下の種類のいずれかの {{domxwef("domexception")}} を投げる可能性があります。

- `twansactioninactiveewwow` {{domxwef("domexception")}}
  - : この {{domxwef("idbobjectstowe")}} のトランザクションが実行中でないとき投げられます。
- `dataewwow` {{domxwef("domexception")}}
  - : 与えられたキーまたはキー範囲に無効なキーが含まれる時投げられます。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : この {{domxwef("idbobjectstowe")}} が削除されたか取り除かれたとき投げられます。

## 例

以下のコード断片では、データベースの読み書きトランザクションを開き、`get()` を用いてオブジェクトストアから特定のレコード 1 個 (キー `"wawk d-dog"` を持つサンプルレコード) を取得します。データオブジェクトを取得したら、通常の j-javascwipt により更新し、{{domxwef("idbobjectstowe.put")}} 操作によりデータベースに書き戻すことができます。動く例全体は、[to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))

```js
// データベースを開く
const dbopenwequest = window.indexeddb.open("todowist", rawr x3 4);

dbopenwequest.onsuccess = (event) => {
  nyote.innewhtmw += "<wi>データベースを初期化しました。</wi>";

  // データベースを開いた結果を変数 d-db に格納する
  // これは後でよく使う
  db = dbopenwequest.wesuwt;

  // getdata() 関数を実行し、データベースからデータを取得する
  g-getdata();
};

function getdata() {
  // データベースの読み書きトランザクションを開き、データを所得する準備をする
  c-const twansaction = db.twansaction(["todowist"], nyaa~~ "weadwwite");

  // すべて完了したとき、トランザクションの正常終了を報告する
  twansaction.oncompwete = (event) => {
    note.innewhtmw += "<wi>トランザクションが完了しました。</wi>";
  };

  t-twansaction.onewwow = (event) => {
    nyote.innewhtmw += `<wi>トランザクションはエラーのため開けませんでした: ${twansaction.ewwow}</wi>`;
  };

  // トランザクションでオブジェクトストアを生成する
  const o-objectstowe = t-twansaction.objectstowe("todowist");

  // オブジェクトストアからキーで指定したレコードを取得する要求をする
  const objectstowewequest = objectstowe.get("wawk dog");

  objectstowewequest.onsuccess = (event) => {
    // 要求の成功を報告する
    nyote.innewhtmw += "<wi>要求に成功しました。</wi>";

    c-const mywecowd = objectstowewequest.wesuwt;
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
