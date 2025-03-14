---
title: Firefox 70 for developers
slug: Mozilla/Firefox/Releases/70
---

{{FirefoxSidebar}}

Firefox 70 は、米国時間 2019 年 10 月 22 日 にリリースされました。このページでは、開発者に影響する Firefox 70 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

#### デバッガーの更新

- [デバッガー](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) で [DOM Mutation](https://firefox-source-docs.mozilla.org/devtools-user/debugger/break_on_dom_mutation/index.html) にブレークポイントを設定できるようになりました。ノードやその属性が変化したときや、ノードが DOM から削除されたときに一時停止できます ([Firefox バグ 1576219](https://bugzil.la/1576219))。
- デバッガーで一時停止したときに、ステップ実行や復帰ができるボタンを持つオーバーレイをページ上に表示するようになりました ([Firefox バグ 1574646](https://bugzil.la/1574646))。
- デバッガーで、すでにエンジンによって破棄されているソース (たいてい、ページを読み込むときに 1 回実行するスクリプト) を表示するようになりました。よって次に実行するとき、デバッグするためのブレークポイントを正しく設定できます ([Firefox バグ 1572280](https://bugzil.la/1572280))。
- デバッガーの [スコープパネル](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) のグループ化を簡単にして、以前表示した追加スコープをトップレベル関数の上に統合しました (例: [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let)、[`with`](/ja/docs/Web/JavaScript/Reference/Statements/with)、[`if`/`else`](/ja/docs/Web/JavaScript/Reference/Statements/if...else) で作成されたブロック) ([Firefox バグ 1448166](https://bugzil.la/1448166))。
- デバッガーが、ステップ実行中に [スコープパネル](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) で現在選択および展開している変数を維持するようになりました ([Firefox バグ 1405402](https://bugzil.la/1405402))。
- デバッガーが、非同期関数のステップオーバーを正しく扱うようになりました。[非同期関数](/ja/docs/Web/JavaScript/Reference/Statements/async_function) のデバッグが容易になります ([Firefox バグ 1570178](https://bugzil.la/1570178))。
- [コンテナーセッション](https://support.mozilla.org/kb/containers) (異なるログイン状態でテストする際に便利です) でデバッグするとき、デバッガーでソースを正しく表示するようになりました ([Firefox バグ 1375036](https://bugzil.la/1375036))。
- デバッガーで [`debugger`](/ja/docs/Web/JavaScript/Reference/Statements/debugger) 文にブレークポイントを設定して "ここでは停止しない" に切り替えると、`debugger` 文を無効にできます ([Firefox バグ 925269](https://bugzil.la/925269))。
- WebExtensions の開発者は、ストレージタブの拡張機能ストレージで `browser.storage.local` を調査できます ([Firefox バグ 1585499](https://bugzil.la/1585499))。

#### その他の更新

- An icon will be displayed next to inactive CSS properties in the [インスペクター](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) の [ルールビュー](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules_view) で、使用されていない CSS プロパティの隣にアイコンを表示するようになりました。アイコンにマウスポインターを載せると、なぜ使用されていないかの情報を表示します ([Firefox バグ 1306054](https://bugzil.la/1306054))。
- [CSS ルールビュー](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules_view) で前景色の [カラーピッカー](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/inspect_and_select_colors/index.html) に、背景色とのコントラストがアクセシビリティの基準に準拠しているかを表示するようになりました ([Firefox バグ 1478156](https://bugzil.la/1478156))。
- [アクセシビリティインスペクター](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) の [チェック項目](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#check_for_accessibility_issues) ドロップダウンメニューに、キーボードのアクセシビリティチェックを追加しました ([Firefox バグ 1564968](https://bugzil.la/1564968))。

### HTML

- 以下の状況で、安全に生成されたパスワードを Firefox がユーザーに提案できるようになりました:

  - `autocomplete="new-password"` 属性を設定した {{HTMLelement("input")}} 要素。
  - 新しいパスワードを意図したかにかかわらず、パスワード入力要素でユーザーがコンテキストメニューを開いた。

### CSS

- {{cssxref("opacity")}} や {{SVGAttr("stop-opacity")}} の、不透明度の値をパーセンテージで指定できるようになりました ([Firefox バグ 1562086](https://bugzil.la/1562086))。
- {{cssxref("grid-auto-columns")}} および {{cssxref("grid-auto-rows")}} が、複数のトラックサイズの値を受け入れるようになりました ([Firefox バグ 1339672](https://bugzil.la/1339672))。
- いくつかのテキスト関連の CSS プロパティを、デフォルトで有効にしました ([Firefox バグ 1573631](https://bugzil.la/1573631)):

  - {{cssxref("text-decoration-thickness")}}。
  - {{cssxref("text-underline-offset")}}。
  - {{cssxref("text-decoration-skip-ink")}}。既定値は `auto` であり、下線や上線が {{Glossary("glyph", "グリフ")}} を横切る場所で途切れるようになりました。

- {{cssxref("display")}} プロパティが、内部表示種別と外部表示種別を表す 2 つのキーワードを受け入れるようになりました ([Firefox バグ 1038294](https://bugzil.la/1038294)、[Firefox バグ 1105868](https://bugzil.la/1105868)、[Firefox バグ 1557825](https://bugzil.la/1557825))。
- {{cssxref("font-size")}} プロパティが新しいキーワード `xxx-large` を受け入れるようになりました ([Firefox バグ 1553545](https://bugzil.la/1553545))。
- ロジックとパフォーマンスの都合で、{{cssxref(":visited")}} 擬似クラスが {{htmlelement("link")}} 要素にマッチしないようになりました ([Firefox バグ 1572246](https://bugzil.la/1572246)、理由について詳しくは [Intent to ship: Make \<link> elements always unvisited](https://groups.google.com/forum/#!msg/mozilla.dev.platform/1NP6oJzK6zg/ftAz_TajAAAJ) および [\[selectors\] :link and \<link>](https://github.com/w3c/csswg-drafts/issues/3817) をご覧ください)。
- {{cssxref("quotes")}} プロパティで値 `auto` をサポートしました ([Firefox バグ 1421938](https://bugzil.la/1421938))。
- パフォーマンスを向上させるため、{{htmlelement("style")}} 要素内のスタイルシートを再使用のためキャッシュするようになりました ([Firefox バグ 1480146](https://bugzil.la/1480146))。現在、`@import` 規則を持つスタイルシートは含まれませんので注意してください。
- `<ratio>` 型の値として `<number>/<number>` や 1 つの `<number>` を受け入れるようになりました ([Firefox バグ 1565562](https://bugzil.la/1565562))。

#### 廃止

- 3 値の \<position> のサポートを廃止しました(背景の位置を除く) ([Firefox バグ 1559276](https://bugzil.la/1559276))。[互換性情報をご覧ください](https://www.fxsitecompat.dev/docs/2019/3-valued-css-position-is-no-longer-supported-except-for-background-position/)。
- {{cssxref("counter")}} および {{cssxref("counters")}} で値 `none` が無効になりました。Level 3 仕様を CSS 2.1 に合わせるための変更です [Firefox バグ 1576821](https://bugzil.la/1576821))。

### SVG

- 切り取り、コピー、貼り付けのイベントを、SVG グラフィック要素へディスパッチするようになりました ([Firefox バグ 1569474](https://bugzil.la/1569474))。

### MathML

- {{MathMLElement("math")}} 要素の非推奨属性である `mode` を削除しました ([Firefox バグ 1573438](https://bugzil.la/1573438))。
- 0 ではない単位なしの長さの値、例えば `500%` を表す `5` をサポートしなくなりました。
- ドットで終わる長さの値、例えば `2.` や `34.px` もサポートしなくなりました。

### JavaScript

- [Numeric separators](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#数値の区切り文字) をサポートしました ([Firefox バグ 1435818](https://bugzil.la/1435818))。
- {{jsxref("RelativeTimeFormat.formatToParts", "Intl.RelativeTimeFormat.formatToParts()")}} メソッドを実装しました ([Firefox バグ 1473229](https://bugzil.la/1473229))。
- ECMAScript 402 Intl API に対応して、{{jsxref("BigInt.prototype.toLocaleString()")}} メソッドが `locales` および `options` 引数とともに動作するように更新しました。また、{{jsxref("NumberFormat.format", "Intl.NumberFormat.format()")}} および {{jsxref("NumberFormat.formatToParts", "Intl.NumberFormat.formatToParts()")}} が {{jsxref("BigInt")}} 値を受け入れるようになりました ([Firefox バグ 1543677](https://bugzil.la/1543677))。
- 最新の ECMAScript 仕様に対応して、先頭のゼロを [BigInt リテラル](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#bigint_literal) で拒否するようになりました。`08n` や `09n` は、`07n` のような古い 8 進数値を使用した場合のエラーと同様に無効です。8 進 `BigInt` 数値では常に、先頭のゼロと文字 "o" (小文字または大文字) を使用してください (すなわち `0755n` ではなく `0o755n`)。[Firefox バグ 1568619](https://bugzil.la/1568619) をご覧ください。
- {{jsxref("RelativeTimeFormat", "Intl.RelativeTimeFormat")}} コンストラクターで Unicode 拡張キーの "nu" をサポートしました。また、{{jsxref("RelativeTimeFormat.resolvedOptions", "Intl.RelativeTimeFormat.resolvedOptions()")}} メソッドが `numberingSystem` も返すようになりました ([Firefox バグ 1521819](https://bugzil.la/1521819))。

### API

#### DOM

- {{domxref("History.back","back()")}}、{{domxref("History.forward","forward()")}}、{{domxref("History.go","go()")}} メソッドが非同期になりました。ナビゲーションが完了した通知を得るには、`{{domxref("Document/defaultView/popstate_event", "popstate")}}` イベントにリスナーを追加します([Firefox バグ 1563587](https://bugzil.la/1563587))。
- web workers で {{DOMxRef("DOMMatrix")}}、{{DOMxRef("DOMPoint")}} などをサポートしました ([Firefox バグ 1420580](https://bugzil.la/1420580))。
- {{domxref("Document.all")}}、{{domxref("Document.clear")}}、{{domxref("Document.captureEvents")}}、{{domxref("Document.clearEvents")}} を {{domxref("HTMLDocument")}} から {{domxref("Document")}} に移動しました ([Firefox バグ 1558570](https://bugzil.la/1558570)、[Firefox バグ 1558571](https://bugzil.la/1558571))。
- クロスオリジン {{htmlelement("iframe")}} の内部から [通知](/ja/docs/Web/API/Notifications_API) の許可を要求できないようになりました ([Firefox バグ 1560741](https://bugzil.la/1560741))。

#### Workers/Service workers

- worker や shared worker のスクリプト、すなわち {{domxref("Worker.Worker()", "Worker()")}} や {{domxref("SharedWorker.SharedWorker()", "SharedWorker()")}} コンストラクターの対象で、厳格な MIME タイプの確認を強制するようになりました ([Firefox バグ 1523706](https://bugzil.la/1523706))。

#### メディア、Web Audio、WebRTC

- {{domxref("RTCPeerConnection.restartIce()")}} メソッドを追加しました。これは新しい "perfect negotiation" の仕組みを実装するために必要な、4 つの変更点のひとつです。残りは将来の Firefox の更新で実現する予定です ([Firefox バグ 1551316](https://bugzil.la/1551316))。
- {{domxref("RTCPeerConnection.setRemoteDescription()")}} メソッドを引数なしで呼び出せるようになりました。これはもうひとつの "perfect negotiation" に関する更新です ([Firefox バグ 1568292](https://bugzil.la/1568292))。
- {{domxref("MediaTrackSupportedConstraints.groupId")}} をサポートしました。また、{{domxref("MediaTrackConstraints.groupId")}} プロパティをサポートしましたので `true` を返すようになりました ([Firefox バグ 1561254](https://bugzil.la/1561254))。
- 新たな Web Audio API 機能をいくつか実装および更新しました:

  - {{domxref("AudioContext.getOutputTimestamp()")}} を実装しました ([Firefox バグ 1324545](https://bugzil.la/1324545))。
  - {{domxref("AudioContext.baseLatency")}} および {{domxref("AudioContext.outputLatency")}} を実装しました ([Firefox バグ 1324552](https://bugzil.la/1324552))。
  - {{domxref("MediaElementAudioSourceNode.mediaElement")}} および {{domxref("MediaStreamAudioSourceNode.mediaStream")}} を実装しました ([Firefox バグ 1350973](https://bugzil.la/1350973))。
  - {{domxref("ChannelMergerNode.ChannelMergerNode()", "ChannelMergerNode()")}} コンストラクターで、`channelCount` や `channelCountMode` に無効な値を設定しようとした場合にエラーが発生するようになりました ([Firefox バグ 1456263](https://bugzil.la/1456263))。

#### Canvas と WebGL

- {{domxref("CanvasRenderingContext2D.getTransform()")}} と、引数として行列の個々の要素を表す複数の引数に代わり matrix オブジェクトを受け入れる {{domxref("CanvasRenderingContext2D.setTransform()")}} の新しい派生形をサポートしました ([Firefox バグ 928150](https://bugzil.la/928150))。

### HTTP

- [強化型トラッキング防止機能](/ja/docs/Web/Privacy/Firefox_tracking_protection) が有効であるときの、サードパーティーのトラッキングリソースに対する既定のリファラーのポリシーが `strict-origin-when-cross-origin` になりました ([Firefox バグ 1569996](https://bugzil.la/1569996))。
- {{httpheader("Referer")}} 要求ヘッダーのサイズが 4 KB (4,096 バイト) に制限されました。過大なリファラーが制限を超えた場合は、オリジンの部分のみ送信します ([Firefox バグ 1557346](https://bugzil.la/1557346))。
- [HTTP キャッシュ](/ja/docs/Web/HTTP/Caching) が、トップレベルドキュメントのオリジンごとに分割されました ([Firefox バグ 1536058](https://bugzil.la/1536058))。

#### 廃止

- {{HTTPHeader("X-Frame-Options")}} の `allow-from uri` ディレクティブを削除しました。代わりに、{{CSP("frame-ancestors")}} ディレクティブを付加した {{HTTPHeader("Content-Security-Policy")}} ヘッダーを使用してください ([Firefox バグ 1301529](https://bugzil.la/1301529))。

### WebDriver conformance (Marionette)

- `WebDriver:TakeScreenshot` コマンドを、[Fission](https://wiki.mozilla.org/Project_Fission) 互換に更新しました。[クロスオリジン](/ja/docs/Web/Security/Same-origin_policy) iframe 由来のコンテンツが、ページのスクリーンショットに含まれるようになります。あるいは chrome スコープから呼び出したとき、ブラウザーウィンドウの内部に、アクティブなタブの内容が見えるようになります ([Firefox バグ 1559592](https://bugzil.la/1559592))。
- `WebDriver:TakeScreenshot` が、ハイライトに使用する DOM 要素のリストを受け入れないようになりました ([Firefox バグ 1575511](https://bugzil.la/1575511))。
- `WebDriver:ExecuteScript` および `WebDriver:ExecuteAsyncScript` が、`window.onunload` をウェブに公開される方法で設定しないようになりました ([Firefox バグ 1568991](https://bugzil.la/1568991))。

## アドオン開発者向けの変更点

### API の変更点

- [`topSites.get()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) メソッドに、ユーザーが新しいタブを開いたときに表示するページの一覧を返すようにするための新しい引数を追加しました ([Firefox バグ 1568617](https://bugzil.la/1568617))。
- [`privacy.network`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/privacy/network) プロパティの `WebRTCIPHandlingPolicy` サブプロパティで許可される値を、Chrome で見られる動作に合うよう修正しました ([Firefox バグ 1452713](https://bugzil.la/1452713)):

  - 以前はプロキシが設定されていない場合に、`disable_non_proxied_udp` が WebRTC の使用を妨げていました。現在は、プロキシが設定されている場合は常にプロキシを使います。設定されていない場合は、プロキシを経由しない接続を許可するようになりました。
  - `proxy_only` を、古い動作を提供するために使用できるようになりました。これは、プロキシを使用した TURN on TCP による ICE ネゴシエーションのみ許可する効果があります。これ以外の接続は許可されません。

### マニフェストの変更点

#### 廃止

- chromium ベースのブラウザーで使用するテーマキーの別名として提供された、以下の [theme](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) キープロパティを削除しました:

  - `images` プロパティの `headerURL`。今後は `theme_frame` を使用してください。
  - `colors` プロパティ:

    - `accentcolor`。今後は `frame` を使用してください。
    - `textcolor`。今後は `tab_background_text` を使用してください。

## 関連情報

- Hacks ブログのリリース記事: [Firefox 70 — a bountiful release for all](https://hacks.mozilla.org/2019/10/firefox-70-a-bountiful-release-for-all/)

## 過去のバージョン

{{Firefox_for_developers(69)}}
