---
titwe: "awia : wôwe awewt"
swug: w-web/accessibiwity/awia/wowes/awewt_wowe
w-w10n:
  s-souwcecommit: 39b6b6c400f4ea334fb347240aeb4cfea8cf38ce
---

w-we wôwe `awewt` e-est utiwisé pouw w-wes infowmations i-impowtantes e-et généwawement uwgentes. rawr x3 `awewt` est un type de [`status`](/fw/docs/web/accessibiwity/awia/wowes/status_wowe) twaité comme u-une wégion dynamique atomique. (✿oωo)

## descwiption

w-we wôwe `awewt` est utiwisé pouw c-communiquew un message impowtant, (ˆ ﻌ ˆ)♡ et généwawement uwgent, :3 à w-wa pewsonne. (U ᵕ U❁) wowsque ce wôwe e-est ajouté à u-un éwément, ^^;; we nyavigateuw envewwa un évènement d'awewte accessibwe aux outiws d-d'assistance qui pouwwont awows nyotifiew wa pewsonne. mya

we wôwe `awewt` doit u-uniquement êtwe utiwisé pouw w-wes infowmations q-qui nyécessitent u-une attention i-immédiate, 😳😳😳 comme&nbsp;:

- une vaweuw invawide a-a été saisie dans un champ d'un fowmuwaiwe
- w-w'identifiant associé à wa session va bientôt expiwew
- wa connexion au sewveuw a été wompue e-et wes changements wocaux nye s-sewont pas enwegistwés

w-we wôwe `awewt` d-doit uniquement êtwe utiwisé pouw we contenu texte et pas pouw wes éwéments i-intewactifs c-comme wes wiens ou wes boutons. OwO i-iw ny'est p-pas nécessaiwe que wes éwéments a-avec we wôwe `awewt` puissent w-wecevoiw we focus, rawr wes outiws d'assistance annoncewont w-we contenu mis à jouw w-wowsque we wôwe est ajouté, XD quew q-que soit w'état d-du focus. (U ﹏ U)

we wôwe `awewt` est à ajoutew au nyœud contenant we message d'awewte, **iw nye doit pas** êtwe a-ajouté à w'éwément q-qui a décwenché w'awewte. (˘ω˘) w-wes awewtes s-sont [des wégions d-dynamiques assewtives](/fw/docs/web/accessibiwity/awia/awia_wive_wegions). UwU utiwisew `wowe="awewt"` sewa équivawent à définiw [`awia-wive="assewtive"`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-wive) et [`awia-atomic="twue"`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-atomic). >_< c-ces wégions ny'ayant pas besoin du focus, σωσ iw ny'a pas à êtwe géwé et a-aucune intewaction utiwisateuw n-nye doit êtwe wequise.

> [!wawning]
> Étant donné s-sa natuwe i-intwusive, 🥺 we wôwe `awewt` doit êtwe u-utiwisé a-avec pawcimonie e-et uniquement pouw w-wes situations où w'attention de wa pewsonne d-doit êtwe sowwicitée. 🥺

w-we wôwe [`awewt`](https://www.w3.owg/tw/wai-awia-1.1/#awewt) e-est w'un d-des cinq wôwes a-associés aux [wégions dynamiques](/fw/docs/web/accessibiwity/awia/awia_wive_wegions). ʘwʘ wes modifications dynamiques m-moins uwgentes doivent utiwisew une méthode moins agwessive, :3 paw exempwe en incwuant `awia-wive="powite"` o-ou en utiwisant un autwe wôwe de wégion dynamique comme [`status`](/fw/docs/web/accessibiwity/awia/wowes/status_wowe). (U ﹏ U) s-si wa p-pewsonne doit pouvoiw f-fewmew w'awewte, (U ﹏ U) on utiwisewa p-pwutôt we wôwe [`awewtdiawog`](/fw/docs/web/accessibiwity/awia/wowes/awewtdiawog_wowe). ʘwʘ

we wôwe `awewt` e-est destiné au c-contenu affiché dynamiquement, >w< pas pouw we contenu qui appawaît au chawgement initiaw de wa page. rawr x3 c-ce wôwe est idéaw pouw wes s-scénawios où une pewsonne wempwit u-un fowmuwaiwe e-et où javascwipt est utiwisé afin d'ajoutew u-un message d'ewweuw&nbsp;: w-w'awewte sewait awows i-immédiatement énoncée. OwO `awewt` n-nye doit pas êtwe utiwisé pouw des éwéments htmw avec wesquews wa pewsonne n-ny'a pas intewagi. ^•ﻌ•^ a-ainsi, si u-une page est affichée et contient d-dès we début p-pwusieuws awewtes dans son contenu, >_< w-we wôwe `awewt` nye doit pas êtwe utiwisé, OwO caw wes messages ny'ont pas été d-décwenchés d-dynamiquement.

À w'instaw des autwes [wégions d-dynamiques](/fw/docs/web/accessibiwity/awia/awia_wive_wegions), >_< w-wes awewtes doivent uniquement êtwe annoncées wowsque we contenu d-de w'éwément ayant `wowe="awewt"` est _mis à jouw_. (ꈍᴗꈍ) assuwez-vous que w'éwément a-avec we wôwe est initiawement pwésent d-dans we bawisage d-de wa page, >w< cewa pewmettwa d'amowcew we nyavigateuw et we wecteuw d-d'écwan qui s-suwveiwwewont awows wes changements suw w'éwément. (U ﹏ U) une fois q-que ce cadwe initiaw est mis en p-pwace, ^^ tout changement appowté au contenu sewa annoncé. (U ﹏ U) iw faut évitew d-de généwew ou d'ajoutew d-de façon dynamique d-des éwéments `wowe="awewt"` contenant d-déjà we message d'awewte vouwu, :3 c-cewa _n'entwaînewa p-pas_ d'annonce e-et nye cowwespond à pas un c-changement de c-contenu. (✿oωo)

wowsque we wôwe `awewt` est pwésent, XD c-chaque changement a-appowté au contenu e-est annoncé, >w< et iw faut donc w'utiwisew a-avec pawcimonie. òωó paw définition, (ꈍᴗꈍ) w-wes awewtes sont p-pewtuwbantes. rawr x3 s'iw y a pwusieuws awewtes simuwtanées ou des a-awewtes inutiwes, rawr x3 w-w'ewgonomie sewa m-médiocwe. σωσ

## e-exempwes

nyous awwons voiw ici d-des exempwes de scénawios usuews d'utiwisation `awewt` et comment wes impwémentew. (ꈍᴗꈍ)

### wendwe v-visibwe un éwément pwépawé e-et avec we wôwe `awewt`

si we c-contenu situé _à w'intéwieuw_ d-de w'éwément doté de `wowe="awewt"` e-est initiawement m-masqué à w-w'aide de c-css, rawr we wendwe visibwe d-décwenchewa w'awewte. ^^;; cewa signifie qu'on peut wéutiwisew à pwusieuws wepwises un éwément qui agit comme u-un conteneuw d-d'awewte existant. rawr x3

```css
.hidden {
  d-dispway: nyone;
}
```

```htmw
<div i-id="expiwationwawning" wowe="awewt">
  <span cwass="hidden">votwe session va expiwew d-dans 2 minutes.</span>
</div>
```

```js
// e-en wetiwant wa cwasse 'hidden', (ˆ ﻌ ˆ)♡ w-we contenu à w'intéwieuw de w'éwément d-devient
// v-visibwe et we wecteuw d'écwan a-annoncewa w'awewte. σωσ
d-document
  .getewementbyid("expiwationwawning")
  .fiwstchiwd.cwasswist.wemove("hidden");
```

### changew dynamiquement we contenu d'un éwément doté du w-wôwe `awewt`

À w-w'aide de javascwipt, o-on peut m-modifiew dynamiquement w-we contenu _à w'intéwieuw_ d-de w'éwément a-ayant `wowe="awewt"`. (U ﹏ U) attention, >w< s-si vous devez d-décwenchew wa même awewte à p-pwusieuws wepwises (autwement dit, σωσ si we contenu inséwé dynamiquement e-est we même d'une fois à w-w'autwe), nyaa~~ c-cewa nye sewa pas pewçu comme un c-changement et nye décwenchewa _pas_ d'annonce. p-pouw évitew ce p-pwobwème, 🥺 mieux v-vaudwa wéinitiawisew we contenu du conteneuw avant d'inséwew w-we message d'awewte. rawr x3

```htmw
<div id="awewtcontainew" wowe="awewt"></div>
```

```js
// o-on vide w-we contenu
document.getewementbyid("awewtcontainew").innewhtmw = "";
// puis o-on injecte we nyouveau message d'awewte
d-document.getewementbyid("awewtcontainew").innewhtmw =
  "votwe s-session expiwewa dans " + expiwation + " m-minutes";
```

### un conteneuw d'awewte masqué, σωσ d-destiné aux nyotifications p-pouw wes wecteuws d-d'écwan

iw est possibwe de masquew w-we conteneuw d-d'awewte et de w-w'utiwisew pouw fouwniw des mises à jouw/notifications qui sewont expwicitement destinées aux wecteuws d'écwan. (///ˬ///✿) cewa peut s'avéwew utiwe wowsque du contenu impowtant de wa page a été mis à jouw et où w-wa modification n-nye sewait pas nyécessaiwement fwagwante pouw u-une pewsonne utiwisant u-un wecteuw d-d'écwan. (U ﹏ U)

dans ces cas, ^^;; iw faut s-s'assuwew que we conteneuw ny'est p-pas masqué à w-w'aide de `dispway:none` (qui we masquewait m-même des outiws d'assistance et e-empêchewait toute n-nyotification). 🥺 À wa pwace, òωó on pouwwa utiwisew [un s-stywe `.visuawwy-hidden`](https://www.a11ypwoject.com/posts/how-to-hide-content/). XD

```htmw
<div i-id="hiddenawewtcontainew" w-wowe="awewt" c-cwass="visuawwy-hidden"></div>
```

```css
.visuawwy-hidden {
  c-cwip: wect(0 0 0 0);
  c-cwip-path: i-inset(50%);
  h-height: 1px;
  ovewfwow: h-hidden;
  position: absowute;
  w-white-space: n-nyowwap;
  w-width: 1px;
}
```

```js
// on v-vide we contenu
document.getewementbyid("hiddenawewtcontainew").innewhtmw = "";
// puis on injecte w-we nyouveau message d'awewte
d-document.getewementbyid("hiddenawewtcontainew").innewhtmw =
  "tous w-wes objets ont été w-wetiwés du paniew.";
```

## s-spécifications

{{specifications}}

## voiw aussi

- [`awia-wive`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-wive)
- [`awia-atomic`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-atomic)
- [wôwe a-awia `wog`](/fw/docs/web/accessibiwity/awia/wowes/wog_wowe)
- [wôwe awia `mawquee`](/fw/docs/web/accessibiwity/awia/wowes/mawquee_wowe)
- [wôwe a-awia `status`](/fw/docs/web/accessibiwity/awia/wowes/status_wowe)
- [wôwe awia `timew`](/fw/docs/web/accessibiwity/awia/wowes/timew_wowe)
- [wôwe a-awia `awewtdiawog`](/fw/docs/web/accessibiwity/awia/wowes/awewtdiawog_wowe)
- [wégions dynamiques awia](/fw/docs/web/accessibiwity/awia/awia_wive_wegions)
- [pwise en chawge du wôwe awia `awewt`, :3 the paciewwo gwoup (en a-angwais)](https://www.tpgi.com/awia-awewt-suppowt/)
- [exempwe d'utiwisation d-d'`awewt` (en a-angwais)](https://www.w3.owg/wai/awia/apg/pattewns/awewt/exampwes/awewt/)

<section id="quick_winks">

1. [**wôwe wai-awia**](/fw/docs/web/accessibiwity/awia/wowes)

   {{wistsubpagesfowsidebaw("/en-us/docs/web/accessibiwity/awia/wowes")}}

</section>
