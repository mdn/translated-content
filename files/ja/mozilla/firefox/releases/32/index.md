---
title: Firefox 32 for developers
slug: Mozilla/Firefox/Releases/32
tags:
  - Firefox
translation_of: Mozilla/Firefox/Releases/32
---
<p>Gecko 32 を搭載した Firefox 32 は、米国時間 2014 年 9 月 2 日にリリースされました。このページでは、開発者に影響する Firefox 32 の変更点をまとめています。</p>

<h2 id="Changes_for_Web_developers" name="Changes_for_Web_developers">Web 開発者向けの変更点一覧</h2>

<h3 id="Developer_Tools" name="Developer_Tools">開発者ツール</h3>

<p>ハイライト:</p>

<ul>
 <li><a href="/ja/docs/Tools/Web_Audio_Editor">Web Audio Editor</a></li>
 <li><a href="/ja/docs/Tools/Scratchpad#Code_completion_and_inline_documentation">スクラッチパッドのコード補完とインラインドキュメント</a></li>
 <li><a href="/ja/docs/Tools/Page_Inspector#Rules_view">インスペクタのルールビューでユーザエージェントのスタイルを表示</a></li>
 <li><a href="/ja/docs/Tools/Page_Inspector#Firefox_32_onwards_2">要素選択ボタンを移動</a></li>
 <li><a href="/ja/docs/Tools/Page_Inspector#Firefox_32_onwards">インスペクタの情報バーにノードの寸法を追加</a></li>
 <li><a href="/ja/docs/Tools/Tools_Toolbox#Extra_tools">ページ全体のスクリーンショットボタンを追加</a></li>
 <li>ツールに HiDPI 画像を追加</li>
 <li>インスペクタで、<code>display:none</code> が設定されているノードを異なる書式で表示</li>
</ul>

<p><a class="external external-icon" href="https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&amp;classification=Client%20Software&amp;chfieldto=2014-06-09&amp;chfield=resolution&amp;query_format=advanced&amp;chfieldfrom=2014-04-28&amp;chfieldvalue=FIXED&amp;bug_status=RESOLVED&amp;bug_status=VERIFIED&amp;component=Developer%20Tools&amp;component=Developer%20Tools%3A%203D%20View&amp;component=Developer%20Tools%3A%20App%20Manager&amp;component=Developer%20Tools%3A%20Canvas%20Debugger&amp;component=Developer%20Tools%3A%20Console&amp;component=Developer%20Tools%3A%20Debugger&amp;component=Developer%20Tools%3A%20Framework&amp;component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&amp;component=Developer%20Tools%3A%20Inspector&amp;component=Developer%20Tools%3A%20Memory&amp;component=Developer%20Tools%3A%20Netmonitor&amp;component=Developer%20Tools%3A%20Object%20Inspector&amp;component=Developer%20Tools%3A%20Profiler&amp;component=Developer%20Tools%3A%20Responsive%20Mode&amp;component=Developer%20Tools%3A%20Scratchpad&amp;component=Developer%20Tools%3A%20Source%20Editor&amp;component=Developer%20Tools%3A%20Style%20Editor&amp;component=Developer%20Tools%3A%20User%20Stories&amp;component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&amp;product=Firefox">Firefox 31 から Firefox 32 の間に解決した開発ツール関連のバグ一覧</a></p>

<h3 id="CSS" name="CSS">CSS</h3>

<ul>
 <li>{{cssxref("mix-blend-mode")}} をデフォルトで有効にしました ({{Bug(952643)}})。</li>
 <li>release ビルドで、position:sticky をデフォルトで有効にしました (以前は Nightly および Aurora のみ有効) ({{Bug(916315)}})。</li>
 <li>{{cssxref("box-decoration-break")}} を実装して、非標準の {{cssxref("-moz-background-inline-policy")}} を削除しました ({{Bug(613659)}})。</li>
 <li>{{cssxref("flex-grow")}} および {{cssxref("flex-shrink")}} が、0 と 0 以外の値との間でトランジションすることが可能になりました ({{Bug(996945)}})。</li>
</ul>

<h3 id="HTML" name="HTML">HTML</h3>

<ul>
 <li>{{HTMLElement("img")}} 要素の {{HTMLattrxref("srcset", "img")}} プロパティを試験的に実装しました。<code>dom.image.srcset.enable</code> を <code>true</code> に設定すると有効になります ({{Bug(870021)}})。</li>
</ul>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<ul>
 <li>新たな ECMAScript 6 の組み込みメソッドを実装しました:
  <ul>
   <li>{{jsxref("Array.from()")}} ({{bug(904723)}})</li>
   <li>{{jsxref("Array.prototype.copyWithin()")}} ({{bug(934423)}})</li>
   <li>{{jsxref("Number.isSafeInteger()")}} ({{bug(1003764)}})</li>
  </ul>
 </li>
</ul>

<h3 id="Interfaces.2FAPIs.2FDOM" name="Interfaces.2FAPIs.2FDOM">インターフェイス/API/DOM</h3>

<ul>
 <li>{{domxref("NavigatorLanguage.languages", "navigator.languages")}} プロパティおよび {{event("languagechange")}} イベントを実装しました ({{Bug(889335)}})。</li>
 <li>{{domxref("Navigator.vibrate()")}} メソッドの動作が最新の仕様に適合するようになりました。長すぎる振動は切り詰められます ({{bug(1014581)}})。</li>
 <li>{{domxref("KeyboardEvent.getModifierState()")}} メソッドおよび {{domxref("MouseEvent.getModifierState()")}} メソッドを、<code>Accel</code> 仮想モディファイアをサポートするように拡張しました ({{Bug(1009388)}})。</li>
 <li>{{domxref("KeyboardEvent.code")}} プロパティを試験的に実装しました。ただし、release ビルドでは無効化しています ({{Bug(865649)}})。</li>
 <li>{{domxref("Document.querySelector()")}} および {{domxref("Document.querySelectorAll()")}} で scope が設定されたセレクタ (例えば <code>querySelector(":scope &gt; li")</code>) を実装しました ({{Bug(528456)}})。</li>
 <li><a href="http://dev.w3.org/fxtf/web-animations/">Web Animation API</a> に関して、{{domxref("Document.timeline")}} インターフェイスを実験的に実装しました ({{bug("998246")}})。これは設定項目 <code>layout.web-animations.api.enabled</code> で制御されており、現在は Nightly および Aurora のみで有効化しています。</li>
 <li><a href="/ja/docs/Web/API/Data_Store_API">Data Store API</a> が <a href="/ja/docs/Web/Guide/Performance/Using_web_workers">Web Workers</a> で使用可能になりました ({{bug("949325")}})。ただし、認定アプリケーションにのみ有効化されています。</li>
 <li><a href="/ja/docs/Web/API/ServiceWorker_API">ServiceWorker</a> の {{domxref("InstallPhaseEvent")}} インターフェイスおよび {{domxref("InstallEvent")}} インターフェイスを実装しました ({{Bug("967264")}})。</li>
 <li><a href="/ja/docs/Web/API/MSISDN_Verification_API">MSISDN Verification API</a> を追加しました。特権アプリに対してのみ有効化されています ({{Bug("988469")}})。</li>
 <li>仕様や CSS 構文の発展に適合するよう、{{domxref("CSS.escape()")}} を若干変更しました。識別子を <code>'--'</code> から始めることが可能になり、2 番目のダッシュ記号はエスケープされません。また、ベンダー識別子はエスケープしません。({{bug(1008719)}})</li>
 <li>ストリームのサイズやフレームレートを制限するため、<a href="/ja/docs/Glossary/WebRTC">WebRTC</a> の {{domxref("NavigatorUserMedia.getUserMedia", "getUserMedia()")}}、<code>width</code>、<code>height</code>、<code>framerate</code> に新たな制約を与えました ({{bug("907352")}}):
  <pre class="brush: json">{
  mandatory: {
    width: { min: 640 },
    height: { min: 480 }
  },
  optional: [
    { width: 650 },
    { width: { min: 650}},
    { frameRate: 60 },
    { width: { max: 800}},
  ]
}</pre>
 </li>
</ul>

<h3 id="MathML" name="MathML">MathML</h3>

<ul>
 <li>{{MathMLElement("menclose")}} 要素の notation 属性で <code>phasorangle</code> をサポートしました。</li>
</ul>

<h3 id="SVG" name="SVG">SVG</h3>

<p><em>変更なし。</em></p>

<h3 id="Audio.2FVideo" name="Audio.2FVideo">Audio/Video</h3>

<p><em>変更なし。</em></p>

<h2 id="Security" name="Security">セキュリティ</h2>

<ul>
 <li><a href="/ja/docs/Xray_vision#Xray_semantics_for_Object_and_Array">特権コードは JavaScript の <code>Object</code> および <code>Array</code> のインスタンスで Xray vision が適用されるようになりました</a>。</li>
</ul>

<h2 id="Changes_for_add-on_and_Mozilla_developers" name="Changes_for_add-on_and_Mozilla_developers">アドオン開発者と Mozilla 開発者向けの変更点</h2>

<p>DOM オブジェクトではない JavaScript オブジェクトに、Xray vision を適用するようになりました: <a href="/ja/docs/Xray_vision#Xrays_for_JavaScript_objects">Xrays for JavaScript objects</a>。</p>

<h3 id="Add-on_SDK" name="Add-on_SDK">Add-on SDK</h3>

<h4 id="Highlights" name="Highlights">ハイライト</h4>

<ul>
 <li><code>PageMod</code> に <a href="/ja/docs/Mozilla/Add-ons/SDK/High-Level_APIs/page-mod#PageMod%28options%29"><code>exclude</code></a> オプションを追加しました。</li>
 <li><code>Request</code> に <a href="/ja/docs/Mozilla/Add-ons/SDK/High-Level_APIs/request#Request%28options%29"><code>anonymous</code></a> オプションを追加しました。</li>
 <li><a href="/ja/docs/Mozilla/Add-ons/Add-on_Debugger">アドオンデバッガ</a>がコンソールとスクラッチパッドを含むようになりました。</li>
</ul>

<h4 id="Details" name="Details">詳細</h4>

<p><a class="external external-icon" href="https://github.com/mozilla/addon-sdk/compare/firefox31...firefox32">Firefox 31 から Firefox 32 の間に行われた GitHub コミット</a>。この一覧は Aurora 移行後に上流で行われた内容が含まれていないでしょう。</p>

<p><a class="external external-icon" href="https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&amp;chfieldto=2014-06-09&amp;chfield=resolution&amp;query_format=advanced&amp;chfieldfrom=2014-04-28&amp;chfieldvalue=FIXED&amp;bug_status=RESOLVED&amp;bug_status=VERIFIED&amp;bug_status=CLOSED&amp;product=Add-on%20SDK&amp;list_id=10493962">Firefox 31 から Firefox 32 の間に解決したバグ</a>。この一覧は Aurora 移行後に上流で行われた内容が含まれていないでしょう。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="http://www.mozilla.jp/firefox/32.0/releasenotes/">Firefox 32 リリースノート</a></li>
 <li><a href="https://dev.mozilla.jp/2014/08/firefox-32-addon-compatibility/">Firefox 32 アドオン互換性情報</a></li>
</ul>

<h3 id="Older_versions" name="Older_versions">過去のバージョン</h3>

<p>{{Firefox_for_developers('31')}}</p>
