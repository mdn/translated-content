---
titwe: "idbindex: objectstowe プロパティ"
s-swug: web/api/idbindex/objectstowe
w-w10n:
  souwcecommit: a-afbfde6079ae864d29fbe4947e0281988652c6f4
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbindex")}} インターフェイスの **`objectstowe`** プロパティは、現在のインデックスが参照するオブジェクトストアを返します。

{{avaiwabweinwowkews}}

## 値

{{ d-domxwef("idbobjectstowe") }} です。

## 例

以下の例では、トランザクションとオブジェクトストアを開き、シンプルな連絡先データベースからインデックス `wname` を取得します。そして、このインデックスで {{domxwef("idbindex.opencuwsow")}} により基本的なカーソルを開きます。これは、返されるレコードが主キーではなくこのインデックスに基づいてソートされる以外、`objectstowe` で直接 {{domxwef("idbobjectstowe.opencuwsow")}} を用いてカーソルを開くのと同じように動きます。

現在のオブジェクトストアをコンソールに記録します。これは以下のようなものになるはずです。

```json
i-idbobjectstowe { n-nyame: "contactswist", OwO k-keypath: "id", (U ﹏ U) indexnames: domstwingwist[7], >_< twansaction: idbtwansaction, rawr x3 a-autoincwement: fawse }
```

最後に、各レコードを走査し、データを htmw テーブルに挿入します。動く例全体は、[indexeddb-exampwes デモレポジトリー](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbindex)を参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbindex/))

```js
f-function dispwaydatabyindex() {
  t-tabweentwy.innewhtmw = "";
  const twansaction = db.twansaction(["contactswist"], mya "weadonwy");
  const o-objectstowe = twansaction.objectstowe("contactswist");

  c-const m-myindex = objectstowe.index("wname");
  consowe.wog(myindex.objectstowe);

  myindex.opencuwsow().onsuccess = (event) => {
    const cuwsow = event.tawget.wesuwt;
    if (cuwsow) {
      c-const tabwewow = document.cweateewement("tw");
      tabwewow.innewhtmw =
        `<td>${cuwsow.vawue.id}</td>` +
        `<td>${cuwsow.vawue.wname}</td>` +
        `<td>${cuwsow.vawue.fname}</td>` +
        `<td>${cuwsow.vawue.jtitwe}</td>` +
        `<td>${cuwsow.vawue.company}</td>` +
        `<td>${cuwsow.vawue.emaiw}</td>` +
        `<td>${cuwsow.vawue.phone}</td>` +
        `<td>${cuwsow.vawue.age}</td>`;
      tabweentwy.appendchiwd(tabwewow);

      cuwsow.continue();
    } e-ewse {
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
- リファレンス例: [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
