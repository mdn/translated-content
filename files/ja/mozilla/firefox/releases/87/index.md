---
title: Firefox 87 for developers
slug: Mozilla/Firefox/Releases/87
tags:
  - '87'
  - Firefox
  - Mozilla
  - Release
---
<p>{{FirefoxSidebar}}</p>

<p class="summary">このページでは、開発者に影響する Firefox 87 の変更点をまとめています。Firefox 87 は、米国時間 2021 年 3 月 23 日にリリースされました。</p>

<div class="notecard note">
  <h4>注記</h4>
  <p class="summary">Mozilla Hacks の <a href="https://hacks.mozilla.org/2021/03/in-march-we-see-firefox-87/">In March, we see Firefox 87</a> もご覧ください。</p>
</div>

<h2 id="Changes_for_web_developers" name="Changes_for_web_developers">ウェブ開発者向けの変更点一覧</h2>

<h3 id="Developer_Tools" name="Developer_Tools">開発者ツール</h3>

<ul>
  <li>開発者がオペレーティングシステムをライトモードやダークモードに切り替えることなく、{{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} メディアクエリーのシミュレーションに <a href="/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#view_media_rules_for_prefers-color-scheme">インスペクター</a> を使用できるようになりました ({{bug(1679408)}} および {{bug(1692272)}})。</li>
  <li><a href="/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#viewing_common_pseudo-classes">インスペクター</a> を使用して、(すでにサポートしている {{cssxref(":hover")}}、{{cssxref(":active")}}、{{cssxref(":focus")}}、{{cssxref(":focus-within")}}、{{cssxref(":focus-visible")}}、{{cssxref(":visited")}} 疑似クラスに加えて) 現在選択されている要素の {{cssxref(":target")}} 疑似クラスを切り替えられるようになりました ({{bug(1689899)}})。
  <li>Firefox 87 は、非活性の CSS 規則に関して <a href="/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#rule_display">インスペクター</a> を改良および不具合修正しました:
    <ul>
      <li>テーブル以外の要素について、{{cssxref("table-layout")}} プロパティを非活性としてマークするようになりました ({{bug(1551571)}})。</li>
      <li>スクロールできない要素について、{{cssxref("scroll-padding")}} プロパティを (ショートハンドプロパティ・ロングハンドプロパティともに) 非活性としてマークするようになりました ({{bug(1551577)}})。</li>
      <li>以前は{{cssxref("overflow")}} の一部の値で、{{cssxref("text-overflow")}} プロパティが誤って非活性としてマークされていました ({{bug(1671457)}})。
    </ul></li>
</ul>

<h3 id="HTML" name="HTML">HTML</h3>

<p><em>変更なし。</em></p>

<h3 id="CSS" name="CSS">CSS</h3>

<ul>
  <li>例えばオランダ語の <code>IJ</code> など、一緒に大文字で書く二重音字を持つ言語があります。{{cssxref("::first-letter")}} 疑似要素がこれらの二重音字に配慮して、1 つの文字として扱うようになりました ({{bug(92176)}})。</li>
  <li>{{HTMLElement("link")}} 要素が {{cssxref(":link")}}、{{cssxref(":visited")}}、{{cssxref(":any-link")}} にマッチしないようになりました。これは Firefox の動作を、Chrome の既存の動作や最近の仕様書の変更に合わせたものです ({{bug(1687538)}})。</li>
</ul>

<h4 id="Removals_CSS" name="Removals_CSS">廃止</h4>

<ul>
  <li>以下の Firefox 固有のテーマに関連するメディア特性を、ウェブページで使用できないようにしました ({{bug(787521)}}):
    <ul>
      <li><code>-moz-mac-graphite-theme</code></li>
      <li><code>-moz-mac-lion-theme</code></li>
      <li><code>-moz-maemo-classic</code></li>
      <li><code>-moz-windows-classic</code></li>
      <li><code>-moz-windows-compositor</code></li>
      <li><code>-moz-windows-default-theme</code></li>
      <li><code>-moz-windows-theme</code></li>
      <li><code>-moz-scrollbar-end-backward</code></li>
      <li><code>-moz-scrollbar-end-forward</code></li>
      <li><code>-moz-scrollbar-start-backward</code></li>
      <li><code>-moz-scrollbar-start-forward</code></li>
      <li><code>-moz-scrollbar-thumb-proportional</code></li>
      <li><code>-moz-menubar-drag</code></li>
    </ul></li>
  <li>{{cssxref("caption-side")}} の非標準の値 (<code>left</code>、<code>right</code>、<code>top-outside</code>、<code>bottom-outside</code>) を削除して、<code>layout.css.caption-side-non-standard.enabled</code> フラグで制御するようにしました ({{bug(1688695)}})。</li>
</ul>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<p><em>変更なし。</em></p>

<h3 id="HTTP" name="HTTP">HTTP</h3>

<ul>
  <li>一部の企業向け認証サービスは、TLS クライアント証明書を <a href="/ja/docs/Web/HTTP/CORS#preflight_requests_and_credentials">CORS のプリフライトリクエストで送信する</a> ことを要求します。これらのサービスのユーザーは設定項目 <code>network.cors_preflight.allow_client_cert</code> で、この (仕様書に準拠しない) 動作を有効化できます ({{bug(1511151)}})。</li>
  <li>クロスオリジンリクエストでリファラー情報が漏洩するリスクを低減するため、デフォルトの <code><a href="/ja/docs/Web/HTTP/Headers/Referrer-Policy">Referrer-Policy</a></code> を (<code>no-referrer-when-downgrade</code> から) <code><a href="/ja/docs/Web/HTTP/Headers/Referrer-Policy#strict-origin-when-cross-origin">strict-origin-when-cross-origin</a></code> に変更しました ({{bug(1589074)}})。</li>
  <li><code><a href="/ja/docs/Web/HTTP/Headers/Content-Length">Content-Length</a></code> を、<a href="/ja/docs/Glossary/CORS-safelisted_response_header">CORS セーフリストレスポンスヘッダー</a> のリストに追加しました ({{bug(1460299)}})。</li>
</ul>

<h3 id="Security" name="Security">セキュリティ</h3>

<p><em>変更なし。</em></p>

<h3 id="APIs" name="APIs">API</h3>

<h4 id="DOM" name="DOM">DOM</h4>

<ul>
  <li>{{domxref("HTMLElement.beforeinput_event", "beforeinput")}} イベントおよび {{domxref('InputEvent.getTargetRanges()', 'getTargetRanges()')}} メソッドをデフォルトで有効化しました。これらはテキスト編集の動作を、ブラウザーが DOM ツリーを変更する前にウェブアプリがオーバーライドして、パフォーマンスを向上するために入力イベントをより細かく制御できます。グローバルの <code>beforeinput</code> イベントは {{HTMLElement("input")}} 要素 (または {{htmlattrxref("contenteditable")}} 属性を <code>true</code> に設定した任意の要素) へ、要素の値が変わる直前に送信されます。{{domxref("InputEvent")}} インターフェイスの <code>getTargetRanges()</code> メソッドは、入力居便がキャンセルされなかった場合に、DOM 変更の影響を受ける静的な範囲の配列を返します。</li>
</ul>

<h3 id="webdriver_conformance_marionette" name="webdriver_conformance_marionette">WebDriver conformance (Marionette)</h3>

<ul>
  <li>Fission (サイト分離) をサポートするために Marionette を書き直す作業が完了して、古い Marionette の実装を削除しました。また、古い実装と新しい実装を切り替える設定項目 <code>marionette.actors.enabled</code> も削除しました ({{bug(1669172)}})。</li>
  <li>フレームのコンテンツの読み込みが完了していない場合に、<code>WebDriver:SwitchToFrame</code> の呼び出しに続く WebDriver コマンドが "no such window" エラーで失敗しないようになりました ({{bug(1691348)}})。</li>
  <li><a href="https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations">クロスグループページナビゲーション</a> の後、過去に取得した要素にアクセスすると常に "stale element" エラーが発生するようになりました。この操作により "no such element" エラーが発生する可能性はなくなりました ({{bug(1690308)}})。
  <li><code>Addon:Uninstall</code> でアンインストールするアドオンの ID が不明である場合に、<code>unknown error</code> が発生するようになりました ({{bug(1693022)}})。</li>
</ul>

<h2 id="Changes_for_add-on_developers" name="Changes_for_add-on_developers">アドオン開発者向けの変更点</h2>
  <ul>
    <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Native_messaging">nativeMessaging</a> が <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions">optional permission</a> になりました ({{bug(1630415)}})。</li>
  </ul>

<h2 id="Older_versions" name="Older_versions">過去のバージョン</h2>

<p>{{Firefox_for_developers(86)}}</p>