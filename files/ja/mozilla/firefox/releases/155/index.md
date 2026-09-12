---
title: Firefox 155 release notes for developers (Stable)
short-title: Firefox 155 (Stable)
slug: Mozilla/Firefox/Releases/155
l10n:
  sourceCommit: 1a1ae3db9b94004fef31e64cef0f27c6116356e2
---

このページでは、開発者に影響する Firefox 155 の変更点をまとめています。
Firefox 155 は、米国時間 [2026 年 9 月 1 日](https://whattrainisitnow.com/release/?version=155) にリリースされました。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [ルールビュー](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) のメディア特性エミュレーションボタンが専用のエミュレーションパネルに集約され、`@` ボタンを使用して開くようになりました。
  このパネルには {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} メディア特性のエミュレーションも追加しました ([Firefox bug 1692434](https://bugzil.la/1692434) および [Firefox bug 1477920](https://bugzil.la/1477920))。
- [JSON ビューワー](https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html) が [JSON Lines](https://jsonlines.org/) (NDJSON) ドキュメントを開くようになりました。これは `application/jsonl`、`application/jsonlines`、`application/x-ndjson`、`text/jsonl` あるいは `.jsonl` ファイル拡張子で提供されます。
  各行は個別に解析されてそれぞれが折りたたみ可能な項目になり、元の行番号がラベルとしてつきます。また、解析が失敗した行はドキュメントの残りに影響を与えることなく、インラインで報告します ([Firefox bug 2055774](https://bugzil.la/2055774)、[Firefox bug 2060972](https://bugzil.la/2060972)、[Firefox bug 2060529](https://bugzil.la/2060529))。
- [デバッガー](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) で、ブレークポイントを無効化するキーボードショートカットを追加しました ([Firefox bug 1642578](https://bugzil.la/1642578))。

### HTML

変更なし。

### CSS

- {{cssxref("attr")}} CSS 関数が、{{cssxref("content")}} に限らず任意の CSS プロパティで使用可能になりました。
  これにより JavaScript を使用することなく、`width: attr(data-size px)` のように HTML 属性からスタイルを設定できます。
  [`<attr-type>`](/ja/docs/Web/CSS/Reference/Values/attr#attr-type) の値 (`px` や `s` のような単位識別子を含む)、[フォールバック値](/ja/docs/Web/CSS/Reference/Values/attr#fallback-value)、[名前空間つき属性](/ja/docs/Web/CSS/Reference/Values/attr#namespaces) をサポートします。
  また、[コンテナースタイルクエリー](/ja/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#コンテナースタイルクエリー) の内部でも `attr()` を使用できます ([Firefox bug 2038940](https://bugzil.la/2038940))。
- {{cssxref("progress")}} CSS 関数をサポートしました。
  これは、ある値が開始値と終了値の間でどの程度進行したかを表す {{cssxref("number")}} を返します。
  この結果は、たとえば `opacity: calc(0.4 + progress(100cqw, 300px, 900px) * 0.6)` のように、ほかの値を計算することにも使用できます ([Firefox bug 2047345](https://bugzil.la/2047345))。
- {{cssxref("color_value/alpha", "alpha()")}} CSS 関数をサポートしました。
  これにより色を渡すことで、ほかの色の成分を変更せずにアルファ値 (透過度) が異なる色を取得できます。
  関数の内部では、たとえば `alpha(from var(--brand) / calc(alpha * 0.5))` のように、元の色のアルファチャネルを参照するために `alpha` キーワードを使用できます ([Firefox bug 2059738](https://bugzil.la/2059738) および [Firefox bug 2059988](https://bugzil.la/2059988))。
- {{cssxref("font-width")}} CSS プロパティを、{{cssxref("@font-face")}} 記述子の {{cssxref("@font-face/font-width", "font-width")}} および `CSSStyleDeclaration.fontWidth` プロパティとともにサポートしました。
  これは {{cssxref("font-stretch")}} プロパティの新しい名称であり、font-stretch は旧称のエイリアスとして機能し続けます。
  計算されたスタイルの列挙では、`font-stretch` ではなく `font-width` が返るようになったことに注意してください ([Firefox bug 1911075](https://bugzil.la/1911075))。

### JavaScript

- [TC39 の await dictionary 提案](https://github.com/tc39/proposal-await-dictionary) で定義された {{jsxref("Promise.allKeyed()")}} および {{jsxref("Promise.allSettledKeyed()")}} 静的メソッドをサポートしました。
  これらはイテラブルに代わってプロミスのオブジェクトを受け取ることを除いて、それぞれ {{jsxref("Promise.all()")}} および {{jsxref("Promise.allSettled()")}} と同様に動作します。これらは同じキーを持つオブジェクトで履行するため、位置の代わりに名前によって結果を読み取ることができます ([Firefox bug 2057270](https://bugzil.la/2057270))。
- ネットワークエラーや誤った [MIME タイプ](/ja/docs/Web/HTTP/Guides/MIME_types) のために読み込みが失敗した [モジュール](/ja/docs/Web/JavaScript/Guide/Modules) が失敗としてキャッシュされなくなり、サーバーが復旧すると同じモジュール指定子による再インポートが成功します。
  これは JavaScript、[JSON](/ja/docs/Web/JavaScript/Reference/Statements/import/with#json_modules_type_json)、[CSS](/ja/docs/Web/JavaScript/Reference/Statements/import/with#css_modules_type_css)、[テキスト](/ja/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) の各モジュールに対して、ウィンドウとワーカーの両方で、静的および [動的インポート](/ja/docs/Web/JavaScript/Reference/Operators/import) 双方に適用されます。
  これに関連して、[`<link rel="modulepreload">`](/ja/docs/Web/HTML/Reference/Attributes/rel/modulepreload) で、取得済みまたは取得中のモジュールに対して {{domxref("HTMLElement/error_event", "error")}} ではなく {{domxref("HTMLElement/load_event", "load")}} イベントが発生するようになりました。またモジュールスクリプトが、以前に同じ URL での `modulepreload` が [完全性の検証](/ja/docs/Web/Security/Defenses/Subresource_Integrity) に失敗した場合でも読み込まれるようになりました ([Firefox bug 2055211](https://bugzil.la/2055211) および [Firefox bug 2052949](https://bugzil.la/2052949))。

### HTTP

- Firefox が、接続を確立する際に [Happy Eyeballs version 3](https://datatracker.ietf.org/doc/html/draft-ietf-happy-happyeyeballs-v3) を使用するようになりました。到達不能なアドレスファミリーによって接続開始が遅れないようにするため、IPv6 と IPv4 のアドレスを競争させます。
  現在は一部のプラットフォームに限りサポートしていることに注意してください ([Firefox bug 2062892](https://bugzil.la/2062892))。
- {{glossary("QUIC")}} バージョンのネゴシエーションをサポートして、{{glossary("HTTP_3", "HTTP/3")}} 接続で QUIC バージョン 2 をネゴシエーションできるようになりました ([Firefox bug 2059947](https://bugzil.la/2059947))。

### API

- いくつかの [ウェブトランスポート API](/ja/docs/Web/API/WebTransport_API) の機能をサポートしました:
  - 送信グループは帯域幅を共有すべきストリームをグループ化して、グループ内でストリームの相対的な優先度を設定できます。
    グループは {{domxref("WebTransport.createSendGroup()")}} を使用して作成できます。そして返された {{domxref("WebTransportSendGroup")}} を、{{domxref("WebTransport.createBidirectionalStream()")}} または {{domxref("WebTransport.createUnidirectionalStream()")}} の `sendGroup` オプションに渡します ([Firefox bug 2007165](https://bugzil.la/2007165))。
  - `WebTransport.exportKeyingMaterial()` メソッドは、指定したラベルまたはコンテキストの基盤となる TLS 接続からキーマテリアルを取得して、両方のエンドポイントが同一の共有シークレットを入手できるようにします。
    これにより、たとえばアプリケーションが自己署名証明書のみ持つピアへ接続する場合に、アプリケーションレベルのハンドシェイクで中間者攻撃を検出できるようになります ([Firefox bug 2007200](https://bugzil.la/2007200))。
  - {{domxref("WebTransportDatagramDuplexStream.createWritable()")}} メソッドは、データグラムを送信するための {{domxref("WebTransportDatagramsWritable")}} ストリームを返します。このストリームはほかの送信者に対する優先度を設定するための {{domxref("WebTransportDatagramsWritable.sendGroup", "sendGroup")}} および {{domxref("WebTransportDatagramsWritable.sendOrder", "sendOrder")}} プロパティがあります ([Firefox bug 2007174](https://bugzil.la/2007174))。
  - {{domxref("WebTransport.WebTransport", "WebTransport()")}} コンストラクターは、クライアントがサポートするアプリケーションプロトコルを一覧化する [`protocols`](/ja/docs/Web/API/WebTransport/WebTransport#protocols) オプションを受け入れます。
    サーバーが選択したプロトコルがある場合は、接続が確立して {{domxref("WebTransport.ready")}} プロトコルが履行状態になったときに、{{domxref("WebTransport.protocol")}} プロパティによって返されます ([Firefox bug 2007150](https://bugzil.la/2007150))。
  - {{domxref("WebTransport.draining")}} プロパティは、サーバーがクライアントに対してセッションのグレースフルシャットダウンを開始するように要求したタイミングを示します ([Firefox bug 2007160](https://bugzil.la/2007160))。
- [WebGPU API](/ja/docs/Web/API/WebGPU_API) が、デスクトップ環境で [`dual-source-blending`](/ja/docs/Web/API/GPUSupportedFeatures#available_features) 機能をサポートしました。これは {{domxref("GPUAdapter.requestDevice()")}} で要求できます。
  これにより {{domxref("GPUDevice.createRenderPipeline", "createRenderPipeline()")}} および {{domxref("GPUDevice.createRenderPipelineAsync", "createRenderPipelineAsync()")}} の [`srcFactor`](/ja/docs/Web/API/GPUDevice/createRenderPipeline#srcfactor) および [`dstFactor`](/ja/docs/Web/API/GPUDevice/createRenderPipeline#dstfactor) プロパティで `src1`、`one-minus-src1`、`src1-alpha`、`one-minus-src1-alpha` を指定できます。WGSL の `dual_source_blending` 拡張もサポートしました ([Firefox bug 1924328](https://bugzil.la/1924328))。

#### DOM

- {{domxref("SVGAElement")}} インターフェイスに [`HyperlinkElementUtils`](https://html.spec.whatwg.org/multipage/links.html#hyperlinkelementutils) ミックスインを実装しました。この結果、SVG の {{SVGElement("a")}} 要素は HTML の {{HTMLElement("a")}} 要素と同じ URL コンポーネントのプロパティを公開します: {{domxref("SVGAElement.protocol", "protocol")}}、{{domxref("SVGAElement.username", "username")}}、{{domxref("SVGAElement.password", "password")}}、{{domxref("SVGAElement.host", "host")}}、{{domxref("SVGAElement.hostname", "hostname")}}、{{domxref("SVGAElement.port", "port")}}、{{domxref("SVGAElement.pathname", "pathname")}}、{{domxref("SVGAElement.search", "search")}}、{{domxref("SVGAElement.hash", "hash")}}。読み取り専用の {{domxref("SVGAElement.origin", "origin")}} プロパティも公開されます ([Firefox bug 2058578](https://bugzil.la/2058578))。
- {{domxref("SVGNumberList")}}、{{domxref("SVGPointList")}}、{{domxref("SVGStringList")}}、{{domxref("SVGTransformList")}} インターフェイスでインデックスつきセッターをサポートしました。これにより {{domxref("SVGTransformList.replaceItem", "replaceItem()")}} を呼び出す代わりに、`transformList[0] = newTransform` のような角括弧表記を使用してリスト内の項目を置き換えできます。
  {{domxref("SVGLengthList")}} インターフェイスは、すでにインデックスつきセッターをサポートしています ([Firefox bug 2059426](https://bugzil.la/2059426))。
- {{domxref("SVGGraphicsElement.getBBox()")}} メソッドが、`fill`、`stroke`、`markers`、`clipped` プロパティを持つ [`options`](/ja/docs/Web/API/SVGGraphicsElement/getBBox#options) 引数を尊重するようになりました。
  これにより要素の塗りつぶし形状だけでなく、要素に適用したストローク、マーカー、クリッピングを考慮したバウンディングボックスを取得できます ([Firefox bug 2060873](https://bugzil.la/2060873))。
- {{svgelement("mask")}}、{{svgelement("clipPath")}}、{{svgelement("marker")}}、{{svgelement("symbol")}}、{{svgelement("defs")}} の内部の要素などの描画されない要素は、描画されなかったボックスを報告するのではなく、{{domxref("Element.getBoundingClientRect()")}} から空の矩形を、また {{domxref("Element.getClientRects()")}} から空のリストを返すようになりました ([Firefox bug 2061646](https://bugzil.la/2061646))。

#### Media、WebRTC、Web Audio

- {{domxref("RTCDataChannel")}} オブジェクトで発生する {{domxref("RTCDataChannel/error_event", "error")}} イベントが、トランスポートがエラーによって閉じられた場合に自身の {{domxref("RTCError.errorDetail", "error.errorDetail")}} プロパティで [`sctp-failure`](/ja/docs/Web/API/RTCError/errorDetail#sctp-failure) を報告するようになりました。
  さらに、{{domxref("RTCError")}} および {{domxref("RTCErrorEvent")}} が専用ワーカーで使用可能になりました (この公開はまだ仕様書に含まれていません) ([Firefox bug 1814460](https://bugzil.la/1814460))。
- {{domxref("RTCPeerConnection.sctp")}} プロパティが、仕様で求められているタイミングで {{domxref("RTCSctpTransport")}} を返すようになりました。これは、以前は `null` であった `have-remote-offer` シグナリング状態を含みます。
  また、トランスポートは `connected` および `closed` 状態にも到達するようになり、その {{domxref("RTCSctpTransport.maxChannels", "maxChannels")}} および {{domxref("RTCSctpTransport.maxMessageSize", "maxMessageSize")}} プロパティが正しく設定されるようになりました ([Firefox bug 2019361](https://bugzil.la/2019361)、[Firefox bug 2056412](https://bugzil.la/2056412))。
- RTP の 2 バイトヘッダー拡張をサポートしました。ID が 15 以上のヘッダー拡張で `OperationError` が発生することなくネゴシエーション可能になりました ([Firefox bug 2014357](https://bugzil.la/2014357))。
- {{domxref("RTCTransportStats.selectedCandidatePairChanges", "selectedCandidatePairChanges")}} プロパティが {{domxref("RTCTransportStats")}} で報告されるようになりました ([Firefox bug 2055911](https://bugzil.la/2055911))。
- {{domxref("RTCPeerConnection.getStats()")}} で返される `transport` 統計がネゴシエーションの前、言い換えると {{domxref("RTCPeerConnection.setLocalDescription()", "setLocalDescription()")}} より後でリモートデスクリプションが設定される前の状態でも正しく返されるようになりました。
  DTLS ハンドシェイクがロールを選択するまで、{{domxref("RTCTransportStats.dtlsRole", "dtlsRole")}} プロパティが `unknown` を報告するようになりました。以前は何も報告されませんでした ([Firefox bug 2053296](https://bugzil.la/2053296))。また {{domxref("RTCTransportStats.iceState", "iceState")}} プロパティが、接続性の確認がすでに進行中であると誤って示していた `checking` ではなく `new` から開始するようになりました ([Firefox bug 2053297](https://bugzil.la/2053297))。

### WebAssembly

- [compact import section](https://github.com/WebAssembly/compact-import-section) バイナリー形式拡張をサポートしました。これは、多くの [`import`](/ja/docs/WebAssembly/Reference/Definitions/import) 文があるモジュールのサイズを削減します ([Firefox bug 2062344](https://bugzil.la/2062344))。
- [wide arithmetic](https://github.com/WebAssembly/wide-arithmetic) 提案をサポートして、[`i64.add128`](/ja/docs/WebAssembly/Reference/Numeric/add128)、[`i64.sub128`](/ja/docs/WebAssembly/Reference/Numeric/sub128)、[`i64.mul_wide_s`](/ja/docs/WebAssembly/Reference/Numeric/mul_wide_s)、[`i64.mul_wide_u`](/ja/docs/WebAssembly/Reference/Numeric/mul_wide_u) 命令を追加しました。
  これらは 64 ビットのオペランドから 128 ビットの結果を生成します。以前は bignum や暗号ライブラリーなど、WebAssembly にコンパイルしたコードでのエミュレーションが必要でした ([Firefox bug 2062374](https://bugzil.la/2062374))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### 一般

- ダウンロードを開始する際に現在のドキュメントがフォーカスを失うことを防ぐため、ダウンロードパネルを無効化しました ([Firefox bug 2035439](https://bugzil.la/2035439))。
- macOS 以外のプラットフォームで、`Ctrl` キーを押下しながらダブルクリックしたときに `dblclick` イベントが発生するように Actions API を修正しました ([Firefox bug 2058556](https://bugzil.la/2058556))。

#### WebDriver BiDi

- Mozilla 固有の `moz:debugging` モジュールを、開発ツールと同一のネストされたイベントループ API に依存しないように更新しました。これにより、WebDriver BiDi と開発ツールを併用する際の競合を防ぎます ([Firefox bug 2041335](https://bugzil.la/2041335))。
- フレームに対して使用した `browsingContext.reload` コマンドが失敗する不具合を修正しました ([Firefox bug 2030909](https://bugzil.la/2030909))。
- `session.unsubscribe` コマンドの引数 `contexts` のサポートを削除しました。今後、クライアントはイベント名またはサブスクリプション ID によってのみサブスクライブを解除できます ([Firefox bug 1988723](https://bugzil.la/1988723))。

## 実験的なウェブ機能

以下の機能は Firefox 155 で導入しましたが、デフォルトで無効です。
これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。
[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **スクロール駆動アニメーション**: `layout.css.scroll-driven-animations.enabled`

  [スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations) は、時間ではなくスクローラーの位置またはスクローラー内の要素の位置によってアニメーションを進行できます。
  この設定は {{cssxref("scroll-timeline")}} および {{cssxref("view-timeline")}} プロパティと、{{cssxref("view-timeline-inset")}} プロパティを含むこれらのロングハンドプロパティ、{{cssxref("animation-timeline/scroll", "scroll()")}} および {{cssxref("animation-timeline/view", "view()")}} 関数表記が対象です。
  このリリースでは `view-timeline-inset` ロングハンドプロパティを `view-timeline` ショートハンドプロパティに追加しました ([Firefox bug 2046602](https://bugzil.la/2046602))。

- **CSS 型付きオブジェクトモデル Level 1**: `layout.css.typed-om.enabled`

  [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API) は CSS の値を文字列ではなく型付き JavaScript オブジェクトとして公開することにより、スクリプトによる CSS プロパティの操作を簡素化します ([Firefox bug 1278697](https://bugzil.la/1278697))。

- **`at-rule()` サポート確認**: `layout.css.supports.at-rule.enabled`

  {{cssxref("@supports")}} アットルールの内の [`at-rule()`](/ja/docs/Web/CSS/Reference/At-rules/@supports#at-rule) 関数により、指定した CSS アットルールをブラウザーがサポートしているかを確認できます (例: `@supports at-rule(@scope)`) ([Firefox bug 2060754](https://bugzil.la/2060754))。

- **オーディオセッション API**: `dom.audio_session.enabled`

  [オーディオセッション API](/ja/docs/Web/API/Audio_Session_API) は、サイトの音声がデバイスで再生されている別の音声に対してどのように振る舞うべきかについて、ほかの音声とのミックス、ダッキング、中断といった設定ができます ([Firefox bug 2055710](https://bugzil.la/2055710))。

- **CSS 基本図形で `farthest-corner` および `closest-corner` キーワードを使用可能**: `layout.css.ellipse-corners.enabled`

  {{cssxref("basic-shape/ellipse", "ellipse()")}} および {{cssxref("basic-shape/circle", "circle()")}} CSS 基本図形の半径の値を指定するために、`farthest-corner` および `closest-corner` キーワードが使用可能になりました ([Firefox bug 2037673](https://bugzil.la/2037673))。

- **`line-clamp` によるコンテンツの切り詰め**: `layout.css.line-clamp.enabled`

  {{cssxref("line-clamp")}} CSS プロパティが `-webkit-` ベンダー接頭辞なしで動作します。また、テキストを切り詰めた場所に表示する内容を選択する `no-ellipsis` キーワードおよび `<string>` 値をサポートしました ([Firefox bug 2042999](https://bugzil.la/2042999)、[Firefox bug 2043000](https://bugzil.la/2043000))。

- **スコープつきカスタム要素レジストリー**: `dom.scoped-custom-element-registries.enabled`

  {{domxref("CustomElementRegistry")}} を構築して {{domxref("Element.attachShadow()")}} に渡すことが可能になり、グローバルレジストリーで定義されたものと衝突しないカスタム要素をシャドウルートが定義できます ([Firefox bug 2018900](https://bugzil.la/2018900))。
  このリリースでは `customelementregistry` グローバル属性も追加しました。これは、要素を関連づけるレジストリーをマークアップから選択します ([Firefox bug 2029965](https://bugzil.la/2029965))。

- **正規表現のバッファー境界アサーション**: (Nightly 限定) `javascript.options.experimental.regexp_buffer_boundaries`

  [TC39 RegExp buffer boundaries 提案](https://github.com/tc39/proposal-regexp-buffer-boundaries) は、[`\A`、`\z`、`\Z` アサーション](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) を正規表現に追加します。これらは {{jsxref("RegExp/multiline", "m")}} フラグが設定されているかに関係なく、入力全体の先頭または末尾に一致します ([Firefox bug 2047706](https://bugzil.la/2047706))。

- **`background-clip` の値 `border-area`**: `layout.css.background-clip.border-area.enabled`

  {{cssxref("background-clip")}} CSS プロパティの値 [`border-area`](/ja/docs/Web/CSS/Reference/Properties/background-clip#border-area) は、背景を要素のボーダーによって描画される領域によって切り抜きます。これによりグラデーションや画像をボーダーとして使用できます ([Firefox bug 2045230](https://bugzil.la/2045230))。

- **`view-timeline` が `view-timeline-inset` を包含**: `layout.css.scroll-driven-animations.enabled`

  {{cssxref("view-timeline")}} ショートハンドプロパティで {{cssxref("view-timeline-inset")}} プロパティをサポートしました。このショートハンドプロパティはビューの進行タイムラインの位置を調整するために、開始値や終了値のインセット (またはオフセット) を指定できます ([Firefox bug 2046602](https://bugzil.la/2046602))。
