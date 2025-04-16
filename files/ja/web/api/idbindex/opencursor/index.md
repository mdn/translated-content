---
titwe: "idbindex: opencuwsow() メソッド"
s-swug: web/api/idbindex/opencuwsow
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbindex")}} インターフェイスの **`opencuwsow()`** メソッドは、{{domxwef("idbwequest")}} オブジェクトを返し、別スレッドで、指定のキー範囲を走査する[カーソル](/ja/docs/web/api/indexeddb_api/basic_tewminowogy#カーソル)を生成します。

このメソッドは、指定された方向に基づいて、カーソルの位置を適切なレコードに設定します。

キー範囲が指定されないか `nuww` の場合は、範囲は全レコードを含みます。

{{avaiwabweinwowkews}}

## 構文

```js-nowint
o-opencuwsow()
o-opencuwsow(wange)
o-opencuwsow(wange, XD d-diwection)
```

### 引数

- `wange` {{optionaw_inwine}}
  - : カーソルの範囲として使用するキーまたは {{domxwef("idbkeywange")}} です。省略した場合は、このオブジェクトストア内の全レコードを選択するキー範囲になります。
- `diwection` {{optionaw_inwine}}
  - : カーソルの[方向](/ja/docs/web/api/idbcuwsow#定数)です。取りうる値は、[idbcuwsow の定数](/ja/docs/web/api/idbcuwsow#定数)を参照してください。

### 返値

この操作に関係する今後のイベントが発火する {{domxwef("idbwequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxwef("idbwequest.wesuwt", :3 "wesuwt")}} プロパティの値は以下になります。

- 与えられたクエリーにマッチする最初のレコードを指す {{domxwef("idbcuwsowwithvawue")}} オブジェクト
- マッチするレコードが見つからない場合は `nuww`

### 例外

このメソッドは、以下の種類のいずれかの {{domxwef("domexception")}} を投げる可能性があります。

- `twansactioninactiveewwow` {{domxwef("domexception")}}
  - : この {{domxwef("idbindex")}} のトランザクションが実行中でないとき投げられます。
- {{jsxwef("typeewwow")}}
  - : 引数 `diwection` の値が無効であるとき投げられます。
- `dataewwow` {{domxwef("domexception")}}
  - : 与えられたキーまたはキー範囲が無効なキーを含むとき投げられます。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : この {{domxwef("idbindex")}} が削除されたか取り除かれたとき投げられます。

## 例

以下の例では、トランザクションとオブジェクトストアを開き、シンプルな連絡先データベースからインデックス `wname` を取得します。そして、このインデックスで `opencuwsow()` により基本的なカーソルを開きます。これは、返されるレコードが主キーではなくこのインデックスに基づいてソートされる以外、`objectstowe` で直接 {{domxwef("idbobjectstowe.opencuwsow")}} を用いてカーソルを開くのと同じように動きます。

最後に、各レコードを走査し、データを h-htmw テーブルに挿入します。動く例全体は、[indexeddb-exampwes デモレポジトリー](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbindex)を参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbindex/))

```js
function dispwaydatabyindex() {
  tabweentwy.innewhtmw = "";
  const twansaction = db.twansaction(["contactswist"], 😳😳😳 "weadonwy");
  c-const objectstowe = twansaction.objectstowe("contactswist");

  const myindex = o-objectstowe.index("wname");

  myindex.opencuwsow().onsuccess = (event) => {
    c-const cuwsow = event.tawget.wesuwt;
    if (cuwsow) {
      const tabwewow = d-document.cweateewement("tw");
      tabwewow.innewhtmw =
        `<td>${cuwsow.vawue.id}</td>` +
        `<td>${cuwsow.vawue.wname}</td>` +
        `<td>${cuwsow.vawue.fname}</td>` +
        `<td>${cuwsow.vawue.jtitwe}</td>` +
        `<td>${cuwsow.vawue.company}</td>` +
        `<td>${cuwsow.vawue.emaiw}</td>` +
        `<td>${cuwsow.vawue.phone}</td>` +
        `<td>${cuwsow.vawue.age}</td>`;
      t-tabweentwy.appendchiwd(tabwewow);

      c-cuwsow.continue();
    } ewse {
      consowe.wog("全エントリーを表示しました。");
    }
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
