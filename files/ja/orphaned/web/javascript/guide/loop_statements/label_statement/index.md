---
title: label 文
slug: orphaned/Web/JavaScript/Guide/Loop_Statements/label_Statement
original_slug: Web/JavaScript/Guide/Loop_Statements/label_Statement
---
<h3 id="label_.E6.96.87" name="label_.E6.96.87">label 文</h3>
<p><code>label</code> を使うと、そのプログラムのどこからでも参照できる、識別子を持った文を作ることができます。例えば、ラベルを使用してあるループに名前を付けると、<code>break</code> 文や <code>continue</code> 文を使用してプログラムがループを脱出するべきかそのまま実行を継続するべきかを示すことができます。</p>
<p><code>label</code> 文は次のように使用します。</p>
<pre>label :
   statement
</pre>
<p><code>label</code> の値は予約語でなければどんな JavaScript の識別子でも使用できます。ラベルを用いて名前を付ける <code>statement</code> はどんな文でも結構です。</p>
<p><strong>例</strong><br>
  この例では <code>markLoop</code> というラベルを用いて while ループに名前を付けています。</p>
<pre>markLoop:
while (theMark == true)
   doSomething();
}
</pre>
<p>{{ PreviousNext("JavaScript/Guide/Loop_Statements/while_Statement", "JavaScript/Guide/Loop_Statements/break_Statement") }}</p>
