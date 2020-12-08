---
title: CustomElementRegistry.define()
slug: Web/API/CustomElementRegistry/define
translation_of: Web/API/CustomElementRegistry/define
---
<p>{{APIRef("CustomElementRegistry")}}</p>

<p>{{domxref("CustomElementRegistry")}} インターフェイスの <code><strong>define()</strong></code> メソッドは、新しいカスタムエレメントを定義します。</p>

<p>作成することができるのは、次の2種類のカスタムエレメントです。</p>

<ul>
 <li><strong>自律的カスタムエレメント (Autonomous custom element)</strong>: スタンドアロンの独立したエレメントで、ビルトインの HTML 要素を継承していません。</li>
 <li><strong>カスタムビルトインエレメント (Customized built-in element)</strong>: ビルトインの HTML 要素を継承し、拡張を加えたエレメントです。</li>
</ul>

<h2 id="構文">構文</h2>

<pre class="syntaxbox">customElements.define(<em>name</em>, <em>constructor</em>, <em>options</em>);
</pre>

<h3 id="パラメータ">パラメータ</h3>

<dl>
 <dt>name</dt>
 <dd>新しいカスタムエレメントの名前。カスタムエレメントの名前には、少なくとも1つのハイフンが含まれなければならないことに注意してください。</dd>
 <dt>constructor</dt>
 <dd>新しいカスタムエレメントのコンストラクタ</dd>
 <dt>options {{optional_inline}}</dt>
 <dd>エレメントの定義の仕方を制御するオブジェクト。現在は、次の1つのオプションのみサポートされています。
 <ul>
  <li><code>extends</code>: 拡張するビルトイン要素の名前を示す文字列。<em>カスタムビルトインエレメント</em>を作成するのに使われる。</li>
 </ul>
 </dd>
</dl>

<h3 id="返り値">返り値</h3>

<p>なし。</p>

<h3 id="例外">例外</h3>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">例外</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>NotSupportedError</code></td>
   <td>The {{domxref("CustomElementRegistry")}} already contains an entry with the same name or the same constructor (or is otherwise already defined), or <code>extends</code> is specified and it is a <a href="https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name">valid custom element name</a>, or <code>extends</code> is specified but the element it is trying to extend is an unknown element.</td>
  </tr>
  <tr>
   <td><code>SyntaxError</code></td>
   <td>The provided name is not a <a href="https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name">valid custom element name</a>.</td>
  </tr>
  <tr>
   <td><code>TypeError</code></td>
   <td>The referenced constructor is not a constructor.</td>
  </tr>
 </tbody>
</table>

<div class="note">
<p><strong>注意</strong>: <code>NotSupportedError</code> 例外が多く発生する場合、<code>define()</code> が失敗しているように思えるかもしれませんが、多くの場合 {{domxref("Element.attachShadow()")}} に問題があります。</p>
</div>

<h2 id="例">例</h2>

<h3 id="自律的カスタムエレメント_(Autonomous_custom_element)">自律的カスタムエレメント (Autonomous custom element)</h3>

<p>The following code is taken from our <a href="https://github.com/mdn/web-components-examples/tree/master/popup-info-box-web-component">popup-info-box-web-component</a> example (<a href="https://mdn.github.io/web-components-examples/popup-info-box-web-component/">see it live also</a>).</p>

<pre class="brush: js">// Create a class for the element
class PopUpInfo extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
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
                           'position: relative;' +
                        '}' +

                         '.info {' +
                            'font-size: 0.8rem;' +
                            'width: 200px;' +
                            'display: inline-block;' +
                            'border: 1px solid black;' +
                            'padding: 10px;' +
                            'background: white;' +
                            'border-radius: 10px;' +
                            'opacity: 0;' +
                            'transition: 0.6s all;' +
                            'position: absolute;' +
                            'bottom: 20px;' +
                            'left: 10px;' +
                            'z-index: 3;' +
                          '}' +

                          'img {' +
                            'width: 1.2rem' +
                          '}' +

                          '.icon:hover + .info, .icon:focus + .info {' +
                            'opacity: 1;' +
                          '}';

    // attach the created elements to the shadow dom

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}

// Define the new element
customElements.define('popup-info', PopUpInfo);
</pre>

<pre class="brush: html">&lt;popup-info img="img/alt.png" text="Your card validation code (CVC) is an extra
                                    security feature — it is the last 3 or 4
                                    numbers on the back of your card."&gt;</pre>

<div class="note">
<p><strong>注意</strong>: Constructors for autonomous custom elements must extend {{domxref("HTMLElement")}}.</p>
</div>

<h3 id="カスタムビルトインエレメント">カスタムビルトインエレメント</h3>

<p>The following code is taken from our <a href="https://github.com/mdn/web-components-examples/tree/master/word-count-web-component">word-count-web-component</a> example (<a href="https://mdn.github.io/web-components-examples/word-count-web-component/">see it live also</a>).</p>

<pre class="brush: js">// Create a class for the element
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super();

    // count words in element's parent element
    var wcParent = this.parentNode;

    function countWords(node){
      var text = node.innerText || node.textContent
      return text.split(/\s+/g).length;
    }

    var count = 'Words: ' + countWords(wcParent);

    // Create a shadow root
    var shadow = this.attachShadow({mode: 'open'});

    // Create text node and add word count to it
    var text = document.createElement('span');
    text.textContent = count;

    // Append it to the shadow root
    shadow.appendChild(text);


    // Update count when element content changes
    setInterval(function() {
      var count = 'Words: ' + countWords(wcParent);
      text.textContent = count;
    }, 200)

  }
}

// Define the new element
customElements.define('word-count', WordCount, { extends: 'p' });</pre>

<pre class="brush: html">&lt;p is="word-count"&gt;&lt;/p&gt;</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("HTML WHATWG", "custom-elements.html#dom-customelementregistry-define", "customElements.define()")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<div>


<p>{{Compat("api.CustomElementRegistry.define")}}</p>
</div>
