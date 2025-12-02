---
title: Firefox 136 for developers
slug: Mozilla/Firefox/Releases/136
l10n:
  sourceCommit: edf3344dc1edb0e2c07a20bd7e85211b4809fa8d
---

このページでは、開発者に影響する Firefox 136 の変更点をまとめています。Firefox 136 は、米国時間 [2025 年 3 月 4 日](https://whattrainisitnow.com/release/?version=136) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

- [`autocorrect`](/ja/docs/Web/HTML/Reference/Global_attributes/autocorrect) グローバル属性は、編集可能なテキスト要素 (多くのテキスト型 {{htmlelement("input")}} 要素、{{htmlelement("textarea")}} 要素、[`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性を設定した要素) のオートコレクトを許可します。具体的なオートコレクトの動作は、ユーザーエージェントや OS に依存します ([Firefox bug 1927977](https://bugzil.la/1927977))。
- [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) グローバル属性の値 `plaintext-only` は、要素は編集可能ですがリッチテキストフォーマットは無効であり、貼り付けられたテキストの書式が自動的に削除されることを示します ([Firefox bug 1922724](https://bugzil.la/1922724))。

### CSS

- {{CSSXRef(":has-slotted")}} [擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes) は、[ウェブコンポーネント](/ja/docs/Web/API/Web_components) をレンダリングするときに {{HTMLElement("slot")}} 要素へ追加したコンテンツを持つ {{HTMLElement("template")}} で要素にスタイルを設定するために使用します ([Firefox bug 1940691](https://bugzil.la/1940691))。
- [`:open`](/ja/docs/Web/CSS/Reference/Selectors/:open) 擬似クラスをサポートして、開いた状態にある要素を選択できるようになりました。これは {{htmlelement("details")}}、{{htmlelement("dialog")}}、ピッカーがある {{htmlelement("input")}}、ドロップダウンリストを表示する {{htmlelement("select")}} の各要素に適用します ([Firefox bug 1936113](https://bugzil.la/1936113))。
- {{cssxref("gradient")}} CSS 関数の {{cssxref("linear-gradient")}}、{{cssxref("conic-gradient")}}、{{cssxref("radial-gradient")}} が、1 つの色経由点と 0 から 1 の範囲の位置を受け入れるようになりました。これは 1 つのソリッドカラーを生成して、{{cssxref("mask")}} CSS プロパティの設定に使用されます ([Firefox bug 1900530](https://bugzil.la/1900530))。

### JavaScript

- 期間を言語に依存して表記できる {{jsxref("Intl.DurationFormat")}} をサポートしました ([Firefox bug 1933303](https://bugzil.la/1933303))。

### HTTP

- 新しいページにリダイレクトするページ更新後のリクエストで、({{httpheader("Referrer-Policy")}} で許可されていれば) {{httpheader("Referer")}} HTTP ヘッダーが送信されるようになりました。また、ナビゲーションの後にリファラーの URL が {{domxref("document.referrer")}} に設定されます。
  ページ更新は {{httpheader("Refresh")}} レスポンスヘッダーや、マークアップにある同等の {{htmlelement("meta")}} (たとえば `<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />`) で発生するでしょう。
  同じページの更新はページ内のフラグメントへのナビゲーションと同じように扱われることに注意してください。ページを再要求しないため、{{httpheader("Referer")}} は送信されません ([Firefox bug 1928291](https://bugzil.la/1928291))。

### API

- Chromium ブラウザーの制限に合わせて、[Data URL](/ja/docs/Web/URI/Reference/Schemes/data) のサイズの上限を 32MB から 512MB に拡張しました ([Firefox bug 1911300](https://bugzil.la/1911300))。

- 要素のプロパティが [要素参照を含む Aria 属性](/ja/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) に反映されるようになりました ([Firefox bug 1919102](https://bugzil.la/1919102))。

  以下のプロパティが含まれます:
  - {{domxref("Element")}} インターフェイスの {{domxref("Element/ariaActiveDescendantElement","ariaActiveDescendantElement")}}、{{domxref("Element/ariaControlsElements","ariaControlsElements")}}、{{domxref("Element/ariaDescribedByElements","ariaDescribedByElements")}}、{{domxref("Element/ariaDetailsElements","ariaDetailsElements")}}、{{domxref("Element/ariaErrorMessageElements","ariaErrorMessageElements")}}、{{domxref("Element/ariaFlowToElements","ariaFlowToElements")}}、{{domxref("Element/ariaLabelledByElements", "ariaLabelledByElements")}}、{{domxref("Element/ariaOwnsElements","ariaOwnsElements")}}。
  - {{domxref("ElementInternals")}} インターフェイスの {{domxref("ElementInternals/ariaActiveDescendantElement","ariaActiveDescendantElement")}}、{{domxref("ElementInternals/ariaControlsElements","ariaControlsElements")}}、{{domxref("ElementInternals/ariaDescribedByElements","ariaDescribedByElements")}}、{{domxref("ElementInternals/ariaDetailsElements","ariaDetailsElements")}}、{{domxref("ElementInternals/ariaErrorMessageElements","ariaErrorMessageElements")}}、{{domxref("ElementInternals/ariaFlowToElements","ariaFlowToElements")}}、{{domxref("ElementInternals/ariaLabelledByElements", "ariaLabelledByElements")}}、{{domxref("ElementInternals/ariaOwnsElements","ariaOwnsElements")}}。

#### Media、WebRTC、Web Audio

- WebRTC で、[AV1 コーデック](/ja/docs/Web/Media/Guides/Formats/WebRTC_codecs#av1_table) を使用してエンコードした動画を送受信できるようになりました。
  送信は、同一のソースから複数のバージョンを送信する方式 ("[サイマルキャスト](/ja/docs/Web/API/WebRTC_API/Protocols#simulcast)") とシングルキャストのどちらも使用できます ([Firefox bug 1944878](https://bugzil.la/1944878)、[Firefox bug 1932065](https://bugzil.la/1932065))。
- WebRTC で、[H264 コーデック](/ja/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) を使用した画面共有動画のサイマルキャストをサポートしました (AV1、H264、[VP8](/ja/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) をサイマルキャストで使用できます)。
  なお、Android では H264 コーデックのハードウェアアクセラレーションが有効です ([Firefox bug 1210175](https://bugzil.la/1210175))。
- WebRTC で [Dependency Descriptor (DD) RTP ヘッダー拡張](/ja/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension) をサポートしました。AV1、VP8、VP9 コーデックで使用します。
  DD ヘッダー拡張はペイロードをエンドツーエンド暗号化 (E2EE) する状況などで、サイマルキャストストリームのコーデックに依存しない転送を可能にします ([Firefox bug 1945261](https://bugzil.la/1945261))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### 一般

- Firefox が、リモートエージェント用の WebSocket ポートの競合をより効率的に処理するようになりました。`--remote-debugging-port` コマンドライン引数で指定したポートを 5 秒以内に取得できなかった場合 (別の Firefox プロセスがすでにポートを使用しているときなど) は、Firefox はハングアップせずにシャットダウンします ([Firefox bug 1927721](https://bugzil.la/1927721))。

- Marionette の `WebDriver:Navigate` コマンドや WebDriver BiDi の `browsingContext.navigate` で実行した HTTP スキーマを使用するナビゲーションを、自動的に HTTPS へアップグレードしないようになりました。これらのリクエストは、意図したとおりに HTTP を維持します ([Firefox bug 1943551](https://bugzil.la/1943551))。

#### WebDriver BiDi

- `session.subscribe` がサブスクリプション ID を返すようになりました。これは以前サブスクライブしたイベントやコンテキストで元のサブスクリプションと同じものを正確に示すために `session.unsubscribe` で使用できます。これは特定のタブに限定したサブスクリプションなど、複数のサブスクリプションが存在するときの意図しない副作用を防ぎます ([Firefox bug 1938576](https://bugzil.la/1938576))。

  注記: 名前とコンテキストでイベントを削除する以前の方法は非推奨になり、将来のリリースで削除する予定です。

- `script.addPreloadScript` コマンドで `userContexts` フィールドをサポートしました。このフィールドは、スクリプトが常に自動で読み込まれるコンテキスト (コンテナー) をクライアントが指定することを可能にします。これは、指定したユーザーコンテキストで開いた新しいブラウジングコンテキストも含まれます ([Firefox bug 1940927](https://bugzil.la/1940927))。

- コンテキストが閉じられたときに、`browsingContext.contextDestroyed` イベントがすべての子コンテキストを含めて完全にシリアライズしたブラウジングコンテキストのツリーを返すようになりました ([Firefox bug 1860955](https://bugzil.la/1860955))。

## アドオン開発者向けの変更点一覧

- [`background` マニフェストキー](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) に `preferred_environment` プロパティを追加しました。これは、ブラウザーがバックグラウンドのスクリプトをドキュメントまたはサービスワーカーとして実行することを、拡張機能が要求できるようにします ([Firefox bug 1798655](https://bugzil.la/1798655))。
- {{WebExtAPIRef("menus.update")}}、{{WebExtAPIRef("menus.remove")}} およびそれらの別名である {{WebExtAPIRef("contextMenus.update")}}、{{WebExtAPIRef("contextMenus.remove")}} が、メニュー項目が存在しないときにエラーで拒否するようになりました。以前は、エラーが無視されてプロミスが履行状態になりました ([Firefox bug 1688743](https://bugzil.la/1688743))。
- 新しいバージョンの {{WebExtAPIRef("userScripts")}} API が、デスクトップ版の Firefox で使用可能になりました。このバージョンの API は Manifest V3 拡張機能で使用するもので、ブラウザーごとに [許可の仕組み](/ja/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions) が異なりますが Chrome との広範囲な互換性を提供します ([Firefox bug 1943050](https://bugzil.la/1943050))。
- `NETWORK_FAILED` でダウンロードが失敗したときに、{{WebExtAPIRef("downloads.DownloadItem")}} の `canResume` プロパティが `true` に設定されるようになりました。これはネットワークエラーのために失敗したダウンロードを、{{WebExtAPIRef("downloads.resume","downloads.resume()")}} を使用して再開可能にします ([Firefox bug 1694049](https://bugzil.la/1694049))。

## 実験的なウェブ機能

以下の機能は Firefox 136 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **CSS `hyphenate-limit-chars` プロパティ**: `layout.css.hyphenate-limit-chars.enabled`。
  {{CSSXRef("hyphenate-limit-chars")}} CSS プロパティは、ハイフネーションを行う単語の最小の長さ、およびハイフンの前後の最小文字数を指定するために使用します ([Firefox bug 1521723](https://bugzil.la/1521723))。
- **Error.captureStackTrace()**: `javascript.options.experimental.error_capture_stack_trace`。
  {{jsxref("Error.captureStackTrace()")}} 静的メソッドは、{{jsxref("Error.stack")}} プロパティとして与えられたオブジェクトにスタックトレース情報をインストールします。
  主な用途は、{{jsxref("Error")}} インターフェイスから派生していない独自のエラーオブジェクトにスタックトレースをインストールすることです ([Firefox bug 1886820](https://bugzil.la/1886820))。
- **Clear-Site-Data: cache**: `privacy.clearSiteDataHeader.cache.enabled`。
  [`Clear-Site-Data`](/ja/docs/Web/HTTP/Reference/Headers/Clear-Site-Data) ヘッダーは [`cache`](/ja/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) および `*` ディレクティブと合わせて、ブラウザーのキャッシュを消去するために使用できます ([Firefox bug 1942272](https://bugzil.la/1942272))。
- **SVG アニメーション用の SVG `<discard>` 要素**: `svg.discard.enabled`。
  {{svgelement("discard")}} SVG 要素は、SVG が DOM に読み込まれてから経過した時間や特定のアニメーションが終了したなど、指定した要素とその子孫を DOM から削除すべききっかけを開発者が指定できるようにします。これは、不要になったアニメーション要素を破棄することで SVG ビューアーがメモリーを節約できます ([Firefox bug 1069931](https://bugzil.la/1069931))。
- **SVG パス API のメソッド**: `dom.svg.pathSegment.enabled`。
  {{domxref("SVGPathElement")}} インターフェイスの {{domxref("SVGPathElement/getPathData", "getPathData()")}}、{{domxref("SVGPathElement/setPathData", "setPathData()")}}、{{domxref("SVGPathElement/getPathSegmentAtLength", "getPathSegmentAtLength()")}} メソッドをサポートしました。これらのメソッドは、生の文字列データを解析することに代わって SVG のパスデータを処理する便利な手段を提供します ([Firefox bug 1934525](https://bugzil.la/1934525))。

## 過去のバージョン

{{Firefox_for_developers}}
