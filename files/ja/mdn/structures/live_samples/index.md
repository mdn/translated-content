---
title: ライブサンプル
slug: MDN/Structures/Live_samples
tags:
  - Guide
  - Intermediate
  - MDN Meta
  - Structures
  - ガイド
translation_of: MDN/Structures/Live_samples
---
<div>{{MDNSidebar}}</div>

<p><span class="seoSummary">MDN は、記事に表示されているサンプルコードを、実際に見ている実行可能なサンプルに変換することをサポートしています。これらのライブサンプルには、HTML、CSS、JavaScript を任意の組み合わせで含めることができます。</span>「ライブ」サンプルは<em>インタラクティブではありません</em>。ただし、実際にコードサンプルによって生成されるため、サンプルの表示出力はサンプルのコードと正確に一致します。</p>

<h2 id="How_does_the_live_sample_system_work">ライブサンプルシステムの仕組み</h2>

<p>ライブサンプルシステムは、グループ内のすべてのコードを集め、1 つの HTML ファイルにマージし、その HTML を {{HTMLElement("iframe")}} にレンダリングします。このためライブサンプルは 2 つの部分で構成されています。</p>

<ul>
 <li>コードブロックのグループ</li>
 <li>コードブロックの結果を表示する (フレームまたはリンクを作成する) マクロ</li>
</ul>

<p>このコンテキストでは、コードブロックの「グループ」は、見出しまたはブロック要素 ({{HTMLElement("div")}} など) の ID によって識別されます。</p>

<ul>
 <li>ID がブロック要素に属する場合、そのグループは、その ID が使用される囲むブロック要素内のすべてのコードブロックを含む。</li>
 <li>ID が見出しに属する場合、その見出しの後ろで同じ見出しレベルの次の見出しの前にあるすべてのコードブロックがグループに含まれます。指定された見出しの小見出しのコードブロックはすべて使用されていることに注意してください。これが望ましい効果でない場合は、代わりにブロック要素に ID を使用してください。</li>
</ul>

<p>このマクロは特別な URL を使用して、指定されたグループのサンプルコード、例えば <code>https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/CSS/animation/_samples_/Cylon_Eye</code> を取得します。一般的な構造は <code>https://<em>url-of-page</em>_samples/<em>group-id</em></code> で、 <code>group-id</code> はコードが配置されている見出しまたはブロックの ID です。</p>

<p>結果として得られるフレーム (またはページ) はサンドボックスで保護されており、技術的にはウェブ上で動作するものすべてを行う可能性があります。もちろん、実際の問題として、そのコードがそのページの要点に貢献していなければなりません。無関係なものが MDN 上で実行されている場合は、編集者コミュニティが削除します。</p>

<div class="note notecard">
<p><strong>注:</strong> ライブサンプルの出力を表示するには、マクロを使用する<strong>必要があります</strong>。</p>
</div>

<p>サンプルのコードを含む各 {{HTMLElement("pre")}} ブロックには、HTML、CSS、または JavaScript コードのいずれかを示すクラスがあり、それぞれ "brush: html"、"brush: css"、"brush: js" です。これらのクラスは、対応するコードブロック上になければなりません。</p>

<p>ライブサンプルシステムにはたくさんのオプションが用意されていますが、それらを少しずつ分解して見ていきたいと思います。</p>

<h3 id="Live_sample_macros">ライブサンプルのマクロ</h3>

<p>ライブサンプルを表示するために使用できるマクロは 2 つあります。</p>

<ul>
 <li><code><a href="https://github.com/mdn/yari/blob/master/kumascript/macros/EmbedLiveSample.ejs">EmbedLiveSample</a></code> はライブサンプルをページに埋め込みます。</li>
 <li><code><a href="https://github.com/mdn/yari/blob/master/kumascript/macros/LiveSampleLink.ejs">LiveSampleLink</a></code> はライブサンプルを新しいページに開くリンクを作成します。</li>
</ul>

<p>多くの場合、<code>EmbedLiveSample</code> マクロや <code>LiveSampleLink</code> マクロは、追加の作業をほぼ全くすることなくページに追加することができます。サンプルが見出しの ID で識別されるか、ID を持つブロックに含まれていれば、マクロを追加するだけでその作業が行われるはずです。</p>

<h4 id="EmbedLiveSample_macro">EmbedLiveSample マクロ</h4>

<pre class="brush: js"> \{{EmbedLiveSample(<em>block_ID</em>, <em>width</em>, <em>height</em>, <em>screenshot_URL</em>, <em>page_slug</em>)}}</pre>

<dl>
 <dt>block_ID</dt>
 <dd>必須: コードを描画する見出しまたは囲みブロックの ID。適切な ID であるかどうかを確認する最善の方法は、ページの目次でそのセクションの URL を見ることです。ページのソースを見ることで確認することもできます。</dd>
 <dt>width</dt>
 <dd>作成する {{HTMLElement("iframe")}} の幅で、<code>px</code> で指定します。これは省略可能で、省略すると合理的な既定の幅が使用されます。特定の幅を使用する場合は、height 引数も指定する<em>必要があります</em>。</dd>
 <dt>height</dt>
 <dd>作成する {{HTMLElement("iframe")}} の高さで、<code>px</code> で指定します。これは省略可能で、省略すると合理的な既定の高さが使用されます。特定の高さを使用する場合は、width 引数も指定する<em>必要があります</em>。どちらか一方しか使用しない場合は、既定のフレームサイズが使用されます。</dd>
 <dt>screenshot_URL</dt>
 <dd>ライブサンプルの外観を示すスクリーンショットの URL。これは省略可能ですが、新しい技術が動作しないユーザーのブラウザーではサンプルがブラウザーでサポートされている場合の様子を確認できるので有用です。この引数を含めると、ライブサンプルの横に、適切な見出し付きのスクリーンショットが表示されます。</dd>
 <dt>page_slug</dt>
 <dd>
   <p>サンプルが入っているページのスラッグです。これは省略可能で、指定されていない場合、サンプルはマクロが使用されたのと同じページから取得されます。</p>
   <div class="notecard warning">
   <strong>警告:</strong> あるコードを含むページのライブサンプルを別のターゲットページに表示するには、コードを含むページ自身が <span class="templateLink"><code><a href="https://github.com/mdn/kumascript/blob/master/macros/EmbedLiveSample.ejs">EmbedLiveSample</a></code></span> マクロを使用して、そのページにライブサンプルを埋め込まなければなりません。そうしないと、コードを含むページが自身のページで <span class="templateLink"><code><a href="https://github.com/mdn/kumascript/blob/master/macros/EmbedLiveSample.ejs">EmbedLiveSample</a></code></span> マクロを使用していない場合、ライブサンプルはターゲットページに全く表示されません。 (<a href="https://github.com/mdn/yari/issues/2243">Yari issue #2243</a>を参照してください。)
   </div>
 </dd>
</dl>

<h4 id="LiveSampleLink_macro">LiveSampleLink マクロ</h4>

<pre class="brush: js"> \{{LiveSampleLink(<em>block_ID</em>, <em>link_text</em>)}}</pre>

<dl>
 <dt>block_ID</dt>
 <dd>コードの引用元となる見出しまたは囲みブロックの ID。正しい ID であるかどうかを確認する最善の方法は、ページの目次でそのセクションの URL を見ることです。ページのソースを見ることで確認することもできます。</dd>
 <dt>link_text</dt>
 <dd>リンクテキストとして使用する文字列。</dd>
</dl>

<h2 id="Using_the_live_sample_system">ライブサンプルシステムを使用する</h2>

<p>以下のセクションでは、ライブサンプルシステムの一般的な使用例をいくつか説明します。</p>

<h3 id="Turning_snippets_into_live_samples">スニペットをライブサンプルにする</h3>

<p>よく使用されるケースの 1 つは、既に MDN に表示されている既存のコードスニペットを実際のサンプルに変換することです。</p>

<h4 id="Prepare_the_code_samples">コードサンプルを準備する</h4>

<p>最初のステップでは、コードスニペットを追加するか、既存のサンプルをコンテンツやマークアップの観点からライブサンプルとして使用できるようにします。コードスニペットは、まとめて実行可能な完全な例を構成する必要があります。たとえば、既存のスニペットに CSS のみが表示されている場合は、CSS が操作する HTML のスニペットを追加する必要があります。</p>

<p>それぞれのコードは {{HTMLElement("pre")}} ブロックにあり、各ブロックはブロックごとに言語ごとに適切にマークされていなければなりません。ほとんどの場合、これは既に行われていますが、コードの各部分が正しい構文で構成されていることを確認することは、常に二重チェックしておく価値があります。これは、 <code>&lt;pre&gt;</code> 要素の <code>brush:<em>language-type</em></code> というクラスで行います。 <em>language-type</em> は、ブロックに含まれる言語の種類で、 <code>html</code>、<code>css</code>、<code>js</code> などがあります。</p>

<div class="note notecard">
<p><strong>注</strong>: 言語ごとに複数のブロックを設置することができます。その場合はすべて連結されます。これによって、コードの塊を置き、その後でその動作の説明を置き、さらに別な塊を置くというようなことができます。これにより、ライブサンプルと説明文を組み合わせたチュートリアルなどを簡単に作成することができます。</p>
</div>

<p>HTML、CSS、JavaScript コードの {{HTMLElement("pre")}} ブロックがそれぞれの言語の構文強調表示に対して正しく設定されていることを確認してください。</p>

<h2 id="Live_sample_demo">ライブサンプルのデモ</h2>

<p>このセクションは、ライブサンプルテンプレートボタンを使用してメイン見出し (「ライブサンプルデモ」) だけでなく、HTML、CSS、および JavaScript コンテンツのサブ見出しも作成した結果です。それぞれのブロックに限定されませんし、さらに、特定の順序である必要はありません。</p>

<p>削除したいものを削除することもできます。スクリプトが必要ない場合は、その見出しとその {{HTMLElement("pre")}} ブロックを削除してください。コードブロック (HTML、CSS、または JavaScript) の見出しは、ライブサンプルマクロでは使用されないため、削除することもできます。</p>

<p>テンプレートが挿入されたので、いくつかのコード、さらには説明テキストを挿入することができます。</p>

<h3 id="HTML">HTML</h3>

<p>この HTML は、メッセージの配置とスタイルに役立つ段落とブロックを作成します。</p>

<pre class="brush: html">&lt;p&gt;A simple example of the live sample system in action.&lt;/p&gt;
&lt;div class="box"&gt;
  &lt;div id="item"&gt;Hello world! Welcome to MDN&lt;/div&gt;
&lt;/div&gt;
</pre>

<h3 id="CSS">CSS</h3>

<p>CSS コードは、ボックスとその内部のテキストのスタイルを設定します。</p>

<pre class="brush: css">.box {
  width: 200px;
  border-radius: 6px;
  padding: 20px;
  background-color: #ffaabb;
}

#item {
  font-weight: bold;
  text-align: center;
  font-family: sans-serif;
  font-size: 1.5em;
}
</pre>

<h3 id="JavaScript">JavaScript</h3>

<p>このコードはとても簡単です。クリックすると警告が表示されるテキスト「Hello world!」にイベントハンドラーをアタッチするだけです。</p>

<pre class="brush: js">var el = document.getElementById('item');
el.onclick = function() {
  alert('Owww, stop poking me!');
}
</pre>

<h3 id="結果">結果</h3>

<p>下記は <code>\{{EmbedLiveSample('Live_sample_demo')}}</code> を通じて、上のコードブロックを実行した結果です。</p>

<p>{{EmbedLiveSample('Live_sample_demo')}}</p>

<p>下記は <code>\{{LiveSampleLink('Live_sample_demo', 'ライブサンプルデモへのリンク')}}</code> を通じて、これらのコードブロックを経由して呼び出される結果のリンクです。</p>

<p>{{LiveSampleLink('Live_sample_demo', 'ライブサンプルデモへのリンク')}}</p>

<h2 id="Conventions_regarding_live_samples">ライブサンプルに関する取り決め</h2>

<dl>
 <dt>コードブロックの順序</dt>
 <dd>ライブサンプルを追加する場合、コードブロックは最初のものがこのサンプルのメイン言語に対応するようにソートする必要があります。たとえば、HTML リファレンスのライブサンプルを追加する場合、最初のブロックは HTML でなければならず、CSS リファレンスのライブサンプルを追加するときは CSS でなければなりません。</dd>
 <dt>見出しの名前付け</dt>
 <dd>曖昧さがない場合 (例: サンプルが「Examples」セクションの下にある場合)、見出しは対応する言語の唯一の名前である HTML、CSS、JavaScript、SVG など (上記参照) で直接的に表します。「HTML コンテンツ」や「JavaScript コンテンツ」のような見出しは使用しないでください。しかし、そのような短い見出しがコンテンツを不明瞭にする場合、より思慮深いタイトルを使用することができます。</dd>
 <dt>「結果」ブロックを使用する</dt>
 <dd>異なるコードブロックの後、<code>EmbedLiveSample</code> マクロを使用する直前に、「結果」ブロックを使用してください (上記参照)。このようにすると、この例の意味は、読者とページを解析するツール (画面リーダー、ウェブクローラーなど) の両方にとってより明確になります。</dd>
</dl>
