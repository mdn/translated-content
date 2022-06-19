---
title: Navigator.registerProtocolHandler()
slug: Web/API/Navigator/registerProtocolHandler
tags:
  - API
  - DOM
  - DOM Reference
  - Method
  - Navigator
  - Reference
  - Web-Based Protocol Handlers
  - registerProtocolHandler
translation_of: Web/API/Navigator/registerProtocolHandler
---
<div>{{APIRef("HTML DOM")}}{{securecontext_header}}</div>

<p><span class="seoSummary"><strong>{{domxref("Navigator")}}</strong> の <code><strong>registerProtocolHandler()</strong></code> メソッドは、ウェブサイトが特定の URL スキーム (別名プロトコル) を開いたり処理したりする能力を登録することを可能にします。</span></p>

<p>例えば、この API はウェブメールサイトを <code>mailto:</code> の URL で開かせたり、 <abbr title="Voice over Internet Protocol, also called IP telephony">VoIP</abbr> サイトを <code>tel:</code> の URL で開かせたりします。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">navigator.registerProtocolHandler(<var>scheme</var>, <var>url</var>, <var>title</var>);
</pre>

<div class="note"><strong>注:</strong> 最近になって <code>navigator.registerProtocolHandler(<var>scheme</var>, <var>url</var>)</code> と更新されましたが、こちらに対応しているブラウザーは今のところありませx。</div>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>scheme</var></code></dt>
 <dd>サイトが処理したいプロトコルを指定する文字列。例えば、 <code>"sms"</code> スキームを渡すことで、SMS テキストメッセージリンクを扱うように登録することができます。</dd>
 <dt><code><var>url</var></code></dt>
 <dd>ハンドラーの URL を指定する文字列。この文字列には、処理される文書の URL をエスケープした者で置き換えられるプレイスホルダー "%s" を含めてください。この URL は本物の URL のほか、電話番号、メールアドレスなどにすることもできます。
 <div class="note"><strong>注:</strong> ハンドラー URL のスキームは <code>https</code> でなければなりません。ブラウザーによってはセキュリティのため、 HTTPS の URL であることを求めるため、<em>そうするべきです</em>。</div>
 </dd>
 <dt><code><var>title</var></code> {{Obsolete_Inline}}</dt>
 <dd>ハンドラーを表す人間が読めるタイトル文字列です。これは、「このサイトで [スキーム] リンクを扱うことを許可しますか？」というプロンプトや、ブラウザーの設定で登録されたハンドラーを一覧表示するなどの形で<strong>ユーザーに表示されます</strong>。
 <div class="note"><strong>注:</strong> タイトルはなりすましの懸念から仕様から削除されましたが、現在のすべてのブラウザーでは<strong>まだ必要とされています</strong>。更新された仕様に対応しているブラウザーはほとんどの場合、下位互換性があり、まだ受け付けている可能性が高いので、<strong>常にタイトルを設定</strong>しておくことをお勧めします (ただし、使用はしません)。</div>
 </dd>
</dl>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt>{{Exception("SecurityError")}}</dt>
 <dd>ユーザーエージェントが登録をブロックしました。以下のような場合に起こる可能性があります。</dd>
</dl>

<ul>
 <li>ブラウザーが独自に処理するスキーム (<code>https:</code>, <code>about:</code>, など) など、登録されているスキーム (プロトコル) が無効です。</li>
 <li>ハンドラーの URL の{{Glossary("origin", "オリジン")}}が、本 API を呼び出すページのオリジンと一致しない。</li>
 <li>ブラウザーが、この関数を安全なコンテキストから呼び出す必要がある。</li>
 <li>ブラウザーがハンドラーの URL が HTTPS 以上であることを要求している。</li>
</ul>

<dl>
 <dt>{{Exception("SyntaxError")}}</dt>
 <dd><code>%s</code> が指定されたハンドラー URL に含まれていない。</dd>
</dl>

<h2 id="Permitted_schemes" name="Permitted_schemes">許可されたスキーム</h2>

<p>セキュリティ上の理由により <code>registerProtocolHandler()</code> は登録可能なスキームに制限を設けています。</p>

<p><strong>カスタムスキーム</strong>は次のような場合に登録されます。</p>

<ul>
 <li>カスタムスキームの名前が <code>web+</code> で始まる</li>
 <li>カスタムスキームの名前が <code>web+</code> 接頭辞の後に1文字以上ある</li>
 <li>カスタムスキームの名前に小文字の ASCII 文字のみが含まれている</li>
</ul>

<p>例えば下の <a href="#example">例</a> で使われている <code>web+burger</code> などが挙げられます。</p>

<p>もしくは、以下のホワイトリストに挙げられているスキームでなければなりません。</p>

<div class="threecolumns">
<ul>
 <li><code>bitcoin</code></li>
 <li><code>geo</code></li>
 <li><code>im</code></li>
 <li><code>irc</code></li>
 <li><code>ircs</code></li>
 <li><code>magnet</code></li>
 <li><code>mailto</code></li>
 <li><code>mms</code></li>
 <li><code>news</code></li>
 <li><code>nntp</code></li>
 <li><code>openpgp4fpr</code></li>
 <li><code>sip</code></li>
 <li><code>sms</code></li>
 <li><code>smsto</code></li>
 <li><code>ssh</code></li>
 <li><code>tel</code></li>
 <li><code>urn</code></li>
 <li><code>webcal</code></li>
 <li><code>wtai</code></li>
 <li><code>xmpp</code></li>
</ul>
</div>

<h2 id="Example" name="Example">例</h2>

<p>ウェブアプリケーションが <code>burgers.example.com</code> にある場合、次のようにして <code>web+burger:</code> リンクを処理するプロトコルハンドラーを登録できます:</p>

<pre class="brush: js notranslate">navigator.registerProtocolHandler("web+burger",
                                  "https://burgers.example.com/?burger=%s",
                                  "Burger handler");
</pre>

<p>これは、 <code>web+burger:</code> リンクがアクセスしたバーガーの URL を <code>%s</code> プレースホルダーに挿入し、ユーザーをサイトに誘導するハンドラーを作成します。</p>

<p>このスクリプトはハンドラーの URL と同じオリジン (すなわち、 <code>https://burgers.example.com</code> にあるページのいずれか) から実行する必要があり、ハンドラーの URL は <code>http</code> または <code>https</code> である必要があります。</p>

<p>あなたのコードがプロトコルハンドラーを登録しようとしていることはユーザーに通知され、ユーザーは登録を許可するかどうか決めることができます。以下のスクリーンショットは <code>google.co.uk</code> での例です。</p>

<p><img alt="A browser notification reads “Add Burger handler (www.google.co.uk) as an application for burger links?”, and offers an “Add Application” button and a close to ignore the handler request." src="https://mdn.mozillademos.org/files/9683/protocolregister.png"></p>

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
   <td>{{SpecName('HTML WHATWG', 'system-state.html#custom-handlers', 'registerProtocolHandler()')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Living standard</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Navigator.registerProtocolHandler")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web-based_protocol_handlers">ウェブベースのプロトコルハンドラー</a></li>
 <li>Mozilla Webdev の <a href="http://blog.mozilla.com/webdev/2010/07/26/registerprotocolhandler-enhancing-the-federated-web/">RegisterProtocolHandler Enhancing the Federated Web</a></li>
</ul>
