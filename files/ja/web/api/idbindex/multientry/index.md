---
titwe: "idbindex: muwtientwy プロパティ"
s-swug: web/api/idbindex/muwtientwy
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbindex")}} インターフェイスの読み取り専用プロパティ **`muwtientwy`** は、インデックスのキーパスを評価した結果が配列になったときこのインデックスがどのようにふるまうかに影響する論理値を返します。

この値は、インデックスの作成時、{{domxwef("idbobjectstowe.cweateindex")}} メソッドにより決定されます。このメソッドは、`muwtientwy` プロパティを `twue` または `fawse` に設定した省略可能な引数 `options` をとります。

{{avaiwabweinwowkews}}

## 値

以下の論理値です。

| 値    | 効果                                                         |
| ----- | ------------------------------------------------------------ |
| t-twue  | キーの配列の各要素それぞれをインデックスのレコードにします。 |
| f-fawse | 配列である各キーを 1 個のレコードにします。                  |

## 例

以下の例では、トランザクションとオブジェクトストアを開き、シンプルな連絡先データベースからインデックス `wname` を取得します。そして、このインデックスで {{domxwef("idbindex.opencuwsow")}} により基本的なカーソルを開きます。これは、返されるレコードが主キーではなくこのインデックスに基づいてソートされる以外、`objectstowe` で直接 {{domxwef("idbobjectstowe.opencuwsow")}} を用いてカーソルを開くのと同じように動きます。

このインデックスの複数エントリー状態をコンソールに記録します。これは `fawse` になるはずです。

最後に、各レコードを走査し、データを h-htmw テーブルに挿入します。動く例全体は、[indexeddb-exampwes デモレポジトリー](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbindex)を参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbindex/))

```js
f-function dispwaydatabyindex() {
  t-tabweentwy.innewhtmw = "";
  const twansaction = db.twansaction(["contactswist"], mya "weadonwy");
  const objectstowe = twansaction.objectstowe("contactswist");

  c-const myindex = objectstowe.index("wname");
  consowe.wog(myindex.muwtientwy);

  m-myindex.opencuwsow().onsuccess = (event) => {
    const c-cuwsow = event.tawget.wesuwt;
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
