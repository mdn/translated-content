---
title: Firefox 18 for developers
slug: Mozilla/Firefox/Releases/18
l10n:
  sourceCommit: 1ee49b729dc4cd02b862d910f279861f4b30e704
---

{{FirefoxSidebar}}

Firefox 18 は米国時間 2013 年 1 月 8 日にリリースされました。このページでは、開発者に影響する Firefox 18 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### HTML

- {{HTMLElement("ol")}} 要素の [`reversed`](/ja/docs/Web/HTML/Element/ol#reversed) 属性をサポートしました。([Firefox バグ 601912](https://bugzil.la/601912))
- {{HTMLElement("link")}} 要素の [`crossorigin`](/ja/docs/Web/HTML/Element/link#crossorigin) 属性をサポートしました。([Firefox バグ 786564](https://bugzil.la/786564))
- {{HTMLElement("iframe")}} 要素の [`allowfullscreen`](/ja/docs/Web/HTML/Element/iframe#allowfullscreen) 属性が実装され、接頭辞つきの古いもの [`mozallowfullscreen`](/ja/docs/Web/HTML/Element/iframe#mozallowfullscreen) は非推奨になりました。

### CSS

- {{cssxref("min-width")}} と {{cssxref("min-height")}} の初期値が `auto` へ変更されました。(これはフレックスアイテムにのみ効果があります。なぜなら、他のアイテムでは従来の初期値である `0` になるためです) ([Firefox バグ 763689](https://bugzil.la/763689))
- カスケードが更新されました。ページ作者の `!important` ルールが [CSS アニメーション](/ja/docs/Web/CSS/CSS_animations/Using_CSS_animations)を上書きするようになりました。 ([Firefox バグ 783714](https://bugzil.la/783714))
- {{cssxref("background")}} 一括指定プロパティが、内部で指定された CSS3 の{{cssxref("background-size")}} プロパティを理解するようになりました。 ([Firefox バグ 570326](https://bugzil.la/570326))
- CSS フレックスボックスモジュールの初期実装が導入されました。既定では無効化されていますが、 `layout.css.flexbox.enabled` 設定を true に設定すると有効化されます。([Firefox バグ 666041](https://bugzil.la/666041))

### DOM

- `navigator.mozPay` プロパティがサポートされました。 ([Firefox バグ 767818](https://bugzil.la/767818))
- `window.devicePixelRatio` プロパティがサポートされました。 ([Firefox バグ 564815](https://bugzil.la/564815))
- MacOS X において `window.navigator.battery` がサポートされました。 ([Firefox バグ 696045](https://bugzil.la/696045))
- `MozBlobBuilder` は削除されました。`Blob` オブジェクトを作るには {{domxref("Blob")}} コンストラクターを使ってください。([Firefox バグ 744907](https://bugzil.la/744907))
- {{domxref("document.visibilitychange_event", "visibilitychange")}} イベントと [Page Visibility API](/ja/docs/Web/API/Page_Visibility_API) の接頭辞が削除されました。([Firefox バグ 812086](https://bugzil.la/812086))
- {{domxref("TextDecoder")}} と {{domxref("TextEncoder")}} が追加されました。なお、これらの実装と仕様が進化し、 Firefox 19 で変更されました。([Firefox バグ 764234](https://bugzil.la/764234))
- `HTMLMediaElement.src` が 2 つのプロパティに分離されました: ひとつは標準化された `src` プロパティで、文字列を扱います。もうひとつは接頭辞つきの `mozSrcObject` プロパティで、[メディアストリーム](/ja/docs/Web/API/Media_Capture_and_Streams_API)を扱います。([Firefox バグ 792665](https://bugzil.la/792665))
- [移譲可能オブジェクト](/ja/docs/Web/API/Web_Workers_API/Using_web_workers#所有権の移譲によるデータの引き渡し（移譲可能オブジェクト）)に対応しました。
- {{domxref("Screen.lockOrientation()")}} メソッドが引数として文字列の配列 (`Array`) に対応するようになりました。 ([Firefox バグ 784549](https://bugzil.la/784549))

### JavaScript

- Harmony (ECMAScript 2015) の[直接プロキシー](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy)がサポートされました。([Firefox バグ 703537](https://bugzil.la/703537)) 注意: この実装には 2 つの既知の不具合、欠落している機能、現行仕様との不整合が含まれています。これを本番のコードで使用しないようにしてください。
- ECMAScript 2015 の `contains()` メソッドを文字列に実装しました。これは残念ながら Mootools 1.2 とは互換性がなく、そして Mootools は文字列の `contains()` と異なる動作になると考えられますが、それは保証されません。より新しいバージョンの Mootools ではこの問題を修正しています。各サイトでは Mootools のバージョンを、1.2 より新しいものに更新するとよいでしょう。

### WebGL

- WebGL 拡張機能である {{domxref("EXT_texture_filter_anisotropic")}} の接頭辞は削除されました（[Firefox バグ 790946](https://bugzil.la/790946)）。 WebGL 拡張の "MOZ_EXT_texture_filter_anisotropic" は削除されました ([Firefox バグ 790946](https://bugzil.la/790946))。

### SVG

### MathML

### XUL

### ネットワーク

- HTTPの `Accept-Language` ヘッダーの Quality プロパティ ("q-values") は 2 桁に丸められるようになりました。 ([Firefox バグ 672448](https://bugzil.la/672448))
- [`X-FRAME-OPTIONS`](/ja/docs/Web/HTTP/Headers/X-Frame-Options) HTTP レスポンスヘッダーの `ALLOW-FROM` 構文がサポートされました。([Firefox バグ 690168](https://bugzil.la/690168))

### 開発者ツール

## アドオン開発者と Mozilla 開発者向けの変更点

### インターフェイス

- `nsIStreamListener`
  - : `onDataAvailable()` の 4 番目の引数 (aOffset) が unsigned long long 型に変更されました。 ([Firefox バグ 784912](https://bugzil.la/784912))
- `nsIUploadChannel`
  - : `setUploadStream()` が 2GB を超える content-length をサポートしました。([Firefox バグ 790617](https://bugzil.la/790617))
- `nsIEditor`
  - : `addEditorObserver()` が削除されました。代わりに `setEditorObserver()` を使ってください。 `removeEditorObserver()` は `nsIEditorObserver` 引数を受け取らなくなります。([Firefox バグ 785091](https://bugzil.la/785091))
- `nsIHttpProtocolHandler`
  - : `http-on-modify-request` オブザーバが `nsIChannel.asyncOpen()` 中に同期的に呼ばれる保証はなくなります。`asyncOpen()` 中に呼び出される必要のあるオブザーバには新しく `http-on-opening-request` オブザーバトピックが追加されています`。詳細は`([Firefox バグ 800799](https://bugzil.la/800799))をご覧ください。
- `nsIProtocolProxyService`
  - : `resolve` メソッドは削除されました。 `asyncResolve` メソッドだけが使用できるようになりました。 ([Firefox バグ 769764](https://bugzil.la/769764)) を参照してください。

#### 新しいインターフェイス

#### 削除されたインターフェイス

次ののインターフェイスが削除されました。

- `nsIEditorObserver`

## 関連記事

- [Firefox 18 リリースノート](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/18.0beta/releasenotes/)
- [Aurora 18: HiDPI & Touch Events](https://hacks.mozilla.org/2012/10/aurora-18-hidpi-touch-events/) (Mozilla Hacks)
- [Firefox 18 のアドオン互換性に関わる修正のまとめ](https://dev.mozilla.jp/2012/12/firefox-18-addon-compatibility/)

{{Firefox_for_developers('17')}}
