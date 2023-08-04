---
title: "<strong>: 強い重要性要素"
slug: Web/HTML/Element/strong
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`<strong>`** は [HTML](/ja/docs/Web/HTML) の要素で、内容の重要性、重大性、または緊急性が高いテキストを表します。ブラウザーは一般的に太字で描画します。

{{EmbedInteractiveExample("pages/tabbed/strong.html", "tabbed-shorter")}}

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## 使用上のメモ

`<strong>` 要素は「強い重要性」のある内容、つまり（警告など）高い重大性や緊急性のある物事のためのものです。これは、ページ全体にとって非常に重要な文である可能性があります。または、いくつかの単語が周囲のコンテンツと比較して重要であると指摘することができます。

通常、この要素は既定で太字で表示されます。しかし、単に太字にするために使用*しない*でください。そのような用途には CSS の {{cssxref("font-weight")}} プロパティを使用してください。高い水準の重要性を示すことなく、あるテキストに注意を引かせたい場合は {{HTMLElement("b")}} 要素を使用してください。強調する文字列をマークしたい場合は {{HTMLElement("em")}} 要素を使用してください。

他に、ページのテキストの中でメモや警告を表す段落のラベルを記述することも `<strong>` の許容される使い方です。

### \<b> と \<strong>

新しい開発者をよく悩ませることが、ウェブサイトの表示において同じことを表現するために、なぜたくさんの方法があるかということです。{{HTMLElement("b")}} と `<strong>` はもっともよくある混乱の源で、開発者に「`<b>` と `<strong>` のどちらを使えばいいんですか？どちらも同じことをするんでしょう？」という疑問を起こします。

それは正しくありません。`<strong>` 要素はより高い重要性を持つコンテンツのためのものであるのに対し、 `<b>` 要素はより重要であるという意味なしに、テキストに注意を引かせるために使用します。

HTML ではどちらも有効で意味のある要素であり、ほとんどのブラウザーでは、同じ既定のスタイル（太字）が使用されていることは間違いありません（ただし、古いブラウザーの中には `<strong>` に下線を引くものもあります）。それぞれの要素は特定の種類のシナリオで使用するためのものです。単に装飾のために太字のテキストを使用する場合は、代わりに CSS の {{cssxref("font-weight")}} プロパティを使用してください。

囲まれたテキストの意図された意味または目的によって、使用する要素を決定してください。伝えられる意味がどのような意味であるかがすべてです。

### \<em> と \<strong>

この混乱に加えて、 HTML 4 では `<strong>` を単により強い強調としていましたが、 HTML 5 では `<strong>` を「内容の強い重要性」を表すもの定義しています。これは重要な違いです。

`<em>` が（「私はにんじんが\<em>好きです\<em>」と「私は\<em>にんじんが\<em>好きです」のように）発音の強調によって文の意味が変わる場合に使用するのに対し、`<strong>` は（例えば「**警告！**これは**とても危険です**」のように）文の一部に重要性を加えるために使用します。 `<strong>` と `<em>` のどちらも入れ子にして、それぞれ相対的な重要度や強調度を高めるためことができます。

## 例

### 基本的な例

```html
<p>
  作業を進める前に、<strong>必ず安全ゴーグルを装着してください</strong>。
</p>
```

結果は次のようになります。

{{EmbedLiveSample("Basic_example", 650, 80)}}

### 警告のラベル表示

```html
<p>
  <strong>重要:</strong> その前に、バターをたっぷり追加してください。
</p>
```

結果は次のようになります。

{{EmbedLiveSample("Labeling_warnings", 650, 80)}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >, 知覚可能コンテンツ
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
      <td>なし、開始タグと終了タグの両方が必要。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素、または<a
          href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素。
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

- {{HTMLElement("b")}} 要素
- {{HTMLElement("em")}} 要素
- {{cssxref("font-weight")}} プロパティ
