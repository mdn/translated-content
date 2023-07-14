---
title: "<param>: オブジェクト引数要素"
slug: Web/HTML/Element/param
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`<param>`** は [HTML](/ja/docs/Web/HTML) の要素で、{{HTMLElement("object")}} 要素の引数を定義します。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- `name` {{deprecated_inline}}
  - : 引数の名称。
- `value` {{deprecated_inline}}
  - : 引数の値を指定します。
- `type` {{deprecated_inline}}
  - : `valuetype` が `ref` に設定されている場合にのみ指定可能。`value` の値で指定された URI に存在するオブジェクトの MIME タイプを指定します。
- `valuetype` {{deprecated_inline}}

  - : `value` 属性の型を指定します。指定可能な値は以下の通りです。

    - `data`: 既定値。値は文字列としてオブジェクトの実装に渡されます。
    - `ref`: 値は、実行時の値が格納されているリソースへの URI です。
    - `object`: 同一文書内の他の {{HTMLElement("object")}} 要素の ID です。

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
      <td>なし。これは{{Glossary("void element", "空要素")}}です。</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        空要素であるため開始タグは必須、また終了タグを置いてはなりません。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{HTMLElement("object")}} の子として、他の<a
          href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >より前に配置可能。
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
      <td>{{domxref("HTMLParamElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("object")}}
