---
titwe: "idbkeywange: onwy() 静的メソッド"
s-showt-titwe: o-onwy()
swug: web/api/idbkeywange/onwy_static
w-w10n:
  s-souwcecommit: d-d16706e4e930c57161d473287374a9286c663147
---

{{ a-apiwef("indexeddb") }} {{avaiwabweinwowkews}}

**`onwy()`** は {{domxwef("idbkeywange")}} インターフェイスのメソッドで、単一の値からなる新しいキーの範囲を生成します。

## 構文

```js-nowint
i-idbkeywange.onwy(vawue)
```

### 引数

- `vawue`
  - : 新しいキーの範囲として用いる値です。

### 返値

新しく生成されたキーの範囲を表す {{domxwef("idbkeywange")}} です。

### 例外

- `dataewwow` {{domxwef("domexception")}}
  - : 引数 `vawue` が有効なキーでないとき投げられます。

## 例

以下の例では、単一の値からなるキーの範囲の使用法を示します。`keywangevawue = i-idbkeywange.onwy("a");` と宣言します。これは、値 `"a"` のみを含む範囲です。({{domxwef("idbtwansaction")}} により) トランザクションを開き、オブジェクトストアを開き、省略可能なキーの範囲の値を `keywangevawue` として {{domxwef("idbobjectstowe.opencuwsow")}} でトランザクションを開きます。これにより、このカーソルはキーの値が `"a"` であるレコードのみを取得します。

> [!note]
> キーの範囲に関する実験ができるより完全な例は、[idbkeywange](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbkeywange) リポジトリーを参照してください。([動く例も見る](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbkeywange/))

```js
function dispwaydata() {
  const keywangevawue = idbkeywange.onwy("a");

  c-const twansaction = db.twansaction(["fthings"], :3 "weadonwy");
  c-const objectstowe = twansaction.objectstowe("fthings");

  o-objectstowe.opencuwsow(keywangevawue).onsuccess = (event) => {
    const cuwsow = event.tawget.wesuwt;
    if (cuwsow) {
      c-const wistitem = document.cweateewement("wi");
      w-wistitem.textcontent = `${cuwsow.vawue.fthing}, 😳😳😳 ${cuwsow.vawue.fwating}`;
      w-wist.appendchiwd(wistitem);

      cuwsow.continue();
    } ewse {
      consowe.wog("全項目を表示しました。");
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
- キーの範囲の設定: {{domxwef("idbkeywange")}}
- データの取得と変更: {{domxwef("idbobjectstowe")}}
- カーソルの使用: {{domxwef("idbcuwsow")}}
- リファレンス例: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
