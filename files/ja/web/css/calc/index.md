---
title: calc()
slug: Web/CSS/calc
tags:
  - CSS
  - CSS 関数
  - 計算
  - 演算
  - 関数
  - レイアウト
  - リファレンス
  - ウェブ
  - calc
translation_of: Web/CSS/calc()
original_slug: Web/CSS/calc()
browser-compat: css.types.calc
---
{{CSSRef}}

**`calc()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、 CSS のプロパティ値を指定する際に計算を行うことができるものです。 {{cssxref("&lt;length&gt;")}}、{{cssxref("&lt;frequency&gt;")}}、{{cssxref("&lt;angle&gt;")}}、{{cssxref("&lt;time&gt;")}}、{{cssxref("&lt;percentage&gt;")}}、{{cssxref("&lt;number&gt;")}}、{{cssxref("&lt;integer&gt;")}} が利用できる場所ならば使用できます。</p>

{{EmbedInteractiveExample("pages/css/function-calc.html")}}

## 構文

```css
/* プロパティ: calc(式) */
width: calc(100% - 80px);
```

`calc()` 関数は1つの式を引数として取り、式の結果が値として使用されます。式は以下の演算子を組み合わせたもので、標準的な[演算子の優先順位の規則](/ja/docs/Learn/JavaScript/First_steps/Math#operator_precedence")を使用します。

- `+`
  - : 加算です。
- `-`
  - : 減算です。
- `*`
  - : 乗算です。引数の少なくとも 1 つは {{cssxref("&lt;number&gt;")}} でなければなりません。
- `/`
  - : 除算です。右側は {{cssxref("&lt;number&gt;")}} でなければなりません。

式のオペランドは任意の {{cssxref("&lt;length&gt;")}} 構文の値にすることができます。式の中のそれぞれの値に異なる単位を使用することもできます。必要に応じて、計算の順番を設定するために括弧を使用することもできます。

### メモ

- `+` 演算子と `-` 演算子は**前後に{{Glossary("whitespace", "ホワイトスペース")}}を置く必要があります**。たとえば、 `calc(50% -8px)` と記述した場合、パーセント表記と負の長さが連続しているものとみなされ、無効な式となるからです。 `calc(50% - 8px)` はパーセント表記、減算記号、長さの順に並んでいるものと解釈されます。また、 `calc(8px + -50%)` は長さ、加算記号、負のパーセント表記の順に並んでいるものと解釈されます。
- `*` 演算子と `/` 演算子には前後のホワイトスペースは必要ありませんが、こちらにもホワイトスペースを用いて記述ルールに一貫性を持たせておくことは認められており、推奨されています。
- ゼロで除算を行うと、 HTML パーサーで生成されるエラーになります。
- 自動レイアウトおよび固定レイアウトのテーブルで列・列グループ・行・行グループ・セルの幅や高さに対してパーセンテージを含む数式を指定すると、 `auto` が指定されたものとして扱います。
- `calc()` 関数は入れ子にすることができ、内側のものは単なる括弧として扱われます。

### 形式文法

{{csssyntax}}

## アクセシビリティの考慮

`calc()` を使用してテキストの大きさを制御する場合は、一方の値が[相対的な長さの単位](/ja/docs/Web/CSS/length#relative_length_units)になることを確認してください。

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

これによって、ページが拡大縮小されたときにテキストの大きさが変化します。

- [MDN WCAG のを理解する 1.4 の解説](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## 整数での使用

**`calc()`** は {{cssxref("&lt;integer&gt;")}} が求められる場面で使用することができ、その値は次のように、最も近い整数に丸められます。

```css
.modal {
  z-index: calc(3 / 2);
}
```

これによって最終的に `.modal` は `z-index` の値は 2 になります。

**Note:** Chrome ブラウザーでは現在のところ、整数が求められる場面で **`calc()`** から返される一部の値を受け付けません。例えば、結果が整数になる場合であっても割り算は受け付けません。すなわち、 `z-index: calc(4 / 2);` は受け付けられません。

## 例

<h3 id="Positioning_an_object_on_screen_with_a_margin">余白をつけてオブジェクトを画面に配置する</h3>

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

<h3 id="Automatically_sizing_form_fields_to_fit_their_container">フォームフィールドの大きさを自動的に隅に合うように調整</h3>

`calc()` はフォーム要素のサイズ変更にも利用できます。適切なマージンを維持しながら、コンテナの縁を突き破らないように、利用できるスペースいっぱいに広げます。

いくらかの CSS を見てみましょう。

```css
input {
  padding: 2px;
  display: block;
  width: calc(100% - 1em);
}

#formbox {
  width: calc(100% / 6);
  border: 1px solid black;
  padding: 4px;
}
```

ここで、フォームはウィンドウの取り得る幅の 1/6 を使うように指定しています。それから、入力項目が必ず妥当なサイズを持つように再度 `calc()` を使い、コンテナーの幅 - 1em の幅になるように指定します。次の HTML でこの CSS を使います。</p>

```html
<form>
  <div id="formbox">
  <label>何か入力:</label>
  <input type="text">
  </div>
</form>
```

{{EmbedLiveSample('Automatically_sizing_form_fields_to_fit_their_container', '700', '80')}}

### 入れ子の `calc()` と CSS 変数

`calc()` で [CSS 変数](/ja/docs/Web/CSS/CSS_Variables) を使用することもできます。以下のコードを見てみてください。</p>

```css
.foo {
  --widthA: 100px;
  --widthB: calc(var(--widthA) / 2);
  --widthC: calc(var(--widthB) / 2);
  width: var(--widthC);
}
```

すべての変数が展開された後、 `widthC` の値は `calc( calc( 100px / 2) / 2)` になります。この値が .foo の width プロパティに割り当てられたとき、内部にあるすべての `calc()` は (入れ子の深さにかかわらず) 単なる括弧になり、`width` プロパティの値は最終的に `calc( ( 100px / 2) / 2)`、すなわち `25px` になります。要するに、`calc()` の内部にある `calc()` は単なる括弧と同等です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Firefox 4: CSS3 calc() ✩ Mozilla Hacks – the Web developer blog](https://hacks.mozilla.org/2010/06/css3-calc/)
