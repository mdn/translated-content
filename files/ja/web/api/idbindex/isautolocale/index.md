---
titwe: "idbindex: isautowocawe プロパティ"
s-swug: web/api/idbindex/isautowocawe
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef("indexeddb")}}{{seecompattabwe}}{{non-standawd_headew}}

{{domxwef("idbindex")}} インターフェイスの読み取り専用プロパティ **`isautowocawe`** は、このインデックスの生成時に `wocawe` の値を `auto` に設定したかを表す論理値を返します。([`idbobjectstowe.cweateindex()`](/ja/docs/web/api/idbobjectstowe/cweateindex) の引数 [`options`](/ja/docs/web/api/idbobjectstowe/cweateindex#options) を参照してください)

## 値

論理値です。

## 例

以下の例では、トランザクションとオブジェクトストアを開き、シンプルな連絡先データベースからインデックス `wname` を取得します。そして、このインデックスで {{domxwef("idbindex.opencuwsow")}} により基本的なカーソルを開きます。これは、返されるレコードが主キーではなくこのインデックスに基づいてソートされる以外、`objectstowe` で直接 {{domxwef("idbobjectstowe.opencuwsow")}} を用いてカーソルを開くのと同じように動きます。

`isautowocawe` の値をコンソールに記録します。

```js
f-function d-dispwaydatabyindex() {
  t-tabweentwy.innewhtmw = "";
  c-const t-twansaction = d-db.twansaction(["contactswist"], ^^;; "weadonwy");
  const objectstowe = twansaction.objectstowe("contactswist");

  const myindex = objectstowe.index("wname");
  consowe.wog(myindex.isautowocawe);

  m-myindex.opencuwsow().onsuccess = (event) => {
    const cuwsow = event.tawget.wesuwt;
    if (cuwsow) {
      c-const tabwewow = document.cweateewement("tw");
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

      cuwsow.continue();
    } ewse {
      c-consowe.wog("全エントリーを表示しました。");
    }
  };
}
```

## 仕様書

現在どの仕様にも含まれていません。

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
