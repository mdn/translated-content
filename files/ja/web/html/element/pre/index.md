---
title: "<pre>: 整形済みテキスト要素"
slug: Web/HTML/Element/pre
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`<pre>`** は [HTML](/ja/docs/Web/HTML) の要素で、整形済みテキスト (preformatted text) を表します。この要素内のテキストは一般的に、ファイル内でのレイアウトをそのまま反映して[等幅フォント](https://ja.wikipedia.org/wiki/等幅フォント)で表示されます。この要素内のホワイトスペース文字はそのまま表示します。

{{EmbedInteractiveExample("pages/tabbed/pre.html", "tabbed-standard")}}

`<pre>` タグ内で `<`、`>`、`&`、`"` などの予約文字を表示する必要がある場合は、それぞれの [HTML エンティティ](/ja/docs/Glossary/Entity)を用いてエスケープする必要があります。

## 属性

この要素は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

- `cols` {{non-standard_inline}} {{deprecated_inline}}
  - : 1 行あたりの*望ましい*文字数を示します。これは [`width`](#width) の標準外の別名です。同様の効果を得るには、CSS の {{Cssxref("width")}} を使用してください。
- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 1 行あたりの*望ましい*文字数を示します。この属性は技術的には実装されていますが、視覚上の効果はありません。同様の効果を得るには、CSS の {{Cssxref("width")}} を使用してください。
- `wrap` {{non-standard_inline}} {{Deprecated_Inline}}
  - : テキストがはみ出た場合の処理に関する*ヒント*を示します。現行のブラウザーはこのヒントを無視して、視覚上の効果をもたらしません。同様の効果を得るには、CSS の {{Cssxref("white-space")}} を使用してください。

## アクセシビリティの考慮

整形済みテキストを使用して作成した画像や図には、代替説明を提供することが重要です。代替説明は、画像や図のコンテンツを明確かつ簡潔に記述する必要があります。

弱視の人やスクリーンリーダーなどの支援技術を使って閲覧している人は、整形済みテキスト文字が順番に読み上げられたときに何を表しているのか理解できないかもしれません。

{{HTMLElement("figure")}} 要素と {{HTMLElement("figcaption")}} 要素の組み合わせや、`pre` 要素の [ARIA](/ja/docs/Web/Accessibility/ARIA) の `role` と [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-label) 属性によって補われます。整形済み ASCII アートは代替テキストを持つ画像としてアナウンスされ、`figcaption` は画像のキャプションとして機能します。

### 例

```html
<figure>
  <pre role="img" aria-label="ASCII COW">
      __________________
  &lt; 私は牧場の達人です。&gt;
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

- [MDN「WCAG を理解する」ガイドライン 1.1 の説明](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#ガイドライン_1.1_—_非テキストコンテンツのための代替テキストの提供)
- [H86: Providing text alternatives for ASCII art, emoticons, and leetspeak | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H86.html)

## 例

### 基本的な例

#### HTML

```html
<p>CSS を使用してフォントの色を変更するのは簡単です。</p>
<pre>
body {
  color: red;
}
</pre>
```

#### 結果

{{EmbedLiveSample("Basic_example")}}

### 予約文字のエスケープ

#### HTML

```html
<pre>
let i = 5;

if (i &lt; 10 &amp;&amp; i &gt; 0)
  return &quot;1 桁の数値&quot;
</pre>
```

#### 結果

{{EmbedLiveSample("Escaping_reserved_characters")}}

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
        >、知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
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
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS: {{Cssxref('white-space')}}, {{Cssxref('word-break')}}
- [HTML エンティティ](/ja/docs/Glossary/Entity)
- 関連する要素: {{HTMLElement("code")}}
