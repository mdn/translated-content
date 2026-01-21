---
title: Firefox 147 release notes for developers (Stable)
short-title: Firefox 147 (Stable)
slug: Mozilla/Firefox/Releases/147
l10n:
  sourceCommit: ac9837e832790fa4aa676dfef322ffa228599378
---

このページでは、開発者に影響する Firefox 147 の変更点をまとめています。
Firefox 147 は、米国時間 [2026 年 1 月 13 日](https://whattrainisitnow.com/release/?version=147) にリリースされました。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- インスペクターの HTML ペインで [擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements) ({{cssxref("::before")}} や {{cssxref("::after")}} など) を選択したとき、CSS ペインで対応するセレクターを編集できるようになりました ([Firefox bug 1998704](https://bugzil.la/1998704))。
- ビュー遷移の間に、{{cssxref("::view-transition")}} 擬似要素を要素ビューに表示するようになりました ([Firefox bug 1996608](https://bugzil.la/1996608))。
- ビュー遷移の間に、関連づけられたアニメーションをアニメーションパネルに表示するようになりました ([Firefox bug 1995296](https://bugzil.la/1995296))。
- 要素ビューで、有効な {{cssxref("anchor-name")}} を持つ要素に 'anchor' バッジを表示するようになりました ([Firefox bug 1895196](https://bugzil.la/1895196))。
- 選択した要素に関連づけられた {{cssxref("@position-try")}} ルールを CSS ルールパネルに表示するようになりました ([Firefox bug 1895176](https://bugzil.la/1895176))。
- JSON ビューアーの新たなボタンを使用して、JSON ペイロードを Firefox Profiler にインポートできるようになりました。これは、リソースのサイズの詳細情報を提供します ([Firefox bug 1997209](https://bugzil.la/1997209))。

### HTML

変更なし。

### SVG

- SVG ファイルを [画像ソース](/ja/docs/Web/SVG/Guides/SVG_as_an_image) として使用する (たとえば {{htmlelement("img")}} 要素や CSS の {{cssxref("background-image")}} を使用してページに埋め込む) とき、SVG の URL で[メディアフラグメント](/ja/docs/Web/URI/Reference/Fragment/Media_fragments) をサポートしました ([Firefox bug 1999989](https://bugzil.la/1999989))。これは、以下のことを意味します:
  - SVG に [SMIL アニメーション](/ja/docs/Web/SVG/Guides/SVG_animation_with_SMIL) が含まれている場合に、特定の開始時間から特定の終了時間までアニメーションの一部を再生するために [時間的範囲](/ja/docs/Web/URI/Reference/Fragment/Media_fragments#temporal_dimension_fragment_syntax) の構文を使用できます。再生後はアニメーションが一時停止します。
  - SVG ドキュメントの特定の領域を表示するために [空間的寸法](/ja/docs/Web/URI/Reference/Fragment/Media_fragments#spatial_dimension_fragment_syntax) の構文を使用できます。

### CSS

- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning) をデフォルトで有効にしました ([Firefox bug 1988225](https://bugzil.la/1988225))。
  - バージョン 147 で値 [`anchor-center`](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) を追加しました。これは、アンカー位置指定した要素をアンカーの中央に配置するために便利な方法を提供します。この値は {{cssxref("align-items")}}、{{cssxref("align-self")}}、{{cssxref("justify-items")}}、{{cssxref("justify-self")}}、{{cssxref("place-items")}}、{{cssxref("place-self")}} プロパティで使用できます ([Firefox bug 1909339](https://bugzil.la/1909339))。
  - バージョン 147 で {{cssxref("position-anchor")}} の値 `none` を追加しました。これは [CSS アンカー](/ja/docs/Web/CSS/Guides/Anchor_positioning) とアンカーに位置指定された要素の間の、暗黙的または明示的な関連づけを削除できます ([Firefox bug 1999972](https://bugzil.la/1999972))。
- 互換性を高めるため、`-webkit-` 接頭辞をつけた {{cssxref("perspective")}} プロパティを単位がない値 (たとえば、`-webkit-perspective: 800`) でサポートしました ([Firefox bug 1362499](https://bugzil.la/1362499))。
- [ビュー遷移タイプ](/ja/docs/Web/API/View_Transition_API/Using_types) をサポートしました。これは、アクティブなビュー遷移にさまざまな**タイプ**を指定できる仕組みを提供します。これにより指定された遷移タイプに応じて、コンテンツを更新するときのアニメーションを CSS を使用して DOM 要素に適用できます。Firefox 147 では単一ページアプリケーション (SPA) のビュー遷移タイプのみサポートしており、ドキュメント間のビュー遷移タイプは未サポートです ([Firefox bug 2001878](https://bugzil.la/2001878))。
- {{cssxref("::marker")}} 擬似要素で {{cssxref("counter-increment")}}、{{cssxref("counter-reset")}}、{{cssxref("counter-set")}}、{{cssxref("quotes")}} プロパティをサポートしました ([Firefox bug 2000404](https://bugzil.la/2000404))。
- 以下の [ルート要素のフォントに対して相対的な長さの単位](/ja/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_root_elements_font) をサポートしました: `rcap`、`rch`、`rex`、`ric`。これらの単位は、[ルート](/ja/docs/Web/CSS/Reference/Selectors/:root) 要素の特定の文字のサイズやフォント属性をもとにした `<length>` の値を定義できます ([Firefox bug 1740584](https://bugzil.la/1740584))。

### JavaScript

- CSS モジュールスクリプトをサポートしました。これは [`import`](/ja/docs/Web/JavaScript/Reference/Statements/import) キーワードや `type="css"` を設定した [`type` import 属性](/ja/docs/Web/JavaScript/Reference/Statements/import/with) を使用して、{{domxref("CSSStyleSheet")}} のインスタンスとしてスタイルシートをスクリプトに読み込むことができます ([Firefox bug 1986681](https://bugzil.la/1986681))。
- {{jsxref("Iterator.concat()")}} メソッドをサポートしました。このメソッドは、反復可能な複数の入力を 1 つのシーケンスに結合した新たなイテレーターを作成できます ([Firefox bug 1986672](https://bugzil.la/1986672))。

### API

- {{domxref("Document.activeViewTransition")}} プロパティをサポートしました。これは、ドキュメントで現在アクティブな [ビュー遷移](/ja/docs/Web/API/View_Transition_API) を表す {{domxref("ViewTransition")}} のインスタンスを返します。これは後で使用するためにビュー遷移への参照を手動で保存する必要性がなく、任意のコンテキストでアクティブなビュー遷移へアクセスするための安定的な手段を提供します ([Firefox bug 2001836](https://bugzil.la/2001836))。
- [WebGPU API](/ja/docs/Web/API/WebGPU_API) のサポートを、Apple シリコンプロセッサーを搭載したデバイスで、すべてのバージョンの macOS に対して有効化しました (以前は macOS Tahoe のサポートのみ有効でした)。([Firefox bug 1993341](https://bugzil.la/1993341))
- [Navigation API](/ja/docs/Web/API/Navigation_API) をサポートしました。
  これは、ブラウザーのナビゲーションアクションを開始・遮断・管理する機能およびアプリケーションの履歴項目を操作する機能を提供します。これは {{domxref("History API", "", "", "nocode")}} や {{domxref("window.location")}} のような従来のウェブプラットフォームの機能の後継であり、従来の機能の短所を解決するとともに、特に {{glossary("SPA", "SPA (単一ページアプリケーション)")}} のニーズを対象にしています ([Firefox bug 1997962](https://bugzil.la/1997962))。
- [`CompressionStream`](/ja/docs/Web/API/CompressionStream/CompressionStream#brotli) および [`DecompressionStream`](/ja/docs/Web/API/DecompressionStream/DecompressionStream#brotli) の両方で Brotli 圧縮をサポートしました ([Firefox bug 1921583](https://bugzil.la/1921583))。
- サービスワーカーを ECMAScript [モジュールスクリプト](/ja/docs/Web/JavaScript/Guide/Modules) にすることが可能になりました。
  サービスワーカーモジュールを読み込むには、{{domxref("ServiceWorkerContainer.register()")}} を呼び出す際に [`type`](/ja/docs/Web/API/ServiceWorkerContainer/register#type) で `'module'` を指定します ([Firefox bug 1360870](https://bugzil.la/1360870))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### 一般

- 新しいセッションのレスポンスに、必須なプロパティである `setWindowRect` が含まれるように修正しました ([Firefox bug 1916522](https://bugzil.la/1916522))。

#### WebDriver BiDi

- `input.fileDialogOpened` イベントを実装しました。これは `type="file"` の input をクリックした後など、コンテンツページによってファイルピッカーが開かれたときに発生します ([Firefox bug 1855045](https://bugzil.la/1855045))。
- ブラウジングコンテキストまたはユーザーコンテキストのリストに対して、クライアントが画面の寸法をエミュレートすることを可能にする `emulation.setScreenSettingsOverride` コマンドを実装しました ([Firefox bug 2000651](https://bugzil.la/2000651))。
- `wait=none` を指定した `browsingContext.navigate` で、実際の移動先 URL が含まれない場合がある不具合を修正しました ([Firefox bug 2004191](https://bugzil.la/2004191))。
- `script.evaluate` および `script.callFunction` を、Content Security Policy (CSP) を迂回するように更新しました ([Firefox bug 1941780](https://bugzil.la/1941780))。
- `window.open` で作成した新たなブラウジングコンテキストで `script.realmCreated` イベントが発生しない不具合を修正しました ([Firefox bug 2002721](https://bugzil.la/2002721))。
- `emulation.setLocaleOverride` を、`Accept-Language` ヘッダーを上書きするように更新しました ([Firefox bug 1995691](https://bugzil.la/1995691))。
- `emulation.setLocaleOverride` を、引数 `locale` が `undefined` に等しい状態で呼び出した場合にエラーが発生するように更新しました ([Firefox bug 2003992](https://bugzil.la/2003992))。

#### Marionette

- Chrome ウィンドウにおける JSON シリアライゼーションの不具合を修正しました ([Firefox bug 2000801](https://bugzil.la/2000801))。

## アドオン開発者向けの変更点一覧

- Content Security Policy の記事の [Scripts from localhost](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#scripts_from_localhost) で説明しているとおり、一時的に読み込まれた Manifest バージョン 3 拡張機能が、localhost からスクリプトを読み込めるようになりました ([Firefox bug 1864284](https://bugzil.la/1864284))。

## 実験的なウェブ機能

このリリースで追加した実験的な機能はありません。
ほかのリリースの実験的な機能は [Firefox における実験的機能: CSS Anchor Positioning](/ja/docs/Mozilla/Firefox/Experimental_features#css_anchor_positioning) で確認してください。
