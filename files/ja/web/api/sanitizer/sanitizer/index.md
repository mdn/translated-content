---
title: "Sanitizer: Sanitizer() コンストラクター"
short-title: Sanitizer()
slug: Web/API/Sanitizer/Sanitizer
l10n:
  sourceCommit: cda9415220ba812ba2ee24e0af1c8e8001ab9924
---

{{APIRef("HTML Sanitizer API")}}

**`Sanitizer()`** コンストラクターは新しい {{domxref("Sanitizer")}} オブジェクトを生成します。このオブジェクトは、HTML や文書が DOM に挿入または構文解析される前に、不要な要素や属性を取り除くために使用できます。

## 構文

```js-nolint
new Sanitizer()
new Sanitizer(configuration)
```

### 引数

- `configuration` {{optional_inline}}
  - : [有効な設定](/ja/docs/Web/API/SanitizerConfig#有効な設定)を定義する {{domxref("SanitizerConfig")}}、または[デフォルトの無害化設定](/ja/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration)を示す文字列 `"default"` です。
    「空の設定」(`{}`) を渡すこともできます。この場合、配列が空の[除去設定](/ja/docs/Web/API/HTML_Sanitizer_API#除去設定)になります。

    省略した場合、このコンストラクターはデフォルト設定の `Sanitizer` を返します。

### 返値

{{domxref("Sanitizer")}} オブジェクトのインスタンスです。

### 例外

- {{jsxref("TypeError")}}
  - : `configuration` 引数に次のいずれかが渡された場合です。
    - 有効な設定ではない {{domxref("SanitizerConfig")}}。
      例えば、「許可」と「除去」の設定を両方含む設定です。
    - 値が `"default"` ではない文字列。

## 解説

このコンストラクターは、新しい {{domxref("Sanitizer")}} オブジェクトを生成します。このオブジェクトは、HTML や文書が DOM に挿入または構文解析される前に、不要な要素や属性を取り除くために使用できます。

[デフォルトの無害化設定](/ja/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration)は、XSS に危険な要素や属性のほか、クリックジャッキングやなりすましなど、別の攻撃に使われる可能性がある要素や属性も除外する[許可設定](/ja/docs/Web/API/HTML_Sanitizer_API#許可設定)です。
この設定は、ほとんどの無害化の用途に適しています。
コンストラクターに `"default"` またはオブジェクトを渡さなかった場合、この設定が作成されます。

無害化の動作をカスタマイズするには、[有効な構成](/ja/docs/Web/API/SanitizerConfig#有効な設定)を含む {{domxref("SanitizerConfig")}} をコンストラクターに渡します。

有効な設定では、`elements` 配列または `removeElements` 配列のどちらか一方を指定でき、両方は指定できません。また、`attributes` 配列または `removeAttributes` 配列のどちらか一方を指定でき、両方は指定できません。
ほとんどの場合、どちらの配列を使ってもかまいません。例えば、{{domxref("Sanitizer/allowAttribute","allowAttribute()")}} メソッドは、属性を `attributes` 配列に追加する方法でも、`removeAttributes` 配列から削除する方法でも、同じ動作を実現できます。
注意すべき点は、`removeElements` を含む設定では要素ごとの属性を指定できないことです。要素ごとの属性は `elements` 配列で定義する必要があります。

## 例

### デフォルトの `Sanitizer` の作成

この例では、デフォルトの `Sanitizer` を作成し、結果の設定オブジェクトをログに出力する方法を示します。

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 400px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

このコードでは、まず `Sanitizer` インターフェイスに対応しているかどうかを調べます。
次に、オプションを渡さずにデフォルトの `Sanitizer` を作成し、設定を取得してログに出力します。

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent = text;
}
```

```js hidden
if ("Sanitizer" in window) {
```

```js
// デフォルトの Sanitizer を作成
const sanitizer = new Sanitizer();

// (デフォルトの) 設定を取得してログに出力
const defaultConfig = sanitizer.get();
log(JSON.stringify(defaultConfig, null, 2));
```

```js hidden
} else {
  log("このブラウザーは HTML 無害化 API に対応していません。");
}
```

#### 結果

出力は以下に表示されます。
デフォルト設定は許可設定です。`Sanitizer` の使用時に許可される要素を含む `elements` 配列と、属性を含む `attributes` 配列の両方があります。

{{EmbedLiveSample("デフォルトの Sanitizer の作成","100","480px")}}

### `Sanitizer` を作成して `setHTML()` で使用

この例では、安全な HTML DOM 挿入メソッドでカスタム `Sanitizer` を作成して使用する方法を示します。

#### HTML

無害化した HTML と無害化していない HTML の両方を表示するために、2 つの {{htmlelement("pre")}} 要素を定義します。

```html
<pre id="unmodified"></pre>
<pre id="setHTML"></pre>
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

次のコードでは、まず `Sanitizer` インターフェイスに対応しているかどうかを調べます。
次に、「安全でない HTML」の文字列を定義します。この文字列には、{{htmlelement("p")}} や {{htmlelement("span")}} のような安全な要素と、{{htmlelement("script")}} のような XSS に対して安全でない要素の両方が含まれています。

次に、{{domxref("SanitizerConfig")}} を使って `Sanitizer` オブジェクトを作成し、{{htmlelement("div")}}、{{htmlelement("p")}}、{{htmlelement("span")}}、{{htmlelement("script")}} の各 HTML 要素を許可します。
この `Sanitizer` を使い、危険な文字列を {{domxref("Element.setHTML()")}} に渡します。
元の文字列と無害化された文字列は、どちらもテキストノードとして表示されます。

```js hidden
if ("Sanitizer" in window) {
```

```js
// HTML の危険な文字列を定義
const unsafeHTMLString = `
  <div>
    <p>これは段落です。<span onclick="alert('この span をクリックしました!')">クリックしてください</span></p>
    <script src="path/to/amodule.js" type="module"
  </div>
`;

// 最初の要素のテキストノードとして危険な文字列を設定
const unmodifiedElement = document.querySelector("#unmodified");
unmodifiedElement.innerText = unsafeHTMLString;

// script などを許可する SanitizerConfig で Sanitizer を作成
const sanitizer = new Sanitizer({ elements: ["div", "p", "span", "script"] });

// 安全なメソッドを使い、Sanitizer で 2 つ目の要素に HTML を設定
const setHTMLElement = document.querySelector("#setHTML");
setHTMLElement.setHTML(unsafeHTMLString, { sanitizer });

// 要素を確認できるように、HTML を取得してテキストノードとして要素に戻す
setHTMLElement.innerText = setHTMLElement.innerHTML;

// 設定をログに出力
const sanitizerConfig = sanitizer.get();
log(JSON.stringify(sanitizerConfig, null, 2));
```

```js hidden
} else {
  log("このブラウザーは HTML 無害化 API に対応していません。");
}
```

#### 結果

元の文字列と、DOM に構文解析された無害化済み HTML を以下に示します。
`Sanitizer` の設定で `<script>` 要素を許可していても、{{domxref("Element.setHTML()")}} を使うと、挿入された HTML からこれらの要素が取り除かれます。
また、この設定には要素名と名前空間の両方が含まれています。

{{EmbedLiveSample("デフォルトの Sanitizer の作成","100","650px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
