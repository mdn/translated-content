---
title: 理解邊界重疊的原因
slug: Web/CSS/CSS_box_model/Mastering_margin_collapsing
---

{{CSSRef}}當一個 Block 的 [下邊界範圍](/zh-TW/docs/Web/CSS/margin-bottom) ( margin-bottom ) 和一個 Block 的 [上邊界範圍](/zh-TW/docs/Web/CSS/margin-top) ( margin-top ) 都有設定時只會留下最大那個，這種情況我們稱為**邊界重疊** ( margin collapsing )。請留意設定了 float 或[絕對定位](/zh-TW/docs/Web/CSS/position#absolute)的元件並不會產生邊界重疊。

有三個標準情況會形成邊界重疊：

- 同一層的相鄰

  - : 兩個相鄰的元素邊界就會發生重疊，除非後者有加上 clear-fix。例如

    ```html
    <style>
      p:nth-child(1) {
        margin-bottom: 13px;
      }
      p:nth-child(2) {
        margin-top: 87px;
      }
    </style>

    <p>下邊界範圍會...</p>
    <p>...跟這個元素的上邊界範圍重疊。</p>
    ```

    如果邊界會合併的的話，理所當然會認為上例中的上下兩個元素會合成一個 100px 的邊界範圍。

    但其實會發生重疊，而且只會留下最大的邊界範圍，以此例子來說，邊界範圍就是 87px。

- 父元素與第一個/最後一個子元素

  - : 如果第一個子元素跟父元素的上邊界範圍 ( margin-top ) 貼在一起，也會發生邊界重疊的情況。除非父元素有設定邊框 ( border ) 、 內距 ( padding )、內容設定為 inline 或是有加上 clear-fix，這些都會隔開子元素和父元素的屬性。

    最後一個子元素也是，但是與父元素的下邊界範圍 ( margin-bottom ) 更容易被隔開，因為父元素可以設定這些屬性。例如：

    ```html
    <style type="text/css">
      section {
        margin-top: 13px;
        margin-bottom: 87px;
      }

      header {
        margin-top: 87px;
      }

      footer {
        margin-bottom: 13px;
      }
    </style>

    <section>
      <header>上邊界重疊是 87</header>
      <footer>下邊界重疊還是 87 不能再高了</footer>
    </section>
    ```

- 空的元素

  - : 當同一個元素上邊界範圍可以直接貼到下邊界範圍時，也會發生邊界重疊。這種情況會發生在一個元素完全沒有設定邊框 ( border ) 、 內距 ( padding )、高度 ( height ) 、最小高度 ( min-height ) 、最大高度 ( max-height ) 、內容設定為 inline 或是加上 clear-fix 的時候。例如：

    ```html
    <style>
      p {
        margin: 0px;
      }
      div {
        margin-top: 13px;
        margin-bottom: 87px;
      }
    </style>

    <p>下邊界範圍是 87</p>
    <div></div>
    <p>...上邊界範圍也是 87。</p>
    ```

上面這些情況是會同時發生的，那時邊界重疊的原因又更複雜了。

比較特別的是，當計算的時候某些邊界範圍是負數，邊界重疊的結果會取最大值和最小值相加。舉例來說如果 -13px、8px 和 100px 疊在一起，邊界範圍的計算方法會是 100px - 13px 也就是 87px。

以上這些內容都是發生在 Block-Level 的元素，設定 floating 和 absolutely positioned 的元素完全不用擔心邊界重疊的計算。

## 參見

- [CSS Reference](/zh-TW/docs/Web/CSS/Reference)
- CSS 重要概念：

  - [CSS 語法](/zh-TW/docs/Web/CSS/Syntax)
  - [@ 規則](/zh-TW/docs/Web/CSS/At-rule)
  - [註釋](/zh-TW/docs/Web/CSS/Comments)
  - [優先級](/zh-TW/docs/Web/CSS/Specificity)
  - [繼承](/zh-TW/docs/Web/CSS/Inheritance)
  - [盒模型](/zh-TW/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [佈局模式](/zh-TW/docs/Web/CSS/Layout_mode)
  - [視覺格式化模型](/zh-TW/docs/Web/CSS/Visual_formatting_model)
  - [外邊距合併](/zh-TW/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - 值

    - [初始值](/zh-TW/docs/Web/CSS/initial_value)
    - [計算值](/zh-TW/docs/Web/CSS/computed_value)
    - [解析值](/zh-TW/docs/Web/CSS/resolved_value)
    - [指定值](/zh-TW/docs/Web/CSS/specified_value)
    - [應用值](/zh-TW/docs/Web/CSS/used_value)
    - [實際值](/zh-TW/docs/Web/CSS/actual_value)

  - [特性值定義語法](/zh-TW/docs/Web/CSS/Value_definition_syntax)
  - [特性簡寫](/zh-TW/docs/Web/CSS/Shorthand_properties)
  - [可置換元素](/zh-TW/docs/Web/CSS/Replaced_element)
