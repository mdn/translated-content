---
title: Element.getElementsByClassName()
slug: Web/API/Element/getElementsByClassName
tags:
  - API
  - Classes
  - Element
  - Method
  - Reference
  - getElementsByClassName
translation_of: Web/API/Element/getElementsByClassName
---
<div>{{APIRef("DOM")}}</div>

<p><span class="seoSummary">{{domxref("Element")}} の <strong><code>getElementsByClassName()</code></strong> メソッドは、引数で与えられたクラス名を含むすべての子要素を、ライブな {{domxref("HTMLCollection")}}で返します。 </span></p>

<p>{{domxref("Document.getElementsByClassName", "Document.getElementsByClassName()")}} メソッドはこのメソッドとほぼ同様に動作しますが、{{domxref("Document")}} 全体に働きます。特定されたドキュメントルート要素の子孫のうち、与えられたクラス名に合う複数の要素を返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>var <em>elements</em></var> = <em>element</em>.getElementsByClassName(<em>names</em>);</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>names</code></dt>
 <dd>マッチさせる一つ以上のクラス名を表す {{domxref("DOMString")}} で、クラス名は空白区切りで指定できます。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p><code>names</code> で指定したすべてのクラスを持つすべての要素のリストである <em>live</em> な {{ domxref("HTMLCollection") }} です。</p>

<h2 id="Usage_notes" name="Usage_notes">使用上の注意</h2>

<p>この関数が返すコレクションは常に <em>live</em> です。つまり、この関数を呼び出された要素をルートとする DOM ツリーの現在の状態が常に反映されています。サブツリー上で <code>names</code> にマッチする新しい要素が追加されたり、サブツリー上にある <code>names</code> にマッチしなかった要素が <code>names</code> にマッチするよう変更された場合、すぐにこのコレクションに追加されます。</p>

<p>逆もしかりです。<code>names</code> にマッチしなくなったりツリーから外された要素は、すぐにコレクションから除外されます。</p>

<div class="note">
<p>クラス名は<a href="/ja/docs/Web/HTML/Quirks_Mode_and_Standards_Mode">後方互換モード</a>では大文字・小文字を区別されず、それ以外では区別されます。</p>
</div>

<h2 id="Syntax" name="Syntax">例</h2>

<h3 id="Matching_a_single_class" name="Matching_a_single_class">単一のクラスとマッチさせる</h3>

<p>単一の指定されたクラスを含む要素を探すには、 <code>getElementsByClassName()</code> を呼び出す際にそのクラス名を指定するだけです。</p>

<pre class="brush: js notranslate">element.getElementsByClassName('test');</pre>

<p>この例は <code>main</code> の <code>id</code> を持つ要素の子孫の中で、<code>test</code> クラスをもつ全要素を見つけます。</p>

<pre class="brush: js notranslate">document.getElementById('main').getElementsByClassName('test');</pre>

<h3 id="Matching_multiple_classes" name="Matching_multiple_classes">複数のクラスとマッチさせる</h3>

<p><code>red</code> と <code>test</code> 両方のクラスを含んだ要素を見つけます。</p>

<pre class="brush: js notranslate">element.getElementsByClassName('red test');</pre>

<h3 id="Examining_the_results" name="Examining_the_results">結果を調査する</h3>

<p>標準の配列構文や、<code>HTMLCollection</code> の {{domxref("HTMLCollection.item", "item()")}} メソッドを使うことで、返されたコレクションの要素を調査することができます。しかし、<strong><u>次の例はうまく動作しないでしょう</u></strong>。<code>colorbox</code> クラスを外した際に、<code>matches</code> がすぐに変更されてしまうからです。</p>

<pre class="brush: js notranslate">var matches = element.getElementsByClassName('colorbox');

for (var i=0; i&lt;matches.length; i++) {
  matches[i].classList.remove('colorbox');
  matches.item(i).classList.add('hueframe');
}
</pre>

<p>別の手段を使いましょう。例えば、</p>

<pre class="brush: js notranslate">var matches = element.getElementsByClassName('colorbox');

while (matches.length &gt; 0) {
  matches.item(0).classList.add('hueframe');
  matches[0].classList.remove('colorbox');
}</pre>

<p>このコードは、<code>"colorbox"</code> クラスを持つ子孫要素を見つけ、<code>item(0)</code>を呼び出して <code>"hueframe"</code> クラスを追加し、（配列表記で） <code>"colorbox"</code> を削除します。その後、（もし残っていれば）別の要素が <code>item(0)</code> になります。</p>

<h3 id="Filtering_the_results_using_array_methods" name="Filtering_the_results_using_array_methods">Arrayメソッドで結果を抽出する</h3>

<p>このメソッドの戻り値を <code>this</code> 値として {{jsxref("Array.prototype")}} メソッドに与えることで、任意の {{ domxref("HTMLCollection") }} で <code>Array</code> メソッドを使うことができます。次の例では <code>test</code> クラスを持つすべての {{HTMLElement("div")}} 要素を見つけられます。</p>

<pre class="brush: js notranslate">var testElements = document.getElementsByClassName('test');
var testDivs = Array.prototype.filter.call(testElements, function(testElement){
    return testElement.nodeName === 'DIV';
});</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-element-getelementsbyclassname', 'Element.getElementsByClassName()')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Element.getElementsByClassName")}}</p>
