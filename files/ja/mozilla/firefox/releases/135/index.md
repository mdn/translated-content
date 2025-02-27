---
title: Firefox 135 for developers
slug: Mozilla/Firefox/Releases/135
l10n:
  sourceCommit: c5849bd1313be60afdf4126aacd587c52bace335
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 135 の変更点をまとめています。Firefox 135 は、米国時間 [2025 年 2 月 4 日](https://whattrainisitnow.com/release/?version=135) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### CSS

#### 廃止

- [`-moz-user-input`](/ja/docs/Web/CSS/-moz-user-input) CSS プロパティで、入力フィールドを無効化できました。このプロパティが非推奨になり、削除されました ([Firefox bug 1935198](https://bugzil.la/1935198))。

### JavaScript

- [JSON parse with source proposal](https://github.com/tc39/proposal-json-parse-with-source) をサポートしました。これは、大きな浮動小数点数や日付の値を JavaScript の値と JSON 文字列の間で変換するときの精度低下に関する問題を軽減する機能を提供することを目指しています ([Firefox bug 1934622](https://bugzil.la/1934622))。特に、以下の機能を使用可能です:
  - `JSON.parse()` の [引数 `reviver` 内の引数 `context`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#reviver_引数): パースした元の JSON ソース文字列へアクセスできます。
  - [`JSON.isRawJSON()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): 値が `JSON.rawJSON()` から返されたオブジェクトであるかを確認します。
  - [`JSON.rawJSON()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): JSON 文字列の一部を含む "raw JSON" オブジェクトを生成します。これをオブジェクトに含めることで、オブジェクトが文字列化されるときに指定した値を維持できます。

### セキュリティ

- [証明書の透明性](/ja/docs/Web/Security/Certificate_Transparency) は、ブラウザーが証明書を信頼する前に、その証明書が公開されていることを保証するための標準仕様です。デスクトップ版の Firefox でこの機能をサポートしました (Android 版は未サポート)。
  これは、Mozilla の ルート CA プログラムに含まれている認証局が発行した証明書を使用するサーバーにのみ影響があります ([Firefox bug 1938242](https://bugzil.la/1938242))。

### API

- {{domxref("PublicKeyCredential.getClientCapabilities_static", "PublicKeyCredential.getClientCapabilities()")}} 静的メソッドをサポートしました。これはウェブアプリがユーザーエージェント・スニッフィングに頼る必要なく、ブラウザーで特定の [WebAuthn](/ja/docs/Web/API/Web_Authentication_API) の機能や [拡張機能](/ja/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) が有効かを確認できます ([Firefox bug 1884466](https://bugzil.la/1884466))。

#### DOM

#### Media、WebRTC、Web Audio

- {{domxref("RTCOutboundRtpStreamStats")}} インターフェイスの {{domxref("RTCOutboundRtpStreamStats.mid", "mid")}} および {{domxref("RTCOutboundRtpStreamStats.rid", "rid")}} プロパティと、{{domxref("RTCInboundRtpStreamStats")}} インターフェイスの {{domxref("RTCOutboundRtpStreamStats.mid", "mid")}} プロパティをサポートしました ([Firefox bug 1643001](https://bugzil.la/1643001))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### 一般

- ブラウザーでユーザーイベントをより現実的にするため、および現実のユーザーインタラクションのシミュレーションを改善するために、Marionette と WebDriver BiDi の両方で `Perform Actions` コマンドのアクションシーケンスの処理をコンテンツプロセスから親プロセスへ移しました。イベントは今後もコンテンツプロセスから同期的に送信されますが、親プロセスから発生する IPC 呼び出しを通して非同期的に発生するようになります ([Firefox bug 1922077](https://bugzilla.mozilla.org/show_bug.cgi?id=1922077))。

  この大きな変更のため、いくつかのリグレッションが存在する可能性があります。何らかの問題が発生した場合は、[Remote Agent のバグ報告をお願いします](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Remote%20Agent)。リグレッションがテストの実行を妨げる場合は、Firefox の設定項目 `remote.events.async.enabled` を `false` に設定することで、一時的に以前の動作に戻すことができます。

- アクションの処理を親プロセスで制御するようにしたことに伴って、以下の不具合も修正しました:

  - 競合状態を起こさない、アクションシーケンスの適切なキューイングをサポートしました。これは特に WebDriver BiDi の `input.performActions` コマンドで重要です。このコマンドは並列に複数回呼び出すことができ、キューにあるアクションは順番に実行しなければなりません ([Firefox bug 1915798](https://bugzilla.mozilla.org/show_bug.cgi?id=1915798))。

  - アクションを発行するときに `input cancel list` が、アクションの発行が成功した後に限って正しく更新されるようになりました。以前はアクションの実行が失敗した場合に逆のアクションがその場に残ることがあり、`input source` の状態をリセットするときに予期せぬ副作用を引き起こしていました ([Firefox bug 1930845](https://bugzilla.mozilla.org/show_bug.cgi?id=1930845))。

  - アクションの実行中、特にひとつのアクションが現在のブラウジングコンテキストを置き換えるナビゲーションを発生させる状況で、実行中の個々のアクションを再試行するようになりました ([Firefox bug 1930530](https://bugzilla.mozilla.org/show_bug.cgi?id=1930530)、[Firefox bug 1930090](https://bugzilla.mozilla.org/show_bug.cgi?id=1930090))。

  - アクションの実行中にアクションチェーンの中の (最後でない) アクションがウィンドウを閉じて、残りのアクションが発行中である場合に `TypeError: can't access property "getActor", browsingContext.currentWindowGlobal is null` エラーが発生する不具合を修正しました ([Firefox bug 1932916](https://bugzilla.mozilla.org/show_bug.cgi?id=1932916))。

- コマンドから戻るまでに内部で `requestAnimationFrame` が発行されることに依存する一部の Marionette および WebDriver BiDi のコマンドが、実行中に現在のブラウジングコンテキストでナビゲーションが発生するとハングアップする不具合を修正しました ([Firefox bug 1937118](https://bugzilla.mozilla.org/show_bug.cgi?id=1937118))。

#### WebDriver BiDi

- `browsingContext.captureScreenshot` コマンドの `format` フィールドをサポートしました。これはクライアントがさまざまなファイル形式 (現在は `image/png` および `image/jpg` をサポートします) を指定して、スクリーンショットの圧縮率を定義できるようにします ([Firefox bug 1861737](https://bugzilla.mozilla.org/show_bug.cgi?id=1861737))。

## アドオン開発者向けの変更点一覧

- {{WebExtAPIRef("commands.update")}} が、コマンドのキーボードショートカットに `F13` キーから `F19` キーを割り当てられるようになりました。ただし、拡張機能が [`commands` manifest.json キー](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) からこれらのキーを割り当てることはできません。ユーザーは [拡張機能のショートカットキーの管理](https://support.mozilla.org/ja/kb/manage-extension-shortcuts-firefox) を使用してこれらのキーに機能を割り当てることもできます ([Firefox bug 1924542](https://bugzil.la/1924542))。

## 実験的なウェブ機能

以下の機能は Firefox 135 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **Temporal API** (Nightly 版): <code>javascript.options.experimental.temporal</code>。[Temporal オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal) は組み込みのタイムゾーンやカレンダーの表現によって、さまざまな状況における日付や時刻の扱いを簡素化することを目指しています ([Firefox bug 1912511](https://bugzil.la/1912511))。
- **Prioritized Task Scheduling API**: <code>dom.enable_web_task_scheduling</code>。
  [Prioritized Task Scheduling API](/ja/docs/Web/API/Prioritized_Task_Scheduling_API) は、Webサイトの開発者のコードであるかサードパーティのライブラリーやフレームワークであるかに関わらず、アプリケーションに所属するすべてのタスクに優先度をつけるための標準化された方法を提供します。
  これは [実運用での不具合](https://bugzil.la/1937232) を避けるため、Nightly ビルドで一時的に無効化しています ([Firefox bug 1938242](https://bugzil.la/1938242))。

## 過去のバージョン

{{Firefox_for_developers}}
