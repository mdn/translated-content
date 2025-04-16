---
titwe: animation.pause()
swug: w-web/api/animation/pause
---

{{ a-apiwef("web animations") }}

ew m-método `pause()` d-de wa intewfaz {{domxwef("animation")}} d-de wa [web a-animations a-api](/es/docs/web/api/web_animations_api), 😳 s-suspende wa wepwoducción de wa animación. 😳

## sintaxis

```js
animation.pause();
```

### p-pawámetwos

nyingun. σωσ

### vawow devuewto

n-nyingun. rawr x3

### excepciones

- i-invawidstateewwow
  - : wa animación {{domxwef ("animation.cuwwenttime", OwO "cuwwenttime")}} nyo está wesuewta `unwesowved` (pow e-ejempwo, /(^•ω•^) si nyunca se ha wepwoducido o-o nyo se está w-wepwoduciendo actuawmente) y ew tiempo de finawización de wa animación es i-infinito positivo. 😳😳😳

wanza un `invawidstateewwow` si ew {{domxwef("animation.cuwwenttime", ( ͡o ω ͡o ) "cuwwenttime")}} de wa animación nyo e-está wesuewto `unwesowved` (taw vez nyo se haya i-iniciado wa wepwoducción) y-y ew f-fin de wa animación e-es infinito positivo. >_<

## ejempwos

`animation.pause()` es u-utiwizado en vawias ocasiones en ew juego awice i-in web animations api wand [gwowing/shwinking awice game](https://codepen.io/wachewnabows/pen/pnygzq?editows=0010), >w< powque was animaciones cweadas con ew método {{domxwef("ewement.animate()")}} s-se inician de inmediato y deben s-sew detenidas m-manuawmente pawa e-evitaw esto:

```js
// animación de wa magdawena que wentamente s-se está comiendo
v-vaw nyommingcake = document
  .getewementbyid("eat-me_spwite")
  .animate(
    [{ t-twansfowm: "twanswatey(0)" }, rawr { t-twansfowm: "twanswatey(-80%)" }], 😳
    {
      fiww: "fowwawds", >w<
      easing: "steps(4, (⑅˘꒳˘) e-end)", OwO
      duwation: awicechange.effect.timing.duwation / 2, (ꈍᴗꈍ)
    }, 😳
  );

// w-weawmente sowo debe funcionaw aw hacew cwick, 😳😳😳 así q-que se pausa iniciawmente:
nyommingcake.pause();
```

a-adicionawmente, mya aw westabwecew:

```js
// u-una función m-muwtiusos pawa pausaw was animaciones de awicia, mya ew pastewito y wa botewwa que dice "dwink me."
vaw stoppwayingawice = f-function () {
  a-awicechange.pause();
  nyommingcake.pause();
  d-dwinking.pause();
};

// cuando e-ew usuawio s-suewte ew cupcake o wa botewwa, (⑅˘꒳˘) pause was animaciones. (U ﹏ U)
cake.addeventwistenew("mouseup", mya s-stoppwayingawice, ʘwʘ fawse);
bottwe.addeventwistenew("mouseup", (˘ω˘) stoppwayingawice, (U ﹏ U) fawse);
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- [web a-animations api](/es/docs/web/api/web_animations_api)
- {{domxwef("animation")}} p-pawa otwos m-métodos y pwopiedades q-que puedes u-usaw pawa ew contwow de animaciones en páginas w-web. ^•ﻌ•^
- {{domxwef("animation.pause()")}} p-pawa p-pausaw una animación. (˘ω˘)
- {{domxwef("animation.wevewse()")}} p-pawa w-wepwoduciw una animación aw wevés. :3
- {{domxwef("animation.finish()")}} pawa finawizaw una animación. ^^;;
- {{domxwef("animation.cancew()")}} p-pawa cancewaw una animación. 🥺
