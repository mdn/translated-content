---
title: "Document: parseHTML() 静的メソッド"
short-title: parseHTML()
slug: Web/API/Document/parseHTML_static
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("DOM")}}

**`parseHTML()`** は {{domxref("Document")}} オブジェクトの静的メソッドで、HTML 文字列を構文解析して無害化し、XSS に対して安全な新しい {{domxref("Document")}} インスタンスを作成する方法を提供します。

## 構文

```js-nolint
Document.parseHTML(input)
Document.parseHTML(input, options)
```

### 引数

- `input`
  - : 無害化され、シャドウルートに挿入される HTML を定義する文字列です。
- `options` {{optional_inline}}
  - : 以下のオプション引数を持つオプションオブジェクトです。
    - `sanitizer`
      - : {{domxref("Sanitizer")}} または {{domxref("SanitizerConfig")}} オブジェクトで、入力のどの要素を許可または削除するかを定義します。または、文字列 `"default"` を指定して[デフォルトのサニタイザー設定](/ja/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration)を使用できます。
        サニタイザーで許可されていても、XSS に対して安全でない要素と属性はこのメソッドによって削除されます。
        指定しなかった場合は、デフォルトの `Sanitizer` 設定が使用されます。
        同じ設定を複数回使う場合は、必要に応じて変更できる `Sanitizer` を使う方が効率的です。

### 返値

{{domxref("Document")}} です。

### 例外

- {{jsxref("TypeError")}}
  - : `options.sanitizer` に次のようなものが渡された場合に例外が発生します。
    - [有効](/ja/docs/Web/API/SanitizerConfig#valid_configuration)でない {{domxref("SanitizerConfig")}}。例えば、"allowed" と "removed" の両方の設定を含むもの。
    - 値が `"default"` ではない文字列
    - {{domxref("Sanitizer")}}、{{domxref("SanitizerConfig")}}、文字列のどれでもない値。

## 解説

`parseHTML()` メソッドは、HTML 文字列を構文解析して無害化し、XSS に対して安全な新しい {{domxref("Document")}} インスタンスを生成します。
生成される `Document` の[コンテンツタイプ](/ja/docs/Web/API/Document/contentType)は "text/html"、[文字コード](/ja/docs/Web/API/Document/characterSet)は UTF-8、URL は "about:blank" です。

`options.sanitizer` 引数にサニタイザーが指定されていない場合、`parseHTML()` は[デフォルトのサニタイザー設定](/ja/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration)を使用します。
この設定は、XSS 攻撃だけでなく、クリックジャッキングやなりすましなどの攻撃も防ぐため、ほとんどの用途に適しています。

独自の `Sanitizer` または `SanitizerConfig` を指定して、許可または削除する要素、属性、コメントを選択できます。
サニタイザーで安全でないオプションが許可されていても、このメソッドでは削除されます（{{domxref('Sanitizer.removeUnsafe()')}} を呼び出したサニタイザーと同じ要素が削除されます）。

入力される HTML には、[宣言型シャドウルート](/ja/docs/Web/HTML/Reference/Elements/template#宣言的シャドウ_dom) が含まれることがあります。
特定のシャドウホスト内に複数の[宣言型シャドウルート](/ja/docs/Web/HTML/Reference/Elements/template#宣言的シャドウ_dom)が定義されている場合、最初の {{domxref("ShadowRoot")}} だけが生成され、それ以降の宣言はそのシャドウルート内の {{htmlelement("template")}} 要素として構文解析されます。

安全でない要素や属性を許可する必要が特にない限り、`parseHTML()` は {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}} の代わりに使用すべきです。
解析対象の HTML に安全でない HTML エンティティが含まれる必要がない場合は、`Document.parseHTML()` を使用してください。

このメソッドは入力文字列から XSS に対して安全でないエンティティを常に無害化するため、[信頼型 API](/ja/docs/Web/API/Trusted_Types_API) による保護や検証は行われません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
- {{domxref("Element.setHTML()")}} および {{domxref("Element.setHTMLUnsafe()")}}
- {{domxref("ShadowRoot.setHTML()")}} および {{domxref("ShadowRoot.setHTMLUnsafe()")}}
- {{domxref("DOMParser.parseFromString()")}}: HTML や XML を DOM ツリーに構文解析する
- [HTML サニタイザー API](/ja/docs/Web/API/HTML_Sanitizer_API)
