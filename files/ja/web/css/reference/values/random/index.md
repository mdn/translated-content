---
title: CSS `random()` 関数
short-title: random()
slug: Web/CSS/Reference/Values/random
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

{{SeeCompatTable}}

**`random()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、指定された範囲内でランダムな値を生成します。また、必要に応じて、その範囲内の値を指定された増分の間隔の値に制限することもできます。これは、{{CSSxRef("&lt;length&gt;")}}、{{CSSxRef("&lt;frequency&gt;")}}、{{cssxref("angle")}}、{{CSSxRef("&lt;time&gt;")}}、 {{CSSxRef("&lt;resolution&gt;")}}、{{CSSxRef("&lt;percentage&gt;")}}、{{CSSxRef("&lt;number&gt;")}}、{{CSSxRef("&lt;integer&gt;")}} をプロパティ値内で指定する際に使用できます。

{{InteractiveExample("CSS Demo: random()")}}

```html interactive-example
<div class="box"></div>
```

```css interactive-example
.box {
  rotate: random(element-shared, 0deg, 360deg);
  width: random(element-shared, 50px, 300px);
  background-color: hsl(random(element-shared, 0, 360) 50% 50%);
  height: random(element-shared, 50px, 300px);
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
random(element-shared, 0s, 5s)
random(--unique-base, 400px, 100px)
random(fixed 0.5, 1em, 40vw)
random(--unique-base element-shared, 100dpi, 300dpi)

/* 基準値と増分の値付き */
random(element-shared, 0deg, 360deg, 45deg)
random(--my-base, 1em, 3rem, 2px)
```

### 引数

- `<random-value-sharing>` {{optional_inline}}
  - : 文書内のどの `random()` 関数が乱数基準値を共有し、固有の値を取得するかを制御します。
    この値は、次のいずれかの値、あるいは空白で区切った独自のキーとキーワード `element-shared` の両方を指定できます。
    - `auto`
      - : 要素のスタイル内で `random()` が使用されるたびに、それぞれ固有のランダムな初期値が取得されます。
    - {{cssxref("dashed-ident")}}
      - : 要素のプロパティ間で同じ乱数基準値を使用するための独自のキー（例：`--my-random-key`）です。
    - `element-shared`
      - : このキーを使用すると、同じプロパティを持つすべての要素間で乱数基準値が共有されます。この基準値は、同じ要素の他のプロパティの値に記載されている `random()` 関数とは独立しています。ただし、それらの random 関数にも同じ独自のキーが含まれている場合は除きます。
    - `fixed <number>`
      - : 生成される乱数基準値として、`0` 以上 `1` 以下の範囲を指定します。

- `<calc-sum>, <calc-sum>`
  - : カンマ区切りで指定される、2 つの必須の `<number>`、`<dimension>`、`<percentage>` の値、あるいはこれらの型のいずれかに変換される計算式で、それぞれ最小値と最大値を定義します。両方の値は、同じ[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)に変換可能でなければなりません。最大値が最小値よりも小さい場合、この関数は最初の `<calc-sum>` 値を返します。

- `<calc-sum>` {{optional_inline}}
  - : オプションの 3 つ目の `<calc-sum>`（その前にカンマを付ける）は、増分の間隔の値を指定します。これが存在する場合、かつカンマで区切られた最小値と最大値の 2 つの `<calc-sum>` と同じデータ型である場合、返値は最小値、または最小値から増分値ずつ増加した値（最大値以下）となります。

### 返値

最小値以上最大値以下の範囲内で、`<calc-sum>` 引数と同じ型を持つランダムな `<number>`、`<dimension>`、`<percentage>` を返します。

## 解説

`random(SEED, MIN, MAX, STEP)` 関数は、最小値と最大値、およびオプションの増分値を指定し、最小値から開始します。この関数は、指定された範囲内でランダムな結果を生成します。基準値（[オプションの `<random-value-sharing>`](#random-value-sharing) 引数）を使用すると、異なるプロパティや要素間でランダムな基底値を共有したり、変化させたりすることができます。

関数が有効となるためには、指定された最小値、最大値、および増分値は、すべて同じデータ型でなければなりません。2 ～ 3 つの `<calc-sum>` 引数の単位は同じである必要はありませんが、{{cssxref("number")}}、{{cssxref("percentage")}}、 {{cssxref("length")}}、{{cssxref("angle")}}、{{cssxref("time")}}、{{cssxref("frequency")}} など、同じデータ型である必要があります。

### 乱数基準値

乱数基準値は、[乱数のシード](/ja/docs/Glossary/RNG)と同様に機能します。これは、最終的な乱数結果を生成するために使用される開始値です。2 つの `random()` 関数が同じ基準値を共有する場合、その結果は予測可能なパターンで連動して変化します。基準値が異なる場合、その結果は互いに完全に独立しています。

オプションの 1 つ目の `<random-value-sharing>` 引数は、乱数基準値の共有方法を制御します。共有を有効にすると、同じランダム生成値を再利用することができるようになり、これは一部のデザイン効果において不可欠です。値は、`auto`、`element-shared` キーワード、独自の {{cssxref("dashed-ident")}}、または `fixed <number>` に設定できます。`element-shared` キーワードと空白で区切った独自の {{cssxref("dashed-ident")}} を指定することも可能です。

#### `element-shared` キーワード

`random()` 関数のうち `element-shared` キーワードを持つものはすべて、単一のプロパティについて、すべての要素で同じ乱数基準値を共有します。例えば、以下のように宣言した場合、`.a`、`.b`、`.c` は同じサイズの矩形となり、3 つとも同じランダムな幅を持ち、それぞれ独立して生成された同じランダムな高さを持つことになります。

```css
.a,
.b,
.c {
  width: random(element-shared, 10px, 200px);
  height: random(element-shared, 10px, 200px);
}
```

#### カスタム名

`<dashed-ident>`（`--custom-name` など）を指定すると、同じ名前を持つ要素のスタイル内のそれぞれの要素は、同じ乱数基準値を共有し、異なる `<dashed-ident>` 値を持つ要素には、それぞれ異なる乱数基準値が代入されます。以下のように宣言した場合、`.a`、`.b`、`.c` はすべて正方形になります。これは、各要素内において、同じ識別子を参照するすべてのプロパティが同じ基準値を共有するためです。したがって、それぞれの幅は高さと同じになります。なお、この場合、`.a`、`.b`、`.c` は異なるサイズになります。これは、基準値の共有が要素間ではなく、要素内のプロパティ間で行われるためです。

```css
.a,
.b,
.c {
  width: random(--custom-name, 10px, 200px);
  height: random(--custom-name, 10px, 200px);
}
```

#### `<dashed-ident>` と `element-shared` の設定

`<dashed-ident>` を `element-shared` と組み合わせると（`random(--custom-name element-shared, 0, 100)` など）、同じ `<random-value-sharing>` 引数を使用する要素とプロパティの両方で、乱数基準値が共有されます。指定された例では、`.a`、`.b`、`.c` はすべて同じサイズの正方形になります。

```css
.a,
.b,
.c {
  width: random(--custom-name element-shared, , 10px, 200px);
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

`<random-value-sharing>` がデフォルト値であるか、明示的に `auto` に設定されている場合、ユーザーエージェントは、プロパティ名と順序に基づいた一貫したルールに従って、シード名、すなわち生成された値共有識別子を自動生成します。このため、`random()` 関数は同じシード名となり、その結果、同じ乱数基準値を持つことになります。この例では、`width` プロパティ値内の `random()` 関数に対して生成された値共有識別子は、`.foo` と `.foo:hover` で同じであるため、状態間で値は変化しません。同様に、両方の `margin` 宣言における最初の 2 つの `random()` 関数は、同じ生成値共有識別子を持っています。つまり、`margin` 一括指定の最初の 2 つの値は、ホバー時でも変更されません。ホバー時、`bar` の上マージンと右マージンは同じままですが、下マージンと左マージンには独立したランダム値が取得されます。それぞれの `random()` 関数に対して独立した値を取得するには、固有の {{cssxref("dashed-ident")}} を提供する必要があります。

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

5 つのバッジを円として描画します。`random()` 関数を {{cssxref("color_value/hsl()")}} 色関数内で使用し、色相 ({{cssxref("hue")}}) の {{cssxref("angle")}} を定義します。`element-shared` を設定することで、デフォルトの `badge` と `desaturated` との間で乱数基準値を共有し、同じ色相 ({{cssxref("hue")}}) の彩度を抑えたバージョンとします。それから、基準値共有引数をデフォルトの `auto` に設定することで、`unique` バッジを上書きし、真にランダムな `hue` を実現します。

```css
.badge {
  display: inline-block;
  width: 5em;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background: hsl(random(element-shared, 0, 360) 50% 50%);
}
.badge.desaturated {
  background: hsl(random(element-shared, 0, 360) 10% 50%);
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

この例では、星が散りばめられた背景を作成し、`<dashed-ident>` を使用して要素のプロパティ間でシード値を共有する方法を示します。

#### HTML

5 つの粒子があり、それらはすべて同じクラス名を持っています。

```html
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
```

#### CSS

すべての粒子に同じスタイルが適用されています。それぞれの粒子のサイズと位置をランダムに設定するために、`random()` 関数を使用して {{cssxref(「height」)}}、{{cssxref("width")}}、{{cssxref("top")}}、{{cssxref("left")}} の値を決定しています。`height` と `width` の基準値として `<dashed-ident>` を使用しています。これは、指定された範囲内では粒子のサイズが互いに独立しているものの、それぞれの粒子の `height` は `width` と同じになることを意味します。`top` と `left` プロパティについては、基準値を `auto` に設定することができるため、各プロパティおよび要素の基準値は互いに独立しています。

```css
body {
  background: black;
}

.particle {
  border-radius: 50%;
  background: white;
  position: fixed;
  width: random(--particle-size, 0.25em, 1em);
  height: random(--particle-size, 0.25em, 1em);
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
