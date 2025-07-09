---
title: Firefox 17 for developers
slug: Mozilla/Firefox/Releases/17
---

Gecko 17 を搭載した Firefox 17 は米国時間 2012 年 11 月 20 日にリリースされました。このページでは、開発者に影響する Firefox 17 の変更点をまとめています。

Want to help document Firefox 17? See the [list of bugs that need to be written about](http://beta.elchi3.de/doctracker/#list=fx&version=17.0) and pitch in!

## ウェブ開発者向けの変更点一覧

### HTML

- {{HTMLElement("iframe")}} 要素で [`sandbox`](/ja/docs/Web/HTML/Reference/Elements/iframe#sandbox) 属性をサポートしました。([Firefox バグ 341604](https://bugzil.la/341604))
- {{HTMLElement("input")}} 要素で `inputmode` 属性をサポートしました。(注意: 現在 Gecko が提供する値は、WHATWG HTML 仕様書のものと異なります。) ([Firefox バグ 746142](https://bugzil.la/746142))

### CSS

- [CSS3 Conditional Rules 仕様書](https://dev.w3.org/csswg/css3-conditional/)で定義されている {{ cssxref("@supports") }} @-規則をサポートしました。これは既定で無効にされています。開発者の方は、`layout.css.supports-rule.enabled` を true に設定することで試すことができます ([bug 649740](https://bugzilla.mozilla.org/show_bug.cgi?id=649740))。
- 要素の表記方向を基にした要素選択を可能にする、CSS Selectors Level 4 の {{ cssxref(":dir", ":dir()") }} 擬似クラスをサポートしました。([bug 562169](https://bugzilla.mozilla.org/show_bug.cgi?id=562169))
- CSS の{{ cssxref("unicode-bidi") }} プロパティで新たに規定された値である `isolate-override` をサポートしました。([bug 774335](https://bugzilla.mozilla.org/show_bug.cgi?id=774335))
- {{ cssxref("box-sizing") }} の接頭辞付き実装が、{{ cssxref("min-height") }} および {{ cssxref("max-height") }} を考慮するようになりました。接頭辞が不要な実装に近づくステップのひとつです。([Firefox バグ 308801](https://bugzil.la/308801))

### DOM

- [CSS3 Conditional Rules 仕様書](https://dev.w3.org/csswg/css3-conditional/)で定義されている {{ domxref("CSSSupportsRule") }} インターフェイスをサポートしました。([bug 649740](https://bugzilla.mozilla.org/show_bug.cgi?id=649740))
- {{ domxref("WheelEvent") }} オブジェクトおよび `wheel` イベントをサポートしました ([Firefox バグ 719320](https://bugzil.la/719320))。
- Linux において DOM Meta キーを再びサポートしました ([Firefox バグ 751749](https://bugzil.la/751749))。
- {{ domxref("HTMLMediaElement") }} で、新たなメソッド `mozGetMetadata` をサポートしました ([Firefox バグ 763010](https://bugzil.la/763010))。これは、再生しているメディアのリソースから得たメタデータを {key: value} の組として表すプロパティを持つ、JavaScript オブジェクトを返します。

### JavaScript

- [`String`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String) オブジェクトが Harmony の `startsWith`、`endsWith`、および `contains` メソッドを提供します。([bug 772733](https://bugzilla.mozilla.org/show_bug.cgi?id=772733))
- strawman [`ParallelArray`](/ja/docs/JavaScript/Reference/Global_Objects/ParallelArray) オブジェクトが試験的に実装されました。([Firefox バグ 778559](https://bugzil.la/778559))
- [`Map`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map)/[`Set`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set) のイテレートをサポートしました。([Firefox バグ 725909](https://bugzil.la/725909))
- ウェブコンテンツでは、デフォルトで [E4X](/ja/docs/E4X) を無効にしました。([Firefox バグ 778851](https://bugzil.la/778851))
- Chrome JavaScript オブジェクトを content に公開するには、`__exposedProps__` の設定が必要になりました。`__exposedProps__` の設定なしに content から Chrome オブジェクトへのアクセスを試みても失敗します ([Firefox バグ 553102](https://bugzil.la/553102))。

### WebGL

### SVG

### MathML

- {{MathMLElement("mtable")}} 要素の `align` 属性のパース処理を、任意のスペースをより正しく扱うように更新しました。

### XUL

- XUL の [key](/ja/docs/XUL/key) 要素で、Win キー (Super または Hyper キー) の "os" モディファイアをサポートしました ([Firefox バグ 751749](https://bugzil.la/751749))。

### ネットワーク

### 開発者ツール

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

#### 削除されたインターフェイス

以下のインターフェイスが削除されました。

## 関連記事

{{Firefox_for_developers('16')}}
