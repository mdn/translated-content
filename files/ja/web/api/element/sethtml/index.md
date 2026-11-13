---
title: "Element: setHTML() メソッド"
short-title: setHTML()
slug: Web/API/Element/setHTML
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("HTML Sanitizer API")}}

{{domxref("Element")}} インターフェイスの **`setHTML()`** メソッドは、HTML 文字列を構文解析・無害化して DOM に要素のサブツリーとして挿入する、XSS に対して安全な方法を提供します。

このメソッドは、渡されたサニタイザーで許可されていても、XSS に対して安全でない要素や属性を除去します。特に、次の要素と属性は常に除去されます。{{HTMLElement("script")}}、{{HTMLElement("frame")}}、{{HTMLElement("iframe")}}、{{HTMLElement("embed")}}、{{HTMLElement("object")}}、{{SVGElement("use")}}、およびイベントハンドラー属性です。

ユーザーが提供した HTML 文字列を設定するときは、（対応している場合）{{domxref("Element.innerHTML")}} の置き換えとして使用することが推奨されます。

## 構文

```js-nolint
setHTML(input)
setHTML(input, options)
```

### 引数

- `input`
  - : 文字列で、無害化されて要素に挿入される HTML を定義します。
- `options` {{optional_inline}}
  - : 以下のオプション引数を持つオプションオブジェクトです。
    - `sanitizer`
      - : {{domxref("Sanitizer")}} または {{domxref("SanitizerConfig")}} オブジェクトで、入力のどの要素を許可または除去するかを定義します。また、デフォルトの構成を表す文字列 `"default"` も指定できます。
        サニタイザーで許可されていても、XSS に対して安全でない要素や属性は除去されます。
        指定しなかった場合は、[デフォルトのサニタイザー設定](/ja/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration)が使用されます。

        同じ構成を複数回使用する場合は、必要に応じて変更しながら `Sanitizer` を使う方が効率的です。

### 返値

なし (`undefined`)。

### 例外

- {{jsxref("TypeError")}}
  - : `options.sanitizer` に次のようなものが渡された場合に例外が発生します。
    - {{domxref("SanitizerConfig")}} が[有効でない](/ja/docs/Web/API/SanitizerConfig#valid_configuration)。例えば、"allowed" と "removed" の両方の設定を含むもの。
    - 値が `"default"` ではない文字列。
    - {{domxref("Sanitizer")}}、{{domxref("SanitizerConfig")}}、文字列のどれでもない値。

## 解説

**`setHTML()`** メソッドは、HTML 文字列を構文解析・無害化して {{domxref("DocumentFragment")}} に変換し、それを要素のサブツリーとして DOM に挿入する、XSS に対して安全な方法を提供します。

`setHTML()` は、現在の要素のコンテキストで不正な要素（例：{{htmlelement("table")}} 要素の外にある {{htmlelement("col")}} 要素）を HTML 入力文字列から除去します。
その後、サニタイザー設定で許可されていない HTML エンティティを除去し、さらに XSS に対して安全でない要素や属性を、サニタイザーで許可されているかどうかにかかわらず除去します。

`options.sanitizer` 引数が指定されていない場合、`setHTML()` は[デフォルトのサニタイザー設定](/ja/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration)を使用します。
この設定は多くの用途に適しており、XSS 攻撃のほか、クリックジャッキングやなりすましなどの攻撃も防ぎます。

独自の `Sanitizer` または `SanitizerConfig` を指定すると、許可または除去する要素、属性、コメントを選択できます。
安全でないオプションがサニタイザーで許可されていても、このメソッドでは除去されます（{{domxref('Sanitizer.removeUnsafe()')}} を呼び出したサニタイザーと同じ要素を除去します）。

信頼できない HTML 文字列を要素に挿入する際は、{{domxref("Element.innerHTML")}} の代わりに `setHTML()` を使用しましょう。
また、安全でない要素や属性が仕様上できる必要がある場合を除き、{{domxref("Element.setHTMLUnsafe()")}} の代わりに使用しましょう。

なお、このメソッドは入力文字列から XSS に対して安全でないエンティティを常に無害化するため、[信頼型 API](/ja/docs/Web/API/Trusted_Types_API) による保護や検証の対象にはなりません。

### 再解析と変異型 XSS (mXSS)

`setHTML()` で HTML 入力を無害化した後でも、その HTML をシリアライズし、`innerHTML` を使って再解析するのは安全ではありません。
例えば、次のコードは安全ではありません。

```js example-bad
div.setHTML(unsafeString); // 安全
const serializedHTML = div.innerHTML; // もう無害化されていない！
otherElement.innerHTML = serializedHTML;
```

無害化はコンテキストを考慮して行われるためです。
特定の要素で `setHTML()` を呼び出すと、そのコンテキストで安全でない要素や属性が除去されます。
HTML をシリアライズして別の要素でそのまま使うと、そちらの要素では安全でない要素が残っている場合があります。

次の方法なら安全です（実用性はありませんが）。

```js example-good
div.setHTML(unsafeString); // 安全
const serializedHTML = div.innerHTML; // 単なる文字列としてシリアライズ
otherDiv.setHTML(serializedHTML); // 安全 — setHTML() によって再び無害化される
```

この問題を悪用する攻撃の一種は、[変異型 XSS](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#sanitizer-security-mxss)<sup>(英語)</sup> と呼ばれます。
この問題を避ける簡単なルールは、`setHTML()` のような安全なメソッドだけを使って HTML 文字列を挿入することです。

## 例

### 基本的な使い方

この例は、`setHTML()` を使用して HTML 文字列を無害化して挿入するいくつかの方法を示します。

```js
// 無害化されていない HTML 文字列を定義
const unsanitizedString = "abc <script>alert(1)<" + "/script> def";
// ID が "target" の対象要素を取得
const target = document.getElementById("target");

// setHTML() をデフォルトのサニタイザーで実行
target.setHTML(unsanitizedString);

// 独自のサニタイザーを定義し、setHTML() で使用
// div、p、button 要素のみを許可する（script は安全でないため除去される）
const sanitizer1 = new Sanitizer({
  elements: ["div", "p", "button", "script"],
});
target.setHTML(unsanitizedString, { sanitizer: sanitizer1 });

// 独自の SanitizerConfig を setHTML() 内で定義
// div、p、button、script、およびその他の安全でない要素/属性を除去する
target.setHTML(unsanitizedString, {
  sanitizer: { removeElements: ["div", "p", "button", "script"] },
});
```

### `setHTML()` ライブサンプル

この例では、異なるサニタイザーを指定してメソッドを呼び出す「ライブ」デモを示します。
コードでは、デフォルトのサニタイザーと独自のサニタイザーを使用して、それぞれ HTML 文字列を無害化して挿入するボタンを定義しています。
元の文字列と無害化された HTML はログに記録されるため、それぞれの結果を確認できます。

#### HTML

この HTML では、異なるサニタイザーを適用するための 2 つの {{htmlelement("button")}} 要素、例をリセットするための別のボタン、および文字列を挿入するための {{htmlelement("div")}} 要素を定義しています。

```html
<button id="buttonDefault" type="button">デフォルト</button>
<button id="buttonAllowScript" type="button">allowScript</button>

<button id="reload" type="button">再読み込み</button>
<div id="target">ターゲット要素の元のコンテンツ</div>
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
同時に、再読み込みボタンのハンドラーも定義します。

```js
// 安全でない HTML 文字列を定義
const unsanitizedString = `
  <div>
    <p>This is a paragraph. <button onclick="alert('You clicked the button!')">Click me</button></p>
    <script src="path/to/a/module.js" type="module"><script>
  </div>
`;

const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

次に、デフォルトのサニタイザーで HTML を設定するボタンのクリックハンドラーを定義します。
これにより、HTML 文字列を挿入する前に、安全でない要素や属性がすべて除去されます。
[`Sanitizer()` コンストラクターの例](/ja/docs/Web/API/Sanitizer/Sanitizer#creating_the_default_sanitizer)で、どの要素が除去されるかを正確に確認できます。

```js
const defaultSanitizerButton = document.querySelector("#buttonDefault");
defaultSanitizerButton.addEventListener("click", () => {
  // デフォルトのサニタイザーを使用して要素のコンテンツを設定
  target.setHTML(unsanitizedString);

  // 無害化前と挿入後の HTML をログ出力する
  logElement.textContent =
    "Default sanitizer: remove script element and onclick attribute\n\n";
  log(`\nunsanitized: ${unsanitizedString}`);
  log(`\nsanitized: ${target.innerHTML}`);
});
```

次のクリックハンドラーは、独自のサニタイザーを使ってターゲット HTML を設定します。このサニタイザーでは、{{htmlelement("div")}}、{{htmlelement("p")}}、{{htmlelement("script")}} 要素のみが許可されます。
`setHTML` メソッドを使用しているため、`<script>` も同時に除去されることに注意してください。

```js
const allowScriptButton = document.querySelector("#buttonAllowScript");
allowScriptButton.addEventListener("click", () => {
  // 独自のサニタイザーを使用して要素のコンテンツを設定
  const sanitizer1 = new Sanitizer({
    elements: ["div", "p", "script"],
  });
  target.setHTML(unsanitizedString, { sanitizer: sanitizer1 });

  // 無害化前と挿入後の HTML をログ出力
  logElement.textContent =
    "Sanitizer: {elements: ['div', 'p', 'script']}\n Script removed even though allowed\n";
  log(`\nunsanitized: ${unsanitizedString}`);
  log(`\nsanitized: ${target.innerHTML}`);
});
```

```js hidden
} else {
  log("このブラウザーは HTML サニタイザー API に対応していません。");
  // フォールバックまたは代替動作を指定
}
```

#### 結果

「デフォルト」と「allowScript」ボタンをクリックすると、それぞれデフォルトのサニタイザーと独自のサニタイザーの効果を確認できます。
安全な無害化メソッドを使用しているため、サニタイザーで明示的に許可した場合でも、どちらの場合も `<script>` 要素と `onclick` ハンドラーは除去されることに注意してください。
一方、`data-` 属性はデフォルトのサニタイザーでは除去されますが、サニタイザーを渡すと許可されます。

{{EmbedLiveSample("setHTML() live example","100","450px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.setHTMLUnsafe()")}}
- {{domxref("ShadowRoot.setHTML()")}} および {{domxref("ShadowRoot.setHTMLUnsafe()")}}
- {{domxref("Document.parseHTML_static", "Document.parseHTML()")}} および {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
- [HTML サニタイザー API](/ja/docs/Web/API/HTML_Sanitizer_API)
