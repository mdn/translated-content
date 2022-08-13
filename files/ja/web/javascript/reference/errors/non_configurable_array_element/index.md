---
title: 'TypeError: can''t delete non-configurable array element'
slug: Web/JavaScript/Reference/Errors/Non_configurable_array_element
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Non_configurable_array_element
---
<div>{{jsSidebar("Errors")}}</div>

<p>JavaScript の例外 "can't delete non-configurable array element" は、配列を<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length#shortening_an_array">短縮</a>しようとしたときに配列の要素の 1 つが<a href="/ja/docs/Web/JavaScript/Data_structures#properties">設定不可</a>であった場合に発生します。</p>

<h2 id="Message">エラーメッセージ</h2>

<pre class="brush: js">TypeError: can't delete non-configurable array element (Firefox)
TypeError: Cannot delete property '2' of [object Array] (Chrome)
</pre>

<h2 id="Error_type">エラーの種類</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="What_went_wrong">エラーの原因</h2>

<p>配列を<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length#shortening_an_array">短縮</a>しようとしていますが、配列の要素が<a href="/ja/docs/Web/JavaScript/Data_structures#properties">変更不可</a>です。配列の短縮をするとき、新しい配列の長さを超える要素は削除されますが、このシチュエーションでは失敗します。</p>

<p><code>configurable</code> 属性はプロパティをオブジェクトから削除できるかどうか、および (<code>writable</code> 以外の) 変更できるかどうかを制御します。</p>

<p>通常、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#syntax">配列初期化子</a>で生成されたオブジェクトのプロパティは変更可能です。しかし、たとえば {{jsxref("Object.defineProperty()")}} が使用された場合、既定でプロパティを変更できません。</p>

<h2 id="例">例</h2>

<h3 id="Non-configurable_properties_created_by_Object.defineProperty"><code>Object.defineProperty</code> で生成した変更不可能なプロパティ</h3>

<p>プロパティを変更できないように指定する場合、{{jsxref("Object.defineProperty()")}} は既定で変更できないプロパティを生成します。</p>

<pre class="brush: js example-bad">"use strict";
var arr = [];
Object.defineProperty(arr, 0, {value: 0});
Object.defineProperty(arr, 1, {value: "1"});

arr.length = 1;
// TypeError: can't delete non-configurable array element
</pre>

<p>配列を短縮したい場合、要素を変更可能に設定する必要があります。</p>

<pre class="brush: js example-good">"use strict";
var arr = [];
Object.defineProperty(arr, 0, {value: 0, configurable: true});
Object.defineProperty(arr, 1, {value: "1", configurable: true});

arr.length = 1;
</pre>

<h3 id="Seal-ed_Arrays">封印された配列</h3>

<p>{{jsxref("Object.seal()")}} 関数はすべての存在する要素を設定不可にします。</p>

<pre class="brush: js example-bad">"use strict";
var arr = [1,2,3];
Object.seal(arr);

arr.length = 1;
// TypeError: can't delete non-configurable array element
</pre>

<p>{{jsxref("Object.seal()")}} の呼び出しを削除するか、配列のコピーを取る必要があります。コピーの場合、コピーした配列の短縮は元の配列の長さに影響しません。</p>

<pre class="brush: js example-good">"use strict";
var arr = [1,2,3];
Object.seal(arr);

// Copy the initial array to shorten the copy
var copy = Array.from(arr);
copy.length = 1;
// arr.length == 3
</pre>

<h2 id="関連項目">関連項目</h2>

<ul>
  <li><a href="/ja/docs/Web/JavaScript/Data_structures#properties">[[Configurable]]</a></li>
  <li>{{jsxref("Array.length")}}</li>
  <li>{{jsxref("Object.defineProperty()")}}</li>
  <li>{{jsxref("Object.seal()")}}</li>
</ul>
