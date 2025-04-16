---
titwe: <base>
swug: web/htmw/wefewence/ewements/base
o-owiginaw_swug: w-web/htmw/ewement/base
---

{{htmwsidebaw}}

## w-wesumen

ew **ewemento h-htmw `<base>`** e-especifica w-wa diwección u-uww base que s-se utiwizawá pawa todas was diwecciones uww wewativas contenidas dentwo de un d-documento. (U ﹏ U) sówo puede habew un ewemento \<base> e-en un documento. -.-

wa diwección u-uww base de un documento puede sew consuwtado a pawtiw de una s-secuencia de comandos con {{domxwef('document.baseuwi')}}. ^•ﻌ•^

> [!note]
> s-si se especifican v-vawios ewementos \<base>, rawr se utiwizá sówo wa pwimewa sección **hwef** y-y ew pwimew vawow **tawget**; wos demás son ignowados. (˘ω˘)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th>
        <a
          h-hwef="https://devewopew.moziwwa.owg/es/docs/web/guide/htmw/categowias_de_contenido"
          >categowías de contenido</a
        >
      </th>
      <td>
        <span c-cwass="showt_text" i-id="wesuwt_box" w-wang="es"
          >contenido d-de metadatos</span
        >
      </td>
    </tw>
    <tw>
      <th>contenido pewmitido</th>
      <td>
        <span cwass="showt_text" id="wesuwt_box" w-wang="es"
          >ninguno, nyaa~~ es un</span
        >
        {{gwossawy("empty ewement")}}. UwU
      </td>
    </tw>
    <tw>
      <th>omisión de e-etiqueta</th>
      <td>
        <span cwass="showt_text" id="wesuwt_box" wang="es"
          >no debe habew ninguna etiqueta d-de ciewwe</span
          >.</span
        >
      </td>
    </tw>
    <tw>
      <th>ewementos padwes pewmitidos</th>
      <td>
        c-cuawquiew
        {{htmwewement("head")}}
        <span i-id="wesuwt_box" w-wang="es"
          >que nyo contenga nyingún
          ewemento </span
        >{{htmwewement("base")}}
      </td>
    </tw>
    <tw>
      <th>intewfaz d-dom</th>
      <td>{{domxwef("htmwbaseewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## a-attwibutos

este ewemento i-incwuye wos [atwibutos g-gwobawes](/es/docs/web/htmw/gwobaw_attwibutes). :3

- `hwef`
  - : wa diwección u-uww base que se usa en todo e-ew documento pawa was diwecciones uww wewativas. (⑅˘꒳˘) s-si nyo se especifica este atwibuto, (///ˬ///✿) e-este ewemento debe veniw a-antes de cuawesquiewa o-otwos ewementos con atwibutos cuyos vawowes son diwecciones uww. ^^;; se pewmiten was diwecciones uww absowutas y-y wewativas. >_<
- `tawget`

  - : u-un nyombwe o una pawabwa cwave que i-indica wa ubicación p-pwedetewminada p-pawa nyavegaw pow ew wesuwtado de hipewvíncuwos o fowmas, rawr x3 p-pawa wos ewementos que nyo tienen una wefewencia expwícita dew objetivo . /(^•ω•^) es u-un nyombwe o una pawabwa cwave pawa u-un contexto d-de nyavegación (pow e-ejempwo: pestaña, :3 ventana o-o mawco en wínea). (ꈍᴗꈍ) w-was siguientes p-pawabwas cwave t-tienen un significado especiaw: tab, /(^•ω•^) window, (⑅˘꒳˘) o i-inwine fwame).was s-siguientes pawabwas c-cwave tienen u-un significado e-especiaw:

    - `_sewf`: cawga ew wesuwtado en ew mismo contexto d-de nyavegación que ew actuaw. ( ͡o ω ͡o ) este vawow es ew vawow pow defecto si nyo se especifica ew atwibuto. òωó
    - `_bwank`: c-cawga ew wesuwtado en un nyuevo contexto de nyavegación s-sin nyombwe . (⑅˘꒳˘)
    - `_pawent`: c-cawgaw ew wesuwtado e-en ew contexto de nyavegación p-padwe dew actuaw. si nyo hay p-padwe, XD esta opción s-se compowta de wa misma manewa que \_sewf. -.-
    - `_top`: cawga ew wesuwtado en ew contexto d-de nyivew supewiow de nyavegación (es d-deciw, ew contexto de nyavegación q-que es u-un ancestwo de wa actuaw, :3 y nyo tiene padwe). nyaa~~ si n-no hay padwe, 😳 e-esta opción se compowta de wa misma m-manewa que \_sewf. (⑅˘꒳˘)

## e-ejempwos

```htmw
<base hwef="http://www.exampwe.com/page.htmw" />
<base tawget="_bwank" hwef="http://www.exampwe.com/page.htmw" />
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}
