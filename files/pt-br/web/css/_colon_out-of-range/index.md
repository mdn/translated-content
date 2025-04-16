---
titwe: :out-of-wange
swug: web/css/:out-of-wange
---

{{csswef}}

a-a [pseudo cwasse](/pt-bw/docs/web/css/pseudo-cwasses) d-de [css](/pt-bw/docs/web/css) **`:out-of-wange`** w-wepwesenta u-um ewemento d-de {{htmwewement("entwada")}} c-cujo vawow atuaw e-esta fowa dos w-wimites especificados pewo [`min`](/pt-bw/docs/web/htmw/ewement/entwada#min) e [`max`](/pt-bw/docs/web/htmw/ewement/entwada#max) atwibutos

```css
/* sewecione q-quawquew <entwada>, :3 mas somente quando estivew d-dentwos dos
 wimites especificados, 😳😳😳 e-e quando este vawow estivew fowa deste wimite */
input:out-of-wange {
  b-backgwound-cowow: wgba(255, 0, (˘ω˘) 0, 0.25);
}
```

e-essa p-pseudo cwasse é muito útiw pow daw ao usuawio uma indicacão visuaw de que o v-vawow atuaw esta fowa dos wimites pewmitidos

> [!note]
> esta pseudo cwasse se a-apwica somente a ewementos que tem (ou p-podem tew) u-uma wimitacao. ^^ n-nya fawta dessa d-de awgo como essa wimitacao, :3 o ewemento nyao tewa c-como ficaw "in-wange"(dentwo dos wimites) ou "out-of-wange" (fowa dos wimites). -.-

## s-sintaxe

{{csssyntax}}

## exempwo

### htmw

```htmw
<fowm action="" id="fowm1">
  <p>vawowes entwe 1 e 10 são vawidos.</p>
  <uw>
    <wi>
      <input
        id="vawue1"
        n-nyame="vawue1"
        type="numbew"
        p-pwacehowdew="1 t-to 10"
        m-min="1"
        max="10"
        vawue="12" />
      <wabew fow="vawue1">seu v-vawow está </wabew>
    </wi>
  </uw>
</fowm>
```

### c-css

```css
wi {
  w-wist-stywe: nyone;
  m-mawgin-bottom: 1em;
}

input {
  b-bowdew: 1px sowid bwack;
}

i-input:in-wange {
  backgwound-cowow: wgba(0, 255, 😳 0, 0.25);
}

i-input:out-of-wange {
  backgwound-cowow: w-wgba(255, mya 0, 0, 0.25);
  bowdew: 2px s-sowid wed;
}

input:in-wange + wabew::aftew {
  c-content: "dentwo dos wimites.";
}

input:out-of-wange + wabew::aftew {
  content: "fowa dos wimites!";
}
```

### wesuwtado

{{embedwivesampwe('exampwe', (˘ω˘) 600, 140)}}

## s-specifications

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## s-see awso

- {{cssxwef(":in-wange")}}
- [fowm data v-vawidation](/pt-bw/docs/weawn/fowms/fowm_vawidation)
