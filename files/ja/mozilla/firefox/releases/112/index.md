---
title: Firefox 112 for developers
slug: Mozilla/Firefox/Releases/112
l10n:
  sourceCommit: af8cedc8aa8af74c129ffb5369e34290cee36d40
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 112 の変更点をまとめています。Firefox 112 は、米国時間 2023 年 4 月 11 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

- {{domxref("HTMLElement")}} の [**`inert`**](/ja/docs/Web/HTML/Global_attributes/inert) プロパティを全面的に有効にしました。`inert` 属性を持つ HTMLElement の内部にあるコンテンツやインタラクティブ要素を、ブラウザーに無視させることができます。詳しくは [Firefox bug 1764263](https://bugzil.la/1764263) をご覧ください。

### CSS

- [指数関数](/ja/docs/Web/CSS/CSS_Functions#exponential_functions) をデフォルトで有効にしました。
  `pow()`、`sqrt()`、`hypot()`、`log()`、`exp()` の関数を使用できます ([Firefox bug 1814469](https://bugzil.la/1814469))。
- {{cssxref("overflow")}} のキーワード値 `overlay` を、キーワード値 `auto` の旧来の別名としてサポートしました ([Firefox bug 1817189](https://bugzil.la/1817189))。
- [`offset-path`](/ja/docs/Web/CSS/offset-path) を定義するために使用する `ray()` 関数で、`<ray_size>` 引数が省略可能になりました。`<ray_size>` 引数を与えない場合は `closest-side` が既定値になります ([Firefox bug 1820071](https://bugzil.la/1820071))。
- `linear()` [イージング関数](/ja/docs/Web/CSS/easing-function) をサポートしました。
  これは複数の点の間を直線的に補完するイージング関数を定義するものであり、複雑なアニメーションを近似的に表現することに役立ちます ([Firefox bug 1819447](https://bugzil.la/1819447)、[Firefox bug 1764126](https://bugzil.la/1764126))。

### JavaScript

変更なし。

### API

- {{domxref("navigator.getAutoplayPolicy()")}} をサポートしました。自動再生が許可されているか、許可されていないか、音声がミュートである場合に限り許可されているかに基づいて、メディア要素やオーディオコンテキストの [自動再生](/ja/docs/Web/Media/Autoplay_guide) を開発者が設定できるようにします。
  詳しくは [Firefox bug 1773551](https://bugzil.la/1773551) をご覧ください。
- {{domxref("CanvasRenderingContext2D.roundRect()")}}、[`Path2D.roundRect()`](/ja/docs/Web/API/Path2D#path2d.roundrect)、[`OffscreenCanvasRenderingContext2D.roundRect()`](/ja/docs/Web/API/OffscreenCanvasRenderingContext2D#canvasrenderingcontext2d.roundrect) を使用して、2D キャンバスに丸みを帯びた長方形を描画できるようになりました。
  詳しくは [Firefox bug 1756175](https://bugzil.la/1756175) をご覧ください。
- 非推奨かつ非標準の `CanvasRenderingContext2D.mozTextStyle` 属性をデフォルトで無効にしました ([Firefox bug 1818409](https://bugzil.la/1818409))。

#### 廃止

- `IDBMutableFile`、`IDBFileRequest`、`IDBFileHandle`、`IDBDatabase.createMutableFile()` のサポートを廃止しました。
  これらのインターフェイスはどの仕様書にも存在しておらず、バージョン 102 から設定で無効化していました。また、他の主要なブラウザーエンジンでは数年前に削除されていました。
  ([Firefox bug 1500343](https://bugzil.la/1500343))

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- `browsingContext.print` コマンドを実装しました。閲覧コンテキストをBase64 でエンコードした文字列で表した PDF 文書を、クライアントに要求できます。詳しくは [Firefox bug 1806810](https://bugzil.la/1806810) をご覧ください。
- `script.addPreloadScript` および `script.removePreloadScript` コマンドを実装しました。後に読み込まれるどのコンテンツスクリプトでも利用できることが保証された機能を、WebDriver が後でコンテキストに挿入するスクリプトより前に、テストクライアントが挿入することを可能にします。詳しくは [Firefox bug 1806420](https://bugzil.la/1806420) および [Firefox bug 1806465](https://bugzil.la/1806465) をご覧ください。
- ノードキャッシュに保存された `Element` および `ShadowRoot` の参照が、まったく同じ一意の参照によって Marionette および WebDriver BiDi の両方で使用できるようになりました。詳しくは [Firefox bug 1770733](https://bugzil.la/1770733) をご覧ください。
- `isRedirect` をネットワークイベントの基本引数から削除しました ([Firefox bug 1819875](https://bugzil.la/1819875))。

#### Marionette

- 一部のデータ型で、応答のペイロードが `value` フィールドにラップされていない不具合を修正しました。([Firefox bug 1819029](https://bugzil.la/1819029))。
- `WebDriver:ElementClear` が、内容を編集できる要素に余分な `change` イベントを発していた不具合を修正しました ([Firefox bug 1744925](https://bugzil.la/1744925))。

## アドオン開発者向けの変更点一覧

- {{WebExtAPIRef("webRequest.SecurityInfo")}} に `usedDelegatedCredentials`、`usedEch`、`usedOcsp`、`usedPrivateDns` プロパティを追加しました。これらのプロパティは、ウェブ要求に使用する接続のセキュリティ情報を提供します ([Firefox bug 1804460](https://bugzil.la/1804460))。
- [`"background"` マニフェストキー](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) で `"type"` プロパティをサポートしました。このキーを `"module"` に設定すると `"scripts"` で指定したバックグラウンドスクリプトが ES モジュールとして読み込みまれ、ES モジュールを使用するためにバックグラウンドページへ切り替える必要はありません ([Firefox bug 1811443](https://bugzil.la/1811443))。

## 過去のバージョン

{{Firefox_for_developers(111)}}
