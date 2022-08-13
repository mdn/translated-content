---
title: Firefox 90 for developers	
slug: Mozilla/Firefox/Releases/90
tags:
  - '90'
  - Firefox
  - Mozilla
  - Release
---
<p>{{FirefoxSidebar}}</p>

<p class="summary">このページでは、開発者に影響する Firefox 90 の変更点をまとめています。Firefox 90 は、米国時間 2021 年 7 月 13 日にリリースされました。</p>

<div class="note notecard">
  <h4>補足</h4>
  <p>Mozilla Hacks の <a href="https://hacks.mozilla.org/2021/07/getting-lively-with-firefox-90/">Getting lively with Firefox 90</a> もご覧ください。</p>
</div>

<h2 id="Changes_for_web_developers">ウェブ開発者向けの変更点一覧</h2>

<h3 id="Developer_Tools">開発者ツール</h3>

<ul>
  <li>応答ビューで <a href="/ja/docs/Tools/Network_Monitor/request_details#response_tab">Web フォントのプレビュー</a> を表示するようになりました ({{bug(872078)}})。</li>
</ul>

<h3 id="HTML" name="HTML">HTML</h3>

<ul>
  <li>multipart/formdata 形式のフォームペイロードの、改行の正規化やエスケープに関する処理方法を修正しました。これは更新された仕様を満たしており、また他のブラウザーの実装に合致しています ({{bug(1686765)}})。</li>
  <li>Firefox は画像の {{Glossary("intrinsic size", "内在サイズ")}} や解像度を、{{Glossary("EXIF")}} 情報に基づいて設定するようになりました (EXIF 情報が提供されて、自己矛盾がない場合)。これは例えば、読み込みを高速化するためにサーバーが低品質のプレースホルダー画像を送信することを可能にします。また、<a href="https://github.com/eeeps/exif-intrinsic-sizing-explainer">ほかにもいくつかの利用方法</a> を実現できます ({{bug(1680387)}})。</li>
</ul>

<h3 id="CSS" name="CSS">CSS</h3>

<ul>
  <li><code>-webkit-image-set()</code> を、標準化された {{cssxref("image/image-set()")}} 関数の別名として実装しました ({{bug(1709415)}})。</li>
</ul>


<h3 id="JavaScript">JavaScript</h3>

<ul>
  <li><a href="/ja/docs/Web/JavaScript/Reference/Classes/Private_class_fields">プライベートスタティックフィールド、プライベートインスタンスフィールドおよびプライベートスタティックメソッド、プライベートインスタンスメソッド</a> をデフォルトでサポートしました ({{bug(1708235)}} および {{bug(1708236)}})。</li>
  <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/in#private_fields_and_methods"><code>in</code></a> 演算子を、<a href="/ja/docs/Web/JavaScript/Guide/Working_With_Private_Class_Features#checking_if_a_private_fieldmethod_exists">プライベートなメソッドやフィールドが定義されているかの確認</a> に使用できるようになりました。これはコードを <code>try/catch</code> で包むこととは対照的に、未定義の可能性がある機能をよりコンパクトな方法で扱うことができます ({{bug(1648090)}})。</li>
  <li><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat"><code>Intl.DateTimeFormat()</code> コンストラクター</a> のオプションとして指定する独自の日付や時刻のフォーマットに、<code>dayPeriod</code> を含めることが可能になりました。これは、1 日のうちのおおまかな時間帯 (例えば "朝" や "夜" など) を <code>narrow</code>、<code>short</code> または  <code>long</code> の文字列として含めることを示します ({{bug(1645115)}})。</li>
  <li>相対的な位置を指定するメソッドである <code>at()</code> を <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</a></code>、<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></code>、<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray">TypedArray</a></code> グローバルオブジェクトに追加しました ({{bug(1681371)}})。</li>
 </ul>

<h3 id="HTTP">HTTP</h3>

<ul>
  <li>HTTP {{Glossary("Fetch metadata request header", "フェッチメタデータリクエストヘッダー")}} (<code>Sec-Fetch-*</code>) をサポートしました。これらのヘッダーは、リクエストが同一オリジン、クロスオリジン、同一サイト、ユーザー起動であるかや、リクエストデータをどこでどのように使用するかといった、リクエストに関する追加のコンテキストをサーバーに提供します。これは、サーバーがいくつかの種類のクロスオリジン攻撃を軽減できます ({{bug(1695911)}})。</li>
</ul>

<h4 id="removals_http">廃止</h4>

<ul>
  <li>FTP を Firefox から削除しました ({{bug(1574475)}})。これは <a href="/ja/docs/Mozilla/Firefox/Releases/88#http">Firefox 88 で非推奨にした</a> ことに続くものです。拡張機能は、引き続き自身を <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers">FTP プロトコルのハンドラー</a> として登録できます。</li>
</ul>


<h3 id="APIs">API</h3>

<h4 id="DOM">DOM</h4>

<ul>
  <li>非推奨の {{DOMxref("WheelEvent")}} プロパティである <code>WheelEvent.wheelDelta</code>、<code>WheelEvent.wheelDeltaX</code>、<code>WheelEvent.wheelDeltaY</code> をサポートしました。これにより最近行った <code>WheelEvent</code> の互換性向上により問題が発生したごく一部のページが、Firefox で動作するようになります ({{bug(1708829)}})。</li>
  <li>{{domxref("Canvas API")}} の {{domxref("CanvasRenderingContext2D")}} インターフェイスで {{domxref('CanvasRenderingContext2D.createConicGradient()','createConicGradient()')}} メソッドを提供するようになりました。これは既存の {{domxref('CanvasRenderingContext2D.createLinearGradient()','linear')}} および {{domxref('CanvasRenderingContext2D.createRadialGradient()','radial')}} グラデーションによく似ている {{domxref('CanvasGradient')}} を返しますが、座標で定義した点の周りを回るグラデーションを生成できます。詳しくは {{bug(1627014)}} をご覧ください。</li>
  <li><code>matrix</code> プロトコルをサポートして、{{domxref('Navigator.registerProtocolHandler()')}} メソッドへ有効なスキームとして渡すことが可能になりました。</li>
</ul>

<h3 id="webdriver_conformance_marionette">WebDriver conformance (Marionette)</h3>
<ul>
  <li>Marionette が、アクティブな WebDriver セッションを 1 つに制限するようになりました ({{bug(1691047)}})。</li>
  <li>Firefox の新しいタイプのユーザープロンプトをサポートしました ({{bug(1686741)}})。</li>
  <li>ウィンドウハンドルで一意の ID を使用するようになりました。また、<a href="https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations">cross-group navigations</a> によって発生するプロセスの交換で ID を変更しないようになりました ({{bug(1680479)}})。</li>
  <li>バックグラウンドのタブで新しいユーザープロンプトが開いたとき、現在の WebDriver のコマンドで不適切な中止が発生する問題を修正しました ({{bug(1701686)}})。</li>
  <li><code>WebDriver:GetWindowHandles</code> コマンドを、アンロードされたタブを適切に扱うように修正しました ({{bug(1682062)}})。</li>
  <li><code>WebDriver:NewSession</code> コマンドを、<code>proxy</code> 機能が空の場合でも常に返すように修正しました ({{bug(1710935)}})。</li>
</ul>

<h4 id="removals_webdriver">廃止</h4>
<ul>
  <li><a href="#removals_http">Firefox Firefox 90 で FTP のサポートを廃止した</a> ことに合わせて、<code>ftpProxy</code> 能力を評価しなくなりました。また、この能力を使用したときに <code>invalid argument</code> エラーが発生するようになりました ({{bug(1703805)}})。</li>
</ul>

<h2 id="Changes_for_add-on_developers">アドオン開発者向けの変更点</h2>

<ul>
  <li><code>matrix</code> URI スキームをサポートして、拡張機能の <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json"><code>manifest.json</code></a> で <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers"><code>protocol_handlers</code></a> キーでプロトコルとして定義できるようになりました。</li>
  <li>本バージョンから、<a href= "/ja/docs/Web/API/Cache">Cache API</a> を拡張機能のページやワーカーグローバルで使用できるようになりました。詳しくは ({{bug(1575625)}}) をご覧ください。</li>
</ul>

<h2 id="Older_versions">過去のバージョン</h2>

<p>{{Firefox_for_developers(89)}}</p>
