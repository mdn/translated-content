---
title: 'TypeError: can''t redefine non-configurable property "x"'
slug: Web/JavaScript/Reference/Errors/Cant_redefine_property
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Cant_redefine_property
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="メッセージ">メッセージ</h2>

<pre class="syntaxbox">TypeError: can't redefine non-configurable property "x" (Firefox)
TypeError: Cannot redefine property: "x" (Chrome)
</pre>

<h2 id="エラータイプ">エラータイプ</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="何がうまくいかなかったのか？">何がうまくいかなかったのか？</h2>

<p>プロパティを再定義しようとしましたが、そのプロパティは<a href="/ja/docs/Web/JavaScript/Data_structures#Properties">設定不可</a>です。<code>configurable</code> 属性は、プロパティをオブジェクトから削除できるかどうか、および (<code>writable</code> 以外で) 変更できるかどうかを制御します。通常、<a href="/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer">オブジェクト初期化子</a>で生成されたオブジェクトのプロパティは、変更可能です。しかし、{{jsxref("Object.defineProperty()")}} を使用した場合などは、既定でプロパティを修正できません。</p>

<h2 id="例">例</h2>

<h3 id="Object.defineProperty_で生成された設定不可のプロパティ"><code>Object.defineProperty</code> で生成された設定不可のプロパティ</h3>

<p>設定可能にしたくない場合、{{jsxref("Object.defineProperty()")}} は設定不可のプロパティを生成します。</p>

<pre class="brush: js example-bad">var obj = Object.create({});
Object.defineProperty(obj, "foo", {value: "bar"});

Object.defineProperty(obj, "foo", {value: "baz"});
// TypeError: can't redefine non-configurable property "foo"
</pre>

<p>後のコードで再定義するためには、"foo" プロパティを設定可能にする必要があります。</p>

<pre class="brush: js example-good">var obj = Object.create({});
Object.defineProperty(obj, "foo", {value: "bar", configurable: true});
Object.defineProperty(obj, "foo", {value: "baz", configurable: true});</pre>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Data_structures#Properties">[[Configurable]]</a></li>
 <li>{{jsxref("Object.defineProperty()")}}</li>
</ul>
