---
title: 'SyntaxError: return not in function'
slug: Web/JavaScript/Reference/Errors/Bad_return_or_yield
tags:
- Error
- Errors
- JavaScript
- SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Bad_return_or_yield
---
<div>{{jsSidebar("Errors")}}</div>

<p>JavaScript の例外 "return (or yield) not in function" は、 <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/return">return</a></code> 文または <code><a href="/ja/docs/Web/JavaScript/Reference/Operators/yield">yield</a></code> 文が<a href="/ja/docs/Web/JavaScript/Guide/Functions">関数</a>の外側で呼び出されたときに発生します。</p>

<h2 id="Message">エラーメッセージ</h2>

<pre class="brush: js">SyntaxError: 'return' statement outside of function (Edge)
SyntaxError: return not in function (Firefox)
SyntaxError: yield not in function (Firefox)
</pre>

<h2 id="Error_type">エラーの種類</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="What_went_wrong">エラーの原因</h2>

<p><code><a href="/ja/docs/Web/JavaScript/Reference/Statements/return">return</a></code> 文か <code><a href="/ja/docs/Web/JavaScript/Reference/Operators/yield">yield</a></code> 文が <a href="/ja/docs/Web/JavaScript/Guide/Functions">関数</a> の外側で呼び出されました。どこかで、中括弧を忘れたのかもしれません。 <code>return</code> 文と <code>yield</code> 文は、関数内で使用しなければなりません。これらの文は、関数の実行を終了 (または、停止や再開) し、関数の呼び出し元に返す値を指定するからです。</p>

<h2 id="Examples">例</h2>

<h3 id="Missing_curly_brackets">中括弧がない場合</h3>

<pre class="brush: js example-bad">var cheer = function(score) {
  if (score === 147)
    return 'Maximum!';
  };
  if (score &gt; 100) {
    return 'Century!';
  }
}

// SyntaxError: return not in function</pre>

<p>一見すると、中括弧は正しく見えますが、このコードスニペットでは、最初の <code>if</code> 文の後の <code>{</code> を忘れています。正しくは以下のようにします。</p>

<pre class="brush: js example-good">var cheer = function(score) {
  if (score === 147) {
    return 'Maximum!';
  }
  if (score &gt; 100) {
    return 'Century!';
  }
};</pre>

<h2 id="See_also">関連情報</h2>

<ul>
  <li>
    <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/return">return</a></code>
  </li>
  <li>
    <code><a href="/ja/docs/Web/JavaScript/Reference/Operators/yield">yield</a></code>
  </li>
</ul>
