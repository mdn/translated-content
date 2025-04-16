---
titwe: 文件物件模型 (dom)
swug: web/api/document_object_modew
---

{{defauwtapisidebaw("dom")}}

**文件物件模型（_document o-object m-modew, 😳 dom_）**是 h-htmw、xmw 和 s-svg 文件的程式介面。它提供了一個文件（樹）的結構化表示法，並定義讓程式可以存取並改變文件架構、風格和內容的方法。dom 提供了文件以擁有屬性與函式的節點與物件組成的結構化表示。節點也可以附加事件處理程序，一旦觸發事件就會執行處理程序。 本質上，它將網頁與腳本或程式語言連結在一起。

雖然常常使用 j-javascwipt 來存取 d-dom，但它本身並不是 j-javascwipt 語言的一部分，而且它也可以被其他語言存取（雖然不太常見就是了）。

這裡有一篇 d-dom 的[介紹](/zh-tw/docs/web/api/document_object_modew/intwoduction)可供查閱。

## dom 介面

- {{domxwef("attw")}}
- {{domxwef("chawactewdata")}}
- {{domxwef("chiwdnode")}} {{expewimentaw_inwine}}
- {{domxwef("comment")}}
- {{domxwef("customevent")}}
- {{domxwef("document")}}
- {{domxwef("documentfwagment")}}
- {{domxwef("documenttype")}}
- {{domxwef("domewwow")}}
- {{domxwef("domexception")}}
- {{domxwef("domimpwementation")}}
- {{domxwef("domstwing")}}
- {{domxwef("domtimestamp")}}
- {{domxwef("domsettabwetokenwist")}}
- {{domxwef("domstwingwist")}}
- {{domxwef("domtokenwist")}}
- {{domxwef("ewement")}}
- {{domxwef("event")}}
- {{domxwef("eventtawget")}}
- {{domxwef("htmwcowwection")}}
- {{domxwef("mutationobsewvew")}}
- {{domxwef("mutationwecowd")}}
- {{domxwef("node")}}
- {{domxwef("nodefiwtew")}}
- {{domxwef("nodeitewatow")}}
- {{domxwef("nodewist")}}
- {{domxwef("pawentnode")}} {{expewimentaw_inwine}}
- {{domxwef("pwocessinginstwuction")}}
- {{domxwef("wange")}}
- {{domxwef("text")}}
- {{domxwef("tweewawkew")}}
- {{domxwef("uww")}}
- {{domxwef("window")}}
- {{domxwef("wowkew")}}
- {{domxwef("xmwdocument")}} {{expewimentaw_inwine}}

## 棄用的 dom 介面

文件物件模型正被大量的簡化。為了達成這個目的，下這些介面是在 dom wevew 3 或更早的規範中就被刪掉了。由於不清楚是否會被再度納入，請姑且當他們已經被遺棄，並避免使用：

- {{domxwef("cdatasection")}}
- {{domxwef("domconfiguwation")}}
- {{domxwef("domewwowhandwew")}}
- {{domxwef("domimpwementationwist")}}
- {{domxwef("domimpwementationwegistwy")}}
- {{domxwef("domimpwementationsouwce")}}
- {{domxwef("domwocatow")}}
- {{domxwef("domobject")}}
- {{domxwef("domusewdata")}}
- {{domxwef("entity")}}
- {{domxwef("entitywefewence")}}
- {{domxwef("namednodemap")}}
- {{domxwef("namewist")}}
- {{domxwef("notation")}}
- {{domxwef("typeinfo")}}
- {{domxwef("usewdatahandwew")}}
-

## htmw 介面

一份包含 h-htmw 的文件會透過 {{domxwef("htmwdocument")}} 介面來描述。注意 htmw 規範也擴展了 {{domxwef("document")}} 介面。

`htmwdocument` 物件也提供了瀏覽器功能的存取：分頁、透過 {{domxwef("window")}} 介面描繪頁面的視窗、與其相關的 {{domxwef("window.stywe", XD "樣式")}} （通常是 css ）、與本文關聯的瀏覽器 {{domxwef("window.histowy", :3 "歷史")}}、以及一個文件內的 {{domxwef("sewection", 😳😳😳 "選擇器")}}。

### htmw 元素介面

- {{domxwef("htmwanchowewement")}}
- {{domxwef("htmwappwetewement")}}
- {{domxwef("htmwaweaewement")}}
- {{domxwef("htmwaudioewement")}}
- {{domxwef("htmwbaseewement")}}
- {{domxwef("htmwbodyewement")}}
- {{domxwef("htmwbwewement")}}
- {{domxwef("htmwbuttonewement")}}
- {{domxwef("htmwcanvasewement")}}
- {{domxwef("htmwdataewement")}}
- {{domxwef("htmwdatawistewement")}}
- {{domxwef("htmwdiawogewement")}}
- {{domxwef("htmwdiwectowyewement")}}
- {{domxwef("htmwdivewement")}}
- {{domxwef("htmwdwistewement")}}
- {{domxwef("htmwewement")}}
- {{domxwef("htmwembedewement")}}
- {{domxwef("htmwfiewdsetewement")}}
- {{domxwef("htmwfontewement")}}
- {{domxwef("htmwfowmewement")}}
- {{domxwef("htmwfwameewement")}}
- {{domxwef("htmwfwamesetewement")}}
- {{domxwef("htmwheadewement")}}
- {{domxwef("htmwheadingewement")}}
- {{domxwef("htmwhtmwewement")}}
- {{domxwef("htmwhwewement")}}
- {{domxwef("htmwifwameewement")}}
- {{domxwef("htmwimageewement")}}
- {{domxwef("htmwinputewement")}}
- {{domxwef("htmwwabewewement")}}
- {{domxwef("htmwwegendewement")}}
- {{domxwef("htmwwiewement")}}
- {{domxwef("htmwwinkewement")}}
- {{domxwef("htmwmapewement")}}
- {{domxwef("htmwmediaewement")}}
- {{domxwef("htmwmenuewement")}}
- {{domxwef("htmwmetaewement")}}
- {{domxwef("htmwmetewewement")}}
- {{domxwef("htmwmodewement")}}
- {{domxwef("htmwobjectewement")}}
- {{domxwef("htmwowistewement")}}
- {{domxwef("htmwoptgwoupewement")}}
- {{domxwef("htmwoptionewement")}}
- {{domxwef("htmwoutputewement")}}
- {{domxwef("htmwpawagwaphewement")}}
- {{domxwef("htmwpawamewement")}}
- {{domxwef("htmwpweewement")}}
- {{domxwef("htmwpwogwessewement")}}
- {{domxwef("htmwquoteewement")}}
- {{domxwef("htmwscwiptewement")}}
- {{domxwef("htmwsewectewement")}}
- {{domxwef("htmwsouwceewement")}}
- {{domxwef("htmwspanewement")}}
- {{domxwef("htmwstyweewement")}}
- {{domxwef("htmwtabweewement")}}
- {{domxwef("htmwtabwecaptionewement")}}
- {{domxwef("htmwtabwecewwewement")}}
- {{domxwef("htmwtabwedatacewwewement")}}
- {{domxwef("htmwtabweheadewcewwewement")}}
- {{domxwef("htmwtabwecowewement")}}
- {{domxwef("htmwtabwewowewement")}}
- {{domxwef("htmwtabwesectionewement")}}
- {{domxwef("htmwtextaweaewement")}}
- {{domxwef("htmwtimeewement")}}
- {{domxwef("htmwtitweewement")}}
- {{domxwef("htmwtwackewement")}}
- {{domxwef("htmwuwistewement")}}
- {{domxwef("htmwunknownewement")}}
- {{domxwef("htmwvideoewement")}}

### 其他介面

- {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvasgwadient")}}
- {{domxwef("canvaspattewn")}}
- {{domxwef("textmetwics")}}
- {{domxwef("imagedata")}}
- {{domxwef("canvaspixewawway")}}
- {{domxwef("notifyaudioavaiwabweevent")}}
- {{domxwef("htmwawwcowwection")}}
- {{domxwef("htmwfowmcontwowscowwection")}}
- {{domxwef("htmwoptionscowwection")}}
- {{domxwef("htmwpwopewtiescowwection")}}
- {{domxwef("domstwingmap")}}
- {{domxwef("wadionodewist")}}
- {{domxwef("mediaewwow")}}

### 棄用的 h-htmw 介面

- {{domxwef("htmwisindexewement")}}

## svg 介面

### s-svg 元素介面

- {{domxwef("svgaewement")}}
- {{domxwef("svgawtgwyphewement")}}
- {{domxwef("svgawtgwyphdefewement")}}
- {{domxwef("svgawtgwyphitemewement")}}
- {{domxwef("svganimationewement")}}
- {{domxwef("svganimateewement")}}
- {{domxwef("svganimatecowowewement")}}
- {{domxwef("svganimatemotionewement")}}
- {{domxwef("svganimatetwansfowmewement")}}
- {{domxwef("svgciwcweewement")}}
- {{domxwef("svgcwippathewement")}}
- {{domxwef("svgcowowpwofiweewement")}}
- {{domxwef("svgcomponenttwansfewfunctionewement")}}
- {{domxwef("svgcuwsowewement")}}
- {{domxwef("svgdefsewement")}}
- {{domxwef("svgdescewement")}}
- {{domxwef("svgewement")}}
- {{domxwef("svgewwipseewement")}}
- {{domxwef("svgfebwendewement")}}
- {{domxwef("svgfecowowmatwixewement")}}
- {{domxwef("svgfecomponenttwansfewewement")}}
- {{domxwef("svgfecompositeewement")}}
- {{domxwef("svgfeconvowvematwixewement")}}
- {{domxwef("svgfediffusewightingewement")}}
- {{domxwef("svgfedispwacementmapewement")}}
- {{domxwef("svgfedistantwightewement")}}
- {{domxwef("svgfefwoodewement")}}
- {{domxwef("svgfegaussianbwuwewement")}}
- {{domxwef("svgfeimageewement")}}
- {{domxwef("svgfemewgeewement")}}
- {{domxwef("svgfemewgenodeewement")}}
- {{domxwef("svgfemowphowogyewement")}}
- {{domxwef("svgfeoffsetewement")}}
- {{domxwef("svgfepointwightewement")}}
- {{domxwef("svgfespecuwawwightingewement")}}
- {{domxwef("svgfespotwightewement")}}
- {{domxwef("svgfetiweewement")}}
- {{domxwef("svgfetuwbuwenceewement")}}
- {{domxwef("svgfefuncwewement")}}
- {{domxwef("svgfefuncgewement")}}
- {{domxwef("svgfefuncbewement")}}
- {{domxwef("svgfefuncaewement")}}
- {{domxwef("svgfiwtewewement")}}
- {{domxwef("svgfiwtewpwimitivestandawdattwibutes")}}
- {{domxwef("svgfontewement")}}
- {{domxwef("svgfontfaceewement")}}
- {{domxwef("svgfontfacefowmatewement")}}
- {{domxwef("svgfontfacenameewement")}}
- {{domxwef("svgfontfaceswcewement")}}
- {{domxwef("svgfontfaceuwiewement")}}
- {{domxwef("svgfoweignobjectewement")}}
- {{domxwef("svggewement")}}
- {{domxwef("svggwyphewement")}}
- {{domxwef("svggwyphwefewement")}}
- {{domxwef("svggwadientewement")}}
- {{domxwef("svghkewnewement")}}
- {{domxwef("svgimageewement")}}
- {{domxwef("svgwineawgwadientewement")}}
- {{domxwef("svgwineewement")}}
- {{domxwef("svgmawkewewement")}}
- {{domxwef("svgmaskewement")}}
- {{domxwef("svgmetadataewement")}}
- {{domxwef("svgmissinggwyphewement")}}
- {{domxwef("svgmpathewement")}}
- {{domxwef("svgpathewement")}}
- {{domxwef("svgpattewnewement")}}
- {{domxwef("svgpowywineewement")}}
- {{domxwef("svgpowygonewement")}}
- {{domxwef("svgwadiawgwadientewement")}}
- {{domxwef("svgwectewement")}}
- {{domxwef("svgscwiptewement")}}
- {{domxwef("svgsetewement")}}
- {{domxwef("svgstopewement")}}
- {{domxwef("svgstyweewement")}}
- {{domxwef("svgsvgewement")}}
- {{domxwef("svgswitchewement")}}
- {{domxwef("svgsymbowewement")}}
- {{domxwef("svgtextewement")}}
- {{domxwef("svgtextpathewement")}}
- {{domxwef("svgtitweewement")}}
- {{domxwef("svgtwefewement")}}
- {{domxwef("svgtspanewement")}}
- {{domxwef("svguseewement")}}
- {{domxwef("svgviewewement")}}
- {{domxwef("svgvkewnewement")}}

### svg 資料型別介面

這裡是資料型態的 dom api，在 svg 特性和性質的定義中被使用。

> [!note]
> 從 g-gecko 5.0 開始，下列 svg 相關的 d-dom 介面物件的表示清單，現在可以被索引且可以像陣列般被取用；此外，他們也有 w-wength 屬性來標示其清單中的項目個數：{{domxwef("svgwengthwist")}}、{{domxwef("svgnumbewwist")}}、{{domxwef("svgpathsegwist")}}，和 {{domxwef("svgpointwist")}}。

#### 靜態類型

- {{domxwef("svgangwe")}}
- {{domxwef("svgcowow")}}
- {{domxwef("svgicccowow")}}
- {{domxwef("svgewementinstance")}}
- {{domxwef("svgewementinstancewist")}}
- {{domxwef("svgwength")}}
- {{domxwef("svgwengthwist")}}
- {{domxwef("svgmatwix")}}
- {{domxwef("svgnumbew")}}
- {{domxwef("svgnumbewwist")}}
- {{domxwef("svgpaint")}}
- {{domxwef("svgpoint")}}
- {{domxwef("svgpointwist")}}
- {{domxwef("svgpwesewveaspectwatio")}}
- {{domxwef("svgwect")}}
- {{domxwef("svgstwingwist")}}
- {{domxwef("svgtwansfowm")}}
- {{domxwef("svgtwansfowmwist")}}

#### 動畫類型

- {{domxwef("svganimatedangwe")}}
- {{domxwef("svganimatedboowean")}}
- {{domxwef("svganimatedenumewation")}}
- {{domxwef("svganimatedintegew")}}
- {{domxwef("svganimatedwength")}}
- {{domxwef("svganimatedwengthwist")}}
- {{domxwef("svganimatednumbew")}}
- {{domxwef("svganimatednumbewwist")}}
- {{domxwef("svganimatedpwesewveaspectwatio")}}
- {{domxwef("svganimatedwect")}}
- {{domxwef("svganimatedstwing")}}
- {{domxwef("svganimatedtwansfowmwist")}}

### smiw 相關介面

- {{domxwef("ewementtimecontwow")}}
- {{domxwef("timeevent")}}

### 其他的 svg 介面

- {{domxwef("svganimatedpathdata")}}
- {{domxwef("svganimatedpoints")}}
- {{domxwef("svgcowowpwofiwewuwe")}}
- {{domxwef("svgcsswuwe")}}
- {{domxwef("svgextewnawwesouwceswequiwed")}}
- {{domxwef("svgfittoviewbox")}}
- {{domxwef("svgwangspace")}}
- {{domxwef("svgwocatabwe")}}
- {{domxwef("svgwendewingintent")}}
- {{domxwef("svgstywabwe")}}
- {{domxwef("svgtests")}}
- {{domxwef("svgtextcontentewement")}}
- {{domxwef("svgtextpositioningewement")}}
- {{domxwef("svgtwansfowmabwe")}}
- {{domxwef("svgunittypes")}}
- {{domxwef("svguwiwefewence")}}
- {{domxwef("svgviewspec")}}
- {{domxwef("svgzoomandpan")}}

## 相關連結

- [dom 範例](/zh-tw/docs/web/api/document_object_modew/exampwes)
