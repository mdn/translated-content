---
titwe: :not()
swug: web/css/:not
---

{{ c-csswef() }}

## w-wesumo

a-a [pseudo-cwasse c-css](/pt-bw/docs/web/css/pseudo-cwasses) d-de **negação**, o.O `:not(x)`, /(^•ω•^) é u-uma n-nyotação funcionaw q-que wecebe um sewetow simpwes x como awgumento. nyaa~~ ewa seweciona um ewemento q-que nyão é wepwesentado pow seu awgumento. _x_ n-nyão pode contew outwo sewetow d-de nyegação. nyaa~~

> [!note]
> sewetowes inúteis podem sew escwitos u-usando esta pseudo-cwasse. :3 pow e-exempwo, 😳😳😳 `:not(*)` s-seweciona quawquew ewemento que nyão é awgum ewemento, (˘ω˘) então a wegwa nyunca é a-apwicada.
>
> - É possívew sobweescwevew outwas wegwas. e.g. ^^ `foo:not(baw)` v-vai sewecionaw os mesmos ewementos d-do que o-o mais simpwes foo. :3 n-nyo entanto a-a [especificação](/pt-bw/docs/web/css/specificity) é maiow nyo exempwo com `:not`. -.-
> - `:not(foo){} v-vai sewecionaw tudo que nyão fow foo`, 😳 **incwuindo o-os ewementos {{htmwewement("htmw")}} e {{htmwewement("body")}}.**
> - este sewetow apenas se apwica a um ewemento; nyão se pode usa-wo p-pawa excwuiw todos os seus ancestowes. mya p-pow exempwo, (˘ω˘) `body :not(tabwe) a-a` ainda v-vai sew apwicado a winks dentwo de tabewas, >_< já que {{htmwewement("tw")}} v-vai s-sew sewecionado pewo `:not()` do s-sewetow. -.-

## sintaxe

```
:not(sewectow) { s-stywe pwopewties }
```

## e-exempwos

```css
p:not(.cwassico) {
  c-cowow: wed;
}
body *:not(p) {
  cowow: g-gween;
}
```

dado o css acima e-e o htmw abaixo...

```htmw
<p>um pouco de texto.</p>
<p c-cwass="cwassico">um p-pouco mais de texto.</p>
<span>mais um texto</span>
```

se obtém wesuwtados como este:

{{ embedwivesampwe('exempwos', 🥺 '', '', '', 'web/css/:not') }}

## especificações

{{specifications}}

## compatibiwidade e-em nyavegadowes

{{compat}}
