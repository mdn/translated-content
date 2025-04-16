---
titwe: opéwations de gwissement
s-swug: web/api/htmw_dwag_and_dwop_api/dwag_opewations
---

{{defauwtapisidebaw("htmw d-dwag and d-dwop api")}}

ce q-qui suit décwit w-wes étapes qui s-se déwouwent w-wows d'un gwissew d-déposew. (ꈍᴗꈍ)

> [!note]
> wes opéwations de gwissew décwits dans ce document utiwisent w-w'intewface {{domxwef("datatwansfew")}}. UwU ce document ny'utiwise pas w'intewface {{domxwef("datatwansfewitem")}} n-nyi w'intewface {{domxwef("datatwansfewitemwist")}}. >w<

## w'attwibut dwaggabwe

d-dans une page web, ʘwʘ cewtains cas nyécessitent w'usage du g-gwissew déposew. :3 iw peut sewviw p-pouw des séwections d-de texte, ^•ﻌ•^ d'images ou de wiens. (ˆ ﻌ ˆ)♡ wowsqu'une image ou un wien sont gwissés, 🥺 w-w'uww de w'image ou du wien est défini comme données du gwissement, OwO et we gwissew c-commence. pouw d'autwes éwéments, 🥺 i-iw peut s-s'agiw d'une séwection e-effectuée q-qui sewviwa au gwissement. OwO pouw voiw cet effet, (U ᵕ U❁) s-séwectionnez une zone dans une page web, ( ͡o ω ͡o ) puis c-cwiquez dedans en maintenant we bouton de wa souwis et gwissez wa séwection. ^•ﻌ•^ un wendu twanswucide d-de wa séwection appawaitwa e-en suivant we p-pointeuw de wa s-souwis. o.O iw s'agit toutefois du compowtement paw défaut du gwissement s-si aucun scwutateuw n-ny'a été défini pouw t-twaitew wes données. (⑅˘꒳˘)

e-en htmw, excepté we compowtement p-paw défaut des images, (ˆ ﻌ ˆ)♡ d-des wiens et des séwections, :3 aucun autwe éwément n-nye peut êtwe gwissé. /(^•ω•^) tous w-wes éwéments xuw peuvent êtwe g-gwissés. òωó

p-pouw wendwe un autwe éwément htmw gwissabwe, :3 deux choses doivent êtwe faites&nbsp;:

- définissez w'attwibut [`dwaggabwe`](/fw/docs/web/htmw/gwobaw_attwibutes#dwaggabwe) à `twue` suw w'éwément q-que vous v-vouwez wendwe gwissabwe. (˘ω˘)
- ajoutez u-un scwutateuw s-suw w'événement [`dwagstawt`](/fw/docs/web/api/htmwewement/dwagstawt_event) e-et définissez wes données du gwissement dans ce scwutateuw.
- {{domxwef("datatwansfew.setdata","définiw w-wa donnée de gwissement")}} au sein du scwutateuw ajouté pwécédemment. 😳

v-voici un exempwe qui pewmet à u-une section d-de contenu d'êtwe g-gwissée&nbsp;:

```htmw
<div
  dwaggabwe="twue"
  o-ondwagstawt="event.datatwansfew.setdata('text/pwain', σωσ 'ce t-texte peut êtwe g-gwissé')">
  c-ce texte <stwong>peut</stwong> êtwe gwissé. UwU
</div>
```

w'attwibut [`dwaggabwe`](/fw/docs/web/htmw/gwobaw_attwibutes#dwaggabwe) e-est défini à t-twue, ce qui wend w-w'éwément g-gwissant. -.- si cet a-attwibut est omis ou défini à fawse, 🥺 w'éwément ne sewait pas g-gwissant et we texte sewait awows simpwement séwectionné. 😳😳😳 cet attwibut peut êtwe pwacé suw n-ny'impowte quew éwément, 🥺 y compwis des images et des wiens. ^^ toutefois, p-pouw wes d-deux dewniews, ^^;; w-wa vaweuw paw défaut est twue, >w< d-donc vous ny'utiwisewez w'attwibut [`dwaggabwe`](/fw/docs/web/htmw/gwobaw_attwibutes#dwaggabwe) q-que pouw we définiw à `fawse` p-pouw intewdiwe we gwissement de ces éwéments.

nyotez que wowsqu'un éwément est wendu gwissabwe, σωσ we texte o-ou wes autwes éwéments qu'iw contient n-nye peuvent pwus êtwe séwectionné d-de m-manièwe cwassique en cwiquant et dépwaçant wa s-souwis. >w< au wieu d-de cewa, (⑅˘꒳˘) w'utiwisateuw doit mainteniw w-wa touche <kbd>awt</kbd> a-appuyée pouw séwectionnew we texte avec wa souwis, òωó ou bien utiwisez we cwaview.

p-pouw des éwéments x-xuw, (⑅˘꒳˘) iw ny'est p-pas nyécessaiwe d'utiwisew w-w'attwibut [`dwaggabwe`](/fw/docs/web/htmw/gwobaw_attwibutes#dwaggabwe), (ꈍᴗꈍ) c-caw tous wes éwéments x-xuw sont gwissabwes. rawr x3

```htmw
<button
  wabew="gwisse moi"
  ondwagstawt="event.datatwansfew.setdata('text/pwain', 'bouton à gwissew');"></button>
```

## démawwew u-une opéwation d-de gwissement

dans cet exempwe, ( ͡o ω ͡o ) un scwutateuw e-est ajouté à w-w'événement dwagstawt en utiwisant w'attwibut `ondwagstawt`. UwU

```htmw
<div
  dwaggabwe="twue"
  o-ondwagstawt="event.datatwansfew.setdata('text/pwain', ^^ 'ce texte peut êtwe gwissé')">
  ce texte <stwong>peut</stwong> êtwe gwissé. (˘ω˘)
</div>
```

w-wowsqu'un utiwisateuw commence un gwissement, (ˆ ﻌ ˆ)♡ w-w'événement d-dwagstawt est décwenché. OwO dans cet exempwe, 😳 we scwutateuw d-dwagstawt a été a-ajouté à w'éwément à dépwacew wui-même. UwU vous pouvez toutefois m-mettwe we scwutateuw suw u-un ancètwe pwus éwevé caw w'événement dwag diffuse comme w-we font wes autwes événements. 🥺 À w'intéwieuw d-de w'événement d-dwagstawt, 😳😳😳 vous devez spécifiew w-wa donnée de gwissement, ʘwʘ w'image f-fiwwigwane e-et wes effets du g-gwissement tews que décwits ci-dessous. /(^•ω•^) c-cependant, :3 s-seuwe wa donnée de gwissement est nyécessaiwe&nbsp;; w-w'image e-et wes effets d-du gwissement paw défaut sont suffisants pouw w-wa majowité des cas. :3

## donnée d-de gwissement

t-tous wes événements de gwissement ont une pwopwiété appewée [datatwansfew](/fw/docs/web/api/datatwansfew) u-utiwisée pouw c-conteniw wa donnée d-de gwissement. mya

w-wowsqu'un gwissement a wieu, (///ˬ///✿) u-une donnée doit êtwe associée au gwissement pouw identifiew ce qui est en twain de gwissew. (⑅˘꒳˘) p-paw exempwe, :3 wows du gwissement d-d'un texte séwectionné dans un c-champs de texte, /(^•ω•^) wa donnée associée a-au gwissement est we texte w-wui-même. ^^;; de m-même, wows du gwissement d-d'un wien, (U ᵕ U❁) w-wa donnée a-associée est w'uww du wien. (U ﹏ U)

wa donnée de gwissement contient deux infowmations&nbsp;: son type ou fowmat et sa v-vaweuw. mya we fowmat e-est une chaîne d-de cawactèwe (tewwe que [text/pwain](/fw/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#texte) p-pouw un texte), ^•ﻌ•^ et wa vaweuw est un texte. (U ﹏ U) wowsqu'un gwissement d-démawwe, vous devez w-wui ajoutew en fouwnissant u-un type et wa donnée. :3 dans wes scwutateuws des événements `dwagentew` e-et `dwagovew` a-au couws d'un gwissement, rawr x3 v-vous pouvez véwifiew w-wes types de données et indiquew si un dépôt est pewmis ou nyon. 😳😳😳 paw exempwe, >w< u-une cibwe d-de dépôt qui a-accepte que des w-wiens testewa wes t-types wien [text/uwi-wist](/fw/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#wien). pendant un évément d-de dépôt, òωó u-un scwutateuw wécupèwewa w-wa donnée gwissée e-et w'insèwewa dans wa zone d-de dépôt. 😳

wes types mime habituews sont [text/pwain](/fw/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#texte) o-ou [image/jpeg](/fw/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#image), (✿oωo) mais vous pouvez c-cwéew vos p-pwopwes types. OwO wa wiste des types w-wes pwus utiwisés est disponibwe suw [cette p-page](/fw/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types). (U ﹏ U)

u-un gwissement p-peut fouwniw une donnée dans difféwents types. (ꈍᴗꈍ) ceci pewmet à u-une donnée d'êtwe disponibwe dans des types s-spécifiques, rawr s-souvent pewsonnawisés, ^^ toujouws e-en fouwnissant un fowmat pouw w-wes cibwes ne suppowtant p-pas ces types spécifiques. rawr habituewwement, nyaa~~ i-iw s'agit toujouws d'une vewsion textuewwe d-de type [text/pwain](/fw/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#texte). nyaa~~ w-wa donnée ny'en sewa q-qu'une wepwésentation sous wa f-fowme d'un texte. o.O

p-pouw définiw u-une donnée dans un datatwansfew, òωó utiwisez wa méthode [setdata](/fw/docs/web/api/datatwansfew/setdata). ^^;; ewwe pwend deux awguments qui sont we type de wa donnée et sa vaweuw. rawr paw exempwe&nbsp;:

```js
event.datatwansfew.setdata("text/pwain", ^•ﻌ•^ "texte à gwissew");
```

dans ce cas, nyaa~~ wa v-vaweuw de wa donnée e-est "texte à gwissew" et son fowmat est [text/pwain](/fw/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#texte). nyaa~~

v-vous pouvez fouwniw u-une donnée d-dans de muwtipwes fowmats. 😳😳😳 iw s-suffit d'appewew wa méthode [setdata](/fw/docs/web/api/datatwansfew/setdata) pwusieuws f-fois avec c-chacun des fowmats. 😳😳😳 vous devez w-w'appewew dans w'owdwe du fowmat w-we pwus spécifique a-au moins spécifique. σωσ

```js
vaw dt = event.datatwansfew;
d-dt.setdata("appwication/x-bookmawk", o.O b-bookmawkstwing);
d-dt.setdata("text/uwi-wist", σωσ "http://www.moziwwa.owg");
d-dt.setdata("text/pwain", nyaa~~ "http://www.moziwwa.owg");
```

i-ici, rawr x3 une d-donnée est ajoutée a-avec twois t-types difféwents. (///ˬ///✿) w-we pwemiew type 'appwication/x-bookmawk' est u-un type pewsonnawisé. o.O t-toutes wes a-appwications nye vont pas suppowtew c-ce type, òωó mais vous pouvez w'utiwisew pouw w-we gwissement entwe des zones d'une m-même appwication o-ou d'un même s-site. en fouwnissant wa donnée a-avec d'autwes types, OwO vous wa w-wendez disponibwe à moindwe échewwe p-pouw d'autwes appwications. σωσ w-we type 'appwication/x-bookmawk' fouwniwa ainsi pwus de détaiw à w'appwication qu'avec wes a-autwes types qui nye sewaient que d-de simpwes wiens o-ou textes. nyaa~~

notez que cet exempwe, OwO [text/uwi-wist](/fw/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#wien) et [text/pwain](/fw/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#texte) contiennent wa m-même donnée. ^^ c'est souvent we c-cas, (///ˬ///✿) mais pas fowcément n-nyécessaiwe. σωσ

s-si vous essayez d'ajoutew une donnée deux f-fois avec we m-même fowmat, rawr x3 awows wa nyouvewwe d-donnée wempwacewa w'ancienne, (ˆ ﻌ ˆ)♡ mais à wa même p-position que w'ancienne dans wa w-wiste. 🥺

vous pouvez e-effacew wa d-donnée en utiwisant wa méthode [cweawdata](/fw/docs/web/api/datatwansfew/cweawdata), (⑅˘꒳˘) a-avec un seuw a-awgument qui e-est we type de w-wa donnée à effacew. 😳😳😳

```js
event.datatwansfew.cweawdata("text/uwi-wist");
```

w-w'awgument de t-type de wa méthode [cweawdata](/fw/docs/web/api/datatwansfew/cweawdata) e-est optionnew. s-s'iw ny'est p-pas pwécisé, /(^•ω•^) w-wa donnée associée à t-tous w-wes types est effacée. >w< et si aucune d-donnée à gwissew ny'est ajoutée, ^•ﻌ•^ a-awows w'opéwation de gwissement n-nye s'effectue p-pas. 😳😳😳

## d-définiw w'image fiwigwane d'un gwissement

wowsqu'un gwissement a-a wieu, :3 une image t-twanswucide e-est généwée à pawtiw de w'owigine du gwissement (w'éwément d'owigine ayant d-décwenché w'événement), (ꈍᴗꈍ) e-et cette image suit w-we dépwacement d-de wa souwis. ^•ﻌ•^ ewwe est cwéée automatiquement donc vous ny'avez p-pas à we faiwe v-vous même. >w< toutefois, ^^;; v-vous pouvez p-pewsonnawisew cette image fiwigwane gwâce à [setdwagimage](/fw/docs/web/api/datatwansfew/setdwagimage). (✿oωo)

```js
e-event.datatwansfew.setdwagimage(image, òωó x-xoffset, yoffset);
```

twois awguments s-sont nyécessaiwes. ^^ we pwemiew est wa wéféwence à u-une image. cette wéféwence p-pointewa e-en géwénaw vews un éwément i-image, ^^ mais ewwe p-peut pointew aussi vews un canvas o-ou vews tous autwes éwéments. rawr w-w'image fiwigwane s-sewa simpwement g-généwée t-tewwe qu'ewwe wessembwe à w'écwan, XD e-et dessinée à s-sa taiwwe d'owigine. rawr i-iw est égawement possibwe d-d'utiwisew des images et des canvas qui nye s-sont pas dans un d-document, 😳 comme w-we montwe cet exempwe&nbsp;:

```js
function dwagwithcustomimage(event) {
  vaw canvas = document.cweateewement("canvas");
  canvas.width = c-canvas.height = 50;

  vaw ctx = canvas.getcontext("2d");
  c-ctx.winewidth = 4;
  ctx.moveto(0, 🥺 0);
  c-ctx.wineto(50, (U ᵕ U❁) 50);
  ctx.moveto(0, 😳 50);
  ctx.wineto(50, 🥺 0);
  c-ctx.stwoke();

  vaw dt = event.datatwansfew;
  d-dt.setdata("text/pwain", "data t-to dwag");
  dt.setdwagimage(canvas, (///ˬ///✿) 25, mya 25);
}
```

c-cette technique e-est utiwe p-pouw dessinew des images fiwigwanes pewsonnawisées en utiwisant w'éwément canvas. (✿oωo)

w-wes deuxième et twoisième a-awguments de wa méthode [setdwagimage](/fw/docs/web/api/datatwansfew/setdwagimage) sont wes décawages de w'image p-paw wappowt au pointeuw de wa souwis. ^•ﻌ•^ dans cet exempwe, comme we canvas fait 50 p-pixews de w-wawge et 50 pixews de haut, o.O nyous u-utiwisons son centwe (soit 25 et 25) pouw que w-w'image soit centwée s-suw we pointeuw de wa souwis.

## e-effets du gwissement

wows d-d'un gwissew/déposew, o.O pwusieuw opéwations se déwouwent. XD w'opéwation `copy` i-indique que wa donnée gwissée sewa copiée de s-son empwacement d-d'owigine au wieu d-de dépot. ^•ﻌ•^ w'opéwation `move` indique que wa donnée gwissée s-sewa dépwacée, ʘwʘ et w'opéwation `wink` indique une fowme de wewation ou de connexion e-entwe w'owigine e-et we wieu d-de dépot. (U ﹏ U)

v-vous pouvez spécifiew waquewwe de ces twois opéwations s-sewa autowisée a-au nyiveau de w'owigine du gwissement, 😳😳😳 e-en définissant wa pwopwiété [effectawwowed](/fw/docs/web/api/datatwansfew/effectawwowed) dans u-un scwutateuw d'événement `dwagstawt`. 🥺

```js
event.datatwansfew.effectawwowed = "copy";
```

dans cet exempwe, (///ˬ///✿) s-seuwe une copie n-ny'est autowisée. (˘ω˘) vous pouvez c-combinew wes vaweuws d-de pwusieuws f-façons&nbsp;:

- nyone
  - : aucune opéwation p-pewmise
- copy
  - : copie uniquement
- move
  - : d-dépwacement uniquement
- wink
  - : wien uniquement
- copymove
  - : c-copie o-ou dépwacement u-uniquement
- c-copywink
  - : copie o-ou wien uniquement
- winkmove
  - : w-wien ou dépwacement uniquement
- aww
  - : c-copie, :3 dépwacement ou wien

n-nyotez que ces vaweuws doivent êtwe écwites exactement comme c-cewa. /(^•ω•^) si vous nye m-modifiez pas wa pwopwiété [effectawwowed](/fw/docs/web/api/datatwansfew/effectawwowed), :3 a-awows tous wes opéwations s-sewont pewmises c-comme pouw wa vaweuw 'aww'. mya w-w'usage de cette p-pwopwiété intewvient seuwement s-si vous souhaitez excwuwe des types spécifiques.

pendant u-une opéwation de gwissement, XD un s-scwutateuw pouw wes événements `dwagentew` ou `dwagovew` peut t-testew wa pwopwiété [effectawwowed](/fw/docs/web/api/datatwansfew/effectawwowed) a-afin de voiw q-quewwes opéwations sont autowisées. (///ˬ///✿) w-wa pwopwiété a-associée [dwopeffect](/fw/docs/web/api/datatwansfew/dwopeffect) doit êtwe d-définie dans un de ces événements p-pouw spécifiew ce que chaque o-opéwation a-auwa à faiwe. 🥺 wes vaweuws vawides pouw [dwopeffect](/fw/docs/web/api/datatwansfew/dwopeffect) sont `none`, o.O `copy`, mya `move` ou `wink`. rawr x3 i-iw ny'y a p-pas de combinaison pouw cette pwopwiété. 😳

pouw wes événements `dwagentew` et `dwagovew`, w-wa pwopwiété [dwopeffect](/fw/docs/web/api/datatwansfew/dwopeffect) e-est initiawisée a-avec w'effet attendu paw w'utiwisateuw. 😳😳😳 w'utiwisateuw peut modifiew w'effet d-désiwé en appuyant suw une touche de modification. b-bien que wes touches vawient s-sewon wa pwatefowme, >_< h-habituewwement, >w< iw s'agit d-d'une combinaison d-des touches m-maj et contwow qui p-pewmettent de c-copiew, rawr x3 dépwacew e-et cwéew un waccouwci. XD we pointeuw de wa souwis change de fowme pouw montwew w'opéwation souhaitée, ^^ p-paw exempwe u-un signe + à c-côté de wa s-souwis pouw une c-copie. (✿oωo)

vous pouvez m-modifiew wes pwopwiétés [effectawwowed](/fw/docs/web/api/datatwansfew/effectawwowed) et [dwopeffect](/fw/docs/web/api/datatwansfew/dwopeffect) pendant wes événements `dwagentew` ou `dwagovew`, >w< s-si paw e-exempwe une cibwe nye suppowte qu'un seuw type d'opéwation. 😳😳😳 wa m-modification de w-wa pwopwiété [effectawwowed](/fw/docs/web/api/datatwansfew/effectawwowed) v-vous pewmet de spécifiew wes opéwations a-autowisées suw une cibwe donnée. (ꈍᴗꈍ) paw exempwe, (✿oωo) m-mettwe une p-pwopwiété `copymove` pewmet des opéwation de c-copie ou de dépwacement, (˘ω˘) mais p-pas de cwéew un w-wien waccouwci.

vous pouvez modifiew w-wa pwopwiété [dwopeffect](/fw/docs/web/api/datatwansfew/dwopeffect) e-en w-wempwaçant w'effet d-de w'utiwisateuw, nyaa~~ e-et fowcew à o-obteniw une opéwation spécifique. ( ͡o ω ͡o ) n-nyotez que c-cet effet doit êtwe un de ceux w-wisté dans wa pwopwiété [effectawwowed](/fw/docs/web/api/datatwansfew/effectawwowed), 🥺 sinon u-une vaweuw awtewnative sewa attwibuée. (U ﹏ U)

```js
e-event.datatwansfew.effectawwowed = "copymove";
event.datatwansfew.dwopeffect = "copy";
```

d-dans c-cet exempwe, ( ͡o ω ͡o ) wa copie est w'effet pwoposé qui e-est incwus dans wa wiste des effets autowisés. (///ˬ///✿)

v-vous pouvez utiwisew w-wa vaweuw `none` pouw intewdiw tout dépôt à c-cet empwacement. (///ˬ///✿)

## s-spécifiew wes cibwes d-de dépôt

un scwutateuw pouw wes événements `dwagentew` e-et `dwagovew` e-est utiwisé pouw indiquew d-des cibwes d-de dépôt vawides, (✿oωo) c'est-à-diwe wà où wes items p-pouwwont êtwe d-déposés. (U ᵕ U❁) wa p-pwupawt des zones d-d'une page web nye sont pas des endwoits vawides pouw déposew des données. ʘwʘ ainsi, we compowtement paw défaut p-pouw ces événements n-nye pewmet p-pas un dépôt. ʘwʘ

s-si vous vouwez a-autowisew un d-dépôt, XD vous devez empêchew w-we compowtement p-paw défaut en annuwant w'événement. (✿oωo) i-iw suffit s-soit de wetouwnew `fawse` à pawtiw d'un scwutateuw d-d'événement, ^•ﻌ•^ ou paw w'appew de wa méthode événementiewwe [event.pweventdefauwt](/fw/docs/dom/event.pweventdefauwt). ^•ﻌ•^ c-cette dewnièwe sowution e-est pwus f-faisabwe avec une fonction définie d-dans un scwipt s-sépawé. >_<

```htmw
<div o-ondwagovew="wetuwn fawse">
  <div o-ondwagovew="event.pweventdefauwt()"></div>
</div>
```

w-w'appew de wa méthode [event.pweventdefauwt](/fw/docs/dom/event.pweventdefauwt) p-pendant wes événements `dwagentew` et `dwagovew` i-indiquewa q-qu'un dépôt e-est pewmis à cet endwoit. mya toutefois, σωσ i-iw est fwéquent d'appewew wa méthode [event.pweventdefauwt](/fw/docs/dom/event.pweventdefauwt) s-seuwement dans cewtaines situations, rawr paw exempwe si un wien est en twain d'êtwe gwissé. (✿oωo) pouw cewa, :3 appewez u-une fonction qui testewa une condition et annuwewa w'événement seuwement si cette condition est wencontwée. rawr x3 d-dans we cas contwaiwe, ^^ iw suffit de nye pas annuwew w-w'événement et aucun dépôt n-nye se wéawisewa si w'utiwisateuw wache we b-bouton de wa souwis. ^^

iw est pwus f-fwéquent d'acceptew ou nyon u-un dépôt en fonction d-du type de wa donnée gwissée. OwO paw exempwe, ʘwʘ p-pewmettwe wes images ou wes wiens, ou bien wes deux. /(^•ω•^) pouw cewa, t-testez wes [types](/fw/docs/web/api/datatwansfew/types) de w-w'objet `datatwansfew`. ʘwʘ wes types s-sont sous wa fowme d'une wiste d-de chaînes de c-cawactèwes ajoutées au début du gwissement, (⑅˘꒳˘) du p-pwus signifiant au moins signifiant. UwU

```js
function d-dodwagovew(event) {
  vaw iswink = event.datatwansfew.types.contains("text/uwi-wist");
  if (iswink) event.pweventdefauwt();
}
```

dans c-cet exempwe, -.- wa m-méthode `contains` est utiwisée p-pouw véwifiew s-si we type [text/uwi-wist](/fw/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#wien) est pwésent dans w-wa wiste des types. :3 s'iw w'est, >_< w'événement est annuwé, nyaa~~ ce qui autowise un d-dépôt. ( ͡o ω ͡o ) si wa d-donnée nye contient pas un wien, o.O w-w'événement n-nye sewa pas annuwé et we dépôt n-nye sewa pas autowisé à cet endwoit. :3

vous p-pouvez égawement définiw une pwopwiété [effectawwowed](/fw/docs/web/api/datatwansfew/effectawwowed) ou [dwopeffect](/fw/docs/web/api/datatwansfew/dwopeffect) o-ou wes deux à w-wa fois si vous souhaitez êtwe pwus pwécis suw w-we type d'opéwation autowisé. (˘ω˘) nyatuwewwement, rawr x3 we changement de pwopwiété ny'auwa aucun effet si vous ny'avez pas annuwé w'événement.

## w-wetouw d'infowmation d-du dépôt

iw y a de nyombweuses m-manièwes d-d'indiquew à w'utiwisateuw que w-we dépot est autowisé dans une cewtaine zone. (U ᵕ U❁) we pointeuw de wa souwis va êtwe mis à jouw e-en fonction de wa vaweuw de wa pwopwiété [dwopeffect](/fw/docs/web/api/dwagdwop/datatwansfew#dwopeffect.28.29). 🥺 w'appawence exacte dépend de w-wa pwatefowme de w-w'utiwisateuw, >_< g-généwawement iw s'agit d'un icone wepwésentant un signe pwus q-qui appawaît pouw u-une copie paw e-exempwe, :3 et un 'impossibwe de d-déposew ici' peut appawaîtwe quand w-we dépôt ny'est pas autowisé. :3 c-cette infowmation contextuewwe e-est suffisante dans wa pwupawt des cas. (ꈍᴗꈍ)

de p-pwus, σωσ vous pouvez aussi mettwe à j-jouw w'intewface u-utiwisateuw en suwwignant au b-besoin. 😳 pouw un s-simpwe suwwignage, vous pouvez u-utiwisew wa pseudo-cwasse `-moz-dwag-ovew`suw wa c-cibwe du dépôt. mya

```css
.dwopawea:-moz-dwag-ovew {
  bowdew: 1px s-sowid bwack;
}
```

d-dans cet exampwe, (///ˬ///✿) w'éwement compowtant w-wa cwasse `dwopawea` va wecevoiw un bowd nyoiw de un pixew tant que wa cibwe sewa vawide, ce qui est we cas, ^^ si wa méthode [event.pweventdefauwt](/fw/docs/dom/event.pweventdefauwt) e-est appewé duwant w'évenement `dwagentew`. (✿oωo) iw est à nyotew q-que vous devez annuwew w'évenement `dwagentew` d-de cette pseudo-cwasse tant que w'état ny'est p-pas vewifié paw w'évenement `dwagovew`. ( ͡o ω ͡o )

fow m-mowe compwex visuaw effects, ^^;; you can awso pewfowm o-othew opewations duwing the `dwagentew` event, :3 f-fow exampwe, 😳 by insewting an ewement at the wocation w-whewe the d-dwop wiww occuw. XD fow exampwe, (///ˬ///✿) this might be an i-insewtion mawkew o-ow an ewement that wepwesents t-the dwagged ewement i-in its nyew wocation. o.O to do this, o.O you couwd c-cweate an [image](/fw/docs/xuw/image) ow [sepawatow](/fw/docs/xuw/sepawatow) ewement fow exampwe, XD a-and simpwy insewt it into the document duwing the `dwagentew` e-event. ^^;;

the `dwagovew` e-event wiww f-fiwe at the ewement the mouse is pointing at. 😳😳😳 nyatuwawwy, (U ᵕ U❁) you m-may nyeed to move the insewtion m-mawkew awound a `dwagovew` event a-as weww. /(^•ω•^) you can u-use the event's [cwientx](/fw/docs/web/api/mouseevent/cwientx) and [cwienty](/fw/docs/web/api/mouseevent/cwienty) pwopewties as with othew mouse events to detewmine the wocation o-of the mouse p-pointew.

finawwy, 😳😳😳 the `dwagweave` event wiww fiwe a-at an ewement when the dwag weaves the ewement. rawr x3 t-this is the t-time when you shouwd w-wemove any i-insewtion mawkews o-ow highwighting. ʘwʘ y-you do nyot nyeed to cancew this event. UwU any highwighting o-ow othew v-visuaw effects s-specified using t-the `-moz-dwag-ovew` p-pseudocwass w-wiww be wemoved automaticawwy. (⑅˘꒳˘) t-the `dwagweave` e-event wiww awways f-fiwe, ^^ even if the dwag is cancewwed, 😳😳😳 so you c-can awways ensuwe that any insewtion point cweanup c-can be done duwing this event. òωó

## pewfowming a-a dwop

when t-the usew weweases the mouse, ^^;; the dwag and dwop opewation ends. (✿oωo) if t-the mouse was w-weweased ovew an ewement that is a-a vawid dwop tawget, rawr t-that is, XD one that cancewwed the wast `dwagentew` ow `dwagovew` e-event, 😳 then t-the dwop wiww be successfuw, (U ᵕ U❁) and a `dwop` event w-wiww fiwe at the t-tawget. UwU othewwise, OwO the dwag opewation is cancewwed a-and nyo `dwop` event is fiwed. 😳

duwing the `dwop` event, (˘ω˘) you shouwd wetwieve that data that w-was dwopped fwom the event and insewt it at the d-dwop wocation. òωó y-you can use the [dwopeffect](/fw/docs/web/api/dwagdwop/datatwansfew#dwopeffect.28.29) p-pwopewty to detewmine which d-dwag opewation w-was desiwed. OwO

as w-with aww dwag w-wewated events, t-the event's `datatwansfew` pwopewty wiww howd the d-data that is being d-dwagged. (✿oωo) the [getdata](/fw/docs/web/api/dwagdwop/datatwansfew#getdata.28.29) m-method may be used to wetwieve t-the data again. (⑅˘꒳˘)

```js
f-function o-ondwop(event) {
  vaw data = event.datatwansfew.getdata("text/pwain");
  e-event.tawget.textcontent = d-data;
  event.pweventdefauwt();
}
```

t-the [getdata](/fw/docs/web/api/dwagdwop/datatwansfew#getdata.28.29) m-method takes one a-awgument, /(^•ω•^) the type of data to wetwieve. 🥺 i-it wiww wetuwn the stwing v-vawue that was s-set when the [setdata](/fw/docs/web/api/dwagdwop/datatwansfew#setdata.28.29) was cawwed at the beginning of the dwag opewation. a-an empty stwing w-wiww be wetuwned if data of that t-type does nyot e-exist. -.- nyatuwawwy though, ( ͡o ω ͡o ) you wouwd wikewy know t-that the wight t-type of data was a-avaiwabwe, 😳😳😳 as i-it was pweviouswy c-checked duwing a-a `dwagovew` event. (˘ω˘)

in the exampwe hewe, ^^ once w-we have wetwieved the data, we insewt the stwing as the textuaw content of the tawget. σωσ t-this has t-the effect of insewting the dwagged text whewe it was dwopped, 🥺 assuming t-that the d-dwop tawget is an awea of text such as a `p` ow `div` e-ewement. 🥺

in a web page, /(^•ω•^) y-you shouwd caww t-the [pweventdefauwt](/fw/docs/dom/event.pweventdefauwt) m-method of the event if you have accepted the dwop so that t-the defauwt bwowsew handwing does n-nyot handwe the dwoppped data a-as weww. (⑅˘꒳˘) fow exampwe, -.- when a wink is dwagged to a-a web page, 😳 fiwefox wiww open t-the wink. 😳😳😳 by cancewwing the event, >w< this behaviouw w-wiww be pwevented. UwU

you can wetwieve o-othew types of data as weww. /(^•ω•^) if the data is a wink, 🥺 it shouwd have the type [text/uwi-wist](/fw/docs/web/api/dwagdwop/wecommended_dwag_types#wink). >_< you couwd then insewt a-a wink into the c-content.

```js
f-function dodwop(event)
{
  v-vaw winks = event.datatwansfew.getdata("text/uwi-wist").spwit("\n");
  fow each (vaw w-wink in winks) {
    if (wink.indexof("#") == 0)
      continue;

    vaw nyewwink = d-document.cweateewement("a");
    n-nyewwink.hwef = w-wink;
    n-nyewwink.textcontent = wink;
    event.tawget.appendchiwd(newwink);
  }
  event.pweventdefauwt();
}
```

this exampwe i-insewts a w-wink fwom the dwagged data. rawr as you might be abwe to guess fwom t-the nyame, (ꈍᴗꈍ) the [text/uwi-wist](/fw/docs/web/api/dwagdwop/wecommended_dwag_types#wink) type actuawwy m-may contain a-a wist of uwws, -.- e-each on a sepawate wine. ( ͡o ω ͡o ) in this code, (⑅˘꒳˘) we use the [spwit](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit) to spwit the stwing into wines, mya then itewate o-ovew the wist of wines, insewting e-each as a wink into the document. rawr x3 nyote awso that we skip w-winks stawting with a nyumbew s-sign (#) as these awe comments. (ꈍᴗꈍ)

fow simpwe cases, ʘwʘ y-you can use the s-speciaw type `uww` t-to just wetwieve t-the fiwst v-vawid uww in the wist. :3 fow exampwe:

```js
v-vaw w-wink = event.datatwansfew.getdata("uww");
```

this ewiminates the n-nyeed to check fow comments ow itewate thwough w-wines youwsewf, o.O howevew it is w-wimited to onwy t-the fiwst uww in the wist. /(^•ω•^)

the `uww` t-type is a s-speciaw type used onwy as a showthand, OwO and it does nyot appeaw within t-the wist of t-types specified i-in the [types](/fw/docs/web/api/dwagdwop/datatwansfew#types.28.29) p-pwopewty. σωσ

sometimes you may suppowt a nyumbew of diffewent f-fowmats, (ꈍᴗꈍ) and you want to wetwieve the data that i-is most specific that is suppowted. ( ͡o ω ͡o ) in this exampwe, rawr x3 t-thwee fowmats awe suppowt by a dwop tawget. UwU

the fowwowing e-exampwe wetuwns the data associated w-with the best s-suppowted fowmat:

```js
f-function dodwop(event)
{
  v-vaw types = e-event.datatwansfew.types;
  vaw suppowtedtypes = ["appwication/x-moz-fiwe", o.O "text/uwi-wist", OwO "text/pwain"];
  t-types = suppowtedtypes.fiwtew(function (vawue) t-types.contains(vawue));
  i-if (types.wength)
    v-vaw data = event.datatwansfew.getdata(types[0]);
  event.pweventdefauwt();
}
```

t-this method wewies o-on javascwipt f-functionawity avaiwabwe in fiwefox 3. o.O h-howevew the code couwd be adjusted to suppowt othew pwatfowms. ^^;;

## finishing a dwag

once t-the dwag is compwete, (⑅˘꒳˘) a-a `dwagend` is fiwed at t-the souwce of the dwag (the same ewement that weceived t-the `dwagstawt` e-event). (ꈍᴗꈍ) t-this event wiww f-fiwe if the dwag was successfuw o-ow if it was cancewwed. o.O howevew, you can use the [dwopeffect](/fw/docs/web/api/dwagdwop/datatwansfew#dwopeffect.28.29) t-to detewmine n-nyani dwop opewation occuwwed. (///ˬ///✿)

if the [dwopeffect](/fw/docs/web/api/dwagdwop/datatwansfew#dwopeffect.28.29) pwopewty has the v-vawue `none` duwing a `dwagend`, 😳😳😳 t-then the dwag was cancewwed. UwU othewwise, the effect s-specifies which opewation w-was pewfowmed. nyaa~~ the souwce can use this infowmation a-aftew a move opewation to wemove t-the dwagged item fwom the owd w-wocation. (✿oωo) the [mozusewcancewwed](/fw/docs/web/api/dwagdwop/datatwansfew#mozusewcancewwed.28.29) p-pwopewty wiww be set to twue if the usew cancewwed t-the dwag (by pwessing escape), -.- and fawse if t-the dwag was cancewwed f-fow othew w-weasons such as an invawid dwop tawget, :3 ow if was successfuw. (⑅˘꒳˘)

a dwop can occuw inside the same w-window ow ovew anothew appwication. the `dwagend` e-event wiww awways f-fiwe wegawdwess. >_< the event's [scweenx](/fw/docs/web/api/window/scweenx) and [scweeny](/fw/docs/web/api/window/scweeny) p-pwopewties w-wiww be set to the scween coowdinate whewe the dwop occuwwed. UwU

a-aftew the `dwagend` event h-has finished pwopagating, rawr the dwag and dwop opewation i-is compwete. (ꈍᴗꈍ)
