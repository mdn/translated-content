---
title: Element.matches()
slug: Web/API/Element/matches
tags:
  - API
  - DOM
  - Element
  - Method
  - Reference
  - msMatchesSelector
  - webkitMatchesSelector
translation_of: Web/API/Element/matches
---
<p>{{APIRef("DOM")}}</p>

<p><strong><code>matches()</code></strong> メソッドは、その要素 ({{domxref("Element")}}) が指定された <code><var>selectorString</var></code> によって選択されるかをチェックします。言い換えれば、要素「が」セレクターであることをチェックします。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var <var>result</var> = <var>element</var>.matches(<var>selectorString</var>);
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<p><code><var>selectorString</var></code> は、テストするためのセレクターを表す文字列です。</p>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code><var>result</var></code> は {{domxref("Boolean")}} です。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt><code>SYNTAX_ERR</code></dt>
 <dd>指定されたセレクター文字列が無効である場合。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: html notranslate">&lt;ul id="birds"&gt;
  &lt;li&gt;Orange-winged parrot&lt;/li&gt;
  &lt;li class="endangered"&gt;Philippine eagle&lt;/li&gt;
  &lt;li&gt;Great white pelican&lt;/li&gt;
&lt;/ul&gt;

&lt;script type="text/javascript"&gt;
  var birds = document.getElementsByTagName('li');

  for (var i = 0; i &lt; birds.length; i++) {
    if (birds[i].matches('.endangered')) {
      console.log('The ' + birds[i].textContent + ' is endangered!');
    }
  }
&lt;/script&gt;
</pre>

<p>要素が実際に値 <code>endangered</code> 持つ <code>class</code> 属性を持つので、これは、コンソールのログに "The Philippine eagle is endangered!" と表示されます。</p>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p><code>Element.matches()</code> や <code>Element.matchesSelector()</code> には対応していないが、 <code>document.querySelectorAll()</code> には対応しているブラウザーには、ポリフィルが存在します。</p>

<pre class="brush: js notranslate">if (!Element.prototype.matches) {
  Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function(s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
        while (--i &gt;= 0 &amp;&amp; matches.item(i) !== this) {}
        return i &gt; -1;
      };
}</pre>

<p>しかし、古いブラウザーに対応することの実用性を考えると、実用的なケース (言い換えると IE9 以降の対応) ではほとんどの場合 (全部ではない)、次のもので十分です。</p>

<pre class="brush: js notranslate">if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector ||
                              Element.prototype.webkitMatchesSelector;
}
</pre>

<h2 id="Specification" name="Specification">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-element-matches', 'Element.prototype.matches')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Element.removeAttribute")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>
  <div class="syntaxbox"><a href="/ja/docs/Web/Guide/CSS/Getting_started/Selectors">セレクターの構文</a></div>
 </li>
 <li>
  <div class="syntaxbox">セレクターを使用するその他のメソッド: {{domxref("element.querySelector()")}} および {{domxref("element.closest()")}}</div>
 </li>
</ul>
