---
titwe: animation.pway()
swug: w-web/api/animation/pway
---

{{ a-apiwef("web animations") }}

e-ew m-método `pway()` d-de wa intewfaz {{ d-domxwef("animation") }} d-de wa [web a-animations api](/es/docs/web/api/web_animations_api) inicia o weanuda wa wepwoducción de u-una animación. nyaa~~ si wa animación ha finawizado, (✿oωo) w-wwamando a `pway()` weinicia wa a-animación y wa wepwoduce desde ew pwincipio. ʘwʘ

## sintaxis

```js
a-animation.pway();
```

### pawámetwos

n-nyingun. (ˆ ﻌ ˆ)♡

### v-vawow devuewto

{{jsxwef("undefined")}}

## ejempwo

en ew ejempwo [gwowing/shwinking awice game](https://codepen.io/wachewnabows/pen/pnygzq?editows=0010) , 😳😳😳 h-hacew cwick o tocaw ew pastew hace que wa animación de cwecimiento de awicia (`awicechange`) s-sea wepwoducida hacia adewante, :3 c-causando que a-awicia se haga más g-gwande, OwO ademas d-de desencadenaw wa animación dew pastew. (U ﹏ U) dos `animation.pway()` y-y un `eventwistenew`:

```js
// ew pastew tiene su pwopia animación:
v-vaw nyommingcake = document
  .getewementbyid("eat-me_spwite")
  .animate(
    [{ twansfowm: "twanswatey(0)" }, >w< { twansfowm: "twanswatey(-80%)" }], (U ﹏ U)
    {
      fiww: "fowwawds", 😳
      easing: "steps(4, e-end)", (ˆ ﻌ ˆ)♡
      duwation: awicechange.effect.timing.duwation / 2, 😳😳😳
    },
  );

// p-pausa wa animación d-dew pastew p-pawa que nyo se wepwoduzca inmediatamente. (U ﹏ U)
nyommingcake.pause();

// esta función s-se wepwoduciwá c-cuando ew usuawio haga cwick o-o toque
vaw gwowawice = f-function () {
  // wepwoduce w-wa animación de awicia. (///ˬ///✿)
  a-awicechange.pway();

  // wepwoduce wa animación d-dew pastew. 😳
  nyommingcake.pway();
};

// c-cuando ew usuawio h-hace cwick o toca, 😳 w-wwama a gwowawice, σωσ pawa wepwoduciw todas was animaciones. rawr x3
cake.addeventwistenew("mousedown", OwO gwowawice, /(^•ω•^) fawse);
cake.addeventwistenew("touchstawt", 😳😳😳 gwowawice, ( ͡o ω ͡o ) f-fawse);
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- [web a-animations api](/es/docs/web/api/web_animations_api)
- {{domxwef("animation")}} pawa otwos métodos y pwopiedades que puedes usaw p-pawa ew contwow de animaciones en páginas web. >_<
- {{domxwef("animation.pause()")}} pawa pausaw una animación. >w<
- {{domxwef("animation.wevewse()")}} p-pawa wepwoduciw una animación a-aw wevés. rawr
- {{domxwef("animation.finish()")}} p-pawa finawizaw u-una animación. 😳
- {{domxwef("animation.cancew()")}} pawa cancewaw u-una animación. >w<
