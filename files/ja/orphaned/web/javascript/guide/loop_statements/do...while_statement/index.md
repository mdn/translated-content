---
title: do...while 文
slug: orphaned/Web/JavaScript/Guide/Loop_Statements/do...while_Statement
original_slug: Web/JavaScript/Guide/Loop_Statements/do...while_Statement
---
<h3 id="do...while_.E6.96.87" name="do...while_.E6.96.87">do...while 文</h3>
<p><code>do...while</code> 文は指定した条件が false に評価されるまで繰り返します。<code>do...while</code> 文は次のように使用します。</p>
<pre class="eval">do
   statement
while (condition);
</pre>
<p><code>statement</code> は条件がチェックされる前に一度実行されます。複数の文を実行するにはブロック文 (<code>{ ... }</code>) を使用して文をグループ化してください。<code>condition</code> が true の場合、その文が再び実行されます。毎回実行された後に条件がチェックされます。条件が false ときは実行が停止され、コントロールが <code>do...while</code> の後に続く文に渡されます。</p>
<p><strong>例</strong><br>
  次の例では do ループは最低 1 回は反復され、i が 5 より小さくなくなるまで反復されます。</p>
<pre class="eval">do {
   i += 1;
   document.write(i);
} while (i &lt; 5);
</pre>
<p>{{ PreviousNext("JavaScript/Guide/Loop_Statements/for_Statement", "JavaScript/Guide/Loop_Statements/while_Statement") }}</p>
