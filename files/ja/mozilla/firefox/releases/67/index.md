---
title: Firefox 67 for developers
slug: Mozilla/Firefox/Releases/67
---

{{FirefoxSidebar}}

Firefox 67 は、米国時間 2019 年 5 月 21 日 にリリースされました。このページでは、開発者に影響する Firefox 67 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- デバッガーの更新:

  - [カラムブレークポイント](/ja/docs/Tools/Debugger/How_to/Set_a_breakpoint) で、デバッガーに一時停止させたい行の特定の箇所 (またはカラム) を選択できます ({{bug(1528417)}})。
  - [ログポイント](/ja/docs/Tools/Debugger/Set_a_log_point) で、コードの実行を一時停止したりコードを変更することなく、実行中に特定の情報をコンソールに記録できます。
  - [マップスコープ機能](/ja/docs/Tools/Debugger/Using_the_Debugger_map_scopes_feature) で、元のソースの編集を表示できます。
  - デバッガーで、[worker](/ja/docs/Tools/Debugger/Debug_worker_threads) のスレッドを直接デバッグできます。

- [ウェブコンソール](/ja/docs/Tools/Web_Console) の更新:

  - キーボードを使用して、コンソールの詳細情報を移動できます ({{bug(1424159)}})。
  - macOS では Cmd + K で、コンソールの内容を消去するようになりました ({{bug(1532939)}})。
  - ユーザーがコンソールの出力を消去するとき、エラーメッセージのキャッシュも消去するようになりました ({{bug(717611)}})。
  - import を使用して、既存のモジュールを現在のページにインポートできるようになりました ({{bug(1517546)}})。
  - ユーザーが **リンクの場所をコピー** できるコマンドを、コンテキストメニューに追加しました ({{bug(1457111)}})。
  - コンソール内のリンクをクリックしたときの動作が、content ウィンドウの場合と同じになりました ({{bug(1466040)}})。
  - コンソールでコードファイルへのリンクをクリックすると、デバッガーが把握しているファイルであればデバッガーに移動するようになりました ({{bug(1447244)}})。
  - ユーザーがコンソールの内容をフィルタリングしたとき、フィルターをクリアするアイコンをテキストボックスに表示するようになりました ({{bug(1525821)}})。

- [ネットワークモニター](/ja/docs/Tools/Network_Monitor) の改良:

  - ネットワークモニターの [ヘッダー](/ja/docs/Tools/Network_Monitor/request_details#Headers) パネルで、既知のトラッカーに関するリソースの通知を表示するようになりました ({{bug(1485416)}})。
  - ネットワークモニターの [要求の列](/ja/docs/Tools/Network_Monitor/request_list#Network_request_columns) で、表示する列や列の並べ替えを制御できます。このコンテキストメニューに、リストの並べ替えをリセットするコマンドを追加しました ({{bug(1454962)}})。
  - ネットワークモニターで、作業しやすいように [列の幅を変更する](/ja/docs/Tools/Network_Monitor/request_list#Network_request_columns) ことが可能になりました ({{bug(1358414)}})。

#### 廃止

- 以下の開発ツールのパネルを削除しました (詳しくは [Deprecated tools](/ja/docs/Tools/Deprecated_tools) をご覧ください):

  - Canvas デバッガー ({{bug(1403938)}})
  - シェーダーエディター ({{bug(1342237)}})
  - WebAudio エディター({{bug(1403944)}})

- 以下の開発ツールのパネルを非推奨にしました (詳しくは [Deprecated tools](/ja/docs/Tools/Deprecated_tools) をご覧ください):

  - WebIDE ({{bug(1539462)}})
  - Connect... ページ ({{bug(1539462)}})

### HTML

- `autocomplete="new-password"` を設定した {{htmlelement("input")}} 要素は、過去に保存したパスワードのオートコンプリートを行わないようになりました ({{bug(1119063)}})。

### CSS

- {{cssxref("revert")}} キーワードを実装しました ({{bug(1215878)}})。
- {{cssxref("word-break")}} プロパティの値 `break-word` をサポートしました ({{bug(1296042)}})。
- [`prefers-color-scheme`](/ja/docs/Web/CSS/@media/prefers-color-scheme) メディア特性をサポートしました ({{bug(1494034)}})。
- 巨大なカーソルを使用するマルウェアの可能性を軽減するため、サイズが 32px より大きい独自 {{cssxref("cursor")}} は許可しません ({{bug(1445844)}})。

#### 廃止

- 独自仕様である {{cssxref("-moz-binding")}} プロパティを、chrome およびユーザーエージェントのスタイルシートしか使用できないように制限しました ({{bug(1523712)}})。

### SVG

_変更なし。_

### JavaScript

- {{jsxref("String.prototype.matchAll")}} を実装して、デフォルトで有効にしました ({{bug(1435829)}}、{{bug(1531830)}})。
- 動的なモジュールの {{jsxref("Statements/import", "import()", "#Dynamic_Imports")}} の提案のサポートを、デフォルトで有効にしました ({{bug(1517546)}})。
- [シバン構文](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#Hashbang_comments) の提案を実装しました ({{bug(1519097)}})。

### API

#### DOM

- {{domxref("Response.statusText")}} の既定値が `""` になりました ({{bug(1508996)}})。
- {{domxref("Document.requestStorageAccess")}} で、拒否される呼び出しに対するユーザーの行動も、許可される場合と同様に保存するようになりました ({{bug(1522912)}})。

#### DOM イベント

- CSS トランジション ({{bug(1530239)}}) およびアニメーション ({{bug(1531605)}}) のイベントが、無効な要素 (例えば form) でも発生するようになりました。
- {{domxref("InputEvent.data")}} および {{domxref("InputEvent.dataTransfer")}} を実装しました ({{bug("998941")}})。
- {{domxref("InputEvent.inputType")}} の値 `insertFromPasteAsQuotation` をサポートしました ({{bug(1532527)}})。

#### Workers/Service workers

- {{domxref("WorkerGlobalScope.importScripts()")}} でインポートしたスクリプトで、厳密な MIME type の確認を強制するようになりました ({{bug(1514680)}})。

#### メディア、Web Audio、WebRTC

- The [AV1 動画コーデック](/ja/docs/Web/Media/Formats/Video_codecs#AV1) を Linux でサポートしました。
- [dav1d](https://code.videolan.org/videolan/dav1d) が [AV1](https://aomediacodec.github.io/av1-spec/av1-spec.pdf) の既定のメディアデコーダーになりました ({{bug(1533742)}} および {{bug(1535038)}} をご覧ください)。
- 新しいトラックを追加するためストリームを指定せずに {{domxref("RTCPeerConnection.addTrack()")}} を呼び出したとき、予期するとおりに動作するようになりました。ストリームがないトラックをコネクションに追加します。それぞれのピアは、トラックとストリームの関係を管理する責任を持ちます ({{bug(1231414)}})。
- {{domxref("MediaDeviceInfo.groupId")}} プロパティを実装しました ({{bug(1213453)}})。これは Firefox 39 から存在していましたが、実際は関連するデバイスを同じグループ ID に集めていませんでした。
- {{domxref("RTCIceCandidate.usernameFragment")}} プロパティを実装しました ({{bug(1490658)}})。
- {{domxref("VTTCue")}} オブジェクトの {{domxref("VTTCue.positionAlign", "positionAlign")}} プロパティで `center` ではなく `auto` を既定値として使用するように、[WebVTT](/ja/docs/Web/API/WebVTT_API) を修正しました。キューボックスの配置が、内部のテキストの配置に合うようになります ({{bug(1528420)}})。

#### Canvas と WebGL

- [`EXT_float_blend`](/ja/docs/Web/API/EXT_float_blend) WebGL 拡張をデフォルトで有効にしました ({{bug(1535808)}})。

#### 廃止

- 非推奨の `ShadowRoot.getElementsByTagName`、`ShadowRoot.getElementsByTagNameNS`、`ShadowRoot.getElementsByClassName` プロパティ (Shadow DOM v0 の一部) を削除しました ({{bug(1535438)}})。
- モバイル端末を検出するためにタッチ機能のサポート状況を使用するウェブサイトとの互換性を向上するため、デスクトップ版で [`document.createEvent("TouchEvent")`](/ja/docs/Web/API/Document/createEvent)、{{domxref("document.createTouch()")}}、{{domxref("document.createTouchList()")}}、および `ontouch*` イベントハンドラープロパティを無効にしました ({{bug(1412485)}})。このような場合は、タッチスクリーンを持つラップトップ PC でウェブサイトが誤った、または予期せぬ動作をしていました。

### セキュリティ

- [Notifications](/ja/docs/Web/API/Notifications_API) が [安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts) に限り使用可能になりました ({{bug(1429432)}})。
- {{htmlelement("iframe")}} で、外部プロトコル URL の読み込みをブロックするようになりました ({{bug(1527882)}})。

### WebDriver conformance (Marionette)

#### API の変更点

- `WebDriver:SendAlertText` が [WebDriver 仕様書](https://w3c.github.io/webdriver/) に適合しました ({{bug(1502360)}})。

#### バグ修正

- プラットフォーム間の `focus` 関係の不一致を理由として、`WebDriver:NewWindow` がタイムアウトしないようになりました ({{bug(1523234)}})。

#### その他

- `WebDriver:ExecuteScript` および `WebDriver:ExecuteAsyncScript` が内部で `Promises` を使用するようになりました ({{bug(1398095)}})。
- `WebDriver:NewSession` が、機能オブジェクトの一部として Firefox の `BuildID` 文字列を返すようになりました ({{bug(1525829)}})。

## アドオン開発者向けの変更点

### API の変更点

- `{{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}` の値を変更するために `proxy.settings.set()` メソッドを使用すると、拡張機能がユーザーからプライベートウィンドウへのアクセスを許可されている場合を除いて、例外が発生するようになりました ({{bug(1525447)}})。

### マニフェストの変更点

- プライベートブラウジングのウィンドウやタブにおける拡張機能の動作を定義する、[incognito](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito) マニフェストキーを追加しました ({{bug(1511636)}})。
- `toolbar_field_highlight` で、URL バーで現在選択されている文字列を示すために使用する背景色を設定できます ({{bug(1450114)}})。
- `toolbar_field_highlight_text` で、URL バーで現在選択されている文字列を示すために使用する文字色を設定できます ({{bug(1450114)}})。

## 関連情報

- [Firefox 67.0 Release Notes](https://www.mozilla.org/en-US/firefox/67.0/releasenotes/)

## 過去のバージョン

{{Firefox_for_developers(66)}}
