---
title: Firefox 66 for developers
slug: Mozilla/Firefox/Releases/66
tags:
  - '66'
  - Firefox
  - Mozilla
  - Release
translation_of: Mozilla/Firefox/Releases/66
---
<p>{{FirefoxSidebar}}</p>

<p class="summary">Firefox 66 は、米国時間 2019 年 3 月 19 日 にリリースされました。このページでは、開発者に影響する Firefox 66 の変更点をまとめています。</p>

<h2 id="Changes_for_web_developers" name="Changes_for_web_developers">ウェブ開発者向けの変更点一覧</h2>

<h3 id="Developer_Tools" name="Developer_Tools">開発者ツール</h3>

<ul>
 <li><a href="/ja/docs/Tools/Web_Console">ウェブコンソール</a> のオートコンプリートのポップアップから、JavaScript の getter を実行できるようになりました ({{bug(1499289)}})。</li>
 <li><a href="/ja/docs/Tools/Responsive_Design_Mode">レスポンシブデザインモード</a> で動作しなくなっていた、Window の {{domxref("Window.alert()", "alert()")}}、{{domxref("Window.prompt()","prompt()")}}、{{domxref("Window.confirm()","confirm()")}} メソッドが再び動作するようになりました ({{bug(1273997)}})。</li>
 <li>コンソールの出力を右クリックして "<strong>表示メッセージをクリップボードにエクスポートする</strong>" を選択すると、コンソールの出力をクリップボードにコピーできます。</li>
</ul>

<h3 id="HTML" name="HTML">HTML</h3>

<ul>
 <li><code>file:</code> URL から読み込んだ UTF-8 エンコードされた HTML (およびプレーンテキスト) ファイルについて、<code>&lt;meta charset="utf-8"&gt;</code> または UTF-8 BOM がないものもサポートしました。このようなファイルをサーバーにアップロードする前に、ローカル環境で作業しやすくするためです。サーバーでは、このようなファイルに <code>Content-Type</code> HTTP ヘッダーで <code>charset=utf-8</code> を送信しなければなりません。ローカルファイルで使用する検出方法は、ネットワーク環境の逐次読み込みで問題が発生します ({{bug(1071816)}})。</li>
</ul>

<h4 id="Removals" name="Removals">廃止</h4>

<ul>
 <li>{{HTMLElement("input")}} 要素から <code>x-moz-errormessage</code> 属性を削除しました ({{bug(1513890)}})。独自の検証メッセージを実装するには、代わりに {{domxref("Constraint_validation", "Constraint validation 機能", "", "1")}} を使用してください。</li>
</ul>

<h3 id="CSS" name="CSS">CSS</h3>

<ul>
 <li><a href="https://drafts.csswg.org/css-scroll-anchoring/">Scroll anchoring</a> を、デスクトップ版 Firefox に実装しました (モバイル版は未実装です)。{{cssxref("overflow-anchor")}} プロパティを含みます ({{bug(1305957)}})。</li>
 <li><a href="/ja/docs/Web/CSS/Attribute_selectors">属性セレクター</a> で、大文字・小文字の区別に関する修飾子 <code>s</code> をサポートしました ({{Bug(1512386)}})。</li>
 <li>いくつかの <a href="/ja/docs/Web/CSS/CSS_Logical_Properties">論理的プロパティ</a> ショートハンドと、フローに関係する border radius プロパティを実装しました:
  <ul>
   <li>{{cssxref("padding-block")}} および {{cssxref("padding-inline")}} ({{bug(1519847)}})。</li>
   <li>{{cssxref("margin-block")}} および {{cssxref("margin-inline")}} ({{bug(1519944)}})。</li>
   <li>{{cssxref("inset")}}、{{cssxref("inset-block")}}、{{cssxref("inset-inline")}} ({{bug(1520229)}})。</li>
   <li>{{cssxref("border-block-color")}}、{{cssxref("border-block-style")}}、{{cssxref("border-block-width")}}、{{cssxref("border-inline-color")}}、{{cssxref("border-inline-style")}}、{{cssxref("border-inline-width")}} ({{bug(1520236)}})。</li>
   <li>{{cssxref("border-block")}}、{{cssxref("border-inline")}} ({{bug(1520396)}})。</li>
   <li>{{cssxref("border-start-start-radius")}}、{{cssxref("border-start-end-radius")}}、{{cssxref("border-end-start-radius")}}、{{cssxref("border-end-end-radius")}} ({{bug(1520684)}})。</li>
  </ul>
 </li>
 <li>{{cssxref("@media/overflow-inline", "overflow-inline")}} および {{cssxref("@media/overflow-block", "overflow-block")}} メディアクエリーを実装しました ({{Bug(1422235)}})。</li>
 <li>仕様書で公表された規則に従って、{{cssxref("grid-template-columns")}} および {{cssxref("grid-template-rows")}} のアニメーションを実装しました ({{Bug(1348519)}})。</li>
 <li>テーブルのセルや列の幅で、パーセンテージを使用した {{cssxref("calc")}} をサポートしました ({{bug(957915)}})。</li>
 <li><code>min-content</code> および <code>max-content</code> キーワードが、接頭辞なしで使用可能になりました ({{bug(1322780)}})。これらは以下のプロパティに設定できます:
  <ul>
   <li>{{cssxref("width")}}</li>
   <li>{{cssxref("height")}}</li>
   <li>{{cssxref("flex-basis")}}</li>
   <li>{{cssxref("min-width")}}</li>
   <li>{{cssxref("max-width")}}</li>
   <li>{{cssxref("min-height")}}</li>
   <li>{{cssxref("max-height")}}</li>
   <li>{{cssxref("min-block-size")}}</li>
   <li>{{cssxref("min-inline-size")}}</li>
   <li>{{cssxref("max-block-size")}}</li>
   <li>{{cssxref("max-inline-size")}}</li>
   <li>{{cssxref("block-size")}}</li>
   <li>{{cssxref("inline-size")}}</li>
  </ul>
 </li>
</ul>

<h3 id="SVG" name="SVG">SVG</h3>

<p><em>変更なし。</em></p>

<h4 id="Removals_2" name="Removals_2">廃止</h4>

<ul>
 <li><code><a href="/ja/docs/XML_introduction/xml:base">xml:base</a></code> 属性のサポートを廃止しました ({{Bug(903372)}})。</li>
</ul>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<p><em>変更なし。</em></p>

<h3 id="APIs" name="APIs">API</h3>

<h4 id="New_APIschanges" name="New_APIschanges">API の追加と変更</h4>

<ul>
 <li>Release 版の Firefox 66 を公開した後すみやかに、音声の自動再生がデフォルトでブロックされます ({{bug(1487844)}}。ロールアウトについては {{bug(1535667)}} をご覧ください)。この機能は、すべてのユーザーへ段階的に適用されます。</li>
</ul>

<h4 id="DOM" name="DOM">DOM</h4>

<ul>
 <li>{{domxref("HTMLSlotElement.assignedElements()")}} メソッドを実装しました ({{bug(1425685)}})。</li>
 <li>{{domxref("TextEncoder.encodeInto()")}} メソッドを実装しました ({{bug(1514664)}})。</li>
</ul>

<h4 id="DOM_events" name="DOM_events">DOM イベント</h4>

<ul>
 <li>{{domxref("InputEvent.inputType")}} プロパティを実装しました ({{bug(1447239)}})。</li>
 <li>{{domxref("Window.event")}} および {{domxref("Event.returnValue")}} プロパティ (元は IE の独自機能であり、互換性の理由でほかのブラザーもサポートしました) を、Firefox 66 で再導入しました。それぞれバージョン 63 や 64 で追加した後、互換性の問題で再び削除していました。</li>
 <li>バージョン 66 より、{{event("keypress")}} イベントオブジェクトの {{domxref("KeyboardEvent.keyCode")}} プロパティが 0 であるとき、値が {{domxref("KeyboardEvent.charCode")}} と同じになります。逆に <code>charCode</code> が 0 であるときは、<code>keyCode</code> と同じ値になります。このミラーリング動作はほかのブラウザーと一致しており、これに関連する互換性の問題のほとんどが解決すると思われます。ただし 一部の JavaScript ライブラリーで、ブラウザー検出によって新たな問題が発生する可能性があります。仕様書の用語では、<em>split model</em> から <em>conflated model</em> に切り替えました (UI Event 仕様書の <a href="https://w3c.github.io/uievents/#determine-keypress-keyCode">How to determine keyCode for keypress events</a> をご覧ください)。</li>
</ul>

<h4 id="Media_Web_Audio_and_WebRTC" name="Media_Web_Audio_and_WebRTC">メディア、Web Audio、WebRTC</h4>

<ul>
 <li>新しい <a href="/ja/docs/Web/Media/Formats/Video_codecs#AV1">AV1 動画コーデック</a> を macOS および Windows (Intel プロセッサー用) で、デフォルトで有効にしました。Linux は Firefox 67 でサポートする予定です ({{bug(1521181)}}、{{bug(1452146)}}、{{bug(1534814)}})。</li>
 <li>{{domxref("MediaDevices")}} の {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} メソッド (<code>navigator.mediaDevices.getDisplayMedia()</code> として使用可能) を追加して、仕様書に一致させました。このメソッドは、スクリーンまたはスクリーンの一部を {{domxref("MediaStream")}} として取得して、操作または共有できます ({{bug(1321221)}})。</li>
 <li>スクリーンやウィンドウの内容を取得するための、Firefox 独自の {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} に基づくメソッドを最終的に非推奨にする取り組みの一部として、非標準の <code>mediaSource</code> 定数を値 <code>screen</code> および <code>window</code> と同等に扱うようになりました。どちらも、ユーザーが選択するスクリーンやウィンドウのリストを提供します ({{bug(1474376)}})。</li>
 <li>ローカル出力の {{domxref("RTCRTPStreamStats")}} オブジェクトに {{domxref("RTCRtpStreamStats.qpSum", "qpSum")}} を追加しました。これは、ビデオトラックで送受信するすべてのフレームの量子化パラメーターの合計を表します。この値が高ければ、ストリームはより圧縮されていると考えられます ({{bug(1347070)}})。</li>
 <li>将来の Firefox で Feature Policy をサポートするための取り組みで、コンテンツに適切なオリジンが存在しない状況では {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} を使用できなくなりました。例えばサンドボックス化された {{HTMLElement("iframe")}}、ユーザーがアドレスバーに入力した <code>data</code> URL から呼び出した場合です。詳しくは {{SectionOnPage("/ja/docs/Web/API/MediaDevices/getUserMedia", "Security")}} をご覧ください ({{bug(1371741)}})。</li>
</ul>

<h4 id="Removals_3" name="Removals_3">廃止</h4>

<ul>
 <li>WebRTC の古い {{domxref("PeerConnection.getStats()")}} メソッドと、これに関連付けられた型を削除しました ({{bug(1328194)}})。</li>
</ul>

<h3 id="Networking" name="Networking">ネットワーク</h3>

<ul>
 <li>{{httpheader("Accept")}} ヘッダーの既定値が <code>*/*</code> になりました ({{bug(1417463)}})。</li>
</ul>

<h3 id="Security" name="Security">セキュリティ</h3>

<p><em>変更なし。</em></p>

<h3 id="Plugins" name="Plugins">プラグイン</h3>

<p><em>変更なし。</em></p>

<h3 id="WebDriver_conformance_(Marionette)" name="WebDriver_conformance_(Marionette)">WebDriver conformance (Marionette)</h3>

<h4 id="API_changes" name="API_changes">API の変更点</h4>

<ul>
 <li>新しいブラウジングコンテキストを開く操作をサポートするため <code>WebDriver:NewWindow</code> を追加しました。ウィンドウまたはタブのいずれかを開くことができます ({{bug(1504756)}})。</li>
 <li>指定した要素が現在のブラウジングコンテキストに含まれていない場合に、<code>WebDriver:SwitchToFrame</code> で <code>no such element</code> エラーが発生するようになりました ({{bug(1517196)}})。</li>
 <li><code>WebDriver:ExecuteScript</code> および <code>WebDriver:ExecuteAsyncScript</code> が、仕様書に準拠しない <code>scriptTimeout</code> 引数をサポートしないようになりました。代わりに <code>WebDriver:SetTimeout</code> または <code>timeouts</code> 機能を使用してください ({{bug(1510929)}})。
  <ul>
   <li>さらに、不定のスクリプトタイムアウトをサポートしました ({{bug(1128997)}})。</li>
  </ul>
 </li>
 <li><code>WebDriver:SetWindowRect</code> が、応答でウィンドウの状態を返さないようになりました ({{bug(1517587)}})。</li>
</ul>

<h4 id="Bug_fixes" name="Bug_fixes">バグ修正</h4>

<ul>
 <li><code>WebDriver:TakeScreenshot</code> が、ビューポートの寸法に代わって {{domxref("Document.documentElement")}} の {{domxref("Element.clientWidth")}} および {{domxref("Element.clientHeight")}} プロパティを使用するようになりました ({{bug(1385706)}})。</li>
 <li>ウィンドウ操作コマンドがプラットフォームをまたいで確かに動作するようにするため、さまざまな修正を行いました ({{bug(1522408)}}, {{bug(1478358)}}, {{bug(1489955)}})。</li>
</ul>

<h2 id="Changes_for_add-on_developers" name="Changes_for_add-on_developers">アドオン開発者向けの変更点</h2>

<h3 id="API_changes_2" name="API_changes_2">API の変更点</h3>

<h4 id="Menus" name="Menus">メニュー</h4>

<ul>
 <li>{{WebExtAPIRef("menus.ContextType", "type")}} が "bookmark" である拡張機能のメニュー項目が、ブックマークサイドバー (<kbd>Ctrl</kbd> + <kbd>B</kbd>) およびライブラリーウィンドウ (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd>) にも表示されるようになりました ({{bug(1419195)}})。</li>
</ul>

<h3 id="Manifest_changes" name="Manifest_changes">マニフェストの変更点</h3>

<p><em>変更なし。</em></p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://www.mozilla.org/en-US/firefox/66.0/releasenotes/">Firefox 66.0, See All New Features, Updates and Fixes</a></li>
</ul>

<h2 id="Older_versions" name="Older_versions">過去のバージョン</h2>

<p>{{Firefox_for_developers(65)}}</p>
