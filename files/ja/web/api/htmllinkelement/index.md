---
title: HTMLLinkElement
slug: Web/API/HTMLLinkElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ APIRef("HTML DOM") }}

**`HTMLLinkElement`** インターフェイスは、外部リソースの参照情報と、それらのリソースと文書の関係（またはその逆）を表します（[`<link>`](/ja/docs/Web/HTML/Element/link) 要素に対応します。 [`HTMLAnchorElement`](/ja/docs/Web/API/HTMLAnchorElement) で表される [`<a>`](/ja/docs/Web/HTML/Element/a) 要素と混同しないでください）。このオブジェクトは {{domxref("HTMLElement")}} インターフェイスのすべてのプロパティとメソッドを継承します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティがあります。_

- {{domxref("HTMLLinkElement.as")}}
  - : 文字列で、この HTML リンクによって読み込まれるコンテンツの種類を表します。
- {{domxref("HTMLLinkElement.crossOrigin")}}
  - : 文字列で、このリンク要素の CORS 設定に対応します。詳細については、 [CORS 設定属性](/ja/docs/Web/HTML/Attributes/crossorigin)を参照してください。
- {{domxref("HTMLLinkElement.disabled")}}
  - : 論理値で、リンクが無効であるかどうかを表します。現在、スタイルシートリンクでのみ使用されています。
- {{domxref("HTMLLinkElement.fetchPriority")}} {{experimental_inline}}
  - : オプションの文字列で、ブラウザーが先読みの取得を他の同じ種類のリソースと比較してどのように優先させるべきかというヒントを表します。この値を指定した場合、許可された値のいずれかでなければなりません。高い優先度で取得する場合は `high`、低い優先度で取得する場合は `low`、優先度を指定しない場合は `auto` （既定値）となります。
- {{domxref("HTMLLinkElement.href")}}
  - : 文字列で、対象リソースの URI を表します。
- {{domxref("HTMLLinkElement.hreflang")}}
  - : 文字列で、リンク先リソースの言語コードを表します。
- {{domxref("HTMLLinkElement.media")}}
  - : 文字列で、リソースに適用される 1 つ以上のメディア形式のリストを表します。
- {{domxref("HTMLLinkElement.referrerPolicy")}}
  - : 文字列で、使用するリファラーを示す HTML の [`referrerpolicy`](/ja/docs/Web/HTML/Element/link#referrerpolicy) 属性を反映します。
- {{domxref("HTMLLinkElement.rel")}}
  - : 文字列で、リンク元文書からリンク先リソースに対する関連性を表します。
- {{domxref("HTMLLinkElement.relList")}} {{ReadOnlyInline}}
  - : {{domxref("DOMTokenList")}} で、 HTML の [`rel`](/ja/docs/Web/HTML/Element/link#rel) 属性をトークンのリストとして反映します。
- {{domxref("HTMLLinkElement.sizes")}} {{ReadOnlyInline}}
  - : {{domxref("DOMTokenList")}} で、トークンのリストとして HTML の [`sizes`](/ja/docs/Web/HTML/Element/link#sizes) 属性を反映します。
- {{domxref("HTMLLinkElement.sheet")}} {{ReadOnlyInline}}
  - : 指定された要素に関連付けられた {{domxref("StyleSheet")}} オブジェクトを返します。存在しない場合は `null` を返します。
- {{domxref("HTMLLinkElement.type")}}
  - : 文字列で、リンク先リソースの MIME タイプを表します。

### 廃止されたプロパティ

- {{domxref("HTMLLinkElement.charset")}} {{deprecated_inline}}
  - : 文字列で、対象リソースの文字エンコーディングを表します。
- {{domxref("HTMLLinkElement.rev")}} {{deprecated_inline}}

  - : 文字列で、リソースからこの文書に対してリンクされたリソースの逆相の関係を表します。

    > [!NOTE]
    > 現在、W3C HTML 5.2 仕様では `rev` は廃止ではないとされていますが、WHATWG living standard では廃止というラベルが貼られたままになっています。この矛盾が解決されるまでは、廃止であると考えるべきでしょう。

- {{domxref("HTMLLinkElement.target")}} {{deprecated_inline}}
  - : 文字列で、リソースが適用する対象フレームの名前を表します。

## インスタンスメソッド

_固有のメソッドはありません。親である {{domxref("HTMLElement")}} から継承したメソッドがあります。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("link")}}
