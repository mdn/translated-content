---
title: "javascript: URL"
short-title: "javascript:"
slug: Web/URI/Reference/Schemes/javascript
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

> [!WARNING]
> ウェブ上で `javascript:` URL を使用することは推奨されていません。これは、[`eval()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval)を使用することによる影響と同様に、任意のコードが実行される可能性があるためです。また、通常のリンク動作とは異なるため、{{glossary("Accessibility", "アクセシビリティ")}}が縮小する可能性があります。

**JavaScript URL**、つまり `javascript:` スキームを接頭辞とする URL は、ブラウザーがナビゲートしようとした際に JavaScript を実行する擬似的なナビゲーション対象として使用されます。 URL が文字列として評価された場合、HTML として扱われ、ブラウザーによってレンダリングされます。

## 構文

```url
javascript:<script>
```

- `javascript:`
  - : この URL のスキームです。
- `<script>`
  - : 実行する JavaScript コード。コードはスクリプトとして解釈されます。

## 解説

`javascript:` URL は、URL がナビゲーション対象とする場所であればどこでも使用することができます。これには以下を含めることができますが、これに制限されるものではありません。

- `<a>` または `<area>` 要素の [`href`](/ja/docs/Web/HTML/Reference/Elements/a#href) 属性。
- `<form>` 要素の [`action`](/ja/docs/Web/HTML/Reference/Elements/form#action) 属性。
- `<iframe>`要素の [`src`](/ja/docs/Web/HTML/Reference/Elements/iframe#src) 属性。
- JavaScript の [`window.location`](/ja/docs/Web/API/Window/location) プロパティ。
- ブラウザーのアドレスバー自体。

> [!NOTE]
> 他にも、`<link>` 要素の [`href`](/ja/docs/Web/HTML/Reference/Elements/link#href) 属性のように、URL を使用するコンテキストもありますが、これらはリソースの場所であり、ナビゲーションの対象ではないため、`javascript:` URL は許可されていません。このような用途で JavaScript をインラインで書きたい場合は、[`data:`](/ja/docs/Web/URI/Reference/Schemes/data) URL と `text/javascript` MIME タイプを使用してください。

ブラウザーがそのような場所に移動しようとすると、スクリプト本体を解釈し実行します。スクリプトは、[`eval()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval) で実行された場合と同じ値である、_補完値_（返値ではありません）を持つことができます。最後の文が[式](/ja/docs/Web/JavaScript/Reference/Statements/Expression_statement)の場合は、補完値はその式の値となります。この補完値が文字列の場合は、その文字列は HTML 文書として扱われ、ブラウザーは現在のページと同じ URL を使用して、そのコンテンツを含む新しい文書に移動します。履歴項目は作成されません。補完値が文字列でない場合、ブラウザーはコードを実行するだけで、移動はしません。そのため、スクリプトが `javascript:foo()` のように関数を呼び出すことで終わっている場合、関数が文字列を返す可能性がある場合に誤って移動しないように、{{jsxref("Operators/void", "void")}} を接頭辞として付けることが推奨されることがよくあります。

JavaScript でのナビゲーションは、[コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Guides/CSP) の設定、具体的には {{CSP("script-src")}} によってブロックされる場合があります。

## 例

### `javascript:` URL を href の対象として使用

この例では、`<a>` 要素の `href` 属性を `javascript:` URL に設定し、クリックするとメッセージを表示するようにします。

```html example-bad
<a href="javascript:alert('Hello, world!')">クリックしてね</a>
```

{{domxref("Window/alert", "alert()")}} が `undefined` を返すため、ブラウザーは新しいページに移動しません。これは、リンクが実際にはハイパーリンクではないため、好ましくない方法です。代わりにボタンにすることを検討してください。

```html example-good
<button id="btn">クリックしてね</button>
<script>
  document.getElementById("btn").addEventListener("click", () => {
    alert("Hello, world!");
  });
</script>
```

例えば、`<a>` 要素の `href` 属性を `javascript:` URL に設定すると、"Hello, world!" というコンテンツを持つ新しいページに移動します。

```html example-bad
<a href="javascript:pageContent">クリックしてね</a>
<script>
  // var を使用するとグローバル変数となり、他の場所でも読み取ることができます。
  var pageContent = "Hello, world!";
</script>
```

なお、`javascript:` URL は履歴項目を作成しないため、前回ページに戻るには再読み込みする以外の方法はありません。

### `javascript:` URL をフォーム処理として使用

この例では、`<form>` 要素の `action` 属性を `javascript:` URL に設定し、送信するとメッセージが表示されるようにします。

```html example-bad
<form action="javascript:alert(myInput.value)">
  <input id="myInput" />
  <input type="submit" value="Submit" />
</form>
```

これを行う代わりに、フォームを送信する `submit` イベントを待ち受けし、JavaScript で処理することを検討してください。

```html example-good
<form id="myForm">
  <input id="myInput" />
  <input type="submit" value="Submit" />
</form>
<script>
  document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault();
    alert(document.getElementById("myInput").value);
  });
</script>
```

### `javascript:` URL を iframe のソースとして使用

この例では、`<iframe>` 要素の `src` 属性に、コンテンツ "Hello, world!" を含む新しいページにナビゲートする `javascript:` URL を設定します。

```html example-bad
<iframe src="javascript:pageContent"></iframe>
<script>
  // var を使用するとグローバル変数となり、他の場所でも読み取ることができます。
  var pageContent = "Hello, world!";
</script>
```

その代わりに、`srcdoc` 属性を設定することを検討してください。

```html example-good
<iframe id="myFrame"></iframe>
<script>
  document.getElementById("myFrame").srcdoc = "Hello, world!";
</script>
```

### `javascript:` URL を window.location で使用

この例では、`window.location` プロパティを `javascript:` URL に設定し、"Hello, world!" というコンテンツを含む新しいページに移動します。

```js example-bad
window.location = "javascript:'Hello world!'";
```

これを行う代わりに、[DOM API](/ja/docs/Web/API/HTML_DOM_API) を使用してページコンテンツを変更することを検討してください。例えば次のようにします。

```js example-good
document.body.textContent = "Hello, world!";
```

## 仕様書

{{Specifications}}

## 関連情報

- [URI](/ja/docs/Web/URI)
- [コンテンツセキュリティポリシー (CSP)](/ja/docs/Web/HTTP/Guides/CSP)
- [IANA list of URI schemes](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
