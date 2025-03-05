---
title: Firefox 40 for developers
slug: Mozilla/Firefox/Releases/40
l10n:
  sourceCommit: dd08ec8cf78926a7854d8f5f7793bf7ae199484e
---

{{FirefoxSidebar}}

[Firefox の最新の開発者向け機能をテストするには、 Firefox Developer Edition をインストールしてください](https://www.mozilla.org/firefox/developer/) Firefox 40 は、米国時間 2015 年 8 月 11 日にリリースされました。このページでは、開発者に影響する Firefox 40 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [アニメーションビューを改良](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#firefox-40)
- [CSS プロパティの構文のヘルプを MDN から取得](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#get-help-for-css-properties)
- [インスペクターでフィルターを編集](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html)
- [ワーカーが発したメッセージをウェブコンソールで表示](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#console-api-messages)
- [ネットワークモニタでー、要求を URL でフィルタリング](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#filtering-by-url)
- [ネットワークモニターで、多くの新たなコンテキストメニュー項目を追加](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#context-menu)
- [ネットワークリソースがブラウザーのキャッシュから取得されたことを示す](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-fields)
- [ページインスペクターで、ルールをフィルタリング](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#filtering-rules)

さらに:

- [無名の eval ソース内で、debugger; 構文でブレーク](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/debug_eval_sources/index.html)
- [デバッガーのソースリストペインで、Copy URL および Open in New Tab コンテキストメニュー項目を追加](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane)
- [ウェブコンソールで console.dirxml をサポート](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#log-messages)
- [スタイルエディターで、スタイルシートリストのコンテキストメニューに "Open Link In New Tab" を追加](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html#the-style-sheet-pane)
- [インスペクターのセレクター検索で、CSS 接頭辞をつけなくても class や id を検索結果に表示](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#searching)
- [ボックスモデルビューのツールチップで、どの CSS ルールによって値が決まったかを表示](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html#the-box-model-view)
- [インスペクターで、Shift + クリックで色単位を切り替え](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/inspect_and_select_colors/index.html)
- [インスペクターで、"Scroll Into View" メニュー項目を実装](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- [インスペクターで、url/id/resource 属性をリンクとして扱う](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- [ネットワークモニターで、IP アドレスをツールチップで表示](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-fields)

[Firefox 39 から Firefox 40 の間に解決した開発ツール関連のバグ一覧](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-05-11&query_format=advanced&chfield=resolution&chfieldfrom=2015-03-31&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12283503)

### CSS

- 接頭辞 (`-moz-`) 付きの {{cssxref("text-decoration-color")}}、{{cssxref("text-decoration-line")}}、{{cssxref("text-decoration-style")}} を削除しました ([Firefox バグ 1097922](https://bugzil.la/1097922))。
- {{cssxref("text-align")}} プロパティで `match-parent` 値をサポートしました ([Firefox バグ 645642](https://bugzil.la/645642))。
- Quirks モードで {{cssxref("empty-cells")}} の既定値が、Standard モードと同様に `show` になりました ([Firefox バグ 1020400](https://bugzil.la/1020400))。
- {{HTMLElement('meter')}} および {{HTMLElement('progress')}} 要素で使用している非標準の {{cssxref("-moz-orient")}} プロパティが、writing-modes の縦書きに対応しました。`auto` を削除して、`inline` および `block` を追加しました。新たな既定値は `inline` です ([Firefox バグ 1028716](https://bugzil.la/1028716))。
- {{cssxref("font-size-adjust")}} プロパティで、値 `0` は `none` (調整を行わない、または値 `1.0` になる) と同じではなく、倍数 (高さが `0` になるため、表示されない) として扱うように修正しました ([Firefox バグ 1144885](https://bugzil.la/1144885))。
- 縦書きモードで text-overflow が動作しない問題を修正しました ([Firefox バグ 1117227](https://bugzil.la/1117227))。

### HTML

_変更なし。_

### JavaScript

- {{jsxref("Statements/return", "return")}} 文の後方にある到達できないコード ({{jsxref("Statements/return", "セミコロンがない return 文", "#Automatic_semicolon_insertion", 1)}} の後方にある、到達できない式を含む) について、コンソールに警告を表示します ([Firefox バグ 1005110](https://bugzil.la/1005110)、[Firefox バグ 1151931](https://bugzil.la/1151931))。
- {{jsxref("Symbol.match")}} を追加しました ([Firefox バグ 1054755](https://bugzil.la/1054755))。
- {{jsxref("Symbol.match")}} プロパティが {{Glossary("truthy")}} な値であるオブジェクトを {{jsxref("String.prototype.startsWith")}}、{{jsxref("String.prototype.endsWith")}}、`String.prototype.contains` に渡すと、{{jsxref("TypeError")}} が発生するようになりました ([Firefox バグ 1054755](https://bugzil.la/1054755))。
- {{jsxref("Symbol.match")}} プロパティが{{Glossary("truthy", "真値")}}であるパターンオブジェクトを使用して {{jsxref("Operators/new", "new")}} を伴わずに {{jsxref("RegExp")}} 関数を呼び出すと、パターンそのものが返るようになりました。また、パターンオブジェクトの `constructor` プロパティは {{jsxref("RegExp")}} 関数に等しくなります ([Firefox バグ 1147817](https://bugzil.la/1147817))。
- JS1.7 の、for-in を使用する非標準の分割代入を廃止しました ([Firefox バグ 1083498](https://bugzil.la/1083498))。
- [for...in](/ja/docs/Web/JavaScript/Reference/Statements/for...in) ループで、[非標準の初期化式](/ja/docs/Web/JavaScript/Reference/Statements/for...in#firefox-specific_notes)を無視してコンソールに警告を表示するようになりました ([Firefox バグ 748550](https://bugzil.la/748550) および [Firefox バグ 1164741](https://bugzil.la/1164741))。
- Unicode コードポイントのエスケープ書式 [`\u{xxxxxx}`](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#unicode_code_point_escapes) をサポートしました ([Firefox バグ 320500](https://bugzil.la/320500))。
- {{jsxref("String.prototype.includes", "String.prototype.contains", "#String.prototype.contains")}} は、{{jsxref("String.prototype.includes")}} に置き換えられました。`String.prototype.contains` はエイリアスとして維持します ([Firefox バグ 1102219](https://bugzil.la/1102219))。
- {{jsxref("DataView")}} コンストラクターを {{jsxref("Operators/new", "new")}} 演算子を伴わない関数として呼び出した場合、ES6 に従って {{jsxref("TypeError")}} が発生するようになりました。
- Firefox 21 のリグレッションである、`get` トラップを持たずに配列から作成した Proxy が正常に動作しない問題を修正しました。{{jsxref("Proxy")}} で `get` トラップを定義していない場合は、{{jsxref("Array.length")}} が `0` を返します。また `set` トラップは呼び出されません。この問題の回避策は、必要ない場合でも `get` トラップを追加することでした。この問題は解決されました ([Firefox バグ 895223](https://bugzil.la/895223))。
- ES6 仕様に従い、 `WeakMap.prototype` および `WeakSet.prototype` は通常のオブジェクトに変更しました ([Firefox バグ 1055473](https://bugzil.la/1055473))。

### インターフェイス/API/DOM

#### 新規 API

- [プッシュ API](/ja/docs/Web/API/Push_API) を、実験的に実装しました ([Firefox バグ 1038811](https://bugzil.la/1038811))。設定項目 `services.push.enabled` で制御しており、デフォルトは無効にしています。

#### ウェブアニメーション API

主に最新の仕様変更に合わせて、ウェブアニメーションの実験的な実装を改良しました:

- {{domxref("AnimationPlayer.currentTime")}} が設定可能になりました ([Firefox バグ 1072037](https://bugzil.la/1072037))。
- {{domxref("Element")}} で使用できる `Animatable.getAnimationPlayers()` を、{{domxref("Element.getAnimations()")}} に改名しました ([Firefox バグ 1145246](https://bugzil.la/1145246))。
- `Animation` および `AnimationEffect` を、新たに作成した `KeyframeEffectReadOnly` に統合しました ([Firefox バグ 1153734](https://bugzil.la/1153734))。
- `AnimationPlayer` を {{domxref("Animation")}} に改名しました ([Firefox バグ 1154615](https://bugzil.la/1154615))。
- {{domxref("AnimationTimeline")}} は、{{domxref("DocumentTimeline")}} を唯一実装する抽象クラスになりました ([Firefox バグ 1152171](https://bugzil.la/1152171))。

#### CSSOM

- CSS Font Loading API を、Nightly および Developer Edition ではデフォルトで有効にしました ([Firefox バグ 1088437](https://bugzil.la/1088437))。Beta および Release では、引き続き無効です。
- `CSSCharsetRule` インターフェイスを削除しました。このオブジェクトは CSSOM で使用できなくなりました ([Firefox バグ 1148694](https://bugzil.la/1148694))。これは仕様書 (最近の変更) および Chrome の動作に合致します。

#### WebRTC

- WebRTC の {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}} イベントは、再ネゴシエーション時だけでなく初期ネゴシエーション時にも送るようになりました ([Firefox バグ 1149838](https://bugzil.la/1149838))。

#### DOM & HTML DOM

- 最新の仕様書の要求に従い、[`srcset`](/ja/docs/Web/HTML/Element/img#srcset) をパースできないときに {{domxref("HTMLImageElement.currentSrc")}} メソッドは `null` ではなく `""` を返すようになりました ([Firefox バグ 1139560](https://bugzil.la/1139560))。
- 画像と同様に、Firefox は非表示の {{HTMLElement("iframe")}} に対して {{domxref("Window.requestAnimationFrame()")}} を抑制するようになりました ([Firefox バグ 1145439](https://bugzil.la/1145439))。
- {{domxref("NavigatorID/taintEnabled", "Navigator.taintEnabled")}} はウェブワーカーで使用できなくなりました ([Firefox バグ 1154878](https://bugzil.la/1154878))。

#### ウェブオーディオ API

[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) の新たな拡張です。

- {{domxref("BaseAudioContext/state", "AudioContext.state")}}、{{domxref("BaseAudioContext.statechange_event", "AudioContext.onstatechange")}} プロパティと {{domxref("AudioContext.suspend()")}}、{{domxref("AudioContext.resume()")}}、{{domxref("AudioContext.close()")}} メソッドを実装しました ([Firefox バグ 1094764](https://bugzil.la/1094764))。
- {{domxref("AudioBufferSourceNode")}} に {{domxref("AudioBufferSourceNode.detune")}} [k-rate](/ja/docs/Web/API/AudioParam#k-rate) 属性を実装しました ([Firefox バグ 1153783](https://bugzil.la/1153783))。

#### ウェブワーカー

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API) を少々改良しました。{{domxref("ServiceWorkerRegistration.update()", "update()")}} メソッドを、{{domxref("ServiceWorkerGlobalScope")}} から {{domxref("ServiceWorkerRegistration")}} に移動しました ([Firefox バグ 1131350](https://bugzil.la/1131350))。
- {{domxref("ServiceWorkerRegistration")}} をウェブワーカーで使用できます ([Firefox バグ 1131327](https://bugzil.la/1131327))。
- {{domxref("DataStore")}} をウェブワーカーで使用できます ([Firefox バグ 916196](https://bugzil.la/916196))。

#### IndexedDB

- {{domxref("IDBTransaction")}} は、デフォルトで永続的ではなくなりました ([Firefox バグ 1112702](https://bugzil.la/1112702))。これは信頼性よりパフォーマンスを重視するものであり、また他のブラウザーの動作に合致します。詳しくは [durability の定義](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#durable)をご覧ください。

#### 開発者ツール

- {{domxref("console.timeStamp")}} プロパティを追加しました ([Firefox バグ 922221](https://bugzil.la/922221))。

### MathML

_変更なし。_

### SVG

_変更なし。_

### Audio/Video

_変更なし。_

## ネットワーク

_変更なし。_

## セキュリティ

- {{Glossary("CSP")}} でアスタリスク (`*`) を使用した場合に、`data:`、`blob:`、`:filesystem` の各スキーマは提供元のマッチング対象に含まれなくなりました。これらのスキーマを CSP でマッチさせるには、関連するヘッダーで明示的に定義しなければなりません ([Firefox バグ 1086999](https://bugzil.la/1086999))。

## アドオン開発者と Mozilla 開発者向けの変更点

### XUL

- 透過したトップレベル window を生成することができなくなりました ([Firefox バグ 1162649](https://bugzil.la/1162649))。

### JavaScript コードモジュール

- Dict.jsm を削除しました ([Firefox バグ 1123309](https://bugzil.la/1123309))。代わりに {{jsxref("Map")}} を使用してください。

### XPCOM

- `nsClassInfo::GetImplementationLanguage()` 関数とともに `nsIClassInfo.implementationLanguage` 属性を削除しました。
- 以下の XPCOM インターフェイスを削除しました。代わりに標準 HTML インターフェイスを使用してください。

  - `nsIDOMHTMLBRElement`
  - `nsIDOMDivElement`
  - `nsIDOMHTMLHeadingElement`
  - `nsIDOMHTMLTableCaptionElement`
  - `nsIDOMHTMLTableElement`
  - `nsIDOMHTMLTitleElement`

### その他

- Keywords API は非推奨になりました。まもなく削除します ([Firefox バグ 1140395](https://bugzil.la/1140395))。
- 自動テストシステムで、個体テスト関数のスキップをサポートしました。[Conditionally running a test](https://firefox-source-docs.mozilla.org/testing/xpcshell/index.html#conditionally-running-a-test) の XPCShell testing をご覧ください。

## 過去のバージョン

{{Firefox_for_developers('39')}}
