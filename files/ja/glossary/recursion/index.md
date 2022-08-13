---
title: Recursion (再帰)
slug: Glossary/Recursion
tags:
  - CodingScripting
  - Glossary
translation_of: Glossary/Recursion
---
<p>関数が自分自身を呼び出す動作、再帰は問題がより小さな小問題から成っている場合に解決するのに使われます。再帰関数は、ベースケース (再帰終了) と再帰ケース (再帰再開) の2種類の入力を受け取る可能性があります。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Recursive_function_calls_itself_until_condition_met" name="Recursive_function_calls_itself_until_condition_met">条件が揃うまで再帰関数が自分自身を呼び出す</h3>

<p>次の Python コードは、数値を受け取り、それを表示し、数値の値 -1 を指定して再度呼び出す関数を定義しています。 数値が 0 になるまで続け、0 になると停止します。</p>

<pre>def recurse(x):
   if x &gt; 0:
       print(x)
       recurse(x - 1)

recurse(10)</pre>

<p>出力は次のようになります。</p>

<p>10<br>
 9<br>
 8<br>
 7<br>
 6<br>
 5<br>
 4<br>
 3<br>
 2<br>
 1<br>
 0</p>

<h2 id="Learn_more" name="Learn_more">関連項目</h2>

<h3 id="General_knowledge" name="General_knowledge">一般知識</h3>

<ul>
 <li>Wikipedia の {{interwiki("wikipedia", "再帰")}}</li>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Functions#Recursion">JavaScript での再帰についての詳細</a></li>
</ul>
