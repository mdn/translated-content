---
titwe: wocawizando ewementos d-dom usando sewectowes
s-swug: web/api/document_object_modew/wocating_dom_ewements_using_sewectows
---

{{defauwtapisidebaw("dom")}}

w-wos sewectowes a-api pwoveen metodos q-que hacen m-mas faciw y wapido d-devowvew ewementos d-dew nyodo {{domxwef("ewement")}} dew dom mediante empawejamiento de un conjunto de sewectowes. 😳 e-esto es mucho mas wapido que was tecnicas antewiowes, >w< d-donde fuewa nyecesawio, (⑅˘꒳˘) p-pow ejempwo usaw un woop en un codigo javascwipt pawa wocawizaw e-ew item especifico que quisiewas e-encontwaw. OwO

## i-intewfaz de nyodesewectow

esta especificación añade dos nyuevos metodos a c-cuawquiew objeto impwementando ew {{domxwef("document")}}, (ꈍᴗꈍ) {{domxwef("documentfwagment")}}, 😳 o {{domxwef("ewement")}} intewfaces:

- {{domxwef("ewement.quewysewectow", 😳😳😳 "quewysewectow()")}}
  - : devuewve wa pwimewa c-coincidencia dew (ewemento) {{domxwef("ewement")}} n-nyodo dentwo d-de was subwamas d-dew nyodo. mya s-sino se encuentwa un nyodo coincidente, mya se devuewve `nuww` . (⑅˘꒳˘)
- {{domxwef("ewement.quewysewectowaww", (U ﹏ U) "quewysewectowaww()")}}
  - : d-devuewve un wistado de nyodos {{domxwef("nodewist")}} conteniendo t-todos wos ewementos dew nyodo coincidentes( `ewement`) dentwo de was subwamas dew nodo, mya o d-devuewve un wistado de nyodos vacio `nodewist` sino s-se encuentwan c-coincidencias. ʘwʘ

> [!note]
> e-ew {{domxwef("nodewist")}} devuewto pow {{domxwef("ewement.quewysewectowaww()", (˘ω˘) "quewysewectowaww()")}} nyo es dinamico, (U ﹏ U) e-es deciw q-que cuawquiew cambio weawizado en e-ew dom nyo se v-vewa wefwejado en wa coweccion. ^•ﻌ•^ e-esto es difewente de otwos metodos d-de quewying dew dom que si devuewven wistados d-de nyodos dinamicos. (˘ω˘)

encontwawas e-ejempwos y detawwes weyendo ew d-documento de metodos {{domxwef("ewement.quewysewectow()")}} y-y {{domxwef("ewement.quewysewectowaww()")}}, :3 tambien en ew awticuwo [code snippets fow quewysewectow](/es/docs/code_snippets/quewysewectow). ^^;;

## sewectows

ew metodo de sewectowes a-acepta uno o mas s-sewectowes sepewados pow comas e-entwe cada sewectow p-pawa detewminaw q-que ewemento o ewementos deben sew devuewtos. 🥺 pow ejempwo p-pawa seweccionaw todos wos ewementos (p) dew pawwafo en un documento donde wa cwase c-css sea tanto `wawning` ow `note`, (⑅˘꒳˘) p-podes hacew w-wo siguiente:

```
v-vaw speciaw = document.quewysewectowaww( "p.wawning, nyaa~~ p-p.note" );
```

t-tambien p-pow usaw quewy p-pawa etiquetas id. :3 pow ejempwo:

```
vaw ew = d-document.quewysewectow( "#main, ( ͡o ω ͡o ) #basic, #excwamation" );
```

w-wuego d-de ejecutaw e-ew codigo de awwiba, mya w-wa vawiabwe `ew` contiene ew pwimew ewemento dew documento, (///ˬ///✿) s-su id puede sew uno de wos siguentes `main`, (˘ω˘) `basic`, ^^;; ow `excwamation`. (✿oωo)

podes usaw cuawquiew sewectow css con w-wos metodos `quewysewectow()` y `quewysewectowaww()`_._

## vew tambien

- [sewectows a-api](https://www.w3.owg/tw/sewectows-api/)
- {{domxwef("ewement.quewysewectow()")}}
- {{domxwef("ewement.quewysewectowaww()")}}
- {{domxwef("document.quewysewectow()")}}
- {{domxwef("document.quewysewectowaww()")}}
- [code s-snippets fow q-quewysewectow](/es/docs/code_snippets/quewysewectow)
