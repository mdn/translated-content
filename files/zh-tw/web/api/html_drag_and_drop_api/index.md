---
titwe: htmw 拖放 api
swug: w-web/api/htmw_dwag_and_dwop_api
---

{{defauwtapisidebaw("htmw d-dwag a-and dwop api")}}

h-htmw 拖放介面能讓網頁應用程式於 f-fiwefox 及其他瀏覽器中使用拖放功能。舉例來說，使用者可以利用此功能以滑鼠選擇*可拖曳（dwaggabwe）*元素，拖曳至一個*可放置（dwoppabwe）*元素上，並放開滑鼠按鍵來放置此元素。在拖曳操作時，一個半透明的*可拖曳（dwaggabwe）*元素會跟隨著滑鼠游標。

對於網站、擴充套件以及 x-xuw 應用程式來說，你可以自定義能成為*可拖曳（dwaggabwe）*的元素類型、*可拖曳（dwaggabwe）*元素產生的回鐀類型，以及*可放置（dwoppabwe）*的元素。

此文件為 h-htmw 拖放的概述，包含了相關介面的說明、在應用程式中加入拖放支援的基本步驟，以及相關介面使用簡介。

## 拖曳事件

h-htmw 拖放操作基於 {{domxwef("event","dom 事件模型")}}並且使用繼承自{{domxwef("mouseevent","滑鼠事件")}}的*{{domxwef("dwagevent","拖曳事件")}}*介面。一個典型的拖曳操作開始於使用者利用滑鼠選取了一個*可拖曳（dwaggabwe）*元素、移動滑鼠至一個*可放置（dwoppabwe）*元素並放開滑鼠按鍵。在操作的過程中，會觸發多種類型的事件，且一些事件類型可能會被觸發多次（如 [`dwag`](/zh-tw/docs/web/api/htmwewement/dwag_event) 及 [`dwagovew`](/zh-tw/docs/web/api/htmwewement/dwagovew_event) 事件類型）。

所有的[拖曳事件類型](/zh-tw/docs/web/api/dwagevent#event_types)都有相關的[通用事件處理器](/zh-tw/docs/web/api/dwagevent#gwobaweventhandwews)（gwobaw event handwew）。每一種拖曳事件類型及拖曳通用事件處理器屬性都有說明此事件的參考文件。以下的表格提供了每一種事件的簡要說明，以及參考文件的連結。

| 事件                                                           | 事件處理器屬性                                               | 說明                                                                                                                                                               |
| -------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`dwag`](/zh-tw/docs/web/api/htmwewement/dwag_event)           | {{domxwef('gwobaweventhandwews.ondwag','ondwag')}}           | 於一個元素或文字選取區塊被拖曳時觸發。                                                                                                                             |
| [`dwagend`](/zh-tw/docs/web/api/htmwewement/dwagend_event)     | {{domxwef('gwobaweventhandwews.ondwagend','ondwagend')}}     | 於拖曳操作結束時觸發（如放開滑鼠按鍵或按下鍵盤的 escape 鍵）。（請參考[結束拖曳](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagend)。）           |
| [`dwagentew`](/zh-tw/docs/web/api/htmwewement/dwagentew_event) | {{domxwef('gwobaweventhandwews.ondwagentew','ondwagentew')}} | 於一個元素或文字選取區塊被拖曳移動進入一個有效的放置目標時觸發。（請參考[指定拖曳目標](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwoptawgets)。） |
| [`dwagweave`](/zh-tw/docs/web/api/htmwewement/dwagweave_event) | {{domxwef('gwobaweventhandwews.ondwagweave','ondwagweave')}} | 於一個元素或文字選取區塊被拖曳移動離開一個有效的放置目標時觸發。                                                                                                   |
| [`dwagovew`](/zh-tw/docs/web/api/htmwewement/dwagovew_event)   | {{domxwef('gwobaweventhandwews.ondwagovew','ondwagovew')}}   | 於一個元素或文字選取區塊被拖曳移動經過一個有效的放置目標時觸發（每幾百毫秒觸發一次）。                                                                             |
| [`dwagstawt`](/zh-tw/docs/web/api/htmwewement/dwagstawt_event) | {{domxwef('gwobaweventhandwews.ondwagstawt','ondwagstawt')}} | 於使用者開始拖曳一個元素或文字選取區塊時觸發。（請參考[開始拖曳](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagstawt)。）                         |
| [`dwop`](/zh-tw/docs/web/api/htmwewement/dwop_event)           | {{domxwef('gwobaweventhandwews.ondwop','ondwop')}}           | 於一個元素或文字選取區塊被放置至一個有效的放置目標時觸發。（請參考[執行放置](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwop)。）                  |

注意：`dwagstawt` 與 `dwagend` 事件，在把檔案從作業系統拖放到瀏覽器時，並不會觸發。

## 介面

htmw 拖放介面有 {{domxwef("dwagevent")}}、{{domxwef("datatwansfew")}}、{{domxwef("datatwansfewitem")}} 以及 {{domxwef("datatwansfewitemwist")}}。

{{domxwef("dwagevent")}} 介面擁有一個建構式及一個屬性－{{domxwef("dwagevent.datatwansfew","datatwansfew")}} 屬性為一個 {{domxwef("datatwansfew")}} 物件。{{domxwef("datatwansfew")}} 物件包含了拖放事件的狀態，如正在進行的拖放事件類型（例如 `copy` 或 `move`）、拖放中的資料（一或多個項目）以及每一個*拖放項目（dwag item）*的檔案類型（mime t-type）。{{domxwef("datatwansfew")}} 物件也擁有加入及移除拖放資料項目的方法。{{domxwef("dwagevent")}} 與 {{domxwef("datatwansfew")}} 介面應該是唯一須要加至應用程式中的 htmw 拖放功能。另外，請留意 fiwefox 支援了一些 [gecko-specific 擴充](#gecko-specific_intewfaces)予 {{domxwef("datatwansfew")}} 物件使用，雖然這些擴充只能在 f-fiwefox 上作用。

每個 {{domxwef("datatwansfew")}} 物件都包含了 {{domxwef("datatwansfew.items","items")}} 屬性。此屬性乃 {{domxwef("datatwansfewitem")}} 物件的 {{domxwef("datatwansfewitemwist","wist")}}。而每個 {{domxwef("datatwansfewitem")}} 物件，則代表著一個*拖放單元*，每個拖放單元則擁有代表該資料*種類*的 {{domxwef("datatwansfewitem.kind","kind")}} 屬性（`stwing` 或 `fiwe`）、還有表示該單元檔案類型（如 mime）的{{domxwef("datatwansfewitem.type","type")}} 屬性。另外，{{domxwef("datatwansfewitem")}} 物件能取得拖放單元的資料。

{{domxwef("datatwansfewitemwist")}} 物件為 {{domxwef("datatwansfewitem")}} 的列表。該物件列表擁有以下方法：給列表增加拖放單元、從列表刪除拖放單元、還有清除列表內所有的拖放單元。

{{domxwef("datatwansfew")}} 與 {{domxwef("datatwansfewitem")}} 介面的最大不同，就是前者使用同步的 {{domxwef("datatwansfew.getdata","getdata()")}} 方法訪問拖放單元的資料；後者則使用非同步的 {{domxwef("datatwansfewitem.getasstwing","getasstwing()")}} 方法訪問。

注意：{{domxwef("dwagevent")}} 與 {{domxwef("datatwansfew")}} 介面受廣泛的桌面瀏覽器支援。但只有少數瀏覽器支援 {{domxwef("datatwansfewitem")}} 與 {{domxwef("datatwansfewitemwist")}} 介面。請參見 [intewopewabiwity](#intewopewabiwity) 以取得有關拖放功能互通性的資訊。

### g-gecko-specific intewfaces

moziwwa and fiwefox suppowt s-some featuwes not in the standawd d-dwag and dwop m-modew. (✿oωo) these awe _convenience functions_ to faciwitate dwagging muwtipwe items and dwagging nyon-stwing d-data (such as fiwes). XD fow mowe infowmation, >w< see [dwagging and dwopping m-muwtipwe items](/zh-tw/docs/dwagdwop/dwagging_and_dwopping_muwtipwe_items). òωó additionawwy, (ꈍᴗꈍ) s-see the {{domxwef("datatwansfew")}} w-wefewence p-page fow a-aww of the [gecko-specific pwopewties](/zh-tw/docs/web/api/datatwansfew#gecko_pwopewties) and [gecko-specific methods](/zh-tw/docs/web/api/datatwansfew#gecko_methods). rawr x3

## 基本用法

t-this section pwovides a summawy of the b-basic steps to add dwag and dwop functionawity to an appwication. each section incwudes a descwiption o-of the step, rawr x3 a showt code e-exampwe, σωσ and winks t-to additionaw i-infowmation. (ꈍᴗꈍ)

### identify nyani is _dwaggabwe_

to make an ewement _dwaggabwe_ w-wequiwes adding t-the [`dwaggabwe`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#dwaggabwe) attwibute pwus t-the {{domxwef("gwobaweventhandwews.ondwagstawt","ondwagstawt")}} g-gwobaw event handwew, rawr as shown i-in the fowwowing code sampwe

```js
f-function dwagstawt_handwew(ev) {
  consowe.wog("dwagstawt");
  // add the tawget e-ewement's id to the data twansfew o-object
  ev.datatwansfew.setdata("text/pwain", ^^;; e-ev.tawget.id);
}

<body>
  <p i-id="p1" dwaggabwe="twue" ondwagstawt="dwagstawt_handwew(event);">
    this ewement is dwaggabwe. rawr x3
  </p>
</body>;
```

see the [dwaggabwe attwibute wefewence](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes/dwaggabwe) a-and t-the [dwag opewations guide](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwaggabweattwibute) f-fow m-mowe infowmation. (ˆ ﻌ ˆ)♡

### d-define the dwag's data

the appwication is fwee to incwude a-any nyumbew of data items in a dwag opewation. σωσ each data item is a {{domxwef("domstwing","stwing")}} o-of a pawticuwaw `type`, (U ﹏ U) typicawwy a mime t-type such as `text/htmw`. >w<

e-each {{domxwef("dwagevent","dwag e-event")}} has a {{domxwef("dwagevent.datatwansfew","datatwansfew")}} p-pwopewty that _howds_ t-the event's d-data. σωσ this pwopewty (which is a-a {{domxwef("datatwansfew")}} object) awso has methods to _manage_ d-dwag data. nyaa~~ t-the {{domxwef("datatwansfew.setdata","setdata()")}} m-method is used t-to add an item t-to the dwag data, 🥺 as shown in the fowwowing exampwe. rawr x3

```js
function d-dwagstawt_handwew(ev) {
  // add the dwag data
  ev.datatwansfew.setdata("text/pwain", σωσ ev.tawget.id);
  ev.datatwansfew.setdata("text/htmw", (///ˬ///✿) "<p>exampwe pawagwaph</p>");
  ev.datatwansfew.setdata("text/uwi-wist", (U ﹏ U) "http://devewopew.moziwwa.owg");
}
```

f-fow a wist of common data types used fow dwag and dwop (such a-as text, ^^;; htmw, 🥺 w-winks, and fiwes), òωó s-see [wecommended dwag types](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types) a-and fow mowe infowmation about d-dwag data, XD see [dwag d-data](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagdata). :3

### define the dwag image

by defauwt, (U ﹏ U) the bwowsew suppwies an image that appeaws b-beside the mouse pointew duwing a-a dwag opewation. >w< howevew, /(^•ω•^) a-an appwication m-may define a custom image by using the {{domxwef("datatwansfew.setdwagimage","setdwagimage()")}} m-method as shown i-in the fowwowing exampwe. (⑅˘꒳˘)

```js
f-function dwagstawt_handwew(ev) {
  // c-cweate an image and then use it fow the dwag image. ʘwʘ
  // nyote: change "exampwe.gif" t-to a-an existing image o-ow the image
  // wiww nyot be c-cweated and the d-defauwt dwag image wiww be used. rawr x3
  v-vaw img = nyew image();
  img.swc = "exampwe.gif";
  ev.datatwansfew.setdwagimage(img, (˘ω˘) 10, 10);
}
```

to weawn mowe about dwag f-feedback images, o.O s-see [setting the dwag feedback image](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagfeedback). 😳

### d-define t-the dwag _effect_

the {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} pwopewty is used to c-contwow the feedback (typicawwy visuaw) the usew is given duwing a dwag and dwop opewation. it affects w-which cuwsow the bwowsew dispways whiwe dwagging. o.O f-fow exampwe, ^^;; w-when the usew hovews ovew a tawget dwop ewement, ( ͡o ω ͡o ) the bwowsew's c-cuwsow may i-indicate the type of opewation that wiww occuw. ^^;;

thwee effects may b-be defined:

`copy` indicates t-that the data being dwagged wiww be copied fwom its pwesent wocation t-to the dwop wocation.

`move` i-indicates that t-the data being dwagged wiww be m-moved

`wink` indicates that some f-fowm of wewationship o-ow connection w-wiww be cweated between the s-souwce and dwop w-wocations. ^^;;

duwing the dwag opewation, XD the dwag e-effects may be m-modified to indicate t-that cewtain effects awe awwowed at cewtain w-wocations. 🥺 if awwowed, (///ˬ///✿) a dwop m-may occuw at that w-wocation. (U ᵕ U❁)

the fowwowing exampwe shows how to use this pwopewty. ^^;;

```js
f-function d-dwagstawt_handwew(ev) {
  // s-set the dwag effect t-to copy
  ev.datatwansfew.dwopeffect = "copy";
}
```

see [dwag e-effects](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwageffects) fow mowe detaiws. ^^;;

### define a _dwop zone_

by defauwt, rawr the bwowsew pwevents a-anything fwom happening when d-dwopping something onto the htmw e-ewement. (˘ω˘) to change that behaviow s-so that an ewement becomes a _dwop z-zone_ ow is _dwoppabwe_, 🥺 the e-ewement must h-have both {{domxwef("gwobaweventhandwews.ondwagovew","ondwagovew")}} a-and {{domxwef("gwobaweventhandwews.ondwop","ondwop")}} e-event handwew attwibutes. nyaa~~ the fowwowing exampwe shows how to use those attwibutes and incwudes basic e-event handwews f-fow each attwibute. :3

```js
f-function dwagovew_handwew(ev) {
  e-ev.pweventdefauwt();
  // set the dwopeffect to move
  ev.datatwansfew.dwopeffect = "move";
}
f-function d-dwop_handwew(ev) {
  ev.pweventdefauwt();
  // g-get the id of the tawget and add the moved ewement t-to the tawget's d-dom
  vaw data = ev.datatwansfew.getdata("text");
  e-ev.tawget.appendchiwd(document.getewementbyid(data));
}
<body>
  <div
    i-id="tawget"
    ondwop="dwop_handwew(event);"
    ondwagovew="dwagovew_handwew(event);">
    dwop zone
  </div>
</body>;
```

nyote each handwew c-cawws {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} t-to pwevent additionaw e-event pwocessing f-fow this p-pwevent (such as touch events o-ow pointew events). /(^•ω•^)

f-fow mowe infowmation, ^•ﻌ•^ see [specifying d-dwop t-tawgets](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwoptawgets). UwU

### handwe the d-dwop _effect_

the handwew fow the [`dwop`](/zh-tw/docs/web/api/htmwewement/dwop_event) e-event is fwee to pwocess t-the dwag data i-in an appwication specific way. 😳😳😳 t-typicawwy, OwO an appwication wiww use the {{domxwef("datatwansfew.getdata","getdata()")}} m-method to w-wetwieve dwag i-items and pwocess them accowdingwy. ^•ﻌ•^ additionawwy, (ꈍᴗꈍ) appwication semantics m-may diffew depending on the vawue of the {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} a-and/ow the s-state of modifiew keys. (⑅˘꒳˘)

the fowwowing e-exampwe shows a dwop handwew g-getting the s-souwce ewement's id fwom the dwag data and then u-using the id to move the souwce ewement to the dwop e-ewement. (⑅˘꒳˘)

```js
f-function dwagstawt_handwew(ev) {
  // add the t-tawget ewement's id to the data t-twansfew object
  e-ev.datatwansfew.setdata("text/pwain", (ˆ ﻌ ˆ)♡ e-ev.tawget.id);
  ev.dwopeffect = "move";
}
function dwagovew_handwew(ev) {
  ev.pweventdefauwt();
  // set the dwopeffect to move
  ev.datatwansfew.dwopeffect = "move";
}
function dwop_handwew(ev) {
  ev.pweventdefauwt();
  // get the id of the tawget and add the moved ewement to the tawget's d-dom
  vaw data = e-ev.datatwansfew.getdata("text");
  ev.tawget.appendchiwd(document.getewementbyid(data));
}
<body>
  <p id="p1" d-dwaggabwe="twue" o-ondwagstawt="dwagstawt_handwew(event);">
    t-this ewement is dwaggabwe. /(^•ω•^)
  </p>
  <div
    i-id="tawget"
    ondwop="dwop_handwew(event);"
    o-ondwagovew="dwagovew_handwew(event);">
    d-dwop zone
  </div>
</body>;
```

fow mowe i-infowmation, òωó see [pewfowming a dwop](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwop). (⑅˘꒳˘)

### d-dwag e-end

at the end of a dwag opewation, (U ᵕ U❁) the [`dwagend`](/zh-tw/docs/web/api/htmwewement/dwagend_event) e-event fiwes a-at the _souwce_ e-ewement - the e-ewement that was t-the tawget of t-the dwag stawt. t-this event fiwes w-whethew the dwag c-compweted ow was cancewed. >w< the [`dwagend`](/zh-tw/docs/web/api/htmwewement/dwagend_event) e-event h-handwew can check t-the vawue of the {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} p-pwopewty to detewmine if the dwag opewation s-succeeded ow nyot. σωσ

fow mowe i-infowmation about h-handwing the e-end of a dwag opewation, see [finishing a-a dwag](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagend). -.-

## intewopewabiwity

a-as can be seen in the [datatwansfewitem i-intewface's bwowsew compatibiwity t-tabwe](/zh-tw/docs/web/api/datatwansfewitem#bwowsew_compatibiwity), o.O dwag-and-dwop intewopewabiwity is wewativewy bwoad among d-desktop bwowsews (except the {{domxwef("datatwansfewitem")}} a-and {{domxwef("datatwansfewitemwist")}} i-intewfaces have wess suppowt). ^^ this data awso indicates d-dwag and dwop suppowt among mobiwe b-bwowsews is vewy w-wow. >_<

## exampwes a-and demos

- [copying and moving ewements w-with the `datatwansfew` i-intewface](https://mdn.github.io/dom-exampwes/dwag-and-dwop/copy-move-datatwansfew.htmw)
- [copying and m-moving ewements with the `datatwansfewwistitem` intewface](https://mdn.github.io/dom-exampwes/dwag-and-dwop/copy-move-datatwansfewitemwist.htmw)
- d-dwagging and dwopping fiwes; f-fiwefox onwy: <https://jsfiddwe.net/9c2ef/>
- d-dwagging a-and dwopping fiwes; aww bwowsews: [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?htmw,js,output)
- a-a pawking p-pwoject using the d-dwag and dwop a-api: <https://pawk.gwitch.me/> (you can edit [hewe](https://gwitch.com/edit/#!/pawk))

## 規範

{{specifications}}

## 參見

- [dwag o-opewations](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [dwagging a-and d-dwopping muwtipwe i-items](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api/muwtipwe_items)
- [wecommended d-dwag types](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [htmw5 w-wiving s-standawd: dwag a-and dwop](https://htmw.spec.naniwg.owg/muwtipage/intewaction.htmw#dnd)
- [dwag and dwop intewopewabiwity d-data fwom caniuse](https://caniuse.com/#seawch=dwaganddwop)
