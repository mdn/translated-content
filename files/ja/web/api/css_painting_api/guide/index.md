---
title: CSS Painting APIを使用する
slug: Web/API/CSS_Painting_API/Guide
tags:
  - CSS
  - CSS Paint API
  - Canvas
  - Houdini
  - Learn
translation_of: Web/API/CSS_Painting_API/Guide
original_slug: Web/API/CSS_Painting_API/ガイド
---
<p>CSS Paint API を用いると開発者がプログラムで画像を定義できます。CSS の <code><a href="/ja/docs/Web/CSS/background-image">background-image</a></code>, <code><a href="/ja/docs/Web/CSS/border-image-source">border-image</a></code>, <code><a href="/ja/docs/Web/CSS/mask-image">mask-image</a></code> など CSS 画像を呼び出せる場所ならどこでも使用できるように設計されています。</p>

<p>CSS スタイルシートで使用される画像をプログラムで作成するには、いくつかのステップを踏む必要があります:</p>

<ol>
 <li><code><a href="/ja/docs/Web/API/PaintWorklet/registerPaint">registerPaint()</a></code> 関数を用いたペイント Worklet を定義します</li>
 <li>その Worklet を登録します</li>
 <li><code>{{cssxref('paint()','paint()')}}</code> という CSS 関数を読み込みます</li>
</ol>

<p>これらの手順を詳しく説明するために、このヘッダーのようなハーフハイライトの背景を作成することから始めます:</p>

<p><img alt="Text reading 'My Cool Header' with a solid yellow background image block on the bottom left two thirds of the header" src="https://mdn.mozillademos.org/files/16774/mycoolheader.png" style="height: 54px; width: 239px;"></p>

<h2 id="CSS_paint_worklet" name="CSS_paint_worklet">CSS paint worklet</h2>

<p>外部スクリプトファイルでは、<code><a href="/ja/docs/Web/API/PaintWorklet/registerPaint">registerPaint()</a></code> 関数を使用して <a href="/ja/docs/Web/API/PaintWorklet">CSS Paint worklet</a> の名前をつけています。この関数には 2 つの引数が必要です。最初の引数はその Worklet の名前です — これは CSS で要素にスタイルを適用する際に <code>paint()</code> 関数のパラメーターとして渡されます。2 つ目の引数は、すべての魔法を行うクラスで、その中でコンテキストオプションと、イメージとなる 2 次元キャンバスに何を描画するかを定義します。</p>

<pre class="brush: js notranslate">registerPaint('headerHighlight', class {

  /*
       アルファ透明度を許可するかどうかを定義します。既定では true にします。
       false に設定した場合、すべてのキャンバスに
       使用されている色は完全に不透明になります。
    */
  static get contextOptions() {
           return { alpha: true };
    }

    /*
        <strong>ctx</strong> は 2D の描画コンテキストで
        <a href="/ja/docs/Web/API/Canvas_API">HTML5 Canvas API</a> のサブセットです。
    */
  paint(ctx) {
        ctx.fillStyle = 'hsla(55, 90%, 60%, 1.0)';
        ctx.fillRect(0, 15, 200, 20);     /* 順序: x, y, w, h */
  }
});</pre>

<p>このクラスの例では、<code>contextOptions()</code> を用いて 1 つだけコンテキストオプションを定義しています。そこではアルファ透明度を許可するシンプルなオブジェクトを返しています。</p>

<p>それでは <code>paint()</code> 関数を用いてキャンバスに描画していきます。</p>

<p><code>paint()</code> 関数は 3 つの引数を持てます。ここでは最初の引数だけ渡していて、それはレンダリングコンテキスト(後ほど詳しく説明します)といい、ふつう <code>ctx</code> という変数名で表されます。2D レンダリングコンテキストは <a href="/ja/docs/Web/API/Canvas_API">HTML5 Canvas API</a> のサブセットで、Houdini (<code>PaintRenderingContext2D</code>と呼ばれる) で利用可能なバージョンはCanvas APIのほとんどすべての機能を含むサブセットですが、そのうち <code>CanvasImageData</code>, <code>CanvasUserInterface</code>, <code>CanvasText</code>, <code>CanvasTextDrawingStyles</code> の各 API は <a href="https://drafts.css-houdini.org/css-paint-api-1/#2d-rendering-context)">除かれています</a>。</p>

<p>黄色の影をつくるために <code><a href="/ja/docs/Web/API/CanvasRenderingContext2D/fillStyle">fillStyle</a></code> を <code>hsla(55, 90%, 60%, 1.0)</code> と定義し、その色の矩形を作成するために <code>fillRect()</code> を呼び出します。<code><a href="/ja/docs/Web/API/CanvasRenderingContext2D/fillRect">fillRect()</a></code><span> のパラメータは、順に x 軸原点、y 軸原点、幅、高さです。</span><code>fillRect(0, 15, 200, 20)</code><span> は、幅 200 単位、高さ 20 単位の矩形を、コンテンツボックスの左端から 0 単位、上端から 15 単位に作成します。</span></p>

<p>CSS の <code><a href="/ja/docs/Web/CSS/background-size">background-size</a></code> と <code><a href="/ja/docs/Web/CSS/background-position">background-position</a></code> プロパティを使用して、この背景画像のサイズを変更したり、再配置したりすることができますが、これは描画 Worklet で作成した黄色のボックスのデフォルトのサイズと配置です。</p>

<p>この例はシンプルなものにしてみました。より多くのオプションについては、<a href="/ja/docs/Web/HTML/Element/canvas">canvas のドキュメント</a>を参照してください。また、このチュートリアルの後半では、少し複雑さを追加しています。</p>

<h2 id="Using_the_paint_worklet" name="Using_the_paint_worklet">描画 Worklet を使用する</h2>

<p>描画 Worklet を使用するためには、<code><a href="/ja/docs/Web/API/Worklet/addModule">addModule()</a></code> を用いて登録し、HTML 内の目的の DOM ノードに適用される CSS セレクターのスタイルに含める必要があります。</p>

<h3 id="Registering_the_worklet" name="Registering_the_worklet">Worklet を登録する</h3>

<p>描画 Worklet とデザインは、上に示した外部スクリプトで行われました。この <a href="/ja/docs/Web/API/PaintWorklet">Worklet</a> をメインスクリプトから登録する必要があります。</p>

<pre class="brush: js notranslate">CSS.paintWorklet.addModule('nameOfPaintWorkletFile.js');</pre>

<p>これは、メイン HTML 内の <code>&lt;script&gt;</code> またはドキュメントからリンクされた外部 JavaScript ファイル内の、描画 Worklet の <code>addModule()</code> メソッドを使用して行うことができます。</p>

<p>以下の例では、描画 Worklet は Github でホストしています。</p>

<div id="paintapi">
<pre class="brush: js notranslate">CSS.paintWorklet.addModule('https://mdn.github.io/houdini-examples/cssPaint/intro/01partOne/header-highlight.js');</pre>

<h3 id="Reference_the_paint_worklet_in_CSS" name="Reference_the_paint_worklet_in_CSS">CSSで描画 Worklet を参照する</h3>

<p>登録された描画 Worklet ができたら、それをCSSで使用することができます。他の <code>&lt;image&gt;</code> タイプと同様に CSS の <code>paint()</code> 関数を使用し、 描画 Worklet の <code>registerPaint()</code> 関数でセットしたのと同じ文字列識別子を使用してください。</p>

<pre class="brush: css notranslate">.fancy {
  background-image: paint(headerHighlight);
}</pre>

<h3 id="Putting_it_together" name="Putting_it_together">一緒につかう</h3>

<p>そして、ページ上の任意の要素に fancy クラスを追加して、背景として黄色のボックスを追加することができます。</p>

<pre class="brush: html notranslate">&lt;h1 class="fancy"&gt;My Cool Header&lt;/h1&gt;</pre>

<p>以下の例は、<a href="/ja/docs//Web/API/PaintWorklet#Browser_compatibility">CSS Painting API をサポートしているブラウザー</a>では上の画像のようになります。</p>
</div>

<p>{{EmbedLiveSample("paintapi", 120, 120)}}</p>

<p>ワークレットのスクリプトを弄ることはできませんが、背景画像のサイズと位置を変更するために、<code>background-size</code> と <code>background-position</code> を変更することができます。</p>

<h2 id="PaintSize" name="PaintSize">PaintSize</h2>

<p>上の例では、20×200 の単位のボックスを作成し、要素の上端から 15 単位を塗りつぶしました。これは要素の大きさに関係なく同じです。テキストが小さい場合、黄色のボックスは巨大なアンダーラインのように見えます。文字が大きい場合は、最初の 3 文字の上にバーがあるように見えるかもしれません。 背景画像が要素のサイズと相対的なものであればより良いでしょう — 要素の <code>paintSize</code> プロパティを使用して、背景画像が要素のボックスモデルのサイズに比例するようにすることができます。</p>

<p><img alt="The background is 50% of the height and 60% of the width of the element" src="https://mdn.mozillademos.org/files/16783/mycoolheadersized.png" style="height: 148px; width: 554px;"></p>

<p>上の画像では、背景は要素の大きさに比例しています。3 番目の例では、ブロックレベルの要素に <code>width: 50%</code>; を設定しているため、要素が狭くなり、その結果、背景画像が狭くなります。</p>

<p>これを行うためのコードは次のようになります:</p>

<pre class="brush: js notranslate">registerPaint('headerHighlight', class {

  static get contextOptions() {
           return { alpha: true };
  }

    /*
        <strong>ctx</strong> は 2D 描画コンテキスト
        <strong>size</strong> は paintSize, 描画するボックスの高さ(height)と幅(width)を持つ
    */

  paint(ctx, size) {
        ctx.fillStyle = 'hsla(55, 90%, 60%, 1.0)';
        ctx.fillRect( 0, size.height / 3, size.width * 0.4, size.height * 0.6 );
  }
});</pre>

<p>このコード例は、最初の例とは 2 つの違いがあります:</p>

<ol>
 <li><code>paint()</code> の第 2 引数として描画サイズを使用しています。</li>
 <li>矩形の寸法と位置を、絶対値ではなく、要素ボックスのサイズに相対するように変更しました。</li>
</ol>

<p><code>paint()</code> に第 2 引数を渡すことで、<code>.width</code> と <code>.height</code> プロパティを使って要素の幅と高さにアクセスすることができます。</p>

<p>私たちのヘッダーは、サイズに応じてハイライトが変化するようになりました。</p>

<div class="hidden" id="example2">
<pre class="brush: js notranslate">CSS.paintWorklet.addModule('https://mdn.github.io/houdini-examples/cssPaint/intro/02partTwo/header-highlight.js');</pre>

<pre class="brush: css notranslate">.fancy {
  background-image: paint(headerHighlight);
}
.half {
    width: 50%;
}</pre>

<pre class="brush: html notranslate">&lt;h1 class="fancy"&gt;Largest Header&lt;/h1&gt;
&lt;h6 class="fancy"&gt;Smallest Header&lt;/h6&gt;
&lt;h3 class="fancy half"&gt;50% width header&lt;/h3&gt;
</pre>
</div>

<p>Worklet のスクリプトをいじることはできませんが、要素の <code>font-size</code> と <code>width</code> を変更して背景画像のサイズを変更できます。</p>

<p>以下の例は、CSS Painting API をサポートしているブラウザーでは上の画像のようになります。</p>

<p>{{EmbedLiveSample("example2", 300, 300)}}</p>

<h2 id="Custom_properties" name="Custom_properties">カスタムプロパティ</h2>

<p>Worklet は、要素のサイズにアクセスするだけでなく、CSS のカスタムプロパティや通常のCSS プロパティにもアクセスすることができます。</p>

<pre class="brush: js notranslate">registerPaint('cssPaintFunctionName', class {
     static get inputProperties() { return ['PropertyName1', '--customPropertyName2']; }
     static get inputArguments() { return ['&lt;color&gt;']; }
     static get contextOptions() { return {alpha: true}; }

     paint(drawingContext, elementSize, styleMap) {
         // 描画コードはここに書く
     }
});
</pre>

<p><code>paint()</code> 関数の 3 つの引数には、描画コンテキスト、描画サイズ、プロパティが含まれます。プロパティにアクセスできるようにするために、静的な <code>inputProperties()</code> メソッドをインクルードしています。これは、通常のプロパティや<a href="/ja/docs/Web/CSS/CSS_Variables">カスタムプロパティ</a>を含む CSS プロパティへの動的なアクセスを提供し、プロパティ名の <code><a href="/ja/docs/Glossary/array">array</a></code> を返します。最後に<code>inputArguments</code> について見ていきます。</p>

<h3 id="Example" name="Example">例</h3>

<div id="example3">
<p>3 種類の色と 3 種類の幅の間で周回する背景画像を使って、項目一覧を作成してみましょう。</p>

<p><img alt="The width and color of the background image changes based on the custom properties" src="https://mdn.mozillademos.org/files/16784/boxbg.png" style="height: 255px; width: 739px;"></p>

<p>この CSS では、<code>--boxColor</code> と <code>--widthSubtractor</code> のカスタム プロパティを使用して、作成した背景ボックスの色と幅の減算器を指定しています。</p>

<pre class="brush: html; hidden notranslate">&lt;ul&gt;
    &lt;li&gt;item 1&lt;/li&gt;
    &lt;li&gt;item 2&lt;/li&gt;
    &lt;li&gt;item 3&lt;/li&gt;
    &lt;li&gt;item 4&lt;/li&gt;
    &lt;li&gt;item 5&lt;/li&gt;
    &lt;li&gt;item 6&lt;/li&gt;
    &lt;li&gt;item 7&lt;/li&gt;
    &lt;li&gt;item 8&lt;/li&gt;
    &lt;li&gt;item 9&lt;/li&gt;
    &lt;li&gt;item 10&lt;/li&gt;
    &lt;li&gt;item 11&lt;/li&gt;
    &lt;li&gt;item 12&lt;/li&gt;
    &lt;li&gt;item 13&lt;/li&gt;
    &lt;li&gt;item 14&lt;/li&gt;
    &lt;li&gt;item 15&lt;/li&gt;
    &lt;li&gt;item 16&lt;/li&gt;
    &lt;li&gt;item 17&lt;/li&gt;
    &lt;li&gt;item&lt;/li&gt;
&lt;/ul&gt;
</pre>

<pre class="brush: js; hidden notranslate">CSS.paintWorklet.addModule('https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/boxbg.js');</pre>

<pre class="brush: css notranslate">li {
   background-image: paint(boxbg);
   --boxColor: hsla(55, 90%, 60%, 1.0);
}

li:nth-of-type(3n) {
   --boxColor: hsla(155, 90%, 60%, 1.0);
   --widthSubtractor: 20;
}

li:nth-of-type(3n+1) {
   --boxColor: hsla(255, 90%, 60%, 1.0);
   --widthSubtractor: 40;
}</pre>
</div>

<p>Worklet ではこれらのカスタムプロパティを参照することができます。</p>

<pre class="brush: js notranslate">registerPaint('boxbg', class {

  static get contextOptions() { return {alpha: true}; }

  /*
     この関数を使用して、要素に対して定義されているカスタムプロパティ (または 'height' のような
     通常のプロパティ) を取得します。指定された配列で返します。
  */
  <strong>static get inputProperties() { return ['--boxColor', '--widthSubtractor']; }</strong>

  paint(ctx, size, props) {
    /*
       ctx -&gt; 描画コンテキスト
       size -&gt; paintSize: 幅と高さ
       props -&gt; properties: get() メソッド
    */

    ctx.fillStyle = <strong>props.get('--boxColor')</strong>;
    ctx.fillRect(0, size.height/3, size.width*0.4 - <strong>props.get('--widthSubtractor')</strong>, size.height*0.6);
  }
});</pre>

<p><code>registerPaint()</code> に渡す<span>クラスの <code>inputProperties()</code> メソッドを使用して、<code>boxbg</code> が適用されている要素に設定されている 2 つのカスタムプロパティの値を取得しました。そしてそれらを <code>paint()</code> 関数内で使用します。<code>inputProperties()</code> メソッドは、カスタムプロパティだけでなく、要素に影響するすべてのプロパティを返すことができます。</span></p>

<p><code>&lt;script&gt;</code> 内で Worklet を登録するには以下のようにします:</p>

<div id="paintapi">
<pre class="brush: js notranslate">CSS.paintWorklet.addModule('https://mdn.github.io/houdini-examples/cssPaint/intro/worklet/boxbg.js');</pre>
</div>

<p>{{EmbedLiveSample("example3", 300, 300)}}</p>

<p>Worklet のスクリプトをいじることはできませんが、カスタムプロパティの値を変更して背景画像の色や幅を変更することはできます。</p>

<h2 id="Adding_complexity" name="Adding_complexity">より複雑にしてみる</h2>

<p>これまでの例は、例えば装飾的に<a href="/ja/docs/Learn/CSS/Howto/Generated_content">生成されたコンテンツ</a>を <code><a href="/ja/docs/Web/CSS/::before">::before</a></code> で配置したり、<code>background: linear-gradient(yellow, yellow) 0 15px / 200px 20px no-repeat;</code> とするなど、既存のCSSプロパティを使用する方法で再現することができるので、あまり刺激的には見えないかもしれません。CSS Painting API が面白くて強力なのは、変数を渡して自動的にサイズを変更する複雑な画像を作成できることです。</p>

<p>それではもっと複雑な例を見てみましょう。</p>

<pre class="brush: js notranslate">registerPaint('headerHighlight', class {
  static get inputProperties() { return ['--highColour']; }
  static get contextOptions() { return {alpha: true}; }

  paint(ctx, size, props) {

		/* どの場所からハイライトを始めるか、寸法をセットする */
		const x = 0;
		const y = size.height * 0.3;
		const blockWidth = size.width * 0.33;
		const highlightHeight = size.height * 0.85;
        const color = props.get('--highColour');

		ctx.fillStyle = color;

		ctx.beginPath();
		ctx.moveTo( x, y );
		ctx.lineTo( blockWidth, y );
		ctx.lineTo( blockWidth + highlightHeight, highlightHeight );
		ctx.lineTo( x, highlightHeight );
		ctx.lineTo( x, y );
		ctx.closePath();
		ctx.fill();

		/* 破線を作成 */
		for (let i = 0; i &lt; 4; i++) {
			let start = i * 2;
			ctx.beginPath();
			ctx.moveTo( (blockWidth) + (start * 10) + 10, y );
			ctx.lineTo( (blockWidth) + (start * 10) + 20, y );
			ctx.lineTo( (blockWidth) + (start * 10) + 20 + (highlightHeight), highlightHeight );
			ctx.lineTo( (blockWidth) + (start * 10) + 10 + (highlightHeight), highlightHeight );
			ctx.lineTo( (blockWidth) + (start * 10) + 10, y );
			ctx.closePath();
			ctx.fill();
		}
  } // paint
});</pre>

<div id="example4">
<p>ここで作られる画像を背景とする小さな HTML を用意します:</p>

<pre class="brush: html notranslate">&lt;h1 class="fancy"&gt;Largest Header&lt;/h1&gt;
&lt;h3 class="fancy"&gt;Medium size header&lt;/h3&gt;
&lt;h6 class="fancy"&gt;Smallest Header&lt;/h6&gt;</pre>

<p>それぞれのヘッダーは、それぞれ異なった値の <code>--highColor</code><a href="/ja/docs/Web/CSS/CSS_Variables"> カスタムプロパティ</a>を持つことができます。</p>

<pre class="brush: css notranslate">.fancy {
  background-image: paint(headerHighlight);
}
h1 { --highColour: hsla(155, 90%, 60%, 0.7); }
h3 { --highColour: hsla(255, 90%, 60%, 0.5); }
h6 { --highColour: hsla(355, 90%, 60%, 0.3); }</pre>

<p>そして、Worklet を登録します</p>

<pre class="brush: js notranslate">CSS.paintWorklet.addModule('https://mdn.github.io/houdini-examples/cssPaint/intro/03partThree/header-highlight.js');</pre>

<p>{{EmbedLiveSample("example4", 300, 300)}}</p>

<p>この Worklet そのものを編集することはできませんが、CSS や HTML をいじることはできます。ヘッダーの <code><a href="/ja/docs/Web/CSS/float">float</a></code> と <code><a href="/ja/docs/Web/CSS/clear">clear</a></code> を試してみるのはどうでしょう？</p>

<p>上記の背景画像を CSS paint API を使わずに作ってみるのもいいかもしれません。これは可能ですが、作成したい色ごとに異なる、かなり複雑な線形グラデーションを宣言しなければなりません。CSS paint API を使えば、1 つの Worklet を再利用することができ、その場合でも異なる色を渡すことができます。</p>
</div>

<h2 id="Passing_parameters" name="Passing_parameters">パラメーターを渡す</h2>

<p>CSS Paint API を使用すると、カスタムプロパティや通常のプロパティにアクセスできるだけでなく、カスタム引数を <code>paint()</code> 関数に渡すこともできます。</p>

<p>CSS で関数を呼び出すときに、これらの引数を追加することができます。例えばある時、背景を塗りつぶすのではなく、背景をなぞるようにしたいとしましょう — そのために追加の引数を加えておきましょう。</p>

<pre class="brush: css notranslate">li {
	background-image: paint(hollowHighlights, stroke);
}
</pre>

<p>これで、<code>registerPaint()</code> に渡されるクラスの <code>inputArguments()</code> メソッドを使用して、<code>paint()</code> 関数に追加したカスタム引数にアクセスできるようになりました。</p>

<pre class="brush: js notranslate">static get inputArguments() { return ['*']; }
</pre>

<p>実際にアクセスするにはこうします。</p>

<pre class="brush:js notranslate">paint(ctx, size, props, args) {

	// カスタム引数を使う
	const hasStroke = args[0].toString();

	// stroke 引数が 'stroke' の場合は塗りつぶしはしません
	if (hasStroke === 'stroke') {
		ctx.fillStyle = 'transparent';
		ctx.strokeStyle = colour;
	}
	...
}</pre>

<p>2 つ以上の引数も渡せます。</p>

<pre class="brush: css notranslate">li {
	background-image: paint(hollowHighlights, stroke, 10px);
}
</pre>

<p>また、特定のタイプの引数を指定することもできます。引数の値をリストで <code>get</code> する際に、特に <code>&lt;length&gt;</code> で単位を指定します。</p>

<pre class="brush: js notranslate">static get inputArguments() { return ['*', '&lt;length&gt;']; }</pre>

<p>この場合は <code>&lt;length&gt;</code> 属性を要求しました。返される配列の最初の要素は <code><a href="/ja/docs/Web/API/CSSUnparsedValue">CSSUnparsedValue</a></code> です。2 番目の要素は <code><a href="/ja/docs/Web/API/CSSStyleValue">CSSStyleValue</a></code> です。</p>

<p>カスタム引数がユニットなどの CSS 値である場合、<code>registerPaint()</code> 関数で取得する際にvalue type キーワードを使用することで、Typed OM CSSStyleValue クラス (およびサブクラス) を呼び出すことができます。</p>

<p>それではストロークの幅を何ピクセルにするか、2 番目の引数を追加してみましょう:</p>

<pre class="brush: css notranslate">li {
	background-image: paint(hollowHighlights, stroke, 10px);
}
</pre>

<p>引数の値をリストで <code>get</code> する際に、<code>&lt;length&gt;</code> 単位を要求します。</p>

<pre class="brush: js notranslate">static get inputArguments() { return ['*', '&lt;length&gt;']; }
</pre>

<p>これで型と値のプロパティにアクセスできるようになりました。つまり箱から出してすぐにピクセル数と数値型を取得できるということです。(確かに <code>ctx.lineWidth</code> は、長さの単位を持つ値ではなく float を値として受け取りますが、これは例ですから...)</p>

<pre class="brush: js notranslate">paint(ctx, size, props, args) {

		const strokeWidth = args[1];

		if (strokeWidth.unit === 'px') {
			ctx.lineWidth = strokeWidth.value;
		} else {
			ctx.lineWidth = 1.0;
		}

	...
}
</pre>

<p>この Worklet のさまざまな部分を制御するためにカスタムプロパティを使用することと、ここに記載されている引数との違いに注目する価値があります。カスタムプロパティ (および実際にはスタイルマップ上のすべてのプロパティ) はグローバルなもので、CSS (および JS) 内の他の場所で使用することができます。</p>

<p>例えば <code>paint()</code> 関数内で色を設定するために <code>--mainColor</code><span> を用意するのは便利ですが、</span>これは CSS の他の場所で色を設定するのにも使えます。これを paint のためだけに特別に変更したい場合は、かなり難しいかもしれません。そこで便利なのがカスタム引数です。もう一つの考え方としては、引数は実際に描画するものを制御するために設定され、プロパティはスタイルを制御するために設定されるということです。</p>

<p><img alt="The list items have a background image that is either pink, purple or green, with different stroke widths, and the green one being filled." src="https://mdn.mozillademos.org/files/16786/hollowfilled.png" style="height: 292px; width: 327px;"></p>

<p>これでこの API の本当のメリットが見えてきました。カスタムプロパティと <code>paint()</code> 関数の引数の両方を使って CSS から無数の描画パラメータを制御できるようになれば、再利用可能で制御性の高いスタイリング関数を作り始めることができます。</p>

<pre class="brush: js notranslate">registerPaint('hollowHighlights', class {

  static get inputProperties() { return ['--boxColor']; }
  // `paint` 関数に渡されるカスタム引数
  static get inputArguments() { return ['*','']; }

  static get contextOptions() { return {alpha: true}; }

  paint(ctx, size, props, args) {
    // ctx   -&gt; 描画コンテキスト
    // size  -&gt; 描画したいボックスの大きさ
    // props -&gt; 要素に存在するカスタププロパティのリスト
	// args  -&gt; cssから paint() 関数を呼ばれた際のカスタム引数のリスト

		// どの場所からハイライトを始めるか、寸法
		const x = 0;
		const y = size.height * 0.3;
		const blockWidth = size.width * 0.33;
		const blockHeight = size.height * 0.85;

		// CSS から paint() 関数に渡された値
		const colour = props.get( '--boxColor' );
		const strokeType = args[0].toString();
		const strokeWidth = parseInt(args[1]);


		// 線幅を設定する
		if ( strokeWidth ) {
			ctx.lineWidth = strokeWidth;
		} else {
			ctx.lineWidth = 1.0;
		}
		// 塗りつぶしタイプを設定する
		if ( strokeType === 'stroke' ) {
			ctx.fillStyle = 'transparent';
			ctx.strokeStyle = colour;
		} else if ( strokeType === 'filled' ) {
			ctx.fillStyle = colour;
			ctx.strokeStyle = colour;
		} else {
			ctx.fillStyle = 'none';
			ctx.strokeStyle = 'none';
		}

		// 四角
		ctx.beginPath();
		ctx.moveTo( x, y );
		ctx.lineTo( blockWidth, y );
		ctx.lineTo( blockWidth + blockHeight, blockHeight );
		ctx.lineTo( x, blockHeight );
		ctx.lineTo( x, y );
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		// 破線
		for (let i = 0; i &lt; 4; i++) {
			let start = i * 2;
			ctx.beginPath();
			ctx.moveTo( blockWidth + (start * 10) + 10, y);
			ctx.lineTo( blockWidth + (start * 10) + 20, y);
			ctx.lineTo( blockWidth + (start * 10) + 20 + blockHeight, blockHeight);
			ctx.lineTo( blockWidth + (start * 10) + 10 + blockHeight, blockHeight);
			ctx.lineTo( blockWidth + (start * 10) + 10, y);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
		}

  } // paint
});
</pre>

<p>私たちは、異なる色、線幅を設定し、背景画像が塗りつぶされるべきか、中空になるべきかを選択することができます:</p>

<div id="example5">
<pre class="brush: css notranslate">li {
   --boxColor: hsla(155, 90%, 60%, 0.5);
   background-image: paint(hollowHighlights, stroke, 5px);
}

li:nth-of-type(3n) {
   --boxColor: hsla(255, 90%, 60%, 0.5);
   background-image: paint(hollowHighlights, filled,  3px);
}

li:nth-of-type(3n+1) {
   --boxColor: hsla(355, 90%, 60%, 0.5);
   background-image: paint(hollowHighlights, stroke, 1px);
}</pre>

<pre class="brush: html; hidden notranslate">&lt;ul&gt;
    &lt;li&gt;item 1&lt;/li&gt;
    &lt;li&gt;item 2&lt;/li&gt;
    &lt;li&gt;item 3&lt;/li&gt;
    &lt;li&gt;item 4&lt;/li&gt;
    &lt;li&gt;item 5&lt;/li&gt;
    &lt;li&gt;item 6&lt;/li&gt;
    &lt;li&gt;item 7&lt;/li&gt;
    &lt;li&gt;item 8&lt;/li&gt;
    &lt;li&gt;item 9&lt;/li&gt;
    &lt;li&gt;item 10&lt;/li&gt;
    &lt;li&gt;item 11&lt;/li&gt;
    &lt;li&gt;item 12&lt;/li&gt;
    &lt;li&gt;item 13&lt;/li&gt;
    &lt;li&gt;item 14&lt;/li&gt;
    &lt;li&gt;item 15&lt;/li&gt;
    &lt;li&gt;item 16&lt;/li&gt;
    &lt;li&gt;item 17&lt;/li&gt;
    &lt;li&gt;item&lt;/li&gt;
&lt;/ul&gt;
</pre>

<p>私たちの作った Worklet を登録するには以下のようにします:</p>

<pre class="brush: js notranslate">CSS.paintWorklet.addModule('https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/hollow.js');</pre>
</div>

<p>{{EmbedLiveSample("example5", 300, 300)}}</p>

<h2 id="See_Also" name="See_Also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/CSS_Painting_API">CSS Painting API </a></li>
 <li><a href="/ja/docs/Web/Houdini/CSS_Typed_OM">CSS Typed Object Model API</a></li>
</ul>
