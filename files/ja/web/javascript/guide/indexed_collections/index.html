---
title: インデックス付きコレクション
slug: Web/JavaScript/Guide/Indexed_collections
tags:
  - Guide
  - JavaScript
  - l10n:priority
translation_of: Web/JavaScript/Guide/Indexed_collections
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Regular_Expressions", "Web/JavaScript/Guide/Keyed_Collections")}}</div>

<p class="summary">この節では、インデックス値により順序付けされたデータのコレクションを紹介します。これには配列と、 {{jsxref("Array")}} オブジェクトや {{jsxref("TypedArray")}} オブジェクトなどの配列風の構造物があります。</p>

<h2 id="Array_object"><code>Array</code> オブジェクト</h2>

<p><em><dfn>配列</dfn></em>は、名前やインデックスで参照する値からなる順序付きリストです。</p>

<p>例えば、 <code>emp</code> という配列を作成し、従業員番号と従業員の名前を対応付けたとします。つまり、<code>emp[0]</code> が従業員番号 0、<code>emp[1]</code> が従業員番号 1、のようになります。</p>

<p>JavaScript は明確な配列データ型を持っていません。しかし、アプリケーションでは配列として機能する定義済みの <code>Array</code> オブジェクトとそのメソッドを利用することができます。<code>Array</code> オブジェクトには、結合、反転、ソートなど様々な方法で配列を操作するメソッドがあります。また、配列の長さを特定するプロパティや、正規表現で使用するプロパティなどがあります。</p>

<h3 id="Creating_an_array">配列の生成</h3>

<p>以下の文は同じ配列を生成します。</p>

<pre class="brush: js">let arr = new Array(<var>element0</var>, <var>element1</var>, ..., <var>elementN</var>)
let arr = Array(<var>element0</var>, <var>element1</var>, ..., <var>elementN</var>)
let arr = [<var>element0</var>, <var>element1</var>, ..., <var>elementN</var>]
</pre>

<p><code><var>element0</var>, <var>element1</var>, ..., <var>elementN</var></code>  は配列要素になる値のリストです。これらの値が指定されると、この配列の要素はそれらの値に初期化されます。配列の <code>length</code> プロパティは引数の数に設定されます。</p>

<p>角括弧による構文は「配列リテラル」または「配列初期化子」と呼ばれます。この構文はその他の形式による配列作成よりも短いため、一般的に好まれる方法です。詳細については、<a href="/ja/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals">配列リテラル</a>をご覧ください。</p>

<p>長さがゼロではないが項目のない配列を作成するには、以下の方法が使用できます。</p>

<pre class="brush: js">// これは...
let arr = new Array(<var>arrayLength</var>)

// ...このような結果になります
let arr = Array(<var>arrayLength</var>)


// これも同じ効果があります
let arr = []
arr.length = <var>arrayLength</var>
</pre>

<div class="note">
<p><strong>注:</strong> 上記のコードでは、 <code><var>arrayLength</var></code> は <code>Number</code> (数値) である必要があります。さもないと、 (指定した値の) 単一の要素を持つ配列が生成されます。 <code>arr.length</code> を呼び出すと <code><var>arrayLength</var></code> が返されますが、実際には配列は空要素 (undefined) で構成されます。この配列で {{jsxref("Statements/for...in","for...in")}} ループを実行しても、配列の要素は返されません。</p>
</div>

<p>上記のように新規に定義した変数に割り当てるだけでなく、新規または既存のオブジェクトのプロパティに配列を割り当てることができます。</p>

<pre class="brush: js">let obj = {}
// ...
obj.prop = [element0, element1, ..., elementN]

// または
let obj = {prop: [element0, element1, ...., elementN]}
</pre>

<p>単一の要素で配列を初期化しようとして、その要素が <code>Number</code> である場合、角括弧の構文を使用する必要があります。単一の <code>Number</code> 値が <code>Array()</code> コンストラクターや関数に渡されると、単一の数値要素としてではなく、<code><var>arrayLength</var></code> として解釈されます。</p>

<pre class="brush: js">let arr = [42]       // 42 という数の要素を
                     // 1 個だけ持つ配列が作られます。

let arr = Array(42)  // 要素がなく、arr.length が
                     // 42 に設定された配列が作られます。
                     //
                     // 以下のコードと同様です。
let arr = []
arr.length = 42
</pre>

<p><code><var>N</var></code> の値が小数部分がゼロではない実数である場合、 <code>Array(<var>N</var>)</code> を呼び出すと、結果は <code>RangeError</code> になります。以下の例ではこの動作を示します。</p>

<pre class="brush: js">let arr = Array(9.3)   // RangeError: Invalid array length
</pre>

<p>任意のデータ型の単一の要素を持つ配列を作成したければ、配列リテラルを使用する方が安全です。あるいは、単一の要素を追加する前に空の配列を作成しましょう。</p>

<p>ES2015 から単一の要素を持つ配列を生成するために {{jsxref("Array.of")}} 静的メソッドを使用することができます。</p>

<pre class="brush: js">let wisenArray = Array.of(9.3)   // wisenArray は 1 つの要素 9.3 だけを持つ配列</pre>

<h3 id="Referring_to_array_elements">配列要素の参照</h3>

<p>要素はプロパティでもあるので、<a href="/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors">プロパティアクセサー</a>を使ってアクセスすることができます。以下の配列を定義するとします。</p>

<pre class="brush: js">let myArray = ['Wind', 'Rain', 'Fire']
</pre>

<p>要素のインデックスは 0 から始まるので、配列の 1 番目の要素を <code>myArray[0]</code>、2 番目の要素を <code>myArray[1]</code> と呼ぶことができます。</p>

<div class="note">
<p><strong>注:</strong> <a href="/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors">プロパティアクセサー</a>を使用して、オブジェクトのように配列の他のプロパティにアクセスすることもできます。</p>

<pre class="brush: js">let arr = ['one', 'two', 'three']
arr[2]          // three
arr['length']   // 3
</pre>
</div>

<h3 id="Populating_an_array">配列へのデータ追加</h3>

<p>下記のように、要素に値を割り当てることで配列にデータを追加することができます。</p>

<pre class="brush: js">let emp = []
emp[0] = 'Casey Jones'
emp[1] = 'Phil Lesh'
emp[2] = 'August West'
</pre>

<div class="note">
<p><strong>注:</strong> 上記のコードで配列演算子 (角括弧) 内に非整数値を指定すると、配列要素ではなく配列を表すオブジェクトのプロパティとして作成されます。</p>

<pre class="brush: js">let arr = []
arr[3.4] = 'Oranges'
console.log(arr.length)                 // 0
console.log(arr.hasOwnProperty(3.4))    // true
</pre>
</div>

<p>配列を作成するときにも、データを追加することができます。</p>

<pre class="brush: js">let myArray = new Array('Hello', myVar, 3.14159)
// または
let myArray = ['Mango', 'Apple', 'Orange']
</pre>

<h3 id="Understanding_length">配列の長さの理解</h3>

<p>実装レベルでは、 JavaScript の配列は、配列のインデックスをプロパティ名として使用して、その要素を標準的なオブジェクトのプロパティとして格納します。</p>

<p><code>length</code> プロパティは特別です。これは常に最終要素のインデックス +1 を返します (次の例では、<code>'Dusty'</code> のインデックスは <code>30</code> なので、<code>cats.length</code> は <code>30 + 1</code> を返します)。</p>

<p>JavaScript の配列のインデックスは <code>0</code> から始まるものであり、 <code>1</code> からではないことを覚えておいてください。これは、<code>length</code> プロパティは配列に格納されている最大のインデックスより 1 つ大きい値になるということです。</p>

<pre class="brush: js">let cats = []
cats[30] = ['Dusty']
console.log(cats.length) // 31
</pre>

<p><code>length</code> プロパティに値を割り当てることもできます。</p>

<p>格納されているアイテムの数より小さい値を設定すると、配列は切り捨てられます。すなわち、<code>0</code> に設定すると完全に配列を空にします。</p>

<pre class="brush: js">let cats = ['Dusty', 'Misty', 'Twiggy']
console.log(cats.length)  // 3

cats.length = 2
console.log(cats)  // ログに "Dusty, Misty"  - Twiggy は削除される

cats.length = 0
console.log(cats)  // ログに [ ] 、配列 cats は空になる

cats.length = 3
console.log(cats)  // ログに [ &lt;3 個の空スロット&gt; ]
</pre>

<h3 id="Iterating_over_arrays">配列の反復処理</h3>

<p>よく行われるのは配列に含まれる値に対し、それぞれの値について、なんらかの処理を行うことです。これを行う一番簡単な方法は次のとおりです。</p>

<pre class="brush: js">let colors = ['red', 'green', 'blue']
for (let i = 0; i &lt; colors.length; i++) {
  console.log(colors[i])
}
</pre>

<p>配列内の要素がいずれも論理値としては <code>false</code> に評価されないことがわかっている場合 ― 例えば配列が <a href="/ja/docs/Web/API/Document_Object_Model">DOM</a> ノードのみで構成されている場合などには、例のように、より効率的な表現を使用できます。</p>

<pre class="brush: js">let divs = document.getElementsByTagName('div')
for (let i = 0, div; div = divs[i]; i++) {
  /* div に対して何らか処理をする */
}
</pre>

<p>この例では、配列の長さのチェックに掛かるオーバーヘッドを回避しています。そしてより便利に使えるように、ループの反復のたびに <code>div</code> 変数に現在の項目を代入するようにしています。</p>

<p>配列を反復処理する別の方法として {{jsxref("Array.forEach", "forEach()")}} メソッドがあります。</p>

<pre class="brush: js">let colors = ['red', 'green', 'blue']
colors.forEach(function(color) {
  console.log(color)
})
// red
// green
// blue
</pre>

<p>あるいは、ES2015 のアロー関数式を forEach の引数にしてコードを短縮することもできます。</p>

<pre class="brush: js">let colors = ['red', 'green', 'blue']
colors.forEach(color =&gt; console.log(color))
// red
// green
// blue
</pre>

<p><code>forEach</code> に渡される関数では、その関数への引数に配列の要素が渡されて、配列内の各項目ごとに 1 回ずつ実行されます。値が割り当てられていない要素は <code>forEach</code> ループで反復されません。</p>

<p>配列定義の際に省略された要素は、<code>forEach</code> によって反復処理されるときには現れませんが、配列要素に <code>undefined</code> が割り当てられている場合は現れることに注意してください。</p>

<pre class="brush: js">let array = ['first', 'second', , 'fourth']

array.forEach(function(element) {
  console.log(element)
})
// first
// second
// fourth

if (array[2] === undefined) {
  console.log('array[2] is undefined')  // true
}

array = ['first', 'second', undefined, 'fourth']

array.forEach(function(element) {
  console.log(element)
})
// first
// second
// undefined
// fourth
</pre>

<p>JavaScript では、配列の要素は標準的なオブジェクトプロパティとして保存されるので、{{jsxref("Statements/for...in","for...in")}} ループを使って JavaScript 配列を反復処理するのはお勧めできません。というのも、通常の要素とすべての列挙可能なプロパティが現れるからです。</p>

<h3 id="Array_methods">配列のメソッド</h3>

<p>{{jsxref("Array")}} オブジェクトには以下のようなメソッドがあります。</p>

<p>{{jsxref("Array.concat", "concat()")}} は 2 つの配列を結合し、新しい配列を返します。</p>

<pre class="brush: js">let myArray = new Array('1', '2', '3')
myArray = myArray.concat('a', 'b', 'c')
// myArray は ["1", "2", "3", "a", "b", "c"] になる
</pre>

<p>{{jsxref("Array.join", "join(delimiter = ',')")}} は配列のすべての要素を文字列に結合します。</p>

<pre class="brush: js">let myArray = new Array('Wind', 'Rain', 'Fire')
let list = myArray.join(' - ')  // list は "Wind - Rain - Fire" になる
</pre>

<p>{{jsxref("Array.push", "push()")}} は 1 つ以上の要素を配列の最後に追加し、その新しい配列の長さを返します。</p>

<pre class="brush: js">let myArray = new Array('1', '2')
myArray.push('3')  // myArray は ["1", "2", "3"] になる
</pre>

<p>{{jsxref("Array.pop", "pop()")}} は配列から最後の要素を取り除き、その要素を返します。</p>

<pre class="brush: js">let myArray = new Array('1', '2', '3')
let last = myArray.pop()
// myArray は ["1", "2"] に、last は "3" になる
</pre>

<p>{{jsxref("Array.shift", "shift()")}} は配列から最初の要素を取り除き、その要素を返します。</p>

<pre class="brush: js">let myArray = new Array('1', '2', '3')
let first = myArray.shift()
// myArray は ["2", "3"]に、first は "1" になる
</pre>

<p>{{jsxref("Array.shift", "unshift()")}} は 1 つ以上の要素を配列の先頭に追加し、その新しい配列の長さを返します。</p>

<pre class="brush: js">let myArray = new Array('1', '2', '3')
myArray.unshift('4', '5')
// myArray は ["4", "5", "1", "2", "3"] になる
</pre>

<p>{{jsxref("Array.slice", "slice(start_index, upto_index)")}} は配列の一部を抽出し、新しい配列を返します。</p>

<pre class="brush: js">let myArray = new Array('a', 'b', 'c', 'd', 'e')
myArray = myArray.slice(1, 4)  // インデックス 1 から始め、インデックス 3 まですべての要素を
                               // 展開して、[ "b", "c", "d"] を返す
</pre>

<p>{{jsxref("Array.splice", "splice(index, count_to_remove, addElement1, addElement2, ...)")}} は要素を配列から取り除き、 (必要に応じて) 置き換えます。</p>

<pre class="brush: js">let myArray = new Array('1', '2', '3', '4', '5')
myArray.splice(1, 3, 'a', 'b', 'c', 'd')
// myArray は ["1", "a", "b", "c", "d", "5"] になる
// このコードは、インデックス 1 の要素 ("2" のあった場所) から始まり、
// 3 つの要素を削除して、そこに後続のすべての要素を挿入します。
</pre>

<p>{{jsxref("Array.reverse", "reverse()")}} は配列の中の要素をその場で反転させます。配列の最初の要素が最後に、最後の要素が最初になります。配列への参照を返します。</p>

<pre class="brush: js">let myArray = new Array('1', '2', '3')
myArray.reverse()
// 配列要素が入れ替えられ、myArray = ["3", "2", "1"] になる
</pre>

<p>{{jsxref("Array.sort", "sort()")}} は配列の要素をその場でソートし、その配列の参照を返します。</p>

<pre class="brush: js">let myArray = new Array('Wind', 'Rain', 'Fire')
myArray.sort()
// 配列がソートされ、myArray = ["Fire", "Rain", "Wind"] になる
</pre>

<p><code>sort()</code> は要素を比較する方法を指定するための、コールバック関数を引数として取ることがあります。</p>

<p>コールバック関数を引数として取る <code>sort</code> メソッド (および以下のメソッド) は、らかの形で配列全体を反復処理することから、<strong>反復メソッド</strong> (iterative method") と呼ばれています。それぞれが任意で <code>thisObject</code> と呼ばれる第二引数を受け取ります。<code>thisObject</code> が与えられた場合、これがコールバック関数の本体内で <code>this</code> キーワードの値になります。与えられなかった場合は、関数が明示的なオブジェクトコンテキストの外で呼び出された場合と同様に、<code>this</code> はアロー関数がコールバックとして使用された場合にはグローバルオブジェクト (<a href="/ja/docs/Web/API/Window" title="Window インターフェースは、 DOM 文書を含むウィンドウを表します。 document プロパティは、そのウィンドウに読み込まれた DOM 文書を指します。"><code>window</code></a>) を参照し、通常の関数の場合には <code>undefined</code> になります。</p>

<p>コールバック関数は、配列の要素 2 つを引数として呼び出されます。</p>

<p>以下の関数は 2 つの値を比較して、3 つの値のうち 1 つを返します。</p>

<p>つまり、以下の例は文字列の最後の文字で並べ替えをします。</p>

<pre class="brush: js">let sortFn = function(a, b) {
  if (a[a.length - 1] &lt; b[b.length - 1]) return -1;
  if (a[a.length - 1] &gt; b[b.length - 1]) return 1;
  if (a[a.length - 1] == b[b.length - 1]) return 0;
}
myArray.sort(sortFn)
// 配列がソートされ、 myArray = ["Wind","Fire","Rain"] になる</pre>

<ul>
 <li>このソートシステムにより <code>a</code> が <code>b</code> より小さいとされた場合、 <code>-1</code> (または、任意の負の数) を返します。</li>
 <li>このソートシステムにより <code>a</code> が <code>b</code> より大きいとされた場合、 <code>1</code> (または、任意の正の数) を返します。</li>
 <li><code>a</code> と <code>b</code> が等値と見なされる場合、 <code>0</code> を返します。</li>
</ul>

<p>{{jsxref("Array.indexOf", "indexOf(searchElement[, fromIndex])")}} は配列から <code>searchElement</code> を検索します。そして、最初に一致した位置のインデックスを返します。</p>

<pre class="brush: js">let a = ['a', 'b', 'a', 'b', 'a']
console.log(a.indexOf('b'))     // 1 がログに出力される

// 最初から最後への検索を試してみる
console.log(a.indexOf('b', 2))  // 3 がログに出力される
console.log(a.indexOf('z'))     // 'z' は見つからないので -1 がログに出力される
</pre>

<p>{{jsxref("Array.lastIndexOf", "lastIndexOf(searchElement[, fromIndex])")}} は <code>indexOf</code> のように動作しますが、最後の要素から開始して前方に検索します。</p>

<pre class="brush: js">let a = ['a', 'b', 'c', 'd', 'a', 'b']
console.log(a.lastIndexOf('b'))     // 5 がログに出力される

// 最後から最初への検索を試してみる
console.log(a.lastIndexOf('b', 4))  // 1 がログに出力される
console.log(a.lastIndexOf('z'))     // -1 がログに出力される
</pre>

<p>{{jsxref("Array.forEach", "forEach(callback[, thisObject])")}} はすべての配列アイテムにコールバック関数 <code><var>callback</var></code> を実行し、 <code>undefined</code> を返します。</p>

<pre class="brush: js">let a = ['a', 'b', 'c']
a.forEach(function(element) { console.log(element) })
// 順番にそれぞれのアイテムをログに出力する
</pre>

<p>{{jsxref("Array.map", "map(callback[, thisObject])")}} はすべての配列アイテムごとにコールバック関数 <code>callback</code> を実行し、返値からなる新しい配列を返します。</p>

<pre class="brush: js">let a1 = ['a', 'b', 'c']
let a2 = a1.map(function(item) { return item.toUpperCase() })
console.log(a2) // ['A', 'B', 'C'] がログに出力される
</pre>

<p>{{jsxref("Array.filter", "filter(callback[, thisObject])")}} はコールバック関数 <code>callback</code> が true を返すアイテムからなる新しい配列を返します。</p>

<pre class="brush: js">let a1 = ['a', 10, 'b', 20, 'c', 30]
let a2 = a1.filter(function(item) { return typeof item === 'number'; })
console.log(a2)  // [10, 20, 30] がログに出力される
</pre>

<p>{{jsxref("Array.every", "every(callback[, thisObject])")}} はコールバック関数 <code>callback</code> が配列内のすべてのアイテムで true を返す場合に true を返します。</p>

<pre class="brush: js">function isNumber(value) {
  return typeof value === 'number'
}
let a1 = [1, 2, 3]
console.log(a1.every(isNumber))  // true がログに出力される
let a2 = [1, '2', 3]
console.log(a2.every(isNumber))  // false がログに出力される
</pre>

<p>{{jsxref("Array.some", "some(callback[, thisObject])")}} はコールバック関数 <code>callback</code> が配列内の少なくとも一つのアイテムで true を返す場合に true を返します。</p>

<pre class="brush: js">function isNumber(value) {
  return typeof value === 'number'
}
let a1 = [1, 2, 3]
console.log(a1.some(isNumber))  // true がログに出力される
let a2 = [1, '2', 3]
console.log(a2.some(isNumber))  // true がログに出力される
let a3 = ['1', '2', '3']
console.log(a3.some(isNumber))  // false がログに出力される
</pre>

<p>{{jsxref("Array.reduce", "reduce(callback[, initialValue])")}} は、配列の各値に対して <code><var>callback</var>(<var>accumulator</var>, <var>currentValue</var>[, <var>currentIndex</var>[, <var>array</var>]])</code> を適用し、項目のリストを一つの値に減らすことを目的としています。 <code>reduce</code> 関数は、 <code><var>callback</var></code> 関数によって返された最終的な値を返します。</p>

<p><code><var>initialValue</var></code> が指定された場合は、<code><var>initialValue</var></code> を第 1 引数の値として、配列の最初の項目の値を第 2 引数の値として<code><var>コールバック</var></code>が呼び出されます。</p>

<p><code><var>initialValue</var></code> が指定されて<em>いない</em>場合、<code><var>コールバックの</var></code>の最初の 2 つの引数の値は、配列の最初と 2 番目の要素になります。後続の<em>すべての</em>呼び出しで、最初の引数の値は前の呼び出しで<code><var>コールバック</var></code>が返した値になり、2 番目の引数の値は配列の次の値になります。</p>

<p><code><var>コールバック</var></code>が処理対象の項目のインデックスにアクセスする必要がある場合は、配列全体にアクセスするときに、オプションの引数として利用できます。</p>

<pre class="brush: js">let a = [10, 20, 30]
let total = a.reduce(function(accumulator, currentValue) { return accumulator + currentValue }, 0)
console.log(total) // 60 がログに出力される
</pre>

<p>{{jsxref("Array.reduceRight", "reduceRight(callback[, initialValue])")}} は <code>reduce()</code> のように機能します。しかし最後の要素から適用を開始します。</p>

<p><code>reduce</code> と <code>reduceRight</code> もある意味では配列の反復メソッドです。要素列を単一の値に還元するために、再帰的に 2 つの値を組み合わせるアルゴリズムにこれらのメソッドを使用してください。</p>

<h3 id="Multi-dimensional_arrays">多次元配列</h3>

<p>配列をネストすることができます、つまり配列要素として配列を含めることができることを意味します。JavaScript の配列の特徴を活かして、多次元配列を生成できます。</p>

<p>以下のコードでは 2次元配列を作成しています。</p>

<pre class="brush: js">let a = new Array(4)
for (let i = 0; i &lt; 4; i++) {
  a[i] = new Array(4)
  for (let j = 0; j &lt; 4; j++) {
    a[i][j] = '[' + i + ', ' + j + ']'
  }
}
</pre>

<p>この例では、次のテーブル行を持つ配列を作成しています。</p>

<pre>Row 0: [0, 0] [0, 1] [0, 2] [0, 3]
Row 1: [1, 0] [1, 1] [1, 2] [1, 3]
Row 2: [2, 0] [2, 1] [2, 2] [2, 3]
Row 3: [3, 0] [3, 1] [3, 2] [3, 3]
</pre>

<h3 id="Using_arrays_to_store_other_properties">配列を使用して他のプロパティを格納する</h3>

<p>配列は、オブジェクトのように関連する情報を格納するために使用することもできます。</p>

<pre class="brush: js">const arr = [1, 2, 3];
arr.property = "value";
console.log(arr.property);  // "value" がログに出力される
</pre>

<h3 id="Arrays_and_regular_expressions">配列と正規表現</h3>

<p>配列が正規表現と文字列との間の一致結果である場合、その配列は一致についての情報を提供するプロパティと要素を返します。{{jsxref("Global_Objects/RegExp/exec","RegExp.exec()")}}、{{jsxref("Global_Objects/String/match","String.match()")}}、{{jsxref("Global_Objects/String/split","String.split()")}} による返値がこうした配列となります。正規表現とともに配列を使用する際の情報については、当ガイドの<a href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions">正規表現</a>の章をご覧ください。</p>

<h3 id="Working_with_array-like_objects">配列風オブジェクトを利用する</h3>

<p><a href="/ja/docs/Web/API/Document/getElementsByTagName" title="与えられたタグ名を持つ要素の HTMLCollection を返します。"><code>document.getElementsByTagName()</code></a> によって返される <a href="/ja/docs/Web/API/NodeList" title="NodeList オブジェクトはノードのコレクションで、通常、 Node.childNodes などのプロパティや document.querySelectorAll() などのメソッドによって返されます。"><code>NodeList</code></a> や、関数本体内で利用できる {{jsxref("Functions/arguments","arguments")}} オブジェクトのように、表面上は配列のようにふるまう JavaScript オブジェクトがありますが、これらはメソッドすべてを共有してはいません。例えば、 <code>arguments</code> オブジェクトには {{jsxref("Global_Objects/Function/length","length")}} 属性がありますが、{{jsxref("Array.forEach", "forEach()")}} メソッドは実装されていません。</p>

<p>配列風オブジェクトに対して配列メソッドを直接呼び出すことはできません。</p>

<pre class="brush: js example-bad">function printArguments() {
  arguments.forEach(function(item) {  // TypeError: arguments.forEach is not a function
    console.log(item);
  });
}
</pre>

<p>これを行うには、 {{jsxref("Global_Objects/Function/call","Function.prototype.call()")}} を使って間接的に呼び出します。</p>

<pre class="brush: js example-good">function printArguments() {
  Array.prototype.forEach.call(arguments, function(item) {
    console.log(item);
  });
}
</pre>

<p>配列のプロトタイプメソッドは、配列と同様の方法で文字に逐次アクセスできるため、文字列にも使用できます。</p>

<pre class="brush: js">Array.prototype.forEach.call('a string', function(chr) {
  console.log(chr)
})
</pre>

<h2 id="Typed_Arrays">型付き配列</h2>

<p><a href="/ja/docs/Web/JavaScript/Typed_arrays">JavaScript の型付き配列</a>は配列風オブジェクトで、生のバイナリーデータにアクセスする仕組みをもたらします。ご存知のように、{{jsxref("Array")}} オブジェクトは動的に拡大・縮小し、 JavaScript におけるいかなる値でも保持することができます。 JavaScript エンジンは最適化を行うため、これらの配列は高速に機能します。しかし、ウェブアプリケーションがますます強力になり、音声や動画の操作、 <a href="/ja/docs/Web/API/WebSockets_API">WebSocket</a> を使った生データへのアクセス等の機能が追加されるつれ、 JavaScript コードが型付き配列の生のバイナリデータを素早く簡単に操作できると便利な場合があることが明らかになりました。</p>

<h3 id="Buffers_and_views_typed_array_architecture">バッファとビュー : 型付き配列のアーキテクチャ</h3>

<p>最大の柔軟性と効率性を達成するため、JavaScript 型付き配列の実装を<strong>バッファ</strong>と<strong>ビュー</strong>に分離しました。バッファ ({{jsxref("ArrayBuffer")}} オブジェクトによる実装) はデータのかたまりを表すオブジェクトです。語るほどのフォーマットはなく、データの中身にアクセスするためのメカニズムを提供しません。バッファに含まれるメモリーにアクセスするには、ビューを使用する必要があります。ビューはデータを実際の型付き配列に変換する<strong>コンテキスト</strong> — つまり、データ型、開始位置のオフセット、要素数 — を提供します。</p>

<p><img alt="Typed arrays in an ArrayBuffer" src="typed_arrays.png"></p>

<h3 id="ArrayBuffer" name="ArrayBuffer">ArrayBuffer</h3>

<p>{{jsxref("ArrayBuffer")}} は汎用的な固定長のバイナリーデータバッファを表すために使用されるデータ型です。<code>ArrayBuffer</code> の内容は直接操作できません。かわりに、型付き配列ビューか特定のフォーマットでバッファを表す {{jsxref("DataView")}} を生成し、それらをバッファの内容の読み書きに使用します。</p>

<h3 id="Typed_array_views" name="Typed_array_views">型付き配列ビュー</h3>

<p>型付き配列ビューは自己記述的な名前を持っていて、そのすべてが <code>Int8</code>, <code>Uint32</code>, <code>Float64</code> などといったよく見られる数値型用のビューを提供しています。<code>Uint8ClampedArray</code> という 1 つ特別な型付き配列ビューがあります。これは、0〜255 の範囲に値を固定します。これは、例えば、<a href="/ja/docs/Web/API/ImageData">Canvas のデータ処理</a>に便利です。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th class="header" scope="col">型</th>
   <th class="header" scope="col">値の範囲</th>
   <th class="header" scope="col">サイズ (バイト数)</th>
   <th class="header" scope="col">説明</th>
   <th class="header" scope="col">Web IDL 型</th>
   <th class="header" scope="col">同等の C 型</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{jsxref("Int8Array")}}</td>
   <td><code>-128</code> から <code>127</code></td>
   <td>1</td>
   <td>8 ビット 2 の補数方式の符号付き整数値</td>
   <td><code>byte</code></td>
   <td><code>int8_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Uint8Array")}}</td>
   <td><code>0</code> から <code>255</code></td>
   <td>1</td>
   <td>8 ビット 符号なし整数値</td>
   <td><code>octet</code></td>
   <td><code>uint8_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Uint8ClampedArray")}}</td>
   <td><code>0</code> から <code>255</code></td>
   <td>1</td>
   <td>8 ビット 符号なし整数値 (切り詰め)</td>
   <td><code>octet</code></td>
   <td><code>uint8_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Int16Array")}}</td>
   <td><code>-32768</code> から <code>32767</code></td>
   <td>2</td>
   <td>16 ビット 2 の補数方式の符号付き整数値</td>
   <td><code>short</code></td>
   <td><code>int16_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Uint16Array")}}</td>
   <td><code>0</code> から <code>65535</code></td>
   <td>2</td>
   <td>16 ビット 符号なし整数値</td>
   <td><code>unsigned short</code></td>
   <td><code>uint16_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Int32Array")}}</td>
   <td><code>-2147483648</code> から <code>2147483647</code></td>
   <td>4</td>
   <td>32 ビット 2 の補数方式の符号付き整数値</td>
   <td><code>long</code></td>
   <td><code>int32_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Uint32Array")}}</td>
   <td><code>0</code> から <code>4294967295</code></td>
   <td>4</td>
   <td>32 ビット 符号なし整数値</td>
   <td><code>unsigned long</code></td>
   <td><code>uint32_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Float32Array")}}</td>
   <td><code>1.2</code><span>×</span><code>10<sup>-38</sup></code> から <code>3.4</code><span>×</span><code>10<sup>38</sup></code></td>
   <td>4</td>
   <td>32 ビット IEEE 浮動小数点数 (7 桁の有効数字 例：<code>1.1234567</code>)</td>
   <td><code>unrestricted float</code></td>
   <td><code>float</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Float64Array")}}</td>
   <td><code>5.0</code><span>×</span><code>10<sup>-324</sup></code> から <code>1.8</code><span>×</span><code>10<sup>308</sup></code></td>
   <td>8</td>
   <td>64 ビット IEEE 浮動小数点数 (16 桁の有効数字 例：<code>1.123...15</code>)</td>
   <td><code>unrestricted double</code></td>
   <td><code>double</code></td>
  </tr>
  <tr>
   <td>{{jsxref("BigInt64Array")}}</td>
   <td><code>-2<sup>63</sup></code> から <code>2<sup>63</sup>-1</code></td>
   <td>8</td>
   <td>64 ビット 2 の補数方式の符号付き整数値</td>
   <td><code>bigint</code></td>
   <td><code>int64_t (signed long long)</code></td>
  </tr>
  <tr>
   <td>{{jsxref("BigUint64Array")}}</td>
   <td><code>0</code> から <code>2<sup>64</sup>-1</code></td>
   <td>8</td>
   <td>64 ビット 符号なし整数値</td>
   <td><code>bigint</code></td>
   <td><code>uint64_t (unsigned long long)</code></td>
  </tr>
 </tbody>
</table>

<p>詳細については、<a href="/ja/docs/Web/JavaScript/Typed_arrays">JavaScript 型付き配列</a>と様々な {{jsxref("TypedArray")}} オブジェクトに関するリファレンスをご覧ください。</p>

<p>{{PreviousNext("Web/JavaScript/Guide/Regular_Expressions", "Web/JavaScript/Guide/Keyed_Collections")}}</p>
