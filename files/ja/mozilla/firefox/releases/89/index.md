---
title: Firefox 89 for developers
slug: Mozilla/Firefox/Releases/89
---

このページでは、開発者に影響する Firefox 89 の変更点をまとめています。Firefox 89 は、米国時間 2021 年 6 月 1 日にリリースされました。

> [!NOTE]
> Mozilla Hacks の [Looking fine with Firefox 89](https://hacks.mozilla.org/2021/06/looking-fine-with-firefox-89/) もご覧ください。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

_変更なし。_

### HTML

_変更なし。_

### CSS

- {{cssxref("@media/forced-colors","forced-colors")}} メディア特性を実装しました ([Firefox バグ 1659511](https://bugzil.la/1659511))。
- `@font-face` の {{cssxref("@font-face/ascent-override", "ascent-override")}}、{{cssxref("@font-face/descent-override", "descent-override")}}、{{cssxref("@font-face/line-gap-override", "line-gap-override")}} ディスクリプターを実装しました ([Firefox バグ 1681691](https://bugzil.la/1681691) および [Firefox バグ 1704494](https://bugzil.la/1704494))。
- {{cssxref("image-set()","image-set()")}} の `type()` 関数を実装しました ([Firefox バグ 1695404](https://bugzil.la/1695404))。

### JavaScript

- トップレベルの [`await`](/ja/docs/Web/JavaScript/Reference/Operators/await#top-level-await) をデフォルトで有効にしました ([Firefox バグ 1681046](https://bugzil.la/1681046))。
- 64 ビットシステムで、長さが 2GB-1 より大きい (最大 8GB) [ArrayBuffer](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) を作成できるようになりました ([Firefox バグ 1703505](https://bugzil.la/1703505))。

### HTTP

_変更なし。_

### API

#### DOM

- {{domxref("PerformanceEventTiming")}} をデフォルトで有効にしました ([Firefox バグ 1701029](https://bugzil.la/1701029))。
- {{htmlelement("input")}} および {{htmlelement("textarea")}} 要素の内容物を、デフォルトで {{domxref("Document.execCommand()")}} コマンドを使用して操作できるようになりました。[`contentEditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) などの冗長な回避策なしに、編集履歴の維持やほかのブラウザーとの同等性を提供します ([Firefox バグ 1220696](https://bugzil.la/1220696))。

#### 廃止

- 以下のセンサーイベントおよび関連するハンドラーを削除しました (主にほかの主要なブラウザーエンジンとの互換性を向上するため、またプライバシー侵害の懸念に対処するため):
  - {{domxref("DeviceProximityEvent")}} および `window.ondeviceproximity` イベントハンドラー ([Firefox バグ 1699707](https://bugzil.la/1699707))。
  - {{domxref("UserProximityEvent")}} および `window.onuserproximity`) イベントハンドラー ([Firefox バグ 1699707](https://bugzil.la/1699707))。
  - `DeviceLightEvent` および `window.ondevicelight` イベントハンドラー ([Firefox バグ 1701824](https://bugzil.la/1701824))。

### WebDriver conformance (Marionette)

#### 廃止

- WebDriver 仕様書に含まれていない `rotatable` 能力を使用できなくなりました ([Firefox バグ 1697630](https://bugzil.la/1697630))。

## アドオン開発者向けの変更点

- [動的な JS モジュールの読み込み](/ja/docs/Web/JavaScript/Guide/Modules#動的なモジュールの読み込み) が、WebExtension のコンテンツスクリプトで動作するようになりました ([Firefox バグ 1536094](https://bugzil.la/1536094))。
- [web_accessible_resources](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) に記載した拡張機能のリソースが、要求の CORS モードにかかわらず読み込まれるようになりました ([Firefox バグ 1694679](https://bugzil.la/1694679))。
- Firefox の UI を再設計したため、{{WebExtAPIRef("theme")}} API の使用に影響があります。`tab_background_separator` および `toolbar_field_separator` プロパティをサポートしなくなりました。`tab_line` および `toolbar_vertical_separator` の動作が変わりました。詳しくは [Changes to themeable areas of Firefox in version 89](https://blog.mozilla.org/addons/2021/04/19/changes-to-themeable-areas-of-firefox-in-version-89/) をご覧ください。
- {{WebExtAPIRef("pageAction")}} ボタンをアドレスバーにピン止めおよびピン止め解除することができなくなりました。デフォルトで三点リーダーアイコンのメニューが表示されないためです ([Firefox バグ 1691454](https://bugzil.la/1691454))。この結果、[`page_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) マニフェストキーの `pinned` プロパティは効果がなくなりました ([Firefox バグ 1703537](https://bugzil.la/1703537))。
- {{WebExtAPIRef("pageAction")}} ボタンから、コンテキストメニューの "アドレスバーから削除" 項目を削除しました ([Firefox バグ 1704474](https://bugzil.la/1704474))。この機能の代替手段について [Firefox バグ 1712556](https://bugzil.la/1712556) をご覧ください。

## 過去のバージョン

{{Firefox_for_developers(88)}}
