---
title: "Element: setHTMLUnsafe() メソッド"
short-title: setHTMLUnsafe()
slug: Web/API/Element/setHTMLUnsafe
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("DOM")}}

> [!WARNING]
> このメソッドは入力を HTML として構文解析し、その結果を DOM に書き込みます。
> このような API は[インジェクションシンク](/ja/docs/Web/API/Trusted_Types_API#概念と使い方)と呼ばれ、入力が攻撃者に由来する場合、[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS) 攻撃の媒介となる可能性があります。
>
> 文字列の代わりに常に `TrustedHTML` オブジェクトを渡し、[信頼型を強制](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)することで、このリスクを軽減できます。
> 詳しくは「[セキュリティ上の注意事項](#セキュリティ上の注意事項)」を参照してください。

> [!NOTE]
> 対応しているブラウザーでは、ほとんどの場合、このメソッドの代わりに {{domxref("Element.setHTML()")}} を使用してください。このメソッドは XSS に対して安全でない HTML エンティティを常に除去します。

**`setHTMLUnsafe()`** は {{domxref("Element")}} インターフェイスのメソッドで、HTML の入力を {{domxref("DocumentFragment")}} に構文解析し、必要に応じて不要な要素や属性、およびそのコンテキストでは許可されない要素を除去してから、DOM 内の要素のサブツリーを置き換えます。

## 構文

```js-nolint
setHTMLUnsafe(input)
setHTMLUnsafe(input, options)
```

### 引数

- `input`
  - : 構文解析する HTML を定義する {{domxref("TrustedHTML")}} インスタンスまたは文字列です。
- `options` {{optional_inline}}
  - : 次のオプション引数を持つオプションオブジェクトです。
    - `sanitizer` {{optional_inline}}
      - : 入力のどの要素を許可または除去するかを定義する {{domxref("Sanitizer")}} または {{domxref("SanitizerConfig")}} オブジェクトです。文字列 `"default"` も指定できます。この場合、（XSS に対して安全な）[デフォルトのサニタイザー設定](/ja/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration)を適用した `Sanitizer` が使用されます。
        指定しなかった場合、サニタイザーは使用されません。

        同じ設定を複数回使用する場合は、必要に応じて変更しながら `Sanitizer` を使う方が効率的です。

### 返値

なし (`undefined`)。

### 例外

- {{jsxref("TypeError")}}
  - : 次の場合に発生します。
    - [CSP](/ja/docs/Web/HTTP/Guides/CSP) で[信頼型](/ja/docs/Web/API/Trusted_Types_API)が[強制](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)されていて、デフォルトポリシーが定義されていないときに、`input` に文字列が渡された場合。
    - `options.sanitizer` に次の値が渡された場合。
      - [有効でない](/ja/docs/Web/API/SanitizerConfig#valid_configuration) {{domxref("SanitizerConfig")}}。例えば、"allowed" と "removed" の両方の設定を含むもの。
      - 値が `"default"` ではない文字列。
      - {{domxref("Sanitizer")}}、{{domxref("SanitizerConfig")}}、文字列のいずれでもない値。

## 解説

**`setHTMLUnsafe()`** メソッドは、HTML 入力を {{domxref("DocumentFragment")}} に構文解析し、必要に応じて不要な要素や属性を無害化し、HTML 仕様で対象要素内に許可されない要素（{{htmlelement("div")}} 内の {{htmlelement("li")}} など）を破棄します。その後、その {{domxref("DocumentFragment")}} を使用して、DOM 内の要素のサブツリーを置き換えます。

{{domxref("Element.innerHTML")}} とは異なり、入力内の[宣言的シャドウルート](/ja/docs/Web/HTML/Reference/Elements/template#宣言的シャドウ_dom)は DOM に構文解析されます。HTML 文字列が特定のシャドウホストに複数の[宣言的シャドウルート](/ja/docs/Web/HTML/Reference/Elements/template#宣言的シャドウ_dom)を定義している場合、最初の {{domxref("ShadowRoot")}} だけが作成されます。以降の宣言は、そのシャドウルート内の `<template>` 要素として構文解析されます。

`setHTMLUnsafe()` はデフォルトでは無害化を行いません。引数にサニタイザーを渡さない場合、入力内のすべての HTML エンティティが挿入されます。そのため、構文解析時に {{htmlelement("script")}} の実行を無効にする {{domxref("Element.innerHTML")}} よりも安全性が低い可能性があります。

### セキュリティ上の注意事項

メソッド名の接尾辞 "Unsafe" は、XSS に対して安全でない HTML エンティティをすべて除去することが保証されないことを示します（{{domxref("Element.setHTML()")}} とは異なります）。適切なサニタイザーを使用すれば除去できますが、効果的なサニタイザーを使用する必要はなく、サニタイザー自体を使用しないこともできます。そのため、このメソッドは、ユーザーが提供した安全でない可能性のある文字列を無害化せず DOM に挿入した場合に、[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS) 攻撃の媒介となる可能性があります。

このリスクを軽減するには、文字列の代わりに常に {{domxref("TrustedHTML")}} オブジェクトを渡し、CSP の [`require-trusted-types-for`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) ディレクティブを使用して[信頼型を強制](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)してください。これにより、入力が変換関数を通過してから挿入されるようになります。この関数で、挿入前に入力を[無害化](/ja/docs/Web/Security/Attacks/XSS#無害化)し、{{htmlelement("script")}} 要素やイベントハンドラー属性などの危険なマークアップを除去できます。

`TrustedHTML` を使用すると、無害化コードが効果的かどうかを、すべてのインジェクションシンクに分散させず、少数の箇所で監査・確認できます。`TrustedHTML` を使用する場合、このメソッドにサニタイザーを渡す必要はありません。

何らかの理由で `TrustedHTML`（または、さらに推奨される `setHTML()`）を使用できない場合、次に安全な方法は、`setHTMLUnsafe()` に[デフォルトのサニタイザー設定](/ja/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration)を指定することです。

### `setHTMLUnsafe()` はいつ使用するべきか

{{domxref("Element.setHTML()")}} が利用できる場合、`setHTMLUnsafe()` はほとんど使用するべきではありません。ユーザーが提供する HTML 入力に XSS に対して安全でない要素を含める必要がある状況は、ほとんど（あるいは全く）ありません。`setHTML()` は安全であるだけでなく、信頼型について検討する必要もありません。

次の場合は、`setHTMLUnsafe()` の使用が適切なことがあります。

- （何らかの理由で）`setHTML()` または信頼型を使用できず、可能な限り安全なフィルタリングを行いたい場合。この場合、デフォルトの {{domxref("Sanitizer")}} を指定して、XSS に対して安全でない要素をすべてフィルタリングできます。
- `setHTML()` を使用できず、入力に宣言的シャドウルートが含まれている可能性があるため、{{domxref("Element.innerHTML")}} を使用できない場合。
- 特定の安全でない HTML エンティティを含む入力を許可しなければならない例外的な場合。

  この場合、`setHTML()` はすべての安全でないエンティティを除去するため使用できません。サニタイザーなしの `setHTMLUnsafe()` または `innerHTML` を使用することもできますが、そうするとすべての安全でないエンティティが許可されます。

  より良い方法は、必要な危険な要素や属性だけを許可するサニタイザーを指定して `setHTMLUnsafe()` を呼び出すことです。それでも安全とは言えませんが、すべての危険な要素や属性を許可するより安全です。

最後のケースとして、安全でない `onclick` ハンドラーを利用する必要がある状況を考えてみましょう。次のコードは、この場合の各メソッドとサニタイザーの動作を示します。

```js
const target = document.querySelector("#target");

const input = "<img src=x onclick=alert('onclick') onerror=alert('onerror')>";

// 安全 — XSS に対して安全でないエンティティをすべて除去する
target.setHTML(input);

// イベントハンドラー属性を除去しない
target.setHTMLUnsafe(input);
target.innerHTML = input;

// 安全 — XSS に対して安全でないエンティティをすべて除去する
const configSafe = new Sanitizer();
target.setHTMLUnsafe(input, { sanitizer: configSafe });

// `onclick` 以外の XSS に対して安全でないエンティティをすべて除去する
const configLessSafe = new Sanitizer();
configLessSafe.allowAttribute("onclick");
target.setHTMLUnsafe(input, { sanitizer: configLessSafe });
```

## 例

### Trusted Types を使用した `setHTMLUnsafe()`

XSS のリスクを軽減するため、まず HTML を含む文字列から `TrustedHTML` オブジェクトを作成し、そのオブジェクトを `setHTMLUnsafe()` に渡します。
信頼型はすべてのブラウザーで対応されているわけではないため、[信頼型 tinyfill](/ja/docs/Web/API/Trusted_Types_API#信頼型_tinyfill) を定義します。これは信頼型 JavaScript API の透過的な代替として機能します。

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

次に、入力文字列を {{domxref("TrustedHTML")}} インスタンスに変換する `createHTML()` を定義する {{domxref("TrustedTypePolicy")}} を作成します。
一般に、`createHTML()` の実装では、次のように [DOMPurify](https://github.com/cure53/DOMPurify)<sup>(英語)</sup> などのライブラリーを使って入力を無害化します。

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

次に、この `policy` オブジェクトを使って、安全でない可能性がある入力文字列から `TrustedHTML` オブジェクトを作成します。

```js
// 悪意のある可能性がある文字列
const untrustedString = "abc <script>alert(1)<" + "/script> def";
// ポリシーを使って TrustedHTML インスタンスを作成
const trustedHTML = policy.createHTML(untrustedString);
```

`trustedHTML` ができたので、次のコードのように `setHTMLUnsafe()` で使用できます。
入力は変換関数を通過しているため、このメソッドにサニタイザーは渡しません。

```js
// id が "target" の対象 Element を取得
const target = document.getElementById("target");

// サニタイザーなしで setHTMLUnsafe() を実行
target.setHTMLUnsafe(trustedHTML);
```

### Trusted Types を使用せずに `setHTMLUnsafe()` を使用

この例では、信頼型を使用しない場合にサニタイザー引数を渡す方法を示します。

コードでは、信頼できない文字列を作成し、いくつかの方法でサニタイザーをこのメソッドに渡します。

```js
// 悪意のある可能性がある文字列
const untrustedString = "abc <script>alert(1)<" + "/script> def";

// id が "target" の対象 Element を取得
const target = document.getElementById("target");

// 独自の Sanitizer を定義して setHTMLUnsafe() で使用
// div、p、button、script 要素のみを許可する
const sanitizer1 = new Sanitizer({
  elements: ["div", "p", "button", "script"],
});
target.setHTMLUnsafe(untrustedString, { sanitizer: sanitizer1 });

// 独自の SanitizerConfig を setHTMLUnsafe() 内で定義
// <script> 要素を除去するが、その他の安全でない可能性のあるエンティティは許可する
target.setHTMLUnsafe(untrustedString, {
  sanitizer: { removeElements: ["script"] },
});
```

### `setHTMLUnsafe()` ライブサンプル

この例では、異なるサニタイザーを指定してメソッドを呼び出す「ライブ」デモを示します。
HTML 文字列を挿入するボタンを定義しています。1 つ目のボタンは HTML を無害化せずに挿入し、2 つ目のボタンは `<script>` 要素を許可する一方、その他の安全でない項目を許可しない独自のサニタイザーを使います。
それぞれの場合に、元の文字列と挿入後の HTML がログに記録されるため、結果を確認できます。

> [!NOTE]
> サニタイザー引数の使い方を示すため、次のコードでは信頼型ではなく文字列を挿入します。
> 実運用のコードでは、このようにしないでください。

#### HTML

この HTML では、異なるサニタイザーを指定してメソッドを呼び出す 2 つの {{htmlelement("button")}} 要素、例をリセットするボタン、および文字列を挿入する {{htmlelement("div")}} 要素を定義しています。

```html
<button id="buttonNoSanitizer" type="button">なし</button>
<button id="buttonAllowScript" type="button">allowScript</button>

<button id="reload" type="button">再読み込み</button>
<div id="target">対象要素の元のコンテンツ</div>
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

まず、すべてのケースで共通となる、無害化する文字列を定義します。
これには {{htmlelement("script")}} 要素と `onclick` ハンドラーが含まれており、いずれも XSS に対して安全でないとされています。
再読み込みボタンのハンドラーも定義します。

```js
// 安全でない HTML 文字列を定義
const unsanitizedString = `
  <div>
    <p>シャドウ DOM に挿入する段落。
      <button onclick="alert('ボタンをクリックしました！')">クリックしてください</button>
    </p>
    <script src="path/to/a/module.js" type="module"><\/script>
    <p data-id="123"><code>data-</code> 属性を含む段落</p>
  </div>
`;

const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

次に、サニタイザーを指定せずに HTML を設定するボタンのクリックハンドラーを定義します。
一般に、このメソッドは文字列内の対象要素のコンテキストで許可されない要素（`<div>` 内の table 専用要素など）を除去しますが、それ以外は入力文字列と同じになると考えられます。
この例では、入力と出力は一致するはずです。

```js
const buttonNoSanitizer = document.querySelector("#buttonNoSanitizer");
buttonNoSanitizer.addEventListener("click", () => {
  // サニタイザーを指定せずに安全でない HTML を設定
  target.setHTMLUnsafe(unsanitizedString);

  // 無害化前と挿入後の HTML をログ出力
  logElement.textContent =
    "サニタイザーなし: 文字列はフィルタリングされずに挿入されるはずです\n\n";
  log(`\n無害化されていない文字列: ${unsanitizedString}`);
  log(`\n\n挿入後: ${target.innerHTML}`);
});
```

次のクリックハンドラーは、{{htmlelement("div")}}、{{htmlelement("p")}}、{{htmlelement("script")}} 要素のみを許可する独自のサニタイザーを使って、対象の HTML を設定します。
`setHTMLUnsafe()` メソッドを使用しているため、`<script>` は除去されません。

```js
const allowScriptButton = document.querySelector("#buttonAllowScript");
allowScriptButton.addEventListener("click", () => {
  // 独自のサニタイザーを使用して要素のコンテンツを設定
  const sanitizer1 = new Sanitizer({
    elements: ["div", "p", "script"],
  });
  target.setHTMLUnsafe(unsanitizedString, { sanitizer: sanitizer1 });

  // 無害化前と挿入後の HTML をログ出力
  logElement.textContent = "サニタイザー: {elements: ['div', 'p', 'script']}\n";
  log(`\n無害化されていない文字列: ${unsanitizedString}`);
  log(`\n\n挿入後: ${target.innerHTML}`);
});
```

```js hidden
} else {
  log("このブラウザーは HTML サニタイザー API に対応していません。");
  // フォールバックまたは代替動作を指定
}
```

#### 結果

「なし」と「allowScript」の各ボタンをクリックすると、サニタイザーなしの場合と独自のサニタイザーを指定した場合の効果を確認できます。

「なし」ボタンをクリックすると、サニタイザーが適用されないため、入力と出力が一致するはずです。
「allowScript」ボタンをクリックすると、`<script>` 要素は残りますが、`<button>` 要素は除去されます。
この方法では、安全な HTML を作成できますが、安全性が強制されるわけではありません。

{{EmbedLiveSample("setHTMLUnsafe() live example","100","450px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ShadowRoot.setHTMLUnsafe()")}}
- {{domxref("Element.innerHTML")}}
- {{domxref("Document.parseHTML_static", "Document.parseHTML()")}} および {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
