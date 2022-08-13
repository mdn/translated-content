---
title: '<del>: 削除済み文字列要素'
slug: Web/HTML/Element/del
tags:
  - Deleted Text
  - Element
  - HTML
  - HTML edits
  - Reference
  - Web
  - del
translation_of: Web/HTML/Element/del
---
{{HTMLRef}}

**HTML の `<del>` 要素**は、文書から削除された文字列の範囲を表します。これは例えば、「変更の追跡」や、ソースコードの差分情報を描画するときに使用することができます。 {{HTMLElement("ins")}} 要素は逆の目的に、文書に追加された文字列を示すために用いることができます。

{{EmbedInteractiveExample("pages/tabbed/del.html", "tabbed-standard")}}

一般的にこの要素は (必ずではありませんが) 打ち消し線のスタイルを伴って描画されます。

| [コンテンツカテゴリー](/ja/docs/Web/Guide/HTML/Content_categories) | [記述コンテンツ](/ja/docs/Web/Guide/HTML/Content_categories#記述コンテンツ)、[フローコンテンツ](/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ) |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 許可されている内容                                                 | [透過的コンテンツ](/ja/docs/Web/Guide/HTML/Content_categories#透過的コンテンツ)                                                                              |
| タグの省略                                                         | {{no_tag_omission}}                                                                                                                                     |
| 許可されている親要素                                               | [記述コンテンツ](/ja/docs/Web/Guide/HTML/Content_categories#記述コンテンツ)を受け入れるすべての要素                                                          |
| 暗黙の ARIA ロール                                                 | [対応するロールなし](https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role)                                                                             |
| 許可されている ARIA ロール                                         | すべて                                                                                                                                                       |
| DOM インターフェイス                                               | {{domxref("HTMLModElement")}}                                                                                                                     |

## 属性

この要素は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)を持ちます。

- {{htmlattrdef("cite")}}
  - : 変更についての説明を記したリソース（例えば、議事録など）への URI を示す。
- {{htmlattrdef("datetime")}}
  - : この属性は変更日時を示し、有効な日付文字列と任意の時刻文字列でなくてはなりません。値を時刻および日付の文字列として解釈できない場合は、要素に関連付けられたタイムスタンプはないものと解釈されます。日付のない文字列の書式については、[日付の文字列](/ja/docs/Web/HTML/Date_and_time_formats#date_strings)を参照してください。日付と時刻の両方を含んだ文字列の書式は、[地方時の日付と時刻の文字列](/ja/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings)にあります。

## 例

```html
<p><del>This text has been deleted</del>,
here is the rest of the paragraph.</p>
<del><p>This paragraph has been deleted.</p></del>
```

### 結果

{{EmbedLiveSample("Examples")}}

## アクセシビリティの考慮

`del` 要素が存在することは、多くの読み上げ技術の既定の設定ではアナウンスされません。 CSS の {{cssxref("::before")}} 及び {{cssxref("::after")}} 疑似要素と共に {{cssxref("content")}} プロパティを使うことでアナウンスさせることができます。

    del::before,
    del::after {
      clip-path: inset(100%);
      clip: rect(1px, 1px, 1px, 1px);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    del::before {
      content: " [削除開始] ";
    }

    del::after {
      content: " [削除終了] ";
    }

読み上げソフトを使用する人によっては、特に冗長になるコンテンツのアナウンスを意図的に無効にしていることがあります。このため、この手法を悪用しないようにすることは重要であり、コンテンツが削除されていることを知らないと理解に影響するような場面でのみ使用するようにしてください。

- [Short note on making your mark (more accessible) | The Paciello Group](https://developer.paciellogroup.com/blog/2017/12/short-note-on-making-your-mark-more-accessible/)
- [Tweaking Text Level Styles | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## 仕様書

| 仕様書                                                                                           | 状態                             | 備考 |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', 'edits.html#the-del-element', '&lt;del&gt;')}} | {{Spec2('HTML WHATWG')}} |      |
| {{SpecName('HTML5 W3C', 'edits.html#the-del-element', '&lt;del&gt;')}}     | {{Spec2('HTML5 W3C')}}     |      |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.4', '&lt;del&gt;')}}         | {{Spec2('HTML4.01')}}     |      |

## ブラウザーの互換性

{{Compat("html.elements.del")}}

## 関連情報

- テキストへの挿入を示す {{HTMLElement("ins")}} 要素
- テキストの削除とは異なる抹消を表すための {{HTMLElement("s")}} 要素
