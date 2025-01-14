---
title: How CSS works
slug: Learn_web_development/Core/Styling_basics/What_is_CSS
original_slug: Learn/CSS/First_steps/How_CSS_works
---

{{LearnSidebar}}
{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}

我們已經學會基本 CSS 的用途與用法了，這堂課我們就來看看瀏覽器是如何將 CSS 和 HTML 變化成網頁的吧。

<table>
  <tbody>
    <tr>
      <th scope="row">需求：</th>
      <td>
        基本電腦操作、<a
          href="/zh-TW/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >已安裝基本的軟體</a
        >、
        <a href="/zh-TW/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >檔案處理的基本知識</a
        >、HTML 基礎 (請參閱
        <a href="/zh-TW/docs/Learn_web_development/Core/Structuring_content">HTML 入門</a>)。
      </td>
    </tr>
    <tr>
      <th scope="row">目標：</th>
      <td>
        了解瀏覽器如何解析 CSS 和 HTML ，以及當瀏覽器遇到不認識的 CSS
        時會發生什麼事。
      </td>
    </tr>
  </tbody>
</table>

## CSS 實際上是怎麼運作的？

每當瀏覽器要顯示一份文件時，它得先為文件內容穿上樣式，這會歷經許多程序，我們已經列在下方了。記得喔，這只是非常簡化的版本，不同的瀏覽器會有自己的做法，不過原則上就是這樣。

1. 瀏覽器載入 HTML (比如從網路上接收(receive))。
2. 它將 {{Glossary("HTML")}} 轉換成 {{Glossary("DOM")}} (Document Object Model，文件物件模型)，這東西是文件在電腦記憶體中的表示形式，詳情我們下個小節再說。
3. 瀏覽器蒐集所有 HTML 文件連到的資源，像是嵌入網頁的圖片和影片等等，當然，裡面也包含 CSS！JavaScript 也是其中的一種資源，在此步驟的稍後就會處理，但我們先不要把事情弄得這麼複雜，這邊暫且不講。
4. 瀏覽器解析 (parse) CSS，先按照選擇器的類型(如元素、類別、ID 等等)，將規則放入相對應的「桶子(buckets)」裡。接著再依找到的選擇器，推算哪些規則應該要套用在哪些 DOM 節點上，並將樣式附著上去，最後產生的東西叫做轉譯樹(render tree)。
5. 當規則都套用完畢後，開始按照網頁結構布局(layout)轉譯樹。
6. 網頁被呈現在螢幕上，這個步驟稱為繪製(painting)。

下面是此流程的示意圖。

![](rendering.svg)

## 關於 DOM

DOM 有著一個樹狀結構，每個標記語言中的元素、屬性，以及文字片段都會是這個樹狀結構裡的{{Glossary("Node/DOM","節點")}}。每個節點與其他節點間的關係都有定義：若節點有子節點(child)，則自己是他們的父節點(parent)；若子節點為複數，則這些子節點稱彼此為兄弟/姊妹節點(sibling)。

了解 DOM 對於設計、除錯以及維護 CSS 有相當大的助益，因為 DOM 正是 CSS 與文件內容的交會之處。當你要利用瀏覽器的開發者工具(DevTools)來查看元素套用的規則時，你就會見到它們。

## 一個活生生的 DOM 例子

我們就別絮絮叨叨了，直接看個簡單的例子，來瞭解 HTML 片段是如何轉換成 DOM 的吧。

以下列 HTML 原始碼為例：

```html
<p>
  Let's use:
  <span>Cascading</span>
  <span>Style</span>
  <span>Sheets</span>
</p>
```

在 DOM 中，`<p>` 元素對應到的節點是一個父節點，它的子節點有一個純文字節點以及三個 `<span>` 元素節點，而 `SPAN` 節點也是有著純文字子節點的父節點：

```plain
P
├─ "Let's use:"
├─ SPAN
|  └─ "Cascading"
├─ SPAN
|  └─ "Style"
└─ SPAN
   └─ "Sheets"
```

這就是瀏覽器如何解析上段的 HTML 片段的 — 它轉譯了以上的 DOM 樹，並產生了以下的輸出：

{{EmbedLiveSample('一個活生生的_DOM_例子', '100%', 55)}}

```css hidden
p {
  margin: 0;
}
```

## 將 CSS 套用至 DOM

讓我們在上例中加入一些 CSS 來增添樣式。同樣地，HTML 如下：

```html
<p>
  Let's use:
  <span>Cascading</span>
  <span>Style</span>
  <span>Sheets</span>
</p>
```

假設我們把以下 CSS 套用上去：

```css
span {
  border: 1px solid black;
  background-color: lime;
}
```

瀏覽器會先解析 HTML 並產生 DOM 樹，然後再解析 CSS。因為這個 CSS 中只有使用 `span` 選擇器，所以瀏覽器可以很快地完成分類！接著它會將這個規則套用到每一個 `<span>` 上，並在螢幕上繪製出最終的畫面。

現在輸出變成這樣：

{{EmbedLiveSample('將_CSS_套用至_DOM', '100%', 55)}}

在下個主題裡的[為 CSS 除錯](/zh-TW/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)中我們將會使用瀏覽器的 DevTools 來為 CSS 除錯，屆時我們將會學到更多瀏覽器解析 CSS 的方法。

## 瀏覽器遇到不認識的 CSS 時會發生什麼事？

在先前的課程中，我們曾提過瀏覽器並不會一次實作全部的新 CSS。此外，很多人都不是使用最新版的瀏覽器。要知道 CSS 是與時俱進的，會超出瀏覽器可辨認的範圍是很正常的事，所以啦，你可能會很好奇，當瀏覽器遇到它看不懂的 CSS 選擇器或宣告時會發生什麼事呢？

答案就是裝作沒看到，繼續往下解析其它的 CSS！

如果瀏覽器在解析規則時，遇到它不認識的屬性或值，它會忽略它，並繼續解析下一個宣告。因此當它這麼做的時候，如果不是你拼錯字了，那就是那個屬性或值太新奇了，所以你的瀏覽器還沒有支援它。

同樣地，如果瀏覽器遇到一個它不認識的選擇器時，它會忽略整條規則，並繼續解析其他規則。

下面的例子使用英式英語來拼寫 color (也就是 colour)，進而導致該屬性失效，因為現在瀏覽器看不懂它了。也因此下面的段落無法以藍字顯示，不過其他的 CSS 還是成功地套用上去了，只有無效的會被忽略掉。

```html
<p>I want this text to be large, bold and blue.</p>
```

```css
p {
  font-weight: bold;
  colour: blue; /* incorrect spelling of the color property */
  font-size: 200%;
}
```

{{EmbedLiveSample('瀏覽器遇到不認識的 CSS 時會發生什麼事？', '100%', 200)}}

這樣做有個很大的好處，就是你可以放心地利用新 CSS 做出很炫炮的效果，而不用擔心瀏覽器不支援時會出錯 — 反正差別只在於那個新特性有或沒有而已。再加上 CSS 層疊 (cascade) 的天性，只要你提供兩條具有相同具體程度(specificity)的規則，就能讓不支援的瀏覽器套用另一條規則。

這在想要使用某個剛推出的值，但它還未普及時非常有用。舉個例子，一些老舊的瀏覽器不支援以 `calc()` 來當作值，所以當我想要用它來決定寬的時候，可能會先寫一個備用的寬(以像素為單位的值)，然後再寫一個值為 `calc(100% - 50px)` 的寬。這樣一來，老舊的瀏覽器會使用像素版本 ，並忽略 `calc()` 版本，因為它們看不懂這個；而新的瀏覽器則會先解析像素版本，然後再將 `calc()` 版本覆寫上去，因為它比較晚出現。

```css
.box {
  width: 500px;
  width: calc(100% - 50px);
}
```

我們在之後的課程中還會學到更多支援不同瀏覽器的方法。

## 最後

你已經快完成這個主題了，但是還差臨門一腳，在下篇文章裡，你將會[利用你學到的新知識](/zh-TW/docs/Learn_web_development/Core/Styling_basics/Styling_a_bio_page)來重新美化一個範例，並在過程中重溫你所學到的 CSS 技巧。

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}
