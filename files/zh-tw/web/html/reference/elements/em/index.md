---
title: <em>：強調元素
slug: Web/HTML/Reference/Elements/em
---

**`<em>`** [HTML](/zh-TW/docs/Web/HTML) 元素用於標記具有強調重點的文字。`<em>` 元素可以進行嵌套，每個嵌套層級表示更大程度的強調。

{{InteractiveExample("HTML Demo: &lt;em&gt;", "tabbed-shorter")}}

```html interactive-example
<p>Get out of bed <em>now</em>!</p>

<p>We <em>had</em> to do something about it.</p>

<p>This is <em>not</em> a drill!</p>
```

```css interactive-example
/* stylelint-disable-next-line block-no-empty */
em {
}
```

## 屬性

此元素僅包括[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

## 使用注意事項

`<em>` 元素用於具有與周圍文本相比的強調重點的單詞，通常僅限於句子的一個詞或幾個詞，並影響句子本身的含義。

通常，此元素以斜體類型顯示。然而，不應該用於應用斜體樣式；請使用 CSS 的 {{cssxref("font-style")}} 屬性來實現此目的。使用 {{HTMLElement("cite")}} 元素標記作品的標題（書籍、劇本、歌曲等）。使用 {{HTMLElement("i")}} 元素標記以替代音調或情緒的文本，這包括許多斜體的常見情況，如科學名稱或其他語言的單詞。使用 {{HTMLElement("strong")}} 元素標記比周圍文本更重要的文本。

### \<i> vs. \<em>

某些開發人員可能會對多個元素產生看似相似的視覺結果感到困惑。`<em>` 和 `<i>` 是一個常見的例子，因為它們都使文字變斜。差異在哪裡？應該使用哪個？

默認情況下，視覺結果相同。然而，語義含義是不同的。`<em>` 元素表示其內容的強調重點，而 `<i>` 元素表示與正常散文有所區別的文本，例如外來詞、虛構角色的思想，或當文本指的是詞的定義而不是表示其語義含義時。 （作品的標題，如書籍或電影的名稱，應使用 `<cite>`。）

這意味著使用的正確選擇取決於情況。兩者都不是純粹為了裝飾而使用的，這是 CSS 樣式的用途。

`<em>` 的一個例子可能是：「Just _do_ it already!」或：「We _had_ to do something about it」。閱讀文本的人或軟件將使用重音強調斜體字。

`<i>` 的一個例子可能是：「_Queen Mary_ 昨晚啟航了」。在這裡，「Queen Mary」 這個詞並沒有額外的強調或重要性。僅僅指出了問題物體不是一位名叫 Mary 的女王，而是一艘名為 _Queen Mary_ 的船。`<i>` 的另一個例子可能是：「The word _the_ is an article」。

## 範例

在此範例中，`<em>` 元素用於突顯兩個成分列表之間的內隱或顯性對比：

```html
<p>
  Ice cream is made with milk, sweetener, and cream. Frozen custard, on the
  other hand, is made of milk, cream, sweetener, and <em>egg yolks</em>.
</p>
```

### 結果

{{EmbedLiveSample("範例")}}

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories"
          >內容類別</a
        >
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容"
          >流內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容"
          >段落型內容</a
        >、捫及內容。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容"
          >段落型內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>無，開始標籤和結束標籤均為必需。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容"
          >段落型內容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">強調</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>任何</td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>
        {{domxref("HTMLElement")}} 在 Gecko 1.9.2（Firefox 4）及更早版本中，Firefox 對該元素實現了 {{domxref("HTMLSpanElement")}} 介面。
      </td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTMLElement("i")}}
