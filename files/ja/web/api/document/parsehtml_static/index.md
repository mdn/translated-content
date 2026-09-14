---
title: "Document: parseHTML() 静的メソッド"
short-title: parseHTML()
slug: Web/API/Document/parseHTML_static
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

**`parseHTML()`** は {{domxref("Document")}} オブジェクトの静的メソッドで、HTML の文字列を構文解析・サニタイズして新しい {{domxref("Document")}} インスタンスを作成するための、XSS 対策済みの安全な方法を提供します。

## 構文

```js-nolint
Document.parseHTML(input)
Document.parseHTML(input, options)
```

### 引数

- `input`
  - : 文字列で、サニタイズされシャドウルートに挿入される HTML を定義します。
- `options` {{optional_inline}}
  - : 以下のオプション引数を持つオプションオブジェクトです。
    - `sanitizer`
      - : {{domxref("Sanitizer")}} または {{domxref("SanitizerConfig")}} オブジェクトで、入力のどの要素が許可されたり削除されたりするかを定義します。文字列 `"default"` で既定のサニタイザーの構成になります。
        一般的に、設定を再利用する場合、`SanitizerConfig`よりも`Sanitizer`の方が効率的であることが期待されます。
        指定しなかった場合、 XSS 対応済みの既定のサニタイザー設定が使用されます。

### 返値

{{domxref("Document")}} です。

### 例外

- `TypeError`
  - : `options.sanitizer` に次のようなものが渡された場合に例外が発生します。
    - 正規化されていない {{domxref("SanitizerConfig")}}（"allowed" と "removed" の両方の設定を含むもの）
    - 値が `"default"` ではない文字列
    - {{domxref("Sanitizer")}}、{{domxref("SanitizerConfig")}}、文字列のどれでもない値。

## 解説

`parseHTML()` メソッドは、HTML の文字列を構文解析・サニタイズし、XSS 対策済みの新しい {{domxref("Document")}} インスタンスを生成します。
生成される `Document` は、[コンテンツタイプ](/ja/docs/Web/API/Document/contentType)が "text/html"、[文字コード](/ja/docs/Web/API/Document/characterSet)が UTF-8、URL が "about:blank" を保有します。

`options.sanitizer` 引数でサニタイザーの構成が指定されていない場合、`parseHTML()` は既定の {{domxref("Sanitizer")}} 構成で実行されます。
この構成では、XSS に安全と見なされるすべての要素と属性が許可され、安全でないと見なされるエンティティは許可されません。
独自のサニタイザーまたはサニタイザー設定を指定することで、許可または除去される要素、属性、コメントを選択できます。
なお、サニタイザー設定で安全でないオプションが許可されている場合でも、このメソッドを使用すると（暗黙的に {{domxref('Sanitizer.removeUnsafe()')}} が呼び出されるため）、それらは除去されます。

入力される HTML には、[宣言型シャドウルート](/ja/docs/Web/HTML/Reference/Elements/template#宣言的シャドウ_dom) が含まれることがあります。
具体的なシャドウホスト内で複数の[宣言型シャドウルート](/ja/docs/Web/HTML/Reference/Elements/template#宣言的シャドウ_dom)が定義されている場合、まず {{domxref("ShadowRoot")}} が生成され、それ以降の宣言はそのシャドウルート内の {{htmlelement("template")}} 要素として構文解析されます。

安全でない要素や属性を許可する必要が特にない限り、`parseHTML()` は {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}} の代わりに使用すべきです。
解析対象の HTML に安全でない HTML エンティティが含まれる必要がない場合は、`Document.parseHTML()` を使用してください。

なお、このメソッドは入力文字列を常に XSS 攻撃に脆弱なエンティティからサニタイズするため、[信頼型 API](/ja/docs/Web/API/Trusted_Types_API) によるセキュリティ保護や検証は行われません。

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
