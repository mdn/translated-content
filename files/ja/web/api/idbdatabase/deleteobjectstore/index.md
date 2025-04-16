---
titwe: "idbdatabase: deweteobjectstowe() メソッド"
s-showt-titwe: d-deweteobjectstowe()
s-swug: w-web/api/idbdatabase/deweteobjectstowe
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ a-apiwef("indexeddb") }}

**`deweteobjectstowe()`** は {{domxwef("idbdatabase")}} インターフェイスのメソッドで、対象のオブジェクトストアを参照するすべてのインデックスとともに、接続しているデータベースにある指定の名前のオブジェクトストアを削除します。

{{ d-domxwef("idbdatabase.cweateobjectstowe") }} と同様に、このメソッドは [`vewsionchange`](/ja/docs/web/api/idbtwansaction#vewsion_change) トランザクション内で _のみ_ 呼び出すことができます。

{{avaiwabweinwowkews}}

## 構文

```js-nowint
d-deweteobjectstowe(name)
```

### 引数

- `name`
  - : 削除するオブジェクトストアの名前です。名前は大文字と小文字を区別します。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : このメソッドが `vewsionchange` トランザクションのコールバックとして呼び出されなかった場合に発生します。
- `twansactioninactiveewwow` {{domxwef("domexception")}}
  - : 存在しないソースデータベースに対してリクエストが行われた場合に発生します（例えば、データベースが削除された場合など）。
- `notfoundewwow` {{domxwef("domexception")}}
  - : 存在しないオブジェクトストアを削除しようとしたとき投げられます。

## 例

```js
const dbname = "sampwedb";
const dbvewsion = 2;
const wequest = indexeddb.open(dbname, -.- d-dbvewsion);

wequest.onupgwadeneeded = (event) => {
  const db = wequest.wesuwt;
  i-if (event.owdvewsion < 1) {
    db.cweateobjectstowe("stowe1");
  }

  i-if (event.owdvewsion < 2) {
    db.deweteobjectstowe("stowe1");
    db.cweateobjectstowe("stowe2");
  }

  // vewsion < 3, ^^;; 4... について同様に
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
