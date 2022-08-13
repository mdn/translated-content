---
title: <noscript>
slug: Web/HTML/Element/noscript
tags:
  - Element
  - HTML
  - HTML scripting
  - Reference
  - Web
translation_of: Web/HTML/Element/noscript
---
{{HTMLRef}}

**HTML の `<noscript>` 要素**は、このページ上のスクリプトの種類に対応していない場合や、スクリプトの実行がブラウザーで無効にされている場合に表示する HTML の部分を定義します。

| [コンテンツカテゴリー](/ja/docs/Web/HTML/Content_categories) | [メタデータコンテンツ](/ja/docs/Web/HTML/Content_categories#メタデータコンテンツ)、[フローコンテンツ](/ja/docs/Web/HTML/Content_categories#フローコンテンツ)、[記述コンテンツ](/ja/docs/Web/HTML/Content_categories#記述コンテンツ)                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 許可されている内容                                           | スクリプトの実行が無効かつ {{HTMLElement("head")}} 要素の子孫である場合: 任意の順序で、0 個以上の {{HTMLElement("link")}} 要素、0 個以上の{{HTMLElement("style")}} 要素、0 個以上の {{HTMLElement("meta")}} 要素。 スクリプトの実行が無効かつ {{HTMLElement("head")}} 要素の子孫ではない場合: 任意の[透過的コンテンツ](/ja/docs/Web/Guide/HTML/Content_categories#透過的コンテンツ)、ただし `<noscript>` 要素を入れ子にしてはならない。 上記以外の場合: フローコンテンツ、記述コンテンツ。 |
| タグの省略                                                   | {{no_tag_omission}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 許可されている親要素                                         | 祖先要素に `<noscript>` が存在しない場合に、[記述コンテンツ](/ja/docs/Web/HTML/Content_categories#記述コンテンツ) を受け入れるすべての要素。または、祖先要素に `<noscript>` が存在しない場合に、{{HTMLElement("head")}} 要素 (HTML 文書に限る)。                                                                                                                                                                                                                                                                              |
| 暗黙の ARIA ロール                                           | [対応するロールなし](https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role)                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 許可されている ARIA ロール                                   | 許可されている `role` なし                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| DOM インターフェイス                                         | {{domxref("HTMLElement")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## 例

```html
<noscript>
  <!-- 外部ファイルにリンクするアンカー -->
  <a href="https://www.mozilla.com/">外部リンク</a>
</noscript>
<p>ロック！！</p>
```

### スクリプトが有効になっている場合の表示例

ロック！！

### スクリプトが無効になっている場合の表示例

[外部リンク](https://www.mozilla.com/)

ロック！！

## 仕様書

| 仕様書                                                                                                                       | 状態                             | 備考 |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', 'scripting.html#the-noscript-element', '&lt;noscript&gt;')}}         | {{Spec2('HTML WHATWG')}} |      |
| {{SpecName('HTML5 W3C', 'semantics-scripting.html#the-noscript-element', '&lt;noscript&gt;')}} | {{Spec2('HTML5 W3C')}}     |      |
| {{SpecName('HTML4.01', 'interact/scripts.html#h-18.3.1', '&lt;noscript&gt;')}}                     | {{Spec2('HTML4.01')}}     |      |

## ブラウザーの互換性

{{Compat("html.elements.noscript")}}
