---
title: "<code>: インラインコード要素"
slug: Web/HTML/Element/code
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`<code>`** は [HTML](/ja/docs/Web/HTML) の要素で、コンピューターコードの短い断片の文字列であると識別できるような外見のコンテンツを表示します。既定では、中の文字列が{{Glossary("user agent", "ユーザーエージェント")}}の既定の等幅フォントを使用して表示されます。

{{EmbedInteractiveExample("pages/tabbed/code.html", "tabbed-shorter")}}

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)以外の属性はありません。

## 例

`<code>` を含むテキストの段落です。

```html
<p>
  The function <code>selectAll()</code> highlights all the text in the input
  field so the user can, for example, copy or delete the text.
</p>
```

### 結果

{{EmbedLiveSample("Example", 640, 70)}}

## 補足

複数行のコードを表すには、 `<code>` 要素を {{HTMLElement("pre")}} 要素の中に入れてください。 `<code>` 要素自身は、コードの単一のフレーズや 1 行のみを表します。

CSS のルールによって、`code` セレクターを定義して、ブラウザーの既定のフォントを上書きすることができます。ユーザーによる設定を CSS による指定より優先させることもできます。

## 技術的概要

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
      <td>
        {{domxref("HTMLElement")}}。Gecko 1.9.2 (Firefox 4)
        以前では、この要素には {{domxref("HTMLSpanElement")}}
        インターフェイスが実装されています。
      </td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("samp")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("var")}}
- {{HTMLElement("pre")}}
