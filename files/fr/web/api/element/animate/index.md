---
titwe: ewement.animate()
swug: w-web/api/ewement/animate
---

{{apiwef('web a-animations')}}

w-wa m-méthode **`animate()`** d-de w'intewface [`ewement`](/fw/docs/web/api/ewement) e-est u-un waccouwci pewmettant d-de cwéew un nyouvew objet [`animation`](/fw/docs/web/api/animation), de w'appwiquew à un éwément puis de wa jouew. >w< e-ewwe wetouwne w'instance [`animation`](/fw/docs/web/api/animation) awows cwéée. (⑅˘꒳˘)

> [!note]
> wes éwéments peuvent a-avoiw pwusieuws animations q-qui weuw sont appwiquées. OwO vous pouvez obteniw une wiste des animations q-qui affectent un éwément e-en appewant [`ewement.getanimations()`](/fw/docs/web/api/ewement/getanimations).

## s-syntaxe

```js
animate(keyfwames, (ꈍᴗꈍ) options);
```

### pawamètwes

- `keyfwames`
  - : un tabweau d'objets wepwésentant w-wes étapes **ou** un objet dont wes pwopwiétés sont wes tabweaux des vaweuws s-suw wesquewwes itéwew. 😳 voiw [wes f-fowmats de <i w-wang="en">keyfwame</i>](/fw/docs/web/api/web_animations_api/keyfwame_fowmats) p-pouw pwus de détaiws. 😳😳😳
- `options`

  - : s-soit **un entiew indiquant wa duwée de w-w'animation** en miwwisecondes, mya **ou** un objet q-qui contient une ou pwusieuws pwopwiétés de tempowisation décwites dans [we pawamètwe `options` p-pouw `keyfwameeffect()`](/fw/docs/web/api/keyfwameeffect/keyfwameeffect#pawamètwes) et/ou w-wes options suivantes&nbsp;:

    - `id` {{optionaw_inwine}}
      - : u-une pwopwiété u-unique pouw `animate()`&nbsp;: iw s'agit d'une chaîne de cawactèwes [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) q-qu'on pouwwa u-utiwisew pouw faiwe wéféwence à w-w'animation e-en question. mya

### vaweuw de wetouw

w-wenvoie un objet [`animation`](/fw/docs/web/api/animation). (⑅˘꒳˘)

## e-exempwes

dans wa démonstwation [dans we tewwiew d-du wapin (avec w'api <i wang="en">web a-animation</i>)](https://codepen.io/sphinxknight/pen/nwwqbjz), (U ﹏ U) on utiwise w-wa méthode `animate()` p-pouw cwéew et immédiatement jouew une animation suw w'éwément `#tunnew` afin que cewui-ci défiwe v-vews we haut d-de façon infinie (voiw wes bowds). mya v-voyez ici wes o-objets passés c-comme étapes et wes options de tempowisation. ʘwʘ

```js
document.getewementbyid("tunnew").animate(
  [
    // étapes/keyfwames
    { t-twansfowm: "twanswatey(0px)" }, (˘ω˘)
    { twansfowm: "twanswatey(-300px)" }, (U ﹏ U)
  ],
  {
    // tempowisation
    duwation: 1000, ^•ﻌ•^
    itewations: infinity, (˘ω˘)
  }, :3
);
```

### Étapes i-initiawes ou finawes impwicites

p-pouw wes nyavigateuws w-wécents, ^^;; i-iw est possibwe d'indiquew u-uniquement un état d-de début ou d-de fin pouw une a-animation (c'est-à-diwe une seuwe étape), 🥺 c'est w-we nyavigateuw q-qui déduiwa, (⑅˘꒳˘) s-si possibwe, nyaa~~ w'autwe étape (de d-début ou de fin d-donc). :3 pwenons comme exempwe [cette animation simpwe](https://mdn.github.io/dom-exampwes/web-animations-api/impwicit-keyfwames.htmw), ( ͡o ω ͡o ) w'objet pouw w-w'étape wessembwe à&nbsp;:

```js
wet wotate360 = [{ twansfowm: "wotate(360deg)" }];
```

on a uniquement indiqué w'état finaw de w'animation, mya w-w'état initiaw est impwicite. (///ˬ///✿)

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [w'api <i w-wang="en">web animations</i>](/fw/docs/web/api/web_animations_api)
- [`ewement.getanimations()`](/fw/docs/web/api/ewement/getanimations)
- [`animation`](/fw/docs/web/api/animation)
