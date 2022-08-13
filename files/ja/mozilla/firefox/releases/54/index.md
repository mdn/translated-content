---
title: Firefox 54 for developers
slug: Mozilla/Firefox/Releases/54
tags:
  - Firefox
  - Release Notes
translation_of: Mozilla/Firefox/Releases/54
---
<article class="text-content" id="wikiArticle">
<p>Firefox 54 は、米国時間 2017 年 6 月 13 日にリリースされました。このページでは、開発者に影響する Firefox 54 の変更点をまとめています。</p>

<h2 id="Changes_for_Web_developers" name="Changes_for_Web_developers">ウェブ開発者向けの変更点一覧</h2>

<h3 id="Developer_Tools" name="Developer_Tools">開発者ツール</h3>

<ul>
 <li>ネットワーク要求の要約で、パフォーマンス解析ビューと同様に、実際に転送されたデータの量 ("転送量") を表示するようになりました ({{bug(1168376)}})。</li>
 <li>ネットワーク要求のヘッダービューで、MDN の関連ドキュメントへのリンクを追加しました ({{bug(1320233)}})。</li>
</ul>

<h3 id="CSS" name="CSS">CSS</h3>

<ul>
 <li>{{cssxref("clip-path")}} で <a href="/ja/docs/Web/CSS/CSS_Shapes">基本シェイプ</a> をサポートしました ({{bug(1247229)}})。</li>
 <li>Firefox の CSS Flexbox と CSS alignment の実装で、{{cssxref("align-items")}} と {{cssxref("align-self")}}、{{cssxref("justify-items")}} と {{cssxref("justify-self")}} の相互作用について更新された仕様を実装しました ({{bug(1340309)}})。</li>
 <li>type が <code>checkbox</code> および <code>radio</code> である {{htmlelement("input")}} で {{cssxref("appearance", "-moz-appearance")}}<code>: none;</code> を設定した場合に、他のブラウザーとの互換性のため非置換要素にするようになりました ({{bug(605985)}})。</li>
 <li>以前は、<code>display:block</code> を指定した {{domxref("HTMLInputElement")}} 型の子要素を持つ、{{cssxref("display")}}<code>: inline-block</code> を指定した要素のベースラインが誤っていました ({{bug(1330962)}})。この問題を修正しました。</li>
 <li>Mozilla がコンテンツ専用のスレッドを (Electrolysis または e10s プロジェクトで) Firefox に導入したとき、{{HTMLElement("option")}} 要素へのスタイル設定機能のを一時的に削除しました。Firefox 54 より {{cssxref("color")}} および {{cssxref("background-color")}} プロパティを使用して、<code>&lt;option&gt;</code> 要素に再び前景色や背景色を設定できるようになりました。詳しくは {{bug(910022)}} をご覧ください。Linux では、コントラストが不足するためまだ無効化していますので注意してください (進捗状況は {{bug(1338283)}} で確認してください)。</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Animations">CSS Animations</a> でアニメーションが早期に終了したとき、想定どおりに {{event("animationcancel")}} イベントが発生するようになりました ({{bug(1302648)}})。</li>
 <li>透過色 (すなわち、アルファチャンネルが 0 である色) が、特定の状況 で <a href="/ja/docs/Web/CSS/color_value#transparent_keyword"><code>transparent</code> 色キーワード</a> にシリアライズされていました。これを、仕様書や他のブラウザーの実装に従うよう修正しました。詳しくは {{bug("1339394")}} をご覧ください。</li>
 <li>独自仕様である <code>:-moz-table-border-nonzero</code> 疑似クラスが、ウェブコンテンツで使用できなくなりました。Firefox 内部の UA スタイルシートのみに制限されています ({{bug(1341925)}})。</li>
 <li>[css-grid] overflow:auto を指定したコンテンツがグリッド内で重なり合う問題を修正しました ({{bug(1348857)}})。</li>
 <li>[css-grid] 固有の比率を持つ、サイズをパーセンテージで指定したグリッドアイテムに対する、Transferred min-size の寄与に関する問題を修正しました ({{bug(1349320)}})。</li>
</ul>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<ul>
 <li><code>"u"</code> (Unicode) フラグと <code>"i"</code> (大文字・小文字を無視) フラグを設定した {{jsxref("RegExp")}} で <code>\b</code> および <code>\B</code> は、U+017F (LATIN SMALL LETTER LONG S) および U+212A (KELVIN SIGN) を単語に使用される文字として扱うようになりました ({{bug(1338373)}})。</li>
 <li>{{jsxref("DataView")}} コンストラクターで、<code>byteOffset</code> パラメーターが {{jsxref("Number.MAX_SAFE_INTEGER")}} (&gt;= 2 ** 53) の範囲外であるときに {{jsxref("RangeError")}} が発生するようになりました ({{bug(1317382)}})。</li>
 <li>{{jsxref("Date.UTC()")}} メソッドで引数が 2 個未満である場合の動作を、ECMAScript 2017 に準拠するように更新しました ({{bug(1050755)}})。</li>
 <li>{{jsxref("Function.prototype.toString()")}} メソッドを、最新の <a href="http://tc39.github.io/Function-prototype-toString-revision/">仕様案</a> に準拠するよう更新しました ({{bug(1317400)}})。</li>
</ul>

<h3 id="DOM_HTML_DOM" name="DOM_HTML_DOM">DOM &amp; HTML DOM</h3>

<ul>
 <li>{{domxref("URL.toJSON()")}} メソッドを実装しました ({{bug(1337702)}})。</li>
 <li>{{domxref("URLSearchParams.URLSearchParams", "URLSearchParams()")}} コンストラクターが、init オブジェクトとして {{domxref("USVString")}} を含むレコードを受け入れるようになりました ({{bug("1331580")}})。</li>
 <li>macOS で、control キーと印刷可能なキーを組み合わせた場合に {{domxref("KeyboardEvent.key")}} が返す値を修正しました (command キーの押下中を除く) ({{bug(1342865)}})。</li>
 <li>主に、worker で <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/let">let</a></code> を使用したときに発生する問題 ({{bug(855665)}} のため。これは修正済み) を回避するために実装した設定項目 <code>dom.workers.latestJSVersion</code> を削除しました ({{bug(1219523)}})。</li>
 <li>{{domxref("event.timeStamp")}} プロパティが、エポック時刻 ({{domxref("DOMTimeStamp")}})に代わり高精度モノトニック時刻 ({{domxref("DOMHighResTimeStamp")}}) を返すようになりました。</li>
</ul>

<h3 id="Web_Workers_and_Service_Workers" name="Web_Workers_and_Service_Workers">Web Workers および Service Workers</h3>

<ul>
 <li>{{domxref("WorkerGlobalScope.close")}} が、{{domxref("DedicatedWorkerGlobalScope.close", "DedicatedWorkerGlobalScope")}} および {{domxref("SharedWorkerGlobalScope.close", "SharedWorkerGlobalScope")}} で利用可能になりました。この変更は、service workers で使用してはならない <code>close()</code> を使用できないようにして、呼び出された場合は常に例外が発生します ({{bug(1336043)}})。</li>
 <li>{{domxref("WindowOrWorkerGlobalScope.origin")}} プロパティを実装しました ({{bug(1306170)}})。</li>
 <li>{{domxref("Client.type")}} プロパティを実装しました ({{bug(1339844)}})。</li>
 <li>{{domxref("Clients.matchAll()")}} が {{domxref("Client")}} オブジェクトを、直近に注視した順序で返すようになりました ({{bug(1266747)}})。</li>
 <li>新しいインスタンスを生成するために {{domxref("Request.Request","Request()")}} へ既存の {{domxref("Request")}} オブジェクトが渡されたときに見られる動作を、若干変更しました。以下の新たな動作は例外を発生しにくくするとともに、セキュリティを維持するように設計しました:
  <ul>
   <li>コンストラクターを呼び出すオリジンとは別のオリジンにこのオブジェクトが存在する場合は、{{domxref("Request.referrer")}} を削除します。</li>
   <li>このオブジェクトの {{domxref("Request.mode")}} が <code>navigate</code> である場合は、<code>mode</code> の値を <code>same-origin</code> に変換します。</li>
  </ul>
 </li>
</ul>

<h3 id="AudioVideo" name="AudioVideo">Audio/Video</h3>

<h4 id="General" name="General">全般</h4>

<ul>
 <li>Windows、macOS、Linux で、5.1ch サラウンド音声の再生をデフォルトで有効化しました ({{bug(1334508)}}、{{bug(1321502)}}、{{bug(1323659)}})。</li>
</ul>

<h4 id="Media_Capture_and_Streams_API" name="Media_Capture_and_Streams_API">Media Capture and Streams API</h4>

<ul>
 <li>{{domxref("URL.createObjectURL()")}} の入力引数として {{domxref("MediaStream")}} オブジェクトを使用することが非推奨になりました。コンソールに警告を表示します ({{bug(1334564)}})。代わりに {{domxref("HTMLMediaElement.srcObject")}} を使用することを推奨します。</li>
</ul>

<h4 id="Web_Audio_API" name="Web_Audio_API">Web Audio API</h4>

<ul>
 <li>{{domxref("AnalyserNode.getFloatFrequencyData()")}} メソッドが値 <code>-<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Infinity">Infinity</a></code> で返すバッファーで、正しく無音のサンプルを表すようになりました ({{bug(1336098)}})。</li>
 <li>{{domxref("AudioParam.setValueCurveAtTime()")}} で、指定された値のいずれかが有限値ではない場合に <code>TypeError</code> 例外が発生するようになりました ({{bug(1308437)}})。</li>
</ul>

<h4 id="Encrypted_MediaExtensions_API" name="Encrypted_MediaExtensions_API">Encrypted MediaExtensions API</h4>

<ul>
 <li><code>MediaKeySession.keySystem</code> 文字列が仕様書から削除されたため、Firefox 54 で廃止しました ({{bug(1335555)}})。</li>
 <li><a href="https://www.w3.org/TR/encrypted-media/#clear-key">Clear Key</a> および <a href="http://www.widevine.com/">Widevine</a> を使用する暗号化ストリームで、VP9 コーデックをサポートしました ({{bug(1338064)}})。</li>
 <li>以前は MSE で、システムが "十分に高速である" と思われる場合に限り WebM/VP8 動画の使用を許可していましたが、システムのパフォーマンスにかかわらず VP8 でエンコードした <code>webm/video</code> メディアの再生をサポートするようになりました。</li>
</ul>

<h4 id="WebRTC" name="WebRTC">WebRTC</h4>

<ul>
 <li>Firefox 41 で追加した TCP ICE candidate のサポートを、デフォルトで有効にしました。これにより、転送に好ましい UDP ではなく TCP を使用することを ICE レイヤーが候補として検討することを可能にします。これは、UDP がブロックされている環境で役に立つでしょう ({{bug(1176382)}})。<a href="https://blog.mozilla.org/webrtc/active-ice-tcp-punch-firewalls-directly/">こちらのブログ投稿</a> で、この機能を詳しく説明しています。</li>
</ul>

<h2 id="Removals_from_the_web_platform" name="Removals_from_the_web_platform">ウェブプラットフォームから廃止</h2>

<h3 id="CSS_2" name="CSS_2">CSS</h3>

<ul>
 <li>{{cssxref("unicode-bidi")}} プロパティの値 <code>isolate</code>、<code>isolate-override</code>、<code>plaintext</code> について、<code>-moz</code> 接頭辞がついている値を削除しました ({{bug(1333675)}})。</li>
</ul>

<h3 id="HTTP" name="HTTP">HTTP</h3>

<ul>
 <li>Firefox 54 で、HTTP/1 のパイプラインのサポートを廃止しました。ネットワークのパフォーマンス向上が標準化された HTTP/2 や他の価値ある技術が充実した段階へ移行するにつれて、パイプラインは互換性やパフォーマンスの問題によりメンテナンスする価値がなくなります。設定項目 <code>network.http.pipelining</code> (および "network.http.pipelining" で始まる他の項目) は無視します。詳しくは {{bug(1340655)}} をご覧ください。</li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://www.mozilla.jp/firefox/54.0/releasenotes/">Firefox 54.0 リリースノート</a></li>
 <li><a href="https://dev.mozilla.jp/2017/04/firefox-54-addon-compatibility/">Firefox 54 アドオン互換性情報</a></li>
</ul>

<h2 id="Older_versions" name="Older_versions">過去のバージョン</h2>

<p>{{Firefox_for_developers(53)}}</p>
</article>
