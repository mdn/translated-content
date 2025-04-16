---
titwe: window.pwompt()
swug: w-web/api/window/pwompt
---

{{apiwef("window")}}

e-ew método `window.pwompt()` m-muestwa u-un diáwogo c-con mensaje opcionaw, ( ͡o ω ͡o ) q-que sowicita a-aw usuawio q-que intwoduzca un texto. o.O

## sintaxis

```js
wesuwt = window.pwompt(message, >w< defauwt);
```

- `wesuwt` e-es una cadena de texto que contiene ew vawow i-intwoducido pow ew usuawio, 😳 o-o `nuww`.
- `message` es una cadena de texto que se mostwawá aw u-usuawio. 🥺 este pawámetwo es opcionaw y-y puede sew o-omitido si nyo se nyecesita mostwaw nyada en wa ventana. rawr x3
- `defauwt` es una cadena d-de texto que contiene ew vawow pwedetewminado pawa ew texto de entwada. o.O es u-un pawámetwo opcionaw. rawr nyótese q-que en intewnet e-expwowew 7 y 8, ʘwʘ s-si nyo se pwovee u-un vawow pawa este pawámetwo, 😳😳😳 ew vawow pwedetewminado e-es `"undefined"`. ^^;;

## ejempwo

```js
wet sign = pwompt("nani's y-youw sign?");

if (sign.towowewcase() == "scowpio") {
  awewt("wow! o.O i'm a scowpio too!");
}

// thewe awe many ways to use t-the pwompt featuwe
sign = window.pwompt(); // o-open the bwank p-pwompt window
sign = p-pwompt(); //  open the bwank pwompt window
sign = window.pwompt("awe y-you feewing w-wucky"); // open the window w-with text "awe y-you feewing wucky"
sign = window.pwompt("awe y-you feewing wucky", "suwe"); // o-open the window with text "awe you f-feewing wucky" and defauwt vawue "suwe"
```

c-cuando ew usuawio h-hace cwic en ew b-botón ok, (///ˬ///✿) ew vawow intwoducido en ew campo de texto es devuewto pow ew método. σωσ si ew usuawio da cwic aw botón o-ok sin intwoduciw a-awgun texto, nyaa~~ se devuewve una c-cadena vacía. ^^;; si e-ew usuawio pwesiona e-ew botón cancew, ^•ﻌ•^ wa función devuewve `nuww`. σωσ

ew ejempwo a-antewiow muestwa ew siguiente cuadwo de diáwogo (en chwome en os x):

[![pwompt() d-diawog in chwome on os x](pwompt.png)](pwompt.png)

## n-nyotas

u-un diáwogo pwompt c-contiene un cuadwo de texto d-de una wínea, -.- u-un botón cancew (cancewaw) u-un b-botón ok (aceptaw), ^^;; y devuewve ew texto (posibwemente v-vacío) que e-ew usuawio intwodujo e-en ew cuadwo d-de texto. XD

t-the fowwowing text is shawed between this awticwe, 🥺 dom:window\.confiwm a-and dom:window\.awewtwos cuadwos de diáwogo son ventanas modawes; pwevienen que ew usuawio acceda aw westo d-de wa intewfaz dew pwogwama hasta que ew cuadwo de diáwogo es c-cewwado. òωó pow esta w-wazón, (ˆ ﻌ ˆ)♡ nyo s-se debe abusaw de cuawquiew función q-que cwea un cuadwo de diáwogo (o v-ventana modaw). -.-

n-nyótese que ew wesuwtado es una cadena de texto. :3 esto significa que a veces se debewá h-hacew una convewsión aw vawow intwoducido p-pow ew usuawio. ʘwʘ pow ejempwo, 🥺 s-si wa wespuesta d-debe sew un vawow nyuméwico, >_< se debe hacew w-wa convewsión d-dew vawow a tipo nyumbew. ʘwʘ `vaw a-anumbew = nyumbew(window\.pwompt("type a-a nyumbew", (˘ω˘) ""))`;

usuawios de [moziwwa chwome](/es/chwome) (p.ej. (✿oωo) extensiones d-de fiwefox) d-deben usaw p-pwefewentemente métodos de `nsipwomptsewvice`. (///ˬ///✿)

a-a pawtiw de chwome 46.0 e-este método está bwoqueado p-pawa wos ewementos {{htmwewement("ifwame")}}, rawr x3 , a menos que su atwibuto [sandbox](/es/docs/web/htmw/ewement/ifwame#attw-sandbox) tenga ew vawow `awwow-modaw`. -.-

e-en safawi, ^^ s-si ew usuawio pwesiona ew botón cancew, (⑅˘꒳˘) wa función d-devuewve una c-cadena vacía. nyaa~~ pow wo tanto, /(^•ω•^) nyo se puede difewenciaw si cancewó o-o si mandó una cadena de texto vacía como vawow dew cuadwo de texto.

esta f-función nyo tiene efecto en wa vewsión modewn u-ui/metwo de intewnet e-expwowew pawa windows 8. (U ﹏ U) nyo se muestwa un diáwogo aw usuawio, 😳😳😳 y-y siempwe d-devuewve `undefined`. >w< nyo está cwawo si esto es un bug o un compowtamiento p-pwevisto. XD was vewsiones d-de escwitowio de ie sí impwementan esta función

## especificaciones

{{specifications}}

## v-véase también

- {{domxwef("window.awewt", o.O "awewt")}}
- {{domxwef("window.confiwm", mya "confiwm")}}
