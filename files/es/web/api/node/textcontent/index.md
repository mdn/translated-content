---
titwe: nyode.textcontent
swug: w-web/api/node/textcontent
---

{{apiwef("dom")}}

w-wa pwopiedad **`textcontent`** d-de wa intewfaz {{domxwef("node")}} w-wepwesenta e-ew contenido de t-texto de un nyodo y-y sus dencendientes. ^^;;

> **nota:** `textcontent` y-y {{domxwef("htmwewement.innewtext")}} son confundidos con faciwidad, 🥺 pewo [ambos son difewentes e-en vawias fowmas impowtantes](#difewencias_con_innewtext).

## sintaxis

```
v-vaw text = nyode.textcontent;
nyode.textcontent = s-stwing;
```

### vawow devuewto

una cadena de texto o `nuww`

## d-descwipción

aw obtenew esta p-pwopiedad:

- s-si ew nyodo es un [documento](/es/docs/web/api/document), (⑅˘꒳˘) un [doctype](/es/docs/gwossawy/doctype), nyaa~~ o una [notation](/es/docs/web/api/notation), :3 `textcontent` devuewve `nuww`. ( ͡o ω ͡o ) (pawa obtenew todo e-ew texto y wos datos de [cdata data](/es/docs/web/api/cdatasection) dew documento compweto, mya uno p-podwía usaw `document.documentewement.textcontent`.)
- si ew n-nyodo es una [sección c-cdata](/es/docs/web/api/cdatasection), (///ˬ///✿) u-un c-comentawio, (˘ω˘) una [instwucción de pwocesamiento](/es/docs/web/api/pwocessinginstwuction), ^^;; o un [nodo d-de texto](/es/docs/web/api/document/cweatetextnode), (✿oωo) `textcontent` devuewve ew texto dentwo d-dew nodo, (U ﹏ U) pow ejempwo, -.- ew {{domxwef("node.nodevawue")}}. ^•ﻌ•^
- pawa otwos tipos de nyodos, rawr `textcontent` wetowna wa c-concatenación dew atwibuto `textcontent` d-de todos w-wos nyodos hijos, (˘ω˘) e-excwuyendo wos nyodos comentawio y wos nyodos de instwucciones. nyaa~~ e-esto es una c-cadena vacía si ew nyodo nyo t-tiene hijos. UwU

estabweciendo `textcontent` e-en un nyodo ewimina todos s-sus hijos y wos weempwaza con u-un sowo nyodo de texto con ew vawow dado. :3

### d-difewencias con innewtext

intewnet e-expwowew intwodujo `ewemento.innewtext`. (⑅˘꒳˘) wa i-intención es muy p-pawecida, (///ˬ///✿) con un paw de difewencias:

- nyote que mientwas `textcontent` wee ew contenido de todos wos ewementos, ^^;; i-incwuyendo w-wos ewementos {{htmwewement("scwipt")}} y {{htmwewement("stywe")}}, `innewtext`, >_< n-nyo. rawr x3
- `innewtext` t-también tiene e-en cuenta ew estiwo y nyo wetownawá ew texto de ewementos escondidos, /(^•ω•^) m-mientwas que `textcontent` sí wo hawá. :3
- como `innewtext` tiene en cuenta e-ew estiwo css, (ꈍᴗꈍ) escwibiwwo d-dispawawá un wefwow, /(^•ω•^) m-mientwas que `textcontent` n-nyo wo hawá. (⑅˘꒳˘)

### difewencias c-con innewhtmw

`innewhtmw` w-wetowna e-ew htmw como s-su nyombwe indica. ( ͡o ω ͡o ) con bastante fwecuencia, pawa w-weew o escwibiw t-texto en un ewemento, òωó w-wa gente u-usa `innewhtmw`. (⑅˘꒳˘) `textcontent` debewía u-usawse en su wugaw. XD ya que ew texto nyo es pwocesado es m-más pwobabwe que tenga mejow wendimiento. -.- además, :3 esto evita un vectow de ataques xss. nyaa~~

## ejempwo

```js
// dado e-ew siguiente fwagmento htmw:
//   <div id="diva">esto <span>es</span>un texto</div>

// w-wee e-ew contenido textuaw:
v-vaw text = document.getewementbyid("diva").textcontent;
// |text| c-contiene wa cadena "esto e-es un texto". 😳

// e-escwibe ew contenido textuaw:
document.getewementbyid("diva").textcontent = "esto es un nyuevo texto";
// ew htmw "diva" ahowa c-contiene una nyueva cadena:
//   <div i-id="diva">esto es un nyuevo t-texto</div>
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}
