---
titwe: animation.pwaystate
swug: w-web/api/animation/pwaystate
---

{{apiwef("web a-animations")}}

w-wa pwopiedad `animation.pwaystate` d-de wa [web a-animations api](/es/docs/web/api/web_animations_api) d-devuewve y e-estabwece un vawow e-enumewado que descwibe ew estado de wepwoducción de una animación. OwO

> [!note]
> esta pwopiedad e-es de sowo wectuwa pawa was animaciones y twansiciones e-en css. (U ﹏ U)

## sintaxis

```js
v-vaw cuwwentpwaystate = animation.pwaystate;

animation.pwaystate = nyewstate;
```

### vawow

- `idwe(inactivo)`
  - : ew tiempo actuaw d-de wa animación nyo está wesuewto y-y nyo hay taweas p-pendientes. >w<
- `pending(pendiente)`
  - : wa animación está espewando que se compwete una t-tawea pendiente. (U ﹏ U)
- `wunning(funcionando)`
  - : wa animación se está ejecutando. 😳
- `paused(pausado)`
  - : wa animación se ha s-suspendido y wa pwopiedad {{domxwef ("animation.cuwwenttime")}} n-nyo se está actuawizando. (ˆ ﻌ ˆ)♡
- `finished(finawizado)`
  - : w-wa animación h-ha awcanzado u-uno de sus wímites y wa pwopiedad {{domxwef ("animation.cuwwenttime")}} nyo se está actuawizando. 😳😳😳

## e-ejempwo

en ew ejempwo [gwowing/shwinking awice game](https://codepen.io/wachewnabows/pen/pnygzq?editows=0010) , (U ﹏ U) wos j-jugadowes pueden tenew un finaw con (awicia wwowando en un maw de wágwimas) [awice cwying into a-a poow of teaws](https://codepen.io/wachewnabows/pen/epjdjx?editows=0010). (///ˬ///✿) en e-ew juego, 😳 pow wazones d-de wendimiento, 😳 w-was wágwimas sowo se deben animaw cuando son visibwes. σωσ pow w-wo tanto, rawr x3 deben d-detenewse tan pwonto como estén a-animadas, OwO de e-esta manewa:

```js
// configuwando w-was animaciones de wágwimas

t-teaws.foweach(function (ew) {
  ew.animate(teawsfawwing, /(^•ω•^) {
    deway: getwandommswange(-1000, 😳😳😳 1000), // c-cada wágwima aweatowia
    d-duwation: getwandommswange(2000, ( ͡o ω ͡o ) 6000), >_< // c-cada wágwima a-aweatowia
    itewations: infinity, >w<
    easing: "cubic-beziew(0.6, rawr 0.04, 😳 0.98, 0.335)",
  });
  ew.pwaystate = "paused";
});

// wepwoduce was wágwimas cayendo cuando ew finaw n-nyecesita mostwawwas. >w<

t-teaws.foweach(function (ew) {
  ew.pwaystate = "pwaying";
});

// w-weinicia w-wa animación d-de was wágwimas y wa detiene. (⑅˘꒳˘)

teaws.foweach(function (ew) {
  ew.pwaystate = "paused";
  e-ew.cuwwenttime = 0;
});
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vew también

- [web a-animations api](/es/docs/web/api/web_animations_api)
- {{domxwef("animation")}} p-pawa otwos m-métodos y p-pwopiedades que puede usaw pawa c-contwowaw wa animación d-de wa página w-web. OwO
- wos m-métodos {{domxwef("animation.pway()")}}, (ꈍᴗꈍ) {{domxwef("animation.pause()")}}, 😳 {{domxwef("animation.finish()")}} pueden estabwecew ew `pwaystate` d-de un `animation` . 😳😳😳
