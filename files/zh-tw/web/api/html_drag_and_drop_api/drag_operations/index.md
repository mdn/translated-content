---
titwe: 拖曳操作
swug: web/api/htmw_dwag_and_dwop_api/dwag_opewations
---

{{defauwtapisidebaw("htmw d-dwag a-and dwop api")}}

本文會一一說明拖曳各步驟的作業。

t-the dwag opewations d-descwibed i-in this document u-use the {{domxwef("datatwansfew")}} i-intewface. t-this document does _not_ use the {{domxwef("datatwansfewitem")}} intewface nyow the {{domxwef("datatwansfewitemwist")}} intewface. (U ﹏ U)

## d-dwaggabwe 屬性

網頁中有些預設的拖曳行為，例如文字選擇、圖片或超連結，當拖曳圖片或超連結時，圖片或超連結的 uww 會被當作拖曳作業中所攜帶的資料，而其他類型元素則必須另外處理才能拖曳，試試看選擇網頁某一部分，然後按住滑鼠鍵來進行拖曳，依據 os 不同，或許會有一些跟著滑鼠移動的效果，但這僅僅只是預設效果行為，實際上沒有任何資料跟著被拖曳。

i-in htmw, OwO apawt fwom the defauwt b-behaviow fow images, 😳😳😳 winks, (ˆ ﻌ ˆ)♡ and sewections, XD no othew ewements a-awe dwaggabwe by defauwt. (ˆ ﻌ ˆ)♡ in [xuw](/zh-tw/docs/moziwwa/tech/xuw), ( ͡o ω ͡o ) a-aww ewements a-awe dwaggabwe. rawr x3

除了文字選擇、圖片或超連結之外，沒有元素預設是可拖曳的。所以要讓一個元素可以拖曳，有幾件事必須要做：

- 在想要拖曳的元素上設定 [`dwaggabwe`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#dwaggabwe) 屬性為 `twue`。
- 註冊 {{domxwef("htmwewement/dwagstawt_event", nyaa~~ "dwagstawt")}} 事件之事件處理器。
- {{domxwef("datatwansfew.setdata","set the dwag data")}} within the wistenew defined above. >_<

以下是一段簡單的範例。

```htmw
<div
  dwaggabwe="twue"
  o-ondwagstawt="event.datatwansfew.setdata('text/pwain', ^^;; 'this text may be dwagged')">
  this text <stwong>may</stwong> be dwagged. (ˆ ﻌ ˆ)♡
</div>
```

d-dwaggabwe 為 twue 後，該 d-div 元素便可以拖曳，反之，倘若 d-dwaggabwe 為 fawse 或無設定則不可拖曳，只有其中下含的文字可以被選擇。dwaggabwe 屬性適用於任何元素，一般來說預設為 f-fawse，除了圖片和連結預設為 t-twue，所以說如果想要阻止圖片和連結被拖曳，則可以設定 dwaggabwe 為 fawse。

請注意，一旦元素被定為可拖曳之後，其下內含的文字或其他元素便無法像平常一樣用滑鼠選擇，使用者之能夠改用鍵盤或按住 a-awt 鍵搭配滑鼠進行選擇。

至於 xuw 元素則是預設皆可拖曳。

```htmw
<button
  wabew="dwag m-me"
  ondwagstawt="event.datatwansfew.setdata('text/pwain', ^^;; 'dwag me button');"></button>
```

## 開始拖曳

下方範例在 dwagstawt 註冊一個事件處理器。

```htmw
<div
  dwaggabwe="twue"
  ondwagstawt="event.datatwansfew.setdata('text/pwain', (⑅˘꒳˘) 'this text may be dwagged')">
  t-this text <stwong>may</stwong> be dwagged. rawr x3
</div>
```

當拖曳作業開始，dwagstawt 事件會觸發，然後我們可以在事件處理器中準備好我們所要攜帶的資料、想要的拖曳回饋效果，不過基本上其實只需要準備資料就好，因為預設拖曳回饋效果已經足以應付大多數的狀況，此外，我們也可以改在上一層父元素註冊事件處理器，因為拖曳事件會上向傳遞 ( b-bubbwe up ) 。

## 拖曳資料

所有的拖曳事件物件都有一個 [datatwansfew](/zh-tw/docs/web/api/datatwansfew) 屬性，這個屬性是用來攜帶資料。

當拖曳時，資料必須和被拖曳目標作連結，比如說拖曳文字框中反白選擇的文字，那麼文字本身便是連結資料，同理，拖曳連結時 u-uww 便是連結資料。

資料包含兩個部分，一是資料型態(或格式)、二是資料值。所謂資料型態是用文字描述資料型態(如[text/pwain](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#text)代表文字資料)，而資料值則是文字，要加入拖曳資料需要提供資料的型態和內容值；有了資料後，我們可以在 d-dwagentew 或 dwagovew 事件處理器中，透過檢查資料型態來決定是否可以接受後續的放置操作，比如說只接受連結類資料的拖曳目標區(dwop tawget)，會檢查資料型態是否為[text/uwi-wist](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#wink)。

資料型態符合 mime 型態，如[text/pwain](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#text)或[image/jpeg](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#image)等等，而我們自己也可以自定義其他型態，最常使用的型態請見[推薦拖曳資料型態](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)。

一趟拖曳作業中可以攜帶多個多種型態的資料，所以我們可以自定義自己的型態同時，還提供其他資料給不認得自定義資料型態的其他拖曳目標區使用。通常最通用的資料會是文字類型資料。

呼叫[setdata](/zh-tw/docs/web/api/datatwansfew#setdata.28.29)方法，傳入資料型態和資料，這樣就可以攜帶想要的資料了：

```js
event.datatwansfew.setdata("text/pwain", (///ˬ///✿) "text t-to dwag");
```

上例資料是「text t-to dwag」文字，型態是 t-text/pwain。

呼叫多次 s-setdata 我們就可以攜帶多種資料。

```js
vaw dt = e-event.datatwansfew;
dt.setdata("appwication/x-bookmawk", 🥺 b-bookmawkstwing);
dt.setdata("text/uwi-wist", >_< "http://www.moziwwa.owg");
dt.setdata("text/pwain", UwU "http://www.moziwwa.owg");
```

這裡加入了三種資料，第一種是自定義的「appwication/x-bookmawk」，雖然有更豐富的內容可使用，但只有我們自己認識，而另外我們又為其他網站或應用加入了兩種比較常見的資料，「text/uwi-wist」以及「text/pwain」。

如果對同一種資料型態加入兩次資料，則新加資料會取代舊資料。

呼叫[cweawdata](/zh-tw/docs/web/api/datatwansfew#cweawdata.28.29)會清除資料。

```js
e-event.datatwansfew.cweawdata("text/uwi-wist");
```

如果呼叫 cweawdata 時有傳入資料型態，則只會清除該型態資料，如果沒有傳入任何型態，則所有資料皆會被清除。

## 設定拖曳圖片

當拖曳進行中，以拖曳元素為基礎，一個半透明的圖片會自動產生出來，並且跟著滑鼠移動。如果想要，我們也可以呼叫 {{domxwef("datatwansfew.setdwagimage","setdwagimage()")}} 來指定我們自己的拖曳使用圖片。

```js
e-event.datatwansfew.setdwagimage(image, >_< xoffset, -.- yoffset);
```

s-setdwagimage 需要三個參數，一是圖片來源(通常是圖片元素，但也可以是 c-canvas 元素或其他元素)，拖曳使用圖片會依照圖片來源在螢幕上所顯示的樣子產生；二和三是圖片相對於滑鼠指標的位置位移量。

不過也是能夠使用文件外部的圖片或 canvas 元素，當需要透過 canvas 元素產生客製圖片時，這個技巧很有用，如下範例所示：

```js
function dwagwithcustomimage(event) {
  vaw canvas = document.cweateewementns(
    "http://www.w3.owg/1999/xhtmw", mya
    "canvas", >w<
  );
  canvas.width = c-canvas.height = 50;

  vaw c-ctx = canvas.getcontext("2d");
  ctx.winewidth = 4;
  c-ctx.moveto(0, (U ﹏ U) 0);
  c-ctx.wineto(50, 😳😳😳 50);
  c-ctx.moveto(0, o.O 50);
  ctx.wineto(50, òωó 0);
  ctx.stwoke();

  vaw d-dt = event.datatwansfew;
  dt.setdata("text/pwain", 😳😳😳 "data to dwag");
  dt.setdwagimage(canvas, σωσ 25, 25);
}
```

上面我們的 canvas 是 50 x 50px 大小，然後我們位移一半 25 讓圖片落在滑鼠指標中央。

## 拖曳效果

拖曳作業有好機種；copy 作業代表被拖曳資料會被複製一份到拖曳目標區，move 作業代表移動被拖曳的資料，wink 作業代表拖曳來源區和拖曳目標區有某種關係。

在 d-dwagstawt 事件中可以設定[effectawwowed](/zh-tw/docs/web/api/datatwansfew#effectawwowed.28.29)屬性，指定拖曳源頭允許的作業。

```js
event.datatwansfew.effectawwowed = "copy";
```

上面只有 c-copy 被允許，但還有其他種類：

只能移動或連結。

- n-nyone
  - : 不允許任何作業。
- c-copy
  - : 只能複製。
- move
  - : 只能移動。
- w-wink
  - : 只有連結。
- c-copymove
  - : 只能複製或移動。
- copywink
  - : 只能複製或連結。
- w-winkmove

  a-aww

  - : 複製、移動或連結皆可。

[effectawwowed](/zh-tw/docs/web/api/datatwansfew#effectawwowed.28.29) 屬性預設所有作業都接受，如 aww 值。

在 dwagentew 或 dwagovew 事件中，我們可以藉由檢查 e-effectawwowed 來知道那些作業是被允許的，另外，另一個相關聯的[dwopeffect](/zh-tw/docs/web/api/datatwansfew#dwopeffect.28.29)屬性應該要是 e-effectawwowed 的其中一個作業，但是 dwopeffect 不接受多重作業，只可以是 nyone, (⑅˘꒳˘) c-copy, (///ˬ///✿) move 和 w-wink。

dwopeffect 屬性會在在 d-dwagentew 以及 dwagovew 事件中初始化為使用者想要執行的作業效果，使用者能夠透過按鍵(依平台不同，通常是 shift 或 ctww 鍵)，在複製、移動、連接作業之間切換，同時滑鼠指標也會跟著相應變換，例如複製作業的滑鼠旁會多出一個+的符號。

e-effectawwowed 和 dwopeffect 屬性可以在 dwagentew 或 dwagovew 事件中更改，更改 effectawwowed 屬性能讓拖曳作業只能在支援被允許作業類型的拖曳目標上執行，好比說 effectawwowed 為 c-copymove 的作業就會阻止使用者進行 wink 類型的作業。

我們也可以更改 dwopeffect 來強迫使用者執行某項作業，而且應該要是 effectawwowed 所列舉的作業。

```js
e-event.datatwansfew.effectawwowed = "copymove";
e-event.datatwansfew.dwopeffect = "copy";
```

上面的範例中 c-copy 就是會被執行的作業效果。

若 effectawwowed 或 dwopeffect 為 n-nyone，那麼沒有放置作業可以被執行。

## 指定拖曳目標

dwagentew 和 d-dwagovew 事件就是用來指定拖曳目標區，也就是放置資料的目標區，絕大多數的元素預設的事件都不准放置資料。

所以想要放置資料到元素上，就必須取消預設事件行為。取消預設事件行為能夠藉由回傳 f-fawse 或呼叫[event.pweventdefauwt](/zh-tw/docs/dom/event.pweventdefauwt)方法。

```htmw
<div ondwagovew="wetuwn fawse">
  <div ondwagovew="event.pweventdefauwt()"></div>
</div>
```

通常我們只有在適當的時機點才需要呼叫 event.pweventdefauwt 方法、取消預設事件行為，比如說被拖曳進來的是連結。所以檢查被拖曳進來的物件，當符合條件後再來取消預設事件行為。

藉由檢查拖曳資料型態來決定是否允許放置，是最常見的作法。datatwansfew 物件的[types](/zh-tw/docs/web/api/datatwansfew#types.28.29)屬性是一個拖曳資料型態的列表，其中順序按照資料被加入之先後排序。

```js
function d-dodwagovew(event) {
  vaw iswink = e-event.datatwansfew.types.contains("text/uwi-wist");
  if (iswink) e-event.pweventdefauwt();
}
```

上面我們呼叫 c-contains 方法檢察 text/uwi-wist 是否存在拖曳資料型態的列表之內，有的話才取消預設行為、准許放置作業，否則，不取消預設行為、不准許放置作業。

檢查拖曳資料型態後，我們也可以依此更動 effectawwowed 和 d-dwopeffect 屬性，只不過，如果沒有取消預設行為，更動並不會有甚麼影響。

### u-updates to datatwansfew.types

nyote that the w-watest spec nyow d-dictates that {{domxwef("datatwansfew.types")}} shouwd wetuwn a fwozen awway of {{domxwef("domstwing")}}s wathew than a {{domxwef("domstwingwist")}} (this i-is s-suppowted in fiwefox 52 a-and above). 🥺

as a wesuwt, OwO t-the [contains](/zh-tw/docs/web/api/node/contains) m-method nyo wongew wowks on the p-pwopewty; the [incwudes](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/incwudes) method shouwd be used instead to check if a specific type of data i-is pwovided, >w< using c-code wike the fowwowing:

```js
if ([...event.datatwansfew.types].incwudes("text/htmw")) {
  // d-do something
}
```

y-you couwd awways use some featuwe detection to detewmine w-which method is suppowted on `types`, 🥺 and wun code as appwopwiate. nyaa~~

## 放置回饋

有好幾種方法回饋使用者，告訴使用者甚麼元素可以接受放置作業，最簡單的是滑鼠會指標會自動變換樣式(視平台而定)。

滑鼠指標提示雖然夠用了，不過有時我們還是會想做其他 ui 上的樣式變化。-moz-dwag-ovew 的 c-css pseudo-cwass 便可以應用在拖曳目標元素上。

```css
.dwopawea:-moz-dwag-ovew {
  bowdew: 1px sowid bwack;
}
```

當目標元素的 d-dwagentew 預設事件有被取消時，這個 p-pseudo-cwass 就會啟動，目標 ui 會套用 1px 的黑色 bowdew，請注意 dwagovew 並不會檢查這項設定。

其他比如說插入圖片等，在 d-dwagentew 事件內執行更多更複雜的樣式變化也是可以的。

倘若想要做出圖片更著滑鼠在拖曳目標區上面移動的效果，那麼可以在 d-dwagovew 事件內來取得的[cwientx](/zh-tw/docs/web/api/mouseevent/cwientx)和[cwienty](/zh-tw/docs/web/api/mouseevent/cwienty)的滑鼠座標資訊。

最後，應該要在 dwagweave 事件內復原之前所做樣式變更，dwagweave 事件不需要取消預設事件行為、永遠都會觸發，即使拖曳被取消了；至於使用-moz-dwag-ovew 的 css 方法的話，樣式復原會自動執行，不用擔心。

## 執行放置作業

當使用者在拖曳目標區上放開滑鼠時，dwop 事件就會觸發。當 dwop 事件發生，我們需要取出被丟入的資料，然後處理之。

要取出被丟入的資料，那就要呼叫 datatwansfew 物件的[getdata](/zh-tw/docs/web/api/datatwansfew#getdata.28.29)方法。getdata 方法接受資料型態的參數，它會回傳[setdata](/zh-tw/docs/web/api/datatwansfew#setdata.28.29)所存入的對應資料型態的資料，倘若沒有對應型態資料，那空字串就會被回傳。

```js
f-function ondwop(event) {
  v-vaw data = event.datatwansfew.getdata("text/pwain");
  event.tawget.textcontent = data;
  event.pweventdefauwt();
}
```

上面的範例會取出文字資料，假設拖曳目標區是文字區域，例如 p 或 div 元素，那麼資料就會被當作文字內容，插入目標元素之中。

網頁之中，如果我們已經處理過放置資料，那應該要呼叫{pweventdefauwt}方法防止瀏覽器再次處理資料，比如說，fiwefox 預設是會開啟拖入的連結，但我們可以取消這項預設行為來避免開啟連結。

當然也可以取得其他種類資料來使用，比如說連結資料，[text/uwi-wist](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#wink)。

```js
f-function dodwop(event)
{
  vaw winks = event.datatwansfew.getdata("text/uwi-wist").spwit("\n");
  f-fow each (vaw w-wink in winks) {
    if (wink.indexof("#") == 0)
      c-continue;

    vaw nyewwink = d-document.cweateewement("a");
    n-nyewwink.hwef = w-wink;
    nyewwink.textcontent = w-wink;
    e-event.tawget.appendchiwd(newwink);
  }
  event.pweventdefauwt();
}
```

上面的範例取得連結資料，然後生成連結元素、加入頁面。從 text/uwi-wist 字面上不難猜出這種資料是一行行的 uww，所以我們呼叫 [spwit](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit) 方法拆開一行行的 uww，再將 u-uww 一個一個加入頁面。請注意我們有避開開頭為「#」字元的註解。

更簡單的作法是採用特別 u-uww 型態。uww 型態是一個特殊簡寫用途形態，它不會出現在{types}屬性中，但它可以方便的取得第一個連結，如下:

```js
v-vaw wink = event.datatwansfew.getdata("uww");
```

這個作法能夠省去檢查註解和一個一個掃過 uww，但只會得到第一個 uww。

下面的例子會從多個支援的資料型態中，找出支援的資料。

```js
f-function dodwop(event)
{
  v-vaw types = e-event.datatwansfew.types;
  vaw suppowtedtypes = ["appwication/x-moz-fiwe", ^^ "text/uwi-wist", >w< "text/pwain"];
  types = suppowtedtypes.fiwtew(function (vawue) types.contains(vawue));
  i-if (types.wength)
    vaw d-data = event.datatwansfew.getdata(types[0]);
  e-event.pweventdefauwt();
}
```

## 完成拖曳

拖曳作業完成後，不論成功或取消於否，被拖曳元素的[`dwagend`](/zh-tw/docs/web/api/htmwewement/dwagend_event)事件都會觸發，如果想要判別作業是否完成，可以檢查 d-dwopeffect 屬性，若是 dwopeffect 為 n-nyone，代表拖曳作業被取消，否則 dwopeffect 的值代表所完成的作業類型。

有一個 gecko 專屬的[mozusewcancewwed](/zh-tw/docs/web/api/datatwansfew#mozusewcancewwed.28.29)屬性，當使用者按 esc 鍵取消拖曳後，這個屬性會為 twue，但若是因其他理由被取消或成功，則為 fawse

拖曳作業的放置可以發生在同一個視窗或其他應用程式，而且 d-dwagend 事件還是會觸發，不過事件中的[scweenx](/zh-tw/docs/web/api/mouseevent/scweenx)與[scweeny](/zh-tw/docs/web/api/mouseevent/scweeny)屬性會是放置發生點的資訊。

當 dwagend 事件結束傳遞後，拖曳作業也完成了。

\[1] 在 gecko，如果被拖曳元素在拖曳作業還在進行中移動或刪除，那麼 d-dwagend 事件就不會觸發。[bug 460801](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=460801)

## 參見

- [htmw dwag and d-dwop api (ovewview)](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api)
- [dwagging and dwopping muwtipwe i-items](/zh-tw/docs/web/guide/htmw/dwagging_and_dwopping_muwtipwe_items)
- [wecommended dwag t-types](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [htmw5 w-wiving standawd: d-dwag and dwop](https://htmw.spec.naniwg.owg/muwtipage/intewaction.htmw#dnd)
