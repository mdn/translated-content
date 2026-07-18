---
title: "CustomElementRegistry: define() メソッド"
short-title: define()
slug: Web/API/CustomElementRegistry/define
l10n:
  sourceCommit: 8a74d8feac267c1ddc37a4a8bc61e9aa8db75b12
---

{{APIRef("Web Components")}}

**`define()`** は {{domxref("CustomElementRegistry")}} インターフェイスのメソッドで、カスタム要素の定義をカスタム要素レジストリーに追加し、その名前を、その要素を作成する際に使用するコンストラクターに関連付けます。

## 構文

```js-nolint
define(name, constructor)
define(name, constructor, options)
```

### 引数

- `name`
  - : 新しいカスタム要素の名前です。カスタム要素の名前は、少なくとも 1 つのハイフンを含まなければならないことに注意してください。
- `constructor`
  - : 新しいカスタム要素のコンストラクターです。
- `options` {{optional_inline}}
  - : 要素の定義の仕方を制御するオブジェクト。現在は、次の 1 つのオプションのみに対応しています。
    - `extends`
      - : 拡張する組み込み要素の名前を示す文字列。
        カスタム組み込み要素を作成するのに使われます。

### 返値

なし。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : 次のような場合に発生します。
    - {{domxref("CustomElementRegistry")}} に既に同じ名前の項目または同じコンストラクターが含まれている（または既に定義されている）場合。
    - `extends` オプションが指定されており、それが[有効なカスタム要素名](#有効なカスタム要素名)であった場合（つまり、カスタム要素を拡張しようとしている場合）。
    - `extends` オプションが指定されており、この要素が未知の要素を拡張しようとした場合。
- `SyntaxError` {{domxref("DOMException")}}
  - : 指定された名前が[有効なカスタム要素名](#有効なカスタム要素名)ではなかった場合に発生します。
- {{jsxref("TypeError")}}
  - : 参照されたコンストラクターがコンストラクターではなかった場合に発生します。

## 解説

`define()` メソッドは、カスタム要素の定義をカスタム要素レジストリーに追加し、その名前を、その要素を生成するために使用されるコンストラクターに関連付けます。

作成することができるのは、次の 2 種類のカスタム要素です。

- **自律カスタム要素** (Autonomous custom element): 独立した要素です。組み込みの HTML 要素を継承しません。
- **カスタム組み込み要素** (Customized built-in element): 組み込みの HTML 要素を継承し、拡張した要素です。

自律カスタム要素を定義するには、`options` 引数を省略する必要があります。

カスタム組み込み要素を定義するには、`options` 引数を渡し、その `extends` プロパティに拡張対象の組み込み要素の名前を設定する必要があります。また、この名前は、カスタム要素クラスの定義が継承するインターフェイスと一致している必要があります。例えば、{{htmlelement("p")}} 要素をカスタマイズするには、`{extends: "p"}` を `define()` に渡す必要があり、その要素のクラス定義は {{domxref("HTMLParagraphElement")}} を継承している必要があります。

### 有効なカスタム要素名

カスタム要素の名前は、以下の条件を満たなければなりません。

- ASCII の小文字 (a-z) で始まる
- ハイフンを含む
- ASCII の大文字を含まない
- ASCII のホワイトスペース、`NULL`、`/`、`>` （それぞれ U+0000, U+002F, U+003E）を含まない
- 次のいずれでもない
  - "annotation-xml"
  - "color-profile"
  - "font-face"
  - "font-face-src"
  - "font-face-uri"
  - "font-face-format"
  - "font-face-name"
  - "missing-glyph"

## 例

### 自律カスタム要素

次のクラスは、最小限の自律カスタム要素を実装します。

```js
class MyAutonomousElement extends HTMLElement {
  constructor() {
    super();
  }
}
```

この要素は何もしません。実際の自律型要素であれば、その機能はコンストラクターや、標準規格で指定されたライフサイクルコールバック内で実装されるはずです。
カスタム要素の扱い方に関するガイドの[カスタム要素の実装](/ja/docs/Web/API/Web_components/Using_custom_elements)を参照してください。

ただし、以上の上のクラス定義は `define()` メソッドの要件を満たしているため、次のコードで定義することができます。

```js
customElements.define("my-autonomous-element", MyAutonomousElement);
```

それを HTML ページで同様に使用することができます。

```html
<my-autonomous-element>要素のコンテンツ</my-autonomous-element>
```

### カスタム組み込み要素の定義

以下のクラスは、カスタム組み込み要素を実装します。

```js
class MyCustomizedBuiltInElement extends HTMLParagraphElement {
  constructor() {
    super();
  }
}
```

この要素は、組み込みの {{htmlelement("p")}} 要素を拡張したものです。

この最小限の例では、この要素はカスタマイズを一切実装していないため、通常の `<p>` 要素とまったく同じように動作します。
ただし、`define()` の要件は満たしているため、次のように定義することができます。

```js
customElements.define(
  "my-customized-built-in-element",
  MyCustomizedBuiltInElement,
  {
    extends: "p",
  },
);
```

HTML ページでこれを次のように使用することができます。

```html
<p is="my-customized-built-in-element"></p>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [カスタム要素の使用](/ja/docs/Web/API/Web_components/Using_custom_elements)
