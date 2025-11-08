---
title: rem()
slug: Web/CSS/Reference/Values/rem
original_slug: Web/CSS/rem
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`rem()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、最初の引数を 2 つ目の引数で割ったときの剰余を返します。これは、JavaScript の[剰余演算子 (`%`)](/ja/docs/Web/JavaScript/Reference/Operators/Remainder) と似ています。剰余は、1 つのオペランド（被除数）を 2 つ目のオペランド（除数）で割ったときに残る値です。常に被除数の符号を取ります。

> [!NOTE]
> 単位 `rem` については、 {{CSSxRef("&lt;length&gt;")}} ページをご覧ください。

例えば、CSS の `rem(27, 5)` 関数は、剰余として `2` を返します。 27 を 5 で割ると、結果は 5 で、剰余は 2 になります。完全な計算は `27 / 5 = 5 * 5 + 2` です。

## 構文

```css
/* 単位なしの <number> */
line-height: rem(21, 2); /* 1 */
line-height: rem(14, 5); /* 4 */
line-height: rem(5.5, 2); /* 1.5 */

/* <percentage> や <dimension> に基づく単位 */
margin: rem(14%, 3%); /* 2% */
margin: rem(18px, 5px); /* 3px */
margin: rem(10rem, 6rem); /* 4rem */
margin: rem(26vmin, 7vmin); /* 5vmin */
margin: rem(1000px, 29rem); /* 72px - ルートの font-size が 16px の場合 */

/* 負の値・正の値 */
rotate: rem(200deg, 30deg); /* 20deg */
rotate: rem(140deg, -90deg); /* 50deg */
rotate: rem(-90deg, 20deg); /* -10deg */
rotate: rem(-55deg, -15deg); /* -10deg */

/* 計算 */
scale: rem(10 * 2, 1.7); /* 1.3 */
rotate: rem(10turn, 18turn / 3); /* 4turn */
transition-duration: rem(20s / 2, 3000ms * 2); /* 4s */
```

### 引数

関数 `mod(dividend, divisor)` は、カンマで区切られた 2 つの値を引数として受け入れます。関数が有効であるためには、両方の引数は同じ型、[数値](/ja/docs/Web/CSS/Reference/Values/number)、[サイズ](/ja/docs/Web/CSS/Reference/Values/dimension)、{{cssxref("percentage")}} のいずれかである必要があります。2 つの引数の単位は同じである必要はありませんが、{{cssxref("length")}}、{{cssxref("angle")}}、{{cssxref("time")}}、{{cssxref("frequency")}} などの同じサイズの型である必要があります。

- `dividend`
  - : 被除数を表す {{CSSxREF("&lt;number&gt;")}}、{{CSSxREF("&lt;dimension&gt;")}}、{{CSSxREF("&lt;percentage&gt;")}} に解決される計算式。

- `divisor`
  - : 除数として表される {{CSSxREF("&lt;number&gt;")}}、{{CSSxREF("&lt;dimension&gt;")}}、{{CSSxREF("&lt;percentage&gt;")}} に解決される計算式。

### 返値

剰余、つまり余りの演算を、{{CSSxREF("&lt;number&gt;")}}、{{CSSxREF("&lt;dimension&gt;")}}、{{CSSxREF("&lt;percentage&gt;")}} （引数の型に応じて）で表して返します。

- `divisor` が `0` の場合、結果は `NaN` です。
- `dividend` が `infinite` の場合、結果は `NaN` です。
- `dividend` が正の値の場合、結果は正の値 (`0⁺`) となり、`dividend` が負の値の場合、結果は負の値 (`0⁻`) となります。

## 形式文法

{{CSSSyntax}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("round")}}
- {{CSSxRef("mod")}}
- {{CSSxRef("&lt;length&gt;")}}
