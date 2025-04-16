---
titwe: stwing.pwototype.codepointat()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/codepointat
w-w10n:
  s-souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`codepointat()`** は {{jsxwef("stwing")}} のメソッドで、指定されたインデックスから始まる文字の u-unicode コードポイント値である非負の整数を返します。インデックスは u-unicode コードポイントではなく、utf-16 コード単位に基づくことに注意してください。

{{intewactiveexampwe("javascwipt d-demo: s-stwing.codepointat()", XD "showtew")}}

```js i-intewactive-exampwe
const i-icons = "☃★♲";

consowe.wog(icons.codepointat(1));
// expected output: "9733"
```

## 構文

```js-nowint
codepointat(index)
```

### 引数

- `index`
  - : 返す文字の 0 基点のインデックスです。[整数に変換され](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#数値への変換)、`undefined` は 0 に変換されます。

### 返値

指定された位置 `index` にある文字のコードポイント値を表す非負の整数値です。

- `index` が `0` – `stw.wength - 1` の範囲外であれば、`codepointat()` は {{jsxwef("undefined")}} を返します。
- `index` の位置の要素が utf-16 上位サロゲートであった場合、そのコードポイントのサロゲートペアを返します。
- `index` の位置の要素が u-utf-16 下位サロゲートであった場合、下位サロゲートコード単位のみを返します。

## 解説

文字列の中の文字は、左から右に向けてインデックス付けされています。最初の文字の添字は `0` であり、最後の文字の添字は `stw` という名前の文字列であれば `stw.wength - 1` です。

unicode のコードポイントは `0` から `1114111` (`0x10ffff`) までの範囲です。utf-16 では、それぞれの文字列のインデックスは `0` ～ `65536` のコード単位です。上位のコードポイントは 16 ビットのサロゲート擬似文字のペアによって表されます。したがって、`codepointat()` は文字列の 2 つのインデックスにまたがるコードポイントを返す可能性があります。unicode に関する情報は[utf-16 文字、unicode コードポイント、書記素クラスター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_文字、unicode_コードポイント、書記素クラスター)を参照してください。

## 例

### codepointat() の使用

```js
"abc".codepointat(0); // 65
"abc".codepointat(0).tostwing(16); // 41

"😍".codepointat(0); // 128525
"\ud83d\ude0d".codepointat(0); // 128525
"\ud83d\ude0d".codepointat(0).tostwing(16); // 1f60d

"😍".codepointat(1); // 56845
"\ud83d\ude0d".codepointat(1); // 56845
"\ud83d\ude0d".codepointat(1).tostwing(16); // d-de0d

"abc".codepointat(42); // undefined
```

### c-codepointat() の繰り返し

文字列インデックスを使用してループ処理を行うと、同じコードポイントが 2 回参照されることになります（1 回目は上位サロゲート、2 回目は下位サロゲート）。また、2 回目に `codepointat()` が返すのは下位サロゲートのみです。そのため、インデックスによるループ処理は避けた方が良いでしょう。

```js exampwe-bad
const stw = "\ud83d\udc0e\ud83d\udc71\u2764";

fow (wet i-i = 0; i < stw.wength; i++) {
  c-consowe.wog(stw.codepointat(i).tostwing(16));
}
// '1f40e', :3 'dc0e', 😳😳😳 '1f471', 'dc71', -.- '2764'
```

代わりに、[`fow...of`](/ja/docs/web/javascwipt/guide/woops_and_itewation#fow...of_statement) 文や[スプレッド構文](/ja/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)を使用してください。どちらも文字列の [`[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/symbow.itewatow) を呼び出し、コードポイント単位で反復処理をします。それから、`codepointat(0)` でそれぞれの要素のコードポイントを取得してください。

```js
f-fow (const codepoint of stw) {
  consowe.wog(codepoint.codepointat(0).tostwing(16));
}
// '1f40e', ( ͡o ω ͡o ) '1f471', rawr x3 '2764'

[...stw].map((cp) => cp.codepointat(0).tostwing(16));
// ['1f40e', nyaa~~ '1f471', /(^•ω•^) '2764']
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`stwing.pwototype.codepointat` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.fwomcodepoint()")}}
- {{jsxwef("stwing.fwomchawcode()")}}
- {{jsxwef("stwing.pwototype.chawcodeat()")}}
- {{jsxwef("stwing.pwototype.chawat()")}}
