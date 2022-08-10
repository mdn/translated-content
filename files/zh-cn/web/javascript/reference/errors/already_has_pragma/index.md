---
title: 'Warning: -file- is being assigned a //# sourceMappingURL, but already has one'
slug: Web/JavaScript/Reference/Errors/Already_has_pragma
translation_of: Web/JavaScript/Reference/Errors/Already_has_pragma
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="消息">消息</h2>

<pre class="syntaxbox">Warning: -file- is being assigned a //# sourceMappingURL, but already has one.</pre>

<h2 id="错误类型">错误类型</h2>

<p>一个警告。JavaScript 的执行不会中止。</p>

<h2 id="哪里有问题？">哪里有问题？</h2>

<p>对于给定的 JavaScript 源码，源码映射规定了不止一次。</p>

<p>JavaScript 源码通常被组合和压缩，使其从服务器传递更加高效。 使用了<a href="http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/">源码映射</a>，调试器能够将执行的源码映射到原始的源码。 有两种指派源码映射的方式，通过注释，或者对 JavaScript 设置标题。</p>

<h2 id="示例">示例</h2>

<p>使用文件中的注释来设置源码映射：</p>

<pre class="brush: js example-good">//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map</pre>

<p>或者，你可以对你的 JavaScript 文件设置一个标题：</p>

<pre class="brush: js example-good">X-SourceMap: /path/to/file.js.map</pre>

<h2 id="另见">另见</h2>

<ul>
 <li><a href="/en-US/docs/Tools/Debugger/How_to/Use_a_source_map">如何使用源码映射 – Firefox Tools documentation</a></li>
 <li><a href="http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/">源码映射简介 – HTML5 rocks</a></li>
</ul>
