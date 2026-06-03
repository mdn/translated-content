---
title: "Document: createElement() メソッド"
short-title: createElement()
slug: Web/API/Document/createElement
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{APIRef("DOM")}}

**`createElement()`** は {{domxref("Document")}} インターフェイスのメソッドで、`localName` で指定された新しい {{domxref("HTMLElement")}} を生成します。

`localName` が認識できない場合は {{domxref("HTMLUnknownElement")}} を生成します。

## 構文

```js-nolint
createElement(localName)
createElement(localName, options)
```

### 引数

- `localName`
  - : 生成される要素の型を特定する文字列です。
    このメソッドでは、修飾名（"html:a" など）を使用しないでください。
    HTML 文書で呼び出すと、 `createElement()` は要素を生成する前に `localName` を小文字に変換します。 Firefox, Opera, Chrome では、 `createElement(null)` は `createElement("null")` のように動作します。
- `options` {{Optional_Inline}}
  - : 以下のオプションのプロパティを持つオブジェクト（なお、`is` と `customElementRegistry` のどちらかのみを設定できます）。
    - `is` {{Optional_Inline}}
      - : {{domxref("CustomElementRegistry/define", "customElements.define()")}} を使用して、以前定義されたカスタム要素のタグ名を指定する文字列です。
        新しい要素には、そのカスタム要素のタグ名を値とする `is` 属性が指定されます。
        詳しくは[ウェブコンポーネントの例](#ウェブコンポーネントの例)を参照してください。
    - `customElementRegistry` {{Optional_Inline}}
      - : {{domxref("CustomElementRegistry")}} であり、カスタム要素の[スコープ付きカスタム要素レジストリー](/ja/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries)を設定します。

### 返値

新しい {{domxref("Element")}} です。

> [!NOTE]
> 文書が {{domxref("HTMLDocument", "HTMLDocument", "", "1")}} である場合、新しい {{domxref("HTMLElement", "HTMLElement", "", "1")}} を返しますが、これが最も一般的です。それ以外の場合は新しい {{domxref("Element","Element","","1")}} を返します。

### 例外

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : [`localName`](#localname) の値が有効な要素名でない場合に発生します。
    文字列は、長さが 1 文字以上であり、かつ以下の条件を満たす場合、有効な要素名となります。
    - アルファベット文字で始まり、ASCII のホワイトスペース、`NULL`、`/`、`>`（それぞれU+0000、U+002F、U+003E）が含まれていないもの。
    - 先頭が `:` (U+003A)、 `_` (U+005F)、U+0080 以上 U+10FFFF 以下の範囲内の任意の文字で始まり、かつ、残りのコードポイントは、それらの同じ文字に加え、ASCII 英数字、`-` (U+002D)、および `.` (U+002E) のみを含むもの。

    > [!NOTE]
    > 以前のバージョンの仕様書では、より厳しい制限があり、`localName` が有効な [XML 名](https://www.w3.org/TR/xml/#dt-name) であることが要求されていました。

- `NotSupportedError` {{domxref("DOMException")}}
  - : [`is`](#is) および [`customElementRegistry`](#customelementregistry) の両方のオプションが指定された場合、この例外が発生します。

## 例

### 基本的な例

この例では新しい `<div>` を生成し、 id が `div1` である要素の前に挿入します。

#### HTML

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>要素のの操作</title>
  </head>
  <body>
    <div id="div1">上記のテキストは動的に生成されました。</div>
  </body>
</html>
```

#### JavaScript

```js
function addElement() {
  // 新しい div 要素を作成します
  const newDiv = document.createElement("div");

  // いくつかの内容を与えます
  const newContent = document.createTextNode("みなさん、こんにちは！");

  // テキストノードを新規作成した div に追加します
  newDiv.appendChild(newContent);

  // DOM に新しく作られた要素とその内容を追加します
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

addElement();
```

#### 結果

{{EmbedLiveSample("Basic_example", 500, 80)}}

### ウェブコンポーネントの例

> [!NOTE]
> 対応状況については[ブラウザーの互換性](#ブラウザーの互換性)の節を、またカスタマイズされた組み込み要素の実装上の注意点については [`is`](/ja/docs/Web/HTML/Reference/Global_attributes/is) 属性のリファレンスをご確認ください。

以下の例の断片は [expanding-list-web-component](https://github.com/mdn/web-components-examples/tree/master/expanding-list-web-component)
の例から取ったものです（[ライブでもご覧ください](https://mdn.github.io/web-components-examples/expanding-list-web-component/)）。この場合、カスタム要素は {{domxref("HTMLUListElement")}} を拡張し、 {{htmlelement("ul")}} 要素を表します。

```js
// 要素のためのクラスを作成
class ExpandingList extends HTMLUListElement {
  constructor() {
    // コンストラクターでは常に super を最初に呼び出す
    super();

    // コンストラクターの定義は簡略化のため省略します。
    // …
  }
}

// 新しい要素を定義
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

この要素のインスタンスをプログラムで生成したければ、次の行のような呼び出しを使用します。

```js
let expandingList = document.createElement("ul", { is: "expanding-list" });
```

新しい要素には [`is`](/ja/docs/Web/HTML/Reference/Global_attributes/is) 属性が与えられ、その値はカスタム要素のタグ名になります。

> [!NOTE]
> [カスタム要素仕様書](https://www.w3.org/TR/custom-elements/)の以前のバージョンとの後方互換性のため、一部のブラウザーはオブジェクトの代わりに文字列を渡すことを認めており、この文字列はカスタム要素のタグ名です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Node.removeChild()")}}
- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Node.hasChildNodes()")}}
- {{domxref("document.createElementNS()")}} — 要素の名前空間 URI を明示的に指定するために使用
