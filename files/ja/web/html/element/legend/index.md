---
title: "<legend>: フィールドセット凡例要素"
slug: Web/HTML/Element/legend
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`<legend>`** は [HTML](/ja/docs/Web/HTML) の要素で、その親要素である {{HTMLElement("fieldset")}} の内容のキャプションを表します。

{{EmbedInteractiveExample("pages/tabbed/legend.html", "tabbed-standard")}}

## 属性

この要素には、[グローバル属性](/ja/docs/Web/HTML/Global_attributes)以外の属性はありません。

## 例

`<legend>` の使用例は、 {{HTMLElement("form")}} のページを参照してください。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >
        および
        <a href="/ja/docs/Web/HTML/Element/Heading_Elements">見出し</a>
        （h1–h6 要素）
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{HTMLElement("fieldset")}} 要素。<code>&#x3C;legend></code>
        要素は
        <code>&#x3C;fieldset></code>
        の最初の子要素として配置しなくてはならない。
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
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLLegendElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ARIA: Form ロール](/ja/docs/Web/Accessibility/ARIA/Roles/form_role)
