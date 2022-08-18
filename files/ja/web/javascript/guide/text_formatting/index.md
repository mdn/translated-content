---
title: テキスト処理
slug: Web/JavaScript/Guide/Text_formatting
tags:
  - Guide
  - JavaScript
  - 'l10n:priority'
translation_of: Web/JavaScript/Guide/Text_formatting
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_Expressions")}}</div>

<p class="summary">本章では JavaScript で文字列やテキストを操作する方法を紹介します。</p>

<h2 id="Strings" name="Strings">文字列</h2>

<p>JavaScript の{{Glossary("String","文字列")}}型はテキストデータを表すために使われます。テキストデータ型は 16 ビット符号なし整数値 (UTF-16) からなる「要素」の集合体です。文字列の各要素は、その文字列内で所定の位置を占めています。最初の要素のインデックスは 0 で、次の要素のインデックスは 1 、といった具合に。文字列の長さはその要素数となります。文字列リテラルか文字列オブジェクトを使用して文字列を生成できます。</p>

<div class="hidden">CAUTION: if you edit this page, do not include any characters above U+FFFF, until MDN bug 857438 is fixed ( <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=857438">https://bugzilla.mozilla.org/show_bug.cgi?id=857438</a> ).</div>

<h3 id="String_literals" name="String_literals">文字列リテラル</h3>

<p>単一引用符または二重引用符のいずれかを使用して、単純な文字列を作成できます :</p>

<pre class="brush: js notranslate">'foo'
"bar"</pre>

<p>また、エスケープシーケンスを使用してより高度な文字列を作成できます :</p>

<h4 id="Hexadecimal_escape_sequences" name="Hexadecimal_escape_sequences">16 進数エスケープシーケンス</h4>

<p><code>\x</code> の後の数値は <a href="https://ja.wikipedia.org/wiki/十六進法">16 進法による</a>数として解釈されます。</p>

<pre class="brush: js notranslate">'\xA9' // "©"
</pre>

<h4 id="Unicode_escape_sequences" name="Unicode_escape_sequences">Unicode エスケープシーケンス</h4>

<p>Unicode エスケープシーケンスは <code>\u</code> の後に少なくとも文字が 4 個必要です。</p>

<pre class="brush: js notranslate">'\u00A9' // "©"</pre>

<h4 id="Unicode_code_point_escapes" name="Unicode_code_point_escapes">Unicode コードポイントエスケープ</h4>

<p>ECMAScript 2015 の新機能です。Unicode コードポイントエスケープを使えば、どんな文字でも 16 進数を使用してエスケープすることができます。これにより、<code>0x10FFFF</code> まで Unicode コードポイントを利用できます。単純な Unicode エスケープを使用して同じ結果を得るには、多くの場合要素を半分に分け、サロゲートペアにする必要があります。</p>

<p>{{jsxref("String.fromCodePoint()")}} や {{jsxref("String.prototype.codePointAt()")}} も参考にしてください。</p>

<pre class="brush: js notranslate">'\u{2F804}'

// 単純な Unicode エスケープでも同じです。
'\uD87E\uDC04'</pre>

<h3 id="String_objects" name="String_objects">String オブジェクト</h3>

<p>{{jsxref("String")}} オブジェクトは文字列プリミティブデータ型のためのラッパです。</p>

<pre class="brush: js notranslate">const foo = new String('foo'); // 文字列オブジェクトを作る
console.log(foo); // Displays: [String: 'foo']
typeof foo; // Returns 'object'
</pre>

<p>文字列リテラル値に対しても <code>String</code> オブジェクトのメソッドを呼び出すことができます ― JavaScript は自動的に文字列リテラルを一時的な <code>String</code> オブジェクトに変換し、メソッドを呼び出し、そして一時的に作られた <code>String</code> オブジェクトを破棄します。文字列リテラルでは <code>String.length</code> プロパティも利用できます。</p>

<p><code>String</code> オブジェクトを使用する明確な必要性がなければ、文字列リテラルを使用してください。というのも、<code>String</code> オブジェクトは直感的でない振る舞いをします。例えば :</p>

<pre class="brush: js notranslate">const firstString = '2 + 2'; // 文字列リテラル値を作成
const secondString = new String('2 + 2'); // 文字列オブジェクトを作成
eval(firstString); // 数値の 4 を返す
eval(secondString); // 文字列 "2 + 2" を返す</pre>

<p><code>String</code> オブジェクトのプロパティの 1 つには、文字列内の UTF-16 コード単位の数を示す <code>length</code> があります。例えば、次のコードでは、<code>helloLength</code> には値 13 が代入されます。"Hello, World!" は 13 文字で、それぞれが 1 つの UTF-16 コード単位で表されるからです。配列の角括弧書式を使用して、各コード単位にアクセスできます。文字列は不変の配列のようなオブジェクトなので、個々の文字を変更することはできません：</p>

<pre class="brush: js notranslate">const hello = 'Hello, World!';
const helloLength = hello.length;
hello[0] = 'L'; // 文字列は不変なので、これは効果がありません
hello[0]; // これは "H" を返します
</pre>

<p>Unicode のスカラー値が U+FFFF より大きい文字 (中国語/日本語/韓国語/ベトナム語の特殊な文字や絵文字など) は、それぞれ 2 つのサロゲートコード単位で UTF-16 に格納されます。たとえば、単一の文字 U+1F600 (笑顔の絵文字) から成る文字列の長さは 2 になります。このような文字列の括弧で囲まれた個々のコード単位にアクセスすると、一致しないサロゲートコード単位の文字列が生成されるなど、Unicode 標準違反という好ましくない結果になります。(その例は、MDN のバグ 857438 が修正された後にこのページに追加する必要があります。) {{jsxref("String.fromCodePoint()")}} または{{jsxref("String.prototype.codePointAt()")}} も参照してください。</p>

<p><code>String</code> オブジェクトはさまざまなメソッドを持っています。例えば、<code>substring</code> や <code>toUpperCase</code> のような文字列自体のバリエーションを返すメソッドがあります。</p>

<p>次の表は {{jsxref("String")}} オブジェクトのメソッドをまとめたものです。</p>

<table class="standard-table">
 <caption>
 <h4 id="Methods_of_String" name="Methods_of_String"><code>String</code> のメソッド</h4>
 </caption>
 <thead>
  <tr>
   <th scope="col">メソッド</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{jsxref("String.charAt", "charAt")}}、{{jsxref("String.charCodeAt", "charCodeAt")}}、{{jsxref("String.codePointAt", "codePointAt")}}</td>
   <td>文字列内の指定された位置の文字または文字コードを返します。</td>
  </tr>
  <tr>
   <td>{{jsxref("String.indexOf", "indexOf")}}, {{jsxref("String.lastIndexOf", "lastIndexOf")}}</td>
   <td>それぞれ、文字列内にある指定された部分文字列の先頭位置、および末尾の位置を返します。</td>
  </tr>
  <tr>
   <td>{{jsxref("String.startsWith", "startsWith")}}, {{jsxref("String.endsWith", "endsWith")}}, {{jsxref("String.includes", "includes")}}</td>
   <td>文字列が指定した文字列で始まるか、終わるか、それを含むかどうかを返します。</td>
  </tr>
  <tr>
   <td>{{jsxref("String.concat", "concat")}}</td>
   <td>2 つの文字列をテキストとしてつなげた新しい文字列を返します。</td>
  </tr>
  <tr>
   <td>{{jsxref("String.fromCharCode", "fromCharCode")}}, {{jsxref("String.fromCodePoint", "fromCodePoint")}}</td>
   <td>指定の Unicode 値シーケンスから文字列を構築します。これは、<code>String</code> インスタンスではなく、<code>String</code> クラスにあるメソッドです。</td>
  </tr>
  <tr>
   <td>{{jsxref("String.split", "split")}}</td>
   <td>文字列を部分文字列へと分けることで、<code>String</code> オブジェクトを文字列の配列に分割します。</td>
  </tr>
  <tr>
   <td>{{jsxref("String.slice", "slice")}}</td>
   <td>文字列の一部分を取り出し、新しい文字列を返します。</td>
  </tr>
  <tr>
   <td>{{jsxref("String.substring", "substring")}}, {{jsxref("String.substr", "substr")}}</td>
   <td>開始インデックスから終了インデックスまで、または開始インデックスと長さ、このいずれかを指定することで文字列における特定の部分集合を返します。</td>
  </tr>
  <tr>
   <td>{{jsxref("String.match", "match")}}, {{jsxref("String.matchAll", "matchAll")}}, {{jsxref("String.replace", "replace")}}, {{jsxref("String.replaceAll", "replaceAll")}}, {{jsxref("String.search", "search")}}</td>
   <td>正規表現と共に機能します。</td>
  </tr>
  <tr>
   <td>{{jsxref("String.toLowerCase", "toLowerCase")}}, {{jsxref("String.toUpperCase", "toUpperCase")}}</td>
   <td>
    <p>それぞれ、すべて小文字またはすべて大文字にした文字列を返します。</p>
   </td>
  </tr>
  <tr>
   <td>{{jsxref("String.normalize", "normalize")}}</td>
   <td>呼び出し元となる文字列値の Unicode 正規化形式を返します。</td>
  </tr>
  <tr>
   <td>{{jsxref("String.repeat", "repeat")}}</td>
   <td>所定回数繰り返したオブジェクト要素からなる文字列を返します。</td>
  </tr>
  <tr>
   <td>{{jsxref("String.trim", "trim")}}</td>
   <td>文字列の先頭と末尾から空白文字を取り除きます。</td>
  </tr>
 </tbody>
</table>

<h3 id="Multi-line_template_strings" name="Multi-line_template_strings">マルチラインテンプレート文字列</h3>

<p><a href="/ja/docs/Web/JavaScript/Reference/template_strings">テンプレート文字列</a>は式を埋め込むことができる文字列リテラルです。複数行の文字列や文字列の補間機能で使用することができます。</p>

<p>テンプレート文字列は二重引用符または一重引用符のかわりにバックティック (` `) （<a class="external external-icon" href="https://en.wikipedia.org/wiki/Grave_accent">抑音アクセント</a>）文字で囲まれています。テンプレート文字列にはプレースホルダーを含めることができます。プレースホルダーはドル記号と波括弧 (<code>${expression}</code>) によって示されます。</p>

<h4 id="Multi-lines" name="Multi-lines">マルチライン</h4>

<p>ソースに挿入されたいかなる改行文字も、テンプレート文字列の一部となります。通常の文字列を使って複数行の文字列を取得するには、次のような構文を使用しなければなりません :</p>

<pre class="brush: js notranslate">console.log('string text line 1\n\
string text line 2');
// "string text line 1
// string text line 2"</pre>

<p>複数行の文字列と同じ結果を得たければ、テンプレート文字列を使って下記のように書くことができます :</p>

<pre class="brush: js notranslate">console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"</pre>

<h4 id="Embedded_expressions" name="Embedded_expressions">組み込み式</h4>

<p>通常の文字列内に式を埋め込むには、次のような構文を用います :</p>

<pre class="brush: js notranslate">const five = 5;
const ten = 10;
console.log('Fifteen is ' + (five + ten) + ' and not ' + (2 * five + ten) + '.');
// "Fifteen is 15 and not 20."</pre>

<p>テンプレート文字列を使えば、糖衣構文を利用してこれをより読みやすくすることができます。:</p>

<pre class="brush: js notranslate">const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);
// "Fifteen is 15 and not 20."</pre>

<p>詳細については、<a href="/ja/docs/Web/JavaScript/Reference">JavaScript リファレンス</a>内の<a href="/ja/docs/Web/JavaScript/Reference/template_strings">テンプレート文字列</a>をご覧ください。</p>

<h2 id="Internationalization" name="Internationalization">国際化</h2>

<p>{{jsxref("Intl")}} オブジェクトは ECMAScript 国際化 API のための名前空間です。ECMAScript 国際化 API は、各言語に応じた文字列比較、数値フォーマット、日時フォーマットを提供します。{{jsxref("Collator")}}、{{jsxref("NumberFormat")}}、{{jsxref("DateTimeFormat")}} オブジェクトのコンストラクタは <code>Intl</code> オブジェクトのプロパティとなっています。</p>

<h3 id="Date_and_time_formatting" name="Date_and_time_formatting">日時フォーマット</h3>

<p>{{jsxref("DateTimeFormat")}} オブジェクトは日時をフォーマットするのに便利です。次の例では、日付をアメリカ英語のフォーマットにします（結果は別のタイムゾーンで異なります）。</p>

<pre class="brush: js notranslate">const msPerDay = 24 * 60 * 60 * 1000;

// July 17, 2014 00:00:00 UTC.
const july172014 = new Date(msPerDay * (44 * 365 + 11 + 197));

const options = { year: '2-digit', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
const americanDateTime = new Intl.DateTimeFormat('en-US', options).format;

console.log(americanDateTime(july172014)); // 07/16/14, 5:00 PM PDT
</pre>

<h3 id="Number_formatting" name="Number_formatting">数値フォーマット</h3>

<p>{{jsxref("NumberFormat")}} オブジェクトは数値、例えば通貨をフォーマットするのに有用です。</p>

<pre class="brush: js notranslate">const gasPrice = new Intl.NumberFormat('en-US',
                        { style: 'currency', currency: 'USD',
                          minimumFractionDigits: 3 });

console.log(gasPrice.format(5.259)); // $5.259

const hanDecimalRMBInChina = new Intl.NumberFormat('zh-CN-u-nu-hanidec',
                        { style: 'currency', currency: 'CNY' });

console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一,三一四.二五
</pre>


<h3 id="Collation" name="Collation">照合</h3>

<p>{{jsxref("Collator")}} オブジェクトは文字列を比較しソートするのに便利です。</p>

<p>例えば、ドイツ語には二つの異なるソート順、<em>phonebook</em>（電話帳順）と <em>dictionary</em>（辞書順）が存在します。電話帳順ソートは音を強調し、ソート前に “ä”、“ö” といった文字があたかも “ae”、“oe” などであるかのように解釈されます。</p>

<pre class="brush: js notranslate">const names = ['Hochberg', 'Hönigswald', 'Holzman'];

const germanPhonebook = new Intl.Collator('de-DE-u-co-phonebk');

// ["Hochberg", "Hoenigswald", "Holzman"] としてソートされる:
console.log(names.sort(germanPhonebook.compare).join(', '));
// "Hochberg, Hönigswald, Holzman" がログ出力される
</pre>

<p>ドイツ語の単語の中にはウムラウト記号によって変化するものがあるため、辞書順では（<em>schön</em> の前は <em>schon</em> といったような、ウムラウトのみ異なるような単語をソートする場合を除けば）ウムラウトを無視してソートするのが賢明です。</p>

<pre class="brush: js notranslate">const germanDictionary = new Intl.Collator('de-DE-u-co-dict');

// ["Hochberg", "Honigswald", "Holzman"] としてソートされる:
console.log(names.sort(germanDictionary.compare).join(', '));
// "Hochberg, Holzman, Hönigswald" とログ出力される
</pre>

<p>{{jsxref("Intl")}} API の詳細については、<a href="https://hacks.mozilla.org/2014/12/introducing-the-javascript-internationalization-api/">Introducing the JavaScript Internationalization API</a> もご覧ください。</p>

<div>{{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_Expressions")}}</div>
