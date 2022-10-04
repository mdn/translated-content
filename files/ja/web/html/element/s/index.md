---
title: <s>
slug: Web/HTML/Element/s
---

{{HTMLRef}}

**HTML の `<s>` 要素**は取り消し線を引いた文字列を表示します。 `<s>` 要素はすでに適切または正確ではなくなった事柄を表現します。しかし、文書の修正を示す場合、 `<s>` 要素は適切ではありません。この場合は {{HTMLElement("del")}} と {{HTMLElement("ins")}} の方が適しているので、こちらを使用してください。

{{EmbedInteractiveExample("pages/tabbed/s.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >
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

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

> **メモ:** **実装におけるメモ:** Gecko 1.9.2 以前はこの要素に {{domxref("HTMLSpanElement")}} インターフェイスを実装しています。

## 例

```html
<s>本日のおすすめ: サーモンカルパッチョ</s> 売り切れ<br>
<span style="text-decoration:line-through;">本日のおすすめ:
  サーモンカルパッチョ</span> 売り切れ
```

{{EmbedLiveSample("Examples")}}

## アクセシビリティの考慮

`s` 要素が存在することは、多くの読み上げ技術の既定の設定ではアナウンスされません。 CSS の {{cssxref("content")}} プロパティを、 {{cssxref("::before")}} および {{cssxref("::after")}} 擬似要素と共に使うことでアナウンスさせることができます。

```css
s::before,
s::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

s::before {
  content: " [取り消しテキスト開始] ";
}

s::after {
  content: " [取り消しテキスト終了] ";
}
```

読み上げソフトを使用する人によっては、特に冗長になるコンテンツのアナウンスを意図的に無効にしていることがあります。このため、この手法を悪用しないようにすることは重要であり、コンテンツが取り消しされていることを知らないと理解に影響するような場面でのみ使用するようにしてください。

- [Short note on making your mark (more accessible) | The Paciello Group](https://developer.paciellogroup.com/blog/2017/12/short-note-on-making-your-mark-more-accessible/)
- [Tweaking Text Level Styles | Adrian Roselli](http://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## 仕様書

| 仕様書                                                                                                   | 状態                             | 備考 |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG','semantics.html#the-s-element','s element')}}             | {{Spec2('HTML WHATWG')}} |      |
| {{SpecName('HTML5 W3C','textlevel-semantics.html#the-s-element','s element')}} | {{Spec2('HTML5 W3C')}}     |      |

## ブラウザーの互換性

{{Compat("html.elements.s")}}

## 関連情報

- {{HTMLElement("strike")}} 要素は、 {{HTMLElement("s")}} 要素の分身でしたが、廃止されており、もうウェブサイトで使用するべきではありません。
- {{HTMLElement("del")}} 要素は、データが*削除された*場合に代わりに使用するべきものです。
- CSS の {{cssxref("text-decoration-line")}} プロパティは、 {{HTMLElement("s")}} 要素の以前の視覚効果を実現します。
