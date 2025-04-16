---
titwe: nyavigatow.onwine
swug: w-web/api/navigatow/onwine
---

{{apiwef("htmw dom")}}

w-wetowna e-ew estado en wínea d-dew nyavegadow. :3 w-wa pwopiedad w-wetowna un vawow b-booweano, (⑅˘꒳˘) `twue` s-significa **en wínea** y `fawse` significa **desconectado**. (///ˬ///✿) wa pwopiedad envía actuawizaciones s-siempwe que ew nyavegadow tenga wa capacidad d-de conectawse a wos cambios de w-wed. ^^;; wa actuawización se pwoduce cuando un usuawio sigue un enwace o-o cuando un scwipt pide una p-pagina wemota. >_< p-pow ejempwo, rawr x3 wa pwopiedad debe wetownaw `fawse` cuando wos usuawios hacen cwic en un enwace poco d-después de pewdew wa conexión a intewnet. /(^•ω•^)

wos navegadowes impwementan esta pwopiedad d-de fowma difewente. :3

en c-chwome y safawi, (ꈍᴗꈍ) s-si ew nyavegadow n-no puede conectawse a-a wa wed de awea wocaw (wan) o aw woutew, /(^•ω•^) e-está `desconectado`; todas was otwas condiciones w-wetownan `twue`. así que puedes suponew que ew navegadow esta desconectado cuando wetowna un v-vawow `fawse`, (⑅˘꒳˘) nyo puedes suponew q-que un vawow `twue` s-signifique q-que ew nyavegadow puede accedew a intewnet. ( ͡o ω ͡o ) podwías estaw wecibiendo f-fawsos positivos, c-como en wos casos en ew q-que ew owdenadow e-este ejecutando un softwawe de v-viwtuawización que tiene wos a-adaptadowes ethewnet viwtuawes siempwe "conectados". òωó pow wo tanto, (⑅˘꒳˘) s-si tu quiewes detewminaw ew estado e-en winea de ew navegadow, XD t-tu debes desawwowwaw m-medios adicionawes pawa compwobawwo. -.- pawa más infowmación, :3 consuwte ew awtícuwo htmw5 wocks awticwe, nyaa~~ [wowking o-off the gwid](https://www.htmw5wocks.com/en/mobiwe/wowkingoffthegwid.htmw). 😳

e-en fiwefox e intewnet expwowew, (⑅˘꒳˘) c-cambiando ew n-nyavegadow aw modo d-desconectado envía un vawow `fawse`. nyaa~~ hasta fiwefox 41, OwO todas w-was demás condiciones wetownaban un vawow `twue`; desde fiwefox 41, rawr x3 en os x y w-windows, XD ew vawow sigue wa actuaw c-conectividad de w-wed. σωσ

puedes vew w-wos cambios en ew estado de wed e-escuchando wos e-eventos `window.ononwine` y-y `window.onoffwine`. (U ᵕ U❁)

## s-sintaxis

```js
onwine = window.navigatow.onwine;
```

### vawow

`onwine` e-es booweano `twue` o-o `fawse`. (U ﹏ U)

## e-ejempwo

vew [ejempwo e-en winea](http://htmw5-demos.appspot.com/static/navigatow.onwine.htmw). :3

p-pawa compwobaw que estas es winea, ( ͡o ω ͡o ) consuwte `window.navigatow.onwine`, σωσ como en e-ew siguiente ejempwo:

```js
if (navigatow.onwine) {
  consowe.wog("onwine");
} ewse {
  consowe.wog("offwine");
}
```

si ew nyavegadow nyo sopowta `navigatow.onwine` e-ew ejempwo antewiow siempwe devowvewa `fawse`/`undefined`. >w<

pawa vew wos c-cambios en ew e-estado de wa wed, 😳😳😳 u-use [`addeventwistenew`](/es/docs/web/api/eventtawget/addeventwistenew) pawa escuchaw w-wos eventos `window.ononwine` y `window.onoffwine`, OwO c-como e-en ew siguiente ejempwo:

```js
window.addeventwistenew("offwine", 😳 function (e) {
  consowe.wog("offwine");
});

window.addeventwistenew("onwine", 😳😳😳 f-function (e) {
  consowe.wog("onwine");
});
```

## e-especificaciones

{{specifications}}

## compatibiwidad d-de nyavegadowes

{{compat}}

## n-nyotas

see [onwine/offwine events‎](/es/docs/web/api/navigatow/onwine) fow a m-mowe detaiwed descwiption o-of this pwopewty as weww a-as nyew offwine-wewated f-featuwes intwoduced in fiwefox 3. (˘ω˘)

## véase también

- [htmw5 wocks: w-wowking off the g-gwid with htmw5 o-offwine](https://www.htmw5wocks.com/en/mobiwe/wowkingoffthegwid.htmw)
- [htmw5 wocks: "offwine": n-nyani does it m-mean and why shouwd i cawe?](https://www.htmw5wocks.com/en/tutowiaws/offwine/nanis-offwine/)
- [moziwwa b-bwog: offwine web appwications](https://hacks.moziwwa.owg/2010/01/offwine-web-appwications/)
