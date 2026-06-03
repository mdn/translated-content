---
title: "<p>: 段落要素"
slug: Web/HTML/Reference/Elements/p
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

**`<p>`** は [HTML](/ja/docs/Web/HTML) の要素で、テキストの段落を表します。段落は視覚メディアにおいては、ふつう隣接するブロックと上下の空白や最初の行の字下げによって隔てられたテキストのブロックとして表現されますが、HTML の段落は画像やフォーム欄などの関連するコンテンツを構造的にまとめることができます。

段落は[ブロックレベル要素](/ja/docs/Glossary/Block-level_content)であり、特徴的なのは `</p>` で閉じる前に他のブロックレベル要素が見つかった場合は自動的に閉じることです。下記の「タグの省略」をご覧ください。

{{InteractiveExample("HTML デモ: &lt;p&gt;", "tabbed-standard")}}

```html interactive-example
<p>
  ヤモリは通常小型で夜行性のトカゲの一群である。南極大陸を除くすべての大陸に生息している。
</p>

<p>
  ある種は、人工的な光に誘われて集まる昆虫を捕食するために、家屋に生息している。
</p>
```

```css interactive-example
p {
  margin: 10px 0;
  padding: 5px;
  border: 1px solid #999999;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)のみがあります。

> [!NOTE]
> `align` 属性は `<p>` においては廃止済みであり、使用するべきではありません。

## アクセシビリティ

コンテンツを段落に分割すると、ページのアクセシビリティを向上するのに役立ちます。読み上げソフトやその他の支援技術が、このようなユーザーに前後の段落に飛ぶショートカットを提供することができ、空行によって視覚ユーザーが飛ばし見をすることができるのと同様、コンテンツをざっと見ることができるようになります。

段落間の間隔を広げるために空の `<p>` 要素を使用することは、読み上げ技術の支援の下で操作をしている人にとっては問題になります。読み上げソフトは要素が存在することをアナウンスするものの、その中にはコンテンツが何もないという状況になる可能性があります。これは読み上げソフトを使用している人の利用を混乱させ不満をためる可能性があります。

追加の間隔をあける必要がある場合は、 {{cssxref("margin")}} のような {{glossary("CSS")}} プロパティを使用して効果を得るようにしてください。

```css
p {
  margin-bottom: 2em; /* 段落の後の空白を増加させる */
}
```

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

```html-nolint
<p>
  段落を空白行で区切るのが読者が目を通すのに最も簡単ですが、最初の行を字下げして区切ることもできます。これは印刷時の用紙節約など、スペースを節約するためによく用いられます。
</p>

<p>
  編集を前提とした文章（学校のレポートや下書きなど）では、区切りとして空白行とインデントの両方が用いられます。完成した作品において両方を併用することは、冗長で素人っぽいとみなされます。
</p>

<p>
  非常に古い文書では、段落は特別な記号である ¶、いわゆるピルクロウで区切られていました。現在では、これは圧迫感があり読みにくいと考えられています。
</p>

<p>
  どれだけ読みにくくなるのでしょうか？やってみましょう。
  <button data-toggle-text="こりゃダメだ、戻して！">
    段落にピルクロウを使う
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

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        開始タグは必須。終了タグは、この <code>&lt;p&gt;</code> 要素の直後に続く要素が
        {{HTMLElement("address")}},
        {{HTMLElement("article")}}, {{HTMLElement("aside")}},
        {{HTMLElement("blockquote")}}, {{HTMLElement("details")}}, {{HTMLElement("div")}},
        {{HTMLElement("dl")}}, {{HTMLElement("fieldset")}},
        {{HTMLElement("figcaption")}}, {{HTMLElement("figure")}},
        {{HTMLElement("footer")}}, {{HTMLElement("form")}},
        {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}},
        {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}},
        {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}},
        {{HTMLElement("header")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("hr")}},
        {{HTMLElement("main")}}, {{HTMLElement("menu")}}, {{HTMLElement("nav")}},
        {{HTMLElement("ol")}}, {{HTMLElement("pre")}}, {{HTMLElement("search")}},
        {{HTMLElement("section")}}, {{HTMLElement("table")}},
        {{HTMLElement("ul")}} または別の <code>&lt;p&gt;</code>
        要素のいずれかである場合、または親要素内でそれ以降にコンテンツがなく、
        親要素が {{HTMLElement("a")}}, {{HTMLElement("audio")}},
        {{HTMLElement("del")}}, {{HTMLElement("ins")}}, {{HTMLElement("map")}},
        {{HTMLElement("noscript")}}, {{HTMLElement("video")}}
        要素、または自律型カスタム要素ではない場合は省略することが可能。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles"
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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("hr")}}
- {{HTMLElement("br")}}
