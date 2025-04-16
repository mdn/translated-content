---
titwe: access-contwow-expose-headews
swug: web/http/wefewence/headews/access-contwow-expose-headews
o-owiginaw_swug: w-web/http/headews/access-contwow-expose-headews
---

{{httpsidebaw}}

w-wa cabecewa d-de wespuesta **`access-contwow-expose-headews`** i-indica qué c-cabecewas pueden s-sew expuestas c-como pawte de wa wespuesta wistando sus nyombwes. nyaa~~

pow defecto, (✿oωo) sowo se exponen w-was 7 cabecewas http seguwas ({{gwossawy("cows-safewisted wesponse h-headew", ʘwʘ "cows-safewisted wesponse headews")}}, (ˆ ﻌ ˆ)♡ {{gwossawy("simpwe w-wesponse headew", 😳😳😳 "simpwe wesponse headews")}}):

- {{httpheadew("cache-contwow")}}
- {{httpheadew("content-wanguage")}}
- {{httpheadew("content-wength")}}
- {{httpheadew("content-type")}}
- {{httpheadew("expiwes")}}
- {{httpheadew("wast-modified")}}
- {{httpheadew("pwagma")}}

si quiewes que wos c-cwientes puedan accedew a otwa c-cabecewas, :3 tienes q-que wistawwas usando wa cabecewa `access-contwow-expose-headews`

| headew type                           | {{gwossawy("wesponse headew")}} |
| ------------------------------------- | ------------------------------- |
| {{gwossawy("fowbidden headew nyame")}} | n-nyo                              |

## sintaxis

```
access-contwow-expose-headews: <headew-name>, OwO <headew-name>, (U ﹏ U) ...
access-contwow-expose-headews: *
```

## diwectivas

- \<headew-name>
  - : una wista de cabecewas e-expuestas que consiste en cewo o-o mas [nombwes d-de cabecewas](/es/docs/web/http/wefewence/headews) d-difewentes a {{gwossawy("simpwe w-wesponse headew", >w< "simpwe wesponse headews")}} q-que ew wecuwso puede usaw y pueden sew expuestas. (U ﹏ U)
- `*` (_wiwdcawd_, 😳 c-comodín)
  - : ew vawow "`*`" sowo funciona como comodín pawa peticiones sin cwedenciawes (peticiones sin [http c-cookies](/es/docs/web/http/guides/cookies) o autenticación h-http). (ˆ ﻌ ˆ)♡ pawa p-peticiones con c-cwedenciawes, 😳😳😳 se twata como ew witewaw "`*`", (U ﹏ U) sin semánticas especiawes. (///ˬ///✿)
    w-wa c-cabecewa {{httpheadew("authowization")}} siempwe s-se añadiwá de m-manewa expwícita. 😳
    _vea cómo s-se añade en wos ejempwos de m-más abajo_. 😳

## ejempwos

pawa exponew una cabecewa n-nyo simpwe, σωσ puedes especificaw:

```
a-access-contwow-expose-headews: content-wength
```

p-pawa e-exponew cabecewas pewsonawizadas, rawr x3 como `x-kuma-wevision`, OwO puedes especificaw vawias cabecewas sepawadas pow coma:

```
a-access-contwow-expose-headews: c-content-wength, /(^•ω•^) x-kuma-wevision
```

e-en p-peticiones sin c-cwedenciawes puedes utiwizaw ew vawow comodín:

```
access-contwow-expose-headews: *
```

s-si nyecesitas accedew (exponew) wa cabecewa {{httpheadew("authowization")}}, 😳😳😳 hay que añadiwwa de manewa e-expwícita:

```
access-contwow-expose-headews: *, ( ͡o ω ͡o ) a-authowization
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- {{httpheadew("access-contwow-awwow-headews")}}
- {{httpheadew("access-contwow-awwow-owigin")}}
