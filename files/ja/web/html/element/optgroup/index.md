---
title: '<optgroup>: 選択肢グループ要素'
slug: Web/HTML/Element/optgroup
tags:
  - 要素
  - フォーム
  - HTML
  - HTML フォーム
  - リファレンス
  - ウェブ
browser-compat: html.elements.optgroup
translation_of: Web/HTML/Element/optgroup
---

{{HTMLRef}}

**`<optgroup>`** は [HTML](/ja/docs/Web/HTML) の要素で、 {{HTMLElement("select")}} 要素内の選択肢 ({{HTMLElement("option")}}) のグループを作成します。

{{EmbedInteractiveExample("pages/tabbed/optgroup.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>0 個以上の {{HTMLElement("option")}} 要素</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        開始タグは必須。要素の直後に他の <code>&#x3C;optgroup></code> 要素が接続する場合、または親要素が他の内容を持たない場合、終了タグが省略可能となる。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>{{HTMLElement("select")}} 要素</td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>{{ARIARole("group")}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLOptGroupElement")}}</td>
    </tr>
  </tbody>
</table>

> **Note:** optgroup 要素を入れ子にすることはできません。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- {{htmlattrdef("disabled")}}
  - : この論理属性が指定された場合、このオプショングループ内の項目のいずれも選択不能となります。多くの場合、ブラウザーはそのコントロールをグレーアウトで表示し、マウスクリックやフォーカスなど、いかなるイベントも受け付けなくなります。
- {{htmlattrdef("label")}}
  - : ブラウザーがユーザーインターフェイス上の選択肢にラベル付けするのに使用できるオプションのグループの名前。この要素を使用する場合には、この属性は必須です。

## 例

```html
<select>
  <optgroup label="Group 1">
    <option>Option 1.1</option>
  </optgroup>
  <optgroup label="Group 2">
    <option>Option 2.1</option>
    <option>Option 2.2</option>
  </optgroup>
  <optgroup label="Group 3" disabled>
    <option>Option 3.1</option>
    <option>Option 3.2</option>
    <option>Option 3.3</option>
  </optgroup>
</select>
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他のフォーム関連要素: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("option")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("meter")}}
