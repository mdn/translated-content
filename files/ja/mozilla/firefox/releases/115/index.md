---
title: Firefox 115 for developers
slug: Mozilla/Firefox/Releases/115
l10n:
  sourceCommit: da3834afbae2d4ceb209593458d5df3c1e2d2d20
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 115 の変更点をまとめています。Firefox 115 は、米国時間 2023 年 7 月 4 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

- {{HTMLElement("link")}} 要素の [`rel`](/ja/docs/Web/HTML/Element/link#rel) 属性で [`modulepreload`](/ja/docs/Web/HTML/Attributes/rel/modulepreload) キーワードをサポートしました。
  これは [モジュールスクリプト](/ja/docs/Web/JavaScript/Guide/Modules) やその依存先を早期に (非同期で) 並列で読み込むことができ、それらは文書のモジュールマップに保存されます ([Firefox bug 1425310](https://bugzil.la/1425310))。

### CSS

- CSSの {{cssxref("animation-composition")}} プロパティを、デフォルトで有効にしました。このプロパティを使用して、複数のアニメーションが同じプロパティへ同時に影響を与えるときの合成処理を指定できます ([Firefox bug 1823862](https://bugzil.la/1823862))。
- CSS {{cssxref("@import")}} [アットルール](/ja/docs/Web/CSS/At-rule) の `supports()` で `supports-conditions` をデフォルトで有効にしました。この機能で、指定した機能がユーザーのブラウザーでサポートされている場合に限り、スタイルシートをインポートできます ([Firefox bug 1830779](https://bugzil.la/1830779))。

### JavaScript

- {{jsxref("Array.fromAsync()")}} 静的メソッドをサポートしました。
  このメソッドは [非同期反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols)、[反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)、あるいは [配列のような](/ja/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) オブジェクトから、新たにシャローコピーした `Array` のインスタンスを非同期に返します ([Firefox bug 1795816](https://bugzil.la/1795816))。
- `Array` および `TypedArray` メソッドで [`Array.toReversed()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed)、[`Array.toSorted()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)、[`Array.toSpliced()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced)、[`Array.with()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/with)、[`TypedArrays.toReversed()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toReversed)、[`TypedArrays.toSorted()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted)、[`TypedArrays.with()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/with) をサポートしました。
  これらのメソッドは、シャローコピーされた要素を持つ新しい配列を返します (`to` 接頭辞がつかない似た名前のメソッドは、配列の要素を直接変更します) ([Firefox bug 1811057](https://bugzil.la/1811057))。

### SVG

変更なし。

### HTTP

- [`Sec-Purpose`](/ja/docs/Web/HTTP/Headers/Sec-Purpose) HTTP {{Glossary("Fetch metadata request header", "フェッチメタデータリクエストヘッダー")}} が、リソースを {{Glossary("Prefetch", "プリフェッチ")}} する要求に含まれるようになりました。
  これにより要求に対してキャッシュの期限を調節するなど、サーバーが必要に応じて特別な制御を行うことができます ([Firefox bug 1836328](https://bugzil.la/1836328))。

### API

- JSON データを返す {{domxref("Response")}} オブジェクトを構築することを容易にする、[`Response.json()`](/ja/docs/Web/API/Response/json_static) 静的メソッドをサポートしました。
  このメソッドは [service workers](/ja/docs/Web/API/Service_Worker_API) や、JSON データを持つブラウザー要求に応答する必要があるその他のコードで役に立つでしょう ([Firefox bug 1758943](https://bugzil.la/1758943))。
- [`URL.canParse()`](/ja/docs/Web/API/URL/canParse_static) 静的メソッドを使用して、絶対 URL または相対 URL とベース URL の解析や検証が可能になりました。
  これは `try...catch` ブロックや例外処理で構築するよりも高速かつ簡単に、URL が有効であるかを確認する手段を提供します ([Firefox bug 1823354](https://bugzil.la/1823354))。
- [`URLSearchParams.has()`](/ja/docs/Web/API/URLSearchParams/has) および [`URLSearchParams.delete()`](/ja/docs/Web/API/URLSearchParams/delete) メソッドで、省略可能な引数 `value` をサポートしました。
  これは `name` および `value` の両方で検索パラメーターとマッチングさせることができ、同じ名前で複数の検索パラメーターを持つクエリー文字列を操作できます ([Firefox bug 1831587](https://bugzil.la/1831587))。

#### 廃止

- [HTMLMediaElement.preservesPitch](/ja/docs/Web/API/HTMLMediaElement/preservesPitch) の非推奨の別名である `mozPreservesPitch` をデフォルトで無効にしました。また、将来のリリースで完全に削除する予定です ([Firefox bug 1831205](https://bugzil.la/1831205))。

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- レルムで始めから 50 回 "throw" を使用した後でも上限を設けず、応答やイベントのスタックトレースが常にペイロードに含まれるようになりました ([Firefox bug 1791715](https://bugzil.la/1791715))。
- `input.performActions` を使用するときに、状態を維持しないため、および同じタブで後のアクションに漏れ出さないようにするために、進行中のホイールトランザクションがコマンドの終了時にリセットされるようになりました ([Firefox bug 1821733](https://bugzil.la/1821733))。
- `input.performActions` とともに `pointerMove` アクションを使用するとき、無効な起点要素に対して "no such error" が正しく発生するようになりました ([Firefox bug 1832028](https://bugzil.la/1832028))。
- 新たに開いたタブやウィンドウと直接対話するときに発生する可能性があった、最初のページ読み込みにおける競合状態を修正しました ([Firefox bug 1832891](https://bugzil.la/1832891))。

#### Marionette

- `WebDriver:GetComputedLabel` および `WebDriver:GetComputedRole` コマンドが、DOM に要素が挿入された直後に、要求されたアクセシビリティオブジェクトが存在するまで正しく待つようになりました ([Firefox bug 1828816](https://bugzil.la/1828816))。
- コンテンツプロセス内で実行している、特権つきコード内の `window.setTimeout()` のすべてのインスタンスが、タブやオートメーションがバックグラウンド状態である場合にスロットリングの影響を受けない別のタイマーを使用するようになりました。

## アドオン開発者向けの変更点一覧

- Manifest V3 拡張機能の非推奨項目を支持するため、Manifest V3 拡張機能で [`options_ui`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) および [`sidebar_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) の [`browser_style`](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) マニフェストキープロパティの既定値を `false` にしました ([Firefox bug 1830710](https://bugzil.la/1830710))。Manifest V3 拡張機能の `browser_style` からの移行に関する情報は、[Manifest v3 migration](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) をご覧ください。
- コマンドのショートカットが変化したことをウェブ拡張機能からリッスンできる、{{WebExtAPIRef("commands.onChanged")}} イベントを追加しました ([Firefox bug 1801531](https://bugzil.la/1801531))。
- ブラウザーセッションの間、メモリー内にデータを保存する機能を提供する、{{WebExtAPIRef("storage.session")}} をサポートしました ([Firefox bug 18237131](https://bugzil.la/1823713))。

## 過去のバージョン

{{Firefox_for_developers(114)}}
