---
title: break 文
slug: orphaned/Web/JavaScript/Guide/Loop_Statements/break_Statement
original_slug: Web/JavaScript/Guide/Loop_Statements/break_Statement
---
<h3 id="break_.E6.96.87" name="break_.E6.96.87">break 文</h3>
<p><code>break</code> 文は <code>loop</code> 文や <code>switch</code> 文、<code>label</code> 文から抜け出すために使用します。</p>
<ul>
  <li><code>break</code> にラベルを使用しないと、最も内側にある <code>while</code> や <code>do-while</code>、<code>for</code>、<code>switch</code> から抜け、続く文にコントロールを移します。</li>
  <li><code>break</code> にラベルを使用すると、指定されたラベルの付いた文から抜けます。</li>
</ul>
<p>break 文は次のように使用します。</p>
<ol>
  <li><code>break;</code></li>
  <li><code>break label;</code></li>
</ol>
<p>１番目の形式の構文は最も内側のループもしくは <code>switch</code> から抜けます。２番目の形式の構文は指定した label 文から抜けます。</p>
<p><strong>例</strong><br>
  次の例は、その値が <code>theValue</code> である要素のインデックスが見つかるまで、配列の要素について繰り返します。</p>
<pre>for (i = 0; i &lt; a.length; i++) {
   if (a[i] == theValue)
      break;
}
</pre>
<p>{{ PreviousNext("JavaScript/Guide/Loop_Statements/label_Statement", "JavaScript/Guide/Loop_Statements/continue_Statement") }}</p>
