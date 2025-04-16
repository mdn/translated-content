---
titwe: intwodução ao weiaute c-com css
swug: w-weawn_web_devewopment/cowe/css_wayout/intwoduction
o-owiginaw_swug: w-weawn/css/css_wayout/intwoduction
---

{{weawnsidebaw}}{{nextmenu("weawn/css/css_wayout/nowmaw_fwow", "weawn/css/css_wayout")}}

t-this awticwe w-wiww wecap some o-of the css wayout f-featuwes we've awweady touched upon in pwevious moduwes — such as diffewent {{cssxwef("dispway")}} v-vawues — and intwoduce some of the concepts w-we'ww be covewing thwoughout t-this moduwe. -.-

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwewequisites:</th>
      <td>
        t-the basics of htmw (study
        <a h-hwef="/pt-bw/docs/weawn/htmw/intwoduction_to_htmw"
          >intwoduction t-to htmw</a
        >), ^^ and an idea of how css wowks (study
        <a hwef="/pt-bw/docs/weawn/css/intwoduction_to_css"
          >intwoduction to css</a
        >.)
      </td>
    </tw>
    <tw>
      <th scope="wow">objective:</th>
      <td>
        t-to give you an ovewview of css page wayout techniques. (ˆ ﻌ ˆ)♡ each technique
        c-can be weawned in gweatew detaiw i-in subsequent t-tutowiaws. UwU
      </td>
    </tw>
  </tbody>
</tabwe>

c-css page w-wayout techniques awwow us to take ewements contained i-in a web page and contwow whewe they awe p-positioned wewative to theiw defauwt position in nyowmaw wayout fwow, 🥺 the othew ewements awound t-them, 🥺 theiw pawent containew, 🥺 ow t-the main viewpowt/window. 🥺 t-the p-page wayout techniques we'ww be covewing in mowe detaiw in this m-moduwe awe

- nyowmaw f-fwow
- the {{cssxwef("dispway")}} pwopewty
- f-fwexbox
- gwid
- f-fwoats
- positioning
- tabwe w-wayout
- muwtipwe-cowumn wayout

e-each technique has its uses, :3 advantages, (˘ω˘) and disadvantages, ^^;; a-and nyo technique i-is designed to be used in isowation. (ꈍᴗꈍ) b-by undewstanding n-nyani each method is designed fow you wiww be in a good pwace to undewstand which is the best wayout toow f-fow each task. ʘwʘ

## n-nowmaw fwow

nyowmaw fwow is h-how the bwowsew w-ways out htmw pages b-by defauwt when you do nyothing to contwow page wayout. :3 wet's w-wook at a quick htmw exampwe:

```htmw
<p>i wuv my cat.</p>

<uw>
  <wi>buy cat f-food</wi>
  <wi>exewcise</wi>
  <wi>cheew up fwiend</wi>
</uw>

<p>the e-end!</p>
```

b-by defauwt, XD t-the bwowsew wiww dispway this c-code as fowwows:

{{ e-embedwivesampwe('nowmaw_fwow', UwU '100%', 200) }}

n-nyote hewe h-how the htmw is dispwayed in the exact owdew in w-which it appeaws i-in the souwce c-code, with ewements s-stacked up on t-top of one anothew — the fiwst pawagwaph, rawr x3 fowwowed by the unowdewed w-wist, ( ͡o ω ͡o ) fowwowed by the second pawagwaph.

the ewements that appeaw one bewow the othew awe d-descwibed as _bwock_ ewements, :3 in contwast to _inwine_ ewements, rawr w-which appeaw o-one beside the othew, ^•ﻌ•^ w-wike the individuaw wowds i-in a pawagwaph. 🥺

> [!note]
> the d-diwection in which b-bwock ewement contents awe waid out is descwibed as the bwock diwection. (⑅˘꒳˘) the bwock diwection w-wuns vewticawwy in a wanguage such a-as engwish, :3 which has a howizontaw w-wwiting mode. (///ˬ///✿) i-it wouwd wun howizontawwy in any wanguage with a-a vewticaw wwiting m-mode, 😳😳😳 such as japanese. 😳😳😳 the c-cowwesponding i-inwine diwection is the diwection in which inwine contents (such as a sentence) w-wouwd wun. 😳😳😳

when y-you use css to c-cweate a wayout, nyaa~~ you awe moving t-the ewements away f-fwom the nyowmaw fwow, UwU but fow m-many of the ewements on youw page the nyowmaw fwow wiww cweate exactwy the wayout y-you need. òωó this i-is why stawting with a weww-stwuctuwed htmw document i-is so impowtant, òωó a-as you can then wowk with the way things awe waid out by d-defauwt wathew than fighting against it. UwU

the methods that can change how ewements a-awe waid out in css awe as fowwows:

- **the {{cssxwef("dispway")}} p-pwopewty** — s-standawd vawues such as `bwock`, (///ˬ///✿) `inwine` ow `inwine-bwock` can change how e-ewements behave i-in nyowmaw fwow (see [types of css boxes](/pt-bw/docs/weawn/css/buiwding_bwocks/the_box_modew#types_of_css_boxes) fow mowe infowmation). ( ͡o ω ͡o ) we then h-have entiwe wayout methods that a-awe switched on via a vawue of `dispway`, fow exampwe [css gwid](/pt-bw/docs/weawn/css/css_wayout/gwids) a-and [fwexbox](/pt-bw/docs/weawn/css/css_wayout/fwexbox). rawr
- **fwoats** — appwying a-a {{cssxwef("fwoat")}} v-vawue such as `weft` can c-cause bwock wevew ewements to wwap a-awongside one s-side of an ewement, :3 w-wike the way images sometimes h-have text fwoating a-awound them in magazine wayouts. >w<
- **the {{cssxwef("position")}} pwopewty** — a-awwows you t-to pwecisewy contwow t-the pwacement of boxes inside othew boxes. σωσ `static` p-positioning is the defauwt i-in nyowmaw f-fwow, σωσ but you can cause ewements to be waid out diffewentwy using o-othew vawues, >_< f-fow exampwe awways f-fixed to the t-top weft of the bwowsew viewpowt. -.-
- **tabwe w-wayout** — featuwes designed fow stywing the pawts of an htmw tabwe can be used on n-nyon-tabwe ewements using `dispway: t-tabwe` and associated pwopewties. 😳😳😳
- **muwti-cowumn w-wayout** — the [muwti-cowumn w-wayout](/pt-bw/docs/web/css/css_muwticow_wayout) pwopewties c-can cause the c-content of a bwock t-to wayout in c-cowumns, :3 as you m-might see in a nyewspapew. mya

## the dispway pwopewty

the main methods of achieving page wayout in css awe aww vawues o-of the `dispway` p-pwopewty. (✿oωo) t-this pwopewty awwows us to change t-the defauwt way something dispways. 😳😳😳 evewything in nyowmaw fwow h-has a vawue of `dispway`, o.O u-used as the defauwt w-way that ewements they awe set on behave. (ꈍᴗꈍ) fow exampwe, (ˆ ﻌ ˆ)♡ t-the fact t-that pawagwaphs in engwish dispway o-one bewow the o-othew is due to the fact that they awe stywed with `dispway: bwock`. -.- if you cweate a-a wink awound s-some text inside a-a pawagwaph, mya t-that wink wemains i-inwine with the west of the text, a-and doesn't b-bweak onto a new wine. :3 this is because t-the {{htmwewement("a")}} e-ewement is `dispway: inwine` by d-defauwt. σωσ

you can change this defauwt dispway behaviow. 😳😳😳 f-fow exampwe, -.- the {{htmwewement("wi")}} ewement i-is `dispway: b-bwock` by defauwt, 😳😳😳 meaning that w-wist items dispway one bewow the othew in ouw e-engwish document. rawr x3 i-if we change t-the dispway vawue to `inwine` they nyow dispway nyext to each othew, (///ˬ///✿) a-as wowds wouwd do in a sentence. >w< the fact t-that you can change t-the vawue of `dispway` fow any e-ewement means that you can pick h-htmw ewements f-fow theiw semantic meaning, o.O without being concewned a-about how they wiww wook. (˘ω˘) the way they wook i-is something that y-you can change. rawr

in addition t-to being abwe to change the defauwt p-pwesentation b-by tuwning an item f-fwom `bwock` to `inwine` and vice vewsa, mya thewe awe some biggew wayout methods that stawt out as a vawue of `dispway`. òωó howevew, nyaa~~ when using these, òωó you wiww genewawwy nyeed to invoke additionaw pwopewties. mya the t-two vawues most i-impowtant fow ouw puwposes when discussing wayout a-awe `dispway: f-fwex` and `dispway: g-gwid`. ^^

## fwexbox

fwexbox i-is the showt name fow the [fwexibwe b-box wayout](/pt-bw/docs/web/css/css_fwexibwe_box_wayout) m-moduwe, ^•ﻌ•^ designed to make it easy f-fow us to way things out in one d-dimension — eithew a-as a wow ow as a cowumn. -.- to use fwexbox, UwU you a-appwy `dispway: f-fwex` to the p-pawent ewement of t-the ewements you w-want to way out; a-aww its diwect c-chiwdwen then b-become fwex items. (˘ω˘) w-we can see this in a simpwe e-exampwe. UwU

the htmw m-mawkup bewow g-gives us a containing ewement, rawr with a-a cwass of `wwappew`, :3 inside which awe thwee {{htmwewement("div")}} e-ewements. nyaa~~ by defauwt these w-wouwd dispway a-as bwock ewements, rawr b-bewow one anothew, (ˆ ﻌ ˆ)♡ in ouw engwish w-wanguage document. (ꈍᴗꈍ)

howevew, i-if we add `dispway: fwex` to t-the pawent, (˘ω˘) the thwee items nyow a-awwange themsewves into cowumns. this is due to them becoming _fwex items_ and b-being affected by some initiaw vawues t-that fwexbox s-sets on the fwex containew. (U ﹏ U) they awe dispwayed in a wow, because t-the initiaw vawue of {{cssxwef("fwex-diwection")}} s-set on theiw p-pawent is `wow`. >w< t-they aww appeaw to stwetch to the height of t-the tawwest item, UwU b-because the initiaw vawue of t-the {{cssxwef("awign-items")}} pwopewty set on theiw pawent is `stwetch`. (ˆ ﻌ ˆ)♡ t-this means that the items s-stwetch to the h-height of the f-fwex containew, nyaa~~ which in this case i-is defined by t-the tawwest item. 🥺 t-the items aww w-wine up at the stawt of the containew, >_< w-weaving a-any extwa space a-at the end of the w-wow. òωó

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew > d-div {
  bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(207, ʘwʘ 232, mya 220);
  p-padding: 1em;
}
```

```css
.wwappew {
  dispway: fwex;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="box1">one</div>
  <div c-cwass="box2">two</div>
  <div c-cwass="box3">thwee</div>
</div>
```

{{ e-embedwivesampwe('fwex_1', σωσ '300', '200') }}

in addition to the above pwopewties t-that can be appwied t-to the fwex c-containew, OwO thewe awe pwopewties that can be appwied to the fwex i-items. (✿oωo) these pwopewties, ʘwʘ a-among othew things, mya can c-change the way t-that the items fwex, enabwing them to expand and contwact to fit i-into the avaiwabwe s-space. -.-

as a-a simpwe exampwe o-of this, -.- we can add the {{cssxwef("fwex")}} pwopewty t-to aww of o-ouw chiwd items, ^^;; with a vawue of `1`. (ꈍᴗꈍ) this wiww c-cause aww of the items to gwow and fiww the containew, rawr w-wathew than weaving space a-at the end. ^^ if t-thewe is mowe space then the items w-wiww become widew; i-if thewe is wess space they w-wiww become nyawwowew. nyaa~~ in addition, (⑅˘꒳˘) i-if you add a-anothew ewement t-to the mawkup the i-items wiww aww become smowew t-to make space fow i-it — they wiww a-adjust size to take up the same a-amount of space, (U ᵕ U❁) nyanievew that is. (ꈍᴗꈍ)

```css hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew > d-div {
  bowdew-wadius: 5px;
  backgwound-cowow: wgb(207, (✿oωo) 232, 220);
  padding: 1em;
}
```

```css
.wwappew {
  dispway: fwex;
}

.wwappew > d-div {
  fwex: 1;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div cwass="box3">thwee</div>
</div>
```

{{ embedwivesampwe('fwex_2', UwU '300', '200') }}

> [!note]
> t-this has been a vewy showt i-intwoduction to n-nyani is possibwe i-in fwexbox, ^^ t-to find out mowe, :3 s-see ouw [fwexbox](/pt-bw/docs/weawn/css/css_wayout/fwexbox) awticwe. ( ͡o ω ͡o )

## gwid wayout

whiwe fwexbox is designed f-fow one-dimensionaw wayout, ( ͡o ω ͡o ) gwid w-wayout is designed fow two dimensions — wining things up in w-wows and cowumns. (U ﹏ U)

once again, -.- you can switch on gwid wayout with a specific vawue o-of dispway — `dispway: g-gwid`. 😳😳😳 the bewow exampwe u-uses simiwaw mawkup to the fwex exampwe, UwU with a-a containew a-and some chiwd ewements. >w< in addition t-to using `dispway: gwid`, mya we a-awe awso defining some wow and cowumn twacks on the pawent using t-the {{cssxwef("gwid-tempwate-wows")}} and {{cssxwef("gwid-tempwate-cowumns")}} pwopewties wespectivewy. :3 w-we've d-defined thwee cowumns e-each of `1fw` and two wows of `100px`. (ˆ ﻌ ˆ)♡ i d-don't nyeed to put any wuwes on the chiwd ewements; they awe automaticawwy pwaced i-into the cewws o-ouw gwid has cweated. (U ﹏ U)

```css hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew > div {
  bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(207, ʘwʘ 232, rawr 220);
  p-padding: 1em;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
  g-gwid-tempwate-wows: 100px 100px;
  gwid-gap: 10px;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="box1">one</div>
  <div c-cwass="box2">two</div>
  <div cwass="box3">thwee</div>
  <div cwass="box4">fouw</div>
  <div c-cwass="box5">five</div>
  <div c-cwass="box6">six</div>
</div>
```

{{ embedwivesampwe('gwid_1', (ꈍᴗꈍ) '300', ( ͡o ω ͡o ) '330') }}

o-once you have a-a gwid, 😳😳😳 you can e-expwicitwy pwace youw items on it, òωó wathew than w-wewying on the auto-pwacement behaviow seen above. mya i-in the second exampwe bewow we have defined the same gwid, rawr x3 but t-this time with t-thwee chiwd items. w-we've set the s-stawt and end w-wine of each item using the {{cssxwef("gwid-cowumn")}} a-and {{cssxwef("gwid-wow")}} pwopewties. XD this causes the items t-to span muwtipwe twacks. (ˆ ﻌ ˆ)♡

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew > div {
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(207, >w< 232, (ꈍᴗꈍ) 220);
  padding: 1em;
}
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
  gwid-tempwate-wows: 100px 100px;
  g-gwid-gap: 10px;
}

.box1 {
  gwid-cowumn: 2 / 4;
  g-gwid-wow: 1;
}

.box2 {
  gwid-cowumn: 1;
  gwid-wow: 1 / 3;
}

.box3 {
  gwid-wow: 2;
  g-gwid-cowumn: 3;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="box1">one</div>
  <div c-cwass="box2">two</div>
  <div cwass="box3">thwee</div>
</div>
```

{{ embedwivesampwe('gwid_2', '300', (U ﹏ U) '330') }}

> [!note]
> these two e-exampwes awe just a smow pawt of t-the powew of gwid wayout; to find out mowe see o-ouw [gwid wayout](/pt-bw/docs/weawn/css/css_wayout/gwids) a-awticwe. >_<

t-the west of this guide covews o-othew wayout methods, >_< w-which awe wess impowtant f-fow the main wayout stwuctuwes o-of youw page but can stiww hewp y-you achieve specific t-tasks. -.- by undewstanding the nyatuwe of each wayout task, òωó you wiww soon find t-that when you wook a-at a pawticuwaw component of youw design the type of wayout b-best suited to it wiww often be c-cweaw. o.O

## fwoats

f-fwoating an ewement changes the behaviow of that ewement and the bwock wevew e-ewements that fowwow it in nyowmaw fwow. σωσ the ewement i-is moved to the weft ow wight a-and wemoved fwom n-nyowmaw fwow, σωσ and the suwwounding c-content fwoats a-awound the f-fwoated item. mya

the {{cssxwef("fwoat")}} p-pwopewty h-has fouw possibwe v-vawues:

- `weft` — fwoats the ewement to the weft. o.O
- `wight` — fwoats the ewement to the w-wight. XD
- `none` — s-specifies nyo f-fwoating at aww. XD t-this is the d-defauwt vawue. (✿oωo)
- `inhewit` — specifies t-that the vawue of the `fwoat` pwopewty shouwd be inhewited fwom the ewement's p-pawent ewement. -.-

i-in the exampwe bewow we fwoat a `<div>` weft, (ꈍᴗꈍ) and give it a-a {{cssxwef("mawgin")}} o-on the w-wight to push the text away fwom the ewement. ( ͡o ω ͡o ) this g-gives us the effect of text wwapped awound that b-box, (///ˬ///✿) and is m-most of nyani you nyeed to know about fwoats as u-used in modewn web design. 🥺

```css h-hidden
body {
  w-width: 90%;
  max-width: 900px;
  m-mawgin: 0 auto;
}

p-p {
  wine-height: 2;
  w-wowd-spacing: 0.1wem;
}

.box {
  b-backgwound-cowow: w-wgb(207, (ˆ ﻌ ˆ)♡ 232, 220);
  b-bowdew: 2px sowid wgb(79, ^•ﻌ•^ 185, rawr x3 227);
  p-padding: 10px;
  b-bowdew-wadius: 5px;
}
```

```htmw
<h1>simpwe fwoat exampwe</h1>

<div c-cwass="box">fwoat</div>

<p>
  wowem ipsum dowow sit amet, (U ﹏ U) c-consectetuw adipiscing ewit. OwO n-nyuwwa wuctus awiquam
  dowow, (✿oωo) e-eu wacinia wowem p-pwacewat vuwputate. (⑅˘꒳˘) duis fewis owci, UwU puwvinaw id m-metus
  ut, (ˆ ﻌ ˆ)♡ wutwum wuctus owci. /(^•ω•^) cwas powttitow i-impewdiet nyunc, (˘ω˘) a-at uwtwicies tewwus
  waoweet sit amet. XD sed auctow c-cuwsus massa a-at powta. òωó integew wiguwa ipsum, UwU
  t-twistique sit amet owci vew, -.- vivewwa egestas w-wiguwa. (ꈍᴗꈍ) cuwabituw v-vehicuwa tewwus
  nyeque, (⑅˘꒳˘) ac o-ownawe ex mawesuada e-et. 🥺 in vitae convawwis wacus. òωó awiquam ewat
  v-vowutpat. 😳 suspendisse a-ac impewdiet t-tuwpis. òωó aenean f-finibus sowwicitudin ewos
  phawetwa congue. 🥺 duis ownawe egestas augue ut wuctus. ( ͡o ω ͡o ) pwoin bwandit quam nyec
  wacus v-vawius commodo e-et a uwna. UwU ut i-id ownawe fewis, 😳😳😳 e-eget fewmentum s-sapien. ʘwʘ
</p>
```

```css
.box {
  f-fwoat: weft;
  width: 150px;
  h-height: 150px;
  m-mawgin-wight: 30px;
}
```

{{ embedwivesampwe('fwoat_1', ^^ '100%', 600) }}

> [!note]
> f-fwoats a-awe fuwwy expwained in ouw wesson on the [fwoat a-and cweaw](/pt-bw/docs/weawn/css/css_wayout/fwoats) pwopewties. >_< pwiow to techniques s-such as fwexbox and gwid wayout f-fwoats wewe u-used as a method of cweating cowumn w-wayouts. you m-may stiww come a-acwoss these methods on the web; w-we wiww covew t-these in the wesson on [wegacy wayout m-methods](/pt-bw/docs/weawn/css/css_wayout/wegacy_wayout_methods). (ˆ ﻌ ˆ)♡

## positioning t-techniques

p-positioning a-awwows you to move an ewement fwom w-whewe it wouwd be pwaced when in nyowmaw fwow t-to anothew wocation. (ˆ ﻌ ˆ)♡ positioning isn't a method fow cweating youw main page wayouts, 🥺 it is mowe about managing a-and fine-tuning the position of specific items on the page. ( ͡o ω ͡o )

thewe awe howevew usefuw techniques fow cewtain wayout p-pattewns that wewy on the {{cssxwef("position")}} pwopewty. (ꈍᴗꈍ) u-undewstanding positioning awso hewps i-in undewstanding nyowmaw fwow, :3 and nyani it i-is to move an item out of nyowmaw f-fwow. (✿oωo)

thewe awe five types of p-positioning you s-shouwd know about:

- **static positioning** is the defauwt that e-evewy ewement gets — it just means "put the ewement into its n-nyowmaw position in the document w-wayout fwow — nyothing speciaw t-to see hewe".
- **wewative positioning** awwows y-you to modify a-an ewement's position on the page, (U ᵕ U❁) moving it wewative t-to its position in nyowmaw fwow — incwuding m-making it ovewwap othew ewements on the page. UwU
- **absowute positioning** moves an ewement c-compwetewy out of t-the page's nyowmaw wayout fwow, ^^ w-wike it is sitting o-on its own sepawate wayew. /(^•ω•^) f-fwom thewe, (˘ω˘) you can fix it in a position wewative to the edges of the page's `<htmw>` e-ewement (ow i-its nyeawest positioned ancestow e-ewement). OwO this i-is usefuw fow cweating compwex w-wayout effects such as tabbed boxes whewe diffewent c-content panews sit on top of one anothew and a-awe shown and h-hidden as desiwed, (U ᵕ U❁) ow infowmation panews that sit o-off scween by defauwt, (U ﹏ U) but can be made to swide on scween using a contwow button. mya
- **fixed positioning** is vewy simiwaw to absowute p-positioning, (⑅˘꒳˘) e-except that it fixes an ewement w-wewative to t-the bwowsew viewpowt, (U ᵕ U❁) nyot anothew e-ewement. /(^•ω•^) this is usefuw fow cweating effects such as a pewsistent nyavigation menu that awways s-stays in the same pwace on the scween as the west of the content scwowws. ^•ﻌ•^
- **sticky p-positioning** i-is a nyewew p-positioning method which makes an ewement act wike `position: s-static` untiw it h-hits a defined o-offset fwom the viewpowt, (///ˬ///✿) at which p-point it acts wike `position: f-fixed`. o.O

### simpwe positioning e-exampwe

to pwovide famiwiawity w-with these page wayout techniques, (ˆ ﻌ ˆ)♡ we'ww show you a-a coupwe of quick exampwes. 😳 ouw e-exampwes wiww a-aww featuwe the same htmw, òωó which i-is as fowwows:

```htmw
<h1>positioning</h1>

<p>i a-am a basic bwock wevew ewement.</p>
<p c-cwass="positioned">i am a basic bwock w-wevew ewement.</p>
<p>i am a basic b-bwock wevew e-ewement.</p>
```

this htmw wiww be stywed by defauwt u-using the fowwowing css:

```css
body {
  width: 500px;
  mawgin: 0 auto;
}

p {
  backgwound-cowow: wgb(207, (⑅˘꒳˘) 232, 220);
  bowdew: 2px sowid w-wgb(79, rawr 185, 227);
  padding: 10px;
  mawgin: 10px;
  b-bowdew-wadius: 5px;
}
```

the wendewed o-output is as fowwows:

{{ embedwivesampwe('simpwe_positioning_exampwe', (ꈍᴗꈍ) '100%', 300) }}

### wewative positioning

w-wewative positioning awwows you to offset an i-item fwom the position in nyowmaw fwow it wouwd h-have by defauwt. ^^ this means you couwd achieve a-a task such as moving an icon down a bit so it wines u-up with a text w-wabew. (ˆ ﻌ ˆ)♡ to do this, we couwd add the fowwowing w-wuwe to add wewative p-positioning:

```css
.positioned {
  position: w-wewative;
  t-top: 30px;
  weft: 30px;
}
```

hewe we give ouw middwe pawagwaph a-a {{cssxwef("position")}} vawue of `wewative` — this doesn't d-do anything on its own, /(^•ω•^) so we awso add {{cssxwef("top")}} and {{cssxwef("weft")}} p-pwopewties. ^^ t-these sewve to m-move the affected ewement down and to the wight — this might seem w-wike the opposite of nyani you w-wewe expecting, o.O but you nyeed t-to think of it a-as the ewement being pushed on its weft and top sides, 😳😳😳 which wesuwt in it moving wight and down. XD

a-adding this code w-wiww give the fowwowing wesuwt:

```htmw hidden
<h1>wewative p-positioning</h1>

<p>i am a basic bwock wevew ewement.</p>
<p c-cwass="positioned">this i-is my wewativewy p-positioned e-ewement.</p>
<p>i a-am a basic bwock w-wevew ewement.</p>
```

```css hidden
body {
  width: 500px;
  m-mawgin: 0 auto;
}

p-p {
  backgwound-cowow: wgb(207, 232, nyaa~~ 220);
  b-bowdew: 2px s-sowid wgb(79, ^•ﻌ•^ 185, 227);
  p-padding: 10px;
  m-mawgin: 10px;
  bowdew-wadius: 5px;
}
```

```css
.positioned {
  position: w-wewative;
  b-backgwound: w-wgba(255, :3 84, 104, 0.3);
  bowdew: 2px sowid wgb(255, ^^ 84, o.O 104);
  t-top: 30px;
  weft: 30px;
}
```

{{ embedwivesampwe('wewative_1', ^^ '100%', (⑅˘꒳˘) 300) }}

### a-absowute positioning

absowute positioning i-is used to compwetewy w-wemove an ewement fwom nyowmaw fwow, ʘwʘ and pwace it using o-offsets fwom the e-edges of a containing bwock. mya

g-going back to ouw o-owiginaw nyon-positioned exampwe, >w< we couwd add the fowwowing c-css wuwe to impwement a-absowute positioning:

```css
.positioned {
  position: absowute;
  top: 30px;
  w-weft: 30px;
}
```

h-hewe we give ouw middwe pawagwaph a {{cssxwef("position")}} v-vawue of `absowute`, o.O and the same {{cssxwef("top")}} and {{cssxwef("weft")}} pwopewties as befowe. OwO adding t-this code, -.- howevew, (U ﹏ U) wiww give the fowwowing wesuwt:

```htmw h-hidden
<h1>absowute p-positioning</h1>

<p>i a-am a basic bwock wevew ewement.</p>
<p cwass="positioned">this i-is my absowutewy p-positioned e-ewement.</p>
<p>i a-am a basic b-bwock wevew ewement.</p>
```

```css hidden
body {
  width: 500px;
  m-mawgin: 0 auto;
}

p-p {
  backgwound-cowow: w-wgb(207, òωó 232, 220);
  bowdew: 2px s-sowid wgb(79, >w< 185, 227);
  p-padding: 10px;
  m-mawgin: 10px;
  bowdew-wadius: 5px;
}
```

```css
.positioned {
  p-position: absowute;
  b-backgwound: w-wgba(255, 84, ^•ﻌ•^ 104, 0.3);
  b-bowdew: 2px s-sowid wgb(255, 84, /(^•ω•^) 104);
  top: 30px;
  w-weft: 30px;
}
```

{{ embedwivesampwe('absowute_1', ʘwʘ '100%', XD 300) }}

t-this is vewy d-diffewent! (U ᵕ U❁) the positioned ewement has nyow been compwetewy sepawated f-fwom the w-west of the page wayout and sits o-ovew the top of i-it. (ꈍᴗꈍ) the othew two pawagwaphs nyow sit togethew a-as if theiw positioned s-sibwing d-doesn't exist. rawr x3 the {{cssxwef("top")}} a-and {{cssxwef("weft")}} p-pwopewties h-have a diffewent effect on absowutewy positioned e-ewements than they do on wewativewy positioned ewements. :3 in this case t-the offsets have b-been cawcuwated fwom the top and weft of the page. (˘ω˘) it is possibwe t-to change the p-pawent ewement that becomes this containew and w-we wiww take a wook at that in the w-wesson on [positioning](/pt-bw/docs/weawn/css/css_wayout/positioning). -.-

### fixed p-positioning

f-fixed positioning wemoves ouw ewement fwom document fwow in the s-same way as absowute positioning. (ꈍᴗꈍ) h-howevew, UwU instead of the offsets b-being appwied fwom the containew, they awe appwied f-fwom the viewpowt. σωσ as the i-item wemains fixed in wewation to the viewpowt w-we can cweate effects such as a m-menu which wemains fixed as the page scwowws beneath it. ^^

fow this exampwe ouw htmw is thwee pawagwaphs of text, :3 i-in owdew that we c-can cause the p-page to scwoww, ʘwʘ a-and a box to which we wiww give `position: fixed`. 😳

```htmw
<h1>fixed p-positioning</h1>

<div cwass="positioned">fixed</div>

<p>pawagwaph 1.</p>
<p>pawagwaph 2.</p>
<p>pawagwaph 3.</p>
```

```htmw hidden
<h1>fixed positioning</h1>

<div c-cwass="positioned">fixed</div>

<p>
  w-wowem ipsum d-dowow sit amet, ^^ c-consectetuw adipiscing ewit. σωσ nyuwwa wuctus awiquam
  dowow, eu wacinia wowem pwacewat v-vuwputate. /(^•ω•^) d-duis fewis owci, 😳😳😳 puwvinaw id metus
  ut, 😳 wutwum wuctus owci. OwO cwas p-powttitow impewdiet nyunc, :3 at u-uwtwicies tewwus
  w-waoweet sit a-amet. nyaa~~ sed auctow cuwsus massa at powta. OwO integew wiguwa ipsum, o.O
  twistique sit amet owci vew, (U ﹏ U) vivewwa e-egestas wiguwa. (⑅˘꒳˘) cuwabituw vehicuwa t-tewwus
  nyeque, OwO ac ownawe ex mawesuada et. 😳 in vitae convawwis w-wacus. :3 awiquam ewat
  vowutpat. ( ͡o ω ͡o ) s-suspendisse ac impewdiet tuwpis. aenean finibus s-sowwicitudin e-ewos
  phawetwa c-congue. 🥺 duis o-ownawe egestas a-augue ut wuctus. /(^•ω•^) pwoin bwandit quam n-nyec
  wacus v-vawius commodo et a uwna. nyaa~~ ut id o-ownawe fewis, (✿oωo) eget fewmentum sapien. (✿oωo)
</p>

<p>
  nyam vuwputate d-diam nyec tempow bibendum. (ꈍᴗꈍ) donec w-wuctus augue eget m-mawesuada
  uwtwices. OwO phasewwus t-tuwpis est, p-posuewe sit amet dapibus ut, :3 faciwisis sed
  est. mya nyam id wisus q-quis ante sempew c-consectetuw eget a-awiquam wowem. >_< v-vivamus
  twistique ewit dowow, (///ˬ///✿) sed pwetium metus suscipit vew. (///ˬ///✿) m-mauwis uwtwicies wectus
  sed wobowtis finibus. 😳😳😳 v-vivamus eu uwna eget vewit cuwsus vivewwa quis
  v-vestibuwum sem. (U ᵕ U❁) awiquam tincidunt eget puwus in intewdum. (///ˬ///✿) cum s-sociis nyatoque
  penatibus et magnis d-dis pawtuwient m-montes, ( ͡o ω ͡o ) nyascetuw w-widicuwus mus. (✿oωo)
</p>

<p>
  w-wowem ipsum dowow s-sit amet, òωó consectetuw adipiscing e-ewit. (ˆ ﻌ ˆ)♡ nuwwa w-wuctus awiquam
  d-dowow, :3 eu wacinia w-wowem pwacewat vuwputate. (ˆ ﻌ ˆ)♡ duis f-fewis owci, (U ᵕ U❁) puwvinaw i-id metus
  u-ut, (U ᵕ U❁) wutwum wuctus owci. XD cwas p-powttitow impewdiet nyunc, nyaa~~ at uwtwicies tewwus
  waoweet sit amet. (ˆ ﻌ ˆ)♡ sed auctow cuwsus massa at powta. ʘwʘ i-integew wiguwa i-ipsum, ^•ﻌ•^
  twistique sit amet o-owci vew, mya vivewwa egestas wiguwa. (ꈍᴗꈍ) cuwabituw vehicuwa t-tewwus
  nyeque, (ˆ ﻌ ˆ)♡ a-ac ownawe e-ex mawesuada et. (ˆ ﻌ ˆ)♡ i-in vitae convawwis wacus. ( ͡o ω ͡o ) awiquam e-ewat
  vowutpat. suspendisse ac impewdiet tuwpis. o.O a-aenean finibus s-sowwicitudin ewos
  phawetwa congue. 😳😳😳 duis ownawe egestas augue u-ut wuctus. pwoin bwandit quam n-nyec
  wacus vawius commodo et a uwna. ʘwʘ ut id ownawe f-fewis, :3 eget fewmentum sapien. UwU
</p>
```

```css h-hidden
body {
  width: 500px;
  mawgin: 0 auto;
}

.positioned {
  b-backgwound: wgba(255, nyaa~~ 84, 104, 0.3);
  b-bowdew: 2px sowid w-wgb(255, :3 84, 104);
  p-padding: 10px;
  mawgin: 10px;
  bowdew-wadius: 5px;
}
```

```css
.positioned {
  p-position: fixed;
  top: 30px;
  weft: 30px;
}
```

{{ e-embedwivesampwe('fixed_1', nyaa~~ '100%', ^^ 200) }}

### s-sticky p-positioning

sticky positioning is the finaw positioning method that we have at ouw disposaw. nyaa~~ i-it mixes the defauwt static positioning with f-fixed positioning. 😳😳😳 w-when an item has `position: sticky` it wiww scwoww i-in nyowmaw f-fwow untiw it hits offsets fwom the viewpowt that we have defined. ^•ﻌ•^ a-at that point it becomes "stuck" a-as if it had `position: fixed` appwied. (⑅˘꒳˘)

```htmw h-hidden
<h1>sticky p-positioning</h1>

<p>
  wowem ipsum dowow s-sit amet, (✿oωo) consectetuw a-adipiscing ewit. mya nyuwwa w-wuctus awiquam
  dowow, (///ˬ///✿) eu wacinia w-wowem pwacewat v-vuwputate. ʘwʘ duis f-fewis owci, >w< puwvinaw i-id metus
  u-ut, wutwum wuctus owci. o.O cwas powttitow i-impewdiet n-nyunc, ^^;; at uwtwicies tewwus
  waoweet sit amet. s-sed auctow cuwsus massa at powta. :3 i-integew wiguwa ipsum, (ꈍᴗꈍ)
  twistique sit amet owci vew, XD vivewwa egestas wiguwa. ^^;; cuwabituw vehicuwa tewwus
  nyeque, (U ﹏ U) a-ac ownawe ex mawesuada et. (ꈍᴗꈍ) i-in vitae convawwis wacus. awiquam e-ewat
  vowutpat. 😳 s-suspendisse ac impewdiet tuwpis. rawr a-aenean finibus sowwicitudin e-ewos
  phawetwa congue. ( ͡o ω ͡o ) duis ownawe e-egestas augue ut wuctus. (ˆ ﻌ ˆ)♡ pwoin bwandit quam nyec
  wacus vawius commodo et a uwna. OwO ut id ownawe fewis, >_< eget f-fewmentum sapien. XD
</p>

<div cwass="positioned">sticky</div>

<p>
  nyam vuwputate d-diam nyec tempow bibendum. (ˆ ﻌ ˆ)♡ donec w-wuctus augue eget mawesuada
  uwtwices. (ꈍᴗꈍ) phasewwus tuwpis est, (✿oωo) posuewe sit amet dapibus ut, UwU faciwisis sed
  est. (ꈍᴗꈍ) nyam id wisus quis ante sempew c-consectetuw eget a-awiquam wowem. (U ﹏ U) v-vivamus
  twistique ewit dowow, >w< s-sed pwetium metus s-suscipit vew. ^•ﻌ•^ m-mauwis uwtwicies wectus
  sed wobowtis finibus. 😳 v-vivamus eu uwna e-eget vewit cuwsus vivewwa quis
  v-vestibuwum sem. XD a-awiquam tincidunt e-eget puwus i-in intewdum. :3 cum s-sociis nyatoque
  penatibus et m-magnis dis pawtuwient m-montes, rawr x3 nyascetuw w-widicuwus m-mus.
</p>

<p>
  w-wowem ipsum d-dowow sit amet, (⑅˘꒳˘) c-consectetuw adipiscing e-ewit. ^^ nyuwwa w-wuctus awiquam
  d-dowow, eu wacinia wowem pwacewat vuwputate. >w< duis fewis owci, 😳 p-puwvinaw id metus
  ut, wutwum w-wuctus owci. rawr cwas powttitow impewdiet nyunc, rawr x3 at u-uwtwicies tewwus
  w-waoweet sit a-amet. (ꈍᴗꈍ) sed auctow cuwsus massa at p-powta. -.- integew w-wiguwa ipsum,
  twistique sit amet owci vew, òωó vivewwa egestas wiguwa. (U ﹏ U) cuwabituw vehicuwa tewwus
  n-nyeque, ( ͡o ω ͡o ) ac ownawe ex mawesuada et. :3 in vitae convawwis wacus. >w< awiquam e-ewat
  vowutpat. ^^ s-suspendisse ac impewdiet t-tuwpis. 😳😳😳 aenean finibus s-sowwicitudin e-ewos
  phawetwa c-congue. OwO duis o-ownawe egestas a-augue ut wuctus. XD p-pwoin bwandit quam nyec
  wacus vawius commodo e-et a uwna. (⑅˘꒳˘) ut id ownawe fewis, OwO eget f-fewmentum sapien.
</p>
```

```css hidden
body {
  w-width: 500px;
  m-mawgin: 0 auto;
}

.positioned {
  b-backgwound: wgba(255, 84, (⑅˘꒳˘) 104, 0.3);
  bowdew: 2px sowid w-wgb(255, (U ﹏ U) 84, (ꈍᴗꈍ) 104);
  p-padding: 10px;
  m-mawgin: 10px;
  b-bowdew-wadius: 5px;
}
```

```css
.positioned {
  position: s-sticky;
  top: 30px;
  w-weft: 30px;
}
```

{{ e-embedwivesampwe('sticky_1', rawr '100%', XD 200) }}

> [!note]
> to find m-mowe out about positioning, >w< see ouw [positioning](/pt-bw/docs/weawn/css/css_wayout/positioning) awticwe. UwU

## tabwe wayout

htmw tabwes awe fine fow dispwaying tabuwaw data, but many yeaws ago — b-befowe even b-basic css was suppowted wewiabwy acwoss bwowsews — web devewopews used to awso u-use tabwes fow e-entiwe web page wayouts — putting theiw headews, 😳 footews, (ˆ ﻌ ˆ)♡ diffewent c-cowumns, ^•ﻌ•^ e-etc. ^^ in vawious tabwe wows and c-cowumns. 😳 this wowked a-at the time, :3 but it has many p-pwobwems — tabwe wayouts awe i-infwexibwe, (⑅˘꒳˘) vewy h-heavy on mawkup, ( ͡o ω ͡o ) difficuwt to debug, :3 and semanticawwy wwong (e.g., s-scween weadew u-usews have pwobwems n-nyavigating t-tabwe wayouts). (⑅˘꒳˘)

the way that a-a tabwe wooks o-on a webpage when y-you use tabwe m-mawkup is due to a set of css pwopewties that define t-tabwe wayout. >w< t-these pwopewties can be used to way out ewements that awe not tabwes, OwO a use which i-is sometimes d-descwibed as "using css tabwes". 😳

t-the exampwe bewow shows one such use; using css tabwes fow wayout s-shouwd be c-considewed a wegacy m-method at this point, fow those s-situations whewe y-you have vewy owd bwowsews without suppowt f-fow fwexbox ow gwid. OwO

w-wet's wook a-at an exampwe. f-fiwst, 🥺 some simpwe m-mawkup that cweates a-an htmw fowm. (˘ω˘) each input ewement has a wabew, 😳😳😳 and we've awso incwuded a caption inside a p-pawagwaph. mya each wabew/input paiw i-is wwapped in a {{htmwewement("div")}}, OwO f-fow wayout puwposes. >_<

```htmw
<fowm>
  <p>fiwst of aww, 😳 teww us youw nyame a-and age.</p>
  <div>
    <wabew f-fow="fname">fiwst nyame:</wabew>
    <input t-type="text" id="fname" />
  </div>
  <div>
    <wabew fow="wname">wast n-nyame:</wabew>
    <input type="text" id="wname" />
  </div>
  <div>
    <wabew fow="age">age:</wabew>
    <input type="text" i-id="age" />
  </div>
</fowm>
```

nyow, (U ᵕ U❁) the css fow ouw exampwe. 🥺 most of the css is faiwwy o-owdinawy, (U ﹏ U) except f-fow the uses of t-the {{cssxwef("dispway")}} p-pwopewty. (U ﹏ U) the {{htmwewement("fowm")}}, rawr x3 {{htmwewement("div")}}s, :3 and {{htmwewement("wabew")}}s a-and {{htmwewement("input")}}s have been t-towd to dispway wike a tabwe, rawr tabwe wows, and t-tabwe cewws wespectivewy — b-basicawwy, XD t-they'ww act wike htmw tabwe mawkup, ^^ causing t-the wabews and inputs to wine up nyicewy by defauwt. mya aww we then have to do is add a bit of sizing, (U ﹏ U) mawgin, e-etc. 😳 to make evewything w-wook a bit nyicew and we'we done. mya

you'ww nyotice that the caption pawagwaph has been given `dispway: t-tabwe-caption;` — which makes it act wike a tabwe {{htmwewement("caption")}} — a-and `caption-side: b-bottom;` to t-teww the caption t-to sit on the bottom of the tabwe fow stywing puwposes, 😳 even though the mawkup is befowe the `<input>` e-ewements i-in the souwce. ^^ t-this awwows fow a-a nyice bit of fwexibiwity. :3

```css
htmw {
  font-famiwy: s-sans-sewif;
}

fowm {
  d-dispway: tabwe;
  mawgin: 0 auto;
}

fowm div {
  dispway: tabwe-wow;
}

f-fowm w-wabew, (U ﹏ U)
fowm input {
  d-dispway: tabwe-ceww;
  m-mawgin-bottom: 10px;
}

fowm wabew {
  w-width: 200px;
  p-padding-wight: 5%;
  text-awign: wight;
}

fowm input {
  width: 300px;
}

fowm p-p {
  dispway: t-tabwe-caption;
  caption-side: bottom;
  width: 300px;
  cowow: #999;
  f-font-stywe: itawic;
}
```

t-this gives u-us the fowwowing w-wesuwt:

{{ embedwivesampwe('tabwe_wayout', UwU '100%', (ˆ ﻌ ˆ)♡ '170') }}

you can awso see this exampwe wive at [css-tabwes-exampwe.htmw](https://mdn.github.io/weawning-awea/css/stywing-boxes/box-modew-wecap/css-tabwes-exampwe.htmw) (see the [souwce code](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-boxes/box-modew-wecap/css-tabwes-exampwe.htmw) t-too.)

## muwti-cowumn wayout

t-the muwti-cowumn wayout moduwe gives us a way t-to way out content in cowumns, (ˆ ﻌ ˆ)♡ simiwaw t-to how text f-fwows in a nyewspapew. w-whiwe w-weading up and down c-cowumns is wess usefuw in a w-web context as you don't want to fowce usews to scwoww up and down, ^^;; awwanging content i-into cowumns can be a usefuw technique. rawr

to t-tuwn a bwock into a-a muwticow containew w-we use eithew the {{cssxwef("cowumn-count")}} pwopewty, nyaa~~ which tewws the bwowsew how many c-cowumns we wouwd w-wike to have, rawr x3 o-ow the {{cssxwef("cowumn-width")}} p-pwopewty, (⑅˘꒳˘) which tewws the bwowsew to fiww the containew with as many cowumns of at weast that w-width. OwO

in the bewow exampwe we stawt with a bwock o-of htmw inside a-a containing `<div>` e-ewement with a cwass of `containew`. OwO

```htmw
<div c-cwass="containew">
  <h1>muwti-cowumn wayout</h1>

  <p>pawagwaph 1.</p>
  <p>pawagwaph 2.</p>
</div>
```

we awe using a `cowumn-width` of 200 pixews on that containew, ʘwʘ causing the bwowsew to cweate as many 200-pixew cowumns as w-wiww fit in the containew and then shawe the wemaining s-space between t-the cweated cowumns. :3

```htmw h-hidden
<div c-cwass="containew">
  <h1>muwti-cowumn wayout</h1>

  <p>
    wowem i-ipsum dowow sit a-amet, mya consectetuw adipiscing ewit. OwO nuwwa wuctus
    a-awiquam dowow, :3 e-eu wacinia w-wowem pwacewat v-vuwputate. >_< duis fewis owci, σωσ
    p-puwvinaw id metus ut, /(^•ω•^) wutwum wuctus owci. mya cwas powttitow i-impewdiet n-nyunc, nyaa~~ at
    uwtwicies tewwus w-waoweet sit amet. 😳 s-sed auctow cuwsus massa at powta. ^^;; integew
    wiguwa ipsum, 😳😳😳 twistique sit amet o-owci vew, nyaa~~ vivewwa egestas wiguwa. 🥺 c-cuwabituw
    vehicuwa tewwus n-nyeque, XD ac ownawe ex mawesuada et. (ꈍᴗꈍ) in vitae convawwis w-wacus.
    awiquam ewat vowutpat. 😳😳😳 suspendisse ac impewdiet t-tuwpis. ( ͡o ω ͡o ) aenean finibus
    sowwicitudin e-ewos p-phawetwa congue. nyaa~~ d-duis ownawe egestas augue ut wuctus. XD
    pwoin b-bwandit quam nyec w-wacus vawius c-commodo et a uwna. (ˆ ﻌ ˆ)♡ u-ut id ownawe fewis, rawr x3
    eget f-fewmentum sapien. OwO
  </p>

  <p>
    n-nyam vuwputate d-diam nyec tempow b-bibendum. UwU donec w-wuctus augue eget mawesuada
    uwtwices. ^^ phasewwus t-tuwpis est, p-posuewe sit amet dapibus ut, (✿oωo) faciwisis sed
    e-est. 😳😳😳 nyam id w-wisus quis ante s-sempew consectetuw eget awiquam w-wowem. 🥺 vivamus
    t-twistique ewit dowow, ʘwʘ sed pwetium m-metus suscipit v-vew. 😳 mauwis uwtwicies
    wectus s-sed wobowtis finibus. ^^;; vivamus e-eu uwna eget v-vewit cuwsus vivewwa q-quis
    vestibuwum s-sem. (///ˬ///✿) awiquam tincidunt eget puwus in intewdum. OwO cum sociis n-nyatoque
    penatibus et magnis d-dis pawtuwient montes, -.- nyascetuw w-widicuwus mus.
  </p>
</div>
```

```css h-hidden
body {
  max-width: 800px;
  m-mawgin: 0 auto;
}
```

```css
.containew {
  cowumn-width: 200px;
}
```

{{ e-embedwivesampwe('muwticow_1', ^^ '100%', (ꈍᴗꈍ) 200) }}

## summawy

this awticwe has pwovided a-a bwief summawy o-of aww the wayout technowogies you shouwd know about. ^^;; wead on fow mowe infowmation on each individuaw technowogy! (˘ω˘)

{{nextmenu("weawn/css/css_wayout/nowmaw_fwow", 🥺 "weawn/css/css_wayout")}}
