---
title: "<sup>: 上付き文字要素"
slug: Web/HTML/Element/sup
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`<sup>`** は [HTML](/ja/docs/Web/HTML) の要素で、表記上の理由で上付き文字として表示するべきインラインテキストを指定します。上付き文字は普通、小さめのテキストを使用して高いベースラインで表示されます。

{{EmbedInteractiveExample("pages/tabbed/sup.html", "tabbed-shorter")}}

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## 使用上のメモ

`<sup>` 要素は、単純に表現や表示の結果を得るためではなく、表記規則上の理由、つまり、表記上の習慣や規則でテキストの位置を変更する必要がある場合にのみ使用してください。

例えば、高いベースラインを使用しているビジネスや製品の[ワードマーク](https://ja.wikipedia.org/wiki/ワードマーク)をスタイル付けするには、`<sup>` ではなく CSS を使用してください（例えば {{cssxref("vertical-align")}}）。例えば、 `vertical-align: super` とするか、ベースラインを 50% 上げるのであれば、`vertical-align: 50%` とするかしてください。

`<sup>` の適切な使用例には次のようなものがあります (但し、制約するものではありません)。

- べき乗の表示、例えば "x<sup>3</sup>"。これには、特に複雑な場合には、 [MathML](/ja/docs/Web/MathML) の使用を検討する価値があるかもしれません。以下の[例](#例)の[べき乗](#べき乗)を参照してください
- 一部の言語で特定の略語を表示する際の [Superior letter](https://en.wikipedia.org/wiki/Superior_letter)。例えば、フランス語では、 "mademoiselle" は "M<sup>lle</sup>" のように略すことができます。例は [Superior lettering](#superior_lettering) を参照してください。
- 序数の表現、たとえば "fourth." を "4<sup>th</sup>" と表現すること。例は[序数](#序数)を参照してください。

## 例

### べき乗

以下のようにべき乗は、上付き文字のもっとも一般的な使い方です。

```html
<p>
  物理学の中でもっとも有名な等式の一つが、 <var>E</var>=<var>m</var><var>c</var><sup>2</sup> です。
</p>
```

#### 結果

{{EmbedLiveSample("Exponents", 650, 80)}}

### Superior lettering

Superior lettering は、厳密には上付き文字と同じではありません。しかし、 HTML で superior lettering を表現することは `<sup>` の一般的な利用方法です。最も多い superior lettering の使用例はフランス語の略語の表現です。

```html
<p>Robert a présenté son rapport à M<sup>lle</sup> Bernard.</p>
```

#### 結果

{{EmbedLiveSample("Superior_lettering", 650, 80)}}

### 序数

英語の "fourth" やスペイン語の "quinto" などの序数は、数字と上付き文字で表示される言語に依存したテキストを使用して略されることがあります。

```html
<p>
  The ordinal number "fifth" can be abbreviated in various languages as follows:
</p>
<ul>
  <li>English: 5<sup>th</sup></li>
  <li>French: 5<sup>ème</sup></li>
</ul>
```

#### 結果

{{EmbedLiveSample("Ordinal_numbers", 650, 160)}}

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
      <td>{{no_tag_omission}}</td>
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

- 下付き文字を表現する HTML の {{HTMLElement("sub")}} 要素。なお、`sub` と `sup` を同時に使用することはできません。化学式で上付き文字と下付き文字の両方が必要な場合には、[MathML](/ja/docs/Web/MathML) を用いる必要があります。
- MathML 要素: [`<msub>`](/ja/docs/Web/MathML/Element/msub), [`<msup>`](/ja/docs/Web/MathML/Element/msup), [`<msubsup>`](/ja/docs/Web/MathML/Element/msubsup)
- CSS の {{cssxref("vertical-align")}} プロパティ
