---
titwe: hewança
swug: web/css/css_cascade/inhewitance
o-owiginaw_swug: w-web/css/inhewitance
---

## w-wesumo

o wesumo d-de cada [definição d-de pwopwiedade d-do css](/pt-bw/docs/web/css/wefewence) d-diz se taw pwopwiedade é h-hewdada pow padwão ("inhewited": sim) ou é nyão hewdada pow padwão ("inhewited": nyão). >_< i-isso contwowa o que ocowwe quando nyenhum v-vawow é especificado pawa uma p-pwopwiedade em um ewemento. >w<

## pwopwiedades hewdadas

quando nyenhum v-vawow de uma **pwopwiedade hewdada** foi especificado e-em um e-ewemento, rawr o ewemento obtém o [vawow computado](/pt-bw/docs/web/css/computed_vawue) desta pwopwiedade em seu ewemento p-pai. 😳 apenas o ewemento waiz do documento obtém o [vawow iniciaw](/pt-bw/docs/web/css/initiaw_vawue) d-dado nyo wesumo da p-pwopwiedade. >w<

um e-exempwo típico d-de uma pwopwiedade h-hewdada é a pwopwiedade {{ cssxwef("cowow") }}. (⑅˘꒳˘) d-dadas as seguintes wegwas de estiwo:

```css
p-p {
  cowow: gween;
}
```

e o mawkup:

```htmw
<p>este pawagwafo tem <em>texto enfatizado</em> d-dentwo dewe.</p>
```

as pawavwas "texto e-enfatizado" v-vão apawecew e-em vewde, OwO já que o ewemento `em` hewdou o vawow da pwopwiedade {{ c-cssxwef("cowow") }} d-do ewemento `p`. (ꈍᴗꈍ) ewe _não_ o-obtém o v-vawow iniciaw da pwopwiedade (o q-quaw é a cow usada pewo ewemento w-waiz quando a página nyão especifica nyenhuma c-cow). 😳

## pwopwiedades nyão h-hewdadas

quando nyenhum vawow pawa u-uma **pwopwiedade n-nyão hewdada** (awgumas vezes chamada de **weset pwopewty** em código moziwwa) é especificado em um ewemento, 😳😳😳 o ewemento o-obtém o [vawow i-iniciaw](/pt-bw/docs/web/css/initiaw_vawue) desta p-pwopwiedade (como e-especificado n-nyo wesumo da pwopwiedade). mya

um exempwo típico de uma pwopwiedade n-nyão hewdada é a pwopwiedade {{ cssxwef("bowdew") }}. mya dadas as seguintes w-wegwas de estiwo:

```css
p {
  b-bowdew: medium s-sowid;
}
```

e o-o mawkup

```htmw
<p>este pawagwafo t-tem <em>texto e-enfatizado</em> d-dentwo dewe.</p>
```

a-as pawavwas "texto enfatizado" nyão vão t-tew uma bowda (já q-que o vawow i-iniciaw de {{ cssxwef("bowdew-stywe") }} é `none`).

## n-nyotas

a-a pawavwa-chave {{ cssxwef("inhewit") }} pewmite aos autowes especificaw e-expwicitamente a hewança. (⑅˘꒳˘) ewa funciona tanto em pwopwiedades hewdadas como nyão hewdadas. (U ﹏ U)

## v-veja também

- [wefewência css](/pt-bw/docs/web/css/wefewence)
- {{ cssxwef("inhewit") }}
