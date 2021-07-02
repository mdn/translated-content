---
title: break
slug: Web/JavaScript/Reference/Statements/break
tags:
  - JavaScript
  - Language feature
  - Reference
  - Statement
translation_of: Web/JavaScript/Reference/Statements/break
---
<div>{{jsSidebar("Statements")}}</div>

<p><strong><code>break</code> 文</strong>は現在のループや {{jsxref("Statements/switch", "switch")}} 文や{{jsxref("Statements/label", "ラベル", "", 1)}}文を中断し、中断した文の次の文にプログラムの制御を移します。</p>

<div>{{EmbedInteractiveExample("pages/js/statement-break.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">break [<var>label</var>];</pre>

<dl>
 <dt><code><var>label</var></code> {{optional_inline}}</dt>
 <dd>中断する文のラベルに関連付けられた識別子。中断する文がループでも {{jsxref("Statements/switch", "switch")}} でもない場合、ラベルは必須です。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p><code>break</code> 文は、オプションでラベルを指定して、ラベル付き文の外にプログラムを脱出させることができます。 <code>break</code> 文は参照されるラベルの内側にある必要があります。ラベルはあらゆる{{jsxref("Statements/block", "ブロック", "", 1)}}文に付けることができます。ループ文の前である必要はありません。</p>

<p><code>break</code> 文は、その後にラベルがあるかどうかに関わらず、 <code>break</code> 文で脱出しようとする現在のループや switch やラベル付き文の中に含まれる関数の本体の中で使用することはできません。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="break_in_while_loop" name="break_in_while_loop">while ループにおける break</h3>

<p>次の関数には <code>i</code> が <code>3</code> の時に {{jsxref("Statements/while", "while")}} 文を中断する <code>break</code> 文があるので、<code>3 * x</code> の値を返します。</p>

<pre class="brush:js;highlight:[6]; notranslate">function testBreak(x) {
  var i = 0;

  while (i &lt; 6) {
    if (i == 3) {
      break;
    }
    i += 1;
  }

  return i * x;
}</pre>

<h3 id="break_in_switch_statements" name="break_in_switch_statements">switch 文における break</h3>

<p>次のコードには、一致する case と対応するコードが実行された後で {{jsxref("Statements/switch", "switch")}} 文を終了するための <code>break</code> があります。</p>

<pre class="brush:js;highlight:[6]; notranslate">const food = "sushi";

switch (food) {
  case "sushi":
    console.log("Sushi is originally from Japan.");
    break;
  case "pizza":
    console.log("Pizza is originally from Italy.");
    break;
  default:
    console.log("I have never heard of that dish.");
    break;
}
</pre>

<h3 id="break_in_labeled_blocks" name="break_in_labeled_blocks">ラベル付きブロックにおける break</h3>

<p>次のコードは、ラベル付きブロックで <code>break</code> 文を使っています。 <code>break</code> 文は、それを参照するラベル付き文の内側になければなりません。 <code>inner_block</code> が <code>outer_block</code> の中にあることに注意してください。</p>

<pre class="brush:js;highlight:[1,2,4]; notranslate">outer_block: {
  inner_block: {
    console.log('1');
    break outer_block; // inner_block および outer_block の両方から抜けます
    console.log(':-('); // スキップされる
  }
  console.log('2'); // スキップされる
}
</pre>

<h3 id="break_in_labeled_blocks_that_throw" name="break_in_labeled_blocks_that_throw">ラベル付きブロックにおける break でエラーが発生するもの</h3>

<p>次のコードもラベル付きブロックで <code>break</code> 文を使っていますが、 <code>break</code> 文が <code>block_1</code> の内側にあるにもかかわらず <code>block_2</code> を参照しているので、 <code>SyntaxError</code> が発生します。 <code>break</code> は、参照先ラベルの内側になければなりません。</p>

<pre class="brush:js;highlight:[1,3,6]; notranslate">block_1: {
  console.log('1');
  break block_2; // SyntaxError: label not found
}

block_2: {
  console.log('2');
}
</pre>

<h3 id="break_within_functions" name="break_within_functions">関数における break</h3>

<p>以下のコード例でも <code>SyntaxError</code> が発生します。これは <code>break</code> をループの中にある関数や、 <code>break</code> 文で脱出しようとしているラベル付きブロックの中にある関数の中で使用しているためです。</p>

<pre class="brush:js;highlight:[1,3,6]; notranslate">function testBreak(x) {
  var i = 0;

  while (i &lt; 6) {
    if (i == 3) {
      (function() {
        break;
      })();
    }
    i += 1;
  }

return i * x;
}

testBreak(1); // SyntaxError: Illegal break statement
</pre>

<pre class="brush:js;highlight:[1,3,6]; notranslate">block_1: {
  console.log('1');
  ( function() {
    break block_1; // SyntaxError: Undefined label 'block_1'
  })();
}
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-break-statement', 'Break statement')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.statements.break")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Statements/continue", "continue")}}</li>
 <li>{{jsxref("Statements/label", "ラベル", "", 1)}}</li>
 <li>{{jsxref("Statements/switch", "switch")}}</li>
</ul>
