---
title: 論理和代入 (||=)
slug: Web/JavaScript/Reference/Operators/Logical_OR_assignment
tags:
  - JavaScript
  - 言語機能
  - Logical Operator
  - 演算子
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Logical_OR_assignment
---
{{jsSidebar("Operators")}}

論理和代入演算子 (`x ||= y`) は、`x` が {{Glossary("falsy")}} である場合にのみ代入します。

{{EmbedInteractiveExample("pages/js/expressions-logical-or-assignment.html")}}

<div class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> and send us a pull request.</div>

## 構文

<pre class="syntaxbox notranslate"><em>expr1</em> ||= <em>expr2</em>
</pre>

<h2 id="説明">説明</h2>

<h3 id="短絡評価（ショートサーキット）">短絡評価（ショートサーキット）</h3>

<a href="/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR">論理和</a>演算子は次のように動作します。

<pre class="brush: js notranslate">x || y;
// x が truthy の場合 x を返します
// x が truthy ではない場合 y を返します</pre>

論理和演算子は、1番目のオペランドが既に結果を決定していない場合にのみ、2番目のオペランドの評価を行う短絡評価をします。

論理和代入も短絡評価されます。これは、`x ||= y` が以下と等価であることを意味します。

<pre class="brush: js notranslate">x || (x = y);
</pre>

そして、常に代入が行われる以下と等価ではありません。

<pre class="brush: js notranslate example-bad">x = x || y;
</pre>

注意: この動作は、数学的な代入演算子やビット代入演算子とは異なることに注意してください。

## 例

<h3 id="デフォルトの内容を設定する">デフォルトの内容を設定する</h3>

"lyrics" 要素が空の場合は、`<a href="/ja/docs/Web/API/Element/innerHTML">innerHTML</a>` をデフォルト値に設定します。

<pre class="brush: js notranslate">document.getElementById('lyrics').innerHTML ||= '&lt;i&gt;No lyrics.&lt;/i&gt;'</pre>

ここでの短絡評価は、要素が不必要に更新されることがなく、追加のパースやレンダリング作業、フォーカスの損失などの望ましくない副作用を引き起こすことがないので、特に有益です。

注意: チェック対象の API が返す値に注意してください。空の文字列（{{Glossary("falsy")}} な値）が返される場合は、`||=` を使用する必要があります。それ以外の場合（戻り値が {{jsxref("null")}} または {{jsxref("undefined")}} の場合）は `??=` 演算子を使用します。

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
  </tr>
  <tr>
   <td>{{SpecName('Logical Assignment', '#sec-assignment-operators', 'Assignment operators')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>



{{Compat("javascript.operators.logical_or_assignment")}}

<h2 id="関連情報">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR">論理和演算子 (||)</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator">Null合体演算子 (`??`)</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment">ビット論理和代入 (`|=`)</a></li>
 <li>{{jsxref("Boolean")}}</li>
 <li>{{Glossary("Truthy")}}</li>
 <li>{{Glossary("Falsy")}}</li>
</ul>
