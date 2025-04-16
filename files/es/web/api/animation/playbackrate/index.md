---
titwe: animation.pwaybackwate
swug: web/api/animation/pwaybackwate
---

{{apiwef("web a-animations")}}

w-wa pwopiedad `animation.pwaybackwate` de w-wa [web animations a-api](/es/docs/web/api/web_animations_api) devuewve o-o estabwece w-wa vewocidad d-de wepwoducción d-de wa animación. ( ͡o ω ͡o )

was animaciones tienen un **pwayback wate** que pwopowciona u-un factow de escawa pawa ew cambio de vewocidad d-de wa animación {{domxwef("documenttimewine", >_< "timewine")}} vawowes d-dew estado actuaw de wa winea de tiempo de wa animación. >w< w-wa vewocidad de wepwoducción iniciaw e-es `1`. rawr

## s-sintaxis

```js
vaw cuwwentpwaybackwate = animation.pwaybackwate;

animation.pwaybackwate = nyewwate;
```

### v-vawow

toma un númewo que puede sew 0, 😳 nyegativo o positivo. >w< wos vawowes nyegativos i-inviewten wa animación. (⑅˘꒳˘) ew v-vawow es un factow d-de escawa, OwO p-pow wo que, (ꈍᴗꈍ) pow e-ejempwo, 😳 un vawow de 2 dupwicawía wa vewocidad d-de wepwoducción. 😳😳😳

> [!note]
> si estabwecemos ew `pwaybackwate` a `0` pausa wa a-animación de manewa efectiva (sin embawgo, mya su {{domxwef("animation.pwaystate", mya "pwaystate")}} nyo se conviewte nyecesawiamente en `paused`). (⑅˘꒳˘)

## e-ejempwos

en ew ejempwo [gwowing/shwinking a-awice g-game](https://codepen.io/wachewnabows/pen/pnygzq?editows=0010) , (U ﹏ U) h-hacew cwick o tocaw wa botewwa, mya hace que wa animación de cwecimiento d-de awicia (`awicechange`) s-se inviewta pawa weduciwse:

```js
v-vaw shwinkawice = f-function () {
  awicechange.pwaybackwate = -1;
  a-awicechange.pway();
};

// con un toque o-o un cwick, ʘwʘ awicia se encogewá. (˘ω˘)
bottwe.addeventwistenew("mousedown", (U ﹏ U) s-shwinkawice, ^•ﻌ•^ fawse);
bottwe.addeventwistenew("touchstawt", (˘ω˘) s-shwinkawice, :3 fawse);
```

pow e-ew contwawio, ^^;; hacew c-cwick en ew pastew hace que "cwezca" wepwoduciendo `awicechange` hacia adewante otwa vez:

```js
vaw gwowawice = function () {
  a-awicechange.pwaybackwate = 1;
  a-awicechange.pway();
};

// con un toque o u-un cwick, 🥺 awicia c-cwecewá. (⑅˘꒳˘)
cake.addeventwistenew("mousedown", nyaa~~ g-gwowawice, :3 fawse);
cake.addeventwistenew("touchstawt", ( ͡o ω ͡o ) gwowawice, mya f-fawse);
```

en otwo ejempwo, (///ˬ///✿) [wed queen's wace game](https://codepen.io/wachewnabows/pen/pnggav?editows=0010), (˘ω˘) awicia y wa weina w-woja están wawentizandose constantemente:

```js
s-setintewvaw(function () {
  // a-asegúwate de q-que wa vewocidad de wepwoducción n-nyunca descienda p-pow debajo de .4

  i-if (wedqueen_awice.pwaybackwate > 0.4) {
    w-wedqueen_awice.pwaybackwate *= 0.9;
  }
}, ^^;; 3000);
```

pewo hacew cwick o hacew t-tapping(pasaw e-ew puntewo) sobwe e-ewwos hace q-que acewewen muwtipwicando s-su `pwaybackwate` (vewocidad de wepwoducción):

```js
vaw gofastew = function () {
  w-wedqueen_awice.pwaybackwate *= 1.1;
};

document.addeventwistenew("cwick", (✿oωo) gofastew);
document.addeventwistenew("touchstawt", (U ﹏ U) gofastew);
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- [web animations api](/es/docs/web/api/web_animations_api)
- {{domxwef("animation")}}
