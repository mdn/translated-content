---
title: "<span>: コンテンツ区間要素"
slug: Web/HTML/Element/span
l10n:
  sourceCommit: a46d4d15ea85b4bbb83df145228bc40f658868be
---

{{HTMLSidebar}}

**`<span>`** は [HTML](/ja/docs/Web/HTML) の要素で、記述コンテンツの汎用的なインラインコンテナーであり、何かを表すものではありません。スタイル付けのため（[`class`](/ja/docs/Web/HTML/Global_attributes#class) または [`id`](/ja/docs/Web/HTML/Global_attributes#id) 属性を使用して）、または [`lang`](/ja/docs/Web/HTML/Global_attributes#lang) のような属性値を共有したりするために要素をグループ化する用途で使用することができます。他に適切な意味的要素がない時にのみ使用してください。 `<span>` は {{HTMLElement("div")}} 要素ととても似ていますが、 {{HTMLElement("div")}} が[ブロックレベルの要素](/ja/docs/Glossary/Block-level_content)であるのに対し、 `<span>` は[インラインレベルの要素](/ja/docs/Glossary/Inline-level_content)です。

{{EmbedInteractiveExample("pages/tabbed/span.html", "tabbed-shorter")}}

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## 例

### 例 1

#### HTML

```html
<p><span>Some text</span></p>
```

#### 結果

{{EmbedLiveSample('Example_1')}}

### 例 2

#### HTML

```html
<li>
  <span>
    <a href="portfolio.html" target="_blank">See my portfolio</a>
  </span>
</li>
```

#### CSS

```css
li span {
  background: gold;
}
```

#### 結果

{{EmbedLiveSample('Example_2')}}

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
        >を受け入れるすべての要素、または<a
          href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素。
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
        {{domxref("HTMLSpanElement")}}
      </td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の {{HTMLElement("div")}} 要素
