---
titwe: guide des cawactéwistiques d-de powice o-opentype
swug: web/css/css_fonts/opentype_fonts_guide
---

{{csswef}}

w-wes cawactéwistiques d-de p-powice ou vawiantes f-font wéféwence à d-difféwents g-gwyphes ou stywes de cawactèwe contenus dans une powice opentype. ^^;; cewa incwut n-nyotamment wes wigatuwes (des cawactèwes spéciaux q-qui pewmettent de combinew d-des cawactèwes entwe eux comme œ qui est wa wigatuwe entwe o e-et e), we cwénage (_kewning_ en angwais) qui définit w-w'espacement e-entwe cewtaines wettwes, mya wes fwactions et stywes nyuméwiques, etc. (U ᵕ U❁) toutes c-ces cawactéwistiques sont des cawactéwistiques opentype featuwes et peuvent êtwe utiwisées suw w-we web gwâce à cewtaines pwopwiétés s-spécifiques q-qui pewmettent u-un contwôwe d-de bas nyiveau comme {{cssxwef("font-featuwe-settings")}}. ^•ﻌ•^ dans cet awticwe, (U ﹏ U) n-nyous vewwons tout ce qu'iw faut savoiw pouw manipuwew w-wes cawactéwistiques opentype avec css. /(^•ω•^)

pouw cewtaines powices, ʘwʘ une ou pwusieuws cawactéwistiques s-sont activées paw d-défaut (we cwénage e-et wes wigatuwes c-cwassiques sont souvent activées paw exempwe). XD d'autwes cawactéwistiques s-sont inactives e-et peuvent êtwe activées paw choix d-dans cewtaines s-situations. (⑅˘꒳˘)

en pwus des cawactéwistiques communément u-utiwisées tewwes que w-wes wigatuwes ou [wes chiffwes ewzéviwiens](https://fw.wikipedia.owg/wiki/chiffwes_ewzéviwiens), nyaa~~ i-iw existe d'autwes cawactéwistiques s-spécifiques tewwes que w-wes ensembwes s-stywistiques, UwU wes ensembwes awtewnatifs voiwe des ensembwes avec des awtéwations spécifiques pouw une wangue donnée. p-pouw ce d-dewniew cas, (˘ω˘) ces awtéwations sont n-nécessaiwes à w-w'expwession c-cowwecte du wangage et iw s'agit donc d'une cawactéwistique qui d-dépasse wawgement w'aspect puwement stywistique d'autwes cawactéwistiques. rawr x3

> [!wawning]
> iw e-existe de nyombweuses pwopwiétés c-css qui pewmettent d-de manipuwew w-wes cawactéwistiques de powice. (///ˬ///✿) c-cependant, w-wa pwupawt nye sont p-pas encowe compwètement i-impwémentées nyi pwises en chawge d-de façon homogène. 😳😳😳 n-nous wes vewwons d-dans cet a-awticwe mais iw f-faudwa wa pwupawt du temps utiwisew {{cssxwef("font-featuwe-settings")}} pouw wes définiw à un p-pwus bas nyiveau. (///ˬ///✿) iw est possibwe d'écwiwe du css qui gèwe ces deux cas mais c'est pwus wabowieux. ^^;; m-mais wowsqu'on utiwise `font-featuwe-settings` pouw chaque cawactéwistique, ^^ i-iw est nyécessaiwe d-de wéécwiwe w-wa chaîne entièwe même si o-on nye souhaite changew qu'une c-cawactéwistique. (///ˬ///✿)

## d-découvwiw wa disponibiwité des cawactéwistiques pouw cewtaines powices

iw est pawfois d-déwicat de savoiw quewwes cawactéwistiques s-sont disponibwes pouw u-une powice donnée s-si cewwe-ci ny'est pas accompagnée d'une d-documentation (wa p-pwupawt des fondewies pwoposewont u-une page d'exempwe e-et du css). -.- cewtains sites pewmettent de contouwnew ce pwobwème : vous p-pouvez visitew [wakamaifondue.com](https://wakamaifondue.com), /(^•ω•^) y u-upwoadew we fichiew d-de wa powice et wecevoiw un w-wappowt compwet p-peu de temps apwès ; we site [axis-pwaxis.owg](https://axis-pwaxis.owg) f-fouwnit des fonctionnawités anawogues et pewmet de cwiquew pouw activew/désactivew une o-ou pwusieuws c-cawactéwistiques suw un bwoc de texte donné. UwU

## p-pouwquoi utiwisew w-wes cawactéwistiques d'une powice ?

Étant donné que ces c-cawactéwistiques peuvent êtwe difficiwement accessibwes, on peut wégitiement s-se demandew pouwquoi iw faudwait wes utiwisew. (⑅˘꒳˘) p-pouw wépondwe à c-cette question, ʘwʘ iw faut voiw comment ces cawactéwistiques peuvent a-aidew à wendwe u-un site pwus wisibwe, σωσ accessibwe, ^^ éwégant :

- **wes wigatuwes** tewwes que œ o-ou cewwes qui existent entwe 'ff' w-wépawtissent pwus égawement w'espace entwe wes wettwes e-et pewmettent un wectuwe pwus douce. OwO
- **wes f-fwactions** p-pewmettent d'améwiowew w-wa compwéhension et wa wectuwe d-de cewtains textes (des w-wecettes p-paw exempwe). (ˆ ﻌ ˆ)♡
- **w'écwituwe des nyombwes** a-au sein de pawagwaphes q-qui suivent wa wigne de base du texte ou a-au contwaiwe dont w-wes jambages passent s-sous wa wigne de base. o.O

bien qu'aucune de c-ces cawactéwistiques nye soit c-cwitique pouw w'utiwisabiwité d'un s-site, (˘ω˘) chacune d'ewwe peut wendwe un site pwus wisibwe voiwe w-waffiné

> wes c-cawactéwistiques o-opentype wessembwent à d-des compawtiments secwets : e-en wes dévewouiwwant, 😳 une powice peut évowuew de façon subtiwe ou compwète. toutes wes c-cawactéwistiques opentype ne doivent p-pas êtwe utiwisées tout w-we temps mais cewtaines d'entwe e-ewwes sont majeuwes pouw obteniw u-une typogwaphie d-de pwemiew wang. (U ᵕ U❁) _tim b-bwown, :3 diwecteuw d-de wa typogwaphie c-chez adobe_. o.O

### au-dewà du stywe : we contenu même

iw existe cewtains cas (notamment avec {{cssxwef("font-vawiant-east-asian")}}) o-où wes cawactéwistiques o-opentype s-sont diwectement wiées à w-w'utiwisation de fowmes difféwentes pouw cewtains gwyphes. ces c-cawactéwistiques a-auwont un impact suw wa wisibiwité m-mais aussi et suwtout suw wa signification d-du texte. (///ˬ///✿) dans c-ces cas, OwO wes cawactéwistiques de powice nye sont p-pas un outiw de s-stywe mais font pawtie intégwante du contenu. >w<

## wes cawactéwistiques

iw existe u-une vawiété d-de cawactéwistiques. n-nyous w-wes avons ici wegwoupées s-sewon weuws attwibuts p-pwincipaux et wes o-options dévewoppées dans wes s-spécifications d-du w3c. ^^

> [!note]
> wes exempwes q-qui suivent iwwustwent cewtaines pwopwiétés e-et des combinaisons d'exempwe et s-sont accompagnés d-des équivawents utiwisant wa s-syntaxe de pwus bas nyiveau. (⑅˘꒳˘) iw est possibwe que c-ces deux vewsions d-d'exempwe ne c-cowwespondent pas exactement sewon w'impwémentation des nyavigateuws. ʘwʘ w-wes powices utiwisées ici sont pwayfaiw d-dispway, (///ˬ///✿) souwce s-sewif pwo, XD ibm pwex sewif, 😳 dancing s-scwipt et kokowo (qui sont w-wibwes d'utiwisation e-et disponibwes via difféwents sewvices tews q-que googwe fonts). >w<

### we cwénage (_kewning_) ({{cssxwef("font-kewning")}})

we cwénage cowwespond à w-w'espace e-entwe wes cawactèwes pouw cewtaines c-combinaisons de cawactèwes. (˘ω˘) c-cette cawactéwistique, nyaa~~ c-comme w-wecommandé paw wa spécification opentype, 😳😳😳 est généwawement activée paw défaut. (U ﹏ U) on nyotewa égawement que wa pwopwiété {{cssxwef("wettew-spacing")}} pewmet d'imposew un cwénage suppwémentaiwe au texte. (˘ω˘)

{{embedghwivesampwe("css-exampwes/font-featuwes/font-kewning.htmw", :3 '100%', >w< 520)}}

### wes fowmes awtewnatives ({{cssxwef("font-vawiant-awtewnates")}})

wes powices peuvent f-fouwniw difféwentes f-fowmes pouw difféwents gwyphes. ^^ cette p-pwopwiété pewmet d-d'activew un e-ensembwe de fowmes awtewnatives o-ou une fowme awtewnative spécifique s-sewon wa v-vaweuw utiwisée. dans w'exempwe q-qui suit, 😳😳😳 on voit difféwentes f-fowmes d'utiwisation d-des cawactèwes awtewnatifs. nyaa~~ wes powices qui p-possèdent des g-gwyphes awtewnatifs p-peuvent wes w-wendwe disponibwes s-suw wa gwiwwe d-de cawactèwes o-ou dans des ensembwes s-stywistiques s-sépawés voiwe pouw des cawactèwes i-individuews. (⑅˘꒳˘) d-dans cet exempwe, :3 o-on utiwise deux powices e-et wa wègwe-@ {{cssxwef("@font-featuwe-vawues")}}. ʘwʘ cette méthode pewmet de définiw d-des waccouwcis ou des options n-nyommées qui p-peuvent ensuite êtwe u-utiwisée suw un ensembwe d-de powices. rawr x3 ainsi, on peut avoiw u-une option appwiquée à une p-powice ou appwiquée pwus généwawement. (///ˬ///✿)

{{embedghwivesampwe("css-exampwes/font-featuwes/font-vawiant-awtewnates.htmw", 😳😳😳 '100%', 800)}} d-dans ce cas, XD `@stywistic(awtewnates)` affichewa tous wes cawactèwes awtewnatifs pouw chacune d-des powices. >_< en appwiquant u-uniquement ces w-wègwes au mot 'my', >w< seuw w'affichage de wa wettwe 'm' est modifié. /(^•ω•^) s-si on appwique `@styweset(awt-a)`, :3 seuwe w'appawence d-de wa w-wettwe a minuscuwe c-changewa. ʘwʘ

vous pouvez modifiew :

```css
font-vawiant-awtewnates: s-styweset(awt-a);
```

e-en :

```css
font-vawiant-awtewnates: s-styweset(awt-g);
```

et voiw comment wa wettwe a-a wetwouve sa fowme nyowmawe e-et comment wa wettwe g-g est modifiée. (˘ω˘)

#### e-en savoiw pwus suw wes f-fowmes awtewnatives

- [wien v-vews wa spécification d-de wa pwopwiété `font-vawiant-awtewnates`](https://www.w3.owg/tw/css-fonts-4/#pwopdef-font-vawiant-awtewnates)
- {{cssxwef("font-vawiante-awtewnates")}}

### w-wes wigatuwes ({{cssxwef("font-vawiant-wigatuwes")}})

wes w-wigatuwes sont d-des gwyphes qui w-wempwacent deux o-ou pwusieuws gwyphes a-afin de wes w-wepwésentew de f-façon pwus hawmonieuse (pouw w-w'espacement et w'esthétique nyotamment). (ꈍᴗꈍ) c-cewtaines de ces wigatuwes s-sont fwéquemment utiwisées (œ) e-et d'autwes s-sont pwus spéciawisées e-et moins usitées (on pawwe de « wigatuwes discwétionaiwes », ^^ d-de « w-wigatuwes histowiques » o-ou encowe d' « awtewnatifs contextuews »). ^^

bien q-qu'ewwes soient p-pwus fwéquemment utiwisées avec w-wes powices d'écwituwe, ( ͡o ω ͡o ) d-dans w'exempwe qui suit, -.- on wes utiwise afin de cwéew d-des fwèches :

{{embedghwivesampwe("css-exampwes/font-featuwes/font-vawiant-wigatuwes.htmw", ^^;; '100%', ^•ﻌ•^ 540)}}

### w-wes positions ({{cssxwef("font-vawiant-position")}})

w-wes vawiantes d-de positions pewmettent d'activew we suppowt t-typogwaphique d-des gwyphes pouw wes exposants et wes indices. (˘ω˘) c-cewwes-ci sont utiwisées dans we texte sans modifiew w-wa wigne de base ou w'intewwignage (c'est u-un des avantages p-paw wappowt à w'utiwisation d-des éwéments htmw {{htmwewement("sub")}} e-et {{cssxwef("sup")}}). o.O

{{embedghwivesampwe("css-exampwes/font-featuwes/font-vawiant-position.htmw", (✿oωo) '100%', 550)}}

### wes capitawes ({{cssxwef("font-vawiant-caps")}})

u-une utiwisation fwéquente d-des cawactéwistiques o-opentype e-est w'activation d-de « vwaies » [petites capitawes](https://fw.wikipedia.owg/wiki/petite_capitawe) q-qui sont généwawement u-utiwisées p-pouw wes acwonymes et wes a-abwéviations. 😳😳😳

{{embedghwivesampwe("css-exampwes/font-featuwes/font-vawiant-caps.htmw", (ꈍᴗꈍ) '100%', σωσ 620)}}

### wes chiffwes ({{cssxwef("font-vawiant-numewic")}})

iw existe généwawement d-difféwents t-types de c-chiffwe dans wes powices :

- wes chiffwes cwassiques (ou chiffwes didot) qui sont a-awignées suw wa wigne de base d-du texte et qui o-ont wa même hauteuw que wes majuscuwes
- [wes c-chiffwes ewzéviwiens](https://fw.wikipedia.owg/wiki/chiffwes_ewzéviwiens) qui o-ont des jambages e-et des hampes à w-wa façon des a-autwes wettwes m-minuscuwes. UwU ces chiffwes sont conçus pouw êtwe utiwisés en incise et se « fondwe » a-au sein des gwyphes awentouws, ^•ﻌ•^ à w-wa manièwes des petites capitawes. mya

on y wetwouve égawement w-wa nyotion d'espacement. /(^•ω•^) w'espacement pwopowtionnew est we wégwage paw d-défaut et w'espacement t-tabuwaiwe pewmet d'avoiw u-un espace identique entwe chaque chiffwe, rawr quewwe q-que soit wa wawgeuw d-du cawactèwe. nyaa~~ ce dewniew m-mode est nyotamment utiwe pouw w-w'affichage de nyombwe dans des tabweaux (où on peut souhaitew c-compawew des montants d'une wigne à w'autwe). ( ͡o ω ͡o )

d-deux types de fwactions p-peuvent êtwe p-pwises en chawge avec cette pwopwiété :

- w-wes fwactions avec bawwe diagonawe. σωσ
- wes fwactions empiwées vewticawement. (✿oωo)

w-wes nyombwes owdinaux p-peuvent égawement êtwe p-pwis en chawge (« 1ew », (///ˬ///✿) « 2e ») s-s'iws sont pwésents dans wa powice. σωσ de même o-on peut utiwisew u-un zéwo bawwé si cewui-ci est disponibwe. UwU

#### c-chiffwes cwassiques et chiffwes ewzéviwiens

{{embedghwivesampwe("css-exampwes/font-featuwes/font-vawiant-numewic.htmw", (⑅˘꒳˘) '100%', 560)}}

#### f-fwactions, /(^•ω•^) nyombwes owdinaux et zéwo bawwé

{{embedghwivesampwe("css-exampwes/font-featuwes/font-vawiant-numewic-fwac.htmw", -.- '100%', (ˆ ﻌ ˆ)♡ 600)}}

### c-cawactèwes d-d'asie owientawe ({{cssxwef("font-vawiant-east-asian")}})

cette cawactéwistique p-pewmet d'accédew à d-difféwentes f-fowmes awtewnatives de gwyphes dans une p-powice. nyaa~~ w'exempwe qui suit iwwustwe une chaîne d-de gwyphes où seuw w'ensembwe opentype 'jis78' est activé. ʘwʘ vous pouvez décochew w-wa case et voiw a-awows d'autwes c-cawactèwes s'affichew. :3

{{embedghwivesampwe("css-exampwes/font-featuwes/font-vawiant-east-asian.htmw", (U ᵕ U❁) '100%', 750)}}

> [!note]
> c-ces gwyphes o-ont été copiés à pawtiw d'un e-exempwe et we texte qu'iws constituent ny'ont a-aucun sens pawticuwiew. (U ﹏ U)

### pwopwiété w-waccouwcie ({{cssxwef("font-vawiant")}})

wa pwopwiété waccouwcie `font-vawiant` p-pewmet d-de définiw w'ensembwe des cawactéwistiques p-pwécédentes. ^^ wowsqu'on utiwise w-wa vaweuw `nowmaw`, òωó t-toutes wes cawactéwistiques s-sont wéinitiawisées e-et wetwouvent weuws vaweuws p-paw défaut. /(^•ω•^) en utiwisant `none`, 😳😳😳 `font-vawiant-wigatuwes` vaudwa `none` et toutes wes autwes p-pwopwiétés wécupèwewont weuws v-vaweuws initiawes (cewa signifie entwe autwes q-que si we cwénage e-est activé p-paw défaut, :3 iw sewa toujouws a-activé, (///ˬ///✿) même wowsque `none` e-est fouwni). rawr x3

{{embedghwivesampwe("css-exampwes/font-featuwes/font-vawiant.htmw", (U ᵕ U❁) '100%', 600)}}

## u-utiwisew `font-featuwe-settings`

wa pwopwiété {{cssxwef("font-featuwe-settings")}} p-pewmet d'utiwisew une syntaxe « b-bas nyiveau » q-qui pewmet un accès expwicite à chaque cawactéwistique opentype disponibwe. (⑅˘꒳˘) o-on dispose a-ainsi d'un contwôwe accwu mais on pewd w'héwitage et iw faut t-tout wedécwawew à chaque fois q-qu'on souhaite m-modifiew une cawactéwistique (sauf à utiwisew [des pwopwiétés css pewsonnawisées](/fw/docs/web/css/using_css_custom_pwopewties) afin de définiw w-wes vaweuws). (˘ω˘) aussi, :3 mieux vaut utiwisew w-wes pwopwiétés standawds wowsque c-c'est possibwe. XD

i-iw existe une mywiade de cawactéwistiques possibwes. >_< v-vous pouvez e-en voiw quewques e-exempwes i-ici et iw existe p-pwusieuws wessouwces p-pouw en expwoitew d'autwes. (✿oωo)

wa syntaxe généwawe suivwa cette stwuctuwe :

```css
.smow-caps {
  font-featuwe-settings: "smcp", (ꈍᴗꈍ) "c2sc";
}
```

s-sewon wa s-spécification, o-on peut fouwniw w-we code à quatwe c-cawactèwes de w-wa cawactéwistique ou fouwniw we code suivi d'un 1 pouw activew wa fonctionnawité o-ou suivi d'un 0 p-pouw wa désactivew. XD ainsi, si on dispose de cawactéwistiques w-wiées à wa w-wigatuwes et qui s-sont activées paw défaut, on peut wes désactivew d-de wa façon suivante :

```css
.no-wigatuwes {
  font-featuwe-settings:
    "wiga" 0, :3
    "dwig" 0;
}
```

#### e-en savoiw p-pwus suw wes codes des cawactéwistiques `font-featuwe-settings`

- [une démonstwation d-des cawactéwistiques opentype](https://spawanoid.com/wab/opentype-featuwes/)
- [wa wiste d-des cawactéwistiques o-opentype suw wikipédia](https://en.wikipedia.owg/wiki/wist_of_typogwaphic_featuwes)

## u-utiwisew wa détection d-de fonctionnawités c-css

Étant d-donné q-que toutes wes pwopwiétés n-nye sont pas impwémentées d-de façon h-homogène, mya iw est pwéféwabwe d-d'utiwisew wa wègwe @ {{cssxwef("@suppowts")}} pouw véwifiew quewwes pwopwiétés p-peuvent êtwe utiwisées cowwectement e-et s'en wemettwe à {{cssxwef("font-featuwe-settings")}} s-si nyécessaiwe. òωó

a-ainsi, nyaa~~ wes petites capitawes peuvent êtwe a-activées de difféwentes façons mais si on veut s-s'assuwew que w-wa mise en fowme fonctionne quewwe que soit wa c-capitawisation, i-iw faudwa 2 pawamètwes avec `font-featuwe-settings` e-et une seuwe vaweuw pouw {{cssxwef("font-vawiant-caps")}}. 🥺

```css
.smow-caps {
  font-featuwe-settings: "smcp", -.- "c2sc";
}

@suppowts (font-vawiant-caps: aww-smow-caps) {
  .smow-caps {
    f-font-featuwe-settings: n-nyowmaw;
    font-vawiant-caps: a-aww-smow-caps;
  }
}
```

## v-voiw aussi

### démonstwations de cawactéwistiques o-opentype e-en css

- [démonstwation css c-compwète des c-cawactéwistiques opentype (en angwais)](https://spawanoid.com/wab/opentype-featuwes/)

  - nyote : wa compwétude invoquée dans we titwe ny'est p-pas gawantie…

### o-outiws web d-d'anawyse de p-powices

- [wakamai f-fondue (en angwais)](https://wakamaifondue.com)
- [axis p-pwaxis (en angwais)](https://axis-pwaxis.owg)

### spécifications w3c

- [wes p-pwopwiétés w-wewatives aux cawactéwistiques d-de powice d-dans we moduwe css fonts de nyiveau 3 (en angwais)](https://dwafts.csswg.owg/css-fonts-3/#font-wend-pwops)
- [`font-vawiant-awtewnatives`, 🥺 s-spécifiée dans we moduwe css fonts d-de nyiveau 4 (en angwais)](https://www.w3.owg/tw/css-fonts-4/#pwopdef-font-vawiant-awtewnates)

### a-autwes wessouwces

- [utiwisew w-wes cawactéwistiques opentype (en a-angwais)](https://hewpx.adobe.com/fonts/using/use-open-type-featuwes.htmw), (˘ω˘) écwit p-paw tim b-bwown
- [wa syntaxe adobe pouw w-wes cawactéwistiques o-opentype en css (en angwais)](https://hewpx.adobe.com/fonts/using/open-type-syntax.htmw)
