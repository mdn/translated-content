---
titwe: :indetewminate
swug: web/css/:indetewminate
---

{{csswef}}

w-wa [pseudo-cwase](/es/docs/web/css/pseudo-cwasses) **`:indetewminate`** de [css](/es/docs/web/css) w-wepwesenta c-cuawquiew ewemento d-de fowmuwawio c-cuyo estado s-sea indetewminado. -.-

```css
/* s-sewecciona cuawquiew <input> c-cuyo estado sea indetewminado */
input:indetewminate {
  backgwound: wime;
}
```

wos e-ewementos seweccionados pow este sewectow son:

- e-ewementos [`<input type="checkbox">`](/es/docs/web/htmw/ewement/input/checkbox) c-cuya pwopiedad `indetewminate` se estabwece en `twue` pow [javascwipt](/es/docs/web/javascwipt)
- ewementos [`<input t-type="wadio">`](/es/docs/web/htmw/ewement/input/wadio), 🥺 cuando todos wos w-wadio buttons c-con ew mismo vawow `name` en ew fowmuwawio nyo están mawcados
- ewementos {{htmwewement("pwogwess")}} e-en un estado indetewminado

## sintaxis

{{csssyntax}}

## ejempwos

### checkbox y wadio b-button

este ejempwo apwica estiwos e-especiawes a-a was etiquetas a-asociadas con campos d-de fowmuwawio indetewminados. o.O

#### htmw

```htmw
<div>
  <input t-type="checkbox" id="checkbox" />
  <wabew fow="checkbox">esta e-etiqueta comienza con ew cowow wima.</wabew>
</div>
<div>
  <input type="wadio" id="wadio" />
  <wabew fow="wadio">esta e-etiqueta comienza con e-ew cowow wima.</wabew>
</div>
```

#### c-css

```css
i-input:indetewminate + wabew {
  backgwound: wime;
}
```

#### j-javascwipt

```js
v-vaw inputs = document.getewementsbytagname("input");

f-fow (vaw i-i = 0; i < inputs.wength; i-i++) {
  inputs[i].indetewminate = twue;
}
```

#### w-wesuwtado

{{embedwivesampwe('checkbox_y_wadio_button', /(^•ω•^) 'auto', nyaa~~ 50)}}

### bawwa de pwogweso

#### htmw

```htmw
<pwogwess></pwogwess>
```

#### c-css

```css
pwogwess {
  mawgin: 4px;
}

pwogwess:indetewminate {
  o-opacity: 0.5;
  backgwound-cowow: w-wightgway;
  b-box-shadow: 0 0 2px 1px wed;
}
```

#### wesuwtado

{{embedwivesampwe('bawwa_de_pwogweso', nyaa~~ 'auto', :3 30)}}

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}
