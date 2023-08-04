---
title: "<progress>: 進捗インジケーター要素"
slug: Web/HTML/Element/progress
l10n:
  sourceCommit: e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{HTMLSidebar}}

**`<progress>`** は [HTML](/ja/docs/Web/HTML) の要素で、タスクの進捗状況を表示します。ふつうはプログレスバーとして表示されます。

{{EmbedInteractiveExample("pages/tabbed/progress.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ">フローコンテンツ</a
        >、
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ">記述コンテンツ</a>、ラベル付け可能コンテンツ、
        <a href="/ja/docs/Web/HTML/Content_categories#知覚可能コンテンツ">知覚可能コンテンツ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ">記述コンテンツ</a>。ただし、子要素に <code>&#x3C;progress></code> 要素を含めてはならない。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ">記述コンテンツ</a>
        を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td><a href="/ja/docs/Web/Accessibility/ARIA/Roles/progressbar_role"><code>progressbar</code></a></td>
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

- `max`
  - : この属性は、`progress` 要素で示すタスクで必要とする総作業量を設定します。`max` 属性を指定する場合は、値を `0` より大きい有効な浮動小数点数値にしなければなりません。既定値は `1` です。
- `value`
  - : この属性は、タスクの進捗状況を設定します。値は `0` から `max` までの間、または `max` を省略する場合は `0` から `1` までの間の、有効な浮動小数点数値であることが必要です。`value` 属性がない場合は、プログレスバーは不定、タスクは処理中であるものの完了までが予想できない状態になります。

> **メモ:** {{htmlelement("meter")}} 要素とは異なり、最小値は常に 0 で、`min` 属性は `<progress>` 要素では許可されていません。

> **メモ:** {{cssxref(":indeterminate")}} 擬似クラスは、不定状態のプログレスバーに一致します。プログレスバーを値がある状態から不定の状態に変更するには、 {{domxref("Element.removeAttribute", "element.removeAttribute('value')")}} で value 属性を削除しなければなりません。

## 例

```html
<progress value="70" max="100">70 %</progress>
```

### 結果

{{ EmbedLiveSample("Examples", 200, 50) }}

## アクセシビリティの考慮

### ラベル付け

`<progress>` を使用する場合、ふつうはアクセシビリティのあるラベルを提供しましょう。ARIA 標準のラベル付け属性 [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) や [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-label) を `role="progressbar"` の要素と同様に使用できますが、`<progress>` を用いる場合、代わりに {{htmlelement("label")}} 要素を使用することができます。

> **メモ:** 要素のタグの間に配置されたテキストはアクセシビリティラベルではありません。この要素に対応していない古いブラウザー用の代替用としてのみ推奨されます。

#### 例

```html
<label>
  文書をアップロード中: <progress value="70" max="100">70 %</progress>
</label>

<!-- OR -->
<br />

<label for="progress-bar">文書をアップロード中</label>
<progress id="progress-bar" value="70" max="100">70 %</progress>
```

#### 結果

{{EmbedLiveSample('Labelling')}}

### 特定の領域を記述

`<progress>` 要素がページのある節の読み込みの進捗を表している場合、[`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) を使用して状況を指し、更新中の節に [`aria-busy="true"`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-busy) を設定し、読み込みが完了したら `aria-busy` 属性を解除してください。

#### 例

```html
<div aria-busy="true" aria-describedby="progress-bar">
  <!-- content is for this region is loading -->
</div>

<!-- ... -->

<progress id="progress-bar" aria-label="Content loading…"></progress>
```

##### 結果

{{EmbedLiveSample('Describing a particular region')}}

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
