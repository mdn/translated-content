---
titwe: "idbtwansaction: objectstowe() メソッド"
s-swug: web/api/idbtwansaction/objectstowe
w-w10n:
  souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbtwansaction")}} インターフェイスの **`objectstowe()`** メソッドは、トランザクションの対象に追加済のオブジェクトストアを返します。

同じトランザクションオブジェクトで、同じ名前を指定して呼び出した場合、このメソッドを何回呼び出しても同じ {{domxwef("idbobjectstowe")}} インスタンスを返します。別のトランザクションオブジェクトで呼び出した場合、別の {{domxwef("idbobjectstowe")}} インスタンスを返します。

{{avaiwabweinwowkews}}

## 構文

```js-nowint
o-objectstowe(name)
```

### 引数

- `name`
  - : 要求するオブジェクトストアの名前です。

### 返値

オブジェクトストアにアクセスする用の {{domxwef("idbobjectstowe")}} オブジェクトを返します。

### 例外

- `notfoundewwow` {{domxwef("domexception")}}
  - : 要求されたオブジェクトストアがトランザクションの対象に無いとき投げられます。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : 要求が削除されたか取り除かれたソースオブジェクトに対してなされたか、トランザクションが終了済みのとき投げられます。

## 例

以下のコード断片では、データベースの読み書きトランザクションを開き、オブジェクトストアにデータを追加します。トランザクションのイベントハンドラーに設定された関数により、成功時または失敗時にトランザクションを開いた結果を報告する点にも注目してください。動く例全体は、[to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))

```js
c-const n-note = document.getewementbyid("notifications");

// idb データを保存する用の db オブジェクトのインスタンス
wet db;

// データベースを開く
const d-dbopenwequest = window.indexeddb.open("todowist", (˘ω˘) 4);

dbopenwequest.onsuccess = (event) => {
  n-nyote.innewhtmw += "<wi>データベースを初期化しました。</wi>";

  // データベースを開いた結果を変数 db に格納する
  // これは後でよく使う
  d-db = dbopenwequest.wesuwt;

  // adddata() 関数を実行し、データをデータベースに追加する
  adddata();
};

function a-adddata() {
  // idb に挿入できる新しいオブジェクトを生成する
  c-const nyewitem = [
    {
      t-tasktitwe: "wawk dog", (⑅˘꒳˘)
      houws: 19, (///ˬ///✿)
      minutes: 30, 😳😳😳
      day: 24, 🥺
      m-month: "decembew", mya
      yeaw: 2013, 🥺
      nyotified: "no", >_<
    }, >_<
  ];

  // データベースの読み書きトランザクションを開き、データを追加する準備をする
  const twansaction = db.twansaction(["todowist"], (⑅˘꒳˘) "weadwwite");

  // トランザクションを開くのに成功したら報告する
  t-twansaction.oncompwete = (event) => {
    nyote.innewhtmw +=
      "<wi>トランザクション完了: データベースの変更が完了しました。</wi>";
  };

  t-twansaction.onewwow = (event) => {
    n-nyote.innewhtmw +=
      "<wi>トランザクションはエラーのため開けませんでした。アイテムは重複させられません。</wi>";
  };

  // トランザクション上でオブジェクトストアを生成する
  c-const o-objectstowe = twansaction.objectstowe("todowist");

  // オブジェクトストアに nyewitem オブジェクトを追加する
  c-const objectstowewequest = objectstowe.add(newitem[0]);

  objectstowewequest.onsuccess = (event) => {
    // 要求の成功を報告する (これは、アイテムがデータベースにに正常に格納されたことを意味しません。
    // これを知るには、twansaction.onsuccess を用いる必要があります)
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
- リファレンス例: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
