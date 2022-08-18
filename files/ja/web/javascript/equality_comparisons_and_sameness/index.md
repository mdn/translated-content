---
title: 等価性の比較と同一性
slug: Web/JavaScript/Equality_comparisons_and_sameness
tags:
  - Comparison
  - Equality
  - Intermediate
  - JS
  - JavaScript
  - NaN
  - SameValue
  - SameValueZero
  - Sameness
  - 中級者
  - 同値
  - 比較
  - 等価性
translation_of: Web/JavaScript/Equality_comparisons_and_sameness
---
<div>{{jsSidebar("Intermediate")}}</div>

<p>ES2015 には、4 種類の等価性アルゴリズムがあります。</p>

<ul>
 <li><ruby>抽象的な等価性比較<rp> (</rp><rt>Abstract Equality Comparison</rt><rp>)</rp></ruby> (<code>==</code>)</li>
 <li><ruby>厳格な等価性比較<rp> (</rp><rt>Strict Equality Comparison</rt><rp>)</rp></ruby> (<code>===</code>): <code>Array.prototype.indexOf</code>, <code>Array.prototype.lastIndexOf</code>, <code>case</code> の一致で使用</li>
 <li><ruby>ゼロの同値<rp> (</rp><rt>SameValueZero</rt><rp>)</rp></ruby>: <code>%TypedArray%</code> と <code>ArrayBuffer</code> コンストラクター、<code>Map</code> と <code>Set</code> の操作、ES2016 で追加された <code>String.prototype.includes</code> で使用されます</li>
 <li><ruby>同値<rp> (</rp><rt>SameValue</rt><rp>)</rp></ruby>: 上記以外のすべての状況で使用されます</li>
</ul>

<p>JavaScript には、3 種類の値比較演算子があります。</p>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity">===</a>: 厳格な等価性比較 ("strict equality", "同一性 (identity)", "三重等号")</li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality">==</a>: 緩い等価性 ("loose equality", "二重等号")</li>
 <li>{{jsxref("Object.is")}} (ECMAScript 2015 の新機能): 同値比較</li>
</ul>

<p>どの演算子を使用するかは、どのような比較を行いたいかに依存します。簡単に言えば、</p>

<ul>
 <li>二重等号 (<code>==</code>) は二つのものを比較する前に型変換を実行し、<code>NaN</code>, <code>-0</code>, <code>+0</code> を IEEE 754 に準拠して特別扱いします (よって <code>NaN != NaN</code>, <code>-0 == +0</code> になります)。</li>
 <li>三重等号 (<code>===</code>) は二重等号と同じ比較を (<code>NaN</code>, <code>-0</code>, <code>+0</code> の特別扱いを含めて) しますが、型変換を行いません。もし型が異なれば、<code>false</code> が返されます。</li>
 <li><code>Object.is</code> は型変換を行わず、<code>NaN</code>, <code>-0</code>, <code>+0</code> の特別扱いもしません (これらの特殊な数値を除いて <code>===</code> と同じ動作をします)。</li>
</ul>

<p>なお、これらの区別はプリミティブ値の扱いについてのことです。いずれの場合も引数が概念的に似た構造を持つかどうかを比較する訳ではありません。プリミティブ値ではない <code>x</code> および <code>y</code> オブジェクトが同一の構造を持っていてもオブジェクトが異なれば、上記のいずれの形でも <code>false</code> と評価されます。</p>

<h2 id="Strict_equality_using" name="Strict_equality_using"><code>===</code> による厳格な等価性</h2>

<p>厳格な等価性は、2 つの値が等しいか比較します。比較対象の値はどちらも、比較する前に別の値へ暗黙のうちに変換されることはありません。値が異なる型の場合、それらの値は等しくないとみなします。値が同じ型で数値ではない場合、同じ値であれば等しいとみなします。最後に、どちらの値も数値である場合、どちらも <code>NaN</code> ではなく同じ値である、あるいは一方が <code>+0</code> かつもう一方が <code>-0</code> であるときに等しいとみなします。</p>

<pre class="brush: js notranslate">var num = 0;
var obj = new String('0');
var str = '0';

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
</pre>

<p>厳密な等価性は、たいていの使い方で正しい比較になります。数値以外のあらゆる値において、これは「値が自分自身と等しい」という明快な解釈を用います。数値においては、２つの極めて特殊なケースを扱えるようにわずかに異なる解釈を用います。１つ目は浮動小数点数の 0 には正と負の符号付きが存在することです。これは、ある種の数学的な解を表すために役立ちますが、ほとんどの場合は <code>+0</code> と <code>-0</code> の違いを意識せず、厳格な等価性ではこれらを同じ値として扱います。２つ目は浮動小数点数には非数 <code>NaN</code> の概念があることです、これは例えば正の無限大に負の無限大を加算するといった一定の数学的に明確ではない問題達の解を表します。厳格な等価性では <code>NaN</code> を他のどの値 (自分自身も含む) とも等しくないものとして扱います。(<code>(x !== x)</code> が <code>true</code> になる唯一の場合は <code>x</code> が <code>NaN</code> である場合です。)</p>

<h2 id="Loose_equality_using" name="Loose_equality_using"><code>==</code> による緩い等価性</h2>

<p>緩い等価性は、両方の値を共通の型に変換した<em>後で</em>、2 つの値が等しいか比較します。(片方あるいは両方の変換が行われた) 変換処理後の、最終的な等価性の比較は <code>===</code> と全く同じ振る舞いです。緩い等価性は<em>対称的</em>であり、任意の値 <code>A</code> および <code>B</code> において、<code>A == B</code> と <code>B == A</code> の意味は常に同じです (変換処理を適用する順序を除く)。</p>

<p>等価性比較でさまざまな型のオペランドに対して以下のように振る舞います。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="row"></th>
   <th colspan="7" scope="col" style="text-align: center;">オペランド B</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row"></th>
   <td></td>
   <td style="text-align: center;">Undefined</td>
   <td style="text-align: center;">Null</td>
   <td style="text-align: center;">Number</td>
   <td style="text-align: center;">String</td>
   <td style="text-align: center;">Boolean</td>
   <td style="text-align: center;">Object</td>
  </tr>
  <tr>
   <th colspan="1" rowspan="6" scope="row">オペランド A</th>
   <td>Undefined</td>
   <td style="text-align: center;"><code>true</code></td>
   <td style="text-align: center;"><code>true</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td>Null</td>
   <td style="text-align: center;"><code>true</code></td>
   <td style="text-align: center;"><code>true</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td>Number</td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>A === B</code></td>
   <td style="text-align: center;"><code>A === ToNumber(B)</code></td>
   <td style="text-align: center;"><code>A === ToNumber(B)</code></td>
   <td style="text-align: center;"><code>A == ToPrimitive(B)</code></td>
  </tr>
  <tr>
   <td>String</td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>ToNumber(A) === B</code></td>
   <td style="text-align: center;"><code>A === B</code></td>
   <td style="text-align: center;"><code>ToNumber(A) === ToNumber(B)</code></td>
   <td style="text-align: center;"><code>A == ToPrimitive(B)</code></td>
  </tr>
  <tr>
   <td>Boolean</td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>ToNumber(A) === B</code></td>
   <td style="text-align: center;"><code>ToNumber(A) === ToNumber(B)</code></td>
   <td style="text-align: center;"><code>A === B</code></td>
   <td style="text-align: center;"><code>ToNumber(A) == ToPrimitive(B)</code></td>
  </tr>
  <tr>
   <td>Object</td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>ToPrimitive(A) == B</code></td>
   <td style="text-align: center;"><code>ToPrimitive(A) == B</code></td>
   <td style="text-align: center;"><code>ToPrimitive(A) == ToNumber(B)</code></td>
   <td style="text-align: center;"><code>A === B</code></td>
  </tr>
 </tbody>
</table>

<p>上の表で、<code>ToNumber(A)</code> は、比較前に引数を数値に変換しようとします。この振る舞いは <code>+A</code> (正の単項演算子) と同じです。<code>ToPrimitive(A)</code> は、<code>A</code> の持つ <code>A.toString</code> メソッド、そして <code>A.valueOf</code> メソッドの変換シーケンスを実施することで、オブジェクトの引数をプリミティブ値へ変換しようとを試みます。</p>

<p>伝統的にも、また ECMAScript によれば、すべてのオブジェクトは <code>undefined</code> や <code>null</code> に対して大雑把には等価でないとしています。しかし、ほとんどのブラウザーは、ごく一部のオブジェクト (特に、あらゆるページの <code>document.all</code> オブジェクト) が、いくつかの状況においては値 <code>undefined</code> のように振る舞う<em>こと</em>を認めています。緩い等価性もそのようなものの一つです、A が <code>undefined</code> に<em>相当する</em>オブジェクトである場合に限り、<code>null == A</code> および <code>undefined == A</code> は true になります。それ以外のどのオブジェクトも <code>undefined</code> および <code>null</code> と大雑把には等価とはなりません。</p>

<pre class="brush: js notranslate">var num = 0;
var obj = new String('0');
var str = '0';

console.log(num == num); // true
console.log(obj == obj); // true
console.log(str == str); // true

console.log(num == obj); // true
console.log(num == str); // true
console.log(obj == str); // true
console.log(null == undefined); // true

// 特殊なケースを除き、どちらも false
console.log(obj == null);
console.log(obj == undefined);
</pre>

<p>緩い等価性を使用することは大体はよい考えでないと考える開発者もいます。厳格な等価性による比較の結果は予測が容易であり、評価が必要となる型強制がないためにより早くなります。</p>

<h2 id="Same-value_equality" name="Same-value_equality">Same-value 等価性</h2>

<p>最後に示す用法は Same-value 等価性です。これは、すべての状況で 2 つの値が<em>機能的に同一か</em>を判断します(この用法は<a href="http://ja.wikipedia.org/wiki/%E3%83%AA%E3%82%B9%E3%82%B3%E3%83%95%E3%81%AE%E7%BD%AE%E6%8F%9B%E5%8E%9F%E5%89%87">リスコフの置換原則</a>の実践例と言えます)。実例として、イミュータブルなプロパティを変化させようとした場合を見てみましょう:</p>

<pre class="brush: js notranslate">// Number コンストラクタに immutable な NEGATIVE_ZERO プロパティを追加
Object.defineProperty(Number, 'NEGATIVE_ZERO',
                      { value: -0, writable: false, configurable: false, enumerable: false });

function attemptMutation(v) {
  Object.defineProperty(Number, 'NEGATIVE_ZERO', { value: v });
}
</pre>

<p>イミュータブルなプロパティを変更しようとする操作が実際の変更を伴う場合、<code>Object.defineProperty</code> は例外を発生させます。しかし、実際の変更が伴わない場合は、<code>Object.defineProperty</code> は何もしません。<code>v</code> が <code>-0</code> であれば変更を要求されていないので、エラーは発生しません。しかし <code>v</code> が <code>+0</code> であれば、<code>Number.NEGATIVE_ZERO</code> のイミュータブルな値を変更しようとすることになります。内部的には、イミュータブルなプロパティが再定義された場合、新たに指定された値と現在の値が Same-value 等価性によって比較されます。</p>

<p>Same-value 等価性は {{jsxref("Object.is")}} メソッドによって提供されます。</p>

<h2 id="Same-value-zero_equality" name="Same-value-zero_equality">Same-value-zero 等価性</h2>

<p>Same-value 等価性に似ていますが、+0 と -0 は等しいとみなします。</p>

<h2 id="Abstract_equality_strict_equality_and_same_value_in_the_specification" name="Abstract_equality_strict_equality_and_same_value_in_the_specification">仕様書における抽象的な等価性、厳格な等価性、Same value</h2>

<p>ES5 では、<a href="/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators"><code>==</code></a> で実行する比較を <a href="http://ecma-international.org/ecma-262/5.1/#sec-11.9.3">Section 11.9.3, The Abstract Equality Algorithm</a> で説明しています。また、<a href="/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators"><code>===</code></a> の比較は <a href="http://ecma-international.org/ecma-262/5.1/#sec-11.9.6">11.9.6, The Strict Equality Algorithm</a> で説明しています (リンク先をご覧ください。簡単かつ読みやすくなっています。ヒント: 厳格な等価性のアルゴリズムを始めにご覧ください)。また ES5 の <a href="http://ecma-international.org/ecma-262/5.1/#sec-9.12">Section 9.12, The SameValue Algorithm</a> では、JS エンジン内部で使用する SameValue について説明しています。大部分は厳格な等価性のアルゴリズムと同じですが、{{jsxref("Number")}} を扱う 11.9.6.4 および 9.12.4 が異なります。ES2015 では、このアルゴリズムを {{jsxref("Object.is")}} で公開するよう提案しています。</p>

<p>二重等号と三重等号について、11.9.6.1 で最初に行う型の確認を除けば、厳格な等価性のアルゴリズムは緩い等価性のアルゴリズムのサブセットと考えることができます。これは、11.9.6.2 から 7 が 11.9.3.1.a から f に対応するためです。</p>

<h2 id="A_model_for_understanding_equality_comparisons" name="A_model_for_understanding_equality_comparisons">等価性の比較を理解するためのモデル?</h2>

<p>ES2015 より前は、二重等号と三重等号について、一方は他方を "拡張した" ものであると聞いていたかもしれません。例えば、二重等号は三重等号と同じことをすべて行うだけでなくオペランドの型変換も行うことから、三重等号を拡張したものであると聞いたことがあるかもしれません。例えば、<code>6 == "6"</code> です (あるいは二重等号が基本形であり、三重等号は 2 つのオペランドが同一の型であることを要求するという制約を加えていることから、三重等号が拡張形であると言われたかもしれません。どちらが理解に適したモデルであるかは、どのような見方を選ぶかによって変わります)。</p>

<p>しかし内蔵の等価演算子に関するこの考え方は、その "連続体" に ES2015 の {{jsxref("Object.is")}} を含められるように広げることが可能なモデルではありません。{{jsxref("Object.is")}} は二重等号より単純に "緩い" のではなく、また三重等号より "厳格" でもなく、さらに両者の中間のどこにも置けません (すなわち二重等号より厳格でも、三重等号より緩くもありません)。同一性を比較した以下の表から、{{jsxref("Object.is")}} が {{jsxref("NaN")}} を扱う方法が原因であることがわかります。<code>Object.is(NaN, NaN)</code> が <code>false</code> に評価されるのであれば、<code>-0</code> と <code>+0</code> を区別することにより、三重等号より厳格であることから寛容/厳格の連続体に<em>含めることができる</em>ことに注目してください。しかし {{jsxref("NaN")}} の扱いは、これが虚偽であることを表します。残念ながら、{{jsxref("Object.is")}} は等価演算子に関する寛容さや厳格さではなく、単純に固有の特性の観点から考えなければなりません。</p>

<table class="standard-table" style="height: 944px; width: 892px;">
 <caption>同一性の比較表</caption>
 <thead>
  <tr>
   <th scope="col" style="text-align: center;">x</th>
   <th scope="col" style="text-align: center;">y</th>
   <th scope="col" style="width: 10em; text-align: center;"><code>==</code></th>
   <th scope="col" style="width: 10em; text-align: center;"><code>===</code></th>
   <th scope="col" style="width: 10em; text-align: center;"><code>Object.is</code></th>
   <th scope="col" style="width: 10em; text-align: center;"><code>SameValueZero</code></th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>undefined</code></td>
   <td><code>undefined</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
  </tr>
  <tr>
   <td><code>null</code></td>
   <td><code>null</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
  </tr>
  <tr>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
  </tr>
  <tr>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
  </tr>
  <tr>
   <td><code>'foo'</code></td>
   <td><code>'foo'</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
  </tr>
  <tr>
   <td><code>0</code></td>
   <td><code>0</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
  </tr>
  <tr>
   <td><code>+0</code></td>
   <td><code>-0</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
  </tr>
  <tr>
   <td><code>+0</code></td>
   <td><code>0</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
  </tr>
  <tr>
   <td><code>-0</code></td>
   <td><code>0</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
  </tr>
  <tr>
   <td><code>0</code></td>
   <td><code>false</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>""</code></td>
   <td><code>false</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>""</code></td>
   <td><code>0</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>'0'</code></td>
   <td><code>0</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>'17'</code></td>
   <td><code>17</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>[1, 2]</code></td>
   <td><code>'1,2'</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>new String('foo')</code></td>
   <td><code>'foo'</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>null</code></td>
   <td><code>undefined</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>null</code></td>
   <td><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>undefined</code></td>
   <td><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>{ foo: 'bar' }</code></td>
   <td><code>{ foo: 'bar' }</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>new String('foo')</code></td>
   <td><code>new String('foo')</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>0</code></td>
   <td><code>null</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>0</code></td>
   <td><code>NaN</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>'foo'</code></td>
   <td><code>NaN</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>NaN</code></td>
   <td><code>NaN</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
  </tr>
 </tbody>
</table>

<h2 id="When_to_use_Object.is_versus_triple_equals" name="When_to_use_Object.is_versus_triple_equals">{{jsxref("Object.is")}} と三重等号の使いどころ</h2>

<p>一般的に、{{jsxref("Object.is")}} のゼロに対する特別な動作が関心の対象になりえると思われるのは、ある種のメタプログラミング方式に則る時、特にプロパティ記述子に関して {{jsxref("Object.defineProperty")}} の特徴の一部を再現したい時に限られます。このような要件が必要なければ、{{jsxref("Object.is")}} ではなく、代わりに <a href="/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators" title="Web/JavaScript/Reference/Operators/Comparison_Operators"><code>===</code></a> を使用してはいかがでしょう。2 つの {{jsxref("NaN")}} 値を比較した結果が <code>true</code> になることが必要な場合であっても、通常は、{{jsxref("NaN")}} をチェックして特別扱いする方が (前バージョンの ECMAScript からは {{jsxref("isNaN")}} メソッドを使えます) 、比較処理中に現れた全てのゼロについてその符号が周囲の処理からどう影響されるのか悩むよりも簡単です。</p>

<p>すべてを網羅してはいませんが、<code>-0</code> と <code>+0</code> の区別が発生する可能性がある内蔵メソッドや演算子を以下に示します。コード中ではこれらを考慮して下さい:</p>

<dl>
 <dt><a href="/ja/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#-_.28Unary_Negation.29"><code>- (単項否定演算子)</code></a></dt>
 <dd>
 <pre class="brush:js notranslate">let stoppingForce = obj.mass * -obj.velocity;</pre>

 <p><code>obj.velocity</code> が <code>0</code> である (あるいは計算結果が <code>0</code> になる) とき、そこで <code>-0</code> が生成されて <code>stoppingForce</code> に伝播します。</p>
 </dd>
</dl>

<dl>
 <dt>{{jsxref("Math.atan2")}}</dt>
 <dt>{{jsxref("Math.ceil")}}</dt>
 <dt>{{jsxref("Math.pow")}}</dt>
 <dt>{{jsxref("Math.round")}}</dt>
 <dd>引数に <code>-0</code> が存在しなくても、場合によってはこれらのメソッドの戻り値として <code>-0</code> が式に取り込まれる可能性があります。例えば、負の値の累乗で {{jsxref("Infinity", "-Infinity")}} が発生するように {{jsxref("Math.pow")}} を使用したとき、奇数の指数は <code>-0</code> に評価されます。それぞれのメソッドのドキュメントを確認してください。</dd>
</dl>

<dl>
 <dt>{{jsxref("Math.floor")}}</dt>
 <dt>{{jsxref("Math.max")}}</dt>
 <dt>{{jsxref("Math.min")}}</dt>
 <dt>{{jsxref("Math.sin")}}</dt>
 <dt>{{jsxref("Math.sqrt")}}</dt>
 <dt>{{jsxref("Math.tan")}}</dt>
 <dd>引数のひとつが <code>-0</code> である場合に、これらのメソッドから <code>-0</code> を戻り値として得る可能性があります。例えば、<code>Math.min(-0, +0)</code> は <code>-0</code> になります。それぞれのメソッドのドキュメントを確認してください。</dd>
</dl>

<dl>
 <dt><code><a href="/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators">~</a></code></dt>
 <dt><code><a href="/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators">&lt;&lt;</a></code></dt>
 <dt><code><a href="/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators">&gt;&gt;</a></code></dt>
 <dd>これらの演算子は、内部で ToInt32 アルゴリズムを使用します。内部の 32 ビット整数型は 0 の表現が 1 種類しかないため、逆の演算を行った後に <code>-0</code> は戻らないでしょう。例えば <code>Object.is(~~(-0), -0)</code> や <code>Object.is(-0 &lt;&lt; 2 &gt;&gt; 2, -0)</code> は、<code>false</code> になります。</dd>
</dl>

<p>ゼロの符号を考慮していない場合に、{{jsxref("Object.is")}} に頼ることは危険でしょう。もちろん <code>-0</code> と <code>+0</code> を区別する意図があれば、これはまさに望むことです。</p>

<h2 id="Caveat_Object.is_and_NaN" name="Caveat_Object.is_and_NaN">注意: {{jsxref("Object.is")}} と NaN</h2>

<p>{{jsxref("Object.is")}} の仕様書では、すべての {{jsxref("NaN")}} のインスタンスを同じオブジェクトとして扱っています。しかし、型付き配列が利用でき、インスタンスを区別することができるので、次の例のようにすべてのコンテキストで同じ動作をするとは限りません。</p>

<pre class="brush: js notranslate">var f2b = x =&gt; new Uint8Array(new Float64Array([x]).buffer);
var b2f = x =&gt; new Float64Array(x.buffer)[0];
var n = f2b(NaN);
n[0] = 1;
var nan2 = b2f(n);
nan2;
// &gt; NaN
Object.is(nan2, NaN);
// &gt; true
f2b(NaN);
// &gt; Uint8Array(8) [0, 0, 0, 0, 0, 0, 248,127)
f2b(nan2);
// &gt; Uint8Array(8) [1, 0, 0, 0, 0, 0, 248,127)</pre>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="http://dorey.github.io/JavaScript-Equality-Table/">JS Comparison Table</a></li>
</ul>
