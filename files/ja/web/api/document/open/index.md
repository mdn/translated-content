---
title: Document.open()
slug: Web/API/Document/open
---

{{APIRef("DOM")}}

**`Document.open()`** メソッドは、{{domxref("Document.write", "書き込み", "", "1")}}のために文書を開きます。

これはいくらかの副作用を招きます。例を挙げます。

- 文書、文書内のノード、文書のウィンドウに現在登録されているイベントリスナーがすべて除去されます。
- すべての既存のノードが文書から除去されます。

## 構文

```
document.open();
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

## 注

ページが読み込まれたあとで {{domxref("document.write()")}} が呼び出されると、自動的に `document.open()` が呼び出されます。

Firefox や Internet Explorer では何年も前から、すべてのノードの削除に加えて、 JavaScript の変数なども追加で消去していました。今はそうではありません。document non-spec'ed parameters to document.open

### Gecko 固有のメモ

Gecko 1.9 以降、このメソッドは他のプロパティと同一オリジンポリシーが同じになるようになり、文書のオリジンを変更しようとした場合に動作しません。

Gecko 1.9.2 以降、 `document.open()` は[プリンシパル](/ja/docs/Security_check_basics)をスタックからフェッチするのではなく、 URI を使用する文書のプリンシパルを使用します。その結果、 [`wrappedJSObject`](/ja/wrappedJSObject) を使用しても、 {{domxref("document.write()")}} を{{Glossary("chrome", "クローム")}}からの信頼できない文書に呼び出すことはできません。考え方については[セキュリティチェックの基本](/ja/Security_check_basics)を参照してください。

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

`type` は書き込もうとしているデータの MIME タイプ (`text/html` など) を指定し、 replace が設定されていれば (すなわち "replace" の文字列)、新しい文書の履歴エントリが書き込まれている文書の現在の履歴エントリを置き換えることを指定していました。

この形式は現在では廃止されています。エラーは発生せず、代わりに `document.open()` に転送されます (つまり、引数なしで実行した場合と同等です)。 履歴の置換動作は常に行われるようになりました。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## See also

- {{domxref("Document")}}
- {{domxref("Window.open()")}}
