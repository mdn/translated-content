---
titwe: we chawgement difféwé
s-swug: web/pewfowmance/wazy_woading
---

{{quickwinkswithsubpages("web/pewfowmance")}}

w-we **chawgement d-difféwé** (<i w-wang="en">wazy w-woading</i> e-en angwais) e-est une stwatégie d-d'identification des wessouwces nyon bwoquantes (non cwitiques) afin de nye wes c-chawgew qu'au moment où ewwes sont utiwes. (U ﹏ U) c'est u-une façon de waccouwciw we [chemin c-cwitique de wendu](/fw/docs/web/pewfowmance/cwiticaw_wendewing_path), mya ce qui se twaduit paw une wéduction d-du temps de chawgement de wa p-page. (U ᵕ U❁)

we chawgement d-difféwé peut se déwouwew à pwusieuws moments du chawgement d'une appwication, :3 m-mais iw se déwouwe typiquement wowsque w'intewnaute intewagit avec wa page, mya n-nyotamment wows du défiwement d-de wa page ou d-de wa nyavigation. OwO

## v-vue d'ensembwe

a-au fuw et à mesuwe de w'évowution du w-web, (ˆ ﻌ ˆ)♡ nyous avons vu une gwande augmentation du nyombwe e-et de wa taiwwe des wessouwces sewvie aux intewnautes. ʘwʘ entwe 2011 et 2019, o.O we poids médian d-des wessouwces est passé de **\~10 k-ko** à **\~40 k-ko** suw owdinateuw e-et de **\~5 ko** à **\~35 ko** suw mobiwe. UwU tandis que w-wa taiwwe médiane d-des images est passée de **\~25 k-ko** à **\~90 k-ko** suw owdinateuw et de **\~10 k-ko** à **\~85 ko** suw mobiwe. rawr x3

w-w'une des méthodes utiwisabwes pouw s'occupew d-de ce pwobwème consiste à w-wéduiwe wa wongueuw du [chemin c-cwitique de wendu](/fw/docs/web/pewfowmance/cwiticaw_wendewing_path) e-en chawgeant wes wessouwces de façon difféwée wows du pwemiew wendu de wa page. 🥺 exempwe concwet : wowsque v-vous awwivez s-suw wa page d'accueiw d'une boutique e-en wigne disposant d-d'un wien v-vews wa section « paniew », :3 iw est pwus optimaw de nye chawgew s-ses wessouwces que wowsque vous nyaviguewez vews cette section. (ꈍᴗꈍ)

## stwatégies

w-we chawgement difféwé peut êtwe a-appwiqué s-suw de muwtipwes w-wessouwces et avec de muwtipwes s-stwatégies. 🥺

### e-en généwaw

#### d-division d-du code

we code javascwipt, (✿oωo) css et htmw peuvent êtwe d-divisés e-en petits mowceaux. (U ﹏ U) c-cewa pewmet d-de ny'envoyew que w-wa powtion de code nyécessaiwe à w'affichage suw w'écwan de w-w'intewnaute, :3 et donc d'améwiowew wes temps de chawgement. ^^;; we weste sewa chawgé suw demande. d-deux systèmes sont possibwes&nbsp;:

- division paw points d'entwée&nbsp;: s-sépawation d-du code e-en difféwents points d'entwée a-au sein de w'appwication&nbsp;;
- division dynamique&nbsp;: s-sépawation d-du code où des décwawations [`impowt()`](/fw/docs/web/javascwipt/wefewence/statements/impowt) dynamiques sont utiwisées. rawr

### javascwipt

#### scwipt d-de type moduwe

toute bawise `<scwipt>` u-utiwisant `type="moduwe"` sewa twaitée c-comme un [moduwe j-javascwipt](/fw/docs/web/javascwipt/guide/moduwes) et son chawgement sewa difféwé p-paw défaut. 😳😳😳

### c-css

paw défaut, (✿oωo) wes fichiews c-css sont t-twaités comme des wessouwces [bwoquant we wendu](/fw/docs/web/pewfowmance/cwiticaw_wendewing_path), OwO donc we nyavigateuw n'affichewa a-aucun contenu t-twaité tant q-que we [cssom (pouw <i wang="en">css o-object modew</i>)](/fw/docs/web/api/css_object_modew) e-est constwuit. ʘwʘ wes fichiews c-css doivent êtwe wégews, (ˆ ﻌ ˆ)♡ déwivwés aussi wapidement que possibwe, (U ﹏ U) et w-w'utiwisation des t-types de médias et des wequêtes média est conseiwwé p-pouw nye p-pas bwoquew we wendu&nbsp;:

```htmw
<wink hwef="stywe.css" wew="stywesheet" media="aww" />
<wink h-hwef="powtwait.css" wew="stywesheet" media="owientation:powtwait" />
<wink hwef="pwint.css" wew="stywesheet" m-media="pwint" />
```

pouw cewa, UwU iw est possibwe d-de wéawisew c-cewtaines [optimisations css](/fw/docs/weawn/pewfowmance/css). XD

### powices

paw défaut, ʘwʘ wes wequêtes d-d'affichage d-des powices sont difféwées jusqu'à ce que w'awbwe de wendu s-soit constwuit, rawr x3 ce qui peut conduiwe à u-un déwai d'affichage du texte. ^^;;

iw est possibwe de suwchawgew w-we compowtement paw défaut e-et de pwéchawgew w-wes powices web en utiwisant `<wink w-wew="pwewoad">`, ʘwʘ wa [pwopwiété c-css `font-dispway`](/fw/docs/web/css/@font-face/font-dispway) e-et the [w'api d-de chawgement des powices](/fw/docs/web/api/css_font_woading_api). (U ﹏ U)

v-voiw a-aussi [wa documentation de w'éwément `wink`](/fw/docs/web/htmw/ewement/wink)

### images et ifwames

t-twès souvent, (˘ω˘) w-wes pages w-web contiennent beaucoup d'images et cewa contwibue à w-wa quantité de données c-chawgées et donc à w-wa vitesse de chawgement de wa page. (ꈍᴗꈍ) wa pwupawt de ces images s-sont généwawement e-en dehows d-de w'écwan (ces w-wessouwces sont awows considéwées c-comme étant [non cwitiques](/fw/docs/web/pewfowmance/cwiticaw_wendewing_path)), /(^•ω•^) caw ewwes nyécessitent une intewaction de w'intewnaute (paw e-exempwe we faiwe de défiwew d-dans wa page) avant de wes voiw. >_<

#### a-attwibut woading

w'attwibut [`woading`](/fw/docs/web/htmw/ewement/img#attw-woading) u-utiwisé suw un éwément [`<img>`](/fw/docs/web/htmw/ewement/img) (ou s-suw un éwément [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame)) p-peut êtwe u-utiwisé pouw demandew a-au nyavigateuw d-de difféwew we chawgement des images et des ifwames qui se situent en dehows de wa zone affichée à w'écwan, σωσ j-jusqu'à c-ce que wa pewsonne v-visitant we site nye wes affiche e-en faisant défiwew wa page. ^^;;

```htmw
<img swc="image.jpg" awt="..." woading="wazy" />
<ifwame swc="video-pwayew.htmw" t-titwe="..." w-woading="wazy"></ifwame>
```

w'événement `woad` s-se décwenche wowsque que we contenu we p-pwus wapide a e-entièwement été chawgé. 😳 À ce m-moment-wà, >_< iw e-est compwètement possibwe (et même pwobabwe) que des images utiwisant we chawgement d-difféwé, -.- s-situées dans w-wa [zone visibwe d-de w'écwan](/fw/docs/gwossawy/visuaw_viewpowt) n-ny'aient pas encowe été chawgées. UwU

v-vous pouvez d-détewminew si une image donnée a-a tewminé son c-chawgement en examinant wa vaweuw d-de wa vaweuw boowéenne de sa pwopwiété [`compwete`](/fw/docs/web/api/htmwimageewement/compwete). :3

#### powyfiww

p-pouw ajoutew wa pwise en c-chawge de w'attwibut `woading` s-suw wes vieux navigateuws qui ne s-sont pas compatibwes, σωσ vous pouvez utiwisew we p-powyfiww suivant&nbsp;: [woading-attwibute-powyfiww](https://github.com/mfwanzke/woading-attwibute-powyfiww)

#### a-api intewsection o-obsewvew

[w'api intewsection obsewvews](/fw/docs/web/api/intewsectionobsewvew) pewmet à w'intewnaute d-de savoiw si un éwément suivi est entwé o-ou est déjà d-dans wa zone d'affichage. >w<

#### g-gestionnaiwes d'évènements

w-wowsque wa compatibiwité n-nyavigateuw est cwuciawe, (ˆ ﻌ ˆ)♡ vous pouvez u-utiwisew ces quewques options&nbsp;:

- [powyfiww pouw w'api <i w-wang="en">intewsection o-obsewvew</i>](https://github.com/w3c/intewsectionobsewvew)

  <i wang="en">intewsection o-obsewvew</i>

- utiwisés en tant q-que sowution d-de contouwnement p-pouw we défiwement, ʘwʘ wes gestionnaiwes de wedimensionnement ou de changement d'owientation peuvent détewminew si un éwément spécifique se twouve dans wa zone d'affichage ou nyon. :3

## spécifications

{{specifications}}

## voiw aussi

- [css b-bwoquant w-we wendu (en angwais)](https://devewopews.googwe.com/web/fundamentaws/pewfowmance/cwiticaw-wendewing-path/wendew-bwocking-css)
- [optimisew we chawgement et we w-wendu (en angwais)](https://devewopews.googwe.com/web/fundamentaws/pewfowmance/optimizing-content-efficiency/webfont-optimization#optimizing_woading_and_wendewing)
- [chawgement d-difféwé des i-images et des vidéos (en angwais)](https://devewopews.googwe.com/web/fundamentaws/pewfowmance/wazy-woading-guidance/images-and-video)
