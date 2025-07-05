---
title: Firefox 42 for developers
slug: Mozilla/Firefox/Releases/42
l10n:
  sourceCommit: 78ef1310a76394c4e0bdce456982abc3856790c0
---

[Firefox の最新の開発者向け機能をテストするには、 Firefox Developer Edition をインストールしてください](https://www.mozilla.org/firefox/developer/) Firefox 42 は、米国時間 2015 年 11 月 3 日にリリースされました。この記事では、ウェブ開発者だけでなく、 Firefox や Gecko の開発者やアドオン開発者にとっても有益な主な変更点を紹介します。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [Wi-Fi 経由で Android 版 Firefox のデバッグを行う](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connecting-over-the-network)
- _WebIDE で Firefox OS シミュレーターの設定を行う_
- [CSS filter のプリセット](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html#saving-filter-presets)

[Firefox 41 から Firefox 42 の間に解決した開発ツール関連のバグ一覧](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-08-10&query_format=advanced&chfield=resolution&chfieldfrom=2015-06-29&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12478437)。

### CSS

- rtl 表記の文字で、{{cssxref('writing-mode')}} の縦書きをサポートしました ([Firefox バグ 1131451](https://bugzil.la/1131451))。
- {{cssxref("caption-side")}} の値はテーブルに対して相対的になり、また{{cssxref("writing-mode")}} の値に従って実際の意味が変わります ([Firefox バグ 1202993](https://bugzil.la/1202993))。
- `-moz-margin-start` などの非標準プロパティが、対になる標準プロパティ ({{cssxref('margin-inline-start')}} など) のエイリアスになりました。以前は逆になっていました。これは {{domxref('CSSStyleDeclaration.cssText')}} が返す値やスタイルルール内のプロパティに対するイテレーションに対して影響があり、どちらも標準的な形式を使用します ([Firefox バグ 1118103](https://bugzil.la/1118103))。
- 接頭辞付きの CSS グラデーションは、設定項目 `layout.css.prefixes.gradients` を `false` にすることで無効化できるようになりました。
- {{cssxref("float")}} とマージンの相殺の動作に関する古くからのバグを、いくつか修正しました ([Firefox バグ 478834](https://bugzil.la/478834), [Firefox バグ 538194](https://bugzil.la/538194), and [Firefox バグ 451791](https://bugzil.la/451791))。

### HTML

- {{HTMLElement("img")}} ([Firefox バグ 1166910](https://bugzil.la/1166910))、{{htmlElement("iframe")}} ([Firefox バグ 1175736](https://bugzil.la/1175736))、{{HTMLElement("a")}} および {{HTMLElement("area")}} ([Firefox バグ 1174913](https://bugzil.la/1174913)) 要素の [`referrer`](/ja/docs/Web/HTML/Reference/Elements/input#referrer) 属性を実験的にサポートしました。`network.http.enablePerElementReferrer` の既定値が `false` であるため、デフォルトでは効力がありません。

### JavaScript

- {{jsxref("Reflect")}} オブジェクトを実装しました ([Firefox バグ 987514](https://bugzil.la/987514))。
- {{jsxref("Proxy")}} {{jsxref("Global_Objects/Proxy/Proxy/ownKeys", "handler.ownKeys()")}} トラップの実装を、ES2015 の確定仕様に準拠するよう更新しました ([Firefox バグ 1049662](https://bugzil.la/1049662))。
- {{jsxref('Operators', 'new')}} を伴わずに {{jsxref("Map")}}、{{jsxref("Set")}}、{{jsxref("WeakMap")}} を呼び出すと {{jsxref("TypeError")}} が発生するようになりました ([Firefox バグ 1083752](https://bugzil.la/1083752))。

### インターフェイス/API/DOM

#### DOM & HTML DOM

- [`id`](/ja/docs/Web/HTML/Reference/Elements/img#id) を伴う画像が、{{domxref("Window")}} インターフェイスのプロパティのリストに入らないようになりました。`<img id="login">` は `window.login` としてアクセスできません。この動作は Firefox 26 で導入しており、その後変更された仕様書に合致させるために削除しました ([Firefox バグ 959992](https://bugzil.la/959992))。
- {{domxref('MouseEvent.offsetX')}} および {{domxref('MouseEvent.offsetY')}} を追加しました ([Firefox バグ 69787](https://bugzil.la/69787))。
- {{domxref("HTMLInputElement")}} インターフェイスを、ディレクトリーのアップロードを扱うよう実験的に拡張しました ([Firefox バグ 1164310](https://bugzil.la/1164310))。以下 4 つのメンバーは、設定項目 `dom.input.dirpicker` を `true` に設定すると使用できます。
  - {{domxref("HTMLInputElement.directory")}}
  - {{domxref("HTMLInputElement.isFilesAndDirectoriesSupported")}}
  - {{domxref("HTMLInputElement.getFilesAndDirectories()")}}
  - {{domxref("HTMLInputElement.chooseDirectory()")}}

- {{domxref("Directory")}} インターフェイスを実験的に拡張しました ([Firefox バグ 1177688](https://bugzil.la/1177688))。{{domxref("Directory.path")}} および {{domxref("Directory.getContents")}} の 2 つのメンバーは、設定項目 `dom.input.dirpicker` を `true` に設定すると使用できます。
- `HTMLMediaElement.mozSrcObject` を {{domxref('HTMLMediaElement.srcObject')}} に改名しました ([Firefox バグ 1175523](https://bugzil.la/1175523))。

#### Service Worker

- `Request.context` を削除しました ([Firefox バグ 1188062](https://bugzil.la/1188062))。
- デスクトップ版 Firefox で[プッシュ API](/ja/docs/Web/API/Push_API) をデフォルトで有効にしました ([Firefox バグ 1153499](https://bugzil.la/1153499)) が、Nightly/Dev Edition/Beta チャンネルのみで有効です。コンシューマーの UX およびデバッグ機能が適切に実装されるまで、Release チャンネルではデフォルトで無効化しています ([Firefox バグ 1207875](https://bugzil.la/1207875))。なお、 `about:config` の設定項目 `dom.push.enabled` で有効化できます。
- {{domxref("PushManager.hasPermission()")}} メソッドが仕様書で非推奨になり、{{domxref("PushManager.permissionState()")}} メソッドに置き換えられました。Firefox でこれを反映するように、実装を更新しました ([Firefox バグ 1183853](https://bugzil.la/1183853))。
- [通知 API](/ja/docs/Web/API/Notifications_API) で、Service Worker に関する追加実装を行いました ([Firefox バグ 1114554](https://bugzil.la/1114554))。ただし、Release 版では無効化しています。

#### ウェブアニメーション API

[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) の実験的な実装で、サポート範囲が広がりました:

- {{domxref('AnimationPlayer.playbackRate')}} プロパティ ([Firefox バグ 1127380](https://bugzil.la/1127380))。
- {{domxref('CSSAnimation')}} and {{domxref('CSSTransition')}} インターフェイス ([Firefox バグ 1178186](https://bugzil.la/1178186))。
- {{domxref('Animation.reverse()')}} メソッド ([Firefox バグ 1150808](https://bugzil.la/1150808))。
- {{domxref('AnimationPlaybackEvent')}} インターフェイスを実装して、{{domxref('Animation')}} で {{domxref("Animation/cancel_event", "cancel")}} および {{domxref("Animation/finish_event", "finish")}} イベントが発生するようになりました ([Firefox バグ 1178664](https://bugzil.la/1178664))。

#### Web Components

[シャドウ DOM](/ja/docs/Web/API/Web_components/Using_shadow_DOM) の実験的な実装を変更しました。

- {{domxref('ShadowRoot')}} で {{domxref('Node.cloneNode()')}} を実行しようとすると、`DataCloneError` 例外が発生します ([Firefox バグ 1176757](https://bugzil.la/1176757))。
- {{domxref('ShadowRoot')}} を引数として {{domxref('Document.importNode()')}} を実行すると、`NotSupportedError` の {{domxref("DOMException")}} が発生します ([Firefox バグ 1177914](https://bugzil.la/1177914))。
- {{domxref('ShadowRoot')}} を引数として {{domxref('Document.adoptNode()')}} を実行すると、`HierarchyRequestError` の {{domxref("DOMException")}} が発生します ([Firefox バグ 1177991](https://bugzil.la/1177991))。

#### WebGL

- WebGL2 の {{domxref('WebGLTransformFeedback')}} を実装しました ([Firefox バグ 1048724](https://bugzil.la/1048724))。
- WebGL2 のコンテキストを得るため、{{domxref('HTMLCanvasElement.getContext()')}} は以前の `experimental-webgl2` に代わり `webgl2` を使用するようになりました ([Firefox バグ 1187174](https://bugzil.la/1187174))。

#### WebRTC

- {{domxref("RTCPeerConnection.createOffer()")}} のオプションデータ型である `RTCOfferOptions` が、より仕様に近くなるように更新されました。他の変更点としては、 `voiceActivityDetection` オプションを提供する `RTCOfferAnswerOptions` 辞書をベースにしたことです。
- `RTCAnswerOptions` 辞書が追加されました。これは、 {{DOMxRef("RTCPeerConnection.createAnswer", "createAnswer()")}} の `options` 引数に使用される型です。
- `RTCICECandidatePairStats.mozPriority` を {{domxref('RTCICECandidatePairStats.priority')}} に改名しました ([Firefox バグ 1184426](https://bugzil.la/1184426))。

#### 新規 API

- {{domxref("ImageBitmap")}} インターフェイスおよび {{domxref("createImageBitmap()")}} メソッドを実装しました。これらは通常の window スクリプトおよびウェブワーカーで有効であり、window やワーカーのコンテキスト間で効率よく画像を渡すことができます ([Firefox バグ 1044102](https://bugzil.la/1044102))。

#### その他

- {{domxref('IDBCursorWithValue')}} インターフェイスが[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で使用可能になりました ([Firefox バグ 1188115](https://bugzil.la/1188115))。
- [ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)が発したエラーイベントがバブリングしないようになりました ([Firefox バグ 1188141](https://bugzil.la/1188141))。
- [Media Source Extensions](/ja/docs/Web/API/Media_Source_Extensions_API) (MSE) がホワイトリストに記載されたサイトだけでなく、すべてのウェブサイトで有効になりました ([Firefox バグ 1185611](https://bugzil.la/1185611))。
- 非標準かつ非推奨である `Window.mozRequestAnimationFrame()` を削除しました ([Firefox バグ 909154](https://bugzil.la/909154))。代わりに、標準の {{domxref('Window.requestAnimationFrame()')}} を使用してください。
- 音声合成 (text-to-speech) を Windows 向けのデスクトップ版 Firefox に実装しました。ただし、`about:config` の `media.webspeech.synth.enabled` フラグで無効化しています ([Firefox バグ 1003457](https://bugzil.la/1003457))。詳しくは[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) をご覧ください。

### MathML

_変更なし。_

### SVG

_変更なし。_

### Audio/Video

_変更なし。_

## HTTP

- Firefox 41 まで、HTTP/2 レスポンスに含まれる未定義または無効な擬似ヘッダーフィールドを、誤って受け入れていました。これが修正され、Firefox 42 より受け入れる擬似ヘッダーフィールドは仕様書に従い _:status_ のみになります。独自のフィールドを含むレスポンスヘッダーは、異常なものであると判断します ([Firefox バグ 1136727](https://bugzil.la/1136727))。

## ネットワーク

- CSP の [`upgrade-insecure-requests`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#upgrade-insecure-requests) ディレクティブを実装しました ([Firefox バグ 1139297](https://bugzil.la/1139297))。

## セキュリティ

- 有効期間が 39 か月を超える EV 証明書は、DV 証明書として判断および取り扱われるようになりました ([Firefox バグ 1145679](https://bugzil.la/1145679))。

## アドオン開発者と Mozilla 開発者向けの変更点

### インターフェイス

#### nsIContentPolicy

- Gecko 内部やアドオンのコードがさまざまなタイプの要求をより区別できるようにするため、`TYPE_EMBED` 定数を `nsIContentPolicy` に追加しました。以前はこのような場合に、`TYPE_OBJECT` を使用していました ([Firefox バグ 1148030](https://bugzil.la/1148030))。
- 同様に、`TYPE_SUBDOCUMENT` 定数を `TYPE_FRAME` および `TYPE_IFRAME` に分割しました ([Firefox バグ 1148044](https://bugzil.la/1148044))。

### XUL

_変更なし。_

### JavaScript コードモジュール

_変更なし。_

### XPCOM

_変更なし。_

### その他

_変更なし。_

## 過去のバージョン

{{Firefox_for_developers('41')}}
