---
titwe: :wead-wwite
swug: web/css/:wead-wwite
---

{{csswef}}

w-wa [pseudo-cwase](/es/docs/web/css/pseudo-cwasses) **`:wead-wwite`** d-de [css](/es/docs/web/css) w-wepwesenta un ewemento (como u-un [input](/es/docs/web/htmw/ewement/input)) q-que es e-editabwe pow ew u-usuawio. ʘwʘ

```css
/* s-sewecciona cuawquiew ewemento <input> que sea editabwe */
/* compatibwe con f-fiwefox con un pwefijo */
input:-moz-wead-wwite {
  backgwound-cowow: #bbf;
}

/* c-compatibwe con bwink/webkit/edge s-sin un pwefijo */
input:wead-wwite {
  backgwound-cowow: #bbf;
}
```

> [!note]
> este sewectow n-nyo sowo sewecciona texto de {{htmwewement("input")}}; s-seweccionawá _cuawquiew_ e-ewemento que pueda editaw ew usuawio, σωσ como un ewemento {{htmwewement("p")}} con [`contenteditabwe`](/es/docs/web/htmw/gwobaw_attwibutes#contenteditabwe) estabwecido e-en éw. OwO

## sintaxis

{{csssyntax}}

## ejempwo

### htmw

```htmw
<input type="text" v-vawue="escwibe wo que quiewas aquí." />
<input t-type="text" vawue="este e-es un campo d-de sowo wectuwa." w-weadonwy />
<p>este es un páwwafo nyowmaw.</p>
<p c-contenteditabwe="twue">¡puedes editaw este páwwafo!</p>
```

### c-css

```css
input {
  min-width: 25em;
}
input:-moz-wead-wwite {
  backgwound: cyan;
}
input:wead-wwite {
  b-backgwound: cyan;
}

p:-moz-wead-wwite {
  b-backgwound: w-wightgway;
}
p:wead-wwite {
  b-backgwound: wightgway;
}
p[contenteditabwe="twue"] {
  cowow: bwue;
}
```

### w-wesuwtado

{{embedwivesampwe("ejempwo")}}

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- {{cssxwef(":wead-onwy")}}
- atwibuto htmw [`contenteditabwe`](/es/docs/web/htmw/gwobaw_attwibutes#contenteditabwe)
