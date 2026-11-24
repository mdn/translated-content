---
title: Sanitizer
slug: Web/API/Sanitizer
l10n:
  sourceCommit: cda9415220ba812ba2ee24e0af1c8e8001ab9924
---
{{APIRef("HTML Sanitizer API")}}

**`Sanitizer`** は [HTML 無害化 API](/ja/docs/Web/API/HTML_Sanitizer_API) のインターフェイスで、HTML の文字列を {{domxref("Element")}} や {{domxref("ShadowRoot")}} に挿入したり、HTML の文字列を {{domxref("Document")}} に解釈したりする際に、どの要素、属性、コメントを許可するか、または除去するかを指定する設定オブジェクトを定義します。

## コンストラクター

- {{domxref("Sanitizer.Sanitizer", "Sanitizer()")}}
  - : `Sanitizer` オブジェクトを作成して返します。{{domxref('SanitizerConfig')}} で定義した独自の無害化動作を指定することもできます。

## インスタンスメソッド

- {{domxref('Sanitizer.allowElement()')}}
  - : 無害化時に要素を許可します。許可または不許可にする属性の配列も指定できます。
- {{domxref('Sanitizer.get()')}}
  - : 現在の `Sanitizer` の設定を、{{domxref('SanitizerConfig')}} 辞書のインスタンスとして返します。
- {{domxref('Sanitizer.removeElement()')}}
  - : 無害化時に要素を除去するように指定します。
- {{domxref('Sanitizer.removeUnsafe()')}}
  - : XSS に対して安全でない HTML をすべて除去するよう、無害化の設定を更新します。
- {{domxref('Sanitizer.replaceElementWithChildren()')}}
  - : 要素をその子 HTML 要素で置き換えるように指定します。
- {{domxref('Sanitizer.allowAttribute()')}}
  - : すべての要素で属性を許可します。
- {{domxref('Sanitizer.removeAttribute()')}}
  - : すべての要素から属性を除去するように指定します。
- {{domxref('Sanitizer.setComments()')}}
  - : 無害化時にコメントを許可するか除去するかを設定します。
- {{domxref('Sanitizer.setDataAttributes()')}}
  - : 無害化時に要素のデータ属性を許可するか除去するかを設定します。

## 解説

`Sanitizer` は、HTML の文字列を {{domxref("Element")}} や {{domxref("ShadowRoot")}} に挿入したり、HTML の文字列を {{domxref("Document")}} に解釈したりする際に、どの要素、属性、コメントを許可するか、または除去するかを指定する、再利用可能な設定オブジェクトです。
次の[無害化メソッド](/ja/docs/Web/API/HTML_Sanitizer_API#無害化メソッド)で使用できます。

- 安全なメソッド: {{domxref("Element.setHTML()")}}、{{domxref("ShadowRoot.setHTML()")}}、[`Document.parseHTML()`](/ja/docs/Web/API/Document/parseHTML_static)
- 安全でないメソッド: {{domxref("Element.setHTMLUnsafe()")}}、{{domxref("ShadowRoot.setHTMLUnsafe()")}}、[`Document.parseHTMLUnsafe()`](/ja/docs/Web/API/Document/parseHTMLUnsafe_static)

`Sanitizer` のインスタンスは {{domxref("SanitizerConfig")}} から作成でき、実質的にはそのオブジェクトのラッパーです。`Sanitizer` と `SanitizerConfig` は同じメソッドで使用できますが、同じ設定を複数回使用する場合は、`Sanitizer` を使用し、必要に応じて変更する方が効率的です。
コンストラクターに `SanitizerConfig` を渡さない場合は、[デフォルトの無害化設定](/ja/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration)を使用して無害化オブジェクトが作成されます。この設定では、XSS に対して安全でない要素や属性に加え、クリックジャッキングやなりすましなど、他の攻撃に悪用される可能性がある要素や属性も除去します。

{{domxref("Sanitizer.removeUnsafe()")}} を呼び出すと、どの `Sanitizer` も XSS に対して安全にできます。ただし、デフォルト設定では除去される、その他の潜在的に危険な要素や属性は残っている可能性があります。

### 無害化メソッドでの `Sanitizer` の使用

{{domxref("Element.setHTML")}} やその他の安全な無害化メソッドに `Sanitizer` を渡さない場合は、デフォルトの `Sanitizer` 設定が自動的に使用されます。
これは攻撃対象領域を制限しながら、ほとんどの用途に対応できる妥当なデフォルトです。

これらのメソッドに独自の無害化オブジェクトを渡した場合、その無害化オブジェクトが許可する XSS に対して安全でない要素や属性も除去されます。
{{domxref("Sanitizer.removeUnsafe()")}} と同じ要素が除去されますが、渡した `Sanitizer` 自体は実際には変更されません。そのため、安全でないメソッドで使用すると「安全でない」状態になります。

安全でない無害化メソッドは、デフォルトでは無害化を行いません。
ただし、前述のとおり、{{domxref("Sanitizer.removeUnsafe()")}} を呼び出して XSS に対して安全でない要素を除去できます（デフォルト設定を使用したい場合は、安全なメソッドを使用してください）。

## 例

その他の例については、[HTML 無害化 API](/ja/docs/Web/API/HTML_Sanitizer_API) および各メソッドを参照してください。
ここでは、さまざまな無害化設定を作成する方法をいくつか示します。

### デフォルトの無害化オブジェクトの作成

デフォルトの無害化オブジェクトは、次のように作成します。

```js
const sanitizer = new Sanitizer();
```

XSS に対して安全な[無害化メソッド](/ja/docs/Web/API/HTML_Sanitizer_API#無害化メソッド)は、オプションを渡さない場合に同じ無害化オブジェクトを自動的に作成します。

### 空の無害化オブジェクトの作成

空の無害化オブジェクトを作成するには、コンストラクターに空のオブジェクトを渡します。
結果として得られる無害化設定は、空の配列を持つ[除去設定](/ja/docs/Web/API/HTML_Sanitizer_API#除去設定)です。

```js
const sanitizer = new Sanitizer({});
console.log(sanitizer.get());
/*
{
  "comments": true,
  "removeAttributes": [],
  "removeElements": []
}
*/
```

### 「許可」無害化オブジェクトの作成

この例では、属性と要素の一部だけを許可する「許可」無害化オブジェクトを作成する方法を示します。

まず {{domxref("Sanitizer.Sanitizer", "Sanitizer()")}} コンストラクターを使用して `Sanitizer` を作成し、`<div>`、`<p>`、`<script>` 要素を許可する {{domxref("SanitizerConfig")}} を指定します。

次に、`allowElement()` で `<span>` 要素を追加で許可し、`allowAttribute()` ですべての要素の `id` 属性を許可し、`replaceElementWithChildren()` メソッドで `<b>` 要素を内部の内容に置き換えるように指定します（これは、残すエンティティを明示的に指定するという意味で「許可」の一種です）。
最後に、コメントを保持するように指定します。

```js
const sanitizer = new Sanitizer({ elements: ["div", "p", "script"] });
sanitizer.allowElement("span");
sanitizer.allowAttribute("id");
sanitizer.replaceElementWithChildren("b");
sanitizer.setComments(true);
```

### 「除去」無害化オブジェクトの作成

この例では、入力から除去する項目を指定する「除去」無害化オブジェクトを作成する方法を示します。

まず {{domxref("Sanitizer.Sanitizer", "Sanitizer()")}} コンストラクターを使用して `Sanitizer` を作成し、`<span>` 要素と `<script>` 要素を除去する {{domxref("SanitizerConfig")}} を指定します。
次に `removeElement()` で除去する要素の配列に `<h6>` を追加し、`removeAttribute()` で属性のリストから `lang` を除去します。コメントも除去します。

```js
const sanitizer = new Sanitizer({ removeElements: ["span", "script"] });
sanitizer.removeElement("h6");
sanitizer.removeAttribute("lang");
sanitizer.setComments(false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
