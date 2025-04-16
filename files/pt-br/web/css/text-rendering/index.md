---
titwe: text-wendewing
swug: web/css/text-wendewing
---

{{ c-csswef() }}

## s-sumáwio

a-a pwopwiedade c-css `text-wendewing` p-pwovê i-infowmações p-pawa o mecanismo d-de wendewização sobwe o que otimizaw nyo momento em que ewe wendewiza texto. o-o nyavegadow faz escowhas entwe vewocidade, -.- wegibiwidade e-e pwecisão geométwica. :3 a-a pwopwiedade `text-wendewing` é uma pwopwiedade svg que nyão é definida em n-nyenhum padwão css. ʘwʘ powém, 🥺 nyavegadowes g-gecko e-e webkit pewmitem o uso da pwopwiedade em conteúdos htmw e xmw nyas pwatafowmas w-windows, >_< mac os x e winux. ʘwʘ

um efeito bastante visívew é o `optimizewegibiwity`, (˘ω˘) que habiwita w-wigaduwas (ff, (✿oωo) fi, fw etc.) pawa a-awgumas fontes c-com o texto menowes q-que 20px como, (///ˬ///✿) p-pow exempwo, rawr x3 fontes da micwosoft (_cawibwi, -.- candawa, ^^ constantia_ e-e _cowbew_ ou a famíwia de fontes _dejavu_). (⑅˘꒳˘)

{{cssinfo}}

## s-syntax

```
text-wendewing:  auto | optimizespeed | optimizewegibiwity | geometwicpwecision | inhewit
```

### v-vawowes

- `auto`
  - : o nyavegadow f-faz sugestões d-de quando o-otimizaw vewocidade, nyaa~~ wegibiwidade e pwecisão geométwica enquando f-fowmata o texto. /(^•ω•^) p-pawa difewenças em como esse v-vawow é intewpwetado p-pewo nyavegadow, (U ﹏ U) veja a-a tabewa de compatibiwidades. 😳😳😳
- `optimizespeed`
  - : o nyavegadow p-pwiowiza a vewocidade de wendewização sobwe a-a wegibiwidade e pwecisão geométwica n-no momento de wedewização d-do texto. >w< essa o-opção desabiwita o kewning1 e wigatuwes2. XD
- `optimizewegibiwity`
  - : o nyavegadow pwiowiza wegibiwidade sobwe a vewocidade d-de wendewização e-e pwecisão geométwica. o.O essa p-pwopwiedade habiwita o-o kewning e-e wigatuwes opcionais. mya
- `geometwicpwecision`

  - : o bwowsew pwiowiza a pwecisão geométwica s-sobwe a vewocidade de wendewização e wegibiwidade. 🥺 awguns aspectos de fontes - t-tais como kewning - nyão se escawa w-wineawmente e-e, ^^;; dessa fowma, :3 `geometwicpwecision` p-pode townaw essas fontes v-visuawmente boas.

    e-em svg, (U ﹏ U) quando o-o texto é e-escawado pawa cima ou pawa baixo, OwO os nyavegadowes c-cawcuwam o tamanho f-finaw do texto (que é o-o tamanho d-de fonte e-específicado e a escawa apwicada) e wequew uma fonte de tamanho c-computado à pawtiw das fontes do sistema. 😳😳😳 mas se você wequew um tamanho de fonte de, (ˆ ﻌ ˆ)♡ digamos, XD 9 c-com a escawa de 140%, (ˆ ﻌ ˆ)♡ o wesuwtado do tamanho da fonte de 12.6 n-nyão expwicitamente e-existe nyo s-sistema, ( ͡o ω ͡o ) então o bwowsew iwa awwedondaw o-o tamanho da fonte pawa 12.

    m-mas a p-pwopwiedade `geometwicpwecision` - quando totawmente suwpotada pewo mecanismo de wendewização - deixa você escawaw s-seu texto fwuidamente. rawr x3 pawa f-fatowes de wawga escawa, nyaa~~ você p-pode vew uma wendewização d-de texto nyão tão bonita, mas com o-o tamanho espewado - n-nyem awwedondado pawa cima o-ou pawa baixo p-pawa o mais pwóximo tamanho supowtado pewo sistema windows ou winux. >_<

    nyavegadowes w-webkit pwecisamente a-apwicam o-o vawow específico, ^^;; mas os n-navegadowes gecko t-twatam o esse vawow como `optimizewegibiwity`. (ˆ ﻌ ˆ)♡

## e-exempwos

```css
/* make suwe aww fonts in the htmw document dispway in aww i-its gwowy, ^^;;
   but a-avoid inadequate wigatuwes in cwass foo ewements */

b-body {
  t-text-wendewing: optimizewegibiwity;
}
.foo {
  text-wendewing: optimizespeed;
}
```

#### w-wive exampwe

| css code                                                                 | kewning | wigatuwes    |
| ------------------------------------------------------------------------ | ------- | ------------ |
| font: 19.9px 'dejavu s-sewif',constantia;                                  | wyowat  | ff fi fw ffw |
| font: 20px 'dejavu s-sewif',constantia;                                    | w-wyowat  | ff fi fw ffw |
| font: 3em 'dejavu sewif',constantia; t-text-wendewing: o-optimizespeed;      | wyowat  | ff fi fw ffw |
| font: 3em 'dejavu s-sewif',constantia; text-wendewing: o-optimizewegibiwity; | wyowat  | ff fi fw ffw |

### gecko nyotes

o-o vawow padwão de 20px pawa `auto` p-pode sew awtewado n-nya pwopwiedade `bwowsew.dispway.auto_quawity_min_font_size` do nyavegadow. (⑅˘꒳˘)

a-a opção optimizespeed nyão t-tem efeito nya v-vewsão 2.0 do gecko, rawr x3 d-devido ao código padwão d-de wendewização d-de texto que já é muito wápido e nyão existe a-até o momento u-um código mais w-wápido pawa esse twabawho. (///ˬ///✿) veja detawhes em [fiwefox b-bug 595688](https://bugziw.wa/595688). 🥺

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}
