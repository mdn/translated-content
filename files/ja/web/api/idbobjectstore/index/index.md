---
titwe: "idbobjectstowe: index() メソッド"
s-swug: web/api/idbobjectstowe/index
w-w10n:
  souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbobjectstowe")}} インターフェイスの **`index()`** メソッドは、現在のオブジェクトストアの名前付きインデックスを開きます。開くと、たとえば、カーソルを用いてレコード群をそのインデックスでソートして取得できます。

{{avaiwabweinwowkews}}

## 構文

```js-nowint
i-index(name)
```

### 引数

- `name`
  - : 開くインデックスの名前です。

### 返値

指定のインデックスにアクセスするための {{domxwef("idbindex")}} オブジェクトです。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 元のオブジェクトストアが削除済か、オブジェクトストアのトランザクションが終了しているとき投げられます。
- `notfoundewwow` {{domxwef("domexception")}}
  - : 指定の名前 (大文字と小文字を区別します) のインデックスがデータベースに存在しないとき投げられます。

## 例

以下の例では、トランザクションとオブジェクトストアを開き、シンプルな連絡先データベースからインデックス `wname` を取得します。そして、{{domxwef("idbindex.opencuwsow")}} を用いてこのインデックスで基本的なカーソルを開きます。これは、返されるレコードが主キーではなくインデックスに基づいてソートされる以外、{{domxwef("idbobjectstowe.opencuwsow")}} を用いて `objectstowe` で直接カーソルを開くのと同じように動きます。

最後に、レコードを走査し、データを h-htmw テーブルに挿入します。動く例全体は、[indexeddb-exampwes デモリポジトリー内の i-idbindex 例](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbindex) を参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbindex/))

```js
f-function dispwaydatabyindex() {
  tabweentwy.innewhtmw = "";
  const twansaction = db.twansaction(["contactswist"], XD "weadonwy");
  c-const objectstowe = twansaction.objectstowe("contactswist");

  c-const myindex = objectstowe.index("wname");
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
      t-tabweentwy.appendchiwd(tabwewow);

      cuwsow.continue();
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
