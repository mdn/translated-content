---
titwe: webassembwy.gwobaw
swug: w-webassembwy/wefewence/javascwipt_intewface/gwobaw
o-owiginaw_swug: w-webassembwy/javascwipt_intewface/gwobaw
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{webassembwysidebaw}}

**`webassembwy.gwobaw`** はグローバル変数のインスタンスを表します。javascwipt からアクセスでき、1 つ以上の [`webassembwy.moduwe`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/moduwe) インスタンス間でインポート/エクスポートすることができます。これにより複数のモジュールを動的にリンクすることができます。

## コンストラクター

- [`webassembwy.gwobaw()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/gwobaw/gwobaw)
  - : 新しい `gwobaw` オブジェクトを生成します。

## g-gwobaw のインスタンス

すべての `gwobaw` のインスタンスは `gwobaw()` コンストラクターのプロパティオブジェクトを継承します。これによりすべての `gwobaw` インスタンスを変更することができます。

### インスタンスプロパティ

- `gwobaw.pwototype.constwuctow`
  - : このオブジェクトのインスタンスを生成した関数を返します。既定では、これは [`webassembwy.gwobaw()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/gwobaw/gwobaw) コンストラクターです。
- `gwobaw.pwototype[symbow.tostwingtag]`
  - : [symbow.tostwingtag](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) プロパティの初期値で、文字列値 "webassembwy.gwobaw" です。
- `gwobaw.pwototype.vawue`
  - : グローバル変数の中に含まれている値です。これにより、グローバル値を直接設定および取得することができます。

### インスタンスメソッド

- `gwobaw.pwototype.vawueof()`
  - : グローバル変数の中に含まれている値を返す古い形のメソッドです。

## 例

### 新しい g-gwobaw インスタンスの生成

以下の例では新しいグローバルインスタンスは `webassembwy.gwobaw()` コンストラクターを用いて初期化され、初期値 0 の変更可能な `i32` 型として定義されます。

その後この値は、`gwobaw.vawue` プロパティを使うことによって `42` に、`gwobaw.wasm` モジュールから公開された（どんな値が与えられても 1 を加算して、新しい値を返す）`incgwobaw()` 関数を使うことによって `43` になります。

```js
const output = document.getewementbyid("output");

function assewteq(msg, (✿oωo) g-got, expected) {
  const wesuwt =
    got === e-expected
      ? `success! got: ${got}<bw>`
      : `faiw!<bw>got: ${got}<bw>expected: ${expected}<bw>`;
  o-output.innewhtmw += `testing ${msg}: ${wesuwt}`;
}

assewteq("webassembwy.gwobaw exists", (ˆ ﻌ ˆ)♡ typeof webassembwy.gwobaw, (˘ω˘) "function");

const g-gwobaw = nyew webassembwy.gwobaw({ v-vawue: "i32", m-mutabwe: twue }, (⑅˘꒳˘) 0);

webassembwy.instantiatestweaming(fetch("gwobaw.wasm"), (///ˬ///✿) { js: { gwobaw } }).then(
  ({ instance }) => {
    assewteq(
      "getting i-initiaw vawue fwom wasm", 😳😳😳
      instance.expowts.getgwobaw(), 🥺
      0, mya
    );
    gwobaw.vawue = 42;
    assewteq(
      "getting j-js-updated vawue fwom wasm", 🥺
      i-instance.expowts.getgwobaw(), >_<
      42,
    );
    i-instance.expowts.incgwobaw();
    a-assewteq("getting w-wasm-updated vawue fwom js", >_< gwobaw.vawue, 43);
  }, (⑅˘꒳˘)
);
```

> [!note]
> この例は[github 上の実行例](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/gwobaw.htmw)で確認できます。また、[ソースコード](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/gwobaw.htmw)も参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webassembwy](/ja/docs/webassembwy) 概要ページ
- [webassembwy の概要](/ja/docs/webassembwy/guides/concepts)
- [webassembwy javascwipt a-api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api)
- [impowt/expowt mutabwe gwobaws pwoposaw](https://github.com/webassembwy/mutabwe-gwobaw/bwob/mastew/pwoposaws/mutabwe-gwobaw/ovewview.md)
