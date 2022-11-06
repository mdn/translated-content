---
title: Firefox 58 for developers
slug: Mozilla/Firefox/Releases/58
---

Firefox 58 は、米国時間 2018 年 1 月 23 日にリリースされました。このページでは、開発者に影響する Firefox 58 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- {{cssxref("clip-path")}} で生成したシェイプ用の [シェイプパスエディター](/ja/docs/Tools/Page_Inspector/How_to/Edit_CSS_shapes) を、既定で有効にしました ({{bug(1405339)}})。
- [ネットワークモニター](/ja/docs/Tools/Network_Monitor) に、[ネットワーク通信の記録を停止/再開する](/ja/docs/Tools/Network_Monitor#Pausing_and_resume_network_traffic_recording) ボタンを追加しました ({{bug(1005755)}})。
- [ネットワークモニター](/ja/docs/Tools/Network_Monitor) で "Flash" フィルターボタンが使用できなくなりました。Flash の要求は "その他" フィルターに含まれます ({{bug(1413540)}})。
- 古いレスポンシブデザインモード (Firefox 52 より前のバージョンで、デフォルトで有効でした) のコードを、開発ツールから削除しました ({{bug(1305777)}})。新しいツールの情報は [レスポンシブデザインモード](/ja/docs/Tools/Responsive_Design_Mode) で確認してください。
- ページインスペクターの CSS ペインから、MDN のドキュメントを参照する機能を削除しました (バージョン 55 から無効化していました。{{bug(1382171)}})。

### HTML

_変更なし。_

### CSS

- {{cssxref("@font-face/font-display", "font-display")}} ディスクリプターを、すべてのプラットフォームにおいてデフォルトで有効にしました ({{bug(1317445)}})。

### SVG

_変更なし。_

### JavaScript

- {{jsxref("Promise.prototype.finally()")}} メソッドを実装しました ({{bug(1019116)}})。
- {{jsxref("PluralRules", "Intl.PluralRules")}} オブジェクトを実装しました ({{bug(1403318)}})。
- {{jsxref("NumberFormat.formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}} メソッドを実装しました ({{bug(1403319)}})。
- {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}} オブジェクトで `hourCycle` オプションと `hc` 言語タグをサポートしました ({{bug(1386146)}})。
- [optional catch binding 提案](https://github.com/tc39/proposal-optional-catch-binding) を実装しました ({{bug(1380881)}})。

### API

#### 新規 API

- {{domxref("PerformanceNavigationTiming")}} API を実装しました ({{bug(1263722)}})。

  - 必要に応じてこのインターフェイスを無効化できる設定項目 `dom.enable_performance_navigation_timing` (既定値は `true`) を Gecko に追加しました ({{bug(1403926)}})。

#### DOM

- いくつかの API において、error オブジェクトで報告されるエラー (例えば {{domxref("FileReader")}}、{{domxref("IDBRequest")}}、{{domxref("IDBTransaction")}} の `error` プロパティや、{{domxref("RTCPeerConnection")}} で一定の方法によるリクエストが成功しなかったとき) が、{{domxref("DOMException")}} のインスタンスになりました。{{domxref("DOMError")}} は非推奨になり、DOM4 仕様書から削除されました ({{bug(1120178)}})。
- [WebVR API](/ja/docs/Web/API/WebVR_API) を、macOS でデフォルトで有効にしました ({{bug(1374399)}})。
- {{domxref("PerformanceResourceTiming.workerStart")}} プロパティをサポートしました ({{bug(1191943)}})。
- バジェットベースのバックグラウンドタイムアウト調節を実装しました。詳しくは [Policies in place to aid background page performance](/ja/docs/Web/API/Page_Visibility_API#Policies_in_place_to_aid_background_page_performance) をご覧ください ({{bug(1377766)}})。

#### DOM イベント

_変更なし。_

#### メディアと WebRTC

- 接頭辞付きの {{domxref("HTMLMediaElement.srcObject")}} を削除しました。`mozSrcObject` の代わりに標準の `srcObject` を使用するように、コードを更新してください ({{bug(1183495)}})。
- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} を使用して取得したストリームにトラックを追加するために {{domxref("MediaStream.addTrack()")}} を使用して、その結果のストリームを記録しようとすると、期待どおりに動作するようになりました。以前は、`getUserMedia()` が返したストリームに元から含まれていたトラックだけが、記録したメディアに含まれていました ({{bug(1296531)}})。
- [WebVTT](/ja/docs/Web/API/WebVTT_API) の {{domxref("VTTRegion")}} インターフェイスは WebVTT ファイルを解釈するときに常に作成されていましたが、以前はその結果の領域が使用されませんでした。Firefox 58 より、設定項目 `media.webvtt.regions.enabled` の値を `true` に設定すると、領域を使用するようになりました。

#### Canvas と WebGL

- 接頭辞つき WebGL 拡張のサポートを廃止しました ({{bug(1403413)}}):

  - `MOZ_WEBGL_compressed_texture_atc` の代わりに {{domxref("WEBGL_compressed_texture_atc")}} を使用してください。
  - `MOZ_WEBGL_compressed_texture_pvrtc` の代わりに {{domxref("WEBGL_compressed_texture_pvrtc")}} を使用してください。
  - `MOZ_WEBGL_compressed_texture_s3tc` の代わりに {{domxref("WEBGL_compressed_texture_s3tc")}} を使用してください。
  - `MOZ_WEBGL_depth_texture` の代わりに {{domxref("WEBGL_depth_texture")}} を使用してください。
  - `MOZ_WEBGL_lose_context` の代わりに {{domxref("WEBGL_lose_context")}} を使用してください。

### HTTP

- {{httpheader("Content-Security-Policy-Report-Only")}} で [`frame-ancestors`](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) を無視しないようになりました ({{bug(1380755)}})。
- TLS ハンドシェイクのタイムアウトを Firefox に実装しました。既定値は 30 秒です。タイムアウト時間は、about:config の設定項目 `network.http.tls-handshake-timeout` で変更できます ({{bug(1393691)}})。
- [`worker-src`](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/worker-src) CSP ディレクティブを実装しました ({{bug(1302667)}})。

### セキュリティ

_変更なし。_

### プラグイン

_変更なし。_

### その他

- [プログレッシブ ウェブアプリ](/ja/Apps/Progressive) の取り組みの一環として、Android 版 Firefox で "ホーム画面に追加" をサポートしました ({{bug(1212648)}})。
- [WebAssembly](/ja/docs/WebAssembly) に、読み込み時間を最適化する階層型コンパイラー ({{bug(1277562)}}) と、新たなストリーミング API ({{jsxref("WebAssembly.compileStreaming()")}} および {{jsxref("WebAssembly.installStreaming()")}}) を搭載しました ({{bug(1347644)}})。

## ウェブプラットフォームから廃止

### HTML

- ホットスポット領域を作成するために、{{htmlelement("map")}} 要素の内部に {{htmlelement("a")}} 要素を入れ子にすることができなくなりました。代わりに {{htmlelement("area")}} 要素を使用しなければなりません ({{bug(1317937)}})。

### CSS

- Mozilla 独自仕様である以下の system metric 疑似クラスが、ウェブコンテンツで使用できなくなりました ({{bug(1396066)}}):

  - {{Cssxref(":-moz-system-metric(images-in-menus)")}}
  - {{Cssxref(":-moz-system-metric(mac-graphite-theme)")}}
  - {{Cssxref(":-moz-system-metric(scrollbar-end-backward)")}}
  - {{Cssxref(":-moz-system-metric(scrollbar-end-forward)")}}
  - {{Cssxref(":-moz-system-metric(scrollbar-start-backward)")}}
  - {{Cssxref(":-moz-system-metric(scrollbar-start-forward)")}}
  - {{Cssxref(":-moz-system-metric(scrollbar-thumb-proportional)")}}
  - {{Cssxref(":-moz-system-metric(touch-enabled)")}}
  - {{Cssxref(":-moz-system-metric(windows-default-theme)")}}

- Mozilla 独自仕様である以下の media feature が、ウェブコンテンツで使用できなくなりました ({{bug(1396066)}}):

  - `-moz-color-picker-available`
  - `-moz-is-glyph`
  - [`-moz-mac-graphite-theme`](/ja/docs/Web/CSS/@media/-moz-mac-graphite-theme)
  - `-moz-mac-yosemite-theme`
  - [`-moz-os-version`](/ja/docs/Web/CSS/@media/-moz-os-version)
  - `-moz-overlay-scrollbars`
  - `-moz-physical-home-button`
  - [`-moz-scrollbar-end-backward`](/ja/docs/Web/CSS/@media/-moz-scrollbar-end-backward)
  - [`-moz-scrollbar-end-forward`](/ja/docs/Web/CSS/@media/-moz-scrollbar-end-forward)
  - [`-moz-scrollbar-start-backward`](/ja/docs/Web/CSS/@media/-moz-scrollbar-start-backward)
  - [`-moz-scrollbar-start-forward`](/ja/docs/Web/CSS/@media/-moz-scrollbar-start-forward)
  - [`-moz-scrollbar-thumb-proportional`](/ja/docs/Web/CSS/@media/-moz-scrollbar-thumb-proportional)
  - `-moz-swipe-animation-enabled`
  - [`-moz-windows-accent-color-in-titlebar`](/ja/docs/Web/CSS/@media/-moz-windows-accent-color-in-titlebar)
  - [`-moz-windows-classic`](/ja/docs/Web/CSS/@media/-moz-windows-classic)
  - [`-moz-windows-compositor`](/ja/docs/Web/CSS/@media/-moz-windows-compositor)
  - [`-moz-windows-default-theme`](/ja/docs/Web/CSS/@media/-moz-windows-default-theme)
  - [`-moz-windows-glass`](/ja/docs/Web/CSS/@media/-moz-windows-glass)
  - [`-moz-windows-theme`](/ja/docs/Web/CSS/@media/-moz-windows-theme)

- Mozilla 独自仕様である `:-moz-styleeditor-transitioning` 疑似クラスが、ウェブコンテンツで使用できなくなりました ({{bug(1396099)}})。

### JavaScript

- 非標準の {{jsxref("Date.prototype.toLocaleFormat()")}} メソッドを削除しました ({{bug(818634)}})。詳細および移行方法について、[Warning: Date.prototype.toLocaleFormat is deprecated](/ja/docs/Web/JavaScript/Reference/Errors/Deprecated_toLocaleFormat) をご覧ください。
- 非標準および非推奨の {{jsxref("Object.prototype.watch()")}} および {{jsxref("Object.prototype.unwatch", "unwatch()")}} メソッドを削除しました。今後は動作しません ({{bug(638054)}})。代わりに [setters および getters](/ja/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters) または [proxy](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy) の使用を検討してください。
- [レガシーイテレータープロトコル](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features/The_legacy_Iterator_protocol)、[`StopIteration`](/ja/docs/Archive/Web/StopIteration) オブジェクト、[レガシージェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function)、非標準の {{jsxref("Function.prototype.isGenerator()")}} メソッドを削除しました。代わりに ES2015 の [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols) や、標準準拠の [イテレーターとジェネレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators) を使用してください ({{bug(1083482)}}, {{bug(1413867)}}, {{bug(1119777)}})。
- 非標準の [配列内包](/ja/docs/Web/JavaScript/Reference/Operators/Array_comprehensions) および [ジェネレーター内包](/ja/docs/Web/JavaScript/Reference/Operators/Generator_comprehensions) を削除しました ({{bug(1414340)}})。

### API

- {{domxref("XMLHttpRequest.responseType")}} プロパティの独自仕様の値である `moz-blob` および `moz-chunked-text` を、Firefox 58 で完全に削除しました ({{bug(1397145)}}, {{bug(1397151)}}, {{bug(1120171)}})。
- [Abort API の機能](/ja/docs/Web/API/Fetch_API#Aborting_a_fetch) を制御する設定項目である `dom.abortController.enabled` および `dom.abortController.fetch.enabled` を削除しました ({{bug(1402317)}})。デフォルトで有効化したためです。
- 独自仕様である `mozSrcObject` プロパティを Firefox 58 で削除しました ({{bug(1183495)}})。代わりに、標準の {{domxref("HTMLMediaElement.srcObject")}} プロパティを使用してください。

### SVG

_変更なし。_

## アドオン開発者と Mozilla 開発者向けの変更点

### WebExtensions

- [browserSettings](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings)

  - [browserSettings.webNotificationsDisabled](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/webNotificationsDisabled) を実装しました ({{bug(1364942)}})

- [browsingData](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browsingData)

  - [browsingData.localStorage](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/removeLocalStorage) で、ホストによる localStorage の削除をサポートしました ({{bug(1388428)}})

- セキュリティデバイスを管理するための [pkcs11](/ja/docs/Mozilla/Add-ons/WebExtensions/API/pkcs11) API をサポートしました ({{bug(1357391)}})
- プライバシー

  - firstPartyIsolate で、ファーストパーティー分離の切り替えが可能になりました ({{bug(1409045)}})
  - resistFingerprinting で、フィンガープリンティング対策の設定の切り替えが可能になりました ({{bug(1397611)}})

- タブ

  - [tabs.discard](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/discard) を実装しました ({{bug(1322485)}})
  - タブの isArticle、isInReaderMode プロパティを実装しました ({{bug(1381992)}})
  - [toggleReaderMode](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode)() メソッドを実装しました ({{bug(1381992)}})
  - tabs.created の openInReaderMode オプションを実装しました ({{bug(1408993)}})
  - tabs.onUpdated が、リーダービューを出入りするときに通知を発するようになりました ({{bug(1402921)}})

- テーマ

  - 現在のテーマの属性を取得するための [getCurrent](/ja/docs/Mozilla/Add-ons/WebExtensions/API/theme/getCurrent)() メソッドをサポートしました ({{bug(1349944)}})
  - WebExtension のテーマの更新を受け取る onUpdated メソッドをサポートしました ({{bug(1349944)}})
  - colors.toolbar_text の別名として colors.bookmark_text をサポートしました ({{bug(1412595)}})
  - colors.toolbar_top_separator、colors.toolbar_bottom_separator、colors.toolbar_vertical_separator を実装しました ({{bug(1347190)}})

- webRequest

  - [webRequest.onBeforeRequest](/ja/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest) が "frameAncestors" パラメーターを持つようになりました

## 関連情報

- [Firefox — Notes (58.0)](https://www.mozilla.org/firefox/58.0/releasenotes/)

<!---->

## 過去のバージョン

{{Firefox_for_developers(57)}}
