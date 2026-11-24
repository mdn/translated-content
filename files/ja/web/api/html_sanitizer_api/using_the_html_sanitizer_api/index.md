---
title: HTML 無害化 API の使用
slug: Web/API/HTML_Sanitizer_API/Using_the_HTML_Sanitizer_API
l10n:
  sourceCommit: cda9415220ba812ba2ee24e0af1c8e8001ab9924
---

{{DefaultAPISidebar("HTML Sanitizer API")}}

[HTML Sanitizer API](/ja/docs/Web/API/HTML_Sanitizer_API) は、信頼できない HTML を {{domxref("Element")}}、{{domxref("ShadowRoot")}}、または {{domxref("Document")}} に安全に挿入するためのメソッドを提供します。
この API を使用すると、必要に応じて許可する HTML エンティティをさらに制限したり、拡張したりすることもできます。

## デフォルトで安全に無害化

この API の最も一般的なユースケースは、ユーザーが提供した文字列を {{domxref("Element")}} に安全に挿入することです。
挿入する文字列に安全でない HTML エンティティを含める必要がない限り、{{domxref('Element.setHTML()')}} を {{domxref("Element.innerHTML")}} の代わりにそのまま使用できます。

例えば、次のコードは入力文字列から XSS に対して安全でない要素や属性（ここでは {{htmlelement("script")}} 要素）をすべて取り除きます。
また、HTML 仕様で対象の要素の子要素として許可されていない要素も取り除きます。

```js
const untrustedString = "abc <script>alert(1)<" + "/script> def";
const someElement = document.getElementById("target");

// someElement.innerHTML = untrustedString;
someElement.setHTML(untrustedString);

console.log(someElement.innerHTML); // abc def
```

ほかの XSS に対して安全なメソッドである {{domxref('ShadowRoot.setHTML()')}} と {{domxref('Document/parseHTML_static','Document.parseHTML()')}} も、同じように使用します。

## 無害化の設定の使用

すべての無害化メソッドには {{domxref('Sanitizer')}} または {{domxref('SanitizerConfig')}} を渡すことができます。
これらのオブジェクトは、HTML 文字列を挿入するときにどの要素、属性、コメントを許可するか、または取り除くかを定義します。

{{domxref('Sanitizer')}} は基本的に {{domxref('SanitizerConfig')}} のラッパーです。
使用、共有、変更をより簡単かつ安全にするための最適化と正規化を行います。

### 無害化オブジェクトを使用した安全なメソッド

XSS に対して安全なメソッドは、常に安全でない HTML 要素や属性を取り除きます（前述の[デフォルトで安全に無害化](#デフォルトで安全に無害化)を参照してください）。

安全なメソッドの第二引数として無害化オブジェクトを渡すと、デフォルトの設定と同じか、それより少ないエンティティだけを許可できます。
例えば、以下の `someElement` のコンテキストでは {{htmlelement("p")}} 要素と {{htmlelement("a")}} 要素だけが想定されることがわかっている場合、これらの要素だけを許可する設定を作成できます。

```js
const sanitizerOne = new Sanitizer({ elements: ["p", "a"] });
sanitizerOne.allowAttribute("href");
someElement.setHTML(untrustedString, { sanitizer: sanitizerOne });
```

### 安全でない方法で無害化する

安全でない可能性がある要素や属性を含む入力を挿入する必要がある場合もあります。
この場合は、API の XSS に対して安全でないメソッドである {{domxref('Element.setHTMLUnsafe()')}}、{{domxref('ShadowRoot.setHTMLUnsafe()')}}、{{domxref('Document/parseHTMLUnsafe_static','Document.parseHTMLUnsafe()')}} のいずれかを使用できます。

リスクをある程度減らすには、まず XSS に対して安全な要素だけを許可するデフォルトの無害化オブジェクトを作成し、入力に含まれることが想定される安全でないエンティティだけを許可します。

例えば、次の無害化オブジェクトでは安全な要素をすべて許可し、さらに `button` 要素に限って安全でない `onclick` ハンドラーを許可します。

```js
const untrustedString = '<button onclick="alert(1)">ボタンのテキスト</button>';
const someElement = document.getElementById("target");

const sanitizerOne = new Sanitizer(); // デフォルトの無害化オブジェクト
sanitizerOne.allowElement({ name: "button", attributes: ["onclick"] });
someElement.setHTMLUnsafe(untrustedString, { sanitizer: sanitizerOne });
```

このコードでは `alert(1)` が許可されるため、この属性が悪意のある目的に使用される可能性があります。
ただし、ほかの XSS に対して安全でない HTML エンティティはすべて取り除かれていることがわかっているため、このケースだけを考慮し、ほかの緩和策を講じればよいことになります。

安全でないメソッドは、指定した無害化設定を使用します（または、設定がなければ無害化しません）。そのため、使用には注意が必要です。
最低限、[信頼型](/ja/docs/Web/API/HTML_Sanitizer_API#無害化と信頼型)を強制し、文字列ではなく {{domxref("TrustedHTML")}} をメソッドに渡す必要があります。

## 許可設定

無害化オブジェクトの使用時に挿入を許可する HTML 要素と属性だけを指定して、["許可" 無害化設定](/ja/docs/Web/API/HTML_Sanitizer_API#許可と除去の設定)を構築できます。
この形式の設定は理解しやすく、対象のコンテキストで許可する HTML エンティティが正確にわかっている場合に便利です。

例えば、次の設定では {{htmlelement("p")}} 要素と {{htmlelement("div")}} 要素、および `cite` 属性と `onclick` 属性を「許可」します。
さらに、{{htmlelement("b")}} 要素の内容は取り除かれないため、その内容を残して要素自体を置き換えます（これは「許可」の一形態です）。

```js
const sanitizer = new Sanitizer({
  elements: ["p", "div"],
  attributes: ["cite", "onclick"],
  replaceWithChildrenElements: ["b"],
});
```

### 要素の許可

許可する要素は、`Sanitizer()` コンストラクター（または無害化メソッド）に渡す {{domxref("SanitizerConfig")}} インスタンスの [`elements`](/ja/docs/Web/API/SanitizerConfig#elements) プロパティで指定できます。

このプロパティを使う最も簡単な方法は、要素名の配列を指定することです。

```js
const sanitizer = new Sanitizer({
  elements: ["div", "span"],
});
```

次のように、`name` と `namespace` を定義したオブジェクトを使って、許可する要素をそれぞれ指定することもできます（可能であれば、`Sanitizer` が名前空間を自動的に推測します）。

```js
const sanitizer = new Sanitizer({
  elements: [
    {
      name: "div",
      namespace: "http://www.w3.org/1999/xhtml",
    },
    {
      name: "span",
      namespace: "http://www.w3.org/1999/xhtml",
    },
  ],
});
```

{{domxref("Sanitizer.allowElement()")}} を使用して、`Sanitizer` に要素を追加することもできます。
ここでは、空の無害化オブジェクトに同じ要素を追加します。

```js
const sanitizer = new Sanitizer({});
sanitizer.allowElement("div");
sanitizer.allowElement({
  name: "span",
  namespace: "http://www.w3.org/1999/xhtml",
});
```

### グローバル属性の許可

HTML 仕様で許可されている任意の要素で属性を許可するには、{{domxref("SanitizerConfig")}} の [`attributes`](/ja/docs/Web/API/SanitizerConfig#attributes_2) プロパティを使用できます。

`attributes` プロパティを使う最も簡単な方法は、属性名の配列を指定することです。

```js
const sanitizer = new Sanitizer({
  attributes: ["cite", "onclick"],
});
```

要素の場合と同様に、`name` と `namespace` プロパティで属性をそれぞれ指定することもできます。

```js
const sanitizer = new Sanitizer({
  attributes: [
    {
      name: "cite",
      namespace: null,
    },
    {
      name: "onclick",
      namespace: null,
    },
  ],
});
```

{{domxref("Sanitizer.allowAttribute()")}} メソッドを使って、許可する属性を `Sanitizer` に追加することもできます。

```js
const sanitizer = new Sanitizer({});
sanitizer.allowAttribute("cite");
sanitizer.allowAttribute("onclick");
```

### 特定の要素での属性の許可と削除

特定の要素で属性を許可または削除することもできます。
この場合も要素の挿入自体は許可しているため、これは「許可設定」の一部です。

要素で属性を許可するには、`name` と `attributes` プロパティを持つオブジェクトとして要素を指定します。
[`attributes`](/ja/docs/Web/API/SanitizerConfig#attributes) プロパティには、その要素で許可する属性の配列を指定します。

以下の無害化オブジェクトでは、{{htmlelement("div")}}、{{htmlelement("a")}}、{{htmlelement("span")}} 要素を許可します。
さらに、{{htmlelement("a")}} 要素では `href`、`rel`、`hreflang`、`type` 属性を許可します。

```js
const sanitizer = new Sanitizer({
  elements: [
    "div",
    { name: "a", attributes: ["href", "rel", "hreflang", "type"] },
    "span",
  ],
});
```

同様に、[`removeAttributes`](/ja/docs/Web/API/SanitizerConfig#removeattributes) プロパティを持つ要素オブジェクトを使用して、要素で許可しない属性を指定できます。
例えば、次の無害化オブジェクトはすべての `<a>` 要素から `type` 属性を取り除きます。

```js
const sanitizer = new Sanitizer({
  elements: ["div", { name: "a", removeAttributes: ["type"] }],
});
```

どちらの場合も、`name` と `namespace` プロパティを持つオブジェクトとして属性をそれぞれ指定できます。
{{domxref("Sanitizer.allowElement()")}} に渡す同じ要素オブジェクトを使って、属性のプロパティを設定することもできます。

削除設定の `Sanitizer` では、要素ごとの属性の動作を定義できないことに注意してください。
必要な `elements` 配列が存在しないためです。
要素ごとの属性に関するほかの制約については、[有効な設定](/ja/docs/Web/API/SanitizerConfig#有効な設定)で説明しています。

### 子要素の置き換え

内側の内容で置き換える要素の配列を指定できます。
これは、要素からスタイルを取り除く場合に最もよく使用されます。

例えば、次のコードでは {{domxref("SanitizerConfig")}} の [`replaceWithChildrenElements`](/ja/docs/Web/API/SanitizerConfig#replacewithchildrenelements) プロパティを使い、{{htmlelement("b")}} 要素を置き換えるよう指定しています。

```js
const replaceBoldSanitizer = new Sanitizer({
  replaceWithChildrenElements: ["b"],
});

targetElement.setHTML("この<b>強調</b>は不要です", {
  sanitizer: replaceBoldSanitizer,
});

// 結果を出力
console.log(targetElement.innerHTML); // この強調は不要です
```

要素や属性と同じように、名前空間を指定して置き換える要素を指定することも、{{domxref("Sanitizer.replaceElementWithChildren()")}} メソッドを使用することもできます。

```js
const sanitizer = new Sanitizer({});
sanitizer.replaceElementWithChildren("b");
sanitizer.replaceElementWithChildren({
  name: "i",
  namespace: "http://www.w3.org/1999/xhtml",
});
```

## 削除設定

無害化オブジェクトの使用時に入力から削除する HTML 要素と属性を指定して、["削除" 無害化設定](/ja/docs/Web/API/HTML_Sanitizer_API#許可と除去の設定)を構築できます。
設定で指定していないほかの要素や属性は許可されますが、安全な無害化メソッドでこの設定を使用すると、それらも削除される場合があります。

> [!NOTE]
> 無害化設定には許可リストまたは削除リストのどちらかを含められますが、両方を含めることはできません。

例えば、次の設定では {{htmlelement("script")}}、{{htmlelement("div")}}、{{htmlelement("span")}} 要素と `onclick` 属性を削除します。

```js
const sanitizer = new Sanitizer({
  removeElements: ["script", "div", "span"],
  removeAttributes: ["onclick"],
});
```

削除する要素を指定する方法は、既存の設定を調整する場合により便利です。
例えば、安全なデフォルトの無害化オブジェクトを使用しているものの、ほかの要素も確実に削除したい場合を考えてみましょう。

```js
const sanitizer = new Sanitizer();
sanitizer.removeElement("div");
```

### 要素の削除

{{domxref("SanitizerConfig")}} インスタンスの [`removeElements`](/ja/docs/Web/API/SanitizerConfig#removeelements) プロパティを使って、削除する要素を指定できます。

このプロパティを使う最も簡単な方法は、要素名の配列を指定することです。

```js
const sanitizer = new Sanitizer({
  removeElements: ["div", "span"],
});
```

[要素の許可](#要素の許可)と同じように、`name` と `namespace` を定義したオブジェクトを使って削除する要素をそれぞれ指定することもできます。
次のように、`Sanitizer` API を使用して削除する要素を設定することもできます。

```js
const sanitizer = new Sanitizer({});
sanitizer.removeElement("div");
sanitizer.removeElement({
  name: "span",
  namespace: "http://www.w3.org/1999/xhtml",
});
```

### 属性の削除

{{domxref("SanitizerConfig")}} の [`removeAttributes`](/ja/docs/Web/API/SanitizerConfig#removeattributes) プロパティを使って、グローバルに削除する属性を指定できます。

このプロパティを使う最も簡単な方法は、属性名の配列を指定することです。

```js
const sanitizer = new Sanitizer({
  removeAttributes: ["onclick", "lang"],
});
```

`name` と `namespace` を定義したオブジェクトで各属性を指定することもできます。
また、{{domxref("Sanitizer.removeAttribute()")}} を使って、すべての要素から削除する属性を追加することもできます。

```js
const sanitizer = new Sanitizer({});
sanitizer.removeAttribute("onclick");
sanitizer.removeAttribute("lang");
```

## コメントとデータ属性

{{domxref("SanitizerConfig")}} を使って、[`comments`](/ja/docs/Web/API/SanitizerConfig#comments) プロパティで挿入されたコンテンツからコメントを取り除くかどうかを指定できます。
また、論理値を取る [`dataAttributes`](/ja/docs/Web/API/SanitizerConfig#dataattributes) プロパティを使うと、`data-` 属性を `attributes` 配列に追加せずに許可するかどうかを指定できます。

コメントとすべての `data-*` 属性を許可するには、次のような設定を使用します。

```js
const sanitizer = new Sanitizer({
  comments: true,
  dataAttributes: true,
});
```

既存の無害化オブジェクトでは、{{domxref("Sanitizer.setComments()")}} と {{domxref("Sanitizer.setDataAttributes()")}} を使って、コメントまたはデータ属性のプロパティを同様に設定できます。

```js
const sanitizer = new Sanitizer({});
sanitizer.setComments(true);
sanitizer.setDataAttributes(true);
```

## Sanitizer と SanitizerConfig の比較

すべての無害化メソッドには、{{domxref("Sanitizer")}} または {{domxref("SanitizerConfig")}} インスタンスのどちらかである無害化設定を渡すことができます。

{{domxref("SanitizerConfig")}} を使うと、許可または削除する複数の要素や属性を一度に簡潔に指定できます。
このオブジェクトを変更する際は、[有効な設定](/ja/docs/Web/API/SanitizerConfig#有効な設定)のままになるよう注意が必要な場合があります。

{{domxref("Sanitizer")}} オブジェクトは {{domxref("SanitizerConfig")}} のラッパーで、次のような便利な機能を追加で提供します。

- デフォルトのコンストラクターは、XSS に対して安全な要素と属性をすべて許可する設定を作成します。そのため、制限を少し強めたり弱めたりした無害化オブジェクトを作成する際のよい出発点になります。
- `Sanitizer` メソッドは、基盤となる `SanitizerConfig` が[有効な設定](/ja/docs/Web/API/SanitizerConfig#有効な設定)のままになるようにします。
  例えば、`allowElement()` を呼び出して要素を許可すると、その要素は（存在する場合）基盤となる `replaceWithChildrenElements` 配列からも削除されます。
  この正規化によって設定の効率が高まります。
- {{domxref("Sanitizer.removeUnsafe()")}} メソッドを使うと、既存の設定から XSS に対して安全でないエンティティをすべて取り除けます。
- 設定をエクスポートして、どのエンティティが許可され、どれが削除されるかを正確に確認できます。

安全な無害化メソッドを使用できる場合は、無害化設定を定義する必要がないこともあります。

## 例

ほかの例については、[HTML Sanitizer API](/ja/docs/Web/API/HTML_Sanitizer_API) と {{domxref("Sanitizer")}} インターフェイスの個々のメソッドを参照してください。

### Sanitizer のデモ

この例では、{{domxref("Sanitizer")}} のメソッドを使って無害化オブジェクトを更新する方法を示します。
このデモでは、許可リストと削除リストに要素や属性を追加し、その無害化オブジェクトを {{domxref("Element.setHTML()")}} と {{domxref("Element.setHTMLUnsafe()")}} で使用したときの効果を確認できます。

#### HTML

まず、デフォルトの無害化オブジェクトまたは空の無害化オブジェクトにリセットするボタンを定義します。

```html
<div class="button-group">
  <button id="defaultSanitizerBtn">デフォルトの無害化オブジェクト</button>
  <button id="emptySanitizerBtn">空の無害化オブジェクト</button>
</div>
```

続いて、要素や属性の許可リストと削除リストに追加する項目をユーザーが選べるように、{{htmlelement("select")}} 要素を定義します。

```html
<div class="select-group">
  <label for="allowElementSelect">要素を許可:</label>
  <select id="allowElementSelect">
    <option value="">--要素を選択--</option>
    <option value="h1">h1</option>
    <option value="div">div</option>
    <option value="span">span</option>
    <option value="script">script</option>
    <option value="p">p</option>
    <option value="button">button</option>
    <option value="img">img</option>
  </select>

  <label for="removeElementSelect">要素を削除:</label>
  <select id="removeElementSelect">
    <option value="">--要素を選択--</option>
    <option value="h1">h1</option>
    <option value="div">div</option>
    <option value="span">span</option>
    <option value="script">script</option>
    <option value="p">p</option>
    <option value="button">button</option>
    <option value="img">img</option>
  </select>
</div>
<div class="select-group">
  <label for="allowAttributeSelect">属性を許可:</label>
  <select id="allowAttributeSelect">
    <option value="">--属性を選択--</option>
    <option value="class">class</option>
    <option value="autocapitalize">autocapitalize</option>
    <option value="hidden">hidden</option>
    <option value="lang">lang</option>
    <option value="title">title</option>
    <option value="onclick">onclick</option>
  </select>
  <label for="removeAttributeSelect">属性を削除:</label>
  <select id="removeAttributeSelect">
    <option value="">--属性を選択--</option>
    <option value="class">class</option>
    <option value="autocapitalize">autocapitalize</option>
    <option value="hidden">hidden</option>
    <option value="lang">lang</option>
    <option value="title">title</option>
    <option value="onclick">onclick</option>
  </select>
</div>
```

次に、コメントとデータ属性の許可と削除を切り替えるボタンを追加します。

```html
<div class="button-group">
  <button id="toggleCommentsBtn">コメントを切り替え</button>
  <button id="toggleDataAttributesBtn">データ属性を切り替え</button>
</div>
```

残りの要素では、構文解析する文字列（編集可能）と、その文字列を要素に挿入したときの結果を `setHTML()` と `setHTMLUnsafe()` でそれぞれ表示します。

```html
<div>
  <p>元の文字列（編集可能）</p>
  <pre contenteditable id="unmodified"></pre>
  <p>setHTML()（文字列としての HTML）</p>
  <pre id="setHTML"></pre>
  <p>setHTMLUnsafe()（文字列としての HTML）</p>
  <pre id="setHTMLUnsafe"></pre>
</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 430px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent = text;
}
```

まず、{{domxref("Sanitizer")}} インターフェイスに対応しているかどうかを確認します。
次に、XSS に対して安全な要素と安全でない要素（{{htmlelement("script")}} など）を含む「安全でない HTML」文字列を定義します。
この文字列を最初のテキスト領域にテキストとして挿入します。
テキスト領域は編集可能なので、必要に応じて後から文字列を変更できます。

続いて、構文解析した HTML を書き込む `setHTML` と `setHTMLUnsafe` のテキスト領域を取得し、空の `Sanitizer` 設定を作成します。
新しい無害化オブジェクトを指定して `applySanitizer()` メソッドを呼び出し、安全な方法と安全でない方法の両方で初期文字列を無害化した結果をログに出力します。

```js
if ("Sanitizer" in window) {
  // 安全でない HTML 文字列を定義
  const initialHTMLString =
    `<div id="mainDiv"><!-- HTML コメント -->
    <p data-test="true">これは段落です。 <button onclick="alert('ボタンをクリックしました！')">クリックしてください</button></p>
    <p><b>大胆</b>に、勇敢に！</p>
    <script>alert(1)<` + "/script></div>";

  // 安全でない文字列を最初の要素のテキストノードに設定
  const unmodifiedElement = document.querySelector("#unmodified");
  unmodifiedElement.innerText = initialHTMLString;
  unsafeHTMLString = unmodifiedElement.innerText;

  const setHTMLElement = document.querySelector("#setHTML");
  const setHTMLUnsafeElement = document.querySelector("#setHTMLUnsafe");
  // 起動時にデフォルトの無害化オブジェクトを作成して適用
  let sanitizer = new Sanitizer({});
  applySanitizer(sanitizer);
```

以下は、結果をログに出力する `applySanitizer()` メソッドです。
最初のテキスト領域から「信頼できない文字列」の内容を取得し、渡された `sanitizer` 引数を使って {{domxref("Element.setHTML()")}} メソッドと {{domxref("Element.setHTMLUnsafe()")}} メソッドで構文解析し、それぞれのテキスト領域に書き込みます。
どちらの場合も、挿入された HTML を要素の `innerHTML` から読み取り、人が読めるように `innerText` として要素に書き戻します。

続いて、{{domxref("Sanitizer.get()")}} で取得した現在の無害化設定をログに出力します。

```js
function applySanitizer(sanitizer) {
  // 要素に構文解析する文字列を取得
  unsafeHTMLString = unmodifiedElement.innerText;

  // 安全な方法で文字列を無害化してテキストとして表示
  setHTMLElement.setHTML(unsafeHTMLString, { sanitizer });
  setHTMLElement.innerText = setHTMLElement.innerHTML;

  // 安全でない方法で文字列を無害化してテキストとして表示
  setHTMLUnsafeElement.setHTMLUnsafe(unsafeHTMLString, { sanitizer });
  setHTMLUnsafeElement.innerText = setHTMLUnsafeElement.innerHTML;

  // 無害化設定を表示
  const sanitizerConfig = sanitizer.get();
  log(JSON.stringify(sanitizerConfig, null, 2));
}
```

次に、各ボタンと選択リストの要素を取得します。

```js
const defaultSanitizerBtn = document.querySelector("#defaultSanitizerBtn");
const emptySanitizerBtn = document.querySelector("#emptySanitizerBtn");
const allowElementSelect = document.querySelector("#allowElementSelect");
const removeElementSelect = document.querySelector("#removeElementSelect");
const allowAttributeSelect = document.querySelector("#allowAttributeSelect");
const removeAttributeSelect = document.querySelector("#removeAttributeSelect");

const toggleCommentsBtn = document.querySelector("#toggleCommentsBtn");
const toggleDataAttributesBtn = document.querySelector(
  "#toggleDataAttributesBtn",
);
```

最初の 2 つのボタンのハンドラーは、それぞれデフォルトの無害化オブジェクトと空の無害化オブジェクトを作成します。
先ほどの `applySanitizer()` メソッドを使って無害化を実行し、ログを更新します。

```js
defaultSanitizerBtn.addEventListener("click", () => {
  sanitizer = new Sanitizer();
  applySanitizer(sanitizer);
});

emptySanitizerBtn.addEventListener("click", () => {
  sanitizer = new Sanitizer({});
  applySanitizer(sanitizer);
});
```

続いて、選択リストのハンドラーを示します。
新しい要素または属性が選択されるたびに、現在の無害化オブジェクトで対応するメソッドを呼び出します。
例えば、`allowElementSelect` のリスナーは {{domxref("Sanitizer.allowElement()")}} を呼び出し、選択した要素を許可する要素に追加します。
いずれの場合も、現在の無害化オブジェクトで処理した結果を `applySanitizer()` がログに出力します。

```js
allowElementSelect.addEventListener("change", (event) => {
  if (event.target.value !== "") {
    sanitizer.allowElement(event.target.value);
    applySanitizer(sanitizer);
  }
});
removeElementSelect.addEventListener("change", (event) => {
  if (event.target.value !== "") {
    sanitizer.removeElement(event.target.value);
    applySanitizer(sanitizer);
  }
});
allowAttributeSelect.addEventListener("change", (event) => {
  if (event.target.value !== "") {
    sanitizer.allowAttribute(event.target.value);
    applySanitizer(sanitizer);
  }
});
removeAttributeSelect.addEventListener("change", (event) => {
  if (event.target.value !== "") {
    sanitizer.removeAttribute(event.target.value);
    applySanitizer(sanitizer);
  }
});
```

最後の 2 つのボタンのハンドラーを次に示します。
これらは `dataAttributesActive` 変数と `commentsActive` 変数の値を切り替え、その値を {{domxref("Sanitizer.setComments()")}} と {{domxref("Sanitizer.setDataAttributes()")}} で使用します。
コメントが最初に無効になっている場合、ボタンを最初に押しても効果がないことがあります。

```js
let dataAttributesActive = true;
let commentsActive = true;

toggleCommentsBtn.addEventListener("click", () => {
  commentsActive = !commentsActive;
  sanitizer.setComments(commentsActive);
  applySanitizer(sanitizer);
});

toggleDataAttributesBtn.addEventListener("click", () => {
  dataAttributesActive = !dataAttributesActive;
  sanitizer.setDataAttributes(dataAttributesActive);
  applySanitizer(sanitizer);
});


} else {
  log("このブラウザーは HTML Sanitizer API に対応していません。");
  // 代替の動作を提供
}
```

#### 結果

結果を以下に示します。
上部のボタンを選択すると、それぞれ新しいデフォルトの無害化オブジェクトまたは空の無害化オブジェクトを設定します。
続いて選択リストを使い、対応する無害化オブジェクトの許可リストと削除リストに要素や属性を追加し、ほかのボタンでコメントの有効と無効を切り替えます。
現在の無害化設定はログに出力されます。
上部のテキスト領域にあるテキストは、現在の無害化設定で無害化され、`setHTML()` と `setHTMLUnsafe()` で構文解析されます。

{{EmbedLiveSample("Sanitizer demo","100","650px")}}

要素や属性を許可リストに追加すると、削除リストから取り除かれます（逆の場合も同様です）。
また、安全でないメソッドで挿入する要素は無害化オブジェクトで許可できますが、安全なメソッドでは許可できないことに注意してください。
