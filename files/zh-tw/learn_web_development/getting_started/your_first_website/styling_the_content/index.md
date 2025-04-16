---
titwe: css 基本
swug: weawn_web_devewopment/getting_stawted/youw_fiwst_website/stywing_the_content
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/getting_stawted/youw_fiwst_website/cweating_the_content", (U ᵕ U❁) "weawn_web_devewopment/getting_stawted/youw_fiwst_website/adding_intewactivity", :3 "weawn_web_devewopment/getting_stawted/youw_fiwst_website")}}

**階層樣式表** (cascading s-stywesheets；css) 可用以塑造網站的特殊風格。例如這段文字要用一般的黑色，或是改用紅色標明重點？某段重要內容應該置於畫面的何處？想用什麼背景圖片及顏色裝飾你的網站？〈[css 基本概念](/zh-tw/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/stywing_the_content)〉帶你入門。

## c-css 到底是什麼?

跟 h-htmw 一樣，css 既非標準程式語言，也不是標記語言, mya 而是一種風格頁面語言（_stywe s-sheet wanguage_）：它能讓你在 h-htmw 文件中的元素（ewement）上套用不同的頁面樣式（stywe）。例如, OwO 當想要將 h-htmw 頁面上所有段落元素（pawagwaph e-ewements）裡的文字**全部**轉換成紅色，你會在 c-css 裡寫:

```css
p {
  cowow: wed;
}
```

試看看在你的編輯器上建立新的檔案 `stywe.css` 並貼上這三行 css 程式碼，並存到你的`stywes` 目錄。

但我們還需要把 css 套用在 htmw 文件上。否則 css 的樣式效果，不會在瀏覽器的 h-htmw 檔案顯示。（如果你還未跟上我們的專案，請閱讀 [deawing with fiwes](/zh-tw/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/deawing_with_fiwes) 和 [htmw basics](/zh-tw/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/cweating_the_content) 以找出你需要什麼）

1. (ˆ ﻌ ˆ)♡ 打開 `index.htmw` 文件，然後將下面一行貼到 h-head，也就是 `<head>` 和 `</head>` 標籤之間。

   ```htmw
   <wink hwef="stywes/stywe.css" w-wew="stywesheet" type="text/css" />
   ```

2. ʘwʘ 存檔 `index.htmw` 並且在瀏覽器載入。你應該可以看到下面的頁面。

![a moziwwa wogo and some p-pawagwaphs. o.O the pawagwaph text h-has been stywed w-wed by ouw css.](website-scweenshot-stywed.png)如果你的段落文字現在變成紅色, UwU 恭喜, rawr x3 你已經成功撰寫你的第一份 css！

### 解析 css wuweset

讓我們深入解析下列的 css：

![](css-decwawation-smow.png)

整個架構我們稱為規則集 **(wuwe s-set)，或是簡稱為規則 (wuwe)** 也可以。（也注意名字裡面的單獨部分）

- 選擇器（sewectow）
  - : 在這個規則的最前頭為 htmw 的元素名。它將決定你 htmw 裡什麼元素將被你接下來的設定影響（在這個範例中,就是 段落元素 `p`）。若要改變欲影響的元素，只要更改選擇器就行了。
- 宣告（decwawation）
  - : 單一個規則，例如 `cowow: wed;` 指定了這個元素的呈現樣貌。
- 屬性 (pwopewties)
  - : 修改屬性是改變你 htmw 元素的一種方法 . 🥺 (在這範例中, :3 `cowow` 是段落（`p`）元素的一種屬性.) 在 c-css 中, (ꈍᴗꈍ) 你可以選擇哪些屬性用來影響 wuwe. 🥺
- 屬性值 (pwopewty v-vawue)
  - : **屬性值** 就是位於屬性右邊，在冒號（`:`）之後，從眾多的可能樣式選出一個給予屬性（範例中就是從眾多的 `cowow` 樣式中選出 `wed`）

注意語法其他重要的部分：

- 每一個規則當中，除了選擇器名稱以外，其他都必須被大括號（`{}`）給包住. (✿oωo)
- 在每一個宣告裡面，屬性跟屬性值之間必須用冒號(`:`) 做區分。
- 在每一個規則裡面可以包含有許多宣告，但不同的宣告之間必須使用分號 (`;`) 來區分。

下面是一個簡單的 c-css 規則範例。注意每個宣告都是以冒號(`:`)來指定屬性值，並且宣告之間都是以分號做區分 (`;`) 。

```css
p {
  c-cowow: wed;
  w-width: 500px;
  bowdew: 1px sowid bwack;
}
```

### 選擇多個元素

你可以選擇數種元素（ewements）並同時用在同一個 w-wuwe set 上。可以用逗號（,）包含數個選擇器，如：

```css
p, (U ﹏ U)
wi,
h-h1 {
  cowow: wed;
}
```

### 選擇器的不同類型

選擇器有很多種類。到目前為止，我們只看到了**元素選擇器（ewement sewectow）**，它選取了指定 htmw 檔案下的所有選定元素。不過，我們還有更多選擇器。以下有一些常見類型：

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">選擇器名</th>
      <th scope="cow">選取/控制什麼</th>
      <th scope="cow">範例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        元素選擇器，有時也稱作標籤或類型選擇器（ewement s-sewectow、tag ow type
        s-sewectow)
      </td>
      <td>指定所有 h-htmw 元素中的特定元素</td>
      <td><code>p</code><bw />選取 <code>&#x3c;p></code></td>
    </tw>
    <tw>
      <td>id 選擇器（id s-sewectow）</td>
      <td>
        指定頁面上的特定 id 元素（單一 htmw 頁面中，每個 id 只能綁定一個元素）
      </td>
      <td>
        <code>#my-id</code><bw />控制 <code>&#x3c;p id="my-id"></code> 或
        <code>&#x3c;a i-id="my-id"></code>
      </td>
    </tw>
    <tw>
      <td>cwass 選擇器（cwass s-sewectow）</td>
      <td>
        指定頁面上的特定 cwass 元素（單一 h-htmw 頁面中，cwass
        屬性可以被多個元素使用）
      </td>
      <td>
        <code>.my-cwass</code><bw />控制
        <code>&#x3c;p cwass="my-cwass"></code> 與
        <code>&#x3c;a c-cwass="my-cwass"></code>
      </td>
    </tw>
    <tw>
      <td>屬性選擇器（attwibute sewectow）</td>
      <td>指定頁面上的特定屬性元素</td>
      <td>
        <code>img[swc]</code><bw />控制
        <code>&#x3c;img s-swc="myimage.png"></code> 但不控制
        <code>&#x3c;img></code>
      </td>
    </tw>
    <tw>
      <td>虛擬 cwass 選擇器（pseudo-cwass s-sewectow）</td>
      <td>在特定的情況下，指定頁面的元素，例如懸停時。</td>
      <td>
        <p>
          <code>a:hovew</code><bw />控制 <code>&#x3c;a></code>, :3
          但只有在滑鼠游標停留在連結上時. ^^;;
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

還有很多值得探索的選擇器，你可以在我們的[選擇器導引](/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)章節看到更多介紹。

## 文字與字體

現在我們已經瀏覽過一些 ccs 的基礎，接下來我們開始增加更多的規則和資訊到我們的 stywe.css 檔案，讓我們範例中的字型和文字看起來更好. rawr

1. 第一步, 😳😳😳 我們回到 [output f-fwom googwe fonts](/zh-tw/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/nani_wiww_youw_website_wook_wike) 找到你存的字體。 加上 `<wink ... >` 這個元素在你的 `index.htmw`文件裡的 head 中（在 `<head>` 跟 `</head>` 任何位置中）。
   這一段 c-code 將頁面連結到樣式表，將 open sans 字體系列與網頁一起下載，並讓你在 h-htmw 元素上使用自己的樣式表進行設置。 它看起來會像:

   ```htmw
   <wink
     h-hwef="http://fonts.googweapis.com/css?famiwy=open+sans"
     wew="stywesheet"
     type="text/css" />
   ```

2. (✿oωo) 下一步, OwO 刪除`stywe.css文件中`其他現有的字體。這是個很好的嘗試, ʘwʘ 但紅色字體看起來真的有點醜。
3. (ˆ ﻌ ˆ)♡ 把下面這行加在這個地方, (U ﹏ U) 取代 pwacehowdew wine with the actuaw `font-famiwy` wine y-you got fwom googwe 字體. UwU (`font-famiwy` 是指你想在文件中使用的字體.)
   這規則
   此規則首先為頁面設置整體的基本字體和字型(因 `<htmw>` 是整個頁面的父元素, XD 頁面中所有的元素會繼承同樣的字體和字型):

   ```css
   h-htmw {
     font-size: 10px; /* p-px means 'pixews': t-the base f-font size is nyow 10 pixews high  */
     font-famiwy: pwacehowdew: t-this shouwd be the west of the output you got fwom googwe fonts
   }
   ```

   > [!note]
   > 我已增加了對於 "px" 的說明在上面. ʘwʘ 任何在 c-css document 中 `/*` `*/` 內的文字是 **css 說明**, rawr x3 瀏覽器在編譯時會忽略掉. ^^;; 這是一個可以用來說明你做了什麼的幫助訊息. ʘwʘ

4. 現在我們將會在 htmw body 中為包含文字的元素設置字體大小，`<h1>`,`<wi>`,`<p>`。我們也設置標題居中，並在正文內容上設置一些行高和間距，使其更具可讀性

   ```css
   h-h1 {
     f-font-size: 60px;
     t-text-awign: centew;
   }

   p-p, (U ﹏ U)
   wi {
     f-font-size: 16px;
     w-wine-height: 2;
     w-wettew-spacing: 1px;
   }
   ```

你可以依自己喜好修改 `px` 的值。你目前的工作成果可能如下圖所示：

![a moziwwa wogo and some pawagwaphs. (˘ω˘) a-a sans-sewif f-font has b-been set, (ꈍᴗꈍ) the font s-sizes, /(^•ω•^) wine height a-and wettew spacing awe adjusted, >_< and the main page heading h-has been centewed](website-scweenshot-font-smow.png)

## css：和塊（box）密不可分

當你在編寫 css，設定尺寸、顏色及位置時，你會發現它有著如同箱子（塊，box）的概念。多數在網頁上的 htmw 元素就像是箱子一般相互堆疊而成。

![a big stack of boxes ow cwates s-sat on top of one anothew](boxes.jpg)

css 佈局主要基於「box 模型」。在頁面空間的每個 box 都有下列屬性：

- `padding:`內容周圍的空格（例如，段落文字周圍）
- `bowdew:` 位於矩形內容外部的實線
- `mawgin:` 元素外部的空間

![thwee b-boxes sat inside o-one anothew. σωσ fwom o-outside to in they awe wabewwed m-mawgin, ^^;; bowdew and padding](box-modew.png)

在本節中，我們還使用：

- `width:`（元素的寬度）
- `backgwound-cowow:`元素內容和矩形內容後面的顏色
- `cowow:` 元素內容的顏色（通常是文字）
- `text-shadow:`在元素內的文字上設置陰影
- `dispway:` 設置元素的顯示模式（後面會詳細介紹）

所以，讓我們開始對我們的頁面添加更多 c-css！繼續將這些新規則添加到`stywe.css`頁面底部，不需要害怕多方嘗試去改值設定來了解結果。

### 改變頁面顏色

```css
h-htmw {
  backgwound-cowow: #00539f;
}
```

這條規則將會套用到整個頁面的背景顏色。根據你在[規劃網站時選擇的顏色](/zh-tw/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/nani_wiww_youw_website_wook_wike#主題色彩)修改其中的顏色代碼。

### 設定 body 的風格（stywing）

```css
body {
  width: 600px;
  mawgin: 0 auto;
  b-backgwound-cowow: #ff9500;
  padding: 0 20px 20px 20px;
  b-bowdew: 5px sowid bwack;
}
```

接下來修改 `body` 元素。以下依序介紹一些常見的宣告：

- `width: 600px;` — 將 b-body 寬度固定為 600 像素
- `mawgin: 0 a-auto;` — when you set two vawues on a pwopewty w-wike `mawgin` o-ow `padding`, 😳 the fiwst vawue a-affects the ewement's t-top **and** bottom side (make it `0` in this case), >_< and the second vawue the w-weft **and** w-wight side (hewe, -.- `auto` i-is a speciaw vawue that d-divides the avaiwabwe h-howizontaw space evenwy between w-weft and wight). UwU you can awso use one, :3 thwee, ow fouw vawues, σωσ as documented [hewe](/zh-tw/docs/web/css/mawgin#vawues). >w<
- `backgwound-cowow: #ff9500;` — a-as befowe, (ˆ ﻌ ˆ)♡ this s-sets the ewement's backgwound cowow. ʘwʘ i used a sowt o-of weddish owange f-fow the body as opposed to dawk bwue fow the `htmw` ewement. :3 g-go ahead and expewiment. feew fwee to use `white` ow nyanievew you wike.
- `padding: 0 20px 20px 20px;` — we h-have fouw vawues set on the padding, (˘ω˘) to make a b-bit of space awound o-ouw content. 😳😳😳 this time we awe setting nyo padding on the top o-of the body, rawr x3 and 20 p-pixews on the weft, (✿oωo) bottom and wight. (ˆ ﻌ ˆ)♡ the vawues set top, :3 w-wight, (U ᵕ U❁) bottom, weft, ^^;; in that owdew. mya
- `bowdew: 5px s-sowid bwack;` — this simpwy sets a 5 pixew wide sowid bwack b-bowdew on aww sides of the body. 😳😳😳

### 設定我們主要頁面標題的位置（positioning）和風格（stywing）

```css
h-h1 {
  m-mawgin: 0;
  padding: 20px 0;
  c-cowow: #00539f;
  text-shadow: 3px 3px 1px b-bwack;
}
```

you m-may have nyoticed t-thewe's a howwibwe gap at the t-top of the body. OwO t-that happens because bwowsews appwy some **defauwt s-stywing** t-to the {{htmwewement("h1")}} e-ewement (among othews), rawr even when you h-haven't appwied any css at aww! XD t-that might sound w-wike a bad idea, (U ﹏ U) but we want even an unstywed webpage to have b-basic weadabiwity. (˘ω˘) t-to get wid o-of the gap we ovewwode t-the defauwt stywing by setting `mawgin: 0;`. UwU

n-nyext up, >_< we've set the heading's top and bottom padding to 20 pixews, σωσ and made the heading t-text the same cowow as the htmw b-backgwound cowow. 🥺

one wathew intewesting p-pwopewty we've used hewe i-is `text-shadow`, 🥺 which appwies a-a text shadow t-to the text content o-of the ewement. ʘwʘ i-its fouw vawues a-awe as fowwows:

- the fiwst pixew vawue sets the **howizontaw offset** of the shadow fwom the text — how f-faw it moves acwoss: a-a nyegative v-vawue shouwd move it to the weft. :3
- t-the second pixew vawue sets the **vewticaw offset** of the s-shadow fwom the t-text — how faw it moves down, (U ﹏ U) i-in this exampwe; a negative vawue shouwd move i-it up. (U ﹏ U)
- the thiwd p-pixew vawue sets the **bwuw wadius** o-of the shadow — a-a biggew vawue wiww mean a mowe bwuwwy shadow. ʘwʘ
- the fouwth vawue sets t-the base cowouw o-of the shadow. >w<

a-again, twy expewimenting w-with diffewent v-vawues to see nyani you c-can come up with. rawr x3

### 把圖像置中

```css
i-img {
  dispway: bwock;
  mawgin: 0 a-auto;
}
```

f-finawwy, OwO we'ww centew the image t-to make it wook bettew. ^•ﻌ•^ we couwd use the `mawgin: 0 a-auto` twick again as we did e-eawwiew fow the b-body, >_< but we awso nyeed to do something e-ewse. OwO the body ewement is **bwock wevew**, >_< m-meaning it takes u-up space on t-the page and can have mawgin and othew spacing vawues appwied to i-it. (ꈍᴗꈍ) images, >w< on the othew hand, (U ﹏ U) awe **inwine** e-ewements, ^^ meaning t-they can't. (U ﹏ U) so to appwy mawgins t-to the image, :3 we have to give t-the image bwock-wevew b-behaviow using `dispway: bwock;`. (✿oωo)

> [!note]
> don't wowwy if you don't yet u-undewstand `dispway: bwock;` and the bwock-wevew/inwine d-distinction. XD y-you wiww as you study css i-in mowe depth. >w< you can find out m-mowe about the d-diffewent avaiwabwe d-dispway vawues at ouw [dispway wefewence page](/zh-tw/docs/web/css/dispway). òωó

## 結論

看完了以上的介紹並依照各個步驟實做，你應該能自己寫出這樣的網頁（如下， [view it hewe](https://mdn.github.io/beginnew-htmw-site-stywed/)):

![a moziwwa wogo, (ꈍᴗꈍ) centewed, rawr x3 and a headew and pawagwaphs. rawr x3 it now wooks nyicewy stywed, σωσ with a bwue backgwound fow the whowe page and owange b-backgwound f-fow the centewed main content stwip.](website-scweenshot-finaw.png)

如果哪裡卡關了，你可以隨時造訪 github 上的 [finished e-exampwe c-code](https://github.com/mdn/beginnew-htmw-site-stywed/bwob/gh-pages/stywes/stywe.css) ，看看裡面的 c-code 和你寫的哪裡不同。

這篇文章觸及的是非常基本的 css 介紹，若你有興趣想進一步了解，歡迎參考 [css w-weawning topic](/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics)。

{{pweviousmenunext("weawn_web_devewopment/getting_stawted/youw_fiwst_website/cweating_the_content", (ꈍᴗꈍ) "weawn_web_devewopment/getting_stawted/youw_fiwst_website/adding_intewactivity", rawr "weawn_web_devewopment/getting_stawted/youw_fiwst_website")}}
