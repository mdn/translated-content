---
title: calc()
slug: Web/CSS/Reference/Values/calc
original_slug: Web/CSS/calc
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

**`calc()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、 CSS のプロパティ値を指定する際に計算を行うことができるものです。 {{cssxref("&lt;length&gt;")}}、{{cssxref("&lt;frequency&gt;")}}、{{cssxref("&lt;angle&gt;")}}、{{cssxref("&lt;time&gt;")}}、{{cssxref("&lt;percentage&gt;")}}、{{cssxref("&lt;number&gt;")}}、{{cssxref("&lt;integer&gt;")}}、{{cssxref("color_value", "&lt;color-function&gt;")}} の値が利用できる場所ならば使用できます。

{{InteractiveExample("CSS デモ: calc()")}}

```css interactive-example-choice
width: calc(10px + 100px);
```

```css interactive-example-choice
width: calc(100% - 30px);
```

```css interactive-example-choice
width: calc(2em * 5);
```

```css interactive-example-choice
width: calc(var(--variable-width) + 20px);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">幅を変更してください</div>
</section>
```

```css interactive-example
:root {
  --variable-width: 100px;
}

#example-element {
  border: 10px solid black;
  padding: 10px;
}
```

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

`calc()` 関数は、引数として単一の式を取り、その式の結果が CSS プロパティの値として使用されます。この式において、{{Glossary("operand", "オペランド")}}は、以下の一覧に掲載されている{{Glossary("operator", "演算子")}}を使用して結合することができます。式に複数のオペランドが含まれる場合、 `calc()` は標準的な[演算子の優先順位のルール](/ja/docs/Learn_web_development/Core/Scripting/Math#演算子の優先順位)を使用します。

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

`calc()` について、いくつか留意すべき点があります。これについては、この節で詳しく説明します。

### 結果の値

`calc()` 関数は、以下のいずれかの型の完全な CSS 値の代わりに配置する必要があります。

- {{cssxref("&lt;length&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("flex_value", "&lt;flex&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}
- {{cssxref("&lt;percentage&gt;")}}
- {{cssxref("&lt;number&gt;")}}
- {{cssxref("&lt;integer&gt;")}}
- {{cssxref("&lt;length-percentage&gt;")}} のような複合型のいずれか

`calc()` は、パーセント値、長さ値などの数値部分のみを置き換えることはできません。その後に続く単位も置き換える必要があります。例えば、 `calc(100 / 4)%` は不正な式ですが、 `calc(100% / 4)` は正しい式です。

`calc()` の結果の値は、それが使用されているコンテキストと互換性がある必要があります。例えば、 `margin: calc(1px + 2px)` は有効ですが、 `margin: calc(1 + 2)` は無効です。これは、 `margin: 3` を指定することと同じであり、その結果、プロパティは無視されます。

{{cssxref("&lt;integer&gt;")}} が期待される場合、 `calc()` 式は `<number>` として評価され、最も近い整数に丸められます。したがって、 `calc(1.4)` は値 `1` を返します。値の小数点以下の桁数が正確に `0.5` の場合、値は正の無限大に向かって丸められます。例えば、 `calc(1.5)` は値 `2` となり、 `calc(-1.5)` は `-1` に丸められます。

`calc()` は、 IEEE-754 標準に従う浮動小数点演算を実行するため、 `infinity` および `NaN` の値についていくつかの注意事項が あります。定数のシリアル化の詳細については、 [`calc-keyword`](/ja/docs/Web/CSS/Reference/Values/calc-keyword) ページを参照してください。

### 入力の注意事項

- `calc()` は[内在的なサイズの値](/ja/docs/Glossary/Intrinsic_Size)、例えば {{cssxref("width#auto", "auto")}} や {{cssxref("fit-content")}} では計算を行うことができません。代わりに {{cssxref("calc-size()")}} 関数を使用してください。
- `*` 演算子と `/` 演算子には前後のホワイトスペースは必要ありませんが、一貫性のために追加することが推奨されています。
- `calc()` 関数は入れ子にすることができ、この場合、内側のものは単なる括弧として扱われます。
- 現在の実装では、 `*` および `/` 演算子では、オペランドの 1 つが単位なしである必要があります。 `/` の場合、右のオペランドが単位なしでなければなりません。例えば、 `font-size: calc(1.25rem / 1.25)` は有効ですが、 `font-size: calc(1.25rem / 125%)` は不正なコードです。
- 自動レイアウトと固定レイアウトの表の両方において、表の列、表の列グループ、表の行、表の行グループ、表のセルの幅と高さにパーセント値を含む数式は、 `auto` が指定されているかのように扱われる場合があります。
- `+` および `-` 式の構文の詳細については、 {{cssxref("calc-sum", "&lt;calc-sum&gt;")}} を参照してください。

### 相対色における色チャンネルの計算の対応

`calc()` 関数は、[相対色](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)のコンテキスト内で色チャンネルを直接操作するために使用することができます。これにより、[`rgb()`](/ja/docs/Web/CSS/Reference/Values/color_value/rgb)、[`hsl()`](/ja/docs/Web/CSS/Reference/Values/color_value/hsl)、[`lch()`](/ja/docs/Web/CSS/Reference/Values/color_value/lch) などの色モデルにおける色チャンネルの動的な調整が可能になります。

相対色の構文は、いくつかの色チャンネルキーワードを定義しています。それぞれのキーワードは、色チャンネルの値を {{cssxref("&lt;number&gt;")}} として表します（詳細については、[チャンネル値は `<number>` 値に解決される](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors#number_値に解決するチャンネル値)を参照してください）。 `calc()` 関数では、これらの色チャンネルキーワードを使用して、色チャンネルを動的に調整することができます。例えば、 `calc(r + 10)` などです。

### 形式文法

{{csssyntax}}

## アクセシビリティ

`calc()` を使用してテキストの大きさを制御する場合は、一方の値が[相対的な長さの単位](/ja/docs/Web/CSS/Reference/Values/length#相対的な長さの単位)になることを確認してください。

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

これによって、ページが拡大縮小されたときにテキストの大きさが変化します。

- [MDN WCAG のを理解する 1.4 の解説](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
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

`calc()` のもう 1 つの使用例は、適切なマージンを維持しながら、フォームフィールドがコンテナーの端からはみ出さずに、利用可能な空間に確実に収まるようにすることです。

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

`calc()` で [CSS 変数](/ja/docs/Web/CSS/Guides/Cascading_variables) を使用することもできます。以下のコードを見てみてください。</p>

```css
.foo {
  --width-a: 100px;
  --width-b: calc(var(--width-a) / 2);
  --width-c: calc(var(--width-b) / 2);
  width: var(--width-c);
}
```

すべての変数が展開された後、 `--width-c` の値は `calc(calc(100px / 2) / 2)` になります。この値が `.foo` の width プロパティに割り当てられたとき、内部にあるすべての `calc()` は（入れ子の深さにかかわらず）単なる括弧になり、 `width` プロパティの値は最終的に `calc((100px / 2) / 2)`、すなわち `25px` になります。要するに、 `calc()` の内部にある `calc()` は単なる括弧と同等です。

### 相対色における色チャンネルの調整

`calc()` 関数を使用すると、色チャンネル値を変数として格納する必要なく、[相対色](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)の個々の色チャンネルを調整することができます。

例えば、下記では最初の段落で [`<named-color>`](/ja/docs/Web/CSS/Reference/Values/named-color) を使用しています。
その後の段落では `calc()` を [`rgb()`](/ja/docs/Web/CSS/Reference/Values/color_value/rgb) および [`hsl()`](/ja/docs/Web/CSS/Reference/Values/color_value/hsl) 関数と組み合わせて使用することで、元の名前付き色に対する各色チャンネルの値を相対的に調整しています。

```html
<p class="original">元のテキスト色は rebeccapurple</p>
<p class="increase-hue">色相を 80 増加</p>
<p class="increase-lightness">明度を 20 増加</p>
<p class="decrease-lightness">明度を 10 減少</p>
```

```css hidden
p {
  font-family: monospace;
  font-size: 16px;
}
```

```css
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

相対色を導き出すために `calc()` 関数を使用する例については、相対色を使用するページの「[数学関数の使用](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors#数学関数の使用)」の節を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("&lt;calc-sum&gt;")}}
- {{CSSxRef("&lt;calc-keyword&gt;")}}
- [CSS 関数](/ja/docs/Web/CSS/Reference/Values/Functions)
- [A Complete Guide to calc() in CSS](https://css-tricks.com/a-complete-guide-to-calc-in-css/) (CSS-Tricks)
