---
title: '<pre>: 整形済みテキスト要素'
slug: Web/HTML/Element/pre
---

{{HTMLRef}}

**`<pre>`** は [HTML](/ja/docs/Web/HTML) の要素で、整形済みテキスト (preformatted text) を表します。この要素内のテキストは一般的に、ファイル内でのレイアウトをそのまま反映して[等幅フォント](https://ja.wikipedia.org/wiki/等幅フォント)で表示されます。この要素内のホワイトスペース文字はそのまま表示します。

{{EmbedInteractiveExample("pages/tabbed/pre.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/Guide/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
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
      <td>{{domxref("HTMLPreElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみを持ちます。

- {{htmlattrdef("cols")}} {{non-standard_inline}}{{deprecated_inline}}
  - : 1 行あたりの*望ましい*文字数を示します。これは {{htmlattrxref("width", "pre")}} の標準外の別名です。同様の効果を得るには、CSS の {{Cssxref("width")}} を使用してください。
- {{htmlattrdef("width")}} {{deprecated_inline}}
  - : 1 行あたりの*望ましい*文字数を示します。この属性は技術的には実装されていますが、視覚上の効果はありません。同様の効果を得るには、CSS の {{Cssxref("width")}} を使用してください。
- {{htmlattrdef("wrap")}} {{non-standard_inline}}
  - : テキストがはみ出た場合の処理に関する*ヒント*を示します。現行のブラウザーはこのヒントを無視して、視覚上の効果をもたらしません。同様の効果を得るには、CSS の {{Cssxref("white-space")}} を使用してください。

## 例

### HTML

```html
<!-- CSS コードを表示する例 -->
<pre>
body {
  color: red;
}
</pre>
```

### 結果

{{EmbedLiveSample("Example")}}

## アクセシビリティの考慮

整形済みテキストを使用して作られた絵や図に対して、別な説明を提供することは重要です。この別な説明は、明確かつ簡潔に絵や図の中身を説明するものにしてください。

弱視の人や、読み上げソフトのような支援技術を使用している人は、順番に読んだときに整形済みテキストで表現されているものが何か理解できないかもしれません。

{{HTMLElement("figure")}} および {{HTMLElement("figcaption")}} 要素の組み合わせに、 {{htmlattrxref("id")}} および [ARIA](/ja/docs/Web/Accessibility/ARIA) `role` および `aria-labelledby` 属性を補ったもので、整形済みテキストを図形として扱い、 `figcaption` を図形の別の説明として提供することができます。

### 例

```
<figure role="img" aria-labelledby="cow-caption">
  <pre>
  __________________
< 私は牧場の達人です。>
  ------------------
         \   ^__^
          \  (oo)\_______
             (__)\       )\/\
                 ||----w |
                 ||     ||
  </pre>
  <figcaption id="cow-caption">
    「私は牧場の達人です。」と言っている牛。牛は整形済みテキストで表現されている。
  </figcaption>
</figure>
```

- [MDN "WCAG を理解する ― ガイドライン 1.1 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [H86: Providing text alternatives for ASCII art, emoticons, and leetspeak | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H86.html)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS: {{Cssxref('white-space')}}, {{Cssxref('word-break')}}
- 関連する要素: {{HTMLElement("code")}}
