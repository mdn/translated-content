---
title: 背景と枠線
slug: Learn/CSS/Building_blocks/Backgrounds_and_borders
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks")}}

このレッスンでは、CSS の背景・枠線モジュールの機能を使ったクリエイティブな表現方法をいくつか見ていきます。グラデーション、背景画像、角の丸めを加えることを通じて、CSS を使ったスタイリングの多様な課題に対する解答が得られるでしょう。

| 前提条件: | 基本的なコンピューターリテラシー、[基本的なソフトウェアがインストールされている](/ja/Learn/Getting_started_with_the_web/Installing_basic_software)こと、[ファイルの扱い](/ja/Learn/Getting_started_with_the_web/Dealing_with_files)、HTML の基本（[HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML)）および CSS に関するアイデア（[CSS の第一歩](/ja/docs/Learn/CSS/First_steps)）に関する基本的な知識を得ている。 |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | ボックスの背景と枠線をスタイルする方法を学ぶ。                                                                                                                                                                                                                                                                                                                                                                         |

## CSS による背景の設定

CSS の {{cssxref("background")}} プロパティは、このレッスンで説明する多くの個別指定プロパティ(**longhand property**)を一度に指定する一括指定プロパティ(**shorthand property**)です。スタイルシートで複雑な背景プロパティを見かけると、一度に多くの値を渡していて理解するのが少し難しく感じるかもしれません。

```css
.box {
  background:
    linear-gradient(
        105deg,
        rgba(255, 255, 255, 0.2) 39%,
        rgba(51, 56, 57, 1) 96%
      ) center center / 400px 200px no-repeat,
    url(big-star.png) center no-repeat,
    rebeccapurple;
}
```

一括指定の仕方については後ほど改めて扱います。まずは背景に対して CSS で何ができるのかを知るために、ひとつひとつのプロパティを見ていきましょう。

### 背景色

{{cssxref("background-color")}} プロパティは、要素の背景色を定義します。このプロパティは、有効な[\<color>](/ja/docs/Web/CSS/color_value)値を受け入れます。`background-color`は、要素の [**Content box**, **Padding box**](/ja/docs/Learn/CSS/Building_blocks/The_box_model#Parts_of_a_box) の範囲でコンテンツの下に広がります。

次の例では、さまざまな色の値を使用して、ボックス(`.box`)、見出し(`h2`)、および {{htmlelement("span")}} 要素に背景色を指定しています。

**利用可能な [\<color>](/ja/docs/Web/CSS/color_value) を使ってみましょう。**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/color.html", '100%', 600)}}

### 背景画像

{{cssxref("background-image")}} プロパティは、要素の背景に表示する画像を指定します。次の例には、2 個のボックスがあります。片方のボックスでは背景画像がボックスより大きく、他方のボックスの背景画像は小さな星の画像です。

この例は、背景画像に関する 2 つのことを示しています。
デフォルトでは、大きな画像はボックスに収まるように縮小されず、一部分のみが表示されます。いっぽう、小さな画像はボックスの内側いっぱいまで繰り返されます。この場合、実際の画像は星 1 個のみです。

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/background-image.html", '100%', 600)}}

背景画像と背景色を同時に指定すると、背景色より手前に背景画像が表示されます。上記の例に`background-color`プロパティを追加して、動作を確認してみましょう。

#### 背景画像の繰り返しの指定

{{cssxref("background-repeat")}} プロパティは、画像の繰り返し表示の動作を制御するために使用されます。使用可能な値には次のものがあります:

- `no-repeat` — 背景画像が繰り返されるのを完全に防ぎます。
- `repeat-x` — 水平方向に繰り返します。
- `repeat-y` — 垂直方向に繰り返します。
- `repeat` — デフォルト; 両方の方向に繰り返します

**以下の例でこれらの値を試してみましょう。値を`no-repeat`に設定したため、星が 1 つだけ表示されます。異なる値(`repeat-x`や`repeat-y`)に変えてみて、その効果を確認してみましょう。**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/repeat.html", '100%', 600)}}

#### 背景画像のサイズ指定

先ほどの例では、背景を設定したい要素より画像のほうが大きいため画像の一部しか表示されませんでした。 {{cssxref("background-size")}} プロパティを使用して、背景内に収まるように画像のサイズを調整できます。

`background-size`プロパティは、[\<length>](/ja/docs/Web/CSS/length) または [\<percentage>](/ja/docs/Web/CSS/percentage) の値をとることができます。

また、次のキーワードを使うこともできます：

- `cover` —ブラウザーは、アスペクト比を維持したままボックスの領域を完全に覆うように画像の大きさを調整します。
  この場合、画像の一部が箱の外に出る可能性があります。
- `contain` —ブラウザーは、画像がボックス内にちょうど収まるように画像の大きさを調整します。
  この場合、画像とボックスのアスペクト比が異なる場合、画像の左右または上下に隙間ができる可能性があります。

次の例では、**\<length>**値を使用して先ほどの大きな画像がボックス内におさまる大きさに変更しました。結果として、画像が歪んでいることがわかります。

以下を試してみましょう。

- 背景のサイズをあらわす**\<length>**値を変更します。
- **\<length>**値を削除し、`background-size: cover`や`background-size: contain`を使うとどうなるかを確認します。
- 画像がボックスより小さい場合は、`background-repeat`の値を変更して画像を繰り返すことができます。

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/size.html", '100%', 750)}}

#### 背景画像の位置の指定

{{cssxref("background-position")}} プロパティを適用すると、そのボックス上で背景画像を表示する位置を選択できます。このプロパティでは、ボックスの左上隅を`(0, 0)`として、水平方向の座標軸(**horisontal axis**)を`x`軸(**`x` axis**, 複数形は axes）、垂直方向の座標軸(**vertical axis**)を`y`軸(**`y` axis**)とする座標系にそって画像を配置します。

> **メモ:** デフォルトの`background-position`の値は`(0, 0)`です。

最も一般的な`background-position`の値は、2 個の値をとります—水平方向、垂直方向の順で値を指定します。

`top`や`right`などのキーワードを使用できます (詳しくは{{cssxref("background-image")}}ページを参照):

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top center;
}
```

そして、 [\<length>](/ja/docs/Web/CSS/length)および[\<percentage>](/ja/docs/Web/CSS/percentage)を使用できます:

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: 20px 10%;
}
```

次のように、キーワードの値を\<length>や\<percentage>の値と混在させてもかまいません。

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top 20px;
}
```

最後に、4 つの値をとる構文を使って、ボックスのいずれかの端からの距離を示すこともできます。この場合の長さは、その直前の値で指定した位置からの距離（オフセット, **offset**）です。下の CSS では、背景を上(`top`)から`20px`、右(`right`)から`10px`に配置しています。

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

**次の例を使い、プロパティの値を変えてボックス内で星を動かしてみましょう。**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/position.html", '100%', 600)}}

> **メモ:** `background-position` は {{cssxref("background-position-x")}} および {{cssxref("background-position-y")}} の一括指定プロパティで、それぞれの座標軸の方向の位置を個別に設定できます。

### グラデーション背景

グラデーション(**gradient**, **勾配(こうばい)** )は、背景に使用する場合には画像と同じようにふるまいます。グラデーションは{{cssxref("background-image")}}プロパティを使用して設定されます。

[\<gradient>](/ja/docs/Web/CSS/gradient)データ型の MDN ページで、さまざまな種類のグラデーションとそれらを使ってできることについて詳しく読むことができます。Web で数多く提供されている CSS グラデーションジェネレーター(例えば "[CSS Gradient](https://cssgradient.io/)")を使用して、グラデーションを楽しく試せます。この Web サービスでは、グラデーションを作成したのち、グラデーションを生成するソースコードをコピー&ペーストできます。

以下の例でいろいろなグラデーションを試してみましょう。 1 つめのボックスには、ボックス全体に広がる線形グラデーション(linear gradient)を指定しています。2 つめのボックスには、サイズを設定して(そのために繰り返されている)放射状グラデーション(radial gradinet)を指定しています。

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/gradients.html", '100%', 600)}}

### 複数の背景画像

`background-image`プロパティにコンマ区切りで複数の画像を指定することで、複数の背景画像を使用することもできます。

これを行うと、背景画像が互いに重なり合う可能性があります。背景は、最後に指定したものが一番下に置かれ、先のものが順に上に重ねられます。

> **メモ:** グラデーションを通常の背景画像と同じように重ね合わせることができます。

他の`background-*`プロパティも、`background-image`と同じ方法でコンマ区切りの値を持つことができます:

```css
background-image: url(image1.png), url(image2.png), url(image3.png),
  url(image1.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

プロパティに指定した複数のプロパティ値は、他のプロパティの同じ位置にある値と対応します。上の例で、`image1`の`background-repeat`値は`no-repeat`です。では、プロパティごとに値の個数が異なるとどうなるでしょうか？答えは、個数が少ない値が繰り返し使われる、ということです。上の例では、4 つの背景画像がありますが、2 つの `background-position` の値しかありません。最初の 2 つの位置の値は対応する位置の画像に適用され、その後は繰り返されます。つまり、`image3`には 1 番目、`image4`には 2 番目の値がふたたび使われます。

**実際に試してみましょう。以下の例には 2 つの画像があります。重ね合わせの順序を確かめるために、どの背景画像を先にするかを変えてみてください。また、他のプロパティを操作して、位置、サイズ、繰り返し方法を変えてみてください。**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/multiple-background-image.html", '100%', 500)}}

### スクロール時の背景画像の固定

背景に使用できるもうひとつのオプションは、コンテンツがスクロールするときのスクロール方法を指定することです。これは, {{cssxref("background-attachment")}} プロパティを使用して制御され、次の値を取ることができます:

- `scroll`: ページ全体のスクロールに応じて要素の背景を移動します。要素のコンテンツがスクロールされた場合には、背景は移動しません。
  実際には背景はページ上の同じ位置に固定されているため、ページがスクロールするとスクロールします。
- `fixed`: 要素の背景をビューポート(viewport)に固定します。ページや要素のコンテンツがスクロールされても移動せず、画面上の同じ位置にとどまります。
- `local`: 要素の背景をその要素自身に対して固定します。要素のコンテンツをスクロールした場合にもそれにあわせて背景が移動します。
  `local`値は、多くの場合に`scroll`値の挙動が期待どおりではないことから新しく追加されました（他の値は Internet Explorer 4 以降でサポートされますが、`local`は IE 9 以降のみでサポートされます）。

{{cssxref("background-attachment")}} プロパティはスクロールするコンテンツがある場合にのみ効果があります。3 つの値の違いを示す[デモ（background-attachment.html）](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html)を作成したのでご覧ください（[ソースコード](https://github.com/mdn/learning-area/tree/master/css/styling-boxes/backgrounds)も公開しています）。

### 背景に関する指定をまとめておこなう

このレッスンの冒頭で、 {{cssxref("background")}} プロパティを使って背景が指定されている場合についてふれました。この一括指定プロパティを使うと、複数のプロパティを一度に設定できます。

複数の背景を使用する場合は、最初の背景に対するプロパティをすべて指定してから、カンマで区切って次の背景を追加します。以下の例では、サイズと位置を伴った[グラデーション](#Gradient_backgrounds)、`no-repeat`と位置指定を伴った[背景画像](#Background_images)、最後に[背景色](#Background_colors)を指定しています。

背景画像に関する一括指定を書くとき、いくつかのルールを守る必要があります。例えば：

- `background-color` は最後のコンマの後にのみ指定できます。
- `background-size`の値は、`center / 80％`のように、`background-position`の値の直後に`/`文字を挟んだ位置でのみ使うことができます。

すべての注意点を確認するには、 {{cssxref("background")}} の MDN ページをご覧ください。

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/background.html", '100%', 700)}}

### アクセシビリティの観点での注意点

テキストを背景画像や背景色の上に配置する際には、閲覧者がテキストを読み取れるだけの十分なコントラストを確保するよう注意する必要があります。画像の上にテキストを配置する場合は、画像が読み込まれない場合でもテキストが読み取れるような背景色も指定する必要があります。

スクリーンリーダーは背景画像を解析できないため、画像は装飾としての役割のみを担うべきです。重要なコンテンツはすべて HTML ページのなかで表現するべきで、背景画像のなかに含めるべきではありません。

## 枠線

ボックスモデルについて学習するとき、枠線(border)がボックスのサイズにどのように影響するかを見てきました。このレッスンでは、枠線をクリエイティブに活用する方法を見ていきます。

通常、CSS で要素に枠線を追加するときは、CSS の 1 行で枠線の色、幅、スタイルを指定する一括指定プロパティを使います。

{{cssxref("border")}}:を使用して、ボックスの 4 辺すべてに枠線を設定できます。

```css
.box {
  border: 1px solid black;
}
```

または、次のように、ボックスの 1 つの辺を対象にすることができます。:

```css
.box {
  border-top: 1px solid black;
}
```

一括指定で指定した個々のプロパティは次のとおりです：

```css
.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

一辺ごとの個別指定については次のようになります：

```css
.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}
```

> **メモ:** top, right, bottom, left の各方向の枠線を指定するプロパティには、HTML 文書の書字モード（writing mode）と結びついた*論理*プロパティ（_logical_ property）が割り当てられています（書字モードは、左から右、右から左、上から下といったテキストの方向を制御するものです）。次のレッスンでは、さまざまなテキストの方向の処理について説明します。

枠線にはさまざまなスタイルを指定できます。以下の例では、ボックスの 4 辺にそれぞれ異なる枠線スタイルを使用しています。枠線の色、幅、スタイルを試して、枠線の動作を確認しましょう。

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/borders.html", '100%', 700)}}

### 角の丸み

{{cssxref("border-radius")}}一括指定プロパティと、各々の角に対応した個別指定プロパティを使用して、ボックスの角の丸みを実現できます。各プロパティは 2 個の\<length>または\<percentage>を値として使用できます。最初の値は水平方向の半径(radius)を定義し、2 番目の値は垂直方向の半径を定義します。多くの場合、1 つの値のみを指定して両方向に適用します。

例えば、ボックスの 4 つの角すべてに半径 10px の丸みを持たせるには:

```css
.box {
  border-radius: 10px;
}
```

または、右上角の水平方向の半径を 1em、垂直方向の半径を 10％ にするには:

```css
.box {
  border-top-right-radius: 1em 10%;
}
```

以下の例では、はじめに 4 つの角すべてについて角の丸みを設定したのち、右上角を他と異なる値に変更しました。値を変えて試してみましょう。使用できる構文は{{cssxref("border-radius")}} プロパティのページを見て確認してください。

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/corners.html", '100%', 650)}}

## 背景と枠線を試す

学んだ知識を試すために、背景と枠線を使って次のものを作成してみてください。コード例を出発点として使ってください:

1. ボックスに幅が 5px の黒い実線の境界線を付け、角に半径が 10px の丸みをつけてください。
2. 背景画像を追加し（URL `balloons.jpg`を使用）、ボックスを覆うようにサイズを変更してください。
3. `<h2>`に半透明の黒い背景色を指定し、テキストを白にしてください。

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/task.html", '100%',650)}}

> **メモ:** [ここで正解を確認できます](https://github.com/mdn/css-examples/blob/master/learn/solutions.md)が、まずは自分の力で解答してみてください！

## まとめ

このレッスンではかなり多くのことを説明してきましたが、そのなかで背景や枠線をボックスに追加する方法がたくさんあることがわかりました。これまでに説明した機能について詳しく知りたくなったら、各プロパティの MDN ページに目を通してみましょう。これらのページには知識を活用したり強化したりするための使用例が書かれています。

次のレッスンでは、ドキュメントの書字モードが CSS とどのように相互作用するかを説明します。テキストが左から右以外の方向に流れる場合に何が起こるのでしょうか？

{{PreviousMenuNext("Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks")}}
