---
title: 信頼型 API
slug: Web/API/Trusted_Types_API
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

{{DefaultAPISidebar("Trusted Types API")}}{{AvailableInWorkers}}

**信頼型 API** (Trusted Types API) を使用することで、ウェブ開発者は、入力データが実行される可能性のある API に渡される前に、ユーザー指定の変換関数を通すようにすることができます。これによって、クライアント側の [クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS) 攻撃からの防御を強化できます。最も一般的なのは、変換関数が入力を[サニタイズ](/ja/docs/Web/Security/Attacks/XSS#sanitization)することです。

## 概念と使い方

クライアント側（DOM ベース）の XSS 攻撃は、攻撃者が細工したデータが、そのデータをコードとして実行するブラウザー API に渡された際に現れます。これらの API は、[インジェクションシンク](#インジェクションシンクのインターフェイス)として知られています。

信頼型 API では、インジェクションシンクを次の 3 種類に分類しています。

- **HTML シンク**: {{domxref("Element.innerHTML")}} や {{domxref("Document.write()", "document.write()")}} など、入力を HTML として解釈する API です。これらの API は、HTML に JavaScript が埋め込まれている場合（例えば {{htmlelement("script")}} タグやイベントハンドラーの属性内など）、その JavaScript を実行する可能性があります。
- **JavaScript シンク**: {{jsxref("Global_Objects/eval", "eval()")}} や {{domxref("HTMLScriptElement.text")}} など、入力を JavaScript として解釈する API です。
- **JavaScript URL シンク**: {{domxref("HTMLScriptElement.src")}} のように、入力をスクリプトの URL として解釈する API です。

DOM ベースの XSS 攻撃に対する主な防御策の一つは、入力をインジェクション先へ渡す前に、その安全性を確実に実現することです。

信頼型 API では、開発者は「ポリシーオブジェクト」を定義します。このオブジェクトには、インジェクションシンクへの入力データを安全なものに変換するメソッドが含まれています。ポリシーでは、シンクの種類ごとに異なるメソッドを定義することができます。

- HTML シンクの場合、変換関数は通常、[DOMPurify](https://github.com/cure53/DOMPurify) のようなライブラリーを使用するなどして、入力を[無害化](/ja/docs/Web/Security/Attacks/XSS#sanitization)します。
- JavaScript および JavaScript URL シンクについては、ポリシーによってシンクを完全に無効にすることがあります。また、特定の事前定義された入力（例えば特定の URL など）のみを許可することができます。

その後、信頼型 API は、入力がシンクに渡される前に、適切な変換関数を必ず通過するようにします。

つまり、この API を利用すれば、ポリシーを一ヶ所で定義することができるので、インジェクションシンクに渡されるすべてのデータが確実にそのポリシーを通過するようになります。

> [!NOTE]
>
> 信頼型 API 自体は、ポリシーや変換関数を提供しません。開発者は、適用したい変換を含む独自のポリシーを定義します。

この API には、主に 2 つの部分があります。

- JavaScript API を使用することで、開発者はデータをインジェクションシンクに渡す前に無害化を行うことができます。
- 2 つの [CSP](/ja/docs/Web/HTTP/Guides/CSP) ディレクティブにより、JavaScript API の使用を強制および制御することができます。

### 信頼型 JavaScript API

信頼型 API では、次のようなことが言えます。

- `trustedTypes` グローバルプロパティが、{{domxref("Window.trustedTypes", "Window")}} および {{domxref("WorkerGlobalScope.trustedTypes", "Worker")}} の両方のコンテキストで利用可能であり、{{domxref("TrustedTypePolicy")}} オブジェクトを作成するために使用されます。
- {{domxref("TrustedTypePolicy")}} オブジェクトは、信頼型オブジェクトを生成するために使用されます。これは、データを変換関数に通すことで行われます。
- 信頼型オブジェクトは、ポリシーを通過したデータを表し、そのため、インジェクションシンクへ安全に渡すことができます。信頼型には 3 種類あり、それぞれ異なる種類のインジェクションシンクに対応しています。
  - {{domxref("TrustedHTML")}} は、データを HTML としてレンダリングするシンクに渡すためのものです。
  - {{domxref("TrustedScript")}} は、データを JavaScript として実行するシンクに渡すためのものです。
  - {{domxref("TrustedScriptURL")}} は、データをスクリプトへの URL として構文解析するシンクに渡すためのものです。

この API を使用すると、`innerHTML` のようなインジェクションシンクに文字列を渡す代わりに、`TrustedTypePolicy` を使用してその文字列から `TrustedHTML` オブジェクトを作成し、それをシンクに渡すようにすることができます。これにより、文字列が変換関数を通じて処理されたものであることが保証されます。

例えば、このコードは、[DOMPurify](https://github.com/cure53/DOMPurify) ライブラリーを使用して入力文字列をサニタイズすることで、`TrustedHTML` オブジェクトを作成できる `TrustedTypePolicy` を作成します。

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

次に、この `policy` オブジェクトを使用して `TrustedHTML` オブジェクトを作成し、そのオブジェクトをインジェクションシンクに渡すことができます。

```js
const userInput = "<p>これは XSS かもしれません</p>";
const element = document.querySelector("#container");

const trustedHTML = policy.createHTML(userInput);
element.innerHTML = trustedHTML;
```

### CSP を使用した信頼型の強制

上記の API はデータの無害化をすることができるのですが、コードがインジェクションシンクに直接入力を決して渡さないことを保証するものではありません。つまり、文字列を `innerHTML` に渡すことを阻止するわけではないのです。

信頼型が常に渡されるように強制するには、{{CSP("require-trusted-types-for")}} ディレクティブを [CSP](/ja/docs/Web/HTTP/Guides/CSP) に記載します。
このディレクティブを設定した場合、インジェクションシンクに文字列を渡すと `TypeError` 例外が発生します。

```js example-bad
const userInput = "<p>これは XSS かもしれません</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput; // TypeError が発生
```

さらに、CSP の {{CSP("trusted-types")}} ディレクティブを使用することで、コードが作成できるポリシーを制御することができます。{{domxref("TrustedTypePolicyFactory/createPolicy", "trustedTypes.createPolicy()")}} を使用してポリシーを作成する際は、ポリシーの名前を引数として渡します。CSP の `trusted-types` ディレクティブには、受け入れられるポリシー名を列挙しますので、`createPolicy()` に、`trusted-types` に列挙されていない名前が 渡された場合、例外が発生します。これにより、ウェブアプリケーション内のコードが、想定外のポリシーを作成することを防ぐことができます。

### デフォルトポリシー

信頼型 API では、デフォルトポリシーを定義することができます。これにより、コード内でまだ文字列をインジェクションシンクに渡している場所を探すことができるため、代わりに信頼型を生成して渡すようにコードを書き換えることが可能です。

`"default"` という名前のポリシーを作成し、CSP で信頼型の使用が強制されている場合、インジェクションシンクに渡される文字列引数はすべて、自動的にこのポリシーに渡されます。例えば、次のようなポリシーを作成するとします。

```js
trustedTypes.createPolicy("default", {
  createHTML(value) {
    console.log("このコードをリファクターしてください");
    return sanitize(value);
  },
});
```

このポリシーでは、コードで `innerHTML` に文字列を代入すると、ブラウザーはポリシーの `createHTML()` メソッドを呼び出し、その結果をシンクに代入します。

```js
const userInput = "<p>これは XSS かもしれません</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput;
// ログ出力 "このコードをリファクターしてください"
// sanitize(userInput) の結果を代入
```

デフォルトのポリシーが `null` または `undefined` を返した場合、その結果をシンクに代入すると、ブラウザーは `TypeError` を発生させます。

```js
trustedTypes.createPolicy("default", {
  createHTML(value) {
    console.log("このコードをリファクターしてください");
    return null;
  },
});

const userInput = "<p>これは XSS かもしれません</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput;
// ログ出力 "このコードをリファクターしてください"
// Throws a TypeError
```

> [!NOTE]
> 入力データをインジェクションシンクに直接渡す古いコードから、信頼型を明示的に使用するコードへ移行する間のみ、デフォルトのポリシーを使用することをお勧めします。

### インジェクションシンクのインターフェイス

この章では、「直接的」インジェクションシンクインターフェイスの一覧を提供しています。

これらは、評価時に信頼型のチェックを行うAPIのプロパティおよびメソッドです。
これらは、文字列だけでなく信頼型（`TrustedHTML`、`TrustedScript`、`TrustedScriptURL`）も受け取ることができます。また、信頼型の強制が有効で、デフォルトのポリシーが定義されていない場合は、信頼型を渡す必要があります。

#### TrustedHTML

- {{domxref("Document.execCommand()")}} で `commandName` に [`"insertHTML"`](/ja/docs/Web/API/Document/execCommand#inserthtml) が指定されている場合
- {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
- {{domxref("Document.write()")}}
- {{domxref("Document.writeln()")}}
- {{domxref("DOMParser.parseFromString()")}}
- {{domxref("Element.innerHTML")}}
- {{domxref("Element.insertAdjacentHTML")}}
- {{domxref("Element.outerHTML")}}
- {{domxref("Element.setHTMLUnsafe()")}}
- {{domxref("HTMLIFrameElement.srcdoc")}}
- {{domxref("Range.createContextualFragment()")}}
- {{domxref("ShadowRoot.innerHTML")}}
- {{domxref("ShadowRoot.setHTMLUnsafe()")}}

#### TrustedScript

- [`AsyncFunction()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction)
- [`AsyncGeneratorFunction()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction)
- {{jsxref("Global_Objects/eval", "eval()")}}
- [`Element.setAttribute()`](/ja/docs/Web/API/Element/setAttribute#value) (`value` 引数)
- [`Element.setAttributeNS()`](/ja/docs/Web/API/Element/setAttributeNS#value) (`value` 引数)
- [`Function()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
- [`GeneratorFunction()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/GeneratorFunction)
- {{domxref("HTMLScriptElement.innerText")}}
- {{domxref("HTMLScriptElement.textContent")}}
- {{domxref("HTMLScriptElement.text")}}
- [`window.setTimeout()`](/ja/docs/Web/API/Window/setTimeout#code) および [`WorkerGlobalScope.setTimeout()`](/ja/docs/Web/API/WorkerGlobalScope/setTimeout#code) (`code` 引数)
- [`window.setInterval()`](/ja/docs/Web/API/Window/setInterval#code) および [`WorkerGlobalScope.setInterval()`](/ja/docs/Web/API/WorkerGlobalScope/setInterval#code) (`code` 引数)

#### TrustedScriptURL

- {{domxref("HTMLScriptElement.src")}}
- {{domxref("ServiceWorkerContainer.register()")}}
- {{domxref("SvgAnimatedString.baseVal")}}
- {{domxref("WorkerGlobalScope.importScripts()")}}
- `url` argument to [`Worker()` コンストラクター](/ja/docs/Web/API/Worker/Worker#url)
- `url` argument to [`SharedWorker()` コンストラクター](/ja/docs/Web/API/SharedWorker/SharedWorker#url)

### 間接的インジェクションシンク

間接的インジェクションシンクとは、信頼型を受け入れず、また強制もしない中間メカニズムを介して、信頼できない文字列が DOM に注入されるシンクのことです。
これらは、前のセクションで掲載されている「直接的」な[インジェクションシンクインターフェイス](#インジェクションシンクのインターフェイス)とは異なります。後者は、呼び出された際に注入された文字列に対して信頼型チェックを実行します。

例えば、次のコードは script 要素の source を間接的に設定しています。
まず、ユーザーから指定された文字列を使用してテキストノードを作成し、次に {{htmlelement("script")}} 要素を構築して、そのテキストノードを子要素として追加します。
次に、その script 要素を {{htmlelement("body")}} 要素の子として文書に追加します。この時点で、元の文字列に定義されたスクリプトが実行される可能性があります。

```js
// テキストノードを作成
const untrustedString =
  "console.log('信頼できないソースからの、悪意のある可能性のあるスクリプトです！');";
const textNode = document.createTextNode(untrustedString);

// スクリプト要素を作成し、テキストノードを追加する
const script = document.createElement("script");
script.appendChild(textNode);

// 文書のスクリプトを実行できる場所に追加
document.body.appendChild(script);
```

テキストノードが生成された時点では、ブラウザーがそのノードが信頼型のソースとして使用されることを仮定する理由がないため、信頼型は文字列としてシリアライズされ、強制されません。

その代わりに、ブラウザーはスクリプト要素が実行可能になった時点でチェックを実行します。つまり、この例では、`document.body.appendChild(script)` が呼び出されてスクリプト要素が文書に追加された時点です。

ブラウザーはまず、スクリプトの内容として使用する文字列が信頼できるものかどうかを調べます。
{{htmlelement("script")}} のテキストソースを、{{domxref("TrustedScript")}} を明示的に設定せずに、変更することができる操作を行うと、そのスクリプトは信頼できないものとみなされます。
以上で使用した{{domxref("Node.appendChild()")}}メソッドは、あくまで一例に過ぎません（その他の例については、<https://wpt.live/trusted-types/script-enforcement-001.html> の WPT Live テストに多数掲載されています）。

その文字列が信頼されていない場合、かつ信頼型が強制されている場合、ブラウザーは代わりにソースとして使用する `TrustedScript` を[デフォルトポリシー](#デフォルトポリシー)から取得しようとします。
デフォルトポリシーが定義されていなかったり、または `TrustedScript` を返さなかったりした場合、操作で例外が発生します。

### 信頼型のクロスブラウザー対応

信頼型 API は、まだすべての現行ブラウザーで利用可能ではありませんが、[W3C が作成した互換性支援ツール](https://github.com/w3c/trusted-types/tree/main?tab=readme-ov-file#polyfill)のおかげで、現在ではどこでも利用可能です。

- [完全なポリフィル](https://github.com/w3c/trusted-types/blob/main/src/polyfill/full.js)は、JavaScript API を定義し、現在の文書から CSP を推測しようと試み、推測された CSP に基づいて信頼型の使用を強制します。
- [API のみのポリフィル](https://github.com/w3c/trusted-types/blob/main/src/polyfill/api_only.js)は、JavaScript API のみを定義しており、CSP を使用して信頼型の使用を強制する機能は含まれていません。

これら 2 つのポリフィルに加え、W3C は _tinyfill_ と呼ばれるものを提供しており、これについては下記で詳しく説明します。

なお、CSP の強制が有効になっている対応ブラウザーでコードのテストを行っていれば、それ以外のブラウザーでは上記の完全なポリフィルを使用する必要はありません。API のみのポリフィルや tinyfill を使用しても、同様の効果を得ることができます。

これは、この強制措置により、すべてのデータがインジェクションシンクに渡される前に信頼型 API を経由して（そして結果的に無害化関数を通して）確実に実現することが求められるためです。
その後、リファクタリングしたコードを、強制措置が適用されていないさまざまなブラウザーで実行しても、同じコードパスを通るため、同様の保護が得られます。

#### 信頼型 tinyfill

この節では、信頼型 tinyfill が、信頼型の対応をまったく追加していないにもかかわらず、どのようにウェブサイトを保護できるかについて見ていきます。

信頼型 tinyfill は、次のようなものだけです。

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

これは、渡された [`policyOptions`](/ja/docs/Web/API/TrustedTypePolicyFactory/createPolicy#policyoptions) オブジェクトをそのまま返す `trustedTypes.createPolicy()` の実装を提供します。`policyOptions` オブジェクトはデータの無害化関数を定義しており、これらの関数は文字列を返すものと想定されています。

この tinyfill を導入した上で、ポリシーを作成するとします。

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

信頼型に対応しているブラウザーでは、この `TrustedTypePolicy` が返され、`policy.createHTML()` を呼び出すと `TrustedHTML` オブジェクトが作成されます。この `TrustedHTML` オブジェクトをインジェクションシンクに渡すことで、シンクが文字列ではなく信頼型を受け取るように強制することができます。

信頼型に対応していないブラウザーでは、このコードは、入力を無害化し文字列として返す `createHTML()` 関数を持つオブジェクトを返します。無害化された文字列は、その後、インジェクションシンクに渡すことができます。

```js
const userInput = "これは XSS かもしれません";
const element = document.querySelector("#container");

const trustedHTML = policy.createHTML(userInput);
// 対応しているブラウザーでは、trustedHTML は TrustedHTML オブジェクトとなります。
// 対応していないブラウザーでは、trustedHTML は文字列となります。

element.innerHTML = trustedHTML;
// 対応しているブラウザーでは、trustedHTML が
// TrustedHTML オブジェクトでない場合、例外が発生します。
```

どちらの場合でも、インジェクションシンクは無害化されたデータを受け取ります。また、対応しているブラウザーではポリシーの使用を可能にするため、このコードパスは未対応ブラウザーにおいても無害化関数を踏むことがわかります。

## インターフェイス

- {{domxref("TrustedHTML")}}
  - : HTML としてレンダリングされる、インジェクションシンクに挿入される文字列を表します。
- {{domxref("TrustedScript")}}
  - : スクリプトの実行につながる可能性のある、インジェクションシンクに挿入される文字列を表します。
- {{domxref("TrustedScriptURL")}}
  - : 外部スクリプトのURLとして構文解析される、インジェクションシンクに挿入する文字列を表します。
- {{domxref("TrustedTypePolicy")}}
  - : 上記の信頼型オブジェクトを作成する際に使用される関数を定義します。
- {{domxref("TrustedTypePolicyFactory")}}
  - : ポリシーを作成し、信頼型オブジェクトのインスタンスがそれらのポリシーのいずれかを通じて作成されたことを確認します。

### 他のインターフェイスへの拡張

- {{domxref("Window.trustedTypes")}}
  - : メインスレッドのグローバルオブジェクトに関連付けられた {{domxref("TrustedTypePolicyFactory")}} オブジェクトを返します。
    これは、Window スレッドで API を使用するためのエントリーポイントです。
- {{domxref("WorkerGlobalScope.trustedTypes")}}.
  - : ワーカー内のグローバルオブジェクトに関連付けられた {{domxref("TrustedTypePolicyFactory")}} オブジェクトを返します。

### HTTP への拡張

#### `Content-Security-Policy` のディレクティブ

- {{CSP("require-trusted-types-for")}}
  - : 信頼型が DOM XSS [インジェクションシンク](#概念と使い方)に渡されるようにします。
- {{CSP("trusted-types")}}
  - : 信頼型ポリシーの名前の許可リストを指定するために使用します。

#### `Content-Security-Policy` のキーワード

- [`trusted-types-eval`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval)
  - : [`eval()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval) や類似の関数の使用を許可しますが、信頼型に対応しており、かつ適用されている場合に限ります。

## 例

次の例では、{{domxref("TrustedHTML")}} オブジェクトを作成するポリシーを {{domxref("TrustedTypePolicyFactory.createPolicy()")}} で作成します。その後、{{domxref("TrustedTypePolicy.createHTML()")}} を使用して、文書内に挿入するサニタイズ済みの HTML 文字列を作成することができます。

この無害化された値は、{{domxref("Element.innerHTML")}} と共に使用することで、新しい HTML 要素が挿入されないように実現することができます。

```html
<div id="myDiv"></div>
```

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) =>
    string
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;"),
});

let el = document.getElementById("myDiv");
const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
console.log(escaped instanceof TrustedHTML); // true
el.innerHTML = escaped;
```

この例の詳細や、入力を無害化するその他の方法については、記事 [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/articles/trusted-types) をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/articles/trusted-types)
- [信頼型のポリフィル](https://github.com/w3c/trusted-types#polyfill)（[npm パッケージ](https://www.npmjs.com/package/trusted-types)も利用可能）
