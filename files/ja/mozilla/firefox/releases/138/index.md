---
title: Firefox 138 for developers
slug: Mozilla/Firefox/Releases/138
l10n:
  sourceCommit: f9f6cb5c92c5864691f0ba8f18d2035de6871c9b
---

このページでは、開発者に影響する Firefox 138 の変更点をまとめています。
Firefox 138 は、米国時間 [2025 年 4 月 29 日](https://whattrainisitnow.com/release/?version=138) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

- [`<script>`](/ja/docs/Web/HTML/Reference/Elements/script) 要素の [`type`](/ja/docs/Web/HTML/Reference/Elements/script/type) 属性の値 [`importmap`](/ja/docs/Web/HTML/Reference/Elements/script/type/importmap) で、[`integrity`](/ja/docs/Web/HTML/Reference/Elements/script/type/importmap#integrity) キーをサポートしました。これにより、インポートマップで参照される ES モジュールの URL と整合性メタデータを照合できます。結果として、モジュールはサブリソース完全性 ([SRI](/ja/docs/Web/Security/Practical_implementation_guides/SRI)) を必要とする [CSP](/ja/docs/Web/HTTP/Guides/CSP) ディレクティブと互換性があることになります ([Firefox bug 1945540](https://bugzil.la/1945540))。

### CSS

変更なし。

### JavaScript

- {{jsxref("Error.captureStackTrace()")}} 静的メソッドをサポートしました。これは、与えられたオブジェクトにスタックトレース情報を {{jsxref("Error.stack")}} プロパティとして設定します。主な用途は、{{jsxref("Error")}} インターフェイスから派生していない独自のエラーオブジェクトにスタックトレースを設定することです ([Firefox bug 1950508](https://bugzil.la/1950508))。
- {{jsxref("Error.isError()")}} 静的メソッドを、オブジェクトが {{jsxref("Error")}} または {{domxref("DOMException")}} のインスタンスであるか否かの確認に使用できるようになりました。これは、同じ目的で `instanceof` を使用するより信頼できます ([Firefox bug 1952249](https://bugzil.la/1952249))。
- [`import`](/ja/docs/Web/JavaScript/Reference/Statements/import) 宣言で、[`with`](/ja/docs/Web/JavaScript/Reference/Statements/import/with) 属性を使用した JSON モジュールのインポートをサポートしました。

### HTTP

- [`Clear-Site-Data`](/ja/docs/Web/HTTP/Reference/Headers/Clear-Site-Data) ヘッダーを [`cache`](/ja/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) (および `*`) ディレクティブと合わせて使用することで、ブラウザーのネットワークキャッシュを消去できます。これはウェブサイトがユーザー側に保存されたデータをより細かく制御できることを可能にして、たとえばログアウトするときにキャッシュを消去することでプライバシー情報の漏えいのリスクを軽減できます ([Firefox bug 1942272](https://bugzil.la/1930500))。
- サイトが HTTP の {{httpheader("Origin-Agent-Cluster")}} レスポンスヘッダーを使用して、関連づけられた文書をオリジンキーつき [エージェントクラスター](/ja/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) に配置するべきであることを助言できるようになりました。
  そのようなクラスターではオペレーティングシステムのプロセスまたは文書が使用するほかの OS リソース、あるいはその両方が、同じ [オリジン](/ja/docs/Glossary/Origin) の文書に限って共有されます。
  これにより、多くのリソースを必要とする文書がほかのオリジンの文書のパフォーマンスを低下させる可能性が低くなります。
  開発者は {{domxref("window.originAgentCluster")}} プロパティを使用して、ブラウザーが文書をオリジンキーつきエージェントクラスターに配置したかを確認できます ([Firefox bug 1665474](https://bugzil.la/1665474))。

### API

- [Federated Credential Management (FedCM) API](/ja/docs/Web/API/FedCM_API) を使用している状況で [Login Status API](/ja/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) をサポートしました。この API は、ブラウザーのユーザーがアイデンティティプロバイダーにログインしているかを設定および確認するために使用できます。
  これには {{domxref("NavigatorLogin")}} インターフェイス、{{domxref("navigator.login")}} プロパティ、{{httpheader("Set-Login")}} HTTP レスポンスヘッダーのサポートも含みます ([Firefox bug 1945576](https://bugzil.la/1945576)、[Firefox bug 1945573](https://bugzil.la/1945573))。
- [Web Audio API](/ja/docs/Web/API/Web_Audio_API) の {{domxref("AudioWorklet.port")}} および {{domxref("AudioWorkletGlobalScope.port")}} で双方向メッセージングをサポートしました。
  これにより制御データやグローバル設定の受信のような、メインスレッドのコードとオーディオワークレットのグローバルスコープの間で独自の非同期通信が可能になります ([Firefox bug 1951240](https://bugzil.la/1951240))。
- {{domxref("RTCCertificate")}} インターフェイスの {{domxref("RTCCertificate.getFingerprints()","getFingerprints()")}} メソッドをサポートしました。
  アプリケーションはこのメソッドを使用して証明書のフィンガープリントを取得でき、WebRTC セッションをまたがって特定のユーザーやブラウザーを識別するためにアウトオブバンドで共有されることがあります ([Firefox bug 1525241](https://bugzil.la/1525241))。

#### DOM

#### Media、WebRTC、Web Audio

- ネットワークの品質低下によりフレームレートや解像度のどちらも設定されたレベルを維持できないときに、どちらを優先するかを WebRTC アプリケーションが設定できるようになりました。
  この値は `RTCRtpSender` インターフェイスの [`setParameters()`](/ja/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) メソッドに渡す引数オブジェクトの [`degradationPreference`](/ja/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) プロパティで設定します。
  また、[`getParameters()`](/ja/docs/Web/API/RTCRtpSender/getParameters#degradationpreference) メソッドが返すオブジェクトでこの値を読み取ることもできます ([Firefox bug 1329847](https://bugzil.la/1329847))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### 一般

- ログを適切に標準出力へパイプ接続するために必要な設定が、すべてのリモートプロトコルで有効になりました ([Firefox bug 1947740](https://bugzil.la/1947740))。
- 親プロセスのブラウジングコンテキスト (ブラウザーの UI など) との対話やコンテンツプロセスの特権 API の使用といった注意が必要な機能を有効化する、Firefox の新たな引数 `--remote-enable-system-access` を追加しました。これは次のリリースで WebDriver BiDi で使用する計画で、Marionette ではすでに使用可能です (後述の Marionette の章をご覧ください) ([Firefox bug 1944565](https://bugzil.la/1944565))。

#### WebDriver BiDi

- `webExtension.install` コマンドがデフォルトでウェブ拡張機能を一時的にインストールするようになりました。未署名の拡張機能を XPI ファイルまたは展開状態のフォルダーで使用可能になります。通常の拡張機能として強制的にインストールするために、Firefox 固有の新たな引数 `moz:permanent` を追加しました ([Firefox bug 1947678](https://bugzil.la/1947678))。
- `browsingContext.setViewport` コマンドで引数 `userContexts` をサポートしました。これはユーザーコンテキスト (Firefox コンテナー) の ID の配列にしなければなりません。この引数を与えると、指定したユーザーコンテキストに所属するすべてのブラウジングコンテキストおよび将来作成するブラウジングコンテキストに、ビューポートの設定を適用します。この引数は、既存の引数 `context` と併用できません ([Firefox bug 1940952](https://bugzil.la/1940952))。
- `browsingContext.Info` 型に、ブラウジングコンテキストを所有するウィンドウの ID に対応するプロパティ `clientWindow` が含まれるようになりました。これは通常、`browsingContext.getTree` によって返されるか、`browsingContext.contextCreated` などのイベントのペイロードに含まれています ([Firefox bug 1920952](https://bugzil.la/1920952))。

#### Marionette

- Marionette で `chrome` (親プロセス) コンテキストへ切り替えるには、Firefox を起動するときに `--remote-enable-system-access` コマンドライン引数が必要になりました ([Firefox bug 1710425](https://bugzil.la/1710425))。

## アドオン開発者向けの変更点一覧

- Manifest V3 拡張機能で、`page_action` を {{WebExtAPIRef("menus")}} API の {{WebExtAPIRef("menus.ContextType")}} としてサポートしました。これにより Manifest V3 拡張機能も Manifest V2 と同じように、`page_action` へメニュー項目を追加できます ([Firefox bug 1951166](https://bugzil.la/1951166))。
- {{WebExtAPIRef("contextualIdentities")}} API が Android 版 Firefox で定義されなくなりました。以前は、定義されましたが不完全でした ([Firefox bug 1659500](https://bugzil.la/1659500))。
- Android 版 Firefox で `contextualIdentities` 権限が認識されなくなりました。以前は "containers" 機能の不具合があるバージョンが有効でした ([Firefox bug 1659500](https://bugzil.la/1659500))。
- Manifest V3 版の新たな {{WebExtAPIRef("userScripts")}} API が Android 版 Firefox で使用可能になりました ([Firefox bug 1949955](https://bugzil.la/1949955))。
- {{WebExtAPIRef("webRequest.handlerBehaviorChanged")}} API を実装しました。以前のバージョンでは、このメソッドを公開していましたが何も行いませんでした ([Firefox bug 1657575](https://bugzil.la/1657575))。
- {{WebExtAPIRef("alarms.create")}} API が、undefined ではなく Promise を返すようになりました ([Firefox bug 1869171](https://bugzil.la/1869171))。
- タブグループ内のタブの操作をサポートしました。以下の機能を追加しました:
  - {{WebExtAPIRef("tabs.group()")}} および {{WebExtAPIRef("tabs.ungroup()")}} ([Firefox bug 1959714](https://bugzil.la/1959714))
  - {{WebExtAPIRef("tabs.Tab")}} の `groupId` ([Firefox bug 1959713](https://bugzil.la/1959713))
  - {{WebExtAPIRef("tabs.query")}} の `groupId` ([Firefox bug 1959715](https://bugzil.la/1959715))
  - {{WebExtAPIRef("tabs.onUpdated")}} の `groupId` ([Firefox bug 1959716](https://bugzil.la/1959716)
- Firefox で、{{WebExtAPIRef("webRequest.ResourceType")}} および {{WebExtAPIRef("declarativeNetRequest.ResourceType")}} で `json` リソースタイプをサポートしました。合わせて、インポート属性をデフォルトで有効化しました。以前は `script` と報告されていました ([Firefox bug 1858078](https://bugzil.la/1858078)、[Firefox bug 1950836](https://bugzil.la/1950836))。

## 実験的なウェブ機能

以下の機能は Firefox 138 で新たに導入しましたが、実験的なものです。
これらはデフォルトで無効であるか、Nightly ビルドに限ってデフォルトで有効です。
デフォルトで無効な機能は、`about:config` ページで対応する設定項目を検索して `true` に設定してください。
[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **区分コンテンツ内の `<h1>` のユーザーエージェントスタイル:** `layout.css.h1-in-section-ua-styles.enabled`

  [区分要素](/ja/docs/Web/HTML/Guides/Content_categories#区分コンテンツ) `<article>`、`<aside>`、`<nav>`、`<section>` の内部にある `<h1>` 見出しのフォントサイズは小さくなりません。HTML 仕様書からアウトラインのアルゴリズムが [削除された](https://github.com/whatwg/html/pull/7829) ため、区分要素の内部にある `<h1>` のユーザーエージェントスタイルは適切でなくなりました ([Firefox bug 1883896](https://bugzil.la/1883896))。

  この削除の段階的な展開の一環として、Firefox 138 のユーザーの 5% と Firefox 138 ベータ版のユーザーの 50% で `layout.css.h1-in-section-ua-styles.enabled` の値を `false` に設定します ([Intent to unship: UA styles for h1 in article, aside, nav, section](https://groups.google.com/a/mozilla.org/g/dev-platform/c/CzG_pVa7pws/m/Ab3Bwsg2BQAJ)).

  > [!NOTE]
  > この機能の設定は逆に機能します。Nightly ビルドでは `false` に設定しており、区分要素の内部にある見出しのユーザーエージェントスタイルを削除します。その他すべてのチャンネルでは `true` に設定しており、入れ子になった見出し用の既存のユーザーエージェントスタイルを維持します。

- **::details-content CSS 擬似要素:** `layout.css.details-content.enabled`

  CSS の {{cssxref("::details-content")}} 擬似要素は、{{htmlElement("details")}} 要素の内容物のスタイル設定を可能にします ([Firefox bug 1901037](https://bugzil.la/1901037))。

- **要素に裏づけられた擬似要素の後ろの擬似要素を許可する**

  {{cssxref("::details-content")}} や {{cssxref("::file-selector-button")}} などの [要素に裏づけられた擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) に、{{cssxref("::first-letter")}} や {{cssxref("::before")}} などの [擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements) を追加可能にする作業を始めました ([Firefox bug 1953557](https://bugzil.la/1953557))。

  > [!NOTE]
  > この機能の設定項目は、対象の要素に裏づけられた擬似要素に依存します。例: [`::details-content`](/ja/docs/Mozilla/Firefox/Experimental_features#details-content_pseudo-element)。

- **削除予定の `MutationEvent`**: `dom.mutation_events.enabled`

  {{domxref("MutationEvent")}} およびそれに関連するイベント (`DOMSubtreeModified`、`DOMNodeInserted`、`DOMNodeRemoved`、`DOMCharacterDataModified`、`DOMAttrModified`) が、Firefox Nightly ではデフォルトで無効になりました ([Firefox bug 1951772](https://bugzil.la/1951772))。

- **`Notification.actions`** (Nightly): `dom.webnotifications.actions.enabled`

  {{domxref("Notification.actions")}} プロパティは、{{domxref("ServiceWorkerRegistration.showNotification()")}} を使用して設定した `Notification` に関連づけられたアクションを取得できます ([Firefox bug 1225110](https://bugzil.la/1225110))。

- **`PerformanceEventTiming.interactionId`**: `dom.performance.event_timing.enable_interactionid`

  {{domxref("PerformanceEventTiming.interactionId")}} を使用して、特定のユーザー操作で発生したイベントのレイテンシーを測定できます ([Firefox bug 1934683](https://bugzil.la/1934683))。

- **HTML Sanitizer API**: `dom.security.sanitizer.enabled`

  [HTML Sanitizer API](/ja/docs/Web/API/HTML_Sanitizer_API) は開発者が HTML の信頼できない文字列を取得して、文書の DOM へ安全に挿入するためにサニタイズすることを可能にします ([Firefox bug 1950605](https://bugzil.la/1950605)), ([Firefox bug 1952250](https://bugzil.la/1952250))。

## 過去のバージョン

{{Firefox_for_developers}}
