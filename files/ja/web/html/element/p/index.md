---
title: '<p>: 段落要素'
slug: Web/HTML/Element/p
---

{{HTMLRef}}

**HTML の `<p>` 要素**は、テキストの段落を表します。視覚メディアにおいて、段落はふつう隣接するブロックと上下の空白や最初の行の字下げによって隔てられたテキストのブロックとして表現されますが、 HTML の段落は画像やフォーム欄などの関連するコンテンツを構造的にまとめることができます。

段落は[ブロックレベル要素](/ja/docs/Web/HTML/Block-level_elements)であり、特徴的なのは `</p>` で閉じる前に他のブロックレベル要素が見つかった場合は自動的に閉じることです。下記の「タグの省略」をご覧ください。

{{EmbedInteractiveExample("pages/tabbed/p.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a>
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
        開始タグは必須。後続する要素が {{HTMLElement("address")}},
        {{HTMLElement("article")}}, {{HTMLElement("aside")}},
        {{HTMLElement("blockquote")}}, {{HTMLElement("div")}},
        {{HTMLElement("dl")}}, {{HTMLElement("fieldset")}},
        {{HTMLElement("footer")}}, {{HTMLElement("form")}},
        {{HTMLElement("h1")}}, {{HTMLElement("h2")}},
        {{HTMLElement("h3")}}, {{HTMLElement("h4")}},
        {{HTMLElement("h5")}}, {{HTMLElement("h6")}},
        {{HTMLElement("header")}}, {{HTMLElement("hr")}},
        {{HTMLElement("menu")}}, {{HTMLElement("nav")}},
        {{HTMLElement("ol")}}, {{HTMLElement("pre")}},
        {{HTMLElement("section")}}, {{HTMLElement("table")}},
        {{HTMLElement("ul")}} または別の {{HTMLElement("p")}}
        要素のいずれかである、または親要素内で他のコンテンツがなく親要素が
        {{HTMLElement("a")}}
        要素ではない場合は終了タグを省略することが可能。
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
<p>これはテキストの最初の段落です。
  これはテキストの最初の段落です。
  これはテキストの最初の段落です。
  これはテキストの最初の段落です。</p>
<p>これはテキストの二番目の段落です。
  これはテキストの二番目の段落です。
  これはテキストの二番目の段落です。
  これはテキストの二番目の段落です。</p>
```

### 結果

{{EmbedLiveSample('Example')}}

## 段落のスタイル付け

既定で、ブラウザーは段落を単一の空行で分割します。例えば先頭行を字下げするなど、他の分割方法は {{glossary("CSS")}} で実現することができます。

### HTML

```html
<p>Separating paragraphs with blank lines is easiest
for readers to scan, but they can also be separated
by indenting their first lines. This is often used
to take up less space, such as to save paper in print.</p>

<p>Writing that is intended to be edited, such as school
papers and rough drafts, uses both blank lines and
indentation for separation. In finished works, combining
both is considered redundant and amateurish.</p>

<p>In very old writing, paragraphs were separated with a
special character: ¶, the <i>pilcrow</i>. Nowadays, this
is considered claustrophobic and hard to read.</p>

<p>How hard to read? See for yourself:
  <button data-toggle-text="Oh no! Switch back!">Use pilcrow for paragraphs</button>
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
document.querySelector('button').addEventListener('click', function (event) {
  document.querySelectorAll('p').forEach(function (paragraph) {
    paragraph.classList.toggle('pilcrow');
  });
  var newButtonText = event.target.dataset.toggleText;
  var oldText = event.target.innerText;
  event.target.innerText = newButtonText;
  event.target.dataset.toggleText = oldText;
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

| 仕様書                                                                                                   | 状態                             | 備考                                                                                                 |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-p-element', '&lt;p&gt;')}}         | {{Spec2('HTML WHATWG')}} | 最新の {{glossary("W3C")}} スナップショットである {{SpecName("HTML5 W3C")}} から変更なし |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-p-element', '&lt;p&gt;')}} | {{Spec2('HTML5 W3C')}}     | `align` 属性を廃止                                                                                   |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.3.1', '&lt;p&gt;')}}                 | {{Spec2('HTML4.01')}}     | 初回定義                                                                                             |

## ブラウザーの互換性

{{Compat("html.elements.p")}}

## 関連情報

- {{HTMLElement("hr")}}
- {{HTMLElement("br")}}
