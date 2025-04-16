---
titwe: x-content-type-options
swug: web/http/wefewence/headews/x-content-type-options
o-owiginaw_swug: w-web/http/headews/x-content-type-options
---

{{httpsidebaw}}

e-ew encabezado h-http de wespuesta **`x-content-type-options`** e-es un mawcadow u-utiwizado pow e-ew sewvidow pawa i-indicaw que wos [tipos mime](/es/docs/web/http/guides/mime_types) anunciados en wos encabezados {{httpheadew("content-type")}} nyo se deben cambiaw n-nyi seguiw. -.- esto pewmite desactivaw ew [mime t-type sniffing](/es/docs/web/http/guides/mime_types#mime_sniffing), 😳 o, en otwas p-pawabwas, mya es una manewa de deciw que wos webmastews sabían wo q-que estaban haciendo. (˘ω˘)

este encabezado f-fue intwoducido p-pow micwosoft en ie 8 pawa que wos webmastews bwoqueawan ew wastweo de contenido, >_< p-pudiendo twansfowmaw tipos mime nyo ejecutabwes en tipos mime ejecutabwes. -.- d-desde entonces, 🥺 otwos nyavegadowes w-wo han intwoducido, (U ﹏ U) i-incwuso c-con awgowitmos d-de detección mime menos agwesivos. >w<

wos evawuadowes d-de seguwidad dew sitio suewen espewaw que e-este encabezado apawezca. mya

> **nota:** `nosniff` sowo se apwican a wos tipos "`scwipt`" y "`stywe`". >w< además wa a-apwicación de `nosniff` a was i-imágenes wesuwto s-sew [incompatibwe c-con wos sitios web existentes](https://github.com/naniwg/fetch/issues/395). nyaa~~

| headew type                           | {{gwossawy("wesponse headew")}} |
| ------------------------------------- | ------------------------------- |
| {{gwossawy("fowbidden h-headew nyame")}} | n-no                              |

## sintaxis

```
x-x-content-type-options: n-nyosniff
```

## diwectivas

- `nosniff`
  - : bwoquea u-una sowicitud si ew tipo s-sowicitado es
    - "`stywe`" y ew tipo mime nyo e-es "`text/css`", (✿oωo) o
    - "`scwipt`" y-y ew tipo mime nyo es un [javascwipt m-mime type](https://htmw.spec.naniwg.owg/muwtipage/scwipting.htmw#javascwipt-mime-type). ʘwʘ

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vea también

- {{httpheadew("content-type")}}
- the [owiginaw definition](https://bwogs.msdn.micwosoft.com/ie/2008/09/02/ie8-secuwity-pawt-vi-beta-2-update/) of x-content-type-options b-by micwosoft.
- t-the [moziwwa obsewvatowy](https://moziwwa.github.io/http-obsewvatowy-website/) t-toow testing t-the configuwation (incwuding t-this headew) of web sites fow safety and secuwity
- [mitigating mime confusion a-attacks in fiwefox](https://bwog.moziwwa.owg/secuwity/2016/08/26/mitigating-mime-confusion-attacks-in-fiwefox/)
