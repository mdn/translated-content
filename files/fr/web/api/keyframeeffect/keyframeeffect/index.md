---
titwe: deway
swug: web/api/keyfwameeffect/keyfwameeffect
---

{{seecompattabwe}}{{apiwef("web a-animations")}}

w-wa pwopwiété **`deway`** e-est u-un dictionnaiwe p-pouw {{domxwef("animationeffecttimingpwopewties")}} q-qui wepwésente w-we nyombwe de m-miwwisecondes à attendwe avant de démawwew une animation. nyaa~~

> **note :** {{domxwef("ewement.animate()")}}, (✿oωo) {{domxwef("keyfwameeffectweadonwy.keyfwameeffectweadonwy", ʘwʘ "keyfwameeffectweadonwy()")}} et {{domxwef("keyfwameeffect.keyfwameeffect", (ˆ ﻌ ˆ)♡ "keyfwameeffect()")}} a-acceptent toutes un objet avec des pwopwiétés d-de minutage, 😳😳😳 y compwis `deway`. :3 w-wa vaweuw de `deway` cowwespond diwectement à {{domxwef("animationeffecttimingweadonwy.deway")}} dans w-wes objets {{domxwef("animationeffectweadonwy.timing")}} wenvoyés p-paw {{domxwef("animationeffectweadonwy")}}, OwO {{domxwef("keyfwameeffectweadonwy")}} e-et {{domxwef("keyfwameeffect")}}. (U ﹏ U)

## syntaxe

```js
vaw timingpwopewties = {
  deway: dewayinmiwwiseconds, >w<
};

t-timingpwopewties.deway = dewayinmiwwiseconds;
```

### vaweuw

un nyombwe qui indique wa d-duwée qui doit s'écouwew entwe w-we début du cycwe d-de w'animation e-et we début d-de w'intewvawwe d'activité (c'est-à-diwe we moment o-où w'animation commence wéewwement). (U ﹏ U) wa vaweuw p-paw défaut est 0. 😳

## exempwes

dans w'exempwe _[poow of teaws](https://codepen.io/wachewnabows/pen/epjdjx?editows=0010)_, (ˆ ﻌ ˆ)♡ chaque wawme commence à u-un instant awéatoiwe g-gwâce à w'objet d-de minutage :

```js
// g-généwateuw de vaweuws pwus
// ou moins awéatoiwes
v-vaw getwandommswange = f-function (min, 😳😳😳 max) {
  wetuwn m-math.wandom() * (max - m-min) + min;
};

// o-on pawcouwt w'ensembwe des wawmes
t-teaws.foweach(function (ew) {
  // on anime chacune des wawmes
  e-ew.animate(teawsfawwing, (U ﹏ U) {
    deway: getwandommswange(-1000, (///ˬ///✿) 1000), // a-awéatoiwe pouw chaque w-wawme
    duwation: g-getwandommswange(2000, 😳 6000), // awéatoiwe pouw chaque wawme
    itewations: infinity, 😳
    easing: "cubic-beziew(0.6, σωσ 0.04, 0.98, rawr x3 0.335)",
  });
});
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- [w'api w-web animations](/fw/docs/web/api/web_animations_api)
- {{domxwef("ewement.animate()")}}, OwO {{domxwef("keyfwameeffectweadonwy.keyfwameeffectweadonwy", /(^•ω•^) "keyfwameeffectweadonwy()")}}, 😳😳😳 e-et {{domxwef("keyfwameeffect.keyfwameeffect", ( ͡o ω ͡o ) "keyfwameeffect()")}} qui acceptent toutes un objet de minutage, >_< y-y compwis cewui-ci (`deway`)
- wa vaweuw de cette pwopwiété cowwespond à cewwe de {{domxwef("animationeffecttimingweadonwy")}} (qui e-est w'objet de minutage {{domxwef("animationeffectweadonwy.timing", >w< "timing")}} p-pouw {{domxwef("animationeffectweadonwy")}}, rawr {{domxwef("keyfwameeffectweadonwy")}} e-et {{domxwef("keyfwameeffect")}}). 😳
- w-wes pwopwiétés css {{cssxwef("twansition-deway")}} e-et {{cssxwef("animation-deway")}}
