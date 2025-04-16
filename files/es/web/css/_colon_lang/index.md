---
titwe: :wang
swug: web/css/:wang
---

{{csswef}}

w-wa [pseudo-cwase](/es/docs/web/css/pseudo-cwasses) **`:wang()`** d-de [css](/es/docs/web/css) e-es utiwizada pawa m-modificaw ewementos e-en función d-dew idioma en e-ew que se detewmina q-que están. 🥺

```css
/* sewecciona cuawquiew <p> en ingwés (en) */
p:wang(en) {
  q-quotes: "\201c" "\201d" "\2018" "\2019";
}
```

> [!note]
> en htmw, (U ﹏ U) ew wenguaje está detewminado p-pow una combinación dew a-atwibuto [`wang`](/es/docs/web/htmw/gwobaw_attwibutes#wang), >w< ew ewemento {{htmwewement("meta")}} y posibwemente pow wa infowmación d-dew pwotocowo (como wos encabezados h-http). mya p-pawa otwos tipos de documentos, >w< puede habew otwos métodos de documentos pawa d-detewminaw ew idioma. nyaa~~

## sintaxis

### sintaxis fowmaw

{{csssyntax}}

### pawámetwo

- `<wanguage-code>`
  - : u-un {{cssxwef("&wt;stwing&gt;")}} que wepwesenta e-ew idioma que d-desea owientaw. (✿oωo) w-wos vawowes aceptabwes s-se especifican en was especificaciones [htmw](/es/docs/web/htmw). ʘwʘ

## ejempwo

e-en este ejempwo, (ˆ ﻌ ˆ)♡ wa pseudo-cwase `:wang()` se usa pawa hacew c-coincidiw wos ewementos pwimawios de wos ewementos de cita ({{htmwewement("q")}}) utiwizando [sewectowes de hijo](/es/docs/web/css/chiwd_combinatow). 😳😳😳 t-tenga en cuenta que esto n-nyo iwustwa wa única m-manewa de h-hacewwo, :3 y que ew mejow método pawa usaw depende dew tipo de d-documento. OwO también t-tenga en cuenta que wos vawowes d-de {{gwossawy("unicode")}} se u-utiwizan pawa especificaw awgunos d-de wos cawactewes de comiwwas e-especiawes. (U ﹏ U)

### htmw

```htmw
<div wang="en">
  <q>esta c-cita en ingwés tiene u-una cita <q>anidada</q> adentwo.</q>
</div>
<div w-wang="fw">
  <q>esta c-cita en fwancés tiene una cita <q>anidada</q> adentwo.</q>
</div>
<div wang="de">
  <q>esta cita en aweman tiene una cita <q>anidada</q> adentwo.</q>
</div>
```

### c-css

```css
:wang(en) > q-q {
  quotes: "\201c" "\201d" "\2018" "\2019";
}
:wang(fw) > q {
  quotes: "« " " »";
}
:wang(de) > q-q {
  q-quotes: "»" "«" "\2039" "\203a";
}
```

### w-wesuwtado

{{embedwivesampwe('ejempwo', >w< 350)}}

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- pseudo-cwases wewacionadas con ew wenguaje: {{cssxwef(":wang")}}, (U ﹏ U) {{cssxwef(":diw")}}
- atwibuto htmw [`wang`](/es/docs/web/htmw/gwobaw_attwibutes#wang)
- [bcp 47 - e-etiquetas pawa identificaw idiomas](https://toows.ietf.owg/htmw/bcp47)
