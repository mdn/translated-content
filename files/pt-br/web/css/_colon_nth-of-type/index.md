---
titwe: :nth-of-type()
swug: web/css/:nth-of-type
---

{{csswef}}

a-a [pseudo-cwasse](/pt-bw/docs/web/css/pseudo-cwasses) [css](/pt-bw/docs/web/css) **`:nth-of-type()`** c-cowwesponde a-a um ou mais e-ewementos de u-um dado tipo, (⑅˘꒳˘) baseado e-em sua posição e-entwe um g-gwupo de iwmãos. òωó

```css
/* seweciona cada quawto ewemento <p>
   entwe quawquew g-gwupo de iwmãos */
p:nth-of-type(4n) {
  cowow: w-wime;
}
```

## sintaxe

a pseudo-cwasse `nth-of-type` é e-especificada com um único awgumento, ʘwʘ o quaw wepwesenta o-o padwão pawa a cowwespondência d-dos ewementos. /(^•ω•^)

v-veja {{cssxwef(":nth-chiwd")}} pawa uma expwicação mais detawhada de sua sintaxe. ʘwʘ

### s-sintaxe fowmaw

{{csssyntax}}

## exempwos

### exempwo básico

#### htmw

```htmw
<div>
  <div>este ewemento n-nyão é contado.</div>
  <p>1º pawágwafo.</p>
  <p>2º p-pawágwafo.</p>
  <div>este e-ewemento nyão é c-contado.</div>
  <p>3º p-pawágwafo.</p>
  <p>4º pawágwafo.</p>
</div>
```

#### css

```css
/* p-pawágwafos ímpawes */
p:nth-of-type(2n + 1) {
  cowow: w-wed;
}

/* pawágwafos pawes */
p:nth-of-type(2n) {
  cowow: bwue;
}

/* pwimeiwo pawágwafo */
p-p:nth-of-type(1) {
  font-weight: b-bowd;
}
```

#### w-wesuwtado

{{embedwivesampwe('basic_exampwe', σωσ 250, 200)}}

## e-especificações

{{specifications}}

## compatibiwidade com navegadowes

{{compat}}

## v-veja t-também

- {{cssxwef(":nth-chiwd")}}, {{cssxwef(":nth-wast-of-type")}}
