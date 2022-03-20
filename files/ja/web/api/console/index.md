---
title: console
slug: Web/API/console
tags:
  - API
  - Debugging
  - Interface
  - Reference
  - console
  - web console
  - ウェブコンソール
translation_of: Web/API/Console
---
<p>{{APIRef("Console API")}}</p>

<p><strong><code>console</code></strong> オブジェクトは、ブラウザーのデバッグコンソール (例えば Firefox の<a href="/ja/docs/Tools/Web_Console">ウェブコンソール</a>) へアクセスする機能を提供します。このオブジェクトの詳細な動作はブラウザーによって異なりますが、<em>一般的に共通の</em>機能セットが提供されています。</p>

<p><code>console</code> オブジェクトには任意のグローバルオブジェクトからアクセスできます。閲覧スコープの {{domxref("Window")}} や、特定の種類のワーカーを表す {{domxref("WorkerGlobalScope")}} の console プロパティを通してアクセスできます。これは {{domxref("Window.console")}} として公開されていますが、単に <code>console</code> として参照できます。</p>

<pre class="brush: js notranslate">console.log("Failed to open the specified link")</pre>

<p>このページでは、 <code>console</code> オブジェクトで使用できる{{anch("Methods", "メソッド")}}や{{anch("Usage","使用例")}}を掲載します。</p>

<p>{{AvailableInWorkers}}</p>

<div class="blockIndicator note">
<p><strong>注</strong>: 経緯上の理由から、実際の <code>console</code> インターフェイスはすべて小文字で定義されています (つまり <code>Console</code> ではない)。</p>
</div>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("console.assert()")}}</dt>
 <dd>第 1 引数が <code>false</code> であれば、メッセージとスタックトレースをコンソールに出力します。</dd>
 <dt>{{domxref("console.clear()")}}</dt>
 <dd>コンソールをクリアします。</dd>
 <dt>{{domxref("console.count()")}}</dt>
 <dd>指定されたラベルでこの行が呼び出された回数をログ出力します。</dd>
 <dt>{{domxref("console.countReset()")}}</dt>
 <dd>指定されたラベルのカウンターの値をリセットします。</dd>
 <dt>{{domxref("console.debug()")}}</dt>
 <dd>ログレベルが <code>debug</code> のコンソールへメッセージを出力します。</dd>
 <dt>{{domxref("console.dir()")}}</dt>
 <dd>指定した JavaScript オブジェクトのプロパティの、対話型リストを表示します。このリスト内の三角印をクリックすると、子オブジェクトの内容を調査して表示させることができます。</dd>
 <dt>{{domxref("console.dirxml()")}}</dt>
 <dd>指定したオブジェクトを XML/HTML 要素で表現したものを表示します。表現できない場合は、JavaScript オブジェクトビューを表示します。</dd>
 <dt>{{domxref("console.error()")}}</dt>
 <dd>エラーメッセージを出力します。このメソッドでは、<a href="/ja/docs/Web/API/console#Using_string_substitutions">文字列置換</a>および追加の引数を使用することができます。</dd>
 <dt>{{domxref("console.exception()")}} {{Non-standard_inline}} {{deprecated_inline}}</dt>
 <dd><code>error()</code> の別名です。</dd>
 <dt>{{domxref("console.group()")}}</dt>
 <dd>以降の出力を別のレベルにインデントする、新たなインライン<a href="/ja/docs/Web/API/console#Using_groups_in_the_console">グループ</a>を作成します。レベルを戻すには、<code>groupEnd()</code> を呼び出します。</dd>
 <dt>{{domxref("console.groupCollapsed()")}}</dt>
 <dd>以降の出力を別のレベルにインデントする、新たなインライン<a href="/ja/docs/Web/API/console#Using_groups_in_the_console">グループ</a>を作成します。<code>group()</code> との違いは、グループが折りたたまれた状態で作られ、それを開くには展開ボタンを操作する必要があることです。レベルを戻すには、<code>groupEnd()</code> を呼び出します。</dd>
 <dt>{{domxref("console.groupEnd()")}}</dt>
 <dd>現在のインライン<a href="/ja/docs/Web/API/console#Using_groups_in_the_console">グループ</a>から抜けます。</dd>
 <dt>{{domxref("console.info()")}}</dt>
 <dd>メッセージタイプのログ情報を出力します。このメソッドでは、<a href="/ja/docs/Web/API/console#Using_string_substitutions">文字列置換</a>および追加の引数を使用することができます。</dd>
 <dt>{{domxref("console.log()")}}</dt>
 <dd>一般タイプのログ情報を出力します。このメソッドでは、<a href="/ja/docs/Web/API/console#Using_string_substitutions">文字列置換</a>および追加の引数を使用することができます。</dd>
 <dt>{{domxref("console.profile()")}} {{Non-standard_inline}}</dt>
 <dd>ブラウザー内蔵のプロファイラー (例えば <a href="/ja/docs/Tools/Performance">Firefox のパフォーマンスツール</a>) を開始します。プロファイルの名称を指定することができます。</dd>
 <dt>{{domxref("console.profileEnd()")}} {{Non-standard_inline}}</dt>
 <dd>プロファイラーを停止します。結果のプロファイルは、ブラウザーのパフォーマンスツール (例えば <a href="/ja/docs/Tools/Performance">Firefox のパフォーマンスツール</a>) で確認できます。</dd>
 <dt>{{domxref("console.table()")}}</dt>
 <dd>表形式のデータを、表を使用して表示します。</dd>
 <dt>{{domxref("console.time()")}}</dt>
 <dd>入力引数で指定された名前の<a href="/ja/docs/Web/API/console#Timers">タイマー</a>を開始します。ページあたり最大 10,000 個のタイマーを同時に動かすことができます。</dd>
 <dt>{{domxref("console.timeEnd()")}}</dt>
 <dd>指定された<a href="/ja/docs/Web/API/console#Timers">タイマー</a>を停止して、そのタイマーを開始してからの時間を秒単位でログに出力します。</dd>
 <dt>{{domxref("console.timeLog()")}}</dt>
 <dd>指定された<a href="/ja/docs/Web/API/console#Timers">タイマー</a>の値をコンソールへ出力します。</dd>
 <dt>{{domxref("console.timeStamp()")}} {{Non-standard_inline}}</dt>
 <dd>ブラウザのー <a href="https://developer.chrome.com/devtools/docs/timeline">Timeline</a> や<a href="/ja/docs/Tools/Performance/Waterfall">タイムライン</a>ツールにマーカーを追加します。</dd>
 <dt>{{domxref("console.trace()")}}</dt>
 <dd><a href="/ja/docs/Web/API/console#Stack_traces">スタックトレース</a>を出力します。</dd>
 <dt>{{domxref("console.warn()")}}</dt>
 <dd>警告メッセージを出力します。このメソッドでは、<a href="/ja/docs/Web/API/console#Using_string_substitutions">文字列置換</a>および追加の引数を使用することができます。</dd>
</dl>

<h2 id="Usage" name="Usage">使用方法</h2>

<h3 id="Outputting_text_to_the_console" name="Outputting_text_to_the_console">コンソールにテキストを出力する</h3>

<p>コンソールでもっとも頻繁に使用される機能は、テキストやその他のデータをログ出力することです。生成することができる出力のカテゴリは 4 つあり、{{domxref("console.log()")}}、{{domxref("console.info()")}}、{{domxref("console.warn()")}}、{{domxref("console.error()")}} の各メソッドを使用します。これらメソッドの出力結果はログ上でそれぞれ異なるスタイルがつけられ、また関心がある種類の出力だけを参照するためにブラウザーが提供するフィルタ機能を使用することもできます。</p>

<p>各出力メソッドを使用する方法は 2 つあります。複数の文字列表現を 1 つの文字列に連結してコンソールに出力する形でオブジェクトのリストを渡す方法と、オブジェクトのリストに続けてそれらを置き換える任意の個数の置換文字列を渡す方法です。</p>

<h4 id="Outputting_a_single_object" name="Outputting_a_single_object">単一のオブジェクトの出力</h4>

<p>もっとも簡単にログを記録する方法は、単一のオブジェクトを出力することです。</p>

<pre class="brush: js notranslate">var someObject = { str: "Some text", id: 5 };
console.log(someObject);
</pre>

<p>出力内容は以下のようになります。</p>

<pre class="notranslate">[09:27:13.475] ({str:"Some text", id:5})</pre>

<h4 id="Outputting_multiple_objects" name="Outputting_multiple_objects">複数のオブジェクトの出力</h4>

<p>ログ出力のメソッドを呼び出すときにオブジェクトを羅列することで、複数のオブジェクトを出力することもできます。</p>

<pre class="brush: js notranslate">var car = "Dodge Charger";
var someObject = { str: "Some text", id: 5 };
console.info("My first car was a", car, ". The object is:", someObject);</pre>

<p>出力は以下のようになります。</p>

<pre class="notranslate">[09:28:22.711] My first car was a Dodge Charger . The object is: ({str:"Some text", id:5})
</pre>

<h4 id="Using_string_substitutions" name="Using_string_substitutions">文字列置換の使用</h4>

<p>文字列を取る <code>console</code> オブジェクトのメソッドの一つ (<code>log()</code> など) に文字列を渡すと、以下の置換文字列を使用することができます。</p>

<dl>
 <dt><code>%o</code> または <code>%O</code></dt>
 <dd>JavaScript オブジェクトを出力します。オブジェクト名をクリックすると、調査ツールで詳細情報を表示します。</dd>
 <dt><code>%d</code> または <code>%i</code></dt>
 <dd>整数値を出力します。数値の書式設定をサポートしています。例えば <code>console.log("Foo %.2d", 1.1)</code> は、先頭に 0 を補った有効数字 2 桁の数値として出力します: <code>Foo 01</code></dd>
 <dt><code>%s</code></dt>
 <dd>文字列を出力します。</dd>
 <dt><code>%f</code></dt>
 <dd>浮動小数点数値を出力します。数値の書式設定に対応しています。例えば <code>console.log("Foo %.2f", 1.1)</code> は、小数部分が 2 桁の数値として出力し、 <code>Foo 1.10</code> となります。</dd>
</dl>

<div class="note">
<p><strong>注</strong>: 精度の書式は Chrome では動作しません。</p>
</div>

<p>これらは引数リストの書式化文字列の後にある引数を引用します。例えば次のようになります。</p>

<pre class="notranslate">for (var i=0; i&lt;5; i++) {
  console.log("Hello, %s. You've called me %d times.", "Bob", i+1);
}
</pre>

<p>出力は以下のようになります。</p>

<pre class="notranslate">[13:14:13.481] Hello, Bob. You've called me 1 times.
[13:14:13.483] Hello, Bob. You've called me 2 times.
[13:14:13.485] Hello, Bob. You've called me 3 times.
[13:14:13.487] Hello, Bob. You've called me 4 times.
[13:14:13.488] Hello, Bob. You've called me 5 times.
</pre>

<h4 id="Styling_console_output" name="Styling_console_output">コンソールの出力のスタイル付け</h4>

<p><code>%c</code> ディレクティブを使用すると、コンソールの出力に CSS スタイルを適用することができます。</p>

<pre class="brush: js notranslate">console.log("This is %cMy stylish message", "color: yellow; font-style: italic; background-color: blue;padding: 2px");</pre>

<p>ディレクティブの前のテキストは影響を受けませんが、ディレクティブの後ろのテキストは引数の CSS 宣言を使用して装飾されます。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/12527/CSS-styling.png" style="display: block; margin: 0 auto;"></p>

<p><code>%c</code> で利用できるプロパティは次の通りです (少なくとも、 Firefox では — 他のブラウザーでは異なる可能性があります)。</p>

<ul>
 <li>{{cssxref("background")}} and its longhand equivalents.</li>
 <li>{{cssxref("border")}} and its longhand equivalents</li>
 <li>{{cssxref("border-radius")}}</li>
 <li>{{cssxref("box-decoration-break")}}</li>
 <li>{{cssxref("box-shadow")}}</li>
 <li>{{cssxref("clear")}} and {{cssxref("float")}}</li>
 <li>{{cssxref("color")}}</li>
 <li>{{cssxref("cursor")}}</li>
 <li>{{cssxref("display")}}</li>
 <li>{{cssxref("font")}} and its longhand equivalents</li>
 <li>{{cssxref("line-height")}}</li>
 <li>{{cssxref("margin")}}</li>
 <li>{{cssxref("outline")}} and its longhand equivalents</li>
 <li>{{cssxref("padding")}}</li>
 <li><code>text-*</code> properties such as {{cssxref("text-transform")}}</li>
 <li>{{cssxref("white-space")}}</li>
 <li>{{cssxref("word-spacing")}} and {{cssxref("word-break")}}</li>
 <li>{{cssxref("writing-mode")}}</li>
</ul>

<div class="blockIndicator note">
<p><strong>注</strong>: コンソールメッセージは、既定ではインライン要素と同様に動作します。 <code>padding</code>, <code>margin</code> などの効果を得たい場合は、例えば <code>display: inline-block</code> のように設定してください。</p>
</div>

<h3 id="Using_groups_in_the_console" name="Using_groups_in_the_console">コンソールでのグループの使用</h3>

<p>関連するデータを視覚的に結合することによりコンソール出力をまとめるのに役立つ、入れ子になったグループを使用することができます。新たな入れ子のブロックを作成するには、<code>console.group()</code> を呼び出します。<code>console.groupCollapsed()</code> メソッドはも似ていますが、こちらは折りたたまれた状態の新たなブロックを作成し、中身を読むには展開ボタンを操作してブロックを開く必要があります。</p>

<p>現在のグループを抜けるには、console.groupEnd() を呼び出します。例えば、以下のコードを実行します。</p>

<pre class="brush: js notranslate">console.log("This is the outer level");
console.group("First group");
console.log("In the first group");
console.group("Second group");
console.log("In the second group");
console.warn("Still in the second group");
console.groupEnd();
console.log("Back to the first group");
console.groupEnd();
console.debug("Back to the outer level");
</pre>

<p>出力は以下のようになります。</p>

<p><img alt="Demo of nested groups in Firefox console" src="https://mdn.mozillademos.org/files/16911/console_groups_demo.png" style="height: 169px; width: 236px;"></p>

<h3 id="Timers" name="Timers">タイマー</h3>

<p>特定の操作にかかる時間を計るため、タイマーを設定することができます。タイマーを開始するには、引数で名前を指定して <code>console.time()</code> メソッドを呼び出します。タイマーを停止して経過時間をミリ秒単位で取得するには、タイマーの名前をまた引数で指定して <code>console.timeEnd()</code> メソッドを呼び出します。ページあたり最大 10,000 個のタイマーを同時に動かすことができます。</p>

<p>例えば、以下のコードを実行します。</p>

<pre class="brush: js notranslate">console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff...");
console.timeEnd("answer time");
</pre>

<p>ユーザーがアラートボックスを解除するのにかかった時間を記録し、その時間をコンソールに記録し、ユーザーが2回目のアラートを解除するのを待ってから、終了時間をコンソールに記録します。</p>

<p><img alt="timerresult.png" class="default internal" src="https://mdn.mozillademos.org/files/16113/console-timeLog.png" style="border: 1px solid black; height: 102px; margin: 0 auto; width: 318px;"></p>

<p>タイマーの名前は、タイマーの開始時と停止時の両方で表示されることに注意してください。</p>

<p class="note"><strong>注:</strong> タイマーをネットワーク通信の時間の計測に用いる場合、タイマーはトランザクション全体の所要時間を報告しますが、ネットワークパネルに表示される時間はヘッダーの処理にかかった時間だけを表すことに注意してください。レスポンス本文の記録を有効にしている場合は、レスポンスヘッダーとレスポンス本文それぞれに表示される所要時間の合計が、コンソールに出力されている時間に一致します。</p>

<h3 id="Stack_traces" name="Stack_traces">スタックトレース</h3>

<p>console オブジェクトはスタックトレースの出力にも対応しています。これは {{domxref("console.trace()")}} を呼び出した場所へ至るための呼び出し経路を表示するものです。以下のコードで考えましょう:</p>

<pre class="brush: js notranslate">function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
</pre>

<p>コンソールへの出力内容は以下のようになります。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/7167/api-trace2.png" style="display: block; margin-left: auto; margin-right: auto;"></p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Console API')}}</td>
   <td>{{Spec2('Console API')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Console")}}</p>

<h2 id="Notes" name="Notes">注</h2>

<ul>
 <li>少なくとも Firefox では、ページで <code>console</code> オブジェクトを定義すると Firefox が内蔵している console オブジェクトをオーバーライドします。</li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Tools" title="Tools">Firefox 開発ツール</a></li>
 <li><a href="/ja/docs/Tools/Web_Console" title="Web Console">ウェブコンソール</a> — Firefox でウェブコンソールが console API の呼び出しを処理する方法</li>
 <li><a href="/ja/docs/Tools/Remote_Debugging">リモートデバッグ</a> — モバイル端末がデバッグ対象である場合に、console の出力を確認する方法</li>
</ul>

<h3 id="Other_implementations" name="Other_implementations">その他の実装</h3>

<ul>
 <li><a href="https://developers.google.com/chrome-developer-tools/docs/console-api">Google Chrome DevTools</a></li>
 <li><a href="https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide/console/console-api">Microsoft Edge DevTools</a></li>
 <li><a href="https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html">Safari Web Inspector</a></li>
</ul>
