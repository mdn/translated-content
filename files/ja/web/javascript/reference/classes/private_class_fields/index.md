---
title: プライベートクラスフィールド
slug: Web/JavaScript/Reference/Classes/Private_class_fields
tags:
  - Classes
  - JavaScript
  - Language feature
translation_of: Web/JavaScript/Reference/Classes/Private_class_fields
---
<div>{{JsSidebar("Classes")}}</div>

<p>クラスのプロパティはデフォルトで公開されており、クラスの外で調べたり変更したりすることができます。しかし、ハッシュ <code>#</code> 接頭辞を使ってプライベートなクラスフィールドを定義できるようにする<a href="https://github.com/tc39/proposal-class-fields">実験的な提案</a>があります。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">class ClassWithPrivateField {
  #privateField
}

class ClassWithPrivateMethod {
  #privateMethod() {
    return 'hello world'
  }
}

class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD
}
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Private_static_fields" name="Private_static_fields">プライベートスタティックフィールド</h3>

<p>プライベートフィールドは、クラスのコンストラクタ上でクラス宣言の内部からアクセスできます。</p>

<p>静的変数は静的メソッドからのみ呼び出せるという制限はまだあります。</p>

<pre class="brush: js notranslate">class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD

  static publicStaticMethod() {
    ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42
    return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD
  }
}

console.assert(ClassWithPrivateStaticField.publicStaticMethod() === 42)</pre>

<p>プライベートスタティックフィールドは、クラスの評価時にクラスのコンストラクタに追加されます。</p>

<p>プライベートスタティックフィールドには、プライベートスタティックフィールドを定義しているクラスのみが、そのフィールドにアクセスできるという出自制限があります。</p>

<p>これは、<strong><code>this</code></strong> を使用しているときに予期しない動作をする可能性があります。</p>

<pre class="brush: js notranslate">class BaseClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD

  static basePublicStaticMethod() {
    this.#PRIVATE_STATIC_FIELD = 42
    return this.#PRIVATE_STATIC_FIELD
  }
}

class SubClass extends BaseClassWithPrivateStaticField { }

let error = null

try {
  SubClass.basePublicStaticMethod()
} catch(e) { error = e}

console.assert(error instanceof TypeError)
</pre>

<h3 id="Private_instance_fields" name="Private_instance_fields">プライベートインスタンスフィールド</h3>

<p>プライベートインスタンスフィールドは <strong># names</strong> (<em>ハッシュネーム</em>) で宣言され、これは <code>#</code> を先頭にした識別子です。この <code>#</code> は名前の一部で、宣言やアクセスにも使われます。</p>

<p>このカプセル化は言語によって強制されています。範囲外から <code>#</code> の名前を参照するのは構文エラーです。</p>

<pre class="brush: js notranslate">class ClassWithPrivateField {
  #privateField

  constructor() {
    this.#privateField = 42
    this.#randomField = 444 // Syntax error
  }
}

const instance = new ClassWithPrivateField()
instance.#privateField === 42 // Syntax error
</pre>

<h3 id="Private_methods" name="Private_methods">プライベートメソッド</h3>

<h4 id="Private_static_methods" name="Private_static_methods">プライベートスタティックメソッド</h4>

<p>プライベートスタティックメソッドは、パブリックと同様に、クラスのインスタンスではなく、クラス自体から呼び出されます。プライベートスタティックフィールドと同様に、クラス宣言の内部からのみアクセス可能です。</p>

<p>プライベートスタティックメソッドは、ジェネレーター関数、async、非同期ジェネレーター関数、などがあります</p>

<pre class="brush: js notranslate">class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return 42
  }

  static publicStaticMethod1() {
    return ClassWithPrivateStaticMethod.#privateStaticMethod();
  }

  static publicStaticMethod2() {
    return this.#privateStaticMethod();
  }
}

console.assert(ClassWithPrivateStaticMethod.publicStaticMethod1() === 42);
console.assert(ClassWithPrivateStaticMethod.publicStaticMethod2() === 42);
</pre>

<p><strong><code>this</code></strong> を使用すると、予期しない動作が発生する可能性があります。次の例では、<code>Derived.publicStaticMethod2()</code> を呼び出そうとしたときに、<code>this</code> が <code>派生</code> クラス（<code>Base</code> クラスではない）を参照しており、上で述べたのと同じ "出自制限" を示します。</p>

<pre class="brush: js notranslate">class Base {
  static #privateStaticMethod() {
    return 42;
  }
  static publicStaticMethod1() {
    return Base.#privateStaticMethod();
  }
  static publicStaticMethod2() {
    return this.#privateStaticMethod();
  }
}

class Derived extends Base {}

console.log(Derived.publicStaticMethod1()); // 42
console.log(Derived.publicStaticMethod2()); // TypeError
</pre>

<h4 id="Private_instance_methods" name="Private_instance_methods">プライベートインスタンスメソッド</h4>

<p>プライベートインスタンスメソッドは、プライベートインスタンスフィールドと同様にアクセスが制限されているクラスインスタンスで利用できるメソッドです。</p>

<pre class="brush: js notranslate">class ClassWithPrivateMethod {
  #privateMethod() {
    return 'hello world'
  }

  getPrivateMessage() {
    return this.#privateMethod()
  }
}

const instance = new ClassWithPrivateMethod()
console.log(instance.getPrivateMessage())
// expected output: "hello worl​d"</pre>

<p>プライベートインスタンスメソッドは、ジェネレーター関数、async、非同期ジェネレーター関数のいずれかになります。プライベートなゲッターやセッターも可能です。</p>

<pre class="brush: js notranslate">class ClassWithPrivateAccessor {
  #message

  get #decoratedMessage() {
    return `✨${this.#message}✨`
  }
  set #decoratedMessage(msg) {
    this.#message = msg
  }

  constructor() {
    this.#decoratedMessage = 'hello world'
    console.log(this.#decoratedMessage)
  }
}

new ClassWithPrivateAccessor();
// expected output: "✨hello worl​d✨"
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Public and private instance fields', '#prod-FieldDefinition', 'FieldDefinition')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("javascript.classes.private_class_fields")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields">パブリッククラスフィールド </a></li>
 <li><a href="https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html">The Semantics of All JS Class Elements</a></li>
</ul>
