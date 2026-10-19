---
title: "Element: setAttributeNS() メソッド"
short-title: setAttributeNS()
slug: Web/API/Element/setAttributeNS
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{ APIRef("DOM") }}

> [!WARNING]
> このメソッドは、属性に応じて、HTML、スクリプト、またはスクリプトの URL として構文解析される属性値を受け取る可能性があります。
> この API は[インジェクションシンク](/ja/docs/Web/API/Trusted_Types_API#概念と使い方)と呼ばれ、元の値が攻撃者から提供されたものである場合、[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS) 攻撃の攻撃経路となる可能性があります。
>
> このリスクを軽減するには、常に適切な信頼型オブジェクト（{{domxref("TrustedHTML")}}、{{domxref("TrustedScript")}}、{{domxref("TrustedScriptURL")}} のいずれか）を常に渡すことで、このリスクを軽減できます。また、[信頼型の強制適用](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)を行うことも有効です。
> 詳しくは {{domxref("Element.setAttribute()")}} の[セキュリティ上の注意事項](/ja/docs/Web/API/Element/setAttribute#セキュリティ上の注意事項)を参照してください。

**`setAttributeNS()`** は {{domxref("Element")}} インターフェイスのメソッドで、指定された名前空間と名前を持つ新しい属性を追加したり、属性の値を変更したりします。

HTML 文書を扱っていて、リクエストされた属性を特定の名前空間の一部として指定する必要がない場合は、代わりに {{domxref("Element.setAttribute()", "setAttribute()")}} メソッドが使用できます。

## 構文

```js-nolint
setAttributeNS(namespaceURI, qualifiedName, value)
```

### 引数

- `namespaceURI`
  - : 設定する属性の名前空間を指定する文字列、または空文字列です。

- `qualifiedName`
  - : 修飾名によって属性を識別する文字列。この修飾名は `prefix:localName` または `localName` の形をとります。各部分の定義は以下の通りです。
    - `prefix`
      - : 名前空間の「短い別名」です。
        接頭辞はオプションですが、指定する場合は `namespaceURI` 引数も同時に指定する必要があります。
        接頭辞が `xml` または `xmlns` に設定されている場合、`namespaceURI` はそれぞれ `http://www.w3.org/XML/1998/namespace` または `http://www.w3.org/2000/xmlns/` に設定する必要があります。

    - `localName`
      - : その属性のローカル名です。

- `value`
  - : 属性に割り当てる値を含む信頼型または文字列です。

    信頼型が強制されている場合、以下の属性に対しては信頼型のインスタンスを渡す必要があります。
    - `onclick` や `onload` などのイベントハンドラーのコンテンツ属性には、{{domxref("TrustedScript")}} が要求されます。
    - {{domxref("HTMLIFrameElement.srcdoc")}} には、{{domxref("TrustedHTML")}} のインスタンスが要求されます。
    - {{domxref("HTMLScriptElement.src")}} には、{{domxref("TrustedScriptURL")}} のインスタンスが要求されます。
    - {{domxref("SVGScriptElement.href")}} には、{{domxref("TrustedScriptURL")}} のインスタンスが要求されます。

    その他の属性については、信頼型が強制されないため、文字列や任意の信頼型を渡すことができます。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `NamespaceError` {{domxref("DOMException")}}
  - : [`namespaceURI`](#namespaceuri) の値が以下の場合の発生します。
    - 有効な名前空間 URI ではない。
    - `prefix` に値があるときに空文字列を設定した。
    - [`prefix`](#prefix) が `xml` または `xmlns` に設定された場合に、それぞれ `http://www.w3.org/XML/1998/namespace` または `http://www.w3.org/2000/xmlns/` ではない場合。
- `InvalidCharacterError` {{domxref("DOMException")}}
  - : [`prefix`](#prefix) または [`localName`](#localname) のいずれかが無効な場合、例外が発生します。
    - `prefix` は 1 文字以上でなければならず、ASCII のホワイトスペース、`NULL`、`/`、`>`（それぞれ U+0000、U+002F、U+003E）が含まれてはなりません。
    - `localName` は 1 文字以上でなければならず、ASCII のホワイトスペース、`NULL`、`/`、`=`、`>`（それぞれ U+0000、U+002F、U+003D、U+003E）が含まれてはなりません。

    > [!NOTE]
    > 仕様の以前のバージョンでは、`qualifiedName` が有効な [XML 名](https://www.w3.org/TR/xml/#dt-name) であることが要求されるなど、より厳しい制約が設けられていました。

- `TypeError`
  - : [`value`](#value) に、信頼型オブジェクトではなく文字列が渡された場合（それらを要求される属性について）、 [信頼型](/ja/docs/Web/API/Trusted_Types_API)が [CSP によって強制されている](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)場合で、かつデフォルトのポリシーが定義されていない場合に発生します。

### 例

### 基本的な使い方

```js
let d = document.getElementById("d1");
d.setAttributeNS(
  "http://www.mozilla.org/ns/specialspace",
  "spec:align",
  "center",
);
```

### 信頼型

`setAttribute()` の[安全はでない属性の設定](/ja/docs/Web/API/Element/setAttribute#安全はでない属性の設定)の例では、`setAttributeNS()` とともに [信頼型](/ja/docs/Web/API/Trusted_Types_API)を使用する方法が示されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.hasAttributeNS()")}}
- {{domxref("Element.getAttributeNS()")}}
- {{domxref("Element.removeAttributeNS()")}}
- {{domxref("Element.setAttribute()")}}
