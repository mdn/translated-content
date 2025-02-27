---
title: SVG の背景の拡大縮小
slug: Web/CSS/Scaling_of_SVG_backgrounds
l10n:
  sourceCommit: e633202a8cda3c340a0510c27f3902f743275140
---

{{CSSRef}}

SVG 画像の柔軟性を踏まえると、{{ cssxref("background-image") }} プロパティで背景画像として使用する際に注意すべき点はまだありますし、{{ cssxref("background-size") }} プロパティで拡大縮小する際にもさらに注意すべき点があります。この記事では、これらのプロパティを使用する際に SVG 画像の拡大縮小がどのように処理されるか説明します。

## アルゴリズムの概要

アルゴリズムの大部分は、これらの 4 つのルールに要約することができます。これらのルールによらない例外的なケースもありますが、大半のケースはこれでカバーできます。

1. {{ cssxref("background-size") }} で固定された寸法を指定した場合（つまり、パーセントや相対的な単位はコンテキストによって固定されています）、その寸法が優先されます。
2. 画像に内在的な比率がある場合（幅と高さの比率が一定であること、例えば 16:9、4:3、2.39:1、1:1 など）、レンダリングされるサイズはその比率を維持します。
3. 画像がサイズを指定しており、 constrain や cover によってサイズが変更されなければ、その指定したサイズが勝ちます。
4. 上記のいずれのケースにも当てはまらない場合、画像は背景領域と同じサイズでレンダリングされます。

注目すべきは、サイズ調整アルゴリズムは画像の寸法と比率、あるいはその有無にしか注意を払わないということです。固定された寸法の SVG 画像は、同じサイズのラスター画像と同じように扱われます。

> [!NOTE]
> CSS で SVG を異なる縦横比に引き伸ばそうとする場合、例えばページの背景に引き伸ばそうとする場合、 SVG に `preserveAspectRatio="none"` が含まれていることを確認してください。詳しくは {{svgattr("preserveAspectRatio")}} を探して下さい。

## ソース画像の例

様々な種類のソース画像を使用し、 {{ cssxref("background-size") }} で使用した場合にどのように見えるかを見るために掘り下げる前に、寸法とサイズ設定の異なるいくつかのソース画像の例を見ていただくと参考になると思います。

それぞれの場合において、 150x150 のボックスでレンダリングされたソース画像がどのように見えるかを示し、 SVG のソースへのリンクを提供します。

### 寸法なし、比率なし

この画像は寸法も比率もありません。大きさを気にせず、特定の縦横比も気にしません。これは、画面の大きさや縦横比に関係なく作業することができる、良いグラデーションのデスクトップ背景になるでしょう。

![no-dimensions-or-ratio.png](no-dimensions-or-ratio.png)

[SVG ソース](https://mdn.dev/archives/media/attachments/2012/07/09/3469/6587a382ffb2c944462a6b110b079496/no-dimensions-or-ratio.svg)

### 一方の寸法が指定され、比率なし

この画像は幅 100 ピクセルを指定していますが、高さや縦横比は指定しません。これは基本的なもので、ブロックの高さ全体に伸ばせる細い帯状の壁紙です。

![100px-wide-no-height-or-ratio.png](100px-wide-no-height-or-ratio.png)

[SVG ソース](https://mdn.dev/archives/media/attachments/2012/07/09/3468/af73bea307a10ffe2559df42fad199e3/100px-wide-no-height-or-ratio.svg)

### 一方の比率が指定され、内在的な比率あり

この画像は高さを 100 ピクセルに指定していますが、幅は指定していません。また、内在的なアスペクト比を 3:4 に指定しています。これにより、意図的に不釣り合いな大きさに拡大縮小しない限り（つまり、縦横比が一致しない幅と高さを明示的に指定しない限り）、幅と高さの比が常に 3:4 になることが確実に維持されます。

この例は、幅と高さを指定するのととても似ています。というのも、 1 つの寸法と比率があれば、他にも寸法があることが暗示されるからです。

![100px-height-3x4-ratio.png](100px-height-3x4-ratio.png)

[SVG ソース](https://mdn.dev/archives/media/attachments/2012/07/09/3467/fd0c534c506be06d52f0a954a59863a6/100px-height-3x4-ratio.svg)

### 幅または高さがなく、内在的な比率あり

この画像は幅も高さも指定してありませんが、代わりに 1:1 の比率を指定します。これはプログラムのアイコンのようなものです。常に正方形で、例えば 32x32、128x128、512x512 など、どんなサイズでも使えます。

![no-dimensions-1x1-ratio.png](no-dimensions-1x1-ratio.png)

[SVG ソース](https://mdn.dev/archives/media/attachments/2012/07/09/3466/a3398e03c058d99fb2b7837167cdbc26/no-dimensions-1x1-ratio.svg)

## 拡大縮小の例

これで、この画像に異なる拡大縮小をするとどうなるかの例を見てみましょう。下記の例では、長方形は幅 300 ピクセル、高さ 200 ピクセルです。また、背景には {{ cssxref("background-repeat") }} があり、わかりやすくするために no-repeat に設定されています。

> [!NOTE]
> 下記のスクリーンショットは、**期待される**レンダリングを示しています。現在、すべてのブラウザーで正しく表示されるわけではありません。

### 両方の寸法が固定長に指定されている場合

{{ cssxref("background-size") }} を使って両方の寸法が固定長に指定されている場合、上記のルール 1 に従って、常にその長さが使用されます。言い換えれば、ソース画像が寸法や縦横比を指定しているかどうかに関わらず、画像は常に指定した寸法に引き伸ばされます。

#### ソース: 寸法や内在的な比率なし

この CSS が与えらえると、

```css
background: url(no-dimensions-or-ratio.svg);
background-size: 125px 175px;
```

レンダリングされた出力結果は次のようになります。

![fixed-no-dimensions-or-ratio.png](fixed-no-dimensions-or-ratio.png)

#### ソース: 一方の寸法が指定され、内在的な比率なし

この CSS が与えられると、

```css
background: url(100px-wide-no-height-or-ratio.svg);
background-size: 250px 150px;
```

レンダリングされた出力結果は次のようになります。

![fixed-100px-wide-no-height-or-ratio.png](fixed-100px-wide-no-height-or-ratio.png)

#### ソース: 一方の寸法が指定され、内在的な比率あり

この CSS が与えられると、

```css
background: url(100px-height-3x4-ratio.svg);
background-size: 275px 125px;
```

レンダリングされた出力結果は次のようになります。

![fixed-100px-height-3x4-ratio.png](fixed-100px-height-3x4-ratio.png)

#### ソース: 幅または高さがなく、内在的な比率あり

この CSS が与えられると、

```css
background: url(no-dimensions-1x1-ratio.svg);
background-size: 250px 100px;
```

レンダリングされた出力結果は次のようになります。

![fixed-no-dimensions-1x1-ratio.png](fixed-no-dimensions-1x1-ratio.png)

### contain や cover の使用

`cover` を {{ cssxref("background-size") }} に指定すると、背景領域全体を覆いながら、画像を可能な限り小さく使用することができます。他にも `contain` を指定すると、背景領域で切り取られることなく、可能な限り画像を大きくすることができます。

内在的な比率を持つ画像の場合、ちょうど 1 つのサイズが `cover`/fit の基準だけに照合します。しかし、内在的な比率が指定されていない場合は、`cover`/fit だけでは不十分なので、large/small 制約が結果のサイズを選びます。

#### ソース: 寸法や内在的な比率なし

画像が寸法も内在的な比率も指定されていない場合、ルール 2 もルール 3 も適用されないので、ルール 4 が採用されます。背景画像は背景領域全体を覆うようにレンダリングされます。これは最大か最小かの制約を満たします。

```css
background: url(no-dimensions-or-ratio.svg);
background-size: contain;
```

レンダリングされた出力結果は次のようになります。

![no-dimensions-or-ratio-contain.png](no-dimensions-or-ratio-contain.png)

#### ソース: 一方の寸法が指定され、内在的な比率なし

同様に、画像に 1 つの寸法が指定されているが内在的な比率がない場合、ルール 4 が適用され、画像は背景領域全体に拡大縮小されます。

```css
background: url(100px-wide-no-height-or-ratio.svg);
background-size: contain;
```

レンダリングされた出力結果は次のようになります。

![100px-wide-no-height-or-ratio-contain.png](100px-wide-no-height-or-ratio-contain.png)

#### ソース: 一方の寸法が指定され、内在的な比率あり

内在的な比率を指定すると、状況が変わります。この場合、ルール 1 は関係ないので、ルール 2 が適用されます。（`contain` または `cover` を尊重しながら）あらゆる内在的な比率を維持しようとします。例えば、縦横比を 3:4 に保ちつつ、 300x200 のボックスに `contain` を使用すると、 150x200 の背景を描画するという意味になります。

##### contain の場合

```css
background: url(100px-height-3x4-ratio.svg);
background-size: contain;
```

レンダリングされた出力結果は次のようになります。

![100px-height-3x4-ratio-contain.png](100px-height-3x4-ratio-contain.png)

画像全体がどのようにレンダリングされるかに注目してください。画像の一部が切り取られることなく、可能な限りボックスに収まります。

##### cover の場合

```css
background: url(100px-height-3x4-ratio.svg);
background-size: cover;
```

レンダリングされた出力結果は次のようになります。

![100px-height-3x4-ratio-cover.png](100px-height-3x4-ratio-cover.png)

ここでは、 3:4 の比率を維持しながら、画像がボックス全体に引き伸ばされます。そのため、画像の下部が切り取られる現象が発生します。

#### ソース: 寸法の指定がなく、内在的な比率あり

内在的な寸法を持たず、内在的な比率を持つ画像を使用する場合も、同じように動作します。

##### contain の場合

```css
background: url(no-dimensions-1x1-ratio.svg);
background-size: contain;
```

レンダリングされた出力結果は次のようになります。

![no-dimensions-1x1-ratio-contain.png](no-dimensions-1x1-ratio-contain.png)

画像は 1:1 のアスペクト比を保ちながら、最小の寸法に合うようにサイズ調整されていることに注目してください。

##### cover の場合

```css
background: url(no-dimensions-1x1-ratio.svg);
background-size: cover;
```

レンダリングされた出力結果は次のようになります。

![no-dimensions-1x1-ratio-cover.png](no-dimensions-1x1-ratio-cover.png)

ここでは、画像が最大の寸法を満たすようにサイズ調整されています。 1:1 のアスペクト比が保たれますが、この画像ではそれがわかりにくいかもしれません。

### 両方の寸法に "auto" を使用した自動サイズ設定

{{ cssxref("background-size") }}が `auto` または `auto auto` に設定されていた場合、指定された内在的な比率を維持するようにレンダリングしなければならないとルール 2 は言っています。

#### ソース: 寸法や内在的な比率なし

内在的な比率や寸法が元画像で指定されていない場合、ルール 4 が有効になり、画像は背景領域を埋めるようにレンダリングされます。

```css
background: url(no-dimensions-or-ratio.svg);
background-size: auto auto;
```

レンダリングされた出力結果は次のようになります。

![auto-no-dimensions-or-ratio.png](auto-no-dimensions-or-ratio.png)

#### ソース: 一方の寸法があり、内在的な比率なし

内在的な比率が指定されず、少なくとも 1 つの寸法が指定された場合、ルール 3 が有効になり、その寸法に従った画像をレンダリングします。

```css
background: url(100px-wide-no-height-or-ratio.svg);
background-size: auto auto;
```

レンダリングされた出力結果は次のようになります。

![auto-100px-wide-no-height-or-ratio.png](auto-100px-wide-no-height-or-ratio.png)

ここでは、幅はソース SVG で 100 ピクセルと指定されているのでそれに従いますが、高さは（明示的か内在的な比率で）指定されていないので背景領域を埋めます。

#### ソース: 一方の寸法と内在的な比率あり

固定された寸法と内在的な比率があれば、両方の寸法が固定されます。一方の寸法と比率を指定することは、すでに述べたように、両方の次元を明示的に指定することと同じです。

```css
background: url(100px-height-3x4-ratio.svg);
background-size: auto auto;
```

レンダリングされた出力結果は次のようになります。

![auto-100px-height-3x4-ratio.png](auto-100px-height-3x4-ratio.png)

この画像は明示的に 100 ピクセルの高さがあるので、比率が 3:4 だと明示的に幅を 75 ピクセルに設定し、 `auto` の場合はそのようにレンダリングされます。

#### ソース: 固定された寸法がなく、内在的な比率あり

内在的な比率を指定していて、寸法を指定していない場合は、ルール 4 が適用されます。ただし、ルール 2 も適用されます。したがって、画像は `contain` の場合と同様にレンダリングされます。

```css
background: url(no-dimensions-1x1-ratio.svg);
background-size: auto auto;
```

レンダリングされた出力結果は次のようになります。

![auto-no-dimensions-1x1-ratio.png](auto-no-dimensions-1x1-ratio.png)

### "auto" と一方の長さの組み合わせ

ルール 1 が指定された場合、常に指定の寸法が用いられるので、 2 つ目の寸法を決定するためだけにルールを使用する必要があります。

#### ソース: 寸法や内在的な比率なし

画像に寸法や内在的な比率がない場合は、ルール 4 が適用され、背景領域の寸法を使用して `auto` 次元の値を決定します。

```css
background: url(no-dimensions-or-ratio.svg);
background-size: auto 150px;
```

![1auto-no-dimensions-or-ratio.png](1auto-no-dimensions-or-ratio.png)

ここでは、幅はルール 4 に従って背景領域の幅を使用して決定し、高さは CSS で指定した 140px が使用されます。

#### ソース: 一方の寸法を指定し、内在的な比率なし

画像の一方の寸法が指定されており、内在的な比率がない場合、その寸法が CSS で `auto` に設定されていれば、ルール 3 に従ってその指定した寸法を使用します。

```css
background: url(100px-wide-no-height-or-ratio.svg);
background-size: 200px auto;
```

![100px-wide-no-height-or-ratio-length-auto.png](100px-wide-no-height-or-ratio-length-auto.png)

ここでは、CSS で指定した 200px が、ルール 1 に従って SVG で指定した 100px の幅を上書きしています。内在的な比率や高さが指定されていないので、`auto`は背景領域の高さをレンダリング画像の高さとして選択します。

```css
background: url(100px-wide-no-height-or-ratio.svg);
background-size: auto 125px;
```

![100px-wide-no-height-or-ratio-auto-length.png](100px-wide-no-height-or-ratio-auto-length.png)

この場合、幅は CSS で auto と指定されているので、ルール 3 に従って、 SVG で指定した 100px の幅が選択されます。高さは CSS で 125px に設定されているので、ルール 1 に従って選択されます。

#### ソース: 一方の寸法が指定され、内在的な比率あり

寸法が指定された場合、ルール 1 は、CSS によって特に上書きされない限り、SVG からレンダリングされた背景にその寸法を適用します。内在的な比率も指定された場合、もう一方のｐ寸法を決定するために使用されます。

```css
background: url(100px-height-3x4-ratio.svg);
background-size: 150px auto;
```

![1auto-100px-height-3x4-ratio.png](1auto-100px-height-3x4-ratio.png)

この場合、 CSS で 150px に設定された画像の幅を使用しますので、ルール 1 が適用されます。そして、内在的な 3:4 の縦横比が `auto` の場合の高さを決定します。

#### ソース: 寸法の指定がなく、内在的な比率あり

SVG で寸法が指定されていない場合は、CSS で指定された寸法が適用され、ルール 2 に従って内在的な比率を使用してもう一方の寸法が選択されます。

```css
background: url(no-dimensions-1x1-ratio.svg);
background-size: 150px auto;
```

![1auto-no-dimensions-1x1-ratio.png](1auto-no-dimensions-1x1-ratio.png)

幅は CSS で 150px に設定されています。高さの `auto` 値は、その幅と 1:1 の縦横比を使用して計算され、 150px になります。

## 関連情報

- {{cssxref("background-size")}}
- ブログ記事: [Properly resizing vector image backgrounds](https://whereswalden.com/2011/10/21/properly-resizing-vector-image-backgrounds/)
