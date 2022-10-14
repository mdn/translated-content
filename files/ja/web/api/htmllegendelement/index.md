---
title: HTMLLegendElement
slug: Web/API/HTMLLegendElement
---

{{ APIRef("HTML DOM") }}

**`HTMLLegendElement`** は、{{HTMLElement("legend")}} 要素のプロパティにアクセスできるようにするインターフェイスです。 {{domxref("HTMLElement")}} インターフェイスからプロパティとメソッドを継承します。

{{InheritanceDiagram(600, 120)}}

## プロパティ

_親の {{domxref("HTMLElement")}} からプロパティを継承します。_

| 名前                             | 説明                                                                                                                                                                                      | 型                                       |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `form` {{readonlyInline}}  | この凡例（legend）が属するフォーム。 凡例に親として `fieldset` 要素がある場合、この属性は親の `fieldset` 要素の **`form`** 属性と同じ値を返します。 それ以外の場合は、`null` を返します。 | {{domxref("HTMLFormElement")}} |
| `accessKey`                      | 要素へのアクセスを与える 1 文字のアクセスキー。                                                                                                                                           | {{domxref("DOMString")}}         |
| `align` {{obsolete_inline}} | フォームのセットに対する相対的な配置。                                                                                                                                                    | {{domxref("DOMString")}}         |

## メソッド

_固有のメソッドはありません。 親の {{domxref("HTMLElement")}} からメソッドを継承します。_

## 仕様書

| 仕様                                                                                                     | 状態                             | コメント                                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "#htmllegendelement", "HTMLLegendElement")}}             | {{Spec2('HTML WHATWG')}} |                                                                                                                       |
| {{SpecName('HTML5.1', "forms.html#the-legend-element", "HTMLLegendElement")}} | {{Spec2('HTML5.1')}}     |                                                                                                                       |
| {{SpecName('HTML5 W3C', "forms.html#the-legend-element", "HTMLLegendElement")}} | {{Spec2('HTML5 W3C')}}     | `accessKey` プロパティが {{domxref("HTMLElement")}} で定義されました。 `align` プロパティが廃止されました。 |
| {{SpecName('DOM2 HTML', 'html.html#ID-21482039', 'HTMLLegendElement')}}         | {{Spec2('DOM2 HTML')}}     | {{SpecName("DOM1")}} からの変更はありません。                                                                 |
| {{SpecName('DOM1', 'level-one-html.html#ID-21482039', 'HTMLLegendElement')}}     | {{Spec2('DOM1')}}         | 初期定義                                                                                                              |

## ブラウザーの互換性

{{Compat("api.HTMLLegendElement")}}

## 関連情報

- このインターフェイスを実装する HTML 要素: {{HTMLElement("legend")}}
