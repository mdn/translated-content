---
title: Content Security Policy
slug: Mozilla/Add-ons/WebExtensions/Content_Security_Policy
---

{{AddonSidebar}}

WebExtension APIs で開発される拡張機能には、既定で適用される CSP(Content Security Policy の略) があります。これは [\<script>](/ja/docs/Web/HTML/Element/script) と [\<object>](/ja/docs/Web/HTML/Element/object) リソースから読み込まれるソースを制限し、危険な行動、例えば [`eval()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval) の使用を非許可にします。

この記事では CSP とは何かと、デフォルトポリシーとは何で拡張機能にはどんな意味があるのかと、拡張機能が既定の CSP を変更する方法を簡単に説明します。

[Content Security Policy](/ja/docs/Web/HTTP/CSP) (CSP) はウェブサイトが悪意のあるコンテンツを実行するのを防ぐのに役立つメカニズムです。ウェブサイトは サーバーから送られてくる HTTP ヘッダーを使って CSP を指定します。CSP は主に、スクリプトや組み込みプラグインといったさまざまな種類のコンテンツの合法なソースを特定することに関心を持っています。例えば、ウェブサイトは、ウェブサイト自身からの JavaScript だけを実行し、他のソースは受け付けないように指定できます。CSP はブラウザーに [`eval()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval)のような、潜在的に危険な行動を禁止するよう指示することもできます。

ウェブサイトと同様に、拡張機能はさまざまなソースからコンテンツを読み込めます。例えば、ブラウザーアクションのポップアップは HTML 文書として指定できて、通常のウェブページのようにさまざまなソースからの JavaScript と CSS を入れることができます:

```html
<!doctype html>

<html>
  <head>
    <meta charset="utf-8" />
  </head>

  <body>
    <!--Some HTML content here-->

    <!--
      Include a third-party script.
      See also https://developer.mozilla.org/ja/docs/Web/Security/Subresource_Integrity.
    -->
    <script
      src="https://code.jquery.com/jquery-2.2.4.js"
      integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="
      crossorigin="anonymous"></script>

    <!-- Include my popup's own script-->
    <script src="popup.js"></script>
  </body>
</html>
```

ウェブサイトと比較して、拡張機能は追加の特権付き API にアクセスできるので、悪意のあるコードに感染した場合、リスクは大きくなります。このため:

- かなり厳密な CSP がデフォルトで適用されます。[既定の content security policy](/ja/Add-ons/WebExtensions/Content_Security_Policy#Default_content_security_policy) を見てください
- 拡張機能のオーナーは `content_security_policy` manifest.json キーを使ってデフォルトのポリシーを変更できますが、許可できるポリシーには制限があります。[`content_security_policy`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) を見てください。

## 既定の content security policy

拡張機能の既定の CSP は次のものです:

```
"script-src 'self'; object-src 'self';"
```

これは、[`content_security_policy`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) の manifest.json key を使って明示的に CSP をセットしないあらゆる拡張機能にあてはまります。下記の結論になります:

- [\<script> と \<object> リソースは拡張機能のローカルからのみ読み込みできる](/ja/Add-ons/WebExtensions/Content_Security_Policy#Location_of_script_and_object_resources)
- [拡張機能は JavaScript で文字列を評価 (eval) できない](</ja/Add-ons/WebExtensions/Content_Security_Policy#eval()_and_friends>)
- [インライン JavaScript は実行されない](/ja/Add-ons/WebExtensions/Content_Security_Policy#Inline_JavaScript)

### スクリプトとオブジェクトリソースの場所

既定の CSP の下では、拡張機能のローカルにある [\<script>](/ja/docs/Web/HTML/Element/script) と [\<object>](/ja/docs/Web/HTML/Element/object) リソースだけを読み込みできます。例えば、拡張機能の文書内にこんな行があるとします:

```html
<script src="https://code.jquery.com/jquery-2.2.4.js"></script>
```

これは要求したリソースを読み込みません: 静かに失敗し、このリソースから取ってきたはずのいかなるオブジェクトも見つかりません。この解決方法が 2 つあります:

- リソースをダウンロードして、拡張機能にパッケージして、このリソース版を参照する
- 必要なリモートオリジンを許可するために [`content_security_policy`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) を使う

### eval() とその仲間

既定の CSP の下で、拡張機能は JavaScript 内の文字列の評価を許可しません。つまり次のことは許可されません:

```js
eval("console.log('some output');");
```

```js
window.setTimeout("alert('Hello World!');", 500);
```

```js
var f = new Function("console.log('foo');");
```

### インライン JavaScript

既定の CSP ではインライン JavaScript は実行されません。これは `<script>` タグで直接置かれた JavaScript と、インラインイベントハンドラーの両方とも許可されず、つまり次のことは許可されません:

```html
<script>
  console.log("foo");
</script>
```

```html
<div onclick="console.log('click')">Click me!</div>
```

ページが読み込まれた時にスクリプトを実行するのに `<body onload="main()">` のようなコードを使っている場合、代わりに [DOMContentLoaded](/ja/docs/Web/Events/DOMContentLoaded) か [load](/ja/docs/Web/Events/load) をリッスンします。
