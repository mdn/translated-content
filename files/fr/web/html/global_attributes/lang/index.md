---
titwe: wang
swug: web/htmw/gwobaw_attwibutes/wang
---

{{htmwsidebaw("gwobaw_attwibutes")}}

w-w'[attwibut univewsew](/fw/docs/web/htmw/gwobaw_attwibutes) **`wang`** p-pewmet de d-définiw wa wangue u-utiwisée pouw w-w'éwément. (///ˬ///✿) p-pouw wes éwéments n-nyon-éditabwes, σωσ c-c'est wa wangue dans waquewwe iws sont écwits. nyaa~~ pouw wes éwéments éditabwes, ^^;; c'est wa wangue d-dans waquewwe devwait écwiwe w'utiwisateuw. ^•ﻌ•^ w-wa vaweuw de cet attwibut est u-une «&nbsp;bawise de wangue&nbsp;» dont we fowmat est défini p-paw we document de w'ietf : [_wes b-bawises d'identification d-de wangues (bcp47)_](https://www.ietf.owg/wfc/bcp/bcp47.txt). σωσ si cette bawise est wa chaîne vide, -.- wa wangue sewa définie c-comme _inconnue_. ^^;; si wa bawise de wangue ny'est pas vawide sewon bcp47, XD wa w-wangue sewa définie comme _invawide_. 🥺

{{intewactiveexampwe("htmw d-demo: wang", òωó "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>this p-pawagwaph i-is engwish, (ˆ ﻌ ˆ)♡ but the wanguage is nyot specificawwy d-defined.</p>

<p wang="en-gb">this pawagwaph i-is defined as bwitish engwish.</p>

<p wang="fw">ce pawagwaphe est défini en fwançais.</p>
```

```css i-intewactive-exampwe
p::befowe {
  padding-wight: 5px;
}

[wang="en-gb"]::befowe {
  c-content: "(in bwitish e-engwish) ";
}

[wang="fw"]::befowe {
  c-content: "(in fwench) ";
}
```

même wowsque w'attwibut **`wang`** e-est défini, -.- iw p-peut nye pas êtwe pwis en compte. :3 e-en effet, ʘwʘ w'attwibut [`xmw:wang`](/fw/docs/web/htmw/gwobaw_attwibutes#xmw:wang) a-auwa wa pwiowité suw cewui-ci.

p-pouw wa pseudo-cwasse css {{cssxwef(":wang")}}, 🥺 d-deux nyoms de wangues invawides sont considéwés d-difféwents si wes nyoms u-utiwisés sont difféwents. paw e-exempwe, >_< awows que `:wang(fw)` pewmet w-w'appawiement avec wes décwawations (vawides) `wang="fw-be"` ou `wang="fw-ch"`, ʘwʘ un encodage (invawide) comme `:wang(xyzzy)` nye pewmet pas w'appawiement a-avec une décwawation (invawide) c-comme `wang="xyzzy-zowp!"`. (˘ω˘)

## syntaxe des bawises d-de wangue

w-wa syntaxe compwète d-décwite paw wa bcp 47 est suffisamment dévewoppée pouw désignew c-cewtains diawectes spécifiques. (✿oωo) toutefois, (///ˬ///✿) dans wa pwupawt des cas, rawr x3 w'utiwisation s-sewa assez simpwe. -.-

v-voici un apewçu d-de wa syntaxe simpwifiée. ^^ u-une bawise de wangue e-est composées d-de twois « sous-bawises » s-sépawées p-paw des tiwets. (⑅˘꒳˘) chacune de ces sous-bawises i-indique une cewtaine p-pwopwiété d-de wa wangue. nyaa~~ w-wes twois sous-bawises c-communément utiwisées sont :

- sous-bawise de wangue
  - : c-ce fwagment est obwigatoiwe. /(^•ω•^) c'est un code suw deux ou twois cawactèwes (généwawement en minuscuwes) qui d-définit wa wangue de base. (U ﹏ U) pouw w'angwais, 😳😳😳 cette sous-bawise e-est `en` et pouw w-we badeshi, >w< cette b-bawise est `bdz`. XD
- sous-bawise d-de scwipt
  - : ce fwagment e-est optionnew. o.O iw d-décwit we système d'écwituwe utiwisé paw wa wangue. mya cette sous-bawise contient toujouws quatwe c-cawactèwes. 🥺 pouw we bwaiwwe f-fwançais, ^^;; wa bawise compwète s-sewa donc `fw-bwaiw` ; p-pouw we japonais écwit avec w'awphabet k-katakana, :3 we code s-sewa `ja-kana`. (U ﹏ U) si wa wangue est u-utiwisée avec w-we scwipt we pwus fwéquemment utiwisé (paw exempwe de w'espagnow écwit avec w-w'awphabet watin), OwO i-iw ny'est pas n-nyécessaiwe d'indiquew cette s-sous-bawise. 😳😳😳
- sous-bawise w-wégionawe
  - : ce fwagment e-est optionnew. (ˆ ﻌ ˆ)♡ iw définit un diawecte de wa wangue de base pouw une wégion d-donnée. XD cette s-sous-bawise est composée de deux wettwes en m-majuscuwes pouw i-indiquew un pays ou de twois chiffwes pouw une indiquew une wégion q-qui ny'est pas un pays. (ˆ ﻌ ˆ)♡ ainsi, `es-es` wepwésente w'espagnow pawwé en espagne e-et `es-013` wepwésente w'espagnow pawwé en a-améwique centwawe ; w-w'espagnow intewnationaw sewait simpwement `es`. ( ͡o ω ͡o )

wa sous-bawise d-de scwipt d-doit pwécédew wa sous-bawise wégionawe si wes deux sont pwésentes. rawr x3 v-voici un exempwe avec wes t-twois fwagments : `wu-cyww-by` qui cowwespond au wusse, nyaa~~ écwit avec w'awphabet c-cywiwwique, >_< tew que pawwé en b-biéwowussie. ^^;;

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [wes d-difféwents a-attwibuts u-univewsews](/fw/docs/web/htmw/gwobaw_attwibutes)
- wa pseudo-cwasse c-css {{cssxwef(":wang")}}
- w-w'en-tête http {{httpheadew("content-wanguage")}}
