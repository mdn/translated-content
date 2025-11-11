---
title: "<b>: 注目付け要素"
slug: Web/HTML/Reference/Elements/b
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

**`<b>`** は [HTML](/ja/docs/Web/HTML) の要素で、要素の内容に読み手の注意を惹きたい場合で、他の特別な重要性が与えられないものに使用します。これは以前は太字要素と呼ばれており、ほとんどのブラウザーでは文字列を太字で描画していました。しかし、 `<b>` を文字列の装飾に使うべきではありません。太字の文字列を作成するには、 CSS の {{cssxref("font-weight")}} プロパティを使用し、特別な重要性を持つテキストを示すには {{HTMLElement("strong")}} 要素を使用してください。

{{InteractiveExample("HTML デモ: &lt;b&gt;", "tabbed-shorter")}}

```html-nolint interactive-example
<p>
  この学校で最も人気のある 2 つの科学コースは、<b class="term">化学</b>（化学物質や物質の合成について学ぶ）と<b class="term">物理学</b>（物質やエネルギーの性質やプロパティについて学ぶ）です。
</p>
```

```css interactive-example
b {
  /* ここにスタイルを追加 */
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)以外の属性はありません。

## 使用上のメモ

- `<b>` は要約に現れるキーワード、レビュー文内での製品名、その他の普通は太字で表現されるテキストの範囲（但し、特別な重要性を持たない部分）に使用してください。
- `<b>` 要素を {{HTMLElement("strong")}}, {{HTMLElement("em")}}, {{HTMLElement("mark")}} 要素と混同しないでください。 {{HTMLElement("strong")}} は特定の*重要性*を持った文字列を表し、 {{HTMLElement("em")}} はテキストを軽く強調し、 {{HTMLElement("mark")}} は特定の*関連性*を持った文字列を表します。`<b>` はそのような特別な意味を持ちません。他の要素が持つ意味合いに合わないときのみ使用してください。
- 同様に、`<b>` 要素でタイトルや見出しをマークしないでください。この用途では {{HTMLElement("Heading_Elements", "h1")}} から {{HTMLElement("Heading_Elements", "h6")}} タグを使用てください。さらに、スタイルシートでこれらの要素の既定のスタイルを変更できるので、これらの要素は太字で表示される*とは限りません*。
- 必要に応じて追加的な意味情報を伝える目的で `<b>` 要素に [`class`](/ja/docs/Web/HTML/Reference/Global_attributes/class) 属性を使用することはよい使用法です（例えば、段落の最初の文に `<b class="lead">` を設定するなど）。これによって、 `<b>` の様々な使用法が管理しやすくなり、スタイル上の変更が必要になった時、 HTML における使用方法を変更する必要がなくなります。
- 歴史的に `<b>` 要素は太字の文字列を作るためのものでしたが、 HTML4 でスタイル情報が非推奨になったので `<b>` 要素の意味が変更されました。
- `<b>` 要素の使用に意味上の目的がない場合は、文字列を太字にするために代わりに CSS の {{cssxref("font-weight")}} プロパティの値を `"bold"` に設定してください。

## 例

```html-nolint
<p>
  この記事では、<b class="keywords">テキストレベル</b>の要素についていくつか説明します。 <b class="keywords">HTML</b> 文書内でのそれらの使用法について説明します。
</p>
キーワードは、この要素の既定のスタイルで、<b>おそらく太字で</b>表示されます。
```

### 結果

{{EmbedLiveSample("Examples")}}

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
        >,
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >, 知覚可能コンテンツ
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
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
          ></code
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

- その他のテキストレベル意味付け要素: {{HTMLElement("a")}}, {{HTMLElement("em")}}, {{HTMLElement("strong")}}, {{HTMLElement("small")}}, {{HTMLElement("cite")}}, {{HTMLElement("q")}}, {{HTMLElement("dfn")}}, {{HTMLElement("abbr")}}, {{HTMLElement("time")}}, {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("i")}}, {{HTMLElement("mark")}}, {{HTMLElement("ruby")}}, {{HTMLElement("rp")}}, {{HTMLElement("rt")}}, {{HTMLElement("bdo")}}, {{HTMLElement("span")}}, {{HTMLElement("br")}}, {{HTMLElement("wbr")}}
- [Using \<b> and \<i> elements (W3C)](https://www.w3.org/International/questions/qa-b-and-i-tags)
