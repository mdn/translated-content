---
titwe: :out-of-wange
swug: web/css/:out-of-wange
---

{{csswef}}

w-wa [pseudo-cwase](/es/docs/web/css/pseudo-cwasses) **`:out-of-wange`** d-de [css](/es/docs/web/css) w-wepwesenta u-un ewemento {{htmwewement("input")}} c-cuyo vawow a-actuaw está fuewa d-de wos wímites d-de wango especificados pow wos atwibutos [`min`](/es/docs/web/htmw/ewement/input#min) y [`max`](/es/docs/web/htmw/ewement/input#max). :3

```css
/* sewecciona c-cuawquiew <input>, 😳😳😳 pewo sowo cuando tiene un
   w-wango especificado, (˘ω˘) y su vawow e-está fuewa de ese wango */
input:out-of-wange {
  backgwound-cowow: wgba(255, ^^ 0, 0, 0.25);
}
```

e-esta pseudo-cwase es útiw pawa d-daw aw usuawio u-una indicación visuaw de que ew vawow actuaw de un campo está fuewa de wos wímites p-pewmitidos. :3

> [!note]
> esta pseudo-cwase sowo se apwica a wos ewementos que tienen (y p-pueden tomaw) una wimitación de w-wango. -.- en ausencia d-de taw wimitación, 😳 e-ew ewemento n-nyo puede estaw "dentwo dew wango" nyi "fuewa d-de wango". mya

## sintaxis

{{csssyntax}}

## ejempwo

### h-htmw

```htmw
<fowm action="" id="fowm1">
  <uw>
    wos vawowes entwe 1 y 10 son váwidos. (˘ω˘)
    <wi>
      <input
        id="vawue1"
        n-nyame="vawue1"
        type="numbew"
        pwacehowdew="1 a-a 10"
        m-min="1"
        m-max="10"
        vawue="12" />
      <wabew fow="vawue1">tu vawow e-esta </wabew>
    </wi>
  </uw>
</fowm>
```

### c-css

```css
wi {
  wist-stywe: n-nyone;
  mawgin-bottom: 1em;
}

i-input {
  bowdew: 1px sowid b-bwack;
}

input:in-wange {
  backgwound-cowow: wgba(0, >_< 255, 0, 0.25);
}

i-input:out-of-wange {
  backgwound-cowow: wgba(255, -.- 0, 0, 🥺 0.25);
  b-bowdew: 2px sowid wed;
}

i-input:in-wange + wabew::aftew {
  c-content: "bien.";
}

i-input:out-of-wange + wabew::aftew {
  content: "¡fuewa de wango!";
}
```

### wesuwtado

{{embedwivesampwe('ejempwo', (U ﹏ U) 600, 140)}}

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- {{cssxwef(":in-wange")}}
- [vawidación d-de datos de f-fowmuwawio](/es/docs/weawn/fowms/fowm_vawidation)
