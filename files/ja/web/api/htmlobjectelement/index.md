---
title: HTMLObjectElement
slug: Web/API/HTMLObjectElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ APIRef("HTML DOM") }}

**`HTMLObjectElement`** インターフェイスは、外部リソースを表す {{HTMLElement("object")}} 要素のレイアウトや表示を操作するための特別なプロパティとメソッド（継承によって利用できる {{domxref("HTMLElement")}} インターフェイスのもの以外のもの）を提供するものです。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティがあります。_

- {{domxref("HTMLObjectElement.align")}} {{deprecated_inline}}
  - : 文字列で、列挙型のプロパティを表し、要素のコンテンツが周囲のコンテキストに対して整列していることを示します。指定可能な値は `"left"`, `"right"`, `"justify"`, `"center"` です。
- {{domxref("HTMLObjectElement.archive")}} {{deprecated_inline}}
  - : HTML の [`archive`](/ja/docs/Web/HTML/Element/object#archive) 属性を反映した文字列で、このオブジェクトのリソースのアーカイブのリストを示します。
- {{domxref("HTMLObjectElement.border")}} {{deprecated_inline}}
  - : HTML の [`border`](/ja/docs/Web/HTML/Element/object#border) 属性を反映した文字列で、オブジェクトの周りにある境界の幅を指定します。
- {{domxref("HTMLObjectElement.code")}} {{deprecated_inline}}
  - : アプレットのクラスファイルの名前を表す文字列で、アプレットのサブクラス、またはクラスファイル自体を含むクラスにアクセスするためのパスが入ります。
- {{domxref("HTMLObjectElement.codeBase")}} {{deprecated_inline}}
  - : HTML の [`codebase`](/ja/docs/Web/HTML/Element/object#codebase) 属性を反映した文字列で、相対 URI を解決するために使用する基底パスを指定します。
- {{domxref("HTMLObjectElement.codeType")}} {{deprecated_inline}}
  - : HTML の [`codetype`](/ja/docs/Web/HTML/Element/object#codetype) 属性を反映した文字列で、データのコンテンツ型を指定します。
- {{domxref("HTMLObjectElement.contentDocument")}} {{ReadOnlyInline}}
  - : この object 要素のネストされた閲覧コンテキストのアクティブな文書を表す {{domxref("Document")}} があればそれを返し、なければ `null` を返します。
- {{domxref("HTMLObjectElement.contentWindow")}} {{ReadOnlyInline}}
  - : この object 要素のネストされた閲覧コンテキストのウィンドウプロキシーがあればそれを表す {{glossary("WindowProxy")}} を返し、なければ `null` を返します。
- {{domxref("HTMLObjectElement.data")}}
  - : HTML の [`data`](/ja/docs/Web/HTML/Element/object#data) 属性を反映した文字列で、リソースのデータのアドレスを指定するものを返します。
- {{domxref("HTMLObjectElement.declare")}} {{deprecated_inline}}
  - : HTML の [`declare`](/ja/docs/Web/HTML/Element/object#declare) 属性を反映した論理値で、これがオブジェクトのインスタンス化ではなく宣言であることを示します。
- {{domxref("HTMLObjectElement.form")}} {{ReadOnlyInline}}
  - : このオブジェクトのフォームオーナーを表す {{domxref("HTMLFormElement")}} を返します。存在しなければ null を返します。
- {{domxref("HTMLObjectElement.height")}}
  - : HTML の [`height`](/ja/docs/Web/HTML/Element/object#height) 属性を反映した文字列で、リソースが表示される高さを CSS ピクセル数で指定する値を返します。
- {{domxref("HTMLObjectElement.hspace")}} {{deprecated_inline}}
  - : `long` で、このコントロールの周囲にある水平方向の空間をピクセル数で表します。
- {{domxref("HTMLObjectElement.name")}}
  - : HTML の [`name`](/ja/docs/Web/HTML/Element/object#name) 属性を反映した文字列で、閲覧コンテキストの名前を示すものを返します。
- {{domxref("HTMLObjectElement.standby")}} {{deprecated_inline}}
  - : HTML の [`standby`](/ja/docs/Web/HTML/Element/object#standby) 属性を反映した文字列で、オブジェクトの読み込み中に表示されるメッセージを指定します。
- {{domxref("HTMLObjectElement.type")}}
  - : HTML の [`type`](/ja/docs/Web/HTML/Element/object#type) 属性を反映した文字列で、リソースの MIME タイプを指定します。
- {{domxref("HTMLObjectElement.useMap")}}
  - : HTML の [`usemap`](/ja/docs/Web/HTML/Element/object#usemap) 属性を反映した文字列で、使用する {{HTMLElement("map")}} 要素を指定します。
- {{domxref("HTMLObjectElement.validationMessage")}} {{ReadOnlyInline}}
  - : コントロールが満たしていない制約検証を説明する、ローカライズされたメッセージを（もしあれば）文字列で返します。コントロールが制約検証の候補でない場合（`willValidate` が `false` である場合）、あるいは制約を満たしている場合には、これは空文字列となります。
- {{domxref("HTMLObjectElement.validity")}} {{ReadOnlyInline}}
  - : この要素が属する有効状態を {{domxref("ValidityState")}} で返します。
- {{domxref("HTMLObjectElement.vspace")}} {{deprecated_inline}}
  - : `long` で、このコントロールの周囲にある垂直方向の空間をピクセル数で表します。
- {{domxref("HTMLObjectElement.width")}}
  - : HTML の [`width`](/ja/docs/Web/HTML/Element/object#width) 属性を反映した文字列で、リソースが表示される幅を CSS ピクセル数で指定する値を返します。
- {{domxref("HTMLObjectElement.willValidate")}} {{ReadOnlyInline}}
  - : その要素が制約検証の候補であるかどうかを示す論理値を返します。 `HTMLObjectElement` オブジェクトの場合は常に `false` です。

## インスタンスメソッド

_親である {{domxref("HTMLElement")}} からメソッドを継承しています。_

- {{domxref("HTMLObjectElement.checkValidity()")}}
  - : `object` オブジェクトは制約検証の候補になることはないので、常に `true` となる論理値を返します。
- {{domxref("HTMLObjectElement.setCustomValidity()")}}
  - : 要素の独自の有効性メッセージを設定します。このメッセージが空文字列でない場合、その要素は独自の有効性エラーが発生しており、検証が通りません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("object")}}
