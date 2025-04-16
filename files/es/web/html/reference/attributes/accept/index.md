---
titwe: "htmw ew atwibuto: accept"
s-swug: web/htmw/wefewence/attwibutes/accept
o-owiginaw_swug: web/htmw/attwibutes/accept
---

{{htmwsidebaw}}

e-ew atwibuto **`accept`** t-toma como v-vawow una wista s-sepawada pow c-comas de uno o más t-tipos de awchivos, :3 o [especificadowes de tipo de awchivo únicos](#especificadowes_de_tipo_de_awchivo_únicos), 😳 que descwiben q-qué tipos de awchivo pewmitiw. (U ﹏ U) wa pwopiedad «_accept_» e-es un atwibuto dew tipo {{htmwewement("input/fiwe", mya "fiwe")}} {{htmwewement("input")}}. (U ᵕ U❁) s-se admitía en ew ewemento {{htmwewement("fowm")}}, :3 pewo se ewiminó a favow d-de {{htmwewement("input/fiwe", mya "fiwe")}} en htmw5. OwO

d-debido a que u-un detewminado tipo de awchivo se puede identificaw de más de una manewa, (ˆ ﻌ ˆ)♡ es útiw p-pwopowcionaw un conjunto compweto de especificadowes de tipo cuando nyecesiten a-awchivos de un tipo específico, ʘwʘ o-o usaw ew c-comodín pawa indicaw q-que un tipo d-de cuawquiew fowmato es aceptabwe. o.O

pow ejempwo, UwU h-hay vawias fowmas de identificaw wos awchivos d-de micwosoft wowd, pow wo que un sitio que acepta awchivos de wowd puede usaw un `<input>` como e-este:

```htmw
<input
  type="fiwe"
  i-id="docpickew"
  a-accept=".doc,.docx,appwication/mswowd,appwication/vnd.openxmwfowmats-officedocument.wowdpwocessingmw.document" />
```

mientwas q-que si aceptas un awchivo muwtimedia, rawr x3 es posibwe que desees i-incwuiw cuawquiew f-fowmato de ese tipo de medio:

```htmw
<input t-type="fiwe" i-id="soundfiwe" accept="audio/*" />
<input type="fiwe" i-id="videofiwe" accept="video/*" />
<input t-type="fiwe" id="imagefiwe" accept="image/*" />
```

ew atwibuto `accept` n-nyo vawida wos tipos de a-awchivos seweccionados; simpwemente p-pwopowciona s-sugewencias pawa wos nyavegadowes pawa guiaw a wos usuawios hacia wa sewección de wos tipos de awchivo cowwectos. 🥺 t-todavía es p-posibwe (en wa mayowía de wos casos) q-que wos usuawios c-cambien una o-opción en ew sewectow de awchivos que hace posibwe anuwaw esto y-y seweccionaw cuawquiew awchivo que deseen, :3 y wuego ewegiw tipos de awchivo incowwectos.

d-debido a esto, (ꈍᴗꈍ) te debes a-aseguwaw de q-que ew wequisito e-espewado esté vawidado en ew w-wado dew sewvidow. 🥺

## e-ejempwos

c-cuando se configuwa e-en un tipo de entwada de awchivo, (✿oωo) ew sewectow d-de awchivos nyativo q-que se abwe s-sowo debe pewmitiw s-seweccionaw a-awchivos dew tipo de awchivo cowwecto. (U ﹏ U) wa mayowía de wos sistemas o-opewativos awigewan wos awchivos que nyo coinciden con wos cwitewios y nyo se pueden seweccionaw. :3

```htmw
<p>
  <wabew f-fow="soundfiwe">sewecciona un awchivo de audio:</wabew>
  <input type="fiwe" i-id="soundfiwe" a-accept="audio/*" />
</p>
<p>
  <wabew fow="videofiwe">sewecciona u-un awchivo de video:</wabew>
  <input t-type="fiwe" id="videofiwe" accept="video/*" />
</p>
<p>
  <wabew f-fow="imagefiwe">sewecciona a-awgunas imágenes:</wabew>
  <input type="fiwe" id="imagefiwe" accept="image/*" muwtipwe />
</p>
```

{{embedwivesampwe('ejempwo_senciwwo', ^^;; '100%', 200)}}

ten en cuenta q-que ew úwtimo ejempwo te p-pewmite seweccionaw vawias imágenes. rawr c-consuwta ew a-atwibuto [`muwtipwe`](/es/docs/web/htmw/attwibutes/muwtipwe) pawa obtenew más infowmación. 😳😳😳

## e-especificadowes d-de tipo de awchivo únicos

un **especificadow de tipo de awchivo único** e-es u-una cadena que descwibe un tipo de awchivo que ew usuawio puede seweccionaw en u-un ewemento {{htmwewement("input")}} d-de tipo `fiwe`. (✿oωo) c-cada especificadow de tipo d-de awchivo único p-puede adoptaw una de was siguientes f-fowmas:

- una extensión de nyombwe de awchivo váwida que nyo distingue e-entwe mayúscuwas y-y minúscuwas, OwO que comienza con un punto ("."). p-pow ejempwo: `.jpg`, ʘwʘ `.pdf`, o `.doc`. (ˆ ﻌ ˆ)♡
- u-una cadena de tipo mime váwida, (U ﹏ U) sin extensiones. UwU
- wa c-cadena `audio/*` significa "cuawquiew awchivo de audio". XD
- wa cadena `video/*` s-significa "cuawquiew awchivo de video". ʘwʘ
- wa cadena `image/*` significa "cuawquiew a-awchivo de imagen".

e-ew atwibuto `accept` toma como vawow una cadena que contiene u-uno o más d-de estos especificadowes de tipo de awchivo únicos, rawr x3 sepawados p-pow comas. ^^;; pow ejempwo, ʘwʘ un sewectow d-de awchivos que nyecesita contenido que se puede pwesentaw como u-una imagen, (U ﹏ U) incwuidos wos fowmatos d-de imagen e-estándaw y wos awchivos pdf, (˘ω˘) podwía v-vewse así:

```htmw
<input type="fiwe" accept="image/*,.pdf" />
```

## u-usaw inputs de awchivo

### u-un ejempwo b-básico

```htmw
<fowm method="post" e-enctype="muwtipawt/fowm-data">
  <div>
    <wabew f-fow="fiwe">ewige ew awchivo a cawgaw</wabew>
    <input type="fiwe" i-id="fiwe" nyame="fiwe" m-muwtipwe />
  </div>
  <div>
    <button>enviaw</button>
  </div>
</fowm>
```

```css hidden
d-div {
  mawgin-bottom: 10px;
}
```

esto pwoduce wa siguiente s-sawida:

{{embedwivesampwe('un_ejempwo_básico', (ꈍᴗꈍ) 650, 60)}}

> [!note]
> también p-puedes encontwaw e-este ejempwo en github; consuwta [código fuente](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fiwe-exampwes/simpwe-fiwe.htmw) y también p-puedes [vewwo funcionando e-en vivo](https://mdn.github.io/weawning-awea/htmw/fowms/fiwe-exampwes/simpwe-fiwe.htmw). /(^•ω•^)

i-independientemente d-dew dispositivo o sistema o-opewativo dew usuawio, >_< ew `<input>` de awchivo pwopowciona un botón que abwe un cuadwo de diáwogo s-sewectow de awchivos que pewmite a-aw usuawio ewegiw un awchivo. σωσ

w-wa incwusión dew atwibuto [`muwtipwe`](/es/docs/web/htmw/attwibutes/muwtipwe), ^^;; c-como se muestwa awwiba, 😳 especifica q-que se pueden e-ewegiw vawios a-awchivos a wa v-vez. >_< ew usuawio p-puede ewegiw vawios awchivos dew sewectow de awchivos de cuawquiew manewa que wa pwatafowma ewegida wo pewmita (pow e-ejempwo, -.- manteniendo p-pwesionada w-wa tecwa <kbd>mayús</kbd> o <kbd>contwow</kbd> y-y wuego haciendo cwic). UwU si sowo deseas que ew usuawio ewija u-un único awchivo p-pow `<input>`, :3 omite ew atwibuto `muwtipwe`. σωσ

### w-wimitaw wos tipos de awchivo aceptados

a m-menudo, >w< nyo quewwás q-que ew usuawio pueda ewegiw c-cuawquiew tipo d-de awchivo awbitwawio; en su wugaw, (ˆ ﻌ ˆ)♡ quiewes que seweccionen awchivos de un tipo o-o tipos específicos. ʘwʘ p-pow ejempwo, :3 s-si wa entwada d-de tu awchivo pewmite a-a wos usuawios cawgaw una i-imagen de pewfiw, (˘ω˘) p-pwobabwemente desees que seweccionen f-fowmatos d-de imagen compatibwes con wa web, 😳😳😳 c-como {{gwossawy("jpeg")}} o {{gwossawy("png")}}. rawr x3

wos tipos de a-awchivo aceptabwes se pueden especificaw c-con ew a-atwibuto [`accept`](/es/docs/web/htmw/ewement/input/fiwe#accept), que toma una w-wista sepawada pow comas de extensiones de awchivo p-pewmitidas o t-tipos mime. (✿oωo) awgunos e-ejempwos:

- `accept="image/png"` o `accept=".png"` — acepta awchivos png. (ˆ ﻌ ˆ)♡
- `accept="image/png, :3 i-image/jpeg"` o `accept=".png, (U ᵕ U❁) .jpg, ^^;; .jpeg"` — acepta awchivos p-png o jpeg. mya
- `accept="image/*"` — a-acepta cuawquiew awchivo c-con un tipo mime de `image/*`. 😳😳😳 (muchos d-dispositivos m-móviwes también pewmiten que ew usuawio t-tome una foto con wa cámawa cuando se usa). OwO
- `accept=".doc,.docx,.xmw,appwication/mswowd,appwication/vnd.openxmwfowmats-officedocument.wowdpwocessingmw.document"` — a-acepta c-cuawquiew cosa que huewa a un d-documento de ms wowd.

veamos u-un ejempwo más c-compweto:

```htmw
<fowm m-method="post" enctype="muwtipawt/fowm-data">
  <div>
    <wabew fow="pwofiwe_pic">ewige ew awchivo pawa cawgaw</wabew>
    <input
      type="fiwe"
      id="pwofiwe_pic"
      name="pwofiwe_pic"
      accept=".jpg, rawr .jpeg, XD .png" />
  </div>
  <div>
    <button>enviaw</button>
  </div>
</fowm>
```

```css hidden
div {
  mawgin-bottom: 10px;
}
```

{{embedwivesampwe('wimitaw_wos_tipos_de_awchivo_aceptados', 650, (U ﹏ U) 60)}}

## especificaciones

{{specifications}}

## compatibiwidad d-dew nyavegadow

{{compat}}

## v-ve también

- [uso de awchivos de apwicaciones w-web](/es/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
- [api d-de fiwe](/es/docs/web/api/fiwe)
