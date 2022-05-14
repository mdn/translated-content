---
title: '<dd>: 詳細説明要素'
slug: Web/HTML/Element/dd
tags:
  - 定義
  - 詳細説明
  - 説明リスト
  - 要素
  - HTML
  - HTML コンテンツグループ化
  - リファレンス
  - ウェブ
  - dd
  - details
browser-compat: html.elements.dd
translation_of: Web/HTML/Element/dd
---

{{HTMLRef}}

**`<dd>`** は [HTML](/ja/docs/Web/HTML) の要素で、説明リスト要素 ({{HTMLElement("dl")}}) 内で、その前の用語 ({{HTMLElement("dt")}}) の説明、定義、値などを示します。

{{EmbedInteractiveExample("pages/tabbed/dd.html", "tabbed-standard")}}

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
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#flow_content">フローコンテンツ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        開始タグは必須。 {{HTMLElement("dd")}} 要素の直後に他の <code>&#x3C;dd></code> 要素または {{HTMLElement("dt")}} 要素がある場合、もしくは親要素内で後続する内容物がない場合は、終了タグが省略可能となる。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{HTMLElement("dl")}} 要素または {{HTMLElement("dl")}} 要素内にある {{HTMLElement("div")}} 要素。<br>この要素は {{HTMLElement("dt")}} または他の {{HTMLElement("dd")}} の後に使うことができます。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>{{ARIARole("definition")}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td><code>role</code> は許可されていません</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- {{htmlattrdef("nowrap")}} {{Non-standard_inline}}
  - : この属性の値が `yes` とされた場合、定義部分のテキストは改行されません。既定値は `no` です。

## 例

例については、[`<dl>` 要素で提供されている例](/ja/docs/Web/HTML/Element/dl#例)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("dl")}}
- {{HTMLElement("dt")}}
