---
title: '<figcaption>: 図キャプション要素'
slug: Web/HTML/Element/figcaption
tags:
  - Element
  - HTML
  - HTML grouping content
  - Reference
translation_of: Web/HTML/Element/figcaption
browser-compat: html.elements.figcaption
---
{{HTMLRef}}

**HTML の `<figcaption>` 要素または図キャプション要素**は、親の {{HTMLElement("figure")}} 要素内にあるその他のコンテンツを説明するキャプションや凡例を表します。

{{EmbedInteractiveExample("pages/tabbed/figcaption.html","tabbed-shorter")}}

| [コンテンツカテゴリー](/ja/docs/Web/Guide/HTML/Content_categories) | なし                                                                                                      |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| 許可されている内容                                                 | [フローコンテンツ](/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ)                           |
| タグの省略                                                         | {{no_tag_omission}}                                                                                  |
| 許可されている親要素                                               | {{HTMLElement("figure")}} 要素。 `<figcaption>` 要素は最初または最後の子要素でなければなりません。 |
| 暗黙の ARIA ロール                                                 | [対応するロールなし](https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role)                          |
| 許可されている ARIA ロール                                         | {{ARIARole("group")}}, {{ARIARole("none")}}, {{ARIARole("presentation")}}          |
| DOM インターフェイス                                               | {{domxref("HTMLElement")}}                                                                      |

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## 例

`<figcaption>` の例については、 {{HTMLElement("figure")}} のページを参照して下さい。

## 仕様書

| 仕様書                                                                                                                           | 状態                             | 備考 |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-figcaption-element', '&lt;figcaption&gt;')}}         | {{Spec2('HTML WHATWG')}} |      |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-figcaption-element', '&lt;figcaption&gt;')}} | {{Spec2('HTML5 W3C')}}     |      |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("figure")}} 要素
