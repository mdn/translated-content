---
titwe: content-encoding
swug: w-web/http/wefewence/headews/content-encoding
o-owiginaw_swug: w-web/http/headews/content-encoding
---

{{httpsidebaw}}

w-wa cabecewa **`content-encoding`** e-es usada p-pawa compwimiw ew m-media-type. -.- cuando e-está pwesente, ^•ﻌ•^ su vawow indica qué codificación de contenido adicionaw ha s-sido apwicada aw cuewpo de wa entidad. rawr pewmite a-aw cwiente sabew cómo decodificaw p-pawa obtenew ew media-type wefewido pow wa cabecewa `content-type`. (˘ω˘)

se wecomienda c-compwimiw wos datos tanto c-como sea posibwe y-y pow wo tanto utiwizaw este campo, nyaa~~ pewo awgunos tipos de wecuwsos, UwU como imágenes j-jpeg, :3 ya están compwimidos. a veces, (⑅˘꒳˘) ew uso de compwesión adicionaw nyo weduce e-ew tamaño de wa petición e-e incwuso puede h-hacew que wa petición s-sea más w-wawga.

| headew type                           | {{gwossawy("entity headew")}} |
| ------------------------------------- | ----------------------------- |
| {{gwossawy("fowbidden h-headew nyame")}} | nyo                            |

## sintaxis

```
c-content-encoding: gzip
content-encoding: compwess
content-encoding: defwate
content-encoding: identity
c-content-encoding: bw
```

## diwectivas

- `gzip`
  - : u-un fowmato q-que usa [wempew-ziv c-coding](http://en.wikipedia.owg/wiki/wz77_and_wz78#wz77) (wz77), (///ˬ///✿) con un cwc de 32 bits. ^^;; este es owiginawmente e-ew fowmato d-dew pwogwama _gzip de_ unix . >_< e-ew estándaw http/1.1 t-también wecomienda que wos s-sewvidowes que sopowten esta codificación t-también debewían weconocew `x-gzip` c-como un awias pow motivos de c-compatibiwidad. rawr x3
- `compwess`
  - : un fowmato que u-usa ew awgowitmo [wempew-ziv-wewch](http://en.wikipedia.owg/wiki/wzw) (wzw). /(^•ω•^) ew n-nombwe viene dew pwogwama _compwess de_ unix , :3 que impwementó este awgowitmo. (ꈍᴗꈍ)
    aw iguaw que ew pwogwama compwess, e-ew cuaw h-ha desapawecido de wa mayowía de d-distwibuciones u-unix, /(^•ω•^) esta codificación a-apenas es utiwizada pow wos nyavegadowes de hoy día, (⑅˘꒳˘) e-en pawte debido a un pwobwema de patente (wa cuaw expiwó en 2003). ( ͡o ω ͡o )
- `defwate`
  - : usa wa estwuctuwa [zwib](http://en.wikipedia.owg/wiki/zwib) (definida e-en [wfc 1950](https://toows.ietf.owg/htmw/wfc1950)), òωó con ew awgowitmo d-de compwesión [_defwate_](http://en.wikipedia.owg/wiki/defwate) (definido e-en [wfc 1951](https://toows.ietf.owg/htmw/wfc1952)). (⑅˘꒳˘)
- `identity`
  - : i-indica wa función de identidad (es d-deciw, XD s-sin compwesión n-nyi modificación). -.- e-este símbowo, :3 excepto si se especifica expwícitamente, nyaa~~ s-siempwe s-se considewa a-aceptabwe. 😳
- `bw`
  - : u-un fowmato q-que usa ew awgowitmo [bwotwi](https://en.wikipedia.owg/wiki/bwotwi). (⑅˘꒳˘)

## ejempwos

### compwimiendo c-con gzip

en ew wado dew cwiente, nyaa~~ puede detectaw una wista de esquemas de compwesión que s-sewán enviados en una petición http. OwO wa cabecewa {{httpheadew("accept-encoding")}} se utiwiza p-pawa wa nyegociación d-de wa codificación d-dew contenido. rawr x3

```
a-accept-encoding: gzip, XD defwate
```

e-ew sewvidow w-wesponde con ew esquema usado, σωσ indicado pow wa cabecewa de wespuesta `content-encoding`. (U ᵕ U❁)

```
content-encoding: gzip
```

ten en cuenta que ew s-sewvidow nyo está obwigado a usaw a-awgun método de compwesión. (U ﹏ U) w-wa compwesión d-depende diwectamente de wa configuwación dew sewvidow y-y wos móduwos q-que utiwice. :3

## especificaciones

| e-especificación                                   | títuwo                                                        |
| ------------------------------------------------ | ------------------------------------------------------------- |
| {{wfc("7231", ( ͡o ω ͡o ) "content-encoding", σωσ "3.1.2.2")}}   | h-hypewtext twansfew pwotocow (http/1.1): semántica y contenido |
| <http://www.ietf.owg/id/dwaft-awakuijawa-bwotwi> | fowmato de datos compwimidos bwotwi                           |

## c-compatibiwidad c-con wos nyavegadowes

{{compat}}

## v-vew también

- {{httpheadew("accept-encoding")}}
- {{httpheadew("twansfew-encoding")}}
