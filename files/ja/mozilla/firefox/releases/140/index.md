---
title: Firefox 140 for developers
short-title: Firefox 140 (Stable)
slug: Mozilla/Firefox/Releases/140
l10n:
  sourceCommit: 90fe07f7d8a790094d90eddf70071dd64f821c76
---

このページでは、開発者に影響する Firefox 140 の変更点をまとめています。Firefox 140 は、米国時間 [2025 年 6 月 24 日](https://whattrainisitnow.com/release/?version=140) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### CSS

- [CSS カスタムハイライト API](/ja/docs/Web/API/CSS_Custom_Highlight_API) をサポートしました。これは文書内の任意のテキスト範囲にスタイルを設定する仕組みを提供するもので、{{cssxref('::selection')}}、{{cssxref('::spelling-error')}}、{{cssxref('::grammar-error')}}、{{cssxref('::target-text')}} のようなほかのハイライト擬似要素の動作を一般化します。
  [`Highlight`](/ja/docs/Web/API/Highlight) でグループ化した [`Range`](/ja/docs/Web/API/Range) のインスタンスを使用して、JavaScript でテキスト範囲を定義します。そして、[`HighlightRegistry`](/ja/docs/Web/API/HighlightRegistry) を使用して名前をつけて登録します。
  CSS の [`::highlight`](/ja/docs/Web/CSS/Reference/Selectors/::highlight) 擬似要素を使用して、登録したハイライトにスタイルを適用できます ([Firefox bug 1964089](https://bugzil.la/1964089))。

#### 廃止

- HTML 仕様書の [アウトラインアルゴリズムが削除](https://github.com/whatwg/html/pull/7829) に従って、[区分コンテンツ](/ja/docs/Web/HTML/Guides/Content_categories#区分コンテンツ) の内部に入れ子になった `<h1>` 要素のユーザーエージェントスタイルを削除しました。以前は `<article>`、`<aside>`、`<nav>`、`<section>` の内部に入れ子になった `<h1>` 見出しを小さく表示しました。現在は、入れ子の状態にかかわらず `<h1>` 要素が一貫したフォントサイズになります ([Firefox bug 1964922](https://bugzil.la/1964922))。

### JavaScript

変更なし。

### SVG

- SVG の {{SVGAttr("fetchpriority")}} 属性を、SVG の {{SVGElement("feimage")}}、{{SVGElement("image")}}、{{SVGElement("script")}} 要素でサポートしました。これは、外部リソースの相対的な優先度をブラウザーに助言できます。これは HTML の {{HTMLElement("img", "", "#fetchpriority")}}、{{HTMLElement("script", "", "#fetchpriority")}} 要素の `fetchpriority` 属性と同じように機能します ([Firefox bug 1847712](https://bugzil.la/1847712))。

### API

- [Cookie Store API](/ja/docs/Web/API/Cookie_Store_API) をサポートしました ([Firefox bug 1958875](https://bugzil.la/1958875))。
  これは Cookie を管理するための、現代的で {{glossary("asynchronous", "非同期")}} で {{jsxref("Promise")}} ベースの方法を提供します。これはメインスレッドと [サービスワーカーservice workers](/ja/docs/Web/API/Service_Worker_API) のどちらでも使用できます。
  API は {{domxref("CookieStore")}} インターフェイスの [`get()`](/ja/docs/Web/API/CookieStore/get) および [`getAll()`](/ja/docs/Web/API/CookieStore/getAll) メソッドで返される Cookie オブジェクトと、`change` イベントにおいて `name` および `value` 以外のすべてのプロパティを省略する ({{domxref("document.cookie")}} が返す情報と一致します) という例外を除いてサポートします。ほかの Cookie プロパティは引き続き [設定](/ja/docs/Web/API/CookieStore/set) が可能であり、これらは内部で使用します。

### HTML をシリアライズするときに < および > をエスケープする

- {{domxref("Element.innerHTML")}}、{{domxref("Element.outerHTML")}}、{{domxref("Element.getHTML()")}}、{{domxref("ShadowRoot.innerHTML")}}、{{domxref("ShadowRoot.getHTML()")}} は、HTML を文字列にシリアライズする際に `<` および `>` の文字を、それぞれ `&lt;` および `&gt;` に置き換えるようになりましたこれは、HTML をシリアライズして DOM へ再挿入する特定の攻撃を防ぎます ([Firefox bug 1962084](https://bugzil.la/1962084))。

#### DOM

- [`pointerrawupdate` イベント](/ja/docs/Web/API/Element/pointerrawupdate_event) をサポートしました。
  このイベントは一般的に、対応する [`pointermove`](/ja/docs/Web/API/Element/pointermove_event) イベントに比べて低レイテンシーでポインター移動のプロパティにアクセスでき、ポインターのデータが利用可能になると直ちに発生します。
  これは高精度な入力処理が必要であり、結合した `pointermove` イベントだけではスムーズな操作を達成できないアプリケーションを対象にするものです。
  このイベントのリスニングはパフォーマンスに影響を与える可能性があるため、その他の用途に使用することは避けるべきです ([Firefox bug 1550462](https://bugzil.la/1550462))。

#### 廃止

- {{domxref("MutationEvent")}} インターフェイスと、関連するイベント (`DOMSubtreeModified`、`DOMNodeInserted`、`DOMNodeRemoved`、`DOMCharacterDataModified`、`DOMAttrModified`) を削除しました ([Firefox bug 1963043](https://bugzil.la/1963043))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### 一般

- 個々のイベントをディスパッチしている間にマイクロタスクがブロックされることを防ぐために、Marionette と WebDriver BiDi の両方でアクションの実装を改良しました ([Firefox bug 1965183](https://bugzil.la/1965183))。
- WebDriver Classic および BiDi のコマンド (特にアクションコマンド) が、RequestAnimationFrame を待機する間にタイムアウトする場合がある不具合を修正しました ([Firefox bug 1947402](https://bugzil.la/1947402))。

#### WebDriver BiDi

- `browser.createUserContext` コマンドで引数 `acceptInsecureCerts` をサポートしました。この引数でクライアントは、特定のユーザーコンテキスト (Firefox コンテナー) の証明書に関するセキュリティ設定を無効化または有効化して、セッションで指定した設定をオーバーライドできます ([Firefox bug 1959372](https://bugzil.la/1959372))。
- `browsingContext` で新たに `browsingContext.navigationCommitted` イベントを実装しました。これはナビゲーションのために新しい文書が作成されると直ちに発生します ([Firefox bug 1945184](https://bugzil.la/1945184))。
- 拡張機能のブラウジングコンテキストでさまざまな `browsingContext` のイベントが意図せず発生する不具合を修正しました ([Firefox bug 1903272](https://bugzil.la/1903272))。
- 拡張機能の ID として空文字列が与えられたときに `NoSuchWebExtensionError` が発生するように、`webExtension.uninstall` コマンドを更新しました ([Firefox bug 1956945](https://bugzil.la/1956945))。
- 残されていたすべてのケースで `clientWindow` プロパティを返すように、`browsingContext.contextCreated` および `browsingContext.contextDestroyed` イベントを更新しました (Android 版 Firefox を含む)。このプロパティは、ブラウジングコンテキストを所有するウィンドウの ID に対応します ([Firefox bug 1953743](https://bugzil.la/1953743))。

## アドオン開発者向けの変更点一覧

- {{WebExtAPIRef("cookies.SameSiteStatus")}} で `unspecified` をサポートしました。また、{{WebExtAPIRef("cookies.set()")}} の `sameSite` の既定値が `unspecified` になりました ([Firefox bug 1550032](https://bugzil.la/1550032))。

## 実験的なウェブ機能

以下の機能は Firefox 140 で導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **`Notification.maxActions`** (Nightly): `dom.webnotifications.actions.enabled`

  読み取り専用の静的プロパティである [`Notification.maxActions`](/ja/docs/Web/API/Notification/maxActions_static) は、{{domxref("ServiceWorkerRegistration.showNotification()")}} を使用して作成する `Notification` に関連づけることができるアクションの数のブラウザーによる上限を返します。
  これは Firefox 138 で時期尚早にリリースしましたが、この変更により Nightly ビルドに限り使用可能になりました ([Firefox bug 1963263](https://bugzil.la/1963263))。

- **`<dialog>` の `closedBy` 属性** (Nightly): `dom.dialog.light-dismiss.enabled`

  {{domxref("HTMLDialogElement")}} インターフェイスの {{domxref("HTMLDialogElement/closedBy", "closedBy")}} 属性、およびこれに対応する {{htmlelement("dialog")}} 要素の [`closedby`](/ja/docs/Web/HTML/Reference/Elements/dialog#closedby) 属性をサポートしました。
  開発者はこれらを使用して、ダイアログの外でのユーザー操作 ("light dismiss") やプログラムによる閉じる処理など、どのような方法でダイアログを閉じることが可能かを指定できます ([Firefox bug 1964077](https://bugzil.la/1964077))。

- **`Atomics.waitAsync()`**: `javascript.options.atomics_wait_async`

  {{jsxref("Atomics.waitAsync()")}} 静的メソッドは共有メモリーの位置で非同期に待機して、操作の結果を表すオブジェクトを返します。
  これはブロッキングがなく、メインスレッドで使用できます ([Firefox bug 1467846](https://bugzil.la/1467846))。

- **Prioritized Task Scheduling API** (Nightly リリース)。
  [Prioritized Task Scheduling API](/ja/docs/Web/API/Prioritized_Task_Scheduling_API) は、ウェブサイトの開発者のコードで定義されたか、サードパーティーのライブラリーやフレームワークで定義されたかにかかわらず、アプリケーションに所属するすべてのタスクに優先度をつけるための標準された手段を提供します。
  これは作成元の `TaskSignal` のいずれかがトリガーされたときにトリガーされるシグナルを返す、[`TaskSignal.any()`](/ja/docs/Web/API/TaskSignal/any_static) 静的メソッドのサポートを追加します。
  API の機能は完成しています ([Firefox bug 1964407](https://bugzil.la/1964407))。

- **`CloseWatcher`** (Nightly - デスクトップ版限定): `dom.closewatcher.enabled`.
  {{domxref("CloseWatcher")}} インターフェイスは、組み込みコンポーネントと同じようにデバイスのネイティブな仕組みを使用して閉じることが可能なコンポーネントを実装することを可能にします。たとえば Windows では、ユーザーが <kbd>Esc</kbd> キーを押したときに独自のサイドバーを閉じるためにこのインターフェイスを使用できます ([Firefox bug 1966459](https://bugzil.la/1966459))。

## 過去のバージョン

{{Firefox_for_developers}}
