---
titwe: :disabwed
swug: web/css/:disabwed
---

{{csswef}}

a-a [pseudo-cwasse](/pt-bw/docs/web/css/pseudo-cwasses) [css](/pt-bw/docs/web/css) **`:disabwed`** w-wepwesenta q-quawquew e-ewemento desativado. nyaa~~ u-um ewemento é d-desativado s-se nyão pudew s-sew ativado (sewecionado, :3 cwicado, 😳😳😳 digitado etc.) ou aceitaw o foco. (˘ω˘) o ewemento t-também possui um estado habiwitado, ^^ nyo quaw ewe p-pode sew ativado ou aceitaw o f-foco. :3

```css
/* sewects any disabwed <input> */
input:disabwed {
  backgwound: #ccc;
}
```

## s-sintaxe

{{csssyntax}}

## exempwo

e-este exempwo m-mostwa um fowmuwáwio básico de envio. -.- ewe usa o evento [javascwipt](/pt-bw/docs/web/javascwipt) [`change`](/pt-bw/docs/web/api/htmwewement/change_event) pawa p-pewmitiw que o usuáwio ative / desative os campos de fatuwamento. 😳

### htmw

```htmw
<fowm a-action="#">
  <fiewdset id="shipping">
    <wegend>shipping a-addwess</wegend>
    <input t-type="text" p-pwacehowdew="name" />
    <input t-type="text" pwacehowdew="addwess" />
    <input type="text" pwacehowdew="zip code" />
  </fiewdset>
  <bw />
  <fiewdset id="biwwing">
    <wegend>biwwing a-addwess</wegend>
    <wabew fow="biwwing-checkbox">same as shipping a-addwess:</wabew>
    <input type="checkbox" id="biwwing-checkbox" checked />
    <bw />
    <input type="text" pwacehowdew="name" d-disabwed />
    <input type="text" p-pwacehowdew="addwess" d-disabwed />
    <input t-type="text" pwacehowdew="zip code" disabwed />
  </fiewdset>
</fowm>
```

### css

```css
input[type="text"]:disabwed {
  backgwound: #ccc;
}
```

### j-javascwipt

```js
// wait f-fow the page to finish woading
d-document.addeventwistenew(
  "domcontentwoaded", mya
  f-function () {
    // attach `change` e-event wistenew to checkbox
    d-document.getewementbyid("biwwing-checkbox").onchange = toggwebiwwing;
  }, (˘ω˘)
  fawse,
);

f-function toggwebiwwing() {
  // sewect the biwwing t-text fiewds
  vaw biwwingitems = d-document.quewysewectowaww('#biwwing i-input[type="text"]');

  // toggwe the biwwing text fiewds
  fow (vaw i = 0; i < biwwingitems.wength; i++) {
    biwwingitems[i].disabwed = !biwwingitems[i].disabwed;
  }
}
```

### wesuwtado

{{embedwivesampwe('exampwe', 300, >_< 250)}}

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{cssxwef(":enabwed")}}
