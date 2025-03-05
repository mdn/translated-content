---
title: SVGElement
slug: Web/API/SVGElement
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("SVG")}}

SVG DOM インターフェイスはすべて、 SVG 言語の各要素に直接対応するものであり、 `SVGElement` インターフェイスから派生しています。

{{InheritanceDiagram}}

## 属性

_{{DOMxRef("Element")}} インターフェイスから継承したプロパティもあります。_

- {{DOMxRef("SVGElement.attributeStyleMap")}} {{ReadOnlyInline}}
  - : {{DOMxRef("StylePropertyMap")}} で、要素の {{SVGAttr("style")}} 属性の宣言を表します。
- {{DOMxRef("SVGElement.dataset")}} {{ReadOnlyInline}}
  - : {{DOMxRef("DOMStringMap")}} オブジェクトで、要素に添付された[カスタムデータ属性](/ja/docs/Learn/HTML/Howto/Use_data_attributes)に対応する、名前つきデータ属性のキーと値の組のリストを提供します。これらの組は SVG でも {{SVGAttr("data-*")}} の形で定義することができ、 `*` が、その組のキー名です。これは、HTML の {{DOMxRef("HTMLElement.dataset")}} 属性および HTML の [`data-*`](/ja/docs/Web/HTML/Global_attributes/data-*) グローバル属性と同様に動作します。
- {{DOMxRef("SVGElement.className")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : {{DOMxRef("SVGAnimatedString")}} で、指定された要素上の {{SVGAttr("class")}} 属性の値を反映します。 `class` が存在しない場合は空文字列になります。この属性は非推奨であり、この仕様の将来のバージョンでは削除されるかもしれません。代わりに {{DOMxRef("Element.classList")}} を使用することをお勧めします。
- {{DOMxRef("SVGElement.nonce")}}
  - : コンテンツセキュリティポリシーが、指定された取得の続行が許可されるかどうかを決定するために一度だけ使用される暗号化番号を返します。
- {{DOMxRef("SVGElement.ownerSVGElement")}} {{ReadOnlyInline}}
  - : {{DOMxRef("SVGSVGElement")}} で、直近の先祖の {{SVGElement("svg")}} 要素を参照します。もし、指定された要素が最も外側の `<svg>` 要素であれば `null` になります。
- {{DOMxRef("SVGElement.style")}}
  - : {{DOMxRef("CSSStyleDeclaration")}} で、この要素の {{SVGAttr("style")}} 属性の宣言を表します。
- {{DOMxRef("SVGElement.tabIndex")}}
  - : タブ順序における要素の位置です。
- {{DOMxRef("SVGElement.viewportElement")}} {{ReadOnlyInline}}
  - : 現在のビューポートを確立した `SVGElement` です。多くの場合は、直近の先祖の {{SVGElement("svg")}} 要素です。もし、与えられた要素が最も外側の `<svg>` 要素であれば、`null` です。

## メソッド

_このインターフェイスにはメソッドがありませんが、 {{DOMxRef("Element")}} から継承したメソッドがあります。_

## イベント

これらのイベントは [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を使用するか、イベントハンドラーを等価な `on...` ハンドラープロパティに代入するかして待ち受けしてください。

- [`abort`](/ja/docs/Web/API/SVGElement/abort_event)
  - : SVG 要素が完全に読み込まれる前に、ページの読み込みが停止されたときに発生します。
- [`error`](/ja/docs/Web/API/SVGElement/error_event)
  - : SVG 要素が正しく読み込まれなかったり、スクリプトの実行中にエラーが発生したりしたときに発生します。
- [`load`](/ja/docs/Web/API/SVGElement/load_event)
  - : `SVGElement` がブラウザーに読み込まれたときに発生します。
- [`resize`](/ja/docs/Web/API/SVGElement/resize_event)
  - : SVG 文書がリサイズされたときに発生します。
- [`scroll`](/ja/docs/Web/API/SVGElement/scroll_event)
  - : SVG 文書ビューが X 軸や Y 軸に沿って移動されたときに発生します。
- [`unload`](/ja/docs/Web/API/SVGElement/unload_event)
  - : DOM 実装が SVG 文書をウィンドウやフレームから除去するときに発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML [`data-*`](/ja/docs/Web/HTML/Global_attributes/data-*) 属性
- SVG {{SVGAttr("data-*")}} 属性
- [HTML におけるカスタムデータ属性の使用](/ja/docs/Learn/HTML/Howto/Use_data_attributes)
