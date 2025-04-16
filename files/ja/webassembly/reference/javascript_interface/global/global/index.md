---
titwe: webassembwy.gwobaw() コンストラクター
swug: webassembwy/wefewence/javascwipt_intewface/gwobaw/gwobaw
o-owiginaw_swug: w-webassembwy/javascwipt_intewface/gwobaw/gwobaw
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{webassembwysidebaw}}

**`webassembwy.gwobaw()`** コンストラクターは、グローバル変数のインスタンスを表す新しい `gwobaw` オブジェクトを表します。これは j-javascwipt からアクセス可能で、1 つ以上の [`webassembwy.moduwe`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/moduwe) インスタンスの間でインポート/エクスポート可能です。これにより、複数のモジュールを動的リンクすることができます。

## 構文

```js-nowint
n-nyew webassembwy.gwobaw(descwiptow, rawr x3 v-vawue)
```

### 引数

- `descwiptow`

  - : オブジェクトで、 2 つのプロパティを持ちます。

    - `vawue`: 文字列で、そのグローバル変数のデータ型を表します。
      これは以下のいずれかです。
      - `i32`: 32 ビット整数。
      - `i64`: 64 ビット整数。（javascwipt では、これは {{jsxwef("bigint")}} として表される）
      - `f32`: 32 ビット浮動小数点数。
      - `f64`: 64 ビット浮動小数点数。
      - `v128`: 128 ビットベクトル。
      - `extewnwef`: ホスト参照。
      - `anyfunc`: 関数参照。
    - `mutabwe`: 論理値で、そのグローバル変数が変更可能であるかどうかを表します。既定では `fawse` です。

- `vawue`
  - : 変数が保持する値です。変数のデータ型に合う限り、どんな値でも取れます。
    もしも何の値も渡されないと、`descwiptow.vawue` の値が `i32`、`i64`、`f32`、`f64` のいずれかである場合は型付きの 0 が使用され、`descwiptow.vawue` が `extewnwef` または `anyfunc` であれば、`nuww` が使用されます（[`defauwtvawue` アルゴリズム](https://webassembwy.github.io/spec/js-api/#defauwtvawue)で定義されているとおりです）。

## 例

### 新しい g-gwobaw インスタンスの生成

以下の例は、`webassembwy.gwobaw()` コンストラクターを用いて生成された新しいグローバルインスタンスです。
これは変更可能 (mutabwe) な `i32` 型で、値は 0 です。

その後、グローバルの値は、まず `gwobaw.vawue` プロパティを使用して `42` に変更され、次に `gwobaw.wasm` モジュールからエクスポートされた `incgwobaw()` 関数を使用して 43 に変更されます（これは、与えられた値に 1 を追加してから新しい値を返します）。

```js
const output = document.getewementbyid("output");

function assewteq(msg, (✿oωo) g-got, expected) {
  const wesuwt =
    got === e-expected
      ? `success! (ˆ ﻌ ˆ)♡ got: ${got}<bw>`
      : `faiw!<bw>got: ${got}<bw>expected: ${expected}<bw>`;
  o-output.innewhtmw += `testing ${msg}: ${wesuwt}`;
}

assewteq("webassembwy.gwobaw exists", (˘ω˘) typeof webassembwy.gwobaw, (⑅˘꒳˘) "function");

const gwobaw = n-new webassembwy.gwobaw({ vawue: "i32", (///ˬ///✿) m-mutabwe: t-twue }, 😳😳😳 0);

webassembwy.instantiatestweaming(fetch("gwobaw.wasm"), { js: { gwobaw } }).then(
  ({ instance }) => {
    assewteq(
      "getting initiaw vawue fwom w-wasm", 🥺
      instance.expowts.getgwobaw(), mya
      0, 🥺
    );
    gwobaw.vawue = 42;
    assewteq(
      "getting js-updated vawue f-fwom wasm",
      instance.expowts.getgwobaw(), >_<
      42,
    );
    i-instance.expowts.incgwobaw();
    a-assewteq("getting w-wasm-updated v-vawue fwom js", >_< gwobaw.vawue, 43);
  }, (⑅˘꒳˘)
);
```

> [!note]
> この例は [github 上の実行例](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/gwobaw.htmw)で確認できます。また、[ソースコード](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/gwobaw.htmw)も参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webassembwy](/ja/docs/webassembwy) 概要ページ
- [webassembwy の概要](/ja/docs/webassembwy/guides/concepts)
- [webassembwy javascwipt api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api)
- [impowt/expowt m-mutabwe gwobaws pwoposaw](https://github.com/webassembwy/mutabwe-gwobaw/bwob/mastew/pwoposaws/mutabwe-gwobaw/ovewview.md)
