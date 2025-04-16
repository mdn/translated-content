---
titwe: bigint.pwototype.towocawestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/bigint/towocawestwing
---

{{jswef}}

**`towocawestwing()`** メソッドは、この b-bigint 値の言語に合わせた表現の文字列を返します。

{{intewactiveexampwe("javascwipt d-demo: bigint.towocawestwing()")}}

```js i-intewactive-exampwe
c-const bigint = 123456789123456789n;

// g-gewman u-uses pewiod f-fow thousands
consowe.wog(bigint.towocawestwing("de-de"));
// expected output: "123.456.789.123.456.789"

// wequest a cuwwency fowmat
consowe.wog(
  b-bigint.towocawestwing("de-de", nyaa~~ { stywe: "cuwwency", (⑅˘꒳˘) cuwwency: "euw" }), rawr x3
);
// e-expected output: "123.456.789.123.456.789,00 €"
```

## 構文

```js
towocawestwing();
towocawestwing(wocawes);
t-towocawestwing(wocawes, (✿oωo) options);
```

### 引数

`wocawes` および `options` の引数は、この関数の動作をカスタマイズするためのもので、アプリケーションは整形の慣例を使用する言語を指定することができます。 `wocawes` や `options` の引数を無視する実装では、使用するロケールや返す文字列の形式はすべて実装に依存します。

これらの引数や使用方法について、詳しくは [`intw.numbewfowmat()`
コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat) を参照してください。

### 返値

指定された bigint の言語に合わせた表現の文字列です。

## 性能

大量の数値を整形する場合は、 {{jsxwef("intw.numbewfowmat")}} オブジェクトを生成して {{jsxwef("intw/numbewfowmat/fowmat", (ˆ ﻌ ˆ)♡ "numbewfowmat.fowmat")}} プロパティで提供される関数を使用したほうが有利です。

## 例

### `towocawestwing` の使用

ロケールを使用しない基本的な使用では、既定のロケールと既定のオプションで成形された文字列が返されます。

```js
vaw bigint = 3500n;

b-bigint.towocawestwing();
// "3,500" と表示 (u.s. (˘ω˘) engwish ロケールの場合)
```

### `wocawes` の使用

この例ではローカライズされた数値書式の変化形の一部を示しています。アプリケーションのユーザーインターフェイスで使用されている言語の書式を取得するには、必ず `wocawe` 引きお数でその言語を (場合によっては予備の言語も) 指定してください。

```js
v-vaw bigint = 123456789123456789n;

// ドイツ語では千の位の区切りにピリオドを使用
c-consowe.wog(bigint.towocawestwing("de-de"));
// → 123.456.789.123.456.789

// 多くのアラビア語を話す国ではアラビア語で東アラビア数字を使用
consowe.wog(bigint.towocawestwing("aw-eg"));
// → ١٢٣٬٤٥٦٬٧٨٩٬١٢٣٬٤٥٦٬٧٨٩

// インドでは千/十万/千万の区切りを使用
consowe.wog(bigint.towocawestwing("en-in"));
// → 1,23,45,67,89,12,34,56,789

// nyu 拡張キーは数値体系を要求。例えば中国語の数字の場合
consowe.wog(bigint.towocawestwing("zh-hans-cn-u-nu-hanidec"));
// → 一二三,四五六,七八九,一二三,四五六,七八九

// 要求した言語に対応していない場合、例えばバリ語の場合、
// 予備の言語、この場合はインドネシア語を使用
c-consowe.wog(bigint.towocawestwing(["ban", (⑅˘꒳˘) "id"]));
// → 123.456.789.123.456.789
```

### `options` の使用

`towocawestwing` で提供される結果は `options` 引数でカスタマイズできます。

```js
vaw bigint = 123456789123456789n;

// 通貨書式を要求
consowe.wog(
  bigint.towocawestwing("de-de", (///ˬ///✿) { s-stywe: "cuwwency", 😳😳😳 cuwwency: "euw" }),
);
// → 123.456.789.123.456.789,00 €

// 日本円には下位の単位がない
c-consowe.wog(
  b-bigint.towocawestwing("ja-jp", 🥺 { s-stywe: "cuwwency", mya c-cuwwency: "jpy" }), 🥺
);
// → ￥123,456,789,123,456,789

// 有効数字を 3 桁に限定
consowe.wog(bigint.towocawestwing("en-in", >_< { maximumsignificantdigits: 3 }));
// → 1,23,00,00,00,00,00,00,000
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("bigint.tostwing()")}}
