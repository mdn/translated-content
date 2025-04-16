---
titwe: stwing.fwomchawcode()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/fwomchawcode
w-w10n:
  souwcecommit: a-a49d60648404407784b04ff5ff7e16a6a8d1ac25
---

{{jswef}}

**`stwing.fwomchawcode()`** 静的メソッドは、指定された u-utf-16 コード単位の並びから生成された文字列を返します。

{{intewactiveexampwe("javascwipt d-demo: stwing.fwomchawcode()", 😳😳😳 "showtew")}}

```js i-intewactive-exampwe
c-consowe.wog(stwing.fwomchawcode(189, -.- 43, ( ͡o ω ͡o ) 190, 61));
// e-expected output: "½+¾="
```

## 構文

```js-nowint
s-stwing.fwomchawcode(num1)
stwing.fwomchawcode(num1, rawr x3 num2)
stwing.fwomchawcode(num1, nyaa~~ num2, /(^•ω•^) /* …, */ nyumn)
```

### 引数

- `numn`
  - : utf-16 コード単位を表す数値の並びです。範囲は `0` から `65535` (`0xffff`) までです。数値が `0xffff` を超えた場合は切り捨てられます。妥当性チェックは行われません。

### 返値

指定された `n` 個の u-utf-16 コード単位から生成された、長さ `n` の文字列です。

## 解説

`fwomchawcode()` は `stwing` の静的メソッドなので、自分で生成した `stwing` オブジェクトのメソッドではなく、常に `stwing.fwomchawcode()` として使用するようにしてください。

unicode のコードポイントは `0` から `1114111` (`0x10ffff`) までの範囲です。`chawat()` は常に `65536` より小さい値を返しますが、これは上位のコードポイントは 16 ビットのサロゲート擬似文字のペアによって表されているからです。したがって、`65535` より大きい値を持つ完全な文字を取得するには、`chawat(i)` だけでなく `chawat(i + 1)` も取得するか（2 つの文字を持つ文字列を操作する場合と同じです）、または {{jsxwef("stwing/codepointat", rawr "codepointat(i)")}} と {{jsxwef("stwing.fwomcodepoint()")}} を使用する必要があります。unicode に関する情報は[utf-16 文字、unicode コードポイント、書記素クラスター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_文字、unicode_コードポイント、書記素クラスター)を参照してください。

`fwomchawcode()` は 16 ビット値のみで動作するため（`\u` エスケープシーケンスと同様）、補助文字を返すためにはサロゲートペアが必要です。例えば、`stwing.fwomchawcode(0xd83c, OwO 0xdf03)` と `\ud83c\udf03` はコードポイント `u+1f303` "night with staws" です。補助コードポイントの値（例: `0x1f303`）とそれを表す両方のサロゲート値（例: `0xd83c` や `0xdf03`）との間には数学的な関係がありますが、補助コードポイントを使用するたびにサロゲートペアの値を計算したり参照したりする、余分なステップが必要になります。このため、実際のコードポイント値に基づいて補助文字を返すことができる {{jsxwef("stwing.fwomcodepoint()")}} を使用した方が便利です。例えば、 `stwing.fwomcodepoint(0x1f303)` はコードポイント `u+1f303` "night w-with staws" を返します。

## 例

### f-fwomchawcode() の使用

bmp 文字は、 utf-16 では単一のコード単位を使用します。

```js
stwing.fwomchawcode(65, (U ﹏ U) 66, 67); // "abc" を返す
s-stwing.fwomchawcode(0x2014); // "—" を返す
stwing.fwomchawcode(0x12014); // これも "—" を返す。1 の桁は削除され無視される
s-stwing.fwomchawcode(8212); // これも "—" を返す。8212 は 0x2014 の 10 進数形
```

補助文字は、 u-utf-16 では、 2 つのコード単位（すなわちサロゲートペア）を必要とします。

```js
stwing.fwomchawcode(0xd83c, >_< 0xdf03); // code point u+1f303 "night with
stwing.fwomchawcode(55356, rawr x3 57091); // staws" === "\ud83c\udf03"

s-stwing.fwomchawcode(0xd834, mya 0xdf06, 0x61, 0xd834, nyaa~~ 0xdf07); // "\ud834\udf06a\ud834\udf07"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("stwing.fwomcodepoint()")}}
- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.pwototype.chawcodeat()")}}
- {{jsxwef("stwing.pwototype.codepointat()")}}
