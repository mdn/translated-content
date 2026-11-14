---
title: "Document: writeln() メソッド"
short-title: writeln()
slug: Web/API/Document/writeln
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{ ApiRef("DOM") }}

> [!WARNING]
> このメソッドは入力を HTML として構文解析し、その結果を DOM に書き込みます。
> このような API は[インジェクションシンク](/ja/docs/Web/API/Trusted_Types_API#概念と使い方)と呼ばれ、入力が攻撃者に由来する場合は[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS)攻撃の経路となる可能性があります。
>
> このリスクを軽減するには、文字列の代わりに常に `TrustedHTML` オブジェクトを渡し、[信頼型を強制する](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)ようにしてください。
> 詳しくは[セキュリティ上の注意事項](#セキュリティ上の注意事項)を参照してください。

**`writeln()`** は {{domxref("Document")}} インターフェイスのメソッドで、{{domxref("document.open()")}} で開かれた文書ストリームに、1 つ以上の {{domxref("TrustedHTML")}} または文字列の引数のテキストを書き込み、その後に改行文字を追加します。

## 構文

```js-nolint
writeln(markup)
writeln(markup, markup2)
writeln(markup, markup2, /* …, */ markupN)
```

### 引数

- `markup`, …, `markupN`
  - : 文書に書き込むテキストを含む {{domxref("TrustedHTML")}} オブジェクトまたは文字列です。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : XML 文書に対して呼び出された場合、またはパーサーが独自の要素のコンストラクターを実行中に呼び出された場合に発生します。
- {{jsxref("TypeError")}}
  - : [信頼型が強制されている](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)状態で、{{domxref("TrustedHTML")}} オブジェクトを生成するための[デフォルトのポリシーが定義されていない](/ja/docs/Web/API/TrustedTypePolicyFactory/createPolicy#既定のポリシーの作成)場合に、引数の 1 つとして文字列が渡されると発生します。

## 解説

このメソッドは基本的に {{domxref("document.write()")}} と同じですが、改行を追加します（リンク先の記事の情報はこのメソッドにも当てはまります）。
この改行は、改行が表示される要素の内部に挿入された場合にのみ見えます。
{{domxref("document.write()")}} の追加情報も、このメソッドに当てはまります。

### セキュリティ上の注意事項

このメソッドは、ユーザーが指定した安全性が保証されていない文字列を、無害化せずに DOM に挿入するため、[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS)攻撃の経路となる可能性があります。
一部のブラウザーでは、挿入された {{HTMLElement("script")}} 要素の実行をこのメソッドがブロックすることがあります（Chrome については[document.write() への介入](https://developer.chrome.com/blog/removing-document-write/)を参照してください）。しかし、攻撃者が悪意のある JavaScript を実行するために HTML を細工する方法はほかにも多数あり、このメソッドはそれらに対して脆弱です。

文字列の代わりに常に {{domxref("TrustedHTML")}} オブジェクトを渡し、CSP の [`require-trusted-types-for`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) ディレクティブを使用して[信頼型を強制する](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)ことで、これらの問題を軽減できます。
これにより、入力は変換関数を通過します。この関数を使って、挿入前に入力を[無害化](/ja/docs/Web/Security/Attacks/XSS#無害化)し、{{htmlelement("script")}} 要素やイベントハンドラー属性などの潜在的に危険なマークアップを取り除けます。

## 例

### TrustedHTML の書き込み

この例では、[信頼型 API](/ja/docs/Web/API/Trusted_Types_API) を使って、HTML 文字列を文書に書き込む前に無害化します。
信頼できない文字列を安全でない API に渡す場合は、常に信頼型を使用してください。

例では、まずデフォルトのテキストとボタンを表示します。
ボタンをクリックすると、現在の文書を開き、いくつかの HTML 文字列を {{domxref("TrustedHTML")}} インスタンスに変換して文書に書き込んだ後、文書を閉じます。
これにより、ボタンの元の HTML や更新を行った JavaScript も含め、例のフレーム内の文書が置き換えられます。

#### HTML

```html
<p>元の文書のコンテンツ。</p>
<button id="replace" type="button">文書コンテンツを置き換え</button>
```

#### JavaScript

まず、{{domxref("Window.trustedTypes")}} プロパティを使ってグローバルな {{domxref("TrustedTypePolicyFactory")}} にアクセスし、その {{domxref("TrustedTypePolicyFactory/createPolicy","createPolicy()")}} メソッドを使って `"docPolicy"` という名前のポリシーを定義します。

新しいポリシーでは、`writeln()` メソッドに渡す {{domxref("TrustedHTML")}} オブジェクトを作成する変換関数 `createHTML()` を定義します。
このメソッドは入力文字列に対してどのような処理を行ってもかまいません。信頼型 API が要求するのは、入力をポリシーの変換関数に通すことだけであり、変換関数が特定の処理を行うことではありません。

このメソッドを使って、{{htmlelement("script")}} タグやイベントハンドラー属性など、潜在的に安全でない機能を取り除くことで入力を[無害化](/ja/docs/Web/Security/Attacks/XSS#無害化)します。
無害化を正しく行うのは難しいため、通常この処理には [DOMPurify](https://github.com/cure53/DOMPurify) のような信頼できるサードパーティ製ライブラリーを使用します。

ここでは説明のため、スクリプトの開始タグと終了タグ内の `<` 記号を `&lt;` 文字に置き換える、簡易的な無害化処理を実装します。
この例で挿入される文字列には実際には有害な要素は含まれていないため、この処理はデモンストレーションのみを目的としています。

```js
const policy = trustedTypes.createPolicy("docPolicy", {
  createHTML(string) {
    return string
      .replace("<script", "&lt;script")
      .replace("</script", "&lt;/script");
  },
});
```

次に、返されたポリシーの {{domxref("TrustedTypePolicy.createHTML()")}} メソッドを使って、元の入力文字列から {{domxref("TrustedHTML")}} オブジェクトを作成します。
ユーザーがボタンをクリックすると、これらのオブジェクトを `writeln()` 関数に渡します。

```js
const replace = document.querySelector("#replace");
const oneInput = "<h1>古いものは去り";
const twoInput = "新しいものが来る！</h1>";
const threeInput = "<pre>古いものは去り";
const fourInput = "新しいものが来る！</pre>";

replace.addEventListener("click", () => {
  document.open();
  document.writeln(policy.createHTML(oneInput));
  document.writeln(policy.createHTML(twoInput), policy.createHTML(threeInput));
  document.writeln(policy.createHTML(fourInput));
  document.close();
});
```

#### 結果

ボタンをクリックしてください。
`writeln()` を呼び出すたびに改行が追加されますが、デフォルトで空白を保持するレイアウトになっている {{htmlelement("pre")}} 要素の内部でのみ、その改行が見えることに注目してください。

{{EmbedLiveSample("Writing TrustedHTML")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
