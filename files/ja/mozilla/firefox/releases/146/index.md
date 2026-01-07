---
title: Firefox 146 release notes for developers (Stable)
short-title: Firefox 146 (Stable)
slug: Mozilla/Firefox/Releases/146
l10n:
  sourceCommit: 30487c754854c3f21157827914eefb94d0e5bd4d
---

このページでは、開発者に影響する Firefox 146 の変更点をまとめています。
Firefox 146 は、米国時間 [2025 年 12 月 9 日](https://whattrainisitnow.com/release/?version=146) にリリースされました。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- インスペクターのルールビューで、表示しているルールセットで未使用の [CSS カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*) が 10 個以上宣言されているときに、それらのプロパティがデフォルトで非表示になります。これは雑然とした状態を軽減して、インスペクターのパネルのレンダリングが高速化する場合もあります。この状況で、ルールセットの末尾に表示される "カスタム CSS プロパティを表示" ボタンを押すと非表示のプロパティを表示できます ([Firefox bug 1719461](https://bugzil.la/1719461))。

### HTML

変更なし。

### MathML

- 右横書き (RTL) モードで演算子の鏡像化や伸縮を組み合わせたときに、正しく動作するようになりました ([Firefox bug 1994172](https://bugzil.la/1994172))。
- {{cssxref("math-shift")}} プロパティをサポートしました。これは MathML の数式で表示する上付き文字を通常表示するかコンパクトに表示するかを開発者が示せるプロパティであり、上付き文字を移動させる高さに影響を与えます ([Firefox bug 1994171](https://bugzil.la/1994171))。

### CSS

- {{cssxref("color_value/contrast-color()")}} 関数をサポートしました。この関数は [`<color>`](/ja/docs/Web/CSS/Reference/Values/color_value) の値を受け入れて、少なくとも [WCAG AA minimum contrast](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) に準拠する対照的な色を返します ([Firefox bug 1682439](https://bugzil.la/1682439))。

- [`<color>`](/ja/docs/Web/CSS/Reference/Values/color_value) データ型で `display-p3-linear` 色空間をサポートしました。この色空間は [`display-p3`](/ja/docs/Glossary/Color_space#display-p3) に似ていますが、線形光の伝達関数を使用してガンマエンコーディングを行わないという違いがあり、表示される色を高精度にできます ([Firefox bug 1996318](https://bugzil.la/1996318))。

- [`text-decoration-inset`](/ja/docs/Web/CSS/Reference/Properties/text-decoration-inset) プロパティをサポートしました。これは、要素の {{cssxref("text-decoration")}} の始端と終端を調節することができ、短縮・延伸、あるいは表示するテキストに対して位置を移動させることができます ([Firefox bug 1979915](https://bugzil.la/1979915)、[Firefox bug 1997157](https://bugzil.la/1997157)、[Firefox bug 1993043](https://bugzil.la/1993043))。

- {{cssxref("@scope")}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules) をデフォルトで有効にしました。これは特定の DOM サブツリー内の要素を選択することができ、上書きが困難な過度に具体的なセレクターを記述することなく、またセレクターを DOM 構造と過度に結びつけることなく、要素を正確に対象にします ([Firefox bug 1991105](https://bugzil.la/1991105))。

- WEB互換性を向上させるため、旧来の [`-webkit-fill-available`](/ja/docs/Web/CSS/Reference/Webkit_extensions#-webkit-prefixed_property_values) キーワードを CSS の {{cssxref("width")}} および {{cssxref("height")}} プロパティの値としてサポートしました。
  このキーワードは最近標準化された `stretch` キーワード (すなわち [`width: stretch`](/ja/docs/Web/CSS/Reference/Properties/width#stretch) および [`height: stretch`](/ja/docs/Web/CSS/Reference/Properties/height#stretch)) の別名であり、Firefox では未サポートでした ([Firefox bug 1988938](https://bugzil.la/1988938)、[Firefox bug 1789477](https://bugzil.la/1789477))。

### JavaScript

- {{jsxref("WeakMap")}} および {{jsxref("WeakSet")}} が、[登録されたもの](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル) を除く {{jsxref("Symbol")}} オブジェクトをキーとして受け入れるようになりました ([Firefox bug 1966745](https://bugzil.la/1966745))。

### API

- {{domxref("SubtleCrypto.importKey()")}} で、[ECDSA](/ja/docs/Web/API/SubtleCrypto/sign#ecdsa) または [ECDH](/ja/docs/Web/API/SubtleCrypto/deriveKey#ecdh) アルゴリズムを使用するときに、圧縮された楕円曲線上の点として定義されたキーのインポートが可能になりました ([Firefox bug 1971499](https://bugzil.la/1971499))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- `emulation.setLocaleOverride` コマンドを、JS API に加えて `navigator.language` および `navigator.languages` の戻り値もオーバーライドするように更新しました ([Firefox bug 1994396](https://bugzil.la/1994396))。
- `emulation.setLocaleOverride` および `emulation.setTimezoneOverride` コマンドを、最近の仕様書の更新に合わせて動作を更新しました。特定のブラウジングコンテキストのオーバーライドをリセットするためにこのコマンドを呼び出したとき、そのブラウジングコンテキストを所有するユーザーコンテキストに設定したオーバーライドは引き続き適用されます ([Firefox bug 1988725](https://bugzil.la/1988725))。
- `browsingContext.locateNodes` コマンドで `context` ロケーターをサポートしました。これは ifame 要素のようなトップレベルではないブラウジングコンテキストのコンテナーを取得できます ([Firefox bug 1941270](https://bugzil.la/1941270))。
- `network.setExtraHeaders` コマンドを実装しました。これは与えられたブラウジングコンテキストまたはユーザーコンテキストで発生したリクエストに、自動的に追加する要求ヘッダーを指定できます ([Firefox bug 1979731](https://bugzil.la/1979731))。
- すべてのネットワークデータ収集コマンド (`network.addDataCollector`、`network.getData`、`network.disownData`) で `request` データ型をサポートしました。これは、リクエストの POST データを収集および取得できます ([Firefox bug 1988955](https://bugzil.la/1988955))。
- `network.getData` の実装を、`data:` スキームを使用するリクエストもサポートするように改良しました ([Firefox bug 1992210](https://bugzil.la/1992210))。
- `network.getData` で、未サポートのリクエストに対して想定される `no such network data` エラーが発生しない不具合を修正しました ([Firefox bug 1992214](https://bugzil.la/1992214))。
- `network` イベントで、異なるリクエストで同じ ID を再使用していた不具合を修正しました。これは主に data URL やキャッシュされたリクエストで影響がありました ([Firefox bug 1992348](https://bugzil.la/1992348))。

#### Marionette

- `WebDriver:GetElementText` で、アクセントつき文字 ("รณ" など) を含む文字列を誤って大文字化していたリグレッションを修正しました ([Firefox bug 1986392](https://bugzil.la/1986392))。
- `WebFrame` の JSON デシリアライゼーションで、無効なフレームを扱うときに誤って `no such frame` ではなく `no such window` エラーが発生していた不具合を修正しました ([Firefox bug 1996540](https://bugzil.la/1996540))。
- [Global Privacy Control](https://w3c.github.io/gpc/) のシグナルを制御するための WebDriver 拡張機能を追加しました ([Firefox bug 1969865](https://bugzil.la/1969865))。

## アドオン開発者向けの変更点一覧

- {{WebExtAPIRef("browsingData.removeLocalStorage")}} および {{WebExtAPIRef("browsingData.remove")}} ({{WebExtAPIRef("browsingData.DataTypeSet")}} に `localStorage` が設定された場合) が、[`sessionStorage`](/ja/docs/Web/API/Window/sessionStorage) からオブジェクトを削除するようになりました ([Firefox bug 1886894](https://bugzil.la/1886894))。

## 実験的なウェブ機能

以下の機能は Firefox 146 で導入しましたが、デフォルトで無効です。
これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。
[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **`<meta name="rating">`** (Nightly): `security.restrict_to_adults.always` および `security.restrict_to_adults.respect_platform`

  `<meta name="rating">` 要素は、ウェブサイトが制限つきやアダルト向けのコンテンツであると自身を定義できます。この要素を認識するブラウザーは、ユーザーがコンテンツを表示することを制限する措置をとることができます 詳しくは [Restricting adult content with `<meta name="rating">`](/ja/docs/Mozilla/Firefox/Experimental_features#restricting_adult_content_with_meta_namerating) をご覧ください ([Firefox bug 1991135](https://bugzil.la/1991135))。

- **Navigation API** (Nightly): `dom.navigation.webidl.enabled`

  Nightly ビルドで Navigation API をサポートしました。これは、ブラウザーのナビゲーションアクションを開始・傍受・管理する機能を提供します。また、アプリケーションの履歴の項目を調査することもできます。これは {{domxref("History API", "", "", "nocode")}} や {{domxref("window.location")}} のような従来のウェブプラットフォームの機能の後継であり、従来の機能の短所を解決するとともに、特に {{glossary("SPA", "SPA (単一ページアプリケーション)")}} のニーズを対象にしています ([Firefox bug 1979288](https://bugzil.la/1979288))。

- **CSS `shape()` 曲線コマンドの相対的な制御点**: `layout.css.basic-shape-shape.enabled`

  CSS の `shape()` 関数で [`<curve-command>`](/ja/docs/Web/CSS/Reference/Values/basic-shape/shape#curve-command) または [`<smooth-command>`](/ja/docs/Web/CSS/Reference/Values/basic-shape/shape#smooth-command) を指定するときに、[`<relative-control-point>`](/ja/docs/Web/CSS/Reference/Values/basic-shape/shape#relative-control-point) の値が使用可能になりました。これらの値は現在のコマンドの始点や終点に対して相対的な位置の制御点、あるいは内部に図形が描かれたコンテナーの原点 (左上) に対して相対的な位置の制御点を指定できます。

- **カスタムメディアクエリー**: `layout.css.custom-media.enabled`

  [`@custom-media`](/ja/docs/Web/CSS/Reference/At-rules/@custom-media) CSS アットルールは、長いあるいは複雑なメディアクエリーの別名を定義します。複数の `@media` アットルールで同一のハードコードされた `<media-query-list>` を繰り返すことに代わり、`@custom-media` アットルールで一度定義したものをスタイルシートのどこでも必要なときに参照できます ([Firefox bug 1744292](https://bugzil.la/1744292))。
