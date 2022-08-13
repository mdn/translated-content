---
title: Firefox 75 for developers
slug: Mozilla/Firefox/Releases/75
tags:
  - '75'
  - Firefox
  - Mozilla
  - Release
translation_of: Mozilla/Firefox/Releases/75
---
<p>{{FirefoxSidebar}}</p>

<p class="summary">Firefox 75 は、米国時間 2020 年 4 月 7 日にリリースされました。このページでは、開発者に影響する Firefox 75 の変更点をまとめています。</p>

<p class="summary"><strong>付随する hacks ブログの記事「<a href="https://hacks.mozilla.org/2020/04/firefox-75-ambitions-for-april/">Firefox 75: Ambitions for April</a>」もご覧ください。</strong></p>

<h2 id="Changes_for_web_developers" name="Changes_for_web_developers">ウェブ開発者向けの変更点一覧</h2>

<h3 id="Developer_Tools" name="Developer_Tools">開発者ツール</h3>

<ul>
 <li><a href="/ja/docs/Tools/Measure_a_portion_of_the_page">測定ツール</a> で長方形のリサイズが可能になりました ({{bug(1152321)}})。</li>
 <li><a href="/ja/docs/Tools/Page_Inspector">インスペクター</a> で、以前から使用できていた CSS セレクターに加えて、<a href="/ja/docs/Web/XPath">XPath</a> の式を使用して要素を示すことが可能になりました ({{bug(963933)}})。</li>
 <li>プレーンテキストによる検索に加えて、スラッシュの間に <a href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions">正規表現</a> を記述することで <a href="/ja/docs/Web/API/WebSockets_API">WebSocket</a> メッセージをフィルタリングできるようになりました ({{bug(1593837)}})。</li>
</ul>

<h3 id="HTML" name="HTML">HTML</h3>

<ul>
 <li>{{HTMLElement("img")}} 要素の {{htmlattrxref("loading", "img")}} 属性を実装しました。この文字列値は <code>lazy</code> を設定することで、画像を <a href="/ja/docs/Web/Performance/Lazy_loading">遅延読み込み</a> するべきであると示します ({{bug(1542784)}})。</li>
 <li><code><a href="/ja/docs/Web/HTML/Element/style">&lt;style&gt;</a></code> 要素の <code>type</code> 属性の値を、仕様書に従って <code>text/css</code> のみに限定しました ({{bug(1614329)}})。</li>
</ul>

<h3 id="CSS" name="CSS">CSS</h3>

<ul>
 <li>{{cssxref("min")}}、{{cssxref("max")}}、{{cssxref("clamp")}} 関数を実装しました ({{bug(1519519)}})。</li>
 <li>{{cssxref("text-decoration-skip-ink")}} プロパティの値 <code>all</code> を追加しました ({{bug(1611965)}})。</li>
</ul>

<h3 id="Accessibility" name="Accessibility">アクセシビリティ</h3>

<p><a href="/ja/docs/Web/Accessibility/ARIA/Annotations">ARIA annotations</a> に関する新しいロールやオブジェクトを、Windows および Linux の Firefox で公開しました (これらはスクリーンリーダーがサポートするまで使用できないことを覚えておいてください):</p>

<ul>
 <li><code>aria-description</code> ({{bug(1608961)}})</li>
 <li><code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Mark_role">role="mark"</a></code> および <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Suggestion_role">role="suggestion"</a></code> ({{bug(1608965)}})</li>
 <li><code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Comment_role">role="comment"</a></code> ({{bug(1608969)}})</li>
 <li><code>aria-details</code> で複数の ID ({{bug(1608883)}})</li>
</ul>

<div class="blockIndicator note">
<p><strong>注記</strong>: macOS では、はじめに Apple が Safari で Apple 方式の属性として VoiceOver へ公開するものを定義することを待っており、それらに一式に従う計画です。</p>
</div>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Classes/Class_fields#Public_static_fields">Public static class fields</a> をサポートしました ({{bug(1535804)}})。</li>
 <li><code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Locale">Intl.Locale</a></code> クラスをサポートしました ({{bug(1613713)}})。</li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/caller"><code>Function.caller</code></a> プロパティを、最新の <a href="https://github.com/claudepache/es-legacy-function-reflection">ECMAScript 仕様の提案</a> に合わせて更新しました。呼び出し元が strict、async、あるいは generator 関数であった場合に、以前は <code>TypeError</code> が発生していましたが、<code>null</code> を返すようになりました ({{bug(1610206)}})。</li>
</ul>

<h3 id="APIs" name="APIs">API</h3>

<h4 id="DOM" name="DOM">DOM</h4>

<ul>
 <li>{{domxref("HTMLFormElement")}} インターフェイスへ新たに {{domxref("HTMLFormElement.requestSubmit", "requestSubmit()")}} メソッドを追加しました。古い (現在も使用できる) {{domxref("HTMLFormElement.submit", "submit()")}} メソッドとは異なり、<code>requestSubmit()</code> はフォームのデータを宛先に送信するだけでなく、指定した送信ボタンがクリックされたかのように動作します。よって {{domxref("HTMLFormElement.submit_event", "submit")}} イベントが発生して、フォームはデータを送信する前に妥当性のチェックを受けます ({{bug(1613360)}})。</li>
 <li>{{domxref("HTMLFormElement.submit_event", "submit")}} イベントが単なる {{domxref("Event")}} ではなく、{{domxref("SubmitEvent")}} 型のオブジェクトとして表すようになりました。<code>SubmitEvent</code> は新たに {{domxref("SubmitEvent.submitter", "submitter")}} プロパティを持っており、これはフォームの送信を発生させた {{domxref("Element")}} です。このイベントにより送信イベントに対してひとつのハンドラーで、複数のボタンやリンクのうちどれがフォームの送信に使用されたかを見わけることが可能になります ({{bug(1588715)}})。</li>
 <li>切り離された (DOM ツリーの一部ではない) 要素で {{domxref("HTMLElement.click", "click()")}} メソッドを呼び出すと、その要素に <code>click</code> イベントを送信するようになりました ({{bug(1610821)}})。</li>
</ul>

<h4 id="Web_animations_API" name="Web_animations_API">Web animations API</h4>

<p>Firefox 75 で、<a href="/ja/docs/Web/API/Web_Animations_API">Web Animations API</a> に複数の機能を追加しました:</p>

<ul>
 <li>ほかの無期限に実行されるアニメーションによって置き換えられたアニメーションを自動的に削除するような、<a href="/ja/docs/Web/API/Web_Animations_API/Keyframe_Formats#Implicit_tofrom_keyframes">Implicit to/from keyframes</a> をサポートしました ({{bug(1618773)}})。これは以下のサポートを含みます:

  <ul>
   <li><code><a href="/ja/docs/Web/API/Animation/commitStyles">Animation.commitStyles()</a></code></li>
   <li><code><a href="/ja/docs/Web/API/Animation/onremove">Animation.onremove</a></code></li>
   <li><code><a href="/ja/docs/Web/API/Animation/persist">Animation.persist()</a></code></li>
   <li><code><a href="/ja/docs/Web/API/Animation/replaceState">Animation.replaceState</a></code></li>
  </ul>
 </li>
 <li><code><a href="/ja/docs/Web/API/Animation/timeline">Animation.timeline</a></code> ゲッター、<code><a href="/ja/docs/Web/API/Document/timeline">Document.timeline</a></code>、<code><a href="/ja/docs/Web/API/DocumentTimeline">DocumentTimeline</a></code>、<code><a href="/ja/docs/Web/API/AnimationTimeline">AnimationTimeline</a></code> の機能をデフォルトで有効にしました ({{bug(1619178)}})。</li>
 <li><code><a href="/ja/docs/Web/API/Document/getAnimations">Document.getAnimations()</a></code> および <code><a href="/ja/docs/Web/API/Element/getAnimations">Element.getAnimations()</a></code> メソッドをデフォルトで有効にしました ({{bug(1619821)}})。</li>
</ul>

<h4 id="Media_Web_Audio_and_WebRTC" name="Media_Web_Audio_and_WebRTC">メディア、Web Audio、WebRTC</h4>

<ul>
 <li><code><a href="/ja/docs/Web/API/RTCPeerConnection/setLocalDescription">RTCPeerConnection.setLocalDescription()</a></code> メソッドを引数なしで呼び出せるようになりました。この場合、WebRTC ランタイムは新しいローカルセッションデスクリプション自体を作成しようとします ({{bug(1568292)}})。</li>
</ul>

<h3 id="HTTP" name="HTTP">HTTP</h3>

<p><em>変更なし。</em></p>

<h3 id="Security" name="Security">セキュリティ</h3>

<ul>
 <li>CSS セレクターや <code>.getAttribute("nonce")</code> の呼び出しなど、スクリプト以外をソースとする <a href="/ja/docs/Web/HTTP/CSP">CSP</a> nonce が隠されるようになりました。代わりに、スクリプトから nonce へアクセスするには <code><a href="/ja/docs/Web/API/HTMLOrForeignElement/nonce">.nonce</a></code> プロパティを確認してください ({{bug(1374612)}})。</li>
</ul>

<h3 id="Plugins" name="Plugins">プラグイン</h3>

<p><em>変更なし。</em></p>

<h3 id="Security_2" name="Security_2">セキュリティ</h3>

<p><em>変更なし。</em></p>

<h3 id="WebDriver_conformance_Marionette" name="WebDriver_conformance_Marionette">WebDriver conformance (Marionette)</h3>

<ul>
 <li>Firefox が起動するとき常に Marionette の初期化が行われる不具合を修正しました。コマンドライン引数や環境変数で制限されるようになりました ({{bug(1622012)}})。</li>
 <li><code>WebDriver:Print</code> が、文書に余分なマージンを追加しないようになりました ({{bug(1616932)}})。</li>
 <li>投機的な接続を強制的に無効化するため <code>network.http.speculative-parallel-limit</code> の設定値を <code>0</code> に変更していた動作を修正しました ({{bug(1617869)}})。</li>
</ul>

<h3 id="Other" name="Other">その他</h3>

<p><em>変更なし。</em></p>

<h2 id="Changes_for_add-on_developers" name="Changes_for_add-on_developers">アドオン開発者向けの変更点</h2>

<h3 id="API_changes" name="API_changes">API の変更点</h3>

<ul>
 <li>{{WebExtAPIRef("browserSettings")}} に新たな設定を追加しました ({{bug(1286953)}}):
  <ul>
   <li>ズームがサイトごとかタブごとかを制御する {{WebExtAPIRef("browserSettings.zoomSiteSpecific")}}。</li>
   <li>ズームがページ全体に適用されるかテキストのみに適用されるかを制御する {{WebExtAPIRef("browserSettings.zoomFullPage")}}。</li>
  </ul>
 </li>
 <li>{{WebExtAPIRef("tabs.saveAsPDF")}} を使用して PDF 形式で保存するときに使用するファイル名を、<code>tabs.PageSettings</code> の <code>toFileName</code> で指定できるようになりました ({{bug(1483590)}})。</li>
</ul>

<h3 id="Manifest_changes" name="Manifest_changes">マニフェストの変更点</h3>

<ul>
 <li>"privacy" パーミッションが省略可能になりました ({{bug(1618399)}})。</li>
</ul>

<h2 id="Older_versions" name="Older_versions">過去のバージョン</h2>

<p>{{Firefox_for_developers(74)}}</p>
