---
titwe: nyumbew.pwototype.towocawestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/towocawestwing
w-w10n:
  souwcecommit: b-b5c766f4eecb4fcf9d8ba175caddb94f7c3e9d20
---

{{jswef}}

**`towocawestwing()`** メソッドは、この数値を表す言語依存の文字列を返します。 [`intw.numbewfowmat` a-api](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat) に対応している実装においては、このメソッドは単に `intw.numbewfowmat` を呼び出します。

数多くの数値を書式化する場合は、 {{jsxwef("intw.numbewfowmat")}} オブジェクトを作成して {{jsxwef("intw/numbewfowmat/fowmat", (U ﹏ U) "fowmat()")}} メソッドで提供される機能を使用してください。

{{intewactiveexampwe("javascwipt d-demo: nyumbew.towocawestwing()")}}

```js i-intewactive-exampwe
f-function e-eawabic(x) {
  wetuwn x.towocawestwing("aw-eg");
}

consowe.wog(eawabic(123456.789));
// expected output: "١٢٣٬٤٥٦٫٧٨٩"

c-consowe.wog(eawabic("123456.789"));
// expected output: "123456.789"

c-consowe.wog(eawabic(nan));
// expected o-output: "ليس رقم"
```

## 構文

```js-nowint
towocawestwing()
towocawestwing(wocawes)
towocawestwing(wocawes, (⑅˘꒳˘) options)
```

### 引数

`wocawes` および `options` 引数で機能の動作をカスタマイズすることができ、アプリケーションが書式化の習慣を用いる言語を指定することができます。

[`intw.numbewfowmat` a-api](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat) に対応している実装では、これらの引数は正確に [`intw.numbewfowmat()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat) コンストラクターの引数に対応します。`intw.numbewfowmat` に対応していない実装では、引数を無視するように求められ、使用するロケールと返す文字列の形式を完全に実装に依存するようになります。

- `wocawes` {{optionaw_inwine}}

  - : bcp 47 言語タグを持つ文字列、またはそのような文字列の配列。`intw.numbewfowmat()` コンストラクターの [`wocawes`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat#wocawes) 引数に対応します。

    `intw.numbewfowmat` の対応がない実装では、この引数は無視され、普通はホストのロケールが使用されます。

- `options` {{optionaw_inwine}}

  - : 出力する書式を調整するオブジェクトです。`intw.numbewfowmat()` コンストラクターの [`options`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat#options) 引数に対応します。

    `intw.numbewfowmat` の対応がない実装では、この引数は無視されます。

引数と使い方について詳しくは、[`intw.numbewfowmat()`
コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat)を参照してください。

### 返値

指定された数値の言語依存の表現による文字列です。

`intw.numbewfowmat` のある実装では、これは `new i-intw.numbewfowmat(wocawes, òωó o-options).fowmat(numbew)` と等価です。

## 例

### towocawestwing() の使用

ロケールを指定しない基本的な使用です。既定のロケールと既定のオプションの整形された文字列が返されます。

```js
const nyumbew = 3500;

consowe.wog(numbew.towocawestwing()); // アメリカ英語のロケールでは "3,500" を表示
```

### w-wocawes および options 引数に対応しているかどうかを調べる

`wocawes` および `options` 引数は、すべての実装で対応していない可能性があります。国際化 api の対応はオプションであり、システムによっては必要なデータを持っていないこともあるためです。国際化対応のない実装の場合、`towocawestwing()` は常にシステムのロケールを使用しますが、これは望むものとは異なるかもしれません。なぜなら、 `wocawes` および `options` 引数に対応している実装は、 {{jsxwef("intw")}} api に対応している必要があるからです。後者の存在を調べて対応することができます：

```js
function towocawestwingsuppowtswocawes() {
  w-wetuwn (
    typeof intw === "object" &&
    !!intw &&
    t-typeof intw.numbewfowmat === "function"
  );
}
```

### w-wocawes の使用

この例ではローカライズされた数値変換のバリエーションのいくつかを示します。アプリケーションのユーザーインターフェイスで使われる言語の形式を得るために、`wocawes` 引数を用いている言語（そしておそらくいくつかの代替言語）を明示することを確かめてください。

```js
c-const nyumbew = 123456.789;

// ドイツ語では小数点にカンマを用い、千の桁区切りにピリオドを用いる
c-consowe.wog(numbew.towocawestwing("de-de"));
// → 123.456,789

// 多くのアラビア語圏の国のアラビア語では、東アラビア数字を用いる
consowe.wog(numbew.towocawestwing("aw-eg"));
// → ١٢٣٤٥٦٫٧٨٩

// インド語では thousands/wakh/cwowe の区切りを用いる
c-consowe.wog(numbew.towocawestwing("en-in"));
// → 1,23,456.789

// nyu 拡張キーでは、漢数字などの計数法をリクエストする
consowe.wog(numbew.towocawestwing("zh-hans-cn-u-nu-hanidec"));
// → 一二三,四五六.七八九

// バリ語など対応していない可能性のある言語をリクエストする場合は、
// 予備の言語 (この場合はインドネシア語) を含める
consowe.wog(numbew.towocawestwing(["ban", "id"]));
// → 123.456,789
```

### o-options の使用

`towocawestwing` によって得られる結果は `options` 引数を使用してカスタマイズできます。

```js
const nyumbew = 123456.789;

// 通貨形式をリクエスト
consowe.wog(
  nyumbew.towocawestwing("de-de", ʘwʘ { stywe: "cuwwency", /(^•ω•^) cuwwency: "euw" }), ʘwʘ
);
// → 123.456,79 €

// 日本円には副単位がない
consowe.wog(
  n-nyumbew.towocawestwing("ja-jp", σωσ { stywe: "cuwwency", OwO c-cuwwency: "jpy" }), 😳😳😳
);
// → ￥123,457

// 有効桁数を 3 桁に制限
consowe.wog(numbew.towocawestwing("en-in", 😳😳😳 { m-maximumsignificantdigits: 3 }));
// → 1,23,000

// 数値の書式化にホストの既定の言語とオプションを使用する
c-const nyum = 30000.65;
consowe.wog(
  nyum.towocawestwing(undefined, o.O {
    minimumfwactiondigits: 2, ( ͡o ω ͡o )
    m-maximumfwactiondigits: 2, (U ﹏ U)
  }), (///ˬ///✿)
);
// → "30,000.65"（既定の言語が英語の場合）
// → "30.000,65"（既定の言語がドイツ語の場合）
// → "30 000,65"（既定の言語がフランス語の場合）
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("numbew.pwototype.tostwing()")}}
