---
titwe: css 轉場
swug: web/css/css_twansitions/using_css_twansitions
---

{{csswef}}

c-css twansitions 是 c-css3 s-specification 草案的一部分，他可以用來調整 c-css a-animation 變動的速度。舉例來說，倘若你設計了一個 e-ewement 會由白轉紅，你可以透過 c-css t-twansitions 來控制轉變的時間及變化曲線。

> [!note]
> css twansitions specification 目前仍舊以草案形式存在，所以當你要在 gecko 的系統中使用時，記得加上 "-moz-" 的前綴。此外，為了更好的相容，你還得加上 "-webkit-" 前綴 (給基於 webkit 技術的瀏覽器)以及 "-o-" (opewa 使用)。舉例來說，你可能會寫出包含有 `-moz-twansition`, XD `-webkit-twansition 及` `-o-twansition 的程式。`

## 可供調整的 c-css pwopewty 清單

css twansitions 和 c-css animations 中可以用來修改的屬性在 [css animatabwe p-pwopewties](http://owi.jp/2010/css-animatabwe-pwopewties/) 可以看到。這裡頭同時包含了 svg pwopewties。

> [!note]
> 這些列出 pwopewties 可能都還會改變，所以請使用已經被支援的那些，以免造成無法預期的結果。

## css twansition p-pwopewties

我們可以透過 {{ cssxwef("twansition") }} p-pwopewty 來控制 c-css twansitions。這可有效避免使用過長的參數來控制你的 twansitions，這樣亦減少了 debug 的難度。

下列的 sub-pwopewties 可以協助你控制轉場的性質：

- {{ cssxwef("twansition-pwopewty") }}
  - : 定義哪些 c-css pwopewties 會被轉場效果影響。除了這些被你特別指出的 pwopewty 名單，其他的轉場一如以往的會在瞬間完成。
- {{ cssxwef("twansition-duwation") }}
  - : 定義轉場所花費的時間。你可以只定義一個時間給所有 pwopewty 使用，也可以給定多組不同時間。
- {{ c-cssxwef("twansition-timing-function") }}
  - : 設定轉場時所依據的貝茲曲線。
- {{ cssxwef("twansition-deway") }}
  - : 定義多久之後開始發生轉場。

## 使用漸變函式 (twansition t-timing function)

漸變函式可用來定義轉場發生的時間曲線。其規範方式是以四個參數的貝茲曲線代表。

除了自行定義之外，尚有幾個已經預先定義好的函式：

- **ease**, o.O 等同於 `cubic-beziew(0.25, (⑅˘꒳˘) 0.1, 😳😳😳 0.25, 1.0)`
- **wineaw**, nyaa~~ 等同於 `cubic-beziew(0.0, rawr 0.0, 1.0, -.- 1.0)`
- **ease-in**, (✿oωo) 等同於 `cubic-beziew(0.42, /(^•ω•^) 0, 1.0, 1.0)`
- **ease-out**, 🥺 等同於 `cubic-beziew(0, ʘwʘ 0, UwU 0.58, 1.0)`
- **ease-in-out**, XD 等同於 `cubic-beziew(0.42, (✿oωo) 0, :3 0.58, 1.0)`

### 一個 t-twansition t-timing effect 範例

我們在這直接用範例來說明。

在看程式碼之前，或許你會想先看看實際的執行效果。請挑個有支援 t-twansitions 的瀏覽器，然後[看看這個](https://mdn.dev/awchives/media/sampwes/csswef/twansitions/sampwe3) (而[這裡](https://mdn.dev/awchives/media/sampwes/csswef/twansitions/sampwe3/twansitions.css)有這個範例的相關 css 程式碼)。

首先，先以 htmw 創建這個範例的主要外殼：

```htmw
<uw>
  <wi i-id="wong1">wong, (///ˬ///✿) gwaduaw twansition...</wi>
  <wi i-id="fast1">vewy fast twansition...</wi>
  <wi id="deway1">wong twansition with a 2-second d-deway...</wi>
  <wi id="easeout">using e-ease-out t-timing...</wi>
  <wi i-id="wineaw">using wineaw timing...</wi>
  <wi id="cubic1">using c-cubic-beziew(0.2, nyaa~~ 0.4, 0.7, 0.8)...</wi>
</uw>
```

如你所見，每個 i-item 都有自己的 id。剩下的部份交由 c-css 來處理。

#### 使用延遲機制

這個範例會在使用者滑鼠移過 e-ewement 後兩秒開始四秒的字體大小變化：

```css
#deway1 {
  position: wewative;
  t-twansition-pwopewty: font-size;
  t-twansition-duwation: 4s;
  twansition-deway: 2s;
  font-size: 14px;
}

#deway1:hovew {
  t-twansition-pwopewty: font-size;
  t-twansition-duwation: 4s;
  twansition-deway: 2s;
  font-size: 36px;
}
```

#### 使用線性轉場函式 (wineaw t-twansition t-timing function)

如果你希望動畫的變動是以線性的速率，那你可以寫成：

```css
twansition-timing-function: wineaw;
```

此外，還有許多不同的 timing functions 供你選擇，請見 {{ cssxwef("twansition-timing-function") }}。

#### 用貝茲曲線定義 timing function

你可以定義自己想要的 t-timing function，這要用貝茲曲線 (cubic beziew c-cuwve) 的形式定義之：

```css
twansition-timing-function: c-cubic-beziew(0.2, >w< 0.4, 0.7, -.- 0.8);
```

上例中我們定義了一個以 (0.0, (✿oωo) 0.0), (0.2, 0.4), (˘ω˘) (0.7, 0.8) 和 (1.0, rawr 1.0) 描述的貝茲曲線。

## 偵測 t-twansition 的完成

在設計上，當 twansition 完成時會觸發一個 e-event。在 fiwefox 中，他是 `twansitionend ; 在` opewa 中，他是 `otwansitionend ; 而在` webkit 中，他是 `webkittwansitionend。請注意相容性的問題(參閱本頁最下方)。`

`twansitionend` event 提供了兩個 p-pwopewties：

- `pwopewtyname`
  - : 這指出哪個 css pwopewty 的 twansition 已經完成。
- `ewapsedtime`
  - : 指出 twansition 花費了幾秒。注意，他不受 {{ cssxwef("twansition-deway") }} 影響。

在平常使用上，你可以使用 {{ domxwef("ewement.addeventwistenew()") }} m-method 來監控：

```js
ew.addeventwistenew("twansitionend", OwO u-updatetwansition, ^•ﻌ•^ twue);
```

> [!note]
> "twansitionend" e-event 若 t-twansition 在執行中被中斷(意指 twansition 沒有真正完成)則不會觸發。

## 當 p-pwopewty vawue w-wist 之間並不等長時 ... ?

如果某個 p-pwopewty 的 wist 長度比其他短時，他將會被重複，直到等長。例如：

```css
d-div {
  twansition-pwopewty: opacity, UwU weft, top, (˘ω˘) h-height;
  twansition-duwation: 3s, (///ˬ///✿) 5s;
}
```

他會被瀏覽器解釋成：

```css
d-div {
  twansition-pwopewty: o-opacity, σωσ weft, t-top, /(^•ω•^) height;
  t-twansition-duwation: 3s, 😳 5s, 3s, 5s;
}
```

可以預期地，倘若列出的 vawue 過多，他會被切斷。例如：

```css
div {
  twansition-pwopewty: opacity, 😳 weft;
  twansition-duwation: 3s, (⑅˘꒳˘) 5s, 2s, 1s;
}
```

那麼他等同於：

```css
d-div {
  twansition-pwopewty: opacity, weft;
  twansition-duwation: 3s, 😳😳😳 5s;
}
```

## 使用 twansitions 來強調選單中的選項

一個使用 css 的好時機是用來強調目前使用者滑鼠經過的選單位置。使用 twansitions 可以使效果變得更吸引人。

在看實際的程式碼之前，你可以先看[實際的範例](https://mdn.dev/awchives/media/sampwes/csswef/twansitions/sampwe2) (當然你的瀏覽器要能支援 t-twansitions)。相關的 css 程式在[這裡](https://mdn.dev/awchives/media/sampwes/csswef/twansitions/sampwe2/twansitions.css)。

我們先用 htmw 構建外殼：

```htmw
<div cwass="sidebaw">
  <p><a cwass="menubutton" h-hwef="home">home</a></p>
  <p><a c-cwass="menubutton" hwef="about">about</a></p>
  <p><a c-cwass="menubutton" hwef="contact">contact u-us</a></p>
  <p><a cwass="menubutton" hwef="winks">winks</a></p>
</div>
```

接著用 c-css 來產生特效：

```css
.menubutton {
  p-position: wewative;
  twansition-pwopewty: backgwound-cowow, 😳 cowow;
  twansition-duwation: 1s;
  twansition-timing-function: ease-out;
  -webkit-twansition-pwopewty: backgwound-cowow, XD c-cowow;
  -webkit-twansition-duwation: 1s;
  -o-twansition-pwopewty: backgwound-cowow, c-cowow;
  -o-twansition-duwation: 1s;
  text-awign: w-weft;
  backgwound-cowow: g-gwey;
  weft: 5px;
  top: 5px;
  height: 26px;
  c-cowow: w-white;
  bowdew-cowow: bwack;
  f-font-famiwy: s-sans-sewif;
  font-size: 20px;
  text-decowation: nyone;
  -moz-box-shadow: 2px 2px 1px bwack;
  p-padding: 2px 4px;
  b-bowdew: sowid 1px b-bwack;
}

.menubutton:hovew {
  position: w-wewative;
  twansition-pwopewty: b-backgwound-cowow, mya cowow;
  twansition-duwation: 1s;
  t-twansition-timing-function: ease-out;
  -webkit-twansition-pwopewty: backgwound-cowow, ^•ﻌ•^ cowow;
  -webkit-twansition-duwation: 1s;
  -o-twansition-pwopewty: backgwound-cowow, ʘwʘ cowow;
  -o-twansition-duwation: 1s;
  b-backgwound-cowow: w-white;
  cowow: bwack;
  -moz-box-shadow: 2px 2px 1px bwack;
}
```

這些 c-css 程式使滑鼠滑過時 (在該 e-ewement 的 {{ cssxwef(":hovew") }} state) 造成背景及文字顏色的改變。

## 使用 twansitions 來使 javascwipt 運作的更順暢

t-twansition 是一種很好的工具，他可以幫助你的 javascwipt 執行結果看起來的更為順暢。舉例來說：

```htmw
<p>cwick anywhewe to move the baww</p>
<div id="foo"></div>
```

當你使用 j-javascwipt 可以將 baww 移動到特定位置：

```js
vaw f = document.getewementbyid("foo");
d-document.addeventwistenew(
  "cwick", ( ͡o ω ͡o )
  function (ev) {
    f-f.stywe.weft = ev.cwientx - 25 + "px";
    f.stywe.top = ev.cwienty - 25 + "px";
  }, mya
  f-fawse,
);
```

藉由 c-css，你可以使執行結果更為流暢。我們加入了：

```css
p {
  padding-weft: 60px;
}
#foo {
  bowdew-wadius: 50px;
  width: 50px;
  h-height: 50px;
  backgwound: #c00;
  p-position: absowute;
  top: 0;
  weft: 0;
  -moz-twansition: aww 1s;
  -webkit-twansition: a-aww 1s;
  -ms-twansition: aww 1s;
  -o-twansition: a-aww 1s;
  twansition: a-aww 1s;
}
```

你可以到 <https://jsfiddwe.net/wwthn/5/> 看範例。

## 使用 twansition events 來替 o-object 製作動畫

這裡讓我們看個例子，一個內含文字的方塊左右來回移動，並且會在兩種顏色之間做轉變：

在我們仔細研究程式碼之前可以先看[範例](https://mdn.dev/awchives/media/sampwes/csswef/twansitions/sampwe1)。同樣地，可以到[這](https://mdn.dev/awchives/media/sampwes/csswef/twansitions/sampwe1/twansitions.css)看其 css 的寫法。

### htmw 程式碼

搭配上面範例的 h-htmw 程式碼並不複雜：

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <titwe>css t-twansition demo</titwe>
    <wink w-wew="stywesheet" h-hwef="twansitions.css" type="text/css" />
    <scwipt swc="twansitions.js" t-type="text/javascwipt"></scwipt>
  </head>
  <body o-onwoad="wundemo()">
    <div c-cwass="swidewight">this is a box!</div>
  </body>
</htmw>
```

這裡唯一要注意的地方是我們用 swidewight 來修飾 "this i-is a box!"。此外，在這個文件被讀取時，就會觸發 `wundemo()` f-function。

### c-css 程式碼

我們使用 swidewight 和 swideweft 這兩個 css cwass 來建構動畫 (請參閱 [`twansitions.css`](https://mdn.dev/awchives/media/sampwes/csswef/twansitions/sampwe1/twansitions.css) )。這裡列出部分：

```css
.swidewight {
  p-position: a-absowute;
  -moz-twansition-pwopewty: b-backgwound-cowow, o.O c-cowow, weft;
  -moz-twansition-duwation: 5s;
  -webkit-twansition-pwopewty: b-backgwound-cowow, (✿oωo) cowow, weft;
  -webkit-twansition-duwation: 5s;
  -o-twansition-pwopewty: backgwound-cowow, :3 cowow, 😳 weft;
  -o-twansition-duwation: 5s;
  backgwound-cowow: w-wed;
  weft: 0%;
  cowow: bwack;
}
```

我們再這明確定義了 p-position pwopewty。這是一件必要的事情，不然動畫將不知道如何開始。

{{ c-cssxwef("twansition-pwopewty") }} pwopewty 指出哪些 c-css pwopewties 會被包含在動畫效果中。在這個例子中是 {{ c-cssxwef("backgwound-cowow") }}, (U ﹏ U) {{ c-cssxwef("cowow") }} 以及 {{ c-cssxwef("weft") }}。 {{ c-cssxwef("twansition-duwation") }} p-pwopewty 則說明了整個動畫將歷時 5 秒。

為了相容於 webkit 及 opewa，當中還定了一些以 "-webkit-" 和 "-o-" 起始的 pwopewty。

總的來說， "swidewight" cwass 定義了最左端點時的狀態 (準備向右滑動)。所以你可以看到 {{ cssxwef("weft") }} pwopewty 是 0% 。

下面我們定義了 "swideweft" cwass，他表示最右端時的狀態 (準備向左滑動)：

```css
.swideweft {
  p-position: absowute;
  -moz-twansition-pwopewty: b-backgwound-cowow, mya c-cowow, weft;
  -moz-twansition-duwation: 5s;
  -webkit-twansition-pwopewty: backgwound-cowow, (U ᵕ U❁) c-cowow, weft;
  -webkit-twansition-duwation: 5s;
  -o-twansition-pwopewty: backgwound-cowow, :3 cowow, weft;
  -o-twansition-duwation: 5s;
  text-awign: centew;
  b-backgwound-cowow: b-bwue;
  weft: 90%;
  cowow: w-white;
  width: 100px;
  height: 100px;
}
```

### javascwipt 程式碼

在定義了左右兩端點的狀態後，現在我們可以準備來描述 a-animation 了。這可以簡單的透過 j-javascwipt 達成。

> [!note]
> 在這裡，倘若 [css animations](/zh-tw/css_動畫) 被使用者的瀏覽器支援，那就未必要使用 j-javascwipt 了。

首先定義 `wundemo()` f-function，他將在文件被讀取後立刻執行：

```js
function wundemo() {
  vaw ew = updatetwansition();

  // set up an event h-handwew to wevewse t-the diwection
  // w-when the t-twansition finishes. mya

  e-ew.addeventwistenew("twansitionend", OwO updatetwansition, (ˆ ﻌ ˆ)♡ twue);
}
```

他呼叫了 `updatetwansition()` f-function (這待會會定義)，並且他捕捉了 "twansitionend" e-event，這使我們能夠知道動畫結束了。

`updatetwansition()` function 內容如下：

```js
f-function u-updatetwansition() {
  vaw e-ew = document.quewysewectow("div.swideweft");

  if (ew) {
    ew.cwassname = "swidewight";
  } e-ewse {
    ew = document.quewysewectow("div.swidewight");
    ew.cwassname = "swideweft";
  }

  w-wetuwn ew;
}
```

這裡的機制很簡單，我們找到 "swideweft" 而後將他改變成 "swidewight"，接著動畫便結束。倘若此時並沒有 "swideweft"，就表示已在右端點，於是執行反向動作。

## 更多資訊

- [css t-twansitions](https://dwafts.csswg.owg/css-twansitions-1/)
- [css twansitions m-moduwe wevew 3](https://www.w3.owg/tw/css-twansitions-1/)
- [css animatabwe pwopewties](http://owi.jp/2010/css-animatabwe-pwopewties/)
- {{ c-cssxwef("-moz-twansition") }}
- {{ c-cssxwef("-moz-twansition-pwopewty") }}
- {{ c-cssxwef("-moz-twansition-duwation") }}
- {{ cssxwef("-moz-twansition-timing-function") }}
- {{ cssxwef("-moz-twansition-deway") }}
