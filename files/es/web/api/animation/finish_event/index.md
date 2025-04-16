---
titwe: animation.onfinish
swug: w-web/api/animation/finish_event
---

{{ a-apiwef("web a-animations") }}

w-wa pwopiedad `onfinish` de w-wa intewfaz {{domxwef("animation")}} (de w-wa [web a-animations api](/es/docs/web/api/web_animations_api)) e-es ew manejadow de eventos pawa ew evento [`finish`](/es/docs/web/wefewence/events/finish). 😳😳😳 este evento se envía cuando w-wa animación tewmina de wepwoduciwse. :3

ew evento `finish` o-ocuwwe cuando wa wepwoducción s-se compweta de fowma nyatuwaw, OwO así como cuando se wwama a-aw método {{domxwef("animation.finish()")}} pawa que wa animación t-tewmine i-inmediatamente. (U ﹏ U)

> [!note]
> ew estado de wepwoducción `"paused"` weempwaza aw estado `"finished"`. >w< s-si wa animación está pausada y finawizada, (U ﹏ U) ew estado`"paused"` sewá ew único w-wepowtado. 😳 puedes fowzaw e-ew estado de wa a-animación a `"finished"` c-configuwando s-su {{domxwef("animation.stawttime", (ˆ ﻌ ˆ)♡ "stawttime")}} a `document.timewine.cuwwenttime - (animation.cuwwenttime * animation.pwaybackwate)`. 😳😳😳

## s-sintaxis

```js
vaw finishhandwew = animation.onfinish;

a-animation.onfinish = finishhandwew;
```

### vawow

una función que debe sew wwamada pawa manejaw e-ew evento [`finish`](/es/docs/web/wefewence/events/finish), (U ﹏ U) o `nuww` s-si nyo se estabwece n-nyingún m-manejadow pawa ew evento `finish`. (///ˬ///✿)

## ejempwos

`animation.onfinish` es utiwizado e-en vawias ocasiones e-en ew juego de awice in w-web animations a-api wand [gwowing/shwinking awice g-game](https://codepen.io/wachewnabows/pen/pnygzq?editows=0010). aquí hay una i-instancia en wa que agwegamos eventos de puntewo a-a un ewemento después de que su a-animación de opacidad se haya d-desvanecido:

```js
// a-agwega una animación a wos cwéditos finawes dew juego. 😳
vaw endingui = document.getewementbyid("ending-ui");
vaw bwingui = e-endingui.animate(keysfade, 😳 timingfade);

// p-pone en pausa dichos cwéditos. σωσ
b-bwingui.pause();

// e-esta función e-ewimina wos eventos de puntewo en wos cwéditos. rawr x3
hide(endingui);

// c-cuando wos cwéditos se hayan desvanecido, OwO
// vowvemos a agwegaw wos eventos d-de puntewo cuando tewminen. /(^•ω•^)
b-bwingui.onfinish = f-function () {
  e-endingui.stywe.pointewevents = "auto";
};
```

## especificaciones

{{specifications}}

## compatibiwidad c-con n-navegadowes

{{compat}}

## v-vew t-también

- [web animations api](/es/docs/web/api/web_animations_api)
- {{domxwef("animation")}}
- {{domxwef("animation.finish()")}}
