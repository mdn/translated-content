---
title: '<param>: オブジェクト引数要素'
slug: Web/HTML/Element/param
tags:
  - Element
  - HTML
  - HTML embedded content
  - Reference
  - Web
translation_of: Web/HTML/Element/param
---
{{HTMLRef}}

**HTML の `<param>` 要素**は、{{HTMLElement("object")}} 要素の引数を定義します。

| [コンテンツカテゴリー](/ja/docs/Web/Guide/HTML/Content_categories) | なし                                                                                                                                               |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 許可されている内容                                                 | なし。これは {{Glossary("empty element", "空要素")}} です。                                                                       |
| タグの省略                                                         | 空要素であるため開始タグは必須、また終了タグを置いてはなりません。                                                                                 |
| 許可されている親要素                                               | {{HTMLElement("object")}} の子として、他の[フローコンテンツ](/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ)より前に配置可能。 |
| 暗黙の ARIA ロール                                                 | [対応するロールなし](https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role)                                                                   |
| 許可されている ARIA ロール                                         | 許可されている `role` なし                                                                                                                         |
| DOM インターフェイス                                               | {{domxref("HTMLParamElement")}}                                                                                                           |

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- {{htmlattrdef("name")}}
  - : 引数の名称。
- {{htmlattrdef("value")}}
  - : 引数の値

### 非推奨の属性

- {{htmlattrdef("type")}} {{deprecated_inline}}
  - : `valuetype` が `ref` に設定されている場合にのみ指定可能。`value` の値で指定された URI に存在するオブジェクトの MIME タイプを指定します。
- {{htmlattrdef("valuetype")}} {{deprecated_inline}}
  - : `value` 属性の型を指定します。指定可能な値は以下の通りです。\* `data`: 既定値。値は文字列としてオブジェクトの実装に渡されます。
    - `ref`: 値は、実行時の値が格納されているリソースへの URI です。
    - `object`: 同一文書内の他の {{HTMLElement("object")}} 要素の ID です。

## 例

`<param>` の使用例については、{{HTMLElement("object")}} のページを参照してください。

## 仕様書

| 仕様書                                                                                                                           | 状態                             | 備考 |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', 'iframe-embed-object.html#the-param-element', '&lt;param&gt;')}}         | {{Spec2('HTML WHATWG')}} |      |
| {{SpecName('HTML5 W3C', 'semantics-embedded-content.html#the-param-element', '&lt;param&gt;')}} | {{Spec2('HTML5 W3C')}}     |      |
| {{SpecName('HTML4.01', 'struct/objects.html#h-13.3.2', '&lt;param&gt;')}}                                 | {{Spec2('HTML4.01')}}     |      |

## ブラウザーの互換性

{{Compat("html.elements.param")}}

## 関連情報

- {{HTMLElement("object")}}
