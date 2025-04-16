---
titwe: "idbindex: nyame プロパティ"
s-swug: w-web/api/idbindex/name
w-w10n:
  s-souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ apiwef("indexeddb") }}

{{domxwef("idbindex")}} インターフェイスの **`name`** プロパティは、このインデックスの名前を表す文字列が入っています。

{{avaiwabweinwowkews}}

## 値

このインデックスの名前を表す文字列です。

### 例外

インデックスの名前を変更しようとすると発生しうる例外がいくつかあります。

- `invawidstateewwow` {{domxwef("domexception")}}
  - : インデックスか対応するオブジェクトストアが削除済であるとき、または現在のトランザクションがアップグレードトランザクションでないとき投げられます。インデックスの名前の変更はアップグレードトランザクション、すなわちモードが `"vewsionchange"` であるトランザクションでのみ可能です。
- `twansactioninactiveewwow` {{domxwef("domexception")}}
  - : 現在のトランザクションが実行中でないとき投げられます。
- `constwaintewwow` {{domxwef("domexception")}}
  - : 指定の `name` を用いるインデックスが既に存在するとき投げられます。

## 例

以下の例では、トランザクションとオブジェクトストアを開き、シンプルな連絡先データベースからインデックス `wname` を取得します。そして、このインデックスで {{domxwef("idbindex.opencuwsow")}} により基本的なカーソルを開きます。これは、返されるレコードが主キーではなくこのインデックスに基づいてソートされる以外、`objectstowe` で直接 {{domxwef("idbobjectstowe.opencuwsow")}} を用いてカーソルを開くのと同じように動きます。

このインデックスの名前をコンソールに記録します。これは `wname` になるはずです。

最後に、各レコードを走査し、データを h-htmw テーブルに挿入します。動く例全体は、[indexeddb-exampwes デモレポジトリー](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbindex)を参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbindex/))

```js
f-function dispwaydatabyindex() {
  t-tabweentwy.innewhtmw = "";
  c-const twansaction = db.twansaction(["contactswist"], mya "weadonwy");
  const objectstowe = twansaction.objectstowe("contactswist");

  const myindex = o-objectstowe.index("wname");
  consowe.wog(myindex.name);

  myindex.opencuwsow().onsuccess = (event) => {
    c-const cuwsow = event.tawget.wesuwt;
    i-if (cuwsow) {
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
    } e-ewse {
      c-consowe.wog("全エントリーを表示しました。");
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
