---
title: RegExp.prototype.exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
tags:
- JavaScript
- Method
- Prototype
- Reference
- RegExp
- Regular Expressions
browser-compat: javascript.builtins.RegExp.exec
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/exec
---
<div>{{JSRef}}</div>

<p><span class="seoSummary"><strong><code>exec()</code></strong> メソッドは、指定された文字列内で一致するものの検索を実行します。結果の配列、または {{jsxref("null")}} を返します。</span></p>

<p>JavaScript の {{jsxref("RegExp")}} オブジェクトは、 {{jsxref("RegExp.global", "global")}} または {{jsxref("RegExp.sticky", "sticky")}} フラグが設定されている場合 (例えば <code>/foo/g</code> や <code>/foo/y</code>) は<strong>ステートフル</strong>になります。これは前回の一致位置を {{jsxref("RegExp.lastIndex", "lastIndex")}} に格納します。これを内部的に使用することで、 <code>exec()</code> はテキストの文字列内で (キャプチャグループのある) 複数の一致を反復処理することができます。これは単なる文字列の一致を取得する {{jsxref("String.prototype.match()")}} とは対照的です。</p>

<p>より新しい関数として、 (キャプチャグループによる) 複数の部分の文字列の一致を単純化する {{jsxref("String.prototype.matchAll()")}} が提案されています。</p>

<p><code>true</code> か <code>false</code> かを知るために検索を実行するのであれば、 {{jsxref("RegExp.prototype.test()")}} メソッドを使用してください。</p>

<p>文字列中での位置を知るために検索を実行するのであれば、 {{jsxref("String.prototype.search()")}} メソッドを使用してください。</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-exec.html")}}</div>

<h2 id="Syntax">構文</h2>

<pre class="brush: js">exec(str)</pre>

<h3 id="Parameters">引数</h3>

<dl>
 <dt><code><var>str</var></code></dt>
 <dd>正規表現の検索の対象となる文字列。</dd>
</dl>

<h3 id="Return_value">返値</h3>

<p>検索に成功した場合、 <code>exec()</code> メソッドは配列を返し (追加のプロパティ <code>index</code> と <code>input</code> が付いており、 <code>d</code> フラグが設定されている場合は <code>indices</code> も、以下参照)、正規表現オブジェクトの {{jsxref("RegExp.lastIndex", "lastIndex")}} プロパティを更新します。返された配列は、一致したテキストを最初の項目として持ち、その後、一致したテキストの括弧によるキャプチャグループに対して 1 つずつの項目を持ちます。</p>

<p>一致に失敗した場合は、 <code>exec()</code> メソッドは {{jsxref("null")}} を返し、 {{jsxref("RegExp.lastIndex", "lastIndex")}} を <code>0</code> に設定します。</p>

<h2 id="Description">解説</h2>

<p>次の例を想定してください。</p>

<pre class="brush: js">// "quick brown" の後に "jumps" が来るものを、その間の文字を無視して一致させます。
// "brown" と "jumps" を取得します。
// 大文字と小文字は区別しません。
let re = /quick\s(brown).+?(jumps)/ig;
let result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');
</pre>

<p>以下の表は、このスクリプト実行後の <code>result</code> の状態を示しています。</p>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">プロパティ/添字</th>
      <th scope="col">説明</th>
      <th scope="col">例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>[0]</code></td>
      <td>文字が一致した部分の文字列全体</td>
      <td><code>"Quick Brown Fox Jumps"</code></td>
    </tr>
    <tr>
      <td><code>[1], ...[<var>n</var>]</code></td>
      <td>
        <p>もしあれば、括弧に囲まれた部分文字列が一致したものです。</p>

        <p>括弧に囲まれた部分文字列の数に制限はありません。</p>
      </td>
      <td>
        <p><code>result[1] === "Brown"</code></p>

        <p><code>result[2] === "Jumps"</code></p>
      </td>
    </tr>
    <tr>
      <td><code>index</code></td>
      <td>0 から始める一致した文字列の位置。</td>
      <td><code>4</code></td>
    </tr>
    <tr>
      <td><code>indices</code></td>
      <td>各項目が部分文字列の一致を表す配列です。各部分文字列の一致自体は、最初の項目が開始位置、 2 番目の項目が終了位置を表す配列です。 indices 配列にはさらに、名前の付いたすべてのキャプチャリンググループのオブジェクトを保持する groups プロパティがあります。キーはキャプチャリンググループの名前で、各値は、最初の項目が開始項目、 2 番目の項目がキャプチャリンググループの終了位置となる配列です。正規表現にキャプチャリンググループが含まれていなかった場合は、 <code>groups</code> は <code>undefined</code> です。
      </td>
      <td>
        <p><code>indices[0] === Array [ 4, 25 ]</code></p>
        <p><code>indices[1] === Array [ 10, 15 ]</code></p>
        <p><code>indices[2] === Array [ 20, 25 ]</code></p>
        <p><code>indices.groups === undefined</code></p>
        <p><code>indices.length === 3</code></p>
      </td>
    </tr>
    <tr>
   <td><code>input</code></td>
   <td>検索対象となった元の文字列。</td>
   <td><code>The Quick Brown Fox Jumps Over The Lazy Dog</code></td>
  </tr>
  </tbody>
</table>

<p>以下の表は、このスクリプト実行後の <code>re</code> の状態を示しています。</p>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">プロパティ/添字</th>
      <th scope="col">説明</th>
      <th scope="col">例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>lastIndex</code></td>
      <td>
        <p>次回の検索を始める位置です。</p>

        <p><code>g</code> がない場合は <code>0</code> のままです。</p>
      </td>
      <td><code>25</code></td>
    </tr>
    <tr>
      <td><code>dotAll</code></td>
      <td>
        <code>s</code> フラグが使用され、 <code>.</code> が改行文字に一致するようにしたかどうかを示します。
      </td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>hasIndices</code></td>
      <td>
        <code>d</code> フラグが使用され、返値に一致する部分文字列の開始位置と終了位置を持つ <code>indices</code> プロパティを生成したかどうかを示します。</td>
      <td><code>true</code></td>
    </tr>
    <tr>
   <td><code>ignoreCase</code></td>
   <td><code>i</code> フラグが使用され、大文字小文字を区別しなかったかどうか。</td>
   <td><code>true</code></td>
  </tr>
  <tr>
   <td><code>global</code></td>
   <td><code>g</code> フラグが使用され、グローバル検索が行われたかどうか。</td>
   <td><code>true</code></td>
  </tr>
  <tr>
   <td><code>multiline</code></td>
   <td> <code>m</code> フラグが使用され、複数行に渡って文字列が検索されたかどうか。</td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>source</code></td>
   <td>パターンの文字列。</td>
   <td><code>quick\s(brown).+?(jumps)</code></td>
  </tr>
    <tr>
      <td><code>sticky</code></td>
      <td>
        <code>y</code> フラグが使用され、比較が <code>lastIndex</code> プロパティで示された位置からのみ行われたかどうか。
      </td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>unicode</code></td>
      <td><code>u</code> フラグが使用され、パターンが Unicode コードポイントの並びとして扱われたかどうか。
      </td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>

<h2 id="Examples">例</h2>

<h3 id="Finding_successive_matches">成功する一致の検索</h3>

<p>正規表現で "<code>g</code>" フラグを使用する場合、同じ文字列で成功する一致を見つけるために <code>exec()</code> メソッドを複数回使うことができます。その際、検索は正規表現オブジェクトの {{jsxref("RegExp.lastIndex", "lastIndex")}} プロパティで指定された位置の <code><var>str</var></code> の部分文字列から始まります ({{jsxref("RegExp.prototype.test()", "test()")}} も {{jsxref("RegExp.lastIndex", "lastIndex")}} プロパティの位置から始めます)。なお、別な文字列を検索する場合でも {{jsxref("RegExp.lastIndex", "lastIndex")}} プロパティはリセットされず、既存の {{jsxref("RegExp.lastIndex", "lastIndex")}} から検索を始めます。</p>

<p>例えば、次のスクリプトを考えてみてください。</p>

<pre class="brush: js">let myRe = /ab*/g;
let str = 'abbcdefabh';
let myArray;
while ((myArray = myRe.exec(str)) !== null) {
  let msg = myArray[0] + ' を見つけました。';
  msg += '次の検索は ' + myRe.lastIndex + ' からです。';
  console.log(msg);
}
</pre>

<p>このスクリプトは以下のテキストを表示します。</p>

<pre class="brush: plain">abb を見つけました。次の検索は 3 からです。
ab を見つけました。次の検索は 9 からです。
</pre>

<div class="warning">
<p><strong>警告:</strong> <strong>正規表現リテラル (または {{jsxref("RegExp")}} コンストラクター) を <code>while</code> の条件の中に配置しないでください。</strong></p>

<p>{{jsxref("RegExp.lastIndex", "lastIndex")}} プロパティが繰り返し毎にリセットされるので、無限ループになります。</p>

<p>また、グローバルフラグ ("<code>g</code>") が設定されていることを確認してください。これも無限ループを引き起こします。</p>
</div>

<h3 id="Using_exec_with_RegExp_literals">RegExp リテラルでの exec() の使用</h3>

<p>{{jsxref("RegExp")}} オブジェクトを作成せずに <code>exec()</code> を使用することもできます。</p>

<pre class="brush: js">let matches = /(hello \S+)/.exec('This is a hello world!');
console.log(matches[1]);
</pre>

<p>これで 'hello world!' を含んだメッセージをログ出力します。</p>

<h2 id="Specifications">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
  <li><a href="/ja/docs/Web/JavaScript/Guide">JavaScript ガイド</a>の<a href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions">正規表現</a>の章</li>
  <li>{{jsxref("RegExp")}}</li>
</ul>
