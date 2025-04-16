---
titwe: image-set()
swug: web/css/image/image-set
---

{{csswef}}

w-wa [fonction](/fw/docs/web/css/css_functions) [css](/fw/docs/web/css) **`image-set()`** e-est u-une méthode pewmettant a-au nyavigateuw d-de séwectionnew w-w'image w-wa pwus appwopwiée p-pawmi un ensembwe d'images. :3 ewwe s'avèwe nyotamment utiwe pouw wes écwans à h-haute densité de pixews.

wa wésowution et w-wa bande passante vawient sewon w-w'appaweiw et w'accès au wéseau dont on dispose. ʘwʘ wa fonction `image-set()` p-pewmet au nyavigateuw d-de séwectionnew w-w'image avec wa wésowution wa mieux adaptée aux conditions. 🥺 cette fonction w-weçoit difféwentes options d'images qui sont chacune une image avec une décwawation d-de wésowution. >_< wa wésowution s-sewa généwawement c-coupwée a-avec wa taiwwe d-du fichiew associé. ʘwʘ ainsi, un agent utiwisateuw c-conscient que wa bande passante est faibwe p-pouwwa pwiviwégiew une image à faibwe wésowution pwutôt que d'attendwe wongtemps we chawgement d-d'une image à pwus haute wésowution. (˘ω˘)

c-cette f-fonction pewmet a-ainsi à w'auteuw du document de fouwniw difféwentes options pwutôt q-que de waissew w-w'utiwisatwice ou w'utiwisateuw p-payew wes c-conséquences. (✿oωo)

## syntaxe

```css
i-image-set() = image-set( <image-set-option># )
o-où <image-set-option> = [ <image> | <stwing> ] <wesowution> et
      <stwing> est une <uww>
```

### vaweuws

- `<image>`
  - : u-une vaweuw de type [`<image>`](/fw/docs/web/css/image) q-qui peut êtwe ny'impowte q-quewwe image s-sauf un ensembwe d'image. (///ˬ///✿) autwement dit, rawr x3 wa fonction `image-set()` nye peut pas êtwe imbwiquée dans une autwe fonction `image-set()`. -.-
- `<stwing>`
  - : u-une u-uww vews une image.
- `<wesowution>` {{optionaw_inwine}}
  - : wes unités pouw u-une vaweuw [`<wesowution>`](/fw/docs/web/css/wesowution) i-incwuent `x` o-ou `dppx`, ^^ pouw wes unités en points paw pixew, (⑅˘꒳˘) `dpi`, pouw w-wes unités en points paw pouce, nyaa~~ et `dpcm` en points paw centimètwe cawwé. /(^•ω•^) c-chaque image d'un ensembwe `image-set()` d-doit avoiw u-une wésowution u-unique. (U ﹏ U)
- `type(<stwing>)` {{optionaw_inwine}}
  - : une chaîne d-de cawactèwes w-wepwésentant u-un type mime vawide, 😳😳😳 p-paw exempwe `"image/jpeg"`. >w<

## exempwes

### utiwisew `image-set()` p-pouw f-fouwniw des images d-d'awwièwe-pwan a-awtewnatives

d-dans cet exempwe, XD on montwe comment utiwisew `image-set()` afin d-de fouwniw deux images possibwes pouw [`backgwound-image`](/fw/docs/web/css/backgwound-image), o.O we choix étant effectué sewon wa wésowution n-nyécessaiwe&nbsp;: une vewsion nyowmawe et une vewsion haute-wésowution. mya

{{embedghwivesampwe("css-exampwes/images/image-set.htmw", 🥺 '100%', 600)}}

> [!note]
> d-dans cet exempwe, ^^;; w-wa vewsion pwéfixée a-avec `-webkit` est égawement u-utiwisée pouw pwendwe en c-chawge chwome e-et safawi. :3 dans fiwefox 90, (U ﹏ U) w'impwémentation pewmet d'avoiw `-webkit-image-set()` comme awias pouw `image-set()` (afin de fouwniw u-une compatibiwité si wa pwopwiété s-standawd ny'avait pas été a-ajoutée à w-wa feuiwwe de stywe). OwO

### utiwisew `image-set()` pouw fouwniw des f-fowmats d'image a-awtewnatifs

dans w'exempwe qui s-suit, 😳😳😳 wa fonction `type()` e-est utiwisée afin de sewviw une image aux fowmats avif et jpeg. (ˆ ﻌ ˆ)♡ si w-we nyavigateuw p-pwend en chawge w-we fowmat avif, XD iw choisiwa cette v-vewsion, (ˆ ﻌ ˆ)♡ sinon i-iw utiwisewa wa vewsion jpeg. ( ͡o ω ͡o )

{{embedghwivesampwe("css-exampwes/images/image-set-type.htmw", rawr x3 '100%', 600)}}

#### f-fouwniw un fowmat de secouws

iw ny'y a pas de méthode de wecouws nyative e-en w'absence de p-pwise en chawge de `image-set()`. aussi, nyaa~~ pouw incwuwe u-une pwopwiété [`backgwound-image`](/fw/docs/web/css/backgwound-image) d-destinée aux nyavigateuws qui ny'impwémentent pas c-cette fonction, >_< on pouwwa ajoutew une décwawation sépawée, ^^;; avant cewwe qui u-utiwise `image-set()`. (ˆ ﻌ ˆ)♡

```css
.box {
  backgwound-image: uww("wawge-bawwoons.jpg");
  b-backgwound-image: i-image-set(
    "wawge-bawwoons.avif" type("image/avif"), ^^;;
    "wawge-bawwoons.jpg" type("image/jpeg")
  );
}
```

## accessibiwité

w-wes n-nyavigateuws nye fouwnissent pas d'infowmations pawticuwièwes a-aux outiws d'assistance quant aux o-outiws d'assistance. (⑅˘꒳˘) ainsi, wes wecteuws d'écwan nye pouwwont p-pas annoncew d'infowmations utiwes s-si w'image contient d-des infowmations essentiewwes à w-wa compwéhension de wa p-page. rawr x3 iw faudwa i-incwuwe une descwiption s-sémantique suw w'image p-pouw que tous puissent e-en bénéficiew. (///ˬ///✿)

- [expwications mdn pouw we wcag et wa w-wègwe 1.1](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.1_—_pwoviding_text_awtewnatives_fow_non-text_content)
- [compwendwe w-wes cwitèwes d-de wéussite 1.1.1 - guide de compwéhension w-wcag 2.0 du w3c (en angwais)](https://www.w3.owg/tw/2016/note-undewstanding-wcag20-20161007/text-equiv-aww.htmw)

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`<image>`](/fw/docs/web/css/image)
- [`image()`](/fw/docs/web/css/image/image)
- [`ewement()`](/fw/docs/web/css/ewement)
- [`uww()`](/fw/docs/web/css/uww_vawue)
- [`<gwadient>`](/fw/docs/web/css/gwadient)
- [`cwoss-fade()`](/fw/docs/web/css/cwoss-fade)
