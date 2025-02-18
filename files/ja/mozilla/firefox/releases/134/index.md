---
title: Firefox 134 for developers
slug: Mozilla/Firefox/Releases/134
l10n:
  sourceCommit: f65bc685391ad06b6d1fbef84b217459002f073f
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 134 の変更点をまとめています。Firefox 134 は、米国時間 [2025 年 1 月 7 日](https://whattrainisitnow.com/release/?version=134) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### CSS

- {{CSSXRef("align-self")}}、{{CSSXRef("justify-self")}} CSS プロパティおよび {{CSSXRef("place-self")}} CSS ショートハンドプロパティを [絶対位置指定](/ja/docs/Learn_web_development/Core/CSS_layout/Positioning#絶対位置指定) の要素でサポートしました ([Firefox bug 1920160](https://bugzil.la/1920160))。

### JavaScript

- 文字列内で正規表現の構文に該当する可能性がある文字をエスケープして、{{jsxref("RegExp/RegExp", "RegExp()")}} コンストラクターで [リテラル](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) パターンとして安全に使用できる新たな文字列を返す、{{jsxref("RegExp.escape()")}} 静的メソッドをサポートしました。 ([Firefox bug 1918235](https://bugzil.la/1918235))。
- 便利な {{jsxref("Promise.try()")}} メソッドをサポートしました。
  このメソッドはあらゆる種類 (値を返す関数、例外が発生する関数、同期関数、非同期関数) のコールバックを受け取り、その結果を {{jsxref("Promise")}} にラップします。
  これはあらゆる種類のメソッドの結果を promise のセマンティクス ({{jsxref("Promise.then", ".then()")}}、{{jsxref("Promise.catch", ".catch()")}}) で処理可能にします ([Firefox bug 1917879](https://bugzil.la/1917879)、[Firefox bug 1905364](https://bugzil.la/1905364))。

### API

- [プッシュメッセージ](/ja/docs/Web/API/Push_API) のペイロードの暗号化に使用できる暗号化アルゴリズムを取得する [`PushManager.supportedContentEncodings`](/ja/docs/Web/API/PushManager/supportedContentEncodings_static) 静的メソッドをサポートしました ([Firefox bug 1497430](https://bugzil.la/1497430))。
- {{domxref("AudioParam.value")}} で、自動イベントが予定されている間に値を設定できるようになりました。以前は、その間に行った操作を黙って無視していました ([Firefox bug 1308435](https://bugzil.la/1308435))。
- {{domxref("ReadableStreamBYOBReader.read()")}} メソッドで、それぞれの呼び出しで返される要素の最小数量を指定する新たな引数 [`options.min`](/ja/docs/Web/API/ReadableStreamBYOBReader/read#min) が使用可能になりました。これはたとえば、サイズが既知のデータ構造を処理する際に不必要な反復処理を防ぐために使用できます ([Firefox bug 1864406](https://bugzil.la/1864406))。

#### DOM

#### Media、WebRTC、Web Audio

- [VP8 コーデック](/ja/docs/Web/Media/Formats/Video_codecs#vp8) を使用した画面共有動画の WebRTC サイマルキャストをサポートしました (ほかの動画ソースのサイマルキャストは以前から可能でした)。より正確には VP8 を使用しているときに、画面およびウィンドウのキャプチャー (たとえば {{domxref("MediaDevices.getDisplayMedia()")}}) の {{domxref("MediaStreamTrack")}} オブジェクトを複数のサイマルキャストレイヤーとしてエンコードできます ([Firefox bug 1692873](https://bugzil.la/1692873))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- `browser.getClientWindows` コマンドを実装しました。これは、現在開いているブラウザーウィンドウに関する情報を取得できます ([Firefox bug 1855025](https://bugzilla.mozilla.org/show_bug.cgi?id=1855025))。
- すべてのネットワークイベントで `initiatorType` および `destination` フィールドをサポートしました ([Firefox bug 1904892](https://bugzilla.mozilla.org/show_bug.cgi?id=1904892) および [Firefox bug 1933331](https://bugzilla.mozilla.org/show_bug.cgi?id=1933331))。これらにより、なぜ・どのようにしてリクエストが作成されたかを知ることができます。
- 新しいトップレベルブラウジングコンテキストで about:blank が読み込まれたときに、`browsingContext.navigationStarted` イベントが発生しなくなりました ([Firefox bug 1922014](https://bugzilla.mozilla.org/show_bug.cgi?id=1922014))。
- ネットワークイベントの `requestTime` に 0 が設定される場合がある不具合を修正しました ([Firefox bug 1930849](https://bugzilla.mozilla.org/show_bug.cgi?id=1930849))。
- `browsingContext.traverseHistory` コマンドが、トップレベルブラウジングコンテキストだけで使用可能になりました ([Firefox bug 1924859](https://bugzilla.mozilla.org/show_bug.cgi?id=1924859))。
- ブラウジングコンテキストが置き換えられるときなど、ナビゲーション中に送信するコマンドの確実性を向上しました ([Firefox bug 1927073](https://bugzilla.mozilla.org/show_bug.cgi?id=1927073))。

#### Marionette

- `Addon:Install` および `Addon:Uninstall` コマンドが GeckoView (Android 版 Firefox) で使用可能になりました ([Firefox bug 1806135](https://bugzilla.mozilla.org/show_bug.cgi?id=1806135))。
- `Addon:Install` コマンドで、プライベートブラウジンングモードで有効な拡張機能がインストール可能になりました ([Firefox bug 1810718](https://bugzilla.mozilla.org/show_bug.cgi?id=1810718))。

## 実験的なウェブ機能

以下の機能は Firefox 134 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **`Intl.DurationFormat`** (Nightly 版): {{jsxref("Intl.DurationFormat")}} は、期間を言語に依存して表記できます ([Firefox bug 1648139](https://bugzil.la/1648139))。
- **`autocorrect`**: <code>dom.forms.autocorrect</code>。
  HTML の [`autocorrect`](/ja/docs/Web/HTML/Global_attributes/autocorrect) 属性および {{domxref("HTMLElement.autocorrect")}} プロパティは、編集可能なテキスト要素 (多くのテキスト型 {{htmlelement("input")}} 要素、{{htmlelement("textarea")}} 要素、[`contenteditable`](/ja/docs/Web/HTML/Global_attributes/contenteditable) 属性を設定した要素) のオートコレクトを許可します ([Firefox bug 1725806](https://bugzil.la/1725806))。

## 過去のバージョン

{{Firefox_for_developers}}
