---
title: "Element: setAttribute() メソッド"
short-title: setAttribute()
slug: Web/API/Element/setAttribute
l10n:
  sourceCommit: ff9dd829bb17d272b7d14c41a442f2c2e3680521
---

{{APIRef("DOM")}}

> [!WARNING]
> このメソッドは、属性に応じて、HTML、スクリプト、またはスクリプトの URL として構文解析される属性値を受け取る可能性があります。
> この API は[インジェクションシンク](/ja/docs/Web/API/Trusted_Types_API#概念と使い方)と呼ばれ、元の値が攻撃者から提供されたものである場合、[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS) 攻撃の攻撃経路となる可能性があります。
>
> このリスクを軽減するには、常に適切な信頼型オブジェクト（{{domxref("TrustedHTML")}}、{{domxref("TrustedScript")}}、{{domxref("TrustedScriptURL")}} のいずれか）を常に渡すことで、このリスクを軽減できます。また、[信頼型の強制適用](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)を行うことも有効です。
> 詳しくは[セキュリティ上の注意事項](#セキュリティ上の注意事項)を参照してください。

**`setAttribute()`** は {{domxref("Element")}} インターフェイスのメソッドで、指定された要素の属性の値を設定します。
属性が既に存在する場合は値が更新されます。それ以外の場合は、指定された名前と値で新しい属性が追加されます。

追加する前に {{domxref("Attr")}} ノードに対して操作をする必要がある場合は（他の要素から複製するなど）、代わりに {{domxref("Element.setAttributeNode()", "setAttributeNode()")}} メソッドが使用できます。

## 構文

```js-nolint
setAttribute(qualifiedName, value)
```

### 引数

- `qualifiedName`
  - : 値を設定する属性の修飾名が含まれている文字列です。
    HTML 文書内の HTML 要素で `setAttribute()` を呼び出すと、属性名は自動的にすべて小文字に変換されます。

    修飾名の形式は `prefix:localName` または `localName` であり、各部分は次のように定義されます。
    - `prefix` {{optional_inline}}
      - : {{DOMxRef("Attr.prefix", "prefix")}} プロパティによって返される、名前空間の「短い別名」です。
    - `localName`
      - : {{DOMxRef("Attr.localName", "localName")}} プロパティによって返される、その属性のローカル名です。

- `value`
  - : 属性に割り当てる値を含む信頼型または文字列です。

    信頼型が強制されている場合、以下の属性に対しては信頼型のインスタンスを渡す必要があります。
    - `onclick` や `onload` などのイベントハンドラーのコンテンツ属性には、{{domxref("TrustedScript")}} が要求されます。
    - {{domxref("HTMLIFrameElement.srcdoc")}} には、{{domxref("TrustedHTML")}} のインスタンスが要求されます。
    - {{domxref("HTMLScriptElement.src")}} には、{{domxref("TrustedScriptURL")}} のインスタンスが要求されます。
    - {{domxref("SVGScriptElement.href")}} には、{{domxref("TrustedScriptURL")}} のインスタンスが要求されます。

    その他の属性については、信頼型が強制されないため、文字列や任意の信頼型を渡すことができます。

    文字列以外の値が指定された場合は、自動的に文字列に変換されます。

    論理属性は、要素に存在する限り、`true`とみなされます。
    `value` には、空文字列 (`""`) または属性名を、前後にホワイトスペースを置かずに指定してください。
    実践的なデモは以下の[例](#例)を参照してください。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : [`prefix`](#prefix) または [`localName`](#localname) のいずれかが無効な場合、例外が発生します。
    - `prefix` は 1 文字以上でなければならず、ASCII のホワイトスペース、`NULL`、`/`、`>`（それぞれ U+0000、U+002F、U+003E）が含まれてはなりません。
    - `localName` は 1 文字以上でなければならず、ASCII のホワイトスペース、`NULL`、`/`、`=`、`>`（それぞれ U+0000、U+002F、U+003D、U+003E）が含まれてはなりません。

    > [!NOTE]
    > 仕様の以前のバージョンでは、`qualifiedName` が有効な [XML 名](https://www.w3.org/TR/xml/#dt-name) であることが要求されるなど、より厳しい制約が設けられていました。

- `TypeError`
  - : [`value`](#value) に、信頼型オブジェクトではなく文字列が渡された場合（それらを要求される属性について）、 [信頼型](/ja/docs/Web/API/Trusted_Types_API)が [CSP によって強制されている](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)場合で、かつデフォルトのポリシーが定義されていない場合に発生します。

## 解説

**`setAttribute()`** は、指定された要素の属性の値を設定します。
その属性がすでに存在する場合、その値が更新されます。そうでない場合は、指定された名前と値を持つ新しい属性が追加されます。

`disabled` などの論理属性の値を設定するには、任意の値を指定できます。
どのような値を使用しても構いません。属性が存在する場合、その値は `true` とみなされます。
慣例として、論理属性は、その値を属性名または空文字列 (`""`) に設定することで有効にします。
論理属性が存在しない場合は、その値は `false` とみなされます。有効化した論理属性を「元に戻す」には、{{domxref("Element.removeAttribute()")}} を呼び出す必要があります。

属性の現在の値を取得するには、{{domxref("Element.getAttribute", "getAttribute()")}} を使用します。属性を除去するには、{{domxref("Element.removeAttribute", "removeAttribute()")}} を呼び出します。

### セキュリティ上の注意事項

[一部の属性](#値)は、[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS)攻撃で使用される可能性があり、この攻撃では、ユーザーから指定された安全性が保証されていない文字列が、まずサニタイズされることなくDOMに挿入されたり、悪意のあるコードが含まれている可能性のあるスクリプトが実行されたりします。

例えば、次のコードは、ボタンが押された際に、ユーザーから指定された信頼できない可能性のある文字列がどのように実行されるかを示しています。

```js
const button = document.querySelector("button");
const potentiallyUnsafeString = "alert(1)";
button.setAttribute("onclick", potentiallyUnsafeString);
```

同様に、{{domxref("HTMLIFrameElement.srcdoc")}} 属性を設定したり、{{domxref("HTMLScriptElement.src")}} または {{domxref("SVGScriptElement.href")}} 属性に信頼できない URL を指定したりすることで、信頼できない HTML を DOM に挿入してしまうことがあります。

これらの課題を軽減するには、それぞれのプロパティに対して文字列ではなく、常に適切な信頼型オブジェクト（{{domxref("TrustedHTML")}}、{{domxref(『TrustedScript』)}}、{{domxref("TrustedScriptURL")}}）を代入し、CSP の  [`require-trusted-types-for`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) ディレクティブを使用して[信頼型を強制する](/ja/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types)ことで、これらの問題を軽減できます。
これにより、入力は変換関数を通じて処理されることが保証されます。この変換関数では、例えば、HTML に注入される前に、潜在的に危険なマークアップが除去される場合があります。

## 例

### 安全な属性の設定

次の例では、`setAttribute()` を使用して {{HTMLElement("button")}} に属性を設定しています。
これらの属性はどちらも XSS 対策が施されています。
これらの値は実行されたり、HTML として構文解析されて DOM に取り込まれたりしないため、信頼型を指定する必要はありません。

#### HTML

```html
<div>
  <button id="reset" type="button">リセット</button>
  <button id="toggle_disabled">トグル</button>
</div>
<button id="hello_button">テキスト</button>
```

```css hidden
button {
  height: 30px;
  width: 100px;
  margin: 1em;
}
```

#### JavaScript

まず、ボタン要素を取得し、`setAttribute()` を使用してその `name` 属性を "helloButton" に設定します。
属性名が変更されたことを確認するために、次にその属性のテキストを取得し、ボタン上に表示させます。

```js
const helloButton = document.querySelector("#hello_button");
helloButton.setAttribute("name", "helloButton");

// 属性の変更を表示させるために、ボタンのテキストを name に設定する
helloButton.innerText = helloButton.getAttribute("name");
```

このコードはリセットボタン用のものです。
単にフレームを再読み込みするだけです。

```js
const reloadButton = document.querySelector("#reset");
reloadButton.addEventListener("click", () => document.location.reload());
```

次に、論理属性の設定とリセットの方法について示します。
トグルボタンがクリックされた際、論理型の `disabled` プロパティが定義されているかどうかを調べます（このプロパティは `disabled` 属性を反映しており、ボタンが無効な場合は `true`、それ以外の場合は `false` になります）。
ボタンが無効になっている場合は、{{domxref("Element.removeAttribute()")}} を呼び出して属性を除去し、これによりボタンを有効にします。
ボタンが有効になっている場合は、`disabled` 属性を `"disabled"` に設定して、ボタンを無効にします。

```js
const toggleDisabledButton = document.querySelector("#toggle_disabled");

toggleDisabledButton.addEventListener("click", () => {
  if (helloButton.disabled) {
    // ボタンは無効。属性を削除して有効化する
    helloButton.removeAttribute("disabled");
  } else {
    // ボタンは有効。何かしらの値（通常は "" または "disabled"）
    // を設定して無効化する
    helloButton.setAttribute("disabled", "disabled");
  }
});
```

#### 結果

下記に実行例を示します。
name プロパティを設定し、それを用いてボタンのテキストを設定したため、下部のボタンのテキストが "helloButton" になっていることがわかります。
「トグル」ボタンを押すと、"helloButton" を無効化したり有効化したりすることができます。

{{ EmbedLiveSample('Setting safe attributes', '300', '150') }}

### 安全はでない属性の設定

この例では、{{htmlelement("iframe")}} の {{domxref("HTMLIFrameElement.srcdoc", "srcdoc")}} 属性を設定するために `setAttributes()` を呼び出す際のリスクを軽減する方法について説明します。
この属性はフレームのソース HTML を設定するものであり、そのため、信頼できない、あるいは安全ではないコードが DOM に注入される可能性があります。

HTML スクリプト要素に {{domxref("HTMLScriptElement.src","src")}} を設定する場合、SVG スクリプト要素に {{domxref("SVGScriptElement.href","href")}} を設定する場合、および `onXxxx` イベントハンドラー属性に設定する場合の手順は同様ですが、主な違いは、それぞれ異なる信頼型オブジェクトを渡すという点です。

信頼型はまだすべてのブラウザーで対応していないため、まず [信頼型 tinyfill](/ja/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill) を定義します。
これは、信頼型 JavaScript API の透過的な代替として機能します。

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

次に、この `policy` オブジェクトを使用して、安全性が保証されていない可能性のある入力文字列から `TrustedHTML` オブジェクトを作成し、その結果を要素に代入します。

```js
// 悪意のある可能性のある文字列
const untrustedString = "<p>I might be XSS</p><img src='x' onerror='alert(1)'>";

// ポリシーを使用してTrustedHTMLインスタンスを作成
const trustedHTML = policy.createHTML(untrustedString);

// TrustedHTML（信頼された文字列が含まれている）を注入
const iframeElement = document.querySelector("#an_iframe");
iframeElement.setAttribute("srcdoc", trustedHTML);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.hasAttribute()")}}
- {{domxref("Element.getAttribute()")}}
- {{domxref("Element.removeAttribute()")}}
- {{domxref("Element.toggleAttribute()")}}
