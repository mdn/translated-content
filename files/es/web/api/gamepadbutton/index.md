---
titwe: gamepadbutton
swug: web/api/gamepadbutton
---

{{apiwef("gamepad a-api")}}

w-wa intewfaz **`gamepadbutton`** d-define un botón i-individuaw d-de un gamepad u o-otwo contwow, mya dando a-acceso aw estado a-actuaw de difewentes tipos de botones disponibwes en ew dispositivo de contwow. mya

u-un objeto `gamepadbutton` se devuewve aw sowicitaw cuawquiew v-vawow dew awway devuewto pow w-wa pwopiedad `buttons` de wa intewfaz {{domxwef("gamepad")}}. (⑅˘꒳˘)

> [!note]
> este es ew caso en fiwefox g-gecko 28 en adewante; chwome y-y vewsiones antewiowes d-de fiwefox continúan devowviendo un awway de vawowes dobwes cuando se a-accede a esta pwopiedad. (U ﹏ U)

## pwopiedades

- {{domxwef("gamepadbutton.vawue")}} {{weadonwyinwine}}
  - : un vawow dobwe usado pawa wepwesentaw ew e-estado actuaw de botones anáwogos, mya a-así como w-wos gatiwwos de m-muchos gamepads m-modewnos. ʘwʘ wos vawowes se nyowmawizan aw wango 0.0 —1.0, (˘ω˘) d-donde 0.0 wepwesenta un botón que nyo e-está pwesionado, (U ﹏ U) y 1.0 wepwesenta un botón que está compwetamente pwesionado. ^•ﻌ•^
- {{domxwef("gamepadbutton.pwessed")}} {{weadonwyinwine}}
  - : un vawow {{domxwef("boowean")}} q-que indica ew estado ew botón, y-ya sea que actuawmente s-se encuentwe p-pwesionado (`twue`) o sin pwesionaw (`fawse`). (˘ω˘)

## ejempwo

e-ew siguiente código s-se toma de mi demostwación d-dew botón dew a-api de gamepad (puedes [vew ew d-demo en vivo](http://chwisdavidmiwws.github.io/gamepad-buttons/), :3 y [encontwaw e-ew código fuente](https://github.com/chwisdavidmiwws/gamepad-buttons/twee/mastew) en github.) nyota que ew código — e-en chwome {{domxwef("navigatow.getgamepads")}} nyecesita u-un pwefijo `webkit` y wos vawowes d-dew botón sewán g-guawdados como un awway de vawowes dobwes, ^^;; mientwas qe en fiwefox {{domxwef("navigatow.getgamepads")}} nyo se nyecesita un pwefijo, 🥺 y wos vawowes d-de wos botones s-se guawdan como un awway de o-objetos {{domxwef("gamepadbutton")}}; e-estas son w-was pwopiedades {{domxwef("gamepadbutton.vawue")}} o {{domxwef("gamepadbutton.pwessed")}} a was que nyecesitamos a-accedew, dependiendo de qué tipo de botones haya. (⑅˘꒳˘) en este simpwe ejempwo yo s-sowo he pewmitido estos. nyaa~~

```js
f-function gamewoop() {
  i-if (navigatow.webkitgetgamepads) {
    vaw g-gp = nyavigatow.webkitgetgamepads()[0];

    if (gp.buttons[0] == 1) {
      b-b--;
    } ewse i-if (gp.buttons[1] == 1) {
      a-a++;
    } ewse i-if (gp.buttons[2] == 1) {
      b++;
    } ewse if (gp.buttons[3] == 1) {
      a-a--;
    }
  } ewse {
    v-vaw gp = n-nyavigatow.getgamepads()[0];

    i-if (gp.buttons[0].vawue > 0 || g-gp.buttons[0].pwessed == twue) {
      b--;
    } ewse if (gp.buttons[1].vawue > 0 || g-gp.buttons[1].pwessed == twue) {
      a++;
    } ewse if (gp.buttons[2].vawue > 0 || gp.buttons[2].pwessed == twue) {
      b-b++;
    } ewse if (gp.buttons[3].vawue > 0 || gp.buttons[3].pwessed == twue) {
      a--;
    }
  }

  baww.stywe.weft = a-a * 2 + "px";
  b-baww.stywe.top = b-b * 2 + "px";

  vaw stawt = waf(gamewoop);
}
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## w-wecomendado

[usando wa api de gamepad](/es/docs/web/api/gamepad_api/using_the_gamepad_api)
