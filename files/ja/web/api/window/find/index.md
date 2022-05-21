---
title: window.find
slug: Web/API/Window/find
tags:
  - API
  - DOM
  - DOM_0
  - Gecko
  - Non-standard
  - Window
translation_of: Web/API/Window/find
---
<div>{{ApiRef}}</div>

<div>
<p id="comment_text_2">{{Non-standard_header}}</p>
</div>

<div>{{noteStart}} <code>window.find()</code> のサポートは、Gecko の将来のバージョンで変更される可能性があります（※参照 : {{Bug("672395")}}） {{noteEnd}}</div>

<h2 id="Summary" name="Summary">概要</h2>

<p>ウィンドウ内の文字列を検索します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>window</em>.find(<var>aString</var>, <var>aCaseSensitive</var>, <var>aBackwards</var>, <var>aWrapAround</var>,
            <var>aWholeWord</var>, <var>aSearchInFrames</var>);</pre>

<dl>
 <dt><code>aString</code></dt>
 <dd>検索するテキスト文字列</dd>
 <dt><code>aCaseSensitive</code></dt>
 <dd>真偽値。 <code>true</code> の場合、大文字と小文字を区別して検索します。</dd>
 <dt><code>aBackwards</code></dt>
 <dd>真偽値。 <code>true</code> の場合、後方検索を行います。</dd>
 <dt><code>aWrapAround</code></dt>
 <dd>真偽値。 <code>true</code> の場合、折り返し検索を行います。</dd>
 <dt><code>aWholeWord</code> {{unimplemented_inline}}</dt>
 <dd>真偽値。 <code>true</code> の場合、完全一致検索を行います（{{bug("481513")}}）</dd>
 <dt><code>aSearchInFrames</code></dt>
 <dd>真偽値。 <code>true</code> の場合、フレーム内の検索を行います。</dd>
</dl>

<h3 id="Returns" name="Returns">戻り値</h3>

<p>真偽値。</p>

<ul>
 <li>文字列が見つかった場合 : <code>true</code></li>
 <li>それ以外 : <code>false</code></li>
</ul>

<h2 id="Example" name="Example">例</h2>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<pre class="brush: js">findString = function findText(text) {
  alert("String \x22" + text + "\x22 found? " + window.find(text));
}</pre>

<h3 id="HTML" name="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;Apples, Bananas, and Oranges.&lt;/p&gt;
&lt;button type="button" onClick='findString("Apples")'&gt;Search for Apples&lt;/button&gt;
&lt;button type="button" onClick='findString("Banana")'&gt;Search for Banana&lt;/button&gt;
&lt;button type="button" onClick='findString("Orange")'&gt;Search for Orange&lt;/button&gt;
</pre>

<h3 id="Result" name="Result">表示結果</h3>

<p>{{EmbedLiveSample('Example')}}</p>

<h2 id="Notes" name="Notes">注記</h2>

<p>Window.find() は、サイト上で発見したコンテンツを選択します。</p>

<h2 id="Specification" name="Specification">仕様</h2>

<p>どの標準にも属しません。</p>
