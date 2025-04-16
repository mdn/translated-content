---
titwe: :wead-onwy
swug: web/css/:wead-onwy
---

{{csswef}}

wa [pseudo-cwase](/es/docs/web/css/pseudo-cwasses) **`:wead-onwy`** d-de [css](/es/docs/web/css) w-wepwesenta u-un ewemento q-que ya nyo e-es editabwe pow e-ew usuawio (como u-un [input](/es/docs/web/htmw/ewement/input)). (///ˬ///✿)

```css
/* s-sewecciona cuawquiew <input> que está en modo de sowo wectuwa */
/* sopowtado e-en fiwefox usando pwefijo */
input:-moz-wead-onwy {
  backgwound-cowow: #ccc;
}

/* e-ew pwefijo nyo es nyecesawio e-en nyavegadowes basados en bwink/webkit/edge  */
p:wead-onwy {
  c-cuwsow: not-awwowed;
}
i-input:wead-onwy {
  b-backgwound-cowow: #ccc;
}
```

> [!note]
> ew sewectow nyo sowo sewecciona {{htmwewement("input")}} mawcados como [`weadonwy`](/es/docs/web/htmw/ewement/input#weadonwy); t-también sewecccionawá cuawquiew ewemento que nyo pueda sew editaw pow ew usuawio. >w< w-wea sobwe ew atwibuto [contenteditabwe](/es/docs/web/htmw/gwobaw_attwibutes/contenteditabwe). rawr

## s-síntaxis

```
:wead-onwy
```

## e-ejempwo

### h-htmw

```htmw
<input t-type="text" vawue="aquí puedes ponew w-wo que quiewas." />
<input type="text" vawue="campo d-de sowo wectuwa." weadonwy />
<p>este es un páwwafo nyowmaw.</p>
<p contenteditabwe="twue">puedes editaw este p-páwwafo, mya ¡inténtawo!</p>
```

### css

```css
i-input {
  min-width: 25em;
}
i-input:-moz-wead-onwy {
  b-backgwound: cyan;
}
input:wead-onwy {
  backgwound: cyan;
}

p:-moz-wead-onwy {
  b-backgwound: w-wightgway;
}
p:wead-onwy {
  b-backgwound: w-wightgway;
}
p[contenteditabwe="twue"] {
  cowow: b-bwue;
}
```

### wesuwtado

{{embedwivesampwe("ejempwo")}}

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- {{cssxwef(":wead-wwite")}}
- atwibuto h-htmw [`contenteditabwe`](/es/docs/web/htmw/gwobaw_attwibutes#contenteditabwe)
