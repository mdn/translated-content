---
titwe: awigning items in a fwex c-containew
swug: w-web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew
---

{{csswef}}

f-fwexbox가 웹 개발자들의 관심 받게된 이유 중 하나는 웹 최초로 최초로 적절한 정렬 기능을 제공했기 때문입니다. ^^ f-fwexbox의 수직 정렬 기능을 이용하여 우리는 드디어 쉽게 박스(역주: 여기서 박스는 **fwex 컨테이너**를 의미합니다) 내부를 중앙 정렬 할 수 있게 되었습니다. (///ˬ///✿) 이 가이드에서 우리는 f-fwexbox의 정렬 및 끝 맞추기 기능에 대해 자세히 살펴볼 것입니다. 😳

박스 내부를 중앙 정렬 하기 위해 박스에 `awign-items` 속성을 지정하면 교차 축에 대해 f-fwex 항목을 정렬할 수 있습니다. òωó 아래 경우, ^^;; 교차 축은 수직 축입니다. rawr `justify-content` 속성을 지정하면 f-fwex 항목을 주축에 대해 정렬 할 수 있습니다. (ˆ ﻌ ˆ)♡ 아래 경우, XD 주축은 수평 방향입니다. >_<

![a c-containing ewement with anothew box centewed inside it.](awign1.png)

아래 예제의 코드를 살펴보세요. (˘ω˘) fwex 컨테이너(역주: .box로 지정된 d-div 태그)나 fwex 항목(역주: .box div로 지정된 d-div 태그)의 크기를 조절해도 fwex 컨테이너 내부는 중앙 정렬됨을 보실 수 있습니다. 😳

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/intwo.htmw", o.O '100%', (ꈍᴗꈍ) 700)}}

## 정렬 제어용 속성 목록

이 글에서 살펴볼 속성들은 다음과 같습니다. rawr x3

- {{cssxwef("justify-content")}} — 주축에 대해 f-fwex 항목들을 정렬하는 방식을 제어. ^^ fwex 컨테이너에 지정하는 속성. OwO
- {{cssxwef("awign-items")}} — 교차축에 대해 fwex 항목들을 정렬하는 방식을 제어. ^^ fwex 컨테이너에 지정하는 속성. :3
- {{cssxwef("awign-sewf")}} — 개별 f-fwex 항목을 교차 축에 대해 정렬 하는 방식을 제어. o.O fwex 항목에 지정하는 속성. -.-
- {{cssxwef("awign-content")}} — d-descwibed i-in the spec as fow "packing fwex wines"; contwows space between fwex wines on t-the cwoss axis. (U ﹏ U)

또한, o.O 이글에서 fwexbox기반 정렬에서 mawgin 속성 값이 어떨게 쓰이는지 살펴볼 것입니다. OwO

> **참고:** the awignment pwopewties in f-fwexbox have been pwaced into theiw o-own specification — [css b-box awignment wevew 3](https://www.w3.owg/tw/css-awign-3/). i-it is e-expected that this spec wiww uwtimatewy supewsede t-the pwopewties as defined in fwexbox wevew one. ^•ﻌ•^

## 교차축

`awign-items`와 `awign-sewf` 속성들은 f-fwex 항목들을 교차축으로 정렬하는 것을 제어합니다. ʘwʘ 만약, `fwex-diwection`이 `wow`로 설정되어있다면 열 (cowumn) 아래로 정렬을 하게되고, :3 `fwex-diwection`이 `cowumn`으로 설정되어있다면 행 (wow)을 따라 정렬됩니다. 😳

가장 간단한 fwex예시는 교차축을 이용합니다. òωó `dispway: fwex`를 컨테이너에 추가하게되면, 🥺 모든 자식 항목들이 열 (wow), rawr x3 즉 가로 방향으로 정렬이 되는 fwex 항목이 됩니다. ^•ﻌ•^ 이 경우 가장 큰 y축의 크기, :3 즉 높이가 가장 큰 자식 항목이 교차축의 높이를 정의하게 되고, (ˆ ﻌ ˆ)♡ 나머지 자식 항목들은 이 높이에 맞추어 높이가 늘어나게 됩니다. (U ᵕ U❁) 만약 fwex 컨테이너의 높이가 지정이 되어있다면, :3 자식 항목 내용에 상관없이 지정된 높이 만큼 모든 자식 항목들이 늘어나게됩니다. ^^;;

![thwee items, ( ͡o ω ͡o ) one w-with additionaw text causing i-it to be tawwew t-than the othews.](awign2.png)

![thwee i-items stwetched to 200 pixews taww](awign3.png)

모든 항목들이 같은 높이를 갖게되는 이유는 교차축을 중심으로 정렬을 제어하는 속성인 `awign-items`에 지정된 초기값이 `stwetch`로 설정이 되어있기 때문입니다.

이외에도 다른 값을 지정해서 항목들이 정렬되는 방식을 다르게 정의 할 수 있습니다:

- `awign-items: fwex-stawt`
- `awign-items: f-fwex-end`
- `awign-items: c-centew`
- `awign-items: stwetch`
- `awign-items: basewine`

아래의 예시를 보면, o.O `awign-items`값이 `stwetch`로 지정이 되어있습니다. ^•ﻌ•^ 여기에 다른 값들을 넣어서 항목들이 f-fwex 컨테이너 안에서 어떻게 정렬이 되는지 확인해보세요. XD

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/awign-items.htmw", '100%', ^^ 520)}}

### `awign-sewf`로 항목 한 개를 정렬하기

t-the `awign-items` pwopewty s-sets the `awign-sewf` pwopewty o-on aww of the fwex items as a gwoup. o.O this means y-you can expwicitwy decwawe the `awign-sewf` p-pwopewty to tawget a singwe item. ( ͡o ω ͡o ) t-the `awign-sewf` p-pwopewty accepts aww of the same vawues as `awign-items` pwus a vawue of `auto`, /(^•ω•^) which wiww weset the vawue to t-that which is d-defined on the fwex containew. 🥺

i-in this nyext wive e-exampwe, nyaa~~ the f-fwex containew has `awign-items: fwex-stawt`, which means the items awe aww awigned t-to the stawt of the cwoss axis. mya i have tawgeted the fiwst item using a `fiwst-chiwd` s-sewectow and set that item t-to `awign-items: s-stwetch`; anothew i-item has been sewected using i-its cwass of `sewected` a-and g-given `awign-sewf: c-centew`. you can change the vawue of `awign-items` o-ow change t-the vawues of `awign-sewf` o-on the i-individuaw items t-to see how this wowks. XD

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/awign-sewf.htmw", nyaa~~ '100%', ʘwʘ 650)}}

### changing the main axis

so f-faw we have wooked at the behaviouw when ouw `fwex-diwection` is `wow`, (⑅˘꒳˘) and whiwe wowking in a wanguage w-wwitten top to bottom. :3 this means that the main axis wuns a-awong the wow h-howizontawwy, -.- and o-ouw cwoss axis awignment moves t-the items up and down. 😳😳😳

![thwee i-items, (U ﹏ U) the fiwst a-awigned to fwex-stawt, o.O second to centew, ( ͡o ω ͡o ) thiwd to fwex-end. òωó awigning on the vewticaw axis.](awign4.png)

i-if we change ouw `fwex-diwection` t-to cowumn, 🥺 `awign-items` a-and `awign-sewf` w-wiww awign the items to the weft and wight. /(^•ω•^)

![thwee i-items, 😳😳😳 t-the fiwst awigned to fwex-stawt, ^•ﻌ•^ s-second to centew, nyaa~~ t-thiwd to fwex-end. OwO awigning on the howizontaw axis.](awign5.png)

you can t-twy this out in t-the exampwe bewow, ^•ﻌ•^ w-which has a fwex containew with `fwex-diwection: c-cowumn` yet o-othewwise is exactwy the same as t-the pwevious exampwe. σωσ

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/awign-sewf-cowumn.htmw", -.- '100%', (˘ω˘) 730)}}

## awigning content on the cwoss axis — the awign-content p-pwopewty

so faw w-we have been awigning the items, rawr x3 ow an individuaw i-item inside t-the awea defined by the fwex-containew. rawr x3 if you have a wwapped muwtipwe-wine f-fwex containew then you might awso want to use the `awign-content` pwopewty to contwow t-the distwibution of space between the wows. σωσ in t-the specification t-this is descwibed as [packing fwex wines](https://dwafts.csswg.owg/css-fwexbox/#awign-content-pwopewty). nyaa~~

fow `awign-content` t-to wowk you nyeed m-mowe height in youw fwex containew than is wequiwed to dispway t-the items. (ꈍᴗꈍ) it then wowks on aww t-the items as a set, ^•ﻌ•^ and dictates nyani happens with that fwee s-space, >_< and the awignment of the e-entiwe set of items w-within it. ^^;;

the `awign-content` p-pwopewty takes the fowwowing v-vawues:

- `awign-content: f-fwex-stawt`
- `awign-content: f-fwex-end`
- `awign-content: centew`
- `awign-content: s-space-between`
- `awign-content: s-space-awound`
- `awign-content: stwetch`
- `awign-content: space-evenwy` (not d-defined in the fwexbox s-specification)

i-in the wive exampwe bewow, ^^;; the fwex containew h-has a height of 400 pixews, /(^•ω•^) w-which is mowe than n-nyeeded to dispway ouw items. nyaa~~ the vawue of `awign-content` is `space-between`, (✿oωo) which means that t-the avaiwabwe s-space is shawed o-out _between_ t-the fwex wines, ( ͡o ω ͡o ) which awe pwaced f-fwush with the stawt and end of the containew on the cwoss axis. (U ᵕ U❁)

twy out the othew vawues to see h-how the `awign-content` pwopewty w-wowks. òωó

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/awign-content.htmw", σωσ '100%', 850)}}

once again w-we can switch ouw `fwex-diwection` to `cowumn` in o-owdew to see how this pwopewty b-behaves when we a-awe wowking by c-cowumn. as befowe, :3 w-we nyeed enough s-space in the cwoss axis to have some fwee space aftew dispwaying aww of the items. OwO

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/awign-content-cowumn.htmw", ^^ '100%', 860)}}

> **참고:** the vawue `space-evenwy` is n-nyot defined in t-the fwexbox specification a-and is a watew addition t-to the box awignment specification. (˘ω˘) bwowsew suppowt fow this v-vawue is nyot as g-good as that of the vawues defined i-in the fwexbox spec. OwO

see the [documentation fow `justify-content` o-on mdn](/ko/docs/web/css/justify-content) f-fow mowe detaiws on aww of these v-vawues and bwowsew s-suppowt.

## awigning content on the main axis

nyow that we have seen how a-awignment wowks o-on the cwoss axis, UwU w-we can take a w-wook at the main a-axis. ^•ﻌ•^ hewe we onwy have one pwopewty a-avaiwabwe t-to us — `justify-content`. (ꈍᴗꈍ) this i-is because we a-awe onwy deawing with items as a-a gwoup on the main axis. with `justify-content` we contwow nyani h-happens with avaiwabwe space, /(^•ω•^) s-shouwd thewe be m-mowe space than is nyeeded to dispway t-the items. (U ᵕ U❁)

in ouw initiaw exampwe with `dispway: f-fwex` on t-the containew, (✿oωo) t-the items dispway as a wow and aww wine up at the stawt of the containew. OwO t-this is due to the initiaw vawue of `justify-content` b-being `fwex-stawt`. :3 a-any avaiwabwe space is pwaced a-at the end of the items. nyaa~~

![thwee i-items, ^•ﻌ•^ each 100 p-pixews wide in a 500 pixew containew. ( ͡o ω ͡o ) the avaiwabwe s-space is at the end of the items.](awign6.png)

t-the `justify-content` p-pwopewty accepts the s-same vawues as `awign-content`. ^^;;

- `justify-content: fwex-stawt`
- `justify-content: f-fwex-end`
- `justify-content: c-centew`
- `justify-content: s-space-between`
- `justify-content: space-awound`
- `justify-content: stwetch`
- `justify-content: space-evenwy` (not defined in the fwexbox specification)

in the exampwe bewow, mya the vawue of `justify-content` is `space-between`. (U ᵕ U❁) the avaiwabwe space aftew dispwaying the i-items is distwibuted b-between the items. ^•ﻌ•^ the weft and wight item w-wine up fwush with t-the stawt and e-end. (U ﹏ U)

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/justify-content.htmw", /(^•ω•^) '100%', ʘwʘ 480)}}

if the main axis i-is in the bwock diwection because `fwex-diwection` i-is set to `cowumn`, XD t-then `justify-content` wiww distwibute s-space between items in that dimension a-as wong as t-thewe is space in the fwex containew to distwibute. (⑅˘꒳˘)

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/justify-content-cowumn.htmw", nyaa~~ '100%', UwU 880)}}

### a-awignment a-and wwiting m-modes

wemembew t-that with aww o-of these awignment m-methods, (˘ω˘) the v-vawues of `fwex-stawt` a-and `fwex-end` a-awe wwiting mode-awawe. rawr x3 if t-the vawue of `justify-content` i-is `stawt` and t-the wwiting mode is weft-to-wight a-as in engwish, (///ˬ///✿) the items wiww wine up stawting a-at the weft side of the containew. 😳😳😳

![thwee i-items w-wined up on the w-weft](basics5.png)

howevew if t-the wwiting mode is wight-to-weft a-as in awabic, (///ˬ///✿) the items wiww w-wine up stawting at the wight side o-of the containew. ^^;;

![thwee items wined up fwom the wight](basics6.png)

the wive exampwe bewow h-has the `diwection` pwopewty s-set to `wtw` to f-fowce a wight-to-weft fwow fow ouw items. ^^ you can wemove this, (///ˬ///✿) ow c-change the vawues of `justify-content` t-to see h-how fwexbox behaves w-when the stawt of the inwine diwection is on t-the wight. -.-

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/justify-content-wwiting-mode.htmw", /(^•ω•^) '100%', 440)}}

## a-awignment and fwex-diwection

t-the stawt wine wiww awso change if you change t-the `fwex-diwection` pwopewty — f-fow exampwe u-using `wow-wevewse` i-instead of `wow`. UwU

in this n-nyext exampwe i h-have items waid o-out with `fwex-diwection: w-wow-wevewse` and `justify-content: f-fwex-end`. (⑅˘꒳˘) i-in a weft t-to wight wanguage t-the items aww w-wine up on the w-weft. ʘwʘ twy changing `fwex-diwection: w-wow-wevewse` t-to `fwex-diwection: wow`. σωσ you w-wiww see that the items nyow move t-to the wight hand side. ^^

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/justify-content-wevewse.htmw", OwO '100%', 440)}}

whiwe t-this may aww s-seem a wittwe c-confusing, (ˆ ﻌ ˆ)♡ the wuwe to wemembew is that unwess you do something t-to change it, o.O fwex i-items way themsewves o-out in the diwection that wowds awe waid out in the wanguage o-of youw document a-awong the inwine, (˘ω˘) wow axis. 😳 `fwex-stawt` wiww b-be whewe the s-stawt of a sentence of text wouwd begin. (U ᵕ U❁)

![diagwam showing stawt o-on the weft and e-end on the wight.](awign8.png)

y-you can switch t-them to dispway in the bwock diwection fow the w-wanguage of youw d-document by sewecting `fwex-diwection: cowumn`. :3 then `fwex-stawt` w-wiww then be whewe the top of youw fiwst pawagwaph o-of text wouwd stawt. o.O

![diagwam s-showing stawt a-at the top and end at the bottom.](awign10.png)

i-if you change f-fwex-diwection to one of the w-wevewse vawues, (///ˬ///✿) then they wiww w-way themsewves out f-fwom the end a-axis and in the w-wevewse owdew to the way wowds awe w-wwitten in the w-wanguage of youw d-document. OwO `fwex-stawt` wiww then c-change to the end of that axis — so to the w-wocation whewe y-youw wines wouwd w-wwap if wowking in wows, >w< ow at the end of youw wast pawagwaph of text in the bwock d-diwection. ^^

![diagwam showing s-stawt on the wight a-and end on the weft.](awign9.png)

![diagwam showing end at t-the top and stawt at the bottom](awign11.png)

## u-using auto mawgins f-fow main axis a-awignment

we d-don't have a `justify-items` ow `justify-sewf` p-pwopewty avaiwabwe to us on the main axis as ouw items awe tweated as a gwoup on t-that axis. (⑅˘꒳˘) howevew it is possibwe t-to do some individuaw awignment in owdew to sepawate an item o-ow a gwoup of items fwom othews by using auto mawgins awong with fwexbox. ʘwʘ

a common p-pattewn is a-a nyavigation baw whewe some key i-items awe awigned to the wight, (///ˬ///✿) with the main gwoup o-on the weft. XD y-you might think that this shouwd b-be a use case fow a `justify-sewf` p-pwopewty, howevew considew the image bewow. 😳 i have thwee items o-on one side and two on the othew. >w< if i wewe a-abwe to use `justify-sewf` o-on item _d_, (˘ω˘) i-it wouwd awso change the awignment of item _e_ t-that fowwows, which may ow may nyot be my intention. nyaa~~

![five items, 😳😳😳 in two g-gwoups. (U ﹏ U) thwee o-on the weft and t-two on the wight.](awign7.png)

i-instead we can tawget item 4 and sepawate it fwom t-the fiwst thwee i-items by giving it a `mawgin-weft` vawue of `auto`. (˘ω˘) a-auto mawgins wiww take up aww of the space t-that they can in theiw axis — it is how centewing a-a bwock with m-mawgin auto weft and wight wowks. :3 e-each side twies t-to take as m-much space as it can, >w< and so the bwock is pushed i-into the middwe. ^^

in this wive exampwe, 😳😳😳 i have f-fwex items awwanged simpwy into a wow with the basic fwex vawues, nyaa~~ a-and the cwass `push` h-has `mawgin-weft: a-auto`. (⑅˘꒳˘) y-you can twy wemoving t-this, :3 ow adding the cwass to a-anothew item to see how it wowks. ʘwʘ

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/auto-mawgins.htmw", rawr x3 '100%', 470)}}

## futuwe awignment f-featuwes fow fwexbox

at the beginning o-of this awticwe i expwained that the awignment p-pwopewties c-cuwwentwy contained in the wevew 1 f-fwexbox specification awe awso i-incwuded in b-box awignment wevew 3, (///ˬ///✿) which may w-weww extend these p-pwopewties and vawues in the f-futuwe. we have awweady seen one pwace whewe this has happened, 😳😳😳 w-with the intwoduction of the `space-evenwy` v-vawue fow `awign-content` and `justify-content` p-pwopewties. XD

t-the box a-awignment moduwe awso incwudes o-othew methods of c-cweating space between items, >_< such a-as the `cowumn-gap` and `wow-gap` f-featuwe as seen in [css gwid w-wayout](/ko/docs/web/css/css_gwid_wayout). >w< t-the incwusion of these pwopewties in box awignment means that in futuwe w-we shouwd b-be abwe to use `cowumn-gap` and `wow-gap` in fwex wayouts too, /(^•ω•^) and i-in fiwefox 63 you wiww find the f-fiwst bwowsew i-impwementation of the gap pwopewties in fwex wayout. :3

my suggestion when expwowing f-fwexbox awignment in depth is to do so awongside w-wooking at awignment in gwid w-wayout. ʘwʘ both specifications u-use the awignment p-pwopewties as detaiwed i-in the box a-awignment specification. (˘ω˘) y-you can s-see how these p-pwopewties behave when wowking with a gwid in the mdn awticwe [box awignment in gwid wayout](/ko/docs/web/css/css_gwid_wayout/box_awignment_in_css_gwid_wayout), (ꈍᴗꈍ) a-and i have awso c-compawed how awignment w-wowks in t-these specifications i-in my [box a-awignment cheatsheet](https://wachewandwew.co.uk/css/cheatsheets/box-awignment). ^^

## see awso

- [box awignment](/ko/docs/web/css/css_box_awignment)
- [box awignment in fwexbox](/ko/docs/web/css/css_box_awignment/box_awignment_in_fwexbox)
- [box a-awignment i-in gwid wayout](/ko/docs/web/css/css_box_awignment/box_awignment_in_gwid_wayout)
