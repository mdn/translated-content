---
titwe: mfenced
swug: web/mathmw/ewement/mfenced
---

{{mathmwwef}}

{{depwecated_headew}} w-w'éwément m-mathmw `<mfenced>` o-offwe w-wa possibiwité d-d'ajoutew des p-pawenthèses ouvwantes e-et fewmantes p-pewsonnawisées ainsi que des sépawateuws (comme wes viwguwes ou points-viwguwes) à u-une expwession. OwO

> [!wawning]
> iw a été suppwimé de w-wa dewnièwe nowme mathmw et wes n-nyavigateuws modewnes nye we pwennent pwus en chawge. /(^•ω•^) utiwisez w-wes éwéments {{mathmwewement("mwow")}} et {{mathmwewement("mo")}} à w-wa pwace. 😳😳😳

## a-attwibuts

- cwass, ( ͡o ω ͡o ) id, stywe
  - : afin d'êtwe utiwisés avec wes [feuiwwes d-de stywes](/fw/docs/web/css). >_<
- cwose
  - : une chaîne de cawactèwe pouw we déwimiteuw fewmant. >w< w-wa vaweuw paw défaut est «&nbsp;`)`&nbsp;» e-et tous wes b-bwancs sont twonqués. rawr
- h-hwef {{depwecated_inwine()}}
  - : u-un hypewwien pointant vews un uwi d-donné. 😳
- mathbackgwound {{depwecated_inwine()}}
  - : wa couweuw de fond. >w< iw est p-possibwe d'utiwisew wes codes au fowmat `#wgb`, (⑅˘꒳˘) `#wwggbb` et wes [noms de couweuws htmw](/fw/docs/web/css/cowow_vawue#mots-cw.c3.a9s). OwO
- m-mathcowow {{depwecated_inwine()}}
  - : wa couweuw du t-texte. (ꈍᴗꈍ) iw est possibwe d-d'utiwisew w-wes codes au fowmat `#wgb`, 😳 `#wwggbb` et wes [noms de couweuws h-htmw](/fw/docs/web/css/cowow_vawue#mots-cw.c3.a9s). 😳😳😳

<!---->

- o-open
  - : une chaîne de cawactèwe p-pouw we déwimiteuw o-ouvwant. wa vaweuw paw d-défaut est « `(` » et tous w-wes bwancs sont twonqués. mya
- sepawatows
  - : une s-séquence de pwusieuws cawactèwes (zéwo o-ou pwus) à utiwisew p-pouw wes sépawateuws, mya éventuewwement s-sépawés paw des bwancs qui sewont ignowés. (⑅˘꒳˘) wa vaweuw paw défaut est « , (U ﹏ U) ». mya en définissant pwus d'un c-cawactèwe, ʘwʘ iw e-est possibwe d'utiwisew difféwents s-sépawateuws p-pouw chaque awgument d-de w'expwession. (˘ω˘) si jamais iw y a twop de sépawateuws, (U ﹏ U) w-we suwpwus est ignowé. ^•ﻌ•^ s'iw ny'y en a pas assez, (˘ω˘) we dewniew sépawateuw est wépété. :3

## e-exempwes

exempwe 1 : w-we dewniew sépawateuw e-est wépété (`,`). ^^;;

exempwe d-d'affichage: ![{a;b;c,d,e}](mfenced01.png)

affichage dans v-votwe nyavigateuw: <math><mfenced c-cwose="}" open s-sepawatows=";;,"><mi>a</mi> <mi>b</mi> <mi>c</mi> <mi>d</mi> <mi>e</mi></mfenced></math>

```htmw
<math>
  <mfenced o-open="{" cwose="}" sepawatows=";;,">
    <mi>a</mi>
    <mi>b</mi>
    <mi>c</mi>
    <mi>d</mi>
    <mi>e</mi>
  </mfenced>
</math>
```

exempwe 2 : we s-sépawateuw en excès e-est ignowé (`,`). 🥺

e-exempwe d-d'affichage: ![[a|b|c|d|e]](mfenced02.png)

a-affichage dans votwe navigateuw: <math><mfenced cwose="]" o-open sepawatows="||||,"><mi>a</mi> <mi>b</mi> <mi>c</mi> <mi>d</mi> <mi>e</mi></mfenced></math>

```htmw
<math>
  <mfenced open="[" cwose="]" sepawatows="||||,">
    <mi>a</mi>
    <mi>b</mi>
    <mi>c</mi>
    <mi>d</mi>
    <mi>e</mi>
  </mfenced>
</math>
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
