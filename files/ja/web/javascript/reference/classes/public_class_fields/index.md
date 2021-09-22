---
title: パブリッククラスフィールド
slug: Web/JavaScript/Reference/Classes/Public_class_fields
tags:
  - Classes
  - JavaScript
  - Language feature
translation_of: Web/JavaScript/Reference/Classes/Public_class_fields
---
<div>{{JsSidebar("Classes")}}</div>

<div class="note">
<p><strong>このページは、実験的な機能について説明しています。</strong></p>

<p>パブリックフィールド宣言とプライベートフィールド宣言の両方は、JavaScript の標準化委員会である <a href="https://tc39.github.io/beta/">TC39</a> で提案された<a href="https://github.com/tc39/proposal-class-fields">実験的な機能(ステージ 3)</a>です。</p>

<p>ブラウザーのサポートは限られていますが、<a href="https://babeljs.io/">Babel</a> のようなシステムではビルドステップを経て機能を利用することができます。下記の<a href="#ブラウザーの互換性">互換性情報</a>を参照してください。</p>
</div>

<p>パブリックスタティックフィールドとパブリックインスタンスフィールドは、書き込み可能、列挙可能、設定可能なプロパティです。そのため、プライベートとは異なり、プロトタイプの継承に参加します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">class ClassWithInstanceField {
  instanceField = 'instance field'
}

class ClassWithStaticField {
  static staticField = 'static field'
}

class ClassWithPublicInstanceMethod {
  publicMethod() {
    return 'hello world'
  }
}
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Public_static_fields" name="Public_static_fields">パブリックスタティックフィールド</h3>

<p>パブリックスタティックフィールドは、すべてのクラスインスタンスを作成するのではなく、クラスごとに一度だけフィールドが存在するようにしたい場合に役立ちます。これは、キャッシュや固定設定、その他インスタンス間で複製する必要のないデータなどに便利です。</p>

<p>パブリックスタティックフィールドは、<code>static</code> キーワードを使用して宣言されます。これらは、クラスの評価時に{{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}} を使用してコンストラクタに追加され、その後はコンストラクタからアクセスします。</p>

<pre class="brush: js notranslate">class ClassWithStaticField {
  static staticField = 'static field'
}

console.log(ClassWithStaticField.staticField)
// expected output: "static field"​
</pre>

<p>初期化子のないフィールドは <code>undefined</code> に初期化されます。</p>

<pre class="brush: js notranslate">class ClassWithStaticField {
  static staticField
}

console.assert(ClassWithStaticField.hasOwnProperty('staticField'))
console.log(ClassWithStaticField.staticField)
// expected output: "undefined"</pre>

<p>パブリックスタティックフィールドはサブクラスを再初期化しませんが、プロトタイプチェーンを介してアクセスすることができます。</p>

<pre class="brush: js notranslate">class ClassWithStaticField {
  static baseStaticField = 'base field'
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = 'sub class field'
}

console.log(SubClassWithStaticField.subStaticField)
// expected output: "sub class field"

console.log(SubClassWithStaticField.baseStaticField)
// expected output: "base field"</pre>

<p>フィールドを初期化する場合、<code>this</code> はクラスのコンストラクタを参照します。また、名前で参照し、スーパークラスのコンストラクタが存在する場合は <code>super</code> を使用してスーパークラスのコンストラクタを取得することもできます (存在する場合)。</p>

<pre class="brush: js notranslate">class ClassWithStaticField {
  static baseStaticField = 'base static field'
  static anotherBaseStaticField = this.baseStaticField

  static baseStaticMethod() { return 'base static method output' }
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = super.baseStaticMethod()
}

console.log(ClassWithStaticField.anotherBaseStaticField)
// expected output: "base static field"

console.log(SubClassWithStaticField.subStaticField)
// expected output: "base static method output"
</pre>

<h3 id="Public_instance_fields" name="Public_instance_fields">パブリックインスタンスフィールド</h3>

<p>パブリックインスタンスフィールドは、作成されたクラスのすべてのインスタンスに存在します。パブリックフィールドを宣言することで、フィールドが常に存在していることを確認でき、クラスの定義がより自己文書化されます。</p>

<p>パブリック インスタンスフィールドは、ベースクラスの構築時（コンストラクタ本体が実行される前）、またはサブクラスの <code>super()</code> が返された直後のいずれかに {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}} で追加されます。</p>

<pre class="brush: js notranslate">class ClassWithInstanceField {
  instanceField = 'instance field'
}

const instance = new ClassWithInstanceField()
console.log(instance.instanceField)
// expected output: "instance field"</pre>

<p>初期化子のないフィールドは <code>undefined</code> に初期化されます。</p>

<pre class="brush: js notranslate">class ClassWithInstanceField {
  instanceField
}

const instance = new ClassWithInstanceField()
console.assert(instance.hasOwnProperty('instanceField'))
console.log(instance.instanceField)
// expected output: "undefined"</pre>

<p>プロパティと同様に、フィールド名を計算することができます。</p>

<pre class="brush: js notranslate">const PREFIX = 'prefix'

class ClassWithComputedFieldName {
    [`${PREFIX}Field`] = 'prefixed field'
}

const instance = new ClassWithComputedFieldName()
console.log(instance.prefixField)
// expected output: "prefixed field"</pre>

<p>フィールドを初期化する場合、<code>this</code> は構築中のクラスインスタンスを参照します。パブリックインスタンスメソッドと同じように、サブクラスにいる場合は <code>super</code> を使って superclass プロトタイプにアクセスできます。</p>

<pre class="brush: js notranslate">class ClassWithInstanceField {
  baseInstanceField = 'base field'
  anotherBaseInstanceField = this.baseInstanceField
  baseInstanceMethod() { return 'base method output' }
}

class SubClassWithInstanceField extends ClassWithInstanceField {
  subInstanceField = super.baseInstanceMethod()
}

const base = new ClassWithInstanceField()
const sub = new SubClassWithInstanceField()

console.log(base.anotherBaseInstanceField)
// expected output: "base field"

console.log(sub.subInstanceField)
// expected output: "base method output"</pre>

<h3 id="Public_methods" name="Public_methods">パブリックメソッド</h3>

<h4 id="Public_static_methods" name="Public_static_methods">パブリックスタティックメソッド</h4>

<p><code><strong>static</strong></code> キーワードは、クラスのスタティックメソッドを定義します。スタティックメソッドは、クラスのインスタンスでは呼び出されません。代わりに、クラス自体から呼び出されます。これらは、オブジェクトを作成したり、クローンを作成したりするユーティリティ関数であることが多いです。</p>

<pre class="brush: js notranslate">class ClassWithStaticMethod {
  static staticMethod() {
    return 'static method has been called.';
  }
}

console.log(ClassWithStaticMethod.staticMethod());
// expected output: "static method has been called."</pre>

<p>スタティックメソッドは、クラスの評価時に {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}} を使用してクラスのコンストラクタに追加されます。これらのメソッドは書き込み可能、列挙不可、設定可能です。</p>

<h4 id="Public_instance_methods" name="Public_instance_methods">パブリックインスタンスメソッド</h4>

<p>パブリックインスタンスメソッドはその名の通り、クラスインスタンスで利用できるメソッドです。</p>

<pre class="brush: js notranslate">class ClassWithPublicInstanceMethod {
  publicMethod() {
    return 'hello world'
  }
}

const instance = new ClassWithPublicInstanceMethod()
console.log(instance.publicMethod())
// expected output: "hello worl​d"</pre>

<p>パブリックインスタンスメソッドは、{{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}} を使用して、クラスの評価時にクラスプロトタイプに追加されます。これらのメソッドは書き込み可能、列挙不可、設定可能です。</p>

<p>ジェネレーター関数、async、非同期ジェネレーター関数を利用することができます。</p>

<pre class="brush: js notranslate">class ClassWithFancyMethods {
  *generatorMethod() { }
  async asyncMethod() { }
  async *asyncGeneratorMethod() { }
}</pre>

<p>インスタンスメソッドの中では、<code>this</code> はインスタンス自体を指します。サブクラスでは、<code>super</code> を使用してスーパークラスのプロトタイプにアクセスし、スーパークラスからメソッドを呼び出すことができます。</p>

<pre class="brush: js notranslate">class BaseClass {
  msg = 'hello world'
  basePublicMethod() {
    return this.msg
  }
}

class SubClass extends BaseClass {
  subPublicMethod() {
    return super.basePublicMethod()
  }
}

const instance = new SubClass()
console.log(instance.subPublicMethod())
// expected output: "hello worl​d"
</pre>

<p>ゲッターとセッターは、クラスのプロパティにバインドする特別なメソッドで、そのプロパティがアクセスされたり設定されたりしたときに呼び出されます。<a href="/ja/docs/Web/JavaScript/Reference/Functions/get">get</a> および <a href="/ja/docs/Web/JavaScript/Reference/Functions/set">set</a> 構文を使用して、パブリックインスタンスのゲッターまたはセッターを宣言します。</p>

<pre class="brush: js notranslate">class ClassWithGetSet {
  #msg = 'hello world'
  get msg() {
    return this.#msg
  }
  set msg(x) {
    this.#msg = `hello ${x}`
  }
}

const instance = new ClassWithGetSet()
console.log(instance.msg)
// expected output: "hello worl​d"

instance.msg = 'cake'
console.log(instance.msg)
// expected output: "hello cake"
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



<p>{{Compat("javascript.classes.public_class_fields")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html">The Semantics of All JS Class Elements</a></li>
</ul>
