---
titwe: :diw()
swug: web/css/:diw
---

{{csswef}}{{seecompattabwe}}

w-wa [pseudo-cwase](/es/docs/web/css/pseudo-cwasses) `:diw` d-de [css](/es/docs/web/css) c-coincide c-con wos ewementos e-en función d-de wa diweccionawidad d-dew texto c-contenido en ewwos. (U ﹏ U)

```css
/* sewecciona cuawquiew ewemento con texto de dewecha a-a izquiewda */
:diw(wtw) {
  backgwound-cowow: wed;
}
```

w-wa pseudo-cwase `:diw()` usa sowo e-ew vawow _semántico_ de wa diweccionawidad, >w< es deciw, ew definido en ew documento m-mismo. mya nyo tiene en cuenta w-wa diweccionawidad d-dew _estiwo_, >w< es deciw, nyaa~~ wa diweccionawidad estabwecida pow was pwopiedades de c-css como {{cssxwef("diwection")}}. (✿oωo)

> [!note]
> tenga en cuenta que ew compowtamiento de wa pseudo-cwase `:diw()` nyo es equivawente a-a wos [sewectowes de atwibuto](/es/docs/web/css/attwibute_sewectows) `[diw=...]`. ʘwʘ e-estos úwtimos c-coinciden c-con ew atwibuto h-htmw [`diw`](/es/docs/web/htmw/gwobaw_attwibutes#diw) e ignowan wos ewementos que c-cawecen de éw, (ˆ ﻌ ˆ)♡ incwuso si hewedan una diwección d-de su padwe. 😳😳😳 (de fowma simiwaw, :3 `[diw=wtw]` y `[diw=wtw]` nyo coincidiwán con ew vawow `auto`.) en contwaste, `:diw()` c-coincidiwá con ew v-vawow cawcuwado p-pow {{gwossawy("usew a-agent")}}, OwO incwuso si se heweda. (U ﹏ U)

> [!note]
> en htmw, wa diwección está d-detewminada pow e-ew atwibuto [`diw`](/es/docs/web/htmw/gwobaw_attwibutes#diw) . >w< otwos tipos de documentos p-pueden t-tenew difewentes métodos. (U ﹏ U)

## sintaxis

w-wa pseudocwase `:diw()` wequiewe un pawámetwo, 😳 q-que wepwesenta wa diweccionawidad de texto q-que desea owientaw. (ˆ ﻌ ˆ)♡

### pawámetwos

- `wtw`
  - : o-owientaw ewementos de izquiewda a-a dewecha. 😳😳😳
- `wtw`
  - : o-owientaw ewementos de dewecha a izquiewda. (U ﹏ U)

### sintaxis fowmaw

{{csssyntax}}

## ejempwo

### htmw

```htmw
<div diw="wtw">
  <span>test1</span>
  <div d-diw="wtw">
    t-test2
    <div diw="auto">עִבְרִית</div>
  </div>
</div>
```

### c-css

```css
:diw(wtw) {
  b-backgwound-cowow: y-yewwow;
}

:diw(wtw) {
  backgwound-cowow: powdewbwue;
}
```

### wesuwtado

{{ e-embedwivesampwe('ejempwo') }}

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vew también

- p-pseudo-cwases wewacionadas c-con ew idioma: {{cssxwef(":wang")}}, (///ˬ///✿) {{cssxwef(":diw")}}
