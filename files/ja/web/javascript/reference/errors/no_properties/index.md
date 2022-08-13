---
title: 'TypeError: "x" has no properties'
slug: Web/JavaScript/Reference/Errors/No_properties
tags:
- Error
- Errors
- JavaScript
- TypeError
translation_of: Web/JavaScript/Reference/Errors/No_properties
---
<div>{{jsSidebar("Errors")}}</div>

<p>JavaScript の例外 "null (or undefined) has no properties" は、 {{jsxref("null")}} および {{jsxref("undefined")}} のプロパティにアクセスしようとしたときに発生します。これらには何もありません。They</p>

<h2 id="Message">エラーメッセージ</h2>

<pre class="brush: js">TypeError: Unable to get property {x} of undefined or null reference (Edge)
TypeError: null has no properties (Firefox)
TypeError: undefined has no properties (Firefox)
</pre>

<h2 id="エラータイプ">エラータイプ</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="何がうまくいかなかったのか？">何がうまくいかなかったのか？</h2>

<p>{{jsxref("null")}} と {{jsxref("undefined")}} に、アクセス可能なプロパティはありません。</p>

<h2 id="例">例</h2>

<h3 id="null_and_undefined_have_no_properties">null と undefined にはプロパティがない</h3>

<pre class="brush: js example-bad">null.foo;
// TypeError: null has no properties

undefined.bar;
// TypeError: undefined has no properties
</pre>

<h2 id="関連項目">関連項目</h2>

<ul>
  <li>{{jsxref("null")}}</li>
  <li>{{jsxref("undefined")}}</li>
</ul>
