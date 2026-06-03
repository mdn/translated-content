---
title: Firefox 127 for developers
slug: Mozilla/Firefox/Releases/127
l10n:
  sourceCommit: 81b27da7107783b4a4d9ff245a99d93f6d3efc3a
---

このページでは、開発者に影響する Firefox 127 の変更点をまとめています。Firefox 127 は、米国時間 [2024 年 6 月 11 日](https://whattrainisitnow.com/release/?version=127) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

- `data:` および `javascript:` URL が、`<base>` 要素の [`href`](/ja/docs/Web/HTML/Reference/Elements/base#href) 属性で禁止されました ([Firefox bug 1850967](https://bugzil.la/1850967))。

### CSS

- [`conic-gradient()`](/ja/docs/Web/CSS/Reference/Values/gradient/conic-gradient)、[`linear-gradient()`](/ja/docs/Web/CSS/Reference/Values/gradient/linear-gradient)、[`radial-gradient()`](/ja/docs/Web/CSS/Reference/Values/gradient/radial-gradient) 関数で作成するグラデーション、および繰り返しのグラデーションの [`repeating-conic-gradient()`](/ja/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient)、[`repeating-linear-gradient()`](/ja/docs/Web/CSS/Reference/Values/gradient/repeating-linear-gradient)、[`repeating-radial-gradient()`](/ja/docs/Web/CSS/Reference/Values/gradient/repeating-radial-gradient) 関数で、[`<color-interpolation-method>`](/ja/docs/Web/CSS/Reference/Values/color-interpolation-method) の使用をサポートしました ([Firefox bug 1861363](https://bugzil.la/1861363))。

### JavaScript

- [`Set`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set) の、以下のメソッドをサポートしました ([Firefox bug 1868423](https://bugzil.la/1868423)):
  - [`Set.prototype.intersection()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection) — 自身の Set と指定した Set の両方に存在する要素を持つ、新しい Set を返します。
  - [`Set.prototype.union()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/union) — 自身の Set と指定した Set にあるすべての要素を持つ、新しい Set を返します。
  - [`Set.prototype.difference()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/difference) — 自身の Set に存在するが指定した Set には存在しない要素を持つ、新しい Set を返します。
  - [`Set.prototype.symmetricDifference()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference) — 自身の Set または指定した Set のいずれかに存在して、両方には存在しない要素を持つ、新しい Set を返します。
  - [`Set.prototype.isSubsetOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf) — 自身の Set のすべての要素が指定した Set に存在しているかを示す論理値を返します。
  - [`Set.prototype.isSupersetOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf) — 指定した Set のすべての要素が自身の Set に存在しているかを示す論理値を返します。
  - [`Set.prototype.isDisjointFrom()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom) — 自身の Set と指定した Set に共通の要素がないかを示す論理値を返します。

### SVG

- CSS では [Firefox 120](/ja/docs/Mozilla/Firefox/Releases/120#css) で初めにサポートされた行の高さの単位 [`lh` および `rlh`](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units#line_height_units) を、SVG でもサポートしました。これらは CSS プロパティの値 `stroke-width: 0.5lh` や SVG 属性の値 `stroke-width="0.5lh"` のどちらでも使用できます ([Firefox bug 1892089](https://bugzil.la/1892089))。

### セキュリティ

- 安全なコンテンツで、Firefox は音声、動画、画像のサブリソースの要求を自動的に HTTP から HTTPS へアップグレードして、その他のメディアの HTTP 要求はブロックするようになりました。メディアのホストが HTTPS をサポートしてないためアップグレードした要求が失敗した場合は、メディアを見つけられません。
  これは、コンテンツが HTTPS で安全に提供されている場合はすべてのサブリソースも安全に提供されること、そうでない場合はまったく提供されないことを保証します。
  ページが [混在コンテンツ](/ja/docs/Web/Security/Defenses/Mixed_content) を表示することがなくなったため、ページが混在コンテンツを含むことを示すアイコンも Firefox から削除しました。また、コンソールで混在コンテンツの警告を、要求がアップグレードされたことを表す警告に置き換えました ([Firefox bug 1779757](https://bugzil.la/1779757))。

### API

- 非同期の {{domxref('Clipboard API')}} を完全にサポートしました。{{domxref('ClipboardItem')}} インターフェイスと、{{domxref('Clipboard')}} インターフェイスの [`read()`](/ja/docs/Web/API/Clipboard/read) および [`write()`](/ja/docs/Web/API/Clipboard/write) メソッドが有効になりました ([Firefox bug 1887845](https://bugzil.la/1887845)、[Firefox bug 1858788](https://bugzil.la/1858788))。
- [ウェブビデオテキストトラック形式 (WebVTT)](/ja/docs/Web/API/WebVTT_API) のキュー、タイトル文字列、コメント、注釈などで、すべての {{glossary("character reference","HTML 文字参照")}} をサポートしました ([Firefox bug 1395924](https://bugzil.la/1395924))。
- {{domxref('WebGLRenderingContext.drawingBufferColorSpace')}} および [`WebGL2RenderingContext.drawingBufferColorSpace`](/ja/docs/Web/API/WebGL2RenderingContext) をサポートしました ([Firefox bug 1885491](https://bugzil.la/1885491))。

### WebDriver conformance (WebDriver BiDi, Marionette)

#### 一般

- WebDriver クラシックおよび BiDi の双方で、`wheel` アクションが `ctrl` や `shift` などのモディファイアを正しく扱えるように修正しました ([Firefox bug 1885542](https://bugzil.la/1885542))。

#### WebDriver BiDi

- ブラウザーのパーミッション (`geolocation` など) を更新できる、`permissions.setPermission` コマンドを追加しました。パーミッションモジュールは [Permissions 仕様で定義されている](https://www.w3.org/TR/permissions/#webdriver-bidi-module-permissions)、WebDriver BiDi 仕様の拡張です ([Firefox bug 1875065](https://bugzil.la/1875065))。
- `browsingContext.locateNodes` コマンドで、アクセシビリティ属性 `name` および `role` をロケーターとしてサポートしました ([Firefox bug 1885577](https://bugzil.la/1885577))。
- `browsingContext.setViewport` で引数 `devicePixelRatio` をサポートしました。デバイスピクセル比率が異なるスクリーンの動作をエミュレートできます ([Firefox bug 1857961](https://bugzil.la/1857961))。
- コマンドを解決する前に不必要な待ち状態が発生する競合状態を避けるように `browsingContext.navigate` を改良しました ([Firefox bug 1894305](https://bugzil.la/1894305))。

#### Marionette

- 無効化したフィールドセットに置かれている要素に対する `WebDriver:ElementClear` の動作を修正しました ([Firefox bug 1863266](https://bugzil.la/1863266))。
- `WebDriver:GetElementText` がアンダースコアを含む文字列を正しくキャピタライズしない不具合を修正しました ([Firefox bug 1888004](https://bugzil.la/1888004))。
- ナビゲーションの途中にタブがあった場合に、`WebDriver:SwitchToFrame` が失敗する不具合を修正しました ([Firefox bug 1817820](https://bugzil.la/1817820))。

## アドオン開発者向けの変更点一覧

- manifest.json の [`"incognito"`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito) キーの値に `"split"` を指定した拡張機能を Firefox へインストールするようになりました。ただし Firefox はスプリットモードをサポートしておらず、プライベートブラウジングの整合性を保つため `"split"` は値 `"not_allowed"` の別名として扱われます ([Firefox bug 1876924](https://bugzil.la/1876924))。
- アドオンがエンタープライズポリシーを使用してインストールされた場合に、{{WebExtAPIRef("management.ExtensionInfo")}} が `install_type` で `"admin"` を返すようになりました ([Firefox bug 1895341](https://bugzil.la/1895341))。
- {{WebExtAPIRef("declarativeNetRequest.getDynamicRules")}} および {{WebExtAPIRef("declarativeNetRequest.getSessionRules")}} に引数 `filter` を追加しました。これは、返されるルールのリストを ID でフィルタリングできるようにします ([Firefox bug 1820870](https://bugzil.la/1820870))。
- Manifest V3 拡張機能の [`host_permissions`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) を、インストール中にユーザーへ表示するようになりました ([Firefox bug 1889402](https://bugzil.la/1889402))。ただし、更新した拡張機能が新たなホストパーミッションを要求してもユーザーに表示されません ([Firefox bug 1893232](https://bugzil.la/1893232))。
- 拡張機能に関連付けられたコンテキストの情報を返す {{WebExtAPIRef("runtime.getContexts")}} 関数を追加しました ([Firefox bug 1875480](https://bugzil.la/1875480))。
- Manifest V3 拡張機能向けに、`_execute_action` のユーザー定義ショートカットがない場合に、特殊な [`_execute_browser_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#特殊なショートカット) コマンドをユーザー定義ショートカットにフォールバックする機能を追加しました。これにより、Manifest V2 から V3 へ移行する拡張機能がブラウザーアクションのユーザー定義ショートカットを維持できます ([Firefox bug 1797811](https://bugzil.la/1797811))。

## 実験的なウェブ機能

以下の機能は Firefox 127 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **CSS `letter-spacing` の対称なスペース:** `layout.css.letter-spacing.model`。

  CSS の {{cssxref("letter-spacing")}} プロパティで、スペースをそれぞれの文字の両側へ均等に分配するようになりました。これは、主に片側にスペースを置く現在の動作とは異なります ([Firefox bug 1891446](https://bugzil.la/1891446))。

- **相対的な色で `calc()` カラーチャンネルをサポート:** `layout.css.relative-color-syntax.enabled`。

  CSS の [`calc()`](/ja/docs/Web/CSS/Reference/Values/calc) 関数で、[相対的な色](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors#using_math_functions) のカラーチャンネルを解析できるようになりました ([Firefox bug 1889561](https://bugzil.la/1889561))。

- **JavaScript `Float16Array` 型付き配列**: `javascript.options.experimental.float16array`。

  {{jsxref("Float16Array")}} 型付き配列、{{jsxref("DataView")}} から `Float16Array` の値を読み取りおよび書き込みする {{jsxref("DataView.prototype.getFloat16()")}} および {{jsxref("DataView.prototype.setFloat16()")}}、数値を 16 ビット値に丸めるために使用できる静的メソッド {{jsxref("Math.f16round()")}} をサポートしました。新しい型は、特にメモリ消費量のために精度を犠牲にすることが合理的な用途で、GPU とデータを共有するのに便利です ([Firefox bug 1833647](https://bugzil.la/1833647)。

## 過去のバージョン

{{Firefox_for_developers}}
