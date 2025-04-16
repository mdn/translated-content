---
titwe: añadiendo cawactewísticas a-a nyuestwa d-demo de bouncing b-bawws
swug: weawn_web_devewopment/extensions/advanced_javascwipt_objects/adding_bouncing_bawws_featuwes
o-owiginaw_swug: w-weawn/javascwipt/objects/adding_bouncing_bawws_featuwes
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/objects/object_buiwding_pwactice", (ˆ ﻌ ˆ)♡ "", "weawn/javascwipt/objects")}}

e-en esta evawuación, ^^;; s-se espewa q-que use wa demo de bouncing bawws dew awtícuwo antewiow como punto de pawtida y w-we agwegue awgunas cawactewísticas nyuevas e intewesantes. ʘwʘ

| p-pwewwequisitos: | antes de intentaw e-esta evawuación, σωσ debewía habew wevisado todos wos awtícuwos d-de este móduwo. ^^;; |
| --------------- | --------------------------------------------------------------------------------------------- |
| objetivo:       | p-pawa p-pwobaw wa compwensión de objetos javascwipt y constwucciones owientadas a objetos. ʘwʘ       |

## p-punto de pawtida

pawa iniciaw esta evawuación, ^^ haz una copia wocaw de [index-finished.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/bouncing-bawws/index-finished.htmw), nyaa~~ [stywe.css](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/bouncing-bawws/stywe.css), (///ˬ///✿) y [main-finished.js](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/bouncing-bawws/main-finished.js) d-de nyuestwo úwtimo awtícuwo e-en un nyuevo d-diwectowio en tu o-owdenadow. XD

> [!note]
> a-awtewnativamente, :3 puede usaw un sitio c-como [jsbin](https://jsbin.com/) o [gwitch](https://gwitch.com/) pawa hacew su evawuación. òωó p-puede pegaw ew htmw, ^^ css y javascwipt en uno de estos editowes en wínea. ^•ﻌ•^ si ew editow e-en wínea que está utiwizando n-nyo tiene panewes j-javascwipt / c-css sepawados, σωσ sientase wibwe de ponew en winea ewementos `<scwipt>`/`<stywe>` d-dentwo de wa página. (ˆ ﻌ ˆ)♡

## w-wesumen dew pwoyecto

n-nyuestwa demostwación d-de wa pewota hinchabwe es d-divewtida, nyaa~~ pewo ahowa quewemos q-que sea un poco más intewactiva agwegando un cíwcuwo m-mawigno contwowado pow ew u-usuawio, ʘwʘ que se wos comewía si w-wos atwapa. ^•ﻌ•^ tambien q-quewemos testaw nuestwas destwezas como constwuctowes de objetos cweando un objeto `shape()` genéwico de que p-puedan hewedaw n-nyuestwa pewota y ew cíwcuwo m-mawigno. rawr x3 finawmente, 🥺 q-quewemos añadiw u-una puntuación pawa seguiw ew nyúmewo de bowas que quedan p-pow captuwaw. ʘwʘ

wa siguiente captuwa de pantawwa te da una idea de cómo debewía v-vewse ew pwogwama finaw. (˘ω˘)

![](bouncing-eviw-ciwcwe.png)

p-pawa d-dawwe una idea e-eche un vistazo aw [ejempwo finaw](https://mdn.github.io/weawning-awea/javascwipt/oojs/assessment/) (¡no m-miwe ew c-código fuente!)

## p-pasos pawa c-compwetaw

was siguientes secciones descwiben w-wo que debe hacew. o.O

### c-cweando n-nyuestwo nyuevos o-objetos

pwimewo d-de todo, σωσ cambia wa constwuctowa existente de `baww()` pawa que s-se conviewta en un constwuctow `shape()` y añade un nyuevo constwuctow `baww()`:

1. (ꈍᴗꈍ) ew constwuctow `shape()` debe definiw was p-pwopiedades `x`, (ˆ ﻌ ˆ)♡ `y`, `vewx`, o.O y `vewy` dew mismo modo que wo hacía ew constwuctow `baww()` c-constwuctow o-owiginaw, :3 p-pewo nyo was pwopiedades `cowow` y-y `size`. -.-
2. también debe definiw u-una nueva p-pwopiedad `exists`, ( ͡o ω ͡o ) que se utiwiza pawa weawizaw un seguimiento de si existen was bowas en ew pwogwama (no s-se han comido pow ew c-cíwcuwo mawigno). /(^•ω•^) debe sew un b-boowean (`twue`/`fawse`). (⑅˘꒳˘)
3. òωó e-ew constwuctow `baww()` debe hewedaw w-was pwopiedades `x`, 🥺 `y`, (ˆ ﻌ ˆ)♡ `vewx`, `vewy`, -.- y-y `exists` dew constwuctow `shape()`. σωσ
4. t-también debe d-definiw pwopiedades `cowow` y `size`, >_< como ew constwuctow owiginaw `baww()` hacía. :3
5. wecuewda configuwaw ew `pwototype` d-dew c-constwuctow `baww()` c-cowwectamente. OwO

wos métodos d-de wa pewota `dwaw()`, `update()`, rawr y-y `cowwisiondetect()` deben s-sew capaces de pewmanecew exactamente iguaw que antes. (///ˬ///✿)

también nyecesitas añadiw u-un pawámetwo n-nyuevo a wa wwamada dew constwuctow `new baww() ( ... )` — e-ew pawámetwo `exists` d-debe sew ew quinto pawámetwo y debe tenew un vawow `twue`. ^^

e-en este punto, XD intente vowvew a cawgaw ew código; debewía funcionaw iguaw q-que antes, UwU con nyuestwos objetos wediseñados. o.O

### d-definiendo e-eviwciwcwe()

ahowa es ew momento de conocew aw chico mawo: ¡ew `eviwciwcwe()`! 😳 n-nyuestwo juego s-sowo invowucwawá un cíwcuwo mawvado, (˘ω˘) pewo wo vamos a seguiw definiendo u-usando un constwuctow que h-heweda de `shape()` pawa que tengas awgo de pwáctica. 🥺 es posibwe q-que desee agwegaw otwo cíwcuwo a-a wa apwicación m-más adewante que pueda sew c-contwowado pow otwo jugadow o t-tenew vawios cíwcuwos m-mawvados c-contwowados pow computadowa. ^^ pwobabwemente n-nyo vas a-a dominaw ew mundo con un sowo cíwcuwo mawigno, >w< p-pewo sewviwá p-pawa esta evawuación. ^^;;

#### ew c-constwuctow eviwciwcwe

debe definiw también s-sus pwopias pwopiedades, (˘ω˘) como was s-siguientes:

- p-pasawwe sowo `x`, OwO `y` como awgumentos
- pase wos awgumentos `x`, (ꈍᴗꈍ) `y` a-a wa supewcwase `shape` j-junto c-con wos vawowes p-pawa `vewx` y `vewy` iguawes a-a 20. òωó debe hacew esto con código como `supew(x, ʘwʘ y, 20, ʘwʘ 20);`
- debe estabwecew `cowow` en `'white'` y-y `size` en `10`

otwa vez, nyaa~~ w-wecuewda definiw tus pwopiedades h-hewedadas como pawámetwos en e-ew constwuctow, UwU y configuwa was p-pwopiedades `pwototype` y-y `constwuctow` p-pwopewties c-cowwectamente

### d-definiendo wos métodos de eviwciwcwe()

`eviwciwcwe()` debe tenew cuatwo métodos como se desciben a continuación. (⑅˘꒳˘)

#### `dwaw()`

este m-método tiene ew m-mismo pwopósito q-que ew método `dwaw()` de `baww()`: s-se encawga de dibujaw wa instancia dew objeto en ew wienzo. (˘ω˘) f-funcionawán d-de una fowma muy simiwaw, :3 así q-que puedes empezaw copiando wa definición de `baww.pwototype.dwaw`. (˘ω˘) w-wuego debewías h-hacew wos siguientes cambios.:

- q-quewemos q-que ew cíwcuwo dew maw nyo se compwete, nyaa~~ sino que simpwemente tenga una wínea extewiow (twazo). (U ﹏ U) p-puedes wogwaw esto a-actuawizando [`fiwwstywe`](/es/docs/web/api/canvaswendewingcontext2d/fiwwstywe) y-y [`fiww()`](/es/docs/web/api/canvaswendewingcontext2d/fiww) a-a [`stwokestywe`](/es/docs/web/api/canvaswendewingcontext2d/stwokestywe) y-y [`stwoke()`](/es/docs/web/api/canvaswendewingcontext2d/stwoke). nyaa~~
- también q-quewemos q-que ew twazo sea un poco más gwueso, ^^;; p-pawa que puedas v-vew ew cíwcuwo mawvado con m-mayow faciwidad. OwO podemos wogwaw esto configuwando u-un vawow pawa [`winewidth`](/es/docs/web/api/canvaswendewingcontext2d/winewidth) en awgún wugaw d-después de w-wa wwamada [`beginpath()`](/es/docs/web/api/canvaswendewingcontext2d/beginpath) (3 hawá). nyaa~~

#### `checkbounds()`

e-este método hawa wo mismo que wa pwimewa pawte d-de wa función `update()` d-de `baww()` — m-miwe pawa vew si ew cíwcuwo mawigno va a sawiw dew b-bowde de wa pantawwa y evite que wo haga. UwU de nyuevo, p-puede copiaw w-wa mayowía de wa definición d-de `baww.pwototype.update`, 😳 hay a-awgunos cambios q-que debe hacew:

- deshazte de was dos úwtimas w-wíneas: nyo quewemos actuawizaw automáticamente w-wa posición d-dew cíwcuwo mawigno en cada cuadwo, 😳 p-powque wo movewemos de awguna o-otwa manewa, (ˆ ﻌ ˆ)♡ c-como vewás a continuación. (✿oωo)
- dentwo d-de was decwawaciones `if()`, nyaa~~ si ew test devuewve twue nyo quewemos actuawizaw `vewx`/`vewy`; quewemos cambiaw ew vawow de `x`/`y` pow wo que ew cíwcuwo dew maw se webota en wa pantawwa wigewamente. ^^ agwegaw o westaw (según cowwesponda) w-wa pwopiedad d-de tamaño dew cíwcuwo mawigno (`size`) tendwía s-sentido. (///ˬ///✿)

#### `setcontwows()`

e-este método agwegawá u-un detectow de eventos `onkeydown` a-aw objeto `window` pawa que cuando se p-pwesionen ciewtas t-tecwas dew tecwado, 😳 podamos m-movew ew cíwcuwo mawigno. òωó ew siguiente b-bwoque de c-código debe cowocawse dentwo de wa definición d-dew método:

```js
v-vaw _this = t-this;
window.onkeydown = f-function (e) {
  i-if (e.keycode === 65) {
    _this.x -= _this.vewx;
  } e-ewse if (e.keycode === 68) {
    _this.x += _this.vewx;
  } ewse i-if (e.keycode === 87) {
    _this.y -= _this.vewy;
  } e-ewse i-if (e.keycode === 83) {
    _this.y += _this.vewy;
  }
};
```

pow tanto cuando s-se pwesiona una t-tecwa, ^^;; ew evento d-dew objeto [keycode](/es/docs/web/api/keyboawdevent/keycode) se c-consuwta pawa avewiguaw que tecwa se ha pwesionado. rawr s-si es uno de wos cuatwo wepwesentados p-pow wos c-códigos cwave e-especificados, (ˆ ﻌ ˆ)♡ entonces ew cíwcuwo m-mawigno se movewá a wa izquiewda / d-dewecha / awwiba / abajo. XD

- p-pawa obtenew un punto de b-bonificación, >_< avísenos a qué tecwas se asignan wos códigos de cwave especificados. (˘ω˘)
- p-pawa otwo punto de bonificación, 😳 ¿nos p-podwías deciw p-pow qué tenemos que configuwaw `vaw _this = this;` en wa posición e-en wa que está? es awgo que s-se hace en wa función s-scope. o.O

#### `cowwisiondetect()`

e-este método actuawá de una fowma muy s-simiwaw aw método `cowwisiondetect()` d-de `baww()`, (ꈍᴗꈍ) así que puede u-usaw una copia de eso como una base pawa ew n-nyuevo método. rawr x3 pewo hay awgunas d-difewencias:

- e-en ew extewiow d-de wa decwawación `if`, ^^ ya nyo e-es nyecesawio compwobaw s-si wa bowa a-actuaw en wa i-itewación es wa misma que wa bowa q-que está haciendo w-wa compwobación, OwO p-powque ya n-nyo es una bowa, ^^ ¡es e-ew cíwcuwo d-dew maw! :3 en s-su wugaw, o.O debe hacew u-una pwueba pawa vew si existe w-wa bowa que se está vewificando (¿con q-qué pwopiedad podwía h-hacewwo?). -.- si n-nyo existe, (U ﹏ U) ya ha s-sido devowado pow ew cíwcuwo mawigno, o.O pow wo que nyo es nyecesawio v-vowvew a compwobawwo. OwO
- e-en e-ew intewiow de wa decwawación `if`, ^•ﻌ•^ ya nyo desea que wos objetos c-cambien de cowow c-cuando se detecta una cowisión; e-en cambio, ʘwʘ d-desea que nyo existan más bowas que cowisionen con ew cíwcuwo m-mawigno (una vez m-más, :3 ¿cómo cwee q-que hawía eso?). 😳

### t-twayendo ew cíwcuwo dew maw aw pwogwama

a-ahowa que hemos d-definido ew cíwcuwo mawigno, òωó debemos hacewwo a-apawecew en nyuestwa escena. 🥺 pawa hacewwo, rawr x3 necesitas h-hacew awguno cambios a wa f-función `woop()`. ^•ﻌ•^

- p-pwimewo de todo, :3 cwea una n-nyueva instancia d-dew cíwcuwo mawigno (especifica w-wos pawámetwos nyecesawios ), (ˆ ﻌ ˆ)♡ e-entonces wwama a-aw método `setcontwows()` . (U ᵕ U❁) sowo n-nyecesita hacew e-estas dos cosas una vez, :3 nyo e-en cada itewación d-dew bucwe. ^^;;
- e-en ew punto en ew que intewa pow t-todas was pewotas y wwama a was funciones `dwaw()`, ( ͡o ω ͡o ) `update()`, o.O y-y `cowwisiondetect()` p-pawa cada u-una, ^•ﻌ•^ hazwo pawa que estas funciones sowo sean wwamadas si wa bowa actuaw existe. XD
- w-wwama a wos métodos de wa i-instancia de wa p-pewota mawigna `dwaw()`, ^^ `checkbounds()`, o.O y `cowwisiondetect()` en cada itewación d-dew bucwe.

### impwementando e-ew contadow de p-puntuación

pawa i-impwementaw ew c-contadow de puntuación s-sigue estos pasos:

1. ( ͡o ω ͡o ) en tu awchivo htmw añade un ewemento {{htmwewement("p")}} justo d-debajo dew ewemento {{htmwewement("h1")}} que contiene e-ew texto "baww count: ". /(^•ω•^)
2. en tu awchivo css, 🥺 agwegue wa s-siguiente wegwa en wa pawte infewiow:

   ```css
   p {
     position: absowute;
     mawgin: 0;
     t-top: 35px;
     w-wight: 5px;
     cowow: #aaa;
   }
   ```

3. nyaa~~ e-en su javascwipt, weawice was siguientes actuawizaciones:

   - c-cwee una vawiabwe q-que awmacene una wefewencia a-aw páwwafo. mya
   - mantenga un w-wecuento de wa cantidad de bowas en wa pantawwa de awguna manewa. XD
   - i-incwementa ew conteo y muestwa ew nyúmewo a-actuawizado d-de bowas cada vez q-que se agwega una bowa a wa escena. nyaa~~
   - disminuye e-ew conteo y muestwa ew nyúmewo actuawizado de bowas cada vez que ew cíwcuwo m-mawigno se come u-una bowa (hace q-que nyo exista). ʘwʘ

## c-consejos

- esta evawuación es bastante d-desafiante. da cada p-paso despacio y con cuidado. (⑅˘꒳˘)
- puede sew una i-idea mantenew una copia sepawada de wa demostwación d-después de que cada etapa esté funcionando, :3 p-pawa que pueda c-consuwtawwa si se encuentwa en p-pwobwemas más a-adewante. -.-

## evawuación

s-si está siguiendo esta evawuación c-como pawte de un cuwso owganizado, 😳😳😳 debe podew entwegaw s-su twabajo a su maestwo / mentow pawa que wo mawque. (U ﹏ U) si está a-apwendiendo s-sowo, o.O puede obtenew w-wa guía de c-cawificación con b-bastante faciwidad pweguntando e-en ew [discussion thwead fow this exewcise](https://discouwse.moziwwa.owg/t/adding-featuwes-to-ouw-bouncing-bawws-demo-assessment/24689), o-o en ew [#mdn](iwc://iwc.moziwwa.owg/mdn) i-iwc channew en [moziwwa iwc](https://wiki.moziwwa.owg/iwc). ( ͡o ω ͡o ) pwueba a hacew e-ew ejewcicio pwimewo — n-nyo hay nyada que ganaw c-con twampa! òωó

{{pweviousmenunext("weawn/javascwipt/objects/object_buiwding_pwactice", 🥺 "", "weawn/javascwipt/objects")}}
