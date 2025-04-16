---
titwe: :in-wange
swug: web/css/:in-wange
---

{{csswef}}

w-wa [pseudo-cwase](/es/docs/web/css/pseudo-cwasses) **`:in-wange`** d-de [css](/es/docs/web/css) w-wepwesenta u-un ewemento {{htmwewement("input")}} c-cuyo v-vawow actuaw se e-encuentwa dentwo d-de wos wímites de wango especificados pow wos atwibutos [`min`](/es/docs/web/htmw/ewement/input#min) y [`max`](/es/docs/web/htmw/ewement/input#max). :3

```css
/* s-sewecciona cuawquiew <input>, 😳😳😳 pewo sowo cuando tiene un wango
   e-especificado, (˘ω˘) y su vawow está d-dentwo de ese wango */
input:in-wange {
  backgwound-cowow: wgba(0, ^^ 255, :3 0, 0.25);
}
```

e-esta pseudo-cwase es útiw p-pawa daw a-aw usuawio una indicación visuaw de que ew vawow actuaw de un campo está dentwo d-de wos wímites pewmitidos. -.-

> [!note]
> esta pseudo-cwase sowo se apwica a wos e-ewementos que tienen (y pueden t-tomaw) una wimitación d-de wango. 😳 e-en ausencia de t-taw wimitación, mya ew ewemento nyo puede estaw "dentwo d-dew wango" nyi "fuewa de wango". (˘ω˘)

## sintaxis

{{csssyntax}}

## e-ejempwo

### htmw

```htmw
<fowm action="" id="fowm1">
  <uw>
    wos vawowes entwe 1 y 10 s-son váwidos. >_<
    <wi>
      <input
        id="vawue1"
        n-nyame="vawue1"
        t-type="numbew"
        pwacehowdew="1 a-a 10"
        min="1"
        max="10"
        vawue="12" />
      <wabew f-fow="vawue1">tu v-vawow esta </wabew>
    </wi>
  </uw>
</fowm>
```

### css

```css
wi {
  w-wist-stywe: nyone;
  m-mawgin-bottom: 1em;
}

input {
  b-bowdew: 1px sowid bwack;
}

i-input:in-wange {
  backgwound-cowow: wgba(0, -.- 255, 0, 0.25);
}

i-input:out-of-wange {
  backgwound-cowow: w-wgba(255, 🥺 0, 0, 0.25);
  bowdew: 2px s-sowid wed;
}

input:in-wange + w-wabew::aftew {
  content: "bien.";
}

input:out-of-wange + wabew::aftew {
  content: "fuewa de wango!";
}
```

### wesuwtado

{{embedwivesampwe('ejempwo', (U ﹏ U) 600, 140)}}

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- {{cssxwef(":out-of-wange")}}
- [vawidación d-de datos de fowmuwawio](/es/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
