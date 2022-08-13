---
title: Firefox 81 for developers
slug: Mozilla/Firefox/Releases/81
tags:
  - '81'
  - Firefox
  - Mozilla
  - Release
translation_of: Mozilla/Firefox/Releases/81
---
<p>{{FirefoxSidebar}}</p>

<p class="summary">このページでは、開発者に影響する Firefox 81 の変更点をまとめています。Firefox 81 は 2020 年 9 月 22 日にリリースされました。</p>

<h2 id="Changes_for_web_developers" name="Changes_for_web_developers">ウェブ開発者向けの変更点一覧</h2>

<h3 id="Developer_Tools" name="Developer_Tools">開発者ツール</h3>

<ul>
 <li><a href="/ja/docs/Tools/Debugger">デバッガー</a> で、<code>.ts</code> および <code>.tsx</code> ファイルに対して TypeScript のアイコンを使用するようになりました ({{bug(1642769)}})。以前は汎用ファイルのアイコンを使用していました。</li>
 <li><a href="/ja/docs/Tools/Debugger/UI_Tour#Source_pane">デバッガーのソースペイン</a> で行の折り返しをサポートしました ({{bug(1590885)}})。</li>
 <li><a href="/ja/docs/Tools/Accessibility_inspector">アクセシビリティインスペクター</a> から、不必要な <a href="/ja/docs/Tools/Accessibility_inspector/Simulation">色覚シミュレーション</a> (1 型 3 色覚、2 型 3 色覚、3 型 3 色覚) を削除して、1 色覚 (全色盲) のシミュレーションを追加しました ({{bug(1655053)}})。</li>
 <li><a href="/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#Viewing_and_changing_classes_on_an_element">要素にクラスを追加する</a> 際のオートコンプリートをサポートしました。文書内にあるクラスに基づいて、クラスを提案します ({{bug(1492797)}})。</li>
</ul>

<h3 id="HTML" name="HTML">HTML</h3>

<ul>
 <li>サンドボックス化された <code><a href="/ja/docs/Web/HTML/Element/iframe">&lt;iframe&gt;</a></code> 要素で、自動ダウンロードをブロックするようになりました ({{bug(1558394)}})。</li>
</ul>

<h4 id="Removals" name="Removals">廃止</h4>

<ul>
 <li>非標準の <code>mozallowfullscreen</code> 属性を、<code><a href="/ja/docs/Web/HTML/Element/iframe">&lt;iframe&gt;</a></code> から削除しました。代わりに <code>allow="fullscreen"</code> を検討してください ({{bug(1657599)}})。</li>
</ul>

<h3 id="CSS" name="CSS">CSS</h3>

<ul>
 <li>{{CSSxRef("overflow")}} プロパティの値 <code>overflow:-moz-hidden-unscrollable</code> を改名して、値 <code>clip</code> をサポートしました ({{bug(1531609)}})。</li>
 <li>仕様書に合わせて、{{CSSxRef("text-combine-upright")}} プロパティをアニメーション不可にしました ({{bug(1654195)}})。</li>
</ul>

<h4 id="Removals_2" name="Removals_2">廃止</h4>

<ul>
 <li>非標準の {{CSSxRef("::-moz-focus-outer")}} <a href="/ja/docs/Web/CSS/Pseudo-elements">疑似要素</a> を削除しました ({{bug(1655859)}})。</li>
</ul>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<p><em>変更なし。</em></p>

<h3 id="HTTP" name="HTTP">HTTP</h3>

<ul>
 <li>Firefox で、空白を含むクォートされていないファイル名を持つ非標準の <code><a href="/ja/docs/Web/HTTP/Headers/Content-Disposition">Content-Disposition</a></code> ヘッダーを受け入れるようになりました ({{bug(1440677)}})。</li>
 <li>Firefox で HTTP <code><a href="/ja/docs/Web/HTTP/Headers/Feature-Policy">Feature-Policy</a></code> ヘッダーの <code><a href="/ja/docs/Web/HTTP/Headers/Feature-Policy/web-share">web-share</a></code> ディレクティブをサポートしました。これは、<a href="/ja/docs/Web/API/Navigator/share">Web Share API</a> へのアクセスを信頼されたオリジンに制限するために使用できます。現時点で Firefox は Web Share API 自体をサポートしていないことに注意してください ({{bug(1653199)}})。</li>
</ul>

<h3 id="APIs" name="APIs">API</h3>

<h4 id="Gamepad" name="Gamepad">ゲームパッド</h4>

<ul>
 <li>ゲームパッドのジョイスティックがアクティブになるしきい値を上げました。これにより、アイドル時に小さな軸の値を送信するコントローラーや、ごく小さな打撃によって意図せずゲームパッドがアクティブになる可能性を減らします。({{bug(1539178)}})</li>
</ul>

<h4 id="WorkersService_workers" name="WorkersService_workers">Workers/Service workers</h4>

<ul>
 <li>worker や shared worker のスクリプトで、厳格な MIME タイプの確認を強制するようになりました。すなわち {{domxref("Worker.Worker()", "Worker()")}} や {{domxref("SharedWorker.SharedWorker()", "SharedWorker()")}} コンストラクターの対象になるスクリプトは <code>text/javascript</code> で提供しなければなりません ({{bug(1523706)}})。</li>
</ul>

<h3 id="WebDriver_conformance_Marionette" name="WebDriver_conformance_Marionette">WebDriver conformance (Marionette)</h3>

<ul>
 <li><code>setWindowRect</code> 機能の既定値が、すべてのデスクトップアプリケーション (Thunderbird を含む) で <code>true</code> に、Android の GeckoView で <code>false</code> になりました ({{bug(1650872)}})。</li>
 <li>以下のコマンドで Fission をサポートしました: <code>WebDriver:SwitchToFrame</code>、<code>WebDriver:SwitchToParentFrame</code>、<code>WebDriver:GetCurrentURL</code>。すべての Fission 互換コマンドは、<code>marionette.actors.enabled</code> が <code>true</code> に設定されている場合に限って利用できます。</li>
 <li>新しいウィンドウを開いた後、ブラウジングコンテキストの監視が破損する問題を修正しました ({{bug(1661495)}})。</li>
 <li><code>WebDriver:SwitchToWindow</code> が失敗したとき、統一された <code>NoSuchWindowError</code> が常に返るようになりました ({{bug(1663429)}})。</li>
</ul>

<h4 id="Removals_3" name="Removals_3">廃止</h4>

<ul>
 <li>WebDriver 仕様書に含まれておらず、またすでに使用されていない <code>WebDriver:GetActiveFrame</code> を削除しました ({{bug(1659502)}})。</li>
</ul>

<h2 id="Changes_for_add-on_developers" name="Changes_for_add-on_developers">アドオン開発者向けの変更点</h2>

<ul>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF">tabs.saveAsPDF()</a></code> を macOS でサポートしました ({{bug(1653354)}})。</li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation/getFrame">webNavigation.getFrame()</a></code> および <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation/getAllFrames">webNavigation.getAllFrames()</a></code> の動作を変更しました。次のページへ進んでタブが破棄されたとき、promise が <code>null</code> 値で解決します ({{bug(1654842)}})。</li>
</ul>

<h2 id="Older_versions" name="Older_versions">過去のバージョン</h2>

<p>{{Firefox_for_developers(80)}}</p>
