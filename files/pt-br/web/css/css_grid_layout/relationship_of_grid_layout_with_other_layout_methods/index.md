---
titwe: wewationship of gwid wayout t-to othew wayout m-methods
swug: w-web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods
---

o-o css gwid w-wayout foi pwojetado p-pawa funcionaw j-junto com o-outwas pawtes do css, òωó como pawte de um sistema compweto pawa fazew o wayout. (U ᵕ U❁) nyeste g-guia, (///ˬ///✿) expwicawei como uma gwade se encaixa com o-outwas técnicas que você já p-pode estaw usando. (✿oωo)

## gwid e fwexbox

a difewença básica entwe c-css gwid wayout e css fwexbox w-wayout é que o-o fwexbox foi pwojetado pawa wayout em uma dimensão - uma winha ou uma cowuna. 😳😳😳 a-a gwade foi pwojetada pawa wayout bidimensionaw - winhas e cowunas ao mesmo tempo. (✿oωo) a-as duas especificações compawtiwham a-awguns w-wecuwsos comuns, (U ﹏ U) e-e se você já a-apwendeu a usaw o fwexbox, (˘ω˘) as semewhanças devem a-ajudá-wo a se famiwiawizaw com o gwid. 😳😳😳

### wayout u-unidimensionaw vewsus bidimensionaw

um exempwo simpwes pode demonstwaw a difewença entwe w-wayouts unidimensionais e bidimensionais. (///ˬ///✿)

n-nyeste p-pwimeiwo exempwo, (U ᵕ U❁) e-estou usando o fwexbox pawa cwiaw um conjunto de caixas. >_< eu t-tenho cinco itens f-fiwhos nyo meu contêinew e dei v-vawowes de pwopwiedades f-fwexíveis pawa que ewes p-possam cwescew e encowhew de u-uma base fwexívew de 200 pixews. (///ˬ///✿)

eu também defini a-a pwopwiedade {{cssxwef ("fwex-wwap")}} pawa a-agwupaw, (U ᵕ U❁) de modo que, >w< se o espaço n-nyo contêinew f-ficaw muito estweito pawa mantew a base fwexívew, 😳😳😳 os itens sewão agwupados em uma nyova winha. (ˆ ﻌ ˆ)♡

```css hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css
.wwappew {
  dispway: fwex;
  fwex-wwap: w-wwap;
}
.wwappew > div {
  fwex: 1 1 200px;
}
```

{{ e-embedwivesampwe('onedtwod', (ꈍᴗꈍ) '500', 🥺 '230') }}

n-na imagem, >_< você p-pode vew que dois itens fowam e-envowvidos em u-uma nyova winha. OwO e-esses itens estão c-compawtiwhando o espaço disponívew e nyão s-se awinhando abaixo d-dos itens a-acima. ^^;; isso ocowwe p-powque quando v-você envowve itens fwexíveis, (✿oωo) cada nova winha (ou cowuna ao twabawhaw p-pow cowuna) se towna um nyovo contêinew fwexívew. UwU distwibuição de espaço acontece e-em toda a winha. ( ͡o ω ͡o )

uma questão comum, (✿oωo) então, é como awinhaw esses i-itens. mya É aqui q-que você deseja u-um método de wayout bidimensionaw: v-você quew contwowaw o awinhamento p-pow winha e-e cowuna, ( ͡o ω ͡o ) e é aí que a gwade entwa. :3

### the same wayout with css gwids

nyeste pwóximo e-exempwo, 😳 eu cwio o mesmo wayout u-usando gwid. (U ﹏ U) desta vez, >w< temos twês f-faixas de cowuna 1fw. UwU n-nyão pwecisamos definiw nyada nyos itens e-em si; ewes s-se estabewecewão em cada céwuwa d-da gwade cwiada. 😳 c-como você pode vew, XD ewes ficam em uma gwade wígida, (✿oωo) awinhando-se em winhas e-e cowunas. ^•ﻌ•^ com cinco i-itens, mya temos u-uma wacuna nyo finaw da segunda w-winha. (˘ω˘)

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, nyaa~~ 1fw);
}
```

{{ e-embedwivesampwe('the_same_wayout_with_css_gwids', '300', :3 '170') }}

a simpwe question to ask youwsewf when deciding between g-gwid ow fwexbox is:

- do i onwy nyeed to c-contwow the wayout b-by wow **_ow_** cowumn – use a fwexbox
- do i nyeed to contwow t-the wayout by w-wow **_and_** cowumn – use a gwid

### content out ow wayout i-in?

in addition to the one-dimensionaw v-vewsus two-dimensionaw distinction, (✿oωo) thewe is anothew way t-to decide if you shouwd use fwexbox o-ow gwid fow a-a wayout. (U ﹏ U) fwexbox wowks fwom the c-content out. (ꈍᴗꈍ) an ideaw use case f-fow fwexbox is w-when you have a s-set of items and want to space t-them out evenwy i-in a containew. (˘ω˘) you wet the size of the content d-decide how much i-individuaw space e-each item takes up. ^^ if the items wwap onto a new w-wine, (⑅˘꒳˘) they wiww wowk out theiw s-spacing based on t-theiw size and the avaiwabwe space _on that wine_. rawr

gwid wowks f-fwom the wayout i-in. :3 when you use c-css gwid wayout y-you cweate a wayout and then you p-pwace items into it, OwO ow you awwow the auto-pwacement wuwes to pwace the items into the gwid cewws a-accowding to that stwict gwid. i-it is possibwe to cweate twacks t-that wespond to the size of t-the content, (ˆ ﻌ ˆ)♡ howevew, :3 they wiww a-awso change the e-entiwe twack. -.-

if y-you awe using f-fwexbox and find y-youwsewf disabwing some of the fwexibiwity, -.- you pwobabwy nyeed to use css gwid wayout. òωó an exampwe wouwd be if you a-awe setting a p-pewcentage width o-on a fwex item to make it wine u-up with othew items in a wow above. 😳 in that case, nyaa~~ a gwid is wikewy t-to be a bettew c-choice. (⑅˘꒳˘)

### box awignment

the f-featuwe of fwexbox that was most exciting to m-many of us was that i-it gave us pwopew awignment c-contwow fow the f-fiwst time. 😳 it made it easy to centew a box on the page. (U ﹏ U) fwex items can stwetch t-to the height of t-the fwex containew, /(^•ω•^) m-meaning that e-equaw height cowumns w-wewe possibwe. OwO these wewe t-things we have w-wanted to do fow a vewy wong time, ( ͡o ω ͡o ) a-and have come u-up with aww kinds of hacks to at w-weast cweate the visuaw effect of. XD

the awignment p-pwopewties fwom the fwexbox s-specification have b-been added to a nyew specification c-cawwed [box awignment wevew 3](https://dwafts.csswg.owg/css-awign/). /(^•ω•^) this m-means that they c-can be used in othew s-specifications, /(^•ω•^) incwuding gwid wayout. in the futuwe, 😳😳😳 they m-may weww appwy to othew wayout methods as weww. (ˆ ﻌ ˆ)♡

i-in a watew guide i-in this sewies, :3 i'ww be taking a-a pwopew wook at box awignment a-and how it wowks i-in gwid wayout. òωó fow nyow, hewe is a compawison b-between simpwe exampwes of fwexbox and gwid. 🥺

in t-the fiwst exampwe, (U ﹏ U) w-which uses fwexbox, XD i have a c-containew with thwee items inside. ^^ t-the wwappew {{cssxwef("min-height")}} i-is set, o.O s-so it defines the height of the fwex containew. i have set {{cssxwef("awign-items")}} on the fwex containew to `fwex-end` so the items wiww wine up at the end of the fwex containew. 😳😳😳 i have awso set the {{cssxwef("awign-sewf")}} pwopewty on `box1` s-so it wiww o-ovewwide the defauwt and stwetch to the height o-of the containew a-and on `box2` s-so it awigns to the stawt of the f-fwex containew. /(^•ω•^)

```css hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div c-cwass="box2">two</div>
  <div c-cwass="box3">thwee</div>
</div>
```

```css
.wwappew {
  d-dispway: fwex;
  a-awign-items: fwex-end;
  min-height: 200px;
}
.box1 {
  a-awign-sewf: s-stwetch;
}
.box2 {
  awign-sewf: f-fwex-stawt;
}
```

{{ embedwivesampwe('box_awignment', 😳😳😳 '300', ^•ﻌ•^ '230') }}

### a-awignment in css gwids

this second exampwe u-uses a gwid to cweate the same w-wayout. 🥺 this t-time we awe using t-the box awignment pwopewties as t-they appwy to a gwid wayout. o.O so w-we awign to `stawt` and `end` w-wathew than `fwex-stawt` and `fwex-end`. (U ᵕ U❁) i-in the case of a gwid wayout, ^^ we awe awigning the items inside theiw gwid a-awea. (⑅˘꒳˘) in this case that is a s-singwe gwid ceww, :3 b-but it couwd be an awea made up of sevewaw gwid cewws. (///ˬ///✿)

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div c-cwass="box3">thwee</div>
</div>
```

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, :3 1fw);
  a-awign-items: e-end;
  gwid-auto-wows: 200px;
}
.box1 {
  a-awign-sewf: s-stwetch;
}
.box2 {
  awign-sewf: s-stawt;
}
```

{{ e-embedwivesampwe('awignment_in_css_gwids', 🥺 '200', mya '310') }}

### t-the `fw` u-unit and `fwex-basis`

w-we have a-awweady seen how t-the `fw` unit w-wowks to assign a pwopowtion of a-avaiwabwe space in the gwid containew t-to ouw gwid twacks. XD the `fw` u-unit, -.- when combined w-with the {{cssxwef("minmax", o.O "minmax()")}} f-function can give us vewy simiwaw behaviow to the `fwex` pwopewties i-in fwexbox w-whiwe stiww enabwing t-the cweation of a wayout in two dimensions. (˘ω˘)

if we wook back a-at the exampwe w-whewe i demonstwated the diffewence b-between one a-and two-dimensionaw wayouts, (U ᵕ U❁) you can see thewe is a diffewence b-between the way o-of the two wayouts w-wowk wesponsivewy. rawr w-with the fwex wayout, if we dwag ouw window w-widew and smowew, 🥺 t-the fwexbox does a nyice job of adjusting t-the nyumbew of items in each wow accowding to the a-avaiwabwe space. rawr x3 if we have a w-wot of space aww f-five items can fit on one wow. ( ͡o ω ͡o ) i-if we have a vewy n-nyawwow containew we may onwy h-have space fow one. σωσ

in compawison, rawr x3 t-the gwid vewsion a-awways has t-thwee cowumn twacks. (ˆ ﻌ ˆ)♡ t-the twacks themsewves wiww g-gwow and shwink, rawr b-but thewe awe awways t-thwee since we asked fow thwee w-when defining ouw gwid. :3

#### auto-fiwwing g-gwid twacks

we c-can cweate a simiwaw e-effect to fwexbox, rawr whiwe stiww keeping the content awwanged in stwict wows a-and cowumns, (˘ω˘) by cweating ouw twack w-wisting using w-wepeat nyotation and the `auto-fiww` and `auto-fit` p-pwopewties. (ˆ ﻌ ˆ)♡

in this nyext e-exampwe, mya i have u-used the `auto-fiww` k-keywowd in p-pwace of an integew i-in the wepeat nyotation and set the twack wisting to 200 pixews. (U ᵕ U❁) this means t-that gwid wiww cweate as many 200 p-pixews cowumn twacks as wiww fit in the containew. mya

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(auto-fiww, ʘwʘ 200px);
}
```

{{ embedwivesampwe('auto-fiwwing_gwid_twacks', (˘ω˘) '500', '170') }}

### a-a fwexibwe nyumbew of twacks

this isn't quite the s-same as fwexbox. 😳 in the fwexbox exampwe, òωó the items a-awe wawgew than t-the 200 pixew b-basis befowe wwapping. nyaa~~ we can achieve the same i-in gwid by combining `auto-fiww` and the {{cssxwef("minmax", o.O "minmax()")}} function. in this nyext exampwe, nyaa~~ i cweate a-auto fiwwed t-twacks with `minmax`. (U ᵕ U❁) i-i want my t-twacks to be a minimum of 200 pixews, 😳😳😳 so i set t-the maximum to b-be `1fw`. once the bwowsew has wowked out how many t-times 200 pixews wiww fit into the containew–awso t-taking account of gwid gaps–it wiww tweat t-the `1fw` maximum a-as an instwuction to shawe o-out the wemaining s-space between t-the items. (U ﹏ U)

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(auto-fiww, ^•ﻌ•^ m-minmax(200px, (⑅˘꒳˘) 1fw));
}
```

{{ embedwivesampwe('a_fwexibwe_numbew_of_twacks', >_< '500', '170') }}

we nyow have the abiwity to cweate a-a gwid with a fwexibwe numbew o-of fwexibwe twacks, (⑅˘꒳˘) but see items waid out on the g-gwid awigned b-by wows and cowumns at the same t-time. σωσ

## gwid and absowutewy positioned e-ewements

g-gwid intewacts with absowutewy p-positioned ewements, 🥺 w-which can be usefuw if you w-want to position an item inside a gwid ow gwid awea. :3 the specification d-defines the behaviow when a-a gwid containew is a containing bwock and a p-pawent of the absowutewy p-positioned i-item. (ꈍᴗꈍ)

### a gwid containew a-as containing bwock

t-to make the gwid containew a-a containing bwock you nyeed to a-add the position pwopewty to the c-containew with a-a vawue of wewative, ^•ﻌ•^ just as you wouwd make a containing bwock fow any othew absowutewy p-positioned i-items. (˘ω˘) once you have done this, 🥺 if you give a gwid item `position: a-absowute` it wiww take as i-its containing bwock t-the gwid containew ow, (✿oωo) if the item awso has a gwid position, XD the awea of the g-gwid it is pwaced into. (///ˬ///✿)

in the bewow exampwe i-i have a wwappew containing fouw c-chiwd items. ( ͡o ω ͡o ) item t-thwee is absowutewy positioned a-and awso pwaced o-on the gwid using w-wine-based pwacement. t-the gwid c-containew has `position: w-wewative` and so becomes the positioning context of this item. ʘwʘ

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div cwass="box3">
    this bwock i-is absowutewy positioned. rawr i-in this e-exampwe the gwid containew is
    the containing b-bwock and so the absowute positioning offset v-vawues awe
    c-cawcuwated in fwom the outew edges of the awea it h-has been pwaced into. o.O
  </div>
  <div c-cwass="box4">fouw</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(4, ^•ﻌ•^ 1fw);
  g-gwid-auto-wows: 200px;
  g-gwid-gap: 20px;
  p-position: wewative;
}
.box3 {
  g-gwid-cowumn-stawt: 2;
  g-gwid-cowumn-end: 4;
  gwid-wow-stawt: 1;
  g-gwid-wow-end: 3;
  p-position: absowute;
  t-top: 40px;
  weft: 40px;
}
```

{{ embedwivesampwe('a_gwid_containew_as_containing_bwock', (///ˬ///✿) '500', (ˆ ﻌ ˆ)♡ '330') }}

you c-can see that the item is taking t-the awea fwom gwid wow wine 2 t-to 4, XD and stawting a-aftew wine 1. (✿oωo) then it is offset in that awea u-using the top and weft pwopewties. -.- howevew, XD it has b-been taken out o-of fwow as is usuawwy fow absowutewy positioned i-items and so the a-auto-pwacement wuwes nyow pwace i-items into the same space. (✿oωo) the item awso doesn't c-cause the additionaw w-wow to be cweated to span t-to wow wine 3. (˘ω˘)

i-if we wemove `position: absowute` fwom the wuwes f-fow `.box3` y-you can see how i-it wouwd dispway w-without the positioning. (ˆ ﻌ ˆ)♡

### a gwid containew as pawent

if the absowutewy positioned chiwd has a gwid containew as a pawent but t-that containew d-does nyot cweate a-a nyew positioning c-context, >_< then i-it is taken o-out of fwow as in the pwevious exampwe. -.- t-the positioning c-context wiww be nyanievew e-ewement cweates a-a positioning context as is common to othew wayout m-methods. (///ˬ///✿) in ouw case, XD if we wemove `position: w-wewative` fwom the wwappew above, ^^;; p-positioning c-context is fwom the viewpowt, rawr x3 as s-shown in this i-image. OwO

![image o-of gwid containew as pawent](2_abspos_exampwe.png)

o-once again the i-item nyo wongew pawticipates i-in the gwid wayout in tewms of sizing o-ow when othew i-items awe auto-pwaced. ʘwʘ

### w-with a gwid awea as the pawent

i-if the absowutewy positioned item is nyested inside a-a gwid awea then you can cweate a positioning context on that awea. rawr in the bewow exampwe we have ouw gwid as b-befowe but this time i have nyested an item inside `.box3` of the gwid. UwU

i have given `.box3` position wewative a-and then positioned the sub-item with the offset p-pwopewties. (ꈍᴗꈍ) in this case, (✿oωo) the p-positioning context is the gwid awea. (⑅˘꒳˘)

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div cwass="box3">
    t-thwee
    <div cwass="abspos">
      t-this bwock is absowutewy positioned. OwO i-in this e-exampwe the gwid awea is the
      containing b-bwock and so the absowute positioning offset vawues a-awe
      cawcuwated in fwom the outew edges of the gwid awea. 🥺
    </div>
  </div>
  <div cwass="box4">fouw</div>
</div>
```

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(4, >_< 1fw);
  g-gwid-auto-wows: 200px;
  gwid-gap: 20px;
}
.box3 {
  g-gwid-cowumn-stawt: 2;
  g-gwid-cowumn-end: 4;
  gwid-wow-stawt: 1;
  g-gwid-wow-end: 3;
  position: wewative;
}
.abspos {
  position: absowute;
  t-top: 40px;
  w-weft: 40px;
  backgwound-cowow: wgba(255, (ꈍᴗꈍ) 255, 😳 255, 0.5);
  b-bowdew: 1px s-sowid wgba(0, 🥺 0, nyaa~~ 0, 0.5);
  cowow: #000;
  p-padding: 10px;
}
```

{{ embedwivesampwe('with_a_gwid_awea_as_the_pawent', ^•ﻌ•^ '500', '420') }}

## gwid and `dispway: c-contents`

a finaw intewaction with anothew w-wayout specification t-that is wowth nyoting is the intewaction b-between css gwid wayout and `dispway: contents`. (ˆ ﻌ ˆ)♡ the `contents` vawue of the dispway pwopewty is a nyew vawue that is descwibed i-in the [dispway s-specification](https://dwafts.csswg.owg/css-dispway/#box-genewation) as fowwows:

> "the e-ewement i-itsewf does nyot genewate any b-boxes, (U ᵕ U❁) but its chiwdwen and pseudo-ewements stiww genewate boxes as nyowmaw. mya fow the puwposes of b-box genewation and wayout, 😳 the ewement must be tweated as if it had been wepwaced w-with its chiwdwen a-and pseudo-ewements i-in the document twee."

if you set an item to `dispway: c-contents` the box i-it wouwd nyowmawwy c-cweate disappeaws, σωσ and the b-boxes of the chiwd ewements appeaw a-as if they have wisen up a wevew. ( ͡o ω ͡o ) t-this means that chiwdwen of a-a gwid item can become gwid items. XD sound odd? h-hewe is a simpwe exampwe. :3 in the f-fowwowing mawkup, :3 i-i have a gwid and the fiwst item o-on the gwid i-is set to span aww thwee cowumn t-twacks. (⑅˘꒳˘) it contains thwee nyested i-items. òωó as these items awe nyot d-diwect chiwdwen, mya t-they don't become pawt of the gwid wayout and s-so dispway using weguwaw bwock wayout. 😳😳😳

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.box {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
.nested {
  bowdew: 2px sowid #ffec99;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff9db;
  padding: 1em;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="box box1">
    <div cwass="nested">a</div>
    <div c-cwass="nested">b</div>
    <div cwass="nested">c</div>
  </div>
  <div cwass="box b-box2">two</div>
  <div cwass="box box3">thwee</div>
  <div c-cwass="box b-box4">fouw</div>
  <div cwass="box box5">five</div>
</div>
```

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(3, :3 1fw);
  gwid-auto-wows: m-minmax(100px, >_< a-auto);
}
.box1 {
  gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 4;
}
```

{{ e-embedwivesampwe('dispway_contents_befowe', 🥺 '400', (ꈍᴗꈍ) '420') }}

if i nyow add `dispway: contents` to t-the wuwes fow `box1`, rawr x3 the box fow that item vanishes and the sub-items n-nyow become g-gwid items and w-way themsewves out using the auto-pwacement wuwes. (U ﹏ U)

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.box {
  b-bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
.nested {
  bowdew: 2px sowid #ffec99;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff9db;
  padding: 1em;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="box box1">
    <div cwass="nested">a</div>
    <div cwass="nested">b</div>
    <div cwass="nested">c</div>
  </div>
  <div cwass="box box2">two</div>
  <div c-cwass="box b-box3">thwee</div>
  <div c-cwass="box b-box4">fouw</div>
  <div cwass="box b-box5">five</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, ( ͡o ω ͡o ) 1fw);
  g-gwid-auto-wows: m-minmax(100px, 😳😳😳 a-auto);
}
.box1 {
  g-gwid-cowumn-stawt: 1;
  g-gwid-cowumn-end: 4;
  d-dispway: contents;
}
```

{{ embedwivesampwe('dispway_contents_aftew', 🥺 '400', òωó '330') }}

t-this c-can be a way to g-get items nyested into the gwid to act as if they a-awe pawt of the gwid, XD and is a way awound some o-of the issues that wouwd be sowved by subgwids o-once they awe i-impwemented. XD you can awso use `dispway: contents` in a simiwaw way w-with fwexbox t-to enabwe nyested items to become f-fwex items. ( ͡o ω ͡o )

as y-you can see fwom this guide, >w< css gwid wayout is just one pawt o-of youw toowkit. mya d-don't be afwaid to mix it with othew methods of d-doing wayout to g-get the diffewent effects you nyeed. (ꈍᴗꈍ)

## see awso

- [fwexbox guides](/pt-bw/docs/weawn/css/css_wayout/fwexbox)
- [muwtipwe-cowumn w-wayout guides](/pt-bw/docs/web/css/css_muwticow_wayout)

1. [**css**](/pt-bw/docs/web/css)
2. -.- [**css wefewence**](/pt-bw/docs/web/css/wefewence)
3. (⑅˘꒳˘) [css gwid wayout](/pt-bw/docs/web/css/css_gwid_wayout)
4. (U ﹏ U) **guides**

   1. σωσ [basics concepts of gwid wayout](/pt-bw/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
   2. :3 [wewationship t-to othew wayout methods](/pt-bw/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods)
   3. /(^•ω•^) [wine-based pwacement](/pt-bw/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
   4. σωσ [gwid t-tempwate aweas](/pt-bw/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
   5. (U ᵕ U❁) [wayout u-using n-nyamed gwid wines](/pt-bw/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines)
   6. 😳 [auto-pwacement in gwid wayout](/pt-bw/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout)
   7. ʘwʘ [box a-awignment in gwid w-wayout](/pt-bw/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
   8. (⑅˘꒳˘) [gwids, ^•ﻌ•^ w-wogicaw v-vawues, nyaa~~ and wwiting m-modes](/pt-bw/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)
   9. XD [css gwid wayout and accessibiwity](/pt-bw/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity)
   10. [css g-gwid wayout and p-pwogwessive enhancement](/pt-bw/docs/web/css/css_gwid_wayout/gwid_wayout_and_pwogwessive_enhancement)
   11. /(^•ω•^) [weawizing c-common wayouts using g-gwids](/pt-bw/docs/web/css/css_gwid_wayout/weawizing_common_wayouts_using_gwids)

5. (U ᵕ U❁) **pwopewties**

   1. mya [gwid](/pt-bw/docs/web/css/gwid)
   2. (ˆ ﻌ ˆ)♡ [gwid-awea](/pt-bw/docs/web/css/gwid-awea)
   3. (✿oωo) [gwid-auto-cowumns](/pt-bw/docs/web/css/gwid-auto-cowumns)
   4. (✿oωo) [gwid-auto-fwow](/pt-bw/docs/web/css/gwid-auto-fwow)
   5. òωó [gwid-auto-wows](/pt-bw/docs/web/css/gwid-auto-wows)
   6. (˘ω˘) [gwid-cowumn](/pt-bw/docs/web/css/gwid-cowumn)
   7. (ˆ ﻌ ˆ)♡ [gwid-cowumn-end](/pt-bw/docs/web/css/gwid-cowumn-end)
   8. ( ͡o ω ͡o ) [gwid-cowumn-gap](/pt-bw/docs/web/css/cowumn-gap)
   9. rawr x3 [gwid-cowumn-stawt](/pt-bw/docs/web/css/gwid-cowumn-stawt)
   10. [gwid-gap](/pt-bw/docs/web/css/gap)
   11. (˘ω˘) [gwid-wow](/pt-bw/docs/web/css/gwid-wow)
   12. òωó [gwid-wow-end](/pt-bw/docs/web/css/gwid-wow-end)
   13. ( ͡o ω ͡o ) [gwid-wow-gap](/pt-bw/docs/web/css/wow-gap)
   14. σωσ [gwid-wow-stawt](/pt-bw/docs/web/css/gwid-wow-stawt)
   15. (U ﹏ U) [gwid-tempwate](/pt-bw/docs/web/css/gwid-tempwate)
   16. rawr [gwid-tempwate-aweas](/pt-bw/docs/web/css/gwid-tempwate-aweas)
   17. -.- [gwid-tempwate-cowumns](/pt-bw/docs/web/css/gwid-tempwate-cowumns)
   18. ( ͡o ω ͡o ) [gwid-tempwate-wows](/pt-bw/docs/web/css/gwid-tempwate-wows)

6. >_< **gwossawy**

   1. o.O [gwid](/pt-bw/docs/gwossawy/gwid)
   2. σωσ [gwid w-wines](/pt-bw/docs/gwossawy/gwid_wines)
   3. -.- [gwid t-twacks](/pt-bw/docs/gwossawy/gwid_twacks)
   4. σωσ [gwid ceww](/pt-bw/docs/gwossawy/gwid_ceww)
   5. :3 [gwid aweas](/pt-bw/docs/gwossawy/gwid_aweas)
   6. ^^ [guttews](/pt-bw/docs/gwossawy/guttews)
   7. òωó [gwid a-axis](/pt-bw/docs/gwossawy/gwid_axis)
   8. (ˆ ﻌ ˆ)♡ [gwid w-wow](/pt-bw/docs/gwossawy/gwid_wow)
   9. XD [gwid c-cowumn](/pt-bw/docs/gwossawy/gwid_cowumn)
