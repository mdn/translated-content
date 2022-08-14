---
title: CSS Painting API
slug: Web/API/CSS_Painting_API
tags:
  - API
  - CSS
  - CSS Paint API
  - Houdini
  - Painting
  - Reference
translation_of: Web/API/CSS_Painting_API
---
<div>{{DefaultAPISidebar("CSS Painting API")}}</div>

<p>CSS Painting API（<a href="/ja/docs/Web/Houdini">CSS Houdini</a> API の傘の一部）を使用すると、開発者は要素の背景、境界線、またはコンテンツに直接描画できる JavaScript 関数を記述できます。</p>

<h2 id="Concepts_and_usage" name="Concepts_and_usage">概念と使用方法</h2>

<p>基本的に、CSS Painting API には、開発者が CSS の <code><a href="/ja/docs/Web/CSS/image">&lt;image&gt;</a></code> の関数である {{cssxref('paint', 'paint()')}} のためのカスタム値を作成できる機能が含まれています。 次に、これらの値を {{cssxref("background-image")}} などのプロパティに適用して、要素に複雑なカスタム背景を設定できます。</p>

<p>例えば、次のようにです。</p>

<pre class="brush: css notranslate">aside {
  background-image: paint(myPaintedImage);
}</pre>

<p>この API は {{domxref('PaintWorklet')}} を定義します。 これは、計算されたスタイルの変更に応じて画像をプログラムで生成するために使用できるワークレット（{{domxref('worklet')}}）です。 これの使用方法の詳細については、<a href="/ja/docs/Web/API/CSS_Painting_API/ガイド">CSS Painting API の使用</a>を参照してください。</p>

<h2 id="Interfaces" name="Interfaces">インターフェイス</h2>

<dl>
 <dt>{{domxref('PaintWorklet')}}</dt>
 <dd>CSS プロパティがファイルを予期している画像をプログラムで生成します。 <a href="/ja/docs/Web/API/CSS/paintWorklet"><code>CSS.paintWorklet</code></a> を介してこのインターフェイスにアクセスします。</dd>
 <dt>{{domxref('PaintWorkletGlobalScope')}}</dt>
 <dd><code>paintWorklet</code> のグローバル実行コンテキスト。</dd>
 <dt>{{domxref('PaintRenderingContext2D')}}</dt>
 <dd>
 <p><a href="/ja/docs/Web/API/CanvasRenderingContext2D">CanvasRenderingContext2D API</a> のサブセットを実装します。 レンダリング先のオブジェクトのサイズである出力ビットマップを持ちます。</p>
 </dd>
 <dt>{{domxref('PaintSize')}}</dt>
 <dd>出力ビットマップの幅と高さの読み取り専用の値を返します。</dd>
</dl>

<h2 id="Dictionaries" name="Dictionaries">ディクショナリ</h2>

<dl>
 <dt>{{domxref('PaintRenderingContext2DSettings')}}</dt>
 <dd><a href="/ja/docs/Web/API/CanvasRenderingContext2D">CanvasRenderingContext2D</a> 設定のサブセットを提供するディクショナリ。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>CSS で JavaScript を使用して要素の背景に直接描画するには、<code><a href="/ja/docs/Web/API/PaintWorklet/registerPaint">registerPaint()</a></code> 関数を使用してペイントワークレットを定義し、paintWorklet の <code>addModule()</code> メソッドを使用してワークレットを含めるようドキュメントに指示し、CSS {{cssxref('paint', 'paint()')}} 関数を使用して作成した画像を含めます。</p>

<p><code><a href="/ja/docs/Web/API/PaintWorklet/registerPaint">registerPaint()</a></code> 関数を使用して、<code>'hollowHighlights'</code> という PaintWorklet を作成します。</p>

<pre class="brush: js notranslate">registerPaint('hollowHighlights', class {

  static get inputProperties() { return ['--boxColor']; }

  static get inputArguments() { return ['*','&lt;length&gt;']; }

  static get contextOptions() { return {alpha: true}; }

  paint(ctx, size, props, args) {
		const x = 0;
		const y = size.height * 0.3;
		const blockWidth = size.width * 0.33;
		const blockHeight = size.height * 0.85;

		const theColor = props.get( '--boxColor' );
		const strokeType = args[0].toString();
		const strokeWidth = parseInt(args[1]);

		console.log(theColor);

		if ( strokeWidth ) {
			ctx.lineWidth = strokeWidth;
		} else {
			ctx.lineWidth = 1.0;
		}

		if ( strokeType === 'stroke' ) {
			ctx.fillStyle = 'transparent';
			ctx.strokeStyle = theColor;
		} else if ( strokeType === 'filled' ) {
			ctx.fillStyle = theColor;
			ctx.strokeStyle = theColor;
		} else {
			ctx.fillStyle = 'none';
			ctx.strokeStyle = 'none';
		}


		ctx.beginPath();
		ctx.moveTo( x, y );
		ctx.lineTo( blockWidth, y );
		ctx.lineTo( blockWidth + blockHeight, blockHeight );
		ctx.lineTo( x, blockHeight );
		ctx.lineTo( x, y );
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

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
  }
});</pre>

<div id="hollowExample">
<p>次に、paintWorklet を含めます。</p>

<pre class="brush: html hidden notranslate">&lt;ul&gt;
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
    &lt;li&gt;item 18&lt;/li&gt;
    &lt;li&gt;item 19&lt;/li&gt;
    &lt;li&gt;item 20&lt;/li&gt;
&lt;/ul&gt;</pre>

<pre class="brush: js notranslate">  CSS.paintWorklet.addModule('https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/hilite.js');
</pre>

<p>次に、CSS の {{cssxref('paint', 'paint()')}} 関数で {{cssxref('&lt;image&gt;')}} を使用できます。</p>

<pre class="brush: css notranslate">li {
   --boxColor: hsla(55, 90%, 60%, 1.0);
   background-image: paint(hollowHighlights, stroke, 2px);
}

li:nth-of-type(3n) {
   --boxColor: hsla(155, 90%, 60%, 1.0);
   background-image: paint(hollowHighlights, filled,  3px);
}

li:nth-of-type(3n+1) {
   --boxColor: hsla(255, 90%, 60%, 1.0);
   background-image: paint(hollowHighlights, stroke, 1px);
}</pre>
</div>

<p>セレクターブロックに boxColor を定義するカスタムプロパティを含めました。 PaintWorklet からカスタムプロパティにアクセスできます。</p>

<p>{{EmbedLiveSample("hollowExample", 300, 300)}}</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('CSS Painting API')}}</td>
   <td>{{Spec2('CSS Painting API')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>各 CSS Painting API インターフェイスのブラウザーの互換性のデータを参照してください。</p>

<h2 id="See_Also" name="See_Also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/CSS_Painting_API/ガイド">CSS Painting API の使用</a></li>
 <li><a href="/ja/docs/Web/CSS_Typed_OM">CSS Typed Object Model API</a></li>
 <li><a href="/ja/docs/Web/Houdini">CSS Houdini</a></li>
</ul>
