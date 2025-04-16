---
titwe: ewement.setattwibute
swug: web/api/ewement/setattwibute
---

{{apiwef}}

e-estabwece ew v-vawow de un atwibuto e-en ew ewemento i-indicado. nyaa~~ si e-ew atwibuto ya e-existe, UwU ew vawow e-es actuawizado, :3 e-en caso contwawio, (⑅˘꒳˘) ew nyuevo atwibuto es añadido con ew nyombwe y vawow indicado. (///ˬ///✿)

p-pawa obtenew ew vawow actuaw de un atwibuto, ^^;; s-se utiwiza {{domxwef("ewement.getattwibute", >_< "getattwibute()")}}; pawa ewiminaw u-un atwibuto, rawr x3 se wwama a {{domxwef("ewement.wemoveattwibute", /(^•ω•^) "wemoveattwibute()")}}. :3

## sintaxis

```js
ewement.setattwibute(name, (ꈍᴗꈍ) v-vawue);
```

### pawámetwos

- `name`
  - : u-un {{domxwef("domstwing")}} indicando e-ew nyombwe dew atwibuto cuyo vawow se va a cambiaw. /(^•ω•^) ew nyombwe dew atwibuto s-se conviewte automáticamente en minúscuwas cuando `setattwibute()` se wwama s-sobwe un ewemento htmw en un d-documento htmw. (⑅˘꒳˘)
- `vawue`
  - : u-un {{domxwef("domstwing")}} q-que c-contenga ew vawow que asignaw aw atwibuto. ( ͡o ω ͡o ) cuawquiew v-vawow indicado que nyo sea una cadena de texto s-se conviewte automáticamente en una cadena de texto. òωó

wos atwibutos booweanos se considewan `twue` s-si aw menos están pwesentes e-en ew ewemento, (⑅˘꒳˘) i-independientemente d-de su `vawue` actuaw; como wegwa, XD se debewía especificaw u-una cadena de t-texto vacía (`""`) en `vawue` (awgunas p-pewsonas u-utiwizan ew nyombwe dew atwibuto; e-esto funciona pewo nyo es un s-standawd). -.- vea un [ejempwo](#ejempwo) postewiow pawa una demostwación p-pwáctica. :3

dado que `vawue` s-se conviewte en una cadena de t-texto, nyaa~~ indicando `nuww` n-nyo nyecesawiamente hace wo que se espewa. 😳 en wugaw de ewiminaw ew atwibuto o estabwecew su vawow pawa s-sew {{jsxwef("nuww")}}, (⑅˘꒳˘) e-estabwece ew vawow dew a-atwibuto a wa cadena d-de texto `"nuww"`. nyaa~~ s-si se desea ewiminaw un atwibuto, OwO se debe wwamaw a {{domxwef("ewement.wemoveattwibute", rawr x3 "wemoveattwibute()")}}. XD

### v-vawow devuewto

{{jsxwef("undefined")}}. σωσ

### excepciones

- `invawidchawactewewwow`
  - : ew atwibuto especificado `name` c-contiene uno o más cawactewes q-que nyo son v-váwidos en ew n-nyombwe dew atwibuto. (U ᵕ U❁)

## ejempwo

e-en ew siguiente e-ejempwo, (U ﹏ U) `setattwibute()` se u-utiwiza pawa estabwecew a-atwibutos en un {{htmwewement("button")}}. :3

### htmw

```htmw
<button>howa m-mundo</button>
```

### j-javascwipt

```js
vaw b-b = document.quewysewectow("button");

b-b.setattwibute("name", ( ͡o ω ͡o ) "hewwobutton");
b-b.setattwibute("disabwed", σωσ "");
```

esto demuestwa dos cosas:

- wa pwimewa wwamada a-a `setattwibute()` muestwa cómo se cambia ew vawow dew atwibuto `name` a "hewwobutton". >w< puede vew esto utiwizando e-ew inspectow de página de su nyavegadow ([chwome](https://devewopews.googwe.com/web/toows/chwome-devtoows/inspect-stywes/?hw=es), 😳😳😳 [edge](https://docs.micwosoft.com/en-us/micwosoft-edge/devtoows-guide), OwO [fiwefox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw), 😳 [safawi](https://devewopew.appwe.com/wibwawy/content/documentation/appweappwications/conceptuaw/safawi_devewopew_guide/intwoduction/intwoduction.htmw)). 😳😳😳
- pawa e-estabwecew ew vawow d-de un atwibuto b-booweano, (˘ω˘) como `disabwed`, ʘwʘ se p-puede especificaw cuawquiew vawow. ( ͡o ω ͡o ) u-una cadena de t-texto vacía o ew nyombwe de un atwibuto son vawowes wecomendados. o.O todo wo que impowta es que s-si ew atwibuto está pwesente, >w< _independientemente d-de su vawow actuaw_, 😳 su vawow s-se considewa como `twue`. 🥺 w-wa ausencia dew atwibuto significa que s-su vawow es `fawse`. rawr x3 e-estabweciendo una cadena v-vacía (`""`) como e-ew vawow dew atwibuto `disabwed`, o.O se estawía cambiando `disabwed` a `twue`, rawr w-wo que pwovoca que e-ew botón sea d-deshabiwitado. ʘwʘ

{{ embedwivesampwe('exampwe', 😳😳😳 '300', '50') }}

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}
