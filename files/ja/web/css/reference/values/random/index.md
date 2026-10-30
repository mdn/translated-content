---
title: "`random()` 関数 (CSS)"
short-title: random()
slug: Web/CSS/Reference/Values/random
l10n:
  sourceCommit: 74b73e8310d2ecfecd3e4a2aa21e5b54f43d7387
---

**`random()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、指定された範囲内でランダムな値を生成します。また、必要に応じて、その範囲内の値を指定された増分の間隔の値に制限することもできます。これは、{{CSSxRef("&lt;length&gt;")}}、{{CSSxRef("&lt;frequency&gt;")}}、{{cssxref("angle")}}、{{CSSxRef("&lt;time&gt;")}}、 {{CSSxRef("&lt;resolution&gt;")}}、{{CSSxRef("&lt;percentage&gt;")}}、{{CSSxRef("&lt;number&gt;")}}、{{CSSxRef("&lt;integer&gt;")}} をプロパティ値内で指定する際に使用できます。

{{InteractiveExample("CSS デモ: random()")}}

```html interactive-example
<div class="box"></div>
```

```css interactive-example
.box {
  rotate: random(property-scoped, 0deg, 360deg);
  width: random(property-scoped, 50px, 300px);
  background-color: hsl(random(property-scoped, 0, 360) 50% 50%);
  height: random(property-scoped, 50px, 300px);
}

@supports not (order: random(1, 2)) {
  body::before {
    content: "このブラウザーは random() 関数に対応していません。";
  }
}
```

## 構文

```css
/* 基本的な使い方 */
random(0, 100)
random(10px, 500px)
random(0deg, 360deg)

/* 増分の値付き */
random(0, 100, 10)
random(0rad, 1turn, 30deg)

/* 基準値付き */
random(auto, 0, 360)
random(element-scoped, 0s, 5s)
random(property-scoped, 0s, 5s)
random(property-index-scoped, 0s, 5s)
random(--unique-base, 400px, 100px)
random(fixed 0.5, 1em, 40vw)
random(--unique-base property-scoped, 100dpi, 300dpi)

/* 基準値と増分の値付き */
random(property-scoped, 0deg, 360deg, 45deg)
random(--my-base, 1em, 3rem, 2px)
```

### 引数

`random(seed, min, max, step)` 関数は、カンマ区切りの式を 2 つから 4 つまでの引数として受け入れます。

- `<random-key>` {{optional_inline}}
  - : 文書内のどの `random()` 関数がランダムな基準値（シード）を共有し、どの関数が異なる値を取得するかを制御します。
    以下のいずれかの値として指定します。
    - `auto`
      - : `auto` はデフォルト値であり、`<random-key>` が指定されていない場合に適用されます。この乱数関数は、互いに独立した乱数値を生成します。乱数キャッシュ名、ひいては結果は、複合値内の各 `random()` インスタンス間で、異なるプロパティ間で、また異なる要素間でそれぞれ異なります。これは、`element-scoped property-index-scoped` を指定することと同等です。
    - `element-scoped`
      - : ランダムなキャッシュ名に要素固有の識別子を追加します。これにより、複数のプロパティ（例：`width` や `height`）に適用した場合、両方のプロパティで同じ値が使用されますが、各要素（例：`<div>`）にはそれぞれ異なるランダムな値が割り当てられます。
    - `property-scoped`
      - : ランダムなキャッシュ名にプロパティ名を追加します。そのため、複数のプロパティ（例：`width` や `height`）に適用した場合、それぞれのプロパティには異なるランダム値が割り当てられますが、それぞれの要素（例：`<div>`）では同じランダム値が使用されます。
    - `property-index-scoped`
      - : 同じプロパティ値で使用されるすべての乱数関数の中から、`random()` 関数のプロパティ名とインデックスを乱数キャッシュ名に追加することで、同じ宣言内の複数のインスタンスがそれぞれ異なる乱数値を取得できるようにします。
    - {{cssxref("dashed-ident")}}
      - : ランダムなキャッシュキーのカスタム名（例：`--my-random-key`）。単独で使用した場合、同じ識別子を使用するすべての要素およびプロパティ間で、同じランダムなベース値が共有されます。`*-scoped` キーワードと組み合わせて使用した場合、共有の挙動はそのキーワードによって決定されます。
    - `fixed <number>`
      - : ランダムなキャッシュ名を無視し、`<number>`（`0` 以上 `1` 未満の範囲）をシード値として使用します。

- `<calc-sum>, <calc-sum>`
  - : `<number>`、`<dimension>`、`<percentage>` の値、あるいはこれらの型のいずれかに変換される計算式として指定し、それぞれ最小値と最大値を定義します。両方の値は、同じ[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)に変換可能でなければなりません。最大値が最小値よりも小さい場合、この関数は最初の `<calc-sum>` 値を返します。

- `<calc-sum>` {{optional_inline}}
  - : 増分の間隔を指定します。この引数が存在する場合、かつ最小値および最大値 `<calc-sum>` と同じデータ型である場合、返値は最小値、あるいは最小値から最大値までの範囲において、増分値ごとに計算された値となります。

### 返値

最小値以上最大値以下の範囲内で、`<calc-sum>` 引数と同じ型を持つランダムな `<number>`、`<dimension>`、`<percentage>` を返します。

## 解説

`random(SEED, MIN, MAX, STEP)` 関数は、最小値と最大値、およびオプションの増分値を指定し、最小値から開始します。この関数は、指定された範囲内でランダムな結果を生成します。基準値（[オプションの `<random-key>`](#random-key) 引数）を使用すると、異なるプロパティや要素間でランダムな基底値を共有したり、変化させたりすることができます。

関数が有効となるためには、指定された最小値、最大値、および増分値は、すべて同じデータ型でなければなりません。2 ～ 3 つの `<calc-sum>` 引数の単位は同じである必要はありませんが、{{cssxref("number")}}、{{cssxref("percentage")}}、 {{cssxref("length")}}、{{cssxref("angle")}}、{{cssxref("time")}}、{{cssxref("frequency")}} など、同じデータ型である必要があります。

### 乱数基準値

乱数基準値は、[乱数のシード](/ja/docs/Glossary/RNG)と同様に機能します。これは、最終的な乱数結果を生成するために使用される開始値です。2 つの `random()` 関数が同じ基準値を共有する場合、その結果は予測可能なパターンで連動して変化します。基準値が異なる場合、その結果は互いに完全に独立しています。

オプションの 1 つ目の `<random-key>` 引数は、ランダムなベース値の共有方法を制御します。この引数には、`auto`、スコープキーワード（`element-scoped`、`property-scoped`、`property-index-scoped` のいずれか）、カスタム {{cssxref("dashed-ident")}}、`fixed <number>`、あるいはスコープキーワードと組み合わせた `<dashed-ident>` を指定できます。

#### スコープのキーワード

スコープキーワードを単独で使用すると、カスタム名を指定せずに共有を制御できます。

- `property-scoped` は、プロパティごとにすべての要素間でベース値を共有します。
- `element-scoped` は、プロパティごとにそれぞれの要素にカスタムベース値を割り当てます。
- `property-index-scoped` は `property-scoped` と同様に動作しますが、同時に、一括指定内の位置に応じて `random()` の呼び出しを別個の形で分離します。

`property-scoped` キーワードを使用すると、`.a`、`.b`、`.c` はすべて同一の矩形になります。これは、すべての要素が同じ `width` 値と同じ `height` 値を取得するためです。

```css
.a,
.b,
.c {
  width: random(property-scoped, 10px, 200px);
  height: random(property-scoped, 10px, 200px);
}
```

`element-scoped` の値を設定すると、各要素にそれぞれ独立した `width` 値と `height` 値が割り当てられます。

`property-index-scoped` キーワードは、それぞれの位置に独自の共有値が必要な一括指定で有益です。

```css
.a,
.b,
.c {
  margin: random(property-index-scoped, 5px, 40px)
    random(property-index-scoped, 5px, 40px)
    random(property-index-scoped, 5px, 40px)
    random(property-index-scoped, 5px, 40px);
}
```

3 つの要素すべてに、同じ上マージンや右マージンといった具合に、同じマージン値が指定されていますが、4 つのマージン値は互いに異なります。

#### カスタム名

単独で使用される `<dashed-ident>`（例：`--custom-name`）は、その基本値をグローバルに共有します。つまり、文書内のどこで同じ識別子を使用して `random()` を呼び出しても、同じ結果が取得されます。これにより、すべての `width` および `height` が同じ値に解決されるため、`.a`、`.b`、`.c` はまったく同じ正方形になります。

```css
.a,
.b,
.c {
  width: random(--custom-name, 10px, 200px);
  height: random(--custom-name, 10px, 200px);
}
```

`<dashed-ident>` をスコープキーワードと組み合わせることで、その共有範囲を絞り込むことができます。`property-scoped` を指定すると、要素間でグローバルな状態を維持しつつ、プロパティごとに別個の状態で存在します。

```css
.a,
.b,
.c {
  width: random(--custom-name property-scoped, 10px, 200px);
  height: random(--custom-name property-scoped, 10px, 200px);
}
```

一方、`element-scoped` では、各要素内で `width` と `height` の関連性は維持されますが、それぞれの要素に独自の値が割り当てられるため、`.a`、`.b`、`.c` はそれぞれ異なるサイズの正方形になります。

```css
.a,
.b,
.c {
  width: random(--custom-name element-shared, 10px, 200px);
  height: random(--custom-name element-shared, 10px, 200px);
}
```

#### 自動値の動作

最初の引数が省略された場合、または明示的に `auto` に設定された場合、プロパティ名と位置から識別子が自動生成されます。この動作により、予期しない乱数基準値の共有が発生する可能性があります。

```css
.foo {
  width: random(100px, 200px);
}
.foo:hover {
  width: random(100px, 200px);
}
.bar {
  margin: random(1px, 100px) random(1px, 100px);
}
.bar:hover {
  margin: random(1px, 100px) random(1px, 100px) random(1px, 100px)
    random(1px, 100px);
}
```

`<random-key>` がデフォルト値であるか、明示的に `auto` に設定されている場合、ユーザーエージェントは、プロパティ名と順序に基づいた一貫したルールに従って、シード名、すなわち生成された値共有識別子を自動生成します。このため、`random()` 関数は同じシード名となり、その結果、同じ乱数基準値を持つことになります。この例では、`width` プロパティ値内の `random()` 関数に対して生成された値共有識別子は、`.foo` と `.foo:hover` で同じであるため、状態間で値は変化しません。同様に、両方の `margin` 宣言における最初の 2 つの `random()` 関数は、同じ生成値共有識別子を持っています。つまり、`margin` 一括指定の最初の 2 つの値は、ホバー時でも変更されません。ホバー時、`bar` の上マージンと右マージンは同じままですが、下マージンと左マージンには独立したランダム値が取得されます。それぞれの `random()` 関数に対して独立した値を取得するには、固有の {{cssxref("dashed-ident")}} を提供する必要があります。

### カスタムプロパティ

他のすべての CSS 関数と同様に、`random()` 関数がカスタムプロパティの値に記載されている場合、その値は関数のままとなります。つまり、単一の返値を格納するのではなく、テキスト置換の仕組みのように動作します。

```css
--random-size: random(1px, 100px);
```

この例では、`--random-size` カスタムプロパティは、ランダムに生成された結果を「保存」しません。`var(--random-size)` が構文解析されると、実質的に `random(1px, 100px)` に置き換えられます。つまり、それぞれの使用コンテキストに応じた独自の基準値を持つ新しい `random()` 関数の呼び出しが生成されることになります。

ただし、{{cssxref("@property")}} を使用してカスタムプロパティを登録する際に `random()` を使用した場合は、この限りではありません。登録されたカスタムプロパティは、ランダムな値を計算して格納します。

この例では、`--defaultSize` が登録されているため、`.a`、`.b`、 `.c` は同じサイズの正方形になりますが、`--random-angle` は登録されていないため、色はランダムになります。

```css
@property --defaultSize {
  syntax: "<length> | <percentage>";
  inherits: true;
  initial-value: random(100px, 200px);
}
:root {
  --random-angle: random(0deg, 360deg);
}
.a,
.b,
.c {
  background-color: hsl(var(--random-angle) 100% 50%);
  height: var(--defaultSize);
  width: var(--defaultSize);
}
```

## アクセシビリティ

`random()` は指定された範囲内で予測不可能な値を生成するため、得られる結果を完全に制御することはできません。これにより、アクセシビリティに問題のある結果が生じる可能性があります。例えば、`random()` を使用してテキストの色を生成した場合、背景とのコントラストが低い色になってしまう可能性があります。`random()` を使用する際は、そのコンテキストを十分に考慮し、結果が常にアクセシブルであることを確保することが重要です。

## 形式文法

{{CSSSyntax}}

## 例

### 基本的な使い方

この例では、`random()` 関数の基本的な使い方を示すために、いくつかの円形のバッジにランダムな色を割り当ててみます。

#### HTML

5 つのバッジを記載しており、そのうち 1 つは `desaturated` クラスを使用し、2 つは `unique` クラスを使用しています。

```html
<div class="badge"></div>
<div class="badge"></div>
<div class="badge desaturated"></div>
<div class="badge unique"></div>
<div class="badge unique"></div>
```

#### CSS

5 つのバッジを円として描画します。`random()` 関数を {{cssxref("color_value/hsl()")}} 色関数内で使用し、色相 ({{cssxref("hue")}}) の {{cssxref("angle")}} を定義します。`property-scoped` を設定することで、デフォルトの `badge` と `desaturated` との間で乱数基準値を共有し、同じ色相 ({{cssxref("hue")}}) の彩度を抑えたバージョンとします。それから、基準値共有引数をデフォルトの `auto` に設定することで、`unique` バッジを上書きし、真にランダムな `hue` を実現します。

```css
.badge {
  display: inline-block;
  width: 5em;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background: hsl(random(property-scoped, 0, 360) 50% 50%);
}
.badge.desaturated {
  background: hsl(random(property-scoped, 0, 360) 10% 50%);
}
.badge.unique {
  background: hsl(random(0, 360) 50% 50%);
}
```

```css hidden
@supports not (order: random(1, 2)) {
  body::before {
    content: "このブラウザーは random() 関数に対応していません。";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### 結果

{{EmbedLiveSample('Generate random colors for circular badge', '100%', '300px')}}

### プロパティ間で乱数値を共有

この例では、星が散りばめられた背景を作成し、`<dashed-ident>` と `element-scoped` を組み合わせて、要素間で値を共有することなく、それぞれの要素内のプロパティ間でランダムな基本値を共有する方法を示します。

#### HTML

5 つの粒があり、それらはすべて同じクラス名を持っています。

```html
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
```

#### CSS

すべての粒に同じスタイルが適用されています。`random()` 関数を使用して、{{cssxref("height")}}、{{cssxref("width")}}、{{cssxref("top")}}、{{cssxref("left")}} の値をランダムに設定し、それぞれの粒のサイズと位置をランダムに決定します。`<dashed-ident>` に `height` と `width` に対して `element-scoped` を組み合わせることで、それぞれの粒は円（高さと幅が一致する）になりますが、サイズ設定は他の粒とは独立して行われます。`top` と `left` はデフォルトの `auto` のままにしているため、各軸が独立して位置指定されます。

```css
body {
  background: black;
}

.particle {
  border-radius: 50%;
  background: white;
  position: fixed;
  width: random(--particle-size element-scoped, 0.25em, 1em);
  height: random(--particle-size element-scoped, 0.25em, 1em);
  top: random(0%, 100%);
  left: random(0%, 100%);
  animation: move 1s alternate-reverse infinite;
}
```

```css hidden
@supports not (order: random(1, 2)) {
  body::before {
    content: "このブラウザーは random() 関数に対応していません。";
    color: white;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### 結果

{{EmbedLiveSample('Random value sharing between properties', '100%', '300px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("calc()")}}
- [CSS 単位と値](/ja/docs/Web/CSS/Guides/Values_and_units)モジュール
- {{jsxref("Math.random()")}}
- [Rolling the Dice with CSS random()](https://webkit.org/blog/17285/rolling-the-dice-with-css-random/) - webkit.org (2025)
- [CSS Almanac: random()](https://css-tricks.com/almanac/functions/r/random/) - CSS-Tricks.com
