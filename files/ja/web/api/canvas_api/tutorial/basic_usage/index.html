---
title: Basic usage of canvas
slug: Web/API/Canvas_API/Tutorial/Basic_usage
translation_of: Web/API/Canvas_API/Tutorial/Basic_usage
original_slug: Web/Guide/HTML/Canvas_tutorial/Basic_usage
---
<div>{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}</div>

<div class="summary">
<p>まずチュートリアルの最初として {{HTMLElement("canvas")}} {{Glossary("HTML")}} 要素を説明します。このページを読めば、canvas 要素に 2D の画像を描けるようになります。</p>
</div>

<h2 id="&lt;canvas>_要素"><code>&lt;canvas&gt;</code> 要素</h2>

<pre class="brush: html">&lt;canvas id="tutorial" width="150" height="150"&gt;&lt;/canvas&gt;
</pre>

<p>{{HTMLElement("canvas")}} は {{HTMLElement("img")}} と似ています。<code>src</code> 属性と <code>alt</code> 属性がない点が明確に異なりますが、{{htmlattrxref("width", "canvas")}} と {{htmlattrxref("height", "canvas")}} の属性がある点などは共通しています。 これらの属性は必ず指定しなければならないものではありません。このほかに様々な {{Glossary("DOM")}} <a href="/ja/docs/Web/API/HTMLCanvasElement">属性</a>を利用できます。 <code>width</code> と <code>height</code> 属性が指定されなかった場合、canvas は幅 <strong>300 ピクセル</strong>、高さ <strong>150 ピクセル</strong>の要素として初期化されます。画面上の大きさは {{Glossary("CSS")}} によって変更できますが、その場合 canvas に描画される画像は CSS の指定に合わせて拡大 / 縮小されます。この際、元の画像のアスペクト比は考慮されないため、指定の仕方によっては画像が歪んで表示されます。</p>

<div class="note">
<p><strong>付記:</strong> 画像が歪んでいると感じた時は、<code>&lt;canvas&gt; </code>の <code>width</code> と <code>height</code> 属性の値を設定して、CSS によるサイズの変更をしないようにしましょう。</p>
</div>

<p><a href="/ja/docs/Web/HTML/Global_attributes/id"><code>id</code></a> 属性は <a href="/ja/docs/Web/HTML/Global_attributes">全ての要素が持つ属性</a> で <code>&lt;canvas&gt;</code> に固有なものではありません。これを利用することで、ユニークな ID を要素に持たせられます。ID を持たせることで、JavaScript の中から、その要素を探すのが簡単になります。</p>

<p><code>&lt;canvas&gt;</code> 要素は通常の画像と同じようにレイアウトされます。({{cssxref("margin")}} や {{cssxref("border")}}、 {{cssxref("background")}} といったルールも利用可能ですが、これらは実際に描画される画像には影響を与えません。スタイルが何も設定されていない場合、canvas は最初透明なものとして描画されます。スタイルとレイアウトに関しては<a href="/ja/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors">専用のページ</a>を設けています。詳細は、そちらをご覧ください。</p>

<div id="section_2">
<h3 id="代替コンテンツ">代替コンテンツ</h3>

<p><code>&lt;canvas&gt;</code> 要素は対応していないブラウザ、例えば Internet Explorer 9 以前、で表示するための代替コンテンツを定義できます。これは {{HTMLElement("img")}} というよりは、むしろ {{HTMLElement("video")}} や {{HTMLElement("audio")}}、{{HTMLElement("picture")}} 要素に似ています。</p>

<p>代替コンテンツの定義方法はシンプルで<code>、&lt;canvas&gt; </code>要素の内部に代わりに表示するコンテンツを記述します。対応していないブラウザは <code>&lt;canvas&gt; </code>を無視するため、その内部のコンテンツが表示されるというわけです。</p>

<p>次の例では JavaScript によって canvas に対して、代替テキストが設定されています：</p>

<pre class="brush: html">&lt;canvas id="stockGraph" width="150" height="150"&gt;
  現在の株価: $3.15 +0.15
&lt;/canvas&gt;

&lt;canvas id="clock" width="150" height="150"&gt;
  &lt;img src="images/clock.png" width="150" height="150" alt=""/&gt;
&lt;/canvas&gt;
</pre>

<p>使用するブラウザを変更するよう利用者に伝えることは、利用者のために全くなりません。どのような代替テキスト / コンテンツを設定するのが適切かは <a href="/ja/docs/Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility">make the canvas more accessible</a> をご覧ください。</p>

<h3 id="&lt;canvas>：閉じタグが必須です"><code>&lt;/canvas&gt;：</code>閉じタグが必須です</h3>

<p>代替コンテンツを内部に持つ関係上、{{HTMLElement("img")}} 要素と異なって {{HTMLElement("canvas")}} 要素は閉じタグ (<code>&lt;/canvas&gt;</code>) が<strong>必須となっています</strong>。タグを閉じなかった場合は、残りのページ全てが代替コンテンツとして処理され、その結果としてそれらが表示されなくなります。</p>

<p>代替コンテンツが必要でない場合は、単に <code>&lt;canvas id="foo" ...&gt;&lt;/canvas&gt;</code> と書けば対応するブラウザで動作します。</p>

<h2 id="描画コンテキスト">描画コンテキスト</h2>

<p>{{HTMLElement("canvas")}} は固定された大きさの描画可能領域を作成できます。この領域は、1 つ以上の<strong>描画コンテキスト</strong>として表現され、そのコンテキストを通じて描画領域を操作します。このチュートリアルでは、2 次元グラフィックスを描画するためのコンテキストについてのみ解説しますが、これ以外の描画コンテキストも存在します。その典型例が <a href="/ja/docs/">WebGL</a> です。これは<a href="http://www.khronos.org/opengles/"> OpenGL ES</a> に基づいた 3 次元グラフィックスを扱える描画コンテキストです。</p>

<p>初期状態での canvas には何も描画されていません。ここに描画を行うには、まず JavaScript で描画コンテキストを取得する必要があります。 {{HTMLElement("canvas")}} 要素の {{domxref("HTMLCanvasElement.getContext", "getContext()")}} を呼ぶことで、描画コンテキストは取得できます。呼び出す際の引数によって、取得されるコンテキストの種類が変わります。<code>"2d" </code>を指定することで、2 次元のグラフィックスを扱える描画コンテキストが取得できます。これで取得されたコンテキストの詳細は {{domxref("CanvasRenderingContext2D")}} をご覧ください。</p>

<pre class="brush: js">var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
</pre>

<p>最初の行では {{domxref("document.getElementById()")}} メソッドを呼んで、DOM 中から {{HTMLElement("canvas")}} 要素をあらわすノードを探しています。2 行目では見つけた要素の <code>getContext()</code> メソッドを呼んで、描画コンテキストを取得しています。</p>

<div id="section_5">
<h2 id="対応しているかどうかの確認">対応しているかどうかの確認</h2>

<p>{{HTMLElement("canvas")}} 要素に対応していないブラウザでは、代替コンテンツが表示されます。JavaScript からは <code>getContext()</code> メソッドの有無を調査することで、ブラウザが対応しているかどうかを確認できます。確認するためのコードは以下のようになります：</p>

<pre class="brush: js">var canvas = document.getElementById('tutorial');

if (canvas.getContext){
  var ctx = canvas.getContext('2d');
  // drawing code here
} else {
  // canvas-unsupported code here
}
</pre>
</div>
</div>

<h2 id="サンプルコード">サンプルコード</h2>

<p>以上の点をまとめたサンプルコードは以下のようになります。このサンプルコードは、後の説明でも利用します。</p>

<div class="note">
<p><strong>付記：</strong>スクリプトを HTML に埋め込むのは、よいやり方ではありません。この例では分かりやすさのために、仕方なく埋め込んでいます。</p>
</div>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"/&gt;
    &lt;title&gt;Canvas tutorial&lt;/title&gt;
    &lt;script type="text/javascript"&gt;
      function draw(){
        var canvas = document.getElementById('tutorial');
        if (canvas.getContext){
          var ctx = canvas.getContext('2d');
        }
      }
    &lt;/script&gt;
    &lt;style type="text/css"&gt;
      canvas { border: 1px solid black; }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body onload="draw();"&gt;
    &lt;canvas id="tutorial" width="150" height="150"&gt;&lt;/canvas&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

<p>スクリプト中の <code>draw()</code> 関数はページのロード完了時に一度だけ呼び出されます。これは、document の {{event("load")}} イベントを利用しているためです。他の関数同様 {{domxref("WindowTimers.setTimeout", "window.setTimeout()")}} や {{domxref("WindowTimers.setInterval", "window.setInterval()")}}、他のイベントハンドラから呼び出すことができますが、今の所ページがロードされた時にのみ呼び出されます。</p>

<p>このサンプルコードでは何も描画されない領域が表示されます。実際の動作は次で確認できます：</p>

<p>{{EmbedLiveSample("サンプルコード", 160, 160)}}</p>

<h2 id="単純な描画">単純な描画</h2>

<p>手始めに単純な例を見てみましょう。次の例では重なり合う 2 つの四角形が描画されます。そのうちの 1 つは透明度が設定されており、下の色が透けて見えます。この例がどのように動作しているかは、次のページで解説します。</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
 &lt;head&gt;
  &lt;meta charset="utf-8"/&gt;
  &lt;script type="application/javascript"&gt;
    function draw() {
      var canvas = document.getElementById("canvas");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (10, 10, 50, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 30, 50, 50);
      }
    }
  &lt;/script&gt;
 &lt;/head&gt;
 &lt;body onload="draw();"&gt;
   &lt;canvas id="canvas" width="150" height="150"&gt;&lt;/canvas&gt;
 &lt;/body&gt;
&lt;/html&gt;
</pre>

<p>この例は次のように動作します：</p>

<p>{{EmbedLiveSample("単純な描画", 160, 160, "https://mdn.mozillademos.org/files/228/canvas_ex1.png")}}</p>

<p>{{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}</p>
