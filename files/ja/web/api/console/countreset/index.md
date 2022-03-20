---
title: Console.countReset()
slug: Web/API/console/countReset
translation_of: Web/API/Console/countReset
---
<div>{{APIRef("Console API")}}</div>

<p><strong><code>console.countReset()</code></strong> は{{domxref("console.count()")}}で使われたカウンターをリセットします。</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox notranslate">console.countReset(<var>[label]</var>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>label</code> {{optional_inline}}</dt>
 <dd>{{jsxref("String")}}。<code>label</code>を与えると<code>countReset()</code>は<code>label</code>に対応するカウンターを0にリセットします。<code>label</code>を省略すると<code>countReset()</code>は<code>default</code>のカウンターを0にリセットします。</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>例えば、以下のコードについて考えます:</p>

<pre class="brush: js notranslate">let user = "";

function greet() {
  console.count();
  return "hi " + user;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.count();
console.countReset();</pre>

<p>コンソールの出力は、以下のようになります:</p>

<pre class="eval notranslate">"default: 1"
"default: 2"
"default: 3"
"default: 4"
"default: 0"
</pre>

<p><code>console.counterReset()</code>の呼び出しによって<code>default</code>のカウンターが0になったことに注意してください。</p>

<p>始めの <code>count()</code> で引数 <code>label</code> に変数 <code>user</code> を、また 2 番目の <code>count()</code> で文字列 "alice" を与えました:</p>

<pre class="brush: js notranslate">let user = "";

function greet() {
  console.count(user);
  return "hi " + user;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.countReset("bob");
console.count("alice");</pre>

<p>すると、以下のように出力されます:</p>

<pre class="eval notranslate">"bob: 1"
"alice: 1"
"alice: 2"
"bob: 0"
"alice: 3"</pre>

<p><code>bob</code>のカウンターをリセットしたとき他のカウンターに影響を与えません。<code>alice</code>のカウンターが変更されていないことがわかります。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("Console API", "#count", "console.countReset()")}}</td>
   <td>{{Spec2("Console API")}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>



<p>{{Compat("api.Console.countReset")}}</p>
