---
title: "ShadowRoot: setHTMLUnsafe() メソッド"
short-title: setHTMLUnsafe()
slug: Web/API/ShadowRoot/setHTMLUnsafe
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("Shadow DOM")}}

> [!WARNING]
> このメソッドは、入力を HTML として構文解析し、その結果を DOM に書き込みます。
> このような API は[インジェクションシンク](/ja/docs/Web/API/Trusted_Types_API#概念と使い方)と呼ばれ、入力が攻撃者から来たものであれば、[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS) 攻撃の経路となる可能性があります。
>
> このリスクを軽減するには、文字列の代わりに常に `TrustedHTML` オブジェクトを渡し、[信頼型を強制する](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)ようにしてください。
> 詳しくは[セキュリティの注意事項](#セキュリティの注意事項)を参照してください。

> [!NOTE]
> このメソッドの代わりに、{{domxref("ShadowRoot.setHTML()")}} をほぼ常に（対応しているブラウザーでは）使用すべきです。これは、XSS のリスクがある HTML エンティティを常に除去してくれるためです。

**`setHTMLUnsafe()`** は {{domxref("ShadowRoot")}} インターフェイスのメソッドで、HTML 入力を {{domxref("DocumentFragment")}} へ構文解析し、必要に応じて不要な要素や属性を除外した上で、それを用いてシャドウ DOM 内の既存のツリーを置き換えることができます。

## 構文

```js-nolint
setHTMLUnsafe(input)
setHTMLUnsafe(input, options)
```

### 引数

- `input`
  - : {{domxref("TrustedHTML")}} のインスタンス、または構文解析の対象となる HTML を定義する文字列。
- `options` {{optional_inline}}
  - : 以下のオプション引数をつけているオプションオブジェクト。
    - `sanitizer` {{optional_inline}}
      - : {{domxref("Sanitizer")}} オブジェクトか {{domxref("SanitizerConfig")}} オブジェクトで、入力のどの要素が許可されるか除去されるかを定義します。
      - : {{domxref("Sanitizer")}} または {{domxref("SanitizerConfig")}} オブジェクトで、入力のどの要素が許可されたり削除されたりするかを定義します。
        値が `"default"` の文字列を指定することもでき、これは `Sanitizer` を（XSS 対策済みの）[デフォルトのサニタイザー設定](/ja/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration)を適用します。
        指定しなかった場合、サニタイザーは使用されません。

        なお、同じ設定を複数回使用する場合は、`Sanitizer` を使用し、必要に応じてそれを変更する方が効率的であると考えられます。

### 返値

なし (`undefined`)。

### 例外

- {{jsxref("TypeError")}}
  - : 以下の場合に例外が発生します。
    - [信頼型](/ja/docs/Web/API/Trusted_Types_API)が [CSP によって強制されている](/ja/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types)場合で、かつデフォルトのポリシーが定義されていないとき、`input` に文字列が渡された。
    - `options.sanitizer` に以下の値が渡された場合。
      - {{domxref("SanitizerConfig")}} が[有効](/ja/docs/Web/API/SanitizerConfig#valid_configuration)ではない。
        例えば、"allowed" と "removed" の両方の設定項目を含む構成などです。
      - 文字列の値が `"default"` でない場合。
      - {{domxref("Sanitizer")}}、{{domxref("SanitizerConfig")}}、文字列のいずれでもない値。

## 解説

**`setHTMLUnsafe()`** メソッドを使用すると、HTML 文字列を構文解析し、必要に応じて望ましくない要素や属性を除外した上で、それを用いて既存のシャドウ DOM を置き換えることができます。

{{domxref("ShadowRoot.innerHTML")}} とは異なり、入力に含まれる[宣言的シャドウルート](/ja/docs/Web/HTML/Reference/Elements/template#宣言的シャドウ_dom)は DOM として構文解析されます。
HTML 文字列で、具体的なシャドウホスト内に複数の[宣言的シャドウルート](/ja/docs/Web/HTML/Reference/Elements/template#宣言的シャドウ_dom)が定義されている場合、最初の {{domxref("ShadowRoot")}} のみが生成されます。それ以降の宣言は、そのシャドウルート内の `<template>` 要素として構文解析されます。

`setHTMLUnsafe()` は、デフォルトでサニタイズ処理を行いません。
引数にサニタイザーが渡されていない場合、入力に含まれるすべての HTML エンティティが挿入されます。

### セキュリティの注意事項

メソッド名の接尾辞 "Unsafe" は、このメソッドが（{{domxref("ShadowRoot.setHTML()")}} とは異なり）XSS のリスクがあるすべての HTML エンティティの除去を強制しないことを示しています。
適切なサニタイザーと併用すればそのように動作させることができますが、効果的なサニタイザーを保有する必要はなく、サニタイザー自体をまったく使用しなくてもよいのです。
したがって、このメソッドは、ユーザーから指定された潜在的に安全でない文字列が、まずサニタイズされることなく DOM に注入されてしまう、[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS) 攻撃の攻撃経路となり得ます。

このリスクを軽減するには、文字列の代わりに常に {{domxref("TrustedHTML")}} オブジェクトを渡すようにし、CSP の [`require-trusted-types-for`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) ディレクティブを使用して[信頼型を強制する](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)ことで、このリスクを軽減する必要があります。
これにより、入力は変換関数を通過することになり、その関数によって、入力が挿入される前に、潜在的に危険なマークアップ（{{htmlelement("script")}} 要素やイベントハンドラー属性など）を削除するための[無害化](/ja/docs/Web/Security/Attacks/XSS#無害化)が行われるようになります。

`TrustedHTML` を使用することで、無害化処理コードが有効であるかどうかを、すべてのインジェクションシンクに散在させるのではなく、いくつかのおよび重要な場所で監査・調べることができます。
`TrustedHTML` を使用する場合、メソッドにサニタイザーを渡す必要はありません。

何らかの理由で `TrustedHTML`（あるいはさらに望ましい `setHTML()`）を使用できない場合、次に安全な選択肢は、XSS 対策済みの [デフォルトのサニタイザー設定](/ja/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) と共に `setHTMLUnsafe()` を使用することです。

### いつ `setHTMLUnsafe()` を使用すべきか

`setHTMLUnsafe()` は、{{domxref("ShadowRoot.setHTML()")}} が利用できる場合、ほとんど使用すべきではありません。なぜなら、ユーザーから提供された HTML 入力に XSS の観点から安全でない要素を記載する必要がある場合が、いくつか（あるいは全く）ないからです。
`setHTML()` は安全であるだけでなく、信頼型の考慮も不要になります。

`setHTMLUnsafe()` の使用が適切となるのは、次のような場合です。

- （何らかの理由で）`setHTML()` や信頼型を使用できず、可能な限り安全なフィルタリングを行いたい場合。
  この場合、[デフォルトのサニタイザー設定](/ja/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) とともに `setHTMLUnsafe()` を使用することで、XSS リスクのある要素やその他の問題のある要素をフィルタリングすることができます。
- `setHTML()` を使用することができず、また入力内容に宣言的シャドウルートが含まれている可能性があるため、{{domxref("ShadowRoot.innerHTML")}} を使用することができない。
- 既知の安全でない HTML エンティティを含む HTML 入力を許可しなければならないという、エッジケースがある。

  この場合、`setHTML()` は使用できません。これは、この関数が安全でないエンティティをすべて削除してしまうためです。
  サニタイザーを使用せずに `setHTMLUnsafe()` を使用するか、`innerHTML` を使用することもできますが、その場合は安全でないエンティティがすべて許可されてしまいます。

  この場合、より良い方法は、実際に必要で危険な要素や属性のみを許可するサニタイザーをつけて `setHTMLUnsafe()` を呼び出すことです。
  これでもまだ安全とは言えませんが、すべてを許可するよりは安全です。

最後の点について、コードが安全でない `onclick` ハンドラーを使用できることを前提としている状況を考えてみてください。
以下のコードは、この場合において、さまざまなメソッドやサニタイザーがどのような効果を持つかを示しています。

```js
const shadow = document.querySelector("#host").shadowRoot;

const input = "<img src=x onclick=alert('onclick') onerror=alert('onerror')>";

// Safe - removes all XSS-unsafe entities.
shadow.setHTML(input);

// Removes no event handler attributes
shadow.setHTMLUnsafe(input);
shadow.innerHTML = input;

// Safe - removes all XSS-unsafe entities.
const configSafe = new Sanitizer();
shadow.setHTMLUnsafe(input, { sanitizer: configSafe });

// Removes all XSS-unsafe entities except `onclick`
const configLessSafe = new Sanitizer();
config.allowAttribute("onclick");
shadow.setHTMLUnsafe(input, { sanitizer: configLessSafe });
```

## 例

### 信頼型付きの setHTMLUnsafe()

XSS のリスクを軽減するために、まず HTML を含む文字列から `TrustedHTML` オブジェクトを生成し、そのオブジェクトを `setHTMLUnsafe()` に渡します。
信頼型は現時点ですべてのブラウザーで対応していませんので、[信頼型 tinyfill](/ja/docs/Web/API/Trusted_Types_API#信頼型_tinyfill) を定義します。
これは、信頼型 JavaScript API を透過的に置き換えます。

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

次に、入力文字列を {{domxref("TrustedHTML")}} インスタンスに変換するための {{domxref("TrustedTypePolicy/createHTML", "createHTML()")}} を定義する {{domxref("TrustedTypePolicy")}} を作成します。
一般的に、`createHTML()` の実装では、下記に示すように、[DOMPurify](https://github.com/cure53/DOMPurify) などのライブラリーを使用して入力をサニタイズします。

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

次に、この `policy` オブジェクトを使用して、安全性が保証されていない可能性のある入力文字列から `TrustedHTML` オブジェクトを作成します。

```js
// The potentially malicious string
const untrustedString = "abc <script>alert(1)<" + "/script> def";
// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);
```

`trustedHTML` が用意できたので、下記コードでは、これを `setHTMLUnsafe()` と組み合わせて使用することができます。
まず、対象とする {{domxref("ShadowRoot")}} を作成します。
これは {{domxref("Element.attachShadow()")}} を使用してプログラム的に生成することもできますが、この例では宣言的にルートを作成します。

```html
<div id="host">
  <template shadowrootmode="open">
    <span>シャドウ DOM 内の span 要素</span>
  </template>
</div>
```

次に、`#host` 要素からシャドウルートのハンドルを取得し、`setHTMLUnsafe()` を呼び出します。
入力は変換関数を経由しているため、このメソッドにはサニタイザーを渡しません。

```js
const shadow = document.querySelector("#host").shadowRoot;
// setHTMLUnsafe() with no sanitizer (no filtering)
shadow.setHTMLUnsafe(trustedHTML);
```

### setHTMLUnsafe() を信頼型なしで使用

この例では、信頼型を使用していない場合を示しているため、サニタイザーの引数を渡すことになります。

このコードでは、まず信頼できない文字列を生成し、メソッドにサニタイザーを渡すためのいくつかの方法を表示させます。

```js
// The potentially malicious string
const untrustedString = "abc <script>alert(1)<" + "/script> def";

// Get the shadow root element
const shadow = document.querySelector("#host").shadowRoot;

// Define custom Sanitizer and use in setHTMLUnsafe()
// This allows only elements: div, p, button, script
const sanitizer1 = new Sanitizer({
  elements: ["div", "p", "button", "script"],
});
shadow.setHTMLUnsafe(untrustedString, { sanitizer: sanitizer1 });

// Define custom SanitizerConfig within setHTMLUnsafe()
// Removes the <script> element but allows other potentially unsafe entities.
shadow.setHTMLUnsafe(untrustedString, {
  sanitizer: { removeElements: ["script"] },
});
```

### `setHTMLUnsafe()` ライブサンプル

この例では、さまざまなサニタイザーを使用してこのメソッドを呼び出した場合の動作を「ライブ」デモで示しています。
このコードでは、クリックすると HTML 文字列を挿入できるボタンが定義されています。
1つ目のボタンは、まったくサニタイズせずに HTML を挿入し、2 つ目のボタンは、 `<script>` 要素は許可するが、その他の安全でない要素は許可しない独自のサニタイザーを使用します。
元の文字列と挿入された HTML がログに出力されるため、それぞれの場合の結果を確認することができます。

> [!NOTE]
> サニタイザー引数の使い方を示すため、以下のコードでは信頼型ではなく文字列を挿入しています。
> 本番環境のコードでは、このような処理を行わないのが最適です。

#### HTML

HTML は、サニタイザーを使用しない場合と独自のサニタイザーを使用する場合（それぞれ）にHTML を挿入するための 2 つの{{htmlelement("button")}} 要素、例をリセットするための別のボタン、および宣言的シャドウルートを格納する{{htmlelement("div")}} を定義しています。

```html
<button id="buttonNoSanitizer" type="button">なし</button>
<button id="buttonAllowScript" type="button">allowScript</button>
<button id="reload" type="button">再読み込み</button>

<div id="host">
  <template shadowrootmode="open">
    <span>これはシャドウ DOM の中にあります</span>
  </template>
</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 320px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
  margin: 5px;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent += text;
}
```

```js hidden
if ("Sanitizer" in window) {
```

まず、再読み込みボタン用のハンドラーを定義します。

```js
const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

次に、シャドウルートに注入する入力文字列を定義します。これはすべての場合で同じになります。
これには、{{htmlelement("script")}} 要素と `onclick` ハンドラーが含まれており、どちらも XSS に対して安全ではないと考えられます。
また、シャドウルートへのハンドルとなる変数 `shadow` も取得します。

```js
// Define unsafe string of HTML
const unsanitizedString = `
  <div>
    <p>Paragraph to inject into shadow DOM.
      <button onclick="alert('You clicked the button!')">Click me</button>
    </p>
    <script src="path/to/a/module.js" type="module"><\/script>
    <p data-id="123">Para with <code>data-</code> attribute</p>
  </div>
`;

const shadow = document.querySelector("#host").shadowRoot;
```

次に、サニタイザーを渡さずに `setHTMLUnsafe()` を使用してシャドウルートを設定するボタンのクリックハンドラーを定義します。
サニタイザーがないため、注入される HTML は入力文字列と一致することが期待されます。

```js
const buttonNoSanitizer = document.querySelector("#buttonNoSanitizer");
buttonNoSanitizer.addEventListener("click", () => {
  // Set the content of the element with no sanitizer
  shadow.setHTMLUnsafe(unsanitizedString);

  // Log HTML before sanitization and after being injected
  logElement.textContent = "No sanitizer\n\n";
  log(`\nunsanitized: ${unsanitizedString}`);
  log(`\n\nsanitized: ${shadow.innerHTML}`);
});
```

次のクリックハンドラーは、{{htmlelement("div")}}、{{htmlelement("p")}}、および{{htmlelement("script")}} の各要素のみを許可する独自のサニタイザーを使用して、対象 HTML を設定します。

```js
const allowScriptButton = document.querySelector("#buttonAllowScript");
allowScriptButton.addEventListener("click", () => {
  // Set the content of the element using a custom sanitizer
  const sanitizer1 = new Sanitizer({
    elements: ["div", "p", "script"],
  });
  shadow.setHTMLUnsafe(unsanitizedString, { sanitizer: sanitizer1 });

  // Log HTML before sanitization and after being injected
  logElement.textContent = "Sanitizer: {elements: ['div', 'p', 'script']}\n";
  log(`\n\nunsanitized: ${unsanitizedString}`);
  log(`\nsanitized: ${shadow.innerHTML}`);
});
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
  // Provide fallback or alternative behavior
}
```

#### 結果

「なし」ボタンと「allowScript」ボタンをクリックすると、それぞれサニタイザーを適用しない場合と独自のサニタイザーを適用した場合の効果を確認できます。

「なし」ボタンをクリックすると、サニタイザーが適用されていないため、入力と出力が一致していることが確認できるはずです。
「allowScript」ボタンをクリックすると、`<script>` 要素は存在するものの、`<button>` 要素は除去されます。
この手法を使えば安全な HTML を生成できますが、必ずしもそうする必要はありません。

{{EmbedLiveSample("setHTMLUnsafe() live example","100","450px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ShadowRoot.setHTML()")}}
- {{domxref("ShadowRoot.innerHTML")}}
- {{domxref("Element.setHTML()")}} および {{domxref("Element.setHTMLUnsafe()")}}
- {{domxref("Document.parseHTML_static", "Document.parseHTML()")}} および {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
- [HTML サニタイザー API](/ja/docs/Web/API/HTML_Sanitizer_API)
