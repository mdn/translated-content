---
title: Firefox 88 for developers
slug: Mozilla/Firefox/Releases/88
tags:
  - '88'
  - Firefox
  - Mozilla
  - Release
---
<p>{{FirefoxSidebar}}</p>

<p class="summary">このページでは、開発者に影響する Firefox 88 の変更点をまとめています。Firefox 88 は、米国時間 2021 年 4 月 19 日にリリースされました。</p>

<div class="note notecard">
  <h4>注記</h4>
  <p>Mozilla Hacks の <a href="https://hacks.mozilla.org/2021/04/never-too-late-for-firefox-88/">Never too late for Firefox 88</a> もご覧ください。</p>
</div>

<h2 id="Changes_for_web_developers" name="Changes_for_web_developers">ウェブ開発者向けの変更点一覧</h2>

<h3 id="Developer_Tools" name="Developer_Tools">開発者ツール</h3>

<ul>
  <li>生の応答ビューと整形済みの応答ビューを切り替えるボタンを実装しました ({{bug(1693147)}})。例えば、<a href="/ja/docs/Tools/Network_Monitor/request_details#response_tab">ネットワークリクエストの詳細 > 応答タブ</a> をご覧ください。</li>
</ul>

<h3 id="HTML" name="HTML">HTML</h3>

<p><em>変更なし。</em></p>

<h3 id="CSS" name="CSS">CSS</h3>

<ul>
  <li>{{cssxref(":user-valid")}} および {{cssxref(":user-invalid")}} 疑似クラスを実装しました ({{bug(1694141)}})。</li>
  <li>{{cssxref("image-set()")}} 関数表記を有効にしました ({{bug(1698133)}})。また、{{cssxref("content")}} および {{cssxref("cursor")}} で使用可能になりました ({{bug(1695402)}} および {{bug(1695403)}})。</li>
  <li>MacOS の既定の <code>monospace</code> フォントを Menlo に変更しました ({{bug(1342741)}})。</li>
  <li>{{cssxref("visibility")}} の値 <code>collapse</code> を、ルビに実装しました ({{bug(1697529)}})。</li>
  <li>{{cssxref("ruby-position")}} の値 <code>alternate</code> を実装して、プロパティの新たな初期値に設定しました ({{bug(1694748)}})。</li>
  <li>{{cssxref("outline")}} CSS プロパティを、{{cssxref("border-radius")}} で作成したアウトラインに従うように更新しました。この作業の一環で、非標準の {{cssxref("-moz-outline-radius")}} プロパティを削除しました。({{bug(315209)}} および {{bug(1694146)}}.)</li>
</ul>

<h4 id="removals_css" name="removals_css">廃止</h4>

<ul>
  <li>{{cssxref(":-moz-submit-invalid")}} 疑似クラスを設定項目で無効化したため、ウェブコンテンツで使用できなくなりました ({{bug(1694129)}})。</li>
  <li>非標準の {{cssxref(":-moz-ui-invalid")}} および {{cssxref(":-moz-ui-valid")}} の、既定のスタイルを削除しました ({{bug(1693969)}})。</li>
</ul>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<ul>
  <li><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec">RegExp match indices</a> をサポートしました ({{bug(1519483)}})。</li>
  <li><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames"><code>Intl.DisplayNames()</code></a> および <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat"><code>Intl.ListFormat()</code></a> で、コンストラクターに渡す <code>options</code> が <a href="/ja/docs/Learn/JavaScript/Objects">オブジェクト</a> であるかを厳密に確認して、文字列や他のプリミティブ値を使用した場合に例外が発生するようになりました ({{bug(1696881)}})。</li>
</ul>

<h3 id="HTTP" name="HTTP">HTTP</h3>

<ul>
  <li>Firefox 90 で FTP を完全に削除するため、すべてのリリースで FTP を無効にしました (設定項目 <code>network.ftp.enabled</code> の既定値を <code>false</code> にします) ({{bug(1691890)}})。この変更に伴って拡張機能の設定 <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/ftpProtocolEnabled">browserSettings.ftpProtocolEnabled</a></code> が読み取り専用になり、ブラウザー拡張機能が自身を FTP の <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers">プロトコルハンドラー</a> として登録できるようになります ({{bug(1626365)}})。</li>
</ul>

<h3 id="Security" name="Security">セキュリティ</h3>

<p><em>変更なし。</em></p>

<h3 id="APIs" name="APIs">API</h3>

<h4 id="DOM" name="DOM">DOM</h4>

<ul>
  <li>すでに <a href="/ja/docs/Web/API/AbortSignal/aborted"><code>aborted</code></a> が設定されている {{domxref("AbortSignal")}} を返す静的メソッド <a href="/ja/docs/Web/API/AbortSignal/abort"><code>AbortSignal.abort()</code></a> が使用可能になりました ({{bug(1698468)}}).</li>
</ul>

<h3 id="webdriver_conformance_marionette" name="webdriver_conformance_marionette">WebDriver conformance (Marionette)</h3>

<ul>
  <li><code>--marionette</code> コマンドライン引数または <code>MOZ_MARIONETTE</code> 環境変数が指定されていなければ、Marionette が有効にならないようになりました。よって、設定項目 <code>marionette.enabled</code> を使用しなくなりました。この変更に伴って、<code>navigator.webdriver</code> の状態が、Marionette の有効状態を正しく反映するようになりました ({{bug(1593343)}})。</li>
  <li><code>down</code> および <code>up</code> 以外のポインターアクションが、不適切にボタンを押す結果になっていた不具合を修正しました ({{bug(1686361)}})。</li>
  <li><code>WebDriver:GetCurrentURL</code> で競合状態が発生して、コマンドが過去に開いたページの URL を返したり、Marionette がハングアップしたりする不具合を修正しました ({{bug(1664881)}})。</li>
</ul>

<h2 id="Changes_for_add-on_developers" name="Changes_for_add-on_developers">アドオン開発者向けの変更点</h2>

<ul>
  <li>{{WebExtAPIRef("tabs.onUpdated")}} イベントが発生するプロパティを制限するために、<code>url</code> を使用できるようになりました ({{bug(1680279)}})。</li>
</ul>

<h2 id="Older_versions" name="Older_versions">過去のバージョン</h2>

<p>{{Firefox_for_developers(87)}}</p>