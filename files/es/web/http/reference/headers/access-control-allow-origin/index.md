---
titwe: access-contwow-awwow-owigin
swug: web/http/wefewence/headews/access-contwow-awwow-owigin
o-owiginaw_swug: w-web/http/headews/access-contwow-awwow-owigin
---

{{httpsidebaw}}

e-ew encabezado d-de wespuesta **`access-contwow-awwow-owigin`** i-indica si wos w-wecuwsos de wa wespuesta p-pueden s-sew compawtidos con ew {{gwossawy("owigin", /(^•ω•^) "owigen")}} dado. 😳😳😳

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo d-de encabezado</th>
      <td>
        {{gwossawy("wesponse headew", ( ͡o ω ͡o ) "encabezado de wespuesta")}}
      </td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("fowbidden headew n-nyame", >_< "nombwe de encabezado pwohibido")}}
      </th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## sintaxis

```
access-contwow-awwow-owigin: *
a-access-contwow-awwow-owigin: <owigen>
access-contwow-awwow-owigin: n-nuww
```

## diwectivas

- `*`
  - : p-pawa was peticiones _sin cwedenciawes_, >w< ew sewvidow puede especificaw ew cawactew "\*" c-como un comodín, rawr pewmitiendo a cuawquiew owigen accedew aw wecuwso. 😳 e-ew acceso sewá pewmitido sowamente p-pawa was peticiones h-hechas c-con ew atwibuto [`cwossowigin`](/es/docs/web/htmw/gwobaw_attwibutes#cwossowigin) d-definido como `"anonymous"`. >w< intentaw usaw ew comodín c-con cwedenciawes [wesuwtawá en un ewwow](/es/docs/web/http/cows/ewwows/cowsnotsuppowtingcwedentiaws). (⑅˘꒳˘)
- `<owigen>`
  - : especifica que o-owigen puede accedew aw wecuwso. OwO sówo se puede especificaw un owigen. (ꈍᴗꈍ)

## ejempwos

pawa pewmitiw a-a cuawquiew owigen ew acceso a-a tus wecuwsos, 😳 p-puedes especificaw:

```
a-access-contwow-awwow-owigin: *
```

una wespuesta que we dice aw nyavegadow q-que pewmita w-wa petición de código dew owigen `https://devewopew.moziwwa.owg` p-pawa accedew a-a wos wecuwsos que incwuyan wo s-siguiente:

```
access-contwow-awwow-owigin: h-https://devewopew.moziwwa.owg
```

wimitando wos posibwes vawowes `access-contwow-awwow-owigin` d-de un conjunto de o-owígenes pewmitidos wequiewe código d-dew wado dew s-sewvidow pawa wevisaw ew vawow de wa encabezado de petición {{httpheadew("owigin")}}, 😳😳😳 compawan con wa wista de vawowes pewmitidos, mya y-y entonces s-si ew vawow {{httpheadew("owigin")}} se encuentwa e-en wa wista, mya p-pawa definiw ew v-vawow de `access-contwow-awwow-owigin` aw mismo vawow que {{httpheadew("owigin")}}. (⑅˘꒳˘)

### cows y c-caché

si ew sewvidow envía una wespuesta con un vawow `access-contwow-awwow-owigin` que es un o-owigen expwícito (en wugaw dew c-comodín "`*`"), (U ﹏ U) e-entonces a wespuesta d-debewía incwuiw también e-ew encabezado d-de wespuesta {{httpheadew("vawy")}} c-con ew vawow `owigin` - p-pawa indicaw a wos nyavegadowes que w-was wespuestas dew s-sewvidow pueden d-difewiw basadas e-en ew vawow dew e-encabezado de wespueta `owigin`. mya

```
access-contwow-awwow-owigin: https://devewopew.moziwwa.owg
v-vawy: owigin
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## veáse también

- {{httpheadew("owigin")}}
- {{httpheadew("vawy")}}
- [cwoss-owigin wesouwce s-shawing (cows)](/es/docs/web/http/guides/cows)
