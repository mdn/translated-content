---
title: contain-intrinsic-size
slug: Web/CSS/Reference/Properties/contain-intrinsic-size
original_slug: Web/CSS/contain-intrinsic-size
l10n:
  sourceCommit: 9aff58ba641ce676db1ae5a1955ed6ef81cbc718
---

**`contain-intrinsic-size`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)で、要素が[サイズ拘束](/ja/docs/Web/CSS/Guides/Containment/Using#サイズ拘束)の対象である場合に、ブラウザーがレイアウトに使用する要素のサイズを設定します。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`contain-intrinsic-width`](/ja/docs/Web/CSS/Reference/Properties/contain-intrinsic-width)
- [`contain-intrinsic-height`](/ja/docs/Web/CSS/Reference/Properties/contain-intrinsic-height)

## 構文

```css
/* キーワード値 */
contain-intrinsic-size: none;

/* <length> 値 */
contain-intrinsic-size: 1000px;
contain-intrinsic-size: 10rem;

/* 幅 | 高さ */
contain-intrinsic-size: 1000px 1.5em;

/* auto <length> */
contain-intrinsic-size: auto 300px;
contain-intrinsic-size: auto none;

/* auto 幅 | auto 高さ */
contain-intrinsic-size: auto 300px auto 4rem;

/* グローバル値 */
contain-intrinsic-size: inherit;
contain-intrinsic-size: initial;
contain-intrinsic-size: revert;
contain-intrinsic-size: revert-layer;
contain-intrinsic-size: unset;
```

### 値

`contain-intrinsic-size` プロパティには以下の値を指定することができます。

- `none`
  - : この要素には、指定された方向の内在サイズがない。
- `<length>`
  - : この要素には、指定された方向に {{cssxref("&lt;length&gt;")}} が指定されている。
- `auto [<length> | none]`
  - : 「通常レンダリングされる」要素サイズが存在し、その要素がそのコンテンツをスキップする場合（例えば、それがオフスクリーンである場合）、記憶された値です。
    キーワード `none` は、`<length>` の代わりに使用することができます。`0px` で修正された長さが `none` と異なる動作をする場合（段組みやグリッドレイアウトなど）に使用します。

キーワード、長さ、または `auto [<length> | none]` のペアで指定された場合、その値は幅と高さの両方に適用されます。

長さの値を 2 つ指定することができ、幅と高さの順に適用されます。
`auto [<length> | none]` のペアを 2 つ指定した場合は、最初のペアが幅に適用され、2 つ目が高さに適用されます。

## 解説

このプロパティは、[`contain: size`](/ja/docs/Web/CSS/Reference/Properties/contain) や [`content-visibility`](/ja/docs/Web/CSS/Reference/Properties/content-visibility) のような、サイズ格納を発生させる要素の横に並んだプロパティとして一般的に適用されます。

サイズ拘束は、ユーザーエージェントが要素をあたかも固定されたサイズを持っているかのようにレイアウトできるようにし、実際のサイズを決定するために子要素の再描画を避けることによって不必要なリフローを防ぎます（それによって使い勝手を向上させます）。
既定では、サイズ拘束は要素をコンテンツがないものとして扱い、コンテンツに幅や高さがない場合と同様にレイアウトを折りたたむ可能性があります。
`contain-intrinsic-size` プロパティを使用すると、レイアウトに使用するサイズとして適切な値を指定することができます。

`auto <length>` 値では、要素が（子要素とともに）「通常レンダリングされる」場合の要素のサイズを指定することができ、要素がコンテンツをスキップするときに代わりに指定した長さを使用できるようにします。
これにより、[`content-visibility: auto`](/ja/docs/Web/CSS/Reference/Properties/content-visibility) を持つオフスクリーン要素は、開発者が要素のサイズを正確に推定することなく、サイズ拘束の恩恵を受けることができます。
子要素がレンダリングされる場合、記憶された値は使用されません（サイズの格納が有効な場合、`<length>`は使用されません）。

グリッドレイアウトや段組みレイアウトでは、明示的にサイズを指定すると、暗黙的なコンテンツベースの高さとは異なる扱いを受けます。
要素は、単にその高さまでコンテンツで満たされた場合とは大幅に異なるレイアウトになるかもしれません。
`auto none` 値を指定すると、記憶された値がない場合に要素を `contain-intrinsic-size: none` にフォールバックし、コンテンツがないかのようにレイアウトすることができます。グリッドレイアウトや段組みレイアウトでは、コンテナーそのものが親要素からはみ出す可能性があり、予期しないページレイアウトになる可能性があるため、内在サイズとして 0px を設定するよりも常に推奨されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 内在サイズに auto 値のペアを使用

この例では、正確な内在サイズと誤った内在サイズの両方の推定値を持つ要素が縦方向に多数表示されるレイアウトを使用して、`contain-intrinsic-size: auto <length>` と `contain-intrinsic-size: auto none` を示します。
`content-visibility: auto` を使用することは、要素が画面外にあるときにレンダリングをスキップするので、このプロパティは `contain-intrinsic-size` と組み合わせてレンダリングパフォーマンスを改善し、[再フロー](/ja/docs/Glossary/Reflow)を最小化するのに適した方法です。

`contain-intrinsic-size: auto 500px` の値のペアは、要素が画面外にあり、ページがレイアウトされているときに、500px を要素の「プレースホルダー」サイズ（幅と高さ）として使用するようにブラウザーに指示します。
ユーザーが要素までスクロールして表示される必要があるとき、ブラウザーは要素とそのコンテンツの実際のサイズを計算します。
プレースホルダーと計算されたサイズの間に差がある場合、サイドバーの位置の変更を伴う新しいレイアウトが強制される可能性があります。

ブラウザーが要素の実際のサイズ情報を保有しますと、要素が再び画面外にスクロールしたときにこのサイズを記憶し、プレースホルダーの値の代わりに記憶されたサイズをレイアウト計算に使用します。
好ましいことは、ブラウザーがそのサイズを計算するために要素のコンテンツを繰り返しレンダリングする必要がないことであり、コンテンツが複雑であったり、ネットワークリソースや JavaScript に依存していない場合に特に有用です。

#### HTML

```html
<div id="container">
  <div id="auto-length-note">
    <p>
      Your browser does not support
      <code>contain-intrinsic-size: auto &lt;length&gt;</code>.
    </p>
  </div>
  <div class="auto-length">
    <p>Item one</p>
  </div>
  <div class="auto-length">
    <p>Item two</p>
  </div>
  <div class="auto-length large-intrinsic-size">
    <p class="small">Item three</p>
  </div>
  <div class="auto-length large-intrinsic-size">
    <p class="small">Item four</p>
  </div>
  <div id="auto-none-note">
    <p>
      Your browser does not support
      <code>contain-intrinsic-size: auto none</code>.
    </p>
  </div>
  <div class="auto-length none">
    <p>Item five</p>
  </div>
  <div class="auto-length none">
    <p>Item six</p>
  </div>
</div>
```

#### CSS

```css hidden
div,
p {
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-family: sans-serif;
}

code {
  background-color: lightgray;
  padding: 0.25rem;
  border-radius: 0.25rem;
}

#container {
  width: 90%;
  height: 80%;
}

.auto-length,
.auto-length.none {
  display: none;
}

#auto-length-note,
#auto-none-note {
  display: block;
  padding: 0;
}

#auto-length-note p,
#auto-none-note p {
  padding: 0.5rem;
  width: 100%;
  height: max-content;
  font-size: 1rem;
  line-height: 1.5rem;
  background-color: tomato;
}

@supports (contain-intrinsic-size: auto none) {
  .auto-length.none {
    display: block;
  }
  #auto-none-note {
    display: none;
  }
}
@supports (contain-intrinsic-size: auto 500px) {
  .auto-length {
    display: block;
  }
  #auto-length-note {
    display: none;
  }
}
```

```css
p {
  height: 500px;
  width: 500px;
  border: 4px dotted;
  background: lightblue;
}

.auto-length {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
  background-color: linen;
  outline: 4px dotted blue;
}

.large-intrinsic-size {
  /* Setting an inaccurate intrinsic size for the element */
  contain-intrinsic-size: auto 5000px;
  background-color: lightgray;
  outline: 4px dotted red;
}

.small {
  /* This element is a lot smaller than expected */
  height: 100px;
  width: 100px;
}

.none {
  background-color: papayawhip;
  contain-intrinsic-size: auto none;
  outline: 4px dotted red;
}
```

#### 結果

- 最初の 2 つのボックスは、実際のサイズに一致する内在サイズを持っているため、それらが表示されると、レイアウトは再計算されますが、スクロールバーやスクロール位置は変化しません。

- 3 つ目と 4 つ目のボックスは内在サイズが大きいので、ブラウザーが計算した初期レイアウトは大きすぎます。これらのボックスを小さくすることで、大幅なレイアウト変更を余儀なくされる点に達したときに一目でわかるようにしました。

  3 つ目と 4 つ目のボックスがスクロールして表示されると、サイズが再計算され、ボックスとその親の高さがいくつか低くなります。
  効果としては、スクローラーがページの下にジャンプし（実質的に推定よりもボックス内をスクロールしたことになります）、ページ全体の高さが推定よりも低くなるため、スクローラーが長くなります。

- 最後のボックスは `auto none` を持っているため、推定サイズはゼロです。
  スクロールして表示されるとき、要素とその親のサイズはより大きく再計算されるので、スクローラーはサイズが小さくなり、バーの上に移動されます。

`content-visibility: auto` を使用すると、次に表示する時刻のために要素の実際のレンダリングサイズが保存されるため、下までスクロールした後、その後スムーズに上下にスクロールすることができます。

{{EmbedLiveSample('Using_auto_value_pairs_for_intrinsic_size', 800, 400)}}

### 内在サイズの設定

この例では、要素の `contain-intrinsic-size`、`content-visibility`、`contain` を変更し、さまざまな設定の効果を監視するために使用することができる選択リストを提供します。

#### CSS

```css
#contained_element {
  border: 2px solid green;
  width: 120px;
}
.child_element {
  border: 1px solid red;
  background: blue;
  height: 50px;
  width: 150px;
}
```

#### JavaScript

下記のコードでは、選択されたオプションに基づいて、格納する要素にスタイルを追加したり、スタイルを除去したりしています。

```js
const containedElement = document.querySelector("#contained_element");
const intrinsicSizeSelector = document.querySelector(
  "#contain_intrinsic_size_selector",
);
const containSelector = document.querySelector("#contain_selector");
const contentVisibilitySelector = document.querySelector(
  "#content_visibility_selector",
);

containedElement.style["contain-intrinsic-size"] =
  intrinsicSizeSelector.options[intrinsicSizeSelector.selectedIndex].text;
containedElement.style["contain"] =
  containSelector.options[containSelector.selectedIndex].text;
containedElement.style["content-visibility"] =
  contentVisibilitySelector.options[
    contentVisibilitySelector.selectedIndex
  ].text;

intrinsicSizeSelector.addEventListener("change", () => {
  containedElement.style["contain-intrinsic-size"] =
    intrinsicSizeSelector.options[intrinsicSizeSelector.selectedIndex].text;
});

containSelector.addEventListener("change", () => {
  containedElement.style["contain"] =
    containSelector.options[containSelector.selectedIndex].text;
});

contentVisibilitySelector.addEventListener("change", () => {
  containedElement.style["content-visibility"] =
    contentVisibilitySelector.options[
      contentVisibilitySelector.selectedIndex
    ].text;
});
```

#### HTML

HTML は 2 つのボタン、`content-visibility` プロパティによって拘束されるコンテナー要素を定義しています。

```html
<p>
  <label for="contain_intrinsic_size_selector">contain-intrinsic-size:</label>
  <select id="contain_intrinsic_size_selector">
    <option>none</option>
    <option>40px 130px</option>
    <option>auto 40px auto 130px</option></select
  >;<br />

  <label for="contain_selector">contain:</label>
  <select id="contain_selector">
    <option>none</option>
    <option>size</option>
    <option>strict</option></select
  >;<br />

  <label for="content_visibility_selector">content-visibility:</label>
  <select id="content_visibility_selector">
    <option>visible</option>
    <option>auto</option>
    <option>hidden</option></select
  >;
</p>

<div id="contained_element">
  <div class="child_element"></div>
</div>
```

#### 結果

セレクターを使用して、指定されたスタイルを `div` 要素に格納します。
`content-visibility` が `visible` または `auto` の場合、`contain-intrinsic-size` を変更しても何も変わらないことに注意してください。
しかし、コンテンツが非表示の場合、`contain-intrinsic-size` を `none` にすると、子要素にサイズがないかのように親要素を折りたたみます。

{{EmbedLiveSample('Setting the intrinsic size', '100%', 170)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
- [CSS コンテナーの使用](/ja/docs/Web/CSS/Guides/Containment/Using)
- [CSS コンテナー](/ja/docs/Web/CSS/Guides/Containment)モジュール
- [`content-visibility`: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) (web.dev, 2020)
