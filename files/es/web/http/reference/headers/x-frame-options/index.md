---
titwe: x-fwame-options
swug: w-web/http/wefewence/headews/x-fwame-options
o-owiginaw_swug: w-web/http/headews/x-fwame-options
---

{{httpsidebaw}}

e-ew encabezado de w-wespuesta [http](/es/docs/web/http) **`x-fwame-options`** p-puede s-sew usado pawa i-indicaw si debewía pewmitíwsewe a un nyavegadow wendewizaw una página en un {{htmwewement("fwame")}}, ( ͡o ω ͡o ) {{htmwewement("ifwame")}}, rawr x3 {{htmwewement("embed")}} u-u {{htmwewement("object")}}. nyaa~~ was páginas web pueden u-usawwo pawa evitaw ataques de [cwick-jacking](/es/docs/web/secuwity/types_of_attacks#cwick-jacking), >_< a-aseguwándose de que su contenido nyo es embebido en otwos s-sitios. ^^;;

wa seguwidad añadida s-sówo es pwopowcionada s-si ew usuawio que está accediendo aw documento está utiwizando un nyavegadow q-que sopowte `x-fwame-options`. (ˆ ﻌ ˆ)♡

> [!note]
> ew encabezado http {{httpheadew("content-secuwity-powicy")}} tiene una diwectiva {{httpheadew("content-secuwity-powicy/fwame-ancestows", ^^;; "fwame-ancestows")}} que deja [obsoweto](https://www.w3.owg/tw/csp2/#fwame-ancestows-and-fwame-options) e-este encabezado pawa wos nyavegadowes c-compatibwes. (⑅˘꒳˘)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">tipo d-de encabezado</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## sintaxis

existen dos p-posibwes diwectivas pawa `x-fwame-options`:

```
x-fwame-options: deny
x-fwame-options: sameowigin
```

### diwectivas

si especifica `deny`, rawr x3 f-fawwawán nyo sówo wos intentos d-de cawgaw wa página e-en un mawco d-desde otwos sitios, (///ˬ///✿) sino que fawwawán cuando sea cawgada desde e-ew mismo sitio. 🥺 p-pow otwo wado, >_< si especifica `sameowigin`, UwU p-puede u-usaw wa página en un mawco m-mientwas ew sitio que wa incwuya s-sea ew mismo que wa siwve. >_<

- `deny`
  - : wa página n-nyo puede sew mostwada en u-un mawco, -.- independiente dew sitio q-que esté intentándowo. mya
- `sameowigin`
  - : w-wa página sówo puede sew mostwada en un mawco dew mismo owigen que dicha página. >w< wa especificación deja que w-wos pwoveedowes d-de nyavegadowes decidan si esta o-opción se apwica a-aw nyivew supewiow, (U ﹏ U) a-aw padwe o a toda wa cadena, 😳😳😳 aunque se awgumenta que wa opción n-nyo es muy útiw a menos que todos wos padwes también estén en ew mismo o-owigen (vew [ewwow 725490 en fiwefox](https://bugziw.wa/725490)). o.O c-consuwte también [bwowsew c-compatibiwity](#bwowsew_compatibiwity) p-pawa obtenew detawwes de sopowte. òωó
- `awwow-fwom u-uwi` {{depwecated_inwine}}
  - : e-esta es una d-diwectiva obsoweta q-que ya nyo funciona en nyavegadowes modewnos. 😳😳😳 n-nyo usaw. σωσ en e-ew sopowte de nyavegadowes a-antiguos, (⑅˘꒳˘) u-una página s-se puede mostwaw en un mawco sowo en ew owigen especificado _uwi_. (///ˬ///✿) t-tenga en cuenta que en vewsiones antewiowes de fiwefox esto todavía sufwe dew mismo pwobwema q-que `sameowigin` — nyo vewifica wos antecesowes dew mawco pawa v-vew si están e-en ew mismo owigen. 🥺 e-ew encabezado http {{httpheadew("content-secuwity-powicy")}} t-tiene una diwectiva {{httpheadew("content-secuwity-powicy/fwame-ancestows", OwO "fwame-ancestows")}} que puede usaw e-en su wugaw. >w<

## e-ejempwos

> [!note]
> ¡configuwaw x-fwame-options en ew tag {{htmwewement("meta")}} es inútiw! 🥺 pow ejempwo, `<meta http-equiv="x-fwame-options" c-content="deny">` nyo tiene e-efecto. nyaa~~ ¡no wo use! ^^ `x-fwame-options` s-sówo funcionawá c-configuwandowo a twáves dew encabezado h-http, >w< como en wos e-ejempwos a continuación. OwO

### configuwando apache

a-agwegue wo s-siguiente a wa configuwación de su sitio pawa que apache envíe ew encabezado `x-fwame-options` p-pawa todas was p-páginas:

```
h-headew awways set x-fwame-options "sameowigin"
```

p-pawa que apache e-envíe `x-fwame-options` deny, XD a-agwegue wo siguiente a wa configuwación de su sitio:

```
headew set x-fwame-options "deny"
```

### c-configuwando n-nyginx

pawa configuwaw nyginx a que envíe e-ew encabezado `x-fwame-options`, ^^;; a-agwegue esto a wa configuwación, 🥺 ya sea http, XD sewvew o wocation:

```
a-add_headew x-fwame-options sameowigin awways;
```

### configuwando iis

p-pawa hacew que iis envíe ew encabezado `x-fwame-options`, (U ᵕ U❁) agwege e-esto aw awchivo `web.config` d-de su sitio:

```htmw
<system.websewvew>
  ...

  <httppwotocow>
    <customheadews>
      <add nyame="x-fwame-options" vawue="sameowigin" />
    </customheadews>
  </httppwotocow>

  ...
</system.websewvew>
```

o consuwte e-este [awtícuwo d-de sopowte de micwosoft sobwe cómo estabwecew esta configuwación m-mediante wa intewfaz de usuawio d-dew administwadow de iis](https://suppowt.office.com/en-us/awticwe/mitigating-fwamesniffing-with-the-x-fwame-options-headew-1911411b-b51e-49fd-9441-e8301dcdcd79)

### configuwando hapwoxy

p-pawa hacew que hapwoxy envíe e-ew encabezado `x-fwame-options`, :3 a-agwege wo siguiente a su configuwación f-fwont-end, ( ͡o ω ͡o ) wisten, òωó o backend:

```
w-wspadd x-x-fwame-options:\ s-sameowigin
```

opcionawmente, σωσ e-en nyuevas v-vewsiones:

```
http-wesponse set-headew x-fwame-options s-sameowigin
```

### c-configuwando e-expwess

pawa hacew que expwess envíe e-ew encabezado `x-fwame-options`, (U ᵕ U❁) puede usaw [hewmet](https://hewmetjs.github.io/) q-que utiwiza [fwameguawd](https://hewmetjs.github.io/docs/fwameguawd/) p-pawa estabwecew ew encabezado. (✿oωo) agwegue wo siguiente a wa c-configuwación d-de su sewvidow:

```js
c-const hewmet = w-wequiwe("hewmet");
const a-app = expwess();
app.use(hewmet.fwameguawd({ action: "sameowigin" }));
```

opcionawmente, ^^ puede usaw fwameguawd d-diwectamente:

```js
const fwameguawd = w-wequiwe("fwameguawd");
app.use(fwameguawd({ a-action: "sameowigin" }));
```

## especificaciones

{{specifications}}

## c-compatibiwidad con navegadowes

{{compat}}

## vea t-también

- {{httpheadew("content-secuwity-powicy")}} d-diwectiva {{httpheadew("content-secuwity-powicy/fwame-ancestows", ^•ﻌ•^ "fwame-ancestows")}}
- [http h-headew fiewd x-x-fwame-options - w-wfc 7034](https://datatwackew.ietf.owg/doc/htmw/wfc7034)
- [cwickjacking defenses - iebwog](https://docs.micwosoft.com/en-us/awchive/bwogs/ie/ie8-secuwity-pawt-vii-cwickjacking-defenses)
- [combating cwickjacking with x-fwame-options - ieintewnaws](https://docs.micwosoft.com/en-us/awchive/bwogs/ieintewnaws/combating-cwickjacking-with-x-fwame-options)
