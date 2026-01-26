---
title: Firefox 17 開発者向けリリースノート
short-title: Firefox 17
slug: Mozilla/Firefox/Releases/17
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Gecko 17 を搭載した Firefox 17 は米国時間 2012 年 11 月 20 日にリリースされました。このページでは、開発者に影響する Firefox 17 の変更点をまとめています。

## ウェブ開発者向けの変更点

### HTML

- {{HTMLElement("iframe")}} 要素で [`sandbox`](/ja/docs/Web/HTML/Reference/Elements/iframe#sandbox) 属性をサポートしました。([Firefox バグ 341604](https://bugzil.la/341604))

### CSS

- [CSS3 Conditional Rules 仕様書](https://drafts.csswg.org/css-conditional-3/)で定義されている {{cssxref("@supports")}} アットルールをサポートしました。これは既定で無効にされています。開発者の方は、`layout.css.supports-rule.enabled` を true に設定することで試すことができます ([bug 649740](https://bugzil.la/649740))。
- 要素の表記方向を基にした要素選択を可能にする、CSS Selectors Level 4 の {{cssxref(":dir", ":dir()")}} 擬似クラスをサポートしました。([bug 562169](https://bugzil.la/562169))
- CSS の {{cssxref("unicode-bidi")}} プロパティで新たに規定された値である `isolate-override` をサポートしました。([bug 774335](https://bugzil.la/774335))
- {{cssxref("box-sizing")}} の接頭辞付き実装が、{{cssxref("min-height")}} および {{cssxref("max-height")}} を考慮するようになりました。接頭辞が不要な実装に近づくステップのひとつです。([Firefox バグ 308801](https://bugzil.la/308801))

### DOM/API

- [CSS3 Conditional Rules 仕様書](https://drafts.csswg.org/css-conditional-3/)で定義されている {{domxref("CSSSupportsRule")}} インターフェイスをサポートしました。([Firefox バグ 649740](https://bugzil.la/649740))
- {{ domxref("WheelEvent") }} オブジェクトおよび `wheel` イベントをサポートしました ([Firefox バグ 719320](https://bugzil.la/719320))。
- Linux において DOM Meta キーを再びサポートしました ([Firefox バグ 751749](https://bugzil.la/751749))。
- {{ domxref("HTMLMediaElement") }} で、新たなメソッド `mozGetMetadata` をサポートしました ([Firefox バグ 763010](https://bugzil.la/763010))。これは、再生しているメディアのリソースから得たメタデータを {key: value} の組として表すプロパティを持つ、JavaScript オブジェクトを返します。
- {{domxref("Range.intersectsNode")}} の対応が再び追加されました。これは Gecko 1.9 で削除されていました ([Firefox bug 579638](https://bugzil.la/579638)).
- {{domxref("Range.compareBoundaryPoints()")}} は比較方法が無効である場合、{{domxref("DOMException")}} を `NOT_SUPPORTED_ERR` 値で発生させるようになりました ([Firefox bug 714279](https://bugzil.la/714279))。
- {{domxref("Event.initEvent()")}} が仕様書に合わせられました。これはイベントの配信後に呼び出されても何もエラーにならず、ただ無実行になります ([Firefox バグ 768310](https://bugzil.la/768310))。
- 標準外の {{domxref("XMLHttpRequest", "XMLHttpRequest.onuploadrequest")}} プロパティが削除されました ([Firefox bug 761278](https://bugzil.la/761278))。
- {{domxref("XMLHttpRequest.getAllResponseHeaders()")}} メソッドは仕様書で要求されている通り、CRLF で分割するようになりました（LF の代わりに） ([Firefox bug 730925](https://bugzil.la/730925)).

### JavaScript

- [`String`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String) オブジェクトが Harmony の [`startsWith`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)、[`endsWith`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)、[`contains`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/includes) メソッドを提供します。([Firefox バグ 772733](https://bugzil.la/772733))
- String の [`link()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/link) および [`anchor()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/anchor) メソッドが、 `'"'` （引用符）をエスケープするようになりました ([Firefox bug 352437](https://bugzil.la/352437))。
- strawman `ParallelArray` オブジェクトが試験的に実装されました。([Firefox バグ 778559](https://bugzil.la/778559))
- [`Map`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map)/[`Set`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set) のイテレートをサポートしました。([Firefox バグ 725909](https://bugzil.la/725909))
- ウェブコンテンツ向けには、廃止された JavaScript 拡張機能である ECMAScript for XML (E4X) をデフォルトで無効化しました ([Firefox バグ 778851](https://bugzil.la/778851))。
- Chrome JavaScript オブジェクトを content に公開するには、`__exposedProps__` の設定が必要になりました。`__exposedProps__` の設定なしに content から Chrome オブジェクトへのアクセスを試みても失敗します ([Firefox バグ 553102](https://bugzil.la/553102))。
- [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループは、`.iterator()` と `.next()` を用いて動作するようになりました ([Firefox bug 725907](https://bugzil.la/725907))。

### WebGL

- {{domxref("EXT_texture_filter_anisotropic")}} WebGL 拡張機能は接頭辞が削除されました。今後 `"MOZ_EXT_texture_filter_anisotropic"` を使用すると警告が表示されます。接頭辞付きの名前は、将来のリリースで除去される予定です（[Firefox バグ 776001](https://bugzil.la/776001)）。

### SVG

_変更なし。_

### MathML

- {{MathMLElement("mtable")}} 要素の `align` 属性のパース処理を、任意のスペースをより正しく扱うように更新しました。

### XUL

- XUL の [key](/ja/docs/XUL/key) 要素で、Win キー (Super または Hyper キー) の "os" 修飾子をサポートしました ([Firefox バグ 751749](https://bugzil.la/751749))。

### ネットワーク

- Firefox 14 で非推奨となった非標準機能 `XMLHttpRequest.onuploadprogress` が除去されました。

_変更なし。_

### 開発者ツール

- JSTerm の $ ヘルパー関数を getElementById から querySelector() に変更する（[Firefox バグ 751749](https://bugzil.la/751749)）。

### ユーザーエージェント

ユーザーエージェント文字列の Gecko 部分が変更されました。2010 年以来更新されていなかったビルド日付が除去され、代わりに Gecko のバージョン番号が配置されました。つまり `Gecko/20100101` が `Gecko/17.0` に置き換わります。ユーザーエージェントの判別を行っている場合、この変更が影響することがあります。

## アドオン開発者と Mozilla 開発者向けの変更点

### インターフェイスの変更点

- `nsIInputStream`
  - : `available()` メソッドは 32 ビット長ではなく 64 ビット長で値を返します。([Firefox バグ 215450](https://bugzil.la/215450))
- `nsIDOMWindowUtils`
  - : `sendMouseScrollEvent()` メソッドは `sendWheelEvent()` に置き換えられました。([Firefox バグ 719320](https://bugzil.la/719320))
- `nsIFilePicker`
  - : ファイルダイアログを非同期的に開くための `open()` メソッドを追加し、また `show()` メソッドは非推奨になりました。([Firefox バグ 731307](https://bugzil.la/731307))
- `nsIScriptSecurityManager`
  - : `checkLoadURIStr()` メソッドおよび `checkLoadURI()` メソッドが削除されました。([Firefox バグ 327244](https://bugzil.la/327244))
- `nsIRefreshURI`
  - : `setupRefreshURIFromHeader()` メソッドに引数 `principal` が追加されました。([Firefox バグ 327244](https://bugzil.la/327244))

#### 新しいインターフェイス

なし。

#### 削除されたインターフェイス

何も削除されていません。

## 関連記事

- [Firefox 17 Release Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/17.0/releasenotes/)
- [Aurora 17 is out, bringing better security and support for new standards](https://hacks.mozilla.org/2012/08/aurora-17-is-out/) (Mozilla Hacks)
- [Add-on Compatibility for Firefox 17](https://blog.mozilla.org/addons/2012/11/08/compatibility-for-firefox-17/) (Add-ons Blog)
