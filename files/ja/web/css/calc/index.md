---
title: calc()
slug: Web/CSS/calc
l10n:
  sourceCommit: c0daf1f038fdbdb62d71bfdeaf3a0a083660792c
---

{{CSSRef}}

**`calc()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、 CSS のプロパティ値を指定する際に計算を行うことができるものです。 {{cssxref("&lt;length&gt;")}}、{{cssxref("&lt;frequency&gt;")}}、{{cssxref("&lt;angle&gt;")}}、{{cssxref("&lt;time&gt;")}}、{{cssxref("&lt;percentage&gt;")}}、{{cssxref("&lt;number&gt;")}}、{{cssxref("&lt;integer&gt;")}} が利用できる場所ならば使用できます。

{{EmbedInteractiveExample("pages/css/function-calc.html")}}

## 構文

```css
/* calc(式) */
calc(100% - 80px)

/* CSS 関数を用いた式 */
calc(100px * sin(pi / 2))

/* 変数を含む式 */
calc(var(--hue) + 180)

/* 相対色の色チャンネルに用いた式 */
lch(from aquamarine l c calc(h + 180))
```

`calc()` 関数は、引数として単一の式を取り、その式の結果が CSS プロパティの値として使用されます。この式において、{{Glossary("operand", "オペランド")}}は、以下の一覧に掲載されている{{Glossary("operator", "演算子")}}を使用して結合することができます。式に複数のオペランドが含まれる場合、 `calc()` は標準的な[演算子の優先順位のルール](/ja/docs/Learn/JavaScript/First_steps/Math#演算子の優先順位)を使用します。

- `+`
  - : 指定されたオペランド同士を加算します。
- `-`
  - : 第 2 オペランドを第 1 オペランドから減算します。
- `*`
  - : 指定されたオペランド同士を乗算します。
- `/`
  - : 左側のオペランド（被除数）を右側のオペランド（除数）で除算します。

{{cssxref("&lt;number&gt;")}} 型以外のオペランドにはすべて、`px`、`em`、`%` などの適切な単位文字列を接尾語として付ける必要があります。 式内の各オペランドに異なる単位を使用することができます。また、必要に応じて括弧を使用して計算順序を指定することもできます。

## 解説

`calc()` については、気に留めておくべきポイントがいくつかあります。

- `calc()` 内の引数は、浮動小数点演算の IEEE-754 標準に従ってシリアライズされるため、 `infinity` および `NaN` 定数に関しては、いくつか注意すべきケースがあります。
  定数がどのようにシリアライズされるかについての詳細は、 [`calc-keyword`](/ja/docs/Web/CSS/calc-keyword) ページをご覧ください。

- 自動レイアウトと固定レイアウトの表の両方において、表の列、表の列グループ、表の行、表の行グループ、表のセルの幅と高さにパーセント値を含む数式は、 `auto` が指定されているかのように扱われる場合があります。

- `calc()` 関数は、パーセント値に直接数値を代入することはできません。例えば、 `calc(100 / 4)%` は不正ですが、 `calc(100% / 4)` は有効です。

- `calc()` が {{cssxref("&lt;integer&gt;")}} の期待される場所で使用されると、値は最も近い整数に丸められます。つまり、 `calc(1.4)` は `1` という値になります。 値の小数部分がちょぷど `0.5` の場合、値は切り上げられます。 例えば、 `calc(1.5)` は `2` という値になりますが、`calc(-1.5)` は `-1` に丸められます。

- `calc()` は[内在的なサイズの値](/ja/docs/Glossary/Intrinsic_Size)、例えば {{cssxref("width#auto", "auto")}} や {{cssxref("fit-content")}} では計算を行うことができません。代わりに {{cssxref("calc-size()")}} 関数を使用してください。

### `calc()` の使用に関するルールとベストプラクティス

- `+` 演算子と `-` 演算子は**前後に{{Glossary("whitespace", "ホワイトスペース")}}を置く必要があります**。たとえば、 `calc(50% -8px)` と記述した場合、パーセント表記と負の長さが連続しているものとみなされ、無効な式となるからです。 `calc(50% - 8px)` はパーセント表記、減算記号、長さの順に並んでいるものと解釈されます。また、 `calc(8px + -50%)` は長さ、加算記号、負のパーセント表記の順に並んでいるものと解釈されます。
- `*` 演算子と `/` 演算子には前後のホワイトスペースは必要ありませんが、こちらにもホワイトスペースを用いて記述ルールに一貫性を持たせておくことは認められており、推奨されています。
- `calc()` 関数は入れ子にすることができ、内側のものは単なる括弧として扱われます。
- 長さについては、 `0` を指定しても `0px` （または他の長さの単位）ということにはなりません。代わりに、単位を伴うバージョンを使用する必要があります。 `margin-top: calc(0px + 20px);` は有効ですが、 `margin-top: calc(0 + 20px);` は不正なコードです。
- 現在の実装では、 `*` および `/` 演算子では、オペランドの 1 つが単位なしでなければならないことが要求されます。 `/` の場合、右のオペランドが単位なしでなければなりません。例えば、 `font-size: calc(1.25rem / 1.25)` は有効ですが、 `font-size: calc(1.25rem / 125%)` は不正なコードです。

### 相対色における色チャンネルの計算の対応

`calc()` 関数は、[相対色](/ja/docs/Web/CSS/CSS_colors/Relative_colors)のコンテキスト内で色チャンネルを直接操作するために使用することができます。これにより、[`rgb()`](/ja/docs/Web/CSS/color_value/rgb)、[`hsl()`](/ja/docs/Web/CSS/color_value/hsl)、[`lch()`](/ja/docs/Web/CSS/color_value/lch) などの色モデルにおける色チャンネルの動的な調整が可能になります。

相対色の構文は、色チャンネルの値を {{cssxref("&lt;number&gt;")}} として表す色チャンネルキーワードをいくつか定義しています（詳細は「[チャンネル値は `<number>` 値に解決される](/ja/docs/Web/CSS/CSS_colors/Relative_colors#number_値に解決するチャンネル値)」を参照）。 `calc()` 関数は、これらの色チャンネルキーワードを使用して、例えば `calc(r + 10)` のように、色チャンネルの動的な調整を行うことができます。

### 形式文法

{{csssyntax}}

## アクセシビリティ

`calc()` を使用してテキストの大きさを制御する場合は、一方の値が[相対的な長さの単位](/ja/docs/Web/CSS/length#相対的な長さの単位)になることを確認してください。

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

これによって、ページが拡大縮小されたときにテキストの大きさが変化します。

- [MDN WCAG のを理解する 1.4 の解説](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## 例

### マージンをつけてオブジェクトを画面に配置する

`calc()` でマージン設定を持つボックス配置がしやすくなります。この例では CSS でウィンドウを横切るように広がるバナーを作ります。バナーの両側とウィンドウの縁は 40 ピクセル空けます。

```css
.banner {
  position: absolute;
  left: 40px;
  width: calc(100% - 80px);
  border: solid black 1px;
  box-shadow: 1px 2px;
  background-color: yellow;
  padding: 6px;
  text-align: center;
  box-sizing: border-box;
}
```

```html
<div class="banner">これはバナーです！</div>
```

{{EmbedLiveSample('Positioning_an_object_on_screen_with_a_margin', 'auto', '60')}}

### フォームフィールドの大きさを自動的に隅に合うように調整

`calc()` はフォーム要素のサイズ変更にも利用できます。適切なマージンを維持しながら、コンテナーの縁を突き破らないように、利用できるスペースいっぱいに広げます。

いくらかの CSS を見てみましょう。

```css
input {
  padding: 2px;
  display: block;
  width: calc(100% - 1em);
}

#form-box {
  width: calc(100% / 6);
  border: 1px solid black;
  padding: 4px;
}
```

ここで、フォームはウィンドウの取り得る幅の 1/6 を使うように指定しています。それから、入力項目が必ず妥当なサイズを持つように再度 `calc()` を使い、コンテナーの幅 - 1em の幅になるように指定します。次の HTML でこの CSS を使います。

```html
<form>
  <div id="form-box">
    <label>何か入力:</label>
    <input type="text" id="misc" name="misc" />
  </div>
</form>
```

{{EmbedLiveSample('Automatically_sizing_form_fields_to_fit_their_container', '700', '80')}}

### 入れ子の `calc()` と CSS 変数

`calc()` で [CSS 変数](/ja/docs/Web/CSS/CSS_cascading_variables) を使用することもできます。以下のコードを見てみてください。</p>

```css
.foo {
  --widthA: 100px;
  --widthB: calc(var(--widthA) / 2);
  --widthC: calc(var(--widthB) / 2);
  width: var(--widthC);
}
```

すべての変数が展開された後、 `widthC` の値は `calc( calc( 100px / 2) / 2)` になります。この値が .foo の width プロパティに割り当てられたとき、内部にあるすべての `calc()` は (入れ子の深さにかかわらず) 単なる括弧になり、`width` プロパティの値は最終的に `calc( ( 100px / 2) / 2)`、すなわち `25px` になります。要するに、`calc()` の内部にある `calc()` は単なる括弧と同等です。

### 相対色における色チャンネルの調整

`calc()` 関数を使用すると、色チャンネル値を変数として格納する必要なく、[相対色](/ja/docs/Web/CSS/CSS_colors/Relative_colors)の個々の色チャンネルを調整することができます。

例えば、下記では最初の段落で [`<named-color>`](/ja/docs/Web/CSS/named-color) を使用しています。
その後の段落では `calc()` を [`rgb()`](/ja/docs/Web/CSS/color_value/rgb) および [`hsl()`](/ja/docs/Web/CSS/color_value/hsl) 関数と組み合わせて使用することで、元の名前付き色に対する各色チャンネルの値を相対的に調整しています。

```html live-sample___adjusting_color_channels_in_relative_colors
<p class="original">元のテキスト色は rebeccapurple</p>
<p class="increase-hue">色相を 80 増加</p>
<p class="increase-lightness">明度を 20 増加</p>
<p class="decrease-lightness">明度を 10 減少</p>
```

```css hidden live-sample___adjusting_color_channels_in_relative_colors
p {
  font-family: monospace;
  font-size: 16px;
}
```

```css live-sample___adjusting_color_channels_in_relative_colors
.original {
  color: rebeccapurple;
}

.increase-hue {
  color: lch(from rebeccapurple l c calc(h + 80));
}

.increase-lightness {
  color: lch(from rebeccapurple calc(l + 20) c h);
}

.decrease-lightness {
  color: lch(from rebeccapurple calc(l - 10) c h);
}
```

{{EmbedLiveSample('Adjusting color channels in relative colors', '700', '300')}}

相対色を導き出すために `calc()` 関数を使用する例については、相対色を使用するページの「[数学関数の使用](/ja/docs/Web/CSS/CSS_colors/Relative_colors#数学関数の使用)」の節を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("&lt;calc-keyword&gt;")}}
- [CSS 関数](/ja/docs/Web/CSS/CSS_Functions)
- [A Complete Guide to calc() in CSS](https://css-tricks.com/a-complete-guide-to-calc-in-css/) (CSS-Tricks)
