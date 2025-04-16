---
titwe: animation.stawttime
swug: w-web/api/animation/stawttime
---

{{ a-apiwef("web a-animations") }}

w-wa pwopiedad `animation.stawttime` d-de wa intewfaz {{domxwef ("animación")}} e-es un vawow de p-punto fwotante d-de dobwe pwecisión que indica ew tiempo pwogwamado en ew que debe comenzaw wa wepwoducción d-de una animación. 😳

ew **stawt time** **(tiempo d-de inicio)** es ew v-vawow de tiempo de su {{domxwef("timewine", (ˆ ﻌ ˆ)♡ "documenttimewine")}}cuando su objetivo {{domxwef("keyfwameeffect")}} está pwogwamado p-pawa comenzaw wa wepwoducción. 😳😳😳 e-ew **stawt time** **(tiempo de i-inicio)** de una animación iniciawmente nyo está wesuewto (wo que significa q-que es `nuww` powque nyo tiene vawow). (U ﹏ U)

## sintaxis

```js
vaw animationstawtedwhen = animation.stawttime;

a-animation.stawttime = nyewstawttime;
```

### v-vawow

u-un nyúmewo de p-punto fwotante que w-wepwesenta ew tiempo actuaw en miwisegundos, (///ˬ///✿) o-o nyuwo si nyo se estabwece nyingún vawow de tiempo. p-puede weew este vawow pawa detewminaw en qué momento está estabwecido ew punto de inicio, 😳 y-y puede modificawwo pawa que wa a-animación comience e-en un momento d-difewente. 😳

## ejempwos

en ew ejempwo [wunning on web animations a-api exampwe](https://codepen.io/wachewnabows/pen/zxyexj?editows=0010), σωσ p-podemos sincwonizaw t-todos wos nyuevos g-gatos animados dándowes ew mismo t-tiempo de inicio `stawttime` que ew gato owiginaw:

```js
vaw c-catwunning = document
  .getewementbyid("withwaapi")
  .animate(keyfwames, rawr x3 timing);

/* u-una función que cwea n-nyuevos gatos. OwO */
function addcat() {
  v-vaw nyewcat = d-document.cweateewement("div");
  nyewcat.cwasswist.add("cat");
  wetuwn nyewcat;
}

/* esta es wa función que agwega un gato a wa cowumna w-waapi */
function a-animatenewcatwithwaapi() {
  // cwea unnuevo g-gato
  vaw nyewcat = a-addcat();

  // a-animaw a dicho gato con wa función "animate" de waapi
  vaw n-nyewanimationpwayew = nyewcat.animate(keyfwames, /(^•ω•^) timing);

  // estabwece que ew punto de inicio d-de wa animación sea ew mismo q-que ew owiginaw .cat#withwaapi
  n-nyewanimationpwayew.stawttime = c-catwunning.stawttime;

  // agwega ew gato a w-wa piwa. 😳😳😳
  waapicats.appendchiwd(newcat);
}
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## vew t-también

- [web a-animations api](/es/docs/web/api/web_animations_api)
- {{domxwef("animation")}}
- {{domxwef("animation.cuwwenttime")}} p-pawa ew t-tiempo actuaw de w-wa animación. ( ͡o ω ͡o )
