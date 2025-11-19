---
title: SVG の背景の拡大縮小
slug: Web/CSS/Guides/Backgrounds_and_borders/Scaling_SVG_backgrounds
original_slug: Web/CSS/CSS_backgrounds_and_borders/Scaling_of_SVG_backgrounds
l10n:
  sourceCommit: f6497ec3b1a28d7b0a99f5d13e81027204293fa3
---

SVG 画像の柔軟性を踏まえると、{{ cssxref("background-image") }} プロパティで背景画像として使用する際に注意すべき点はまだありますし、{{ cssxref("background-size") }} プロパティで拡大縮小する際にもさらに注意すべき点があります。この記事では、これらのプロパティを使用する際に SVG 画像の拡大縮小がどのように処理されるか説明します。

## 背景の拡大縮小のアルゴリズム

背景画像の背景サイズを決定するために使用できるアルゴリズムは、ほとんどの場合、次の 4 つのルールに要約することができます。 これらのルールではカバーできない例外的なケースもありますが、大半のケースには該当します。

1. {{ cssxref("background-size") }} で固定された寸法を指定した場合（つまり、パーセントや相対的な単位はコンテキストによって固定されています）、その寸法が優先されます。
2. 画像に内在的な比率がある場合（幅と高さの比率が一定であること、例えば 16:9、4:3、2.39:1、1:1 など）、レンダリングされるサイズはその比率を維持します。
3. 画像がサイズを指定しており、 constrain や cover によってサイズが変更されなければ、その指定したサイズが勝ちます。
4. 上記のいずれのケースにも当てはまらない場合、画像は背景領域と同じサイズでレンダリングされます。

注目すべきは、サイズ調整アルゴリズムは画像の寸法と比率、あるいはその有無にしか注意を払わないということです。固定された寸法の SVG 画像は、同じサイズのラスター画像と同じように扱われます。

> [!NOTE]
> CSS で SVG を異なる縦横比に引き伸ばそうとする場合、例えばページの背景に引き伸ばそうとする場合は、 SVG に `preserveAspectRatio="none"` が含まれていることを確認してください。詳しくは {{svgattr("preserveAspectRatio")}} を探して下さい。

## ソース画像の例

さまざまな種類の SVG ソース画像を使用した結果を掘り下げ、 {{ cssxref("background-size") }} を併用した際の表示を確認する前に、さまざまな寸法とサイズの設定を持ついくつかのソース画像を例として見ておくと有用でしょう。例えば、この例では `background-image` の値として使用します。 ブラウザーは既定では、 {{SVGelement("svg")}} 画像を `300px` の幅と `150px` の高さで表示します。

### 寸法なし、比率なし

このSVGグラデーション画像は、寸法も比率もありません。大きさが何であれ、また、具体的なアスペクト比を維持するかどうかを気にしません。これは、画面の大きさやアスペクト比に関係なく作業できるので、グラデーションのデスクトップ背景にはいいでしょう。

```html
<svg>
  <title>Corner-to-corner gradient</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="100%" y1="0%" y2="100%">
      <stop style="stop-color:pink" offset="0" />
      <stop style="stop-color:goldenrod" offset="1" />
    </linearGradient>
  </defs>
  <rect style="fill: url(#g)" width="100%" height="100%" />
</svg>
```

{{ EmbedLiveSample('Dimensionless_and_proportionless', 200, 180) }}

### 一方の寸法が指定され、比率なし

この画像は、幅を 100 ピクセルと指定していますが、高さは指定されておらず、内在的な比率もありません。これは基本的に、建物の高さ全体にわたって張ることができる細長い壁紙です。

```html
<svg width="100">
  <title>Vertical gradient, with a fixed width</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="0%" y1="0%" y2="100%">
      <stop style="stop-color: purple;" offset="0" />
      <stop style="stop-color: lime;" offset="1" />
    </linearGradient>
  </defs>
  <rect style="fill: url(#g);" width="100%" height="100%" />
</svg>
```

{{ EmbedLiveSample('One specified dimension and proportionless', 200, 180) }}

### 一方の寸法が指定され、内在的な比率あり

この画像は高さを 100 ピクセルに指定していますが、幅は指定していません。また、内在的なアスペクト比を 3:4 に指定しています。これにより、意図的に不釣り合いな大きさに拡大縮小しない限り（つまり、縦横比が一致しない幅と高さを明示的に指定しない限り）、幅と高さの比が常に 3:4 になることが確実に維持されます。

この例は、幅と高さを指定するのととても似ています。というのも、 1 つの寸法と比率があれば、他にも寸法があることが暗示されるからです。

```html
<svg height="100" viewBox="0 0 3 4" preserveAspectRatio="none">
  <title>Vertical gradient, with a fixed height and intrinsic ratio</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="0%" y1="0%" y2="100%">
      <stop style="stop-color: teal;" offset="0" />
      <stop style="stop-color: orange;" offset="1" />
    </linearGradient>
  </defs>
  <rect style="fill: url(#g);" width="100%" height="100%" />
</svg>
```

{{ EmbedLiveSample('One specified dimension with intrinsic ratio', 200, 180) }}

### 幅または高さがなく、内在的な比率あり

この画像は幅も高さも指定してありませんが、代わりに 1:1 の比率を指定します。これはプログラムのアイコンのようなものです。常に正方形で、例えば 32x32、128x128、512x512 など、どんなサイズでも使えます。

```html
<svg viewBox="0 0 1 1" preserveAspectRatio="none">
  <title>Intrinsic ratio</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="100%" y1="0%" y2="0%">
      <stop style="stop-color: navy;" offset="0" />
      <stop style="stop-color: maroon;" offset="1" />
    </linearGradient>
  </defs>
  <rect style="fill: url(#g);" width="100%" height="100%" />
</svg>
```

{{ EmbedLiveSample('No width or height with intrinsic ratio', 200, 180) }}

## 拡大縮小の例

それでは、これらの画像に様々な倍率を適用した場合に何が起こるのか、いくつかの例を見てみましょう。下記に挙げる各例では、囲む {{htmlelement("div")}} 要素は幅 300 ピクセル、高さ 200 ピクセルで、 2 ピクセル幅の境界線があります。これらのデモンストレーションでは SVG 背景画像を 1 回だけ表示するようにするため、 {{ cssxref("background-repeat") }} を `no-repeat` に設定しています。

```css
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

### 両方の寸法が固定長に指定されている場合

{{ cssxref("background-size") }} を使って両方の寸法が固定長に指定されている場合、上記のルール 1 に従って、常にその長さが使用されます。言い換えれば、ソース画像が寸法や縦横比を指定しているかどうかに関わらず、画像は常に指定した寸法に引き伸ばされます。

#### 寸法や内在的な比率なし

この例では、画像には寸法や内在的な比率は設定していません。

```html hidden live-sample___scaling1
<div></div>
```

```css hidden live-sample___scaling1
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___scaling1
div {
  background-image: url(no-dimensions-or-ratio.svg);
  background-size: 125px 175px;
}
```

{{ EmbedLiveSample('scaling1', 200, 230) }}

#### 一方の寸法が指定され、内在的な比率なし

この例では、画像の寸法を 1 つ指定し、内在的な比率は設定していません。

```html hidden live-sample___scaling2
<div></div>
```

```css hidden live-sample___scaling2
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___scaling2
div {
  background-image: url(100px-wide-no-height-or-ratio.svg);
  background-size: 250px 150px;
}
```

{{ EmbedLiveSample('scaling2', 200, 230) }}

#### 一方の寸法が指定され、内在的な比率あり

```html hidden live-sample___scaling3
<div></div>
```

この例では、画像には 1 つの寸法が明示的に設定されており、内在的な比率も設定されているため、結果的にどちらの寸法も定義されているということになります。 `background-size` の絶対的な高さおよび幅を設定すると、 SVG で設定された寸法が上書きされます。

```css hidden live-sample___scaling3
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___scaling3
div {
  background-image: url(100px-height-3x4-ratio.svg);
  background-size: 275px 125px;
}
```

{{ EmbedLiveSample('scaling3', 200, 230) }}

#### 幅または高さがなく、内在的な比率あり

この例では、画像には内在的な比率がありますが、寸法は設定されていません。

```html hidden live-sample___scaling4
<div></div>
```

```css hidden live-sample___scaling4
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___scaling4
div {
  background-image: url(no-dimensions-1x1-ratio.svg);
  background-size: 250px 100px;
}
```

{{ EmbedLiveSample('scaling4', 200, 230) }}

### contain や cover の使用

`cover` を {{ cssxref("background-size") }} に指定すると、背景領域全体を覆いながら、画像を可能な限り小さく使用することができます。他にも `contain` を指定すると、背景領域で切り取られることなく、可能な限り画像を大きくすることができます。

内在的な比率を持つ画像の場合、ちょうど 1 つのサイズが `cover`/fit の基準だけに照合します。しかし、内在的な比率が指定されていない場合は、`cover`/fit だけでは不十分なので、large/small 制約が結果のサイズを選びます。

#### 寸法や内在的な比率なし

この例では、画像には寸法も内在的な比率も設定されていません。画像が寸法も内在的な比率も指定していない場合、ルール 2 もルール 3 も適用されないため、ルール 4 が引き継がれます。つまり、背景画像は背景領域全体を覆うようにレンダリングされます。これにより、最大または最小の制約が満たされます。

```html hidden live-sample___cc1
<div></div>
```

```css hidden live-sample___cc1
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc1
div {
  background-image: url(no-dimensions-or-ratio.svg);
  background-size: contain;
}
```

{{ EmbedLiveSample('cc1', 200, 230) }}

#### 一方の寸法が指定され、内在的な比率なし

同様に、画像に 1 つの寸法が指定されているが内在的な比率がない場合、ルール 4 が適用され、画像は背景領域全体に拡大縮小されます。

```html hidden live-sample___cc2
<div></div>
```

```css hidden live-sample___cc2
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc2
div {
  background-image: url(100px-wide-no-height-or-ratio.svg);
  background-size: contain;
}
```

{{ EmbedLiveSample('cc2', 200, 230) }}

#### 一方の寸法が指定され、内在的な比率あり

この例では、画像には 1 つの次元が明示的に設定されており、内在的な比率も指定されています。

内在的な比率を指定すると、状況が変わります。この場合、ルール 1 は関係ないので、ルール 2 が適用されます。（`contain` または `cover` を尊重しながら）あらゆる内在的な比率を維持しようとします。例えば、縦横比を 3:4 に保ちつつ、 300x200 のボックスに `contain` を使用すると、 150x200 の背景を描画するという意味になります。

##### contain の場合

```html hidden live-sample___cc3
<div></div>
```

Given this CSS:

```css hidden live-sample___cc3
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc3
div {
  background-image: url(100px-height-3x4-ratio.svg);
  background-size: contain;
}
```

{{ EmbedLiveSample('cc3', 200, 230) }}

画像全体がどのようにレンダリングされるかに注目してください。画像の一部が切り取られることなく、可能な限りボックスに収まります。

##### cover の場合

```html hidden live-sample___cc5
<div></div>
```

```css hidden live-sample___cc5
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc5
div {
  background-image: url(100px-height-3x4-ratio.svg);
  background-size: cover;
}
```

{{ EmbedLiveSample('cc5', 200, 230) }}

ここでは、 3:4 の比率を維持しながら、画像がボックス全体に引き伸ばされます。そのため、画像の下部が切り取られる現象が発生します。

#### 寸法の指定がなく、内在的な比率あり

この例では、内在的な比率を設定しますが、寸法を定義しない画像を使用します。内在的な寸法を持たないが、内在的な比率を持つ画像を使用する場合も、同様にうまくいきます。

##### contain の場合

```html hidden live-sample___cc6
<div></div>
```

```css hidden live-sample___cc6
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc6
div {
  background-image: url(no-dimensions-1x1-ratio.svg);
  background-size: contain;
}
```

{{ EmbedLiveSample('cc6', 200, 230) }}

画像は 1:1 のアスペクト比を保ちながら、最小の寸法に合うようにサイズ調整されていることに注目してください。

##### cover の場合

```html hidden live-sample___cc7
<div></div>
```

```css hidden live-sample___cc7
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc7
div {
  background-image: url(no-dimensions-1x1-ratio.svg);
  background-size: cover;
}
```

{{ EmbedLiveSample('cc7', 200, 230) }}

ここでは、画像が最大の寸法を満たすようにサイズ調整されています。 1:1 のアスペクト比が保たれますが、この画像ではそれがわかりにくいかもしれません。

### 両方の寸法に "auto" を使用した自動サイズ設定

{{ cssxref("background-size") }}が `auto` または `auto auto` に設定されていた場合、指定された内在的な比率を維持するようにレンダリングしなければならないとルール 2 は言っています。

#### 寸法や内在的な比率なし

内在的な比率や寸法が元画像で指定されていない場合、ルール 4 が有効になり、画像は背景領域を埋めるようにレンダリングされます。

```html hidden live-sample___both-auto1
<div></div>
```

```css hidden live-sample___both-auto1
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___both-auto1
div {
  background-image: url(no-dimensions-or-ratio.svg);
  background-size: auto auto;
}
```

{{ EmbedLiveSample('both-auto1', 200, 230) }}

#### 一方の寸法があり、内在的な比率なし

内在的な比率が指定されず、少なくとも 1 つの寸法が指定された場合、ルール 3 が有効になり、その寸法に従った画像をレンダリングします。

```html hidden live-sample___both-auto2
<div></div>
```

```css hidden live-sample___both-auto2
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___both-auto2
div {
  background-image: url(100px-wide-no-height-or-ratio.svg);
  background-size: auto auto;
}
```

{{ EmbedLiveSample('both-auto2', 200, 230) }}

ここでは、幅はソース SVG で 100 ピクセルと指定されているのでそれに従いますが、高さは（明示的か内在的な比率で）指定されていないので背景領域を埋めます。

#### 一方の寸法と内在的な比率あり

固定された寸法と内在的な比率があれば、両方の寸法が固定されます。一方の寸法と比率を指定することは、すでに述べたように、両方の寸法と比率を明示的に指定することと同じです。

```html hidden live-sample___both-auto3
<div></div>
```

```css hidden live-sample___both-auto3
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___both-auto3
div {
  background-image: url(100px-height-3x4-ratio.svg);
  background-size: auto auto;
}
```

{{ EmbedLiveSample('both-auto3', 200, 230) }}

この画像は明示的に 100 ピクセルの高さがあるので、比率が 3:4 だと明示的に幅を 75 ピクセルに設定し、 `auto` の場合はそのようにレンダリングされます。

#### 固定された寸法がなく、内在的な比率あり

内在的な比率を指定していて、寸法を指定していない場合は、ルール 4 が適用されます。ただし、ルール 2 も適用されます。したがって、画像は `contain` の場合と同様にレンダリングされます。

```html hidden live-sample___both-auto4
<div></div>
```

```css hidden live-sample___both-auto4
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___both-auto4
div {
  background-image: url(no-dimensions-1x1-ratio.svg);
  background-size: auto auto;
}
```

{{ EmbedLiveSample('both-auto4', 200, 230) }}

### "auto" と一方の長さの組み合わせ

ルール 1 が指定された場合、常に指定の寸法が用いられるので、 2 つ目の寸法を決定するためだけにルールを使用する必要があります。

#### 寸法や内在的な比率なし

画像に寸法や内在的な比率がない場合は、ルール 4 が適用され、背景領域の寸法を使用して `auto` 次元の値を決定します。

```html hidden live-sample___auto0
<div></div>
```

```css hidden live-sample___auto0
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___auto0
div {
  background-image: url(no-dimensions-or-ratio.svg);
  background-size: auto 140px;
}
```

{{ EmbedLiveSample('auto0', 200, 230) }}

ここでは、幅はルール 4 に従って背景領域の幅を使用して決定し、高さは CSS で指定した 140px が使用されます。

#### 一方の寸法を指定し、内在的な比率なし

画像の一方の寸法が指定されており、内在的な比率がない場合、その寸法が CSS で `auto` に設定されていれば、ルール 3 に従ってその指定した寸法を使用します。

```html hidden live-sample___auto1
<div></div>
```

```css hidden live-sample___auto1
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___auto1
div {
  background-image: url(100px-wide-no-height-or-ratio.svg);
  background-size: 200px auto;
}
```

{{ EmbedLiveSample('auto1', 200, 230) }}

ここでは、CSS で指定した `200px` が、 SVG で指定した `100px` の幅をルール 1 に従って上書きしています。内在的な比率や高さが指定されていないので、`auto`は背景領域の高さをレンダリング画像の高さとして選択します。

```html hidden live-sample___auto2
<div></div>
```

```css hidden live-sample___auto2
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___auto2
div {
  background-image: url(100px-wide-no-height-or-ratio.svg);
  background-size: auto 125px;
}
```

{{ EmbedLiveSample('auto2', 200, 230) }}

この場合、幅は CSS で auto と指定されているので、ルール 3 に従って、 SVG で指定した `100px` の幅が選択されます。高さは CSS で `125px` に設定されているので、ルール 1 に従って選択されます。

#### 一方の寸法が指定され、内在的な比率あり

寸法が指定された場合、ルール 1 は、CSS によって特に上書きされない限り、SVG からレンダリングされた背景にその寸法を適用します。内在的な比率も指定された場合、もう一方の寸法を決定するために使用されます。

```html hidden live-sample___auto3
<div></div>
```

```css hidden live-sample___auto3
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___auto3
div {
  background-image: url(100px-height-3x4-ratio.svg);
  background-size: 150px auto;
}
```

{{ EmbedLiveSample('auto3', 200, 230) }}

この場合、 CSS で `150px` に設定された画像の幅を使用しますので、ルール 1 が適用されます。そして、内在的な 3:4 の縦横比が `auto` の場合の高さを決定します。

#### 寸法の指定がなく、内在的な比率あり

SVG で寸法が指定されていない場合は、CSS で指定された寸法が適用され、ルール 2 に従って内在的な比率を使用してもう一方の寸法が選択されます。

```html hidden live-sample___auto4
<div></div>
```

```css hidden live-sample___auto4
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___auto4
div {
  background-image: url(no-dimensions-1x1-ratio.svg);
  background-size: 150px auto;
}
```

{{ EmbedLiveSample('auto4', 200, 230) }}

幅は CSS で `150px` に設定されています。高さの `auto` 値は、その幅と 1:1 の縦横比を使用して計算され、 `150px` になります。

## 関連情報

- {{cssxref("background-size")}}
- [CSS 背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)モジュール
