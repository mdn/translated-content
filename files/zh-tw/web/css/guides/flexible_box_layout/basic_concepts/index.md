---
title: Flexbox 的基本概念
short-title: 基本概念
slug: Web/CSS/Guides/Flexible_box_layout/Basic_concepts
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[彈性盒子版面配置](/zh-TW/docs/Web/CSS/Guides/Flexible_box_layout)模組（通常稱為 flexbox）是一種一維的版面配置模型，用於在項目之間分配空間，並包含多種對齊功能。本文概述了 flexbox 的主要特性，我們將在後續的指南中更詳細地探討這些特性。

當我們說 flexbox 是一維的，我們描述的是 flexbox 一次只處理一個維度的版面配置——要麼是列，要麼是欄。這與 [CSS 網格版面配置](/zh-TW/docs/Web/CSS/Guides/Grid_layout)的二維模型形成對比，後者可以同時控制欄和列。

## flexbox 的兩個軸線

使用 flexbox 時，你需要從兩個軸線來思考——**主軸**與**交錯軸**。[主軸](#主軸)由 {{cssxref("flex-direction")}} 屬性定義，而[交錯軸](#交錯軸)則與其垂直。我們在 flexbox 中所做的每件事都與這兩個軸線有關，因此從一開始就了解它們的運作方式非常重要。

### 主軸

{{glossary("main axis", "主軸")}}由 `flex-direction` 定義，它有四個可能的值：

- `row`
- `row-reverse`
- `column`
- `column-reverse`

如果你選擇 `row` 或 `row-reverse`，你的主軸將沿著列以**行內方向**延伸。

![若 flex-direction 設定為 row，主軸會沿著列以行內方向延伸。](basics1.svg)

選擇 `column` 或 `column-reverse`，你的主軸將以**區塊方向**延伸，從頁面頂部到底部。

![若 flex-direction 設定為 column，主軸會以區塊方向延伸。](basics2.svg)

### 交錯軸

{{glossary("cross axis", "交錯軸")}}與主軸垂直。因此，如果你的 `flex-direction`（主軸）設定為 `row` 或 `row-reverse`，交錯軸就會沿著欄向下延伸。

![若 flex-direction 設定為 row，則交錯軸會以區塊方向延伸。](basics3.svg)

如果你的主軸是 `column` 或 `column-reverse`，那麼交錯軸就會沿著列延伸。

![若 flex-direction 設定為 column，則交錯軸會以行內方向延伸。](basics4.svg)

## 起始線與終點線

另一個需要理解的重點是，flexbox 對文件的書寫模式沒有任何假設。Flexbox 不會只假設所有文字行都從文件的左上角開始，向右側延伸，新行則出現在下方。相反地，它支援所有書寫模式，就像其他的[邏輯屬性與值](/zh-TW/docs/Web/CSS/Guides/Logical_properties_and_values)一樣。

你可以在後續的文章中[閱讀更多關於 flexbox 與書寫模式之間的關係](/zh-TW/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods#書寫模式)；然而，以下的描述應該有助於解釋為什麼我們在描述 flex 項目流動方向時，不使用左、右、上、下這些詞。

如果 `flex-direction` 是 `row`，且我正在使用英文，那麼主軸的起始邊將在左側，終點邊在右側。

![在英文環境下，起始邊在左側。](basics5.svg)

如果我使用阿拉伯文，那麼我的主軸起始邊將在右側，終點邊在左側。

![在由右至左（RTL）語言中，起始邊在右側。](basics6.svg)

在這兩種情況下，交錯軸的起始邊都在 flex 容器的頂部，終點邊在底部，因為這兩種語言都具有水平書寫模式。

過了一段時間，用起始和終點來思考而不是左和右會變得很自然，這在你處理其他遵循相同模式的版面配置方法（如 CSS 網格版面配置）時會很有用。

## flex 容器

使用 flexbox 排版的區域稱為 **flex 容器**。要建立一個 {{glossary("flex container", "flex 容器")}}，請將該區域的 {{cssxref("display")}} 屬性設定為 `flex`。當我們這麼做時，該容器的直接子元素就會變成 **flex 項目**。你可以使用 `inline flex` 或 `inline-flex` 來建立行內 flex 容器，或使用 `block flex` 或 `flex` 來建立區塊級 flex 容器，藉此明確控制容器本身是以行內還是區塊格式化上下文顯示。

### 初始值

如同 CSS 中的所有屬性，flexbox 也定義了一些初始值，所以新的 flex 容器內容將會如下表現：

- 項目以列的方式顯示（{{cssxref("flex-direction")}} 屬性的預設值為 `row`）。
- 項目從主軸的起始邊開始。
- 項目在主維度上不會伸展，但可以縮小（flex 項目的 {{cssxref("flex-grow")}} 屬性預設值為 `0`，而其 {{cssxref("flex-shrink")}} 屬性預設值為 `1`）。
- 項目將會伸展以填滿交錯軸的尺寸（{{cssxref("align-items")}} 屬性的預設值為 `stretch`）。
- flex 項目的 {{cssxref("flex-basis")}} 屬性預設值為 `auto`。這表示在每種情況下，它將等於水平書寫模式下的 flex 項目 {{cssxref("width")}}，以及垂直書寫模式下的 flex 項目 {{cssxref("height")}}。如果對應的 `width`／`height` 也設定為 `auto`，則會改用 `flex-basis` 的 `content` 值。
- 所有項目都會在單一列中（{{cssxref("flex-wrap")}} 屬性的預設值為 `nowrap`），如果它們組合的 `width`／`height` 超過容器元素的 `width`／`height`，就會溢出容器。

這樣的結果是，你的所有項目都會排成一列，並以其內容的大小作為它們在主軸上的尺寸。如果項目數量多到無法容納在容器中，它們不會換行，而是會溢出。如果某些項目比其他項目高，所有項目都會沿著交錯軸的整個長度伸展。

你可以在下方的即時範例中看到這種情況。點擊「Play」在 MDN Playground 中開啟範例，並編輯項目或新增項目來嘗試 flexbox 的初始行為：

```html live-sample___the-flex-container
<div class="box">
  <div>一</div>
  <div>二</div>
  <div>三<br />有<br />額外<br />文字</div>
</div>
```

```css live-sample___the-flex-container
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
}
```

{{EmbedLiveSample("the-flex-container")}}

### 改變 flex-direction

在 flex 容器上加入 {{cssxref("flex-direction")}} 屬性，可以讓我們改變 flex 項目的顯示方向。設定 `flex-direction: row-reverse` 會讓項目繼續沿著列顯示，但是起始線和終點線會對調。

如果我們將 `flex-direction` 改為 `column`，主軸會切換，我們的項目現在會以欄的方式顯示。設定 `column-reverse`，起始線和終點線會再次對調。

下方的即時範例將 `flex-direction` 設定為 `row-reverse`。試試其他值——`row`、`column` 和 `column-reverse`——看看內容會發生什麼變化。

```html live-sample___flex-direction
<div class="box">
  <div>一</div>
  <div>二</div>
  <div>三</div>
</div>
```

```css live-sample___flex-direction
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-direction: row-reverse;
}
```

{{EmbedLiveSample("flex-direction")}}

## 使用 flex-wrap 建立多行 flex 容器

雖然 flexbox 是一維模型，但可以讓 flex 項目換行到多行。如果你這樣做，你應該將每一行視為一個新的 flex 容器。任何空間分配都將在每一行上進行，而不會參考前一行或後一行。

要產生換行行為，請加入 {{cssxref("flex-wrap")}} 屬性並設定值為 `wrap`。現在，如果你的項目太大而無法在同一行顯示，它們將會換到下一行。下方的即時範例包含已給定 `width` 的項目。這些項目的總寬度超過了 flex 容器的寬度。由於 `flex-wrap` 設定為 `wrap`，項目會換到多行。如果你將其設定為 `nowrap`（這是初始值），它們將會縮小以適應容器。它們會縮小是因為它們使用了 flexbox 的初始值，包括 `flex-shrink: 1`，這允許項目縮小。如果項目無法縮小，或無法縮小到足以容納，使用 `nowrap` 會導致[溢位](/zh-TW/docs/Learn_web_development/Core/Styling_basics/Overflow)。

```html live-sample___flex-wrap
<div class="box">
  <div>一</div>
  <div>二</div>
  <div>三</div>
</div>
```

```css live-sample___flex-wrap
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  width: 200px;
}

.box {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
}
```

{{EmbedLiveSample("flex-wrap")}}

在[精通 flex 項目的換行](/zh-TW/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)指南中了解更多關於 flex 項目換行的資訊。

## flex-flow 簡寫屬性

你可以將 `flex-direction` 和 `flex-wrap` 這兩個屬性合併到 {{cssxref("flex-flow")}} 簡寫屬性中。

在下方的即時範例中，試著將第一個值改為 `flex-direction` 的允許值之一——`row`、`row-reverse`、`column` 或 `column-reverse`，並將第二個值改為 `wrap` 和 `nowrap`。

```html live-sample___flex-flow
<div class="box">
  <div>一</div>
  <div>二</div>
  <div>三</div>
</div>
```

```css live-sample___flex-flow
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  width: 200px;
}

.box {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-flow: row wrap;
}
```

{{EmbedLiveSample("flex-flow", "600", "100")}}

## 應用於 flex 項目的屬性

為了控制每個 flex 項目的行內尺寸，我們透過三個屬性直接鎖定它們：

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

我們將在下面簡要介紹這些屬性，但如果你想要更全面的資訊，請參閱[控制主軸上 flex 項目的比例](/zh-TW/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)指南。

在我們能夠理解這些屬性之前，我們需要考慮**可用空間**的概念。當我們改變這些 flex 屬性的值時，我們正在改變可用空間在我們的項目之間分配的方式。這個可用空間的概念在我們討論對齊項目時也很重要。

如果我們在一個 500 像素寬的容器中有三個 100 像素寬的項目，那麼我們需要用來排版項目的空間是 300 像素。這留下了 200 像素的可用空間。如果我們不改變初始值，flexbox 會將該空間放在最後一個項目之後。

![這個 flex 容器在排版完項目後有可用空間。](basics7.svg)

如果我們希望項目長大並填滿空間，那麼我們需要一種方法來在項目之間分配剩餘的空間。我們應用於項目本身的 `flex` 屬性，能夠決定該可用空間應如何在同層級的 flex 項目之間分配。

### flex-basis 屬性

`flex-basis` 定義了該項目在可用空間方面的尺寸。此屬性的初始值為 `auto`——在這種情況下，瀏覽器會查看該項目是否有尺寸。在上面的範例中，所有項目都有 100 像素的寬度。這被用作 `flex-basis`。

如果項目沒有尺寸，則內容的尺寸被用作 flex-basis。這就是為什麼當我們只在父元素上宣告 `display: flex` 來建立 flex 項目時，所有項目都會移到一列中，並且只佔用顯示其內容所需的空間。

### flex-grow 屬性

當 `flex-grow` 屬性設定為正整數時，如果有可用空間，flex 項目可以沿著主軸從其 `flex-basis` 開始增長。項目是否會伸展以佔用該軸上的所有可用空間，或僅佔用部分可用空間，取決於其他項目是否也允許增長以及它們的 `flex-grow` 屬性值。

每個具有正值的項目會根據其 `flex-grow` 值消耗一部分可用空間。如果我們將上述範例中的所有項目都設定 `flex-grow` 值為 1，那麼 flex 容器中的可用空間將在我們的項目之間平均分配，它們將會伸展以填滿主軸上的容器。如果我們給第一個項目一個 `flex-grow` 值為 2，而其他項目各為 1，則總共有 4 個部分；可用空間的 2 個部分將分配給第一個項目（在上述範例中為 200 像素中的 100 像素），而其他兩個項目各分配 1 個部分（在 200 像素總量中各 50 像素）。

### flex-shrink 屬性

`flex-grow` 屬性處理在主軸上增加空間，而 `flex-shrink` 屬性則控制如何減少空間。如果我們在容器中沒有足夠的空間來排版我們的項目，並且 `flex-shrink` 設定為正整數，那麼項目可以變得比 `flex-basis` 更小。與 `flex-grow` 一樣，可以分配不同的值以使一個項目比其他項目收縮得更快——`flex-shrink` 值設定較高的項目將比其同層級值較低的項目收縮得更快。

一個項目可以縮小到其 {{cssxref("min-content")}} 尺寸。在計算將發生的實際收縮量時，會考慮到這個最小尺寸，這意味著 `flex-shrink` 的行為可能看起來不如 `flex-grow` 一致。因此，我們將在[控制主軸上項目比例](/zh-TW/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)一文中更詳細地探討這個演算法的運作方式。

> [!NOTE]
> `flex-grow` 和 `flex-shrink` 的這些值是比例。通常，如果我們將所有項目都設定為 `flex: 1 1 200px`，然後希望一個項目以兩倍的速度增長，我們會將該項目設定為 `flex: 2 1 200px`。但是，如果你願意，也可以使用 `flex: 10 1 200px` 和 `flex: 20 1 200px`。

### flex 屬性的簡寫值

你很少會看到 `flex-grow`、`flex-shrink` 和 `flex-basis` 屬性單獨使用；相反地，它們被組合到 {{cssxref("flex")}} 簡寫屬性中。`flex` 簡寫屬性允許你按此順序設定這三個值——`flex-grow`、`flex-shrink`、`flex-basis`。

下方的即時範例允許你測試 `flex` 簡寫屬性的不同值；請記住，第一個值是 `flex-grow`。給它一個正值意味著項目可以增長。第二個是 `flex-shrink`——有正值時，項目可以縮小，但前提是它們的總值溢出主軸。最後一個值是 `flex-basis`；這是項目用作增長和縮小基礎的值。

```html live-sample___flex-properties
<div class="box">
  <div class="one">一</div>
  <div class="two">二</div>
  <div class="three">三</div>
</div>
```

```css live-sample___flex-properties
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
}

.one {
  flex: 1 1 auto;
}

.two {
  flex: 1 1 auto;
}

.three {
  flex: 1 1 auto;
}
```

{{EmbedLiveSample("flex-properties")}}

還有一些預定義的簡寫值，涵蓋了大多數使用情境。你經常會在教學中看到這些值，而且在許多情況下，這些就是你所需要使用的全部。預定義的值如下：

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

`initial` 值是一個[全 CSS 關鍵字](/zh-TW/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#全_css_關鍵字)，代表屬性的初始值。設定 `flex: initial` 會將項目重設為三個詳細屬性的[初始值](#初始值)，這與 `flex: 0 1 auto` 相同。`flex-grow` 的初始值為 `0`，所以項目不會增長超過其 `flex-basis` 尺寸。`flex-shrink` 的初始值為 `1`，所以項目可以在需要時縮小而不是溢出。`flex-basis` 的初始值為 `auto`。項目要麼使用在主維度上設定的任何尺寸，要麼從內容尺寸中獲取其尺寸。

使用 `flex: auto` 與使用 `flex: 1 1 auto` 相同；這與 `flex: initial` 相似，只是項目可以增長並填滿容器，也可以在需要時縮小。

使用 `flex: none` 將建立完全不具彈性的 flex 項目。這就像你寫了 `flex: 0 0 auto`。項目不能增長或縮小，並將使用 `flex-basis` 為 `auto` 的 flexbox 進行排版。

你在教學中經常看到的簡寫是 `flex: 1` 或 `flex: 2` 等等。這分別與寫 `flex: 1 1 0` 或 `flex: 2 1 0` 等等相同。由於 `flex-basis: 0`，項目獲得最小尺寸，然後按比例增長以填滿可用空間。在這種情況下，`flex-shrink` 值為 `1` 是多餘的，因為項目從最小尺寸開始——它們沒有被賦予任何可能導致它們溢出 flex 容器的尺寸。

在下方的即時範例中試試這些簡寫值。

```html live-sample___flex-shorthands
<div class="box">
  <div class="one">一</div>
  <div class="two">二</div>
  <div class="three">三</div>
</div>
```

```css live-sample___flex-shorthands
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
}

.one {
  flex: 1;
}

.two {
  flex: 1;
}

.three {
  flex: 1;
}
```

{{EmbedLiveSample("flex-shorthands")}}

## 項目間的對齊、兩端對齊與可用空間分配

flexbox 的一個關鍵特性是能夠在主軸和交錯軸上對齊和兩端對齊項目，以及在 flex 項目之間分配空間。請注意，這些屬性是設定在 flex 容器上，而不是在項目本身上。

### align-items

{{cssxref("align-items")}} 屬性在交錯軸上對齊所有的 flex 項目。

此屬性的初始值為 `stretch`，這就是為什麼 flex 項目預設會伸展到 flex 容器的高度（如果 `flex-direction` 設定為 `column` 或 `column-reverse`，則為寬度）。這個高度可能來自容器中最高的項目，或是在 flex 容器本身上設定的尺寸。

你可以改為將 `align-items` 設定為 `flex-start`（或簡寫為 `start`），以使項目在 flex 容器的開頭對齊；或設定為 `flex-end`（或簡寫為 `end`），以將它們結尾對齊；或設定為 `center`，以將它們置中對齊。在即時範例中試試這個——我給了 flex 容器一個高度，以便你可以看到項目如何在容器內移動。看看如果你將 align-items 的值設定為以下這些會發生什麼：

- `stretch`
- `flex-start`
- `flex-end`
- `start`
- `end`
- `center`
- `baseline`
- `last baseline`

```html live-sample___align-items
<div class="box">
  <div>一</div>
  <div>二</div>
  <div>三<br />有<br />額外<br />文字</div>
</div>
```

```css live-sample___align-items
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  width: 500px;
  height: 130px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: flex-start;
}
```

{{EmbedLiveSample("align-items")}}

`align-items` 設定在 flex 容器上，並影響所有的 flex 項目。如果你想讓某個 flex 項目的對齊方式與其他項目不同，你可以在該 flex 項目上設定 {{cssxref("align-self")}}。

### justify-content

{{cssxref("justify-content")}} 屬性用於在主軸上對齊項目，也就是 `flex-direction` 設定的流動方向。初始值為 `flex-start`，這會將項目對齊到容器的起始邊，但你也可以將值設定為 `flex-end` 以將它們對齊到結尾，或 `center` 以將它們置中對齊。

你還可以使用 `space-between` 值，將項目排版後的所有剩餘空間平均分配到項目之間，這樣每個項目之間就會有相等的空間。要使每個項目的左右兩側（或欄的頂部和底部）有相等的空間，請使用 `space-around` 值。使用 `space-around`，項目兩端各有一半大小的空間。或者，要使項目周圍有相等的空間，請使用 `space-evenly` 值。使用 `space-evenly`，項目兩端各有一個完整大小的空間。

在即時範例中試試 `justify-content` 的以下值：

- `start`
- `end`
- `left`
- `right`
- `normal`
- `flex-start`
- `flex-end`
- `center`
- `space-around`
- `space-between`
- `space-evenly`
- `stretch`

```html live-sample___justify-content
<div class="box">
  <div>一</div>
  <div>二</div>
  <div>三</div>
</div>
```

```css live-sample___justify-content
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  justify-content: flex-start;
}
```

{{EmbedLiveSample("justify-content")}}

[在 flex 容器中對齊項目](/zh-TW/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)一文更深入地探討了這些屬性，以便更好地理解它們的運作方式。然而，這些基本範例在大多數使用情境中都很有用。

### justify-items

[`justify-items`](/zh-TW/docs/Web/CSS/Reference/Properties/justify-items) 屬性在 flexbox 版面配置中會被忽略。

### place-items 與 place-content

[`place-items`](/zh-TW/docs/Web/CSS/Reference/Properties/place-items) 屬性是 `align-items` 和 `justify-items` 的簡寫屬性。如果設定在 flex 容器上，它會設定對齊方式，但不會設定兩端對齊，因為 `justify-items` 在 flexbox 中會被忽略。

還有另一個簡寫屬性，[`place-content`](/zh-TW/docs/Web/CSS/Reference/Properties/place-content)，它定義了 {{cssxref("align-content")}} 和 `justify-content` 屬性。`align-content` 屬性只影響會換行的 flex 容器，其詳細說明請參閱 [flex 容器中的項目對齊](/zh-TW/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)。

## 後續步驟

閱讀本文後，你應該對 flexbox 的基本特性有了了解。在下一篇文章中，我們將探討[此規範如何與 CSS 的其他部分相關](/zh-TW/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)。
