---
title: "HTMLScriptElement: textContent プロパティ"
short-title: textContent
slug: Web/API/HTMLScriptElement/textContent
l10n:
  sourceCommit: 051d02b402b7f76c2078b12283aa18318c34c38b
---

{{APIRef("DOM")}}

> [!WARNING]
> このプロパティは、スクリプト要素のテキストコンテンツを表します。スクリプトの型によっては、このテキストが実行可能となる場合があります。
> この API は[インジェクションシンク](/ja/docs/Web/API/Trusted_Types_API#概念と使い方)と呼ばれ、[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS) 攻撃の攻撃経路となる可能性があります。
>
> このリスクを軽減するには、文字列の代わりに常に {{domxref("TrustedScript")}} オブジェクトを割り当て、[信頼型の適用](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)を行うようにしてください。
> 詳しくは、[セキュリティの注意事項](#セキュリティの注意事項)を参照してください。

**`innerText`** は {{domxref("HTMLScriptElement")}} インターフェイスのプロパティで、{{HTMLElement("script")}} 要素のインラインテキストコンテンツを表します。
その動作は、{{domxref("HTMLScriptElement.text","text")}} および {{domxref("HTMLScriptElement.innerText","innerText")}} プロパティと同様です。

## 値

このプロパティを取得すると、スクリプトのテキストが含まれている文字列が返されます。

このプロパティを設定するときは、{{domxref("TrustedScript")}} オブジェクトまたは文字列のいずれかを受け入れることができます。

### 例外

- `TypeError`
  - : [信頼型](/ja/docs/Web/API/Trusted_Types_API)が [CSP によって強制されている](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)場合で、かつデフォルトのポリシーが定義されていないときに、プロパティが文字列に設定されると、この例外が発生します。

## 解説

**`textContent`** は {{domxref("HTMLScriptElement")}} インターフェイスのプロパティで、{{HTMLElement("script")}} 要素内のテキストコンテンツを表します。

実行可能なスクリプト（つまり、{{domxref('HTMLScriptElement/type','type')}} によってモジュールまたはクラシックスクリプトであることが示されているスクリプト）の場合、このテキストはインラインで実行可能なコードとなります。
その他の型の場合、インポートマップ、投機ルール、またはその他の種類のデータブロックを表します。

なお、{{domxref('HTMLScriptElement/src','src')}} プロパティが設定されている場合、`text` プロパティのコンテンツは無視されることに注意してください。

`textContent` プロパティは {{domxref("HTMLElement.innerText","HTMLElement")}} にも定義されているため、他の要素でも使用できます。
他の要素で使用する場合、このプロパティは {{domxref("TrustedScript")}} を代入することを想定も強制もしません。

### セキュリティの注意事項

`textContent` プロパティ、およびこれと同一の `text` および `innerText` プロパティは、[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS) 攻撃の攻撃経路となり得ます。この攻撃では、ユーザーから指定された潜在的に危険な文字列が実行されてしまいます。
例えば、次の例では、`scriptElement` が実行可能な `<script>` 要素であり、`untrustedCode` がユーザーによって指定されたものと仮定しています:

```js
const untrustedCode = "alert('Potentially evil code!');";
scriptElement.textContent = untrustedCode; // アラートが表示される
```

これらの問題を軽減するには、文字列の代わりに常に {{domxref("TrustedScript")}} オブジェクトを割り当て、CSP の [`require-trusted-types-for`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) ディレクティブを使用して[信頼型を強制](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)することで、これらの問題を軽減できます。
これにより、入力は変換関数を通過することになり、テキストが挿入される前に[無害化](/ja/docs/Web/Security/Attacks/XSS#無害化)されたり拒否されたりする機会となります。

変換関数の動作は、ユーザーが指定するスクリプトを要求する具体的な用途によって異なります。
可能であれば、実行を許可するスクリプトを、実行しても問題ないと判断したコードのみに限定すべきです。
それができない場合は、指定された文字列内の特定の関数の使用を許可またはブロックすることができることを検討してください。

## 例

### TrustedScript の使用

XSS のリスクを軽減するためには、常に `textContent` プロパティに `TrustedScript` のインスタンスを代入する必要があります。

信頼型はまだすべてのブラウザーで対応していないため、まず [信頼型 tinyfill](/ja/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill) を定義します。
これは、信頼型 JavaScript API の透過的な代替として機能します。

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

次に、入力文字列を {{domxref("TrustedTypePolicy")}} インスタンスに変換するための {{domxref("TrustedTypePolicy/createScript", "createScript()")}} メソッドを定義する {{domxref("TrustedTypePolicy")}} を作成します。
この例では、必要なスクリプトのみをすることができるようにします。

```js
const policy = trustedTypes.createPolicy("inline-script-policy", {
  createScript(input) {
    // ここでは、許可することができる安全なスクリプトを指定する
    if (input === "const num = 10;\nconsole.log(num)") {
      return input; // このスクリプトだけ実行を許可する
    }
    throw new TypeError(`信頼できないスクリプトがブロックされました: ${input}`);
  },
});
```

次に、値を代入するスクリプト要素を作成し、その要素へのハンドルを取得します。

```html
<script id="el"></script>
```

```js
// コードを挿入するスクリプト要素を取得する
const el = document.getElementById("el");
```

次に、`policy` オブジェクトを使用して、安全性が保証されていない可能性のある入力文字列から `trustedScript` オブジェクトを作成し、その結果を要素に代入します。

```js
// 悪意のある可能性のある文字列
const untrustedScriptOne = "const num = 10;\nconsole.log(num)";

// ポリシーを使用して TrustedScript インスタンスを作成
const trustedScript = policy.createScript(untrustedScriptOne);

// TrustedScript（信頼された文字列が含まれている）を注入
el.textContent = trustedScript;
```

### `textContent`, `text`, `innerText` の比較

この例は、`textContent` などのそれぞれのテキストプロパティにスクリプトを代入すると、すべてのテキストプロパティから同じ値が読み取られることを示しています。

なお、この場合では、ポリシーを使用して信頼できるスクリプトを作成することはありません（簡潔にするため、指定された文字列は信頼できるものと想定します）。

```js
// textContent プロパティを設定
el.textContent = "console.log(10);";

console.log(`textContent: ${el.textContent}`);
// "textContent: console.log(10);"

console.log(`text: ${el.text}`);
// "text: console.log(10);"

console.log(`innerText: ${el.innerText}`);
// "innerText: console.log(10);"

// text プロパティを設定
el.text = "const num = 10;\nconsole.log(num)";

console.log(`textContent: ${el.textContent}`);
// textContent: const num = 10; console.log(num)"

console.log(`text: ${el.text}`);
// "text: const num = 10; console.log(num)"

console.log(`innerText: ${el.innerText}`);
// "innerText: const num = 10; console.log(num)"

// innerText プロパティを設定
el.innerText = "const num = 10;alert('Help')";

console.log(`textContent: ${el.textContent}`);
// textContent: const num = 10;alert('Help')"

console.log(`text: ${el.text}`);
// "text: const num = 10;alert('Help')"

console.log(`innerText: ${el.innerText}`);
// "innerText: const num = 10;alert('Help')"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLScriptElement.text","text")}}
- {{domxref("HTMLScriptElement.innerText","innerText")}}
