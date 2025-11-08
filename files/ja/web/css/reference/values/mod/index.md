---
title: mod()
slug: Web/CSS/Reference/Values/mod
original_slug: Web/CSS/mod
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`mod()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、最初の引数を 2 つ目の引数で割ったときのモジュラスを返します。これは、JavaScript の[剰余演算子 (`%`)](/ja/docs/Web/JavaScript/Reference/Operators/Remainder) と似ています。モジュラスは、1 つのオペランド（被除数）を 2 つ目のオペランド（除数）で割ったときに残る値です。常に除数の符号を取ります。

計算は `a - (Math.floor(a / b) * b)` です。例えば、CSS の関数 `mod(21, -4)` は、余りの `-3` を返します。完全な計算は `21 - (Math.floor(21 / -4) * -4)` です。`21` を `-4` で割ると、結果は `-5.25` になります。これは `-6` に切り捨てられます。`-6` に `-4` を掛けると `24` になります。この `24` を元の `21` から引くと、余りは -3 になります。

## 構文

```css
/* 単位なしの <number> */
line-height: mod(7, 2); /* 1 */
line-height: mod(14, 5); /* 4 */
line-height: mod(3.5, 2); /* 1.5 */

/* <percentage> や <dimension> に基づく単位 */
margin: mod(15%, 2%); /* 1% */
margin: mod(18px, 4px); /* 2px */
margin: mod(19rem, 5rem); /* 4rem */
margin: mod(29vmin, 6vmin); /* 5vmin */
margin: mod(1000px, 29rem); /* 72px - ルートの font-size が 16px の場合 */

/* 負の値・正の値 */
rotate: mod(100deg, 30deg); /* 10deg */
rotate: mod(135deg, -90deg); /* -45deg */
rotate: mod(-70deg, 20deg); /* 10deg */
rotate: mod(-70deg, -15deg); /* -10deg */

/* 計算 */
scale: mod(10 * 2, 1.7); /* 1.3 */
rotate: mod(10turn, 18turn / 3); /* 4turn */
transition-duration: mod(20s / 2, 3000ms * 2); /* 4s */
```

### 引数

関数 `mod(dividend, divisor)` は、カンマで区切られた 2 つの値を引数として受け入れます。関数が有効であるためには、両方の引数は同じ型、[数値](/ja/docs/Web/CSS/Reference/Values/number)、[サイズ](/ja/docs/Web/CSS/Reference/Values/dimension)、{{cssxref("percentage")}} のいずれかである必要があります。2 つの引数の単位は同じである必要はありませんが、{{cssxref("length")}}、{{cssxref("angle")}}、{{cssxref("time")}}、{{cssxref("frequency")}} などの同じサイズの型である必要があります。

- `dividend`
  - : 被除数を表す {{CSSxREF("&lt;number&gt;")}}、{{CSSxREF("&lt;dimension&gt;")}}、{{CSSxREF("&lt;percentage&gt;")}} に解決される計算式。

- `divisor`
  - : 除数として表される {{CSSxREF("&lt;number&gt;")}}、{{CSSxREF("&lt;dimension&gt;")}}、{{CSSxREF("&lt;percentage&gt;")}} に解決される計算式。

### 返値

モジュラス、つまり余りの演算を、{{CSSxREF("&lt;number&gt;")}}、{{CSSxREF("&lt;dimension&gt;")}}、{{CSSxREF("&lt;percentage&gt;")}} （引数の型に応じて）で表して返します。

- `divisor` が `0` の場合、結果は `NaN` です。
- `dividend` が `infinite` の場合、結果は `NaN` です。
- `divisor` が正の値の場合、結果は正の値 (`0⁺`) となり、`divisor` が負の値の場合、結果は負の値 (`0⁻`) となります。

## 形式文法

{{CSSSyntax}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("round")}}
- {{CSSxRef("rem")}}
