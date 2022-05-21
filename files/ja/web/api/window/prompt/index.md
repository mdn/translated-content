---
title: window.prompt
slug: Web/API/Window/prompt
tags:
  - DOM
  - Gecko
translation_of: Web/API/Window/prompt
---
<div>{{ApiRef()}}</div>

<h2 id="Summary" name="Summary">概要</h2>

<p>ユーザにテキストを入力することを促すメッセージを持つダイアログを表示します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><code><var>result</var> = window.prompt( <em>text</em>, <em>value</em> );</code></pre>

<ul>
 <li><code>result</code> は、ユーザによって入力されたテキストを含む文字列、または、<code>null</code> 値です。</li>
 <li><code>text</code> は、ユーザに表示するテキストの文字列です。</li>
 <li><code>value</code> は、テキスト入力フィールド内に表示されるデフォルト値を含む文字列です。この引数は、オプションです。</li>
</ul>

<h2 id="Example" name="Example">例</h2>

<pre class="brush:js">var sign = prompt("What's your sign?");

if (sign.toLowerCase() == "scorpio") alert("Wow! I'm a Scorpio too!");

// プロンプトの使い方には色々なものがあります。
var sign = window.prompt(); // 空のプロンプトを表示
var sign = prompt();       //  同上
var sign = window.prompt("元気にしてる ?"); // 「元気にしてる ?」の文字列入りで表示
var sign = window.prompt("元気にしてる ?", "元気だよ !"); // 「元気にしてる ?」 の文字列入りで、入力欄の初期値に「元気だよ !」を設定して表示</pre>

<p>ユーザが OK ボタンをクリックすると、入力フィールドに入力されたテキストが返ります。ユーザがテキストを入力せずに OK をクリックする場合、空文字列が返ります。ユーザがキャンセルボタンをクリックする場合、この関数は、null を返します。</p>

<p>上記例のプロンプトは次の様に表示されます(※ Chrome on Windows 7)</p>

<p><img src="https://lh4.googleusercontent.com/-uDx7r8y4tV8/UKv_PjG163I/AAAAAAAAHd0/Arwk0l4cpq0/s362/Prompt_Chrome_Windows7.png" style="width: 362px;"></p>

<h2 id="Notes" name="Notes">注記</h2>

<p>プロンプトダイアログは、単一の行のテキストボックス、キャンセルボタン、OK ボタンを含み、ユーザがテキストボックスに入力した（空の可能性もある）テキストを返します。</p>


<p>Chrome のコード（拡張機能など）では、<a href="/ja/docs/NsIPromptService" title="NsIPromptService"><code>nsIPromptService</code></a> メソッドを代わりに使うべきです。</p>

<p>Safari では、<code>window.prompt</code> をキャンセルした場合の戻り値が空文字であるため、テキストボックス内に何も入力されていない場合との差別化をはかることができませんので、注意して使うべきです。</p>

<h2 id="Specification" name="Specification">仕様</h2>

<p>{{dom0()}}</p>

<h2 id="See also" name="See also">関連情報</h2>

<ul>
 <li>{{domxref("window.alert")}}</li>
 <li>{{domxref("window.confirm")}}</li>
</ul>
