---
title: HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API
l10n:
  sourceCommit: b40b71d87ab041f2f36a4675bc09af983b22422a
---

{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("HTML Sanitizer API")}}

**HTML Sanitizer API** は、信頼できない HTML 文字列と {{domxref('Document')}} または {{domxref('DocumentFragment')}} オブジェクトを受け取り、それらを安全にドキュメントの DOM に挿入するためのサニタイズ処理を行うことができます。

## 概念と使用方法

例えば、クライアントサイドのテンプレート化ソリューションの一部として、またはユーザー生成コンテンツをレンダリングするために、あるいは他のサイトからのフレームにデータを含めるときに、ウェブアプリケーションはしばしばクライアントサイドで信頼できない HTML を扱う必要があります。Sanitizer API を使用すると、このような潜在的に信頼できない HTML を安全な方法でレンダリングすることができます。

API にアクセスするには、{{domxref('Sanitizer.Sanitizer()','Sanitizer()')}} コンストラクターを使用して {{domxref('Sanitizer')}} インスタンスを作成し、設定することになります。設定オプションのパラメーターで、許可する要素や許可しない要素、属性を指定し、カスタム要素やコメントを有効にすることができます。

最も一般的なユースケースである XSS の防止は、デフォルトの設定によって処理されます。カスタム設定による {{domxref("Sanitizer.Sanitizer", "Sanitizer()")}} の作成は、アプリケーション固有のユースケースを追加で扱う場合にのみ必要です。

API には、データをサニタイズするための主要な 3 つのメソッドがあります。

1. {{domxref('Element.setHTML()')}} は、HTML の文字列を解析してサニタイズし、現在の要素の子として DOM に即座にそれを挿入します。これは本質的に {{domxref('Element.innerHTML')}} の「安全」バージョンであり、信頼できないデータを挿入する際には innerHTML の代わりに使用されるべきものです。
2. {{domxref('Sanitizer.sanitizeFor()')}} は、後で DOM に挿入するために HTML の文字列を解析しサニタイズします。これは文字列のターゲット要素が、常に更新の準備ができている／利用可能である、とは限らない場合に使用されるかもしれません。
3. {{domxref('Sanitizer.sanitize()')}} は、{{domxref('Document')}} または {{domxref('DocumentFragment')}} 内にあるデータをサニタイズします。これは、例えば、フレーム内の {{domxref('Document')}} インスタンスをサニタイズするために使用されるかもしれません。

### 文字列のパースとサニタイズ

HTML の文字列をパースした結果は、それが挿入されるコンテキスト／要素に依存します。

例えば、{{HTMLElement("td")}} 要素を含む HTML 文字列は、{{HTMLElement("table")}} 要素の下に挿入すれば有効ですが、{{HTMLElement("div")}} 要素の中に挿入すると落とされます。同様に、{{HTMLElement("em")}} 要素は {{HTMLElement("div")}} の中では有効なノードですが、{{HTMLElement("textarea")}} の中で使われるとタグはエスケープされます。

```html
<!-- "<em>bla</em>" inserted into <div> -->
<div><em>bla</em></div>

<!-- "<em>bla</em>" inserted into <textarea> -->
<textarea>&lt;em&gt;bla</textarea>
```

したがって、パーサーの実行時にターゲットとなる要素が分かっている必要があり、結果のサブツリーは DOM 内の同じ種類の要素に挿入されなければならず、さもなければ結果は不正確なものとなります。

このため、{{domxref('Sanitizer.sanitizeFor()')}} を使用する場合、開発者は最終的なターゲット要素のタグをパラメーターとして指定する必要があり、メソッドは解析された文字列を子として一致する HTML 要素を返します（例えば、ターゲットタグ `"div"` は {{domxref("HTMLDivElement")}} のインスタンスであるオブジェクトを返します）。この戻り値の型により、DOM に挿入されるオブジェクトのコンテキストをユーザーは常に持つことが保証されます。

{{domxref('Element.setHTML()')}} は特定の要素で呼び出されるため、この配慮は重要ではなく、コンテキストも暗黙的なものになります。

パーサーは、入力文字列に対して正規化処理を行うこともあります。その結果、HTML が妥当でありサニタイザーメソッドが何もしない場合でも、サニタイズされた出力がサニタイズされていない入力と正確に一致しないことがあります。これは、両方のメソッドに適用されます。

## インターフェイス

- {{domxref('Sanitizer')}}
  - : サニタイザーの構成を定義する機能、後で DOM に挿入するための信頼できない HTML 文字列をサニタイズする機能、および {{domxref('Document')}} と {{domxref('DocumentFragment')}} オブジェクトをサニタイズする機能を提供します。
- {{domxref('Element/setHTML','Element.setHTML()')}}
  - : HTML の文字列をノードのサブツリーにパースし、`Sanitizer` オブジェクトを使用してそれをサニタイズし、そして現在の要素の子としてそれを設定します。

## 例

以下の例では、デフォルトのサニタイザーを使用して Sanitizer API を使用する方法を示します（執筆時点では、設定操作はまだサポートされていません）。

### 文字列を即座にサニタイズする

以下のコードは、{{domxref('Element/setHTML','Element.setHTML()')}} を使って HTML の文字列をサニタイズし、それを `target` という id を持つ `Element` に挿入する方法を示しています。

`script` 要素はデフォルトのサニタイザーで許可されていないため alert は削除されます。

```js
const unsanitized_string = "abc <script>alert(1)<" + "/script> def"; // サニタイズされていない文字列

const sanitizer = new Sanitizer(); // デフォルトのサニタイザー

// id が "target" の要素を取得し、サニタイズした文字列をセットする
const target = document.getElementById("target");
target.setHTML(unsanitized_string, { sanitizer });

console.log(target.innerHTML);
// "abc  def"
```

### 遅延使用のための文字列のサニタイズ

以下の例では {{domxref("Sanitizer.sanitizeFor()")}} メソッドを使用して同じサニタイズ処理を行い、後で返された要素を `<div>` 要素に挿入することを意図しています。

```js
const unsanitized_string = "abc <script>alert(1)<" + "/script> def"; // サニタイズされていない文字列
const sanitizer = new Sanitizer(); // デフォルトのサニタイザー

// 文字列をサニタイズする
const sanitizedDiv = sanitizer.sanitizeFor("div", unsanitized_string);

// 返された要素の型を調べて、サニタイズされた HTML を文字列で表示する
//We can verify the returned element type, and view sanitized HTML in string form:
console.log(sanitizedDiv instanceof HTMLDivElement);
// true
console.log(sanitizedDiv.innerHTML);
// "abc  def"

// その後に処理をする…

// 更新する要素を取得する。要素は sanitizeFor() のコンテキストと一致するように div である必要がある
// サニタイズされた要素の子となるように内容をセットする
document.querySelector("div#target").replaceChildren(sanitizedDiv.children);
```

> **メモ:** どうしても文字列から文字列への操作を行いたい場合は `innerHTML` を使って文字列を抽出することができますが、文字列が適用されるときに正しいコンテキストを使用することを忘れてはいけません。
>
> ```js
> const unsanitized_string = "abc <script>alert(1)<" + "/script> def";
> const sanitizedString = new Sanitizer().sanitizeFor(
>   "div",
>   unsanitized_string,
> ).innerHTML;
> ```

### フレームのサニタイズ

id が `userFrame` である {{HTMLElement("iframe")}} からのデータをサニタイズします。

```js
const sanitizer = new Sanitizer(); // デフォルトのサニタイザー

// frame の要素とその document オブジェクトを取得する
const frame_element = document.getElementById("userFrame");
const unsanitized_frame_tree = frame_element.contentWindow.document;

// ドキュメントツリーをサニタイズし、frame を更新する
const sanitized_frame_tree = sanitizer.sanitize(unsanitized_frame_tree);
frame_element.replaceChildren(sanitized_frame_tree);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
