---
title: Array.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
tags:
  - Array
  - Array method
  - JavaScript
  - Method
  - Prototype
  - Sorting
translation_of: Web/JavaScript/Reference/Global_Objects/Array/sort
---
<div>{{JSRef}}</div>

<p><code><strong>sort()</strong></code> メソッドは、配列の要素を <em><a href="https://ja.wikipedia.org/wiki/In-place%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0">in place</a></em> でソートします。既定のソート順は昇順で、要素を文字列に変換してから、UTF-16 コード単位の値の並びとして比較します。</p>

<p>このソートで消費される CPU時間やメモリースペースは実装に依存するので、ここで言及することは出来ません。</p>

<div>{{EmbedInteractiveExample("pages/js/array-sort.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、<a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>arr</var>.sort(<var>[compareFunction]</var>)
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>firstEl</code></dt>
 <dd>比較対象の一つ目の要素を指定します。</dd>
 <dt><code>secondEl</code></dt>
 <dd>比較対象の二つ目の要素を指定します。</dd>
</dl>

<dl>
 <dt><code>compareFunction</code> {{optional_inline}}</dt>
 <dd>ソート順を定義する関数を指定します。省略された場合、配列の各要素は文字列に変換され、各文字の <a href="/ja/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Unicode">Unicode</a> のコードポイント順に従ってソートされます。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>ソートされた結果の配列。ソートは対象配列上で <em><a href="https://ja.wikipedia.org/wiki/In-place%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0">in place</a></em> に行われることに注意して下さい。コピーされた別の配列が準備されることはありません。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>compareFunction</code> (比較関数) が与えられなかった場合、<code>undefined</code> 以外のすべての配列要素は文字列に変換され、文字列が UTF-16 コード単位順でソートされます。例えば、"banana" は "cherry" の前に来ます。数値のソートでは、9 が 80 の前に来ますが、数値は文字列に変換されるため、Unicode 順で "80" が "9" の前に来ます。<code>undefined</code> の要素はすべて、配列の末尾に並べられます。</p>

<div class="blockIndicator note">
<p><strong>注:</strong> UTF-16 では、<code>\uFFFF</code> を超える Unicode 文字は 2 つのサロゲートコード単位にエンコードされ、<code>\uD800</code>-<code>\uDFFF</code> の範囲になります。それぞれのコード単位の値は比較では別々に扱われます。したがって、<code>\uD655\uDE55</code> というサロゲートペアで形成される文字は、<code>\uFF3A</code> の文字よりも前に並べられます。</p>
</div>

<p><code>compareFunction</code> が与えられた場合、<code>undefined</code> 以外のすべての配列要素は比較関数の返値に基づきソートされます (<code>undefined</code> の要素はすべて、<code>compareFunction</code> を呼び出すことなく配列の末尾へ並べられます)。もし <code>a</code> と <code>b</code> を比較しようとする場合は、次のようになります。</p>

<ul>
 <li><code>compareFunction(a, b)</code> が 0 未満の場合、<code>a</code> を <code>b</code> より小さいインデックスにソートします。(つまり、<code>a</code> が先に来るようにします)</li>
 <li><code>compareFunction(a, b)</code> が 0 を返した場合、<code>a</code> と <code>b</code> は互いに変更せず、他のすべての要素に対してソートします。注意: ECMAScript 標準はこの振る舞いを保証していないため、一部のブラウザー (例えば、遅くとも 2003 年以前のバージョンの Mozilla) はこれを遵守していません。</li>
 <li><code>compareFunction(a, b)</code> が 0 より大きい場合、<code>b</code> を <code>a</code> より小さいインデックスにソートします。(つまり、<code>b</code> が先に来るようにします)</li>
 <li><code>compareFunction(a, b)</code> に与えられた引数が同じなら返値も同じでなければなりません。もし一貫性のない値を返した場合の挙動は未定義となります。</li>
</ul>

<p>よって、比較関数は以下のような形式をもちます。</p>

<pre class="brush: js notranslate">function compare(a, b) {
  if (ある順序の基準において a が b より小) {
    return -1;
  }
  if (その順序の基準において a が b より大) {
    return 1;
  }
  // a は b と等しいはず
  return 0;
}
</pre>

<p>文字列の代わりに数字を比較する場合、比較関数は単純に <code>a</code> から <code>b</code> を引けばよいでしょう。次のように比較関数を定義すれば昇順に並べることができます (<code>Infinity</code> や <code>NaN</code> がなければですが)。</p>

<pre class="brush: js notranslate">function compareNumbers(a, b) {
  return a - b;
}
</pre>

<p>比較関数には{{jsxref("Operators/function", "関数式", "", 1)}}を使うと便利です。</p>

<pre class="brush: js notranslate">var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]
</pre>

<p>ES2015 では{{jsxref("Functions/Arrow_functions", "アロー関数式", "", 1)}}によるより短い構文も利用できます。</p>

<pre class="brush: js notranslate">let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) =&gt; a - b);
console.log(numbers);

// [1, 2, 3, 4, 5]</pre>

<p>オブジェクトはプロパティの値の 1 つを指定して並べ替えることができます。</p>

<pre class="brush: js notranslate">var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// 値順にソート
items.sort(function (a, b) {
  return a.value - b.value;
});

// 名前順にソート
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // 大文字と小文字を無視する
  var nameB = b.name.toUpperCase(); // 大文字と小文字を無視する
  if (nameA &lt; nameB) {
    return -1;
  }
  if (nameA &gt; nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Creating_displaying_and_sorting_an_array" name="Creating_displaying_and_sorting_an_array">配列の生成、表示、ソート</h3>

<p>以下の例は 4 つの配列を生成し、元の配列を表示したのちに、ソートした配列を表示します。数値の配列は比較関数なしでソートされたのち、比較関数ありでソートされます。</p>

<pre class="brush: js notranslate">var stringArray = ['Blue', 'Humpback', 'Beluga'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

console.log('stringArray:', stringArray.join());
console.log('ソート結果:', stringArray.sort());

console.log('numberArray:', numberArray.join());
console.log('比較関数なしのソート結果:', numberArray.sort());
console.log('compareNumbers でのソート結果:', numberArray.sort(compareNumbers));

console.log('numericStringArray:', numericStringArray.join());
console.log('比較関数なしのソート結果:', numericStringArray.sort());
console.log('compareNumbers でのソート結果:', numericStringArray.sort(compareNumbers));

console.log('mixedNumericArray:', mixedNumericArray.join());
console.log('比較関数なしのソート結果:', mixedNumericArray.sort());
console.log('compareNumbers でのソート結果:', mixedNumericArray.sort(compareNumbers));
</pre>

<p>この例は以下のような出力をもたらします。出力結果が示すように、比較関数が使われた場合、数値はそれが数値か数字の文字列かにかかわらず正しくソートされます。</p>

<pre class="notranslate">stringArray: Blue,Humpback,Beluga
ソート結果: Beluga,Blue,Humpback

numberArray: 40,1,5,200
比較関数なしのソート結果: 1,200,40,5
compareNumbers でのソート結果: 1,5,40,200

numericStringArray: 80,9,700
比較関数なしのソート結果: 700,80,9
compareNumbers でのソート結果: 9,80,700

mixedNumericArray: 80,9,700,40,1,5,200
比較関数なしのソート結果: 1,200,40,5,700,80,9
compareNumbers でのソート結果: 1,5,9,40,80,200,700
</pre>

<h3 id="Sorting_non-ASCII_characters" name="Sorting_non-ASCII_characters">非ASCII文字のソート</h3>

<p>非 ASCII 文字、つまりアクセント記号付き文字 (e, é, è, a, ä など) を含む文字列をソートする場合、英語以外の文字列は {{jsxref("String.localeCompare")}} を使用してください。この関数は、それらの文字を比較して正しい順序で表示することができます。</p>

<pre class="brush: js notranslate">var items = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair'];
items.sort(function (a, b) {
  return a.localeCompare(b);
});

// items は ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
</pre>

<h3 id="Sorting_with_map" name="Sorting_with_map">map を利用したソート</h3>

<p><code>compareFunction</code> (比較関数) は、配列内の要素毎に複数回呼び出すことができます。ただ <code>compareFunction</code> の性質によっては、これが多大なオーバーヘッドをもたらす可能性もあります。<code>compareFunction</code> がたくさんの処理を行えば行うほど、そしてソート対象の要素数が多ければ多いほど、ソートに <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map">map</a> を利用すると効率が上がるでしょう。すなわち、対象の配列を一度だけ走査してソート対象の実際の値を取り出し、一時的な配列に格納した上でソートを行い、その上で一時的な配列を走査して正しい並び順を実現するやりかたです。</p>

<pre class="brush: js notranslate">// ソートする配列
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// temporary array holds objects with position and sort-value
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})

// sorting the mapped array containing the reduced values
mapped.sort(function(a, b) {
  if (a.value &gt; b.value) {
    return 1;
  }
  if (a.value &lt; b.value) {
    return -1;
  }
  return 0;
});

// container for the resulting order
var result = mapped.map(function(el){
  return list[el.index];
});
</pre>

<p>There is an open source library available called <a href="https://null.house/open-source/mapsort">mapsort</a> which applies this approach.</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.sort', 'Array.prototype.sort')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Array.sort")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Array.prototype.reverse()")}}</li>
 <li>{{jsxref("String.prototype.localeCompare()")}}</li>
 <li><a href="https://v8.dev/blog/array-sort">About the stability of the algorithm used by V8 engine</a></li>
</ul>
