---
title: Firefox 159 release notes for developers (Stable)
short-title: Firefox 159 (Stable)
slug: Mozilla/Firefox/Releases/159
l10n:
  sourceCommit: 521fe7795f4dbfa723d800a94884d7608fa0e17e
---

このページでは、開発者に影響する Firefox 159 の変更点をまとめています。
Firefox 159 は、米国時間 [2026 年 10 月 27 日](https://whattrainisitnow.com/release/?version=159) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### CSS

- [スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations) をデフォルトで有効にしました。これにより、デフォルトの時間ベースの文書タイムラインではなく、スクロールベースのタイムラインに沿って (すなわち、スクロールコンテナーのスクロールによって) プロパティの値のアニメーションを実行できます ([Firefox bug 1324602](https://bugzil.la/1324602))。

#### 廃止

- 従来の組積レイアウトの構文を削除しました。具体的には {{cssxref("grid-template-columns")}} および {{cssxref("grid-template-rows")}} プロパティの `masonry` 値、および `masonry-auto-flow` プロパティです。この構文は Nightly に限り、設定項目 `layout.css.grid-template-masonry-value.enabled` によって有効化していました。これは {{cssxref("display")}} プロパティの `grid-lanes` および `inline-grid-lanes` 値を使用する、[グリッドレーンレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout/Grid_lanes) に置き換えられました ([Firefox bug 2077170](https://bugzil.la/2077170))。

### JavaScript

変更なし。

### API

- {{domxref("Element.setHTML()")}} などの [HTML Sanitizer API](/ja/docs/Web/API/HTML_Sanitizer_API) で HTML をサニタイズするメソッドが、はじめにすべてのマークアップを解析して後から結果の DOM ツリーをクリーンアップするのではなく、マークアップを解析しながら不要な要素や属性を削除するようになりました。結果は同じですが、隣接するテキストが複数のテキストノードに分割されるのではなく、1 つのテキストノードになることが異なります ([Firefox bug 2070498](https://bugzil.la/2070498))。
- [WebGL](/ja/docs/Web/API/WebGL_API) の {{domxref("EXT_clip_control")}} 拡張が、グラフィックドライバーがサポートするデバイスで使用可能になりました。この拡張の {{domxref("EXT_clip_control.clipControlEXT()", "clipControlEXT()")}} メソッドは、クリップ空間の座標をウィンドウ座標にマッピングする方法を変更します。クリップ原点を左上隅に移動する、および正規化デバイス座標の深度範囲をデフォルトの -1 から 1 ではなく 0 から 1 に設定することで、Direct3D や WebGPU の規約に合わせることができます。また、0 から 1 の深度範囲によりリバース Z の技術が有効になり、浮動小数点数の深度バッファーで深度の精度が向上します ([Firefox bug 1885031](https://bugzil.la/1885031))。
- [WebGL](/ja/docs/Web/API/WebGL_API) の {{domxref("EXT_texture_mirror_clamp_to_edge")}} 拡張が、グラフィックドライバーがサポートするデバイスで使用可能になりました。この拡張は `MIRROR_CLAMP_TO_EDGE_EXT` テクスチャラッピングモードを追加します。-1 から 0 のテクスチャ座標は、テクスチャの鏡像をサンプリングします。また、-1 未満または 1 を超える座標ではテクスチャの端にクランプします。これによりグローなどの対称的な画像を、その半分のみを含むテクスチャとして保存できます ([Firefox bug 1908749](https://bugzil.la/1908749))。
- [WebGL 2](/ja/docs/Web/API/WebGL2RenderingContext) の {{domxref("EXT_texture_norm16")}} 拡張が、グラフィックドライバーが 16 ビット正規化形式をサポートするデバイスにおいてデフォルトで有効になりました。これは 16 ビット正規化テクスチャおよびレンダーバッファー形式を追加して、標高マップや医療画像などのデータを 8 ビット形式より高精度で保存できます ([Firefox bug 1735401](https://bugzil.la/1735401))。

#### DOM

- [スコープ付きカスタム要素レジストリー](/ja/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) をサポートしました。これはシャドウツリーが、特定の DOM サブツリーにのみ定義が適用される、独立した {{domxref("CustomElementRegistry")}} を作成できます。これにより複数のウェブコンポーネントが、同じ名前の要素を宣言するときの競合を避けることができます。`customElementRegistry` プロパティは {{domxref("Document")}}、{{domxref("Element")}}、{{domxref("ShadowRoot")}} で使用できます。[`CustomElementRegistry()` コンストラクター](/ja/docs/Web/API/CustomElementRegistry/CustomElementRegistry) は、スコープ付きで使用するための新しい `CustomElementRegistry` オブジェクトを作成します ([Firefox bug 2070506](https://bugzil.la/2070506))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### 一般

- 推奨設定がユーザー設定値ではなく既定値として設定されるようになったため、異常終了後に `prefs.js` へ残ることがなくなりました ([Firefox bug 2074275](https://bugzil.la/2074275))。
- `--remote-allow-system-access` コマンドライン引数を削除しました。代わりに、システムへのアクセスを有効化するには `MOZ_REMOTE_ALLOW_SYSTEM_ACCESS` 環境変数を `1` に設定してください ([Firefox bug 2054896](https://bugzil.la/2054896))。
- エラーによるタイムアウトの後も、内部のポーリング処理がシャットダウンまで動作し続けることによるメモリーリークを修正しました。これはさまざまなコマンド (たとえば WebDriver BiDi の `browsingContext.traverseHistory` など) に影響を与える可能性がありました ([Firefox bug 2079758](https://bugzil.la/2079758))。

#### WebDriver BiDi

- クライアントが CSS メディア特性の値を上書きできるようにする `emulation.setMediaFeaturesOverride` コマンドを実装しました。現在は [`prefers-color-scheme`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) のみサポートしています ([Firefox bug 2064354](https://bugzil.la/2064354))。
- Firefox 固有の拡張機能のための [機械可読 CDDL (Concise Data Definition Language) ファイル](https://searchfox.org/firefox-main/rev/2d5c2a4eb5d99a92249ec13370b1de9c1a77c0f8/remote/webdriver-bidi/cddl/Fields.cddl) を WebDriver BiDi に追加しました ([Firefox bug 2057588](https://bugzil.la/2057588))。

## 実験的なウェブ機能

以下の機能は Firefox 159 で導入しましたが、デフォルトで無効です。
これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。
[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **CSS 数値ファクトリー関数をワーカーおよびワークレットで公開**: `layout.css.namespace.exposed-in-workers-and-worklets`

  `CSS.px()` などの {{domxref("CSS")}} 名前空間の [数値ファクトリー関数](/ja/docs/Web/API/CSS/factory_functions_static) が、`Window` だけでなくワーカーやペイントワークレットでも公開されました。これらは [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API) の一部であるため、Nightly 以外では設定項目 `layout.css.typed-om.enabled` を `true` に設定することが必要です ([Firefox bug 2079188](https://bugzil.la/2079188))。

- **`MathMLAnchorElement` の新たなプロパティ**: `mathml.a.element.enabled`

  {{domxref("MathMLAnchorElement")}} インターフェイスで {{domxref("MathMLAnchorElement.download", "download")}}、{{domxref("MathMLAnchorElement.ping", "ping")}}、{{domxref("MathMLAnchorElement.rel", "rel")}}、{{domxref("MathMLAnchorElement.relList", "relList")}}、{{domxref("MathMLAnchorElement.referrerPolicy", "referrerPolicy")}} プロパティをサポートしました ([Firefox bug 2064612](https://bugzil.la/2064612))。
