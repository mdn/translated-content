---
title: '<progress>: 進捗表示要素'
slug: Web/HTML/Element/progress
---

{{HTMLSidebar}}

**HTML の `<progress>` 要素**は、タスクの進捗状況を表示します。プログレスバーとしてよく表示されます。

{{EmbedInteractiveExample("pages/tabbed/progress.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、<a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >、ラベル付け可能コンテンツ、知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >。ただし、子要素に
        <code>&#x3C;progress></code> 要素を含めてはならない。
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
        >
        を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td><code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/progressbar_role">progressbar</a></code></td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLProgressElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- {{ htmlattrdef("max") }}
  - : この属性は、`progress` 要素で示すタスクで必要とする総作業量を設定します。`max` 属性を指定する場合は、値を `0` より大きい有効な浮動小数点数値にしなければなりません。既定値は `1` です。
- {{ htmlattrdef("value") }}
  - : この属性は、タスクの進捗状況を設定します。値は `0` から `max` までの間、または `max` を省略する場合は `0` から `1` までの間の、有効な浮動小数点数値であることが必要です。`value` 属性がない場合は、プログレスバーは不定、タスクは処理中であるものの完了までが予想できない状態になります。

> **メモ:** {{htmlelement("meter")}} 要素とは異なり、最小値は常に 0 で、`min` 属性は `<progress>` 要素では許可されていません。

> **メモ:** {{cssxref(":indeterminate")}} 擬似クラスは、不定状態のプログレスバーにマッチします。プログレスバーを値がある状態から不定の状態に変更するには、 {{domxref("Element.removeAttribute", "element.removeAttribute('value')")}}. で value 属性を削除しなければなりません。

## 例

```html
<progress value="70" max="100">70 %</progress>
```

### 結果

{{ EmbedLiveSample("Examples", 200, 50) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{htmlelement("meter")}}
- {{ cssxref(":indeterminate") }}
- {{ cssxref("-moz-orient") }}
- {{ cssxref("::-moz-progress-bar") }}
- {{ cssxref("::-webkit-progress-bar") }}
- {{ cssxref("::-webkit-progress-value") }}
- {{ cssxref("::-webkit-progress-inner-element") }}
