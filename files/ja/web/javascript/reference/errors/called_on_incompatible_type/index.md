---
title: 'TypeError: X.prototype.y called on incompatible type'
slug: Web/JavaScript/Reference/Errors/Called_on_incompatible_type
tags:
- Error
- Errors
- JavaScript
- TypeError
translation_of: Web/JavaScript/Reference/Errors/Called_on_incompatible_type
---
<div>{{jsSidebar("Errors")}}</div>

<p>JavaScript の例外 "called on incompatible target (or object)" は、関数が (与えられたオブジェクト上で) 呼び出されたときに、関数が期待する型に対応していない <code>this</code> を使用して呼び出された場合に発生します。</p>

<h2 id="Message">エラーメッセージ</h2>

<pre class="brush: js">TypeError: 'this' is not a Set object (Edge)
TypeError: Function.prototype.toString called on incompatible object (Firefox)
TypeError: Function.prototype.bind called on incompatible target (Firefox)
TypeError: Method Set.prototype.add called on incompatible receiver undefined (Chrome)
TypeError: Bind must be called on a function (Chrome)
</pre>

<h2 id="Error_type">エラーの種類</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="What_went_wrong">エラーの原因</h2>

<p>このエラーが発生する場合、(指定されたオブジェクト上の) 関数が、関数が予期する型に対応していない <code>this</code> と共に呼び出されています。</p>

<p>この問題は {{jsxref("Function.prototype.call()")}} メソッドか {{jsxref("Function.prototype.apply()")}} メソッドを使用して、予期していない型の <code>this</code> 引数を渡した場合に発生します。</p>

<p>この問題は、オブジェクトのプロパティとして格納されている関数を他の関数の引数として提供する場合にも発生します。この場合、関数を格納しているオブジェクトは、他の関数から呼び出されたときに、その関数の <code>this</code> のターゲットにはなりません。この問題を回避するには、呼び出しを行っているラムダを提供するか、 {{jsxref("Function.prototype.bind()")}} 関数を使用して <code>this</code> 引数を期待されるオブジェクトに強制的に渡す必要があります。</p>

<h2 id="Examples">例</h2>

<h3 id="Invalid_cases">無効な場合</h3>

<pre class="brush: js example-bad">var mySet = new Set;
['bar', 'baz'].forEach(mySet.add);
// mySet.add is a function, but "mySet" is not captured as this.

var myFun = function () {
  console.log(this);
};
['bar', 'baz'].forEach(myFun.bind);
// myFun.bind is a function, but "myFun" is not captured as this.

</pre>

<h3 id="Valid_cases">妥当な場合</h3>

<pre class="brush: js example-good">var mySet = new Set;
['bar', 'baz'].forEach(mySet.add.bind(mySet));
// This works due to binding "mySet" as this.

var myFun = function () {
  console.log(this);
};
['bar', 'baz'].forEach(x =&gt; myFun.bind(x));
// This works using the "bind" function. It creates a lambda forwarding the argument.

</pre>

<h2 id="See_also">関連情報</h2>

<ul>
  <li>{{jsxref("Function.prototype.call()")}}</li>
  <li>{{jsxref("Function.prototype.apply()")}}</li>
  <li>{{jsxref("Function.prototype.bind()")}}</li>
</ul>
