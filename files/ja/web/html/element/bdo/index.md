---
title: '<bdo>: 双方向文字列上書き要素'
slug: Web/HTML/Element/bdo
tags:
  - BiDi
  - 双方向テキスト
  - 要素
  - HTML
  - HTML 文字レベルの意味付け
  - HTML:フローコンテンツ
  - HTML:知覚可能コンテンツ
  - HTML:記述コンテンツ
  - 左書き
  - リファレンス
  - テキスト
  - 右書き
  - 書字方向
  - テキスト描画
  - Web
  - ltr
  - rtl
translation_of: Web/HTML/Element/bdo
browser-compat: html.elements.bdo
---
{{HTMLRef}}

**`<bdo>`** は [HTML](/ja/docs/Web/HTML) の要素で、現在のテキストの書字方向を上書きし、中のテキストが異なる書字方向で描画されるようにします。

{{EmbedInteractiveExample("pages/tabbed/bdo.html", "tabbed-standard")}}

テキストの文字は指定された方向の開始位置から描画されます。それぞれの文字の向きには影響を与えません (ですから、例えば、文字は裏返しにはなりません)。

| [コンテンツカテゴリー](/ja/docs/Web/Guide/HTML/Content_categories) | [フローコンテンツ](/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ), [記述コンテンツ](/ja/docs/Web/Guide/HTML/Content_categories#記述コンテンツ), 知覚可能コンテンツ          |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 許可されている内容                                                 | [記述コンテンツ](/ja/docs/Web/Guide/HTML/Content_categories#記述コンテンツ)                                                                                                               |
| タグの省略                                                         | {{no_tag_omission}}                                                                                                                                                                  |
| 許可されている親要素                                               | [記述コンテンツ](/ja/docs/Web/Guide/HTML/Content_categories#記述コンテンツ)を受け入れるすべての要素                                                                                       |
| 暗黙の ARIA ロール                                                 | [対応するロールなし](https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role)                                                                                                          |
| 許可されている ARIA ロール                                         | すべて                                                                                                                                                                                    |
| DOM インターフェイス                                               | {{domxref("HTMLElement")}}。Gecko 1.9.2 (Firefox 4) 以前では、Firefox はこの要素に対し [`HTMLSpanElement`](/ja/docs/Web/API/HTMLSpanElement) インターフェイスを実装しています。 |

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- {{htmlattrdef("dir")}}
  - : この要素の内容において、テキストが描画される方向です。以下の値が指定可能です。\* `ltr`: テキストを左から右へ (left-to-right) 向かわせることを意味する指定。
    - `rtl`: テキストを右から左へ (right-to-left) 向かわせることを意味する指定。

## 例

```html
<!-- 書字方向を切り替える -->
<p>This text will go left to right.</p>
<p><bdo dir="rtl">This text will go right
to left.</bdo></p>
```

### 結果

{{EmbedLiveSample('Examples')}}

## メモ

HTML 4 の仕様では、この要素にイベントが指定されていません。イベントは XHTML で追加されました。これは、恐らく見落としでしょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する HTML 要素: {{HTMLElement("bdi")}}
