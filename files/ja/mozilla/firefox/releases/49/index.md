---
title: Firefox 49 for developers
slug: Mozilla/Firefox/Releases/49
l10n:
  sourceCommit: dd08ec8cf78926a7854d8f5f7793bf7ae199484e
---

[Firefox の最新の開発者向け機能を試すには、 Firefox Developer Edition をインストールしてください。](https://www.mozilla.org/firefox/developer/) Firefox 49 は、米国時間 2016 年 9 月 20 日にリリースされました。このページでは、開発者に影響する Firefox 49 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- コンソールに記録された JavaScript のエラーで、デバッグのためのヒントを [\[Learn more\] リンクで提供します](https://hacks.mozilla.org/2016/06/helping-web-developers-with-javascript-errors/) ([Firefox バグ 1179876](https://bugzil.la/1179876))。
- CSS オートコンプリート: オートコンプリートのポップアップで、より多くの候補を表示します ([Firefox バグ 1260419](https://bugzil.la/1260419))。
- アニメーションインスペクターで、[アニメーションのパフォーマンス情報を提供する](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#further-information-about-animation-compositing) ようになりました ([Firefox バグ 1254408](https://bugzil.la/1254408))。
- [インスペクターのコンテキストメニュー](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-context-menu) を、よりきれいで使いやすくなるように再編しました ([Firefox バグ 1211613](https://bugzil.la/1211613))。
- インスペクターで、`#RRGGBBAA` および `#RGBA` 構文の色の値をサポートしました ([Firefox バグ 1271191](https://bugzil.la/1271191))。
- HTML のページにおける開発ツールで、自己完結タグ ({{HTMLElement("br")}} や {{HTMLElement("img")}} など) が終了タグを持つかのように表示しないようになりました。XHTML ページではこの動作を変更していません ([Firefox バグ 820926](https://bugzil.la/820926))。
- アクセシビリティが向上しました。
  - ツールボックスで、キーボードフォーカスが見やすくなるように対処しました ([Firefox バグ 1242851](https://bugzil.la/1242851))。
  - アクセシビリティのラベルがついていないコントロールに、ラベルを追加しました ([Firefox バグ 1242715](https://bugzil.la/1242715))。
  - インスペクターのマークアップビューに、適切なツリービューの意味とキーボードナビゲーションを追加しました ([Firefox バグ 1242694](https://bugzil.la/1242694))。

- [ネットワークモニター](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) に Cause 列を追加しました。個々のネットワークリクエストを発生させたのは何かを示します ([Firefox バグ 1134073](https://bugzil.la/1134073))。
- _about:debugging_ のアドオンページで、再読み込みボタンは一時的なアドオンに限り使用できるようになりました。他のアドオンでは無効になります ([Firefox バグ 1273184](https://bugzil.la/1273184))。
- _about:debugging_ の Workers ページで、現在のブラウザーの設定に対して [互換性がない service worker](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#service-workers-not-compatible) について、警告メッセージを Service Workers セクションに表示するようになりました ([Firefox バグ 1266415](https://bugzil.la/1266415))。
- _about:debugging_ で、新たに [Tabs ページ](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#tabs) が使用可能になりました。現在の Firefox のインスタンスで開いている、デバッグ可能なタブを一覧表示します ([Firefox バグ 1266128](https://bugzil.la/1266128))。
- [ツールボックスの詳細設定](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html#advanced-settings) の \[_キャッシュを無効化_] を、\[HTTP キャッシュを無効化] に改名しました。HTTP キャッシュに影響があり、[Service Workers](/ja/docs/Web/API/Service_Worker_API) や [Cache API](/ja/docs/Web/API/Cache) には影響がないことを明確にするためです (bug(1253018))。
- ストレージインスペクターのコンテキストメニューで [IndexedDB データベースを削除できるようになりました](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#indexeddb) ([Firefox バグ 1205123](https://bugzil.la/1205123))。また、何らかの理由で IndexedDB が削除できない (例えばアクティブな接続が存在する) 場合に警告メッセージを表示します ([Firefox バグ 1268460](https://bugzil.la/1268460))。

### HTML

- {{HTMLElement("details")}} 要素および {{HTMLElement("summary")}} 要素をサポートしました ([Firefox バグ 1226455](https://bugzil.la/1226455))。
- {{HTMLElement("input")}} 要素の [`pattern`](/ja/docs/Web/HTML/Reference/Elements/input#pattern) 属性は、背後の JavaScript {{jsxref("RegExp")}} で `'u'` 引数ーを使用するようになりました ([Firefox バグ 1227906](https://bugzil.la/1227906))。
- 仕様書の変更に合わせて、{{HTMLElement('track')}} 要素の [`kind`](/ja/docs/Web/HTML/Reference/Elements/track#kind) 属性で無効な値は、`'subtitles'` ではなく `'metadata'` と同様に扱うようになりました ([Firefox バグ 1269712](https://bugzil.la/1269712))。
- {{HTMLElement("iframe")}} 要素の [`sandbox`](/ja/docs/Web/HTML/Reference/Elements/iframe#sandbox) 属性で値 `'allow-popups-to-escape-sandbox'` および `'allow-modals'` をサポートしました ([Firefox バグ 1190641](https://bugzil.la/1190641))。
- microdata 属性および Microdata API のサポートを廃止しました ([Firefox バグ 909633](https://bugzil.la/909633))。
- {{HTMLElement("a")}} 要素の [`referrerpolicy`](/ja/docs/Web/HTML/Reference/Elements/a#referrerpolicy) 属性で値 `'no-referrer-when-downgrade`' および `'origin-when-cross-origin'` をサポートしました ([Firefox バグ 1178337](https://bugzil.la/1178337))。
- {{HTMLElement("label")}} 要素の [`form`](/ja/docs/Web/HTML/Reference/Elements/label#form) コンテンツ属性を削除しました。{{domxref("HTMLLabelElement.form")}} はまだ存在していますが、コントロールが存在する (およびそのコントロールがフォームに関連付けられている) 場合に、ラベルのコントロールが関連付けられているフォームを返すようになりました ([Firefox バグ 1268852](https://bugzil.la/1268852))。

### CSS

- 背景画像を描画する位置のオフセットを水平方向および垂直方向に分けて指定できる、{{cssxref("background-position-x")}} プロパティおよび {{cssxref("background-position-y")}} プロパティをサポートしました。これらは {{cssxref("background-position")}} を構成します ([Firefox バグ 550426](https://bugzil.la/550426))。
- {{cssxref("background-repeat")}} で、キーワード `round` および `space` をサポートしました ([Firefox バグ 548372](https://bugzil.la/548372))。
- {{cssxref("background-clip")}} で、キーワード `text` をデフォルトで有効化しました ([Firefox バグ 1264905](https://bugzil.la/1264905))。
- 4 桁および 8 桁の 16 進数による CSS [色](/ja/docs/Web/CSS/Reference/Values/color_value) の値 (#RRGGBBAA や #RGBA) による、アルファチャンネルを含む色の指定をサポートしました ([Firefox バグ 567283](https://bugzil.la/567283))。
- {{cssxref(":dir()")}} 擬似クラスの接頭辞を外しました ([Firefox バグ 859301](https://bugzil.la/859301))。
- {{cssxref("clip-path")}} の実験的な実装 (デフォルトで有効化していません) で、複数の {{cssxref("&lt;basic-shape&gt;")}} 値の間で補間処理が可能になりました ([Firefox バグ 1110460](https://bugzil.la/1110460))。
- [長さの単位 `q`](/ja/docs/Web/CSS/Reference/Values/length#q) をサポートしました ([Firefox バグ 1274526](https://bugzil.la/1274526))。
- {{cssxref("text-align-last")}} プロパティの接頭辞を削除しました ([Firefox バグ 1039541](https://bugzil.la/1039541))。
- {{cssxref("overflow-wrap")}} をサポートしました。 `word-wrap` を置き換えるものですが、こちらも別名としてサポートを続けます ([Firefox バグ 955857](https://bugzil.la/955857))。
- [CSS グリッド](/ja/docs/Web/CSS/Guides/Grid_layout) の実験的な実装が進展しました。
  - {{cssxref("&lt;percentage&gt;")}} を `grid-gap`、`grid-row-gap`、`grid-column-gap` プロパティで対応しました ([Firefox バグ 1266268](https://bugzil.la/1266268))。
  - {{cssxref("align")}}、{{cssxref("justify-self")}}`:baseline`、`last-baseline` ("baseline self-alignment" として知られる) でグリッドレイアウトをサポートしました ([Firefox バグ 1221525](https://bugzil.la/1221525))。
  - グリッドアイテムの Baseline Content Alignment を実装しました ([Firefox バグ 1256429](https://bugzil.la/1256429))。

- [CSS マスク](/ja/docs/Web/CSS/Guides/Masking) の実験的な実装が進展しました。
  - {{cssxref("mask-origin")}} プロパティの初期値を、仕様書に合わせて `padding-box` から `border-box` に変更しました ([Firefox バグ 1258286](https://bugzil.la/1258286))。
  - {{cssxref("mask-repeat")}} プロパティで値 `space` および `round` をサポートしました ([Firefox バグ 1258626](https://bugzil.la/1258626))。
  - {{cssxref("mask-position")}} 属性でアニメーションを行えない問題を修正しました ([Firefox バグ 1273804](https://bugzil.la/1273804))。

- {{cssxref("text-emphasis")}} を制御する設定項目を削除しました。このプロパティを無効化することはできません ([Firefox バグ 1229609](https://bugzil.la/1229609))。

### JavaScript

- ES2015 の {{jsxref("Proxy")}} のトラップである {{jsxref("Global_Objects/Proxy/Proxy/getPrototypeOf", "getPrototypeOf()")}} および {{jsxref("Global_Objects/Proxy/Proxy/setPrototypeOf", "setPrototypeOf()")}} を実装しました ([Firefox バグ 888969](https://bugzil.la/888969))。
- ES2015 の {{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[Symbol.match]()")}}、{{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[Symbol.replace]()")}}、{{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[Symbol.search]()")}}、{{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[Symbol.split]()")}} メソッドおよび {{jsxref("RegExp.Symbol.species", "RegExp[Symbol.species]")}} getter を実装しました ([Firefox バグ 887016](https://bugzil.la/887016))。
- 非推奨かつ非標準である、`String.prototype.`{{jsxref("String.prototype.match", "match")}}/{{jsxref("String.prototype.search", "search")}}/{{jsxref("String.prototype.replace", "replace")}} の `flags` 引数を廃止しました ([Firefox バグ 1108382](https://bugzil.la/1108382))。
- Google Chrome ブラウザーとの相互運用性を高めるため {{jsxref("Date.parse()")}} で、2 桁で表す年の処理を変更しました ([Firefox バグ 1265136](https://bugzil.la/1265136))。

### インターフェイス/API/DOM

#### DOM & HTML DOM

- {{domxref("DOMTokenList.supports()")}} メソッドを追加しました ([Firefox バグ 1257849](https://bugzil.la/1257849))。
- {{domxref("DOMTokenList.replace()")}} メソッドを追加しました ([Firefox バグ 1224186](https://bugzil.la/1224186))。
- {{domxref("URLSearchParams.URLSearchParams", "URLSearchParams()")}} コンストラクターの引数で、先頭の `'?'` 文字は無視するようになりました ([Firefox バグ 1268361](https://bugzil.la/1268361))。
- {{domxref("URL.origin")}}、{{domxref("HTMLAnchorElement/origin", "HTMLAnchorElement.origin")}}、{{domxref("HTMLAreaElement.origin")}} で `blob:` スキームの URL を使用した場合の返値が、誤った値である `null` ではなく、先頭の `blob:` を除いた URL のオリジンになりました ([Firefox バグ 1270451](https://bugzil.la/1270451))。
- プリレンダリングモードで、{{domxref('Document.visibilityState')}} プロパティが `'prerender'` を返すようになりました ([Firefox バグ 1069772](https://bugzil.la/1069772))。
- {{domxref("isSecureContext")}} プロパティを実装しました ([Firefox バグ 1162772](https://bugzil.la/1162772))。
- DOM4 の {{domxref("ChildNode.before()")}}、{{domxref("ChildNode.after()")}}、{{domxref("ChildNode.replaceWith()")}}、{{domxref("ParentNode.append")}}、{{domxref("ParentNode.prepend")}} メソッドを実装しました ([Firefox バグ 911477](https://bugzil.la/911477))。
- `TouchList.identifiedTouch()` メソッドを削除しました ([Firefox バグ 1188539](https://bugzil.la/1188539))。
- {{domxref("Window.open()")}} を呼び出した際に、{{domxref("Window")}} の `scrollbars` 特性をデフォルトで有効にしました。従来から、これは有効化することが強く推奨されていましたが、デフォルトでは有効化していませんでした ([Firefox バグ 1257887](https://bugzil.la/1257887))。
- 動画コンテンツの frame-by-frame シークを可能にする、*実験的*かつ*非標準*の {{domxref("HTMLMediaElement.seekToNextFrame()")}} メソッドを追加しました ([Firefox バグ 1235301](https://bugzil.la/1235301)。これがどれだけ役に立つかを私たちが理解するのを助けるために試用することをお勧めしますが、_製品版のコードでは使用しないでください!_
- {{domxref("HTMLLabelElement.form")}} プロパティが、コントロールが存在する (およびそのコントロールがフォームに関連付けられている) 場合に、ラベルのコントロールが関連付けられているフォームを返すようになりました。以前は、このプロパティを使用して label を直接フォームに関連付けていました ([Firefox バグ 1268852](https://bugzil.la/1268852))。
- {{domxref("EventTarget.addEventListener()")}} の第 3 引数でサポートする値に、{{jsxref("Boolean")}} および `EventListenerOptions` を追加しました ([Firefox バグ 1266164](https://bugzil.la/1266164) および [Firefox バグ 1266066](https://bugzil.la/1266066))。
- {{domxref("KeyboardEvent.key")}} で、音量に関する値を改名しました。`"VolumeDown"` は `"AudioVolumeDown"` に、`"VolumeUp"` は `"AudioVolumeUp"` に、`"VolumeMute"` は `"AudioVolumeMute"` に変わりました。この変更により、Firefox が UI Events 仕様の最新ドラフトに準拠しました ([Firefox バグ 1272578](https://bugzil.la/1272578))。使用可能なすべてのキーコードについては、[Code values for keyboard events](/ja/docs/Web/API/UI_Events/Keyboard_event_code_values) をご覧ください。
- 以前は `"MozHomeScreen"`、`"MozCameraFocusAdjust"`、`"MozPhoneCall"` として参照されていたキーに、UI Events 仕様で公式な名称がつきました。`"GoHome"`、`"CameraFocus"`、`"Call"` になります。Firefox 49 で、新しい名称を使用するように更新しました ([Firefox バグ 1272599](https://bugzil.la/1272599))。使用可能なすべてのキーコードについては、[Code values for keyboard events](/ja/docs/Web/API/UI_Events/Keyboard_event_code_values) をご覧ください。
- キーの値 `"Separator"` および `"MediaSkip"` は、非推奨になったうえに使用されていませんので、削除しました ([Firefox バグ 1232919](https://bugzil.la/1232919))。
- キーの値 `"Hyper"` および `"Super"` とそれらに対応するキーコードを、過去のモディファイアキーを表すように追加しました ([Firefox バグ 1232919](https://bugzil.la/1232919))。
- マルチメディア数値キーパッド用に、2 つのキーの値を追加しました: `"Key11"`、`"Key12"` ([Firefox バグ 1232919](https://bugzil.la/1232919))。
- オーディオコントロールキー用に、以下の新たなキーの値を追加しました: `"AudioBassBoostToggle"`、`"AudioTrebleDown"`、`"AudioTrebleUp"` ([Firefox バグ 123919](https://bugzil.la/123919))。
- マイクコントロールキー用に、以下のキーの値を追加しました: `MicrophoneToggle`、`MicrophoneVolumeDown`、`MicrophoneVolumeUp`、`MicrophoneVolumeMute` ([Firefox バグ 123919](https://bugzil.la/123919))。
- 音声認識デバイス用に、以下の新たなキーの値を追加しました: "`SpeechCorrectionList"`、`SpeechInputToggle` ([Firefox バグ 1232919](https://bugzil.la/1232919))。
- 電話機の特殊キーをサポートするため、以下のキーの値を追加しました: `AppSwitch`、`Call`、`CameraFocus`、`EndCall`、`GoBack`、`GoHome`、`HeadsetHook`、`LastNumberRedial`、`Notification`、`MannerMode`、`VoiceDial` ([Firefox バグ 1232919](https://bugzil.la/1232919))。
- アプリケーションキー用に、以下のキーの値を追加しました: `LaunchContacts`、`LaunchPhone` ([Firefox バグ 1232919](https://bugzil.la/1232919))。
- テレビデバイス用に、以下の新たなキーの値を追加しました: `TV3DMode`、`TVAntennaCable`、`TVAudioDescription`、`TVAudioDescriptionMixDown`、`TVAudioDescriptionMixUp`、`TVContentsMenu`、`TVDataService`、`TVInput`、`TVInputComponent1`、`TVInputComponent2`、`TVInputComposite1`、`TVInputComposite2`、`TVInputHDMI1`、`TVInputHDMI2`、`TVInputHDMI3`、`TVInputHDMI4`、`TVInputVGA1`、`TVMediaContext`、`TVNetwork`、`TVNumberEntry`、`TVRadioService`、`TVSatellite`、`TVSatelliteBS`、`TVSatelliteCS`、`TVSatelliteToggle`、`TVTerrestrialAnalog`、`TVTerrestrialDigital`、`TVTimer`、`DVR` ([Firefox バグ 1232919](https://bugzil.la/1232919))。
- キーの値 `MediaSelect` を、標準のキーの値である `LaunchMediaPlayer` に置き換えました ([Firefox バグ 1272592](https://bugzil.la/1272592))。
- メディアプレイヤーの付加機能キーの値を追加しました。`MediaAudioTrack`、`MediaSkipBackward`、`MediaSkipForward`、`MediaStepBackward`、`MediaStepForward`、`MediaTopMenu`、`NavigateIn`、`NavigateNext`、`NavigateOut`、`NavigatePrevious` です ([Firefox バグ 1232919](https://bugzil.la/1232919))。

#### Canvas

- Canvas にフィルターを追加する機能を提供する {{domxref("CanvasRenderingContext2D.filter")}} プロパティがデフォルトで有効になり、設定の切り替えが不要になりました ([Firefox バグ 1173545](https://bugzil.la/1173545))。

#### WebGL

- {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}} の {{domxref("EXT_color_buffer_float")}} 拡張を実装しました ([Firefox バグ 1129332](https://bugzil.la/1129332))。
- WebGL コンテキストの作成が失敗したときに発生する、{{domxref("HTMLCanvasElement/webglcontextcreationerror_event", "webglcontextcreationerror")}} イベントを実装しました ([Firefox バグ 1271478](https://bugzil.la/1271478))。デバッグや製品版のエラー制御において、何が誤っているかの理解を助けるために使用してください。

#### IndexedDB

- IndexedDB のインデックスがリネーム可能になりました。{{domxref("IDBIndex.name")}} プロパティが読み書き可能になっています ([Firefox バグ 1118028](https://bugzil.la/1118028))。
- {{domxref("IDBObjectStore")}} もリネーム可能になりました。{{domxref("IDBObjectStore.name")}} プロパティが読み書き可能になっています ([Firefox バグ 1118028](https://bugzil.la/1118028))。

#### サービスワーカー関連

- [フェッチ API](/ja/docs/Web/API/Fetch_API) の {{domxref("Response")}} オブジェクトに、リダイレクトされたリクエストのレスポンスであるかを示す {{domxref("Response.redirected", "redirected")}} プロパティを実装しました。このプロパティを使用する前に、ドキュメントでセキュリティ関連の注意事項を確認してください ([Firefox バグ 1243792](https://bugzil.la/1243792))。
- [権限 API](/ja/docs/Web/API/Permissions_API) で、Firefox は `PermissionDescriptor` 辞書型 (仕様書では `PushPermissionDescriptor` として言及されています) の 'push' のサポートを廃止しました。Firefox は `userVisibleOnly` ステータスの制御で代わりにクォータシステムに依存しており、`PushPermissionDescriptor` インスタンスに出くわしたときにエラーが発生していたためです ([Firefox バグ 1266821](https://bugzil.la/1266821))。この辞書の削除により、Firefox は単に無視するようになりました。

#### メディアストリーム

- 以前はユーザーが 2 種類のハードウェアのうち一方しか使用できない状況で、音声および映像を要求する {{domxref("MediaDevices.getUserMedia()")}} の呼び出しが成功していました。この問題を修正しました ([Firefox バグ 802326](https://bugzil.la/802326))。
- 以前のバージョンの Firefox では、合致するデバイスのうち (両方ではなく) 一方のアクセスが拒否されたにもかかわらず、音声および映像を要求する {{domxref("MediaDevices.getUserMedia()")}} の呼び出しが成功していました。この問題を修正しました ([Firefox バグ 802326](https://bugzil.la/802326))。これはユーザーインターフェイスを若干変更させており、ユーザーが許可を求められる際の選択肢で "No audio" や "No video" を削除しました。
- {{domxref("MediaStream.getTrackById()")}} メソッドを実装しました ([Firefox バグ 1208390](https://bugzil.la/1208390))。

#### WebRTC

- 指定したストリームを構成していないトラックをコネクションへ追加できるように、{{domxref("RTCPeerConnection.addTrack()")}} メソッドを更新しました。代わりに、コネクションの受信側でトラックをまとめるためにストリームが使用されます ([Firefox バグ 1271669](https://bugzil.la/1271669))。

#### 新規 API

- {{domxref("PerformanceObserver")}} API を、Nightly でデフォルトで有効にしました ([Firefox バグ 1271487](https://bugzil.la/1271487))。他のバージョンの Firefox 49 では、デフォルトで無効化しています ([Firefox バグ 1271487](https://bugzil.la/1271487))。

#### その他

- {{domxref("XMLHttpRequest.getResponseHeader()")}} および {{domxref("XMLHttpRequest.getAllResponseHeaders()")}} で、設定項目 `network.http.keep_empty_response_headers_as_empty_string` が `true` に設定されている場合は、空のヘッダーを返すようになりました ([Firefox バグ 669259](https://bugzil.la/669259))。
- Firefox OS 限定の Data Store API を削除しました ([Firefox バグ 1261009](https://bugzil.la/1261009))。
- [Fullscreen API](/ja/docs/Web/API/Fullscreen_API) の `Document.onfullscreenchange`、`Document.onfullscreenerror` イベントハンドラーを、 {{domxref("Element")}} から削除しました。そこでは発生していなかったためです。ただし、接頭辞付きのイベントハンドラーは互換性のために維持しています ([Firefox バグ 1270386](https://bugzil.la/1270386))。これは設定項目 `full-screen-api.unprefix.enabled` で制御されており、デフォルトで有効化していないことに注意してください ([Firefox バグ 1268749](https://bugzil.la/1268749))。
- 廃止済みの `Document.mozFullScreen` プロパティの接頭辞を削除して、{{domxref("Document.fullscreen")}} としました ([Firefox バグ 1269157](https://bugzil.la/1269157)}。これは設定項目 `full-screen-api.unprefix.enabled` で制御されており、デフォルトで有効化していないことに注意してください ([Firefox バグ 1268749](https://bugzil.la/1268749))。
- 読み取り専用の {{domxref("Document/fullscreenElement", "Document.fullscreenElement")}} および {{domxref("Document.fullscreenEnabled")}} プロパティで、値を変更しようとしても例外が発生しないようになりました。代わりに新しい値は暗黙的に無視され、setter 関数は何も行いません ([Firefox バグ 1269798](https://bugzil.la/1269798))。
- {{domxref("DataTransfer.getData()")}} で、どのような種類のデータでもクリップボードから取り出せるようになりました。以前は、特定の MIME タイプのデータのみ取り出し可能でした ([Firefox バグ 860857](https://bugzil.la/860857))。
- Frame Timing API の実装を削除しました。これは、 `PerformanceCompositeTiming` および `PerformanceRenderTiming` の 2 つのインターフェイスで構成されていましたが、仕様書が全面的に書き直されたためです ([Firefox バグ 1271846](https://bugzil.la/1271846))。
- 仕様書に合わせて、{{domxref("VTTCue.positionAlign")}} プロパティが `Align` 列挙型ではなく `PositionAlign` 列挙型を返すようになりました ([Firefox バグ 1276129](https://bugzil.la/1276129))。
- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API#speech_synthesis) の、音声合成の部分をサポートしました ([Firefox バグ 1268633](https://bugzil.la/1268633))。
- [Performance Timeline API](/ja/docs/Web/API/Performance_Timeline) を、Nightly でデフォルトで有効化しました (Aurora、Beta、Release では無効です)。
- {{domxref("ServiceWorkerGlobalScope.install_event", "install")}} イベントおよび {{domxref("Window.appinstalled_event", "Window.oninstall")}} イベントハンドラーを[ウェブマニフェスト](/ja/docs/Web/Progressive_web_apps/Manifest)向けにサポートしました ([Firefox バグ 1265279](https://bugzil.la/1265279))。
- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) の {{domxref("BaseAudioContext/createPeriodicWave", "AudioContext.createPeriodicWave()")}} メソッドを使用するとき、結果の周期的な波形をノーマライズすべきかを、第 3 引数にディクショナリーオブジェクトを含めることで指定可能になりました。このオブジェクトにはひとつの引数を含めて `{disableNormalization: true}` のようにします ([Firefox バグ 1265405](https://bugzil.la/1265405))。
- WebVTT API で {{domxref("VTTCue.positionAlign")}} が、仕様書どおりに正しく `PositionAlignSetting` 列挙型を返すようになりました。以前は `AlignSetting` 列挙型を返していました ([Firefox バグ 1276129](https://bugzil.la/1276129))。
- ウェブ音声 API の音声合成の部分を、すべてのデスクトップブラウザーでデフォルトで有効にしました ([Firefox バグ 1268633](https://bugzil.la/1268633))。
- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) の {{domxref("Animation.Animation()", "Animation()")}} コンストラクターが、null タイムラインを受け入れるようになりました ([Firefox バグ 1096776](https://bugzil.la/1096776))。
- {{domxref("KeyframeEffect")}} の {{domxref("KeyframeEffect.target", "target")}} プロパティが Firefox で対応されました。[ウェブアニメーション](/ja/docs/Web/API/Web_Animations_API)を有効にした場合です。 ([Firefox バグ 1067769](https://bugzil.la/1067769)).

### MathML

_変更なし。_

### SVG

- 非推奨の {{SVGElement('altGlyph')}}、{{SVGElement('altGlyphDef')}}、{{SVGElement('altGlyphItem')}} 要素のサポートを廃止しました ([Firefox バグ 1260032](https://bugzil.la/1260032))。

### Audio/Video

_変更なし。_

### プラグインと Flash

Firefox 49 より、サイトが正しく機能するために必要ではない特定の種類の Flash コンテンツをデフォルトでブロックするようになりました。この動作は設定項目 `browser.safebrowsing.blockedURIs.enabled` で制御しており、サイトのユーザビリティに大きな影響を与えることなく、一般的にはサイトや Firefox のパフォーマンスを向上する助けになります。また、クラッシュの主要な原因を取り除くことにより、ブラウジング体験の安定性を向上する助けにもなります。ブロックされる Flash モジュールにはフィンガープリンティングのためだけに使用されるものやいくつかの "スーパー Cookie" モジュールが含まれまており、将来はより多くの種類のモジュールをブロックするように拡張するでしょう。詳しくは [Firefox バグ 1275591](https://bugzil.la/1275591) をご覧ください。

これはプラグインがない未来への行程の、次のステップになります。機能を果たすためにプラグインを必要としない段階に、HTML はとても近づいています。

## HTTP

- [`Cache-Control: immutable`](/ja/docs/Web/HTTP/Reference/Headers/Cache-Control) ディレクティブを実装しました ([Firefox バグ 1267474](https://bugzil.la/1267474))。詳しくは [ブログ記事](https://bitsup.blogspot.com/2016/05/cache-control-immutable.html) もご覧ください。
- {{HTTPHeader("Content-Security-Policy")}} の {{CSP("require-sri-for")}} を実装しました ([Firefox バグ 1265318](https://bugzil.la/1265318))。

## ネットワーク

- [Proxy Auto-Configuration (PAC)](</ja/docs/Mozilla/Projects/Necko/Proxy_Auto-Configuration_(PAC)_file>) の実装を更新しました。`weekdayRange`、`dateRange`、`timeRange` で "リバースレンジ" をサポートしました。例えば `weekdayRange("SAT", "MON")` は、当日が土曜日、日曜日、月曜日である場合に `true` になります ([Firefox バグ 1251332](https://bugzil.la/1251332))。

## セキュリティ

- {{domxref("isSecureContext")}} プロパティを実装し、これが[保護されたコンテキスト](/ja/docs/Web/Security/Defenses/Secure_Contexts)を必要とする機能を使用できるコンテキストであるかを示ようになりました ([Firefox バグ 1162772](https://bugzil.la/1162772))。

## 互換性

既存のコンテンツとの互換性を高めるために、一部の webkit 接頭辞つきプロパティおよび属性を Firefox で受け入れるようになりました。

- 以下のプロパティは、`-webkit` 接頭辞がついていても動作します。
  - `-webkit-align-items`
  - `-webkit-align-content`
  - `-webkit-align-self`
  - `-webkit-animation`
  - `-webkit-animation-delay`
  - `-webkit-animation-direction`
  - `-webkit-animation-duration`
  - `-webkit-animation-fill-mode`
  - `-webkit-animation-iteration-count`
  - `-webkit-animation-name`
  - `-webkit-animation-play-state`
  - `-webkit-animation-timing-function`
  - `-webkit-backface-visibility`
  - `-webkit-background-clip`
  - `-webkit-background-origin`
  - `-webkit-background-size`
  - `-webkit-border-bottom-left-radius`
  - `-webkit-border-bottom-right-radius`
  - `-webkit-border-image`
  - `-webkit-border-top-left-radius`
  - `-webkit-border-top-right-radius`
  - `-webkit-border-radius`
  - `-webkit-box-shadow`
  - `-webkit-filter`
  - `-webkit-flex`
  - `-webkit-flex-basis`
  - `-webkit-flex-direction`
  - `-webkit-flex-flow`
  - `-webkit-flex-grow`
  - `-webkit-flex-shrink`
  - `-webkit-flex-wrap`
  - `-webkit-justify-content`
  - `-webkit-order`
  - `-webkit-perspective`
  - `-webkit-perspective-origin`
  - `-webkit-text-size-adjust`
  - `-webkit-transform`
  - `-webkit-transform-origin`
  - `-webkit-transform-style`
  - `-webkit-transition`
  - `-webkit-transition-delay`
  - `-webkit-transition-duration`
  - `-webkit-transition-property`
  - `-webkit-transition-timing-function`
  - `-webkit-user-select`

- 以下のプロパティは、同等の接頭辞つきプロパティに紐づけています:
  - `-webkit-box-flex`
  - `-webkit-box-ordinal-group`
  - `-webkit-box-orient`
  - `-webkit-box-align`
  - `-webkit-box-pack`

- {{cssxref("&lt;image&gt;")}} の値について:
  - `-webkit-linear-gradient()`、`-webkit-radial-gradient()`、`-webkit-repeating-linear-gradient()`、`-webkit-repeating-radial-gradient()` 関数は、接頭辞なしの同等物に紐づけています。
  - 旧式の `-webkit-gradient` をサポートします (また、正規のグラデーションに変換します)。

- 以下の {{cssxref("display")}} の値を変換します:
  - `-webkit-box` を `-moz-box` に変換
  - `-webkit-flex` を `flex` に変換
  - `-webkit-inline-box` を `inline-flex` に変換
  - `-webkit-inline-flex` を `-moz-inline-flex` に変換

- 以下のプロパティをサポートします (接頭辞なしの同等物に紐づけません)。
  - {{cssxref("-webkit-text-fill-color")}}
  - {{cssxref("-webkit-text-stroke-color")}}
  - {{cssxref("-webkit-text-stroke-width")}}
  - {{cssxref("-webkit-text-stroke")}}

- `WebKitCSSMatrix` インターフェイスを {{domxref("DOMMatrix")}} の別名にしました。
- 以下のメディアクエリー特性を実装しました:
  - `-webkit-min-device-pixel-ratio` を [`min-resolution`](/ja/docs/Web/CSS/Guides/Media_queries/Using#resolution) の別名として、同じ値 (`dppx`) で実装しました。ただし、この機能は [デフォルトで無効](https://bugzilla.mozilla.org/show_bug.cgi?id=1237720) です (about:config の設定 `layout.css.prefixes.device-pixel-ratio-webkit` で制御)。
  - `-webkit-max-device-pixel-ratio` を [`max-resolution`](/ja/docs/Web/CSS/Reference/At-rules/@media/resolution) の別名として、同じ値 (`dppx`) で実装しました。この機能も about:config の同じ設定で、デフォルトで無効にしています。
  - [`-webkit-transform-3d`](/ja/docs/Web/CSS/Reference/At-rules/@media/-webkit-transform-3d) がマッチするようになりました。3D Transform をサポートすることを示します。

## アドオン開発者と Mozilla 開発者向けの変更点

### WebExtensions

- {{WebExtAPIRef("history")}} をサポートしました。この機能でブラウザーの履歴にアクセスでき、履歴の検索、以前アクセスしたページの情報を取得、履歴項目の追加や削除を可能にするメソッドがあります。
- tabs API に {{WebExtAPIRef("tabs.removeCSS()")}} メソッドを追加しました。このメソッドで、以前に {{WebExtAPIRef("tabs.insertCSS()")}} を呼び出して挿入した CSS を削除できます。

### インターフェイス

- {{domxref("EventTarget.addEventListener()")}} で、XBL または Firefox の chrome で実行するコードに限り有効化されている値 `mozSystemGroup` をサポートしました。これは、リスナーがシステムグループに追加されるかを示す {{jsxref("Boolean")}} です ([Firefox バグ 1274520](https://bugzil.la/1274520))。

### その他

_変更なし。_

## 過去のバージョン

{{Firefox_for_developers(48)}}
