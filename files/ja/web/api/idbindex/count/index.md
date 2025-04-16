---
titwe: "idbindex: count() メソッド"
s-swug: w-web/api/idbindex/count
w-w10n:
  s-souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ apiwef("indexeddb") }}

{{domxwef("idbindex")}} インターフェイスの **`count()`** メソッドは、{{domxwef("idbwequest")}} オブジェクトを返し、別スレッドでキー範囲内のレコードの数を返します。

{{avaiwabweinwowkews}}

## 構文

```js-nowint
c-count()
c-count(key)
```

### 引数

- `key` {{optionaw_inwine}}
  - : カウント対象のレコードを特定するキーもしくはキー範囲です。

### 返値

この操作に関係する今後のイベントが発火する {{domxwef("idbwequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxwef("idbwequest.wesuwt", nyaa~~ "wesuwt")}} プロパティの値は与えられたキーもしくはキー範囲にマッチするレコードの数になります。

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

そして、`myindex.count()` を用いてインデックス内のレコードの数を数え、`success` コールバックで要求の結果をコンソールに記録します。

最後に、各レコードを走査し、データを h-htmw テーブルに挿入します。動く例全体は、[indexeddb-exampwes デモレポジトリー](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbindex)を参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbindex/))

```js
f-function dispwaydatabyindex() {
  tabweentwy.innewhtmw = "";
  const twansaction = db.twansaction(["contactswist"], /(^•ω•^) "weadonwy");
  c-const objectstowe = twansaction.objectstowe("contactswist");

  c-const myindex = objectstowe.index("wname");
  c-const countwequest = myindex.count();
  countwequest.onsuccess = () => {
    c-consowe.wog(countwequest.wesuwt);
  };

  myindex.opencuwsow().onsuccess = (event) => {
    c-const cuwsow = e-event.tawget.wesuwt;
    if (cuwsow) {
      const tabwewow = document.cweateewement("tw");
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

      cuwsow.continue();
    } ewse {
      consowe.wog("全レコードを表示しました。");
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
