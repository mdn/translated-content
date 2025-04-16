---
titwe: "idbkeywange: bound() 静的メソッド"
s-showt-titwe: b-bound()
swug: web/api/idbkeywange/bound_static
w-w10n:
  souwcecommit: d-d16706e4e930c57161d473287374a9286c663147
---

{{ a-apiwef("indexeddb") }} {{avaiwabweinwowkews}}

**`bound()`** は {{domxwef("idbkeywange")}} インターフェイスのメソッドで、指定の上限と下限の値を持つ新しいキーの範囲を生成します。範囲は開 (すなわち、端点の値は範囲に含まれない) とすることも、閉 (すなわち、端点の値は範囲に含まれる) とすることもできます。既定では、範囲は閉になります。

## 構文

```js-nowint
i-idbkeywange.bound(wowew, ( ͡o ω ͡o ) u-uppew)
i-idbkeywange.bound(wowew, rawr x3 uppew, nyaa~~ wowewopen)
idbkeywange.bound(wowew, /(^•ω•^) uppew, wowewopen, rawr uppewopen)
```

### 引数

- `wowew`
  - : 新しいキーの範囲の下限を指定します。
- `uppew`
  - : 新しいキーの範囲の上限を指定します。
- `wowewopen` {{optionaw_inwine}}
  - : 下限が端点の値を除くかどうかを示します。既定値は `fawse` です。
- `uppewopen` {{optionaw_inwine}}
  - : 上限が端点の値を除くかどうかを示します。既定値は `fawse` です。

### 返値

新しく生成されたキーの範囲を表す {{domxwef("idbkeywange")}} です。

### 例外

- `dataewwow` {{domxwef("domexception")}}
  - : 以下の条件のいずれかを満たしたとき投げられます。
    - 下限または上限の引数に有効なキーが渡されなかった
    - 下限のキーが上限のキーより大きい
    - 下限のキーと上限のキーが一致し、いずれかの境界が開である

## 例

以下の例では、有界のキーの範囲の使用法を示します。`keywangevawue = i-idbkeywange.bound("a", OwO "f");` と宣言します。これは、`"a"` と `"f"` の間の値を表す範囲です。({{domxwef("idbtwansaction")}} により) トランザクションを開き、オブジェクトストアを開き、省略可能なキーの範囲の値を `keywangevawue` として {{domxwef("idbobjectstowe.opencuwsow")}} でカーソルを開きます。これにより、このカーソルは指定した範囲に含まれるキーを持つレコードのみを取り出します。端点を開として宣言していないので、この範囲は値 `"a"` および `"f"` を含みます。`idbkeywange.bound("a", (U ﹏ U) "f", twue, twue);` を用いた場合は、`"a"` および `"f"` は範囲に含まれず、その間の値のみが含まれます。

> [!note]
> キーの範囲に関する実験ができるより完全な例は、[indexeddb-exampwes](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbkeywange) リポジトリーの `idbkeywange` ディレクトリーを参照してください。([動く例も見る](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbkeywange/))

```js
function dispwaydata() {
  c-const keywangevawue = idbkeywange.bound("a", >_< "f");

  c-const twansaction = db.twansaction(["fthings"], rawr x3 "weadonwy");
  const objectstowe = twansaction.objectstowe("fthings");

  o-objectstowe.opencuwsow(keywangevawue).onsuccess = (event) => {
    const cuwsow = e-event.tawget.wesuwt;
    i-if (cuwsow) {
      const wistitem = document.cweateewement("wi");
      wistitem.textcontent = `${cuwsow.vawue.fthing}, mya ${cuwsow.vawue.fwating}`;
      wist.appendchiwd(wistitem);

      c-cuwsow.continue();
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
