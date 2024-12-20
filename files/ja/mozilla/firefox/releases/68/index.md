---
title: Firefox 68 for developers
slug: Mozilla/Firefox/Releases/68
---

{{FirefoxSidebar}}

Firefox 68 は、米国時間 2019 年 7 月 9 日 にリリースされました。このページでは、開発者に影響する Firefox 68 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

#### ブラウザー/ウェブコンソール

- ルールで使用した DOM 要素のノードリストなど、[CSS 警告に関するより多くの情報](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#css) をウェブコンソールで表示するようになりました ([Firefox バグ 1093953](https://bugzil.la/1093953))。
- 正規表現を使用してウェブコンソールの内容をフィルタリングできるようになりました ([Firefox バグ 1441079](https://bugzil.la/1441079))。
- ブラウザーコンソールの "_コンテンツメッセージを表示_" のチェックボックスで、コンテンツプロセスのメッセージを表示/非表示できるようになりました ([Firefox バグ 1260877](https://bugzil.la/1260877))。

#### JavaScript デバッガー

- <kbd>Shift</kbd>

  &#x20;\+&#x20;

  <kbd>Ctrl</kbd>

  &#x20;\+&#x20;

  <kbd>F</kbd>

  &#x20;(Windows や Linux) または&#x20;

  <kbd>Shift</kbd>

  &#x20;\+&#x20;

  <kbd>Cmd</kbd>

  &#x20;\+&#x20;

  <kbd>F</kbd>

  &#x20;(macOS) を押下すると、デバッガーで現在のプロジェクトのすべてのファイルから [検索](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/search/index.html#searching_in_all_files) できるようになりました ([Firefox バグ 1320325](https://bugzil.la/1320325))。

#### ネットワークモニター

- ネットワークモニターの [要求リスト](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#filtering_requests) で、特定の URL をブロックできるようになりました ([Firefox バグ 1151368](https://bugzil.la/1151368))。
- コンテキストメニューの [再送信](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#context_menu) コマンドを使用して、メソッド、URL、引数、ヘッダーを編集せずにネットワーク要求を再送信できます ([Firefox バグ 1422014](https://bugzil.la/1422014))。
- ネットワークモニターの [ヘッダー](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers) タブのコンテキストメニューで、すべてあるいは一部のヘッダー情報を JSON 形式でクリップボードにコピーできるようになりました ([Firefox バグ 1442249](https://bugzil.la/1442249))。

#### インスペクター

- インスペクターの [ルールパネル](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#examine_css_rules) に、print メディアクエリーの表示を切り替えるボタンを追加しました ([Firefox バグ 1534984](https://bugzil.la/1534984))。
- [フォントパネル](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) に、`letter-spacing` を変更するスライダーを追加しました ([Firefox バグ 1536237](https://bugzil.la/1536237))。
- あるスタイルがなぜ適用されないかをわかりやすくするため、値が無効であるルールや未サポートの CSS プロパティの隣に警告アイコンを表示するようになりました ([Firefox バグ 1306054](https://bugzil.la/1306054))。

#### ストレージインスペクター

- ストレージインスペクターで項目を選択して Back Space キーを押下すると、[ローカルストレージやセッションストレージを削除](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#local_storage_session_storage) できるようになりました ([Firefox バグ 1522893](https://bugzil.la/1522893))。

#### その他

- [アクセシビリティインスペクター](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) に*問題のチェック*機能を追加しました。ウェブページでアクセシビリティの問題を明らかにする検査ツールが含まれています。まず使用できるツールは*コントラスト*で、色のコントラストの問題を明らかにします。
- 内部拡張機能 (システムアドオンや非表示の拡張機能) を [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) で表示するかを制御する設定項目を、`devtools.aboutdebugging.showSystemAddons` から `devtools.aboutdebugging.showHiddenAddons` に変更しました ([Firefox バグ 1544372](https://bugzil.la/1544372))。
- [レスポンシブデザインモード](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) を再設計しました。*端末設定*ダイアログ (デバイス選択メニュー > _リストを編集..._) がより直感的でシンプルになりました ([Firefox バグ 1487857](https://bugzil.la/1487857))。

#### 廃止

- [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) ページから "アドオンのデバッグを有効化" のチェックボックスを削除しました ([Firefox バグ 1544813](https://bugzil.la/1544813))。

### HTML

- テキストトラックがメディア要素に含まれている場合に、{{domxref("TextTrack")}} 自体に加えて {{HTMLElement("track")}} 要素 ({{domxref("HTMLTrackElement")}} で表される) が {{domxref("HTMLTrackElement.cuechange_event", "cuechange")}} イベントを受け取るようになりました ([Firefox バグ 1548731](https://bugzil.la/1548731))。
- 動作が異なりますが、{{htmlelement("link")}} 要素で `disabled` 属性を再びサポートしました。`rel="stylesheet"` を持つ `<link>` 要素で `disabled` を設定すると、ページを読み込むときに参照先のスタイルシートが読み込まれなくなります。`disabled` 属性を `false` に設定するか削除すると、必要に応じて読み込まれます ([Firefox バグ 1281135](https://bugzil.la/1281135))。

#### 廃止

- [`<meta http-equiv="set-cookie">`](/ja/docs/Web/HTML/Element/meta) のサポートを廃止しました ([Firefox バグ 1457503](https://bugzil.la/1457503))。

### CSS

- [CSS Scroll Snapping](/ja/docs/Web/CSS/CSS_scroll_snap) を、最新バージョンの仕様書に更新しました ([Firefox バグ 1312163](https://bugzil.la/1312163)) および ([Firefox バグ 1544136](https://bugzil.la/1544136))。変更点は以下のとおりです:

  - `scroll-padding` 関係のプロパティ ([Firefox バグ 1373832](https://bugzil.la/1373832))
  - `scroll-margin` 関係のプロパティ ([Firefox バグ 1373833](https://bugzil.la/1373833))
  - {{CSSxRef("scroll-snap-align")}} ([Firefox バグ 1373835](https://bugzil.la/1373835))

- ほかのブラウザーとの互換性のため、{{CSSxRef("-webkit-line-clamp")}} プロパティを実装しました ([Firefox バグ 866102](https://bugzil.la/866102))。
- {{CSSxRef("::marker")}} 擬似要素 ([Firefox バグ 205202](https://bugzil.la/205202)) と、::marker のアニメーション ([Firefox バグ 1538618](https://bugzil.la/1538618)) をサポートしました。
- {{CSSxRef("currentColor")}} を計算値に変更しました ({{cssxref("color")}} プロパティを除く) ([Firefox バグ 760345](https://bugzil.la/760345))。
- 長さの単位 'ch' を、仕様書に合うよう修正しました ('0' のグリフがない場合は高さにフォールバックする) ([Firefox バグ 282126](https://bugzil.la/282126))。
- {{CSSxRef("counter-set")}} プロパティを実装しました ([Firefox バグ 1518201](https://bugzil.la/1518201))。
- 内蔵の 'list-item' カウンターを使用したリストの番号付けを実装して、番号付けの不具合を修正しました ([Firefox バグ 288704](https://bugzil.la/288704))。
- [`::part()`](/ja/docs/Web/CSS/::part) にセレクターのマッチングとパースを実装しました ([Firefox バグ 1545430](https://bugzil.la/1545430)) および ([Firefox バグ 1545425](https://bugzil.la/1545425))。
- {{SVGElement("mask")}}、{{SVGElement("marker")}}、{{SVGElement("pattern")}}、{{SVGElement("clipPath")}} など、間接的に描画されるもので [CSS Transforms](/ja/docs/Web/CSS/CSS_transforms) をサポートしました ([Firefox バグ 1323962](https://bugzil.la/1323962))。
- 互換性の理由でさまざまなグラデーションプロパティ ({{cssxref("linear-gradient")}}、{{cssxref("radial-gradient")}}、{{cssxref("repeating-radial-gradient")}}) の接頭辞がついたものを使用可能に維持していますが、接頭辞がないものにより似た形で扱うように処理を変更しました。これは、既存のスタイルの一部が正しく動作しなくなることを意味します。

  特に、角度と位置の両方を持つ複雑な構文は動作しません。また `<side-or-corner>` の `to` キーワードは、接頭辞があるグラデーションプロパティで必須ではありません。広くサポートされているため、接頭辞がない標準のグラデーションプロパティを使用することが推奨されます ([Firefox バグ 1547939](https://bugzil.la/1547939))。

#### 廃止

- {{CSSxRef("scroll-snap-coordinate")}}、{{CSSxRef("scroll-snap-destination")}}、{{CSSxRef("scroll-snap-type-x")}}、{{CSSxRef("scroll-snap-type-y")}} を削除しました。
- {{CSSxRef("scroll-snap-type")}} プロパティがロングハンドプロパティになりました。`scroll-snap-type:mandatory` のような、以前のショートハンド構文は動作しません。

### SVG

_変更なし。_

### JavaScript

- {{jsxref("BigInt")}} プリミティブをデフォルトで有効にしました ([Firefox バグ 1527902](https://bugzil.la/1527902))。
- String のジェネリックメソッドを削除しました ([Firefox バグ 1222552](https://bugzil.la/1222552))。詳しくは [非推奨に関する警告](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) をご覧ください。

### API

#### CSS Object Model (CSSOM)

- 時代遅れの {{domxref("CSSStyleSheet.rules", "rules")}} プロパティ、{{domxref("CSSStyleSheet.addRule", "addRule()")}} メソッド、{{domxref("CSSStyleSheet.removeRule", "removeRule()")}} メソッドを {{domxref("CSSStyleSheet")}} インターフェイスに追加しました。これらは Internet Explorer 9 で導入されて完全には根絶されておらず、いまだに使用しているわずかなサイトの互換性を向上するために追加しました ([Firefox バグ 1545823](https://bugzil.la/1545823))。

#### DOM

- [Visual Viewport API](/ja/docs/Web/API/Visual_Viewport_API) が Android 版でデフォルトで有効になりました ([Firefox バグ 1512813](https://bugzil.la/1512813))。デスクトップ版 Firefox にこの API を追加する作業は [Firefox バグ 1551302](https://bugzil.la/1551302) で追跡しています。
- {{domxref("Window")}} の [`noreferrer`](/ja/docs/Web/API/Window/open#noreferrer) 機能をサポートしました。これを指定するとホスト名、IP アドレス、URL、その他のホスト端末を識別する情報を共有せずに、新しいウィンドウのコンテンツを読み込みます ([Firefox バグ 1527287](https://bugzil.la/1527287))。
- `HTMLImageElement` の {{domxref("HTMLImageElement.decode", "decode()")}} メソッドを実装しました。これは画像を、DOM に追加する前に読み込みおよびデコードするために使用できます ([Firefox バグ 1501794](https://bugzil.la/1501794))。
- {{domxref("XMLHttpRequest")}} を、{{domxref("XMLHttpRequest.responseType", "responseType")}} で非標準の値 `moz-chunked-arraybuffer` を受け入れないように更新しました。この値を使用しているコードは、[Fetch API をストリームとして使用する](/ja/docs/Web/API/Streams_API/Using_readable_streams#consuming_a_fetch_as_a_stream) ように更新してください ([Firefox バグ 1120171](https://bugzil.la/1120171))。
- `XMLHttpRequest` で {{domxref("Window.unload_event", "unload")}}、{{domxref("Window.beforeunload_event", "beforeunload")}}、{{domxref("Window.pagehide_event", "pagehide")}} イベントを処理しているときに同期リクエストを行うと、コンソールに警告を出力するようになりました ([Firefox バグ 980902](https://bugzil.la/980902))。
- {{domxref("Document.cookie", "cookie")}} プロパティを {{domxref("HTMLDocument")}} インターフェイスから {{domxref("Document")}} インターフェイスへ移動しました。{{Glossary("HTML")}} 以外の文書でも Cookie を使用できます ([Firefox バグ 144795](https://bugzil.la/144795))。
- {{domxref("HTMLElement.focus()")}} および {{domxref("SVGElement.focus()")}} メソッドで、新たにフォーカスを得た要素が表示されるようにブラウザーがスクロールすることをブロックするかを指定する論理値の `preventScroll` オプションをもつ、省略可能なオブジェクトを受け入れるようになりました ([Firefox バグ 1374045](https://bugzil.la/1374045))。

#### DOM イベント

- [Android 版 Firefox](/ja/docs/Mozilla/Firefox_for_Android) が、最初のフレームが描画された後まで {{domxref("Window.resize_event", "resize")}} イベントを誤って送信する不具合を修正しました。このイベントが発生しないと想定するサイトとのウェブ互換性が向上します ([Firefox バグ 1528052](https://bugzil.la/1528052))。
- マウスの第 1 ボタン以外のボタンのイベントが、より仕様書に近い形で発生するようになりました。第 1 ボタン以外のボタンをクリックしても {{domxref("Element.click_event", "click")}} イベントが発生しなくなり、代わりに {{domxref("Element.auxclick_event", "auxclick")}} を使用します。また、{{domxref("Element.dblclick_event", "dblclick")}} は第 1 ボタンだけで発生します ([Firefox バグ 1379466](https://bugzil.la/1379466))。
- 独自仕様の {{domxref("MouseEvent.mozPressure")}} プロパティが非推奨になり、コンソールへ警告を表示するようになりました ([Firefox バグ 1165211](https://bugzil.la/1165211))。

#### メディア、Web Audio、WebRTC

- Google Play ストアの規約変更により Android 版 Firefox 68 から、WebRTC 接続で AVC/H.264 動画を扱っていた OpenH264 コーデックをダウンロードおよびインストールすことができなくなりました。このため Android デバイスに新規インストールした Firefox は、WebRTC 接続で AVC をサポートしません。すでにコーデックをダウンロードしている旧バージョンの Firefox を更新した場合は、引き続き動作します。これは、ほかのプラットフォームには*影響がありません*。詳しくは [SUMO の記事](https://support.mozilla.org/en-US/kb/firefox-android-openh264) または [Firefox バグ 1548679](https://bugzil.la/1548679) をご覧ください。
- {{domxref("RTCPeerConnection.icecandidate", "icecandidate")}} イベントハンドラーに `null` 候補が渡されたことを認識するように、WebRTC を更新しました。後続の候補がないことを示しており、これが発生すると ICE の収集 ({{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}}) が `complete` 状態になります ([Firefox バグ 1318167](https://bugzil.la/1318167))。
- {{domxref("RTCRtpReceiver")}} の {{domxref("RTCRtpReceiver.getContributingSources", "getContributingSources()")}} および {{domxref("RTCRtpReceiver.getSynchronizationSources", "getSynchronizationSources()")}} メソッドで動画トラックをサポートしました。以前は音声のみ動作していました ([Firefox バグ 1534466](https://bugzil.la/1534466))。
- Web Audio API の {{domxref("MediaStreamTrackAudioSourceNode")}} インターフェイスと {{domxref("AudioContext.createMediaStreamTrackSource()")}} メソッドをサポートしました ([Firefox バグ 1324548](https://bugzil.la/1324548))。
- {{domxref("RTCDataChannel.negotiated")}} を実装しました ([Firefox バグ 1529695](https://bugzil.la/1529695))。
- ストリームの "最初の音声トラック" の ID が辞書順で最初に来るトラックであると定義する現行の仕様書に準拠するよう、{{domxref("MediaStreamAudioSourceNode.MediaStreamAudioSourceNode", "MediaStreamAudioSourceNode()")}} コンストラクターを更新しました ([Firefox バグ 1324548](https://bugzil.la/1324548))。
- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} は安全でないコンテキストから使用できなくなりました。使用を試みると `NotAllowedError` 例外が発生します。安全なコンテキストは HTTPS を使用して読み込むもの、`file:///` スキームを使用して示すもの、`localhost` から読み込むものです。今のところ、必要であれば設定項目 `media.getusermedia.insecure.enabled` を `true` に設定すると、`getUserMedia()` を安全でないコンテキストから呼び出すことを再有効化できます ([Firefox バグ 1335740](https://bugzil.la/1335740))。

  > [!NOTE]
  > 将来、Firefox は {{domxref("navigator.mediaDevices")}} プロパティも安全でないコンテキストで廃止して、{{domxref("MediaDevices")}} API へのアクセスを完全に遮断する予定です。**これは Nightly ビルドですでに実施しています。**

#### 廃止

- 非標準の {{DOMxRef("XMLDocument.load()")}} メソッドを削除しました ([Firefox バグ 332175](https://bugzil.la/332175))。
- 非標準の {{DOMxRef("XMLDocument.async")}} プロパティを削除しました ([Firefox バグ 1328138](https://bugzil.la/1328138))。
- {{domxref("RTCIceCredentialType")}} の値 `token` を削除しました ([Firefox バグ 1529595](https://bugzil.la/1529595))。

### HTTP

- [HTTP](/ja/docs/Web/HTTP) の {{HTTPHeader("Clear-Site-Data")}} ヘッダーで `executionContexts` ディレクティブのサポートを廃止しました。これは、ナビゲーションプロセスのさまざまな時点でさまざまな種類のデータの間の相互接続における相互作用の問題や、仕様書の設計の問題のために削除しました。この理由でディレクティブを仕様書から削除することが [提案されています](https://github.com/w3c/webappsec-clear-site-data/issues/59) ([Firefox バグ 1548034](https://bugzil.la/1548034))。

#### 廃止

- 標準化の状況に懸念があるため、{{HTTPHeader("Content-Security-Policy")}} の `require-sri-for` ディレクティブのサポートを廃止しました。以前は設定変更により使用できており、既定値は無効でした ([Firefox バグ 1386214](https://bugzil.la/1386214))。

### セキュリティ

- [CVE-2019-11730: Same-origin policy treats all files in a directory as having the same-origin](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730) のため、同じディレクトリーにあるファイルを別々のオリジンとして扱うように Firefox を変更しました。これは、file:// URL で読み込んだドキュメントの動作でいくつかの副作用が発生します (調査について [Firefox バグ 1558299](https://bugzil.la/1558299) をご覧ください)。例えば、workers を読み込むことができません。

### WebDriver conformance (Marionette)

#### バグ修正

- `WebDriver:SwitchToWindow` が別のウィンドウを選択すると、元のウィンドウに戻るまで `focus` および `activate` イベントを待機するようになりました ([Firefox バグ 1335085](https://bugzil.la/1335085))。
- `TypeError: this.tabModal is null` の不具合を修正しました。これはモーダルダイアログやユーザープロンプトと対話しているときに発生することがありました ([Firefox バグ 1538782](https://bugzil.la/1538782))。

#### その他

- トップレベルの閲覧コンテキストが突然消えてしまうことを防ぐため、メモリーが少ない状況でバックグラウンドのタブを強制的にアンロードする機能を無効化しました ([Firefox バグ 1553748](https://bugzil.la/1553748))。
- 新しいタブを開いた後にウェブサイトへ移動するときに HTTP 認証ダイアログが表示されない、特権付きコンテンツプロセスを無効化しました ([Firefox バグ 1558763](https://bugzil.la/1558763))。

### プラグイン

_変更なし。_

## アドオン開発者向けの変更点

### API の変更点

- [`proxy.register()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/proxy) および [`proxy.unregister()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/proxy) 関数が非推奨になり、Firefox 71 で削除される予定です ([Firefox バグ 1545811](https://bugzil.la/1545811))。
- `boolean` 型の `incognito` フラグを [proxy.RequestDetails](/ja/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails) オブジェクトに追加しました。`true` を設定すると、プライベートブラウジングの要求であったことを示します ([Firefox バグ 1545163](https://bugzil.la/1545163))。
- [webRequest.RequestFilter](/ja/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter) が incognito 引数を持てるようになりました。これを与えると、incognito の状態 (`true` または `false`) に合致しない要求を除去できます ([Firefox バグ 1548177](https://bugzil.la/1548177))。
- 現在のコンテキストにおける Cookie のストア ID を表す、`string` 型の `cookieStoreId` を [proxy.RequestDetails](/ja/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails) オブジェクトに追加しました ([Firefox バグ 1545420](https://bugzil.la/1545420))。
- アドオンがブックマークフォルダーをルートフォルダーへ追加しようとしたときのエラーメッセージが、より直感的になりました ([Firefox バグ 1512171](https://bugzil.la/1512171))。
- [`browser.tabs.duplicate()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/duplicate) が返す promise がタブが完全に読み込まれる前に、直ちに解決するようになりました ([Firefox バグ 1394376](https://bugzil.la/1394376))。
- chrome.storage.managed をサポートして、拡張機能の設定をエンタープライズポリシーで設定できるようになりました ([Firefox バグ 1230802](https://bugzil.la/1230802))。

### マニフェストの変更点

_変更なし。_

## 関連情報

- [Firefox 68.0 リリースノート](https://www.mozilla.org/firefox/68.0/releasenotes/)

## 過去のバージョン

{{Firefox_for_developers(67)}}
