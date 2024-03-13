---
title: CSS Painting APIを使用する
slug: Web/API/CSS_Painting_API/Guide
---

CSS Paint API を用いると開発者がプログラムで画像を定義できます。CSS の [`background-image`](/ja/docs/Web/CSS/background-image), [`border-image`](/ja/docs/Web/CSS/border-image-source), [`mask-image`](/ja/docs/Web/CSS/mask-image) など CSS 画像を呼び出せる場所ならどこでも使用できるように設計されています。

CSS スタイルシートで使用される画像をプログラムで作成するには、いくつかのステップを踏む必要があります:

1. [`registerPaint()`](/ja/docs/Web/API/PaintWorklet/registerPaint) 関数を用いたペイント Worklet を定義します
2. その Worklet を登録します
3. `{{cssxref('paint()','paint()')}}` という CSS 関数を読み込みます

これらの手順を詳しく説明するために、このヘッダーのようなハーフハイライトの背景を作成することから始めます:

![Text reading 'My Cool Header' with a solid yellow background image block on the bottom left two thirds of the header](mycoolheader.png)

## CSS paint worklet

外部スクリプトファイルでは、[`registerPaint()`](/ja/docs/Web/API/PaintWorklet/registerPaint) 関数を使用して [CSS Paint worklet](/ja/docs/Web/API/PaintWorklet) の名前をつけています。この関数には 2 つの引数が必要です。最初の引数はその Worklet の名前です — これは CSS で要素にスタイルを適用する際に `paint()` 関数のパラメーターとして渡されます。2 つ目の引数は、すべての魔法を行うクラスで、その中でコンテキストオプションと、イメージとなる 2 次元キャンバスに何を描画するかを定義します。

```js
registerPaint(
  "headerHighlight",
  class {
    /*
       アルファ透明度を許可するかどうかを定義します。既定では true にします。
       false に設定した場合、すべてのキャンバスに
       使用されている色は完全に不透明になります。
    */
    static get contextOptions() {
      return { alpha: true };
    }

    /*
        ctx は 2D の描画コンテキストで
        HTML5 Canvas API のサブセットです。
    */
    paint(ctx) {
      ctx.fillStyle = "hsla(55, 90%, 60%, 1.0)";
      ctx.fillRect(0, 15, 200, 20); /* 順序: x, y, w, h */
    }
  },
);
```

このクラスの例では、`contextOptions()` を用いて 1 つだけコンテキストオプションを定義しています。そこではアルファ透明度を許可するシンプルなオブジェクトを返しています。

それでは `paint()` 関数を用いてキャンバスに描画していきます。

`paint()` 関数は 3 つの引数を持てます。ここでは最初の引数だけ渡していて、それはレンダリングコンテキスト(後ほど詳しく説明します)といい、ふつう `ctx` という変数名で表されます。2D レンダリングコンテキストは [HTML5 Canvas API](/ja/docs/Web/API/Canvas_API) のサブセットで、Houdini (`PaintRenderingContext2D`と呼ばれる) で利用可能なバージョンは Canvas API のほとんどすべての機能を含むサブセットですが、そのうち `CanvasImageData`, `CanvasUserInterface`, `CanvasText`, `CanvasTextDrawingStyles` の各 API は [除かれています](<https://drafts.css-houdini.org/css-paint-api-1/#2d-rendering-context)>)。

黄色の影をつくるために [`fillStyle`](/ja/docs/Web/API/CanvasRenderingContext2D/fillStyle) を `hsla(55, 90%, 60%, 1.0)` と定義し、その色の矩形を作成するために `fillRect()` を呼び出します。[`fillRect()`](/ja/docs/Web/API/CanvasRenderingContext2D/fillRect) のパラメータは、順に x 軸原点、y 軸原点、幅、高さです。`fillRect(0, 15, 200, 20)` は、幅 200 単位、高さ 20 単位の矩形を、コンテンツボックスの左端から 0 単位、上端から 15 単位に作成します。

CSS の [`background-size`](/ja/docs/Web/CSS/background-size) と [`background-position`](/ja/docs/Web/CSS/background-position) プロパティを使用して、この背景画像のサイズを変更したり、再配置したりすることができますが、これは描画 Worklet で作成した黄色のボックスのデフォルトのサイズと配置です。

この例はシンプルなものにしてみました。より多くのオプションについては、[canvas のドキュメント](/ja/docs/Web/HTML/Element/canvas)を参照してください。また、このチュートリアルの後半では、少し複雑さを追加しています。

## 描画 Worklet を使用する

描画 Worklet を使用するためには、[`addModule()`](/ja/docs/Web/API/Worklet/addModule) を用いて登録し、HTML 内の目的の DOM ノードに適用される CSS セレクターのスタイルに含める必要があります。

### Worklet を登録する

描画 Worklet とデザインは、上に示した外部スクリプトで行われました。この [Worklet](/ja/docs/Web/API/PaintWorklet) をメインスクリプトから登録する必要があります。

```js
CSS.paintWorklet.addModule("nameOfPaintWorkletFile.js");
```

これは、メイン HTML 内の `<script>` またはドキュメントからリンクされた外部 JavaScript ファイル内の、描画 Worklet の `addModule()` メソッドを使用して行うことができます。

以下の例では、描画 Worklet は Github でホストしています。

```js
CSS.paintWorklet.addModule(
  "https://mdn.github.io/houdini-examples/cssPaint/intro/01partOne/header-highlight.js",
);
```

### CSS で描画 Worklet を参照する

登録された描画 Worklet ができたら、それを CSS で使用することができます。他の `<image>` タイプと同様に CSS の `paint()` 関数を使用し、 描画 Worklet の `registerPaint()` 関数でセットしたのと同じ文字列識別子を使用してください。

```css
.fancy {
  background-image: paint(headerHighlight);
}
```

### 一緒につかう

そして、ページ上の任意の要素に fancy クラスを追加して、背景として黄色のボックスを追加することができます。

```html
<h1 class="fancy">My Cool Header</h1>
```

以下の例は、[CSS Painting API をサポートしているブラウザー](/ja/docs/Web/API/CSS/paintWorklet_static#ブラウザーの互換性)では上の画像のようになります。

{{EmbedLiveSample("paintapi", 120, 120)}}

ワークレットのスクリプトを弄ることはできませんが、背景画像のサイズと位置を変更するために、`background-size` と `background-position` を変更することができます。

## PaintSize

上の例では、20×200 の単位のボックスを作成し、要素の上端から 15 単位を塗りつぶしました。これは要素の大きさに関係なく同じです。テキストが小さい場合、黄色のボックスは巨大なアンダーラインのように見えます。文字が大きい場合は、最初の 3 文字の上にバーがあるように見えるかもしれません。 背景画像が要素のサイズと相対的なものであればより良いでしょう — 要素の `paintSize` プロパティを使用して、背景画像が要素のボックスモデルのサイズに比例するようにすることができます。

![The background is 50% of the height and 60% of the width of the element](mycoolheadersized.png)

上の画像では、背景は要素の大きさに比例しています。3 番目の例では、ブロックレベルの要素に `width: 50%`; を設定しているため、要素が狭くなり、その結果、背景画像が狭くなります。

これを行うためのコードは次のようになります:

```js
registerPaint(
  "headerHighlight",
  class {
    static get contextOptions() {
      return { alpha: true };
    }

    /*
        ctx は 2D 描画コンテキスト
        size は paintSize, 描画するボックスの高さ(height)と幅(width)を持つ
    */

    paint(ctx, size) {
      ctx.fillStyle = "hsla(55, 90%, 60%, 1.0)";
      ctx.fillRect(0, size.height / 3, size.width * 0.4, size.height * 0.6);
    }
  },
);
```

このコード例は、最初の例とは 2 つの違いがあります:

1. `paint()` の第 2 引数として描画サイズを使用しています。
2. 矩形の寸法と位置を、絶対値ではなく、要素ボックスのサイズに相対するように変更しました。

`paint()` に第 2 引数を渡すことで、`.width` と `.height` プロパティを使って要素の幅と高さにアクセスすることができます。

私たちのヘッダーは、サイズに応じてハイライトが変化するようになりました。

```js hidden
CSS.paintWorklet.addModule(
  "https://mdn.github.io/houdini-examples/cssPaint/intro/02partTwo/header-highlight.js",
);
```

```css hidden
.fancy {
  background-image: paint(headerHighlight);
}
.half {
  width: 50%;
}
```

```html hidden
<h1 class="fancy">Largest Header</h1>
<h6 class="fancy">Smallest Header</h6>
<h3 class="fancy half">50% width header</h3>
```

Worklet のスクリプトをいじることはできませんが、要素の `font-size` と `width` を変更して背景画像のサイズを変更できます。

以下の例は、CSS Painting API をサポートしているブラウザーでは上の画像のようになります。

{{EmbedLiveSample("example2", 300, 300)}}

## カスタムプロパティ

Worklet は、要素のサイズにアクセスするだけでなく、CSS のカスタムプロパティや通常の CSS プロパティにもアクセスすることができます。

```js
registerPaint(
  "cssPaintFunctionName",
  class {
    static get inputProperties() {
      return ["PropertyName1", "--customPropertyName2"];
    }
    static get inputArguments() {
      return ["<color>"];
    }
    static get contextOptions() {
      return { alpha: true };
    }

    paint(drawingContext, elementSize, styleMap) {
      // 描画コードはここに書く
    }
  },
);
```

`paint()` 関数の 3 つの引数には、描画コンテキスト、描画サイズ、プロパティが含まれます。プロパティにアクセスできるようにするために、静的な `inputProperties()` メソッドをインクルードしています。これは、通常のプロパティや[カスタムプロパティ](/ja/docs/Web/CSS/CSS_Variables)を含む CSS プロパティへの動的なアクセスを提供し、プロパティ名の [`array`](/ja/docs/Glossary/array) を返します。最後に`inputArguments` について見ていきます。

### 例

3 種類の色と 3 種類の幅の間で周回する背景画像を使って、項目一覧を作成してみましょう。

![The width and color of the background image changes based on the custom properties](boxbg.png)

この CSS では、`--boxColor` と `--widthSubtractor` のカスタム プロパティを使用して、作成した背景ボックスの色と幅の減算器を指定しています。

```html hidden
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
  <li>item 4</li>
  <li>item 5</li>
  <li>item 6</li>
  <li>item 7</li>
  <li>item 8</li>
  <li>item 9</li>
  <li>item 10</li>
  <li>item 11</li>
  <li>item 12</li>
  <li>item 13</li>
  <li>item 14</li>
  <li>item 15</li>
  <li>item 16</li>
  <li>item 17</li>
  <li>item</li>
</ul>
```

```js hidden
CSS.paintWorklet.addModule(
  "https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/boxbg.js",
);
```

```css
li {
  background-image: paint(boxbg);
  --boxColor: hsla(55, 90%, 60%, 1);
}

li:nth-of-type(3n) {
  --boxColor: hsla(155, 90%, 60%, 1);
  --widthSubtractor: 20;
}

li:nth-of-type(3n + 1) {
  --boxColor: hsla(255, 90%, 60%, 1);
  --widthSubtractor: 40;
}
```

Worklet ではこれらのカスタムプロパティを参照することができます。

```js
registerPaint(
  "boxbg",
  class {
    static get contextOptions() {
      return { alpha: true };
    }

    /*
     この関数を使用して、要素に対して定義されているカスタムプロパティ (または 'height' のような
     通常のプロパティ) を取得します。指定された配列で返します。
  */
    static get inputProperties() {
      return ["--boxColor", "--widthSubtractor"];
    }

    paint(ctx, size, props) {
      /*
       ctx -> 描画コンテキスト
       size -> paintSize: 幅と高さ
       props -> properties: get() メソッド
    */

      ctx.fillStyle = props.get("--boxColor");
      ctx.fillRect(
        0,
        size.height / 3,
        size.width * 0.4 - props.get("--widthSubtractor"),
        size.height * 0.6,
      );
    }
  },
);
```

`registerPaint()` に渡すクラスの `inputProperties()` メソッドを使用して、`boxbg` が適用されている要素に設定されている 2 つのカスタムプロパティの値を取得しました。そしてそれらを `paint()` 関数内で使用します。`inputProperties()` メソッドは、カスタムプロパティだけでなく、要素に影響するすべてのプロパティを返すことができます。

`<script>` 内で Worklet を登録するには以下のようにします:

```js
CSS.paintWorklet.addModule(
  "https://mdn.github.io/houdini-examples/cssPaint/intro/worklet/boxbg.js",
);
```

{{EmbedLiveSample("example3", 300, 300)}}

Worklet のスクリプトをいじることはできませんが、カスタムプロパティの値を変更して背景画像の色や幅を変更することはできます。

## より複雑にしてみる

これまでの例は、例えば装飾的に[生成されたコンテンツ](/ja/docs/Learn/CSS/Howto/Generated_content)を [`::before`](/ja/docs/Web/CSS/::before) で配置したり、`background: linear-gradient(yellow, yellow) 0 15px / 200px 20px no-repeat;` とするなど、既存の CSS プロパティを使用する方法で再現することができるので、あまり刺激的には見えないかもしれません。CSS Painting API が面白くて強力なのは、変数を渡して自動的にサイズを変更する複雑な画像を作成できることです。

それではもっと複雑な例を見てみましょう。

```js
registerPaint(
  "headerHighlight",
  class {
    static get inputProperties() {
      return ["--highColour"];
    }
    static get contextOptions() {
      return { alpha: true };
    }

    paint(ctx, size, props) {
      /* どの場所からハイライトを始めるか、寸法をセットする */
      const x = 0;
      const y = size.height * 0.3;
      const blockWidth = size.width * 0.33;
      const highlightHeight = size.height * 0.85;
      const color = props.get("--highColour");

      ctx.fillStyle = color;

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(blockWidth, y);
      ctx.lineTo(blockWidth + highlightHeight, highlightHeight);
      ctx.lineTo(x, highlightHeight);
      ctx.lineTo(x, y);
      ctx.closePath();
      ctx.fill();

      /* 破線を作成 */
      for (let i = 0; i < 4; i++) {
        let start = i * 2;
        ctx.beginPath();
        ctx.moveTo(blockWidth + start * 10 + 10, y);
        ctx.lineTo(blockWidth + start * 10 + 20, y);
        ctx.lineTo(
          blockWidth + start * 10 + 20 + highlightHeight,
          highlightHeight,
        );
        ctx.lineTo(
          blockWidth + start * 10 + 10 + highlightHeight,
          highlightHeight,
        );
        ctx.lineTo(blockWidth + start * 10 + 10, y);
        ctx.closePath();
        ctx.fill();
      }
    } // paint
  },
);
```

ここで作られる画像を背景とする小さな HTML を用意します:

```html
<h1 class="fancy">Largest Header</h1>
<h3 class="fancy">Medium size header</h3>
<h6 class="fancy">Smallest Header</h6>
```

それぞれのヘッダーは、それぞれ異なった値の `--highColor` [カスタムプロパティ](/ja/docs/Web/CSS/CSS_Variables)を持つことができます。

```css
.fancy {
  background-image: paint(headerHighlight);
}
h1 {
  --highColour: hsla(155, 90%, 60%, 0.7);
}
h3 {
  --highColour: hsla(255, 90%, 60%, 0.5);
}
h6 {
  --highColour: hsla(355, 90%, 60%, 0.3);
}
```

そして、Worklet を登録します

```js
CSS.paintWorklet.addModule(
  "https://mdn.github.io/houdini-examples/cssPaint/intro/03partThree/header-highlight.js",
);
```

{{EmbedLiveSample("example4", 300, 300)}}

この Worklet そのものを編集することはできませんが、CSS や HTML をいじることはできます。ヘッダーの [`float`](/ja/docs/Web/CSS/float) と [`clear`](/ja/docs/Web/CSS/clear) を試してみるのはどうでしょう？

上記の背景画像を CSS paint API を使わずに作ってみるのもいいかもしれません。これは可能ですが、作成したい色ごとに異なる、かなり複雑な線形グラデーションを宣言しなければなりません。CSS paint API を使えば、1 つの Worklet を再利用することができ、その場合でも異なる色を渡すことができます。

## パラメーターを渡す

CSS Paint API を使用すると、カスタムプロパティや通常のプロパティにアクセスできるだけでなく、カスタム引数を `paint()` 関数に渡すこともできます。

CSS で関数を呼び出すときに、これらの引数を追加することができます。例えばある時、背景を塗りつぶすのではなく、背景をなぞるようにしたいとしましょう — そのために追加の引数を加えておきましょう。

```css
li {
  background-image: paint(hollowHighlights, stroke);
}
```

これで、`registerPaint()` に渡されるクラスの `inputArguments()` メソッドを使用して、`paint()` 関数に追加したカスタム引数にアクセスできるようになりました。

```js
static get inputArguments() { return ['*']; }
```

実際にアクセスするにはこうします。

```js
paint(ctx, size, props, args) {

  // カスタム引数を使う
  const hasStroke = args[0].toString();

  // stroke 引数が 'stroke' の場合は塗りつぶしはしません
  if (hasStroke === 'stroke') {
    ctx.fillStyle = 'transparent';
    ctx.strokeStyle = colour;
  }
  ...
}
```

2 つ以上の引数も渡せます。

```css
li {
  background-image: paint(hollowHighlights, stroke, 10px);
}
```

また、特定のタイプの引数を指定することもできます。引数の値をリストで `get` する際に、特に `<length>` で単位を指定します。

```js
static get inputArguments() { return ['*', '<length>']; }
```

この場合は `<length>` 属性を要求しました。返される配列の最初の要素は [`CSSUnparsedValue`](/ja/docs/Web/API/CSSUnparsedValue) です。2 番目の要素は [`CSSStyleValue`](/ja/docs/Web/API/CSSStyleValue) です。

カスタム引数がユニットなどの CSS 値である場合、`registerPaint()` 関数で取得する際に value type キーワードを使用することで、Typed OM CSSStyleValue クラス (およびサブクラス) を呼び出すことができます。

それではストロークの幅を何ピクセルにするか、2 番目の引数を追加してみましょう:

```css
li {
  background-image: paint(hollowHighlights, stroke, 10px);
}
```

引数の値をリストで `get` する際に、`<length>` 単位を要求します。

```js
static get inputArguments() { return ['*', '<length>']; }
```

これで型と値のプロパティにアクセスできるようになりました。つまり箱から出してすぐにピクセル数と数値型を取得できるということです。(確かに `ctx.lineWidth` は、長さの単位を持つ値ではなく float を値として受け取りますが、これは例ですから...)

```js
paint(ctx, size, props, args) {

    const strokeWidth = args[1];

    if (strokeWidth.unit === 'px') {
      ctx.lineWidth = strokeWidth.value;
    } else {
      ctx.lineWidth = 1.0;
    }

  ...
}
```

この Worklet のさまざまな部分を制御するためにカスタムプロパティを使用することと、ここに記載されている引数との違いに注目する価値があります。カスタムプロパティ (および実際にはスタイルマップ上のすべてのプロパティ) はグローバルなもので、CSS (および JS) 内の他の場所で使用することができます。

例えば `paint()` 関数内で色を設定するために `--mainColor` を用意するのは便利ですが、これは CSS の他の場所で色を設定するのにも使えます。これを paint のためだけに特別に変更したい場合は、かなり難しいかもしれません。そこで便利なのがカスタム引数です。もう一つの考え方としては、引数は実際に描画するものを制御するために設定され、プロパティはスタイルを制御するために設定されるということです。

![The list items have a background image that is either pink, purple or green, with different stroke widths, and the green one being filled.](hollowfilled.png)

これでこの API の本当のメリットが見えてきました。カスタムプロパティと `paint()` 関数の引数の両方を使って CSS から無数の描画パラメータを制御できるようになれば、再利用可能で制御性の高いスタイリング関数を作り始めることができます。

```js
registerPaint(
  "hollowHighlights",
  class {
    static get inputProperties() {
      return ["--boxColor"];
    }
    // `paint` 関数に渡されるカスタム引数
    static get inputArguments() {
      return ["*", ""];
    }

    static get contextOptions() {
      return { alpha: true };
    }

    paint(ctx, size, props, args) {
      // ctx   -> 描画コンテキスト
      // size  -> 描画したいボックスの大きさ
      // props -> 要素に存在するカスタププロパティのリスト
      // args  -> cssから paint() 関数を呼ばれた際のカスタム引数のリスト

      // どの場所からハイライトを始めるか、寸法
      const x = 0;
      const y = size.height * 0.3;
      const blockWidth = size.width * 0.33;
      const blockHeight = size.height * 0.85;

      // CSS から paint() 関数に渡された値
      const colour = props.get("--boxColor");
      const strokeType = args[0].toString();
      const strokeWidth = parseInt(args[1]);

      // 線幅を設定する
      if (strokeWidth) {
        ctx.lineWidth = strokeWidth;
      } else {
        ctx.lineWidth = 1.0;
      }
      // 塗りつぶしタイプを設定する
      if (strokeType === "stroke") {
        ctx.fillStyle = "transparent";
        ctx.strokeStyle = colour;
      } else if (strokeType === "filled") {
        ctx.fillStyle = colour;
        ctx.strokeStyle = colour;
      } else {
        ctx.fillStyle = "none";
        ctx.strokeStyle = "none";
      }

      // 四角
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(blockWidth, y);
      ctx.lineTo(blockWidth + blockHeight, blockHeight);
      ctx.lineTo(x, blockHeight);
      ctx.lineTo(x, y);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      // 破線
      for (let i = 0; i < 4; i++) {
        let start = i * 2;
        ctx.beginPath();
        ctx.moveTo(blockWidth + start * 10 + 10, y);
        ctx.lineTo(blockWidth + start * 10 + 20, y);
        ctx.lineTo(blockWidth + start * 10 + 20 + blockHeight, blockHeight);
        ctx.lineTo(blockWidth + start * 10 + 10 + blockHeight, blockHeight);
        ctx.lineTo(blockWidth + start * 10 + 10, y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
    } // paint
  },
);
```

私たちは、異なる色、線幅を設定し、背景画像が塗りつぶされるべきか、中空になるべきかを選択することができます:

```css
li {
  --boxColor: hsla(155, 90%, 60%, 0.5);
  background-image: paint(hollowHighlights, stroke, 5px);
}

li:nth-of-type(3n) {
  --boxColor: hsla(255, 90%, 60%, 0.5);
  background-image: paint(hollowHighlights, filled, 3px);
}

li:nth-of-type(3n + 1) {
  --boxColor: hsla(355, 90%, 60%, 0.5);
  background-image: paint(hollowHighlights, stroke, 1px);
}
```

```html hidden
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
  <li>item 4</li>
  <li>item 5</li>
  <li>item 6</li>
  <li>item 7</li>
  <li>item 8</li>
  <li>item 9</li>
  <li>item 10</li>
  <li>item 11</li>
  <li>item 12</li>
  <li>item 13</li>
  <li>item 14</li>
  <li>item 15</li>
  <li>item 16</li>
  <li>item 17</li>
  <li>item</li>
</ul>
```

私たちの作った Worklet を登録するには以下のようにします:

```js
CSS.paintWorklet.addModule(
  "https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/hollow.js",
);
```

{{EmbedLiveSample("example5", 300, 300)}}

## 関連情報

- [CSS Painting API](/ja/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model API](/ja/docs/Web/Houdini/CSS_Typed_OM)
