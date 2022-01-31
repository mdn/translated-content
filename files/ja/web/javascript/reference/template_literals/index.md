---
title: テンプレートリテラル (テンプレート文字列)
slug: Web/JavaScript/Reference/Template_literals
tags:
  - ECMAScript 2015
  - Guide
  - JavaScript
  - React
  - String
  - Template Strings
  - Template literals
  - Template string
  - strings
  - ガイド
  - テンプレートリテラル
  - テンプレート文字列
  - 文字列
translation_of: Web/JavaScript/Reference/Template_literals
---
<div>{{JsSidebar("More")}}</div>

<p><span class="seoSummary">テンプレートリテラルは、組み込み式を扱うことができる文字列リテラルです。複数行の文字列や文字列挿入機能を使用することができます。</span></p>

<p>ES2015 仕様書よりも前の版では、"template strings" と呼ばれていました。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">`string text`

`string text line 1
 string text line 2`

`string text ${<var>expression</var>} string text`

<var>tag</var>`string text ${<var>expression</var>} string text`
</pre>

<h2 id="Description" name="Description">解説</h2>

<p>テンプレートリテラルは、ダブルクオートやシングルクオートの代わりにバックティック文字 (` `) (<a href="https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%AC%E3%82%A4%E3%83%B4%E3%83%BB%E3%82%A2%E3%82%AF%E3%82%BB%E3%83%B3%E3%83%88">グレイヴ・アクセント</a>) で囲みます。</p>

<p>テンプレートリテラルにはプレースホルダーを含めることができます。プレースホルダーはドル記号と波括弧 (<code>${<var>expression</var>}</code>) で示されます。プレースホルダー内の式とバックティック文字 (` `) の間にあるテキストが関数に渡されます。</p>

<p>既定の関数はこれらの部品を 1 つの文字列として繋げるだけです。テンプレートリテラルの前に式 (ここでは <code><var>tag</var></code>) がある場合、テンプレートリテラルは <dfn><em>タグ付きテンプレート</em></dfn> と呼ばれます。この場合、タグ式 (通常は関数) は、テンプレートリテラルと一緒に呼び出され、出力の前に実行できます。</p>

<p>テンプレートリテラル内でバックティック文字をエスケープするには、バックティック文字の前にバックスラッシュ (<code>\</code>) を置きます。</p>

<pre class="brush: js notranslate">`\`` === '`' // --&gt; true</pre>

<h3 id="Multi-line_strings" name="Multi-line_strings">複数行の文字列</h3>

<p>ソースの中に挿入された改行文字は、すべてテンプレートリテラルの一部になります。</p>

<p>通常の文字列を使う場合は、複数行の文字列を取得するために次のような構文を使用する必要があります。</p>

<pre class="brush: js notranslate">console.log('string text line 1\n' +
'string text line 2');
// "string text line 1
// string text line 2"</pre>

<p>テンプレートリテラルを使用すれば、同じものを次のように書くことができます。</p>

<pre class="brush: js notranslate">console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"</pre>

<h3 id="Expression_interpolation" name="Expression_interpolation">式の挿入</h3>

<p>通常の文字列に式を埋め込むには、以下のような構文を使用していると思います。</p>

<pre class="brush: js notranslate">let a = 5;
let b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
// "Fifteen is 15 and
// not 20."</pre>

<p>テンプレートリテラルを使用すると、糖衣構文を使用して、このようにもっと読みやすく表記することができます。</p>

<pre class="brush: js notranslate">let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."</pre>

<h3 id="Nesting_templates" name="Nesting_templates">入れ子のテンプレート</h3>

<p>場合によっては、テンプレートを入れ子にすると、構成可能な文字列を得るのにもっとも簡単に (かつ、おそらくより読みやすく) なることがあります。バックティックをつけたテンプレートでは、テンプレート内にあるプレイスホルダー <code>${ }</code> の内部で内部のバックティックを使用することができます。</p>

<p>例えば、条件式が <code>true</code> の場合、このテンプレートリテラルを <code>return</code> します。</p>

<p>ES5 の場合:</p>

<pre class="brush: js notranslate">let classes = 'header';
classes += (isLargeScreen() ?
  '' : item.isCollapsed ?
    ' icon-expander' : ' icon-collapser');
</pre>

<p>ES2015 で入れ子なしのテンプレートリテラルの場合:</p>

<pre class="brush: js notranslate">const classes = `header ${ isLargeScreen() ? '' :
  (item.isCollapsed ? 'icon-expander' : 'icon-collapser') }`;</pre>

<p>ES2015 で入れ子にしたテンプレートリテラルの場合:</p>

<pre class="brush: js notranslate">const classes = `header ${ isLargeScreen() ? '' :
  `icon-${item.isCollapsed ? 'expander' : 'collapser'}` }`;</pre>

<h3 id="Tagged_templates" name="Tagged_templates">タグ付きテンプレート</h3>

<p><em>タグ付き</em>テンプレートは、テンプレートリテラルのより高度な形式です。</p>

<p>タグを使用すると、テンプレートリテラルを関数で解析できます。タグ関数の最初の引数には、文字列リテラルの配列を含みます。残りの引数は式に関連付けられます。</p>

<p>タグ関数は、これらの引数に対して何でも望み通りの操作を実行することができ、加工された文字列を返します。 (または、以下の例の一つで示しているように、まったく異なるものを返すこともできます。)</p>

<p>タグに使用される関数の名前は、自由に指定できます。</p>

<pre class="brush: js notranslate">let person = 'Mike';
let age = 28;

function myTag(strings, personExp, ageExp) {
  let str0 = strings[0]; // "That "
  let str1 = strings[1]; // " is a "

  // There is technically a string after
  // the final expression (in our example),
  // but it is empty (""), so disregard.
  // let str2 = strings[2];

  let ageStr;
  if (ageExp &gt; 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // テンプレートリテラルを用いて組み立てた文字列を返すこともできます
  return `${str0}${personExp}${str1}${ageStr}`;
}

let output = myTag`That ${ person } is a ${ age }`;

console.log(output);
// That Mike is a youngster</pre>

<p>タグ関数は文字列を返さなくても構いません。</p>

<pre class="brush: js notranslate">function template(strings, ...keys) {
  return (function(...values) {
    let dict = values[values.length - 1] || {};
    let result = [strings[0]];
    keys.forEach(function(key, i) {
      let value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  });
}

let t1Closure = template`${0}${1}${0}!`;
//let t1Closure = template(["","","","!"],0,1,0);
t1Closure('Y', 'A');                      // "YAY!"

let t2Closure = template`${0} ${'foo'}!`;
//let t2Closure = template(["","","!"],0,"foo");
t2Closure('Hello', {foo: 'World'}); // "Hello World!"

let t3Closure = template`I'm ${'name'}. I'm almost ${'age'} years old.`;
//let t3Closure = template(["I'm ", ". I'm almost ", " years old."], "name", "age");
t3Closure('foo', {name: 'MDN', age: 30}); //"I'm MDN. I'm almost 30 years old."
t3Closure({name: 'MDN', age: 30}); //"I'm MDN. I'm almost 30 years old."
</pre>

<h3 id="Raw_strings" name="Raw_strings">加工前の文字列</h3>

<p>タグ関数に渡される第 1 引数では、特別な <code>raw</code> プロパティが利用できます。このプロパティを通して、<a href="/ja/docs/Web/JavaScript/Guide/Grammar_and_types#Using_special_characters_in_strings">エスケープシーケンス</a>を処理する前の、入力された通りの加工前の文字列を参照することができます。</p>

<pre class="brush: js notranslate">function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// logs "string text line 1 \n string text line 2" ,
// including the two characters '\' and 'n'
</pre>

<p>加えて、 {{jsxref("String.raw()")}} メソッドがあり、既定のテンプレート関数のように文字列を連結した形で加工前の文字列を生成することができます。</p>

<pre class="brush: js notranslate">let str = String.raw`Hi\n${2+3}!`;
// "Hi\n5!"

str.length;
// 6

Array.from(str).join(',');
// "H,i,\,n,5,!"
</pre>

<h3 id="Tagged_templates_and_escape_sequences" name="Tagged_templates_and_escape_sequences">タグ付きテンプレートとエスケープシーケンス</h3>

<h4 id="ES2016_behavior" name="ES2016_behavior">ES2016 での動作</h4>

<p>ECMAScript 2016 時点では、タグ付きテンプレートの以下のエスケープシーケンスには、次のようなルールが適用されます。</p>

<ul>
 <li>Unicode のエスケープシーケンスは "<code>\u</code>" で始まること。例: <code>\u00A9</code></li>
 <li>Unicode のコードポイントのエスケープは "<code>\u{}</code>" で示すこと。例: <code>\u{2F804}</code></li>
 <li>16 進数のエスケープは "<code>\x</code>" で始まること。例: <code>\xA9</code></li>
 <li>8 進数のリテラルのエスケープは "<code>\0o</code>" で始まり、その後数字が続くこと。例: <code>\0o251</code></li>
</ul>

<p>このルールのもとでは、下に示す例のようなタグ付きテンプレートが問題となります。なぜなら、 ECMAScript の文法に従ってこのテキストを解釈しようとすると、パーサーは Unicode の有効のエスケープシーケンスを探そうとするも、不正な構文が検出されてしまうからです。</p>

<pre class="brush: js notranslate">latex`\unicode`
// 古い ECMAScript バージョン (ES2016 以前) では、以下のような例外が投げられる
// SyntaxError: malformed Unicode character escape sequence</pre>

<h4 id="ES2018_revision_of_illegal_escape_sequences" name="ES2018_revision_of_illegal_escape_sequences">ES2018 revision での不正なエスケープシーケンス</h4>

<p>タグ付きテンプレートでは、他のエスケープシーケンスが一般的な言語 (<a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E5%9B%BA%E6%9C%89%E8%A8%80%E8%AA%9E">DSL</a>、<a href="https://ja.wikipedia.org/wiki/LaTeX">LaTeX</a> など) の埋め込みも許容する必要があります。 ECMAScript プロポーザル <a href="https://tc39.github.io/proposal-template-literal-revision/">Template Literal Revision</a> (Stage 4, to be integrated in the ECMAScript 2018 standard) では、タグ付きテンプレートから、ECMAScript のエスケープシーケンスについての構文的な制約が除外されています。</p>

<p>しかし、埋め込んで「加工された」結果の中においても、不正なエスケープシーケンスがあれば、それを提示する必要があります。こうした不正なエスケープシーケンスは、「加工された」の配列の中では、{{jsxref("undefined")}} の要素として表示されます。</p>

<pre class="brush: js notranslate">function latex(str) {
  return { "cooked": str[0], "raw": str.raw[0] }
}

latex`\unicode`

// { cooked: undefined, raw: "\\unicode" }</pre>

<p>このエスケープシーケンスの制約は、<em>タグ付き</em>テンプレートのみが除外となります。<em>タグ付きでない</em>テンプレートリテラルの場合は、除外対象ではありません:</p>

<pre class="brush: js example-bad notranslate">let bad = `bad escape sequence: \unicode`;</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-template-literals', 'Template Literals')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-tagged-templates', 'Tagged templates Literals')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.grammar.template_literals")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("String")}}</li>
 <li>{{jsxref("String.raw()")}}</li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Lexical_grammar">字句文法</a></li>
 <li><a href="https://gist.github.com/WebReflection/8f227532143e63649804">Template-like strings in ES3 compatible syntax</a></li>
 <li><a href="https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/">"ES6 in Depth: Template strings" on hacks.mozilla.org</a></li>
</ul>
