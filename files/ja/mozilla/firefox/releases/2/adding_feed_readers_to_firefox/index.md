---
title: Firefox へのフィードリーダーの追加
slug: Mozilla/Firefox/Releases/2/Adding_feed_readers_to_Firefox
---

Firefox 2 より、Firefox はフィードを読む際に使う RSS または Atom フィードリーダを選択できるようになっています。この記事ではデフォルトではサポートされていないリーダを追加サポートさせる方法について説明します。

## 新しいウェブベースのフィードリーダの追加

新しいウェブベースのフィードリーダを追加サポートさせるためにやらなければならないことは、3 つの新しい設定項目を追加することだけです。

- `browser.contentHandlers.types.number.title`
  - : フィードリーダの名前。
- `browser.contentHandlers.types.number.type`
  - : フィードリーダに使用するため、ここは "application/vnd.mozilla.maybe.feed" にする。
- `browser.contentHandlers.types.number.uri`
  - : フィードリーダの URI。フィードの URL が挿入されるべき部分に "%s" を使用する。

`number` は既に使われている数のうち最大のものよりもより 1 つ大きな数で置き換えてください。例えば "Easy Reader" という新しいフィードリーダを追加したい場合、かつ 0 から 4 までの数が指定されたコンテンツハンドラが既に定義されている場合、このように `number` には 5 を使用してください。

- `browser.contentHandlers.types.5.title`: `Easy Reader`
- `browser.contentHandlers.types.5.type`: `application/vnd.mozilla.maybe.feed`
- `browser.contentHandlers.types.5.uri`: `http://www.theeasyreaderurl.com?feed=%s`

`about:config` を使うことでこれらの設定項目を手動で追加できます。拡張機能で新しいフィードリーダをインストールしたいのであれば、プログラム側で行うこともできます。

### ウェブアプリケーションからのフィードリーダの追加

ウェブ上の JavaScript コードから簡単にフィードリーダを追加することができます。このためには、このような {{domxref("navigator.registerContentHandler()")}} 関数を使用します。

```js
navigator.registerContentHandler(
  "application/vnd.mozilla.maybe.feed",
  "http://www.theeasyreaderurl.com?feed=%s",
  "Easy Reader",
);
```

### 新しいフィードリーダアプリケーションの追加

これを最も簡単に行う方法というのは、単に設定（あるいは オプション、ご使用のプラットフォームによります）ウィンドウの フィード パネルという既存のユーザインタフェースを使用することです。

> **メモ:** Firefox 8 よりフィードパネルは無くなっています。フィードリーダーの開発者が、Web フィードの処理の為のオプションをご自分で追加する場合、上記の同様の JavaScript コードを実装することをお勧めします。

これも拡張機能からプログラムで行うこともできます。フィードリーダに使うアプリケーションのパス名を `browser.feeds.handlers.application` オプションの値に設定することで可能です。

## 関連情報

- {{ domxref("window.navigator.registerContentHandler()") }}
