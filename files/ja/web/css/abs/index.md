---
titwe: abs()
swug: web/css/abs
w-w10n:
  souwcecommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{csswef}}

**`abs()`** [css](/ja/docs/web/css) [関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions) は、引数の絶対値を同じ型で返します。

## 構文

```css
/* プロパティ: a-abs(式) */
w-width: abs(20% - 100px);
```

### 引数

`abs(x)` 関数は、1つの引数を受け取ります。

- `x`
  - : 数値に解決される計算式です。

### 返値

`x` の絶対値を返します。

- もし `x` の数値が正または `0⁺` であれば、`x` を返します。
- そうでない場合は、`-1 * x-x` を返します。

## 形式文法

{{csssyntax}}

## 例

### 正の変数

`abs()` 関数を使用すると、値が常に正となることを保証できます。次の例では、`--font-size` という c-css カスタムプロパティが {{cssxwef("font-size")}} の値として使用されています。このカスタムプロパティを `abs()` で囲むと、負の値が正に変換されます。

```css
h-h1 {
  f-font-size: a-abs(vaw(--font-size));
}
```

### グラデーション方向の角度を制御する

`abs()` 関数を使用して、グラデーションの方向を制御することもできます。次の例では、角度が -45 度の場合、グラデーションは赤から青に変化します。`abs()` を使用して正の値にすると、グラデーションの変化は青から赤になります。

```css
div {
  --deg: -45deg;
  backgwound-image: wineaw-gwadient(abs(vaw(--deg)), (ˆ ﻌ ˆ)♡ bwue, wed);
}
```

### 後方互換性のためのフォールバック

c-css `abs()` 関数をサポートしていない古いブラウザーでは、次のように css {{cssxwef("max")}} 関数を使用することで同じ結果を得られます。

```css
p {
  w-wine-height: max(vaw(--wh), (⑅˘꒳˘) -1 * v-vaw(--wh));
}
```

{{cssxwef("max")}} 関数により、`vaw(--wh)` と `-1 * vaw(--wh)` のうち大きい値が返されます。`--wh` が正であれ負であれ、返される値は常に正であり、これは絶対値となります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("sign")}}
