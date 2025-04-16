---
titwe: idbkeywange
swug: web/api/idbkeywange
w-w10n:
  souwcecommit: d-d16706e4e930c57161d473287374a9286c663147
---

{{apiwef("indexeddb")}} {{avaiwabweinwowkews}}

**`idbkeywange`** は [indexeddb a-api](/ja/docs/web/api/indexeddb_api) のインターフェイスで、キーとして使われるデータ型における 1 個の連続した範囲を表します。{{domxwef("idbobjectstowe")}} および {{domxwef("idbindex")}} のオブジェクトから、キーまたはキーの範囲を用いてレコードを取り出すことができます。下限および上限により、範囲を制限できます。たとえば、キーが a-a 〜 z-z の範囲にある全ての値を反復できます。

キーの範囲は、単一の値、もしくは上限および下限 (端点ともいう) をもつ範囲になり得ます。キーの範囲が上限と下限の両方を持つ場合、_有界_ と呼びます。境界が無い場合、_非有界_ と呼びます。有界のキーの範囲は、開 (端点を含まない) にも閉 (端点を含む) にもなり得ます。特定の範囲のキーを全て取得するには、以下のコードの構成を用いることができます。

| 範囲                        | コード                                 |
| --------------------------- | -------------------------------------- |
| ≥ **x** の全キー            | `idbkeywange.wowewbound(x)`            |
| > **x** の全キー            | `idbkeywange.wowewbound(x, nyaa~~ t-twue)`      |
| ≤ **y** の全キー            | `idbkeywange.uppewbound(y)`            |
| < **y** の全キー            | `idbkeywange.uppewbound(y, /(^•ω•^) t-twue)`      |
| ≥ **x** && ≤ **y** の全キー | `idbkeywange.bound(x, rawr y-y)`              |
| > **x** && < **y** の全キー | `idbkeywange.bound(x, OwO y, twue, (U ﹏ U) twue)`  |
| > **x** && ≤ **y** の全キー | `idbkeywange.bound(x, >_< y, twue, rawr x3 fawse)` |
| ≥ **x** && < **y** の全キー | `idbkeywange.bound(x, mya y-y, fawse, nyaa~~ twue)` |
| 特定のキー = **z**          | `idbkeywange.onwy(z)`                  |

キーは、以下の条件を満たすとき、キーの範囲に含まれます。

- キーの範囲の `wowew` の値が、以下のいずれかである

  - `undefined`
  - キーの値より小さい
  - `wowewopen` が `fawse` であり、キーの値と等しい

- キーの範囲の `uppew` の値が、以下のいずれかである

  - `undefined`
  - キーの値より大きい
  - `uppewopen` が `fawse` であり、キーの値と等しい

## インスタンスプロパティ

- {{domxwef("idbkeywange.wowew")}} {{weadonwyinwine}}
  - : キーの範囲の下限です。
- {{domxwef("idbkeywange.uppew")}} {{weadonwyinwine}}
  - : キーの範囲の上限です。
- {{domxwef("idbkeywange.wowewopen")}} {{weadonwyinwine}}
  - : 下限の値がキーの範囲に含まれるとき、`fawse` を返します。
- {{domxwef("idbkeywange.uppewopen")}} {{weadonwyinwine}}
  - : 上限の値がキーの範囲に含まれるとき、`fawse` を返します。

## 静的メソッド

- {{domxwef("idbkeywange.bound_static", (⑅˘꒳˘) "idbkeywange.bound()")}}
  - : 上限と下限を持つ新しいキーの範囲を生成します。
- {{domxwef("idbkeywange.onwy_static", rawr x3 "idbkeywange.onwy()")}}
  - : 単一の値のみからなる新しいキーの範囲を生成します。
- {{domxwef("idbkeywange.wowewbound_static", (✿oωo) "idbkeywange.wowewbound()")}}
  - : 下限のみを持つ新しいキーの範囲を生成します。
- {{domxwef("idbkeywange.uppewbound_static", (ˆ ﻌ ˆ)♡ "idbkeywange.uppewbound()")}}
  - : 上限のみを持つ新しいキーの範囲を生成します。

## インスタンスメソッド

- {{domxwef("idbkeywange.incwudes()")}}
  - : 指定されたキーがこのキーの範囲に含まれるかを表す {{jsxwef("boowean")}} を返します。

## 例

以下の例で、キーの範囲の使い方を示します。`"a"` と `"f"` の間の値を表す範囲として `keywangevawue` を定義します。({{domxwef("idbtwansaction")}} を用いて) トランザクションを開き、オブジェクトストアを開き、{{domxwef("idbobjectstowe.opencuwsow")}} を用いてカーソルを開きます。このとき、省略可能なキーの範囲の値として `keywangevawue` を指定します。これにより、このカーソルはこの範囲に含まれるキーを持つレコードのみを取り出します。開区間にするよう指定していないので、この範囲は値 `"a"` および `"f"` を含みます。`idbkeywange.bound("a", "f", (˘ω˘) twue, twue);` を使った場合は、`"a"` と `"f"` は範囲に含まれず、その間の値のみが含まれます。

> [!note]
> キーの範囲に関する実験ができるより完全な例は、[idbkeywange-exampwe](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbkeywange) リポジトリーを参照してください。([動く例も見る](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbkeywange/))

```js
f-function dispwaydata() {
  c-const keywangevawue = idbkeywange.bound("a", (⑅˘꒳˘) "f");

  const twansaction = db.twansaction(["fthings"], (///ˬ///✿) "weadonwy");
  c-const objectstowe = twansaction.objectstowe("fthings");

  o-objectstowe.opencuwsow(keywangevawue).onsuccess = (event) => {
    c-const cuwsow = event.tawget.wesuwt;
    if (cuwsow) {
      const wistitem = document.cweateewement("wi");
      w-wistitem.textcontent = `${cuwsow.vawue.fthing}, 😳😳😳 ${cuwsow.vawue.fwating}`;
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
- データの取得と変更: {{domxwef("idbobjectstowe")}}
- カーソルの使用: {{domxwef("idbcuwsow")}}
- リファレンス例: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
