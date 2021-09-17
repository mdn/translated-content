---
title: Console.assert()
slug: Web/API/console/assert
tags:
  - API
  - DOM
  - Debugging
  - Method
  - NeedsBrowserCompatibility
  - Web Development
  - console
  - web console
translation_of: Web/API/console/assert
---
<div>{{APIRef("Console API")}}</div>

<p><code><strong>console.assert()</strong></code> は、アサーションが false になる場合に、コンソールへエラーメッセージを出力します。アサーションが true になる場合は、何も行いません。</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">console.assert(<em>assertion</em>, <em>obj1</em> [, <em>obj2</em>, ..., <em>objN</em>]);
console.assert(<em>assertion</em>, <em>msg</em> [, <em>subst1</em>, ..., <em>substN</em>]); // C ライクなメッセージ形式
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>assertion</code></dt>
 <dd>任意のブール式。アサーションが false になると、コンソールにメッセージを出力します。</dd>
 <dt><code>obj1</code> ... <code>objN</code></dt>
 <dd>出力する JavaScript オブジェクトのリスト。各オブジェクトを文字列で表現したものを、リストの並び順に追記して出力します。</dd>
 <dt><code>msg</code></dt>
 <dd>0 個以上の置換文字列を含む JavaScript 文字列。</dd>
 <dt><code>subst1</code> ... <code>substN</code></dt>
 <dd><code>msg</code> 内の置換文字列を置き換える JavaScript オブジェクト。このパラメータで、出力形式を高度に制御できます。</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>下のコード例はオブジェクトを<code><strong>console.assert()</strong></code>に渡す場合を示しています。</p>

<pre class="brush: js notranslate">const errorMsg = 'the # is not even';
for (let number = 2; number &lt;= 5; number += 1) {
    console.log('the # is ' + number);
    console.assert(number % 2 === 0, {number: number, errorMsg: errorMsg});
    // <a href="/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015">ES2015 object property shorthand</a> を使った版
    // console.assert(number % 2 === 0, {number, errorMsg});
}
// 出力:
// the # is 2
// the # is 3
// Assertion failed: {number: 3, errorMsg: "the # is not even"}
// the # is 4
// the # is 5
// Assertion failed: {number: 5, errorMsg: "the # is not even"}
</pre>

<p>置換文字列を含む文字列は、Node.jsや、大多数のブラウザでは<code>console.log</code>のパラメータとして動作することに注意してください</p>

<pre class="brush: js notranslate">console.log('the word is %s', 'foo');
// 出力: the word is foo
</pre>

<p>このような文字列の使用は、現在のところ、すべてのブラウザで<code>console.assert</code>のパラメータとして意図した通りには動作するわけではありません。</p>

<pre class="brush: js notranslate">console.assert(false, 'the word is %s', 'foo');
// correct output in Node.js and some browsers
//     (e.g. Firefox v60.0.2):
// Assertion failed: the word is foo
// incorrect output in some browsers
//     (e.g. Chrome v67.0.3396.87):
// Assertion failed: the word is %s foo
</pre>

<p>詳しくは {{domxref("console")}} のドキュメントで、<a href="/ja/docs/Web/API/console#Outputting_text_to_the_console">コンソールにテキストを出力する</a> をご覧ください。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("Console API", "#assert", "console.assert()")}}</td>
   <td>{{Spec2("Console API")}}</td>
   <td>最初期の定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>



<p>{{Compat("api.Console.assert")}}</p>
