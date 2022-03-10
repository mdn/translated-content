---
title: History.pushState()
slug: Web/API/History/pushState
tags:
  - API
  - HTML DOM
  - History
  - History API
  - Location
  - Method
  - Reference
  - Session
  - URL
  - Web
  - pushState
translation_of: Web/API/History/pushState
---
<div>{{APIRef("History API")}}</div>

<p><a href="/ja/docs/Web/HTML">HTML</a> 文書では、<strong><code>history.pushState()</code></strong> メソッドはブラウザーのセッション履歴スタックに状態を追加します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">history.pushState(<var>state</var>, <var>title</var>[, <var>url</var>])</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt><code>state</code></dt>
 <dd><code>state</code> (状態)オブジェクトは、<code>pushState()</code> によって作られる新規履歴エントリに関連した JavaScript オブジェクトです。ユーザーが新規の <code>state</code> にナビゲートしたときはいつも、{{event("popstate")}} イベントが発火し、イベントの <code>state</code> プロパティは、履歴エントリの <code>state</code> オブジェクトのコピーを含みます。</dd>
 <dd><code>state</code> オブジェクトはシリアライズ可能なあらゆものとなりえます。Firefox では状態オブジェクトをユーザーのディスクに保存してブラウザーを再起動した後にも復帰できるため、<code>state</code> オブジェクトのシリアライズ表現を最大 640k 文字という上限を課しています。これを超える大きさの状態オブジェクトを <code>pushState()</code> に渡した場合、このメソッドは例外を投げます。これ以上のスペースが必要な場合、{{domxref("Window.sessionStorage", "sessionStorage")}} や {{domxref("Window.localStorage", "localStorage")}}の使用が推奨されます。</dd>
 <dt><code>title</code></dt>
 <dd><a href="https://github.com/whatwg/html/issues/2174">たいていのブラウザーはこのパラメーターを無視しますが、</a>将来使うかもしれません。ここに空文字を渡すと、将来メソッドが変更されても安全でしょう。あるいは、これから移動する状態の短いタイトルを渡すこともできます。タイトルが変わりうる場合は、{{domxref("Document.title", "document.title")}} を使用できます。</dd>
 <dt><code>url</code> {{optional_inline}}</dt>
 <dd>履歴エントリーの URL は、このパラメーターで与えられます。ブラウザーは <code>pushState()</code> を呼び出した後もこの URL を読み込もうとせずに、例えばユーザーがブラウザーを再起動した後など、後で URL を読み込む場合もあるのにご注意ください。新 URL は絶対パスとは限りません。つまり相対パスの場合、現在の URL から相対的に解決されます。新URL は現在の URL と同一 {{glossary("origin", "オリジン")}} でなければならず、そうでない場合、<code>pushState()</code> は例外をスローします。このパラメーターが指定されない場合、ドキュメントの現在の URL がセットされます。</dd>
</dl>

<h2 id="Description" name="Description">説明</h2>

<p>ある意味で、<code>pushState()</code> の呼び出しは <code>window.location = "#foo"</code>と似ていて、両方とも現在の文書に関連した別の履歴エントリを作成、アクティベートします。しかし <code>pushState()</code> にはいくつかの利点があります:</p>

<ul>
 <li>新しい URL は現在の URL と同一オリジンのいかなる URL にできます。これに対して、{{domxref("window.location")}} をセットするのは、ハッシュを変更した時のみ同一ドキュメントのままになります。</li>
 <li>URL を変えたくないときは変更しなくても良いです。これに対して、g <code>window.location = "#foo";</code> をセットするのは現在のハッシュが <code>#foo</code> でない場合のみ新規の履歴エントリを作成します。</li>
 <li>履歴エントリに任意のデータを関連づけることができます。ハッシュベースのアプローチでは、関連するデータすべてを短い文字列にエンコードする必要があります。</li>
</ul>

<p><code>pushState()</code> は {{event("hashchange")}} イベントを発火せず、それは新URL がハッシュだけ旧URL と異なる場合でもそうなることに気をつけてください。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>これはブラウザー履歴エントリに <em>state</em>, <em>title</em>, <em>url</em> をセットしたものを作成します。</p>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<pre class="brush: js notranslate">const state = { 'page_id': 1, 'user_id': 5 }
const title = ''
const url = 'hello-world.html'

history.pushState(state, title, url)</pre>

<h3 id="Change_a_query_parameter" name="Change_a_query_parameter">クエリパラメーターの変更</h3>

<pre class="brush: js notranslate">const url = new URL(window.location);
url.searchParams.set('foo', 'bar');
window.history.pushState({}, '', url);</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "history.html#dom-history-pushstate", "History.pushState()")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>No change from {{SpecName("HTML5 W3C")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "history.html#dom-history-pushstate", "History.pushState()")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("api.History.pushState")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/History_API/Working_with_the_History_API">Working with the History API</a></li>
 <li><a href="/ja/docs/Web/API/Window/popstate_event">Window: popstate event</a></li>
</ul>
