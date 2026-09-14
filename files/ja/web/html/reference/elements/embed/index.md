---
title: HTML `<embed>` 埋め込み外部コンテンツ要素
short-title: <embed>
slug: Web/HTML/Reference/Elements/embed
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**`<embed>`** は [HTML](/ja/docs/Web/HTML) の要素で、外部のコンテンツを文書中の指定された場所に埋め込みます。コンテンツは外部アプリケーションや、対話型コンテンツの他の出所（ブラウザーのプラグインなど）によって提供されます。

{{InteractiveExample("HTML デモ: &lt;embed&gt;", "tabbed-standard")}}

```html interactive-example
<embed
  type="image/jpeg"
  src="/shared-assets/images/examples/flowers.jpg"
  width="250"
  height="200" />
```

> [!NOTE]
> 本文書は、[HTML Living Standard](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element) の一部として定義された要素についてのみ記載します。以前の標準化されていない要素の実装については扱いません。

最近のほとんどのブラウザーは、ブラウザーのプラグインの対応を非推奨にして削除しているため、サイトを平均的なユーザーのブラウザーで操作できるようにしたいのであれば、 `<embed>` に頼ることは賢明ではないということを意識しておいてください。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- `height`
  - : このリソースを表示する高さを [CSS ピクセル値](https://drafts.csswg.org/css-values/#px)で示します。絶対的な値でなければなりません。パーセント値は使用*できません*。
- `src`
  - : 埋め込むリソースの URL を示します。
- `type`
  - : インスタンス化するプラグインを選択するために使用する {{glossary("MIME type", "MIME タイプ")}}。
- `width`
  - : このリソースを表示する幅を [CSS ピクセル値](https://drafts.csswg.org/css-values/#px)で示します。絶対的な値でなければなりません。パーセント値は使用*できません*。

## 使用上のメモ

{{cssxref("object-position")}} プロパティを使用して、要素のフレーム内の埋め込みオブジェクトの位置を調整することができます。

> [!NOTE]
> {{cssxref("object-fit")}} プロパティは `<embed>` 要素では効果がありません。

## アクセシビリティ

`embed` 要素の [`title` 属性](/ja/docs/Web/HTML/Reference/Global_attributes/title)を使用して、そのコンテンツにラベルを付け、スクリーンリーダーなどの支援技術を使用して操作するユーザーが、その内容を確認できるようにしてください。タイトルの値は、埋め込まれたコンテンツを簡潔に説明するものでなければなりません。タイトルがない場合、ユーザーは埋め込まれたコンテンツが何であるかを判断できない可能性があります。特に `embed` 要素に動画や音声などの対話型コンテンツが含まれている場合、この文脈の突然の切り替えは混乱を招き、時間を要することになります。

## 例

```html
<embed
  type="video/quicktime"
  src="movie.mov"
  width="640"
  height="480"
  title="動画のタイトル" />
```

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
        >、<a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >、埋め込みコンテンツ、対話型コンテンツ、<a
          href="/ja/docs/Web/HTML/Guides/Content_categories#知覚可能コンテンツ"
          >知覚可能コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>なし。これは{{Glossary("void element", "空要素")}}です。</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>開始タグは必須。終了タグを記述してはならない。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>埋め込みコンテンツを受け入れるすべての要素。</td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/application_role"><code>application</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/document_role"><code>document</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/img_role"><code>img</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLEmbedElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 様々な種類のコンテンツの埋め込みのために使用されるその他の要素: {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{MathMLElement("math")}}, {{HTMLElement("object")}}, {{SVGElement("svg")}}, {{HTMLElement("video")}}
- フレーム内での埋め込みコンテンツの位置や寸法の設定: {{cssxref("object-position")}} および {{cssxref("object-fit")}}
