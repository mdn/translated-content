---
title: Firefox 161 release notes for developers (Stable)
short-title: Firefox 161 (Stable)
slug: Mozilla/Firefox/Releases/161
l10n:
  sourceCommit: 5b678632840c829c7f0ac157372e46cfcb60bc91
---

このページでは、開発者に影響する Firefox 161 の変更点をまとめています。
Firefox 161 は、米国時間 [2026 年 11 月 24 日](https://whattrainisitnow.com/release/?version=161) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### SVG

- {{SVGElement("image")}}、{{SVGElement("script")}}、{{SVGElement("feImage")}} 要素の [`referrerpolicy`](/ja/docs/Web/SVG/Reference/Attribute/referrerpolicy) 属性と、対応する {{domxref("SVGImageElement.referrerPolicy")}}、{{domxref("SVGScriptElement.referrerPolicy")}}、{{domxref("SVGFEImageElement.referrerPolicy")}} プロパティをサポートしました。
  これらは、要素が `href` 属性で参照されたリソースを取得するときに、{{HTTPHeader("Referer")}} ヘッダーで送信するリファラー情報の量を制御します。これは HTML の {{HTMLElement("img")}} および {{HTMLElement("script")}} 要素の `referrerpolicy` 属性と同じように機能します ([Firefox bug 2079321](https://bugzil.la/2079321))。

### CSS

- {{cssxref("random")}} CSS 関数をサポートしました。これは指定した範囲内のランダムな数を生成します。また必要に応じて、取り得る値を指定された増分の間隔の値に制限することもできます。省略可能な `<random-key>` 引数を使用すると、たとえば異なる要素や異なるプロパティに渡って、`random()` 関数でランダムなベース値を共有できます ([Firefox bug 2072252](https://bugzil.la/2072252))。
- {{cssxref("var")}}、{{cssxref("attr")}}、{{cssxref("env")}} CSS 関数の第 1 引数が、入れ子になった関数を受け入れるようになりました。たとえば、`var(attr(data-theme-prop type(<custom-ident>)))` や `env(var(--safe-area-block-start))` をサポートします ([Firefox bug 2080511](https://bugzil.la/2080511))。

### JavaScript

変更なし。

### HTTP

- [圧縮辞書転送](/ja/docs/Web/HTTP/Guides/Compression_dictionary_transport) をサポートしました。サーバーは {{httpheader("Use-As-Dictionary")}} ヘッダーを使用して、レスポンスを辞書として示すことができます。そして、ブラウザーは一致するリクエストの {{httpheader("Available-Dictionary")}} ヘッダーに保存された辞書を列挙して、サーバーは `dcb` (Brotli) または `dcz` (Zstandard) の {{httpheader("Content-Encoding")}} 値を使用して、その辞書で圧縮されたレスポンスを返すことができます。これは JavaScript バンドルなど、バージョン間の変更が少ないリソースのサイズを大幅に削減できます ([Firefox bug 2039320](https://bugzil.la/2039320))。

### API

- `WebTransport` インターフェイスの {{domxref("WebTransport.anticipatedConcurrentIncomingUnidirectionalStreams", "anticipatedConcurrentIncomingUnidirectionalStreams")}} および {{domxref("WebTransport.anticipatedConcurrentIncomingBidirectionalStreams","anticipatedConcurrentIncomingBidirectionalStreams")}} プロパティと、{{domxref("WebTransport/WebTransport", "WebTransport()")}} コンストラクターでこれらを設定するために対応する `options` プロパティをサポートしました。
  これらのプロパティはそれぞれ、サーバーが同時に開いているとアプリケーションが想定する、単方向の受信ストリームおよび双方向ストリームの最大数を表します ([Firefox bug 2007825](https://bugzil.la/2007825))。
- [クリップボード API](/ja/docs/Web/API/Clipboard_API) で [独自のクリップボード形式](/ja/docs/Web/API/Clipboard_API#独自のクリップボード形式) をサポートしました。これによりウェブアプリが {{domxref("Clipboard.write()")}} および {{domxref("Clipboard.read()")}} を使用して、独自のデータ形式で書き込みや読み取りができます。
  独自の形式は `"web text/x-my-format"` のように、`"web "` を接頭辞とする MIME タイプです。
  独自形式は、データを書き込んだページと同一オリジンのページでのみ読み取りできます ([Firefox bug 2053725](https://bugzil.la/2053725)、[Firefox bug 2086505](https://bugzil.la/2086505))。
- [ナビゲーション API](/ja/docs/Web/API/Navigation_API) の {{domxref("NavigationTransition.to")}} プロパティをサポートしました。
  これは進行中のナビゲーションの {{domxref("NavigationDestination")}} を返すため、{{domxref("Navigation/navigate_event", "navigate")}} イベントハンドラーの外部のコードでもナビゲーション先を把握できます。
  たとえば {{domxref("Navigation/navigateerror_event", "navigateerror")}} ハンドラーでこのプロパティを使用して、どのナビゲーションが失敗したかを報告できます ([Firefox bug 1991959](https://bugzil.la/1991959))。
- [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API) をサポートしました。
  これによりスクリプトは、たとえば {{domxref("Element.computedStyleMap()")}} や {{domxref("HTMLElement.attributeStyleMap")}} によって、CSS の値を文字列ではなく型付き JavaScript オブジェクトとして読み書きできます。
  `CSSColorValue` や `CSSRGB` といった色の値のインターフェイスは、Firefox およびほかのブラウザーでも未サポートです ([Firefox bug 2089681](https://bugzil.la/2089681))。

#### Media、WebRTC、Web Audio

- {{domxref("RTCRtpSender.setParameters()")}} メソッドで、省略可能な引数 [`setParameterOptions`](/ja/docs/Web/API/RTCRtpSender/setParameters#setparameteroptions) をサポートしました。
  これは `active` や `scaleResolutionDownBy` といった送信側のエンコードパラメーターの変更に使用するものと同じ呼び出しで、キーフレームの生成をエンコーダーに要求できます。これにより、受信側は変更後にキーフレームを要求することを避けられます ([Firefox bug 2057265](https://bugzil.la/2057265))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- `script.callFunction` コマンドを、入れ子になった値を含めて未知の `type` のローカル値が引数または `this` の値に含まれている場合に、`invalid argument` エラーを返すように更新しました。以前は、このような値が暗黙的に `undefined` へ置き換えられていました ([Firefox bug 2084105](https://bugzil.la/2084105))。
- `script.evaluate` および `script.callFunction` コマンドを、`userActivation: false` を指定して呼び出した場合に既存のユーザーアクティベーションフラグをクリアしないように更新しました ([Firefox bug 2084107](https://bugzil.la/2084107))。
- `browsingContext.navigate` および `browsingContext.reload` コマンドで、前の文書が読み込み中であるときにナビゲーションを開始すると、ハングアップまたは誤ったエラーで失敗する場合がある不具合を修正しました ([Firefox bug 2088640](https://bugzil.la/2088640))。
- セッションの継続中に、`browsingContext.setViewport` コマンドを呼び出すたびに処理が遅くなるパフォーマンスの問題を修正しました ([Firefox bug 2084362](https://bugzil.la/2084362))。
- `network.continueRequest` コマンドを、すでにボディがあるリクエストのボディを置き換えるときに `Content-Length` ヘッダーも更新するように修正しました。以前は、切り詰められたり不完全であったりするボディをサーバーが受け取る可能性がありました ([Firefox bug 2088814](https://bugzil.la/2088814))。

## アドオン開発者向けの変更点一覧

## 実験的なウェブ機能

以下の機能は Firefox 161 で導入しましたが、デフォルトで無効です。
これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。
[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **`margin-trim` プロパティ**: `layout.css.margin-trim.enabled`

  {{cssxref("margin-trim")}} プロパティをブロックコンテナーでサポートして、Nightly においてデフォルトで有効化しました。これはコンテナーの始端、終端、またはその両方で子要素のブロック軸方向のマージンを除去する一方で、兄弟要素間のマージンは維持します ([Firefox bug 2051240](https://bugzil.la/2051240))。

- **文書間のビュー遷移** (Nightly): `dom.viewTransitions.cross-document.enabled`

  [文書間のビュー遷移](/ja/docs/Web/API/View_Transition_API/Using#基本的な_mpa_ビュー遷移) を、Nightly においてデフォルトで有効化しました。
  これにより、複数ページアプリケーションの同一オリジンでのページ遷移でアニメーションを使用できます ([Firefox bug 2084340](https://bugzil.la/2084340))。

- **レンダリングのブロック** (Nightly): `dom.element.blocking.enabled`

  {{HTMLElement("link",,"blocking")}}、{{HTMLElement("script",,"blocking")}}、{{HTMLElement("style",,"blocking")}} 要素の `blocking="render"` 属性を、Nightly においてデフォルトで有効化しました。
  これにより指定したスタイルシートの読み込みやスクリプトの実行が完了するまでレンダリングをブロックすることができるため、ページが初めにスタイル未適用や不完全な状態で表示されることがなくなります ([Firefox bug 2084340](https://bugzil.la/2084340))。

- **`quotes` の `match-parent` 値** (Nightly): `layout.css.quotes.match-parent.enabled`

  {{cssxref("quotes")}} CSS プロパティで {{cssxref("quotes", "match-parent", "#match-parent")}} 値をサポートしました。これにより要素は、親要素と同じ引用符ペアのセットから引用符を使用するようになります ([Firefox bug 1752382](https://bugzil.la/1752382))。

- **`text-autospace-size` プロパティ**: `layout.css.text-autospace-size.enabled`

  {{cssxref("text-autospace-size")}} プロパティをサポートして、Nightly においてデフォルトで有効化しました。これは、{{cssxref("text-autospace")}} が中国語/日本語/韓国語 (CJK) の文字と CJK 以外の文字の間に追加する空白の大きさを設定します ([Firefox bug 2086765](https://bugzil.la/2086765))。

- **`prefers-color-scheme` が `<meta name="color-scheme"> を反映`**: `layout.css.prefers-color-scheme.meta-tag.enabled`

  {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} メディア特性が、[`<meta name="color-scheme">`](/ja/docs/Web/HTML/Reference/Elements/meta/name/color-scheme) 要素で単一のカラースキームが指定されている場合に、宣言されたカラースキームを反映するようになりました。これにより、カラースキームに基づいた画像や動画の選択もより適切になります。また、テーマ切り替え機能の実装も容易になります。この設定は、Nightly においてデフォルトで有効です ([Firefox bug 2085572](https://bugzil.la/2085572))。
