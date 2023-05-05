---
title: '<embed>: 埋め込み外部コンテンツ要素'
slug: Web/HTML/Element/embed
---

{{HTMLSidebar}}

**HTML の `<embed>` 要素**は、外部のコンテンツを文書中の指定された場所に埋め込みます。コンテンツは外部アプリケーションや、対話型コンテンツの他の出所 (ブラウザーのプラグインなど) によって提供されます。

{{EmbedInteractiveExample("pages/tabbed/embed.html", "tabbed-standard")}}

> **メモ:** 本文書は、 HTML5 の一部として定義された要素についてのみ記載します。以前の標準化されていない要素の実装については扱いません。

最近のほとんどのブラウザーは、ブラウザーのプラグインの対応を非推奨にして削除しているため、サイトを平均的なユーザーのブラウザーで操作できるようにしたいのであれば、 `<embed>` に頼ることは賢明ではないということを意識しておいてください。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/Guide/HTML/Content_categories"
          >コンテンツカテゴリ</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、<a href="/ja/docs/Web/Guide/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >、埋め込みコンテンツ、対話型コンテンツ、<a
          href="/ja/docs/Web/Guide/HTML/Content_categories#知覚可能コンテンツ"
          >知覚可能コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        なし。これは{{Glossary("empty element", "空要素")}}です。
      </td>
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
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/application_role">application</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/document_role">document</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/img_role">img</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/none_role">none</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role">presentation</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLEmbedElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- {{htmlattrdef("height")}}
  - : このリソースを表示する高さを [CSS ピクセル値](https://drafts.csswg.org/css-values/#px)で示します。絶対的な値でなければなりません。パーセント値は使用*できません*。
- {{htmlattrdef("src")}}
  - : 埋め込むリソースの URL を示します。
- {{htmlattrdef("type")}}
  - : インスタンス化するプラグインを選択するために使用する {{glossary("MIME type", "MIME タイプ")}}。
- {{htmlattrdef("width")}}
  - : このリソースを表示する幅を [CSS ピクセル値](https://drafts.csswg.org/css-values/#px)で示します。絶対的な値でなければなりません。パーセント値は使用*できません*。

## 使用上のメモ

{{cssxref("object-position")}} プロパティを使用して、要素のフレーム内の埋め込みオブジェクトの位置を調整することができ、 {{cssxref("object-fit")}} プロパティを使用して、オブジェクトの寸法をフレーム内にどのように合わせるかを制御することができます。

## 例

```html
<embed type="video/quicktime" src="movie.mov" width="640" height="480" title="私の動画の題名">
```

## アクセシビリティの考慮

`embed` 要素に [`title` 属性](/ja/docs/Web/HTML/Global_attributes/title)を使用してコンテンツにラベルを付けるようにしてください。そうすれば、読み上げソフトのような支援技術を使用して捜査している人々が内容を理解することができるようになります。題名がないと、埋め込みコンテンツが何であるかを特定することができません。このようにして文脈を見失うと、特に `embed` 要素が動画や音声のような対話的なコンテンツを含んでいたとに、混乱したり時間を浪費したりします。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

> **メモ:** Firefox のバージョン 45 以前では HTML リソースの内容を表示せず、プラグインが必要である旨の汎用的なメッセージを表示します ([Firefox バグ 730768](https://bugzil.la/730768) をご覧ください)。

{{Compat("html.elements.embed")}}

## 関連情報

- 様々な種類のコンテンツの埋め込みのために使用されるその他の要素: {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{MathMLElement("math")}}, {{HTMLElement("object")}}, {{SVGElement("svg")}}, {{HTMLElement("video")}}
- フレーム内での埋め込みコンテンツの位置や寸法の設定: {{cssxref("object-position")}} および {{cssxref("object-fit")}}
