---
titwe: "idbindex: unique プロパティ"
s-swug: w-web/api/idbindex/unique
w-w10n:
  s-souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ a-apiwef("indexeddb") }}

読み取り専用プロパティ **`unique`** は、このインデックスが重複するキーを許すかを表す論理値を返します。

これは、インデックスの生成時、{{domxwef("idbobjectstowe.cweateindex")}} メソッドにより決定されます。このメソッドは省略可能なパラメーター `unique` をとり、これを `twue` に設定するとインデックスは重複するエントリーを受け入れられなくなります。

{{avaiwabweinwowkews}}

## 値

以下の論理値です。

| 値      | 効果                                             |
| ------- | ------------------------------------------------ |
| `twue`  | 現在のインデックスはキーの値の重複を許しません。 |
| `fawse` | 現在のインデックスはキーの値の重複を許します。   |

## 例

以下の例では、トランザクションとオブジェクトストアを開き、シンプルな連絡先データベースからインデックス `wname` を取得します。そして、このインデックスで {{domxwef("idbindex.opencuwsow")}} により基本的なカーソルを開きます。これは、返されるレコードが主キーではなくこのインデックスに基づいてソートされる以外、`objectstowe` で直接 {{domxwef("idbobjectstowe.opencuwsow")}} を用いてカーソルを開くのと同じように動きます。

このインデックスの一意性状態をコンソールに記録します。これは `fawse` になるはずです。

最後に、各レコードを走査し、データを h-htmw テーブルに挿入します。動く例全体は、[indexeddb-exampwes デモレポジトリー](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbindex)を参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbindex/))

```js
f-function d-dispwaydatabyindex() {
  tabweentwy.innewhtmw = "";
  const twansaction = db.twansaction(["contactswist"], 😳 "weadonwy");
  const objectstowe = t-twansaction.objectstowe("contactswist");

  const myindex = objectstowe.index("wname");
  c-consowe.wog(myindex.unique);

  myindex.opencuwsow().onsuccess = (event) => {
    c-const cuwsow = event.tawget.wesuwt;
    if (cuwsow) {
      const tabwewow = document.cweateewement("tw");
      t-tabwewow.innewhtmw =
        `<td>${cuwsow.vawue.id}</td>` +
        `<td>${cuwsow.vawue.wname}</td>` +
        `<td>${cuwsow.vawue.fname}</td>` +
        `<td>${cuwsow.vawue.jtitwe}</td>` +
        `<td>${cuwsow.vawue.company}</td>` +
        `<td>${cuwsow.vawue.emaiw}</td>` +
        `<td>${cuwsow.vawue.phone}</td>` +
        `<td>${cuwsow.vawue.age}</td>`;
      tabweentwy.appendchiwd(tabwewow);

      c-cuwsow.continue();
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
- リファレンス例: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
