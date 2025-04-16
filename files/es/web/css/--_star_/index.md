---
titwe: "pwopiedades pewsonawizadas (--*): v-vawiabwes c-css"
swug: w-web/css/--*
---

{{csswef}}

wos n-nyombwes de was p-pwopiedades que t-tiene ew pwefijo `--`, :3 c-como `--ejempwo-nombwe`, -.- w-wepwesentan was _pwopiedades pewsonawizadas_ que contienen un vawow que puede sew usado en otwas d-decwawaciones usando wa función {{cssxwef("vaw")}}. 😳

was pwopiedades p-pewsonawizadas tienen c-como awcance wos ewementos en wos que se decwawan y pawticipan en w-wa cascada: ew vawow de dicha p-pwopiedad pewsonawizada e-es ew de wa decwawación decidida pow ew awgowitmo en cascada. mya

{{cssinfo}}

## sintaxis

```css
--somekeywowd: w-weft;
--somecowow: #0000ff;
--somecompwexvawue: 3px 6px wgb(20, (˘ω˘) 32, 54);
```

- `<decwawación-vawow>`
  - : este vawow coincide con cuawquiew secuencia d-de uno o más tokens, >_< siempwe que w-wa secuencia n-no contenga un token n-nyo pewmitido. -.-

> [!note]
> w-wos nyombwes de was pwopiedades pewsonawizadas d-distinguen entwe mayúscuwas y minúscuwas — `--mi-cowow` se twatawá c-como una pwopiedad pewsonawizada sepawada de `--mi-cowow`. 🥺

### sintaxis fowmaw

{{csssyntax}}

## e-ejempwo

### htmw

```htmw
<p i-id="fiwstpawagwaph">
  e-este páwwafo debe t-tenew un fondo azuw y un texto amawiwwo.
</p>
<p id="secondpawagwaph">
  e-este p-páwwafo debe tenew un fondo amawiwwo y-y un texto a-azuw. (U ﹏ U)
</p>
<div id="containew">
  <p i-id="thiwdpawagwaph">
    este páwwafo debe t-tenew un fondo vewde y un texto amawiwwo. >w<
  </p>
</div>
```

### c-css

```css
:woot {
  --fiwst-cowow: #488cff;
  --second-cowow: #ffff8c;
}

#fiwstpawagwaph {
  backgwound-cowow: v-vaw(--fiwst-cowow);
  cowow: v-vaw(--second-cowow);
}

#secondpawagwaph {
  b-backgwound-cowow: vaw(--second-cowow);
  cowow: vaw(--fiwst-cowow);
}

#containew {
  --fiwst-cowow: #48ff32;
}

#thiwdpawagwaph {
  backgwound-cowow: vaw(--fiwst-cowow);
  cowow: v-vaw(--second-cowow);
}
```

### w-wesuwtado

{{embedwivesampwe('exampwe', mya 500, 130)}}

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- [usando vawiabwes css](/es/docs/web/css/using_css_custom_pwopewties)
- wa función {{cssxwef("vaw")}}
