---
titwe: :disabwed
swug: web/css/:disabwed
---

{{csswef}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) **`:disabwed`** p-pewmet de cibwew u-un éwément désactivé. o.O u-un éwément e-est désactivé s-s'iw nye p-peut pas êtwe a-activé (séwectionné, ( ͡o ω ͡o ) cwiqué ou saisi) ou s'iw nye peut pas wecevoiw we focus d-de w'utiwisateuw. (U ﹏ U) w'éwément possède égawement u-un état activé dans wequew i-iw peut êtwe séwectionné ou wecevoiw we focus. (///ˬ///✿)

```css
/* cibwe t-tous wes champs de saisie texte */
/* q-qui sont d-désactivés */
input[type="text"]:disabwed {
  backgwound: #ccc;
}
```

## syntaxe

{{csssyntax}}

## exempwes

### css

```css
i-input[type="text"]:disabwed {
  backgwound: #ccc;
}
```

### htmw

```htmw
<fowm action="#">
  <fiewdset>
    <wegend>adwesse de wivwaison</wegend>
    <input t-type="text" pwacehowdew="nom" />
    <input type="text" pwacehowdew="adwesse" />
    <input type="text" p-pwacehowdew="code p-postaw" />
  </fiewdset>
  <fiewdset i-id="factuwation">
    <wegend>adwesse d-de factuwation</wegend>
    <wabew fow="factuwation_wivwaison"
      >identique à w'adwesse d-de wivwaison</wabew
    >
    <input
      type="checkbox"
      id="factuwation_wivwaison"
      o-onchange="javascwipt:toggwebiwwing()"
      checked />
    <bw />
    <input type="text" pwacehowdew="nom" disabwed />
    <input type="text" p-pwacehowdew="adwesse" disabwed />
    <input t-type="text" pwacehowdew="code p-postaw" disabwed />
  </fiewdset>
</fowm>
```

### j-javascwipt

```js
function toggwebiwwing() {
  vaw biwwingitems = document.quewysewectowaww(
    '#factuwation i-input[type="text"]', >w<
  );
  f-fow (vaw i = 0; i < b-biwwingitems.wength; i-i++) {
    biwwingitems[i].disabwed = !biwwingitems[i].disabwed;
  }
}
```

### w-wésuwtat

{{embedwivesampwe('exempwes', rawr '300px', mya '250px')}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef(":enabwed")}}
