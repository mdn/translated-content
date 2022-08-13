---
title: Global object (グローバルオブジェクト)
slug: Glossary/Global_object
tags:
  - CodingScripting
  - Glossary
  - NeedsContent
  - 用語集
translation_of: Glossary/Global_object
---
<p>グローバルオブジェクトは、{{glossary("global scope", "グローバルスコープ")}}上に常時存在する{{glossary("object", "オブジェクト")}}です。</p>

<p>JavaScript では、グローバルオブジェクトが常に定義されています。ウェブブラウザー上でスクリプトがグローバル変数を生成する時、グローバルオブジェクトのメンバーとして作成されます。 ({{Glossary("Node.js")}} ではこの限りではありません。) グローバルオブジェクトが実装する{{Glossary("interface", "インターフェイス")}}は、どのようなコンテキストでスクリプトが実行されているかによって変化します。例えば、</p>

<ul>
 <li>ウェブブラウザーでは、明示的にバックグランドタスクとして起動されるコードを除き、 {{domxref("Window")}} がグローバルオブジェクトになります。ウェブにおける JavaScript コードのほとんどはこのケースに該当します。</li>
 <li>{{domxref("Worker")}} 内で実行されるコードでは {{domxref("WorkerGlobalScope")}} オブジェクトがグローバルオブジェクトになります。</li>
 <li>{{Glossary("Node.js")}} で実行されるスクリプトの場合、 <code><a href="https://nodejs.org/api/globals.html#globals_global">global</a></code> と呼ばれるオブジェクトがグローバルオブジェクトになります。</li>
</ul>

<h2 id="window_object_in_the_Browser" name="window_object_in_the_Browser">ブラウザー内の <code>window</code> オブジェクト</h2>

<p>ブラウザー内では <code>window</code> オブジェクトがグローバルオブジェクトです。グローバル変数や関数はすべて、 <code>window</code> オブジェクトのプロパティとしてアクセスすることができます。</p>

<h3 id="Access_Global_Variables" name="Access_Global_Variables">グローバル変数へのアクセス</h3>

<pre class="brush: js notranslate">var foo = "foobar";
foo === window.foo; // true を返す
</pre>

<p>グローバル変数 <code>foo</code> を定義した後、その値を <code>window</code> オブジェクトから、変数名である <code>foo</code> を使用し、グローバルオブジェクト <code>window</code><code>.foo</code> のプロパティ名として直接アクセスすることができます。</p>

<h4 id="Explanation" name="Explanation">解説:</h4>

<p>グローバル変数 <code>foo</code> は <code>window</code> オブジェクト内に、次のように格納されます。</p>

<pre class="brush: js notranslate">foo: "foobar"</pre>

<h3 id="Access_Global_Functions" name="Access_Global_Functions">グローバル関数へのアクセス</h3>

<pre class="brush: js notranslate">function greeting() {
   console.log("Hi!");
}

window.greeting(); // ふつうに greeting(); を呼び出すのと同じ
</pre>

<p>上記の例では、グローバル関数が <code>window</code> オブジェクトの中に<em>プロパティ</em>としてどのように格納されるかを説明しています。 <code>greeting</code> というグローバル関数を作成し、 <code>window</code> オブジェクトを使用して呼び出します。</p>

<h4 id="Explanation_2" name="Explanation_2">解説:</h4>

<p>グローバル関数 <code>greeting</code> は <code>window</code> オブジェクトに次のように格納されています。</p>

<pre class="brush: js notranslate">greeting: function greeting() {
   console.log("Hi!");
}</pre>

<section id="Quick_links">
<ul>
 <li><a href="/ja/docs/Glossary">MDN 用語集</a>

  <ul>
   <li>{{glossary("global scope", "グローバルスコープ")}}</li>
   <li>{{glossary("object", "オブジェクト")}}</li>
  </ul>
 </li>
 <li>{{domxref("Window")}}</li>
 <li>{{domxref("WorkerGlobalScope")}}</li>
 <li><code><a href="https://nodejs.org/api/globals.html#globals_global">global</a></code></li>
</ul>
</section>
