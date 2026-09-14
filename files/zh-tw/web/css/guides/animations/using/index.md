---
title: 使用 CSS 動畫
short-title: 使用動畫
slug: Web/CSS/Guides/Animations/Using
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**CSS 動畫**能夠將 CSS 樣式組態從一個狀態轉場至另一個狀態。動畫由兩個組件組成：一個描述 CSS 動畫的樣式，以及一組指示動畫樣式開始與結束狀態的關鍵影格，其中也可能包含中間的途經點。

相較於傳統的腳本驅動動畫技術，CSS 動畫有三個主要優勢：

1. 對於基本動畫來說，它們很容易使用；你甚至不需要了解 JavaScript 就能建立它們。
2. 即使在系統負載中等的情況下，動畫也能順暢執行。簡單的動畫在 JavaScript 中常常表現不佳。繪製引擎可以使用跳格及其他技術，來盡可能地保持效能流暢。
3. 讓瀏覽器控制動畫序列，能讓瀏覽器最佳化效能與效率，例如，降低在目前不可見的分頁中執行動畫的更新頻率。

## 組態動畫

要建立一個 CSS 動畫序列，你需要為想加上動畫的元素設定 {{cssxref("animation")}} 屬性或其子屬性。這能讓你組態動畫序列應如何進行的時間設定、持續時間及其他細節。這並**不**會組態動畫的實際外觀，動畫外觀是透過 {{cssxref("@keyframes")}} At 規則來定義的，詳見下方的[使用關鍵影格定義動畫序列](#使用關鍵影格定義動畫序列)。

{{cssxref("animation")}} 屬性的子屬性如下：

- {{cssxref("animation-composition")}}
  - : 指定當多個動畫同時影響同一屬性時，要使用的{{Glossary("composite operation", "合成操作")}}。此屬性不屬於 `animation` 簡寫屬性的一部分。
- {{cssxref("animation-delay")}}
  - : 指定元素載入與動畫序列開始之間的延遲時間，以及動畫應該從頭開始，還是從動畫的中途開始。
- {{cssxref("animation-direction")}}
  - : 指定動畫的第一次迭代應該是向前還是向後，以及後續的迭代應該在每次執行序列時交替方向，還是重設到起點並重複。
- {{cssxref("animation-duration")}}
  - : 指定動畫完成一個週期的時間長度。
- {{cssxref("animation-fill-mode")}}
  - : 指定動畫在執行前後如何將樣式應用於其目標。
    > [!NOTE]
    > 在動畫的 [forwards](/zh-TW/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) 填充模式下，加上動畫的屬性行為就像被包含在一個設定好的 [`will-change`](/zh-TW/docs/Web/CSS/Reference/Properties/will-change) 屬性值中。如果在動畫期間建立了新的堆疊上下文，目標元素在動畫結束後會保留該堆疊上下文。
- {{cssxref("animation-iteration-count")}}
  - : 指定動畫應重複的次數。
- {{cssxref("animation-name")}}
  - : 指定描述動畫關鍵影格的 {{cssxref("@keyframes")}} At 規則名稱。
- {{cssxref("animation-play-state")}}
  - : 指定要暫停還是播放動畫序列。
- {{cssxref("animation-timeline")}}
  - : 指定用來控制 CSS 動畫進度的時間軸。
- {{cssxref("animation-timing-function")}}
  - : 透過建立加速度曲線，指定動畫如何在關鍵影格之間轉場。

## 使用關鍵影格定義動畫序列

在你組態好動畫的時間設定後，你需要定義動畫的外觀。這可以透過使用 {{cssxref("@keyframes")}} At 規則建立一或多個關鍵影格來完成。每個關鍵影格描述了被加上動畫的元素在動畫序列的特定時間點應該如何算繪。

由於動畫的時間設定是在組態動畫的 CSS 樣式中定義的，關鍵影格使用{{cssxref("percentage", "百分比", "", "1")}}來指示它們在動畫序列中發生的時間點。0% 表示動畫序列的第一個時刻，而 100% 表示動畫的最終狀態。因為這兩個時間點非常重要，所以它們有特殊的別名：`from` 和 `to`。兩者都是可選的。如果沒有指定 `from`/`0%` 或 `to`/`100%`，瀏覽器會使用所有屬性的計算值來開始或結束動畫。

你可以選擇性地包含額外的關鍵影格，以描述動畫開始與結束之間的中間步驟。

## 使用 animation 簡寫

{{cssxref("animation")}} 簡寫屬性有助於節省空間。舉例來說，我們在本文中使用過的一些規則：

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

…可以使用 `animation` 簡寫來取代。

```css
p {
  animation: 3s infinite alternate slide-in;
}
```

要了解更多關於使用 `animation` 簡寫時可以指定不同動畫屬性值的順序，請參見 {{cssxref("animation")}} 參考頁面。

## 設定多個動畫屬性值

CSS 動畫的完整屬性可以接受多個以逗號分隔的值。當你想要在單一規則中應用多個動畫，並為每個動畫設定不同的持續時間、迭代次數等時，可以使用此功能。讓我們看一些快速的範例來解釋不同的排列組合。

在第一個範例中，有三個持續時間和三個迭代次數的值。因此，每個動畫都會被指派一個與動畫名稱位置相同的持續時間和迭代次數值。`fadeInOut` 動畫被指派了 `2.5s` 的持續時間和 `2` 的迭代次數，而 `bounce` 動畫則被指派了 `1s` 的持續時間和 `5` 的迭代次數。

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s, 1s;
animation-iteration-count: 2, 1, 5;
```

在第二個範例中，設定了三個動畫名稱，但只有一個持續時間和迭代次數。在這種情況下，所有三個動畫都會被賦予相同的持續時間和迭代次數。

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 3s;
animation-iteration-count: 1;
```

在第三個範例中，指定了三個動畫，但只有兩個持續時間和迭代次數。在這種情況下，如果列表中的值不足以給每個動畫分配一個獨立的值，值的分配會從可用列表的第一個項目循環到最後一個項目，然後再循環回第一個項目。所以，`fadeInOut` 獲得 `2.5s` 的持續時間，`moveLeft300px` 獲得 `5s` 的持續時間，這是持續時間值列表中的最後一個值。現在持續時間值的分配重設為第一個值；因此，`bounce` 獲得 `2.5s` 的持續時間。迭代次數的值（以及你指定的任何其他屬性值）將以相同的方式被分配。

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s;
animation-iteration-count: 2, 1;
```

如果動畫數量和動畫屬性值的數量不匹配的情況反過來，比如說有五個 `animation-duration` 值對應三個 `animation-name` 值，那麼多餘或未使用的動畫屬性值，在這種情況下是兩個 `animation-duration` 值，將不會應用於任何動畫，並被忽略。

## 範例

### 讓文字滑過瀏覽器視窗

這個基本範例使用 {{cssxref("translate")}} 和 {{cssxref("scale")}} 轉場屬性來為 {{HTMLElement("p")}} 元素設定樣式，使文字從瀏覽器視窗的右側邊緣外滑入。

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
}

@keyframes slide-in {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}
```

在這個範例中，{{HTMLElement("p")}} 元素的樣式指定了動畫從開始到結束應花費 3 秒，這是透過 {{cssxref("animation-duration")}} 屬性設定的，而定義動畫序列關鍵影格的 {{ cssxref("@keyframes")}} At 規則名稱為 `slide-in`。

在這種情況下，我們只有兩個關鍵影格。第一個發生在 `0%`（使用別名 `from`）。在這裡，我們將元素的 {{cssxref("translate")}} 屬性設定為 `150vw`（也就是超出包含元素右側邊緣很遠的地方），並將元素的 {{cssxref("scale")}} 設定為 200%（或其預設行內尺寸的兩倍），這會使段落的寬度變為其 `<body>` 包含區塊的兩倍。這導致動畫的第一個影格會將標題繪製在瀏覽器視窗的右側邊緣之外。

第二個關鍵影格發生在 `100%`（使用別名 `to`）。{{cssxref("translate")}} 屬性被設定為 `0%`，元素的 {{cssxref("scale")}} 被設定為 `1`，也就是 `100%`。這會使標題在其預設狀態下結束動畫，緊貼著內容區域的左側邊緣。

```html
<p>
  毛毛蟲和愛麗絲沉默地對望了一會兒：最後毛毛蟲從嘴裡拿出水煙管，用一種慵懶、睏倦的聲音對她說話。
</p>
```

> [!NOTE]
> 重新載入頁面以查看動畫。

{{EmbedLiveSample("讓文字滑過瀏覽器視窗","100%","250")}}

### 新增另一個關鍵影格動畫

讓我們在前一個範例的動畫中加入另一個關鍵影格。假設我們希望愛麗絲的名字在從右向左移動時變成粉紅色並放大，然後再縮回其原始大小和顏色。雖然我們可以改變 {{cssxref("font-size")}}，但改變任何影響盒模型的屬性都會對效能產生負面影響。取而代之的是，我們將她的名字用 {{htmlelement("span")}} 包裹起來，然後分別對其進行縮放和上色。這需要新增第二個只影響 `<span>` 的動畫：

```css
@keyframes grow-shrink {
  25%,
  75% {
    scale: 100%;
  }

  50% {
    scale: 200%;
    color: magenta;
  }
}
```

現在完整的程式碼如下：

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
}
p span {
  display: inline-block;
  animation-duration: 3s;
  animation-name: grow-shrink;
}

@keyframes slide-in {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}

@keyframes grow-shrink {
  25%,
  75% {
    scale: 100%;
  }

  50% {
    scale: 200%;
    color: magenta;
  }
}
```

我們在「愛麗絲」周圍加上了一個 {{htmlelement("span")}}：

```html
<p>
  毛毛蟲和<span>愛麗絲</span>沉默地對望了一會兒：最後毛毛蟲從嘴裡拿出水煙管，用一種慵懶、睏倦的聲音對她說話。
</p>
```

這告訴瀏覽器，在動畫的前 25% 和後 25% 期間，名字應該是正常的，但在中間部分，它會變成粉紅色，同時被放大再縮小。我們將 span 的 {{cssxref("display")}} 屬性設定為 `inline-block`，因為 `transform` 屬性不會影響非替換{{glossary("inline-level content", "行內級內容")}}。

> [!NOTE]
> 重新載入頁面以查看動畫。

{{EmbedLiveSample("新增另一個關鍵影格動畫","100%","250")}}

### 重複動畫

要讓動畫重複播放，可以使用 {{cssxref("animation-iteration-count")}} 屬性來指示動畫重複的次數。在這種情況下，讓我們使用 `infinite` 來讓動畫無限重複：

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: infinite;
}
```

```css hidden
@keyframes slide-in {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}
```

```html hidden
<p>
  毛毛蟲和愛麗絲沉默地對望了一會兒：最後毛毛蟲從嘴裡拿出水煙管，用一種慵懶、睏倦的聲音對她說話。
</p>
```

{{EmbedLiveSample("重複動畫","100%","250")}}

### 讓動畫來回移動

這樣做讓它重複了，但每次開始動畫時都跳回起點，這很奇怪。我們真正想要的是它在螢幕上來回移動。這可以透過將 {{cssxref("animation-direction")}} 設定為 `alternate` 來輕鬆實現：

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

```css hidden
@keyframes slide-in {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}
```

```html hidden
<p>
  毛毛蟲和愛麗絲沉默地對望了一會兒：最後毛毛蟲從嘴裡拿出水煙管，用一種慵懶、睏倦的聲音對她說話。
</p>
```

{{EmbedLiveSample("讓動畫來回移動","100%","250")}}

### 使用動畫事件

你可以透過使用動畫事件來獲得對動畫的額外控制——以及關於它們的有用訊息。這些事件由 {{domxref("AnimationEvent")}} 物件表示，可用於偵測動畫何時開始、結束以及開始新的迭代。每個事件都包含它發生的時間以及觸發事件的動畫名稱。

我們將修改滑動文字的範例，以便在每個動畫事件發生時輸出一些訊息，這樣我們就可以看看它們是如何運作的。

我們包含了與前一個範例相同的關鍵影格動畫。這個動畫將持續 3 秒，名為「slide-in」，重複 3 次，並且每次都以交替的方向移動。在 {{cssxref("@keyframes")}} 中，縮放和位移沿著 x 軸被操作，以使元素在螢幕上滑動。

```css
.slide-in {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: 3;
  animation-direction: alternate;
}
```

```css hidden
@keyframes slide-in {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}
```

#### 新增動畫事件監聽器

我們將使用 JavaScript 程式碼來監聽所有三種可能的動畫事件。這段程式碼組態了我們的事件監聽器；我們在文件首次載入時呼叫它來進行設定。

```js
const element = document.getElementById("watch-me");
element.addEventListener("animationstart", listener, false);
element.addEventListener("animationend", listener, false);
element.addEventListener("animationiteration", listener, false);

element.className = "slide-in";
```

這是非常標準的程式碼；你可以在 {{domxref("eventTarget.addEventListener()")}} 的文件中找到關於它如何運作的詳細訊息。這段程式碼做的最後一件事是將我們要加上動畫的元素的 `class` 設定為「slide-in」；我們這樣做是為了啟動動畫。

為什麼？因為 `animationstart` 事件在動畫一開始就觸發，而在我們的例子中，這發生在我們的程式碼執行之前。所以我們將在事後透過將元素的 class 設定為加上動畫的樣式來自己啟動動畫。

#### 接收事件

事件會被傳遞到 `listener()` 函式，如下所示。

```js
function listener(event) {
  const l = document.createElement("li");
  switch (event.type) {
    case "animationstart":
      l.textContent = `已開始：經過時間為 ${event.elapsedTime}`;
      break;
    case "animationend":
      l.textContent = `已結束：經過時間為 ${event.elapsedTime}`;
      break;
    case "animationiteration":
      l.textContent = `新的循環開始於時間 ${event.elapsedTime}`;
      break;
  }
  document.getElementById("output").appendChild(l);
}
```

這段程式碼也非常簡單。它查看 {{domxref("event.type")}} 來確定發生了哪種動畫事件，然後在我們用來記錄這些事件的 {{HTMLElement("ul")}}（無序列表）中新增一個適當的註記。

當一切都完成後，輸出結果看起來像這樣：

- 已開始：經過時間為 0
- 新的循環開始於時間 3.01200008392334
- 新的循環開始於時間 6.00600004196167
- 已結束：經過時間為 9.234000205993652

請注意，這些時間非常接近，但並不完全是根據動畫組態時建立的時間設定所預期的。另請注意，在動畫的最後一次迭代之後，不會發送 `animationiteration` 事件；而是發送 `animationend` 事件。

為了完整起見，這裡是用來顯示頁面內容的 HTML，包括腳本插入有關接收事件訊息的列表：

```html
<h1 id="watch-me">看我移動</h1>
<p>
  這個範例展示了如何使用 CSS 動畫讓 <code>H1</code>
  元素在頁面上移動。
</p>
<p>
  此外，我們在每次動畫事件觸發時都會輸出一些文字，這樣你就可以看到它們的實際運作。
</p>
<ul id="output"></ul>
```

這裡是即時的輸出結果。

> [!NOTE]
> 重新載入頁面以查看動畫。

{{EmbedLiveSample('使用動畫事件', '600', '300')}}

### 為 display 與 content-visibility 加上動畫

這個範例展示了 [`display`](/zh-TW/docs/Web/CSS/Reference/Properties/display) 和 [`content-visibility`](/zh-TW/docs/Web/CSS/Reference/Properties/content-visibility) 如何加上動畫。這種行為對於建立進入／離開動畫很有用，例如你想要用 `display: none` 從 DOM 中移除一個容器，但希望它能用 [`opacity`](/zh-TW/docs/Web/CSS/Reference/Properties/opacity) 平滑地淡出，而不是立即消失。

支援的瀏覽器會使用[離散動畫類型](/zh-TW/docs/Web/CSS/Guides/Animations/Animatable_properties#離散)的變體來為 `display` 和 `content-visibility` 加上動畫。這通常意味著屬性將在兩個值之間動畫的中途（50%）翻轉。

然而，有一個例外，那就是當從 `display: none` 或 `content-visibility: hidden` 動畫到一個可見值時。在這種情況下，瀏覽器將在兩個值之間翻轉，以便被加上動畫的內容在整個動畫持續時間內都是可見的。

舉例來說：

- 當 `display` 從 `none` 動畫到 `block`（或其他可見的 `display` 值）時，該值將在動畫持續時間的 `0%` 處翻轉為 `block`，使其在整個過程中都可見。
- 當 `display` 從 `block`（或其他可見的 `display` 值）動畫到 `none` 時，該值將在動畫持續時間的 `100%` 處翻轉為 `none`，使其在整個過程中都可見。

#### HTML

HTML 包含兩個 {{htmlelement("p")}} 元素，中間有一個 {{htmlelement("div")}}，我們會將其 `display` 從 `none` 動畫到 `block`。

```html
<p>
  在螢幕上任何地方點擊或按任何鍵，以切換
  <code>&lt;div&gt;</code> 的顯示與隱藏。
</p>

<div>
  這是一個 <code>&lt;div&gt;</code> 元素，它在
  <code>display: none; opacity: 0</code> 和
  <code>display: block; opacity: 1</code> 之間加上動畫。很酷吧？
</div>

<p>
  這是另一個段落，用來顯示 <code>display: none;</code> 正在被應用和移除於上面的
  <code>&lt;div&gt;</code>。如果只是改變它的 <code>opacity</code>，它將總是佔據
  DOM 中的空間。
</p>
```

#### CSS

```css
html {
  height: 100vh;
}

div {
  font-size: 1.6rem;
  padding: 20px;
  border: 3px solid red;
  border-radius: 20px;
  width: 480px;
  opacity: 0;
  display: none;
}

/* 動畫 class */

div.fade-in {
  display: block;
  animation: fade-in 0.7s ease-in forwards;
}

div.fade-out {
  animation: fade-out 0.7s ease-out forwards;
}

/* 動畫關鍵影格 */

@keyframes fade-in {
  0% {
    opacity: 0;
    display: none;
  }

  100% {
    opacity: 1;
    display: block;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
    display: block;
  }

  100% {
    opacity: 0;
    display: none;
  }
}
```

注意在關鍵影格動畫中包含了 `display` 屬性。

#### JavaScript

最後，我們加入一些 JavaScript 來設定事件監聽器以觸發動畫。具體來說，當我們希望 `<div>` 出現時，我們為其新增 `fade-in` class，當希望它消失時，則新增 `fade-out` class。

```js
const divElem = document.querySelector("div");
const htmlElem = document.querySelector(":root");

htmlElem.addEventListener("click", showHide);
document.addEventListener("keydown", showHide);

function showHide() {
  if (divElem.classList[0] === "fade-in") {
    divElem.classList.remove("fade-in");
    divElem.classList.add("fade-out");
  } else {
    divElem.classList.remove("fade-out");
    divElem.classList.add("fade-in");
  }
}
```

#### 結果

程式碼算繪如下：

{{ EmbedLiveSample("為 display 與 content-visibility 加上動畫", "100%", "350") }}

## 參見

- {{domxref("AnimationEvent", "AnimationEvent")}}
- [使用 CSS 轉場](/zh-TW/docs/Web/CSS/Guides/Transitions/Using)
- [使用 Web 動畫 API](/zh-TW/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
