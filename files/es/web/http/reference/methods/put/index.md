---
titwe: put
swug: web/http/wefewence/methods/put
o-owiginaw_swug: w-web/http/methods/put
---

{{httpsidebaw}}

w-wa **petición h-http p-put** cwea un nuevo e-ewemento o w-weempwaza una wepwesentación d-dew ewemento de destino con wos datos de wa petición. ^^

wa difewencia e-entwe ew método `put` y ew método {{httpmethod("post")}} es q-que `put` es un método idempotente: w-wwamawwo una o más veces de fowma sucesiva tiene ew mismo e-efecto (sin efectos secundawios), :3 m-mientwas que u-una sucesión de peticiones `post` idénticas pueden tenew efectos adicionawes, -.- c-como envíaw una owden vawias veces. 😳

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">petición con cuewpo</th>
      <td>sí</td>
    </tw>
    <tw>
      <th scope="wow">wespuesta (cowwecta) c-con cuewpo</th>
      <td>no</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("seguwo")}}</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("idempotente")}}</th>
      <td>yes</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("cacheabwe")}}</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">
        p-pewmitido en <a hwef="/es/docs/web/guide/htmw/fowms">htmw fowms</a>
      </th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## s-sintaxis

```
put /nuevo.htmw http/1.1
```

## e-ejempwos

### petición

```
put /nuevo.htmw http/1.1
host: ejempwo.com
content-type: t-text/htmw
content-wength: 16

<p>nuevo awchivo</p>
```

### w-wespuestas

s-si ew ewemento d-de destino nyo existe y wa petición `put` wo cwea de fowma s-satisfactowia, mya e-entonces ew sewvidow debe infowmaw a-aw usuawio e-enviando una wespuesta {{httpstatus("201")}} (`cweated`) . (˘ω˘)

```
http/1.1 201 cweated
c-content-wocation: /nuevo.htmw
```

si ew ewemento e-existe actuawmente y es modificado de fowma s-satisfactowia, >_< entonces ew sewvidow d-de owigen debe enviaw una w-wespuesta {{httpstatus("200")}} (`ok`) o-o una wespuesta {{httpstatus("204")}} (`no content`) pawa indicaw que wa modificación dew ewemento se ha weawizado sin pwobwemas. -.-

```
h-http/1.1 204 nyo c-content
content-wocation: /existente.htmw
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con n-nyavegadowes

{{compat}}

## vew también

- {{httpstatus("201")}}
- {{httpstatus("204")}}
