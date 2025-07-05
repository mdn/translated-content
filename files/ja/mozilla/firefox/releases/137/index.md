---
title: Firefox 137 for developers
slug: Mozilla/Firefox/Releases/137
l10n:
  sourceCommit: 63cac9936f06f3eb8d4ef52fd8ef1e507f1123fa
---

このページでは、開発者に影響する Firefox 137 の変更点をまとめています。
Firefox 137 は、米国時間 [2025 年 4 月 1 日](https://whattrainisitnow.com/release/?version=137) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### CSS

- {{CSSXRef("hyphenate-limit-chars")}} CSS プロパティが、テキストのハイフネーションのきめ細かい制御を可能にします。これは、ハイフネーションを行う単語の最小の長さ、およびハイフンの前後の最小文字数を指定するために使用します ([Firefox bug 1947183](https://bugzil.la/1947183))。
- {{cssxref("text-decoration-line")}} CSS プロパティが、値 `spelling-error` および `grammar-error` を受け入れるようになりました。これらの値はスペルや文法の誤りに対するブラウザーのスタイル設定に使用されて、{{cssxref("text-decoration")}} ショートハンドプロパティにあるほかのプロパティを無視します ([Firefox bug 1950844](https://bugzil.la/1950844))。

### JavaScript

- {{jsxref("Math.sumPrecise()")}} 静的メソッドをサポートしました。これは [反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル) な数値 ({{jsxref("Array")}} など) を受け取って、それらの合計を返します。中間の計算結果で浮動小数点数の精度低下を避けられるため、ループで数値を合計するよりも高精度です ([Firefox bug 1943120](https://bugzil.la/1943120))。
- {{jsxref("Atomics.pause()")}} 静的メソッドをサポートしました。このメソッドは、現在のスレッドが共有リソースへのアクセスを待つ間にスピンロックの状態であることを CPU へ助言します。システムは現在のスレッドを中断することなく、コア (電力など) やスレッドに割り当てるリソースを削減できます ([Firefox bug 1937805](https://bugzil.la/1937805))。

### API

- {{domxref("SVGPathElement")}} インターフェイスの {{domxref("SVGPathElement/getPathData", "getPathData()")}}、{{domxref("SVGPathElement/setPathData", "setPathData()")}}、{{domxref("SVGPathElement/getPathSegmentAtLength", "getPathSegmentAtLength()")}} メソッドをサポートしました。これらのメソッドは、生の文字列データを解析する代わりに SVG のパスデータを処理する便利な手段を提供します ([Firefox bug 1945312](https://bugzil.la/1945312))。

#### Media、WebRTC、Web Audio

- [HEVC (H.265)](/ja/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265) は、Android 版でハードウェア処理、Linux でハードウェア処理およびソフトウェア処理が可能になりました。これは Windows および macOS の既存のハードウェア処理やソフトウェア処理のサポートに追加されます ([Firefox bug 1950032](https://bugzil.la/1950032))。

#### 廃止

- 以下の非標準イベントが非推奨になり、削除することが提案されています: {{domxref("Document")}} の [`afterscriptexecute`](/ja/docs/Web/API/Document/afterscriptexecute_event) および[`beforescriptexecute`](/ja/docs/Web/API/Document/beforescriptexecute_event)、{{domxref("Element")}} の [`afterscriptexecute`](/ja/docs/Web/API/Element/afterscriptexecute_event) および [`beforescriptexecute`](/ja/docs/Web/API/Element/beforescriptexecute_event)。これらを使用するとコンソールに警告を表示します ([Firefox bug 1949373](https://bugzil.la/1949373))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### 一般

- `mouse` および `touch` 型の入力ソースで、`pointerMove` アクションの x 座標および y 座標の位置で小数をサポートしました ([Firefox bug 1946774](https://bugzil.la/1946774))。

#### WebDriver BiDi

- 新たに `webExtension.install` ([Firefox bug 1934551](https://bugzil.la/1934551)) および `webExtension.uninstall` ([Firefox bug 1934553](https://bugzil.la/1934553)) コマンドを実装しました。これらは、クライアントがブラウザーにウェブ拡張機能をインストールおよびアンインストールできるようにします。
- `sessions.subscribe` コマンドで引数 `userContexts` をサポートしました。これは、(Firefox コンテナーとしても知られる) ユーザーコンテキストの一覧をクライアントが監視できるようにします ([Firefox bug 1938604](https://bugzil.la/1938604))。
- `script.addPreloadScript` コマンドに引数 `contexts` と `userContexts` の両方が渡されたときに、`invalid argument` エラーが発生するように更新しました ([Firefox bug 1945554](https://bugzil.la/1945554))。
- 引数 `wait` が `none` であり、また beforeunload プロンプトが開く場合に、`browsingContext.navigate` コマンドが直ちに返らないようになりました。これは引数 `wait` が `none` である場合のロジックを更新する最初のステップです ([Firefox bug 1948700](https://bugzil.la/1948700))。

#### Marionette

- 今後は、スクリプトの評価によって発生した構文エラーによる `javascript error` に行や列の番号が含まれるようになりました ([Firefox bug 1865146](https://bugzil.la/1865146))。
- 非同期イベントが有効なアクションを実行したときに、`Cyclic object value` のエラーメッセージで失敗しないようになりました ([Firefox bug 1947112](https://bugzil.la/1947112))。
  非同期イベントは Firefox 135 から使用可能です。詳しくは [リリースノート](/ja/docs/Mozilla/Firefox/Releases/135#webdriver_への適合_webdriver_bidi_marionette) をご覧ください。

## アドオン開発者向けの変更点一覧

- 拡張機能の管理 (`about:addons`) で拡張機能のショートカットキーの管理のページを開いて、拡張機能にショートカットがあればそのショートカットの設定へスクロールして強調表示する {{WebExtAPIRef("commands.openShortcutSettings")}} を追加しました ([Firefox bug 1538451](https://bugzil.la/1538451))。
- {{WebExtAPIRef("storage.session")}} API で保存するデータに 10 MB のクォータを強制適用します ([Firefox bug 1915688](https://bugzil.la/1915688))。

## 実験的なウェブ機能

以下の機能は Firefox 137 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **Temporal API** (Nightly release): を Firefox Nightly で、デフォルトで有効化しました。[Temporal オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal) は組み込みのタイムゾーンやカレンダーの表現によって、さまざまな状況における日付や時刻の扱いを簡素化することを目指しています ([Firefox bug 1946823](https://bugzil.la/1946823))。

## 過去のバージョン

{{Firefox_for_developers}}
