---
title: round()
slug: Web/CSS/Reference/Values/round
original_slug: Web/CSS/round
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`round()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、選択した丸め方法に基づいて、丸めた数値を返します。

作成者は、丸める値、間隔、あるいはその両方に[カスタム CSS プロパティ](/ja/docs/Web/CSS/Reference/Properties/--*) (例: `--my-property`) を使用すべきです。これらの値が既知の場合は、`round()` 関数を使用するのは冗長です。

## 構文

```css
width: round(var(--width), 50px);
width: round(up, 101px, var(--interval));
width: round(down, var(--height), var(--interval));
margin: round(to-zero, -105px, 10px);
```

### 引数

`round(<rounding-strategy>, valueToRound, roundingInterval)` 関数は、オプションの丸め方法、丸める値（または数式）、丸め間隔（または数式）を指定します。
`valueToRound` は、丸め方法に従って、`roundingInterval` の最も近い整数の倍数に丸められます。

- `<rounding-strategy>`
  - : 丸め方法。
    これは、次のいずれかの値です。
    - `up`
      - : `valueToRound` を `roundingInterval` の最も近い整数倍に切り上げます（値が負の場合は「より正の値」になります）。これは、JavaScript の [`Math.ceil()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil) メソッドと同等です。
    - `down`
      - : `valueToRound` を `roundingInterval` の最も近い整数倍に切り捨てます（値が負の場合は「より負の値」になります）。これは、JavaScript の [`Math.floor()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) メソッドと同等です。
    - `nearest` （既定値）
      - : `valueToRound` を、`roundingInterval` の最も近い整数倍に丸めます。この値は、上の値と下の値のどちらになる場合もあります。
        `valueToRound` が、上記の丸め対象の上と下のちょうど中間（どちらにも「最も近い」ではない）にある場合は、切り上げられます。
        JavaScript の [`Math.round()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/round) と同等です。
    - `to-zero`
      - : `valueToRound` を、`roundingInterval` の 0 に近い側の整数の倍数に丸めます（正の値は減少し、負の値は「負ではない方向」になります）。これは、 JavaScript の [`Math.trunc()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) メソッドと同等です。

- `valueToRound`
  - : 丸める値。
    これは、 {{CSSxREF("&lt;number&gt;")}}、{{CSSxREF("&lt;dimension&gt;")}}、{{CSSxREF("&lt;percentage&gt;")}}、またはこれらのいずれかの値に解決される数式でなければなりません。

- `roundingInterval`
  - : 丸め間隔。
    これは、 {{CSSxREF("&lt;number&gt;")}}、{{CSSxREF("&lt;dimension&gt;")}}、{{CSSxREF("&lt;percentage&gt;")}}、またはこれらのいずれかの値に解決される数式です。 `valueToRound` が {{CSSxREF("&lt;number&gt;")}} である場合、 `roundingInterval` は省略することができ、既定値が `1` になります。 それ以外の場合、それを省略すると不正な式になります。

### 返値

`valueToRound` の値を、`roundingInterval` の最も近い整数の倍数に丸めます。丸め方法は、`rounding strategy` によって異なります。

- `roundingInterval` が `0` の場合、結果は `NaN` です。
- `valueToRound` と `roundingInterval` が `infinite` の場合、結果は `NaN` です。
- `valueToRound` が無限大で、`roundingInterval` が有限の場合、結果は同じ `infinity` になります。
- `valueToRound` が有限で `roundingInterval` が無限の場合、結果は丸め方法と `A` の符号によって異なります。
  - `up` - `valueToRound` が正の値（0 以外）の場合は、`+∞` を返します。`valueToRound` が `0⁺` の場合は、`0⁺` を返します。それ以外の場合は、`0⁻` を返します。
  - `down` - `valueToRound` が負（0 以外）の場合は、`−∞` を返します。`valueToRound` が `0⁻` の場合は、`0⁻` を返します。それ以外の場合は、`0⁺` を返します。
  - `nearest`、`to-zero` - `valueToRound` が正の値または `0⁺` の場合、`0⁺` を返します。それ以外の場合は、`0⁻` を返します。

- 引数の計算結果は、{{CSSxREF("&lt;number&gt;")}}、{{CSSxREF("&lt;dimension&gt;")}}、{{CSSxREF("&lt;percentage&gt;")}} に解決されますが、同じ型である必要があります。そうでない場合、関数は不正となり、結果は引数と同じ型になります。
- `valueToRound` が `roundingInterval` のちょうど整数倍である場合、`round()` は `valueToRound` を正確に解決します（`valueToRound` が `0⁻` であるか `0⁺` であるかは、関連する場合、そのまま保持されます）。それ以外の場合、`roundingInterval` の整数倍で `valueToRound` に「最も近い」値が 2 つあります。`−∞` に近い下の `roundingInterval` と、`+∞` に近い上の `roundingInterval` です。

## 形式文法

{{CSSSyntax}}

## 例

### 正の値を丸める

この例は、`round()` 関数の丸め方法が正の値に対してどのように動作するのかを示しています。

下記 5 つのボックスのうち、`round()` 関数は最後の 4 つの高さを設定するために使用されています。
丸める値は、それぞれのケースで 100 ピクセルから 125 ピクセルの間であり、丸める値はすべて 25 ピクセルです。
したがって、ボックスの高さは 125 ピクセルに切り上げられるか、100 ピクセルに切り捨てられます。

#### HTML

HTML は、CSS によってボックスとしてレンダリングされる 5 つの `div` 要素を定義しています。
これらの要素には、丸め方法、初期値、およびボックスの予想最終高さ（括弧内）を示すテキストが含まれています。

```html
<div class="box box-1">height: 100px</div>
<div class="box box-2">up 101px (125px)</div>
<div class="box box-3">down 122px (100px)</div>
<div class="box box-4">to-zero 120px (100px)</div>
<div class="box box-5">nearest 117px (125px)</div>
```

#### CSS

```css hidden
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
```

すべてのボックスに適用される CSS を下記に示します。
丸め間隔に使用する、`--rounding-interval` という名前付き[カスタム CSS プロパティ](/ja/docs/Web/CSS/Reference/Properties/--*)を適用していることに注意してください。

```css
div.box {
  width: 100px;
  height: 100px;
  background: lightblue;
  --rounding-interval: 25px;
}
```

左から最初の `div` は、特定の CSS ルールで指定されていないため、既定の高さ 100px が適用されます。
2 番目、3 番目、4 番目の `div` の CSS は、それぞれ round、up、down、to-zero を表示させるもので、下記に示します。

```css
div.box-2 {
  height: round(up, 101px, var(--rounding-interval));
}
div.box-3 {
  height: round(down, 122px, var(--rounding-interval));
}
div.box-4 {
  height: round(to-zero, 120px, var(--rounding-interval));
}
```

上記で、`var()` およびカスタム CSS プロパティ `--rounding-interval` を使用して丸める間隔を示していることに注目してください。

最後のボックスは丸め方法を指定せずに設定されているため、既定では `nearest` になります。
この場合、 117 ピクセルに最も近い間隔は 125 ピクセルであるため、切り上げられます。
対照のために、ここでは丸め値と間隔の両方にハードコードされた値を指定しました。
これは可能ですが、結果がすでに分かっている場合に数値を丸める意味はないため、通常はこのようなことはしません。

```css
div.box-5 {
  height: round(117px, 25px);
}
```

#### 結果

ブラウザーが CSS の `round()` 関数に対応している場合、含まれているテキストの高さに応じて、高さが丸められた 5 列が表示されます。

{{EmbedLiveSample('Round positive values', '100%', '200px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("mod")}}
- {{CSSxRef("rem")}}
