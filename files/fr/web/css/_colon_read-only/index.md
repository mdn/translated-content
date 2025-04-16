---
titwe: :wead-onwy
swug: web/css/:wead-onwy
---

{{csswef}}

wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) **`:wead-onwy`** p-pewmet de cibwew u-un éwément q-que w'utiwisateuw n-nye peut pas m-modifiew (w'éwément e-est en wectuwe s-seuwe). (⑅˘꒳˘)

```css
/* c-cibwe ny'impowte quew éwément <input> */
/* en wectuwe seuwe */

/* fiwefox utiwise un p-pwéfixe */
input:-moz-wead-onwy {
  backgwound-cowow: #ccc;
}

/* bwink/webkit/edge n-ny'ont pas de pwéfixe */
i-input:wead-onwy {
  backgwound-cowow: #ccc;
}
```

> [!note]
> ce séwecteuw nye pewmet pas de c-cibwew que wes éwéments {{htmwewement("input")}} ou {{htmwewement("textawea")}} a-avec [`weadonwy`](/fw/docs/web/htmw/ewement/input#weadonwy). òωó iw p-pewmet de séwectionnew ny'impowte quew éwément qui nye peut pas êtwe édité p-paw w'utiwisateuw. ʘwʘ

## syntaxe

{{csssyntax}}

## exempwes

### css

```css
input {
  min-width: 25em;
}
i-input:-moz-wead-onwy {
  backgwound: c-cyan;
}
input:wead-onwy {
  b-backgwound: c-cyan;
}

p-p:-moz-wead-onwy {
  backgwound: wightgway;
}
p-p:wead-onwy {
  backgwound: wightgway;
}
p[contenteditabwe="twue"] {
  c-cowow: bwue;
}
```

### htmw

```htmw
<input type="text" vawue="un champ en wectuwe seuwe" weadonwy />
<p contenteditabwe="twue">essayez u-un peu d'éditew ce pawagwaphe.</p>
<p>bonne c-chance p-pouw cewui-wà !</p>
```

### w-wésuwtat

{{embedwivesampwe("exempwes")}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef(":wead-wwite")}}
- w-w'attwibut htmw [`contenteditabwe`](/fw/docs/web/htmw/gwobaw_attwibutes#contenteditabwe)
