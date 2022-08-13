---
title: Window.console
slug: Web/API/Window/console
translation_of: Web/API/Window/console
---
<p>{{ APIRef }}</p>

<p>読み取り専用プロパティの<strong><code>Window.console</code></strong>は、ブラウザのコンソールへ情報を出力するメソッドを提供する{{domxref("Console")}}オブジェクトへの参照を返します。これらのメソッドで出力される情報はデバッグ目的のものであり、ユーザーへ情報を提示するために使われるべきではありません。</p>

<h2 id="Syntax" name="Syntax">Syntax</h2>

<pre class="syntaxbox"><em>var consoleObj</em> = <em>window</em>.console;
</pre>

<h2 id="Example" name="Example">Examples</h2>

<h3 id="Logging_to_console">Logging to console</h3>

<p>一つ目の例はテキストをコンソールに出力します。</p>

<pre class="brush: js">console.log("An error occurred while loading the content");</pre>

<p>次の例では開閉ウィジェットによって要素が展開可能な状態でオブジェクトをコンソールに出力します。</p>

<pre class="brush: js">console.dir(someObject);</pre>

<p>より詳細な例については{{SectionOnPage("/en-US/docs/Web/API/Console", "Usage")}}をご参照下さい。</p>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Console API')}}</td>
   <td>{{Spec2('Console API')}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<div class="note">
<p>Currently there are many implementation differences among browsers, but work is being done to bring them together and make them more consistent with one another.</p>
</div>
