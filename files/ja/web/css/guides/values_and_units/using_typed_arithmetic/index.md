---
title: CSS 型付き演算の使用
short-title: 型付き演算の使用
slug: Web/CSS/Guides/Values_and_units/Using_typed_arithmetic
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**CSS 型付き演算**は、{{cssxref("calc()")}} などの関数を通じて型付き CSS 値で実行が許可される計算を指し、特に [CSS 値と単位](/ja/docs/Web/CSS/Guides/Values_and_units)モジュールで仕様上定義される動作を指します。CSS 型付き算術では、同一データ型の異なる単位を持つ値で、ある単位を付けた値を割ることができるようになるため、単位のない商が得られます。

これらの商は、単位なしプロパティの値に {{cssxref("number")}} として使用できるほか、数値型値（{{cssxref("length")}}、{{cssxref("percentage")}}、{{cssxref("angle")}} など）と乗算することで任意の数値データ型に変換することができます。

この型付き演算の動作により、ページ上の異なる値間の比率を生成することができます。この記事では型付き演算について探求し、それを使用する複数の例を紹介します。

> [!NOTE]
> もともと、[CSS の値と単位](/ja/docs/Web/CSS/Guides/Values_and_units)モジュールでは、構文解析時にゼロ除算を検出可能にし、単位の二乗などの課題を避けるため、乗算および除算演算子が受け取れる引数を制限していました。型付き演算は、[対応しているウェブブラウザー](/ja/docs/Web/CSS/Reference/Values/calc#ブラウザーの互換性)において、これらの制限の一部を緩和します。

## CSS 型付き演算のルール

CSS の数値を計算する際、異なるデータ型との互換性に関するいくつかのルールがあります。

### 加算と減算

値の加算または減算を行う場合、すべての値は同じデータ型でなければなりません。以下の例はいずれも有効な結果を生成します。

```css example-good
/* <length-percentage> 単位 */
calc(250px - 150px)
calc(100% - 50px)
calc(50vw + 2rem)
calc(25cqw + 3in)

/* <angle> 単位 */
calc(40deg + 2rad)
calc(420deg - 1turn)
```

ただし、次のものは無効です。このように型を混在させた計算結果は意味をなさないでしょう。

```css example-bad
calc(200px + 100ms)
calc(50% + 90deg)
```

## 乗算

CSS で値を乗算する場合、単位を持つことができる値は 1 つだけです。それ以外のすべての値は単位のない {{cssxref("number")}} 値である必要があります。これは、同じ単位でより大きいまたはより小さい量となる積を求めるためであり、CSS プロパティが受け入れることができない平方単位を作成したくないためです。

```css example-good
calc(200px * 4) /* 800px */
calc(60deg * 3) /* 180deg */
```

単位をつけた 2 つの値を乗算しようとする場合—は、たとえ同じ単位であっても—、通常の数学的規則によれば、単位も同様に掛け合わせるべきです。例えば、

```css example-bad
calc(200px * 4px)
```

この場合、関数は <code>800px<sup>2</sup></code> と CSS では意味のない無効な値になります。

## 除算

CSS で値を除算する場合、単位をつけた値を単位なし値で割ることが可能です。

```css example-good
calc(1000px / 2) /* 500px */
calc(360deg / 4) /* 90deg */
```

ただし、単位のない値を単位をつけた値で割ることはできません。それは意味をなさないからです。

```css example-bad
calc(1000 / 2px) /* ?!? */
```

数値データ型の値を同じ型の値で割ると、単位が取り消され、単位のない値が残ります。内部では、2 つの値が計算された後で互いに除算されます。

その結果、同じ計算でも、それが使用されるコンテキストや除数の単位によって、極めて異なる結果になることがあります。

次の例を見てみましょう。

```css
calc(100vw / 1px)
```

`100vw` はビューポートの幅の `100%` に相当します。ビューポートの幅が現在 `1000px` の場合、計算結果は単位なしの値 `1000` を返します。しかし、ビューポートの幅が `500px` の場合、計算結果は単位なしの値 `500` を返します。

`1px` の除数を `1em` に置き換えると、極めて異なる結果になります。

```css
calc(100vw / 1em)
```

ビューポートの幅が `1000px` で、`1em` が計算時点でブラウザーのデフォルトである `16px` に等しい場合、先の計算は `1000px / 16px` = `62.5` を返します。

以前は、たとえ 2 つの値の単位が同じ型であっても、ある型付き値を別の値で割ることはできませんでした。しかし、仕様が更新され、これが許可されるようになりました。[ブラウザーの互換性](/ja/docs/Web/CSS/Reference/Values/calc#ブラウザーの互換性)を確認してください。

## なぜ挙動の修正が有益なのか

ある型付け値を同じ型の別の値で割れることは、まず大したことのように思えないことがありますが、異なる値間の有用な関連付けをすることができるため、レスポンシブな UI 機能の作成に使用できます。

これについて重要なのは、このような除算を通じて値を単位なしで値を表すことができるという点です。

```css
--viewport-width-in-pixels: calc(100vw / 1px);
```

結果は {{cssxref("number")}} であり、ビューポートの幅をピクセル数で表す単位のない値です。これは数値が有効な場所なら、他の `calc()` 関数を含め、どこでも使用できます。この値に基づいて、他のプロパティ値がどのような単位であれ、動的に変更することができます。

例えば、単位なしの値は {{cssxref("opacity")}} に直接反映することができます。

```css
opacity: calc(var(--viewport-width-in-pixels) / 1000 - 0.5);
```

`1deg` のような値と乗算することで、{{cssxref("&lt;angle>")}} 値を生成することができます。

```css
rotate: calc(var(--viewport-width-in-pixels) * 1deg);
```

`1rem` などの値で乗算することで、{{cssxref("&lt;length>")}} 値を生成することができます。

```css
font-size: calc(var(--viewport-width-in-pixels) * 1rem / 200);
```

CSS 型付き演算がどのように使用できるかを示すために、いくつかの例を追ってみましょう。

## 基本的な例: レスポンシブな背景の透明度

[レスポンシブな背景の透明度](https://mdn.github.io/dom-examples/css-typed-arithmetic/responsive-background-opacity/)の例（[ソースコードを参照](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/responsive-background-opacity)）は、ビューポートの幅が変化するにつれて背景画像の不透明度を変化させる方法を示しています。画面が狭くなるにつれて背景画像がフェードアウトすることで、画像とテキストコンテンツが重なり始める際に、画像がテキストの可読性に影響を与える可能性が低くなります。したがって、背景画像が画面の幅に応じて変化する仕組みは、画像がテキストの可読性に影響を与える可能性を提言することができます。

### HTML

HTML は、{{htmlelement("div")}} 要素で囲まれた基本的なテキストコンテンツが含まれています。

```html
<div class="wrapper">
  <h1>Prose of the century</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
</div>
```

### CSS

まず、[CSS カスタムプロパティ](/ja/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)である `--width-percentage` を {{cssxref(":root")}} 要素に定義します。このプロパティには `100vw / 2000px` の計算結果が格納されています。この値はビューポートの幅を `2000px` に対するパーセント値として表し、後ほどアルファチャンネル値として使用します。ビューポートの幅が `2000px` の場合、計算結果は `1`（アルファ値 `100%` に相当）を返します。ビューポートの幅が `2000px` 未満の場合、より小さい値が得られます。

```css
:root {
  --width-percentage: calc((100vw / 2000px));
}
```

> [!NOTE]
> アルファ値が `1` を超える場合はすべて `1` として扱われるため、最大値の制限は必要ありません。

次に、固定長の {{cssxref("width")}} といくらかの {{cssxref("padding")}} をラッパーの`<div>`要素に設定し、{{cssxref("margin")}} を使用して水平方向に中央揃えします。

```css
.wrapper {
  width: 480px;
  padding: 20px;
  margin: 0 auto;
}
```

最後に、{{htmlelement("body")}} 要素に複数の背景を設定します。これらを逆順で指定します。

1. 最後の、したがって最も下にある {{cssxref("background")}} の値は、右上角付近に配置された繰り返しのない背景画像です。
2. 上の背景は、両方の色経由点を同じ色に設定して {{cssxref("linear-gradient()")}} 関数を使用して作成された、白の半透明オーバーレイです。色のアルファチャンネル値は、`1` から先に設定したカスタムプロパティ `--width-percentage` を引いた値として計算されます。ビューポートの幅が狭くなるにつれて、`--width-percentage` の値は取得し、その結果、白のグラデーションの不透明度が増して背景画像の不透明度が減少します。

```css
body {
  background:
    linear-gradient(
      rgb(255 255 255 / calc(1 - var(--width-percentage))),
      rgb(255 255 255 / calc(1 - var(--width-percentage)))
    ),
    url("https://mdn.github.io/shared-assets/images/examples/colorful-heart.png")
      no-repeat top 50px right 50px;
}
```

### 結果

結果を確認するには、[レスポンシブ背景不透明度のライブ例を表示](https://mdn.github.io/dom-examples/css-typed-arithmetic/responsive-background-opacity/)してみてください（[ソースを参照](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/responsive-background-opacity)）。ビューポートの幅を変更して、背景の透明度がどのように変化するか試してみてください。

## 1 つの値に基づいて異なる型の値を変化させる

[異なる型のバリエーション](https://mdn.github.io/dom-examples/css-typed-arithmetic/different-type-variations/)の例（[ソースコード参照](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/different-type-variations)）は、前回の例と非常に似た方法で動作します。ただし、この場合、異なるデータ型を持つ複数の値を定義する際に、単一の変数値を使用する方法を示しています。

特に、段落の背景色とフォントサイズを、ビューポートの幅に基づいて設定します。

### HTML

この例のマークアップには、テキストの段落が含まれています。

```html
<p>Hello there!</p>
```

### CSS

前回のデモと同様に、CSS はビューポートの幅を基にした単位なしの値から始めます。今回は `100vw` を `1px` で割り、生成された数値を `--viewport-in-pixels` というカスタムプロパティに格納するようにします。この値は単位なしで現在のビューポート幅をピクセル単位で表す数値となります。

```css
:root {
  --viewport-in-pixels: calc(100vw / 1px);
}
```

次に段落自体のスタイル設定に移ります。まず基本的なスタイル（{{cssxref("border")}} と、{{cssxref("text-align")}} を`center`に設定）を適用し、その後、先に作成した `--viewport-in-pixels` プロパティに基づいて 2 つの値を設定します。

1. 段落の {{cssxref("font-size")}} を、`--viewport-in-pixels` を `200` で割った値に設定し、数値の商を `em` 単位に変換するため `1em` を乗算します。
2. 段落の {{cssxref("background-color")}} を [`lch()`](/ja/docs/Web/CSS/Reference/Values/color_value/lch) のカラー値に設定します。明度と彩度の要素は定数値（それぞれ `75%` と `50%`）ですが、色相要素は `--viewport-in-pixels` を `10` で割った値に `100` を加えた値に設定します。その後、この結果に `1deg` を乗算し、値が {{cssxref("angle")}} になるようにします。
   > [!NOTE]
   > この最後の段階は厳密には必須ではありません。`lch()` は同時に単位なしの色相値も受け入れるからです。しかし、度単位の値の方が直感的に理解しやすい場合があり、また単位なしの値を別のデータ型に変換する別の例を表示させたかったのです。

```css
p {
  border: 5px solid black;
  text-align: center;
  font-size: calc(1em * (var(--viewport-in-pixels) / 200));
  background-color: lch(
    75% 50% calc((100 + (var(--viewport-in-pixels) / 10)) * 1deg)
  );
}
```

### 結果

結果を見るには、[異なる型のバリエーションの例をライブでご覧ください](https://mdn.github.io/dom-examples/css-typed-arithmetic/different-type-variations/) ([see source code](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/different-type-variations))。ビューポートの幅を変更して、段落のフォントサイズと背景色が両方ともどのように変化するかを確認してみてください。

## アニメーションするストーリーサークル

[アニメーションするストーリーサークル](https://mdn.github.io/dom-examples/css-typed-arithmetic/animated-story-circle/)の例（[ソースコード参照](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/animated-story-circle)）は、CSS の型付き演算ルールを活用して生成される、より複雑な効果を示しています。この場合、本文の異なる段落が中心点から放射状に広がる円形にレイアウトされます。さらに、ビューポートが狭くなると段落の円は扇形に閉じ、広げると再び開いた状態になります。

### HTML

HTML はかなり基本的な構成です。{{htmlelement("div")}} の中に複数の {{htmlelement("p")}} 要素が含まれています。最初の段落のテキストは、読み始める位置を指定されたインジケーターとして {{htmlelement("strong")}} 要素で囲まれています。

```html
<div class="story-circle">
  <p><strong>Hello there!</strong></p>
  <p>This is</p>
  <p>quite an</p>
  <p>interesting way</p>
  <p>to tell a</p>
  <p>story</p>
  <p>all around in</p>
  <p>a circle.</p>
  <p>What fun!</p>
</div>
```

### CSS

CSS の先頭で、{{cssxref(":root")}} 要素の {{cssxref("height")}} を `100%` に設定します。

```css
:root {
  height: 100%;
}
```

次に、{{htmlelement("body")}} 要素に対していくつかのプロパティを設定します。

- まず `height` を `inherit` に設定します。これは、`<body>` が `:root` 要素の `100%` の高さを継承するという意味です。これにより、`<body>` はビューポートの全高にまたがります。
- 次に、`<body>` を {{cssxref("margin")}} で水平方向に中央揃えし、{{cssxref("max-width")}} を設定します。後述するように、この上限値は扇形/円形の最大回転角度を制御する上で重要です。
- `<div>` に `class="story-circle"` を付けたものを `<body>` の中で水平・垂直方向に[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)を使用して中央ぞろえします。
- {{cssxref("container-type")}} プロパティを使用して、`<body>` をインラインの[サイズクエリーコンテナー](/ja/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#コンテナーサイズクエリー)として宣言します。これは重要な点です。なぜなら、前回の例のようにビューポートの幅ではなく、`<body>` の幅に基づいて図形の回転を変更したいからです。コンテナーサイズ クエリーとして設定することで、計算される際にそのサイズを参照することができるようになります。

```css
body {
  height: inherit;
  margin: 0 auto;
  max-width: 1600px;
  display: flex;
  align-items: center;
  justify-content: center;
  container-type: inline-size;
}
```

これで `story-circle` の `<div>` のスタイル設定を行います。その `width` と `height` を `1px` に設定します。これは参照点として機能し、子要素である段落が円形に配置されます（段落は `<body>` を基準に位置指定されるため、この `<div>` 自体に位置指定を行う必要はありません）。

次に、`--width-percentage` というカスタムプロパティを作成します。これは、`100cqw`（要素の親クエリーコンテナーである `<body>` 要素の幅の 100%）を `1200px` で割り、`0.33333` を引いた結果を含みます。これは、ビューポートの幅が変更される際に円が回転する量を制御する重要な値となります。

```css
.story-circle {
  width: 1px;
  height: 1px;
  --width-percentage: calc((100cqw / 1200px) - 0.33333);
}
```

回転を制御するには、ビューポート幅ではなくコンテナークエリーの幅を使用しています。これはコンテナーの最大境界を設定するためであり、この境界は `<body>` の `max-width` で制御されます。回転値が 1 周を超えると、最後の段落がまず最初の段落と重なり始め、効果が損なわれるためです。

`max-width` が `1600px` であるため、計算式は `(100cqw / 1600px)` になると思われるかもしれません。これは動作しますが、代わりに `(100cqw / 1200px) - 0.33333` を採用しています（`0.33333` は `1600px/1200px - 1` によって決まります）。どちらの方法でも `<body>` 幅が `1600px` のときに回転が最大になりますが、扇形の最小回転角度がより小さくなるため、狭いビューポート幅でより良い効果を得ることができます。

最終的なスタイルルールは段落自体を選択します。このスタイル設定の大半は基本的なものです。特筆すべきは、{{cssxref("position")}} を `absolute` に指定して段落を互いに重なるように配置し、さらに {{cssxref("transform-origin")}} の値を `center left` に指定して段落が中心を中心に回転するようにしている点です。これにより段落はすべて中心点から扇状に広がり、含まれている `<div>` 全体を覆うようになります。

これで、ちょっと興味深い部分に入ります。段落の単位なし回転角度を格納する独自のプロパティ `--angle` を定義し、その結果を {{cssxref("rotate")}} プロパティに設定します：結果の数値に `1deg` を乗算して度単位に変換します。`--angle` カスタムプロパティは次の 3 つの値の積です。

1. 段落の {{cssxref("sibling-index()")}} から `1` を引いた値。これにより、最初の段落の回転角度が `0` になり、水平にすることができます。
2. `360` を段落の {{cssxref("sibling-count()")}} で割ることで、すべての段落が円周上に均等に配置されます。これは、段落数が変わってもデザインが機能するということです。
3. `--width-percentage` カスタムプロパティにより、ビューポートの幅が変化するにつれて段落の円周上での回転角度を変化させます。このプロパティの最大値は `1` であり、`<body>` 要素が `max-width` の `1600px` に達したときにこの値が達成されることに留意してください。

```css
p {
  padding: 10px;
  width: 150px;
  text-align: right;
  background: linear-gradient(to right, red, orange 50%);
  border-radius: 5px;

  position: absolute;
  transform-origin: center left;

  --angle: calc(
    ((sibling-index() - 1) * (360 / sibling-count())) * var(--width-percentage)
  );
  rotate: calc(var(--angle) * 1deg);
}
```

### 結果

結果を確認するには、[アニメーションするストーリーサークルのライブサンプルを表示](https://mdn.github.io/dom-examples/css-typed-arithmetic/animated-story-circle/)してみてください（[ソースコードを表示](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/animated-story-circle)）。ビューポートの幅を増減させて、段落の扇形の図形が円形に展開し、再び扇形に戻る様子を確認してみてください。

## 関連情報

- {{cssxref("calc()")}}, {{cssxref("abs()")}}
- [CSS 値と単位](/ja/docs/Web/CSS/Guides/Values_and_units)モジュール
- [CSS Typed Arithmetic](https://css-tricks.com/css-typed-arithmetic/) - css-tricks.com (2025)
