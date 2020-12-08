---
title: delete
slug: Web/JavaScript/Reference/Operators/delete
tags:
  - JavaScript
  - Memory Management
  - Object
  - Operator
  - Property
  - Reference
  - Release
  - Unary
  - delete
translation_of: Web/JavaScript/Reference/Operators/delete
---
<div>{{jsSidebar("Operators")}}</div>

<p><span class="seoSummary">JavaScript の <strong><code>delete</code> 演算子</strong>は、オブジェクトからプロパティを削除します。同じプロパティへの参照がそれ以上保持されない場合は、自動的に解放されます。</span></p>

<div>{{EmbedInteractiveExample("pages/js/expressions-deleteoperator.html")}}</div>



<h2 id="構文">構文</h2>

<pre class="syntaxbox notranslate">delete <em>expression</em> </pre>

<p><em>expression</em> には、プロパティへの参照になる式を置きます。例えば:</p>

<pre class="syntaxbox notranslate">delete <em>object.property</em>
delete <em>object</em>['<em>property</em>']</pre>

<h3 id="引数">引数</h3>

<dl>
 <dt><code>object</code></dt>
 <dd>オブジェクト名、またはオブジェクトとして評価される式</dd>
 <dt><code>property</code></dt>
 <dd>削除するプロパティです。</dd>
</dl>

<h3 id="戻り値">戻り値</h3>

<p>非 strict モードでは、プロパティが編集不可の場合、false が返ります。その他の場合すべてで <code>true</code> が返ります。</p>

<h3 id="例外">例外</h3>

<p><a href="/ja/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode">strict モード</a> では、プロパティが編集不可の場合、{{jsxref("Global_objects/SyntaxError")}} をスローします。</p>

<h2 id="説明">説明</h2>

<p>一般的に信じられていることとは異なり、<code>delete</code> 演算子は、直接的にメモリを開放することは<strong>ありません</strong>。メモリの管理は参照が切れることで間接的に行われます。詳細は <a href="/ja/docs/Web/JavaScript/Memory_Management">memory management</a> をご覧ください。</p>

<p><code><strong>delete</strong></code> 演算子は指定したプロパティをオブジェクトから取り除きます。削除に成功すると <code>true</code> を返し、そうでなければ <code>false</code> を返します。しかし、次のシナリオを考慮することが重要です:</p>

<ul>
 <li>削除しようとしたプロパティが存在しない場合、<code>delete</code> は何の効果もなく、<code>true</code> を返します。</li>
 <li>同様の名前のプロパティがオブジェクトのプロトタイプチェーンに存在する場合、削除後はプロトタイプチェーンのプロパティをオブジェクトが使うようになります (つまり、<code>delete</code> 自身のプロパティにのみ効果があります)。</li>
 <li>グローバルスコープや関数スコープから {{jsxref("Statements/var","var")}} で宣言されたプロパティは削除できません。
  <ul>
   <li>そのため、<code>delete</code> はグローバルスコープ内の関数を削除できません (関数定義の一部であるか関数式の一部であるかにかかわらず)。</li>
   <li>(グローバルスコープを除く) オブジェクトの一部である関数は <code>delete</code> で削除できます。</li>
  </ul>
 </li>
 <li>{{jsxref("Statements/let","let")}} や {{jsxref("Statements/const","const")}} で宣言された任意のプロパティはそれらが宣言されたスコープから削除できません。</li>
 <li>編集不可能なプロパティは削除できません。これには {{jsxref("Math")}} や {{jsxref("Array")}}、{{jsxref("Object")}} のようなビルトインオブジェクトのプロパティや {{jsxref("Object.defineProperty()")}} のようなメソッドで編集不可として生成されたプロパティが含まれます。</li>
</ul>

<p>次のスニペットがシンプルな例です:</p>

<pre class="brush: js notranslate">var Employee = {
  age: 28,
  name: 'abc',
  designation: 'developer'
}

console.log(delete Employee.name);   // returns true
console.log(delete Employee.age);    // returns true

// When trying to delete a property that does
// not exist, true is returned
console.log(delete Employee.salary); // returns true
</pre>

<h3 id="編集不可のプロパティ"><strong>編集不可のプロパティ</strong></h3>

<p>プロパティが編集不可に設定されているとき、<code>delete</code> は何の効果もなく、<code>false</code> を返します。strict モードでは、これは <code>SyntaxError</code> を生成します。</p>

<pre class="brush: js notranslate">var Employee = {};
Object.defineProperty(Employee, 'name', {configurable: false});

console.log(delete Employee.name);  // returns false
</pre>

<p>{{jsxref("Statements/var","var")}} や {{jsxref("Statements/let","let")}}、{{jsxref("Statements/const","const")}} は、<code>delete</code> 演算子で削除できない編集不可のプロパティを生成します:</p>

<pre class="brush: js notranslate">var nameOther = 'XYZ';

// We can access this global property using:
Object.getOwnPropertyDescriptor(window, 'nameOther');

// output: Object {value: "XYZ",
//                  writable: true,
//                  enumerable: true,
//                  <strong>configurable: false</strong>}

// Since "nameOther" is added using with the
// var keyword, it is marked as "non-configurable"

delete nameOther;   // return false</pre>

<p>strict モードでは、例外が発生します。</p>

<h3 id="Strict_vs._非_strict_モード"><strong>Strict vs. 非 strict モード</strong></h3>

<p>strict モードのとき、変数や関数の引数、関数名への参照に直接 <code>delete</code> が使われた場合、{{jsxref("SyntaxError")}} をスローします。</p>

<p><code>var</code> で宣言された変数は編集不可に設定されます。次の例では、<code>salary</code> は編集不可で削除できません。非 strict モードでは、<code>delete</code> 演算子は <code>false</code> を返します。</p>

<pre class="brush: js notranslate">function Employee() {
  delete salary;
  var salary;
}

Employee();
</pre>

<p>strict モードで同じコードがどのように振る舞うか見てみましょう。<code>false</code> を返す代わりに、ステートメントは <code>SyntaxError</code> を発生させます。</p>

<pre class="brush: js notranslate">"use strict";

function Employee() {
  delete salary;  // SyntaxError
  var salary;
}

// Similarly, any direct access to a function
// with delete will raise a SyntaxError

function DemoFunction() {
  //some code
}

delete DemoFunction; // SyntaxError
</pre>

<h2 id="例">例</h2>

<pre class="brush: js notranslate">// creates the property adminName on the global scope
adminName = 'xyz';

// creates the property empCount on the global scope
// Since we are using var, this is marked as non-configurable. The same is true of let and const.
var empCount = 43;

EmployeeDetails = {
  name: 'xyz',
  age: 5,
  designation: 'Developer'
};

// adminName is a property of the global scope.
// It can be deleted since it is created without var.
// Therefore, it is configurable.
delete adminName;       // returns true

// On the contrary, empCount is not configurable,
// since var was used.
delete empCount;       // returns false

// delete can be used to remove properties from objects
delete EmployeeDetails.name; // returns true

<strong>// </strong>Even when the property does not exists, it returns "true"
delete EmployeeDetails.salary; // returns true

// delete does not affect built-in static properties
delete Math.PI; // returns false

// EmployeeDetails is a property of the global scope.
// Since it defined without "var", it is marked configurable
delete EmployeeDetails;   // returns true

function f() {
  var z = 44;

  // delete doesn't affect local variable names
  delete z;     // returns false
}
</pre>

<h3 id="delete_とプロトタイプチェーン"><code>delete</code> とプロトタイプチェーン</h3>

<p>次の例では、 <span id="result_box" lang="ja"><span>プロトタイプチェーンで同じ名前のプロパティを使用できる間に、オブジェクトの独自のプロパティを削除します</span></span> :</p>

<pre class="brush: js notranslate">function Foo() {
  this.bar = 10;
}

Foo.prototype.bar = 42;

var foo = new Foo();

// Returns true, since the own property
// has been deleted on the foo object
delete foo.bar;

// foo.bar is still available, since it
// is available in the prototype chain.
console.log(foo.bar);

// We delete the property on the prototype
delete Foo.prototype.bar;

// logs "undefined" since the property
// is no longer inherited
console.log(foo.bar);           </pre>

<h3 id="配列の要素の削除"><strong>配列の要素の削除</strong></h3>

<p>配列の要素を削除したとき、配列の長さは影響を受けません。これは配列の最後の要素を削除しても保持されます。</p>

<p><code>delete</code> 演算子が配列の要素を削除すると、要素はもはや配列からなくなります。 次の例では、<code>trees[3]</code> が <code>delete</code> で削除されます。</p>

<pre class="brush: js notranslate">var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
delete trees[3];
if (3 in trees) {
    // this does not get executed
}</pre>

<p>配列の要素を存在させたいが値が未定義の場合、<code>delete</code> 演算子の代わりに <code>undefined</code> 値を用います。次の例では、<code>trees[3]</code> は undefined が割り当てられていますが、配列の要素はまだ存在しています:</p>

<pre class="brush: js notranslate">var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
trees[3] = undefined;
if (3 in trees) {
    // this gets executed
}</pre>

<p>代わりに、配列の内容を変更して配列要素を削除する場合は、<code>{{jsxref("Array.splice", "splice")}}</code> メソッドを使用します。次の例では、{{jsxref("Array.splice", "splice")}} を使用して配列から <code>trees[3]</code> が削除されます:</p>

<pre class="brush: js notranslate">var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
trees.splice(3,1);
console.log(trees); // ["redwood", "bay", "cedar", "maple"]
</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-delete-operator', 'The delete Operator')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-delete-operator', 'The delete Operator')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-11.4.1', 'The delete Operator')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES1', '#sec-11.4.1', 'The delete Operator')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>初期定義。JavaScript 1.2 で実装。</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザー実装状況">ブラウザー実装状況</h2>



<p>{{Compat("javascript.operators.delete")}}</p>

<h2 id="クロスブラウザーの問題点">クロスブラウザーの問題点</h2>

<p>ECMAScript はオブジェクトのイテレーション順を実装系依存であるとしているにもかかわらず、すべての主要なブラウザーはイテレーション順を、(少なくともプロトタイプ上にないプロパティについて) 最初に追加されたプロパティを最初に持ち出す方式に基づいてサポートしているように見受けられます。ところが Internet Explorer ではプロパティに対して <code>delete</code> を用いたときに、他のブラウザーが単純なオブジェクトを整列された連想配列のように用いることを妨げる、ややこしい動作になる場合があります。Internet Explorer では、プロパティの<em>値</em>が実際 undefined に設定されているとき、後から同じ名前で再びプロパティを追加すると、そのプロパティは<em>元の</em>場所でイテレートされるようになるでしょう。削除済みのプロパティを再度追加した場合に期待するであろう、イテレーション順の最後ではありません。</p>

<p>クロスブラウザー環境で整列された連想配列をしたい場合は、可能であれば {{jsxref("Map")}} を使用してください。または、2 つに分けた配列 (片方はキー、もう片方は値) やプロパティをひとつ持つオブジェクトの配列などで構造をシミュレートしてください。</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="http://perfectionkills.com/understanding-delete/">In depth analysis on delete</a></li>
 <li>{{jsxref("Reflect.deleteProperty()")}}</li>
 <li>{{jsxref("Map.prototype.delete()")}}</li>
</ul>
