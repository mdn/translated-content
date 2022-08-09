---
title: 'SyntaxError: return not in function'
slug: Web/JavaScript/Reference/Errors/Bad_return_or_yield
translation_of: Web/JavaScript/Reference/Errors/Bad_return_or_yield
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="訊息">訊息</h2>

<pre class="syntaxbox">SyntaxError: return not in function
SyntaxError: yield not in function
</pre>

<h2 id="錯誤類型">錯誤類型</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="哪裡錯了？">哪裡錯了？</h2>

<p><code><a href="/zh-TW/docs/Web/JavaScript/Reference/Statements/return">return</a></code> 或 <code><a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/yield">yield</a></code> 宣告在<a href="/zh-TW/docs/Web/JavaScript/Guide/Functions">函式</a>以外的地方被呼叫。也許少寫了一個大括號？<code>return</code> 與 <code>yield</code> 宣告必須要寫在函式裡面，因為它們結束（或暫停並恢復）函式的執行，並且回傳了特定值。</p>

<h2 id="實例">實例</h2>

<pre class="brush: js example-bad">var cheer = function(score) {
  if (score === 147)
    return "Maximum!";
  };
  if (score &gt; 100) {
    return "Century!";
  }
}

// SyntaxError: return not in function</pre>

<p>乍看之下大括號寫對了，但其實在第一個 <code>if</code> 的後面，少了一個 <code>{</code>。正確的寫法應該是：</p>

<pre class="brush: js example-good">var cheer = function(score) {
  if (score === 147) {
    return "Maximum!";
  }
  if (score &gt; 100) {
    return "Century!";
  }
};</pre>

<h2 id="參見">參見</h2>

<ul>
 <li><code><a href="/zh-TW/docs/Web/JavaScript/Reference/Statements/return">return</a></code></li>
 <li><code><a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/yield">yield</a></code></li>
</ul>
