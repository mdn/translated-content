---
title: "ShadowRoot: innerHTML プロパティ"
short-title: innerHTML
slug: Web/API/ShadowRoot/innerHTML
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("Shadow DOM")}}

> [!WARNING]
> このプロパティは、入力を HTML として構文解析し、その結果を DOM に書き込みます。
> このような API は[インジェクションシンク](/ja/docs/Web/API/Trusted_Types_API#概念と使い方)と呼ばれ、入力が攻撃者から来たものであれば、[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS) 攻撃の経路となる可能性があります。
>
> このリスクを軽減するには、文字列の代わりに常に `TrustedHTML` オブジェクトを代入し、[信頼型を強制する](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)ようにしてください。
> 詳しくは[セキュリティの注意事項](#セキュリティの注意事項)を参照してください。

**`innerHTML`** は {{domxref("ShadowRoot")}} インターフェイスのプロパティで、 `ShadowRoot` の内部の DOM ツリーに対する参照を設定したり返したりします。

## 値

このプロパティを取得すると、シャドウルートの子要素の HTML シリアライズが含まれた文字列が返されます。

このプロパティを設定する際は、{{domxref("TrustedHTML")}} オブジェクトまたは文字列のどちらかを受け付けます。
この値は HTML として構文解析され、要素の子要素すべてがその結果に置き換えられます。
`null` 値に設定すると、その `null` 値は空文字列 (`""`) に変換されるため、`shadowRoot.innerHTML = null` は `shadowRoot.innerHTML = ""` と同等です。

### 例外

- `SyntaxError` {{domxref("DOMException")}}
  - : `innerHTML` の値を、正しく構成された HTML ではない文字列を使用して設定しようとした場合に発生します。
- {{jsxref("TypeError")}}
  - : [信頼型](/ja/docs/Web/API/Trusted_Types_API)が [CSP によって強制されている](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)場合で、かつデフォルトのポリシーが定義されていないときに、プロパティが文字列に設定されると、この例外が発生します。

## 解説

`innerHTML` は、シャドウルート内に含まれる子 DOM 要素のシリアライズされたデータを取得するか、シャドウルート内の DOM ツリーを置き換えるために構文解析されるべき HTML または XML を設定します。

なお、一部のブラウザーでは、属性値内に `<` や `>` 文字が現れる場合、これらを `&lt;` や `&gt;` としてシリアライズします（[ブラウザーの互換性](#ブラウザーの互換性)を参照）。
これは、攻撃者が[無害化関数](/ja/docs/Web/Security/Attacks/XSS#無害化)を迂回するような入力を仕掛けることで、クロスサイトスクリプティング (XSS) 攻撃をすることができる、潜在的なセキュリティ上の脆弱性（[ミューテーション XSS](https://securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)<sup>(英語)</sup>）を防ぐためのものです。

### セキュリティの注意事項

`innerHTML` プロパティは、[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS) 攻撃において攻撃経路になる可能性があります。この攻撃では、ユーザーによって指定された安全性が保証されていない文字列が、事前に無害化されることなく DOM に注入されてしまいます。
この機能は、{{HTMLElement("script")}} 要素が注入された際の実行は防ぎますが、攻撃者が悪意のある JavaScript を実行するために HTML を巧妙に作成する他の多くの方法に対しては脆弱です。
例えば、次の例では、{{htmlelement("img")}} の `src` の値が有効な画像 URL ではないため、`error` イベントハンドラー内のコードが実行されてしまいます。

```js
const name = "<img src='x' onerror='alert(1)'>";
shadowRoot.innerHTML = name; // shows the alert
```

これらの課題を軽減するには、文字列の代わりに常に {{domxref("TrustedHTML")}} オブジェクトを割り当て、CSP の [`require-trusted-types-for`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) ディレクティブを使用して[信頼型を強制する](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)ことで、これらの問題を軽減できます。
これにより、入力が変換関数を通過し、その関数によって、入力が挿入される前に、潜在的に危険なマークアップが除去されるための[無害化処理](/ja/docs/Web/Security/Attacks/XSS#sanitization)が行われる可能性があります。

## 例

### 要素の HTML コンテンツの読み取り

`innerHTML` を読み取ると、ユーザーエージェントはそのシャドウルートの子孫要素をシリアライズします。

以下の HTML を想定してください。

```html
<div class="host">
  <template shadowrootmode="open">
    <p>私の名前はジョーです</p>
  </template>
</div>
```

次のようにして、シャドウルートのマークアップを取得し、ログ出力することができます。

```js
const shadowHost = document.querySelector("#host");
const shadowRoot = shadowHost.shadowRoot;
const contents = shadowRoot.innerHTML;
console.log(contents); // "\n  <p>私の名前はジョーです</p>\n"
```

### シャドウルートの innerHTML の設定

この例では、要素の `innerHTML` プロパティに HTML を割り当てることで、その要素の DOM を置き換えます。
XSS のリスクを軽減するため、まず HTML を含む文字列から `TrustedHTML` オブジェクトを生成し、そのオブジェクトを `innerHTML` に割り当てます。

信頼型はまだすべてのブラウザーで対応していないため、まず [信頼型 tinyfill](/ja/docs/Web/API/Trusted_Types_API#信頼型_tinyfill) を定義します。
これは、信頼型 JavaScript API の透過的な代替として機能します。

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

次に、入力文字列を {{domxref("TrustedHTML")}} インスタンスに変換するための {{domxref("TrustedTypePolicy/createHTML", "createHTML()")}} メソッドを定義する {{domxref("TrustedTypePolicy")}} を作成します。
一般的に、`createHTML()` の実装では、下記に示すように、[DOMPurify](https://github.com/cure53/DOMPurify) などのライブラリーを使用して入力を無害化します。

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

次に、この `policy` オブジェクトを使用して、安全性が保証されていない可能性のある入力文字列から `TrustedHTML` オブジェクトを作成し、その結果を要素に代入します。

```js-nolint
// 悪意のある可能性のある文字列
const untrustedString = "<p>XSS の可能性あり</p><img src='x' onerror='alert(1)'>";

// ポリシーを使用して TrustedHTML インスタンスを作成する
const trustedHTML = policy.createHTML(untrustedString);

// シャドウルートを取得
const shadowHost = document.querySelector("#host");
const shadowRoot = shadowHost.shadowRoot;

// TrustedHTML（信頼できる文字列が含まれている）を挿入する
shadowRoot.innerHTML = trustedHTML;
```

> [!WARNING]
> `innerHTML` に文字列を直接代入することは可能ですが、挿入する文字列に悪意のあるコンテンツが含まれている可能性がある場合、[セキュリティ上のリスク](#セキュリティの注意事項)となります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
