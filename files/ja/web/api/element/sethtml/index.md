---
title: "Element: setHTML() メソッド"
short-title: setHTML()
slug: Web/API/Element/setHTML
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

**`setHTML()`** は {{domxref("Element")}} インターフェイスのメソッドで、HTML の文字列を構文解析・サニタイズして {{domxref("DocumentFragment")}} に変換、それを要素のサブツリーとして DOM に挿入する、XSS 対策済みの安全な方法を提供します。

## 構文

```js-nolint
setHTML(input)
setHTML(input, options)
```

### 引数

- `input`
  - : 文字列で、サニタイズされ要素に挿入される HTML を定義します。
- `options` {{optional_inline}}
  - : 以下のオプション引数を持つオプションオブジェクトです。
    - `sanitizer`
      - : {{domxref("Sanitizer")}} または {{domxref("SanitizerConfig")}} オブジェクトで、入力のどの要素が許可されたり削除されたりするかを定義します。文字列 `"default"` で既定の構成になります。
        一般的に、設定を再利用する場合、`SanitizerConfig`よりも`Sanitizer`の方が効率的であることが期待されます。
        指定しなかった場合、既定のサニタイザー設定が使用されます。

### 返値

なし (`undefined`)。

### 例外

- `TypeError`
  - : `options.sanitizer` に次のようなものが渡された場合に例外が発生します。
    - 正規化されていない {{domxref("SanitizerConfig")}}（"allowed" と "removed" の両方の設定を含むもの）
    - 値が `"default"` ではない文字列
    - {{domxref("Sanitizer")}}、{{domxref("SanitizerConfig")}}、文字列のどれでもない値。

## 解説

**`setHTML()`** メソッドは、HTML の文字列を構文解析・サニタイズして {{domxref("DocumentFragment")}} に変換、それを要素のサブツリーとして DOM に挿入する、XSS 対策済みの安全な方法を提供します。

`setHTML()` は、現在の要素のコンテキストで不正な要素（例：{{htmlelement("table")}} 要素の外にある {{htmlelement("col")}} 要素）を HTML 入力文字列から除去します。
その後、サニタイザー設定で許可されていない HTML エンティティを削除し、さらに XSS 対策上安全でない要素や属性を除去します。これらはサニタイザー設定でできるかどうかにかかわらず除去対象となります。

`options.sanitizer` 引数でサニタイザーの構成が指定されていない場合、`setHTML()` は既定の {{domxref("Sanitizer")}} 構成で実行されます。
この構成では、XSS に安全と見なされるすべての要素と属性が許可され、安全でないと見なされるエンティティは許可されません。
独自のサニタイザーまたはサニタイザー設定を指定することで、許可または除去される要素、属性、コメントを選択できます。
なお、サニタイザー設定で安全でないオプションが許可されている場合でも、このメソッドを使用すると（暗黙的に {{domxref('Sanitizer.removeUnsafe()')}} が呼び出されるため）、それらは除去されます。

信頼できない HTML 文字列を要素に挿入する際は、{{domxref("Element.innerHTML")}} の代わりに `setHTML()` を使用しましょう。
また、安全でない要素や属性が仕様上できる必要がある場合を除き、{{domxref("Element.setHTMLUnsafe()")}} の代わりに使用しましょう。

なお、このメソッドは入力文字列を常に XSS 攻撃に脆弱なエンティティからサニタイズするため、[信頼型 API](/ja/docs/Web/API/Trusted_Types_API) によるセキュリティ保護や検証は行われません。

## 例

### 基本的な使い方

この例は、`setHTML()` を使用して HTML 文字列をサニタイズし、挿入するいくつかの方法を示します。

```js
// HTML のサニタイズされていない文字列を定義
const unsanitizedString = "abc <script>alert(1)<" + "/script> def";
// ID が "target" の対象要素を取得
const target = document.getElementById("target");

// setHTML() を既定のサニタイザーで実行
target.setHTML(unsanitizedString);

// 独自のサニタイザーを定義し、 setHTML() で使用
// これは要素のみを許可します。 div, p, button （script は安全ではないので削除される）
const sanitizer1 = new Sanitizer({
  elements: ["div", "p", "button", "script"],
});
target.setHTML(unsanitizedString, { sanitizer: sanitizer1 });

// 独自の SanitizerConfig を setHTML() 内で定義
// これにより、div、p、button、script、およびその他の安全でない要素/属性が除去される
target.setHTML(unsanitizedString, {
  sanitizer: { removeElements: ["div", "p", "button", "script"] },
});
```

### `setHTML()` ライブサンプル

この例では、異なるサニタイザーで呼び出される際のメソッドの「ライブ」デモを提供します。
コードでは、既定のサニタイザーと独自のサニタイザーを使用して、それぞれ HTML 文字列をサニタイズおよび挿入するためのボタンを定義しています。
元の文字列とサニタイズされた HTML はログに記録されるため、それぞれの結果を確認できます。

#### HTML

この HTML では、異なるサニタイザーを適用するための 2 つの {{htmlelement("button")}} 要素、例をリセットするための別のボタン、および文字列を挿入するための {{htmlelement("div")}} 要素を定義しています。

```html
<button id="buttonDefault" type="button">既定</button>
<button id="buttonAllowScript" type="button">allowScript</button>

<button id="reload" type="button">再読み込み</button>
<div id="target">ターゲット要素の元のコンテンツ</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 220px;
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

まず、すべてのケースで共通となる、サニタイズ対象の文字列を定義します。
これには {{htmlelement("script")}} 要素と `onclick` ハンドラーが含まれており、いずれも XSS に対して安全でないとされています。
同時に、再読み込みボタンのハンドラーも定義します。

```js
// HTML の安全でない文字列を定義
const unsanitizedString = `
  <div>
    <p>This is a paragraph. <button onclick="alert('You clicked the button!')">Click me</button></p>
    <script src="path/to/a/module.js" type="module"><script>
  </div>
`;

const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

次に、既定のサニタイザーで HTML を設定するボタンのクリックハンドラーを定義します。
これにより、HTML 文字列を挿入する前に、すべて的安全でないエンティティが除去されます。
[`Sanitizer()` コンストラクターの例](/ja/docs/Web/API/Sanitizer/Sanitizer#creating_the_default_sanitizer)で、どの要素が除去されるかを正確に確認できます。

```js
const defaultSanitizerButton = document.querySelector("#buttonDefault");
defaultSanitizerButton.addEventListener("click", () => {
  // 要素のコンテンツを既定のサニタイザーを使用して設定
  target.setHTML(unsanitizedString);

  // サニタイズ前と挿入後の HTML をログ出力する
  logElement.textContent =
    "Default sanitizer: remove script element and onclick attribute\n\n";
  log(`\nunsanitized: ${unsanitizedString}`);
  log(`\nsanitized: ${target.innerHTML}`);
});
```

次のクリックハンドラーは、独自のサニタイザーを使ってターゲット HTML を設定します。このサニタイザーは、{{htmlelement("div")}}、{{htmlelement("p")}}、{{htmlelement("script")}} 要素のみが許可されるように設定します。
`setHTML` メソッドを使用しているため、 `<script>` も同時に除去されることに注意してください。

```js
const allowScriptButton = document.querySelector("#buttonAllowScript");
allowScriptButton.addEventListener("click", () => {
  // 独自のサニタイザーを使用して要素のコンテンツを設定
  const sanitizer1 = new Sanitizer({
    elements: ["div", "p", "script"],
  });
  target.setHTML(unsanitizedString, { sanitizer: sanitizer1 });

  // サニタイズ前と挿入後の HTML をログ出力
  logElement.textContent =
    "Sanitizer: {elements: ['div', 'p', 'script']}\n Script removed even though allowed\n";
  log(`\nunsanitized: ${unsanitizedString}`);
  log(`\nsanitized: ${target.innerHTML}`);
});
```

```js hidden
} else {
  log("HTML サニタイザー API はこのブラウザーは対応していません。");
  // フォールバックまたは代替動作を指定
}
```

#### 結果

「既定」と「allowScript」ボタンをクリックすると、それぞれ既定のサニタイザーと独自のサニタイザーの効果を確認できます。
いずれの場合も、サニタイザーで明示的に許可した場合でも、`<script>` 要素と `onclick` ハンドラーは除去されることに注意してください。

{{EmbedLiveSample("setHTML() live example","100","350px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.setHTMLUnsafe()")}}
- {{domxref("ShadowRoot.setHTML()")}} および {{domxref("ShadowRoot.setHTMLUnsafe()")}}
- {{domxref("Document.parseHTML_static", "Document.parseHTML()")}} および {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
- [HTML サニタイザー API](/ja/docs/Web/API/HTML_Sanitizer_API)
