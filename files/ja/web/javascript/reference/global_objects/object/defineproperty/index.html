---
title: Object.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperty
tags:
  - ECMAScript 5
  - JavaScript
  - JavaScript 1.8.5
  - Method
  - Object
translation_of: Web/JavaScript/Reference/Global_Objects/Object/defineProperty
---
<div>{{JSRef}}</div>

<p>静的メソッドの <code><strong>Object.defineProperty()</strong></code> は、あるオブジェクトに新しいプロパティを直接定義したり、オブジェクトの既存のプロパティを変更したりして、そのオブジェクトを返します。</p>

<div class="note">
<p><strong>メモ:</strong> このメソッドは {{jsxref("Object")}} コンストラクターで直接呼び出すものであって、<code>Object</code> 型のインスタンスで呼ぶものではありません。</p>
</div>

<div>{{EmbedInteractiveExample("pages/js/object-defineproperty.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、<a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">Object.defineProperty(<var>obj</var>, <var>prop</var>, <var>descriptor</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>obj</var></code></dt>
 <dd>プロパティを定義したいオブジェクト。</dd>
 <dt><code><var>prop</var></code></dt>
 <dd>定義または変更するプロパティの名前または {{jsxref("Symbol")}}。</dd>
 <dt><code><var>descriptor</var></code></dt>
 <dd>定義または変更されるプロパティの記述子。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>渡されたオブジェクトをそのまま返します。</p>

<h2 id="Description" name="Description">解説</h2>

<p>このメソッドで、あるオブジェクトのプロパティを明示的に追加または変更することができます。代入による通常のプロパティ追加では、プロパティ列挙 ({{jsxref("Statements/for...in", "for...in")}} ループや {{jsxref("Object.keys")}} メソッド) に現れ、値は変更可能で、また{{jsxref("Operators/delete", "削除", "", 1)}}も可能なプロパティが生成されます。このメソッドでは、これらの詳細事項を既定値から変えることが可能です。既定では、<code>Object.defineProperty()</code> を使って追加された値は不変になります。</p>

<p>プロパティの記述子は、データ記述子とアクセサー記述子の二つに分かれます。<em><dfn>データ記述子</dfn></em>は値を持つプロパティで、その値は書き換え可能にも不可能にもできます。<em><dfn>アクセサー記述子</dfn></em>は、関数のゲッターとセッターの組で表されるプロパティです。記述子はこれら二種類のどちらかでなければならず、両方になることはできません。</p>

<p>どちらの形でも記述子はオブジェクトで表現します。共通して以下のキーを持つことができます (既定値は Object.defineProperty() を使ってプロパティを定義する場合)。</p>

<dl>
 <dt><code>configurable</code></dt>
 <dd><code>true</code> である場合のみ、この種の記述子を変更することや、対応するオブジェクトからプロパティを削除することができます。<br>
 <strong>既定値は <code>false</code> です。</strong></dd>
 <dt><code>enumerable</code></dt>
 <dd><code>true</code> である場合のみ、このプロパティは対応するオブジェクトでのプロパティ列挙に現れます。<br>
 <strong>既定値は <code>false</code> です。</strong></dd>
</dl>

<p>データ記述子の場合はオプションとして次のキーを持つことができます:</p>

<dl>
 <dt><code>value</code></dt>
 <dd>プロパティに関連づけられた値です。有効な JavaScript の値 (number, object, function など) である必要があります。<br>
 <strong>既定値は {{jsxref("undefined")}} です。</strong></dd>
 <dt><code>writable</code></dt>
 <dd><code>true</code> である場合のみ、プロパティに関連づけられた値は{{jsxref("Operators/Assignment_Operators", "代入演算子", "", 1)}}で変更することができます。<br>
 <strong>既定値は <code>false</code> です。</strong></dd>
</dl>

<p>アクセサー記述子の場合はオプションとして次のキーを持つことができます。</p>

<dl>
 <dt><code>get</code></dt>
 <dd>プロパティのゲッターとなる関数で、ゲッターを設けない場合は {{jsxref("undefined")}} です。プロパティにアクセスするとこの関数が引数なしでコールされます。この関数内で <code>this</code> はアクセスしようとしたプロパティを持つオブジェクトになります(プロパティを定義するために作成した記述子オブジェクトではありません)。戻り値はこのプロパティの値として使われます。<br>
 <strong>既定値は {{jsxref("undefined")}} です。</strong></dd>
 <dt><code>set</code></dt>
 <dd>プロパティのセッターとなる関数で、セッターがない場合は {{jsxref("undefined")}} です。プロパティに値が割り当てられたとき、その値を引数としてこの関数がコールされます。この関数内で <code>this</code> は割り当てようとしたプロパティを持つオブジェクトになります。<br>
 <strong>既定値は {{jsxref("undefined")}} です。</strong></dd>
</dl>

<p>記述子に <code>value</code>, <code>writable</code>, <code>get</code>, <code>set</code> のいずれのキーもない場合、データ記述子として扱われます。記述子に <code>value</code> または <code>writable</code> と、<code>get</code> または <code>set</code> のキーの両方がある場合は、例外が投げられます。</p>

<p>これらのキーは必ずしも記述子が直接所有しているとは限らないことに留意してください。継承されたプロパティも同様です。これらの既定値が存在することを保証するには、先行して {{jsxref("Object.prototype")}} を freeze しておくか、すべてのオプションを明示的に指定するか、{{jsxref("Object.create", "Object.create(null)")}} で {{jsxref("null")}} に設定するかします。</p>

<pre class="brush: js">// __proto__ を使うやり方
var obj = {};
var descriptor = Object.create(null); // 意図しないキーの継承を防止します。
descriptor.value = 'static';

// 既定で継承不可、変更不可、書換不可のプロパティとなります。
Object.defineProperty(obj, 'key', descriptor);

// 明示的な指定
Object.defineProperty(obj, 'key', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 'static'
});

// 同じオブジェクトを再利用
function withValue(value) {
  var d = withValue.d || (
    withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value: value
    }
  );

  // 値の代入で重複操作を防ぐ
  if (d.value !== value) d.value = value;

  return d;
}
// このように使います。
Object.defineProperty(obj, 'key', withValue('static'));

// freeze が利用できるなら、オブジェクトのプロトタイプのプロパティ
// (value, get, set, enumerable, writable, configurable) を
// 追加・削除することを防ぐことができます。
(Object.freeze || Object)(Object.prototype);
</pre>

<h2 id="Examples" name="Examples">例</h2>

<p><em>バイナリーフラグ</em>を使って <code>Object.defineProperty</code> を利用したい場合は <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty/Additional_examples">追加の例</a> を見てください。</p>

<h3 id="Creating_a_property" name="Creating_a_property">プロパティの生成</h3>

<p>オブジェクトに指定されたプロパティが存在しないとき、<code>Object.defineProperty()</code> は指定された形で新たなプロパティを生成します。記述子のキーは省略することができ、そのようなキーには既定値が適用されます。</p>

<pre class="brush: js">var o = {}; // 新しいオブジェクトの生成

// データ記述子により、defineProperty を用いて
// オブジェクトプロパティを追加する例
Object.defineProperty(o, 'a', {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true
});
// o オブジェクトに 'a' プロパティが存在するようになり、その値は 37 となります

// アクセサー記述子により、defineProperty を用いて
// オブジェクトプロパティを追加する例
var bValue = 38;
Object.defineProperty(o, 'b', {
  // メソッド名ショートハンドを利用しています(ES2015 の機能)。
  // 次のように書いているのと同じことです:
  // get: function() { return bValue; },
  // set: function(newValue) { bValue = newValue; },
  get() { return bValue; },
  set(newValue) { bValue = newValue; },
  enumerable: true,
  configurable: true
});
o.b; // 38
// o オブジェクトに 'b' プロパティが存在するようになり、
// その値は 38 となります
// o.b は再定義されない限り、その値は常に bValue と同じです。

// (訳注:データとアクセサーを)両方を混在させることはできません:
Object.defineProperty(o, 'conflict', {
  value: 0x9f91102,
  get() { return 0xdeadbeef; }
});
// TypeError が発生します。value はデータ記述子にのみ、
// get はアクセサー記述子にのみ存在していなければなりません。
</pre>

<h3 id="Modifying_a_property" name="Modifying_a_property">プロパティの変更</h3>

<p>プロパティが既に存在している場合、<code>Object.defineProperty()</code> は記述子の値および現在のオブジェクトの設定に基づいて、プロパティの変更を試みます。元の記述子で <code>configurable</code> 属性が <code>false</code> なら、そのプロパティは「変更不可」です。変更不可のプロパティは記述子の属性を変更することができません。データプロパティで <code>writable</code> なら、値を変更することができますし、<code>writable</code> 属性を <code>true</code> から <code>false</code> に変更することが出来ます。変更不可のプロパティはデータとアクセサーの種別を切り替えることはできません。</p>

<p>変更不可なプロパティに変更を加えようとすると、新旧の値が同じでない限り {{jsxref("TypeError")}} が投げられます(可能な場合の <code>value</code> と <code>writable</code> の変更は除きます)。</p>

<h4 id="Writable_attribute" name="Writable_attribute">Writable 属性</h4>

<p><code>writable</code> プロパティ属性が <code>false</code> に設定されているとき、そのプロパティは書換不可になります。代入が出来なくなります。</p>

<pre class="brush: js">var o = {}; // 新しいオブジェクトの生成

Object.defineProperty(o, 'a', {
  value: 37,
  writable: false
});

console.log(o.a); // 37 がログ出力されます
o.a = 25; // エラーは発生しません
// (strict モードでは発生します。同じ値を代入したとしても。)
console.log(o.a); // 37 がログ出力されます。代入文は動作しません。

// strict mode
(function() {
  'use strict';
  var o = {};
  Object.defineProperty(o, 'b', {
    value: 2,
    writable: false
  });
  o.b = 3; // TypeError がスローされます: "b" is read-only
  return o.b; // 上の行は動作せず 2 が返ります(訳注:正しくは「ここに制御は来ません」)
}());
</pre>

<p>例で見たように、書き込み不可のプロパティに書き込もうとしても変更されず、またエラーは発生しません。</p>

<h4 id="Enumerable_attribute" name="Enumerable_attribute">Enumerable 属性</h4>

<p><code>enumerable</code> プロパティ属性は、プロパティが {{jsxref("Statements/for...in", "for...in")}} ループや {{jsxref("Object.keys()")}} に現れるか否かを定義します。</p>

<pre class="brush: js">var o = {};
Object.defineProperty(o, 'a', {
  value: 1,
  enumerable: true
});
Object.defineProperty(o, 'b', {
  value: 2,
  enumerable: false
});
Object.defineProperty(o, 'c', {
  value: 3
}); // enumerable の既定値は false
o.d = 4; // このようにプロパティを生成するとき、
         // enumerable の既定値は true
Object.defineProperty(o, Symbol.for('e'), {
  value: 5,
  enumerable: true
});
Object.defineProperty(o, Symbol.for('f'), {
  value: 6,
  enumerable: false
});

for (var i in o) {
  console.log(i);
}
// 'a' と 'd' がログされます(順不同)

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable('a'); // true
o.propertyIsEnumerable('b'); // false
o.propertyIsEnumerable('c'); // false
o.propertyIsEnumerable('d'); // true
o.propertyIsEnumerable(Symbol.for('e')); // true
o.propertyIsEnumerable(Symbol.for('f')); // false

var p = { ...o }
p.a // 1
p.b // undefined
p.c // undefined
p.d // 4
p[Symbol.for('e')] // 5
p[Symbol.for('f')] // undefined
</pre>

<h4 id="Configurable_attribute" name="Configurable_attribute">Configurable 属性</h4>

<p><code>configurable</code> 属性は、プロパティをオブジェクトから削除できるかとプロパティの属性 (<code>value</code> と <code>writable</code> 以外) を変更できるかを同時に制御します。</p>

<pre class="brush: js">var o = {};
Object.defineProperty(o, 'a', {
  get() { return 1; },
  configurable: false
});

Object.defineProperty(o, 'a', {
  configurable: true
}); // TypeError が発生
Object.defineProperty(o, 'a', {
  enumerable: true
}); // TypeError が発生
Object.defineProperty(o, 'a', {
  set() {}
}); // TypeError が発生 (set は未定義であった)
Object.defineProperty(o, 'a', {
  get() { return 1; }
}); // TypeError が発生 (新たな get は全く同じであるにもかかわらず)
Object.defineProperty(o, 'a', {
  value: 12
}); // TypeError が発生 ('configurable' が false でも 'value' は変更できますが、ここでは 'get' アクセサーがあるため変更できません)

console.log(o.a); // logs 1
delete o.a; // 何も起きません
console.log(o.a); // logs 1
</pre>

<p><code>o.a</code> の <code>configurable</code> 属性が <code>true</code> である場合、エラーが発生することなく最終的にプロパティが削除されます。</p>

<h3 id="Adding_properties_and_default_values" name="Adding_properties_and_default_values">プロパティおよび既定値の追加</h3>

<p>属性の既定値がどう適用されるかを考えることは重要です。値の割り当てにドット表記を用いた場合と <code>Object.defineProperty()</code> を用いた場合とでは、以下の例で示したとおりに違いがあります。</p>

<pre class="brush: js">var o = {};

o.a = 1;
// これは以下と同じです:
Object.defineProperty(o, 'a', {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true
});

// その一方で、
Object.defineProperty(o, 'a', { value: 1 });
// これは以下と同じです:
Object.defineProperty(o, 'a', {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false
});
</pre>

<h3 id="Custom_Setters_and_Getters" name="Custom_Setters_and_Getters">独自のゲッターおよびセッター</h3>

<p>例として自律的に記録を行うオブジェクトを作成してみます。<code>temperature</code> プロパティに値が代入されると、配列 <code>archive</code> に要素が一つ追加されます。</p>

<pre class="brush: js">function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get() {
      console.log('get!');
      return temperature;
    },
    set(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
</pre>

<p>次の例では、ゲッターが常に同じ値を返すようにしています。</p>

<pre class="brush: js">var pattern = {
    get() {
        return 'I always return this string, ' +
               'whatever you have assigned';
    },
    set() {
        this.myname = 'this is my name string';
    }
};

function TestDefineSetAndGet() {
    Object.defineProperty(this, 'myproperty', pattern);
}

var instance = new TestDefineSetAndGet();
instance.myproperty = 'test';
console.log(instance.myproperty);
// I always return this string, whatever you have assigned

console.log(instance.myname); // this is my name string
</pre>

<h3 id="Inheritance_of_properties" name="Inheritance_of_properties">プロパティの継承</h3>

<p>アクセサープロパティを継承されると、その派生クラスでもプロパティがアクセスされたり書き換えられるときに <code>get</code> と <code>set</code> が呼ばれます。これらのメソッドが値を保持するために変数を使っていると、すべてのオブジェクトがその値を共有することになります。</p>

<pre class="brush: js">function myclass() {
}

var value;
Object.defineProperty(myclass.prototype, "x", {
  get() {
    return value;
  },
  set(x) {
    value = x;
  }
});

var a = new myclass();
var b = new myclass();
a.x = 1;
console.log(b.x); // 1
</pre>

<p>この問題を回避する方法は値を別のプロパティで保持することです。<code>get</code> と <code>set</code> メソッド内で <code>this</code> はアクセス／書き換えされようとしているプロパティを納めるオブジェクトを指しています。</p>

<pre class="brush: js">function myclass() {
}

Object.defineProperty(myclass.prototype, "x", {
  get() {
    return this.stored_x;
  },
  set(x) {
    this.stored_x = x;
  }
});

var a = new myclass();
var b = new myclass();
a.x = 1;
console.log(b.x); // undefined
</pre>

<p>アクセサープロパティとは違い、データプロパティは常にオブジェクト自身に格納されるのであって、prototype に格納されるわけではありません。しかし、書き込み不可能なデータプロパティを継承している場合、継承先オブジェクトでも書き換えは阻止されます。</p>

<pre class="brush: js">function myclass() {
}

myclass.prototype.x = 1;
Object.defineProperty(myclass.prototype, "y", {
  writable: false,
  value: 1
});

var a = new myclass();
a.x = 2;
console.log(a.x); // 2
console.log(myclass.prototype.x); // 1
a.y = 2; // 無視されます。strict モードではエラースローされます。
console.log(a.y); // 1
console.log(myclass.prototype.y); // 1
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.defineproperty', 'Object.defineProperty')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Object.defineProperty")}}</p>

<h2 id="Compatibility_notes" name="Compatibility_notes">互換性のメモ</h2>

<h3 id="Redefining_the_length_property_of_an_Array_object" name="Redefining_the_length_property_of_an_Array_object"><code>Array</code> オブジェクトの <code>length</code> プロパティの再定義</h3>

<p>配列の {{jsxref("Array.length", "length")}} プロパティを再定義することは、通常の再定義の制限に照らせば可能です。({{jsxref("Array.length", "length")}} プロパティは初期状態で構成不可、列挙不可、書き込み可能です。つまり、変更されていない配列では、{{jsxref("Array.length", "length")}} プロパティの値を変更したり書き込み不可にしたりすることが可能です。列挙可否や構成可否、また書き込み不可に変更した後は値や書き込み可否も、変更することはできません。) しかし、すべてのブラウザーがこの再定義を許可しているとは限りません。</p>

<p>Firefox 4 から 22 までの間では、配列の {{jsxref("Array.length", "length")}} プロパティを再定義しようとすると、無条件に (許可の有無にかかわらず) {{jsxref("TypeError")}} が発生します。</p>

<p><code>Object.defineProperty()</code> を実装している Chrome のバージョンでは、状況によっては配列の現在の {{jsxref("Array.length", "length")}} プロパティとは異なる length の値を無視することがあります。状況によっては書き込み可否が暗黙に動作しない (そして例外を発生させない) こともあります。また、関連して、{{jsxref("Array.prototype.push")}} のような配列を変更する一部のメソッドが、書き込み不可であることを尊重しないことがあります。</p>

<p><code>Object.defineProperty()</code> を実装する Safari のバージョンでは配列の現在の {{jsxref("Array.length", "length")}} プロパティと異なる値の length を無視し、また書き込み許可を変更する試みはエラーなしに実行されますが、実際はプロパティの書き込み許可が変更されません。</p>

<p>Internet Explorer 9 以降と Firefox 23 以降のみが、完全かつ正確に配列の {{jsxref("Array.length", "length")}} プロパティの再定義を実装しているようです。現時点では、配列の {{jsxref("Array.length", "length")}} プロパティの再定義はどのブラウザーでも動作する、あるいは特定のルールに則って動作するとは考えないようにしてください。そして、もしこれが実行<em>できた</em>としても、<a href="http://whereswalden.com/2013/08/05/new-in-firefox-23-the-length-property-of-an-array-can-be-made-non-writable-but-you-shouldnt-do-it/">これを行う本当に良い理由はありません</a>。</p>

<h3 id="Internet_Explorer_8_specific_notes" name="Internet_Explorer_8_specific_notes">Internet Explorer 8 の特記事項</h3>

<p>Internet Explorer 8 は <code>Object.defineProperty()</code> メソッドを <a class="external" href="https://msdn.microsoft.com/en-us/library/dd229916%28VS.85%29.aspx">DOM オブジェクトでのみ使用できる</a>ものとして実装しました。以下 2 点に注意が必要です:</p>

<ul>
 <li>ネイティブオブジェクトに対して <code>Object.defineProperty()</code> を用いようとするとエラーが発生します。</li>
 <li>プロパティの属性には特定の値を設定しなければなりません。<code>configurable</code>, <code>enumerable</code>, <code>writable</code> の各属性に対して、データ記述子ではすべて <code>true</code> に、アクセサー記述子では <code>configurable</code> に <code>true</code>、<code>enumerable</code> に <code>false</code> にです。(?)ほかの値(?)を与えようとすると、エラーが発生します。</li>
 <li>プロパティの再設定には、始めにプロパティの削除が必要です。プロパティが削除されていない場合、再設定を試みる前の状態のままになります。</li>
</ul>

<h3 id="Chrome_37_and_below_specific_notes" name="Chrome_37_and_below_specific_notes">Chrome 37 以下の特記事項</h3>

<p>Chrome 37 以下には、<code>writable: false</code> 指定を行なった "prototype" プロパティを関数に定義する場合に、想定通りに動かない <a href="https://bugs.chromium.org/p/v8/issues/detail?id=3448">バグ</a> があります。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Enumerability_and_ownership_of_properties">列挙可能性とプロパティの所有権</a></li>
 <li>{{jsxref("Object.defineProperties()")}}</li>
 <li>{{jsxref("Object.propertyIsEnumerable()")}}</li>
 <li>{{jsxref("Object.getOwnPropertyDescriptor()")}}</li>
 <li>{{jsxref("Object.prototype.watch()")}}</li>
 <li>{{jsxref("Object.prototype.unwatch()")}}</li>
 <li>{{jsxref("Operators/get", "get")}}</li>
 <li>{{jsxref("Operators/set", "set")}}</li>
 <li>{{jsxref("Object.create()")}}</li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty/Additional_examples">追加の <code>Object.defineProperty</code> の例</a></li>
 <li>{{jsxref("Reflect.defineProperty()")}}</li>
</ul>
