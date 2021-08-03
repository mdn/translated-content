---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
tags:
  - Class
  - ECMAScript 2015
  - JavaScript
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String
---
<div>{{JSRef}}</div>

<p><strong><code>String</code></strong> オブジェクトは文字の並びを表したり操作したりするために使用されます。</p>

<h2 id="Description" name="Description">解説</h2>

<p>文字列は、テキスト形式で表現可能なデータを保持するのに便利です。最もよく使われる操作として、文字列の長さをチェックする {{jsxref("String.length", "length")}} プロパティ、 <a href="/ja/docs/Web/JavaScript/Reference/Operators/String_Operators">文字列に対する + および += 演算子</a>を用いた文字列の連結、文字列の中の部分文字列の存在や位置をチェックする {{jsxref("String.prototype.indexOf()", "indexOf()")}} メソッド、部分文字列を取り出す {{jsxref("String.prototype.substring()", "substring()")}} メソッドが挙げられます。</p>

<h3 id="Creating_strings" name="Creating_strings">文字列の生成</h3>

<p>文字列は文字列リテラルからプリミティブとして、または {{jsxref("String/String", "String()")}} コンストラクターを使用して文字列として生成することができます。</p>

<pre class="syntaxbox notranslate">const string1 = "文字列プリミティブ";
const string2 = 'これも文字列プリミティブ';
const string3 = `別な文字列プリミティブ`;</pre>

<pre class="syntaxbox notranslate">const string4 = new String("文字列オブジェクト");
</pre>

<p>文字列プリミティブと文字列オブジェクトは、ほとんどの場合は交換して使用することができます。下記の「<a href="#String_primitives_and_String_objects">文字列プリミティブと String オブジェクト</a>」を参照してください。</p>

<p>文字列リテラルは単一引用符または二重引用符を使用して指定することができ、どちらでも同様に扱われますが、逆引用符文字 <kbd>`</kbd> を使用することもできます。最後の形は<a href="/ja/docs/Web/JavaScript/Reference/Template_literals">テンプレートリテラル</a>を指定し、この形式では式を補完することができます。</p>

<h3 id="Character_access" name="Character_access">文字へのアクセス</h3>

<p>文字列内の個々の文字へのアクセス方法には、二通りの方法があります。そのひとつは {{jsxref("String.prototype.charAt()", "charAt()")}} メソッドです。</p>

<pre class="brush: js notranslate">return 'ねこ'.charAt(1)  // "こ" が返される
</pre>

<p>そしてもうひとつは、文字列を配列のようなオブジェクトとして扱い、数値の添字を用いる方法です。 (ECMAScript 5 で導入)</p>

<pre class="brush: js notranslate">return 'ねこ'[1]  // "こ" が返される。
</pre>

<p>ブラケット記法を使用した文字アクセスでは、これらのプロパティに値を設定したり削除したりすることはできません。関連したプロパティを書き込んだり設定したりすることもできません。 (より詳細な情報は {{jsxref("Object.defineProperty()")}} を参照してください。)</p>

<h3 id="Comparing_strings" name="Comparing_strings">文字列の比較</h3>

<p>C 言語では 文字列の比較の為に <code>strcmp()</code> 関数を用います。 JavaScript では単純に <a href="/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">小なり / 大なり演算子</a>を用います。</p>

<pre class="brush: js notranslate">let a = 'a'
let b = 'b'
if (a &lt; b) { // true
  console.log(a + ' は ' + b + ' より小さい')
} else if (a &gt; b) {
  console.log(a + ' は ' + b + ' より大きい')
} else {
  console.log(a + ' と ' + b + ' は等しい')
}
</pre>

<p><code>String</code> インスタンスから継承される {{jsxref("String.prototype.localeCompare()", "localeCompare()")}} メソッドを使用して同等の結果を得ることもできます。</p>

<p>なお、 <code>a == b</code> は <code><var>a</var></code> と <code><var>b</var></code> の文字列が等しいかどうかを、通常の大文字小文字を区別して比較します。大文字小文字に関係なく比較したい場合は、次のように関数を使用してください。</p>

<pre class="notranslate">function isEqual(str1, str2)
{
    return str1.toUpperCase() === str2.toUpperCase()
} // isEqual
</pre>

<p>この関数では、特定の UTF-8 文字の変換に問題があるため、小文字の代わりに大文字を使用します。</p>

<h3 id="String_primitives_and_String_objects" name="String_primitives_and_String_objects">文字列プリミティブと String オブジェクト</h3>

<p>JavaScript では、 <code>String</code> オブジェクトと{{Glossary("Primitive", "プリミティブ文字列")}}は区別されることに注意してください。 ({{jsxref("Boolean")}} や {{jsxref("Global_Objects/Number", "Number")}} にも同じことが言えます。)</p>

<p>文字列リテラル (二重引用符または単一引用符で示されます)、および <code>String</code> 関数をコンストラクター以外の場面で (すなわち {{jsxref("Operators/new", "new")}} キーワードを使わずに) 呼び出した場合はプリミティブの文字列になります。 JavaScript では、必要に応じてプリミティブの文字列が自動的に <code>String</code> オブジェクトに変換されるので、プリミティブの文字列に対して <code>String</code> オブジェクトのメソッドを使用することができます。プリミティブの文字列に対して、メソッドの呼び出しやプロパティの参照が行われようとした場合、 JavaScript は自動的にプリミティブの文字列をオブジェクトでラップし、メソッドを呼び出したりプロパティの参照を行ったりします。</p>

<pre class="brush: js notranslate">let s_prim = 'foo'
let s_obj = new String(s_prim)

console.log(typeof s_prim) // Logs "string"
console.log(typeof s_obj)  // Logs "object"
</pre>

<p>プリミティブの文字列と <code>String</code> オブジェクトは {{jsxref("Global_Objects/eval", "eval()")}} を使用すると異なる結果となります。 <code>eval</code> に渡されたプリミティブは、ソースコードとして扱われます。 <code>String</code> オブジェクトは他のオブジェクトと同様に、オブジェクトとしてそのままの文字列を返します。</p>

<pre class="brush: js notranslate">let s1 = '2 + 2'              // 文字列プリミティブを生成
var s2 = new String('2 + 2')  // String オブジェクトを生成
console.log(eval(s1))         // 数値の 4 を返す
console.log(eval(s2))         // 文字列の "2 + 2" を返す
</pre>

<p>こういった理由から、プリミティブの文字列を期待して実装されたコードは <code>String</code> オブジェクトでうまく動作しないことがあります。しかし、一般的にはこれらの違いを考慮しなければならないことはあまりありません。</p>

<p>なお、 <code>String</code> オブジェクトは {{jsxref("String.prototype.valueOf()", "valueOf()")}} メソッドを用いることで、プリミティブの文字列に変換することができます。</p>

<pre class="brush: js notranslate">console.log(eval(s2.valueOf()))  // 数値の 4 を返す
</pre>

<h3 id="Escape_notation" name="Escape_notation">エスケープ表記</h3>

<p>通常の文字列とは異なる特殊な文字を表示するためには、エスケープ表記を使用します。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">コード</th>
   <th scope="col">出力</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>\<var>XXX</var></code><br>
    (<code><var>XXX</var></code> = 1～3桁の8進数、 <code>0</code>～<code>377</code> の範囲)</td>
   <td>ISO-8859-1 の文字または U+0000 から U+00FF の間の Unicode コードポイントです。</td>
  </tr>
  <tr>
   <td><code>\'</code></td>
   <td>単一引用符</td>
  </tr>
  <tr>
   <td><code>\"</code></td>
   <td>二重引用符</td>
  </tr>
  <tr>
   <td><code>\\</code></td>
   <td>バックスラッシュ (\文字)</td>
  </tr>
  <tr>
   <td><code>\n</code></td>
   <td>改行</td>
  </tr>
  <tr>
   <td><code>\r</code></td>
   <td>復帰</td>
  </tr>
  <tr>
   <td><code>\v</code></td>
   <td>垂直タブ</td>
  </tr>
  <tr>
   <td><code>\t</code></td>
   <td>水平タブ</td>
  </tr>
  <tr>
   <td><code>\b</code></td>
   <td>バックスペース</td>
  </tr>
  <tr>
   <td><code>\f</code></td>
   <td>ページ送り</td>
  </tr>
  <tr>
   <td><code>\u<var>XXXX</var></code> (<code><var>XXXX</var></code> = 4桁の16進数、 <code>0x0000</code>～<code>0xFFFF</code> の範囲)</td>
   <td>UTF-16 のコード単位 / <code>U+0000</code> から <code>U+FFFF</code> の間の Unicode コードポイント</td>
  </tr>
  <tr>
   <td><code>\u{<var>X</var>}</code> ... <code>\u{<var>XXXXXX</var>}</code><br>
    (<code><var>X</var>…<var>XXXXXX</var></code> = 1～6桁の16進数、 <code>0x0</code>–<code>0x10FFFF</code> の範囲)</td>
   <td>UTF-32 のコード単位 / <code>U+0000</code> から <code>U+10FFFF</code> の間の Unicode コードポイント</td>
  </tr>
  <tr>
   <td><code>\x<var>XX</var></code><br>
    (<code><var>XX</var></code> = 2桁の16進数、 <code>0x00</code>～<code>0xFF</code> の範囲)</td>
   <td>ISO-8859-1 の文字 / <code>U+0000</code> から <code>U+00FF</code> の間の Unicode コードポイント</td>
  </tr>
 </tbody>
</table>

<h3 id="Long_literal_strings" name="Long_literal_strings">長い文字列リテラル</h3>

<p>時には、コードに非常に長い文字列が含まれる場合があります。行を延々と長くしたり、エディターに任せて折り返したりするよりも、実際の文字列の内容に影響を与えずに文字列をソースコード内で複数行に分割したいことがあります。これを行うには2つの方法があります。</p>

<h4 id="Method_1" name="Method_1">方法 1</h4>

<p><a href="/ja/docs/Web/JavaScript/Reference/Operators/Addition">+</a> 演算子を使用して、次のように複数の文字列を追加することができます。</p>

<pre class="brush: js notranslate">let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise my code is unreadable."
</pre>

<h4 id="Method_2" name="Method_2">方法 2</h4>

<p>各行の末尾にバックスラッシュ文字 (<code>\</code>) を使用して、文字列が次の行に続くことを示すことができます。バックスラッシュの後に、 (改行を除いて) 空白やその他の文字を置いたり、インデントを置いたりしていないか確認してください。さもないと動作しません。</p>

<p>この形式は以下のようになります。</p>

<pre class="brush: js notranslate">let longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable."
</pre>

<p>これらの結果はともに同じ文字列が生成されます。</p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{jsxref("String/String", "String()")}}</dt>
 <dd>新しい <code>String</code> オブジェクトを生成するために使用します。コンストラクターではなく関数として呼び出されたときは型変換を行うので、普通はより有用です。</dd>
</dl>

<h2 id="Static_methods" name="Static_methods">静的メソッド</h2>

<dl>
 <dt>{{jsxref("String.fromCharCode()", "String.fromCharCode(<var>num1</var> [, ...[, <var>numN</var>]])")}}</dt>
 <dd>指定された Unicode 値の列から生成した文字列を返します。</dd>
 <dt>{{jsxref("String.fromCodePoint()", "String.fromCodePoint(<var>num1</var> [, ...[, <var>numN</var>)")}}</dt>
 <dd>指定された Unicode コードポイントの列から生成した文字列を返します。</dd>
 <dt>{{jsxref("String.raw()")}}</dt>
 <dd>生のテンプレート文字列から生成した文字列を返します。</dd>
</dl>

<h2 id="Instance_properties" name="Instance_properties">インスタンスプロパティ</h2>

<dl>
 <dt>{{jsxref("String.prototype.length")}}</dt>
 <dd>文字列の <code>length</code> を反映します。読み取り専用です。</dd>
</dl>

<h2 id="Instance_methods" name="Instance_methods">インスタンスメソッド</h2>

<dl>
 <dt>{{jsxref("String.prototype.charAt()", "String.prototype.charAt(<var>index</var>)")}}</dt>
 <dd><code><var>index</var></code> で指定された位置の文字 (UTF-16 コード 1 つから成ります) を返します。</dd>
 <dt>{{jsxref("String.prototype.charCodeAt()", "String.prototype.charCodeAt(<var>index</var>)")}}</dt>
 <dd><code><var>index</var></code> で与えられた位置の文字の UTF-16 の値を示す数を返します。</dd>
 <dt>{{jsxref("String.prototype.codePointAt()", "String.prototype.codePointAt(<var>pos</var>)")}}</dt>
 <dd><code><var>pos</var></code> で指定された位置から始まる UTF-16 エンコードされた際のコードポイントの、コードポイントの値である正の整数を返します。</dd>
 <dt>{{jsxref("String.prototype.concat()", "String.prototype.concat(<var>str </var>[, ...<var>strN </var>])")}}</dt>
 <dd>2 つ (以上) の文字列を連結し、新しい文字列を返します。</dd>
 <dt>{{jsxref("String.prototype.includes()", "String.prototype.includes(<var>searchString</var> [, <var>position</var>])")}}</dt>
 <dd>文字列中に <code><var>searchString</var></code> が含まれているかを返します。</dd>
 <dt>{{jsxref("String.prototype.endsWith()", "String.prototype.endsWith(<var>searchString</var> [, <var>length</var>])")}}</dt>
 <dd>文字列の末尾に指定された文字列 <code><var>searchString</var></code> が含まれているかを返します。</dd>
 <dt>{{jsxref("String.prototype.indexOf()", "String.prototype.indexOf(<var>searchValue</var> [, <var>fromIndex</var>])")}}</dt>
 <dd>呼び出す {{jsxref("String")}} オブジェクト中で、 <code><var>searchValue</var></code> が最初に現れる位置を返します。見つからなかった場合は <code>-1</code> を返します。</dd>
 <dt>{{jsxref("String.prototype.lastIndexOf()", "String.prototype.lastIndexOf(<var>searchValue</var> [, <var>fromIndex</var>])")}}</dt>
 <dd>呼び出す {{jsxref("String")}} オブジェクト中で、 <code><var>searchValue</var></code> が最後に現れる位置を返します。見つからない場合は <code>-1</code> を返します。</dd>
 <dt>{{jsxref("String.prototype.localeCompare()", "String.prototype.localeCompare(<var>compareString</var> [, <var>locales</var> [, <var>options</var>]])")}}</dt>
 <dd>参照文字列 <code><var>compareString</var></code> が、並べ替え順において、与えられた文字列の前になるか後になるか、あるいは、同じかどうかを示す数値を返します。</dd>
 <dt>{{jsxref("String.prototype.match()", "String.prototype.match(<var>regexp</var>)")}}</dt>
 <dd>文字列に対して正規表現 <code><var>regexp</var></code> を一致させるために使用されます。</dd>
 <dt>{{jsxref("String.prototype.matchAll()", "String.prototype.matchAll(<var>regexp</var>)")}}</dt>
 <dd><code><var>regexp</var></code> が一致するものすべてのイテレーターを返します。</dd>
 <dt>{{jsxref("String.prototype.normalize()", "String.prototype.normalize([<var>form</var>])")}}</dt>
 <dd>呼び出された文字列の値の Unicode 正規化形式を返します。</dd>
 <dt>{{jsxref("String.prototype.padEnd()", "String.prototype.padEnd(<var>targetLength</var> [, <var>padString</var>])")}}</dt>
 <dd>現在の文字列の末尾から指定された文字列で埋めた、長さ <code><var>targetLength</var></code> 文字の新たな文字列を返します。</dd>
 <dt>{{jsxref("String.prototype.padStart()", "String.prototype.padStart(<var>targetLength</var> [, <var>padString</var>])")}}</dt>
 <dd>現在の文字列の先頭から指定した文字列で埋めた、長さ <code><var>targetLength</var></code> 文字の新たな文字列を作成します。</dd>
 <dt>{{jsxref("String.prototype.repeat()", "String.prototype.repeat(<var>count</var>)")}}</dt>
 <dd>オブジェクトの要素を <code><var>count</var></code> 回繰り返した文字列を返します。</dd>
 <dt>{{jsxref("String.prototype.replace()" , "String.prototype.replace(<var>searchFor</var>, <var>replaceWith</var>)")}}</dt>
 <dd><code><var>searchFor</var></code> が現れたところを <code><var>replaceWith</var></code> で置換するために使用します。 <code><var>searchFor</var></code> は文字列または正規表現であり、 <code><var>replaceWith</var></code> は文字列または関数です。</dd>
 <dt>{{jsxref("String.prototype.replaceAll()" , "String.prototype.replaceAll(<var>searchFor</var>, <var>replaceWith</var>)")}}</dt>
 <dd><code><var>searchFor</var></code> が現れたところすべてを <code><var>replaceWith</var></code> で置換するために使用します。 <code><var>searchFor</var></code> は文字列または正規表現であり、 <code><var>replaceWith</var></code> は文字列または関数です。</dd>
 <dt>{{jsxref("String.prototype.search()", "String.prototype.search(<var>regexp</var>)")}}</dt>
 <dd>正規表現 <code><var>regexp</var></code> と呼び出された文字列が一致するところを検索します。</dd>
 <dt>{{jsxref("String.prototype.slice()", "String.prototype.slice(<var>beginIndex</var>[, <var>endIndex</var>])")}}</dt>
 <dd>文字列の一区間を取り出し、新しい文字列を返します。</dd>
 <dt>{{jsxref("String.prototype.split()", "String.prototype.split([<var>sep</var> [, <var>limit</var>] ])")}}</dt>
 <dd>呼び出した文字列を、部分文字列 <code><var>sep</var></code> が現れるところで分割し、文字列の配列を生成して返します。</dd>
 <dt>{{jsxref("String.prototype.startsWith()", "String.prototype.startsWith(<var>searchString</var> [, <var>length</var>])")}}</dt>
 <dd>呼び出した文字列が文字列 <code><var>searchString</var></code> で開始されているかを判断します。</dd>
 <dt>{{jsxref("String.prototype.substr()")}}</dt>
 <dd>文字列において、指定された位置から指定された文字数の文字を返します。</dd>
 <dt>{{jsxref("String.prototype.substring()", "String.prototype.substring(<var>indexStart</var> [, <var>indexEnd</var>])")}}</dt>
 <dd>呼び出した文字列の指定された位置以降 (または区間) にある文字が入った新しい文字列を返します。</dd>
 <dt>{{jsxref("String.prototype.toLocaleLowerCase()", "String.prototype.toLocaleLowerCase( [<var>locale</var>, ...<var>locales</var>])")}}</dt>
 <dd>
 <p>文字列内の文字が、現在のロケールに沿って小文字に変換されます。</p>

 <p>ほとんどの言語では、これは {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} と同じものを返します。</p>
 </dd>
 <dt>{{jsxref("String.prototype.toLocaleUpperCase()", "String.prototype.toLocaleUpperCase( [<var>locale</var>, ...<var>locales</var>])")}}</dt>
 <dd>
 <p>文字列内の文字が、現在のロケールに沿って大文字に変換されます。</p>

 <p>ほとんどの言語では、これは {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} と同じものを返します。</p>
 </dd>
 <dt>{{jsxref("String.prototype.toLowerCase()")}}</dt>
 <dd>小文字に変換された文字列の値を呼び出して返します。</dd>
 <dt>{{jsxref("String.prototype.toString()")}}</dt>
 <dd>指定されたオブジェクトの文字列を返します。{{jsxref("Object.prototype.toString()")}} メソッドを上書きします。</dd>
 <dt>{{jsxref("String.prototype.toUpperCase()")}}</dt>
 <dd>大文字に変換された文字列の値を呼び出して返します。</dd>
 <dt>{{jsxref("String.prototype.trim()")}}</dt>
 <dd>文字列の先頭と末尾にある空白を削除します。 ECMAScript 5 標準の一部です。</dd>
 <dt>{{jsxref("String.prototype.trimStart()")}}</dt>
 <dd>文字列の先頭にある空白を削除します。</dd>
 <dt>{{jsxref("String.prototype.trimEnd()")}}</dt>
 <dd>文字列の末尾にある空白を削除します。</dd>
 <dt>{{jsxref("String.prototype.valueOf()")}}</dt>
 <dd>指定されたオブジェクトのプリミティブ値を返します。 {{jsxref("Object.prototype.valueOf()")}} メソッドを上書きします。</dd>
 <dt>{{jsxref("String.prototype.@@iterator()")}}</dt>
 <dd>文字列値のコードポイントを反復処理し、文字列値として各コードポイントを返す、新しい <code>Iterator</code> オブジェクトを返します。</dd>
</dl>

<h2 id="HTML_wrapper_methods" name="HTML_wrapper_methods">HTML ラッパーメソッド</h2>

<div>
<div class="blockIndicator note">
<p><strong>非推奨です。これらのメソッドは避けてください。</strong></p>

<p>以下のメソッドは、それぞれ、特定の HTML タグでラップされた文字列のコピーを返します。</p>
</div>

<dl>
 <dt>{{jsxref("String.prototype.anchor()")}}</dt>
 <dd>{{htmlattrxref("name", "a", "&lt;a name=\"name\"&gt;")}} (ハイパーテキストのターゲット)</dd>
 <dt>{{jsxref("String.prototype.big()")}}</dt>
 <dd>{{HTMLElement("big")}}</dd>
 <dt>{{jsxref("String.prototype.blink()")}}</dt>
 <dd>{{HTMLElement("blink")}}</dd>
 <dt>{{jsxref("String.prototype.bold()")}}</dt>
 <dd>{{HTMLElement("b")}}</dd>
 <dt>{{jsxref("String.prototype.fixed()")}}</dt>
 <dd>{{HTMLElement("tt")}}</dd>
 <dt>{{jsxref("String.prototype.fontcolor()")}}</dt>
 <dd>{{htmlattrxref("color", "font", "&lt;font color=\"color\"&gt;")}}</dd>
 <dt>{{jsxref("String.prototype.fontsize()")}}</dt>
 <dd>{{htmlattrxref("size", "font", "&lt;font size=\"size\"&gt;")}}</dd>
 <dt>{{jsxref("String.prototype.italics()")}}</dt>
 <dd>{{HTMLElement("i")}}</dd>
 <dt>{{jsxref("String.prototype.link()")}}</dt>
 <dd>{{htmlattrxref("href", "a", "&lt;a href=\"url\"&gt;")}} (URL へのリンク)</dd>
 <dt>{{jsxref("String.prototype.small()")}}</dt>
 <dd>{{HTMLElement("small")}}</dd>
 <dt>{{jsxref("String.prototype.strike()")}}</dt>
 <dd>{{HTMLElement("strike")}}</dd>
 <dt>{{jsxref("String.prototype.sub()")}}</dt>
 <dd>{{HTMLElement("sub")}}</dd>
 <dt>{{jsxref("String.prototype.sup()")}}</dt>
 <dd>{{HTMLElement("sup")}}</dd>
</dl>
</div>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="String_conversion" name="String_conversion">文字列変換</h3>

<p><code>String</code> を使用すると、 {{jsxref("String.prototype.toString()", "toString()")}} よりも信頼性の高い代替手段となり、 {{jsxref("null")}}, {{jsxref("undefined")}}, {{jsxref("Symbol", "symbols")}} に対して使用することもできます。</p>

<pre class="brush: js notranslate">let outputStrings = []
for (let i = 0, n = inputValues.length; i &lt; n; ++i) {
  outputStrings.push(String(inputValues[i]));
}
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
   <td>{{SpecName('ESDraft', '#sec-string-objects', 'String')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.String")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Text_formatting">JavaScript ガイドのテキスト処理</a></li>
 <li>{{jsxref("RegExp")}}</li>
 <li>{{domxref("DOMString")}}</li>
 <li><a href="/ja/Add-ons/Code_snippets/StringView"><code>StringView</code> — 型付き配列に基づいた C 風の文字列の表現</a></li>
 <li><a href="/ja/docs/Web/API/DOMString/Binary">バイナリ文字列</a></li>
</ul>
