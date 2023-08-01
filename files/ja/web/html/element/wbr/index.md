---
title: "<wbr>: 改行可能要素"
slug: Web/HTML/Element/wbr
l10n:
  sourceCommit: a16e757b697f08201d91de021d523333df6287fc
---

{{HTMLSidebar}}

**`<wbr>`** は [HTML](/ja/docs/Web/HTML) の要素で、改行可能位置 — テキスト内でブラウザーが任意で改行してよい位置を表しますが、この改行規則は必要のない場合は改行を行いません。

{{EmbedInteractiveExample("pages/tabbed/wbr.html", "tabbed-shorter")}}

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## メモ

UTF-8 エンコードを使用するページでは、 `<wbr>` 要素は `U+200B ZERO-WIDTH SPACE` コードポイントのように作用します。特に、この要素は Unicode bidi BN コードポイントのように作用するため、{{Glossary("bidi", "双方向性")}}には影響を与えません。 `<div dir=rtl>123,<wbr>456</div>` が 2 行に分かれないときは `456,123` ではなく `123,456` と表示されます。

同じ理由で、 `<wbr>` 要素は改行位置でハイフンを生成しません。行末にのみハイフンを表示させるには、代わりにソフトハイフンの文字エンティティ (`&shy;`) を使用してください。

## 例

_[The Yahoo Style Guide](https://web.archive.org/web/20121014054923/http://styleguide.yahoo.com/)_ では、句読点などの区切り文字が行末に置かれることを避けるため [URL を句読点の*前*で改行する](https://web.archive.org/web/20121105171040/http://styleguide.yahoo.com/editing/treat-abbreviations-capitalization-and-titles-consistently/website-names-and-addresses)ことを推奨しています。区切り文字が行末にあると、読者が URL の末尾を誤解する可能性があります。

```html
<p>
  http://this<wbr />.is<wbr />.a<wbr />.really<wbr />.long<wbr />.example<wbr />.com/With<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages
</p>
```

### 結果

{{EmbedLiveSample("Example")}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
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
        この要素は{{Glossary("void element", "空要素")}}です。開始タグは必須であり、終了タグを記述してはなりません。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("overflow-wrap")}}
- {{cssxref("word-break")}}
- {{cssxref("hyphens")}}
- {{HTMLElement("br")}} 要素
