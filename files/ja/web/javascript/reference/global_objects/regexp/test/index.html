---
title: RegExp.prototype.test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/test
---
<div>{{JSRef}}</div>

<p><strong><code>test()</code></strong> メソッドは、正規表現と指定された文字列の一致を調べるための検索を実行します。 <code>true</code> または <code>false</code> を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-test.html", "taller")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>regexObj</var>.test(<var>str</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>str</var></code></dt>
 <dd>正規表現にマッチさせる文字列。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>正規表現と指定した文字列 <code><var>str</var></code> の間に一致するものがあった場合は、<code>true</code>。そうでない場合は、<code>false</code>。</p>

<h2 id="Description" name="Description">解説</h2>

<p>あるパターンがある文字列内で見つかるかどうか調べたいときは、 <code>test()</code> を使用してください。 <code>test()</code> は論理値を返します。これは (一致した場所のインデックス番号、または見つからない場合は <code>-1</code> を返す) {{jsxref("String.prototype.search()")}} メソッドとは異なります。</p>

<p>より多くの情報を得るためには (実行が遅くなりますが)、 {{jsxref("RegExp.prototype.exec()", "exec()")}} メソッドを使用してください ({{jsxref("String.prototype.match()")}} メソッドと同様)。</p>

<p><code>exec()</code> と同様に (またはその組み合わせで)、 <code>test()</code> は同じグローバル正規表現インスタンスで複数回呼び出されると、前回の一致の先に進むことになります。</p>



<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_test" name="Using_test">test() の使用</h3>

<p>"<code>hello</code>" が文字列の先頭近くに含まれているかを真偽値で確認する簡単な例です。</p>

<pre class="brush: js notranslate">const str = 'hello world!';
const result = /^hello/.test(str);

console.log(result); // true
</pre>

<p>次の例では、テストの成否によってメッセージを表示します。</p>

<pre class="brush: js notranslate">function testInput(re, str) {
  let midstring;
  if (re.test(str)) {
    midstring = 'contains';
  } else {
    midstring = 'does not contain';
  }
  console.log(`${str} ${midstring} ${re.source}`);
}
</pre>

<h3 id="Using_test_on_a_regex_with_the_global_flag" name="Using_test_on_a_regex_with_the_global_flag">グローバルフラグを持つ正規表現の test() の使用</h3>

<p>正規表現に<a href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions#Advanced_searching_with_flags_2">グローバルフラグ</a>が設定されている場合、 <code>test()</code> は正規表現が所有する {{jsxref("RegExp.lastIndex", "lastIndex")}} の値を加算します。 ({{jsxref("RegExp.prototype.exec()", "exec()")}} も同様に <code>lastIndex</code> プロパティの値を加算します。)</p>

<p>その後にさらに <code>test(<var>str</var>)</code> を呼び出すと、 <code><var>str</var></code> を <code>lastIndex</code> から検索します。 <code>lastIndex</code> プロパティは <code>test()</code> が <code>true</code> を返すたびに増え続けます。</p>

<div class="blockIndicator note">
<p><strong>補足:</strong> <code>test()</code> が <code>true</code> を返す限り、 <code>lastIndex</code> は別な文字列をテストした場合であっても、リセット<em>されません</em>。</p>
</div>

<p><code>test()</code> が <code>false</code> を返した場合、正規表現の <code>lastIndex</code> プロパティを呼び出すと <code>0</code> にリセットされます。</p>

<p>次の例はその挙動を示しています。</p>

<pre class="brush: js notranslate">const regex = /foo/g; // "global" フラグを設定

// regex.lastIndex は 0 です。
regex.test('foo')     // true

// regex.lastIndex は 3 です。
regex.test('foo')     // false

// regex.lastIndex は 0 です。
regex.test('barfoo')  // true

// regex.lastIndex は 6 です。
regex.test('foobar')  //false

// regex.lastIndex は 0 です。
// (...以下略)
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
   <td>{{SpecName('ESDraft', '#sec-regexp.prototype.test', 'RegExp.test')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.RegExp.test")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Guide">JavaScript ガイド</a>の<a href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions">正規表現</a></li>
 <li>{{jsxref("RegExp")}}</li>
 <li>{{jsxref("RegExp.prototype")}}</li>
</ul>
