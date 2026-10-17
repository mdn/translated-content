---
title: Firefox 158 release notes for developers (Stable)
short-title: Firefox 158 (Stable)
slug: Mozilla/Firefox/Releases/158
l10n:
  sourceCommit: bd4e1a75486ccdf2d36aef41c63d22ec5536b6a6
---

このページでは、開発者に影響する Firefox 158 の変更点をまとめています。
Firefox 158 は、米国時間 [2026 年 10 月 13 日](https://whattrainisitnow.com/release/?version=158) にリリースされました。

## ウェブ開発者向けの変更点一覧

### アクセシビリティ

- [`aria-busy`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) 属性を Android 版 Firefox でサポートしました (デスクトップ版では以前から使用可能でした)。この ARIA 状態は、要素が現在変更されているかを示します。これにより支援技術は、コンテンツの変更が完了するまで待機してからユーザーへ更新を通知することができます。たとえばスクリーンリーダーは、[ライブリージョン](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions) の更新が完了するまで待機してから変更内容を読み上げることができます ([Firefox bug 908042](https://bugzil.la/908042))。

### HTML

変更なし。

### CSS

- [CSS 型付き演算](/ja/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic) をサポートしました。これにより {{cssxref("calc()")}} などの関数を使用して、単位が異なる場合でもデータ型が同じ 2 つの値を除算できるようになります。演算結果である単位がない商は、ほかのデータ型に変換でき、ページ上の別の値との間に有用な関係性を作ることができます ([Firefox bug 2067411](https://bugzil.la/2067411))。

### JavaScript

変更なし。

### HTTP

- [JPEG XL](/ja/docs/Web/Media/Guides/Formats/Image_types#jpeg_xl_image) 画像形式のサポートに伴い、画像のリクエストのデフォルト HTTP [`Accept`](/ja/docs/Web/HTTP/Reference/Headers/Accept) ヘッダーに `image/jxl` を含めるようになりました。新しい値は `image/avif,image/jxl,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5` です ([既定の Accept 値の一覧](/ja/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values#画像の値) をご覧ください) ([Firefox bug 2065096](https://bugzil.la/2065096))。

### API

- {{domxref("WebTransport.getStats()")}} メソッドをサポートしました。このメソッドは、トランスポートの基盤になる接続とそのデータグラムの統計情報を返します ([Firefox bug 2007202](https://bugzil.la/2007202))。
- {{domxref("WebTransport.supportsReliableOnly_static", "WebTransport.supportsReliableOnly")}} 静的プロパティをサポートしました。このプロパティは、HTTP/2 のような信頼性があるトランスポートにおいて [WebTransport](/ja/docs/Web/API/WebTransport_API) セッションをブラウザーがサポートするかを示します。Firefox は HTTP/2 経由の WebTransport が未サポートのため、このプロパティは常に `false` を返します ([Firefox bug 2007783](https://bugzil.la/2007783))。
- {{domxref("Notification.Notification", "Notification()")}} コンストラクターおよび {{domxref("ServiceWorkerRegistration.showNotification()")}} メソッドの `navigate` オプションをサポートしました。このオプションは、生成したシステム通知をユーザーがクリックした後に移動する URL を指定します。通知が生成されると、{{domxref("Notification.navigate")}} プロパティから URL を取得できます ([Firefox bug 2069920](https://bugzil.la/2069920))。
- [WebGPU](/ja/docs/Web/API/WebGPU_API) の `float32-blendable` 機能をサポートしました ({{domxref("GPUSupportedFeatures")}} をご覧ください)。これにより `r32float`、`rg32float`、`rgba32float` [`形式`](/ja/docs/Web/API/GPUDevice/createTexture#format) を使用して {{domxref("GPUTexture")}} の [ブレンディング](/ja/docs/Web/API/GPUDevice/createRenderPipeline#blend) が可能になります ([Firefox bug 1931630](https://bugzil.la/1931630))。
- [WebGPU](/ja/docs/Web/API/WebGPU_API) の `clip-distances` 機能を macOS でサポートしました ({{domxref("GPUSupportedFeatures")}} をご覧ください)。これにより頂点シェーダーが WGSL で [`clip_distances`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-clip_distances) を出力できるようになり、カスタム平面の片側にある三角形や線の部分を切り取って、残りの部分が描画されます。これは水面の反射や CAD アプリケーションの断面図などの効果で役に立ちます ([Firefox bug 1931629](https://bugzil.la/1931629))。
- [WebGL](/ja/docs/Web/API/WebGL_API) の {{domxref("EXT_polygon_offset_clamp")}} 拡張が、対応するデバイスで使用可能になりました。この {{domxref("EXT_polygon_offset_clamp.polygonOffsetClampEXT()", "polygonOffsetClampEXT()")}} メソッドは {{domxref("WebGLRenderingContext.polygonOffset()", "polygonOffset()")}} と同様に動作しますが、深度のオフセットを制限する引数が追加されています。これはシャドウマッピングを使用するときに、影に穴が開くことを防ぎます ([Firefox bug 1854003](https://bugzil.la/1854003))。
- リソースの配信方法を示す {{domxref("PerformanceResourceTiming.deliveryType")}} プロパティをサポートしました。初期リリースでは `cache` 値をサポートしており、これはリソースをキャッシュから取得したことを示します ([Firefox bug 1914120](https://bugzil.la/1914120), [Firefox bug 2071913](https://bugzil.la/2071913))。

#### DOM

- {{domxref("SVGGraphicsElement.getBBox()")}} メソッドが {{SVGElement("tspan")}} および {{SVGElement("textPath")}} 要素に対して呼び出されたときに、[`options`](/ja/docs/Web/API/SVGGraphicsElement/getBBox#options) 引数の `fill` および `stroke` プロパティを考慮するようになりました。これにより {{SVGElement("text")}} 要素全体ですでに可能なように、テキストスパンのストロークを含むバウンディングボックスを取得できます ([Firefox bug 2072680](https://bugzil.la/2072680))。
- [HTML 無害化 API](/ja/docs/Web/API/HTML_Sanitizer_API) の設定の [`javascriptURLs`](/ja/docs/Web/API/SanitizerConfig#javascripturls) オプションおよび {{domxref("Sanitizer.setJavascriptURLs()")}} メソッドをサポートしました。これは {{domxref("Element.setHTMLUnsafe()")}} のような安全でないメソッドでサニタイザーを使用するときに、`<a href="javascript:…">` などの [`javascript:` URL](/ja/docs/Web/URI/Reference/Schemes/javascript) を含む属性を削除するかを設定します。{{domxref("Element.setHTML()")}} のような安全なメソッドでは、引き続き常にこれらを削除します。この結果、安全でないメソッドでデフォルトのサニタイザーを使用する、または {{domxref("Sanitizer.removeUnsafe()")}} を呼び出してからサニタイザーを使用すると `javascript:` URL が削除されるようになりました ([Firefox bug 2068934](https://bugzil.la/2068934))。

#### Media、WebRTC、Web Audio

- H.264 または AV1 の動画を [WebRTC](/ja/docs/Web/API/WebRTC_API) で送信する際、Firefox はリモートピアとネゴシエートしたコーデックレベルの範囲に収まるように、解像度やフレームレートを下げるようになりました。コーデックレベルは、[H.264](/ja/docs/Web/Media/Guides/Formats/WebRTC_codecs#avc_h.264) では `profile-level-id` パラメーター、[AV1](/ja/docs/Web/Media/Guides/Formats/WebRTC_codecs#av1) では `level-idx` パラメーターで設定します。この結果 {{domxref("MediaCapabilities.encodingInfo()")}} は、`webrtc` 構成の解像度やフレームレートが `contentType` で設定したレベルを超えていても、その構成をサポートしていると報告するようになりました ([Firefox bug 2013936](https://bugzil.la/2013936))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### 一般

- WebDriver BiDi の `permissions.setPermission` コマンドおよび Marionette の `WebDriver:SetPermission` コマンドで、`camera` および `microphone` 権限の設定をサポートしました。これによりテストでは、ユーザーへの確認なしにメディアデバイスへのアクセスを許可または拒否できます ([Firefox bug 2070577](https://bugzil.la/2070577))。
- 自動化におけるタッチ開始およびタッチ移動の許容誤差を 0 に変更しました。これによりタッチ操作では初めの小さな動きが吸収されることなく、操作を開始した位置から正確にスクロールするようになりました ([Firefox bug 2055661](https://bugzil.la/2055661))。

#### WebDriver BiDi

- `browsingContext.captureScreenshot` コマンドの `imageSize` 引数をサポートしました。これにより、作成されるスクリーンショット画像の最大サイズをクライアントが指定できます ([Firefox bug 2069002](https://bugzil.la/2069002))。
- `browsingContext.startScreencast` コマンドの `destinationFolder` 引数をサポートしました。これにより、記録した動画ファイルを保存するフォルダーをクライアントが選択できます ([Firefox bug 2072616](https://bugzil.la/2072616))。

#### Marionette

- `WebDriver:TakeScreenshot` コマンドを、取得した画像の幅または高さが 0 であった場合に `unable to capture screen` エラーが返るように修正しました ([Firefox bug 1492357](https://bugzil.la/1492357))。

### その他

- [JPEG XL](/ja/docs/Web/Media/Guides/Formats/Image_types#jpeg_xl_image) 画像形式 (`image/jxl`) のサポートをデフォルトで有効にしました。JPEG XL は可逆圧縮、非可逆圧縮、透過、アニメーション、HDR をサポートするロイヤリティフリーのラスター画像形式です。また、既存の JPEG 画像をロスレスで変換することもできます ([Firefox bug 2065096](https://bugzil.la/2065096))。

## アドオン開発者向けの変更点一覧

- {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}} は、無効なホスト名が渡された場合に `false` を返すのではなくエラーが発生するようになりました ([Firefox bug 2066620](https://bugzil.la/2066620))。
- マニフェストで宣言した拡張機能のバージョンを返す [`runtime.getVersion()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getVersion) を追加しました ([Firefox bug 1992418](https://bugzil.la/1992418))。

## 実験的なウェブ機能

以下の機能は Firefox 158 で導入しましたが、デフォルトで無効です。
これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。
[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **`random()` CSS 関数**: `layout.css.random.enabled`

  {{cssxref("random")}} CSS 関数は、指定した範囲内のランダムな値を生成します。オプションとして、その範囲内でステップサイズを持つ値になるように制限することができます。省略可能な `<random-key>` 引数は、どの `random()` 関数がランダム値を共有するかを制御します。たとえば、要素やプロパティをまたいでランダム値を共有します ([Firefox bug 2071165](https://bugzil.la/2071165))。

- **`corner-shape` プロパティ**: `layout.css.corner-shape.enabled`

  {{cssxref("corner-shape")}} ショートハンドプロパティと、これを構成するロングハンドプロパティを Nightly でサポートしました。これらのプロパティは {{cssxref("corner-shape-value")}} キーワード値のいずれかまたは {{cssxref("superellipse")}} 関数を使用して、角の形状をカスタマイズできます ([Firefox bug 2070927](https://bugzil.la/2070927))。

- **モジュールの遅延評価** (Nightly): `javascript.options.experimental.defer_import_eval`

  [`import defer`](/ja/docs/Web/JavaScript/Reference/Statements/import/defer) 宣言および [`import.defer()`](/ja/docs/Web/JavaScript/Reference/Operators/import/defer) 構文が、Nightly で設定によって使用可能になりました。これらはモジュールとその依存関係を事前に読み込みますが、エクスポートされたもののいずれかに初めてアクセスされたときにのみモジュールのコードが実行されます。このため、すぐに必要ないモジュールが起動を遅くすることがありません。ただし、トップレベルの `await` を使用するモジュールは引き続きすぐに実行されます ([Firefox bug 1952263](https://bugzil.la/1952263))。

- **端末上の音声認識**: `media.webspeech.recognition.enable`

  [端末上の音声認識](/ja/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#端末上の音声認識) を、デスクトップ版の Nightly に限りサポートしました。これによりクラウドサービスに依存することなく、[Web Speech API](/ja/docs/Web/API/Web_Speech_API) を通してブラウザーで直接音声認識を実行できます ([Firefox bug 2069803](https://bugzil.la/2069803))。

- **投機ルール: moderate の積極性**: `dom.speculation_rules.enabled`

  [投機ルール API](/ja/docs/Web/API/Speculation_Rules_API) は、リンクに対するユーザーの操作などの要因に基づいてどのリソースを事前取得あるいは事前描画するかを指定することで、将来のナビゲーションのパフォーマンスを向上させる仕組みを提供します。Firefox 158 Nightly では [`moderate`](/ja/docs/Web/HTML/Reference/Elements/script/type/speculationrules#moderate) 積極性をサポートしました。ユーザーがリンクに短時間 (既定値は 200 ミリ秒) ポインターを合わせると、該当する事前読み込みを開始します ([Firefox bug 2061013](https://bugzil.la/2061013))。

- **リクエストボディのストリーミング**: `dom.fetch.streaming_upload`

  Nightly に限り有効な機能で、(たとえば {{domxref("Request.Request", "Request()")}} コンストラクターや {{domxref("Window.fetch()")}} メソッドによって) リクエストボディとして {{domxref("ReadableStream")}} が設定できるようになりました。これによりボディ全体が使用可能になるまで待つ必要なく、アップロードの段階的なストリーミングが可能になります ([Firefox bug 1594633](https://bugzil.la/1594633))。

- **`CSSNumericValue.equals()`**: `layout.css.typed-om.enabled`

  [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API) の {{domxref("CSSNumericValue.equals()")}} メソッドを Nightly でサポートしました。これはメソッドに渡されたすべての値が、メソッドを呼び出した数値と同じである場合に `true`、それ以外の場合に `false` を返します。値は単位を変換せず、記述されたとおりに比較します。たとえば `1in` と `2.54cm` は異なる値であり、`calc(1px + 2px)` と `calc(2px + 1px)` も同様です ([Firefox bug 2074503](https://bugzil.la/2074503))。
