---
title: Firefox 84 for developers
slug: Mozilla/Firefox/Releases/84
l10n:
  sourceCommit: 78ef1310a76394c4e0bdce456982abc3856790c0
---

このページでは、開発者に影響する Firefox 84 の変更点をまとめています。Firefox 84 は、2020 年 12 月 15 日にリリースされました。

> [!NOTE]
> Mozilla Hacks の [And now for … Firefox 84](https://hacks.mozilla.org/2020/12/and-now-for-firefox-84/) もご覧ください。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- Firefox の [アクセシビリティインスペクター](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) で、ウェブページの [タブオーダー](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order) の表示をサポートしました。ページがキー操作でどのようなナビゲーションになるかを、リンクをタブ移動するよりも高レベルな概要で示します ([Firefox バグ 1654956](https://bugzil.la/1654956))。

### HTML

_変更なし。_

### CSS

- {{cssxref(":not")}} 擬似クラスで、複雑なセレクターをサポートしました ([Firefox バグ 933562](https://bugzil.la/933562))。

#### 廃止

- 独自仕様である `-moz-default-appearance` プロパティの値 `scrollbar-small` (代わりに `scrollbar-width: thin` を使用します) および `scrollbar` (macOS 限定。代わりに `scrollbar-horizontal` や `scrollbar-vertical` を使用します) を削除しました ([Firefox バグ 1673132](https://bugzil.la/1673132))。

### JavaScript

- [`Intl.DateTimeFormat()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) の引数として指定する独自の日時書式に、`fractionalSecondDigits` (秒の端数として表示する桁数) を含めることが可能になりました ([Firefox バグ 1645107](https://bugzil.la/1645107))。

### HTTP

_変更なし。_

### セキュリティ

- Firefox で `http://localhost/` や `http://dev.localhost/` のような `localhost` URL が、ローカルホストのループバックインターフェイス (例えば `http://127.0.0.1`) を参照するものとして保証されるようになりました。この結果、`localhost` から読み込まれるリソースが安全に提供された ([保護されたコンテキスト](/ja/docs/Web/Security/Defenses/Secure_Contexts) を参照) とみなされ、[混在コンテンツ](/ja/docs/Web/Security/Defenses/Mixed_content) として扱われなくなります ([Firefox バグ 1220810](https://bugzil.la/1220810), [Firefox バグ 1488740](https://bugzil.la/1488740))。

### API

- Paint Timing API の {{domxref('PerformancePaintTiming')}} インターフェイスをサポートしました ([Firefox バグ 1518999](https://bugzil.la/1518999))。
- {{domxref('Navigator.registerProtocolHandler()')}} メソッドが、`scheme` と `url` の 2 つの引数のみ受け入れるようになりました。`title` は削除されました ([Firefox バグ 1631464](https://bugzil.la/1631464))。

#### Media、WebRTC、Web Audio

- {{domxref('MediaRecorder.start()')}} メソッドで、記録されているストリームのいくつかのトラックが変更されたときに `InvalidModificationError` が発生するようになりました ([Firefox バグ 1581139](https://bugzil.la/1581139))。

#### 廃止

- アプリケーションキャッシュを削除しました。開発者は、代わりに[サービスワーカー API](/ja/docs/Web/API/Service_Worker_API) を使用してください ([Firefox バグ 1619673](https://bugzil.la/1619673))。

### WebAssembly

_変更なし。_

### WebDriver conformance (Marionette)

- `WebDriver:PerformActions` および `WebDriver:ReleaseActions` に、chrome スコープのサポートを追加しました ([Firefox バグ 1365886](https://bugzil.la/1365886))。
- 新しい Fission 互換 API をデフォルトで有効にしました。以前の API に戻すには、設定項目 `marionette.actors.enabled` を `false` に設定します ([Firefox バグ 1669169](https://bugzil.la/1669169))。
- `WebDriver:SwitchToWindow` を、常にトップレベルの閲覧コンテキストへ戻すように修正しました ([Firefox バグ 1305822](https://bugzil.la/1305822))。
- `WebDriver:SwitchToParentFrame` の、閲覧コンテキストの確認を改良しました ([Firefox バグ 1671622](https://bugzil.la/1671622))。
- `WebDriver:Back` で、現在選択されている [`<iframe>`](/ja/docs/Web/HTML/Reference/Elements/iframe) がアンロードされたときにハングアップする問題を修正しました ([Firefox バグ 1672758](https://bugzil.la/1672758))。

#### 既知の不具合

- ページナビゲーションの後、過去に取得した要素にアクセスすると常に "stale element" エラーが発生せず、"no such element" エラーが発生する場合があります。これを防ぐには、設定項目 `marionette.actors.enabled` を `false` に設定してください ([Firefox バグ 1684827](https://bugzil.la/1684827))。

## アドオン開発者向けの変更点

- [`browsingData.remove()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/remove) API が、`cookieStoreId` でデータ型のサブセットの削除をサポートしました。

## 過去のバージョン

{{Firefox_for_developers(83)}}
