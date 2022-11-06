---
title: CSSStyleSheet
slug: Web/API/CSSStyleSheet
---

{{APIRef("CSSOM")}}

**`CSSStyleSheet`** インターフェイスは、1 枚の [CSS](/ja/docs/Web/CSS) スタイルシートを表します。これは、その親の {{domxref("StyleSheet")}} からプロパティとメソッドを継承します。

スタイルシートは、_{{domxref("CSSStyleRule", "スタイル規則", "", 1)}}_ _("`h1,h2 { font-size: 16pt }"`)_、様々な _アット規則_ (`@import`, `@media`, ...) 等の _{{domxref("CSSRule", "規則", "", 1)}}_ から構成されます。このインターフェイスは、スタイルシート内の規則のリストを調査および変更できます。

CSSStyleSheet オブジェクトを取得できる様々な方法は、[補記](#notes) セクションを参照してください。

## プロパティ

_親である {{domxref("Stylesheet")}} からプロパティを継承します。_

- {{domxref("CSSStyleSheet.cssRules")}}

  - : 現在の {{domxref("CSSRuleList")}} を返す。これは、スタイルシート内の {{domxref("CSSRule")}} オブジェクトのリストです。
    これは通常、次のように個々の規則へアクセスするために使用されます:

    ```
       styleSheet.cssRules[i] // where i = 0..cssRules.length
    ```

    `cssRules` 内のアイテムを追加または削除するには、下記のように、`CSSStyleSheet` の `deleteRule()` メソッドと `insertRule()` メソッドを使用します。

- {{domxref("CSSStyleSheet.ownerRule")}}
  - : これが {{cssxref("@import")}} 規則を使用して document にインポートされたスタイルシートである場合、`ownerRule` は、その {{domxref("CSSImportRule")}} を返す。そうでない場合、`null` を返す。

## メソッド

_親である {{domxref("Stylesheet")}} からメソッドを継承します。_

- {{domxref("CSSStyleSheet.deleteRule")}}
  - : スタイルシートから、指定した位置の規則を削除する。
- {{domxref("CSSStyleSheet.insertRule")}}
  - : スタイルシート内の指定した位置に新しい規則を挿入する。規則のテキスト表現が与えられます。

## 補記

一部のブラウザーでは、スタイルシートが異なるドメインから読み込まれている場合、`cssRules` の呼び出しで `SecurityError` が発生します。

スタイルシートは、多くても 1 個の {{domxref("Document")}} と関連付けられ、これに適用されます ({{domxref("StyleSheet.disabled", "disabled", "", 1)}} でない限り)。与えられた document の `CSSStyleSheet` オブジェクトのリストは、{{domxref("document.styleSheets")}} プロパティを使用して取得できます。特定のスタイルシートは、もしあれば、その _owner_ オブジェクト (`Node` または `CSSImportRule`) からもアクセスできます。

`CSSStyleSheet` オブジェクトは、document のスタイルシートが読み込まれた時に、ブラウザーによって自動的に作成され、その document の `styleSheets` リストに挿入されます。{{domxref("document.styleSheets")}} リストは直接変更できないため、新しい `CSSStyleSheet` オブジェクトを手動で作成する手ごろな方法はありません (とはいえ、[Constructable Stylesheet Objects](http://tabatkins.github.io/specs/construct-stylesheets/) が Web API のどこかに追加される可能性があります)。新しいスタイルシートを作成するには、{{HTMLElement("style")}} 要素か {{HTMLElement("link")}} 要素を document に挿入してください。

スタイルシートを document と関連付ける方法のリスト (おそらく未完成) は次のとおり:

| スタイルシートが document と関連付けられる理由                                              | `document .styleSheets` リストに現れる | スタイルシートオブジェクトを与える owner 要素または規則の取得        | owner オブジェクトのインターフェイス                                                                                                | CSSStyleSheet オブジェクトを owner から取得                              |
| ------------------------------------------------------------------------------------------- | -------------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| document 内の {{HTMLElement("style")}} 要素と {{HTMLElement("link")}} 要素 | はい                                   | {{domxref("StyleSheet.ownerNode", ".ownerNode")}}     | {{domxref("HTMLLinkElement")}} または {{domxref("HTMLStyleElement")}}、 {{domxref("SVGStyleElement")}} | {{domxref("LinkStyle.sheet", ".sheet")}}                     |
| document に適用される他のスタイルシート内の CSS {{cssxref("@import")}} 規則           | はい                                   | {{domxref("CSSStyleSheet.ownerRule", ".ownerRule")}} | {{domxref("CSSImportRule")}}                                                                                                | {{domxref("CSSImportRule.styleSheet", ".styleSheet")}} |
| (HTML でない) document 内の `<?xml-stylesheet ?>` 処理命令                                  | はい                                   | {{domxref("StyleSheet.ownerNode", ".ownerNode")}}     | {{domxref("ProcessingInstruction")}}                                                                                    | {{domxref("LinkStyle.sheet", ".sheet")}}                     |
| HTTP Link Header                                                                            | はい                                   | _N/A_                                                                | N/A                                                                                                                                 | N/A                                                                      |
| ユーザーエージェントの (既定の) スタイルシート                                              | いいえ                                 | N/A                                                                  | N/A                                                                                                                                 | N/A                                                                      |

## 仕様

| 仕様書                                                                                           | 策定状況                         | 備考     |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName("CSSOM", "#cssstylesheet", 'CSSStyleSheet')}}                     | {{Spec2("CSSOM")}}         |          |
| {{SpecName("DOM2 Style", "css.html#CSS-CSSStyleSheet", "CSSStyleSheet")}} | {{Spec2("DOM2 Style")}} | 初期定義 |

## ブラウザーの実装状況

{{Compat("api.CSSStyleSheet")}}

## 関連情報

- [動的なスタイル情報の利用](/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
