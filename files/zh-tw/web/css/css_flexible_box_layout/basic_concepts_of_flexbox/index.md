---
title: CSS彈性盒子用法
slug: Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
---

{{CSSRef}}

CSS3 **彈性盒子**，又稱**flexbox**，是為了適應不同螢幕尺寸和顯示設備而生的[佈局模式](/zh-TW/docs/Web/CSS/Layout_mode)。針對許多應用而言，不用 floats 的彈性盒子模型會比塊狀模型（block model）易用，彈性容器的邊緣也不會與內容的邊緣重疊。

多數設計師會發現 flexbox 用起來比 box 簡單得多。像是不多注意 `div` 的話，它就會經常違反設計師意願地，跑到頁頂去 ── 令 footer 附著在頁底，也因此變得很棘手。flexbox 的寬高能改變以適應顯示空間，將較低的元件固定住。Flexbox 邏輯也能讓你確實令 `div` 壓在頁面的右方或底部。Flexbox 元素的顯示順序，與原始碼的顯示順序相互獨立。

一些時髦的佈局，也能因而透過更簡潔的程式碼完成。這種有意的獨立性只影響視覺渲染，基於 HTML 原始碼的語意順序及瀏覽不會受到影響。

> **備註：** 儘管 [CSS 彈性盒子佈局規範](http://www.w3.org/TR/css3-flexbox/)還處於最終徵求意見稿（Last Call Working Draft）階段（參見[最新編輯草案](http://dev.w3.org/csswg/css-flexbox/)）、也不是所有瀏覽器都實做彈性盒子的所有功能。但這麼說好了，現在主流的瀏覽器，都對 flexbox 有著良好的支持。請參見[相容性表格](/zh-TW/docs/Web/Guide/CSS/Flexible_boxes#Browser_compatibility)的具體屬性，以獲取最新的相容狀態。

## 彈性盒子的概念

Flex 排版的大致定義，是能更改該項目的長與（或）高，以便貼合任何顯示設備的空間。Flex container 能針對該元件擴張以便填補可用的空間、或收縮以便阻止空間溢出。

塊狀佈局（Block layout）以垂直方向為準、行內佈局（Inline layout）以水平方向為準、而彈性佈局（Flexbox layout）則同時允許這兩種。塊狀佈局雖適於頁面顯示，但在程式元件（application component）需要在用戶代理（user agent）變更、手機從垂直方向翻轉到水平方向……等變更定位、大小、拉伸、收縮的情形下，這種佈局就很難用了。彈性盒子佈局長於小規模佈局、而剛剛流行的格線佈局（Grid layout）則長於大規模佈局。二者皆為 CSS 工作小組為在不同用戶代理、書寫模式、和其他要求下的 Web 應用程式，提供良好互通性的一部分。

## 彈性盒子的字彙

在彈性盒子的世界，我們不會稱水平（inline）或垂直（block），而是主軸（main axis）與切軸（cross axis）。如果 `flex-direction` 是 `column`，主軸就會充當垂直、而切軸則充當水平。請參考下面的圖，它展示了一個 `flex-direction` 是 `row` 的彈性容器，意味著該彈性項目會基於主軸，作水平排列。

![flex_terms.png](/files/3739/flex_terms.png)

- 彈性容器（Flex container）
  - : 包住彈性項目（Flex item）的父元素。在 {{Cssxref("display")}} 屬性用上 `flex` 或 `inline-flex` 值的，就是彈性容器。
- 彈性項目（Flex item）
  - : 所有彈性容器的子元素都會變成彈性項目。直接包含在彈性容器的文字，會被包裝成匿名的 Flex 項目。
- 軸（Axes）
  - : 所有彈性盒子布局都有兩個軸。**主軸（main axis）**是跟隨著彈性項目順序的軸、而**切軸(cross axis)**是垂直於主軸的軸。 [`flex-direction`](/zh-TW/docs/Web/CSS/flex-direction) 屬性啟用主軸。
    - [`justify-content`](/zh-TW/docs/Web/CSS/justify-content) 屬性定義目前彈性項目的主軸如何擺放。
    - [`align-items`](/zh-TW/docs/Web/CSS/align-items) 屬性定義目前彈性項目的切軸如何擺放。
    - [`align-self`](/zh-TW/docs/Web/CSS/align-self) 屬性定義目前單一彈性項目如何對齊。這個設定會覆蓋 `align-items` 的預設值。
- 方向（Directions）
  - : 彈性容器的 **main start**/**main end** 與 **cross start**/**cross end** sides 描述了彈性項目流的起點與終點。它們跟隨著由 `writing-mode` 所建立的向量中，彈性容器的主軸與切軸排列（左至右或右至左……等等）。 [`order`](/zh-TW/docs/Web/CSS/order) assigns elements to ordinal groups and determines which elements appear first.
    - [`flex-flow`](/zh-TW/docs/Web/CSS/flex-flow) 屬性是 [`flex-direction`](/zh-TW/docs/Web/CSS/flex-direction) 與 [`flex-wrap`](/zh-TW/docs/Web/CSS/flex-wrap) 屬性的簡寫，描述了彈性項目的整體布局。
- Lines
  - : Flex items can be laid out on either a single line or on several lines according to the [`flex-wrap`](/zh-TW/docs/Web/CSS/flex-wrap) property, which controls the direction of the cross axis and the direction in which new lines are stacked.
- Dimensions
  - : The flex items' agnostic equivalents of height and width are **main size** and **cross size,** which respectively follow the main axis and cross axis of the flex container. The [`min-height`](/zh-TW/docs/Web/CSS/min-height) and [`min-width`](/zh-TW/docs/Web/CSS/min-width) properties initial value is 0.
    - The [`flex`](/zh-TW/docs/Web/CSS/flex) property shorthands the [`flex-grow`](/zh-TW/docs/Web/CSS/flex-grow), [`flex-shrink`](/zh-TW/docs/Web/CSS/flex-shrink), and [`flex-basis`](/zh-TW/docs/Web/CSS/flex-basis) properties to establish the flexibility of the flex items.

## 設計一個彈性盒子

要設計基於這種風格的 CSS 元素，請把 [display](/zh-TW/docs/Web/CSS/display) 屬性設為：

```css
display: flex;
```

或：

```css
display: inline-flex;
```

這樣一來，元素就會變成彈性容器，而它的子元素們就會變成彈性項目。`flex` 值會讓彈性容器變成塊級元素（block-level element）、`inline-flex` 則會讓彈性容器成為單一的行內元素（atomic inline-level element）。

> **備註：** 如果需要支援較舊的瀏覽器，請把廠商前輟標記（vendor prefix tag）寫在 `display` 屬性（property），而不是屬性值（attribute）。例如：`display: -webkit-flex`。

## 彈性項目需要留心

Text that is directly contained inside a flex container is automatically wrapped in an anonymous flex item. However, an anonymous flex item that contains only white space is not rendered, as if it were designated `display: none`.

Absolutely positioned children of a flex container are positioned so that their static position is determined in reference to the main start content-box corner of their flex container.

The margins of adjacent flex items do not collapse. Using `auto` margins absorbs extra space in the vertical or horizontal direction and can be used for alignment or to separate adjacent flex items. See [Aligning with 'auto' margins](https://drafts.csswg.org/css-flexbox-1/#auto-margins) in the W3C CSS Flexible Box Layout Module specification for more details.

Flexbox's alignment properties do "true" centering, unlike other centering methods in CSS. This means that the flex items will stay centered, even if they overflow the flex container. This can sometimes be problematic, however, if they overflow past the top edge of the page, or the left edge (in LTR languages like English; the problem occurs on the right edge in RTL languages like Arabic), as you can't scroll to that area, even if there is content there! In a future release, the alignment properties will be extended to have a "safe" option as well. For now, if this is a concern, you can instead use margins to achieve centering, as they'll respond in a "safe" way and stop centering if they overflow. Instead of using the `align-` properties, just put auto margins on the flex items you wish to center. Instead of the `justify-` properties, put auto margins on the outside edges of the first and last flex items in the flex container. The auto margins will "flex" and assume the leftover space, centering the flex items when there is leftover space, and switching to normal alignment when not. However, if you're trying to replace `justify-content` with margin-based centering in a multi-line flexbox, you're probably out of luck, as you need to put the margins on the first and last flex item on each line. Unless you can predict ahead of time which items will end up on which line, you can't reliably use margin-based centering in the main axis to replace the `justify-content` property.

Recall that while the display order of the elements is independent of their order in the source code, this independence affects only the visual rendering, leaving speech order and navigation based on the source order. Even the {{cssxref("order")}} property does not affect speech or navigation sequence. Thus developers must take care to order elements properly in the source so as not to damage the document's accessibility.

## 彈性盒子的屬性

### 不對彈性盒子生效的屬性

由於彈性盒子使用不同的排版演算法，所以有些屬性不太適合用在彈性容器內：

- [multiple column 模組](/zh-TW/docs/Web/CSS/CSS_multicol_layout/Using_multicol_layouts)的 `column-*` 屬性對彈性項目無效。
- {{cssxref("clear")}} 對彈性項目無效。
- {{cssxref("float")}} causes the `display` property of the element to compute to `block`.
- {{cssxref("vertical-align")}} 對已對齊的彈性項目無效。

## 示例

### 基本彈性排版示例

這個基本彈性將展示如何把「彈性化」引至某個元素、並在彈性狀態下相鄰該元素的表現。

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <style>
      .flex {
        /* basic styling */
        width: 350px;
        height: 200px;
        border: 1px solid #555;
        font: 14px Arial;

        /* flexbox setup */
        display: flex;
        flex-direction: row;
      }

      .flex > div {
        flex: 1 1 auto;
        width: 30px; /* To make the transition work nicely. (Transitions to/from
                        "width:auto" are buggy in Gecko and Webkit, at least.
                        See http://bugzil.la/731886 for more info.) */
        transition: width 0.7s ease-out;
      }

      /* colors */
      .flex > div:nth-child(1) {
        background: #009246;
      }
      .flex > div:nth-child(2) {
        background: #f1f2f1;
      }
      .flex > div:nth-child(3) {
        background: #ce2b37;
      }

      .flex > div:hover {
        width: 200px;
      }
    </style>
  </head>
  <body>
    <p>Flexbox nuovo</p>
    <div class="flex">
      <div>uno</div>
      <div>due</div>
      <div>tre</div>
    </div>
  </body>
</html>
```

### 聖杯排版示例

本示例將示範彈性盒子在不同的解析度之下，如何提供動態變更的能力。下圖將說明轉換。

![HolyGrailLayout.png](/files/3760/HolyGrailLayout.png)

這裡展示了貼合了瀏覽器視窗的排版，必須為智慧型手機視窗最佳化的情況。不僅尺寸要縮減，呈現順序也要改變。彈性盒子把這件事變得相當簡單。

```html
<!doctype html>
<html lang="en">
  <head>
    <style>
      body {
        font: 24px Helvetica;
        background: #999999;
      }

      #main {
        min-height: 800px;
        margin: 0;
        padding: 0;
        display: flex;
        flex-flow: row;
      }

      #main > article {
        margin: 4px;
        padding: 5px;
        border: 1px solid #cccc33;
        border-radius: 7pt;
        background: #dddd88;
        flex: 3 1 60%;
        order: 2;
      }

      #main > nav {
        margin: 4px;
        padding: 5px;
        border: 1px solid #8888bb;
        border-radius: 7pt;
        background: #ccccff;
        flex: 1 6 20%;
        order: 1;
      }

      #main > aside {
        margin: 4px;
        padding: 5px;
        border: 1px solid #8888bb;
        border-radius: 7pt;
        background: #ccccff;
        flex: 1 6 20%;
        order: 3;
      }

      header,
      footer {
        display: block;
        margin: 4px;
        padding: 5px;
        min-height: 100px;
        border: 1px solid #eebb55;
        border-radius: 7pt;
        background: #ffeebb;
      }

      /* Too narrow to support three columns */
      @media all and (max-width: 640px) {
        #main,
        #page {
          flex-direction: column;
        }

        #main > article,
        #main > nav,
        #main > aside {
          /* Return them to document order */
          order: 0;
        }

        #main > nav,
        #main > aside,
        header,
        footer {
          min-height: 50px;
          max-height: 50px;
        }
      }
    </style>
  </head>
  <body>
    <header>header</header>
    <div id="main">
      <article>article</article>
      <nav>nav</nav>
      <aside>aside</aside>
    </div>
    <footer>footer</footer>
  </body>
</html>
```

## 遊樂場

以下提供一些與彈性盒子相關的網站讓你親手操作：

- [Flexbox Playground](http://demo.agektmr.com/flexbox/)
- [Flexy Boxes](http://the-echoplex.net/flexyboxes)
- [Flexbox Properties Demonstration](http://codepen.io/justd/pen/yydezN)
- [Flexbox Froggy](http://flexboxfroggy.com/)

## 要注意的事情

有時候配置 Flex item 的演算法會有點難以理解。因此，在設計 Flexible box 時有一些指引，能讓你避免負面意義上的驚嘆。

Flexible box 通常會盡量貼合 [writing mode](/zh-TW/docs/CSS/writing-mode) 的配置，這意味著 **main start** 與 **main end** 會基於 **start** 與 **end** 的位置來配置。

**cross start** 與 **cross end** 依賴 **start** 或 **before** 的定義的位置，其依賴 [`direction` 的值](/zh-TW//docs/Web/CSS/direction)。

Page breaks are possible in flexible boxes layout as long as `break-` property allows it. CSS3 `break-after`, `break-before`, and `break-inside` as well as CSS 2.1 `page-break-before`, `page-break-after`, and `page-break-inside` properties are accepted on a flex container, flex items, and inside flex items.

## 參見

- [The Flexbugs project](https://github.com/philipwalton/flexbugs) for information on bugs in browsers' implementations of flexbox.
