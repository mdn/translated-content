---
title: Firefox 41 for developers
slug: Mozilla/Firefox/Releases/41
---

Firefox 41 は、米国時間 2015 年 9 月 22 日にリリースされました。このページでは、開発者に影響する Firefox 41 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [DOM ノードのスクリーンショットを撮影する](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element_popup_menu)
- [HAR としてコピー/HAR として保存](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#copysave_all_as_har)
- [ルールビューの "Add Rule" ボタン](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#add_rules)
- [タブでソースを表示](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) (デフォルトは無効)
- [CSS ルールのコピー方法を追加](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#copy_rules)
- [ルールビューで画像を data: URI としてコピー](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/view_background_images/index.html)
- [CSP の情報を表示するコマンドを GCLI に追加](/ja/docs/Tools/GCLI/Display_security_information)

[Firefox 40 から Firefox 41 の間に解決した開発ツール関連のバグ一覧](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-06-29&query_format=advanced&chfield=resolution&chfieldfrom=2015-05-11&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12283503): これらのバグの多く (特にパフォーマンスツールに関するバグ) の修正は Firefox 40 に前倒しされました。

### CSS

- 縦書き文章のレイアウト機能を、デフォルトで有効にしました ([Firefox バグ 1138384](https://bugzil.la/1138384))。以下の CSS プロパティが使用可能になりました:
  - 書字方向を選択する: {{cssxref("writing-mode")}}
  - 文字の向きを制御する: {{cssxref("text-orientation")}}.
  - 方向に依存しない {{cssxref("width")}} および {{cssxref("height")}}: {{cssxref("block-size")}} および {{cssxref("inline-size")}}
  - 方向に依存しない {{cssxref("min-width")}} および {{cssxref("min-height")}}: {{cssxref("min-block-size")}} および {{cssxref("min-inline-size")}}
  - 方向に依存しない {{cssxref("max-width")}} および {{cssxref("max-height")}}: {{cssxref("max-block-size")}} および {{cssxref("max-block-size")}}
  - 方向に依存しない {{cssxref("margin-top")}}、{{cssxref("margin-right")}}、{{cssxref("margin-bottom")}}、{{cssxref("margin-left")}}: {{cssxref("margin-block-start")}}、{{cssxref("margin-block-end")}}、{{cssxref("margin-inline-start")}}、{{cssxref("margin-inline-end")}}
  - 方向に依存しない {{cssxref("padding-top")}}、{{cssxref("padding-right")}}、{{cssxref("padding-bottom")}}、{{cssxref("padding-left")}}: {{cssxref("padding-block-start")}}、{{cssxref("padding-block-end")}}、{{cssxref("padding-inline-start")}}、{{cssxref("padding-inline-end")}}
  - 方向に依存しない {{cssxref("border-top")}}、{{cssxref("border-right")}}、{{cssxref("border-bottom")}}、{{cssxref("border-left")}} および幅、スタイル、色を個別に指定するプロパティ: {{cssxref("border-block-start")}}、{{cssxref("border-block-start-width")}}、{{cssxref("border-block-start-style")}}、{{cssxref("border-block-start-color")}}、{{cssxref("border-block-end")}}、{{cssxref("border-block-end-width")}}、{{cssxref("border-block-end-style")}}、{{cssxref("border-block-end-color")}}、{{cssxref("border-inline-start")}}、{{cssxref("border-inline-start-width")}}、{{cssxref("border-inline-start-style")}}、{{cssxref("border-inline-start-color")}}、{{cssxref("border-inline-end")}}、{{cssxref("border-inline-end-width")}}、{{cssxref("border-inline-end-style")}}、{{cssxref("border-inline-end-color")}}
  - 方向に依存しない {{cssxref("top")}}、{{cssxref("right")}}、{{cssxref("bottom")}}、{{cssxref("left")}}: {{cssxref("offset-block-start")}}、{{cssxref("offset-block-end")}}、{{cssxref("offset-inline-start")}}、{{cssxref("offset-inline-end")}}

- SVG で {{cssxref("transform-origin")}} プロパティをサポートしました。また、{{cssxref("transform-box")}} プロパティを実装しました ([Firefox バグ 923193](https://bugzil.la/923193))。

### HTML

- `href` 属性を持たない {{HTMLElement("a")}} は、インタラクティブコンテンツとして分類しないようになりました。{{HTMLElement("label")}} 要素内でクリックすると、ラベル付けされたコンテンツがアクティブになります ([Firefox バグ 1167816](https://bugzil.la/1167816))。
- サイトアイコン (favicon およびショートカットアイコン) で、SVG アイコンをサポートしました ([Firefox バグ 366324](https://bugzil.la/366324))。
- [\<link rel='preconnect'>](/ja/docs/Web/HTML/Reference/Elements/link) で、[`crossorigin`](/ja/docs/Web/HTML/Reference/Elements/link#crossorigin) 属性をサポートしました ([Firefox バグ 1174152](https://bugzil.la/1174152))。
- picture 要素がリサイズやビューポートの変化に反応しない問題を修正しました ([Firefox バグ 1135812](https://bugzil.la/1135812))。

### JavaScript

- {{jsxref("Date.prototype")}} は {{jsxref("Date")}} のインスタンスではなく、通常のオブジェクトになりました ([Firefox バグ 861219](https://bugzil.la/861219))。
- {{jsxref("Date.prototype.toString")}} は、ジェネリックなメソッドになりました ([Firefox バグ 861219](https://bugzil.la/861219)).
- {{jsxref("Symbol.species")}} を追加しました ([Firefox バグ 1131043](https://bugzil.la/1131043))。
- {{jsxref("Map.Symbol.species", "Map[Symbol.species]")}} および {{jsxref("Set.Symbol.species", "Set[Symbol.species]")}} ゲッタを追加しました ([Firefox バグ 1131043](https://bugzil.la/1131043))。
- 非標準の {{jsxref("Statements/let", "let 式", "#let_expressions", 1)}}を廃止しました ([Firefox バグ 1023609](https://bugzil.la/1023609))。
- {{jsxref("Functions/Default_parameters", "既定値の代入を含む、分割された引数", "#Destructured_parameter_with_default_value_assignment", 1)}}をサポートしました ([Firefox バグ 1018628](https://bugzil.la/1018628))。
- ES6 に従い、[メソッドの定義](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions)で波括弧が必要になりました。波括弧を欠いた構文はエラーになります ([Firefox バグ 1150855](https://bugzil.la/1150855))。
- コンストラクター形式の[メソッド定義](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions) (ジェネレーターメソッドを除く) は不可になりました ([Firefox バグ 1059908](https://bugzil.la/1059908) および [Firefox バグ 1166950](https://bugzil.la/1166950))。
- ES6 使用への準拠の一環として `([a, b]) = [1, 2]` や `({a, b}) = { a: 1, b: 2 }` といった、括弧でくくるパターンの [destructuring](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring) 構文は無効と判断され、{{jsxref("SyntaxError")}} が発生するようになりました。詳しくは [Jeff Walden のブログ記事](https://whereswalden.com/2015/06/20/new-changes-to-make-spidermonkeys-and-firefoxs-parsing-of-destructuring-patterns-more-spec-compliant/) をご覧ください。
- [`new.target`](/ja/docs/Web/JavaScript/Reference/Operators/new.target) 構文をサポートしました ([Firefox バグ 1141865](https://bugzil.la/1141865))。

### インターフェイス/API/DOM

#### HTML Editing API

- 切り取り、コピー、貼り付けのコマンド制御を改良して、JS プログラムからウェブコンテンツのコピーや切り取りが可能になりました:
  - {{domxref("Document.queryCommandSupported()")}} に引数として `'paste'` コマンドを与えると、実際に操作を行うための十分な権限がない場合に `false` を返します ([Firefox バグ 1161721](https://bugzil.la/1161721))。
  - {{domxref("Document.queryCommandSupported()")}} に引数として `'cut'` または `'copy'` を与えると、ユーザーが起動したコードや権限を持つコードのコンテキスト内で呼び出された場合に `true` を返すようになりました ([Firefox バグ 1162952](https://bugzil.la/1162952))。
  - 引数として `'cut'` または `'copy'` を与えた {{domxref("Document.execCommand()")}} は動作しますが、ユーザーが起動したコードや権限を持つコードのコンテキスト内で呼び出された場合に限ります ([Firefox バグ 1012662](https://bugzil.la/1012662))。
  - {{domxref("Document.execCommand()")}} でコマンドが未サポートまたは無効である場合に、例外が発生しないようになりました ([Firefox バグ 1027560](https://bugzil.la/1027560))。

#### イベント

- 非標準の {{domxref("CloseEvent.initCloseEvent()")}} メソッド、および {{domxref("Event.createEvent", "Event.createEvent('CloseEvent')")}} メソッドを使用して {{domxref("CloseEvent")}} を生成する機能を削除しました。代わりに、標準のコンストラクターである {{domxref("CloseEvent.CloseEvent", "CloseEvent()")}} を使用してください ([Firefox バグ 1161950](https://bugzil.la/1161950))。
- デスクトップ版の Nightly で、{{domxref("PointerEvent")}} がデフォルトで有効になりました。Developer Edition、Beta、Release では無効であり、少なくともいくつかのバージョンの間は有効化しない予定です。([Firefox バグ 1166347](https://bugzil.la/1166347))
- 接頭辞なしの {{domxref("MouseEvent.movementX")}} および {{domxref("MouseEvent.movementY")}} を追加しました。接頭辞つきのプロパティは非推奨になり、将来のある時点で削除する予定です ([Firefox バグ 1164981](https://bugzil.la/1164981))。

#### Web Crypto

- {{domxref("SubtleCrypto.importKey()")}} および {{domxref("SubtleCrypto.exportKey()")}} で `ECDH` 鍵をサポートしました ([Firefox バグ 1050175](https://bugzil.la/1050175))。

#### Canvas API

- {{domxref("HTMLCanvasElement.captureStream()")}} および {{domxref("CanvasCaptureMediaStream")}} を追加して、{{HTMLElement("canvas")}} の表示内容をリアルタイムに流すことが可能になりました ([Firefox バグ 1032848](https://bugzil.la/1032848))。
- {{domxref("MediaStream.id")}} が、ストリームのユニークな ID を返すようになりました ([Firefox バグ 1089798](https://bugzil.la/1089798))。
- {{domxref("CanvasRenderingContext2D.filter")}} の初期値が、正しく `none` が設定されるようになりました ([Firefox バグ 1163124](https://bugzil.la/1163124))。

#### Service Worker

- [Service Worker](/ja/docs/Web/API/Service_Worker_API) の実験的な実装を改良しました:
  - {{domxref("ServiceWorkerGlobalScope.skipWaiting()")}} を実装しました ([Firefox バグ 1131352](https://bugzil.la/1131352))。
  - {{domxref("Clients.claim()")}} を追加しました ([Firefox バグ 1130684](https://bugzil.la/1130684))。
  - Service Worker で機能する上記以外のイベントは {{domxref("ExtendableEvent")}} から継承しており、{{domxref("ExtendableEvent.waitUntil","waitUntil()")}} メソッドにアクセスできます ([Firefox バグ 1160527](https://bugzil.la/1160527))。

- {{domxref("CacheStorage")}} および {{domxref("Cache")}} インターフェイスをサポートしました ([Firefox バグ 1110144](https://bugzil.la/1110144))。

#### WebGL

- WebGL コンテキスト属性 `failIfMajorPerformanceCaveat` を追加しました。また、システムのパフォーマンスが低い場合にコンテキスト生成を失敗させることを示すために、{{domxref("HTMLCanvasElement.getContext()")}} で WebGL コンテキストを生成する際にこの属性を設定できるようになりました ([Firefox バグ 1164970](https://bugzil.la/1164970))。

#### その他

- OS X および Windows で、{{domxref("NavigatorOnLine.onLine", "Navigator.onLine")}} はネットワーク接続の状態に応じて変化するようになりました (以前は "オフライン作業" モードを選択しなければ常に `true` を返していました) ([Firefox バグ 654579](https://bugzil.la/654579))。
- {{domxref("MessagePort")}} および {{domxref("MessageChannel")}} が [Web workers](/ja/docs/Web/API/Web_Workers_API) で使用可能になりました。また、デフォルトですべての状況で有効になりました ([Firefox バグ 952139](https://bugzil.la/952139) および [Firefox バグ 911972](https://bugzil.la/911972))。
- User Timing API が [Web workers](/ja/docs/Web/API/Web_Workers_API) で使用可能になりました ([Firefox バグ 1155761](https://bugzil.la/1155761))。
- [通知 API](/ja/docs/Web/API/Notifications_API) が [Web workers](/ja/docs/Web/API/Web_Workers_API) で使用可能になりました ([Firefox バグ 916893](https://bugzil.la/916893))。
- {{domxref("DOMRequest")}} および {{domxref("DOMCursor")}} が [Web workers](/ja/docs/Web/API/Web_Workers_API) で使用可能になりました ([Firefox バグ 1167650](https://bugzil.la/1167650))。
- [CSS Font Loading API](/ja/docs/Web/API/CSS_Font_Loading_API) を全面的に実装して、デフォルトで有効にしました ([Firefox バグ 1149381](https://bugzil.la/1149381))。
- Shared workers が、プライベートドキュメント (すなわち、プライベートウィンドウで開いているドキュメント) と非プライベートドキュメントとの間で共有されないようになりました ([Firefox バグ 1177621](https://bugzil.la/1177621))。
- {{domxref("URLUtilsSearchParams.searchParams")}} プロパティが読み取り専用になりました ([Firefox バグ 1174731](https://bugzil.la/1174731))。
- {{domxref('URLUtils.hash')}} プロパティが、URL フラグメントをデコードしないようになりました ([Firefox バグ 1093611](https://bugzil.la/1093611))。

### MathML

#### 新たな既定フォントとフォールバックフォントの制御

数式では特別なフォントが必要です。これまで、そのフォントは `mathml.css` ユーザーエージェントスタイルシート ({{MathMLElement("math")}} タグに font-family を設定) および設定項目 `font.mathfont-family` (伸縮する大型演算子で使用するフォールバックフォントを設定) でハードコードされていました。Firefox 41 より `<math>` タグへ自動的に設定される `x-math` 内部言語と、それに対応する設定項目 (例えば `font.name.serif.x-math`) を導入しました。ユーザーエージェントスタイルシートでは `<math>` タグの font-family を serif に設定して、設定項目 `font.mathfont-family` を `font.name.serif.x-math` で置き換えました。また、すべてのプラットフォームで、フォールバックフォントは基本的に "Latin Modern Math" が先頭にある同一のリストを使用するようになりました。既定フォント/フォールバックフォントは、標準の言語別フォント設定メニューで設定できます。詳しくは [Firefox バグ 947654](https://bugzil.la/947654) および [Firefox バグ 1160456](https://bugzil.la/1160456) をご覧ください。

### SVG

- サイトアイコン (favicon、ショートカットアイコン) で SVG をサポートしました ([Firefox バグ 366324](https://bugzil.la/366324))。

### Audio/Video

- 設定項目 `media.autoplay.enabled` が、信頼されていない {{domxref("HTMLMediaElement.play()")}} の起動 (ユーザー以外が作動したスクリプトから呼び出される場合) に対しても適用されるようになりました ([Firefox バグ 659285](https://bugzil.la/659285))。

## ネットワーク

- `X-Content-Duration` ヘッダーのサポートを廃止しました ([Firefox バグ 1160695](https://bugzil.la/1160695))。
- HTTP/2 プロトコルの草案版のサポートを廃止しました ([Firefox バグ 1132357](https://bugzil.la/1132357))。

## セキュリティ

- [CSP](/ja/docs/Web/HTTP/Guides/CSP) 1.1 の `manifest-src` [ディレクティブ](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)をサポートしました ([Firefox バグ 1089255](https://bugzil.la/1089255))。

## アドオン開発者と Mozilla 開発者向けの変更点

### XUL

_変更なし。_

### JavaScript コードモジュール

_変更なし。_

### XPCOM

_変更なし。_

### インターフェイス

_変更なし。_

### その他

- window のルートウィジェットを {{HTMLElement("canvas")}} に描画するための、新たな chrome コンテキスト限定の内部 API である {{domxref("CanvasRenderingContext2D.drawWidgetAsOnScreen()")}} を追加しました。この API は、オンスクリーンのウィジェットを取得するために OS を使用します。詳しくは [Firefox バグ 1167477](https://bugzil.la/1167477) をご覧ください。

## 関連情報

- [Firefox 41.0 リリースノート](http://www.mozilla.jp/firefox/41.0/releasenotes/)
- [Firefox 41 サイト互換性情報](/ja/docs/Mozilla/Firefox/Releases/41/Site_Compatibility)
- [Firefox 41 アドオン互換性情報](https://dev.mozilla.jp/2015/08/firefox-41-addon-compatibility/)

## 過去のバージョン

{{Firefox_for_developers('40')}}
