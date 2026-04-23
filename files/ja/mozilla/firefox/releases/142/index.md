---
title: Firefox 142 for developers
short-title: Firefox 142
slug: Mozilla/Firefox/Releases/142
l10n:
  sourceCommit: 4a54946791694e14bf3742f3f327bbea44c698c8
---

このページでは、開発者に影響する Firefox 142 の変更点をまとめています。
Firefox 142 は、米国時間 [2025 年 8 月 19 日](https://whattrainisitnow.com/release/?version=142) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

#### 廃止

- {{HTMLElement('object')}} 要素で、非推奨の `codebase` 属性のサポートを廃止しました。代わりに [`data`](/ja/docs/Web/HTML/Reference/Elements/object#data) 属性を使用してください (詳しくは [Firefox bug 1973900](https://bugzil.la/1973900) をご覧ください)。

### CSS

- {{cssxref("@scope")}} の内部の [`&` セレクター](/ja/docs/Web/CSS/Reference/Selectors/Nesting_selector) が、[スコープ開始セレクターの詳細度](/ja/docs/Web/CSS/Reference/At-rules/@scope#scope_の詳細度) を継承しないようになりました。
  これにより `@scope` の内部の `&` セレクターは [CSS 入れ子](/ja/docs/Web/CSS/Guides/Nesting) との一貫性が保たれて、予期せぬ詳細度の違いを避けられます ([CSS 入れ子と詳細度](/ja/docs/Web/CSS/Guides/Nesting/Nesting_and_specificity) をご覧ください) ([Firefox bug 1975531](https://bugzil.la/1975531))。

### JavaScript

変更なし。

### API

- [URL パターン API](/ja/docs/Web/API/URL_Pattern_API) を完全にサポートしました。標準化されたパターン構文を使用して、URL のマッチングや解析を行えます ([Firefox bug 1731418](https://bugzil.la/1731418))。
- Android 版 Firefox で、[ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API) の {{domxref("HTMLInputElement.webkitdirectory")}} (および、これに対応する HTML の [`webkitdirectory`](/ja/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) 属性) および {{domxref("File.webkitRelativePath")}} プロパティを完全にサポートしました。
  これにより、[`<input type="file">`](/ja/docs/Web/HTML/Reference/Elements/input/file) 要素がファイルではなくディレクトリーを受け入れるように設定できます ([Firefox bug 1973726](https://bugzil.la/1973726))。

#### DOM

- {{domxref("Selection.getComposedRanges()")}} メソッドをサポートしました。シャドウ DOM の境界を超えて、選択されたテキストの範囲を開発者が正確に取得できます。また、{{domxref("Selection")}} インターフェイスの {{domxref("Selection.setBaseAndExtent()","setBaseAndExtent()")}}、{{domxref("Selection.collapse()","collapse()")}}、{{domxref("Selection.extend()","extend()")}} メソッドを、シャドウルートの内部にあるノードを受け入れるように変更しました ([Firefox bug 1903870](https://bugzil.la/1903870))。
- {{domxref("Animation.overallProgress")}} プロパティをサポートしました。アニメーション全体の進捗を開発者が追跡および表示できます ([Firefox bug 1834878](https://bugzil.la/1834878))。
- {{domxref("Animation.commitStyles()")}} メソッドで、アニメーション終了後の計算済みスタイルをコミットするために、アニメーションに [`fill`](/ja/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) を設定する必要がなくなりました。ほかのブラウザーもこの変更をサポートするまで、`fill` を設定し続けるべきであることに注意してください ([Firefox bug 1973203](https://bugzil.la/1973203))。
- [Prioritized Task Scheduling API](/ja/docs/Web/API/Prioritized_Task_Scheduling_API) をサポートしました。アプリケーションのタスクの優先度を割り当ておよび管理するための標準化された方法を提供します。
  サポートしたインターフェイスは {{domxref("Scheduler")}}、{{domxref("TaskController")}}、{{domxref("TaskSignal")}}、{{domxref("TaskPriorityChangeEvent")}} (および {{domxref("TaskSignal/prioritychange_event","prioritychange")}} イベント) です。また、{{domxref("Window.scheduler")}} および {{domxref("WorkerGlobalScope.scheduler")}} プロパティをサポートしました。
  {{domxref("Scheduling")}} インターフェイスと {{domxref("Navigator.scheduling")}} プロパティは未サポートです ([Firefox bug 1966997](https://bugzil.la/1966997))。

#### Media、WebRTC、Web Audio

- {{domxref("RTCIceCandidatePairStats")}} ディクショナリーの {{domxref("RTCIceCandidatePairStats/currentRoundTripTime", "currentRoundTripTime")}}、{{domxref("RTCIceCandidatePairStats/totalRoundTripTime", "totalRoundTripTime")}}、{{domxref("RTCIceCandidatePairStats/responsesReceived", "responsesReceived")}} プロパティをサポートしました。これらは現在のラウンドトリップタイム (RTT) や、接続の平均 RTT を計算するために必要な情報を返します ([Firefox bug 1371391](https://bugzil.la/1371391))。
- {{domxref("RTCRtpSender")}} インターフェイスの {{domxref("RTCRtpSender.setParameters()","setParameters()")}} および {{domxref("RTCRtpSender.getParameters()","getParameters()")}} メソッドで、それぞれの `encoding` で使用する特定の [`コーデック`](/ja/docs/Web/API/RTCRtpSender/setParameters#codecs) の設定および取得をサポートしました。
  また、{{domxref("RTCPeerConnection")}} インターフェイスの {{domxref("RTCPeerConnection/addTransceiver","addTransceiver()")}} メソッドに渡す [`init.sendEncodings`](/ja/docs/Web/API/RTCPeerConnection/addTransceiver#sendencodings) 配列に、それぞれのエンコード用の `codec` を設定可能になりました ([Firefox bug 1894137](https://bugzil.la/1894137))。
- {{domxref("RTCInboundRtpStreamStats")}} インターフェイスの {{domxref("RTCInboundRtpStreamStats.estimatedPlayoutTimestamp", "estimatedPlayoutTimestamp")}}、{{domxref("RTCInboundRtpStreamStats.framesAssembledFromMultiplePackets", "framesAssembledFromMultiplePackets")}}、{{domxref("RTCInboundRtpStreamStats.freezeCount", "freezeCount")}}、{{domxref("RTCInboundRtpStreamStats.jitterBufferMinimumDelay", "jitterBufferMinimumDelay")}}、{{domxref("RTCInboundRtpStreamStats.jitterBufferTargetDelay", "jitterBufferTargetDelay")}}、{{domxref("RTCInboundRtpStreamStats.keyFramesDecoded", "keyFramesDecoded")}}、{{domxref("RTCInboundRtpStreamStats.pauseCount", "pauseCount")}}、{{domxref("RTCInboundRtpStreamStats.totalAssemblyTime", "totalAssemblyTime")}}、{{domxref("RTCInboundRtpStreamStats.totalFreezesDuration", "totalFreezesDuration")}}、{{domxref("RTCInboundRtpStreamStats.totalPausesDuration", "totalPausesDuration")}} プロパティをサポートしました ([Firefox bug 1926622](https://bugzil.la/1926622))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### 一般

- WebDriver の機能から FTP プロキシーのサポートを削除しました ([Firefox bug 1972670](https://bugzil.la/1972670))。
- WebDriver BiDi および WebDriver クラシック (Marionette) で設定したすべての Cookie の有効期限の値を、400 日に制限するように更新しました ([Firefox bug 1974394](https://bugzil.la/1974394))。

#### WebDriver BiDi

- クライアントが JavaScript API でロケールをオーバーライドするための新しいコマンドである `emulation.setLocaleOverride` を実装しました ([Firefox bug 1968952](https://bugzil.la/1968952))。
- `browsingContext.createUserContext` によるプロキシー設定を改良しました: `noProxy` プロパティで `.mozilla.org` のようなホストパターンをサポートしました ([Firefox bug 1977180](https://bugzil.la/1977180))。また、HTTP プロキシーを設定するときに HTTPS URL へのナビゲーションが許可されない不具合を修正しました ([Firefox bug 1977168](https://bugzil.la/1977168))。
- `browsingContext.close` コマンドでタブを閉じることにより `browsingContext.print` コマンドが中断された後に、`browsingContext.create` が失敗する場合がある不具合を修正しました ([Firefox bug 1841125](https://bugzil.la/1841125))。
- ネットワーク傍受によりブロックされたすべてのリクエストを再開するように、`session.end` コマンドを更新しました ([Firefox bug 1974426](https://bugzil.la/1974426))。

#### Marionette

- 対象の Cookie が `sameSite=none` および `secure=false` 属性を持っている場合にエラーを発生させるように、`WebDriver:AddCookie` コマンドを更新しました ([Firefox bug 1977205](https://bugzil.la/1977205))。
- `unexpected alert open` のエラーメッセージから、ダイアログのテキストの値を削除しました。`data` フィールドを通してダイアログのテキストを使用可能になったためです ([Firefox bug 1948236](https://bugzil.la/1948236))。

## アドオン開発者向けの変更点一覧

- {{WebExtAPIRef("cookies.set()")}} で作成した Cookie が Nightly 版で検証されるようになり、無効な Cookie は拒否されます。Nightly 版の実装は、何らかの問題に対して監視を可能にするためです。将来のリリースでは、すべてのチャンネルで検証を強制する予定です ([Firefox bug 1976197](https://bugzil.la/1976197))。
- 拡張機能の動作に影響を与えるユーザー指定の設定変更をリッスンする、{{WebExtAPIRef("browserAction.onUserSettingsChanged")}} および {{WebExtAPIRef("action.onUserSettingsChanged")}} イベントを追加しました ([Firefox bug 1828220](https://bugzil.la/1828220))。
- ブラウザーがタブバーを水平に表示するか、垂直に表示するかを拡張機能から制御可能にする {{WebExtAPIRef("browserSettings.verticalTabs")}} を追加しました ([Firefox bug 1946600](https://bugzil.la/1946600))。

## 実験的なウェブ機能

- **`anchor-size()`** (Nightly): `layout.css.anchor-positioning.enabled`

  CSS の {{CSSXRef("anchor-size")}} 関数は、アンカー配置要素の寸法、位置、アンカー要素の寸法に対するマージンを設定できます ([Firefox bug 1972610](https://bugzil.la/1972610))。

- **`:heading`** および **`:heading()`**: `layout.css.heading-selector.enabled`

  CSS の {{CSSXRef(":heading")}} 擬似クラスはすべての [見出し要素](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) へ、個々の要素を対象にするのではなく一度にスタイルを設定できます。{{CSSXRef(":heading_function", ":heading()")}} 関数擬似クラスは、[`<An+B>`](/ja/docs/Web/CSS/:heading_function#functional_notation) 表記にマッチする見出し要素にスタイルを設定できます ([Firefox bug 1974386](https://bugzil.la/1974386))。

- **`view-transition-name: match-element`** (Nightly): `dom.viewTransitions.enabled`

  CSS の {{CSSXRef("view-transition-name")}} プロパティの値 {{CSSXRef("view-transition-name", "match-element", "#match-element")}} は、それぞれの選択された要素に個別の名前をつける代わりに、一意な内部の `view-transition-name` を [自動的](/ja/docs/Web/CSS/Reference/Properties/view-transition-name#specifying_view-transition-name_values_automatically) に割り当てます ([Firefox bug 1956141](https://bugzil.la/1956141))。

- スクリプト向けの **`Integrity-Policy` および `Integrity-Policy-Report-Only`** (Nightly): `security.integrity_policy.enabled`

  {{httpheader("Integrity-Policy")}} および {{httpheader("Integrity-Policy-Report-Only")}} HTTP ヘッダーを、スクリプトリソース向けにサポートしました。これらはそれぞれ、ウェブサイトがスクリプトの [サブリソース完全性の保証](/ja/docs/Web/Security/Defenses/Subresource_Integrity) を強制する、またはポリシー違反の報告のみ行うことができます ([Firefox bug 1976656](https://bugzil.la/1976656))。

- スタイルシート向けの **`Integrity-Policy` および `Integrity-Policy-Report-Only`** : `security.integrity_policy.stylesheet.enabled`

  {{httpheader("Integrity-Policy")}} および {{httpheader("Integrity-Policy-Report-Only")}} HTTP ヘッダーを、スタイルシートリソース向けにサポートしました。これらはそれぞれ、ウェブサイトがサブリソース完全性の保証を強制する、またはポリシー違反の報告のみ行うことができます ([Firefox bug 1974247](https://bugzil.la/1974247))。

以下の機能は Firefox 142 で導入しましたが、デフォルトで無効です。
これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。
[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。
