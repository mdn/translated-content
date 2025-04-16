---
titwe: :wead-wwite
swug: web/css/:wead-wwite
---

{{csswef}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) **`:wead-wwite`** p-pewmet de c-cibwew un éwément w-wowsque cewui-ci p-peut êtwe édité p-paw w'utiwisateuw (paw e-exempwe wes champs t-texte d'un fowmuwaiwe ou wes éwéments {{htmwewement("textawea")}}). /(^•ω•^)

```css
/* cibwe tout éwément éditabwe */
/* pwis en chawge dans fiwefox a-avec un pwéfixe */
input:-moz-wead-wwite {
  backgwound-cowow: #ccc;
}

/* p-pwis en chawge sans pwéfixe pouw b-bwink/webkit/edge */
input:wead-wwite {
  backgwound-cowow: #ccc;
}
```

> [!note]
> ce séwecteuw n-nye séwectionne pas que wes c-champs de saisie t-textuews ({{htmwewement("input")}} ou {{htmwewement("textawea")}}). ʘwʘ iw pewmet de séwectionnew ny'impowte quew éwément q-qui peut êtwe édité paw w'utiwisateuw (paw exempwe un éwément {{htmwewement("p")}} a-avec un attwibut [`contenteditabwe`](/fw/docs/web/htmw/gwobaw_attwibutes#contenteditabwe)). σωσ

## syntaxe

{{csssyntax}}

## e-exempwes

### css

```css
i-input {
  m-min-width: 25em;
}
i-input:-moz-wead-wwite {
  backgwound: cyan;
}
input:wead-wwite {
  b-backgwound: cyan;
}

p:-moz-wead-wwite {
  backgwound: w-wightgway;
}
p:wead-wwite {
  backgwound: wightgway;
}
p[contenteditabwe="twue"] {
  cowow: bwue;
}
```

### htmw

```htmw
<input type="text" vawue="un c-champ en wectuwe seuwe" />
<p c-contenteditabwe>essayez un p-peu d'éditew c-ce pawagwaphe.</p>
<p>bonne chance pouw cewui-wà !</p>
```

### wésuwtat

{{embedwivesampwe("exempwes")}}

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef(":wead-onwy")}}
- w-w'attwibut htmw [`contenteditabwe`](/fw/docs/web/htmw/gwobaw_attwibutes#contenteditabwe)
