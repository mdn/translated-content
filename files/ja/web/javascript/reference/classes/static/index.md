---
title: static
slug: Web/JavaScript/Reference/Classes/static
tags:
- Classes
- ECMAScript 2015
- JavaScript
- Language feature
- Static
translation_of: Web/JavaScript/Reference/Classes/static
---
<div>{{jsSidebar("Classes")}}</div>

<p><span class="seoSummary"><code><strong>static</strong></code> キーワードは、クラスに静的メソッドや静的プロパティを定義します。静的メソッドも静的プロパティもクラスのインスタンスからは呼び出されません。その代わりに、クラスそのものから呼び出されます。</span>静的メソッドは多くの場合、オブジェクトの生成や複製を行う関数などのユーティリティ関数です。静的プロパティはキャッシュ、固定的な構成、その他の各インスタンスに複製する必要のないデータです。</p>

<div>{{EmbedInteractiveExample("pages/js/classes-static.html")}}</div>


<h2 id="Syntax">構文</h2>

<pre class="brush: js">static <var>methodName</var>() { ... }
static <var>propertyName </var>[= <var>value</var>];
</pre>

<h2 id="Examples">例</h2>

<h3 id="Using_static_members_in_classes">クラスでの静的メンバーの使用</h3>

<p>次の例はいくつかのことを説明しています。</p>

<ol>
 <li>静的メンバー (メソッドまたはプロパティ) がクラスでどのように定義されるか</li>
 <li>静的メンバーを持つクラスがサブクラスを作れるか</li>
 <li>静的メンバーがどう呼び出せて、どう呼び出せないか</li>
</ol>

<pre class="brush: js">class Triple {
  static customName = 'Tripler';
  static description = 'I triple any number you provide';
  static calculate(n = 1) {
    return n * 3;
  }
}

class SquaredTriple extends Triple {
  static longDescription;
  static description = 'I square the triple of any number you provide';
  static calculate(n) {
    return super.calculate(n) * super.calculate(n);
  }
}

console.log(Triple.description);            // 'I triple any number you provide'
console.log(Triple.calculate());            // 3
console.log(Triple.calculate(6));           // 18

const tp = new Triple();

console.log(SquaredTriple.calculate(3));    // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.description);     // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName);      // 'Tripler'

// This throws because calculate() is a static member, not an instance member.
console.log(tp.calculate());                // 'tp.calculate is not a function'
</pre>

<h3 id="Calling_static_members_from_another_static_method">静的メンバーの別な静的メソッドからの呼び出し</h3>

<p>同じクラス内の静的メソッドまたはプロパティを静的メソッドから呼び出すには、 <code><a href="/ja/docs/Web/JavaScript/Reference/Operators/this">this</a></code> キーワードを使います。</p>

<pre class="brush: js">class StaticMethodCall {
  static staticProperty = 'static property';
  static staticMethod() {
    return 'Static method and ' + this.staticProperty + ' has been called';
  }
  static anotherStaticMethod() {
    return this.staticMethod() + ' from another static method';
  }
}
StaticMethodCall.staticMethod();
// 'Static method and static property has been called'

StaticMethodCall.anotherStaticMethod();
// 'Static method and static property has been called from another static method'</pre>

<h3 id="Calling_static_members_from_a_class_constructor_and_other_methods">クラスのコンストラクターや他のメソッドからの静的メソッドの呼び出し</h3>

<p>静的メソッドは静的ではないメソッドの {{JSxRef("Operators/this", "this")}} キーワードを使用して直接アクセスすることができません。呼び出すにはクラス名を使用して <code>クラス名.静的メソッド名()</code> / <code>クラス名.静的プロパティ名</code> のようにするか、 <code>constructor</code> プロパティのメソッドとして <code>this.constructor.静的メソッド名() </code> / <code>this.constructor.静的プロパティ名</code> のようにしてください。</p>

<pre class="brush: js">class StaticMethodCall {
  constructor() {
    console.log(StaticMethodCall.staticProperty); // 'static property'
    console.log(this.constructor.staticProperty); // 'static property'
    console.log(StaticMethodCall.staticMethod()); // 'static method has been called.'
    console.log(this.constructor.staticMethod()); // 'static method has been called.'
  }

  static staticProperty = 'static property';
  static staticMethod() {
    return 'static method has been called.';
  }
}</pre>

<h2 id="Specifications">仕様書</h2>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">仕様書</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName('ESDraft', '#sec-class-definitions', 'Class definitions')}}</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.classes.static")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/class"><code>class</code> 式</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Statements/class"><code>class</code> 宣言</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Classes">クラス</a></li>
</ul>
