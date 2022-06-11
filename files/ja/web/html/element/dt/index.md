---
title: '<dt>: 説明用語要素'
slug: Web/HTML/Element/dt
tags:
  - Definition
  - 説明リスト
  - Definition Term
  - Description Term
  - 要素
  - HTML
  - HTML グループ化コンテンツ
  - リファレンス
  - Term
  - ウェブ
  - dt
browser-compat: html.elements.dt
translation_of: Web/HTML/Element/dt
---

{{HTMLRef}}

**`<dt>`** は [HTML](/ja/docs/Web/HTML) の要素で、説明または定義リストの中で用語を表す部分であり、 {{HTMLElement("dl")}} の子要素としてのみ用いることができます。普通は {{HTMLElement("dd")}} 要素が続きます。しかし、複数の `<dt>` 要素が続くと、複数の用語がすぐ後に続く {{HTMLElement("dd")}} 要素で定義されていることを表します。

後に続く {{HTMLElement("dd")}} （**詳細説明**）要素は、 `<dt>` を用いて指定した用語について、定義やその他の関連する文字列を表します。

{{EmbedInteractiveExample("pages/tabbed/dt.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/Guide/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#flow_content">フローコンテンツ</a>。ただし配下に {{HTMLElement("header")}}、{{HTMLElement("footer")}}、区分コンテンツ、見出しコンテンツがないもの。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        開始タグは必須。終了タグについては、他の <code>&#x3C;dt></code> または {{HTMLElement("dd")}} 要素が後続する場合、もしくは親要素の中にそれ以上のコンテンツがない場合は省略可能。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{HTMLElement("dl")}} または ({{Glossary("WHATWG")}} HTML および {{Glossary("W3C")}} HTML 5.2 以降においては) {{HTMLElement("dl")}} の子である {{HTMLElement("div")}}。<br>
        この要素は {{HTMLElement("dd")}} または他の {{HTMLElement("dt")}} の前で使用することができる。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>{{ARIARole("term")}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Listitem_role">listitem</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>
        {{domxref("HTMLElement")}}。 Gecko 1.9.2 (Firefox 4) 以前では、 Firefox はこの要素に対し {{domxref("HTMLSpanElement")}} インターフェイスを実装していました。
      </td>
    </tr>
  </tbody>
</table>

## 属性

この要素は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみを持っています。

## 例

例については、[`<dl>` 要素で提供されている例](/ja/docs/Web/HTML/Element/dl#例)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("dl")}}
- {{HTMLElement("dd")}}
