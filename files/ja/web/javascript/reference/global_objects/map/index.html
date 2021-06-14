---
title: Map
slug: Web/JavaScript/Reference/Global_Objects/Map
tags:
  - Class
  - ECMAScript 2015
  - JavaScript
  - Map
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Map
---
<div>{{JSRef}}</div>

<p><span class="seoSummary"><strong><code>Map</code></strong> オブジェクトはキーと値のペアを保持し、キーが最初に挿入された順序を覚えています。</span>キーや値には任意の値 (オブジェクトと{{glossary("Primitive", "プリミティブ値")}})を使用することができます。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>Map</code> オブジェクトは、その要素について挿入順で反復処理を行うことができます。 {{jsxref("Statements/for...of", "for...of")}} ループは各反復で <code>[<var>キー</var>, <var>値</var>]</code> の配列を返します。</p>

<h3 id="Key_equality" name="Key_equality">キーの等価性</h3>

<ul>
 <li>キーの等価性は <a href="/ja/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value-zero_equality"><code>sameValueZero</code></a> アルゴリズムに基づきます。</li>
 <li>{{jsxref("NaN")}} は <code>NaN</code> と同じとみなされ (<code>NaN !== NaN</code> であっても)、他の値はすべて <code>===</code> 演算子の意味に従って等価性が考慮されます。</li>
 <li>現在の ECMAScript 仕様書では、 <code>-0</code> と <code>+0</code> は等しいと考えられています。但し、以前の草稿ではそのようになっていませんでした。詳細は <em>"Value equality for -0 and 0"</em> を<a href="#Browser_compatibility">ブラウザーの互換性</a>一覧で確認してください。</li>
</ul>

<h3 id="Objects_vs._Maps" name="Objects_vs._Maps">Object と Map の比較</h3>

<p>{{jsxref("Object")}} と <code>Map</code> は似ています。 — どちらもキーを値に設定したり、それらの値を受け取ったり、キーを削除したり、キーに何かが格納されているかどうかを判定したりすることができます。この意味で (そして他の内蔵オブジェクトがなかったため)、従来 <code>Object</code> は <code>Map</code> として使われてきました。</p>

<p>しかし、いくつかの場面で <code>Map</code> の方が勝るような重要な違いがあります。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="row"></th>
   <th scope="col">Map</th>
   <th scope="col">Object</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">思いがけないキー</th>
   <td><code>Map</code> は既定では何もキーを持っていません。明示的に設定したものだけを含みます。</td>
   <td>
    <p><code>Object</code> にはプロトタイプがあります。よって既定のキーを含んでいるので、注意しないと自分のキーと衝突する可能性があります。</p>

    <div class="blockIndicator note">
    <p><strong>注:</strong> ES5 では、 {{jsxref("Object.create", "Object.create(null)")}} を使用すると回避できますが、これはめったに行われていません。</p>
    </div>
   </td>
  </tr>
  <tr>
   <th scope="row">キーの型</th>
   <td><code>Map</code> のキーはあらゆる値がなることができます (関数、オブジェクト、あらゆるプリミティブなど)。</td>
   <td><code>Object</code> のキーは {{jsxref("String")}} または {{jsxref("Symbol")}} でなければなりません。</td>
  </tr>
  <tr>
   <th scope="row">キーの順序</th>
   <td>
    <p><code>Map</code> のキーは、単純で直感的な方法で順序付けられます。すなわち、反復処理を行うと、 <code>Map</code> オブジェクトは挿入順でキーを返します。</p>
   </td>
   <td>
    <p>通常の <code>Object</code> のキーは現在では順序付けされていますが、以前はそうではなかったので、順序は複雑です。結果として、プロパティの順序に頼らない方が良いでしょう。</p>

    <p>この順序は ECMAScript 2015 で初めて自身のプロパティに対してのみ定義されましたが、 ECMAScript 2020 では継承されたプロパティに対しても同様に順序が定義されています。 <a href="https://tc39.es/ecma262/#sec-ordinaryownpropertykeys">OrdinaryOwnPropertyKeys</a> と <a href="https://tc39.es/ecma262/#sec-enumerate-object-properties">EnumerateObjectProperties</a> の抽象指定操作を参照してください。しかし、オブジェクトのプロパティが<strong>すべて</strong>反復処理される単一の単一のメカニズムはないことに注意してください。 ({{jsxref("Statements/for...in", "for-in")}} は列挙可能な文字列キーのプロパティのみを含む、 {{jsxref("Object.keys")}} は自分自身の列挙可能な文字列キーのプロパティのみを含む、 {{jsxref("Object.getOwnPropertyNames")}} は列挙不可能な場合でも自分自身の文字列キーのプロパティを含む、 {{jsxref("Object.getOwnPropertySymbols")}} は、 <code>Symbol</code> キーを持つプロパティに対しても同じことを行う、など。)</p>
   </td>
  </tr>
  <tr>
   <th scope="row">
    <p>大きさ</p>
   </th>
   <td><code>Map</code> の中の項目数は、 {{jsxref("Map.prototype.size", "size")}} プロパティで簡単に得ることができます。 property.</td>
   <td><code>Object</code> の中の項目数は、手動で数える必要があります。</td>
  </tr>
  <tr>
   <th scope="row">反復処理</th>
   <td><code>Map</code> は <a href="/ja/docs/Web/JavaScript/Guide/iterable">iterable</a> ですので、直接反復処理を行うことができます。</td>
   <td><code>Object</code> では反復処理を行うのに、いくつかの形でキーの一覧を取得して、そのうえで反復処理を行う必要があります。</td>
  </tr>
  <tr>
   <th scope="row">性能</th>
   <td>
    <p>キーと値の組を頻繁に追加したり削除したりすることが求められるシナリオでは、性能がより良くなります。</p>
   </td>
   <td>
    <p>キーと値の組を頻繁に追加したり削除したりすることに最適化されていません。</p>
   </td>
  </tr>
 </tbody>
</table>

<h3 id="Setting_object_properties" name="Setting_object_properties">オブジェクトプロパティの設定</h3>

<p>Map オブジェクトに対してオブジェクトプロパティを設定すると正しく動作しますが、混乱を催すことが考えられます。</p>

<p>たとえば、次の例は一応動作するように見えます。</p>

<pre class="syntaxbox example-bad brush js notranslate">let wrongMap = new Map()
wrongMap['bla'] = 'blaa'
wrongMap['bla2'] = 'blaaa2'

console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }
</pre>

<p>しかし、このようにプロパティを設定すると、 Map データ構造に符合しません。一般的なオブジェクトの機能を使用します。 'bla' の値はクエリを行うための Map に格納されません。データにその他の操作を行うと失敗します。</p>

<pre class="syntaxbox example-bad brush js notranslate">wrongMap.has('bla')    // false
wrongMap.delete('bla') // false
console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }</pre>

<p>Map にデータを格納する正しい方法は、 <code>set(<var>key</var>, <var>value</var>)</code> メソッドを使用する方法です。</p>

<pre class="syntaxbox brush js example-good notranslate">let contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1

</pre>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{jsxref("Map/Map", "Map()")}}</dt>
 <dd>新しい <code>Map</code> オブジェクトを生成します。</dd>
</dl>

<h2 id="Static_properties" name="Static_properties">静的プロパティ</h2>

<dl>
 <dt>{{jsxref("Map.@@species", "get Map[@@species]")}}</dt>
 <dd>派生クラスを生成するためのコンストラクター関数です。</dd>
</dl>

<h2 id="Instance_properties" name="Instance_properties">インスタンスプロパティ</h2>

<dl>
 <dt>{{jsxref("Map.prototype.size")}}</dt>
 <dd><code>Map</code> オブジェクトの中のキーと値の組の数を返します。</dd>
</dl>

<h2 id="Instance_methods" name="Instance_methods">インスタンスメソッド</h2>

<dl>
 <dt>{{jsxref("Map.prototype.clear()")}}</dt>
 <dd><code>Map</code>オブジェクトからすべてのキーと値の組を削除します。</dd>
 <dt>{{jsxref("Map.delete", "Map.prototype.delete(<var>key</var>)")}}</dt>
 <dd><code>Map</code> オブジェクトに要素が存在し、削除された場合は <code>true</code> を返します、要素が存在しなければ <code>false</code> を返します。その後では <code>Map.prototype.has(<var>key</var>)</code> が <code>false</code> を返すようになります。</dd>
 <dt>{{jsxref("Map.get", "Map.prototype.get(<var>key</var>)")}}</dt>
 <dd><code><var>key</var></code> で指定されたキーに結び付けられた値を返します。存在しない場合は <code>undefined</code> を返します。</dd>
 <dt>{{jsxref("Map.has", "Map.prototype.has(<var>key</var>)")}}</dt>
 <dd><code><var>key</var></code> で指定されたキーに結び付けられた要素が <code>Map</code> オブジェクト内に存在するかどうかを示す boolean を返します。</dd>
 <dt>{{jsxref("Map.set", "Map.prototype.set(<var>key</var>, <var>value</var>)")}}</dt>
 <dd><code>Map</code> オブジェクト内の <code><var>key</var></code> で指定されたキーの値を <code><var>value</var></code> に設定します。その <code>Map</code> オブジェクトを返します。</dd>
</dl>

<h3 id="Iteration_methods" name="Iteration_methods">反復処理メソッド</h3>

<dl>
 <dt>{{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}</dt>
 <dd>新しい<strong>イテレーター</strong>オブジェクトを返し、これには <code>Map</code>オブジェクト内の各要素の <strong><code>[<var>key</var>, <var>value</var>] の配列</code></strong>が挿入順で含まれます。</dd>
 <dt>{{jsxref("Map.prototype.keys()")}}</dt>
 <dd>新しい<strong>イテレーター</strong>オブジェクトを返し、これには <code>Map</code>オブジェクト内の各要素の<strong>キー</strong>が挿入順で含まれます。</dd>
 <dt>{{jsxref("Map.prototype.values()")}}</dt>
 <dd>新しい<strong>イテレーター</strong>オブジェクトを返し、これには <code>Map</code>オブジェクト内の各要素の<strong>値</strong>が挿入順で含まれます。</dd>
 <dt>{{jsxref("Map.prototype.entries()")}}</dt>
 <dd><code>Map</code>オブジェクト内の要素に対して挿入順にすべての要素の <code>[<var>key</var>, <var>value</var>]</code> の配列を含む、新しい<strong>イテレーター</strong>オブジェクトを返します。</dd>
 <dt>{{jsxref("Map.forEach", "Map.prototype.forEach(<var>callbackFn</var>[, <var>thisArg</var>])")}}</dt>
 <dd><code><var>callbackFn</var></code> を、 <code>Map</code> オブジェクトに存在するそれぞれのキーと値の組に対して1回ずつ、挿入順に呼び出します。 <code><var>thisArg</var></code> 引数が <code>forEach</code> に与えられた場合は、それぞれのコールバックでこれを <code>this</code> の値として使用します。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_the_Map_object" name="Using_the_Map_object">Map オブジェクトの使用</h3>

<pre class="brush: js notranslate">let myMap = new Map()

let keyString = '文字列'
let keyObj    = {}
let keyFunc   = function() {}

// 値を設定する
myMap.set(keyString, "'文字列' と結び付けられた値")
myMap.set(keyObj, "keyObj と結び付けられた値")
myMap.set(keyFunc, "keyFunc と結び付けられた値")

myMap.size              // 3

// 値を取得する
myMap.get(keyString)    // "'文字列' と結び付けられた値"
myMap.get(keyObj)       // "keyObj と結び付けられた値"
myMap.get(keyFunc)      // "keyFunc と結び付けられた値"

myMap.get('文字列')     // "'文字列' と結び付けられた値"
                        // keyString === '文字列' であるため
myMap.get({})           // undefined, keyObj !== {} であるため
myMap.get(function() {}) // undefined, keyFunc !== function () {} であるため
</pre>

<h3 id="Using_NaN_as_Map_keys" name="Using_NaN_as_Map_keys">NaN を Map のキーとして使用</h3>

<p>{{jsxref("NaN")}} もまたキーとして使うことができます。すべての <code>NaN</code> は自身と等しくない (<code>NaN !== NaN</code> は真) にもかかわらず、以下の例は動作します。これは <code>NaN</code> が互いに区別できないためです。</p>

<pre class="brush: js notranslate">let myMap = new Map()
myMap.set(NaN, 'not a number')

myMap.get(NaN)
// "not a number"

let otherNaN = Number('foo')
myMap.get(otherNaN)
// "not a number"
</pre>

<h3 id="Iterating_Map_with_for..of" name="Iterating_Map_with_for..of">for..of を使用した Map の反復処理</h3>

<p>Map は <code>for..of</code> ループを使用して反復処理を行うことができます。</p>

<pre class="brush: js notranslate">let myMap = new Map()
myMap.set(0, 'zero')
myMap.set(1, 'one')

for (let [key, value] of myMap) {
  console.log(key + ' = ' + value)
}
// 0 = zero
// 1 = one

for (let key of myMap.keys()) {
  console.log(key)
}
// 0
// 1

for (let value of myMap.values()) {
  console.log(value)
}
// zero
// one

for (let [key, value] of myMap.entries()) {
  console.log(key + ' = ' + value)
}
// 0 = zero
// 1 = one
</pre>

<h3 id="Iterating_Map_with_forEach" name="Iterating_Map_with_forEach">forEach() で Map を反復処理</h3>

<p>Map は {{jsxref("Map.prototype.forEach", "forEach()")}} メソッドを使用して反復できます。</p>

<pre class="brush: js notranslate">myMap.forEach(function(value, key) {
  console.log(key + ' = ' + value)
})
// 0 = zero
// 1 = one
</pre>

<h3 id="Relation_with_Array_objects" name="Relation_with_Array_objects">Array オブジェクトとの関係</h3>

<pre class="brush: js notranslate">let kvArray = [["キー1", "値1"], ["キー2", "値2"]];

// 通常の Map コンストラクターを使って、キー・値の 2 次元配列をマップに変換する
let myMap = new Map(kvArray)

myMap.get("キー1") // "値1" を返す

// 展開演算子を使って、マップをキー・値の 2 次元配列に変換する
console.log(Array.from(myMap)) // kvArray とまったく同じ Array を表示する

// あるいは展開演算子をキーまたは値のイテレーターに使って、キーまたは値のみの配列を得る
console.log([...myMap])

// または keys() や values() のイテレーターを使用して配列に変換する
console.log(Array.from(myMap.keys())) // ["key1", "key2"] が出力される
</pre>

<h3 id="Cloning_and_merging_Maps" name="Cloning_and_merging_Maps">Map の複製と混合</h3>

<p><code>Array</code> と同様に、 <code>Map</code> は複製することができます。</p>

<pre class="brush: js notranslate">let original = new Map([
  [1, 'one']
])

let clone = new Map(original)

console.log(clone.get(1))       // one
console.log(original === clone) // false (useful for shallow comparison)</pre>

<div class="blockIndicator note">
<p><strong>重要:</strong> <em>データ自身</em>は複製されないことに注意しておいてください。</p>
</div>

<p>Map はキーの固有性を保持しながら混合可能です。</p>

<pre class="brush: js notranslate">let first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
])

let second = new Map([
  [1, 'uno'],
  [2, 'dos']
])

// 2つのマップを混合します。重複するキーは後勝ちになります。
// スプレッド演算子は基本的に Map を Array に変換します。
let merged = new Map([...first, ...second])

console.log(merged.get(1)) // uno
console.log(merged.get(2)) // dos
console.log(merged.get(3)) // three</pre>

<p>Map は Array と混合することもできます。</p>

<pre class="brush: js notranslate">let first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
])

let second = new Map([
  [1, 'uno'],
  [2, 'dos']
])

// マップと配列を混合します。重複するキーは後勝ちになります。
let merged = new Map([...first, ...second, [1, 'eins']])

console.log(merged.get(1)) // eins
console.log(merged.get(2)) // dos
console.log(merged.get(3)) // three</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-map-objects', 'Map')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Map")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Set")}}</li>
 <li>{{jsxref("WeakMap")}}</li>
 <li>{{jsxref("WeakSet")}}</li>
</ul>
