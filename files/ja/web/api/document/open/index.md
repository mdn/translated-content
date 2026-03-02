---
title: "Document: open() メソッド"
short-title: open()
slug: Web/API/Document/open
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`Document.open()`** メソッドは、{{domxref("Document.write", "書き込み", "", "1")}}のために文書を開きます。

これはいくらかの副作用を招きます。例を挙げます。

- 文書、文書内のノード、文書のウィンドウに現在登録されているイベントリスナーがすべて除去されます。
- すべての既存のノードが文書から除去されます。

## 構文

```js-nolint
open()
```

### 引数

なし。

### 返値

`Document` オブジェクトインスタンスです。

## 例

以下の簡単なコードは、文書を開き、その内容をいくつかの異なる HTML の断片に置き換えてから、再び閉じます。

```js
document.open();
document.write("<p>Hello world!</p>");
document.write("<p>I am a fish</p>");
document.write("<p>The number is 42</p>");
document.close();
```

## メモ

ページが読み込まれたあとで {{domxref("document.write()")}} が呼び出されると、自動的に `document.open()` が呼び出されます。

### コンテンツのセキュリティ

このメソッドは他のプロパティと同じ[同一オリジンポリシー](/ja/docs/Web/Security/Defenses/Same-origin_policy)に従います。このメソッドによって文書のオリジンが変更される場合は動作しません。

## 引数 3 つの document.open()

あまり知られていませんが、あまり使われていない引数 3 つ版の `document.open()` があり、これは {{domxref("Window.open()")}} のエイリアスです (詳細はそのページを参照してください)。

この呼び出しは、例えば github.com を新しいウィンドウで開き、オープナーは `null` に設定してみます。

```js
document.open("https://www.github.com", "", "noopener=true");
```

## 引数 2 つの document.open()

ブラウザーは以下の形で、引数 2 つの `document.open()` に対応してきました。

```js
document.open(type, replace);
```

`type` は書き込もうとしているデータの MIME タイプ (`text/html` など) を指定し、 replace が設定されていれば (すなわち "replace" の文字列)、新しい文書の履歴エントリーが書き込まれている文書の現在の履歴エントリーを置き換えることを指定していました。

この形式は現在では廃止されています。エラーは発生せず、代わりに `document.open()` に転送されます (つまり、引数なしで実行した場合と同等です)。 履歴の置換動作は常に行われるようになりました。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document")}}
- {{domxref("Window.open()")}}
