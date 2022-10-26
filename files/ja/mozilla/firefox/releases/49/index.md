---
title: Firefox 49 for developers
slug: Mozilla/Firefox/Releases/49
---

Firefox 49 は、米国時間 2016 年 9 月 20 日にリリースされました。このページでは、開発者に影響する Firefox 49 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- コンソールに記録された JavaScript のエラーで、デバッグのためのヒントを [\[Learn more\] リンクで提供します](https://hacks.mozilla.org/2016/06/helping-web-developers-with-javascript-errors/) ({{bug("1179876")}})。
- CSS オートコンプリート: オートコンプリートのポップアップで、より多くの候補を表示します ({{bug("1260419")}})。
- アニメーションインスペクターで、[アニメーションのパフォーマンス情報を提供する](/ja/docs/Tools/Page_Inspector/How_to/Work_with_animations#Further_information_about_animation_compositing) ようになりました ({{bug("1254408")}})。
- [インスペクターのコンテキストメニュー](/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#Element_popup_context_menu) を、よりきれいで使いやすくなるように再編しました ({{bug("1211613")}})。
- インスペクターで、`#RRGGBBAA` および `#RGBA` 構文の色の値をサポートしました ({{bug("1271191")}})。
- HTML のページでは開発ツールで、self-closing タグ ({{HTMLElement("br")}} や {{HTMLElement("img")}} など) が終了タグを持つかのように表示しないようになりました。XHTML ページではこの動作を変更していません ({{bug("820926")}})。
- アクセシビリティが向上しました。

  - ツールボックスで、キーボードフォーカスが見やすくなるように対処しました ({{bug(1242851)}})。
  - アクセシビリティのラベルがついていないコントロールに、ラベルを追加しました ({{bug(1242715)}})。
  - インスペクターのマークアップビューに、適切なツリービューの意味とキーボードナビゲーションを追加しました ({{bug(1242694)}})。

- [ネットワークモニター](/ja/docs/Tools/Network_Monitor) に Cause 列を追加しました。個々のネットワークリクエストを発生させたのは何かを示します ({{bug(1134073)}})。
- _about:debugging_ のアドオンページで、再読み込みボタンは一時的なアドオンに限り使用できるようになりました。他のアドオンでは無効になります ({{bug(1273184)}})。
- _about:debugging_ の Workers ページで、現在のブラウザーの設定に対して [互換性がない service worker](/ja/docs/Tools/about:debugging#Service_workers_not_compatible) について、警告メッセージを Service Workers セクションに表示するようになりました ({{bug(1266415)}})。
- _about:debugging_ で、新たに [Tabs ページ](/ja/docs/Tools/about:debugging#Tabs) が使用可能になりました。現在の Firefox のインスタンスで開いている、デバッグ可能なタブを一覧表示します ({{bug(1266128)}})。
- [ツールボックスの詳細設定](/ja/docs/Tools/Settings#Advanced_settings) の \[_キャッシュを無効化_] を、\[HTTP キャッシュを無効化] に改名しました。HTTP キャッシュに影響があり、[Service Workers](/ja/docs/Web/API/Service_Worker_API) や [Cache API](/ja/docs/Web/API/Cache) には影響がないことを明確にするためです (bug(1253018))。
- ストレージインスペクターのコンテキストメニューで [IndexedDB データベースを削除できるようになりました](/ja/docs/Tools/Storage_Inspector#IndexedDB) ({{bug("1205123")}})。また、何らかの理由で IndexedDB が削除できない (例えばアクティブな接続が存在する) 場合に警告メッセージを表示します ({{bug(1268460)}})。

### HTML

- {{HTMLElement("details")}} 要素および {{HTMLElement("summary")}} 要素をサポートしました ({{bug(1226455)}})。
- {{HTMLElement("input")}} 要素の {{htmlattrxref("pattern", "input")}} 属性は、背後の JavaScript {{jsxref("RegExp")}} で `'u'` パラメーターを使用するようになりました ({{bug(1227906)}})。
- 仕様書の変更に合わせて、{{HTMLElement('track')}} 要素の {{htmlattrxref("kind", "track")}} 属性で無効な値は、`'subtitles'` ではなく `'metadata'` と同様に扱うようになりました ({{bug(1269712)}})。
- {{HTMLElement("iframe")}} 要素の {{htmlattrxref("sandbox", "iframe")}} 属性で値 `'allow-popups-to-escape-sandbox'` および `'allow-modals'` をサポートしました ({{bug(1190641)}})。
- microdata 属性および Microdata API のサポートを廃止しました ({{bug(909633)}})。
- {{HTMLElement("a")}} 要素の {{htmlattrxref("referrerpolicy", "a")}} 属性で値 `'no-referrer-when-downgrade`' および `'origin-when-cross-origin'` をサポートしました ({{bug(1178337)}})。
- {{HTMLElement("label")}} 要素の {{htmlattrxref("form", "label")}} コンテンツ属性を削除しました。{{domxref("HTMLLabelElement.form")}} はまだ存在していますが、コントロールが存在する (およびそのコントロールがフォームに関連付けられている) 場合に、ラベルのコントロールが関連付けられているフォームを返すようになりました ({{bug(1268852)}})。

### CSS

- 背景画像を描画する位置のオフセットを水平方向および垂直方向に分けて指定できる、{{cssxref("background-position-x")}} プロパティおよび {{cssxref("background-position-y")}} プロパティをサポートしました。これらは {{cssxref("background-position")}} を構成します ({{bug("550426")}})。
- {{cssxref("background-repeat")}} で、キーワード `round` および `space` をサポートしました ({{bug("548372")}})。
- {{cssxref("background-clip")}} で、キーワード `text` をデフォルトで有効化しました ({{bug(1264905)}})。
- 4 桁および 8 桁の 16 進数による CSS [色](/ja/docs/Web/CSS/color_value) の値 (#RRGGBBAA や #RGBA) による、アルファチャンネルを含む色の指定をサポートしました ({{bug("567283")}})。
- {{cssxref(":dir()")}} 疑似クラスの接頭辞を外しました ({{bug(859301)}})。
- {{cssxref("clip-path")}} の実験的な実装 (デフォルトで有効化していません) で、複数の {{cssxref("&lt;basic-shape&gt;")}} 値の間で補間処理が可能になりました ({{bug(1110460)}})。
- [長さの単位 `q`](/ja/docs/Web/CSS/length#q) をサポートしました ({{bug(1274526)}})。
- {{cssxref("text-align-last")}} プロパティの接頭辞を削除しました ({{bug(1039541)}})。
- {{cssxref("overflow-wrap")}} をサポートしました。{{cssxref("word-wrap")}} を置き換えるものですが、こちらも別名としてサポートを続けます ({{bug(955857)}})。
- [CSS Grids](/ja/docs/Web/CSS/CSS_Grid_Layout) の実験的な実装が進展しました:

  - {{cssxref("grid-gap")}}、{{cssxref("grid-row-gap")}}、{{cssxref("grid-column-gap")}} プロパティで {{cssxref("&lt;percentage&gt;")}} をサポートしました ({{bug(1266268)}})。
  - {{cssxref("align")}}、{{cssxref("justify-self")}}`:baseline`、`last-baseline` ("baseline self-alignment" として知られる) でグリッドレイアウトをサポートしました ({{bug(1221525)}})。
  - グリッドアイテムの Baseline Content Alignment を実装しました ({{bug(1256429)}})。

- [CSS Masks](/ja/docs/Web/CSS/CSS_Masks) の実験的な実装が進展しました:

  - {{cssxref("mask-origin")}} プロパティの初期値を、仕様書に合わせて `padding-box` から `border-box` に変更しました ({{bug(1258286)}})。
  - {{cssxref("mask-repeat")}} プロパティで値 `space` および `round` をサポートしました ({{bug(1258626)}})。
  - {{cssxref("mask-position")}} 属性でアニメーションを行えない問題を修正しました ({{bug(1273804)}})。

- {{cssxref("text-emphasis")}} を制御する設定項目を削除しました。このプロパティを無効化することはできません ({{bug(1229609)}})。

### JavaScript

- ES2015 (ES6) の {{jsxref("Proxy")}} のトラップである {{jsxref("Global_Objects/Proxy/handler/getPrototypeOf", "getPrototypeOf()")}} および {{jsxref("Global_Objects/Proxy/handler/setPrototypeOf", "setPrototypeOf()")}} を実装しました ({{bug(888969)}})。
- ES2015 (ES6) の {{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}、{{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}、{{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}、{{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}} メソッドおよび {{jsxref("RegExp.@@species", "RegExp[@@species]")}} getter を実装しました ({{bug(887016)}})。
- 非推奨かつ非標準である、`String.prototype.`{{jsxref("String.prototype.match", "match")}}/{{jsxref("String.prototype.search", "search")}}/{{jsxref("String.prototype.replace", "replace")}} の `flags` 引数を廃止しました ({{bug(1108382)}})。
- Google Chrome ブラウザとの相互運用性を高めるため {{jsxref("Date.parse()")}} で、2 桁で表す年の処理を変更しました ({{bug(1265136)}})。

### インターフェイス/API/DOM

#### DOM & HTML DOM

- {{domxref("DOMTokenList.supports()")}} メソッドを追加しました ({{bug(1257849)}})。
- {{domxref("DOMTokenList.replace()")}} メソッドを追加しました ({{bug(1224186)}})。
- {{domxref("URLSearchParams.URLSearchParams", "URLSearchParams()")}} コンストラクタのパラメータで、先頭の `'?'` 文字は無視するようになりました ({{bug(1268361)}})。
- {{domxref("URL.origin")}}、{{domxref("HTMLAnchorElement.origin")}}、{{domxref("HTMLAreaElement.origin")}} で `blob:` スキームの URL を使用した場合の戻り値が、誤った値である `null` ではなく、先頭の `blob:` を除いた URL のオリジンになりました ({{bug(1270451)}})。
- プリレンダリングモードで、{{domxref('Document.visibilityState')}} プロパティが `'prerender'` を返すようになりました ({{bug(1069772)}})。
- {{domxref("Window.isSecureContext")}} プロパティを実装しました ({{bug(1162772)}})。
- DOM4 の {{domxref("ChildNode.before()")}}、{{domxref("ChildNode.after()")}}、{{domxref("ChildNode.replaceWith()")}}、{{domxref("ParentNode.append()")}}、{{domxref("ParentNode.prepend()")}} メソッドを実装しました ({{bug(911477)}})。
- {{domxref("TouchList.identifiedTouch()")}} メソッドを削除しました ({{bug(1188539)}})。
- {{domxref("Window.open()")}} を呼び出した際に、{{domxref("Window")}} の `scrollbars` 特性をデフォルトで有効にしました。従来から、これは有効化することが強く推奨されていましたが、デフォルトでは有効化していませんでした ({{bug(1257887)}})。
- 動画コンテンツの frame-by-frame シークを可能にする、*実験的*かつ*非標準*の {{domxref("HTMLMediaElement.seekToNextFrame()")}} メソッドを追加しました ({{bug(1235301)}}。これがどれだけ役に立つかを私たちが理解するのを助けるために試用することをお勧めしますが、_製品版のコードでは使用しないでください!_
- {{domxref("HTMLLabelElement.form")}} プロパティが、コントロールが存在する (およびそのコントロールがフォームに関連付けられている) 場合に、ラベルのコントロールが関連付けられているフォームを返すようになりました。以前は、このプロパティを使用して label を直接フォームに関連付けていました ({{bug(1268852)}})。
- {{domxref("EventTarget.addEventListener()")}} の第 3 引数でサポートする値に、{{jsxref("Boolean")}} および `EventListenerOptions` を追加しました ({{bug(1266164)}} および {{bug(1266066)}})。
- {{domxref("KeyboardEvent.key")}} で、音量に関する値を改名しました。`"VolumeDown"` は `"AudioVolumeDown"` に、`"VolumeUp"` は `"AudioVolumeUp"` に、`"VolumeMute"` は `"AudioVolumeMute"` に変わりました。この変更により、Firefox が UI Events 仕様の最新ドラフトに準拠しました ({{bug(1272578)}})。使用可能なすべてのキーコードについては、{{SectionOnPage("/ja/docs/Web/API/KeyboardEvent/code", "Code values")}} をご覧ください。
- 以前は `"MozHomeScreen"`、`"MozCameraFocusAdjust"`、`"MozPhoneCall"` として参照されていたキーに、UI Events 仕様で公式な名称がつきました。`"GoHome"`、`"CameraFocus"`、`"Call"` になります。Firefox 49 で、新しい名称を使用するように更新しました ({{bug(1272599)}})。使用可能なすべてのキーコードについては、{{SectionOnPage("/ja/docs/Web/API/KeyboardEvent/code", "Code values")}} をご覧ください。
- キーの値 `"Separator"` および `"MediaSkip"` は、非推奨になったうえに使用されていませんので、削除しました ({{bug(1232919)}})。
- キーの値 `"Hyper"` および `"Super"` とそれらに対応するキーコードを、過去のモディファイアキーを表すように追加しました ({{bug(1232919)}})。
- マルチメディア数値キーパッド用に、2 つのキーの値を追加しました: `"Key11"`、`"Key12"` ({{bug(1232919)}})。
- オーディオコントロールキー用に、以下の新たなキーの値を追加しました: `"AudioBassBoostToggle"`、`"AudioTrebleDown"`、`"AudioTrebleUp"` ({{bug(123919)}})。
- マイクコントロールキー用に、以下のキーの値を追加しました: `"MicrophoneToggle"`、`"MicrophoneVolumeDown"`、`"MicrophoneVolumeUp"`、`"MicrophoneVolumeMute"` ({{bug(123919)}})。
- 音声認識デバイス用に、以下の新たなキーの値を追加しました: "`SpeechCorrectionList"`、`"SpeechInputToggle"` ({{bug(1232919)}})。
- 電話機の特殊キーをサポートするため、以下のキーの値を追加しました: `"AppSwitch"`、`"Call"`、`"CameraFocus"`、`"EndCall"`、`"GoBack"`、`"GoHome"`、`"HeadsetHook"`、`"LastNumberRedial"`、`"Notification"`、`"MannerMode"`、`"VoiceDial"` ({{bug(1232919)}})。
- アプリケーションキー用に、以下のキーの値を追加しました: `"LaunchContacts"`、`"LaunchPhone"` ({{bug(1232919)}})。
- テレビデバイス用に、以下の新たなキーの値を追加しました: `"TV3DMode"`、`"TVAntennaCable"`、`"TVAudioDescription"`、`"TVAudioDescriptionMixDown"`、`"TVAudioDescriptionMixUp"`、`"TVContentsMenu"`、`"TVDataService"`、`"TVInput"`、`"TVInputComponent1"`、`"TVInputComponent2"`、`"TVInputComposite1"`、`"TVInputComposite2"`、`"TVInputHDMI1"`、`"TVInputHDMI2"`、`"TVInputHDMI3"`、`"TVInputHDMI4"`、`"TVInputVGA1"`、`"TVMediaContext"`、`"TVNetwork"`、`"TVNumberEntry"`、`"TVRadioService"`、`"TVSatellite"`、`"TVSatelliteBS"`、`"TVSatelliteCS"`、`"TVSatelliteToggle"`、`"TVTerrestrialAnalog"`、`"TVTerrestrialDigital"`、`"TVTimer"`、`"DVR"` ({{bug(1232919)}})。
- キーの値 `"MediaSelect"` を、標準のキーの値である `"LaunchMediaPlayer"` に置き換えました ({{bug(1272592)}})。
- メディアプレイヤーの付加機能キーの値を追加しました。`"MediaAudioTrack"`、`"MediaSkipBackward"`、`"MediaSkipForward"`、`"MediaStepBackward"`、`"MediaStepForward"`、`"MediaTopMenu"`、`"NavigateIn"`、`"NavigateNext"`、`"NavigateOut"`、`"NavigatePrevious"` です ({{bug(1232919)}})。

#### Canvas

- Canvas にフィルターを追加する機能を提供する {{domxref("CanvasRenderingContext2D.filter")}} プロパティがデフォルトで有効になり、設定の切り替えが不要になりました ({{bug(1173545)}})。

#### WebGL

- {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}} の {{domxref("EXT_color_buffer_float")}} 拡張を実装しました ({{bug(1129332)}})。
- WebGL コンテキストの作成が失敗したときに発生する、{{Event("webglcontextcreationerror")}} イベントを実装しました ({{bug(1271478)}})。デバッグや製品版のエラー制御において、何が誤っているかの理解を助けるために使用してください。

#### IndexedDB

- IndexedDB のインデックスがリネーム可能になりました。{{domxref("IDBIndex.name")}} プロパティが読み書き可能になっています ({{bug(1118028)}})。
- {{domxref("IDBObjectStore")}} もリネーム可能になりました。{{domxref("IDBObjectStore.name")}} プロパティが読み書き可能になっています ({{bug(1118028)}})。

#### Service Worker 関連

- [Fetch API](/ja/docs/Web/API/Fetch_API) の {{domxref("Response")}} オブジェクトに、リダイレクトされたリクエストのレスポンスであるかを示す {{domxref("Response.redirected", "redirected")}} プロパティを実装しました。このプロパティを使用する前に、ドキュメントでセキュリティ関連の注意事項を確認してください ({{bug(1243792)}})。
- [Permissions API](/ja/docs/Web/API/Permissions_API) で、Firefox は `PermissionDescriptor` ディクショナリータイプの 'push' のサポートを廃止しました (仕様書では `PushPermissionDescriptor` として言及されています)。Firefox は `userVisibleOnly` ステータスの制御で代わりにクォータシステムに依存しており、`PushPermissionDescriptor` インスタンスに出くわしたときにエラーが発生していたためです ({{bug(1266821)}})。このディクショナリの削除により、Firefox は単に無視するようになりました。

#### Media Stream

- 以前はユーザーが 2 種類のハードウェアのうち一方しか使用できない状況で、音声および映像を要求する {{domxref("MediaDevices.getUserMedia()")}} の呼び出しが成功していました。この問題を修正しました ({{bug(802326)}})。
- 以前のバージョンの Firefox では、合致するデバイスのうち (両方ではなく) 一方のアクセスが拒否されたにもかかわらず、音声および映像を要求する {{domxref("MediaDevices.getUserMedia()")}} の呼び出しが成功していました。この問題を修正しました ({{bug(802326)}})。これはユーザーインターフェイスを若干変更させており、ユーザーが許可を求められる際の選択肢で "No audio" や "No video" を削除しました。
- {{domxref("MediaStream.getTrackById()")}} メソッドを実装しました ({{bug(1208390)}})。

#### WebRTC

- 指定したストリームを構成していないトラックをコネクションへ追加できるように、{{domxref("RTCPeerConnection.addTrack()")}} メソッドを更新しました。代わりに、コネクションの受信側でトラックをまとめるためにストリームが使用されます ({{bug(1271669)}})。

#### 新規 API

- {{domxref("PerformanceObserver")}} API を、Nightly でデフォルトで有効にしました ({{bug(1271487)}})。他のバージョンの Firefox 49 では、デフォルトで無効化しています ({{bug(1271487)}})。

#### その他

- {{domxref("XMLHttpRequest.getResponseHeader()")}} および {{domxref("XMLHttpRequest.getAllResponseHeaders()")}} で、設定項目 `network.http.keep_empty_response_headers_as_empty_string` が `true` に設定されている場合は、空のヘッダーを返すようになりました ({{bug(669259)}})。
- Firefox OS 限定の [Data Store API](/ja/docs/Archive/Firefox_OS/API/Data_Store_API) を削除しました ({{bug(1261009)}})。
- [Fullscreen API](/ja/docs/Web/API/Fullscreen_API) の {{domxref("Document.onfullscreenchange")}}、{{domxref("Document.onfullscreenerror")}} イベントハンドラーを、 {{domxref("Element")}} から削除しました。そこでは発生していなかったためです。ただし、接頭辞付きのイベントハンドラーは互換性のために維持しています ({{bug(1270386)}})。これは設定項目 `full-screen-api.unprefix.enabled` で制御されており、デフォルトで有効化していないことに注意してください ({{bug(1268749)}})。
- 廃止済みの {{domxref("Document.mozFullScreen")}} プロパティの接頭辞を削除して、{{domxref("Document.fullscreen")}} としました ({{bug(1269157)}}}。これは設定項目 `full-screen-api.unprefix.enabled` で制御されており、デフォルトで有効化していないことに注意してください ({{bug(1268749)}})。
- 読み取り専用の {{domxref("Document.fullscreenElement")}} および {{domxref("Document.fullscreenEnabled")}} プロパティで、値を変更しようとしても例外が発生しないようになりました。代わりに新しい値は暗黙的に無視され、setter 関数は何も行いません ({{bug(1269798)}})。
- {{domxref("DataTransfer.getData()")}} で、どのような種類のデータでもクリップボードから取り出せるようになりました。以前は、特定の MIME タイプのデータのみ取り出し可能でした ({{bug(860857)}})。
- `PerformanceCompositeTiming` および `PerformanceRenderTiming` の 2 つのインターフェイスで構成される、[Frame Timing API](/ja/docs/Web/API/Frame_Timing_API) の実装を削除しました。仕様書が全面的に書き直されたためです ({{bug(1271846)}})。
- 仕様書に合わせて、{{domxref("VTTCue.positionAlign")}} プロパティが `Align` 列挙型ではなく `PositionAlign` 列挙型を返すようになりました ({{bug(1276129)}})。
- [Web Speech API](/ja/docs/Web/API/Web_Speech_API#Speech_synthesis) の、音声合成の部分をサポートしました ({{bug(1268633)}})。
- [Performance Timeline API](/ja/docs/Web/API/Performance_Timeline) を、Nightly でデフォルトで有効化しました (Aurora、Beta、Release では無効です)。
- {{event("install")}} イベントおよび {{domxref("Window.oninstall")}} イベントハンドラーを [Web Manifests](/ja/docs/Web/Manifest) 向けにサポートしました ({{bug(1265279)}})。
- [Web Audio API](/ja/docs/Web/API/Web_Audio_API) の {{domxref("AudioContext.createPeriodicWave()")}} メソッドを使用するとき、結果の周期的な波形をノーマライズすべきかを、第 3 引数にディクショナリーオブジェクトを含めることで指定可能になりました。このオブジェクトにはひとつのパラメータを含めて `{disableNormalization: true}` のようにします ({{bug(1265405)}})。
- WebVTT API で {{domxref("VTTCue.positionAlign")}} が、仕様書どおりに正しく `PositionAlignSetting` 列挙型を返すようになりました。以前は `AlignSetting` 列挙型を返していました ({{bug(1276129)}})。
- Web Speech API の音声合成の部分を、すべてのデスクトップブラウザーでデフォルトで有効にしました ({{bug(1268633)}})。
- [Web Animations API](/ja/docs/Web/API/Web_Animations_API) の {{domxref("Animation.Animation()", "Animation()")}} コンストラクターが、null タイムラインを受け入れるようになりました ({{bug(1096776)}})。

### MathML

_変更なし。_

### SVG

- 非推奨の {{SVGElement('altGlyph')}}、{{SVGElement('altGlyphDef')}}、{{SVGElement('altGlyphItem')}} 要素のサポートを廃止しました ({{bug(1260032)}})。

### Audio/Video

_変更なし。_

### プラグインと Flash

Firefox 49 より、サイトが正しく機能するために必要ではない特定の種類の Flash コンテンツをデフォルトでブロックするようになりました。この動作は設定項目 `browser.safebrowsing.blockedURIs.enabled` で制御しており、サイトのユーザービリティに大きな影響を与えることなく、一般的にはサイトや Firefox のパフォーマンスを向上する助けになります。また、クラッシュの主要な原因を取り除くことにより、ブラウジング体験の安定性を向上する助けにもなります。ブロックされる Flash モジュールにはフィンガープリンティングのためだけに使用されるものやいくつかの "スーパー Cookie" モジュールが含まれまており、将来はより多くの種類のモジュールをブロックするように拡張するでしょう。詳しくは {{bug(1275591)}} をご覧ください。

これはプラグインがない未来への行程の、次のステップになります。機能を果たすためにプラグインを必要としない段階に、HTML はとても近づいています。

## HTTP

- [`Cache-Control: immutable`](/ja/docs/Web/HTTP/Headers/Cache-Control) ディレクティブを実装しました ({{bug(1267474)}})。詳しくは [ブログ記事](https://bitsup.blogspot.de/2016/05/cache-control-immutable.html) もご覧ください。
- {{HTTPHeader("Content-Security-Policy")}} の {{CSP("require-sri-for")}} を実装しました ({{bug(1265318)}})。

## ネットワーク

- [Proxy Auto-Configuration (PAC)](</ja/docs/Mozilla/Projects/Necko/Proxy_Auto-Configuration_(PAC)_file>) の実装を更新しました。`weekdayRange`、`dateRange`、`timeRange` で "リバースレンジ" をサポートしました。例えば `weekdayRange("SAT", "MON")` は、当日が土曜日、日曜日、月曜日である場合に `true` になります ({{bug(1251332)}})。

## セキュリティ

- [secure contexts](/ja/docs/Web/Security/Secure_Contexts) を必要とする機能を使用できるコンテキストであるかを示す、{{domxref("Window.isSecureContext")}} プロパティを実装しました ({{bug(1162772)}})。

## 互換性

既存のコンテンツとの互換性を高めるために、一部の webkit 接頭辞つきプロパティおよび属性を Firefox で受け入れるようになりました。

- 以下のプロパティは、`-webkit` 接頭辞がついていても動作します:

  - {{cssxref("-webkit-align-items")}}
  - {{cssxref("-webkit-align-content")}}
  - {{cssxref("-webkit-align-self")}}
  - {{cssxref("-webkit-animation")}}
  - {{cssxref("-webkit-animation-delay")}}
  - {{cssxref("-webkit-animation-direction")}}
  - {{cssxref("-webkit-animation-duration")}}
  - {{cssxref("-webkit-animation-fill-mode")}}
  - {{cssxref("-webkit-animation-iteration-count")}}
  - {{cssxref("-webkit-animation-name")}}
  - {{cssxref("-webkit-animation-play-state")}}
  - {{cssxref("-webkit-animation-timing-function")}}
  - {{cssxref("-webkit-backface-visibility")}}
  - {{cssxref("-webkit-background-clip")}}
  - {{cssxref("-webkit-background-origin")}}
  - {{cssxref("-webkit-background-size")}}
  - {{cssxref("-webkit-border-bottom-left-radius")}}
  - {{cssxref("-webkit-border-bottom-right-radius")}}
  - {{cssxref("-webkit-border-image")}}
  - {{cssxref("-webkit-border-top-left-radius")}}
  - {{cssxref("-webkit-border-top-right-radius")}}
  - {{cssxref("-webkit-border-radius")}}
  - {{cssxref("-webkit-box-shadow")}}
  - {{cssxref("-webkit-filter")}}
  - {{cssxref("-webkit-flex")}}
  - {{cssxref("-webkit-flex-basis")}}
  - {{cssxref("-webkit-flex-direction")}}
  - {{cssxref("-webkit-flex-flow")}}
  - {{cssxref("-webkit-flex-grow")}}
  - {{cssxref("-webkit-flex-shrink")}}
  - {{cssxref("-webkit-flex-wrap")}}
  - {{cssxref("-webkit-justify-content")}}
  - {{cssxref("-webkit-order")}}
  - {{cssxref("-webkit-perspective")}}
  - {{cssxref("-webkit-perspective-origin")}}
  - {{cssxref("-webkit-text-size-adjust")}}
  - {{cssxref("-webkit-transform")}}
  - {{cssxref("-webkit-transform-origin")}}
  - {{cssxref("-webkit-transform-style")}}
  - {{cssxref("-webkit-transition")}}
  - {{cssxref("-webkit-transition-delay")}}
  - {{cssxref("-webkit-transition-duration")}}
  - {{cssxref("-webkit-transition-property")}}
  - {{cssxref("-webkit-transition-timing-function")}}
  - {{cssxref("-webkit-user-select")}}

- 以下のプロパティは、同等の接頭辞つきプロパティに紐づけています:

  - {{cssxref("-webkit-box-flex")}}
  - {{cssxref("-webkit-box-ordinal-group")}}
  - {{cssxref("-webkit-box-orient")}}
  - {{cssxref("-webkit-box-align")}}
  - {{cssxref("-webkit-box-pack")}}

- {{cssxref("&lt;image&gt;")}} の値について:

  - 以下の関数は、接頭辞なしの同等物に紐づけています: {{cssxref("-webkit-linear-gradient", "-webkit-linear-gradient()")}}、{{cssxref("-webkit-radial-gradient", "-webkit-radial-gradient()")}}、{{cssxref("-webkit-repeating-linear-gradient", "-webkit-repeating-linear-gradient()")}}、{{cssxref("-webkit-repeating-radial-gradient","-webkit-repeating-radial-gradient()")}}。
  - 旧式の `-webkit-gradient` をサポートします (また、正規のグラデーションに変換します)。

- 以下の {{cssxref("display")}} の値を変換します:

  - `-webkit-box` を `-moz-box` に変換
  - `-webkit-flex` を `flex` に変換
  - `-webkit-inline-box` を `inline-flex` に変換
  - `-webkit-inline-flex` を `-moz-inline-flex` に変換

- 以下のプロパティをサポートします (接頭辞なしの同等物に紐づけません):

  - {{cssxref("-webkit-text-fill-color")}}
  - {{cssxref("-webkit-text-stroke-color")}}
  - {{cssxref("-webkit-text-stroke-width")}}
  - {{cssxref("-webkit-text-stroke")}}

- {{domxref("WebKitCSSMatrix")}} インターフェイスを {{domxref("DOMMatrix")}} の別名にしました。
- 以下のメディアクエリー特性を実装しました:

  - `-webkit-min-device-pixel-ratio` を [`min-resolution`](/ja/docs/Web/CSS/@media/resolution) の別名として、同じ値 (`dppx`) で実装しました。ただし、この機能は [デフォルトで無効](https://bugzilla.mozilla.org/show_bug.cgi?id=1237720) です (about:config の設定 `layout.css.prefixes.device-pixel-ratio-webkit` で制御)。
  - `-webkit-max-device-pixel-ratio` を [`max-resolution`](/ja/docs/Web/CSS/@media/resolution) の別名として、同じ値 (`dppx`) で実装しました。この機能も about:config の同じ設定で、デフォルトで無効にしています。
  - [`-webkit-transform-3d`](/ja/docs/Web/CSS/@media/-webkit-transform-3d) がマッチするようになりました。3D Transform をサポートすることを示します。

## アドオン開発者と Mozilla 開発者向けの変更点

### WebExtensions

- {{WebExtAPIRef("history")}} をサポートしました。この機能でブラウザーの履歴にアクセスでき、履歴の検索、以前アクセスしたページの情報を取得、履歴項目の追加や削除を可能にするメソッドがあります。
- tabs API に {{WebExtAPIRef("tabs.removeCSS()")}} メソッドを追加しました。このメソッドで、以前に {{WebExtAPIRef("tabs.insertCSS()")}} を呼び出して挿入した CSS を削除できます。

### インターフェイス

- {{domxref("EventTarget.addEventListener()")}} で、XBL または Firefox の chrome で実行するコードに限り有効化されている値 `mozSystemGroup` をサポートしました。これは、リスナーがシステムグループに追加されるかを示す {{jsxref("Boolean")}} です ({{bug(1274520)}})。

### その他

_変更なし。_

## 関連情報

- [Firefox 49.0 リリースノート](https://www.mozilla.jp/firefox/49.0/releasenotes/)
- [Firefox 49 アドオン互換性情報](https://dev.mozilla.jp/2016/07/firefox-49-addon-compatibility/)

## 過去のバージョン

{{Firefox_for_developers(48)}}
