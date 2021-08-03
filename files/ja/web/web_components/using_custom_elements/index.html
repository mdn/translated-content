---
title: Using custom elements
slug: Web/Web_Components/Using_custom_elements
tags:
  - Classes
  - Guide
  - HTML
  - Web Components
  - autonomous
  - custom elements
  - customized
translation_of: Web/Web_Components/Using_custom_elements
---
<div>{{DefaultAPISidebar("Web Components")}}</div>

<p class="summary">Webコンポーネント標準の重要な特徴の一つはカスタム要素を作れることです。それはページの機能を提供する長くネストした要素のバッチではなく、HTMLページ上で機能をカプセル化します。<br>
 この記事はカスタム要素APIの使い方を紹介します。</p>

<div class="note">
<p><strong>注</strong>: カスタム要素をデフォルトでサポートするのは Firefox, Chrome, と Edge (76)です。Opera と Safari は今のところ、自律カスタム要素のみサポートしています。</p>
</div>

<h2 id="High-level_view" name="High-level_view">High-level view</h2>

<p>Webドキュメント上でカスタム要素をコントロールするのは {{domxref("CustomElementRegistry")}} オブジェクトです。 — このオブジェクトはページへのカスタム要素を登録したり、どんなカスタム要素が登録されているのかを返すなどの操作を行えます。</p>

<p>ページにカスタム要素を登録するには,  {{domxref("CustomElementRegistry.define()")}} メソッドを使います。次の引数を取ることができます:</p>

<ul>
 <li>エレメントの名前を表す {{domxref("DOMString")}} 。 カスタム要素の名前には <a href="https://stackoverflow.com/questions/22545621/do-custom-elements-require-a-dash-in-their-name">ダッシュを使う必要があります。</a>; 一つの単語の名前をつけられません。</li>
 <li>要素の振る舞いを定義した <a href="/ja/docs/Web/JavaScript/Reference/Classes">クラス</a> オブジェクト。</li>
 <li>オプションで, <code>extends</code>属性を含むオプションオブジェクト。組み込み要素をを継承する場合にはそれを指定します。</li>
</ul>

<p>例えば、次の様に <a href="https://mdn.github.io/web-components-examples/word-count-web-component/">word-count 要素</a> を定義できます:</p>

<pre class="brush: js">customElements.define('word-count', WordCount, { extends: 'p' });</pre>

<p><code>word-count</code>要素は <code>WordCount</code>クラスのオブジェクトで {{htmlelement("p")}}要素を拡張します。</p>

<p>カスタム要素のクラスオブジェクトは ES 2015 のクラスシンタックスで実装します。例えば、<code>WordCount</code> 次の様になります:</p>

<pre class="brush: js">class WordCount extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Element functionality written in here

    ...
  }
}</pre>

<p>これはごく簡単な例ですが、ここでできることはもっとあります。クラスの中でライフサイクルコールバックを定義することができ、要素のライフサイクルの特定のポイントで実行されます。例えば、<code>connectedCallback</code> はドキュメント接続要素にカスタム要素が追加されるたびに実行されます。一方 <code>attributeChangedCallback</code> はカスタム要素に属性が追加、削除、変更される時に実行されます。</p>

<p>{{anch("Using the lifecycle callbacks")}} でこれらについてもっと学ぶことができます。.</p>

<p>カスタム要素には2つのタイプがあります:</p>

<ul>
 <li>スタンドアロンの<strong>自律カスタム要素</strong> — 標準のHTML要素を継承していません。文字通りHTML要素としてページで使います。例えば、<code>&lt;popup-info&gt;</code> あるいは <code>document.createElement("popup-info")</code>の様に。</li>
 <li>基礎とするHTML要素を継承する<strong>カスタマイズされた組み込み要素</strong>。 これらを作るために、どの要素を拡張するのかを（上の例で示したように）指定します。そして、 基本要素を書き出して使いますが、 {{htmlattrxref("is")}}属性 (またはプロパティ)でカスタム要素の名前を指定します。. 例えば、<code>&lt;p is="word-count"&gt;<font face="Arial, x-locale-body, sans-serif"><span style="background-color: #ffffff;"> あるいは</span></font></code><code>document.createElement("p", { is: "word-count" })</code>の様に。</li>
</ul>

<h2 id="Working_through_some_simple_examples" name="Working_through_some_simple_examples">簡単な例と実践</h2>

<p>ここで、どのようにカスタム要素をを作るのかを詳細に説明するために簡単な例を見てみましょう。</p>

<h3 id="Autonomous_custom_elements" name="Autonomous_custom_elements">自律カスタム要素</h3>

<p>自律カスタム要素の例を見てみましょう — <code><a href="https://github.com/mdn/web-components-examples/tree/master/popup-info-box-web-component">&lt;popup-info-box&gt;</a></code> ( <a href="https://mdn.github.io/web-components-examples/popup-info-box-web-component/">実例</a>参照). これは画像とテキストを受け取り、ページにアイコンを埋め込みます。アイコンにフォーカスすると、ポップアップする情報ボックスにテキストを表示してコンテキスト内の情報を更に提供します。</p>

<p>最初に{{domxref("HTMLElement")}}を継承して <code>PopUpInfo</code>,というクラスを定義します。 自律カスタム要素はほぼいつも <code>HTMLElement</code>を継承します。</p>

<pre class="brush: js">class PopUpInfo extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // write element functionality in here

    ...
  }
}</pre>

<p>前述のコードスニペットはクラスの <code><a href="/ja/docs/Web/JavaScript/Reference/Classes/constructor">constructor()</a></code> の定義を含んでおり、常に <code><a href="/ja/docs/Web/JavaScript/Reference/Operators/super">super()</a></code> を最初に呼び出します。これにより正しいプロタイプチェーンが確立されます。</p>

<p>コンストラクタ内で、インスタンス化された時に要素が持っているすべての機能を定義します。この例ではカスタム要素にshadowルートをアタッチしています。DOM操作を行い、要素内部の shadow DOM構造を作ります。—DOM構造はshadowルートにアタッチされます— そして最後にスタイルを適用するためにCSSをshadowルートにアタッチします。</p>

<pre class="brush: js">// Create a shadow root
var shadow = this.attachShadow({mode: 'open'});

// Create spans
var wrapper = document.createElement('span');
wrapper.setAttribute('class','wrapper');
var icon = document.createElement('span');
icon.setAttribute('class','icon');
icon.setAttribute('tabindex', 0);
var info = document.createElement('span');
info.setAttribute('class','info');

// Take attribute content and put it inside the info span
var text = this.getAttribute('text');
info.textContent = text;

// Insert icon
var imgUrl;
if(this.hasAttribute('img')) {
  imgUrl = this.getAttribute('img');
} else {
  imgUrl = 'img/default.png';
}
var img = document.createElement('img');
img.src = imgUrl;
icon.appendChild(img);

// Create some CSS to apply to the shadow dom
var style = document.createElement('style');

style.textContent = '.wrapper {' +
// CSS truncated for brevity

// attach the created elements to the shadow dom

shadow.appendChild(style);
shadow.appendChild(wrapper);
wrapper.appendChild(icon);
wrapper.appendChild(info);</pre>

<p>最後に、カスタム要素を <code>CustomElementRegistry</code> に登録します。前述の <code>define()</code> を使用して、パラメーターで要素名とその機能を定義するクラス名を指定します:</p>

<pre class="brush: js">customElements.define('popup-info', PopUpInfo);</pre>

<p>これによってページで使えるようになりました。HTML中で下記のように使用することができます。</p>

<pre class="brush: html">&lt;popup-info img="img/alt.png" text="Your card validation code (CVC)
  is an extra security feature — it is the last 3 or 4 numbers on the
  back of your card."&gt;&lt;/popup-info&gt;</pre>

<div class="note">
<p><strong>注</strong>: こちらで <a href="https://github.com/mdn/web-components-examples/blob/master/popup-info-box-web-component/main.js">完全なソースコード</a> を見ることができます。</p>
</div>

<div class="blockIndicator note">
<p><strong>注</strong>: カスタム要素が機能するためには、DOMの解析を終えた後にカスタム要素を登録するスクリプトが読み込まれる必要があることに注意してください。これは <code>&lt;script&gt;</code> 要素を <code>&lt;body&gt;</code> 要素内の最下部に配置する、または <code>&lt;script&gt;</code> 要素に <code>defer</code> 属性を加えることで解決します。</p>
</div>

<h3 id="Customized_built-in_elements" name="Customized_built-in_elements">内部スタイル 対 外部スタイル</h3>

<p>上記の例では {{htmlelement("style")}} 要素を用いてShadow DOMにスタイルを適用しました。しかし、{{htmlelement("link")}} 要素から外部のスタイルシートを参照することも可能です。</p>

<p>例えば、<a href="https://mdn.github.io/web-components-examples/popup-info-box-external-stylesheet/">popup-info-box-external-stylesheet</a> のコードを少し見てみましょう（<a href="https://github.com/mdn/web-components-examples/blob/master/popup-info-box-external-stylesheet/main.js">ソースコード</a>）。</p>

<pre class="brush: js">// Apply external styles to the shadow dom
const linkElem = document.createElement('link');
linkElem.setAttribute('rel', 'stylesheet');
linkElem.setAttribute('href', 'style.css');

// Attach the created element to the shadow dom
shadow.appendChild(linkElem);
</pre>

<p>この手法が特に大規模なスタイルシートで推奨されます。これによって、綺麗で、より共有しやすい効率の良いコードになります。</p>

<h3 id="Customized_built-in_elements" name="Customized_built-in_elements">カスタマイズされたビルトイン要素</h3>

<p>ここで、もう1つのビルトイン要素の例を見てみましょう — <a href="https://github.com/mdn/web-components-examples/tree/master/expanding-list-web-component">expanding-list</a> (<a href="https://mdn.github.io/web-components-examples/expanding-list-web-component/">デモはこちら</a>) 。 これにより番号なしリストが展開・縮小するメニューになります。<br>
 <br>
 まず始めに、これまでと同様の規則でクラス要素を定義します。</p>

<pre class="brush: js">class ExpandingList extends HTMLUListElement {
  constructor() {
    // Always call super first in constructor
    super();

    // write element functionality in here

    ...
  }
}</pre>

<p>ここでは要素の詳細な機能については説明しませんが、ソースコードからどのように動作するのかチェックすることができます。これまでと唯一違う点は {{domxref("HTMLElement")}} ではなく、 {{domxref("HTMLUListElement")}} インターフェースを拡張していることです。そのため、独立した要素ではなく、 {{htmlelement("ul")}} 要素の特徴を備えた上に、私たちが定義した機能を持っています。これこそが自律カスタム要素ではなくカスタマイズされたビルトイン要素である理由です。<br>
 <br>
 次に、以前と同様に <code>define()</code> を用いて要素を登録するのですが、今回はこのカスタム要素がどの要素から継承したのかという情報をオプションとして渡しています。</p>

<pre class="brush: js">customElements.define('expanding-list', ExpandingList, { extends: "ul" });</pre>

<p>Webドキュメント内でビルトイン要素を使用する場合とはやや異なります。</p>

<pre class="brush: html">&lt;ul is="expanding-list"&gt;

  ...

&lt;/ul&gt;</pre>

<p>通常のように <code>&lt;ul&gt;</code> を使用していますが、カスタム要素の名前が <code>is</code> 属性で指定されています。</p>

<div class="note">
<p><strong>注</strong>: もう一度述べますが、こちらで <a href="https://github.com/mdn/web-components-examples/blob/master/popup-info-box-web-component/main.js">完全なソースコード</a> を見ることができます。</p>
</div>

<h2 id="Using_the_lifecycle_callbacks" name="Using_the_lifecycle_callbacks">ライフサイクルコールバックの使用</h2>

<p>カスタム要素のクラス定義内にいくつかの異なるコールバックを定義できます。これらのコールバックは、要素のライフサイクルのさまざまな時点で起動します。</p>

<ul>
 <li><code>connectedCallback</code>: カスタム要素がドキュメントに接続された要素に追加されるたびに呼び出されます。これは、ノードが移動されるたびに発生し、要素のコンテンツが完全に解析される前に発生する場合があります。
  <div class="note">
  <p><strong>注</strong>: エレメントが接続されなくなったら<code>connectedCallback</code> を呼び出すことができます,  {{domxref("Node.isConnected")}} を使用して確認してください.</p>
  </div>
 </li>
 <li><code>disconnectedCallback</code>: カスタム要素がドキュメントのDOMから切断されるたびに呼び出されます。</li>
 <li><code>adoptedCallback</code>: カスタム要素が新しいドキュメントに移動するたびに呼び出されます。</li>
 <li><code>attributeChangedCallback</code>: カスタム要素の属性の1つが追加、削除、または変更されるたびに呼び出されます。変更を通知する属性は、 <code>static get observedAttributes()</code> メソッドで指定されます</li>
</ul>

<p>使用中のこれらの例を見てみましょう。以下のコードは、<a href="https://github.com/mdn/web-components-examples/tree/master/life-cycle-callbacks">ライフサイクルコールバック</a>の例から取ったものです（<a href="https://mdn.github.io/web-components-examples/life-cycle-callbacks/">ライブ実行を参照</a>）。これは、ページ上に固定サイズの色付きの正方形を生成する単純な例です。カスタム要素は次のようになります。</p>

<pre class="brush: html">&lt;custom-square l="100" c="red"&gt;&lt;/custom-square&gt;</pre>

<p>クラスコンストラクターは非常に単純です。ここでは、要素にシャドウDOMをアタッチし、空の{{htmlelement("div")}} および{{htmlelement("style")}} 要素をシャドウルートにアタッチします:</p>

<pre class="brush: js">var shadow = this.attachShadow({mode: 'open'});

var div = document.createElement('div');
var style = document.createElement('style');
shadow.appendChild(style);
shadow.appendChild(div);</pre>

<p>この例の主要な機能は<code>updateStyle（）</code>です。これは要素を取得し、シャドウルートを取得し、その<code>&lt;style&gt;</code>要素を見つけて、{{cssxref("width")}}, {{cssxref("height")}}, および{{cssxref("background-color")}} をスタイルに追加します。</p>

<pre class="brush: js">function updateStyle(elem) {
  const shadow = elem.shadowRoot;
  shadow.querySelector('style').textContent = `
    div {
      width: ${elem.getAttribute('l')}px;
      height: ${elem.getAttribute('l')}px;
      background-color: ${elem.getAttribute('c')};
    }
  `;
}</pre>

<p>実際の更新はすべて、メソッドとしてクラス定義内に配置されるライフサイクルコールバックによって処理されます。 <code>connectedCallback（）</code>は、要素がDOMに追加されるたびに実行されます。ここでは、<code>updateStyle（）</code>関数を実行して、正方形がその属性で定義されたスタイルになっていることを確認します。</p>

<pre class="brush: js">connectedCallback() {
  console.log('Custom square element added to page.');
  updateStyle(this);
}</pre>

<p><code>disconnectCallback（）</code>および<code>adoptedCallback()</code> コールバックは、要素がDOMから削除されるか、別のページに移動されたときに通知する単純なメッセージをコンソールに記録します。</p>

<pre class="brush: js">disconnectedCallback() {
  console.log('Custom square element removed from page.');
}

adoptedCallback() {
  console.log('Custom square element moved to new page.');
}</pre>

<p><code>attributeChangedCallback（）</code>コールバックは、要素の属性の1つが何らかの方法で変更されるたびに実行されます。そのプロパティからわかるように、属性、属性の名前、および古い属性値と新しい属性値を個別に操作することができます。ただし、この場合は、<code>updateStyle（）</code>関数を再度実行して、新しい値に従って正方形のスタイルが更新されるようにします。</p>

<pre class="brush: js">attributeChangedCallback(name, oldValue, newValue) {
  console.log('Custom square element attributes changed.');
  updateStyle(this);
}</pre>

<p>属性が変更されたときに起動する<code>attributeChangedCallback（）</code>コールバックを取得するには、属性を監視する必要があることに注意してください。これは、カスタム要素クラス内で<code>static get observedAttributes()</code>メソッドを指定することによって行われます-これは、監視したい属性の名前を含む配列を返します:</p>

<pre class="brush: js">static get observedAttributes() { return ['c', 'l']; }</pre>

<p>この例では、これはコンストラクターの最上部に配置されています。</p>

<div class="note">
<p><strong>注</strong>: ここで<a href="https://github.com/mdn/web-components-examples/blob/master/life-cycle-callbacks/main.js">完全なJavaScriptソース</a>を検索してください。</p>
</div>

<h2 id="Polyfills_versus_classes" name="Polyfills_versus_classes">ポリフィル 対 クラス</h2>

<p>カスタム要素のポリフィルは <code>HTMLElement</code> などのネイティブのコンストラクタに対してパッチを当てることで、単にネイティブのコンストラクタが作成したものとは異なるインスタンスを返すことがあります。<br>
 <br>
 もし <code>constructor</code> や強制的に <code>super</code> を呼び出す必要があるなら、任意の引数を渡して <code>super</code> を呼び出した結果を返すことを忘れないでください。</p>

<pre class="brush: js">class CustomElement extends HTMLElement {
  constructor(...args) {
    const self = super(...args);
    // self functionality written in here
    // self.addEventListener(...)
    // return the right context
    return self;
  }
}</pre>

<p>もしコンストラクタ内で何も処理が必要ないならば、単に省略することでネイティブの挙動を維持できます。</p>

<pre class="brush: js"> constructor(...args) { return super(...args); }
</pre>

<h2 id="Transpilers_versus_classes" name="Transpilers_versus_classes">トランスパイラ 対 クラス</h2>

<p>レガシーなブラウザをターゲットとしたBabel 6またはTypeScriptでは、ES2015のクラス構文は期待通りにトランスパイルされない可能性があることに注意してください。Babel 7もしくはBabel 6の <a href="https://www.npmjs.com/package/babel-plugin-transform-builtin-classes">babel-plugin-transform-builtin-classes</a>を使用して、レガシーなブラウザではなくくTypeScriptでES2015をターゲットとすることができます。</p>

<h2 id="Libraries" name="Libraries">ライブラリ</h2>

<p>カスタム要素を作る際に抽象度を高めることを目的とした、Web Componentsで実装されたライブラリがあります。その内のいくつかを挙げます。<a href="https://github.com/devpunks/snuggsi" rel="nofollow">snuggsi</a>、<a href="https://x-tag.github.io/" rel="nofollow">X-Tag</a>、<a href="http://slimjs.com/" rel="nofollow">Slim.js</a>、<a href="https://lit-element.polymer-project.org/">LitElement</a>、<a href="https://www.htmlelements.com/">Smart</a>、<a href="https://stenciljs.com">Stencil</a>。</p>
