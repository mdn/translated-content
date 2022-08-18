---
title: 'Warning: -file- is being assigned a //# sourceMappingURL, but already has one'
slug: Web/JavaScript/Reference/Errors/Already_has_pragma
tags:
  - Error
  - Errors
  - JavaScript
  - Source maps
  - Warning
translation_of: Web/JavaScript/Reference/Errors/Already_has_pragma
---
<div>{{jsSidebar("Errors")}}</div>

<p>JavaScript の警告 "-file- is being assigned a //# sourceMappingURL, but already has one." は、ある JavaScript ソースに対してソースマップが 2 回以上指定されている場合に発生します。</p>

<h2 id="Message">エラーメッセージ</h2>

<pre class="brush: html">Warning: -file- is being assigned a //# sourceMappingURL, but already has one.</pre>

<h2 id="Error_type">エラーの種類</h2>

<p>警告です。 JavaScript の実行が停止されることはありません。</p>

<h2 id="What_went_wrong">エラーの原因</h2>

<p>JavaScript ソースに対して、ソースマップが複数回指定されています。</p>

<p>より効率的にサーバから配信するため、しばしば JavaScript ソースの結合や縮小が行われます。 <a href="https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/">ソースマップ</a>を使用すると、デバッガーは実行されているコードと元のソースファイルを対応付けできます。ソースマップを割り当てるには、コメントを使用するか JavaScript ファイルにヘッダーを設定するかの 2 つの方法があります。</p>

<h2 id="Examples">例</h2>

<h3 id="Setting_source_maps">ソースマップの設定</h3>

<p>ファイル内でコメントを使用してソースマップを設定します。</p>

<pre class="brush: js example-good">//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map</pre>

<p>あるいは、JavaScript ファイルにヘッダーを設定することもできます。</p>

<pre class="brush: js example-good">X-SourceMap: /path/to/file.js.map</pre>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Tools/Debugger/How_to/Use_a_source_map">ソースマップを使用する – Firefox ツールドキュメント</a></li>
 <li><a href="https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/">Introduction to source maps – HTML5 rocks</a></li>
</ul>
