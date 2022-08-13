---
title: Firefox 40 for developers
slug: Mozilla/Firefox/Releases/40
tags:
  - Firefox
  - Releases
translation_of: Mozilla/Firefox/Releases/40
---
<p>Firefox 40 は、米国時間 2015 年 8 月 11 日にリリースされました。このページでは、開発者に影響する Firefox 40 の変更点をまとめています。</p>

<h2 id="Changes_for_Web_developers" name="Changes_for_Web_developers">Web 開発者向けの変更点一覧</h2>

<h3 id="Developer_Tools" name="Developer_Tools">開発者ツール</h3>

<p>ハイライト:</p>

<ul>
 <li><a href="/ja/docs/Tools/Page_Inspector/How_to/Work_with_animations#Firefox_40">アニメーションビューを改良</a></li>
 <li><a href="/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#Get_help_for_CSS_properties">CSS プロパティの構文のヘルプを MDN から取得</a></li>
 <li><a href="/ja/docs/Tools/Page_Inspector/How_to/Edit_CSS_filters">インスペクタでフィルタを編集</a></li>
 <li><a href="/ja/docs/Tools/Web_Console#console_API_messages">Worker が発したメッセージを Web コンソールで表示</a></li>
 <li><a href="/ja/docs/Tools/Network_Monitor#Filtering_by_URL">ネットワークモニタで、要求を URL でフィルタリング</a></li>
 <li><a href="/ja/docs/Tools/Network_Monitor#Context_menu">ネットワークモニタで、多くの新たなコンテキストメニュー項目を追加</a></li>
 <li><a href="/ja/docs/Tools/Network_Monitor#Network_request_fields">ネットワークリソースがブラウザのキャッシュから取得されたことを示す</a></li>
 <li><a href="/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#Filtering_rules">ページインスペクタで、ルールをフィルタリング</a></li>
</ul>

<p>さらに:</p>

<ul>
 <li><a href="/ja/docs/Tools/Debugger/How_to/Debug_eval_sources">無名の eval ソース内で、debugger; 構文でブレーク</a></li>
 <li><a href="/ja/docs/Tools/Debugger/UI_Tour#Source_list_pane">デバッガのソースリストペインで、Copy URL および Open in New Tab コンテキストメニュー項目を追加</a></li>
 <li><a href="/ja/docs/Tools/Web_Console#Log_messages">Web コンソールで console.dirxml をサポート</a></li>
 <li><a href="/ja/docs/Tools/Style_Editor#The_style_sheet_pane">スタイルエディタで、スタイルシートリストのコンテキストメニューに "Open Link In New Tab" を追加</a></li>
 <li><a href="/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#Searching">インスペクタのセレクタ検索で、CSS 接頭辞をつけなくても class や id を検索結果に表示</a></li>
 <li><a href="/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_the_box_model#The_Box_Model_view">ボックスモデルビューのツールチップで、どの CSS ルールによって値が決まったかを表示</a></li>
 <li><a href="/ja/docs/Tools/Page_Inspector/How_to/Inspect_and_select_colors">インスペクタで、Shift + クリックで色単位を切り替え</a></li>
 <li><a href="/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#Element_popup_menu">インスペクタで、"Scroll Into View" メニュー項目を実装</a></li>
 <li><a href="/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#Element_popup_menu">インスペクタで、url/id/resource 属性をリンクとして扱う</a></li>
 <li><a href="/ja/docs/Tools/Network_Monitor#Network_request_fields">ネットワークモニタで、IP アドレスをツールチップで表示</a></li>
</ul>

<p><a class="external external-icon" href="https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&amp;classification=Client%20Software&amp;chfieldto=2015-05-11&amp;query_format=advanced&amp;chfield=resolution&amp;chfieldfrom=2015-03-31&amp;chfieldvalue=FIXED&amp;bug_status=RESOLVED&amp;bug_status=VERIFIED&amp;component=Developer%20Tools&amp;component=Developer%20Tools%3A%203D%20View&amp;component=Developer%20Tools%3A%20Canvas%20Debugger&amp;component=Developer%20Tools%3A%20Console&amp;component=Developer%20Tools%3A%20Debugger&amp;component=Developer%20Tools%3A%20Framework&amp;component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&amp;component=Developer%20Tools%3A%20Inspector&amp;component=Developer%20Tools%3A%20Memory&amp;component=Developer%20Tools%3A%20Netmonitor&amp;component=Developer%20Tools%3A%20Object%20Inspector&amp;component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&amp;component=Developer%20Tools%3A%20Responsive%20Mode&amp;component=Developer%20Tools%3A%20Scratchpad&amp;component=Developer%20Tools%3A%20Source%20Editor&amp;component=Developer%20Tools%3A%20Storage%20Inspector&amp;component=Developer%20Tools%3A%20Style%20Editor&amp;component=Developer%20Tools%3A%20User%20Stories&amp;component=Developer%20Tools%3A%20Web%20Audio%20Editor&amp;component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&amp;component=Developer%20Tools%3A%20WebIDE&amp;product=Firefox&amp;list_id=12283503">Firefox 39 から Firefox 40 の間に解決した開発ツール関連のバグ一覧</a></p>

<h3 id="CSS" name="CSS">CSS</h3>

<ul>
 <li>接頭辞 (<code>-moz-</code>) 付きの {{cssxref("text-decoration-color")}}、{{cssxref("text-decoration-line")}}、{{cssxref("text-decoration-style")}} を削除しました ({{bug(1097922)}})。</li>
 <li>{{cssxref("text-align")}} プロパティで <code>match-parent</code> 値をサポートしました ({{bug(645642)}})。</li>
 <li>Quirks モードで {{cssxref("empty-cells")}} の既定値が、Standard モードと同様に <code>show</code> になりました ({{bug(1020400)}})。</li>
 <li>{{HTMLElement('meter')}} および {{HTMLElement('progress')}} 要素で使用している非標準の {{cssxref("-moz-orient")}} プロパティが、writing-modes の縦書きに対応しました。<code>auto</code> を削除して、<code>inline</code> および <code>block</code> を追加しました。新たな既定値は <code>inline</code> です ({{bug(1028716)}})。</li>
 <li>{{cssxref("font-size-adjust")}} プロパティで、値 <code>0</code> は <code>none</code> (調整を行わない、または値 <code>1.0</code> になる) と同じではなく、倍数 (高さが <code>0</code> になるため、表示されない) として扱うように修正しました ({{bug(1144885)}})。</li>
 <li>縦書きモードで text-overflow が動作しない問題を修正しました ({{bug(1117227)}})。</li>
</ul>

<h3 id="HTML" name="HTML">HTML</h3>

<p><em>変更なし。</em></p>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<ul>
 <li>{{jsxref("Statements/return", "return")}} 文の後方にある到達できないコード ({{jsxref("Statements/return", "セミコロンがない return 文", "#Automatic_semicolon_insertion", 1)}} の後方にある、到達できない式を含む) について、コンソールに警告を表示します ({{bug(1005110)}}、{{bug(1151931)}})。</li>
 <li>{{jsxref("Symbol.match")}} を追加しました ({{bug(1054755)}})。</li>
 <li>{{jsxref("Symbol.match")}} プロパティが {{Glossary("truthy")}} な値であるオブジェクトを {{jsxref("String.prototype.startsWith")}}、{{jsxref("String.prototype.endsWith")}}、{{jsxref("String.prototype.contains")}} に渡すと、{{jsxref("TypeError")}} が発生するようになりました ({{bug(1054755)}})。</li>
 <li>{{jsxref("Symbol.match")}} プロパティが {{Glossary("truthy")}} な値であるパターンオブジェクトを使用して {{jsxref("Operators/new", "new")}} を伴わずに {{jsxref("RegExp")}} 関数を呼び出すと、パターンそのものが返るようになりました。また、パターンオブジェクトの <code>constructor</code> プロパティは {{jsxref("RegExp")}} 関数に等しくなります ({{bug(1147817)}})。</li>
 <li>JS1.7の、for-in を使用する非標準の分割代入を廃止しました ({{bug(1083498)}})。</li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a> ループで、<a href="/ja/docs/Web/JavaScript/Reference/Statements/for...in#Firefox-specific_notes">非標準の初期化式</a>を無視してコンソールに警告を表示するようになりました ({{bug(748550)}} および {{bug(1164741)}})。</li>
 <li>Unicode コードポイントのエスケープ書式 <code><a href="/ja/docs/Web/JavaScript/Reference/Lexical_grammar#Unicode_code_point_escapes">\u{xxxxxx}</a></code> をサポートしました ({{bug(320500)}})。</li>
 <li>{{jsxref("String.prototype.includes", "String.prototype.contains", "#String.prototype.contains")}} は、{{jsxref("String.prototype.includes")}} に置き換えられました。<code>String.prototype.contains</code> はエイリアスとして維持します ({{bug(1102219)}})。</li>
 <li>{{jsxref("Operators/new", "new")}} 演算子を伴わない関数として {{jsxref("DataView")}} コンストラクタを呼び出した場合、ES6 に従って {{jsxref("TypeError")}} が発生するようになりました。</li>
 <li>Firefox 21 のリグレッションである、<code>get</code> トラップを持たずに配列から作成した Proxy が正常に動作しない問題を修正しました。{{jsxref("Proxy")}} で <code>get</code> トラップを定義していない場合は、{{jsxref("Array.length")}} が <code>0</code> を返します。また <code>set</code> トラップは呼び出されません。この問題の回避策は、必要ない場合でも <code>get</code> トラップを追加することでした。この問題は解決されました ({{bug(895223)}})。</li>
 <li>ES6 仕様に従い、{{jsxref("WeakMap.prototype")}} および {{jsxref("WeakSet.prototype")}} は通常のオブジェクトに変更しました ({{bug(1055473)}})。</li>
</ul>

<h3 id="InterfacesAPIsDOM" name="InterfacesAPIsDOM">インターフェイス/API/DOM</h3>

<h4 id="New_APIs" name="New_APIs">新規 API</h4>

<ul>
 <li><a href="/ja/docs/Web/API/Push_API">Push API</a> を、実験的に実装しました ({{bug(1038811)}})。設定項目 <code>services.push.enabled</code> で制御しており、デフォルトは無効にしています。</li>
</ul>

<h4 id="Web_Animations_API" name="Web_Animations_API">Web Animations API</h4>

<p>主に最新の仕様変更に合わせて、Web Animations の実験的な実装を改良しました:</p>

<ul>
 <li>{{domxref("AnimationPlayer.currentTime")}} が設定可能になりました ({{bug(1072037)}})。</li>
 <li>{{domxref("Element")}} で使用できる <code>Animatable.getAnimationPlayers()</code> を、{{domxref("Element.getAnimations()")}} に改名しました ({{bug(1145246)}})。</li>
 <li><code>Animation</code> および <code>AnimationEffect</code> を、新たに作成した {{domxref("KeyframeEffectReadOnly")}} に統合しました ({{bug(1153734)}})。</li>
 <li><code>AnimationPlayer</code> を {{domxref("Animation")}} に改名しました ({{bug(1154615)}})。</li>
 <li>{{domxref("AnimationTimeline")}} は、{{domxref("DocumentTimeline")}} を唯一実装する抽象クラスになりました ({{bug(1152171)}})。</li>
</ul>

<h4 id="CSSOM" name="CSSOM">CSSOM</h4>

<ul>
 <li>CSS Font Loading API を、Nightly および Developer Edition ではデフォルトで有効にしました ({{bug(1088437)}})。Beta および Release では、引き続き無効です。</li>
 <li><code>CSSCharsetRule</code> インターフェイスを削除しました。このオブジェクトは CSSOM で使用できなくなりました ({{bug(1148694)}})。これは仕様書 (最近の変更) および Chrome の動作に合致します。</li>
</ul>

<h4 id="WebRTC" name="WebRTC">WebRTC</h4>

<ul>
 <li>WebRTC の {{event("negotiationneeded")}} イベントは、再ネゴシエーション時だけでなく初期ネゴシエーション時にも送るようになりました ({{bug(1149838)}})。</li>
</ul>

<h4 id="DOM_HTML_DOM" name="DOM_HTML_DOM">DOM &amp; HTML DOM</h4>

<ul>
 <li>最新の仕様書の要求に従い、{{htmlattrxref("srcset", "image")}} をパースできないときに {{domxref("HTMLImageElement.currentSrc")}} メソッドは <code>null</code> ではなく <code>""</code> を返すようになりました ({{bug(1139560)}})。</li>
 <li>画像と同様に、Firefox は非表示の {{HTMLElement("iframe")}} に対して {{domxref("Window.requestAnimationFrame()")}} を抑制するようになりました ({{bug(1145439)}})。</li>
 <li>{{domxref("Navigator.taintEnabled")}} は Web workers で使用できなくなりました ({{bug(1154878)}})。</li>
</ul>

<h4 id="Web_Audio_API" name="Web_Audio_API">Web Audio API</h4>

<p><a href="/ja/docs/Web/API/Web_Audio_API">Web Audio API</a> の新たな拡張:</p>

<ul>
 <li>{{domxref("AudioContext.state")}}、{{domxref("AudioContext.onstatechange")}} プロパティと {{domxref("AudioContext.suspend()")}}、{{domxref("AudioContext.resume()")}}、{{domxref("AudioContext.close()")}} メソッドを実装しました ({{bug(1094764)}})。</li>
 <li>{{domxref("AudioBufferSourceNode")}} に {{domxref("AudioBufferSourceNode.detune")}} <a href="/ja/docs/DOM/AudioParam#k-rate">k-rate</a> 属性を実装しました ({{bug(1153783)}})。</li>
</ul>

<h4 id="Web_Workers" name="Web_Workers">Web Workers</h4>

<ul>
 <li><a href="/ja/docs/Web/API/ServiceWorker_API">Service Worker API</a> を少々改良しました。{{domxref("ServiceWorkerRegistration.update()", "update()")}} メソッドを、{{domxref("ServiceWorkerGlobalScope")}} から {{domxref("ServiceWorkerRegistration")}} に移動しました ({{bug(1131350)}})。</li>
 <li>{{domxref("ServiceWorkerRegistration")}} を Web workers で使用できます ({{bug("1131327")}})。</li>
 <li>{{domxref("DataStore")}} を Web workers で使用できます ({{bug(916196)}})。</li>
</ul>

<h4 id="IndexedDB" name="IndexedDB">IndexedDB</h4>

<ul>
 <li>{{domxref("IDBTransaction")}} は、デフォルトで永続的ではなくなりました ({{bug(1112702)}})。これは信頼性よりパフォーマンスを重視するものであり、また他のブラウザの動作に合致します。詳しくは <a href="/ja/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB#durable">durability の定義</a>をご覧ください。</li>
</ul>

<h4 id="Dev_Tools" name="Dev_Tools">Dev Tools</h4>

<ul>
 <li>{{domxref("Console.timeStamp")}} プロパティを追加しました ({{bug(922221)}})。</li>
</ul>

<h3 id="MathML" name="MathML">MathML</h3>

<p><em>変更なし。</em></p>

<h3 id="SVG" name="SVG">SVG</h3>

<p><em>変更なし。</em></p>

<h3 id="AudioVideo" name="AudioVideo">Audio/Video</h3>

<p><em>変更なし。</em></p>

<h2 id="Networking" name="Networking">ネットワーク</h2>

<p><em>変更なし。</em></p>

<h2 id="Security" name="Security">セキュリティ</h2>

<ul>
 <li>{{Glossary("CSP")}} でアスタリスク (<code>*</code>) を使用した場合に、<code>data:</code>、<code>blob:</code>、<code>:filesystem</code> の各スキーマは提供元のマッチング対象に含まれなくなりました。これらのスキーマを CSP でマッチさせるには、関連するヘッダで明示的に定義しなければなりません ({{bug(1086999)}})。</li>
</ul>

<h2 id="Changes_for_add-on_and_Mozilla_developers" name="Changes_for_add-on_and_Mozilla_developers">アドオン開発者と Mozilla 開発者向けの変更点</h2>

<h3 id="XUL" name="XUL">XUL</h3>

<ul>
 <li>透過したトップレベル window を生成することができなくなりました ({{bug(1162649)}})。</li>
</ul>

<h3 id="JavaScript_code_modules" name="JavaScript_code_modules">JavaScript コードモジュール</h3>

<ul>
 <li>Dict.jsm を削除しました ({{bug(1123309)}})。代わりに {{jsxref("Map")}} を使用してください。</li>
</ul>

<h3 id="XPCOM" name="XPCOM">XPCOM</h3>

<ul>
 <li><code>nsClassInfo::GetImplementationLanguage()</code> 関数とともに <code>nsIClassInfo.implementationLanguage</code> 属性を削除しました。</li>
 <li>以下の XPCOM インターフェイスを削除しました。代わりに標準 HTML インターフェイスを使用してください:
  <ul>
   <li><code>nsIDOMHTMLBRElement</code></li>
   <li><code>nsIDOMDivElement</code></li>
   <li><code>nsIDOMHTMLHeadingElement</code></li>
   <li><code>nsIDOMHTMLTableCaptionElement</code></li>
   <li><code>nsIDOMHTMLTableElement</code></li>
   <li><code>nsIDOMHTMLTitleElement</code></li>
  </ul>
 </li>
</ul>

<h3 id="Other" name="Other">その他</h3>

<ul>
 <li>Keywords API は非推奨になりました。まもなく削除します ({{bug(1140395)}})。</li>
 <li>自動テストシステムで、個体テスト関数のスキップをサポートしました。{{SectionOnPage("/en-US/docs/Mozilla/QA/Writing_xpcshell-based_unit_tests", "Conditional test functions")}} をご覧ください。</li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="http://www.mozilla.jp/firefox/40.0/releasenotes/">Firefox 40.0 リリースノート</a></li>
 <li><a href="https://dev.mozilla.jp/2015/06/firefox-40-addon-compatibility/">Firefox 40 アドオン互換性情報</a></li>
</ul>

<h2 id="Older_versions" name="Older_versions">過去のバージョン</h2>

<p>{{Firefox_for_developers('39')}}</p>
