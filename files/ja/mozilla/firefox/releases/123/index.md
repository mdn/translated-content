---
title: Firefox 123 for developers
slug: Mozilla/Firefox/Releases/123
l10n:
  sourceCommit: 14ce84d863643d7f729e497781bfd247add7d1ae
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 123 の変更点をまとめています。Firefox 123 は、米国時間 [2024 年 2 月 20 日](https://whattrainisitnow.com/release/?version=123) にリリースされました。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

### HTML

- {{htmlelement("template")}} 要素で、シャドウ DOM のサブツリーの宣言的な作成を許可する `shadowrootmode` 属性をサポートしました。この属性は `open` または `closed` を設定でき、それぞれシャドウ DOM 内の JavaScript を外部のコードに公開または非公開にします。これらは {{domxref("Element.attachShadow()", "attachShadow()")}} メソッドの `mode` オプションと同じ値です。([Firefox bug 1870052](https://bugzil.la/1870052))

### JavaScript

- ほかのブラウザーで渡された値を解析する方法に一致させるため、{{jsxref("Date.parse()")}} グローバルオブジェクトで複数の不具合を修正しました。
  - 不正確な日付 (たとえば "31 April") を、翌月へ繰り越す (たとえば "1 May") ようになりました。([Firefox bug 1872333](https://bugzil.la/1872333))
  - 不完全なタイムゾーン (たとえば "1/1/70 gm") や午前/午後 (たとえば "1/1/70 10:00 a") を受け入れないようになりました。([Firefox bug 1870570](https://bugzil.la/1870570))
  - ひとつの数値で表す日付を受け入れるようになりました (たとえば `Date.parse("0")` は `946684800000`、すなわち Sat Jan 01 2000 00:00:00 を返すようになりました)。([Firefox bug 1870434](https://bugzil.la/1870434))

### SVG

- SVG の {{SVGElement("linearGradient")}} および {{SVGElement("radialGradient")}} 要素で、{{SVGAttr("color-interpolation")}} 属性による `linearRGB` または `sRGB` への色空間の変更をサポートしました。これは、CSS の {{SVGAttr("color-interpolation")}} プロパティでも SVG 要素へ適用できます。

### HTTP

- ページが必要とする可能性があるリソースを、サーバーがまだ完全なレスポンスを準備している間に [先読み](/ja/docs/Web/HTML/Attributes/rel/preload) するための HTTP [`103 Early Hints`](/ja/docs/Web/HTTP/Status/103) [情報レスポンス](/ja/docs/Web/HTTP/Status#情報レスポンス) ステータスコードが有効になりました。
  これは、ページの読み込み時間を大きく削減できます。
  なお、[事前接続](/ja/docs/Web/HTML/Attributes/rel/preconnect) のために使用する `103 Early Hints` ヘッダーは [Firefox 120](/ja/docs/Mozilla/Firefox/Releases/120#http) でサポートしました。
  詳しくは [Firefox bug 1874445](https://bugzil.la/1874445) をご覧ください。

### API

- [Web Authentication API](/ja/docs/Web/API/Web_Authentication_API) で、クロスオリジンの資格情報作成をサポートしました。
  特に、トップレベルで入れ子の [`<iframe>`](/ja/docs/Web/HTML/Element/iframe#allow) で [`Feature-Policy: publickey-credentials-create`](/ja/docs/Web/HTTP/Headers/Permissions-Policy/publickey-credentials-create) によって許可されていれば、入れ子の閲覧コンテキストで別のオリジンから [`navigator.credentials.create({publicKey})`](/ja/docs/Web/API/CredentialsContainer/create) を最上位のドキュメントへ呼び出せるようになりました。
  ([Firefox bug 1870863](https://bugzil.la/1870863))

#### DOM

- `IDBObjectStore.createIndex()` の [`options.locale`](/ja/docs/Web/API/IDBObjectStore/createIndex#locale) 引数や、`IDBIndex` の [`isAutoLocale`](/ja/docs/Web/API/IDBIndex/isAutoLocale) および [`locale`](/ja/docs/Web/API/IDBIndex/locale) プロパティといった、[IndexedDB API](/ja/docs/Web/API/IndexedDB_API) のカスタムロケールのサポートが非推奨になりました。
  ([Firefox bug 1872675](https://bugzil.la/1872675) および [Firefox bug 1730706](https://bugzil.la/1730706))

#### Media、WebRTC、Web Audio

#### 廃止

- `IDBLocaleAwareKeyRange` インターフェイスを廃止しました ([Firefox bug 1730706](https://bugzil.la/1730706))。

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- ネットワークリクエストがエラーで終了したときに発生する [network.fetchError](https://w3c.github.io/webdriver-bidi/#event-network-fetchError) イベントを追加しました ([Firefox bug 1790375](https://bugzil.la/1790375))。
- 指定したページで要素を検索する [browsingContext.locateNodes](https://w3c.github.io/webdriver-bidi/#commands-browsingcontextlocatenodes) コマンドをサポートしました。現在サポートするロケーターは `CssLocator` ([Firefox bug 1855023](https://bugzil.la/1855023)) と `XPathLocator` ([Firefox bug 1869536](https://bugzil.la/1869536)) です。
- `type` 引数に `window` が設定されている場合に、Android で新しいタブを開くようにシームレスに切り替わるよう、[browsingContext.create](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create) コマンドを改良しました ([Firefox bug 1875086](https://bugzil.la/1875086))。
- `DateRemoteValue` のデシリアライズ処理で、`200009` のような非標準の (ISO 8601 に準拠しない) 日付文字列がある状況でエラーが発生しない問題を修正しました ([Firefox bug 1872116](https://bugzil.la/1872116))。
- [script.evaluate](https://w3c.github.io/webdriver-bidi/#command-script-evaluate)、[script.callFunction](https://w3c.github.io/webdriver-bidi/#command-script-callFunction)、[script.disown](https://w3c.github.io/webdriver-bidi/#command-script-disown) コマンドで、`context` および `realm` 引数の両方を指定すると意図したとおり単純に `realm` 引数を無視するのではなく、`invalid argument` エラーが発生する問題を修正しました ([Firefox bug 1873688](https://bugzil.la/1873688))。

#### Marionette

- [Element Send Keys](https://w3c.github.io/webdriver/#element-send-keys) で、サロゲートペアを含む文字列の送信が失敗する不具合を修正しました ([Firefox bug 1866431](https://bugzil.la/1866431))。

## アドオン開発者向けの変更点一覧

- contextual identities のリストでアイテムを移動できる、{{WebExtAPIRef("contextualIdentities.move")}} 関数を追加しました。この関数は、contextual identities が UI で表示される順番を拡張機能からカスタマイズすることを可能にします ([Firefox bug 1333395](https://bugzil.la/1333395))。

## 実験的なウェブ機能

以下の機能は Firefox 123 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **Web Codecs API:** `dom.media.webcodecs.enabled`。

  Nightly で、Linux デスクトップにおいて [Web Codecs API](/ja/docs/Web/API/WebCodecs_API) のビデオインターフェイスをサポートしました。
  これは [`VideoEncoder`](/ja/docs/Web/API/VideoEncoder)、[`VideoDecoder`](/ja/docs/Web/API/VideoDecoder)、[`EncodedVideoChunk`](/ja/docs/Web/API/EncodedVideoChunk)、[`VideoFrame`](/ja/docs/Web/API/VideoFrame)、[`VideoColorSpace`](/ja/docs/Web/API/VideoColorSpace) が含まれます。
  ([Firefox bug 1874445](https://bugzil.la/1874445))

## 過去のバージョン

{{Firefox_for_developers(122)}}
