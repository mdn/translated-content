---
title: Firefox へのフィードリーダーの追加
slug: Mozilla/Firefox/Releases/2/Adding_feed_readers_to_Firefox
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 2 より、Firefox はフィードを読む際に使う RSS または Atom フィードリーダを選択できるようになっています。この記事ではデフォルトではサポートされていないリーダを追加サポートさせる方法について説明します。

## 新しいウェブベースのフィードリーダの追加

### ウェブアプリケーションからのフィードリーダの追加

ウェブからのフィードリーダーの追加機能は HTML5 仕様から除去され、Firefox での対応も Firefox 62 で廃止される予定です。
{{Deprecated_Inline}}

以前のバージョンでは、ウェブ上の JavaScript コードは、`navigator.registerContentHandler()` 関数を使用してフィードリーダーを追加することができました。

```js
navigator.registerContentHandler(
  "application/vnd.mozilla.maybe.feed",
  "https://www.example.com/?feed-feed=%s",
  "My Feed Reader",
);
```

なお、ウェブコンテンツでは、呼び出しを行うページと同じオリジンを持つハンドラー URL のみを追加できる点にご注意ください。

### 手動で新しいフィードリーダーを追加

Firefox 63 では、新しいフィードリーダーの追加機能が除去されました。{{deprecated_inline}}.

Firefox 63 以前では、新しいウェブベースのフィードリーダーに対応させるには、3 つの新しい環境設定を追加する必要がありました。

- `browser.contentHandlers.types.number.title`
  - : フィードリーダの名前。
- `browser.contentHandlers.types.number.type`
  - : フィードリーダに使用するため、ここは "application/vnd.mozilla.maybe.feed" にする。
- `browser.contentHandlers.types.number.uri`
  - : フィードリーダの URI。フィードの URL が挿入されるべき部分に "%s" を使用する。

`number` は既に使われている数のうち最大のものよりもより 1 つ大きな数で置き換えてください。例えば "Easy Reader" という新しいフィードリーダを追加したい場合、かつ 0 から 4 までの数が指定されたコンテンツハンドラーが既に定義されている場合、このように `number` には 5 を使用してください。

- `browser.contentHandlers.types.5.title`: `Easy Reader`
- `browser.contentHandlers.types.5.type`: `application/vnd.mozilla.maybe.feed`
- `browser.contentHandlers.types.5.uri`: `http://www.theeasyreaderurl.com?feed=%s`

`about:config` にアクセスして、これらの環境設定を手動で追加することができます。

### 新しいフィードリーダーアプリケーションを追加

このことを行う最も簡単な方法は、指定されたユーザーインターフェースを使用し、「環境設定」（お使いのプラットフォームによっては「オプション」）ウィンドウ内の「フィード」パネルを利用することです。
