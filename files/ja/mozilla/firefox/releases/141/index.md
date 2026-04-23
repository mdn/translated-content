---
title: Firefox 141 for developers
short-title: Firefox 141
slug: Mozilla/Firefox/Releases/141
l10n:
  sourceCommit: 36522b6e730a3517a0060106610ef00e79953044
---

このページでは、開発者に影響する Firefox 141 の変更点をまとめています。
Firefox 141 は、米国時間 [2025 年 7 月 22 日](https://whattrainisitnow.com/release/?version=141) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

- HTML の [`webkitdirectory`](/ja/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) 属性と、これに対応する {{domxref("HTMLInputElement.webkitdirectory")}} プロパティを、Android 版 Firefox で部分的にサポートしました ([Firefox bug 1887878](https://bugzil.la/1887878))。
  この属性は、[`<input type="file">`](/ja/docs/Web/HTML/Reference/Elements/input/file) 要素がファイル選択ではなくディレクトリー選択を提供するべきであると示すために設定できます。
  選択したディレクトリーに対して返されるファイルエントリー ({{domxref("File.webkitRelativePath")}}) は常に空文字列になります。これは、ディレクトリーの構造の情報が必要な用途に対して `webkitdirectory` の使用が適切でないことを意味します ([Firefox bug 1973726](https://bugzil.la/1973726))。

### CSS

- CSS の {{CSSXRef("font-variant-emoji")}} プロパティで、絵文字を表示するときの既定の表現方法を設定できます ([Firefox bug 1954214](https://bugzil.la/1954214))。

### JavaScript

- [`variants`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/variants) アクセサプロパティを {{jsxref("Intl.Locale")}} のインスタンスでサポートしました。
  このプロパティはロケールに関連づけられたバリアントを、ダッシュ記号 (`-`) で区切られた識別子の文字列で返します。
  これはロケールの文字列を手動で解析または変更することに代わる、言語識別子のバリアントサブタグを取得および設定する堅牢な手段を提供します ([Firefox bug 1970161](https://bugzil.la/1970161))。
- {{jsxref("Statements/using", "using")}} および {{jsxref("Statements/await_using", "await using")}} 宣言、{{jsxref("DisposableStack")}}、{{jsxref("AsyncDisposableStack")}} および {{jsxref("SuppressedError")}} オブジェクト、{{jsxref("Symbol.dispose")}} および {{jsxref("Symbol.asyncDispose")}} ウェルノウンシンボルを含む、明示的な [リソース管理](/ja/docs/Web/JavaScript/Guide/Resource_management) API をサポートしました。これらの機能は、ファイルハンドルやストリームリーダーなどがスコープから外れたときにリソースの自動的なクリーンアップを確実に行うことで、リソースリークの削減やエラーハンドリングの簡素化につながります ([Firefox bug 1967744](https://bugzil.la/1967744))。

### HTTP

- {{httpheader("Clear-Site-Data")}} レスポンスヘッダーの [`"cache"`](/ja/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) ディレクティブが、{{glossary("bfcache")}} (バック/フォワードキャッシュ) を消去するようになりました。
  これにより、ユーザーがサインアウトした後に誰かが戻るナビゲーションを行なっても、最初のセッション中に見えていたプライベートな情報が公開されないことをサイトが保証できます ([Firefox bug 1930501](https://bugzil.la/1930501))。

### API

- {{domxref("PointerEvent")}} インターフェイスの {{domxref("PointerEvent/persistentDeviceId","persistentDeviceId")}} プロパティをサポートしました。これは画面と対話するそれぞれのポインティングデバイスに、セッション中に維持される一意の ID を与えます。これは、画面上で対話する複数のポインティングデバイス (ペンなど) を特定するための信頼性が高い方法を提供します ([Firefox bug 1968400](https://bugzil.la/1968400))。
- {{domxref("IntersectionObserver")}} インターフェイスの {{domxref("IntersectionObserver/scrollMargin","scrollMargin")}} プロパティをサポートしました。これは、オブザーバーのルート要素内ですべての入れ子になった {{glossary("scroll container","スクロールコンテナー")}} にマージンを追加します。これにより、それらの要素内にある対象が最初に表示されるときだけでなく、スクロールによってビューに入る前または後に観測することができます ([Firefox bug 1860030](https://bugzil.la/1860030))。
- {{domxref("HTMLDialogElement")}} インターフェイスの {{domxref("HTMLDialogElement/closedBy", "closedBy")}} 属性、およびこれに対応する {{htmlelement("dialog")}} 要素の [`closedby`](/ja/docs/Web/HTML/Reference/Elements/dialog#closedby) 属性をサポートしました。
  開発者はこれらを使用して、ダイアログの外でのユーザー操作 ("light dismiss") やプログラムによる閉じる処理など、どのような方法でダイアログを閉じることが可能かを指定できます ([Firefox bug 1964078](https://bugzil.la/1964078))。
- {{domxref("HTMLElement")}} インターフェイスの [`showPopover()`](/ja/docs/Web/API/HTMLElement/showPopover) および [`togglePopover()`](/ja/docs/Web/API/HTMLElement/togglePopover) メソッドが、引数 [`options.source`](/ja/docs/Web/API/HTMLElement/showPopover#source) を受け取るようになりました。また、[`togglePopover()`](/ja/docs/Web/API/HTMLElement/togglePopover) は引数 [`force`](/ja/docs/Web/API/HTMLElement/togglePopover#force) または [`options.force`](/ja/docs/Web/API/HTMLElement/togglePopover#force_2) も受け取ります ([Firefox bug 1936411](https://bugzil.la/1936411))。
  - [`options.source`](/ja/docs/Web/API/HTMLElement/showPopover#source) が、ポップオーバーとその呼び出し元 (コントロール要素) の間の関係性を確立するようになりました。
    同等の宣言型属性である [`popovertarget`](/ja/docs/Web/HTML/Reference/Elements/button#popovertarget) と同様に、キーボードの使用者に対してポップオーバーのアクセシビリティが向上します ([Popover accessibility features](/ja/docs/Web/API/Popover_API/Using#popover_accessibility_features) をご覧ください)。また、二者間のアンカー参照も暗黙的に生成します。これはコントロールに対してポップオーバーをより自然に配置することを可能にします ([Popover anchor positioning](/ja/docs/Web/API/Popover_API/Using#popover_anchor_positioning) をご覧ください)。
  - `togglePopover()` の引数 [`force`](/ja/docs/Web/API/HTMLElement/togglePopover#force) または [`options.force`](/ja/docs/Web/API/HTMLElement/togglePopover#force_2) を使用して、ポップオーバーを強制的に開いたり閉じたりできます。ポップオーバーがすでに強制的な状態にある場合は無視されます。
    `showPopover()` や `hidePopover()` との違いは、ポップオーバーがすでに目的の状態にあるときに例外が発生しないことです。
- Windows において、サービスワーカーを除くすべてのコンテキストで [WebGPU API](/ja/docs/Web/API/WebGPU_API) を完全にサポートしました。これにより開発者は、ユーザーのコンピューターの [Graphics Processing Unit](https://ja.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) を使用して計算やグラフィックスレンダリングを実行できます ([Firefox bug 1972486](https://bugzil.la/1972486))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### 一般

- 実験的な CDP (Chrome DevTools Protocol) の実装を Firefox から削除しました。合わせて、設定項目 `remote.active-protocols` のサポートも廃止しました。このトピックについて、詳しくは [Firefox Developer Experience](https://fxdx.dev/cdp-retirement-in-firefox/) で確認できます ([Firefox bug 1882096](https://bugzil.la/1882096))。
- 一時的に提供した設定項目 `remote.system-access-check.enabled` を削除しました。この設定は、テストの実行中に Firefox の chrome スコープで WebDriver を使用するときのシステムアクセス確認を無効化するためには使用できなくなりました ([Firefox bug 1955007](https://bugzil.la/1955007))。

#### WebDriver BiDi

- `browser.createUserContext` コマンドの引数 "proxy" をサポートしました。これにより、クライアントがユーザーコンテキスト (Firefox コンテナー) を作成するときに、プロキシーの "直接接続" または "手動設定" を設定できます。そのほかのプロキシー設定方式は将来追加する予定です ([Firefox bug 1967653](https://bugzil.la/1967653))。
- ウェブページのコンテキストで `history.pushState()`、`history.replaceState()`、`document.open()` が呼び出されたときに発生するイベント `browsingContext.historyUpdated` を新たに実装しました ([Firefox bug 1906051](https://bugzil.la/1906051))。
- パッケージ化されていない、未署名の拡張機能を永続的にインストールしようとしたときに表示されるエラーメッセージを改善しました ([Firefox bug 1958723](https://bugzil.la/1958723))。
- `browsingContext.navigate` および `browsingContext.reload` コマンドを、"wait" 条件で "none" を使用したときに `browsingContext.navigationCommitted` イベントを待つように更新しました ([Firefox bug 1967469](https://bugzil.la/1967469))。
- HTTP ページで "sameSite=None" および "secure=false" である Cookie を設定できなくなった、最近のプラットフォーム API の変更に対処するため、WebDriver BiDi の Cookie API で "sameSite" プロパティの値 "default" をサポートしました ([Firefox bug 1971488](https://bugzil.la/1971488))。

#### Marionette

- `WebDriver:ElementClick` を呼び出すごとに (ナビゲーションが発生しない場合も) 不要な 200 ミリ秒の遅延が発生することを避けるため、潜在的なナビゲーションに対するクリックアンドウェイトのタイムアウト時間を、後方互換性のため 50 ミリ秒に短縮しました。ユーザーによる設定で [タイムアウトを調整可能](https://firefox-source-docs.mozilla.org/testing/marionette/Prefs.html#marionette-navigate-after-click-timeout) および [完全に無効化可能](https://firefox-source-docs.mozilla.org/testing/marionette/Prefs.html#marionette-navigate-after-click-enabled) です ([Firefox bug 1972271](https://bugzil.la/1972271))。
- CHIPS Cookie (Cookies Having Independent Partitioned State) との対話を Marionette でサポートしました ([Firefox bug 1972830](https://bugzil.la/1972830))。

## アドオン開発者向けの変更点一覧

- オペレーティングシステムで優先されているロケールを取得する {{WebExtAPIRef('i18n.getPreferredSystemLanguages')}} メソッドを追加しました。これは、ブラウザーのロケールセットの詳細情報を返す {{WebExtAPIRef('i18n.getAcceptLanguages')}} を補完します ([Firefox bug 1888486](https://bugzil.la/1888486))。

## 実験的なウェブ機能

以下の機能は Firefox 141 で導入しましたが、デフォルトで無効です。
これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。
[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **`:active-view-transition`** (Nightly): `dom.viewTransitions.enabled`

  CSS の {{CSSXRef(":active-view-transition")}} 擬似クラスは、シングルページアプリケーション (SPA) で [ビュー遷移](/ja/docs/Web/API/View_Transition_API) が行われているコンテンツにスタイルを設定できます ([Firefox bug 1956140](https://bugzil.la/1956140))。
