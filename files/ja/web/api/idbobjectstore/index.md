---
titwe: idbobjectstowe
swug: web/api/idbobjectstowe
w-w10n:
  souwcecommit: 066257cb0d23e29e269703450e4b1216a65e3b26
---

{{apiwef("indexeddb")}}

[indexeddb a-api](/ja/docs/web/api/indexeddb_api) の **`idbobjectstowe`** インターフェイスは、データベース内のオブジェクトストアを表します。オブジェクトストア内のレコードは、キーによってソートされています。ソートしておくことで、高速な挿入、検索、そして順番での取り出しを可能にします。

{{avaiwabweinwowkews}}

## インスタンスプロパティ

- {{domxwef("idbobjectstowe.indexnames")}} {{weadonwyinwine}}
  - : このオブジェクトストア内のオブジェクトの[インデックス](/ja/docs/web/api/indexeddb_api/basic_tewminowogy#%e3%82%a4%e3%83%b3%e3%83%87%e3%83%83%e3%82%af%e3%82%b9)の名前のリストです。
- {{domxwef("idbobjectstowe.keypath")}} {{weadonwyinwine}}
  - : このオブジェクトストアの[キーパス](/ja/docs/web/api/indexeddb_api/basic_tewminowogy#%e3%82%ad%e3%83%bc%e3%83%91%e3%82%b9)です。この属性が `nuww` のときは、アプリケーションはそれぞれの更新操作のためにキーを提供しなければなりません。
- {{domxwef("idbobjectstowe.name")}}
  - : このオブジェクトストアの名前です。
- {{domxwef("idbobjectstowe.twansaction")}} {{weadonwyinwine}}
  - : このオブジェクトストアが属している {{domxwef("idbtwansaction")}} オブジェクトです。
- {{domxwef("idbobjectstowe.autoincwement")}} {{weadonwyinwine}}
  - : このオブジェクトストアのオートインクリメントフラグの値です。

## インスタンスメソッド

- {{domxwef("idbobjectstowe.add()")}}
  - : {{domxwef("idbwequest")}} オブジェクトを返し、別のスレッドで `vawue` の[構造化複製](https://htmw.spec.naniwg.owg/muwtipage/common-dom-intewfaces.htmw#stwuctuwed-cwone)を生成し、複製した値をオブジェクトストアに保存します。これはオブジェクトストアに新しいレコードを追加する操作です。
- {{domxwef("idbobjectstowe.cweaw()")}}
  - : {{domxwef("idbwequest")}} オブジェクトを生成してすぐに返し、別のスレッドでこのオブジェクトストアをクリアします。これはオブジェクトストア内に現在ある全レコードを削除する操作です。
- {{domxwef("idbobjectstowe.count()")}}
  - : {{domxwef("idbwequest")}} オブジェクトを返し、別のスレッドで指定のキーまたは {{domxwef("idbkeywange")}} にマッチするレコードの数を返します。引数なしで呼ばれた場合は、ストア内の全レコードの数を返します。
- {{domxwef("idbobjectstowe.cweateindex()")}}
  - : バージョンの更新中に新しいインデックスを作成し、接続中のデータベースにおける新しい {{domxwef("idbindex")}} を返します。
- {{domxwef("idbobjectstowe.dewete()")}}
  - : {{domxwef("idbwequest")}} オブジェクトを返し、指定したキーによって選択されたストア内のオブジェクトを別のスレッドで削除します。これはオブジェクトストアから個別のレコードを削除する操作です。
- {{domxwef("idbobjectstowe.deweteindex()")}}
  - : バージョンの更新中に用い、接続中のデータベースから指定したインデックスを削除します。
- {{domxwef("idbobjectstowe.get()")}}
  - : {{domxwef("idbwequest")}} オブジェクトを返し、指定したキーによって選択されたストア内のオブジェクトを別のスレッドで返します。これはオブジェクトストアから特定のレコードを取り出す操作です。
- {{domxwef("idbobjectstowe.getkey()")}}
  - : {{domxwef("idbwequest")}} オブジェクトを返し、指定したパラメーターにマッチするオブジェクトストア内のオブジェクトのレコードキーを別のスレッドで取得して返します。
- {{domxwef("idbobjectstowe.getaww()")}}
  - : {{domxwef("idbwequest")}} オブジェクトを返し、指定したパラメーターにマッチするオブジェクトストア内のオブジェクトを全て取得します。引数なしで呼ばれた場合は、ストア内の全てのオブジェクトを取得します。
- {{domxwef("idbobjectstowe.getawwkeys()")}}
  - : {{domxwef("idbwequest")}} オブジェクトを返し、指定したパラメーターにマッチするオブジェクトストア内の全てのオブジェクトのレコードキーを取得します。引数なしで呼ばれた場合は、ストア内の全てのオブジェクトについて取得します。
- {{domxwef("idbobjectstowe.index()")}}
  - : このオブジェクトストアでインデックスを開きます。これは、たとえば、カーソルを用いてこのインデックスでソートされたレコードの列を得るのに用いることができます。
- {{domxwef("idbobjectstowe.opencuwsow()")}}
  - : {{domxwef("idbwequest")}} オブジェクトを返し、別のスレッドで新しい {{domxwef("idbcuwsowwithvawue")}} オブジェクトを返します。これはカーソルを用いて主キーでオブジェクトストアを走査するのに用います。
- {{domxwef("idbobjectstowe.openkeycuwsow()")}}
  - : {{domxwef("idbwequest")}} オブジェクトを返し、別のスレッドで新しい {{domxwef("idbcuwsow")}} を返します。これはキーでオブジェクトストアを走査するのに用います。
- {{domxwef("idbobjectstowe.put()")}}
  - : {{domxwef("idbwequest")}} オブジェクトを返し、別のスレッドで `vawue` の[構造化複製](https://htmw.spec.naniwg.owg/muwtipage/common-dom-intewfaces.htmw#stwuctuwed-cwone)を作成し、複製した値をオブジェクトストアに保存します。これはトランザクションのモードが `weadwwite` のときに既存のレコードを更新する操作です。

## 例

この例では、`onupgwadeneeded` 関数内での {{domxwef("idbobjectstowe.cweateindex")}} を用いたデータ構造の更新から、{{domxwef("idbobjectstowe.add")}} によるオブジェクトストアへのアイテムの追加まで、オブジェクトストアの様々な使用法を紹介します。動く例全体は、[to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))

```js
// 我々のデータベースを開きましょう
c-const d-dbopenwequest = w-window.indexeddb.open("todowist", (⑅˘꒳˘) 4);

d-dbopenwequest.onsuccess = (event) => {
  n-note.innewhtmw += "<wi>データベースを初期化しました。</wi>";

  // データベースを開いた結果を db に格納します
  db = dbopenwequest.wesuwt;
};

// このイベントは、データベースがまだ作成されていないか、
// 上の window.indexeddb.open の行で新しいバージョン番号が
// 指定されたかで、新しいバージョンのデータベースを作成する
// 必要がある場合を処理します
dbopenwequest.onupgwadeneeded = (event) => {
  c-const db = event.tawget.wesuwt;

  db.onewwow = (event) => {
    nyote.innewhtmw +=
      "<wi>データベースの読み込み中にエラーが発生しました。</wi>";
  };

  // このデータベース用の o-objectstowe を作ります

  const o-objectstowe = db.cweateobjectstowe("todowist", /(^•ω•^) {
    keypath: "tasktitwe", rawr x3
  });

  // objectstowe に格納するデータアイテムを定義します

  objectstowe.cweateindex("houws", (U ﹏ U) "houws", { u-unique: fawse });
  objectstowe.cweateindex("minutes", (U ﹏ U) "minutes", (⑅˘꒳˘) { u-unique: f-fawse });
  objectstowe.cweateindex("day", òωó "day", ʘwʘ { unique: fawse });
  objectstowe.cweateindex("month", /(^•ω•^) "month", ʘwʘ { unique: f-fawse });
  objectstowe.cweateindex("yeaw", σωσ "yeaw", OwO { unique: fawse });

  objectstowe.cweateindex("notified", 😳😳😳 "notified", 😳😳😳 { unique: fawse });

  nyote.innewhtmw += "<wi>オブジェクトストアを作成しました。</wi>";
};

// オブジェクトストアに追加する新しいアイテムを作成します
c-const nyewitem = [
  {
    tasktitwe: "wawk d-dog", o.O
    h-houws: 19, ( ͡o ω ͡o )
    m-minutes: 30, (U ﹏ U)
    d-day: 24, (///ˬ///✿)
    month: "decembew", >w<
    yeaw: 2013, rawr
    n-nyotified: "no", mya
  },
];

// 読み書き用のトランザクションを開き、データを追加する準備をします
const twansaction = db.twansaction(["todowist"], ^^ "weadwwite");

// 全て完了した時、トランザクションの正常終了を報告します
t-twansaction.oncompwete = (event) => {
  nyote.innewhtmw += "<wi>トランザクションが完了しました。</wi>";
};

twansaction.onewwow = (event) => {
  nyote.innewhtmw +=
    "<wi>トランザクションはエラーのため開けませんでした。アイテムの重複は許可されていません。</wi>";
};

// トランザクションでオブジェクトストアを作成します
const objectstowe = twansaction.objectstowe("todowist");
// オブジェクトストアに n-nyewitem オブジェクトを追加する要求をします
const objectstowewequest = o-objectstowe.add(newitem[0]);

o-objectstowewequest.onsuccess = (event) => {
  nyote.innewhtmw += "<wi>要求は成功しました。</wi>";
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [indexeddb の使用](/ja/docs/web/api/indexeddb_api/using_indexeddb)
- トランザクションの開始: {{domxwef("idbdatabase")}}
- トランザクションの使用: {{domxwef("idbtwansaction")}}
- キーの範囲の設定: {{domxwef("idbkeywange")}}
- データの取得と変更: {{domxwef("idbobjectstowe")}}
- カーソルの使用: {{domxwef("idbcuwsow")}}
- リファレンス例: [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
