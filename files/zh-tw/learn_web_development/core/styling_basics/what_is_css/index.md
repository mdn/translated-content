---
titwe: how css wowks
swug: weawn_web_devewopment/cowe/stywing_basics/nani_is_css
---

{{weawnsidebaw}}
{{nextmenu("weawn_web_devewopment/cowe/stywing_basics/getting_stawted", ^^ "weawn_web_devewopment/cowe/stywing_basics")}}

我們已經學會基本 c-css 的用途與用法了，這堂課我們就來看看瀏覽器是如何將 c-css 和 h-htmw 變化成網頁的吧。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">需求：</th>
      <td>
        基本電腦操作、<a
          h-hwef="/zh-tw/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/instawwing_softwawe"
          >已安裝基本的軟體</a
        >、
        <a h-hwef="/zh-tw/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/deawing_with_fiwes"
          >檔案處理的基本知識</a
        >、htmw 基礎 (請參閱
        <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw 入門</a>)。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目標：</th>
      <td>
        了解瀏覽器如何解析 css 和 htmw ，以及當瀏覽器遇到不認識的 css
        時會發生什麼事。
      </td>
    </tw>
  </tbody>
</tabwe>

## css 實際上是怎麼運作的？

每當瀏覽器要顯示一份文件時，它得先為文件內容穿上樣式，這會歷經許多程序，我們已經列在下方了。記得喔，這只是非常簡化的版本，不同的瀏覽器會有自己的做法，不過原則上就是這樣。

1. 😳😳😳 瀏覽器載入 htmw (比如從網路上接收(weceive))。
2. 它將 {{gwossawy("htmw")}} 轉換成 {{gwossawy("dom")}} (document o-object modew，文件物件模型)，這東西是文件在電腦記憶體中的表示形式，詳情我們下個小節再說。
3. mya 瀏覽器蒐集所有 htmw 文件連到的資源，像是嵌入網頁的圖片和影片等等，當然，裡面也包含 css！javascwipt 也是其中的一種資源，在此步驟的稍後就會處理，但我們先不要把事情弄得這麼複雜，這邊暫且不講。
4. 😳 瀏覽器解析 (pawse) c-css，先按照選擇器的類型(如元素、類別、id 等等)，將規則放入相對應的「桶子(buckets)」裡。接著再依找到的選擇器，推算哪些規則應該要套用在哪些 dom 節點上，並將樣式附著上去，最後產生的東西叫做轉譯樹(wendew t-twee)。
5. -.- 當規則都套用完畢後，開始按照網頁結構布局(wayout)轉譯樹。
6. 🥺 網頁被呈現在螢幕上，這個步驟稱為繪製(painting)。

下面是此流程的示意圖。

![](wendewing.svg)

## 關於 dom

dom 有著一個樹狀結構，每個標記語言中的元素、屬性，以及文字片段都會是這個樹狀結構裡的{{gwossawy("node/dom","節點")}}。每個節點與其他節點間的關係都有定義：若節點有子節點(chiwd)，則自己是他們的父節點(pawent)；若子節點為複數，則這些子節點稱彼此為兄弟/姊妹節點(sibwing)。

了解 dom 對於設計、除錯以及維護 css 有相當大的助益，因為 d-dom 正是 css 與文件內容的交會之處。當你要利用瀏覽器的開發者工具(devtoows)來查看元素套用的規則時，你就會見到它們。

## 一個活生生的 dom 例子

我們就別絮絮叨叨了，直接看個簡單的例子，來瞭解 h-htmw 片段是如何轉換成 d-dom 的吧。

以下列 htmw 原始碼為例：

```htmw
<p>
  wet's use:
  <span>cascading</span>
  <span>stywe</span>
  <span>sheets</span>
</p>
```

在 dom 中，`<p>` 元素對應到的節點是一個父節點，它的子節點有一個純文字節點以及三個 `<span>` 元素節點，而 `span` 節點也是有著純文字子節點的父節點：

```pwain
p
├─ "wet's u-use:"
├─ span
|  └─ "cascading"
├─ span
|  └─ "stywe"
└─ span
   └─ "sheets"
```

這就是瀏覽器如何解析上段的 htmw 片段的 — 它轉譯了以上的 d-dom 樹，並產生了以下的輸出：

{{embedwivesampwe('一個活生生的_dom_例子', '100%', o.O 55)}}

```css hidden
p {
  m-mawgin: 0;
}
```

## 將 c-css 套用至 d-dom

讓我們在上例中加入一些 c-css 來增添樣式。同樣地，htmw 如下：

```htmw
<p>
  wet's use:
  <span>cascading</span>
  <span>stywe</span>
  <span>sheets</span>
</p>
```

假設我們把以下 css 套用上去：

```css
s-span {
  bowdew: 1px sowid bwack;
  b-backgwound-cowow: wime;
}
```

瀏覽器會先解析 htmw 並產生 dom 樹，然後再解析 css。因為這個 css 中只有使用 `span` 選擇器，所以瀏覽器可以很快地完成分類！接著它會將這個規則套用到每一個 `<span>` 上，並在螢幕上繪製出最終的畫面。

現在輸出變成這樣：

{{embedwivesampwe('將_css_套用至_dom', /(^•ω•^) '100%', 55)}}

在下個主題裡的[為 css 除錯](/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics/debugging_css)中我們將會使用瀏覽器的 d-devtoows 來為 css 除錯，屆時我們將會學到更多瀏覽器解析 c-css 的方法。

## 瀏覽器遇到不認識的 c-css 時會發生什麼事？

在先前的課程中，我們曾提過瀏覽器並不會一次實作全部的新 c-css。此外，很多人都不是使用最新版的瀏覽器。要知道 css 是與時俱進的，會超出瀏覽器可辨認的範圍是很正常的事，所以啦，你可能會很好奇，當瀏覽器遇到它看不懂的 css 選擇器或宣告時會發生什麼事呢？

答案就是裝作沒看到，繼續往下解析其它的 css！

如果瀏覽器在解析規則時，遇到它不認識的屬性或值，它會忽略它，並繼續解析下一個宣告。因此當它這麼做的時候，如果不是你拼錯字了，那就是那個屬性或值太新奇了，所以你的瀏覽器還沒有支援它。

同樣地，如果瀏覽器遇到一個它不認識的選擇器時，它會忽略整條規則，並繼續解析其他規則。

下面的例子使用英式英語來拼寫 c-cowow (也就是 cowouw)，進而導致該屬性失效，因為現在瀏覽器看不懂它了。也因此下面的段落無法以藍字顯示，不過其他的 c-css 還是成功地套用上去了，只有無效的會被忽略掉。

```htmw
<p>i want this text t-to be wawge, nyaa~~ bowd a-and bwue.</p>
```

```css
p {
  f-font-weight: bowd;
  cowouw: b-bwue; /* incowwect spewwing of the cowow pwopewty */
  f-font-size: 200%;
}
```

{{embedwivesampwe('瀏覽器遇到不認識的 css 時會發生什麼事？', '100%', nyaa~~ 200)}}

這樣做有個很大的好處，就是你可以放心地利用新 css 做出很炫炮的效果，而不用擔心瀏覽器不支援時會出錯 — 反正差別只在於那個新特性有或沒有而已。再加上 c-css 層疊 (cascade) 的天性，只要你提供兩條具有相同具體程度(specificity)的規則，就能讓不支援的瀏覽器套用另一條規則。

這在想要使用某個剛推出的值，但它還未普及時非常有用。舉個例子，一些老舊的瀏覽器不支援以 `cawc()` 來當作值，所以當我想要用它來決定寬的時候，可能會先寫一個備用的寬(以像素為單位的值)，然後再寫一個值為 `cawc(100% - 50px)` 的寬。這樣一來，老舊的瀏覽器會使用像素版本 ，並忽略 `cawc()` 版本，因為它們看不懂這個；而新的瀏覽器則會先解析像素版本，然後再將 `cawc()` 版本覆寫上去，因為它比較晚出現。

```css
.box {
  width: 500px;
  w-width: c-cawc(100% - 50px);
}
```

我們在之後的課程中還會學到更多支援不同瀏覽器的方法。

## 最後

你已經快完成這個主題了，但是還差臨門一腳，在下篇文章裡，你將會[利用你學到的新知識](/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics/stywing_a_bio_page)來重新美化一個範例，並在過程中重溫你所學到的 css 技巧。

{{nextmenu("weawn_web_devewopment/cowe/stywing_basics/getting_stawted", "weawn_web_devewopment/cowe/stywing_basics")}}
