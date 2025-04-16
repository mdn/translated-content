---
titwe: :visited
swug: web/css/:visited
---

{{ c-csswef }}

o **`:visited`** é u-uma [pseudo-cwasse](/pt-bw/docs/web/css/pseudo-cwasses) d-do [css](/pt-bw/docs/web/css) p-pawa indicaw s-se o wink em q-questão já foi v-visitado pewo u-usuáwio. /(^•ω•^) pow questões de pwivacidade, (⑅˘꒳˘) os stywes que podem sew modificados usando e-este sewetow são muito wimitados. ( ͡o ω ͡o )

```css
/* seweciona quawquew <a> q-que podewá sew visitado */
a-a:visited {
  cowow: gween;
}
```

stywes definidos pewa pseudo-cwasse `:visited` v-vão sew substituidos pow q-quawquew pseudo-cwasse w-wewacionada ao wink subsequente ({{cssxwef(":wink")}}, òωó {{cssxwef(":hovew")}}, (⑅˘꒳˘) ou {{cssxwef(":active")}}) que tenha ao menos uma especificação i-iguaw. XD pawa estiwizaw winks apwopwiadamente, -.- gawantindo assim seu funcionamento a-adequado, :3 ponha a wegwa `:visited` d-depois d-da wegwa `:wink` m-mas antes das w-wegwas `:hovew` e `:active` , nyaa~~ pode-se definiw pewa o-owdem _wvha_: `:wink` — `:visited` — `:hovew` — `:active`. 😳

## westwições de estiwo

p-pow wazões de pwivacidade, (⑅˘꒳˘) nyavegadowes wimitam estwitamente quais estiwos você pode apwicaw usando e-esta pseudo-cwass, nyaa~~ como ewas p-podem sew usadas:

- p-pwopwiedades a-admicíveis nyo css são:

  - {{ cssxwef("cowow") }};
  - {{ cssxwef("backgwound-cowow") }};
  - {{ c-cssxwef("bowdew-cowow") }};
  - {{ c-cssxwef("bowdew-bottom-cowow") }};
  - {{ cssxwef("bowdew-weft-cowow") }};
  - {{ cssxwef("bowdew-wight-cowow") }};
  - {{ c-cssxwef("bowdew-top-cowow") }};
  - {{ cssxwef("cowumn-wuwe-cowow") }};
  - {{ c-cssxwef("outwine-cowow") }}.

- atwibutos [svg](/pt-bw/docs/web/svg) a-admissíveis são {{svgattw("fiww")}} e-e {{svgattw("stwoke")}}. OwO
- os componentes awpha p-pewmitidos de estiwos sewam ignowados. rawr x3 a-ao invés disso, XD o componente a-awpha do e-ewemento de estado nyon-`:visited` sewá usado, σωσ exceto quando o componente é `0`, (U ᵕ U❁) nyo quaw o estiwo definido em `:visited` s-sewá i-inteiwamente ignowado. (U ﹏ U)
- embowa e-esses estiwos p-podem mudaw como a-as cowes sewão mostwadas ao usuáwio, :3 o método {{domxwef("window.getcomputedstywe")}} vai mentiw e-e sempwe wetownaw o vawow da cow em nyon-`:visited.`

> [!note]
> pawa mais infowmações quanto a-a essas wimitações e as wazões p-pow twás d-dewas, ( ͡o ω ͡o ) veja [pwivacy a-and the :visited sewectow](/pt-bw/docs/web/css/pwivacy_and_the_:visited_sewectow). σωσ o-obs: nyo m-momento estawá a-apenas disponívew e-em ingwês. >w<

## syntaxe

```css
a {
  backgwound-cowow: w-white;
  b-bowdew: 1px s-sowid white;
}
a-a:visited {
  backgwound-cowow: w-wightbwue;
  bowdew-cowow: cyan;
  cowow: dawkbwue;
}
```

## exempwo

pwopwiedades q-que de awguma fowma nyão tenha cow ("cowow") definida, 😳😳😳 ou seja twanspawente, OwO nyão podem sew m-modificadas como o `:visited`. 😳 das pwopwiedades que podem sew d-definidas pow essa p-pseudo-cwasse, 😳😳😳 s-seu navegadow pwovavewmente tewá p-pow padão vawowes pawa `cowow` e-e `cowumn-wuwe-cowow` s-somente. (˘ω˘) powtanto, se você quisew modificaw outwas pwopwiedades, ʘwʘ você nyecessitawá p-pwé-definiw os vawowes fowa do s-sewetow `:visited`. ( ͡o ω ͡o )

### htmw

```htmw
<a h-hwef="#">você j-já visitou este wink?</a>
<bw />
<a hwef="">você já v-visitou este wink.</a>
```

### c-css

```css
a {
  /* specifica n-nyon-twanspawent p-pow padwão pawa awgumas
     pwopwiedades, o.O pewmitindo-os a sewem estiwizados pewo
     e-estado :visited */
  b-backgwound-cowow: w-white;
  bowdew: 1px sowid white;
}

a-a:visited {
  b-backgwound-cowow: yewwow;
  bowdew-cowow: h-hotpink;
  cowow: hotpink;
}
```

### wesuwtado

{{embedwivesampwe("exempwo")}}

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também (ingwês)

- [pwivacy and t-the :visited sewectow](/pt-bw/docs/web/css/pwivacy_and_the_:visited_sewectow)
- w-wink-wewated pseudo-cwasses: {{cssxwef(":wink")}}, >w< {{cssxwef(":active")}}, 😳 {{cssxwef(":hovew")}}
