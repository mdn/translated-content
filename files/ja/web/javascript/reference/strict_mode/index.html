---
title: Strict モード
slug: Web/JavaScript/Reference/Strict_mode
tags:
  - ECMAScript 5
  - Guide
  - JavaScript
  - Strict Mode
translation_of: Web/JavaScript/Reference/Strict_mode
---
<div>{{JsSidebar("More")}}</div>

<div class="callout-box">デフォルトの厳格でないモードを<strong>「<a href="/ja/docs/Glossary/Sloppy_mode">Sloppy モード</a>」</strong>と呼ぶのを目にすることがあるかもしれません。これは公式な用語ではありません、念のため注意してください。</div>

<p><a class="external" href="http://www.ecma-international.org/publications/standards/Ecma-262.htm">ECMAScript 5</a> で導入された Strict モードは JavaScript に<em>オプトイン</em>することによって幾つかの機能を制限する方法であり、それによって暗黙のうちに "Sloppy モード" からオプトアウトすることができます。Strict モードは単なるサブセットではなく、通常モードとは<em>意図的に</em>異なる意味を持っています。Strict モードをサポートしないブラウザーは、Strict モードをサポートするブラウザーとは異なる動作をする可能性がありますので、Strict モードに関する側面をサポートするかの機能テストを行わずに Strict モードを頼らないでください。Strict モードのコードと非 Strict モードのコードは共存できますので、スクリプトを順次 Strict モードにオプトインすることができます。</p>

<p>Strict モードでは、通常の JavaScript の意味にいくつかの変更を加えます。</p>

<ol>
 <li>エラーではないが落とし穴になる一部の事柄を、エラーが発生するように変更することで除去します。</li>
 <li>JavaScript エンジンによる最適化処理を困難にする誤りを修正します。Strict モードのコードは、非 Strict モードのコードより高速に実行できる可能性があります。</li>
 <li>将来の ECMAScript で定義される予定の構文の使用を禁止します。</li>
</ol>

<p>JavaScript の制限付きバリアントで機能するようにコードを変更する場合は、<a href="/ja/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode">厳格モードへの移行</a>を参照してください。</p>

<h2 id="Invoking_strict_mode" name="Invoking_strict_mode">Strict モードの呼び出し</h2>

<p>Strict モードは<em>スクリプト全体</em>または<em>個別の関数</em>に適用できます。括弧 <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/block">{}</a></code> で括られるブロック構文には適用できません。そのような場所に適用しようとしても何も起きません。<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/eval">eval</a></code> コード、<code><a href="/ja/docs/Web/JavaScript/Reference/Statements/function">Function</a></code> コード、イベントハンドラ属性、<a href="/ja/DOM/window.setTimeout"><code>setTimeout</code></a> コードに渡す文字列、およびこれらに似たものはスクリプト全体であり、Strict モードを呼び出すと期待どおりに動作します。</p>

<h3 id="Strict_mode_for_scripts" name="Strict_mode_for_scripts">スクリプトでの Strict モード</h3>

<p>スクリプト全体で Strict モードを呼び出すには、他のいかなる文よりも前に <code>"use strict";</code> (または <code>'use strict';</code>) という文を<em>そのまま</em>追加します。</p>

<pre class="brush: js notranslate">// スクリプト全体の Strict モード構文
'use strict';
var v = "こんにちは！ Strict モードのスクリプト！";
</pre>

<p>この構文には、<a class="link-https" href="https://bugzilla.mozilla.org/show_bug.cgi?id=579119">著名なサイト</a>を<a class="link-https" href="https://bugzilla.mozilla.org/show_bug.cgi?id=627531">悩ませた</a>落とし穴があります。それは、競合しないスクリプトをむやみに連結できないことです。Strict モードのスクリプトと非 Strict モードのスクリプトを連結することを考えてみてください。連結後のスクリプト全体が strict になるのです! これは逆も言えます。非 Strict のスクリプトと Strict のスクリプトを連結すると非 Strict になります。もちろん、スクリプトの連結は決して理想的なものではありませんが、どうしても必要な場合は、機能ごとに Strict を有効にすることを検討してください。</p>

<p>スクリプトの内容全体を関数でラップし、その外側の関数で Strict モードを使用するという方法もあります。これにより連結の問題が解消され、共有変数を関数スコープから明示的にエクスポートする必要があります。</p>

<h3 id="Strict_mode_for_functions" name="Strict_mode_for_functions">関数での Strict モード</h3>

<p>同様に、関数で Strict モードを呼び出すには、関数本体で他のいかなる文よりも前に <code>"use strict";</code> (または <code>'use strict';</code>) という文を<em>そのまま</em>追加します。</p>

<pre class="brush: js notranslate">function strict() {
  // 関数レベルの Strict モード構文
  'use strict';
  function nested() { return '私もそうです！'; }
  return "こんにちは！ Strict モードの関数です！  " + nested();
}
function notStrict() { return "Strict モードではありません"; }
</pre>

<h3 id="Strict_mode_for_modules" name="Strict_mode_for_modules">モジュールでの Strict モード</h3>

<p>ECMAScript 2015 では、<a href="/ja/docs/Web/JavaScript/Reference/Statements/export">JavaScript モジュール</a>が導入されたため、Strict モードに入るための第3 の方法が導入されました。JavaScript モジュールの内容全体が自動的に Strict モードになり、それを開始するための宣言は必要ありません。</p>

<pre class="brush: js notranslate">function strict() {
    // これはモジュールなので、既定で Strict モードです
}
export default strict;
</pre>

<h2 id="Changes_in_strict_mode" name="Changes_in_strict_mode">Strict モードでの変更点</h2>

<p>Strict モードでは構文とランタイムの動作の両方に変更を加えます。変更点は主に以下のカテゴリに分類できます: ミスからエラー (構文エラーまたは実行時エラー) への変更、与えられた名前から特定の変数を算出する方法の単純化、<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/eval">eval</a></code> および <code><a href="/ja/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments">arguments</a></code> の単純化、セキュアな JavaScript 作成の容易化、将来の ECMAScript の進化への事前対処。</p>

<h3 id="Converting_mistakes_into_errors" name="Converting_mistakes_into_errors">ミスからエラーへの変換</h3>

<p>Strict モードでは、従来は受け入れていた一部のミスをエラーに変更します。JavaScript は未熟な開発者にも易しいように設計され、またエラーとすべき操作の一部をエラーとして扱いません。これにより当面の問題を解決したことがありますが、後により大きな問題を引き起こしたこともあります。Strict モードではこれらのミスをエラーとして扱うことで、開発者は気づいて修正するようになります。</p>

<p>第一に、Strict モードでは、偶発的にグローバル変数を作成できないようにします。通常の JavaScript では、代入文で変数名の綴りを間違えるとグローバルオブジェクトに新しいプロパティが作成され、そしてそれは動作し続けます (現在または将来問題になる可能性はありますが)。Strict モードでは、代入文で偶発的にグローバル変数を作成せずにエラーを投げます:</p>

<pre class="brush: js notranslate">'use strict';
                       // グローバル変数 mistypeVariable が存在しないと仮定すると
mistypeVariable = 17;  // この行は変数のスペルミスによる参照エラーを投げます。
</pre>

<p>第二に、Strict モードでは、代入文で暗黙的に失敗せずに例外が発生するようにします。例えば、<code>NaN</code> は書き込み不可のグローバル変数です。通常のコードでは <code>NaN</code> に代入しても何も起きません。つまり、開発者は失敗したという通知を受けません。Strict モードでは <code>NaN</code> に代入すると例外が発生します。通常のコードで暗黙的に失敗する代入 (書き込み不可のプロパティへの代入、getter のみのプロパティへの代入、<a href="/ja/JavaScript/Reference/Global_Objects/Object/preventExtensions">拡張不可</a> オブジェクトへの新規プロパティ割り当て) について、Strict モードでは例外が発生します:</p>

<pre class="brush: js notranslate">'use strict';

// 書き換え不可能なグローバルへの代入
var undefined = 5; // TypeError を投げます
var Infinity = 5; // TypeError を投げます

// 書き換え不可能なプロパティへの代入
var obj1 = {};
Object.defineProperty(obj1, 'x', { value: 42, writable: false });
obj1.x = 9; // TypeError を投げます

// ゲッター専用プロパティへの代入
var obj2 = { get x() { return 17; } };
obj2.x = 5; // TypeError を投げます

// 拡張不可能なオブジェクトの新しいプロパティへの代入
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = 'ohai'; // TypeError を投げます
</pre>

<p>第三に、Strict モードでは、削除できないプロパティを削除しようとするとエラーが発生します。（非 Strict モードでは何も起きません）</p>

<pre class="brush: js notranslate">'use strict';
delete Object.prototype; // TypeError を投げます
</pre>

<p>第四に、Strict モードでは、オブジェクトリテラル内のプロパティ名は一意であることを必須にします。通常のコードではプロパティ名が重複してもよく、最後に宣言したものがプロパティの値になります。しかし最後のものだけが有効になることから、例えばプロパティの値を変更するために最後のインスタンス以外を変更する形でコードを書き換える場合など、重複していることがバグになり得ます。Strict モードではプロパティ名の重複が構文エラーになります。</p>

<div class="note">
<p>ECMAScript 2015 では、このようなことはなくなりました。
 (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1041128">bug 1041128</a>).</p>
</div>

<pre class="brush: js notranslate">'use strict';
var o = { p: 1, p: 2 }; // !!! 構文エラー
</pre>

<p>第五に、Strict モードでは、関数の引数名が一意であることを必須にします。通常のコードでは、重複した引数がそれより前にある同名の引数を隠します。それら前の引数は <code>arguments[i]</code> を通して利用できますので、アクセスすることは可能です。しかしこのように隠すことはほとんど意味がなく、またおそらく不要なものであるため (例えば綴りの間違いをわかりにくくするかもしれません)、Strict モードでは引数名の重複を構文エラーにします。</p>

<pre class="brush: js notranslate">function sum(a, a, c) { // !!! 構文エラー
  'use strict';
  return a + a + c; // このコードが実行されると
}
</pre>

<p>第六に、ECMAScript 5 の Strict モードでは、8 進数表記を禁止します。8 進数表記は ECMAScript 5 の仕様に含まれていませんが、8 進数の前にゼロを付けることで、すべてのブラウザーでサポートされます: <code>0644 === 420</code> および <code>"\045" === "%"</code> のように。ECMAScript 2015 では、8 進数は数字の前に "<code>0o</code>" を付けることでサポートされます。</p>

<pre class="brush: js notranslate">var a = 0o10; // ES2015: 8 進数</pre>

<p>未熟な開発者は先頭のゼロに意味がないと考え、それを桁揃えのために用いることがあります。しかし、これでは数値の意味が変わってしまいます。8 進数表記が役立つことはほとんどなく、また誤って使われかねないため、Strict モードでは構文エラーになります。</p>

<pre class="brush: js notranslate">'use strict';
var sum = 015 + // !!! 構文エラー
          197 +
          142;

var sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16
</pre>

<p>第七に、ECMAScript 2015 の Strict モードでは、<a href="/ja/docs/Glossary/primitive">プリミティブ</a>値にプロパティを設定することが禁止されます。非 Strict モードではプロパティの設定が単純に無視され、Strict モードでは {{jsxref("TypeError")}} が投げられます。</p>

<pre class="brush: js notranslate">(function() {
'use strict';

false.true = '';         // TypeError
(14).sailing = 'home';   // TypeError
'with'.you = 'far away'; // TypeError

})();</pre>

<h3 id="Simplifying_variable_uses" name="Simplifying_variable_uses">変数の使用の単純化</h3>

<p>Strict モードでは、コード中の変数名と特定の変数定義との対応づけ方法を単純化します。多くのコンパイラの最適化は、変数 <em>X</em> を<em>あの</em>場所に保管している と表現できることに頼ります: これは JavaScript のコードを最大限に最適化するために重要です。JavaScript ではこのようなコード内の名前と変数定義との基本的な対応づけを、実行時まで行うことができない場合があります。Strict モードではこのような事態が起こるケースを取り除くことで、コンパイラが Strict モードのコードをより最適化できるようにします。</p>

<p>第一に、Strict モードでは、<code><a href="/ja/docs/Web/JavaScript/Reference/Statements/with">with</a></code> を禁止します。<code><a href="/ja/docs/Web/JavaScript/Reference/Statements/with">with</a></code> の問題点はブロック内にある名前を、渡されたオブジェクトのプロパティまたはブロックの周囲 (あるいはグローバル) のスコープへ実行時に対応づけることです: これは事前に行うことができません。Strict モードでは <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/with">with</a></code> をエラーとすることで、<code><a href="/ja/docs/Web/JavaScript/Reference/Statements/with">with</a></code> 内にある名前の指す場所が実行時に不明になる可能性をなくします。</p>

<pre class="brush: js notranslate">'use strict';
var x = 17;
with (obj) { // !!! 構文エラー
  // Strict モードでなかったら、これは var x になるのでしょうか、
  // それとも obj.x になるのでしょうか？
  // コードを実行してみないと一概には言えないので、
  // 名前を最適化することはできません。
  x;
}
</pre>

<p><code><a href="/ja/docs/Web/JavaScript/Reference/Statements/with">with</a></code> の置き換えとして、オブジェクトに短い名前の変数を割り当てて、その変数を用いて対応するプロパティにアクセスするという代案があります。</p>

<p>第二に、Strict モードでは、<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/eval">eval</a></code> は新しい変数を周囲のスコープに広めません。通常 <code>eval("var x;")</code> というコードは、変数 <code>x</code> を周囲の関数やグローバルスコープに広めます。これは通常 <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/eval">eval</a></code> の呼び出しを含む関数は、引数やローカル変数を指していないすべての名前を実行時に特定の定義へ対応づけることを意味します (<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/eval">eval</a></code> が外部の変数を隠蔽する新たな変数を生成する可能性があるためです)。Strict モードでは <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/eval">eval</a></code> で評価されているコードでのみ使用できる変数を作成するので、変数名が外部の変数や一部のローカル変数を指しているかにかかわらず <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/eval">eval</a></code> は影響を与えません:</p>

<pre class="brush: js notranslate">var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);
</pre>

<p>関連して、Strict モードのコード内で <code>eval(...)</code> という形式で <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/eval">eval</a></code> 関数を呼び出した場合は、コードは Strict モードとして評価されます。コードを明示的に Strict モードで呼び出してもよいですが、必須ではありません。</p>

<pre class="brush: js notranslate">function strict1(str) {
  'use strict';
  return eval(str); // str は Strict モードのコードとして扱われます。
}
function strict2(f, str) {
  'use strict';
  return f(str); // not eval(...): str は Strict モードを
                 // 呼び出した場合のみ Strict です。
}
function nonstrict(str) {
  return eval(str); // str は Strict モードを
                    // 呼び出した場合のみ Strict です。
}

strict1("'Strict モード！'");
strict1("'use strict'; 'Strict モード！'");
strict2(eval, "'Strict モードではない'");
strict2(eval, "'use strict'; 'Strict モード！'");
nonstrict("'Strict モードではない'");
nonstrict("'use strict'; 'Strict モード！'");
</pre>

<p>従って、Strict モードの <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/eval">eval</a></code> 内にある名前は、<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/eval">eval</a></code> の結果として評価されない Strict モードのコードと同様に動作します。</p>

<p>第三に、Strict モードでは、単純名の削除を禁止します。Strict モードでは <code>delete name</code> を構文エラーにします:</p>

<pre class="brush: js notranslate">'use strict';

var x;
delete x; // !!! 構文エラー

eval('var y; delete y;'); // !!! 構文エラー</pre>

<h3 id="Making_eval_and_arguments_simpler" name="Making_eval_and_arguments_simpler"><code>eval</code> および <code>arguments</code> の単純化</h3>

<p>Strict モードでは <code><a href="/ja/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments">arguments</a></code> および <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/eval">eval</a></code> の奇妙さを低減します。通常のコードではどちらも不思議な動作がかなりあります: バインドの追加や削除およびバインドする値を変更するための <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/eval">eval</a></code> や、<code><a href="/ja/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments">arguments</a></code> の添字つきプロパティが名前付き引数の別名になることです。Strict モードでは <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/eval">eval</a></code> および <code><a href="/ja/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments">arguments</a></code> をキーワードとした手当てにより、完全な修正は将来の ECMAScript まで実現しないものの大きな進歩を遂げます。</p>

<p>第一に、<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/eval">eval</a></code> および <code><a href="/ja/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments">arguments</a></code> という名前に対して言語構文でのバインドや代入を不可にします。以下のような試みはすべて構文エラーになります:</p>

<pre class="brush: js notranslate">'use strict';
eval = 17;
arguments++;
++eval;
var obj = { set p(arguments) { } };
var eval;
try { } catch (arguments) { }
function x(eval) { }
function arguments() { }
var y = function eval() { };
var f = new Function('arguments', "'use strict'; return 17;");
</pre>

<p>第二に、Strict モードのコードでは、内部で作成された <code><a href="/ja/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments">arguments</a></code> オブジェクトのプロパティがエイリアスになりません。通常のコードでは第一引数 <code>arg</code> を持つ関数において <code>arg</code> に値を設定すると <code>arguments[0]</code> にも設定され、また逆も同様です (引数が提供されない場合や <code>arguments[0]</code> が削除された場合を除きます)。Strict モードの関数での <code><a href="/ja/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments">arguments</a></code> オブジェクトは、関数が呼び出された当初の引数を保持します。<code>arguments[i]</code> は対応する名前付き引数の値を追跡せず、また名前付き引数も対応する <code>arguments[i]</code> の値を追跡しません。</p>

<pre class="brush: js notranslate">function f(a) {
  'use strict';
  a = 42;
  return [a, arguments[0]];
}
var pair = f(17);
console.assert(pair[0] === 42);
console.assert(pair[1] === 17);
</pre>

<p>第三に、<code>arguments.callee</code> をサポートしません。通常のコードでは、<code>arguments.callee</code> は取り囲んでいる関数を参照します。この使用法は脆弱です: 取り囲んでいる関数に名前をつけましょう! さらに、<code>arguments.callee</code> がアクセスされている場合は非インライン関数への参照を提供しなければならないため、<code>arguments.callee</code> はインライン関数のような最適化を実質的に妨害します。Strict モードの関数での <code>arguments.callee</code> は、書き込みや読み出し時にエラーが発生する、削除不可のプロパティです:</p>

<pre class="brush: js notranslate">'use strict';
var f = function() { return arguments.callee; };
f(); // TypeError が投げられます
</pre>

<h3 id="Securing_JavaScript" name="Securing_JavaScript">JavaScript の "セキュア化"</h3>

<p>Strict モードにより"セキュアな" JavaScript の記述がより簡単になります。現在、一部の Web サイトではユーザー向に対し、Web サイトの<em>他のユーザーが</em>実行することができる JavaScript を記述する方法を提供しています。ブラウザー上の JavaScript はユーザーの個人的な情報にアクセスできることから、そのような JavaScript は禁じられた機能へのアクセスを削除するよう、実行前に部分的に変換する必要があります。JavaScript の柔軟性は、ランタイムによる多くのチェックなしにこれを行うことを事実上不可能にします。ある言語機能は、ランタイムのチェック実行にかなりパフォーマンスのコストがかかるとして広まっています。Strict モードのいくつかの調整、そしてユーザーが投稿した JavaScript が Strict モードのコードであることや信頼できる方法で呼び出されることの要求により、ランタイムのチェックの必要性をかなり減らします。</p>

<p>第一に、Strict モードでは、<code><a href="/ja/docs/Web/JavaScript/Reference/Operators/this">this</a></code> として関数に渡された値をオブジェクトへボクシングしません。非ストリクトモードでの関数にとって <code><a href="/ja/docs/Web/JavaScript/Reference/Operators/this">this</a></code> は常にオブジェクトになります。this の値は、実行時に this オブジェクト値として提供されたオブジェクトであったり、真偽値・文字列・数値などのプリミティブな値が <code><a href="/ja/docs/Web/JavaScript/Reference/Operators/this">this</a></code> として呼び出した時はオブジェクトへボクシングした値、<code>{{Glossary("Undefined", "undefined")}}</code> または <code>{{Glossary("Null", "null")}}</code> の <code><a href="/ja/docs/Web/JavaScript/Reference/Operators/this">this</a></code> で呼び出された時はグローバルオブジェクトとなります。(特定の <code><a href="/ja/docs/Web/JavaScript/Reference/Operators/this">this</a></code> を指定するために <a href="/ja/JavaScript/Reference/Global_Objects/Function/call"><code>call</code></a>、<a href="/ja/JavaScript/Reference/Global_Objects/Function/apply"><code>apply</code></a>、<a href="/ja/JavaScript/Reference/Global_Objects/Function/bind"><code>bind</code></a> を使用してください)。自動的なボクシングはパフォーマンス上のコストがあり、しかしブラウザーでグローバルオブジェクトを公開することは、"セキュアな" JavaScript 環境へのアクセスを提供するグローバルオブジェクトを制限する必要があるためにセキュリティ上の危険性があります。従って Strict モードの関数では、指定された <code><a href="/ja/docs/Web/JavaScript/Reference/Operators/this">this</a></code> を変更せずに使用します:</p>

<pre class="brush: js notranslate">'use strict';
function fun() { return this; }
console.assert(fun() === undefined);
console.assert(fun.call(2) === 2);
console.assert(fun.apply(null) === null);
console.assert(fun.call(undefined) === undefined);
console.assert(fun.bind(true)() === true);
</pre>

<p>つまり、とりわけブラウザーでは、Strict モード関数の中で、<code>this</code> を介して <code>window</code> オブジェクトを参照することができなくなったことを意味します。</p>

<p>第二に、Strict モードでは、ECMAScript の一般的な実装である拡張を通して JavaScript のスタックを "渡り歩く" ことができません。拡張を用いた通常のコードでは中間にある <code>fun</code> 関数を呼び出すと、<code>fun.caller</code> は <code>fun</code> を呼び出した直近の関数を指し、また <code>fun.arguments</code> はその <code>fun</code> の呼び出しにおける <code><a href="/ja/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments">arguments</a></code> を指します。これらの拡張は "セキュア化された" コードにで "特権的に" 関数や (潜在的にセキュアでない) 引数へのアクセスを許すことから、"セキュアな" JavaScript に対して問題があります。<code>fun</code> が Strict モードである場合は、<code>fun.caller</code> および <code>fun.arguments</code> は書き込みや読み出し時にエラーが発生する、削除不可のプロパティです:</p>

<pre class="brush: js notranslate">function restricted() {
  'use strict';
  restricted.caller;    // TypeError が投げられます
  restricted.arguments; // TypeError が投げられます
}
function privilegedInvoker() {
  return restricted();
}
privilegedInvoker();
</pre>

<p>第三に、Strict モードの関数での <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments">arguments</a></code> は対応する関数の呼び出し時の変数にアクセスできません。一部の過去の ECMAScript では <code>arguments.caller</code> を、プロパティが関数内の変数のエイリアスになるオブジェクトとして実装しました。これには関数の抽象化を通した特権的な値の隠蔽機能を破ることから、<a class="external" href="http://stuff.mit.edu/iap/2008/facebook/">セキュリティ上の危険性</a>があります。以上の理由から、今日のブラウザーはこれらを実装していません。それでも歴史的な機能性から、Strict モードの関数での <code>arguments.caller</code> は書き込みや読み出し時にエラーが発生する、削除不可のプロパティです:</p>

<pre class="brush: js notranslate">'use strict';
function fun(a, b) {
  'use strict';
  var v = 12;
  return arguments.caller; // TypeError が投げられます
}
fun(1, 2); // v を公開しません（または a または b）
</pre>

<h3 id="Paving_the_way_for_future_ECMAScript_versions" name="Paving_the_way_for_future_ECMAScript_versions">将来の ECMAScript への準備</h3>

<p>将来の ECMAScript では新たな構文を導入する予定であるため、ECMAScript 5 の Strict モードでは移行を容易にする制限事項を適用します。将来の変更点の基礎が Strict モードで禁止されていると、変更が容易になります。</p>

<p>第一に、Strict モードでは、いくつかの識別子を予約語にします。その対象は <code>implements</code>, <code>interface</code>, <code>let</code>, <code>package</code>, <code>private</code>, <code>protected</code>, <code>public</code>, <code>static</code>, <code>yield</code> です。Strict モードでは、これらを変数や引数の名前として使用できません。</p>

<pre class="brush: js notranslate">function package(protected) { // !!!
  'use strict';
  var implements; // !!!

  interface: // !!!
  while (true) {
    break interface; // !!!
  }

  function private() { } // !!!
}
function fun(static) { 'use strict'; } // !!!

</pre>

<p>Mozilla 特有の注意事項が 2 つあります: 第一に、コードが JavaScript 1.7 以降 (chrome コード、または適切な <code>&lt;script type=""&gt;</code> を使用) かつ Strict モードである場合、<code><a href="/ja/docs/Web/JavaScript/Reference/Statements/let">let</a></code> および <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/yield">yield</a></code> にはそれらのキーワードが最初に導入されてから持っていた機能があります。しかし <code>&lt;script src=""&gt;</code> や <code>&lt;script&gt;...&lt;/script&gt;</code> で読み込む Web の Strict モードのコードでは、<code><a href="/ja/docs/Web/JavaScript/Reference/Statements/let">let</a></code>/<code><a href="/ja/docs/Web/JavaScript/Reference/Statements/yield">yield</a></code> を識別子として使用できません。第二に、ES5 では <code>class</code>、<code>enum</code>、<code>export</code>、<code>extends</code>、<code>import</code>、<code>super</code> を無条件に予約していますが、Firefox 5 以前で Mozilla はこれらを Strict モードでのみ予約します。</p>

<p>第二に、Strict モードでは、<a class="external" href="http://whereswalden.com/2011/01/24/new-es5-strict-mode-requirement-function-statements-not-at-top-level-of-a-program-or-function-are-prohibited/">スクリプトのトップレベルまたは関数内にない function 文を禁止します</a>。通常のコードでは、function 文はどこにでも置くことが許されます。<em>これは ES5 の仕様に (ES3 でさえも) 含まれていません!</em> ブラウザーにより意味が異なり互換性がない拡張です。将来の ECMAScript では、おそらくスクリプトのトップレベルや関数内以外での funciton 文に新たな意味を定義します。<a class="external" href="http://wiki.ecmascript.org/doku.php?id=conventions:no_non_standard_strict_decls">Strict モードではこのような function 文を禁止する</a> ことで将来の ECMAScript の仕様向けの "宣言を取り除きます":</p>

<pre class="brush: js notranslate">'use strict';
if (true) {
  function f() { } // !!! 構文エラー
  f();
}

for (var i = 0; i &lt; 5; i++) {
  function f2() { } // !!! 構文エラー
  f2();
}

function baz() { // kosher
  function eit() { } // also kosher
}
</pre>

<p>このような function 文は基本的な ES5 の拡張であるため、禁止することは Strict モードとして適切ではありません。しかしこの動作は ECMAScript 委員会の推奨であり、それゆえブラウザーは実装するでしょう。</p>

<h2 id="Strict_mode_in_browsers" name="Strict_mode_in_browsers">ブラウザーでの Strict モード</h2>

<p>ブラウザーはまだ Strict モードを確実に実装していないため、無条件に依存しないでください。<em>Strict モードは意味を変えます</em>。それら変更点を当てにすると、Strict モードを実装していないブラウザーでミスやエラーが発生する可能性があります。Strict モードの使用時は注意を払い、また Strict モードに関する機能を実装しているかの機能テストにより Strict モードへの信頼を補ってください。最後に、<em>Strict モードをサポートするブラウザーとしないブラウザーでのコードのテスト</em> を行うようにしてください。Strict モードをサポートしないブラウザーでしかテスト行わない場合、Strict モードをサポートするブラウザーで問題が起きる可能性が高くなります。これは逆の場合も同じです。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-strict-mode-code', 'Strict Mode Code')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a class="external" href="http://whereswalden.com/2010/09/08/new-es5-strict-mode-support-now-with-poison-pills/">Where's Walden? » New ES5 strict mode support: now with poison pills!</a></li>
 <li><a class="external" href="http://whereswalden.com/2011/01/24/new-es5-strict-mode-requirement-function-statements-not-at-top-level-of-a-program-or-function-are-prohibited/">Where's Walden? » New ES5 strict mode requirement: function statements not at top level of a program or function are prohibited</a></li>
 <li><a class="external" href="http://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/">Where's Walden? » New ES5 strict mode support: new vars created by strict mode eval code are local to that code only</a></li>
 <li><a href="http://qnimate.com/javascript-strict-mode-in-nutshell/">JavaScript "use strict" tutorial for beginners.</a></li>
 <li><a class="external" href="http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/">John Resig - ECMAScript 5 Strict Mode, JSON, and More</a></li>
 <li><a class="external" href="http://dmitrysoshnikov.com/ecmascript/es5-chapter-2-strict-mode/">ECMA-262-5 in detail. Chapter 2. Strict Mode.</a></li>
 <li><a class="external" href="http://kangax.github.io/compat-table/es5/#Strict_mode">Strict mode compatibility table</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode">Transitioning to strict mode</a></li>
</ul>
