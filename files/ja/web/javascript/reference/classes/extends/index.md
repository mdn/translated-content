---
title: extends
slug: Web/JavaScript/Reference/Classes/extends
tags:
  - Classes
  - ECMAScript 2015
  - JavaScript
  - Language feature
translation_of: Web/JavaScript/Reference/Classes/extends
---
<div>{{jsSidebar("Classes")}}</div>

<p><strong><code>extends</code></strong> キーワードは<a href="/ja/docs/Web/JavaScript/Reference/Statements/class">クラス宣言</a>や<a href="/ja/docs/Web/JavaScript/Reference/Operators/class">クラス式</a>の中で、他のクラスの子であるクラスを生成するために使用します。</p>

<div>{{EmbedInteractiveExample("pages/js/classes-extends.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">class ChildClass extends ParentClass { ... }</pre>

<h2 id="Description" name="Description">解説</h2>

<p><code>extends</code> キーワードは、独自のクラスや組込みオブジェクトをサブクラス化するために使用することができます。</p>

<p>拡張したものの <code>.prototype</code> は、{{jsxref("Object")}} か {{jsxref("null")}} である必要があります。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_extends" name="Using_extends">extends の使用</h3>

<p>最初の例では、 <code>Square</code> と呼ばれるクラスを <code>Polygon</code> と呼ばれるクラスから作成します。この例は、<a href="https://googlechrome.github.io/samples/classes-es6/index.html">ライブデモ</a> <a href="https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html">(ソース)</a> から転載しています。</p>

<pre class="brush: js notranslate">class Square extends Polygon {
  constructor(length) {
    // ここでは、親クラスのコンストラクターを呼び出し、
    // Polygon の幅と高さの寸法を渡します。
    super(length, length);
    // 注: 派生クラスでは、 'this' を使う前に super() を
    // 呼び出さなくてはなりません。さもないと参照エラーになります。
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }
}</pre>

<h3 id="Using_extends_with_built-in_objects" name="Using_extends_with_built-in_objects">組込みオブジェクトでの extends の使用</h3>

<p>この例では、組込みの {{jsxref("Date")}} オブジェクトを拡張します。この例は、<a href="https://googlechrome.github.io/samples/classes-es6/index.html">ライブデモ</a> <a href="https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html">(ソース)</a> から転載しています。</p>

<pre class="brush: js notranslate">class myDate extends Date {

  getFormattedDate() {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return this.getDate() + '-' + months[this.getMonth()] + '-' + this.getFullYear();
  }
}
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-class-definitions', 'extends')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.classes.extends")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Classes">クラス</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Classes/constructor">コンストラクター</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/super">super</a></li>
 <li><a href="https://medium.com/beginners-guide-to-mobile-web-development/super-and-extends-in-javascript-es6-understanding-the-tough-parts-6120372d3420">Anurag Majumdar - Super &amp; Extends in JavaScript</a></li>
</ul>
