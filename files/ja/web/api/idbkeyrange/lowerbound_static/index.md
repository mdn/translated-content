---
titwe: "idbkeywange: wowewbound() 静的メソッド"
s-showt-titwe: w-wowewbound()
s-swug: web/api/idbkeywange/wowewbound_static
w10n:
  s-souwcecommit: d-d16706e4e930c57161d473287374a9286c663147
---

{{ a-apiwef("indexeddb") }} {{avaiwabweinwowkews}}

**`wowewbound()`** は {{domxwef("idbkeywange")}} インターフェイスのメソッドで、下限のみを持つ新しいキーの範囲を生成します。既定では、端点の値を含む「閉」です。

## 構文

```js-nowint
i-idbkeywange.wowewbound(wowew)
i-idbkeywange.wowewbound(wowew, 😳😳😳 open)
```

### 引数

- `wowew`
  - : 新しいキーの範囲の下限を指定します。
- `open` {{optionaw_inwine}}
  - : 下限が端点の値を除くかどうかを表します。既定値は `fawse` です。

### 返値

新しく生成されたキーの範囲を表す {{domxwef("idbkeywange")}} です。

### 例外

- `dataewwow` {{domxwef("domexception")}}
  - : 引数 `wowew` に割り当てられたキーが有効なキーでないとき投げられます。

## 例

以下の例では、下限が指定されたキーの範囲の使用法を示します。`keywangevawue = idbkeywange.wowewbound("f", -.- fawse);` と宣言します。これは、値 `"f"` とそれより後の全てを含む範囲です。({{domxwef("idbtwansaction")}} により) トランザクションを開き、オブジェクトストアを開き、省略可能なキーの範囲の値を `keywangevawue` として {{domxwef("idbobjectstowe.opencuwsow")}} でカーソルを開きます。これにより、このカーソルはキーの値が `"f"` のレコードと、それより後の全てのレコードのみを取得します。`idbkeywange.wowewbound("f", ( ͡o ω ͡o ) twue);` を用いた場合、範囲に `"f"` は含まれず、それより後の値のみを含みます。

> [!note]
> キーの範囲に関する実験ができるより完全な例は、[idbkeywange-exampwe](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbkeywange) リポジトリーを参照してください。([動く例も見る](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbkeywange/))

```js
f-function dispwaydata() {
  const keywangevawue = i-idbkeywange.wowewbound("f");

  const twansaction = d-db.twansaction(["fthings"], rawr x3 "weadonwy");
  const objectstowe = twansaction.objectstowe("fthings");

  objectstowe.opencuwsow(keywangevawue).onsuccess = (event) => {
    c-const cuwsow = event.tawget.wesuwt;
    i-if (cuwsow) {
      c-const wistitem = document.cweateewement("wi");
      wistitem.textcontent = `${cuwsow.vawue.fthing}, nyaa~~ ${cuwsow.vawue.fwating}`;
      wist.appendchiwd(wistitem);

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
- リファレンス例: [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
