---
title: "<mark>: テキストマーク要素"
slug: Web/HTML/Reference/Elements/mark
original_slug: Web/HTML/Element/mark
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`<mark>`** は [HTML](/ja/docs/Web/HTML) の要素で、周囲の文脈での関連性によって参照したり表記したりする目的でマーク付けされたり強調表示されたりするテキストを表します。

{{InteractiveExample("HTML デモ: &lt;mark&gt;", "tabbed-shorter")}}

```html interactive-example
<p>Search results for "salamander":</p>

<hr />

<p>
  Several species of <mark>salamander</mark> inhabit the temperate rainforest of
  the Pacific Northwest.
</p>

<p>
  Most <mark>salamander</mark>s are nocturnal, and hunt for insects, worms, and
  other small creatures.
</p>
```

```css interactive-example
/* stylelint-disable-next-line block-no-empty */
mark {
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)以外の属性はありません。

## 使用上のメモ

`<mark>` のよくある利用方法は以下のようなものです。

- 引用 ({{HTMLElement("q")}}) またはブロック引用 ({{HTMLElement("blockquote")}}) の中で使用される場合は、ふつう原文で特にマークされていなくても特別な関心事となる文字列、または原文の筆者が特に重要だと考えていなかったことでも、特別に精査が必要な部分を示します。本の中で興味のある部分が見つかったときに、蛍光ペンを使ってマークするようなものだと考えてください。
- それ以外に、 `<mark>` はユーザーの現在の行動に関する文書中の部分を示します。これは例えば、検索操作で検索された語を示す場合などに使用されます。
- `<mark>` を（ソースコードなどの）構文の強調には使用しないで下さい。{{HTMLElement("span")}} 要素とそれに適用する適切な CSS を使用してください。

> [!NOTE]
> `<mark>` 要素と {{HTMLElement("strong")}} 要素を混同しないよう注意してください。 `<mark>` は*関連性*のあるコンテンツを表すために使用されますが、 `<strong>` は*重要性*のある文字列の区間を表します。

## 例

### 関心のある文字列のマーク

最初の例では `<mark>` 要素を使用して、引用の中でユーザーに特定の関心を引く部分の文字列をマークしています。

```html
<blockquote>
  It is a period of civil war. Rebel spaceships, striking from a hidden base,
  have won their first victory against the evil Galactic Empire. During the
  battle, <mark>Rebel spies managed to steal secret plans</mark> to the Empire's
  ultimate weapon, the DEATH STAR, an armored space station with enough power to
  destroy an entire planet.
</blockquote>
```

出力結果は以下のようになります。

{{EmbedLiveSample("Marking_text_of_interest", 650, 130)}}

### 文脈に依存する部分の識別

この例では `<mark>` を使用して一節の中の検索結果をマークしています。

```html
<p>
  It is a dark time for the Rebellion. Although the Death Star has been
  destroyed, <mark class="match">Imperial</mark> troops have driven the Rebel
  forces from their hidden base and pursued them across the galaxy.
</p>

<p>
  Evading the dreaded <mark class="match">Imperial</mark> Starfleet, a group of
  freedom fighters led by Luke Skywalker has established a new secret base on
  the remote ice world of Hoth.
</p>
```

検索結果に対する `<mark>` の使用を他の使い方と区別しやすくするように、この例ではそれぞれの一致部分に `"match"` カスタムクラスを適用しています。

結果は以下のようになります。

{{EmbedLiveSample("Identifying_context-sensitive_passages", 650, 130)}}

## アクセシビリティの考慮

`mark` 要素が存在することは、多くの読み上げ技術の既定の設定ではアナウンスされません。 CSS の {{cssxref("::before")}} および {{cssxref("::after")}} 擬似要素と共に {{cssxref("content")}} プロパティを使うことでアナウンスさせることができます。

```css
mark::before,
mark::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

mark::before {
  content: " [強調開始] ";
}

mark::after {
  content: " [強調終了] ";
}
```

スクリーンリーダーを使用する人によっては、特に冗長になるコンテンツのアナウンスを意図的に無効にしていることがあります。このため、この手法を悪用しないようにすることは重要であり、コンテンツが強調されていることを知らないと理解に影響するような場面でのみ使用するようにしてください。

- [Short note on making your mark (more accessible) | The Paciello Group](https://www.tpgi.com/short-note-on-making-your-mark-more-accessible/)
- [Tweaking Text Level Styles | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

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
      <td>なし。開始タグと終了タグの両方が必須です。</td>
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
