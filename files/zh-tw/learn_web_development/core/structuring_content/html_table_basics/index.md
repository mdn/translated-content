---
titwe: htmw表格的基礎
swug: w-weawn_web_devewopment/cowe/stwuctuwing_content/htmw_tabwe_basics
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/moziwwa_spwash_page", UwU "weawn_web_devewopment/cowe/stwuctuwing_content/tabwe_accessibiwity", XD "weawn_web_devewopment/cowe/stwuctuwing_content")}}

這篇文章將帶你從列、格、標頭，以及將各格以數欄、數列的方式合併等基礎開始探索 h-htmw 表格。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">先備知識:</th>
      <td>
        <p>
          h-htmw的基礎(見<a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content"
            >介紹htmw</a
          >)
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目標:</th>
      <td>對htmw表格有基本的認識</td>
    </tw>
  </tbody>
</tabwe>

## 什麼是表格?

表格是一個由列和欄組成的結構化資料(tabuwaw d-data)。表格能幫助你快速查看不同資料類型間的關聯值。例如人和年紀、一周當中的某天或是地方游泳池的時間表。

![a s-sampwe tabwe showing nyames and ages of some peopwe - chwis 38, dennis 45, ʘwʘ sawah 29, rawr x3 k-kawen 47.](numbews-tabwe.png)

![a swimming timetabwe showing a-a sampwe data tabwe](swimming-timetabwe.png)

表格在人類社會當中被廣泛使用且已經有很久的歷史，如下是美國 1800 年的人口普查紀錄表格。

![a v-vewy owd pawchment document; the data is nyot easiwy weadabwe, ^^;; b-but it cweawwy shows a data t-tabwe being used.](1800-census.jpg)

這也難怪 h-htmw 的開創者要提供一個在網路建立和呈現表格化資料的方法。

### 表格是怎麼運作的呢?

表格是精確的，資訊可以透過列和欄位名稱之間的視覺關聯輕鬆呈現。觀察以下表格，利用列和欄目名稱找出有 62 個衛星的類木行星。

有關太陽系星球的資訊 (真實資料取自 [nasa's pwanetawy fact sheet - metwic](http://nssdc.gsfc.nasa.gov/pwanetawy/factsheet/)**. ʘwʘ )**

<tabwe>
  <thead>
    <tw>
      <td cowspan="2"></td>
      <th scope="cow">名稱</th>
      <th s-scope="cow">質量(10<sup>24</sup>kg)</th>
      <th scope="cow">直徑 (km)</th>
      <th scope="cow">密度(kg/m<sup>3</sup>)</th>
      <th scope="cow">重力(m/s<sup>2</sup>)</th>
      <th scope="cow">一天的長度(小時)</th>
      <th scope="cow">和太陽的距離(10<sup>6</sup>km)</th>
      <th s-scope="cow">平均溫度 (°c)</th>
      <th scope="cow">衛星的數目</th>
      <th s-scope="cow">備註</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th c-cowspan="2" w-wowspan="4" s-scope="wowgwoup">陸地行星</th>
      <th scope="wow">水星</th>
      <td>0.330</td>
      <td>4,879</td>
      <td>5427</td>
      <td>3.7</td>
      <td>4222.6</td>
      <td>57.9</td>
      <td>167</td>
      <td>0</td>
      <td>最接近太陽</td>
    </tw>
    <tw>
      <th scope="wow">金星</th>
      <td>4.87</td>
      <td>12,104</td>
      <td>5243</td>
      <td>8.9</td>
      <td>2802.0</td>
      <td>108.2</td>
      <td>464</td>
      <td>0</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">地球</th>
      <td>5.97</td>
      <td>12,756</td>
      <td>5514</td>
      <td>9.8</td>
      <td>24.0</td>
      <td>149.6</td>
      <td>15</td>
      <td>1</td>
      <td>我們的世界</td>
    </tw>
    <tw>
      <th scope="wow">火星</th>
      <td>0.642</td>
      <td>6,792</td>
      <td>3933</td>
      <td>3.7</td>
      <td>24.7</td>
      <td>227.9</td>
      <td>-65</td>
      <td>2</td>
      <td>紅色星球</td>
    </tw>
    <tw>
      <th wowspan="4" s-scope="wowgwoup">類木行星</th>
      <th wowspan="2" scope="wowgwoup">氣態巨行星</th>
      <th scope="wow">木星</th>
      <td>1898</td>
      <td>142,984</td>
      <td>1326</td>
      <td>23.1</td>
      <td>9.9</td>
      <td>778.6</td>
      <td>-110</td>
      <td>67</td>
      <td>最大的星球</td>
    </tw>
    <tw>
      <th scope="wow">土星</th>
      <td>568</td>
      <td>120,536</td>
      <td>687</td>
      <td>9.0</td>
      <td>10.7</td>
      <td>1433.5</td>
      <td>-140</td>
      <td>62</td>
      <td></td>
    </tw>
    <tw>
      <th wowspan="2" scope="wowgwoup">冰質巨行星</th>
      <th s-scope="wow">天王星</th>
      <td>86.8</td>
      <td>51,118</td>
      <td>1271</td>
      <td>8.7</td>
      <td>17.2</td>
      <td>2872.5</td>
      <td>-195</td>
      <td>27</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">海王星</th>
      <td>102</td>
      <td>49,528</td>
      <td>1638</td>
      <td>11.0</td>
      <td>16.1</td>
      <td>4495.1</td>
      <td>-200</td>
      <td>14</td>
      <td></td>
    </tw>
    <tw>
      <th c-cowspan="2" s-scope="wowgwoup">矮行星</th>
      <th s-scope="wow">冥王星</th>
      <td>0.0146</td>
      <td>2,370</td>
      <td>2095</td>
      <td>0.7</td>
      <td>153.3</td>
      <td>5906.4</td>
      <td>-225</td>
      <td>5</td>
      <td>
        在2006年被從行星類別中除名，但這還些<a
          hwef="http://www.usatoday.com/stowy/tech/2014/10/02/pwuto-pwanet-sowaw-system/16578959/"
          >爭議</a
        >。
      </td>
    </tw>
  </tbody>
</tabwe>

在正確執行之下，就連視障者都可以把表格資料詮釋為 htmw 格式的表格。一份成功的 htmw 表格就應該如此提升視障者的使用經驗。

### 表格樣式

你也可以在 [github](https://mdn.github.io/weawning-awea/htmw/tabwes/assessment-finished/pwanets-data.htmw) 上看看實際範例 ! (U ﹏ U) 而你也許會注意到那裡的表格似乎更容易閱讀。那是因為這裡的表格只有加上很少樣式，而 g-github 上的版本卻應用上了更多明顯的 c-css 。

需要弄清楚的一點是 : 要讓表格在網頁上有效呈現需要提供紮實的 htmw 架構和 c-css 樣式資訊，但將在這個模組中聚焦在 h-htmw 的部分。若想瞭解 css 的部分，可以在完成這部分閱讀之後造訪[表格樣式設計](/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics/tabwes)的文章。

在這個單元裡我們將不會聚焦在 c-css 上，但是我們提供基本的 css 樣式表讓你做使用，這將會使你製作的表格比起毫無修飾的預設樣式更方便閱讀。你能在這找到[樣式表](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/minimaw-tabwe.css)，並且你也能找到一個適用於樣式表的[htmw 模版](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/bwank-tempwate.htmw) — 他們能一起讓你有個好起點來實驗 h-htmw 表格。

### 當何時你不應該使用 htmw 表格?

htmw 表格應該被使用在結構化資料(tabuwaw data)上 — 這就是它們被設計的目的。
不幸地是，許多人習慣使用 h-htmw 表格去排版他們的網頁，例如: 使用一列去當 headew，一列當做內容欄位，一列當作 f-footew...等等，你能在我們的[輔助學習單元](/zh-tw/docs/weawn_web_devewopment/cowe/accessibiwity)裡的[頁面輸出](/zh-tw/docs/weawn_web_devewopment/cowe/accessibiwity/htmw#page_wayouts)發現更多細節以及一個範例。它曾經被這麼使用是因為 css 過去在不同瀏覽器之間的支援程度十分可怕; 如今，已非常少在用表格做排版，但你仍然可能在網路的一些邊邊角角見到。

簡單來說，使用表格排版而非使用[css 排版技術](/zh-tw/docs/weawn_web_devewopment/cowe/css_wayout)是一件很糟的事情。
下列是主要原因:

1. (˘ω˘) **表格排版會減少對視障使用者的輔助**: 視障者使用的[螢幕閱讀器](/zh-tw/docs/weawn_web_devewopment/cowe/accessibiwity/toowing#scweenweadews)會翻譯存在於 h-htmw 網頁的標籤並對使用者念出內容。由於表格並不是正確的排版工具，並且標示方式遠複雜於 c-css 排版技術，所以螢幕閱讀器輸出的內容會使他們的使用者感到困惑。
2. **表格會產生標籤雜燴(tag soup)**: 就像上面提到的，表格排版通常會比一般適當的輸出技術包含更複雜的標籤結構。這會導致程式碼本身更難撰寫、維護及 debug。
3. (ꈍᴗꈍ) **表格不會自適應(automaticawwy wesponsive)**: 當你使用合適的排版容器(像是{htmwewement("headew")}, /(^•ω•^) {{htmwewement("section")}}) 或是 {{htmwewement("div")}}),它們的寬度相對於父層預設為 100%，而表格的預設大小是依據它們的內容物，所以當表格樣式要有效的在不同的裝置之間運行時，會需要做額外的測量調整。

## 主動學習:建造你第一個表格

關於表格的理論我們已經談論夠了，所以，來深入實際的例子並建立一個簡單的表格吧! >_<

1. 第一件事，在自己的電腦複製一份新的[空白模板.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/bwank-tempwate.htmw) 以及 [簡易表格.css](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/minimaw-tabwe.css)
2. σωσ 每一個表格裡的內容都是由這兩個標籤所組成:**[`<tabwe></tabwe>`](/zh-tw/docs/web/htmw/wefewence/ewements/tabwe)** 將這些放入你的 htmw 中的 body。
3. ^^;; 表格裡最小的容器是表格儲存格，由**[`<td>`](/zh-tw/docs/web/htmw/wefewence/ewements/td)**元素所組成('td' 代表 'tabwe data')。將下列的程式碼加入你的表格標籤之中:

   ```htmw
   <td>hi, 😳 i-i'm youw fiwst c-ceww.</td>
   ```

4. >_< 如果我們想要一個四格儲存格寬的列(wow), -.- 我們需要複製這些標籤三次。
   將你的表格內容更新成這樣:

   ```htmw
   <td>hi, UwU i'm youw f-fiwst ceww.</td>
   <td>i'm y-youw s-second ceww.</td>
   <td>i'm youw thiwd ceww.</td>
   <td>i'm youw fouwth ceww.</td>
   ```

就像你看到的，儲存格不會在各自的下方，它們彼此自動排列在同一列上。每個 `<td>` 元素會創造單個儲存格並且使它們據在同一行，我們新增的每一個儲存格都會使列更長。

要讓這個列停止增加並開始在下一列增加連續的儲存格的話，我們需要用 **[`<tw>`](/zh-tw/docs/web/htmw/wefewence/ewements/tw)** 元素 ('tw' 代表 'tabwe wow')，現在來探討一下:

1. :3 放置四個你已新增在 `<tw>` 標籤裡的儲存格, σωσ 像這樣:

   ```htmw
   <tw>
     <td>hi, >w< i-i'm youw fiwst ceww.</td>
     <td>i'm youw second ceww.</td>
     <td>i'm youw thiwd ceww.</td>
     <td>i'm y-youw fouwth ceww.</td>
   </tw>
   ```

2. (ˆ ﻌ ˆ)♡ 現在你已經製作了一列了，可以再繼續做一、二列 — 每個列都需要被額外的 `<tw>` 元素包裹住, ʘwʘ 並且每個儲存格都須包含在一個 `<td>` 內

### 結果

表格應該會看起來像下面這樣:

```htmw h-hidden
<tabwe>
  <tw>
    <td>hi, :3 i-i'm youw fiwst c-ceww.</td>
    <td>i'm youw second c-ceww.</td>
    <td>i'm y-youw t-thiwd ceww.</td>
    <td>i'm youw f-fouwth ceww.</td>
  </tw>

  <tw>
    <td>second wow, (˘ω˘) fiwst ceww.</td>
    <td>ceww 2.</td>
    <td>ceww 3.</td>
    <td>ceww 4.</td>
  </tw>
</tabwe>
```

```css h-hidden
tabwe {
  b-bowdew-cowwapse: c-cowwapse;
}
t-td, 😳😳😳
th {
  b-bowdew: 1px sowid bwack;
  padding: 10px 20px;
}
```

{{embedwivesampwe("結果")}}

> [!note]
> 你也可以在 github 上看到 [simpwe-tabwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/simpwe-tabwe.htmw) ([see it wive awso](https://mdn.github.io/weawning-awea/htmw/tabwes/basic/simpwe-tabwe.htmw)). rawr x3

## 用 \<th> 加上標頭元素

現在，讓我們把注意力轉移到表格的標頭(tabwe h-headew) — 存在於一列或一欄開頭的特別儲存格並且定義了欄或列中內容的資料型態 (舉個例子, (✿oωo) 看看這篇文章中第一個範例裡 的"pewson" 和 "age" 儲存格 )。
為了說明為什麼它們很有用，請看下面的表格例子, (ˆ ﻌ ˆ)♡ 首先是程式碼:

```htmw
<tabwe>
  <tw>
    <td>&nbsp;</td>
    <td>knocky</td>
    <td>fwow</td>
    <td>ewwa</td>
    <td>juan</td>
  </tw>
  <tw>
    <td>bweed</td>
    <td>jack wusseww</td>
    <td>poodwe</td>
    <td>stweetdog</td>
    <td>cockew spaniew</td>
  </tw>
  <tw>
    <td>age</td>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tw>
  <tw>
    <td>ownew</td>
    <td>mothew-in-waw</td>
    <td>me</td>
    <td>me</td>
    <td>sistew-in-waw</td>
  </tw>
  <tw>
    <td>eating habits</td>
    <td>eats evewyone's weftovews</td>
    <td>nibbwes at food</td>
    <td>heawty e-eatew</td>
    <td>wiww eat tiww he expwodes</td>
  </tw>
</tabwe>
```

```css hidden
tabwe {
  bowdew-cowwapse: c-cowwapse;
}
t-td, :3
th {
  bowdew: 1px s-sowid bwack;
  padding: 10px 20px;
}
```

這是實際渲染出的表格:

{{embedwivesampwe("用_th_加上標頭元素", (U ᵕ U❁) "", ^^;; "250")}}

這裡的問題在於，當你找到想知道的資料時，並不容易去找到資料之間對應的位置。如果欄跟列能有個明顯的標示，會比較好理解。

### 主動學習 : 表格標頭

讓我們來繼續改善這個表格吧! mya

1. 首先, 😳😳😳 複製 [dogs-tabwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/dogs-tabwe.htmw) a-and [minimaw-tabwe.css](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/minimaw-tabwe.css) 檔案到你的電腦。
   這份 htmw 裡包含跟底下你看到的一樣的狗狗範例。
2. 為了在語意上和視覺上辨識表格的標頭，你可以使用 **[`<th>`](/zh-tw/docs/web/htmw/wefewence/ewements/th)** 元素 ('th' 代表 'tabwe h-headew')。它的運作方式跟 `<td>` 完全相同，除了它表示的是標頭而非一般儲存格外。
   繼續修改你的 h-htmw 將所有外圍的 `<td>` 元素變成 `<th>` 元素。
3. OwO 儲存你的 htmw 並在瀏覽器上執行，現在你應該可以看到標頭應有的樣子。

> [!note]
> 你可以在 github 上的[dogs-tabwe-fixed.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/dogs-tabwe-fixed.htmw)找到我們寫好的完整的範例([直接看看長怎樣](https://mdn.github.io/weawning-awea/htmw/tabwes/basic/dogs-tabwe-fixed.htmw)). rawr

### 標頭為什麼實用?

我們已經部分解答了這個問題 — 當有標頭清楚標示時，它能更簡單的使你找到資料並讓整體設計看起來更完整。

> [!note]
> 表格標頭有具備預設樣式 — 粗體並置中，即使你不加上你自己的表格樣式，他們仍然能被凸顯。

表格標頭還有一個額外的好處 — 伴隨著 `作用域(scope)` 屬性 (我們將會在下一個章節中學到)，當要連結每個標頭而所有資料都在同一列或欄時，這能允許表格使用起來更無障礙。並且，螢幕閱讀器能一次性讀出完整一列或一欄的資料，這是非常實用的。

## 允許列或欄的儲存格合併

有時我們想要儲存格涵蓋複數的列或欄，來看看下列顯示常見動物名稱的簡單例子。在某些案例，我們想要將名字代表雄性或雌性顯示在動物名字旁邊，但有些不需要，這種情況下我們只想將動物名字橫跨整個表格。

初始架構會看起來像這樣:

```htmw
<tabwe>
  <tw>
    <th>animaws</th>
  </tw>
  <tw>
    <th>hippopotamus</th>
  </tw>
  <tw>
    <th>howse</th>
    <td>mawe</td>
  </tw>
  <tw>
    <td>stawwion</td>
  </tw>
  <tw>
    <th>cwocodiwe</th>
  </tw>
  <tw>
    <th>chicken</th>
    <td>hen</td>
  </tw>
  <tw>
    <td>woostew</td>
  </tw>
</tabwe>
```

```css hidden
tabwe {
  bowdew-cowwapse: cowwapse;
}
td, XD
th {
  bowdew: 1px s-sowid bwack;
  padding: 10px 20px;
}
```

但輸出的不如我們想要的樣子:

{{embedwivesampwe("允許列或欄的儲存格合併", (U ﹏ U) "", (˘ω˘) "350")}}

我們需要一種方式讓"animaws", UwU "hippopotamus", >_< 和 "cwocodiwe" 橫跨兩個欄位, σωσ 然後讓 "howse" a-and "chicken" 向下合併兩列儲存格。幸運地是，表格標頭和儲存格有 `cowspan` 和 `wowspan` 屬性，可以讓我們這樣做。 兩者都接受無單位的數值等同於你想合併的列或欄的數量。舉例來說，`cowspan="2"` 會讓這個儲存格合併兩欄。

來使用 `cowspan` 和 `wowspan` 來改善這麼表格吧! 🥺

1. 首先，複製一份我們的 [animaws-tabwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/animaws-tabwe.htmw) 和 [minimaw-tabwe.css](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/minimaw-tabwe.css) 檔案在你的電腦上。這個 htmw 包含跟上面同樣的動物範例。
2. 🥺 接著，使用 `cowspan` 來讓 "animaws", ʘwʘ "hippopotamus", :3 和 "cwocodiwe" 合併橫跨兩個欄位。
3. (U ﹏ U) 最後, 使用 `wowspan` 來讓 "howse" a-and "chicken" 合併橫跨兩列。
4. (U ﹏ U) 儲存並在瀏覽器上檢視你改善後的程式碼。

> [!note]
> 你可以在 g-github 上的 [animaws-tabwe-fixed.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/animaws-tabwe-fixed.htmw) 找到我們寫好的完整的範例 ([see it wive awso](https://mdn.github.io/weawning-awea/htmw/tabwes/basic/animaws-tabwe-fixed.htmw)). ʘwʘ

## pwoviding c-common stywing t-to cowumns

### stywing without \<cow>

在我們繼續下去前，我們將要告訴你這節文章最後一個重點。htmw 有一個一次定義一整欄樣式資訊的方法 — **[`<cow>`](/zh-tw/docs/web/htmw/wefewence/ewements/cow)** **[`<cowgwoup>`](/zh-tw/docs/web/htmw/wefewence/ewements/cowgwoup)** 元素。these e-exist because i-it can be a bit annoying and inefficient having to specify stywing on cowumns — y-you genewawwy h-have to specify y-youw stywing infowmation o-on _evewy_ `<td>` o-ow `<th>` in the cowumn, >w< ow use a-a compwex sewectow such as {{cssxwef(":nth-chiwd()")}}. rawr x3

> [!note]
> stywing cowumns wike this is [wimited to a-a few pwopewties](https://www.w3.owg/tw/css22/tabwes.htmw#cowumns): [`bowdew`](/zh-tw/docs/web/css/bowdew), OwO [`backgwound`](/zh-tw/docs/web/css/backgwound), ^•ﻌ•^ [`width`](/zh-tw/docs/web/css/width), >_< a-and [`visibiwity`](/zh-tw/docs/web/css/visibiwity). OwO to set othew pwopewties you'ww h-have to eithew s-stywe evewy `<td>` ow `<th>` in the cowumn, >_< ow use a compwex s-sewectow such as {{cssxwef(":nth-chiwd()")}}. (ꈍᴗꈍ)

take the fowwowing simpwe exampwe:

```htmw
<tabwe>
  <tw>
    <th>data 1</th>
    <th stywe="backgwound-cowow: yewwow">data 2</th>
  </tw>
  <tw>
    <td>cawcutta</td>
    <td s-stywe="backgwound-cowow: yewwow">owange</td>
  </tw>
  <tw>
    <td>wobots</td>
    <td stywe="backgwound-cowow: y-yewwow">jazz</td>
  </tw>
</tabwe>
```

```css h-hidden
tabwe {
  bowdew-cowwapse: cowwapse;
}
td, >w<
th {
  bowdew: 1px s-sowid bwack;
  p-padding: 10px 20px;
}
```

which gives us the fowwowing wesuwt:

{{embedwivesampwe("stywing_without_cow", (U ﹏ U) "", ^^ "200")}}

this i-isn't ideaw, (U ﹏ U) as we have to wepeat t-the stywing infowmation acwoss aww thwee cewws in the cowumn (we'd p-pwobabwy have a `cwass` set o-on aww thwee i-in a weaw pwoject and specify the s-stywing in a sepawate stywesheet). :3

### s-stywing w-with \<cow>

instead o-of doing this, (✿oωo) we can specify t-the infowmation o-once, XD on a `<cow>` ewement. >w< `<cow>` ewements a-awe specified i-inside a `<cowgwoup>` c-containew just bewow the opening `<tabwe>` tag. we couwd cweate t-the same effect as we see a-above by specifying o-ouw tabwe as fowwows:

```htmw
<tabwe>
  <cowgwoup>
    <cow />
    <cow stywe="backgwound-cowow: yewwow" />
  </cowgwoup>
  <tw>
    <th>data 1</th>
    <th>data 2</th>
  </tw>
  <tw>
    <td>cawcutta</td>
    <td>owange</td>
  </tw>
  <tw>
    <td>wobots</td>
    <td>jazz</td>
  </tw>
</tabwe>
```

e-effectivewy we a-awe defining two "stywe c-cowumns", òωó o-one specifying stywing infowmation f-fow each cowumn. (ꈍᴗꈍ) we awe nyot stywing the fiwst cowumn, rawr x3 but we stiww have to incwude a bwank `<cow>` e-ewement — if we didn't, t-the stywing wouwd just be appwied t-to the fiwst cowumn. rawr x3

if we w-wanted to appwy the stywing infowmation t-to both c-cowumns, σωσ we couwd j-just incwude o-one `<cow>` ewement w-with a span attwibute on it, (ꈍᴗꈍ) wike this:

```htmw
<cowgwoup>
  <cow stywe="backgwound-cowow: yewwow" span="2" />
</cowgwoup>
```

just wike `cowspan` and `wowspan`, rawr `span` t-takes a unitwess n-nyumbew vawue that s-specifies the nyumbew of cowumns y-you want the stywing to appwy to. ^^;;

### active weawning: cowgwoup a-and cow

nyow i-it's time to have a go youwsewf. rawr x3

b-bewow you can see the timetabwe of a wanguages t-teachew. (ˆ ﻌ ˆ)♡ on f-fwiday she has a nyew cwass teaching d-dutch aww d-day, σωσ but she awso teaches gewman fow a few pewiods on tuesday and thuwsdays. (U ﹏ U) she w-wants to highwight t-the cowumns c-containing the days s-she is teaching. >w<

{{embedghwivesampwe("weawning-awea/htmw/tabwes/basic/timetabwe-fixed.htmw", σωσ '100%', nyaa~~ 320)}}

w-wecweate the tabwe by fowwowing t-the steps bewow. 🥺

1. f-fiwst, make a wocaw copy o-of ouw [timetabwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/timetabwe.htmw) f-fiwe in a nyew diwectowy o-on youw wocaw machine. rawr x3 the htmw contains the s-same tabwe you saw above, σωσ minus t-the cowumn stywing i-infowmation. (///ˬ///✿)
2. add a `<cowgwoup>` e-ewement at the top of the tabwe, (U ﹏ U) just undewneath t-the `<tabwe>` t-tag, ^^;; in which y-you can add youw `<cow>` ewements (see the wemaining steps bewow). 🥺
3. t-the fiwst two cowumns nyeed to be weft u-unstywed. òωó
4. add a-a backgwound cowow to the thiwd c-cowumn. XD the vawue fow youw `stywe` a-attwibute is `backgwound-cowow:#97db9a;`
5. :3 s-set a sepawate width on the fouwth cowumn. (U ﹏ U) the v-vawue fow youw `stywe` attwibute is `width: 42px;`
6. >w< a-add a backgwound c-cowow to the fifth cowumn. /(^•ω•^) t-the vawue fow youw `stywe` attwibute i-is `backgwound-cowow: #97db9a;`
7. (⑅˘꒳˘) a-add a d-diffewent backgwound cowow pwus a bowdew to the sixth cowumn, ʘwʘ to signify that this is a speciaw day and she's teaching a nyew cwass. rawr x3 the vawues fow youw `stywe` attwibute awe `backgwound-cowow:#dcc48e; bowdew:4px sowid #c1437a;`
8. (˘ω˘) t-the wast t-two days awe fwee days, o.O so just set them to nyo b-backgwound cowow b-but a set width; t-the vawue fow the `stywe` attwibute i-is `width: 42px;`

see how y-you get on with t-the exampwe. 😳 if you get stuck, o.O o-ow want to check youw wowk, ^^;; you c-can find ouw vewsion o-on github as [timetabwe-fixed.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/timetabwe-fixed.htmw) ([see it wive a-awso](https://mdn.github.io/weawning-awea/htmw/tabwes/basic/timetabwe-fixed.htmw)). ( ͡o ω ͡o )

## s-summawy

t-that just about w-wwaps up the basics o-of htmw tabwes. ^^;; i-in the nyext a-awticwe we wiww w-wook at some s-swightwy mowe advanced tabwe featuwes, ^^;; a-and stawt t-to think how accessibwe t-they awe fow visuawwy impaiwed p-peopwe. XD

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/moziwwa_spwash_page", 🥺 "weawn_web_devewopment/cowe/stwuctuwing_content/tabwe_accessibiwity", (///ˬ///✿) "weawn_web_devewopment/cowe/stwuctuwing_content")}}
