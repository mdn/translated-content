---
title: "<p>: 段落要素"
slug: Web/HTML/Element/p
l10n:
  sourceCommit: e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{HTMLSidebar}}

**`<p>`** は [HTML](/ja/docs/Web/HTML) の要素で、テキストの段落を表します。段落は視覚メディアにおいては、ふつう隣接するブロックと上下の空白や最初の行の字下げによって隔てられたテキストのブロックとして表現されますが、HTML の段落は画像やフォーム欄などの関連するコンテンツを構造的にまとめることができます。

段落は[ブロックレベル要素](/ja/docs/Glossary/Block-level_content)であり、特徴的なのは `</p>` で閉じる前に他のブロックレベル要素が見つかった場合は自動的に閉じることです。下記の「タグの省略」をご覧ください。

{{EmbedInteractiveExample("pages/tabbed/p.html", "tabbed-standard")}}

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
      <td>
        開始タグは必須。この {{HTMLElement("p")}} 要素の直後に続く要素が {{HTMLElement("address")}},
        {{HTMLElement("article")}}, {{HTMLElement("aside")}},
        {{HTMLElement("blockquote")}}, {{HTMLElement("div")}},
        {{HTMLElement("dl")}}, {{HTMLElement("fieldset")}},
        {{HTMLElement("footer")}}, {{HTMLElement("form")}},
        {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}},
        {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}},
        {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}},
        {{HTMLElement("header")}}, {{HTMLElement("hr")}},
        {{HTMLElement("menu")}}, {{HTMLElement("nav")}},
        {{HTMLElement("ol")}}, {{HTMLElement("pre")}},
        {{HTMLElement("section")}}, {{HTMLElement("table")}},
        {{HTMLElement("ul")}} または別の {{HTMLElement("p")}}
        要素のいずれかである、または親要素内で他のコンテンツがなく親要素が {{HTMLElement("a")}} 要素ではない場合は終了タグを省略することが可能。
      </td>
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
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/structural_roles"
          >paragraph</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>すべて</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLParagraphElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

> **メモ:** `<p>` の `align` 属性は廃止済みであり、使用するべきではありません。

## 例

### HTML

```html
<p>
  これはテキストの最初の段落です。これはテキストの最初の段落です。これはテキストの最初の段落です。これはテキストの最初の段落です。
</p>
<p>
  これはテキストの二番目の段落です。これはテキストの二番目の段落です。これはテキストの二番目の段落です。これはテキストの二番目の段落です。
</p>
```

### 結果

{{EmbedLiveSample('Examples')}}

## 段落のスタイル付け

既定で、ブラウザーは段落を単一の空行で分割します。例えば先頭行を字下げするなど、他の分割方法は {{glossary("CSS")}} で実現することができます。

### HTML

```html
<p>
  Separating paragraphs with blank lines is easiest for readers to scan, but
  they can also be separated by indenting their first lines. This is often used
  to take up less space, such as to save paper in print.
</p>

<p>
  Writing that is intended to be edited, such as school papers and rough drafts,
  uses both blank lines and indentation for separation. In finished works,
  combining both is considered redundant and amateurish.
</p>

<p>
  In very old writing, paragraphs were separated with a special character: ¶,
  the <i>pilcrow</i>. Nowadays, this is considered claustrophobic and hard to
  read.
</p>

<p>
  How hard to read? See for yourself:
  <button data-toggle-text="Oh no! Switch back!">
    Use pilcrow for paragraphs
  </button>
</p>
```

### CSS

```css
p {
  margin: 0;
  text-indent: 3ch;
}

p.pilcrow {
  text-indent: 0;
  display: inline;
}
p.pilcrow + p.pilcrow::before {
  content: " ¶ ";
}
```

### JavaScript

```js
document.querySelector("button").addEventListener("click", (event) => {
  document.querySelectorAll("p").forEach((paragraph) => {
    paragraph.classList.toggle("pilcrow");
  });

  [event.target.innerText, event.target.dataset.toggleText] = [
    event.target.dataset.toggleText,
    event.target.innerText,
  ];
});
```

### 結果

{{EmbedLiveSample('Styling_paragraphs')}}

## アクセシビリティの考慮事項

コンテンツを段落に分割すると、ページのアクセシビリティを向上するのに役立ちます。読み上げソフトやその他の支援技術が、このようなユーザーに前後の段落に飛ぶショートカットを提供することができ、空行によって視覚ユーザーが飛ばし見をすることができるのと同様、コンテンツをざっと見ることができるようになります。

段落間の間隔を広げるために空の `<p>` 要素を使用することは、読み上げ技術の支援の下で操作をしている人にとっては問題になります。読み上げソフトは要素が存在することをアナウンスするものの、その中にはコンテンツが何もないという状況になる可能性があります。これは読み上げソフトを使用している人の利用を混乱させ不満をためる可能性があります。

追加の間隔をあける必要がある場合は、 {{cssxref("margin")}} のような {{glossary("CSS")}} プロパティを使用して効果を得るようにしてください。

```css
p {
  margin-bottom: 2em; // 段落の後の空白を増加させる
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("hr")}}
- {{HTMLElement("br")}}
