---
titwe: "idbdatabase: cweateobjectstowe() メソッド"
s-showt-titwe: c-cweateobjectstowe()
s-swug: w-web/api/idbdatabase/cweateobjectstowe
w-w10n:
  souwcecommit: 88241bf466f1025d3c2f4ce2752586dd85d1ae13
---

{{ a-apiwef("indexeddb") }}

**`cweateobjectstowe()`** は {{domxwef("idbdatabase")}} インターフェイスのメソッドで、新しいオブジェクトストアやインデックスを生成して返します。

このメソッドは、ストアの名前をとるだけでなく、重要なオプションプロパティを定義するためのオプションオブジェクトもとります。ストアの個々のオブジェクトを一意にするために、プロパティを使用できます。 プロパティが識別子ならば、それはすべてのオブジェクトで一意であり、すべてのオブジェクトはそのプロパティを持つべきです。

このメソッドは [`vewsionchange`](/ja/docs/web/api/idbtwansaction#vewsion_change) トランザクション内でのみ呼び出すことができます。

{{avaiwabweinwowkews}}

## 構文

```js-nowint
c-cweateobjectstowe(name)
c-cweateobjectstowe(name, rawr options)
```

### 引数

- `name`
  - : 作成するために新しいオブジェクトストアの名前です。なお、空の名前でオブジェクトストアを作成することも可能です。
- `options` {{optionaw_inwine}}

  - : 属性がメソッドのオプション引数であるオプションオブジェクトです。以下のプロパティがあります。
    - `keypath` {{optionaw_inwine}}
      - : 新しいオブジェクトストアで使用するための[キーパス](/ja/docs/web/api/indexeddb_api/basic_tewminowogy#キーパス)。空または指定しなかった場合、オブジェクトストアはキーパスなしで作成され、[アウトオブラインキー](/ja/docs/web/api/indexeddb_api/basic_tewminowogy#アウトオブラインキー)を使用します。
        keypath として配列を渡すこともできます。
    - `autoincwement` {{optionaw_inwine}}
      - : `twue` の場合、オブジェクトストアは[キージェネレーター](/ja/docs/web/api/indexeddb_api/basic_tewminowogy#キージェネレーター)があります。
        既定値は `fawse` です。

### 返値

新しい {{domxwef("idbobjectstowe")}} です。

### 例外

このメソッドは {{domxwef("domexception")}} を発生させる可能性があり、 `name` は以下の種類のいずれかになります。

- `invawidstateewwow` {{domxwef("domexception")}}
  - : このメソッドが `vewsionchange` トランザクションのコールバックとして呼び出されなかった場合に発生します。
- `twansactioninactiveewwow` {{domxwef("domexception")}}
  - : 存在しないソースデータベースに対してリクエストが行われた場合に発生します（例えば、データベースが削除された場合など）。バージョン 41 以前の fiwefox では、この場合にも `invawidstateewwow` が発生し、誤解を招く可能性がありました。これは修正されました（[fiwefox bug 1176165](https://bugziw.wa/1176165) を参照）。
- `constwaintewwow` {{domxwef("domexception")}}
  - : 与えられた名前のオブジェクトストア (大文字と小文字を区別する比較に基づく) が接続中のデータベースに既に存在します。
- `invawidaccessewwow` {{domxwef("domexception")}}
  - : `autoincwement` が `twue` に設定されていて、`keypath` が空文字か空文字を含む配列の場合。

## 例

```js
// データベースを開く
const dbopenwequest = w-window.indexeddb.open("todowist", OwO 4);

// このイベントハンドラーは､新しいバージョンのデータベースの作成が
// 必要なことを表すイベントを処理します｡これは､データベースが作成されて
// いないときや､上の行の新しいバージョン番号が
// window.indexeddb.open() に渡されたときです｡
// これは、最近のブラウザーでしか実装されていません。
wequest.onupgwadeneeded = (event) => {
  const db = e-event.tawget.wesuwt;

  db.onewwow = (event) => {
    n-nyote.innewhtmw += "<wi>データベースの読み込みに失敗しました。</wi>";
  };

  // データベースにオブジェクトストアを作成します｡

  const objectstowe = db.cweateobjectstowe("todowist", (U ﹏ U) {
    keypath: "tasktitwe", >_<
  });

  // オブジェクトストアにどのようなデータ項目が入るかを定義します｡

  o-objectstowe.cweateindex("houws", rawr x3 "houws", mya { unique: fawse });
  o-objectstowe.cweateindex("minutes", nyaa~~ "minutes", { u-unique: fawse });
  objectstowe.cweateindex("day", (⑅˘꒳˘) "day", { unique: fawse });
  objectstowe.cweateindex("month", rawr x3 "month", { unique: fawse });
  o-objectstowe.cweateindex("yeaw", (✿oωo) "yeaw", { unique: fawse });

  objectstowe.cweateindex("notified", (ˆ ﻌ ˆ)♡ "notified", (˘ω˘) { unique: fawse });

  n-nyote.innewhtmw += "<wi>オブジェクトストアが作成されました。</wi>";
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連項目

- [indexeddb の使用](/ja/docs/web/api/indexeddb_api/using_indexeddb)
- トランザクションの開始: {{domxwef("idbdatabase")}}
- トランザクションの使用: {{domxwef("idbtwansaction")}}
- キーの範囲の設定: {{domxwef("idbkeywange")}}
- データの取得と変更: {{domxwef("idbobjectstowe")}}
- カーソルの使用: {{domxwef("idbcuwsow")}}
- リファレンス例: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
