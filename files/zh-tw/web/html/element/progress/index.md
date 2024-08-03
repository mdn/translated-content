---
title: <progress>：進度指示元素
slug: Web/HTML/Element/progress
---

{{HTMLSidebar}}

**`<progress>`** [HTML](/zh-TW/docs/Web/HTML) 元素顯示顯示任務完成進度的指示器，通常呈現為進度條。

{{EmbedInteractiveExample("pages/tabbed/progress.html", "tabbed-standard")}}

## 屬性

此元素包含[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

- `max`
  - : 此屬性描述由 `progress` 元素指示的任務所需的工作量。如果存在 `max` 屬性，則其值必須大於 `0` 且為有效的浮點數。默認值為 `1`。
- `value`
  - : 此屬性指定已完成的任務量。它必須是介於 `0` 和 `max` 之間的有效浮點數，如果省略 `max`，則必須介於 `0` 和 `1` 之間。如果沒有 `value` 屬性，則進度條是不確定的；這表示正在進行一項活動，而沒有指示預計需要多長時間。

> [!NOTE]
> 與 {{htmlelement("meter")}} 元素不同，最小值始終為 0，`<progress>` 元素不允許 `min` 屬性。

> [!NOTE]
> 可以使用 {{cssxref(":indeterminate")}} 偽類來匹配不確定的進度條。要在給定值後將進度條更改為不確定，必須使用 {{domxref("Element.removeAttribute", "element.removeAttribute('value')")}} 刪除 value 屬性。

## 範例

```html
<progress value="70" max="100">70 %</progress>
```

### 結果

{{ EmbedLiveSample("範例", 200, 50) }}

## 無障礙議題

### 標記

在使用 `<progress>` 時，通常應提供無障礙的標籤。雖然可以使用標準的 ARIA 標記屬性 [`aria-labelledby`](/zh-TW/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) 或 [`aria-label`](/zh-TW/docs/Web/Accessibility/ARIA/Attributes/aria-label)，就像對任何具有 `role="progressbar"` 的元素一樣，但在使用 `<progress>` 時，你還可以使用 {{htmlelement("label")}} 元素。

> [!NOTE]
> 放置在元素標籤之間的文本不是可訪問的標籤，它只建議作為不支持該元素的舊瀏覽器的後備。

#### 範例

```html
<label>
  Uploading Document: <progress value="70" max="100">70 %</progress>
</label>

<!-- OR -->
<br />

<label for="progress-bar">Uploading Document</label>
<progress id="progress-bar" value="70" max="100">70 %</progress>
```

#### 結果

{{EmbedLiveSample('標籤')}}

## 描述特定區域

如果 `<progress>` 元素描述頁面的某個區域的載入進度，請使用 [`aria-describedby`](/zh-TW/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) 指向狀態，並在正在更新的部分上設置 [`aria-busy="true"`](/zh-TW/docs/Web/Accessibility/ARIA/Attributes/aria-busy)，在載入完成後刪除 `aria-busy` 屬性。

#### 範例

```html
<div aria-busy="true" aria-describedby="progress-bar">
  <!-- content is for this region is loading -->
</div>

<!-- ... -->

<progress id="progress-bar" aria-label="Content loading…"></progress>
```

##### 結果

{{EmbedLiveSample('描述特定區域')}}

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Content_categories">內容類別</a>
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#流內容">流內容</a>、<a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容">段落型內容</a>、可標記內容、<a href="/zh-TW/docs/Web/HTML/Content_categories#捫及內容">捫及內容</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容">段落型內容</a>，但其後代元素中不得有 <code>&#x3C;progress></code> 元素。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，開始標籤和結束標籤均為必需。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容">段落型內容</a>的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/progressbar_role"><code>progressbar</code></a></td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>不允許 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLProgressElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{htmlelement("meter")}}
- {{ cssxref(":indeterminate") }}
- {{ cssxref("-moz-orient") }}
- {{ cssxref("::-moz-progress-bar") }}
- {{ cssxref("::-webkit-progress-bar") }}
- {{ cssxref("::-webkit-progress-value") }}
- {{ cssxref("::-webkit-progress-inner-element") }}
