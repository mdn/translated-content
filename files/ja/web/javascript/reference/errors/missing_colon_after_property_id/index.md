---
title: 'SyntaxError: missing : after property id'
slug: Web/JavaScript/Reference/Errors/Missing_colon_after_property_id
tags:
- Error
- Errors
- JavaScript
- SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_colon_after_property_id
---
<div>{{jsSidebar("Errors")}}</div>

<p>JavaScript の例外 "missing : after property id" は、オブジェクトが<a href="/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer">オブジェクト初期化子</a>の構文を使用して生成されたときに発生します。コロン (<code>:</code>) はオブジェクトのプロパティのキーと値を区切ります。おそらく、このコロンがないか場所が間違っているかです。</p>

<h2 id="Message">エラーメッセージ</h2>

<pre class="brush: js">SyntaxError: Expected ':' (Edge)
SyntaxError: missing : after property id (Firefox)
</pre>

<h2 id="エラータイプ">エラータイプ</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="何がうまくいかなかったのか？">何がうまくいかなかったのか？</h2>

<p><a href="/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer">オブジェクト初期化子</a>構文でオブジェクトを生成する場合、オブジェクトのプロパティのキーと値をコロン (<code>:</code>) で区切ります。</p>

<pre class="brush: js">var obj = { propertyKey: 'value' };
</pre>

<h2 id="例">例</h2>

<h3 id="Colons_vs._equal_signs">コロンと代入記号</h3>

<p>この方法で代入記号をオブジェクト初期化子構文として使用できないため、このコードは失敗します。</p>

<pre class="brush: js example-bad">var obj = { propertyKey = 'value' };
// SyntaxError: missing : after property id
</pre>

<p>正しくはコロンを使用するか、オブジェクトを生成した後に角括弧を使用して新しいプロパティを割り当てます。</p>

<pre class="brush: js example-good">var obj = { propertyKey: 'value' };

// または

var obj = { };
obj['propertyKey'] = 'value';
</pre>

<h3 id="Empty_properties">空のプロパティ</h3>

<p>次のような方法では、プロパティを生成することができません。</p>

<pre class="brush: js example-bad">var obj = { propertyKey; };
// SyntaxError: missing : after property id
</pre>

<p>値がないプロパティを定義する必要がある場合、値として {{jsxref("null")}} を使用することができます。</p>

<pre class="brush: js example-good">var obj = { propertyKey: null };</pre>

<h3 id="Computed_properties">計算されたプロパティ</h3>

<p>式からプロパティキーを生成する場合、角括弧を使用してください。そうしなければ、プロパティ名を計算することができません。</p>

<pre class="brush: js example-bad">var obj = { 'b'+'ar': 'foo' };
// SyntaxError: missing : after property id
</pre>

<p>式を括弧 <code>[]</code> に入れてください。</p>

<pre class="brush: js example-good">var obj = { ['b'+'ar']: 'foo' };</pre>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer">オブジェクト初期化子</a></li>
</ul>
