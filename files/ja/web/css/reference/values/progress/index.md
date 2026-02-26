---
title: progress()
slug: Web/CSS/Reference/Values/progress
l10n:
  sourceCommit: ee03b8deb5423c80e1cb8f6930a6f52e3f49e678
---

{{CSSRef}}

**`progress()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、2 つの値（進行の開始値と終了値）に対する 1 つの値（進行値）の位置を表す {{cssxref("&lt;number>")}} 値を返します。

## 構文

```css-nolint
/* 固定の進捗値 */
progress(300, 0, 1000)
progress(50px, 0px, 100px)
progress(50%, 30%, 80%)

/* カスタムプロパティを使用 */
progress(var(--container-width), 320, 1200)

/* 関数の中で */
calc((progress(var(--container-width), 20%, 80%) / 2) + 0.5)

/* 非数学関数の中で */
rgb(
  calc(255 * progress(var(--container-width), 320px, 1200px))
  calc(255 * progress(var(--container-width), 320px, 1200px)) 255 / 0.5
);

/* progress() 関数内の数学関数 */
progress(calc(20 + 30), 0, 100)
```

### 引数

`progress()` 関数は、引数として 3 つの {{cssxref("&lt;calc-sum>")}} 式をカンマ区切りで取ります。

```plain
progress(<calc-sum>, <calc-sum>, <calc-sum>)
```

それぞれ、これらは次のようになります。

- 進捗値
  - : 他の 2 つの値に対する相対的な位置が計算されます。
- 進捗開始値
  - : 進捗の下限です。
- 進捗終了値
  - : 進捗の上限です。

### 返値

{{cssxref("&lt;number>")}} で、進捗値が他の 2 つの値に対して相対する位置を表します。この値は以下の方法で計算されます。

```plain
(進捗地 - 進捗開始値) / (進捗終了値 - 進捗開始値)
```

進捗値が開始値と終了値の間にある場合、返値は `0` から `1` の間になり、割合を表します。進捗値が開始値より小さい場合、または終了値より大きい場合でも、関数は有効ですが、返値はそれぞれ `0` または `1` にクランプされます。

## 解説

CSS の `progress()` 関数は進捗率を計算する方法を提供します。これは、進捗バーのアニメーションや、幅が広がるにつれてフェードインしてコンテンツを表示するボックスなどを作成するのに有益です。

最も単純な使用方法は、このようになります。

```css
opacity: progress(5, 0, 10);
```

この場合、{{cssxref("opacity")}} の計算値は `0.5` になります。5 は `0` と `10` の中点だからです。

### 許可されている単位の型

`progress()` 関数の引数は、数式または単純な値である可能性があります。値（または式の結果）は、任意の {{cssxref("&lt;number>")}}、{{cssxref("&lt;dimension>")}}、{{cssxref("&lt;percentage>")}} のいずれかの値を取ることができます。異なる単位を持つことは可能ですが、すべて同じ型でなければならず、そうでないと関数は無効になります。

前の例は有効です。そのすべての引数は単位のない `<number>` 値だからです。

```css example-good
progress(5, 0, 10)
```

次の例も、また有効です。すべての引数が {{cssxref("&lt;length>")}} 単位を持っているからです。内部的には、計算には計算値が使用されます。指定された {{cssxref("font-size")}} が計算時点で `16px` である場合、`3em` は `48px` に解決され、これは `0px` と `100px` の間で `48%` の位置に相当するため、返値は `0.48` となります。

```css example-good
progress(3em, 0px, 100px)
```

ただし、この節の最後の 2 つの例は有効ではありません。型が一致しないため、結果として得られる計算は意味を成しません。

```css example-bad
progress(3s, 0px, 100px)
progress(3em, 0, 100)
```

### 単位なしの値の生成

`progress()` 関数は単位のない値を出力するため、[`tan(atan2())` ハック](https://dev.to/janeori/css-type-casting-to-numeric-tanatan2-scalars-582j)と同様の方法で値から単位を除去する目的で使用できます。ただし、[CSS 型付き演算](/ja/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic)に関する動作の変更により、単純な除算でもこの方法が可能であることに注意してください。

### `progress()` と他の関数やカスタムプロパティの組み合わせ

`progress()` は常に `0` から `1` の間の単位なしの値を返すため、{{cssxref("calc()")}} などの別の数学関数と組み合わせて、必要な値と単位を返すのが一般的です。[CSS カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*)を `progress()` 関数内で使用することもできます。これは意味があります。なぜなら、同じ値を複数の場所で設定する、または JavaScript 経由で設定された独自のプロパティに基づいて値を設定するといった場合が多くあるからです。

次の例では、ビューポートの幅が最小幅 `320px` から最大幅 `1200px` の間の割合を計算します。`calc()` 関数を使用して、`progress()` の返値に `600px` を乗算し、`320px` から `1200px` の間のビューポート幅の進行度値の半分となるピクセル値に変換されます。

```css
width: calc(progress(100vw, 320px, 1200px) * 600px);
```

例えば、ビューポートの幅が `700px` の場合、進捗率の値は `((700 - 320) / (1200 - 320))` = `0.431818` と計算されます。幅は `0.431818 * 600px` = `259.1px` と計算されます。

次の例は前回の例を更新したもので、進捗値、進捗開始値、進捗終了値にカスタムプロパティが使用されています。

```css
width: calc(
  progress(
      var(--container-width),
      var(--custom-min-width),
      var(--custom-max-width)
    ) *
    var(--custom-max-width)
);
```

`progress()` 関数を使用することで、他の関数内の個々の値や、一括指定プロパティ内のコンポーネント値が計算されます。ただし、それらの値に対して関数が有効な型を返すという指定された条件があります。

これにより複雑な式が生成される可能性があります。例えば、ここでは [`rgb()`](/ja/docs/Web/CSS/Reference/Values/color_value/rgb) カラーの最初の 2 チャンネルが、前述と同じ幅の比率で比例計算されます。

```css
background-color: rgb(
  calc(
      255 *
        progress(
          var(--container-width),
          var(--custom-min-width),
          var(--custom-max-width)
        )
    )
    calc(
      255 *
        progress(
          var(--container-width),
          var(--custom-min-width),
          var(--custom-max-width)
        )
    )
    255 / 0.5
);
```

## 形式文法

{{CSSSyntax}}

## 例

### 基本的な `progress()` の使用

この例では、`progress()` 関数の基本的な使用法として、プログレスバーの `width` を、親要素の `width` が `min-width` から `max-width` の間で占める進捗率に等しい比率として設定する例を示します。

#### HTML

この HTML では、コンテンツを表す {{htmlelement("section")}} 要素と、幅の進捗バーを表す {{htmlelement("div")}} 要素を使用しています。

```html live-sample___basic
<section>
  <div class="progress"></div>
</section>
```

#### CSS

CSS ではまず、`<section>` 要素に `min-width`、`max-width`、`width` を表すカスタムプロパティを定義します。次にこれらのプロパティを適切な値に設定し、`<section>` 要素に単一の {{cssxref("background-color")}} を指定して可視化します。

```css hidden live-sample___basic
html {
  height: 100%;
  font-family: sans-serif;
}

body,
section {
  height: inherit;
}
```

```css live-sample___basic
section {
  --custom-min-width: 300px;
  --custom-max-width: 700px;
  --custom-width: 600px;

  min-width: var(--custom-min-width);
  max-width: var(--custom-max-width);
  width: var(--custom-width);

  background-color: cyan;
}
```

次に `<div>` 要素について説明します。まず `height` と暗い `background-color` を設定し、 `<section>` 要素に対して目立つようにします。次に `width` を計算します。`progress()` 関数で最小幅と最大幅の間の進捗率が計算され、`calc()` 関数で `progress()` の返値に `100%` を乗算してパーセント値を返します。

```css live-sample___basic
.progress {
  height: 4px;
  background-color: red;

  width: calc(
    progress(
        var(--custom-width),
        var(--custom-min-width),
        var(--custom-max-width)
      ) *
      100%
  );
}
```

#### 結果

このデモは次のように表示されます。

{{EmbedLiveSample("basic", "100%", "150")}}

`<div>` の幅は `<section>` の幅の `75%` です。これは `min-width` が` 400px`、`max-width` が `700px`、`width` が `600px` であり、これが前の 2 つの値の間隔の`75%`に相当するためです。

### 角の効果のリサイズ

この例では、`progress()`関数のより複雑な使用法を示し、ブラウザーウィンドウのサイズ変更時に楽しい効果を生み出しています。

この例は、デスクトップブラウザーのタブでフルサイズで表示すると、はるかに効果的です。そのため、本ページでは埋め込みライブサンプルとして表示していません。代わりに、[CSS `progress()`関数デモ](https://mdn.github.io/dom-examples/css-progress/) で動作を確認できます（[ソースコード](https://github.com/mdn/dom-examples/tree/main/css-progress)も参照）。

ライブサンプルを別タブで開き、ブラウザーウィンドウの幅を広くしたり狭くしたりして効果を確認してください。以下の説明を読みながら参照できるよう、このタブは開いたままにしておいてください。

#### HTML

この HTML には、残りのコンテンツを含む {{htmlelement("article")}} 要素と、2 つの {{htmlelement("section")}} 要素が含まれています。その一方は背景画像を配置するため、もう一方はコンテンツを格納するためです。`<section class="content">` 内には、幅の進捗バーを表す `<div class="progress">` も同時に含まれており、これは前回のデモと同じものです。簡潔さを考慮し、指定されたコンテンツの残りは除外しています。

```html
<article>
  <section class="background"></section>
  <section class="content">
    <div class="progress"></div>
    <!-- Content here -->
  </section>
</article>
```

#### JavaScript

スクリプトではまず、`<article>` 要素を参照します。次に `setContainerWidth()` という関数を定義します。この関数は `<article>` のクライアント幅を {{domxref("Element.getBoundingClientRect()")}} で取得し、`--container-width` という独自のプロパティを設定します。この値はクライアント幅の小数点以下を切り捨てた値に `px` を付加したものです。

次に、{{domxref("Window.resize_event", "resize")}} イベントリスナーを `Window` オブジェクトに設定します。これにより、ブラウザーウィンドウのサイズ変更時に `setContainerWidth()` が実行されます。同時に、ページ読み込み時に `<article>` 要素の `--container-width` カスタムプロパティを設定するため、一度だけ実行します。

```js
const articleElem = document.querySelector("article");

function setContainerWidth() {
  const clientWidth = articleElem.getBoundingClientRect().width;
  articleElem.style.setProperty(
    "--container-width",
    `${Math.floor(clientWidth)}px`,
  );
}

window.addEventListener("resize", setContainerWidth);

setContainerWidth();
```

この設定をつければ、`--container-width` に基づいてプロパティが設定できるようになり、ウィンドウのサイズ変更に伴いデザインの一部が動的に変化します。

#### CSS

以下の節では、このデモで `progress()` 関数を使用した方法に関連する CSS についてのみ説明します。完全な CSS については、[CSS ソース](https://github.com/mdn/dom-examples/blob/main/css-progress/index.css)を参照してください。

まず、`<article>` を `<body>` 内の中央に配置するために[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)を使用します。次に、後で使用する `min-width` と `max-width` の値を表すカスタムプロパティを設定します。その後、`<article>` 要素を対象に、先に設定したカスタムプロパティと同じ値の {{cssxref("min-width")}} と {{cssxref("max-width")}} を指定します。その {{cssxref("position")}} を `relative` に設定してコンテンツを相対配置できるようにし、パーセント値指定の {{cssxref("width")}}、固定された {{cssxref("height")}}、および {{cssxref("border")}} を設定します。

```css
body {
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  --custom-min-width: 320px;
  --custom-max-width: 1200px;
}

article {
  min-width: var(--custom-min-width);
  max-width: var(--custom-max-width);
  position: relative;
  width: 70%;
  height: 600px;
  border: 3px solid black;
}
```

それでは、`progress` の `<div>` について見ていきましょう。その `width` は、`<article>` 要素に JavaScript で設定されたカスタムプロパティ `--container-width` の進捗率に基づき、`min-width` と `max-width` の間の割合に設定します（ここで使用するカスタムプロパティは、`<article>` の `min-width` と `max-width` と同様に、2 つ目と 3 つ目 `progress()` 引数にも適用されます）。

同時に、`height` と {{cssxref("background-color")}} を設定し、`<article>` の左上角に絶対位置指定します。

```css
.progress {
  width: calc(
    progress(
        var(--container-width),
        var(--custom-min-width),
        var(--custom-max-width)
      ) *
      100%
  );
  height: 4px;
  background-color: red;
  position: absolute;
  top: 0;
  left: 0;
}
```

次に、`background` の `<section>` を見ていきます。これを `<article>` に対して絶対位置指定し、{{cssxref("inset", "inset: 0")}} を設定して同じサイズになり、その上に重なるようにします。次に、かなり広い {{cssxref("background-image")}} を設定し、 {{cssxref("background-position-x")}} プロパティに、進捗バーの `width` プロパティと同じ値を指定して背景画像を位置指定します。これにより、ブラウザーウィンドウの幅を広げると背景画像が左側に移動し、美しい画像スクロール効果が生まれます。

```css
.background {
  position: absolute;
  inset: 0;
  background-image: url("https://mdn.github.io/shared-assets/images/examples/wide-background.jpg");
  background-position-x: calc(
    progress(
        var(--container-width),
        var(--custom-min-width),
        var(--custom-max-width)
      ) *
      100%
  );
}
```

`content` の `<section>` を絶対位置指定し、`background` の `<section>` の上に配置します。その後、{{cssxref("padding")}} を適用します。次に、ブラウザーウィンドウのサイズ変更に伴い、以前と同じ進行比率を用いて2つのプロパティ値を変更します：

- `background-color` の R 成分と G 成分を変化させ、進捗率をそれぞれの 255 倍して比例したチャンネル値を取得します。ウィンドウが広くなるにつれ、背景色は青みが減り白みが強くなり、シーンが夜から昼へと移り変わるように見えます（色値の不透明度は `0.5` であるため、下地の画像に対する色調補正のように作用します）。
- ウィンドウがより広くなったときにコンテンツが少しフェードインするように、{{cssxref("opacity")}} を変化させます。

```css
.content {
  position: absolute;
  inset: 0;
  padding: 20px;
  background-color: rgb(
    calc(
        255 *
          progress(
            var(--container-width),
            var(--custom-min-width),
            var(--custom-max-width)
          )
      )
      calc(
        255 *
          progress(
            var(--container-width),
            var(--custom-min-width),
            var(--custom-max-width)
          )
      )
      255 / 0.5
  );
  opacity: calc(
    (
        progress(
            var(--container-width),
            var(--custom-min-width),
            var(--custom-max-width)
          ) /
          2
      ) +
      0.5
  );
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 値と単位モジュール](/ja/docs/Web/CSS/Guides/Values_and_units)
- [コンテナースタイルクエリー](/ja/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#コンテナースタイルクエリー)
- [メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- [機能クエリー](/ja/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
