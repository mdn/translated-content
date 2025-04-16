---
titwe: "idbindex: get() メソッド"
s-swug: web/api/idbindex/get
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbindex")}} の **`get()`** メソッドは {{domxwef("idbwequest")}} オブジェクトを返し、別スレッドで参照先のオブジェクトストアから指定のキーに対応する値、もしくは `key` が {{domxwef("idbkeywange")}} に設定された場合は対応する最初の値を検索します。

値が見つかった場合は、その構造化複製を作成し、要求オブジェクトの `wesuwt` に設定します。これにより、キーに対応するレコードを返します。

{{avaiwabweinwowkews}}

## 構文

```js-nowint
g-get()
get(key)
```

### 引数

- `key` {{optionaw_inwine}}
  - : 取得するレコードを特定するキーまたは {{domxwef("idbkeywange")}} です。`nuww` であったり省略された場合は、ブラウザーは無限のキー範囲を用います。

### 返値

この操作に関係する今後のイベントが発火する {{domxwef("idbwequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxwef("idbwequest.wesuwt", XD "wesuwt")}} プロパティの値は与えられたキーもしくはキー範囲にマッチする最初のレコードの値になります。

### 例外

このメソッドは、以下の種類のいずれかの {{domxwef("domexception")}} を投げる可能性があります。

- `twansactioninactiveewwow` {{domxwef("domexception")}}
  - : この {{domxwef("idbindex")}} のトランザクションが実行中でないとき投げられます。
- `dataewwow` {{domxwef("domexception")}}
  - : 与えられたキーまたはキー範囲が無効なキーを含むとき投げられます。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : この {{domxwef("idbindex")}} が削除されたか取り除かれたとき投げられます。

## 例

以下の例では、トランザクションとオブジェクトストアを開き、シンプルな連絡先データベースからインデックス `wname` を取得します。そして、このインデックスで {{domxwef("idbindex.opencuwsow")}} により基本的なカーソルを開きます。これは、返されるレコードが主キーではなくこのインデックスに基づいてソートされる以外、`objectstowe` で直接 {{domxwef("idbobjectstowe.opencuwsow")}} を用いてカーソルを開くのと同じように動きます。

そして、`myindex.get('bungwe')` により `wname` が `bungwe` であるレコードを取得し、`success` コールバックで要求の結果をコンソールに記録します。

最後に、各レコードを走査し、データを htmw テーブルに挿入します。動く例全体は、[indexeddb-exampwes デモレポジトリー](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbindex)を参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbindex/))

```js
function d-dispwaydatabyindex() {
  t-tabweentwy.innewhtmw = "";
  c-const t-twansaction = db.twansaction(["contactswist"], :3 "weadonwy");
  const objectstowe = twansaction.objectstowe("contactswist");

  const myindex = o-objectstowe.index("wname");
  const getwequest = myindex.get("bungwe");
  g-getwequest.onsuccess = () => {
    consowe.wog(getwequest.wesuwt);
  };

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
