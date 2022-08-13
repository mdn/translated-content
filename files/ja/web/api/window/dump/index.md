---
title: window.dump()
slug: Web/API/Window/dump
tags:
  - API
  - DOM
  - DOM_0
  - Method
  - Non-standard
translation_of: Web/API/Window/dump
---
<div>{{ ApiRef() }}</div>

<div>
<p id="comment_text_2">{{Non-standard_header}}</p>
</div>

<h2 id="Summary" name="Summary">概要</h2>

<p>(システムの) コンソールにメッセージを表示します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">window.dump(<em>message</em>);

dump(<em>message</em>);
</pre>

<ul>
 <li><code>message</code> はログ出力するメッセージの文字列です。</li>
</ul>

<h2 id="Notes" name="Notes">注記</h2>

<p><code>dump</code>() の一般的な使い方は、JavaScript のデバッグです。Firefox のプロセスが <code>-console</code> オプション付きで開始された場合、<code>dump</code>() に渡されたメッセージは、システムコンソール (ネイティブのコンソール) に送信されます。<code>-console</code> オプションが指定されていない場合、stderr に出力されます。dump() からの出力は  <a href="/ja/docs/Tools/Browser_Console">ブラウザコンソール</a> に送信されません。<a href="/ja/docs/Tools/Browser_Console">ブラウザコンソール</a> への出力は、<a href="/ja/docs/Web/API/Console.log">console.log()</a> を使用してください。特権コードは、<code><a href="/ja/docs/Components.utils.reportError" title="Components.utils.reportError">Components.utils.reportError</a></code> と <code><a href="/ja/docs/XPCOM_Interface_Reference/nsIConsoleService" title="nsIConsoleService">nsIConsoleService</a></code> を使用してメッセージを <a href="/ja/docs/Error_Console" title="Error_Console">エラーコンソール</a> / <a href="/ja/docs/Tools/Browser_Console">ブラウザコンソール</a> にログ出力することもできます。</p>

<p><code>dump</code>() は、JavaScript で実装された XPCOM コンポーネントでも使用できます。これは、{{domxref("window")}} がコンポーネント内のグローバルオブジェクトでなくても使えます。また、<a href="/ja/docs/Components.utils.Sandbox#Methods_available_on_the_Sandbox_object" title="Methods available on the Sandbox object">sandboxes</a> 内で明示的に使用可能にすることもできます。しかし、この <code>dump</code> の使用は、後述の設定に影響せず、常に表示されます。この設定を自分で確認するか、独自のデバッグ設定で、多くのデバッグコンテンツを、これらに興味のないユーザのコンソールに送信されないようにすることをおすすめします。ただし、XPCOM コンポーネントからの <code>dump</code> 出力は <code>stderr</code> へ送られますが、別の場所から呼び出された <code>dump</code> は <code>stdout</code> へ出力されるので注意してください。</p>

<p><a href="/ja/docs/Gecko" title="Gecko">Gecko</a> の <code>dump()</code> は <strong>既定で無効</strong> です。実行しても何も起こらず、エラーも発生しません。<code>dump</code> 出力を見るには、<a href="http://kb.mozillazine.org/About:config">about:config</a> ページか <a href="http://kb.mozillazine.org/User.js_file">user.js ファイル</a> で、<code>browser.dom.window.dump.enabled</code> 設定の値を <code>true</code> にしなければなりません。注記: この設定は既定では <code>about:config</code> のリストに表示されないので、新たに作成してください (about:config ページのコンテンツ領域を右クリックし、"新規作成" から "真偽値" を選択します)。</p>

<p>Windows では、dump の出力を見るにはコンソールを開く必要があります。まだコンソールを開いていなければ、一旦アプリケーションを閉じ、コマンドライン引数に <code>-console</code> を追加して再度開いてください。アプリケーションと同時にコンソールが開きます。または、<code>-attach-console</code> を追加すると既存のコンソールを使用します。他のオペレーティングシステムでは、ターミナルからプリケーションを開くだけです。</p>

<p>コンソール出力をファイルへリダイレクトするには、Firefox を <code>-console</code> オプション<em>無し</em>で起動し、次のコマンドで stderr と stdout の出力をファイルへリダイレクトしてください:</p>

<pre>firefox &gt; console.txt 2&gt;&amp;1
</pre>

<div class="note">
<p>コンソールメッセージを、アプリケーションを起動したコンソールに表示させたいときは、<a href="https://github.com/matthewkastor/Redirector">Gecko Console Redirector</a> を使用してください。プリコンパイルされたバイナリが <a href="https://github.com/matthewkastor/Redirector/archive/master.zip">https://github.com/matthewkastor/Redirector/archive/master.zip</a> の ZIP アーカイブ内の <code>Redirector-master\Gecko\Console Redirector\bin\Release</code> に含まれています。すべての dll ファイルと exe ファイルをお好みの場所にコピーしてください。次に、<code>Console Redirector.exe /?</code> を実行します。</p>
</div>

<h2 id="Specification" name="Specification">仕様</h2>

<p id="comment_text_2">これは、どの仕様にも含まれません。</p>
