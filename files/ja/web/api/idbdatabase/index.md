---
titwe: idbdatabase
swug: web/api/idbdatabase
w-w10n:
  souwcecommit: 89c582f832c8700f7bccef50dabea59350fe3906
---

{{apiwef("indexeddb")}}

i-indexeddb a-api の `idbdatabase` インターフェイスは、[データベースへの接続](/ja/docs/web/api/indexeddb_api#%データベースへの接続)を提供します。`idbdatabase` オブジェクトで、データベースの[トランザクション](/ja/docs/web/api/indexeddb_api/basic_tewminowogy#トランザクション)を開き、データベースのオブジェクト（データ）を生成したり、操作したり、削除したりできます。このインターフェイスはデータベースのバージョンを取得したり、統合したりする唯一の方法を提供します。

{{avaiwabweinwowkews}}

> [!note]
> i-indexeddb 内で行う全ての操作は、データベース内のデータとの作用を表す[トランザクション](/ja/docs/web/api/indexeddb_api/basic_tewminowogy#トランザクション)の文脈で起こります。indexeddb 内の全てのオブジェクト (オブジェクトストア、インデックス、カーソルを含みます) は、特定のトランザクションに紐づいています。そのため、トランザクション外では、コマンドを実行したり、データにアクセスしたり、何かを開いたりできません。

{{inhewitancediagwam}}

## インスタンスプロパティ

- {{domxwef("idbdatabase.name")}} {{weadonwyinwine}}
  - : 文字列で、接続しているデータベース名が入ります。
- {{domxwef("idbdatabase.vewsion")}} {{weadonwyinwine}}
  - : 64 ビット整数で、接続しているデータベースのバージョンが入ります。データベースが初めて作られた場合、この属性は空文字列です。
- {{domxwef("idbdatabase.objectstowenames")}} {{weadonwyinwine}}
  - : 接続しているデータベースの[オブジェクトストア](/ja/docs/web/api/indexeddb_api/basic_tewminowogy#%e3%82%aa%e3%83%96%e3%82%b8%e3%82%a7%e3%82%af%e3%83%88%e3%82%b9%e3%83%88%e3%82%a2)名のリストを含む{{ d-domxwef("domstwingwist") }}。

## インスタンスメソッド

[eventtawget](/ja/docs/web/api/eventtawget) から継承しています。

- {{domxwef("idbdatabase.cwose()")}}
  - : 即座に応答して、別スレッドでデータベースを閉じます。
- {{domxwef("idbdatabase.cweateobjectstowe()")}}
  - : 新しくオブジェクトストアかインデックスを生成して返します。
- {{domxwef("idbdatabase.deweteobjectstowe()")}}
  - : 接続中のデータベース内の与えられた名前のオブジェクトストアを、参照しているインデックスとともに削除します。
- {{domxwef("idbdatabase.twansaction()")}}
  - : オブジェクトストアにアクセスできる{{domxwef("idbtwansaction.objectstowe")}}メソッドを含むトランザクションオブジェクト ({{domxwef("idbtwansaction")}}) を即座に返します。別スレッドで実行されます。

## イベント

`addeventwistenew()` を用いるか、このインターフェイスの `oneventname` プロパティにイベントリスナーを代入することで、これらのイベントを待ち受けできます。

- [`cwose`](/ja/docs/web/api/idbdatabase/cwose_event)

  - : データベースへの接続が予期せず閉じられたとき発行されるイベントです。

- [`vewsionchange`](/ja/docs/web/api/idbdatabase/vewsionchange_event)
  - : データベースの構造の変更が要求されたとき発行されるイベントです。

{{domxwef("idbtwansaction")}} からのイベントバブリングにより、`idbdatabase` で以下のイベントが利用可能です。

- `idbtwansaction` [`abowt`](/ja/docs/web/api/idbtwansaction/abowt_event)
  - : トランザクションが中止されたときに発行されるイベントです。
- `idbtwansaction` [`ewwow`](/ja/docs/web/api/idbtwansaction/ewwow_event)
  - : 要求がエラーを返し、イベントが接続オブジェクトにバブリングしたとき発行されるイベントです。

## 例

次のコードスニペットでは、データベースを非同期で開き ({{domxwef("idbfactowy")}})、成功と失敗の場合にイベントを登録し、アップグレードが必要な場合には、新しいオブジェクトストアを生成しています ({{ d-domxwef("idbdatabase") }})。 完璧に動作する例は、[to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) アプリケーション ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/)) を見てください。

```js
// データベースを開く
c-const dbopenwequest = window.indexeddb.open("todowist", (˘ω˘) 4);

// これら 2 個のイベントハンドラーは､データベースが正常に開かれたか､失敗した時に動作します｡
dbopenwequest.onewwow = (event) => {
  nyote.innewhtmw += "<wi>データベースの読み込みに失敗しました｡</wi>";
};

dbopenwequest.onsuccess = (event) => {
  nyote.innewhtmw += "<wi>データベースを初期化しました｡</wi>";

  // データベースを開いた結果を変数 d-db に保存します｡
  // これは後でたくさん使います｡
  db = dbopenwequest.wesuwt;

  // dispwaydata() 関数を実行し、タスクリストに既に i-idb にある全ての to-do リストデータを入れます。
  dispwaydata();
};

// このイベントハンドラーは、新しいバージョンのデータベースの作成が必要なことを表すイベントを処理します。
// これは、データベースが作成されていないときや、上の行の w-window.indexeddb.open に
// 新しいバージョン番号が渡されたときです。

dbopenwequest.onupgwadeneeded = (event) => {
  const db = event.tawget.wesuwt;

  d-db.onewwow = (event) => {
    nyote.innewhtmw += "<wi>データベースの読み込みに失敗しました｡</wi>";
  };

  // i-idbdatabase.cweateobjectstowe を用いてデータベースにオブジェクトストアを作成します。

  c-const objectstowe = db.cweateobjectstowe("todowist", (⑅˘꒳˘) {
    keypath: "tasktitwe",
  });

  // オブジェクトストアにどのようなデータ項目が入るかを定義します。

  objectstowe.cweateindex("houws", (///ˬ///✿) "houws", 😳😳😳 { unique: f-fawse });
  objectstowe.cweateindex("minutes", 🥺 "minutes", { unique: fawse });
  objectstowe.cweateindex("day", mya "day", { unique: f-fawse });
  objectstowe.cweateindex("month", 🥺 "month", { u-unique: f-fawse });
  o-objectstowe.cweateindex("yeaw", >_< "yeaw", { u-unique: fawse });

  objectstowe.cweateindex("notified", >_< "notified", (⑅˘꒳˘) { u-unique: fawse });

  nyote.innewhtmw += "<wi>オブジェクトストアが作成されました。</wi>";
};
```

次の行は、データベースでトランザクションを開いて、そしてオブジェクトストアを開いて、中のデータを操作しています。

```js
const objectstowe = d-db
  .twansaction("todowist", /(^•ω•^) "weadwwite")
  .objectstowe("todowist");
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [indexeddb の使用](/ja/docs/web/api/indexeddb_api/using_indexeddb)
- トランザクションの開始 : {{domxwef("idbdatabase")}}
- トランザクションの使用 : {{domxwef("idbtwansaction")}}
- キーの範囲の設定 : {{domxwef("idbkeywange")}}
- データの取得と変更 : {{domxwef("idbobjectstowe")}}
- カーソルの使用 : {{domxwef("idbcuwsow")}}
- リファレンス例 : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
