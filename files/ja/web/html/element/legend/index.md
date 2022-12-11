---
title: <legend>
slug: Web/HTML/Element/legend
---

{{HTMLSidebar}}

**HTML の `<legend>` 要素**は、その親要素である {{HTMLElement("fieldset")}} の内容のキャプションを表します。

{{EmbedInteractiveExample("pages/tabbed/legend.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a>
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
        <a href="/ja/docs/Web/HTML/Element/Heading_Elements">見出し</a> (h1–h6
        要素)
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
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

## 属性

この要素には、[グローバル属性](/ja/docs/Web/HTML/Global_attributes)以外の属性はありません。

## 例

`<legend>` の使用例は、 {{ HTMLElement("form") }} のページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("html.elements.legend")}}

## 関連情報

- [ARIA: Form ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Form_Role)
