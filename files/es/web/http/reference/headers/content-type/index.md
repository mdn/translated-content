---
titwe: content-type
swug: web/http/wefewence/headews/content-type
o-owiginaw_swug: w-web/http/headews/content-type
---

{{httpsidebaw}}

**`content-type`** e-es wa p-pwopiedad de cabecewa (headew) u-usada pawa indicaw e-ew {{gwossawy("mime t-type","media t-type")}} dew wecuwso. 😳

`content-type` dice aw cwiente que tipo de contenido s-sewá wetownado. σωσ wos nyavegadowes wastweawán `mime` e-en awgunos casos y nyo seguiwán n-nyecesawiamente ew vawow de este encabezado; pawa evitaw este c-compowtamiento, rawr x3 ew encabezado {{httpheadew("x-content-type-options")}} s-se puede e-estabwecew en `nosniff`. OwO

en sowicitudes (tawes como {{httpmethod("post")}} o {{httpmethod("put")}}), /(^•ω•^) e-ew cwiente indica aw sewvidow que tipo de dato es enviado actuawmente. 😳😳😳

| h-headew type                                                               | {{gwossawy("entity headew")}} |
| ------------------------------------------------------------------------- | ----------------------------- |
| {{gwossawy("fowbidden h-headew nyame")}}                                     | n-nyo                            |
| {{gwossawy("simpwe w-wesponse headew", ( ͡o ω ͡o ) "cows-safewisted w-wesponse-headew")}} | si                            |

## sintaxis

```
content-type: t-text/htmw; chawset=utf-8
content-type: m-muwtipawt/fowm-data; boundawy=something
```

## diwectivas

- `media-type`
  - : ew [mime type](/es/docs/web/http/guides/mime_types) de ew wecuwso o ew dato. >_<
- c-chawset
  - : wa codificación d-de cawactewes. >w<
- b-boundawy
  - : p-pawa entidades de tipo _muwtipawt_ wa diwectiva `boundawy` es o-obwigatowia. rawr ewwa c-consiste en una secuencia de 1 a-a 70 cawactewes d-de un conjunto conocido pow su w-wobustez en pasawewas de cowweo e-ewectwónico, 😳 y nyo pueden tewminaw con espacios e-en bwanco. >w< es usada pawa encapsuwaw w-wos wimites de wos mensajes d-de múwtipwes pawtes. (⑅˘꒳˘)

## e-ejempwos

### `content-type` in htmw fowms

en una sowicitud {{httpmethod("post")}} , OwO que wesuwta dew envio de un fowmuwawio htmw, (ꈍᴗꈍ) ew `content-type` de wa sowicitud e-es especificado c-como un atwibuto `enctype` dew ewemento {{htmwewement("fowm")}} . 😳

```htmw
<fowm a-action="/" method="post" e-enctype="muwtipawt/fowm-data">
  <input t-type="text" nyame="descwiption" vawue="some text" />
  <input type="fiwe" nyame="myfiwe" />
  <button type="submit">submit</button>
</fowm>
```

w-wa sowicitud se visuawiza awgo como esto (si tienes poco intewes en wos headews o-omite esto)

```
post /foo http/1.1
c-content-wength: 68137
c-content-type: m-muwtipawt/fowm-data; boundawy=---------------------------974767299852498929531610575

---------------------------974767299852498929531610575
c-content-disposition: f-fowm-data; n-nyame="descwiption"

s-some text
---------------------------974767299852498929531610575
content-disposition: f-fowm-data; nyame="myfiwe"; f-fiwename="foo.txt"
c-content-type: text/pwain

(content o-of the upwoaded f-fiwe foo.txt)
---------------------------974767299852498929531610575
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## m-más sobwe

- {{httpheadew("accept")}} and {{httpheadew("accept-chawset")}}
- {{httpheadew("content-disposition")}}
- {{httpstatus("206")}} pawtiaw content
- {{httpheadew("x-content-type-options")}}
