---
title: "ShadowRoot: setHTML() メソッド"
short-title: setHTML()
slug: Web/API/ShadowRoot/setHTML
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("HTML Sanitizer API")}}

**`setHTML()`** は {{domxref("ShadowRoot")}} インターフェイスのメソッドで、HTML の文字列を構文解析・無害化してシャドウ DOM 内の既存のツリーを置き換える、XSS 対策済みの安全な方法を提供します。

このメソッドは、渡されたサニタイザーによって許可されている場合でも、XSS の観点から安全でないとみなされる要素や属性をすべて除去します。
特に、{{HTMLElement("script")}}、{{HTMLElement("frame")}}、{{HTMLElement("iframe")}}、{{HTMLElement("embed")}}、{{HTMLElement("object")}}、{{SVGElement("use")}} の各要素、およびイベントハンドラー属性は常に除去されます。

ユーザーが指定した HTML 文字列を設定する際、（対応している場合は）{{domxref("ShadowRoot.innerHTML")}} のそのまま置き換えとして推奨されます。

## 構文

```js-nolint
setHTML(input)
setHTML(input, options)
```

### 引数

- `input`
  - : 文字列で、無害化されシャドウルートに挿入される HTML を定義します。
- `options` {{optional_inline}}
  - : 以下のオプション引数を持つオプションオブジェクトです。
    - `sanitizer`
      - : {{domxref("Sanitizer")}} または {{domxref("SanitizerConfig")}} オブジェクトで、入力のどの要素が許可されたり削除されたりするかを定義します。文字列 `"default"` で[デフォルトのサニタイザー設定](/ja/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration)になります。
        このメソッドは、サニタイザーによって許可されている場合でも、XSS のリスクがある要素や属性をすべて除去します。
        指定しなかった場合、デフォルトの `Sanitizer` の設定が使用されます。

        なお、同じ設定を複数回使用する場合は、`Sanitizer` を使用し、必要に応じてそれを変更する方が効率的であると考えられます。

### 返値

なし (`undefined`)。

### 例外

- {{jsxref("TypeError")}}
  - : `options.sanitizer` に以下の値が渡された場合、この例外が発生します。
    - {{domxref("SanitizerConfig")}} が[有効](/ja/docs/Web/API/SanitizerConfig#valid_configuration)ではない。
      例えば、"allowed" と "removed" の両方の設定項目を含む構成などです。
    - 文字列の値が `"default"` 出ない場合。
    - {{domxref("Sanitizer")}}、{{domxref("SanitizerConfig")}}、文字列のいずれでもない値。

## 解説

**`setHTML()`** メソッドは、HTML 文字列を構文解析・無害化し、それを用いてシャドウ DOM 内の既存のツリーを置き換えるための、XSS 対策済みの方法を提供します。

`setHTML()` は、サニタイザーの設定で許可されていない HTML エンティティをすべて除去し、さらに、サニタイザーの設定で許可されているかどうかにかかわらず、XSS のリスクがある要素や属性をすべて除去します。

`options.sanitizer` 引数にサニタイザーが指定されていない場合、`setHTML()` は [デフォルトのサニタイザー設定](/en-US/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) を使用して実行されます。
この設定は、XSS 攻撃だけでなく、クリックジャッキングやスプーフィングなどの他の攻撃も防止するため、ほとんどの用途に適しています。

独自の `Sanitizer` または `SanitizerConfig` を指定することで、許可または除去される要素、属性、コメントを選択できます。
なお、サニタイザーによって安全でないオプションが許可されている場合でも、このメソッドを使用するとそれらは除去されます（{{domxref('Sanitizer.removeUnsafe()')}} が呼び出されたサニタイザーと同様に、同じ要素が除去されます）。

信頼できない HTML 文字列を要素に挿入する際は、{{domxref("ShadowRoot.innerHTML")}} の代わりに `setHTML()` を使用してください。
また、安全でない要素や属性が仕様上できる必要がある場合を除き、{{domxref("ShadowRoot.setHTMLUnsafe()")}} の代わりに使用してください。

なお、このメソッドは入力文字列を常に XSS 攻撃に脆弱なエンティティから無害化するため、[信頼型 API](/ja/docs/Web/API/Trusted_Types_API) によるセキュリティ保護や検証は行われません。

## 例

### 基本的な使い方

この例では、`setHTML()` を使用して HTML 文字列を無害化し挿入する方法のいくつかを示しています。

まず、ターゲットとする {{domxref("ShadowRoot")}} を作成します。これは {{domxref("Element.attachShadow()")}} を使用してプログラム的に作成することもできますが、この例では宣言的にルートを作成します。

```html
<div id="host">
  <template shadowrootmode="open">
    <span>シャドウ DOM 内の span 要素</span>
  </template>
</div>
```

`#host` 要素から、次に示すようにシャドウルートへのハンドルを取得できます。

```js
const shadow = document.querySelector("#host").shadowRoot;
```

下記コードは、文字列とさまざまなサニタイザーを指定して `setHTML()` を呼び出し、HTML をフィルタリングしてシャドウルートに挿入する方法を示しています。

```js
// HTML の無害化されていない文字列を定義
const unsanitizedString = "abc <script>alert(1)<" + "/script> def";

// setHTML() をデフォルトのサニタイザーで実行
shadow.setHTML(unsanitizedString);

// 独自のサニタイザーを定義し、setHTML() で使用する
// これは、<div>、<p>、<span> 要素のみを許可する（<script> は安全ではないため、除去される予定）
const sanitizer1 = new Sanitizer({ elements: ["div", "p", "span", "script"] });
shadow.setHTML(unsanitizedString, { sanitizer: sanitizer1 });

// setHTML() 内で独自の SanitizerConfig を定義
// これは <div>, <p>, <span>, <script> の各要素と、その他の安全でない要素/属しを除去する
shadow.setHTML(unsanitizedString, {
  sanitizer: { removeElements: ["div", "p", "span", "script"] },
});
```

### `setHTML()` ライブサンプル

この例では、異なるサニタイザーで呼び出される際のメソッドの「ライブ」デモを提供します。
コードでは、デフォルトのサニタイザーと独自のサニタイザーを使用して、それぞれ HTML 文字列を無害化および挿入するためのボタンを定義しています。
元の文字列と無害化された HTML はログに記録されるため、それぞれの結果を確認できます。

#### HTML

この HTML では、異なるサニタイザーを適用するための 2 つの {{htmlelement("button")}} 要素、例をリセットするための別のボタン、および文字列を挿入するための {{htmlelement("div")}} 要素を定義しています。

```html
<button id="buttonDefault" type="button">デフォルト</button>
<button id="buttonAllowScript" type="button">allowScript</button>
<button id="reload" type="button">再読み込み</button>

<div id="host">
  <template shadowrootmode="open">
    <span>これはシャドウ DOM 内にあります</span>
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

次に、無害化対象の文字列を定義します。これはすべての場合で同じになります。
この文字列には、{{htmlelement("script")}} 要素と `onclick` ハンドラーが含まれており、これらはいずれも XSS の観点から安全ではないとみなされます。
また、シャドウルートへのハンドルとなる変数 `shadow` も取得します。

```js
// HTML の安全でない文字列を定義
const unsanitizedString = `
  <div>
    <p>シャドウ DOM 内に挿入する段落。
      <button onclick="alert('You clicked the button!')">ここをクリック</button>
    </p>
    <script src="path/to/a/module.js" type="module"><\/script>
    <p data-id="123"><code>data-</code> 属性と共に</p>
  </div>
`;

const shadow = document.querySelector("#host").shadowRoot;
```

次に、デフォルトのサニタイザーで HTML を設定するボタンのクリックハンドラーを定義します。
これにより、HTML 文字列を挿入する前に、すべての安全でないエンティティが除去されます。
[`Sanitizer()` コンストラクターの例](/ja/docs/Web/API/Sanitizer/Sanitizer#creating_the_default_sanitizer)で、どの要素が除去されるかを正確に確認できます。

```js
const defaultSanitizerButton = document.querySelector("#buttonDefault");
defaultSanitizerButton.addEventListener("click", () => {
  // 要素のコンテンツをデフォルトのサニタイザーを使用して設定
  shadow.setHTML(unsanitizedString);

  // 無害化前と挿入後の HTML をログ出力する
  logElement.textContent =
    "Default sanitizer: remove script element, onclick attribute, data- attribute\n\n";
  log(`\nunsanitized: ${unsanitizedString}`);
  log(`\n\nsanitized: ${shadow.innerHTML}`);
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
  shadow.setHTML(unsanitizedString, { sanitizer: sanitizer1 });

  // 無害化前と挿入後の HTML をログ出力
  logElement.textContent =
    "Sanitizer: {elements: ['div', 'p', 'script']}\n Script removed even though allowed\n";
  log(`\nunsanitized: ${unsanitizedString}`);
  log(`\n\nsanitized: ${shadow.innerHTML}`);
});
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
  // フォールバックまたは代替動作を指定
}
```

#### 結果

「デフォルト」と「allowScript」ボタンをクリックすると、それぞれデフォルトのサニタイザーと独自のサニタイザーの効果を確認できます。

いずれの場合も、サニタイザーで明示的に許可した場合でも、`<script>` 要素と `onclick` ハンドラーは除去されることに注意してください。
ただし、デフォルトのサニタイザーでは `data-` 属性は除去されますが、サニタイザーを指定した場合はこの属性の使用をすることができる。

{{EmbedLiveSample("setHTML() live example","100","450px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ShadowRoot.setHTMLUnsafe()")}}
- {{domxref("Element.setHTML()")}} および {{domxref("Element.setHTMLUnsafe()")}}
- {{domxref("Document.parseHTML_static", "Document.parseHTML()")}} および {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
- [HTML 無害化 API](/ja/docs/Web/API/HTML_Sanitizer_API)
