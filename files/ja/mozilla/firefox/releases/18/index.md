---
title: Firefox 18 for developers
slug: Mozilla/Firefox/Releases/18
---

Gecko 18 を搭載した Firefox 18 は米国時間 2013 年 1 月 8 日にリリースされました。このページでは、開発者に影響する Firefox 18 の変更点をまとめています。

## Web 開発者向けの変更点一覧

### HTML

- {{HTMLElement("ol")}} 要素の {{htmlattrxref("reversed","ol")}} 属性をサポートしました。({{bug("601912")}})
- {{HTMLElement("link")}} 要素の {{htmlattrxref("crossorigin","link")}} 属性をサポートしました。({{bug("786564")}})

### CSS

- {{cssxref("min-width")}} と {{cssxref("min-height")}} の初期値が `auto` へ変更されました。(これは flex アイテムにのみ効果があります。なぜなら、他のアイテムでは従来の初期値である `0` になるためです) ({{bug("763689")}})
- [CSS animations](/ja/docs/CSS/Using_CSS_animations) にページ作者 CSS における `!important` が適用されるようになりました。 ({{bug("783714")}})
- {{cssxref("background")}} プロパティに CSS3 の{{cssxref("background-size")}} プロパティの指定が追加されました。 ({{bug("570326")}})
- CSS Flexbox モジュールの初期実装が導入されました。デフォルトでは無効化されていますが、`layout.css.flexbox.enabled` 設定を true に設定すると有効化されます。({{bug('666041')}})

### DOM

- `navigator.mozPay` プロパティがサポートされました。 ({{bug("767818")}})
- `window.devicePixelRatio` プロパティがサポートされました。 ({{bug("564815")}})
- MacOS X において `window.navigator.battery` がサポートされました。 ({{bug("696045")}})
- {{domxref("BlobBuilder", "MozBlobBuilder")}} は削除されました。`Blob` オブジェクトを作るには {{domxref("Blob")}} コンストラクタを使ってください。({{bug("744907")}})
- {{event("visibilitychange")}} イベントと [Page Visibility API](/ja/docs/DOM/Using_the_Page_Visibility_API) の接頭辞が削除されました。({{bug("812086")}})
- `TextDecoder` と `TextEncoder` が追加されました。({{bug("764234")}})
- `HTMLMediaElement.src` が 2 つのプロパティに分離されました: ひとつは標準化された `src` プロパティで、 {{domxref("DOMString")}} を扱います。もうひとつは接頭辞つきの `mozSrcObject` プロパティで、[media streams](/ja/docs/WebRTC/MediaStream_API) を扱います。({{bug("792665")}})
- [transferable objects](</ja/docs/DOM/Using_web_workers#.E6.89.80.E6.9C.89.E6.A8.A9.E3.81.AE.E8.AD.B2.E6.B8.A1_(Transferable_Objects)_.E3.81.AB.E3.82.88.E3.82.8B.E3.83.87.E3.83.BC.E3.82.BF.E3.81.AE.E5.BC.95.E3.81.8D.E6.B8.A1.E3.81.97>) をサポートしました。

### JavaScript

- ECMAScript Harmony (EcmaScript 6) の Direct Proxies がサポートされました。({{bug("703537")}}) 注意: この実装には 2 つの既知の不具合、欠落している機能、現行仕様との不整合が含まれています。これを本番のコードで使用しないようにしてください。
- ECMAScript 6 の `contains()` メソッドを、string に実装しました。これは残念ながら Mootools 1.2 とは互換性がなく、そして Mootools は string の `contains()` と異なる動作になると考えられますが、それは保証されません。より新しいバージョンの Mootools ではこの問題を修正しています。各サイトでは Mooltools のバージョンを、1.2 より新しいものに更新するとよいでしょう。

### WebGL

### SVG

### MathML

### XUL

### ネットワーク

- HTTP `Accept-Language` ヘッダの Quality プロパティ ("q-values") は 2 桁に丸められるようになりました。 ({{bug("672448")}})
- [`X-FRAME-OPTIONS`](/ja/docs/The_X-FRAME-OPTIONS_response_header) HTTP レスポンスヘッダの `ALLOW-FROM` 構文がサポートされました。({{bug("690168")}})

### 開発者ツール

## アドオン開発者と Mozilla 開発者向けの変更点

### インターフェース

- `nsIStreamListener`
  - : `onDataAvailable()の`4 番目の引数 (aOffset) が unsigned long long 型に変更されました。 ({{bug("784912")}})
- `nsIUploadChannel`
  - : `setUploadStream()` が 2GB を超える content-length をサポートしました。({{bug("790617")}})
- `nsIEditor`
  - : `addEditorObserver()` が削除されました。代わりに `setEditorObserver()` を使ってください。`removeEditorObserver()` は `nsIEditorObserver` パラメータを受け取らなくなります。({{bug("785091")}})
- `nsIHttpProtocolHandler`
  - : `http-on-modify-request` オブザーバが `nsIChannel.asyncOpen()` 中に同期的に呼ばれる保証はなくなります。`asyncOpen()` 中に呼び出される必要のあるオブザーバには新しく `http-on-opening-request` オブザーバトピックが追加されています`。詳細は`({{bug("800799")}})をご覧ください。

#### 新しいインターフェース

#### 削除されたインターフェース

以下のインターフェースが削除されました:

- `nsIEditorObserver`

## 関連記事

- [Firefox 18 リリースノート](http://www.mozilla.jp/firefox/18.0/releasenotes/)
- [Aurora 18: HiDPI & Touch Events](https://hacks.mozilla.org/2012/10/aurora-18-hidpi-touch-events/) (Mozilla Hacks)
- [Firefox 18 のアドオン互換性に関わる修正のまとめ](https://dev.mozilla.jp/2012/12/firefox-18-addon-compatibility/)

{{Firefox_for_developers('17')}}
