---
title: 'InternalError: too much recursion'
slug: Web/JavaScript/Reference/Errors/Too_much_recursion
tags:
  - Error
  - Errors
  - InternalError
  - JavaScript
translation_of: Web/JavaScript/Reference/Errors/Too_much_recursion
---
<div>{{jsSidebar("Errors")}}</div>

<p>JavaScript の例外である "too much recursion" または "Maximum call stack size exceeded" は、関数の呼び出しが多すぎる場合や、関数に基礎ケースがない場合に発生します。</p>

<h2 id="Message">メッセージ</h2>

<pre class="brush: js">Error: Out of stack space (Edge)
InternalError: too much recursion (Firefox)
RangeError: Maximum call stack size exceeded (Chrome)
</pre>

<h2 id="Error_type">エラーの種類</h2>

<p>{{jsxref("InternalError")}}。</p>

<h2 id="What_went_wrong">エラーの原因</h2>

<p>自分自身を呼び出す関数は<em>再帰関数</em>と呼ばれます。ある条件を満たすと、関数は自分自身を呼び出すのをやめます。これは<em>基礎ケース</em>と呼ばれます。</p>

<p>いくつかの点で、再帰はループに似ています。両方とも、同じコードを複数回実行し、 (無限ループまたは無限再帰を避けるために) 条件を必要とします。関数の再帰呼び出しが深すぎる場合、または関数が基礎ケースを欠いている場合、 JavaScript はこのエラーを発生します。</p>

<h2 id="Examples">例</h2>

<p>終了条件に従って、この再帰関数は 10 回実行されます。</p>

<pre class="brush: js">function loop(x) {
  if (x &gt;= 10) // "x &gt;= 10" は終了条件
    return;
  // 何かを実行
  loop(x + 1); // 再帰呼び出し
}
loop(0);</pre>

<p>この条件に、非常に大きい値を設定すると動作しません。</p>

<pre class="brush: js example-bad">function loop(x) {
  if (x &gt;= 1000000000000)
    return;
  // 何かを実行
  loop(x + 1);
}
loop(0);

// InternalError: too much recursion</pre>

<p>この再帰関数は基礎ケースを欠いています。脱出条件がないため、この関数は自分自身を無限に呼び出し続けます。</p>

<pre class="brush: js example-bad">function loop(x) {
 // The base case is missing

loop(x + 1); // 再帰呼び出し
}

loop(0);

// InternalError: too much recursion</pre>

<h3 id="Class_error_too_much_recursion">Class error: too much recursion</h3>

<pre class="brush: js example-bad">class Person{
	constructor(){}
	set name(name){
		this.name = name; // 再帰呼び出し
	}
}

const tony = new Person();
tony.name = "Tonisha"; // InternalError: too much recursion
</pre>

<p>値がプロパティ name に代入されるとき (this.name = name;) JavaScript はプロパティを設定する必要があります。これが発生すると、セッター関数が呼び出されます。</p>

<pre class="brush: js example-bad">set name(name){
	this.name = name; // 再帰呼び出し
}
</pre>

<div class="note">
	<p>この例では、セッターが呼び出されたとき、同じことを再度行うように指示されます。<em>つまり、処理しているのと同じプロパティに設定します。</em>これにより、関数は何度も何度も自分自身を呼び出し、無限に再帰が行われます。</p>
</div>

<p>この問題は同じ変数がゲッターに使用される場合にも発生します。</p>

<pre class="brush: js example-bad">get name(){
	return this.name; // 再帰呼び出し
}
</pre>

<p>この問題を防ぐには、セッター関数の内部で代入しようとしているプロパティが、もともとセッターを起動したものと異なっていることを確認してください。同じことがゲッターにも言えます。</p>

<pre class="brush: js">class Person{
	constructor(){}
	set name(name){
		this._name = name;
	}
	get name(){
		return this._name;
	}
}
const tony = new Person();
tony.name = "Tonisha";
console.log(tony);
</pre>

<h2 id="See_also">関連情報</h2>

<ul>
	<li>{{Glossary("Recursion", "再帰")}}</li>
	<li><a href="/ja/docs/Web/JavaScript/Guide/Functions#recursion">再帰関数</a></li>
</ul>
