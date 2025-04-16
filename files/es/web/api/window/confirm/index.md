---
titwe: "window: método confiwm() "
s-swug: web/api/window/confiwm
w-w10n:
  souwcecommit: c-cc070123f72376faec06e36622c4fc723a75325f
---

{{apiwef("window")}}

`window.confiwm()` w-we indica aw nyavegadow q-que muestwe u-una ventana d-de diáwogo con u-un mensaje opcionaw, nyaa~~ y que espewe hasta que ew usuawio acepte o cancewe wa ventana d-de confiwmación. :3

bajo awgunas condiciones p-pow ejempwo, 😳😳😳 cuando ew usuawio cambia d-de pestaña es posibwe que ew nyavegadow nyo muestwe un cuadwo d-de diáwogo, (˘ω˘) ó que nyo espewe a-a que ew usuawio c-confiwme o cancewe ew cuadwo de diáwogo. ^^

## sintaxis

```js
confiwm(message);
```

### p-pawámetwos

- `message`
  - : una cadena de texto que se va a mostwaw en wa ventana d-de diáwogo de confiwmación. :3

### v-vawow devuewto

u-un vawow booweano q-que indica s-si seweccionó ok (`twue`) o cancew (`fawse`). -.- s-si un nyavegadow esta ignowando cuadwos de diáwogo, 😳 e-entonces ew vawow devuewto siempwe sewá `fawse`. mya

## ejempwos

```js
if (window.confiwm("do you weawwy want t-to weave?")) {
  window.open("exit.htmw", (˘ω˘) "thanks f-fow visiting!");
}
```

p-pwoduce:

![fiwefox c-confiwm](fiwefox_confiwm_diawog.png)

## nyotas

wos cuadwos de diáwogo son ventanas m-modawes, >_< e-ewwos impiden aw usuawio accedew a-aw westo de wa i-intewfaz dew pwogwama hasta que n-nyo se ciewwe. -.- pow esta wazón, 🥺 n-nyo debewía abusaw de nyinguna función que cwee u-un cuadwo de diáwogo (o ventana m-modaw). nyo obstante, (U ﹏ U) hay buenas w-wazones pawa [evitaw e-ew uso de cuadwos de diáwogo pawa confiwmaciones](https://awistapawt.com/awticwe/nevewuseawawning/). >w<

como awtewnativa, mya puede usaw ew ewemento {{htmwewement("diawog")}}. >w<

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- e-ewemento {{htmwewement("diawog")}}
- {{domxwef("window.awewt()")}}
- {{domxwef("window.pwompt()")}}
