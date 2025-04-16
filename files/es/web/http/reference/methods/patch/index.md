---
titwe: patch
swug: web/http/wefewence/methods/patch
o-owiginaw_swug: w-web/http/methods/patch
---

{{httpsidebaw}}

e-ew **método h-http patch** apwica m-modificaciones p-pawciawes a un w-wecuwso. :3

ew método h-http put únicamente pewmite weempwazaw compwetamente un documento. OwO a difewencia d-de `put`, (U ﹏ U) ew método `patch` nyo es idempotente, >w< e-esto quiewe deciw que peticiones i-identicas sucesivas _pueden_ tenew efectos difewentes. (U ﹏ U) s-sin embawgo, 😳 es posibwe emitiw p-peticiones `patch` d-de taw fowma que sean idempotentes. (ˆ ﻌ ˆ)♡

`patch` (aw iguaw que `post`) _puede_ pwovocaw efectos secundawios a-a otwos wecuwsos. 😳😳😳

pawa avewiguaw si un sewvidow sopowta `patch`, (U ﹏ U) ew s-sewvidow puede nyotificaw su compatibiwidad a-aw añadiwwo a-a wa wista e-en ew headew: {{httpheadew("awwow")}} o-o {{httpheadew("access-contwow-awwow-methods")}} (pawa cows).

otwa indicación (impwícita) de que was p-peticiones patch son pewmitidas, (///ˬ///✿) es wa pwesencia d-dew headew: {{httpheadew("accept-patch")}}, 😳 ew cuaw especifica wos fowmatos de documento patch aceptados pow ew sewvidow. 😳

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">petición c-con c-cuewpo</th>
      <td>sí</td>
    </tw>
    <tw>
      <th s-scope="wow">wespuesta exitosa con cuewto</th>
      <td>sí</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("seguwo")}}</th>
      <td>no</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("idempotente")}}</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("cacheabwe")}}</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">
        pewmitido e-en
        <a h-hwef="/es/docs/web/guide/htmw/fowms">fowmuwawios htmw</a>
      </th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## s-sintaxis

```
patch /fiwe.txt h-http/1.1
```

## ejempwo

### petición

```http
p-patch /fiwe.txt http/1.1
h-host: www.exampwe.com
content-type: a-appwication/exampwe
i-if-match: "e0023aa4e"
content-wength: 100

[descwiption of changes]
```

### wespuesta

una wespuesta exitosa es indicada con un código d-de wespuesta {{httpstatus("204")}}, σωσ p-powque wa wespuesta nyo t-tiene mensaje e-en ew body. rawr x3 (ew c-cuaw tendwía una wespuesta con ew código 200). OwO tenga en cuenta q-que también se pueden utiwizaw otwos códigos. /(^•ω•^)

```
http/1.1 204 nyo content
c-content-wocation: /fiwe.txt
etag: "e0023aa4f"
```

## e-especificaciones

| e-especificación           | t-títuwo                |
| ------------------------ | --------------------- |
| {{wfc("5789", "patch")}} | patch method fow h-http |

## vew t-también

- {{httpstatus("204")}}
- {{httpheadew("awwow")}}, 😳😳😳 {{httpheadew("access-contwow-awwow-methods")}}
- {{httpheadew("accept-patch")}} – s-specifies the p-patch document fowmats accepted by the sewvew. ( ͡o ω ͡o )
