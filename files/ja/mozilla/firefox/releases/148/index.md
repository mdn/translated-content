---
title: Firefox 148 release notes for developers (Stable)
short-title: Firefox 148 (Stable)
slug: Mozilla/Firefox/Releases/148
l10n:
  sourceCommit: 71bf9d9aafdab8fea55d3cde76982f94cc313013
---

このページでは、開発者に影響する Firefox 148 の変更点をまとめています。
Firefox 148 は、米国時間 [2026 年 2 月 24 日](https://whattrainisitnow.com/release/?version=148) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

- 最初の `about:blank` 文書を同期的に読み込むようになりました。ブラウジングコンテキストの最初のナビゲーションが `about:blank` に解決される場合があります (たとえば、最初の URL が空のときや `about:blank` を明示的に設定したとき)。このような場合に Firefox は、最初の空の文書を非同期に読み込んだ第二の文書へ置き換えるのではなく、最初の文書で同期的に `load` イベントを発生させます ([Firefox bug 543435](https://bugzil.la/543435))。

### CSS

- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning) の {{cssxref("position-area")}} プロパティが、ビューポートでアンカー位置指定された要素を正しく保持するようになりました ([Firefox bug 2008537](https://bugzil.la/2008537))。

- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning) の {{cssxref("position-try-order")}} をサポートして、利用可能な領域に基づいて試行する位置指定フォールバックオプションの順序を変更できるようになりました。これは {{cssxref("position-try")}} ショートハンドプロパティにも影響を与えます ([Firefox bug 1989059](https://bugzil.la/1989059))。

- {{cssxref("overflow")}}、{{cssxref("overflow-x")}}、{{cssxref("overflow-y")}} CSS プロパティが画像などの {{glossary("置換要素")}} で、ほかの要素と同じ方法で使用可能になりました。
  以前は、置換要素は常にバウンディングコンテナーでクリッピングされていました ([Firefox bug 1999100](https://bugzil.la/1999100))。

- {{cssxref("basic-shape/shape")}} CSS 関数がデフォルトで使用可能になりました。`shape()` は、1 つ以上の "シェイプコマンド" を使用して {{cssxref("clip-path")}} および {{cssxref("offset-path")}} プロパティでシェイプを定義できる {{cssxref("basic-shape")}} データ型です。これらのコマンドは the [SVG パスコマンド](/ja/docs/Web/SVG/Reference/Attribute/d#パスコマンド) によく似ています。`shape()` 関数はいくつかの点で {{cssxref("basic-shape/path","path()")}} 関数に似ていますが、`path()` が [SVG パス](/ja/docs/Web/SVG/Reference/Element/path) 構文を使用するのとは異なり、`shape()` は標準 CSS 構文を使用します。これにより CSS の単位や数学関数を使用することができ、シェイプの作成や編集が容易になります ([Firefox bug 1982941](https://bugzil.la/1982941))。

### JavaScript

- {{jsxref("Iterator.zip()")}} および {{jsxref("Iterator.zipKeyed()")}} 静的メソッドをサポートしました。
  これらは複数のイテレーターを "ファスナーで留める" ようにまとめて、それぞれの反復ステップで入力要素のグループを生成する新たなイテレーターを返します。
  これらは、位置合わせされた複数の入力イテレーター (1 番目のイテレーターが生成した 1 番目の値が、ほかのイテレーターが生成した 1 番目の値に対応するなど) からのデータを結合することが必要な場合に役に立ちます ([Firefox bug 2003333](https://bugzil.la/2003333))。

- [TC39 Legacy RegExp features in JavaScript](https://github.com/tc39/proposal-regexp-legacy-features) 提案を実装しました。
  これは {{jsxref("RegExp.prototype.compile()")}} を、{{jsxref("RegExp")}} のサブクラスや異なるレルムで定義された `RegExp` で呼び出したときに {{jsxref("TypeError")}} が発生するように更新します。
  `RegExp.$1` – `RegExp.$9` や `RegExp.input` (および別名の `RegExp.$_`) といった `RegExp` の静的プロパティは、設定可能かつ列挙不可なものに共通化されました。
  具体的には、これらが `RegExp` オブジェクトから削除可能になったことを意味します ([Firefox bug 1306461](https://bugzil.la/1306461))。

### API

- [HTML Sanitizer API](/ja/docs/Web/API/HTML_Sanitizer_API) と、これに関連する {{domxref("Element.setHTML", "setHTML()")}} などのメソッドをサポートしました。
  これは HTML を DOM へ挿入する前にサニタイズすることができ、結果のコンテンツを全面的に制御して XSS 攻撃の危険性を軽減します ([Firefox bug 1650370](https://bugzil.la/1650370))。

- [Trusted Types API](/ja/docs/Web/API/Trusted_Types_API) をサポートしました。
  これは XSS 攻撃を媒介するために使用される可能性があるプロパティや関数が、変換関数を通したデータを伴って呼び出すことのみ可能になることを保証する仕組みを提供します。
  この仕組みで、コードの安全でない使い方を検査できます。
  それらはデータの変換方法を強制しませんが、たとえばユーザーが提供した文字列で安全でない HTML 要素をサニタイズするために使用できるでしょう ([Firefox bug 1994690](https://bugzil.la/1994690))。

- {{domxref("Location.ancestorOrigins")}} プロパティをサポートしました。これは文書が {{htmlelement("iframe")}} に埋め込まれているか否か、また埋め込まれている場合はどのサイトに埋め込まれているかを確認できます ([Firefox bug 1085214](https://bugzil.la/1085214))。

- {{domxref("Element/pointerrawupdate_event", "pointerrawupdate")}} イベントの {{domxref("MouseEvent.movementX", "movementX")}} および {{domxref("MouseEvent.movementY", "movementY")}} プロパティは、ポインターが移動したときに値が設定されるようになりました。以前はゼロが設定されていました ([Firefox bug 1987671](https://bugzil.la/1987671))。

- [Navigation API](/ja/docs/Web/API/Navigation_API) の {{domxref("NavigationPrecommitController.addHandler()")}} メソッドをサポートしました。
  このメソッドはコミット前のナビゲーションハンドラーの内部で、コミット後のハンドラーを動的に登録するために使用できます。これはコミットしたナビゲーションのアクションがコミット前のフェーズで読み込むデータに依存する場合に便利です ([Firefox bug 2009004](https://bugzil.la/2009004))。

#### DOM

- (ウェブ拡張機能に加えて) ウェブコンテンツで {{domxref("Document.execCommand()")}} の "paste" コマンドが使用可能になりました。
  これは [Clipboard API](/ja/docs/Web/API/Clipboard_API) を使用して実装しており、たとえばクロスオリジンのコンテンツを貼り付けるときに一時的な許可やユーザーの承認が必要といった、[セキュリティの考慮](/ja/docs/Web/API/Clipboard_API#セキュリティの考慮) も同じく共有します ([Firefox bug 1998195](https://bugzil.la/1998195))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### 一般

- 新しいウィンドウを開くときに必要なブラウザー機能を初期化する間の競合状態を解消して、直ちに別の URL へ移動する際の問題を防止します ([Firefox bug 1891028](https://bugzil.la/1891028))。
- Marionette で WebDriver BiDi の `clientWindow` ID を誤ってウィンドウハンドルとして使用した場合の、Marionette と WebDriver BiDi の相互運用性の問題を修正しました ([Firefox bug 2002949](https://bugzil.la/2002949))。

#### WebDriver BiDi

- ブラウザーの chrome スコープ (Firefox のウィンドウ自身) との対話機能の初期サポートを追加しました。`browsingContext.getTree` コマンドがベンダー固有引数 `moz:scope` を受け入れるようになり、値 `chrome` を設定して Firefox を `--remote-allow-system-access` 引数を伴って起動したときに chrome コンテキストを返します。これらのコンテキストは Gecko API へアクセスできる特権付き JavaScript を実行するために、`script.evaluate` や `script.callFunction` と合わせて使用できます。ほかのコマンドはまだ chrome コンテキストでサポートしていませんが、必要に応じて段階的にサポートする予定です ([Firefox bug 1944568](https://bugzil.la/1944568)、[Firefox bug 1944570](https://bugzil.la/1944570)、[Firefox bug 1851788](https://bugzil.la/1851788))。
- `emulation.setGeolocationOverride` および `emulation.setScreenOrientationOverride` コマンドを、新たなリセット動作を実装するために更新しました。コンテキストは引数 `contexts` が与えられた場合に限ってリセットされます。また、ユーザーコンテキストは引数 `userContexts` を指定した場合に限ってリセットされます ([Firefox bug 1998732](https://bugzil.la/1998732)、[Firefox bug 1998734](https://bugzil.la/1998734))。
- `browsingContext.create` で、フォアグラウンドで新しいタブを開くとドキュメントが表示される前に処理から戻る可能性がある競合状態を修正しました ([Firefox bug 2003857](https://bugzil.la/2003857))。
- エラーページにリダイレクトするナビゲーションで発生する不具合を修正しました ([Firefox bug 2013822](https://bugzil.la/2013822))。
- `network.getData` で、チャンク化されたレスポンスボディをデコードするときにサイズ不一致のために `RangeError` が発生する不具合を修正しました ([Firefox bug 2004973](https://bugzil.la/2004973))。
- `browsingContext.userPromptOpened` および `browsingContext.userPromptClosed` イベントが、誤って iframe のコンテキスト ID ではなくトップレベルのコンテキスト ID を報告する不具合を修正しました ([Firefox bug 1964905](https://bugzil.la/1964905))。
- WebDriver BiDi でコマンドの実行中に、選択したコンテキストが使用できなくなった場合のパフォーマンスを約 100 ミリ秒改善しました ([Firefox bug 1934326](https://bugzil.la/1934326))。

#### Marionette

- [Reporting API でテストレポートを生成する](https://www.w3.org/TR/reporting-1/#generate-test-report-command) ための `Reporting:GenerateTestReport` コマンドを追加しました ([Firefox bug 1909662](https://bugzil.la/1909662))。

## 実験的なウェブ機能

以下の機能は Firefox 148 で導入しましたが、デフォルトで無効です。
これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。
[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **Document Picture-in-Picture API** (Nightly): `dom.documentpip.enabled`

  [Document Picture-in-Picture API](/ja/docs/Web/API/Document_Picture-in-Picture_API) は、独自のコントロールをもつ動画やビデオ会議の参加者を表示するストリームなど任意の HTML コンテンツを収めることができる、常に手前に表示されるウィンドウを開くことができます ([Firefox bug 1858562](https://bugzil.la/1858562))。
