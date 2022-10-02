---
title: '<param>: オブジェクト引数要素'
slug: Web/HTML/Element/param
---

{{HTMLRef}}

**HTML の `<param>` 要素**は、{{HTMLElement("object")}} 要素の引数を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/Guide/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        なし。これは {{Glossary("empty element", "空要素")}}
        です。
      </td>
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
          href="/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ"
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

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- {{htmlattrdef("name")}}
  - : 引数の名称。
- {{htmlattrdef("value")}}
  - : 引数の値

### 非推奨の属性

- {{htmlattrdef("type")}} {{deprecated_inline}}
  - : `valuetype` が `ref` に設定されている場合にのみ指定可能。`value` の値で指定された URI に存在するオブジェクトの MIME タイプを指定します。
- {{htmlattrdef("valuetype")}} {{deprecated_inline}}

  - : `value` 属性の型を指定します。指定可能な値は以下の通りです。

    - `data`: 既定値。値は文字列としてオブジェクトの実装に渡されます。
    - `ref`: 値は、実行時の値が格納されているリソースへの URI です。
    - `object`: 同一文書内の他の {{HTMLElement("object")}} 要素の ID です。

## 例

`<param>` の使用例については、{{HTMLElement("object")}} のページを参照してください。

## 仕様書

| 仕様書                                                                                                                           | 状態                             | 備考 |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', 'iframe-embed-object.html#the-param-element', '&lt;param&gt;')}}         | {{Spec2('HTML WHATWG')}} |      |
| {{SpecName('HTML5 W3C', 'semantics-embedded-content.html#the-param-element', '&lt;param&gt;')}} | {{Spec2('HTML5 W3C')}}     |      |
| {{SpecName('HTML4.01', 'struct/objects.html#h-13.3.2', '&lt;param&gt;')}}                                 | {{Spec2('HTML4.01')}}     |      |

## ブラウザーの互換性

{{Compat("html.elements.param")}}

## 関連情報

- {{HTMLElement("object")}}
