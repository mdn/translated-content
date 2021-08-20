---
title: 'TypeError: "x" is not a constructor'
slug: Web/JavaScript/Reference/Errors/Not_a_constructor
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Not_a_constructor
---
{{jsSidebar("Errors")}}

JavaScript の例外 "is not a constructor" は、オブジェクトや変数をコンストラクターとして使用しようとしたものの、そのオブジェクトや変数がコンストラクターではなかった場合に発生します。

## エラーメッセージ

```js
TypeError: Object doesn't support this action (Edge)
TypeError: "x" is not a constructor

TypeError: Math is not a constructor
TypeError: JSON is not a constructor
TypeError: Symbol is not a constructor
TypeError: Reflect is not a constructor
TypeError: Intl is not a constructor
TypeError: Atomics is not a constructor
```

## エラーの種類

{{jsxref("TypeError")}}

## エラーの原因

オブジェクトや変数をコンストラクターとして使おうとしていますが、それらがコンストラクターではありません。コンストラクターとは何かについては、[コンストラクター](/ja/docs/Glossary/Constructor)または [`new` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/new)を参照してください。

{{jsxref("String")}} や {{jsxref("Array")}} のような、 `new` を使用して生成できる数多くのグローバルオブジェクトがあります。しかし、いくつかのグローバルオブジェクトはそうではなく、それらのプロパティやメソッドは静的です。次の JavaScript 標準組み込みオブジェクトのうち、 {{jsxref("Math")}}、{{jsxref("JSON")}}、{{jsxref("Symbol")}}、{{jsxref("Reflect")}}、{{jsxref("Intl")}}、{{jsxref("Atomics")}} はコンストラクターではありません。

[ジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/function*)も、コンストラクターとして使用することはできません。

## 例

### 無効な場合

```js example-bad
var Car = 1;
new Car();
// TypeError: Car is not a constructor

new Math();
// TypeError: Math is not a constructor

new Symbol();
// TypeError: Symbol is not a constructor

function* f() {};
var obj = new f;
// TypeError: f is not a constructor
```

### car コンストラクター

自動車のためのオブジェクト型を作成するとします。このオブジェクト型を `Car` と呼び、 make, model, year の各プロパティを持つようにしたいとします。これを実現するには、次のような関数を定義します。

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

次のようにして `mycar` というオブジェクトを生成できるようになりました。

```js
var mycar = new Car('Eagle', 'Talon TSi', 1993);
```

### プロミスの場合

ただちに解決するか拒否されるプロミスを返す場合は、 _new Promise(...)_ を生成して操作する必要はありません。

これは正しくなく ([Promise コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)が正しく呼び出されません)、 `TypeError: this is not a constructor` 例外が発生します。</p>

```js example-bad
return new Promise.resolve(true);
```

代わりに、 [Promise.resolve()](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) または
[Promise.reject()](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject) の[静的メソッド](<https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89_(%E8%A8%88%E7%AE%97%E6%A9%9F%E7%A7%91%E5%AD%A6)#%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%81%A8%E3%82%AF%E3%83%A9%E3%82%B9%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89>)を使用してください。

<pre class="brush: js">// This is legal, but unnecessarily long:
return new Promise((resolve, reject) =&gt; { resolve(true); })

// Instead, return the static method:
return Promise.resolve(true);
return Promise.reject(false);
</pre>

<h2 id="See_also">関連情報</h2>

<ul>
  <li><a href="/ja/docs/Glossary/Constructor">コンストラクター</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/new"><code>new</code></a> 演算子</li>
</ul>
