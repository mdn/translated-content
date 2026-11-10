---
title: "Element: insertAdjacentHTML() メソッド"
short-title: insertAdjacentHTML()
slug: Web/API/Element/insertAdjacentHTML
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("DOM")}}

> [!WARNING]
> このメソッドは入力を HTML または XML として構文解析し、その結果を DOM に書き込みます。
> このような API は[インジェクションシンク](/ja/docs/Web/API/Trusted_Types_API#概念と使い方)と呼ばれ、入力が攻撃者に由来する場合は[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS)攻撃の経路となる可能性があります。
>
> 文字列の代わりに {{domxref("TrustedHTML")}} オブジェクトを渡し、CSP の [`require-trusted-types-for`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) ディレクティブを使用して[信頼型を強制する](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)ことで、リスクを軽減できます。
> これにより、入力は変換関数を通過します。この関数を使って、{{htmlelement("script")}} 要素やイベントハンドラー属性などの潜在的に危険なマークアップを取り除くため、入力を[無害化](/ja/docs/Web/Security/Attacks/XSS#無害化)できます。

**`insertAdjacentHTML()`** は {{domxref("Element")}} インターフェイスのメソッドで、指定された入力を HTML または XML として構文解析し、結果のノードを DOM ツリーの指定された位置に挿入します。

## 構文

```js-nolint
insertAdjacentHTML(position, input)
```

### 引数

- `position`
  - : 要素に対する相対位置を表す文字列です。次のいずれかでなければなりません。
    - `"beforebegin"`
      - : 要素の前。要素が DOM ツリー内にあり、親要素を持つ場合にのみ有効です。
    - `"afterbegin"`
      - : 要素のすぐ内側、最初の子の前。
    - `"beforeend"`
      - : 要素のすぐ内側、最後の子の後。
    - `"afterend"`
      - : 要素の後。要素が DOM ツリー内にあり、親要素を持つ場合にのみ有効です。
- `input`
  - : 構文解析する HTML または XML を定義する {{domxref("TrustedHTML")}} インスタンスまたは文字列です。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

このメソッドは、次の種類の {{domxref("DOMException")}} を発生させることがあります。

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : `position` が `"beforebegin"` または `"afterend"` で、要素に親がないか、親が `Document` オブジェクトである場合に発生します。
- `SyntaxError` {{domxref("DOMException")}}
  - : 次の場合に発生します。
    - `position` が列挙された 4 つの値のいずれでもない場合。
    - 入力が整形式でない XML の場合。
- {{jsxref("TypeError")}}
  - : [信頼型](/ja/docs/Web/API/Trusted_Types_API)が [CSP によって強制されている](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)状態で、デフォルトのポリシーが定義されていない場合に、文字列が渡されると発生します。

## 解説

`insertAdjacentHTML()` は、対象の要素を再構文解析しないため、その要素内の既存の要素を破壊しません。シリアライズの余分な手順を省けるため、{{domxref("Element.innerHTML", "innerHTML")}} を直接操作するよりはるかに高速です。

`<p>` 要素を例にすると、挿入するコンテンツ `"foo"` の位置は次のように表せます。

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

このメソッドは {{htmlelement("template")}} 要素を特別扱いしません。
多くの場合、開発者はテンプレート要素の子ノードを直接操作するのではなく、{{domxref("HTMLTemplateElement/content", "content")}} プロパティに対して `insertAdjacentHTML()` を使用するべきです。

### セキュリティ上の注意事項

このメソッドは、{{htmlelement("script")}} 要素やイベントハンドラーのコンテンツ属性など、XSS に脆弱な要素を取り除く無害化処理を行いません。

`insertAdjacentHTML()` を使ってページに HTML を挿入する場合は、文字列の代わりに {{domxref("TrustedHTML")}} オブジェクトを渡し、CSP の [`require-trusted-types-for`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) ディレクティブを使用して[信頼型を強制](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)してください。
これにより、入力は変換関数を通過します。この関数を使って、挿入前に入力を[無害化](/ja/docs/Web/Security/Attacks/XSS#無害化)し、潜在的に危険なマークアップを取り除けます。

ユーザーが提供するコンテンツがプレーンテキストであると分かっている場合は、{{domxref("Element.insertAdjacentText()")}} メソッドまたは {{domxref("Node.textContent")}} を使用してください。
これらは入力を HTML として構文解析せず、生のテキストとして挿入します。

## 例

### HTML の挿入

この例では、4 種類の挿入位置を示します。
挿入されたテキストはすべて太字になり、要素内に挿入されたテキストは赤色の等幅フォント（コード表示）になります。

#### HTML

```html
<select id="position">
  <option>beforebegin</option>
  <option>afterbegin</option>
  <option>beforeend</option>
  <option>afterend</option>
</select>

<button id="insert">HTML を挿入</button>
<button id="reset">リセット</button>

<p>テキストの中に、<code id="subject">コード形式の要素</code>があります。</p>
```

#### CSS

```css
code {
  color: red;
}
```

#### JavaScript

信頼型はまだすべてのブラウザーで対応していないため、まず[信頼型 tinyfill](/ja/docs/Web/API/Trusted_Types_API#信頼型_tinyfill) を定義します。
これは、信頼型 JavaScript API の透過的な代替として機能します。

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

次に、入力から {{domxref("TrustedHTML")}} オブジェクトを作成するため、`some-content-policy` という名前のポリシーを定義します（CSP でも `some-content-policy` を強制する必要があります）。
このコードでは、サードパーティ製の依存関係がなくても例が動作するよう、何も処理しないポリシーを実装しています。
実際のアプリケーションでは、信頼できない入力から無害化されたコンテンツを返すため、"DOMPurify" のようなサードパーティ製ライブラリーを使用してください。

```js
const policy = trustedTypes.createPolicy("some-content-policy", {
  createHTML(input) {
    return input; // 自分のコードではこのようにしないでください。
    // 代わりに、次のようにしてください。
    // return DOMPurify.sanitize(input);
  },
});

const unsafeText = "<strong>挿入されたテキスト</strong>";
const trustedHTML = policy.createHTML(unsafeText);
```

残りのコードでは、選択した位置に、`subject` という ID を持つ要素に対して信頼済み HTML を挿入します。

```js
const insert = document.querySelector("#insert");
insert.addEventListener("click", () => {
  const subject = document.querySelector("#subject");
  const positionSelect = document.querySelector("#position");
  subject.insertAdjacentHTML(positionSelect.value, trustedHTML);
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  document.location.reload();
});
```

#### 結果

{{EmbedLiveSample("HTML の挿入", 100, 100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("Element.insertAdjacentText()")}}
- {{domxref("XMLSerializer")}}: DOM ツリーを XML 文字列へシリアライズ
- [信頼型 API](/ja/docs/Web/API/Trusted_Types_API)
