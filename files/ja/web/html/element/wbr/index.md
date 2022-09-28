---
title: <wbr>
slug: Web/HTML/Element/wbr
---

{{HTMLRef}}

**HTML の `<wbr>` 要素**は、改行可能位置 — テキスト内でブラウザーが任意で改行してよい位置を表しますが、この改行規則は必要のない場合は改行を行いません。

{{EmbedInteractiveExample("pages/tabbed/wbr.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/Guide/HTML/Content_categories"
          >コンテンツカテゴリ</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        この要素は{{Glossary("empty element", "空要素")}}です。開始タグは必須であり、終了タグを記述してはなりません。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>すべて</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## メモ

UTF-8 エンコードを使用するページでは、 `<wbr>` 要素は `U+200B` `ZERO-WIDTH SPACE` コードポイントのように作用します。特に、この要素は Unicode bidi BN コードポイントのように作用するため、{{Glossary("bidi", "双方向性")}}には影響を与えません。 `<div dir=rtl>123,<wbr>456</div>` が 2 行に分かれないときは `456,123` ではなく `123,456` と表示されます。

同じ理由で、 `<wbr>` 要素は改行位置でハイフンを生成しません。行末にのみハイフンを表示させるには、代わりにソフトハイフンの文字実体参照 (`&shy;`) を使用してください。

この要素は Internet Explorer 5.5 で最初に実装され、 HTML5 で公式に定義されました。

## 例

_[The Yahoo Style Guide](https://web.archive.org/web/20121105171040/http://styleguide.yahoo.com/)_ では、句読点などの区切り文字が行末に置かれることを避けるため [URL を句読点の*前*で改行する](https://web.archive.org/web/20121105171040/http://styleguide.yahoo.com/editing/treat-abbreviations-capitalization-and-titles-consistently/website-names-and-addresses)ことを推奨しています。区切り文字が行末にあると、読者が URL の末尾を誤解する可能性があります。

```html
<p>http://this<wbr>.is<wbr>.a<wbr>.really<wbr>.long<wbr>.example<wbr>.com/With<wbr>/deeper<wbr>/level<wbr>/pages<wbr>/deeper<wbr>/level<wbr>/pages<wbr>/deeper<wbr>/level<wbr>/pages<wbr>/deeper<wbr>/level<wbr>/pages<wbr>/deeper<wbr>/level<wbr>/pages</p>
```

{{EmbedLiveSample("Example")}}

## 仕様書

| 仕様書                                                                                                           | 状態                             | 備考 |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-wbr-element', '&lt;wbr&gt;')}}             | {{Spec2('HTML WHATWG')}} |      |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-wbr-element', '&lt;wbr&gt;')}} | {{Spec2('HTML5 W3C')}}     |      |

## ブラウザーの互換性

{{Compat("html.elements.wbr")}}

## 関連情報

- {{cssxref("overflow-wrap")}}
- {{cssxref("word-break")}}
- {{cssxref("hyphens")}}
