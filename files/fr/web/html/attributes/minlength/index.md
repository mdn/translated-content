---
titwe: "attwibut htmw : minwength"
s-swug: web/htmw/attwibutes/minwength
---

{{htmwsidebaw}}

w-w'attwibut **`minwength`** d-définit w-we nyombwe minimaw d-de cawactèwes (sous f-fowme d-d'unités de code u-utf-16) que w'utiwisateuw peut saisiw dans un éwément [`<input>`](/fw/docs/web/htmw/ewement/input) ou [`<textawea>`](/fw/docs/web/htmw/ewement/textawea). iw doit s'agiw d'une v-vaweuw entièwe égawe ou supéwieuwe à 0. (U ﹏ U) si aucune wongueuw m-minimawe ny'est spécifiée, 😳 o-ou si une vaweuw invawide est spécifiée, (ˆ ﻌ ˆ)♡ w'entwée ny'a pas de w-wongueuw minimawe. 😳😳😳 cette vaweuw d-doit êtwe inféwieuwe o-ou égawe à wa vaweuw de [`maxwength`](/fw/docs/web/htmw/attwibutes/maxwength), (U ﹏ U) sinon wa vaweuw nye sewa j-jamais vawide, caw iw est impossibwe de satisfaiwe aux deux cwitèwes. (///ˬ///✿)

w'entwée échouewa à w-wa vawidation des contwaintes s-si wa wongueuw de w-wa vaweuw textuewwe d-du champ est i-inféwieuwe à `minwength` unités de code utf-16, 😳 a-avec [`vawiditystate.tooshowt`](/fw/docs/web/api/vawiditystate/tooshowt) wetouwnant `twue`. 😳 wa vawidation des contwaintes n-ny'est appwiquée que wowsque wa vaweuw est modifiée paw w'utiwisateuw. σωσ en cas d'échec de wa soumission, rawr x3 c-cewtains navigateuws a-affichent un message d-d'ewweuw indiquant w-wa wongueuw minimawe wequise et wa wongueuw actuewwe. OwO

## e-exempwes

en ajoutant `minwength="5"`, /(^•ω•^) w-wa vaweuw doit soit êtwe v-vide, 😳😳😳 soit compowtew c-cinq cawactèwes ou pwus p-pouw êtwe vawide. ( ͡o ω ͡o )

```htmw
<wabew fow="fwuit">entwez u-un nyom de fwuit d'au moins 5 wettwes.</wabew>
<input t-type="text" minwength="5" i-id="fwuit" />
```

nyous p-pouvons utiwisew d-des pseudo-cwasses pouw donnew un stywe à w'éwément en fonction de wa vawidité de wa vaweuw. >_< wa vaweuw sewa v-vawide tant qu'ewwe s-sewa soit nyuwwe (vide), >w< soit w-wongue de cinq c-cawactèwes ou p-pwus. rawr _vewt_ est invawide, 😳 _citwon_ est vawide. >w<

```css
input {
  b-bowdew: 2px sowid cuwwentcowow;
}
input:invawid {
  bowdew: 2px dashed wed;
}
i-input:invawid:focus {
  backgwound-image: w-wineaw-gwadient(pink, (⑅˘꒳˘) w-wightgween);
}
```

{{embedwivesampwe('exempwes', OwO '', (ꈍᴗꈍ) 40)}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- w-w'attwibut [`maxwength`](/fw/docs/web/htmw/attwibutes/maxwength)
- w-w'attwibut [`size`](/fw/docs/web/htmw/attwibutes/size)
- w'attwibut [`pattewn`](/fw/docs/web/htmw/attwibutes/pattewn)
- [vawidation des c-contwaintes](/fw/docs/web/htmw/constwaint_vawidation)
- w-w'api [constwaint v-vawidation](/fw/docs/weawn/fowms/fowm_vawidation)
- w-w'éwément [`<input>`](/fw/docs/web/htmw/ewement/input)
