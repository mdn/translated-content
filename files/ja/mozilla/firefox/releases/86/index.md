---
title: Firefox 86 for developers
slug: Mozilla/Firefox/Releases/86
tags:
  - '86'
  - Firefox
  - Mozilla
  - Release
---
<p>{{FirefoxSidebar}}</p>

<p class="summary">このページでは、開発者に影響する Firefox 86 の変更点をまとめています。Firefox 86 は、米国時間 2021 年 2 月 23 日にリリースされました。</p>

<div class="notecard note">
  <h4>注記</h4>
  <p class="summary"> Mozilla Hacks の <a href="https://hacks.mozilla.org/2021/02/a-fabulous-february-firefox-86/">A Fabulous February Firefox — 86!</a> もご覧ください。</p>
</div>

<h2 id="Changes_for_web_developers" name="Changes_for_web_developers">ウェブ開発者向けの変更点一覧</h2>

<h3 id="Developer_Tools" name="Developer_Tools">開発者ツール</h3>

<ul>
  <li>Firefox 74 で非推奨になった <a href="/ja/docs/Tools/Web_Console/Helpers">ウェブコンソールのヘルパー関数</a> <code>cd()</code> を削除しました。<a href="/ja/docs/Tools/Working_with_iframes">iframe での作業</a> で説明している <code>&lt;iframe&gt;</code> コンテキストピッカーが同じ機能を提供しており、よりよいものです! 詳しくは {{bug(1607741)}} をご覧ください。</li>
  <li>{{cssxref("margin")}} および {{cssxref("padding")}} のさまざまなショートハンドプロパティやロングハンドプロパティを、テーブル内部の要素で非活性としてマークするようになりました。これらのプロパティは効果がないためです ({{bug(1551569)}})。</li>
  <li>以前はグリッドアイテムで、{{cssxref("order")}} プロパティが誤って非活性としてマークされていました。この不具合を {{bug(1579017)}} で修正しました。</li>
</ul>

<h3 id="HTML" name="HTML">HTML</h3>

<p><em>変更なし。</em></p>

<h3 id="SVG" name="SVG">SVG</h3>

<ul>
 <li>SVG フィルターで <a href="/ja/docs/Web/SVG/Attribute/operator#fecomposite"><code>lighter</code> operator</a> を持つ {{SVGElement("feComposite")}} 要素が使用可能になりました ({{bug(1518099)}})。operator は、2 つのソース画像のピクセルを加算します。</li>
</ul>

<h3 id="CSS" name="CSS">CSS</h3>

<ul>
  <li><code>-webkit-autofill</code> を別名にして、{{cssxref(":autofill")}} 疑似クラスを有効にしました ({{bug(1685675)}}) および ({{bug(1475316)}})。</li>
  <li>{{cssxref("list-style-image")}} プロパティが、有効な {{cssxref("image")}} を受け入れるようになりました ({{bug(1685078)}})。</li>
</ul>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<ul>
  <li><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames"><code>Intl.DisplayNames</code></a> ビルトインオブジェクトを、デフォルトで有効にしました。これは言語、地域、文字の表示名で一貫性がある翻訳を可能にします:
    <pre class="brush: js">
// 英語の通貨コードの表示名を取得する
let currencyNames = new Intl.DisplayNames(['en'], {type: 'currency'});
// 通貨名を取得する
currencyNames.of('USD'); // "US Dollar"
currencyNames.of('EUR'); // "Euro"</pre>
    詳しくは {{bug(1654116)}} をご覧ください。</li>
 </ul>

<h3 id="APIs" name="APIs">API</h3>

<h4 id="DOM" name="DOM">DOM</h4>

<ul>
  <li>タブで別のドメインからページを読み込んだときに <a href="/ja/docs/Web/API/Window/name"><code>Window.name</code></a> プロパティを空文字列にリセットするようになりました。元のページが再読み込みされた場合 (例えば "戻る" ボタンを押す) は、復元します。これは信頼されないページが、前のページがプロパティに保存していた可能性がある情報にアクセスすることを防ぎます (新しいページもこのデータを変更する可能性があり、元のページを再読みした場合にこれを読み取られるかもしれません)。詳しくは {{bug(1685089)}} をご覧ください。</li>
  <li><a href="/ja/docs/Web/API/EventTarget/addEventListener"><code>EventTarget.addEventListener()</code></a> で <code>signal</code> オプションをサポートしました。このオプションで、<a href="/ja/docs/Web/API/AbortSignal"><code>AbortSignal</code></a> をメソッドへ渡すことができます。<code>AbortSignal</code> は、後で <code>abort()</code> を呼び出すことでリスナーを削除するために使用できます。詳しくは {{bug(1679204)}} をご覧ください。</li>
</ul>

<h3 id="webdriver_conformance_marionette" name="webdriver_conformance_marionette">WebDriver conformance (Marionette)</h3>
<ul>
  <li>実際の <code>click</code> イベントの前に <code>mousemove</code> イベントを合成するように、<code>WebDriver:ElementClick</code> を更新しました ({{bug(1684002)}})。</li>
</ul>

<h4 id="webdriver_known_bugs" name="webdriver_known_bugs">既知の不具合</h4>

<ul>
  <li>フレームのコンテンツの読み込みが完了していない場合に、<code>WebDriver:SwitchToFrame</code> の呼び出しに続く WebDriver コマンドが "no such window" エラーで失敗します ({{bug(1691348)}})。</li>

  <li><a href="https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations">クロスグループページナビゲーション</a> の後、過去に取得した要素にアクセスすると常に "stale element" エラーが発生せず、"no such element" エラーが発生する場合があります。これを防ぐには、設定項目 <code>marionette.actors.enabled</code> を <code>false</code> に設定してください ({{bug(1690308)}})。</li>
</ul>

<h4 id="webdriver_removals" name="webdriver_removals">廃止</h4>

<ul>
  <li>非推奨の <code>Marionette:ActionChain</code> および <code>Marionette:MultiAction</code> コマンドのサポートを削除しました ({{bug(1683755)}})。</li>
</ul>

<h2 id="Changes_for_add-on_developers" name="Changes_for_add-on_developers">アドオン開発者向けの変更点</h2>

<ul>
  <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions">Host パーミッション</a> が、<a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs">tabs API</a> で特権が必要な部分へのアクセスを認められるようになりました ({{bug(1679688)}})。</li>
  <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/windows/create"><code>windows.create()</code></a> を呼び出す際のオプションに、<code>focused: false</code> を指定しても無視するようになりました ({{bug(1253129)}})。</li>
</ul>

<h2 id="Older_versions" name="Older_versions">過去のバージョン</h2>

<p>{{Firefox_for_developers(85)}}</p>