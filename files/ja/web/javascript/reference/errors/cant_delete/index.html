---
title: 'TypeError: property "x" is non-configurable and can''t be deleted'
slug: Web/JavaScript/Reference/Errors/Cant_delete
tags:
  - Error
  - Errors
  - JavaScript
  - Strict Mode
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Cant_delete
---
<div>{{jsSidebar("Errors")}}</div>

<p>JavaScript の例外 "property is non-configurable and can't be deleted" は、プロパティを削除しようとしたが、そのプロパティが<a
 href="/ja/docs/Web/JavaScript/Data_structures#properties">構成不可</a>である場合に発生します。</p>

<h2 id="Message">エラーメッセージ</h2>

<pre class="brush: js">TypeError: Calling delete on 'x' is not allowed in strict mode (Edge)
TypeError: property "x" is non-configurable and can't be deleted. (Firefox)
TypeError: Cannot delete property 'x' of #&lt;Object&gt; (Chrome)
</pre>

<h2 id="Error_type">エラーの種類</h2>

<p>strict モードでのみ、{{jsxref("TypeError")}} の警告が出ます。</p>

<h2 id="What_went_wrong">エラーの原因</h2>

<p>プロパティを削除しようとしましたが、プロパティが <a href="/ja/docs/Web/JavaScript/Data_structures#properties">non-configurable</a> でした。<code>configurable</code> 属性は、オブジェクトからプロパティを削除できるかどうか、および (<code>writable</code> を除く) 属性を変更できるかどうかを制御します。</p>

<p>このエラーは、<a href="/ja/docs/Web/JavaScript/Reference/Strict_mode">strict モードのコード</a> でのみ発生します。非 strict コードでは、この操作は <code>false</code> を返します。</p>

<h2 id="Examples">例</h2>

<h3 id="Attempting_to_delete_non-configurable_properties">構成不可のプロパティに対する削除の試み</h3>

<p>構成不可のプロパティは、さほど一般的ではありませんが、{{jsxref("Object.defineProperty()")}} か {{jsxref("Object.freeze()")}} を使用して生成することができます。</p>

<pre class="brush: js example-bad">'use strict';
var obj = Object.freeze({name: 'Elsa', score: 157});
delete obj.score;  // TypeError

'use strict';
var obj = {};
Object.defineProperty(obj, 'foo', {value: 2, configurable: false});
delete obj.foo;  // TypeError

'use strict';
var frozenArray = Object.freeze([0, 1, 2]);
frozenArray.pop();  // TypeError
</pre>

<p>JavaScript に組み込まれた、少数の構成不可プロパティもあります。もしかしたら、Math の定数を削除しようとしたのかもしれません。</p>

<pre class="brush: js example-bad">'use strict';
delete Math.PI;  // TypeError</pre>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/delete">delete</a></li>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li>{{jsxref("Object.freeze()")}}</li>
</ul>
