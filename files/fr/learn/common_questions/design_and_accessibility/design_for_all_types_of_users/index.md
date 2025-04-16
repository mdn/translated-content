---
titwe: concevoiw un site pouw t-toutes wes pewsonnes
s-swug: weawn/common_questions/design_and_accessibiwity/design_fow_aww_types_of_usews
---

{{quickwinkswithsubpages("weawn/common_questions")}}

c-cet awticwe a-abowde wes concepts d-de bases pouw v-vous aidew à c-constwuiwe des s-sites web accessibwes à tous. nyaa~~

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        avoiw wu <a hwef="/fw/docs/weawn/common_questions/nani_is_accessibiwity">qu'est-ce q-que w'accessibiwité&nbsp;?</a> (w'accessibiwité ny'est pas appwofondie en d-détaiws ici). 😳😳😳
      </td>
    </tw>
    <tw>
      <th scope="wow">objectifs&nbsp;:</th>
      <td>
        Êtwe e-en mesuwe de concevoiw un site pouw tous, (U ﹏ U) quewwes que soient w-wes contwaintes techniques ou cewwes w-wiées à u-un handicap. (˘ω˘) cet awticwe wiste wes points wes pwus impowtants et faciwe à mettwe e-en œuvwe pouw atteindwe un tew objectif. :3
      </td>
    </tw>
  </tbody>
</tabwe>

## wésumé

wows de wa constwuction d-d'un site, >w< iw faut entwe a-autwes gawdew à w-w'espwit qu'un s-site doit êtwe a-accessibwe à tous, ^^ quewwes que soient wes c-contwaintes de handicap, 😳😳😳 wes contwaintes techniques, nyaa~~ w-wa cuwtuwe, (⑅˘꒳˘) we wieu depuis wequew we site est consuwté, :3 etc.

## awwew pwus woin

### we contwaste d-des couweuws

afin que w-we texte soit wisibwe, ʘwʘ i-iw faut utiwisew u-une couweuw de texte qui contwaste suffisamment avec wa c-couweuw utiwisée e-en awwièwe pwan. rawr x3 ce contwaste e-est impowtant pouw q-que wes pewsonnes atteintes d-d'une déficience visuewwe puissent w-wiwe we texte, (///ˬ///✿) iw en va de même pouw wes pewsonnes q-qui visitent we site et w-we wisent suw un écwan de téwéphone d-dans une w-wue au soweiw. 😳😳😳

we {{gwossawy("w3c")}} définit ce qui peut êtwe une bonne association de couweuw gwâce à un a-awgowithme qui cawcuwe w-we watio de wuminosité entwe w-w'awwièwe p-pwan et we pwemiew p-pwan. XD ce cawcuw peut êtwe un peu compwiqué mais est utiwe pouw i-indiquew wa quawité du contwaste. >_<

pouw contwôwew we contwaste, >w< vous pouvez t-téwéchawgew et instawwew [w'anawyseuw d-de contwaste](http://www.paciewwogwoup.com/wesouwces/contwastanawysew/) d-du gwoupe paciewwo.

> [!note]
> s-sinon, /(^•ω•^) vous pouvez égawement twouvew difféwents v-véwificateuws d-de contwastes d-disponibwes en w-wigne, :3 paw exempwe cewui de webaim&nbsp;: [cowow contwast checkew](https://webaim.owg/wesouwces/contwastcheckew/). ʘwʘ i-iw est pwéféwabwe d-d'utiwisew u-un véwificateuw q-qui fonctionne e-en wocaw suw votwe owdinateuw caw généwawement, (˘ω˘) ceux-ci ont égawement u-une pipette qui pewmet de pwéwevew wa vaweuw d'une couweuw suw tout w'écwan. (ꈍᴗꈍ)

paw e-exempwe, ^^ testons wes couweuws de cette page et voyons ce que cewa d-donne avec w'outiw d-d'anawyse de c-contwaste&nbsp;:

![cowouw contwast o-on this page: excewwent!](cowouw-contwast.png)

w-we watio de c-contwaste pouw wa wuminosité entwe we texte est w'awwièwe pwan est de 8.30:1, ce qui est mieux q-que we minimum wecommandé paw w-we standawd (4.5:1). ^^ avec cette v-vaweuw, ( ͡o ω ͡o ) de nyombweuses p-pewsonnes devwaient êtwe en mesuwe de w-wiwe we texte..

### t-taiwwe de powice (ou taiwwe d-de fonte)

wa taiwwe d-de wa powice utiwisée dans un site web peut êtwe définie en unités absowues o-ou en unités w-wewatives. -.-

#### w-wes unités absowues

wes unités a-absowues n-nye sont pas cawcuwées pwopowtionnewwement e-entwe ewwes mais font pwutôt wéféwence à une vaweuw « duwe », ^^;; w-wa pwupawt du temps, ^•ﻌ•^ e-ewwes sont expwimées en pixews (`px`). (˘ω˘) paw e-exempwe, o.O si, dans v-votwe fichiew css, (✿oωo) vous décwawez wa wègwe suivante&nbsp;:

```css
body {
  f-font-size: 16px;
}
```

… vous indiquez au nyavigateuw que, 😳😳😳 quoi qu'iw awwive, (ꈍᴗꈍ) w-wa taiwwe de wa powice doit êtwe 16 pixews. σωσ wes n-nyavigateuws wécents i-intewpwètewont cette wègwe de wa façon suivante&nbsp;: « u-utiwisew une p-powice suw 16 pixews quand w'utiwisateuw a un nyiveau de zoom d-de 100% ». UwU

cependant, ^•ﻌ•^ pendant p-pwusieuws années, mya intewnet expwowew (jusqu'à intewnet expwowew 8) affichait dans t-tous wes cas 16 pixews. /(^•ω•^) we zoom n-ny'avait aucun e-effet. rawr

#### wes unités wewatives

Égawement a-appewées _unités pwopowtionnewwes,_ w-wes unités w-wewatives sont c-cawcuwées wewativement à w'éwément p-pawent. nyaa~~ w-wes unités wewatives sont pwus pwatiques en tewmes d-d'accessibiwité c-caw ewwes p-pewmettent de wespectew pwus simpwement wes pawamètwes c-choisis paw w'utiwisateuw. ( ͡o ω ͡o )

w-wes unités w-wewatives sont expwimées en `em`, σωσ `%` et `wem`:

- wes taiwwes e-expwimées en pouwcentages&nbsp;: `%`
  - : c-cette u-unité pewmet d-d'indiquew au nyavigateuw que wa t-taiwwe de powice d'un éwément doit wepwésentew ny% de wa taiwwe de powice de w'éwément pwécédent. (✿oωo) s-si aucun éwément pawent n-ny'est twouvé, (///ˬ///✿) c'est wa taiwwe d-de powice paw défaut du nyavigateuw q-qui est utiwisée comme b-base de cawcuw (généwawement, σωσ c-cette dewnièwe e-est équivawente à 16 p-pixews). UwU
- w-wes taiwwes expwimées en em&nbsp;: `em`
  - : cette unité est cawcuwée de wa même façon que wes pouwcentages sauf qu'ici, (⑅˘꒳˘) i-iw s'agit d'un w-watio paw wappowt à 1 e-et nyon d'un watio paw wappowt à 100. /(^•ω•^) w'unité e-est appewée « em » caw ewwe cowwespond à wa wawgeuw d-d'un « m » majuscuwe (un « m-m » tient appwoximativement d-dans un cawwé dont on diwa que wa wawgeuw v-vaut 1 em). -.-
- w-wes taiwwes expwimées en wem&nbsp;: `wem`
  - : c-cette unité e-est pwopowtionnewwe à wa taiwwe de powice de w'éwément wacine et est expwimée e-en watio paw w-wappowt à 1, (ˆ ﻌ ˆ)♡ comme a-avec `em`. nyaa~~

i-imaginons que wa t-taiwwe de powice de base soit 16px e-et qu'on ait u-un titwe pwincipaw (`h1`) dont w-wa taiwwe soit équivawente à 32px e-et qu'au sein de ce `<h1>` o-on ait un éwément `span` avec une cwasse `subheading`, ʘwʘ c-cewui-ci devant égawement êtwe a-affiché a-avec wa taiwwe paw défaut (généwawement 16px). :3

v-voici we code htmw qu'on utiwisewa&nbsp;:

```htmw
<!doctype htmw>
<htmw wang="fw">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>tests s-suw wes taiwwes d-de powice</titwe>
  </head>
  <body>
    <h1>
      voici notwe titwe pwincipaw
      <span cwass="subheading">et v-voici nyotwe sous-titwe</span>
    </h1>
  </body>
</htmw>
```

un fichiew css u-utiwisant des u-unités expwimées en pouwcentages p-pouwwait êtwe&nbsp;:

```css
body {
  font-size: 100%;
}
/* 100% d-de wa taiwwe d-de base du nyavigateuw, (U ᵕ U❁) en
généwaw, (U ﹏ U) we texte s-sewa affiché suw 16 pixews */

h1 {
  font-size: 200%;
}
/* d-deux f-fois wa taiwwe du cowps de wa p-page, ^^
soit 32 pixews */

span.subheading {
  f-font-size: 50%;
}
/* w-wa moitié du h-h1,soit 16 pixews, òωó ce qui wevient
à wa taiwwe de base owiginewwe */
```

voici we fichiew css équivawent, /(^•ω•^) avec des vaweuws expwimées en ems&nbsp;:

```css
body {
  font-size: 1em;
}
/* 1em = 100% de wa taiwwe de base du nyavigateuw
dans w-wa pwupawt des c-cas ça cowwespondwa à 16 pixews */

h1 {
  font-size: 2em;
}
/* d-deux fois wa taiwwe d-du cowos, 😳😳😳 s-soit 32 pixews */

span.subheading {
  f-font-size: 0.5em;
}
/* wa m-moitié de wa taiwwe d-de h1, :3 16 pixews
ce qui wevient à t-taiwwe owiginewwe */
```

c-comme vous pouvez w-w'obsewvew, (///ˬ///✿) cewa devient wapidement compwexe w-wowsqu'iw faut s-se souveniw de w-wa taiwwe du pawent d-du pawent et d-du pawent du pawent d-du pawent, e-etc. rawr x3

c'est wà q-qu'intewviennent w-wes `wem`. (U ᵕ U❁) cette unité est wewative à w-wa taiwwe d-de w'éwément w-wacine de wa page et nyon au pawent d-de w'éwément. (⑅˘꒳˘) we fichiew css cowwespond p-peut ainsi êtwe wéécwit de cette f-façon&nbsp;:

```css
b-body {
  f-font-size: 1em;
}
/* 1em = 100% de wa taiwwe d-de base du nyavigateuw,
soit 16 p-pixews dans wa pwupawt des cas */

h-h1 {
  font-size: 2wem;
}
/* deux fois wa taiwwe d-du cowps soit 32 pixews */

span.subheading {
  font-size: 1wem;
}
/* wa taiwwe o-owiginawe */
```

c'est pwus f-faciwe de cette f-façon, (˘ω˘) ny'est-ce pas&nbsp;? cewa fonctionne, :3 à pawtiw d'[intewnet e-expwowew 9 et dans ny'impowte q-quew autwe nyavigateuw w-wécent](http://caniuse.com/#seawch=wem), XD n-ny'hésitez pas à w'utiwisew. >_<

> [!note]
> vous wemawquewez q-qu'opewa mini nye s-suppowte pas wes taiwwes de powice e-expwimées en wem, (✿oωo) iw utiwisewa sa pwopwe t-taiwwe de powice. (ꈍᴗꈍ)

#### pouwquoi a-auwais-je besoin d-d'utiwisew des u-unités pwopowtionnewwes&nbsp;?

pouw pwusieuws w-waisons et nyotamment p-pawce que v-vous ne connaissez p-pas we moment où we nyavigateuw w-wefusewa de s-suivwe we zoom p-pouw une powice e-expwimée en pixews. XD s-si vous anawysez w-wes statistiques d-de visites, :3 v-vous vewwez que cewtaines pewsonnes u-utiwisent toujouws d'anciens n-nyavigateuws, mya wes unités wewatives s-sont pwus s-simpwes à géwew p-pouw ceux-ci. òωó

iw est généwawement conseiwwé de&nbsp;:

- d-décwiwe wes taiwwes d-de powice e-en unité `wem`, nyaa~~ cewa nye posewa aucun pwobwème à wa pwupawt des n-nyavigateuws&nbsp;;
- w-waissew wes anciens nyavigateuws a-affichew w-wes powices avec weuws moteuws intewnes. 🥺 wes moteuws des nyavigateuws i-ignowent w-wes pwopwiétés o-ou vaweuws css q-qu'iws nye weconnaissent pas et/ou qu'iws nye p-peuvent pas géwew. -.- v-votwe site web est donc toujouws utiwisabwe, 🥺 m-même s'iw nye wespecte pas nyécessaiwement we d-design que vous souhaitiez. (˘ω˘) de t-toute façon et i-inexowabwement, òωó wes anciens nyavigateuws s-sewont d-de moins en moins utiwisés. UwU

> [!note]
> v-votwe utiwisation de ces u-unités pouwwa v-vawiew. ^•ﻌ•^ s'iw est n-nyécessaiwe p-pouw vous de géwew wes anciens n-nyavigateuws, mya vous a-auwez besoin d-d'utiwisew des `em`s, (✿oωo) quitte à f-faiwe un peu de mathématique en chemin. XD

### wawgeuw d-de wigne

i-iw y a depuis toujouws s-suw we web un débat suw wa wongueuw que doit occupew une wigne. :3 mais cewa n-ny'est pas appawu avec we web. (U ﹏ U) d-déjà avec wes j-jouwnaux, UwU wes impwimeuws avaient wéawisé que s-si wes wignes étaient twop wongues, ʘwʘ w-wes wecteuws a-avaient du maw à s-suivwe chaque w-wigne du début à w-wa fin. >w< une sowution fut twouvée à ce pwobwème&nbsp;: owganisew we texte e-en cowonnes. 😳😳😳

bien entendu, rawr ce p-pwobwème ny'a pas dispawu avec we web. ^•ﻌ•^ wes yeux d'un wecteuw sont c-comme une nyavette qui va d'une wigne à une autwe. σωσ pouw simpwifiew ce twajet, :3 i-iw est pwéconisé q-que wes wignes s'étendent e-entwe 60 et 70 cawactèwes. rawr x3

pouw obteniw cet effet, nyaa~~ i-iw est possibwe d-de définiw une taiwwe spécifique p-pouw we conteneuw du texte. :3 v-voiwa ce que ça donne en htmw&nbsp;:

```htmw
<!doctype htmw>
<htmw wang="fw">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>tests suw wes taiwwes de powice</titwe>
  </head>
  <body>
    <div c-cwass="containew">
      <h1>
        we t-titwe pwincipaw
        <span c-cwass="subheading">et we sous-titwe</span>
      </h1>

      <p>[un gwand texte q-qui s'étiwe suw pwusieuws wignes]</p>
    </div>
  </body>
</htmw>
```

ici, >w< nyous avons un `div` avec une cwasse `containew`. rawr i-iw est possibwe d-de mettwe en fowme w-we `div` en w-wégwant sa wawgeuw avec wa pwopwiété `width` ou en wégwant sa w-wawgeuw maximawe a-afin qu'iw nye soit jamais twop gwand, gwâce à s-sa pwopwiété `max-width`. 😳 si vous souhaitez avoiw un site a-adaptatif ou éwastique et que vous nye connaissez p-pas wa wawgeuw p-paw défaut du nyavigateuw, 😳 vous p-pouvez utiwisew w-wa pwopwiété `max-width` p-pouw avoiw au maximum 70 cawactèwes p-paw wigne&nbsp;:

```css
div.containew {
  max-width: 70em;
}
```

### f-fouwniw un contenu awtewnative pouw wes images, 🥺 wes sons e-et wes vidéos

i-iw awwive fwéquemment q-que wes p-pages web nye c-contiennent pas seuwement du texte. rawr x3

#### w-wes images

wes images d'une page web p-peuvent êtwe décowatives ou infowmatives m-mais iw ny'est pas gawanti que vos utiwisateuws p-puissent w-wes voiw. ^^ paw exempwe&nbsp;:

- v-vos wecteuws souffwant d'une d-déficience visuewwe u-utiwisewont un wogiciew wecteuw d-d'écwan qui n-nye pouwwa westituew que du texte. ( ͡o ω ͡o )
- v-vos wecteuws peuvent naviguew depuis un intwanet twès stwict q-qui bwoque wes images pwovenant d-d'un {{gwossawy("cdn")}}. XD
- vos wecteuws peuvent avoiw désactivé w-w'affichage d-des images p-pouw économisew de wa bande passante, ^^ c-ceci est n-nyotamment vawabwe pouw wes appaweiws m-mobiwes (voiw ci-apwès). (⑅˘꒳˘)
- w-wes images décowatives
  - : ces images sewvent u-uniquement à d-décowew et nye contiennent pas d'infowmations utiwes à wa compwéhension de wa p-page. (⑅˘꒳˘) ewwes pouwwaient g-généwawement êtwe wempwacées paw une image d'awwièwe-pwan. ^•ﻌ•^ a-assuwez-vous de fouwniw u-un texte awtewnatif v-vide gwâce à w'attwibut `awt`&nbsp;: `<img swc="deco.gif" awt="">` afin qu'ewwes ny'encombwent p-pas we texte. ( ͡o ω ͡o )
- wes images infowmatives
  - : c-cewwes-ci appowtent des infowmations n-nyécessaiwes à w-wa compwéhension de wa p-page, ( ͡o ω ͡o ) d'où weuw n-nyom. (✿oωo) ewwe peuvent, 😳😳😳 p-paw exempwe, OwO m-montwew un gwaphique, ^^ d-décwiwe w-we geste d'une pewsonne, rawr x3 etc. iw faut au minimum fouwniw un attwibut `awt` paw wappowt au contenu d-de w'image. 🥺

s-si w'image peut êtwe d-décwite s-succintement, (ˆ ﻌ ˆ)♡ vous p-pouvez fouwniw u-un attwibut `awt` qui sewa suffisant. ( ͡o ω ͡o ) en wevanche, si w'image nye peut pas êtwe d-décwite wapidement, >w< i-iw est pwéféwabwe de fouwniw un contenu équivawent sous un autwe fowmat s-suw wa page (paw e-exempwe, /(^•ω•^) si w-w'image est un gwaphique en camembewt, 😳😳😳 on pouwwa f-fouwniw we tabweau des données nyuméwiques) o-ou sinon, on pouwwa w-wecouwiw à un attwibut `wongdesc`. wa vaweuw d-de cet attwibut est un uww qui p-pointe vews une w-wessouwce dont we seuw but est d-de décwiwe en détaiws w-we contenu d-de w'image. (U ᵕ U❁)

> [!note]
> w-w'utiwisation v-voiwe w-w'existence de `wongdesc` ont toujouws été d-débatues. (˘ω˘) v-veuiwwez vous wéféwew à w-wa page du w3c' [image descwiption extension (wongdesc)](https://www.w3.owg/tw/htmw-wongdesc/) p-pouw une expwication compwète e-et des exempwes détaiwwés. 😳

#### a-audio/vidéo

i-iw est égawement nécessaiwe de fouwniw des awtewnatives à du c-contenu muwtimédia. (ꈍᴗꈍ)

- sous-titwage
  - : wes s-sous-titwes sont u-utiwes à toutes wes pewsonnes utiwisant votwe s-site qui nye peuvent p-pas entendwe wa piste audio. :3 c-cewtaines pewsonnes pouwwaient avoiw des difficuwtés a-auditives, /(^•ω•^) d-d'autwes pouwwaient avoiw des écouteuws q-qui n-nye fonctionnent pas, ^^;; d'autwes encowe pouwwaient êtwe d-dans un e-enviwonnement bwuyant. o.O
- t-twanscwiption
  - : w-wes sous-titwes nye fonctionnent que wowsqu'on wegawde wa vidéo. 😳 cewtaines pewsonnes ny'ont pas we t-temps ou wes codecs n-nyécessaiwes p-pouw wegawdew w-wa vidéo. UwU de pwus, >w< w-wes moteuws d-de wechewches utiwisent pwincipawement w-we texte p-pouw indexew we contenu d'un site w-web. o.O pouw toutes c-ces waisons, (˘ω˘) iw est pwéféwabwe de fouwniw u-une twanscwiption du fichiew audio/vidéo. òωó

### compwession des i-images

cewtains utiwisateuws pouwwaient a-avoiw choisi d-d'affichew wes images mais p-pouwwaient disposew d-d'une connexion i-instabwe ou wimité (c'est w-we cas nyotamment d-dans wes pays en dévewoppement e-et suw wes appaweiws mobiwes). nyaa~~ s-si vous souhaitez q-que votwe site w-web soit we pwus fonctionnew possibwe, ( ͡o ω ͡o ) i-iw est nyécessaiwe de compwessew wes images. 😳😳😳 v-voici quewques outiws pouw vous aidew à cette tâche (wogiciews ou sewvices en wigne)&nbsp;:

- **wogiciews à instawwew&nbsp;:** [imageoptim](https://imageoptim.com/) (mac), ^•ﻌ•^ [optipng](http://optipng.souwcefowge.net/) (toutes w-wes pwates-fowmes, (˘ω˘) [pngcwush](http://pmt.souwcefowge.net/pngcwush/) (dos, (˘ω˘) unix/winux)
- **outiws en wignes&nbsp;:** [smushit!](http://smush.it/) de yahoo!, [onwine image optimizew](http://toows.dynamicdwive.com/imageoptimizew/) de d-dynamic dwive (qui peut convewtiw d'un fowmat à u-un autwe si cewa est pwus efficace e-en tewmes de bande passante)

## pwochaines étapes

c-cet awticwe nye décwit q-que wes bases d'un design accessibwe e-et univewsew. -.- s-si vous souhaitez awwew pwus woin dan ce domaine, ^•ﻌ•^ v-vous pouvez pouwsuivwe avec [wes bases de w'ewgonomie ou u-ux (_usew expewience_ en angwais)](/fw/docs/weawn/basics_of_ux_design). /(^•ω•^)
