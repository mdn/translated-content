---
title: Firefox 82 for developers
slug: Mozilla/Firefox/Releases/82
tags:
  - '82'
  - Firefox
  - Mozilla
  - Release
translation_of: Mozilla/Firefox/Releases/82
---
<p>{{FirefoxSidebar}}</p>

<p class="summary">このページでは、開発者に影響する Firefox 82 の変更点をまとめています。Firefox 82 は、2020 年 10 月 20 日にリリースされました。</p>

<div class="blockIndicator note">
<p class="summary"><strong>注記</strong>: Mozilla Hacks の <a href="https://hacks.mozilla.org/2020/10/coming-through-with-firefox-82/">Coming through with Firefox 82</a> もご覧ください。</p>
</div>

<h2 id="Changes_for_web_developers" name="Changes_for_web_developers">ウェブ開発者向けの変更点一覧</h2>

<h3 id="Developer_Tools" name="Developer_Tools">開発者ツール</h3>

<ul>
 <li><a href="/ja/docs/Tools/Network_Monitor">ネットワークモニター</a> を使用して <a href="/ja/docs/Tools/Network_Monitor/Inspecting_server-sent_events">server-sent events を調査できる</a> ようになりました ({{bug(1640857)}})。</li>
 <li>ネットワークモニターの<em>メッセージ</em>パネルを<em>応答</em>パネルに統合しました。メッセージ (例えば WebSockets や server-sent events) を応答の一覧で確認できます ({{bug(1636421)}})。</li>
</ul>

<h3 id="HTML" name="HTML">HTML</h3>

<ul>
 <li><code><a href="/ja/docs/Web/HTML/Element/input/color">&lt;input type="color"&gt;</a></code> で使用するカラーピッカーが、キーボードで操作可能になりました ({{bug(1526820)}})。</li>
 <li><code><a href="/ja/docs/Web/HTML/Element/iframe">&lt;iframe sandbox&gt;</a></code> 属性の <code>allow-downloads</code> フラグをサポートしました ({{bug(1656212)}})。</li>
</ul>

<h3 id="CSS" name="CSS">CSS</h3>

<ul>
 <li>{{CSSxRef("::file-selector-button", "::file-selector-button")}} 疑似要素を新たにサポートしました。この疑似要素は、<a href="/ja/docs/Web/HTML/Element/input/file"><code>&lt;input type="file"&gt;</code></a> 要素の内部にあるファイル選択ボタンを表します ({{bug(1635675)}}, {{bug(1662478)}})。</li>
 <li>{{CSSxRef(":is", ":is()")}} および {{CSSxRef(":where", ":where()")}} 疑似クラスのエラー回復を改良しました。これらの疑似クラスは寛容なセレクターリストを受け入れるようになり、リスト内に無効なセレクターがあってもリスト全体が無効にはなりません ({{bug(1664718)}})。</li>
 <li><code>appearance: button</code> をボタンのみに適用するようになりました。従って、{{CSSxRef("appearance")}} の値 <code>button</code> は <code>auto</code> のように動作します ({{bug(1662703)}})。</li>
</ul>

<h4 id="Removals" name="Removals">廃止</h4>

<ul>
 <li>独自仕様である <code><a href="/ja/docs/Web/CSS/:-moz-user-disabled">:-moz-user-disabled</a></code> 疑似クラスを削除しました ({{bug(1664432)}})。</li>
</ul>

<h3 id="HTTP" name="HTTP">HTTP</h3>

<ul>
 <li>HTML <a href="/ja/docs/Web/HTML/Element/a"><code>&lt;a&gt;</code></a> 要素で <code>download</code> 属性が設定されている場合 (<a href="/ja/docs/Web/Security/Same-origin_policy">同一オリジンの URL</a>) に、<code><a href="/ja/docs/Web/HTTP/Headers/Content-Disposition">Content-Disposition</a></code> ヘッダーの <code>inline</code> ディレクティブが無視されるようになりました。<code>Content-Disposition</code> ヘッダーの <code>filename</code> を設定すると、<code>download</code> 属性で指定したファイル名より優先して使用されますので注意してください ({{bug(1658877)}})。</li>
</ul>

<h3 id="APIs" name="APIs">API</h3>

<h4 id="New_APIs" name="New_APIs">新規 API</h4>

<ul>
 <li><a href="/ja/docs/Web/API/Media_Session_API">Media Session API</a> をデフォルトで有効にしました ({{bug(1665496)}})。</li>
</ul>

<h4 id="DOM" name="DOM">DOM</h4>

<ul>
 <li><code><a href="/ja/docs/Web/API/Document/execCommand">Document.execCommand()</a></code> の入れ子または再帰的な呼び出しのサポートを廃止して、<code>false</code> が返るようになりました ({{bug(1634262)}})。</li>
 <li><a href="https://w3c.github.io/pointerevents/#setting-pointer-capture">仕様書</a> に従って、<code><a href="/ja/docs/Web/API/Element/setPointerCapture">Element.setPointerCapture()</a></code> でポインターの <code>id</code> が無効である場合に <code>NotFoundError</code> 例外が発生するようになりました ({{bug(1662124)}})。以前は誤って <code>InvalidPointerId</code> 例外が発生していました。</li>
 <li>タブで別のドメインからページを読み込んだときに <code><a href="/ja/docs/Web/API/Window/name">window.name</a></code> プロパティを空文字列リセットして、元のページが (例えば "戻る" ボタンで) 再読み込みされたときに復元するようになりました。これは信頼されないページが、前のページが変数に保存していた可能性がある情報にアクセスすることを防ぎます。この変更は、ドメイン間のメッセージ送信に <code>window.name</code> を使用するフレームワークに影響があります ({{bug(444222)}})。</li>
</ul>

<h3 id="WebDriver_conformance_Marionette" name="WebDriver_conformance_Marionette">WebDriver conformance (Marionette)</h3>

<ul>
 <li>より現実的なユーザーナビゲーションをシミュレートするため、サポートされるすべてのナビゲーションコマンドを親プロセスに移動しました ({{bug(1612831)}})。</li>
 <li>WebDriver 仕様書との適合性を向上させるため、すべてのコマンドで現在またはトップレベルのブラウジングコンテキストの確認を更新しました ({{bug(1493108)}})。</li>
 <li><code>WebDriver:ElementClick</code> で、click イベントが実際に合成される前にコマンドが返る場合がある不具合を修正しました ({{bug(1394354)}})。</li>
</ul>

<h2 id="Changes_for_add-on_developers" name="Changes_for_add-on_developers">アドオン開発者向けの変更点</h2>

<ul>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureTab">tabs.captureTab()</a></code> および <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureVisibleTab">tabs.captureVisibleTab()</a></code> メソッドで、与えた <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/extensionTypes/ImageDetails">options</a></code> オブジェクトの <code>rect</code> プロパティで関連するタブのコンテンツ領域を取得する、あるいはオブジェクトを与えない場合にタブで見えている領域を取得することが可能になりました ({{bug(1636508)}})。以前は <code>rect</code> プロパティが使用できず、これらのメソッドは常に関連するタブで見ている領域を取得していました。</li>
</ul>

<h2 id="Older_versions" name="Older_versions">過去のバージョン</h2>

<p>{{Firefox_for_developers(81)}}</p>
