---
title: shadow DOM の使い方
slug: Web/Web_Components/Using_shadow_DOM
translation_of: Web/Web_Components/Using_shadow_DOM
---
<div> {{DefaultAPISidebar("Web Components")}}</div>

<p class="summary">Web コンポーネントにおいてカプセル化 (構造やスタイル、挙動を隠し、同じページの他のコードと分離すること) は重要です。これにより他の場所でのクラッシュを防ぎ、またコードが綺麗になります。Shadow DOM API はこの隠され分離された DOM を付加するための方法を提供しています。この記事では Shadow DOM を使う基本を記述しています。</p>

<div class="note">
<p><strong>Note</strong>: Shadow DOM は Firefox (version 63以降)、Chrome、Opera、そして Safari でサポートされています。 Chromiumベースの新しいEdge(75以降)もサポートしています。旧Edgeはサポートしていません。</p>
</div>

<h2 id="High-level_view">High-level view</h2>

<p>この記事では <a href="/ja/docs/Web/API/Document_Object_Model/Introduction">DOM (Document Object Model)</a> —ドキュメントにある要素やテキストを表現するノードによって構成された木構造 — に親しんでいる前提で説明します。例として以下の HTML フラグメントを考えます。 </p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;Simple DOM example&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
      &lt;section&gt;
        &lt;img src="dinosaur.png" alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth."&gt;
        &lt;p&gt;Here we will add a link to the &lt;a href="https://www.mozilla.org/"&gt;Mozilla homepage&lt;/a&gt;&lt;/p&gt;
      &lt;/section&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>

<p>このフラグメントによって以下のような DOM 構造が構成されます。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/14559/dom-screenshot.png" style="border-style: solid; border-width: 1px; display: block; margin: 0px auto;"></p>

<p><em>Shadow</em> DOM により、通常の DOM ツリーの要素の下に DOM ツリーを追加し隠すことができます。shadow DOM ツリーは shadow root を根とし、その下には普通の DOM ツリーと同様に任意の要素を追加できます。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15788/shadow-dom.png" style="height: 543px; width: 1138px;"></p>

<p>以下に shadow DOM における用語を定義します。</p>

<ul>
 <li><strong>Shadow host</strong>: shadow DOM が追加された、通常の DOM ノード</li>
 <li><strong>Shadow tree</strong>: shadow DOM の中にある DOM ツリー</li>
 <li><strong>Shadow boundary</strong>: shadow DOM と通常の DOM の境界</li>
 <li><strong>Shadow root</strong>: shadow ツリーの根ノード</li>
</ul>

<p>shadow DOM 内のノードは、子ノードを追加したり属性付けをしたり、個々のノードのスタイルを element.style.foo と定めたり shadow DOM ツリー全体のスタイルを {{htmlelement("style")}} 要素で定めたりなど、通常の DOM のノードと同様に制御できます。ただし、shadow DOM の内部コードによって外部を制御することは出来ません。 </p>

<p>shadow DOM は全く新しいものではなく、例えばブラウザにおいて要素の内部構造をカプセル化するために長年使用されていました。 {{htmlelement("video")}} 要素の例を考えます。DOM で見えるものは <code>&lt;video&gt;</code> 要素のみですが、その shadow DOM の内部ではたくさんのボタンや他の制御コードが含まれています。shadow DOM スペックができたことにより、この機能を実際に操作しカスタム要素で shadow DOM を作ることができるようになりました。 </p>

<h2 id="基本的な使い方">基本的な使い方</h2>

<p>shadow root は {{domxref("Element.attachShadow()")}} メソッドを利用して任意の要素に追加することができます。このメソッドではパラメータとして <code>mode</code> オプションを <code>open</code> または <code>closed</code> の値で取ります。 </p>

<pre class="brush: js">let shadow = elementRef.attachShadow({mode: 'open'});
let shadow = elementRef.attachShadow({mode: 'closed'});</pre>

<p><code>open</code> の場合は shadow DOM の内部にメインページに書かれた JavaScript からアクセスできます。以下のように {{domxref("Element.shadowRoot")}} プロパティを利用してアクセスできます。</p>

<pre class="brush: js">let myShadowDom = myCustomElem.shadowRoot;</pre>

<p>shadow root を <code>mode: closed</code> で追加した場合、外部から shadow DOM にアクセス出来ず、<code>myCustomElem.shadowRoot</code> は <code>null</code> を返します。<code>&lt;video&gt;</code> などの shadow DOM を含む既成の要素は <code>closed</code> になっています。</p>

<div class="note">
<p><strong>Note</strong>: <a href="https://blog.revillweb.com/open-vs-closed-shadow-dom-9f3d7427d1af">このブログ記事を見るに</a>、実はclosed shadow DOMを回避するのはそんなに難しいことではなく、また、これを完全に隠すことはその価値の割には面倒です。</p>
</div>

<p>shadow DOM をコンストラクタの一部としてカスタム要素に追加することを考えます。</p>

<pre class="brush: js">let shadow = this.attachShadow({mode: 'open'});</pre>

<p>shadow DOM は、通常の DOM の操作に使われる DOM API で操作することができます。</p>

<pre class="brush: js">var para = document.createElement('p');
shadow.appendChild(para);
// etc.</pre>

<h2 id="実用例">実用例</h2>

<p>カスタム要素内のシンプルなshadow DOM を見てみましょう — <code><a href="https://github.com/mdn/web-components-examples/tree/master/popup-info-box-web-component">&lt;popup-info-box&gt;</a></code> (<a href="https://mdn.github.io/web-components-examples/popup-info-box-web-component/">実行例</a>)。このタグはイメージアイコンとテキストを取り、アイコンをページに埋め込みます。アイコンがフォーカスされるとポップアップが表示され、さらなる情報を提供します。<br>
 まずは <code>HTMLElement</code> を拡張して <code>PopUpInfo</code> というクラスを定義します。</p>

<pre class="brush: js">class PopUpInfo extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // write element functionality in here

    ...
  }
}</pre>

<p>クラス定義の際、インスタンスが初期化された時に用意されるあらゆる関数を定義したコンストラクタを定義します。</p>

<h3 id="shadow_root_の作成">shadow root の作成</h3>

<p>最初に shadow root をカスタム要素に追加します。</p>

<pre class="brush: js">// Create a shadow root
var shadow = this.attachShadow({mode: 'open'});</pre>

<h3 class="brush: js" id="shadow_DOM_構造の作成">shadow DOM 構造の作成</h3>

<p class="brush: js">次に shadow DOM 構造を作ります。</p>

<pre class="brush: js">// Create spans
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
</pre>

<h3 class="brush: js" id="shadow_DOM_のスタイル">shadow DOM のスタイル</h3>

<p class="brush: js">そのあと、 {{htmlelement("style")}} 要素を作り CSS でスタイルを付けます。</p>

<pre class="brush: js">// Create some CSS to apply to the shadow dom
var style = document.createElement('style');

style.textContent = `
.wrapper {
  position: relative;
}

.info {
  font-size: 0.8rem;
  width: 200px;
  display: inline-block;
  border: 1px solid black;
  padding: 10px;
  background: white;
  border-radius: 10px;
  opacity: 0;
  transition: 0.6s all;
  position: absolute;
  bottom: 20px;
  left: 10px;
  z-index: 3;
}

img {
  width: 1.2rem;
}

.icon:hover + .info, .icon:focus + .info {
  opacity: 1;
}`;

</pre>

<h3 id="shadow_DOM_を_shadow_root_に追加">shadow DOM を shadow root に追加</h3>

<p>最後に作成した全ての要素を shadow root に追加します。</p>

<pre class="brush: js">// attach the created elements to the shadow dom
shadow.appendChild(style);
shadow.appendChild(wrapper);
wrapper.appendChild(icon);
wrapper.appendChild(info);</pre>

<h3 id="カスタム要素の使用">カスタム要素の使用</h3>

<p>クラスを定義すると、定義したようにカスタム要素を使用することができます。(<a href="/ja/docs/Web/Web_Components/Using_custom_elements">Using custom elements</a>)</p>

<pre class="brush: js">// Define the new element
customElements.define('popup-info', PopUpInfo);</pre>

<pre class="brush: html">&lt;<span class="pl-ent">popup-info</span> <span class="pl-e">img</span>=<span class="pl-s"><span class="pl-pds">"</span>img/alt.png<span class="pl-pds">"</span></span> <span class="pl-e">text</span>=<span class="pl-s"><span class="pl-pds">"</span>Your card validation code (CVC) is an extra
                                    security feature — it is the last 3 or 4
                                    numbers on the back of your card.<span class="pl-pds">"</span></span>&gt;</pre>

<div>
<h3 id="内部スタイル_vs_外部スタイル">内部スタイル vs 外部スタイル</h3>

<p>上述の例では{{htmlelement("style")}}要素を用いてShadow DOMにスタイルを適用しましたが、代わりに{{htmlelement("link")}}要素で外部のスタイルシートを参照することでも完全に実現できます。</p>

<p>例として、<a href="https://mdn.github.io/web-components-examples/popup-info-box-external-stylesheet/">popup-info-box-external-stylesheet</a> の例を見てください。(<a href="https://github.com/mdn/web-components-examples/blob/master/popup-info-box-external-stylesheet/main.js">ソースコード</a>)</p>

<pre>// Apply external styles to the shadow dom
const linkElem = document.createElement('link');
linkElem.setAttribute('rel', 'stylesheet');
linkElem.setAttribute('href', 'style.css');

// Attach the created element to the shadow dom
shadow.appendChild(linkElem);</pre>

<p> {{htmlelement("link")}}要素がshadow rootの描画をブロックしないため、スタイルシートがロードされている間flash of unstyled content(FOUC)が起こりうることに注意してください。</p>

<p>多くのモダンブラウザは、共通ノードからコピーされた、または同一のテキストを持つ {{htmlelement("style")}}タグの最適化を実装して、単一のバッキングスタイルシートを共有できるようにしています。この最適化により、外部スタイルと内部スタイルのパフォーマンスは同様になります。</p>

<h2 id="参考">参考</h2>

<ul>
 <li><a href="/ja/docs/Web/Web_Components/Using_custom_elements">Using custom elements</a></li>
 <li><a href="/ja/docs/Web/Web_Components/Using_templates_and_slots">Using templates and slots</a></li>
</ul>
</div>
