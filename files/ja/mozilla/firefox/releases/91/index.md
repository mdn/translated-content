---
title: Firefox 91 for developers
slug: Mozilla/Firefox/Releases/91
l10n:
  sourceCommit: 78ef1310a76394c4e0bdce456982abc3856790c0
---

このページでは、開発者に影響する Firefox 91 の変更点をまとめています。Firefox 91 は 2021 年 8 月 10 日にリリースされました。

> [!NOTE]
> Mozilla Hacks の [Hopping on Firefox 91](https://hacks.mozilla.org/2021/08/hopping-on-firefox-91/) もご覧ください。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### CSS

- {{cssxref("@counter-style/pad")}} ディスクリプターが負符号を扱う方法を修正しました ([Firefox バグ 1714445](https://bugzil.la/1714445))。
- `-moz-tab-size` プロパティの接頭辞を削除して、標準化された {{cssxref("tab-size")}} にしました。また、接頭辞つきのプロパティを別名として維持します ([Firefox バグ 737785](https://bugzil.la/737785))。

#### 廃止

- 非標準の {{cssxref("-moz-outline-radius")}} プロパティを削除しました ([Firefox バグ 1715984](https://bugzil.la/1715984))。このプロパティは Firefox 88 からウェブ開発者が使用できず、このバージョンで完全に廃止しました。

### JavaScript

- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}} および {{jsxref("Intl/DateTimeFormat/formatRangeToParts", "Intl.DateTimeFormat.prototype.formatRangeToParts()")}} を、Release ビルドでサポートしました。`formatRange()` メソッドは、2 つの {{jsxref("Date")}} オブジェクトの間の期間をローカライズおよび整形した文字列で返します (例: "21/01/05 – 21/01/10")。`formatRangeToParts()` メソッドは、整形された期間のロケール固有の*部品*を持つ配列を返します ([Firefox バグ 1653024](https://bugzil.la/1653024))。
- {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat() コンストラクター")}} が、タイムゾーンの表示方法を整形するための `timeZoneName` オプションを新たに 4 種類受け入れるようになりました。これにはローカライズされた GMT 形式の `shortOffset` および `longOffset` と、一般的な非ロケーション形式の `shortGeneric` および `longGeneric` が含まれます ([Firefox バグ 1653024](https://bugzil.la/1653024))。
- {{jsxref("Global_Objects/Error/Error", "Error() コンストラクター")}} が、`option` 引数の値として `cause` をとれるようになりました。これはコードがエラーをキャッチして、元のエラーやスタックトレースを持つ新たなバージョン、または変更したバージョンのエラーを発生させることができます ([Firefox バグ 1679653](https://bugzil.la/1679653))。

### HTTP

- [Gamepad API](/ja/docs/Web/API/Gamepad_API) が [保護されたコンテキスト](/ja/docs/Web/Security/Defenses/Secure_Contexts) を要求するようになりました ([Firefox バグ 1704005](https://bugzil.la/1704005))。

### API

#### DOM

- [Visual Viewport API](/ja/docs/Web/API/Visual_Viewport_API) がデスクトップ版 Firefox でデフォルトで有効になりました (Android 版 Firefox はバージョン 68 で有効にしていました)。この API はドキュメントに対する {{Glossary("visual viewport", "視覚的ビューポート")}} の位置を表す情報へ、ウィンドウのコンテンツエリアと同様にアクセスする手段を提供します。また、ビューポートの変更を監視できるイベントも提供します ([Firefox バグ 1551302](https://bugzil.la/1551302))。
- [Gamepad API](/ja/docs/Web/API/Gamepad_API) が {{httpheader('Feature-Policy/gamepad','Feature-Policy: gamepad')}} で保護されるようになりました。[機能ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy) で拒否された場合は、{{domxref('Navigator.getGamepads()')}} を呼び出すと `SecurityError` {{domxref('DOMException')}} が発生して、{{domxref("Window.gamepadconnected_event", "gamepadconnected")}} および {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} イベントは発生しません。既定の `allowlist` は `*` です。この既定値は、仕様書に合わせるため将来のリリースで `self` に更新する予定です ([Firefox バグ 1704005](https://bugzil.la/1704005))。
- 最近の仕様書の更新に準拠するため、および他の主要なブラウザーとの互換性を向上させるために、`Window.clientInformation` を {{domxref("Window.navigator")}} の別名として追加しました ([Firefox バグ 1717072](https://bugzil.la/1717072))。

### WebDriver conformance (Marionette)

- ポップアップウィンドウで開いたユーザープロンプトで、`WebDriver:AcceptAlert` および `WebDriver:DismissAlert` コマンドがハングアップを起こす不具合を修正しました ([Firefox バグ 1721982](https://bugzil.la/1721982))。
- `webSocketUrl` 特性の不適切な取り扱いを修正しました。`webSocketUrl` が未サポートでしたが `true` を返していました ([Firefox バグ 1713775](https://bugzil.la/1713775))。

## 過去のバージョン

{{Firefox_for_developers(90)}}
