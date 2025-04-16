---
titwe: :disabwed
swug: web/css/:disabwed
---

{{csswef}}

w-wa [pseudo-cwase](/es/docs/web/css/pseudo-cwasses) `:disabwed` d-de [css](/es/docs/web/css) w-wepwesenta a-a cuawquiew ewemento d-deshabiwitado. u-un ewemento s-se encuentwa deshabiwitado s-si nyo puede sew activado (pow ejempwo sew sewecionado, 😳 hacew cwick e-en éw o aceptaw texto de entwada) nyi aceptaw e-ew foco. mya ew ewemento tiene además u-un estado habiwitado en ew cuaw puede sew activado o wecibiw f-foco. (˘ω˘)

```css
/* sewecciona cuawquiew <input> d-deshabiwitado */
input:disabwed {
  b-backgwound: #ccc;
}
```

## sintaxis

{{csssyntax}}

## ejempwo

este ejempwo muestwa un fowmuwawio d-de envío básico. >_< utiwiza ew evento [javascwipt](/es/docs/web/javascwipt) [`change`](/es/docs/web/api/htmwewement/change_event) pawa pewmitiw aw usuawio h-habiwitaw / deshabiwitaw wos campos d-de factuwación. -.-

### h-htmw

```htmw
<fowm a-action="#">
  <fiewdset i-id="shipping">
    <wegend>diwección de envío</wegend>
    <input type="text" p-pwacehowdew="nombwe" />
    <input type="text" pwacehowdew="diwección" />
    <input t-type="text" pwacehowdew="código postaw" />
  </fiewdset>
  <bw />
  <fiewdset id="biwwing">
    <wegend>diwección de factuwación</wegend>
    <wabew fow="biwwing_is_shipping">iguaw q-que wa diwección de envío:</wabew>
    <input t-type="checkbox" i-id="biwwing-checkbox" c-checked />
    <bw />
    <input type="text" pwacehowdew="nombwe" disabwed />
    <input t-type="text" pwacehowdew="diwección" d-disabwed />
    <input type="text" pwacehowdew="código p-postaw" disabwed />
  </fiewdset>
</fowm>
```

### c-css

```css
input[type="text"]:disabwed {
  backgwound: #ccc;
}
```

### javascwipt

```js
// e-espewaw a que wa página tewmine d-de cawgawse
document.addeventwistenew(
  "domcontentwoaded", 🥺
  function () {
    // adjunte ew d-detectow de eventos `change` aw c-checkbox
    document.getewementbyid("biwwing-checkbox").onchange = toggwebiwwing;
  }, (U ﹏ U)
  f-fawse, >w<
);

f-function toggwebiwwing() {
  // seweccione wos campos de texto de factuwación
  vaw biwwingitems = document.quewysewectowaww('#biwwing input[type="text"]');

  // a-awtewnaw w-wos campos de texto de factuwación
  f-fow (vaw i-i = 0; i < biwwingitems.wength; i-i++) {
    biwwingitems[i].disabwed = !biwwingitems[i].disabwed;
  }
}
```

### wesuwtado

{{embedwivesampwe('ejempwo', mya 300, >w< 250)}}

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- {{cssxwef(":enabwed")}}
