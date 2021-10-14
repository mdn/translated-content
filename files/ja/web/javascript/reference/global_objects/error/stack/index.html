---
title: Error.prototype.stack
slug: Web/JavaScript/Reference/Global_Objects/Error/Stack
tags:
  - Error
  - JavaScript
  - Property
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Error/Stack
---
<div>{{JSRef}} {{non-standard_header}}</div>

<p>{{jsxref("Error")}} オブジェクトの標準外の <strong><code>stack</code></strong> プロパティは、呼び出された関数のトレース、つまり、その呼び出し順、呼び出したファイルの行番号、呼び出した関数の引数を提供します。スタック文字列は、最後の呼び出しから最初の呼び出しへ進み、元のグローバルスコープの呼び出しまで遡ります。</p>

<h2 id="Description" name="Description">解説</h2>

<p>各ステップは改行で区切られ、行の先頭は関数名 (グローバルスコープからの呼び出しでない場合)、次に <code>@</code> 記号、ファイルの場所 (エラーが投げられている時に関数がエラーコンストラクターである場合を除く)、コロン記号、ファイルの場所がある場合は行番号の順に続きます。(ただし、{{jsxref("Error")}} オブジェクトも、投げられたエラーから取り戻すため <code>fileName</code> および <code>lineNumber</code>、<code>columnNumber</code> プロパティを所有することに注意してください。これはエラーのみであり、そのトレースではありません。)</p>

<p>これは Firefox だけで使用される書式であることに注意してください。スタックトレースに標準の書式はありません。しかし、Safari 6 以降と Opera 12 以前ではとてもよく似た書式を使用します。一方で、V8 JavaScript エンジンを搭載したブラウザー (Chrome、Opera 15 以降、Android Browser など) や IE 10 以降のブラウザーは異なる書式を使用します (<a href="https://web.archive.org/web/20140210004225/http://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx">アーカイブされたMSDN の error.stack ドキュメント</a>を参照)。</p>

<p><strong>スタック上の引数の値</strong>: Firefox 14 以前 ({{bug("744842")}}) で、関数名は、文字列に変換され括弧で囲まれた引数の値に続き、<code>@</code> 記号の直前に置かれます。オブジェクト (または配列等) は変換された形式 <code>"[object Object]"</code> で現れるため、これが実際のオブジェクトに戻され評価されることはありません。スカラー値を受け取ります (それにも関わらず、少なくとも Firefox 14 では可能です。<code>arguments.callee.caller.arguments</code> を使用し、<code>arguments.callee.caller.name</code> により、簡単に関数名を取り戻すことが可能です)。<code>"undefined"</code> は、<code>"(void 0)"</code> として記録されます。ただし、<code>"@"</code>、<code>"("</code>, <code>")"</code> (または、これらがファイル名に含まれる場合) を伴う文字列引数が渡された場合、行がそのコンポーネント部分で分かれてしまうため、これらに安易に頼ることができません。従って、Firefox 14 以降では、これが少なからず問題になります。</p>

<p>ブラウザによって値を設定するタイミングが異なります。例えば Firefox は、これを {{jsxref("Error")}} オブジェクトが作成された時に設定し、PhantomJS は、{{jsxref("Error")}} が投げられた時にのみ設定します。<a href="https://web.archive.org/web/20140210004225/http://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx">アーカイブされた MSDN のドキュメント</a> によれば、PhantomJS の実装とも一致するようです。</p>

<h2 id="Example" name="Example">例</h2>

<h3 id="Using_the_stack_property" name="Using_the_stack_property">stack プロパティの使用</h3>

<p>次の HTML マークアップは、<code>stack</code> プロパティの使用を実演します。</p>

<pre class="brush: html notranslate">&lt;!DOCTYPE HTML&gt;
&lt;meta charset="UTF-8"&gt;
&lt;title&gt;Stack Trace Example&lt;/title&gt;
&lt;body&gt;
&lt;script&gt;
function trace() {
  try {
    throw new Error('myError');
  }
  catch(e) {
    alert(e.stack);
  }
}
function b() {
  trace();
}
function a() {
  b(3, 4, '\n\n', undefined, {});
}
a('first call, firstarg');
&lt;/script&gt;
</pre>

<p>上記のマークアップは、Windows ファイルシステム上の <code>C:\example.html</code> に保存されているものと仮定します。これは、次のテキストを含む警告メッセージを生成します:</p>

<p>Firefox 30 以降では、列番号が含まれます。</p>

<pre class="notranslate"><samp>trace@file:///C:/example.html:9:17
b@file:///C:/example.html:16:13
a@file:///C:/example.html:19:13
@file:///C:/example.html:21:9</samp></pre>

<p>Firefox 14 から Firefox 29 まで:</p>

<pre class="notranslate"><samp>trace@file:///C:/example.html:9
b@file:///C:/example.html:16
a@file:///C:/example.html:19
@file:///C:/example.html:21</samp></pre>

<p>Firefox 13 以前は、代わりに次のテキストが生成されます。</p>

<pre class="notranslate"><samp>Error("myError")@:0
trace()@file:///C:/example.html:9
b(3,4,"\n\n",(void 0),[object Object])@file:///C:/example.html:16
a("first call, firstarg")@file:///C:/example.html:19
@file:///C:/example.html:21</samp></pre>

<h3 id="Stack_of_evaled_code" name="Stack_of_evaled_code">eval によるコードのスタック</h3>

<p>Firefox 30 {{geckoRelease("30")}} 以降、<code>Function()</code> および <code>eval()</code> 呼び出し内のコードのエラースタックは、各呼び出しに、行番号と列番号についての詳細情報を含むスタックを生成するようになりました。関数呼び出しは、<code>"&gt; Function"</code> で示され、eval 呼び出しは、<code>"&gt; eval"</code> で示されます。{{bug("332176")}} を参照してください。</p>

<pre class="brush: js notranslate">try {
  new Function('throw new Error()')();
} catch (e) {
  console.log(e.stack);
}

// anonymous@file:///C:/example.html line 7 &gt; Function:1:1
// @file:///C:/example.html:7:6


try {
  eval("eval('FAIL')");
} catch (x) {
  console.log(x.stack);
}

// @file:///C:/example.html line 7 &gt; eval line 1 &gt; eval:1:1
// @file:///C:/example.html line 7 &gt; eval:1:1
// @file:///C:/example.html:7:6
</pre>

<p><code>//# sourceURL</code> ディレクティブを使用して eval ソースに名前を付けることもできます。 <a href="/ja/docs/Tools/Debugger">Debugger</a> ドキュメント内の <a href="/ja/docs/Tools/Debugger/How_to/Debug_eval_sources">eval ソースのデバッグ</a> と <a href="http://fitzgeraldnick.com/weblog/59/" title="Naming `eval` Scripts with the `//# sourceURL` Directive">ブログ記事</a> も参照してください。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<p>仕様の一部ではありません。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Error.stack")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Components.stack">Components.stack</a></li>
 <li>外部プロジェクト: <a class="link-https" href="https://github.com/csnover/TraceKit/">TraceKit</a> および <a class="link-https" href="https://github.com/eriwen/javascript-stacktrace">javascript-stacktrace</a></li>
 <li>MSDN: <a class="external" href="https://web.archive.org/web/20140210004225/http://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx">error.stack</a> のドキュメントのアーカイブ</li>
 <li><a href="https://github.com/v8/v8/wiki/Stack%20Trace%20API">Overview of the V8 JavaScript stack trace API</a></li>
</ul>
