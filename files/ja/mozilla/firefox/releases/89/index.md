---
title: Firefox 89 for developers
slug: Mozilla/Firefox/Releases/89
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 89 の変更点をまとめています。Firefox 89 は、米国時間 2021 年 6 月 1 日にリリースされました。

> **メモ:** Mozilla Hacks の [Looking fine with Firefox 89](https://hacks.mozilla.org/2021/06/looking-fine-with-firefox-89/) もご覧ください。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

_変更なし。_

### HTML

_変更なし。_

### CSS

- {{cssxref("@media/forced-colors","forced-colors")}} メディア特性を実装しました ({{bug(1659511)}})。
- `@font-face` の {{cssxref("@font-face/ascent-override", "ascent-override")}}、{{cssxref("@font-face/descent-override", "descent-override")}}、{{cssxref("@font-face/line-gap-override", "line-gap-override")}} ディスクリプターを実装しました ({{bug(1681691)}} および {{bug(1704494)}})。
- {{cssxref("image-set()","image-set()")}} の `type()` 関数を実装しました ({{bug(1695404)}})。

### JavaScript

- トップレベルの [`await`](/ja/docs/Web/JavaScript/Reference/Operators/await#top-level-await) をデフォルトで有効にしました ({{bug(1681046)}})。
- 64 ビットシステムで、長さが 2GB-1 より大きい (最大 8GB) [ArrayBuffer](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) を作成できるようになりました ({{bug(1703505)}})。

### HTTP

_変更なし。_

### API

#### DOM

- {{domxref("PerformanceEventTiming")}} をデフォルトで有効にしました ({{bug(1701029)}})。
- {{htmlelement("input")}} および {{htmlelement("textarea")}} 要素の内容物を、デフォルトで {{domxref("Document.execCommand()")}} コマンドを使用して操作できるようになりました。[`contentEditable`](/ja/docs/Web/HTML/Global_attributes/contenteditable) などの冗長な回避策なしに、編集履歴の維持やほかのブラウザーとの同等性を提供します ({{bug(1220696)}})。

#### 廃止

- 以下のセンサーイベントおよび関連するハンドラーを削除しました (主にほかの主要なブラウザーエンジンとの互換性を向上するため、またプライバシー侵害の懸念に対処するため):

  - {{domxref("DeviceProximityEvent")}} および `window.ondeviceproximity` イベントハンドラー ({{bug(1699707)}})。
  - {{domxref("UserProximityEvent")}} および `window.onuserproximity`) イベントハンドラー ({{bug(1699707)}})。
  - `DeviceLightEvent` および `window.ondevicelight` イベントハンドラー ({{bug(1701824)}})。

### WebDriver conformance (Marionette)

#### 廃止

- WebDriver 仕様書に含まれていない `rotatable` 能力を使用できなくなりました ({{bug(1697630)}})。

## アドオン開発者向けの変更点

- [動的な JS モジュールの読み込み](/ja/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) が、WebExtension のコンテンツスクリプトで動作するようになりました ({{bug(1536094)}})。
- [web_accessible_resources](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) に記載した拡張機能のリソースが、要求の CORS モードにかかわらず読み込まれるようになりました ({{bug(1694679)}})。
- Firefox の UI を再設計したため、{{WebExtAPIRef("theme")}} API の使用に影響があります。`tab_background_separator` および `toolbar_field_separator` プロパティをサポートしなくなりました。`tab_line` および `toolbar_vertical_separator` の動作が変わりました。詳しくは [Changes to themeable areas of Firefox in version 89](https://blog.mozilla.org/addons/2021/04/19/changes-to-themeable-areas-of-firefox-in-version-89/) をご覧ください。
- {{WebExtAPIRef("pageAction")}} ボタンをアドレスバーにピン止めおよびピン止め解除することができなくなりました。デフォルトで三点リーダーアイコンのメニューが表示されないためです ({{bug(1691454)}})。この結果、[`page_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) マニフェストキーの `pinned` プロパティは効果がなくなりました ({{bug(1703537)}})。
- {{WebExtAPIRef("pageAction")}} ボタンから、コンテキストメニューの "アドレスバーから削除" 項目を削除しました ({{bug(1704474)}})。この機能の代替手段について {{bug(1712556)}} をご覧ください。

## 過去のバージョン

{{Firefox_for_developers(88)}}
