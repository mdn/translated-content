---
title: eval 関数
slug: orphaned/Web/JavaScript/Guide/Predefined_Functions/eval_Function
original_slug: Web/JavaScript/Guide/Predefined_Functions/eval_Function
---

<div class="onlyinclude"><h3 id="eval_.E9.96.A2.E6.95.B0" name="eval_.E9.96.A2.E6.95.B0">eval 関数</h3><p><code>eval</code> 関数は JavaScript のコードの文字列を特定のオブジェクトを参照することなく評価します。eval の構文は次のとおりです。</p><pre>eval(expr)
</pre><p>ここで <code>expr</code> は評価される文字列です。</p>文字列が式を表している場合は <code>eval</code> はその式を評価します。また、1 つ以上の JavaScript の文を表している場合は eval はその式を実行します。<code>eval</code> のコードのスコープは呼び出し元コードのスコープと同じです。演算式を評価するために <code>eval</code> を呼び出さないでください。JavaScript は自動的に演算式を評価します。</div>

{{ PreviousNext("JavaScript/Guide/Predefined_Functions", "JavaScript/Guide/Predefined_Functions/isFinite_Function") }}
