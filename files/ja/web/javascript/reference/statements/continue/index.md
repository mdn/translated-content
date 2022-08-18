---
title: continue
slug: Web/JavaScript/Reference/Statements/continue
tags:
  - JavaScript
  - Language feature
  - Statement
translation_of: Web/JavaScript/Reference/Statements/continue
---
<div>{{jsSidebar("Statements")}}</div>

<p><strong><code>continue</code> 文</strong>は、現在のループまたはラベル付きループの現在反復処理中の文の実行を終了して、次の反復処理でループの実行を続けます。</p>

<div>{{EmbedInteractiveExample("pages/js/statement-continue.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">continue [<var>label</var>];</pre>

<dl>
 <dt><code><var>label</var></code></dt>
 <dd>その文のラベルに関連付けられた識別子。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p>{{jsxref("Statements/break", "break")}} 文と対照的に、 <code>continue</code> はループの実行を完全には終了しません。代わりに、</p>

<ul>
 <li>{{jsxref("Statements/while", "while")}} ループでは、条件式にジャンプします。</li>
</ul>

<ul>
 <li>{{jsxref("Statements/for", "for")}} ループでは、更新式までジャンプします。</li>
</ul>

<p><code>continue</code> 文には任意でラベルを含めることができ、現在のループの代わりにラベル付きループ文の次の反復処理へジャンプすることができます。この場合、<code>continue</code> 文は、ラベル付き文の中にある必要があります。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_continue_with_while" name="Using_continue_with_while">while における continue の使用</h3>

<p>次の例では、 {{jsxref("Statements/while", "while")}} ループで <code>i</code> の値が 3 であるときに実行される <code>continue</code> 文を持つものを示しています。よって、 <code>n</code> は 1、3、7、12 の値をとります。</p>

<pre class="brush: js notranslate">var i = 0;
var n = 0;

while (i &lt; 5) {
  i++;

  if (i === 3) {
    continue;
  }

  n += i;
}
</pre>

<h3 id="Using_continue_with_a_label" name="Using_continue_with_a_label">ラベル付き continue の使用</h3>

<p>次の例では、<code>checkiandj</code> とラベル付けされた文が、<code>checkj</code> とラベル付けされた文を含んでいます。もし <code>continue</code> と遭遇したなら、プログラムは <code>checkj</code> 文の先頭から継続します。<code>continue</code> と遭遇するたびに、<code>checkj</code> の条件が false を返すまで、<code>checkj</code> は再度反復します。false が返されたら、<code>checkiandj</code> 文の残りが完遂されます。</p>

<p>もし <code>continue</code> がラベル <code>checkiandj</code> を持っていたなら、プログラムは <code>checkiandj</code> 文の先頭から継続します。</p>

<p>{{jsxref("Statements/label", "ラベル", "", 1)}}もご覧ください。</p>

<pre class="brush: js notranslate">var i = 0;
var j = 8;

checkiandj: while (i &lt; 4) {
  console.log('i: ' + i);
  i += 1;

  checkj: while (j &gt; 4) {
    console.log('j: ' + j);
    j -= 1;

    if ((j % 2) == 0)
      continue checkj;
    console.log(j + ' is odd.');
  }
  console.log('i = ' + i);
  console.log('j = ' + j);
}
</pre>

<p>結果:</p>

<pre class="brush: js notranslate">i: 0

// start checkj
j: 8
7 is odd.
j: 7
j: 6
5 is odd.
j: 5
// end checkj

i = 1
j = 4

i: 1
i = 2
j = 4

i: 2
i = 3
j = 4

i: 3
i = 4
j = 4
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
   <td>{{SpecName('ESDraft', '#sec-continue-statement', 'Continue statement')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.statements.continue")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Statements/break", "break")}}</li>
 <li>{{jsxref("Statements/label", "ラベル", "", 1)}}</li>
</ul>
