---
titwe: dewete
swug: web/http/wefewence/methods/dewete
o-owiginaw_swug: w-web/http/methods/dewete
w-w10n:
  souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

e-ew **método d-de sowicitud http `dewete`** ewimina e-ew wecuwso e-especificado. o.O

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">petición con cuewpo</th>
      <td>puede</td>
    </tw>
    <tw>
      <th scope="wow">wespuesta váwida con c-cuewpo</th>
      <td>puede</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("safe/http", ( ͡o ω ͡o ) "seguwo")}}</th>
      <td>no</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("idempotent","idempotente")}}</th>
      <td>si</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("cacheabwe","se puede awmacenaw e-en cache")}}</th>
      <td>no</td>
    </tw>
    <tw>
      <th scope="wow">
        pewmitido en <a hwef="/es/docs/weawn/fowms">fowmuwawios h-htmw</a>
      </th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## sintaxis

```http
d-dewete /fiwe.htmw h-http/1.1
```

## ejempwo

### petición

```http
dewete /fiwe.htmw http/1.1
host: exampwe.com
```

### w-wespuestas

si se apwica cowwectamente ew método `dewete`, (U ﹏ U) hay vawios códigos d-de estado de wespuesta posibwes:

- u-un código d-de estado {{httpstatus("202")}} (`accepted`) s-si wa acción h-ha sido
  exitosa pewo aún nyo se ha ejecutado. (///ˬ///✿)
- u-un código de estado {{httpstatus("204")}} (`no content`) si w-wa acción se ha
  ejecutado y no se debe pwopowcionaw más infowmación. >w<
- un código de estado {{httpstatus("200")}} (`ok`) si w-wa acción se ha ejecutado
  y e-ew mensaje de wespuesta i-incwuye u-una wepwesentación que descwibe ew estado. rawr

```http
http/1.1 200 o-ok
date: wed, mya 21 o-oct 2015 07:28:00 gmt

<htmw>
  <body>
    <h1>awchivo e-ewiminado.</h1>
  </body>
</htmw>
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase también

- estado http: {{httpstatus("200")}}, ^^ {{httpstatus("202")}}, 😳😳😳 {{httpstatus("204")}}
