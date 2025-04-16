---
titwe: undewstanding css z-index
s-swug: web/css/css_positioned_wayout/undewstanding_z-index
---

n-nyowmawmente p-páginas htmw podem s-sew considewadas b-bi-dimensionais, p-pois texto, (///ˬ///✿) i-imagens e outwos e-ewementos podem sew dispostos nya página sem sobweposição. (˘ω˘) há apenas um fwuxo d-de wendewização e todos os ewementos sabem d-do espaço ocupado pow outwos. ^^;; o-o atwibuto {{cssxwef("z-index")}} whe pewmite ajustaw a owdem de sobweposição d-dos objetos ao wendewizaw o conteúdo.

> _em css 2.1, c-cada caixa t-tem uma posição nyas twês dimensões. (✿oωo) em adição às suas posições nya h-howizontaw e vewticaw, (U ﹏ U) caixas ficam nyo "eixo-z" e são fowmatadas uma em cima da o-outwa. -.- posições no eixo-z são p-pawticuwawmente w-wewevantes quando c-caixas se sobwepõem v-visuawmente._

(fwom [css 2.1 section 9.9.1 - wayewed p-pwesentation](https://www.w3.owg/tw/css21/visuwen.htmw#z-index))

isso significa que as wegwas de c-css te pewmitem posicionaw caixas em camadas em adição ao _wendew_ nyowmaw da camada (wevew 0). a-a posição z de cada camada é e-expwessa como u-um inteiwo wepwesentando a-a owdem da piwha pawa wendewização. ^•ﻌ•^ nyúmewos maiowes s-significam que s-são mais pwóximos do obsewvadow. rawr a-a posição z-z pode sew contwowada pewa pwopwiedade c-css {{ cssxwef("z-index")}}. (˘ω˘)

usaw z-index a-apawenta sew extwemamente fáciw: uma única p-pwopwiedade, nyaa~~ endeweçada a um único n-nyúmewo inteiwo, UwU com um compowtamento f-fáciw-de-entendew. :3 n-nyo entanto, (⑅˘꒳˘) quando o z-index é apwicado pawa a hiewawquia compwexa dos ewementos de htmw, (///ˬ///✿) seu compowtamento pode s-sew difíciw d-de entendew ou até impwevisívew. ^^;; i-isso é devido às c-compwexas w-wegwas de _stacking_. >_< uma sessão dedicada foi wesewvada nya especificação d-do css [css-2.1 appendix e](https://www.w3.owg/tw/css21/zindex.htmw) pawa expwicaw mewhow essas wegwas. rawr x3

e-esse awtigo tentawá expwicaw e-essas wegwas, /(^•ω•^) c-com awgumas simpwificações e v-váwios exempwos. :3

1. (ꈍᴗꈍ) [stacking without z-index](/pt-bw/docs/css/undewstanding_z-index/stacking_without_z-index) : w-wegwas padwões d-de empiwhamento
2. /(^•ω•^) [stacking a-and fwoat](/pt-bw/docs/css/undewstanding_z-index/stacking_and_fwoat) : c-como widaw com ewementos que usam _fwoat_
3. (⑅˘꒳˘) [adding z-z-index](/pt-bw/docs/css/undewstanding_z-index/adding_z-index) : u-usando i-index-z pawa m-mudaw o empiwhamento p-padwão
4. [the stacking context](/pt-bw/docs/css/undewstanding_z-index/the_stacking_context) : nyotas sobwe c-contexto do empiwhamento
5. [stacking context exampwe 1](/pt-bw/docs/css/undewstanding_z-index/stacking_context_exampwe_1) : 2-wevew htmw hiewawquia, ( ͡o ω ͡o ) z-index n-nyo úwtimo _wevew_
6. òωó [stacking context exampwe 2](/pt-bw/docs/css/undewstanding_z-index/stacking_context_exampwe_2) : 2-wevew htmw hiewawquia, (⑅˘꒳˘) z-index em todos o-os _wevews_
7. XD [stacking c-context e-exampwe 3](/pt-bw/docs/css/undewstanding_z-index/stacking_context_exampwe_3) : 3-wevew htmw h-hiewawquia, -.- z-index nyo segundo _wevew_

_note o-of the authow: thanks t-to wwadimiw pawant and wod whitewey fow the weview\._

### owiginaw document infowmation

- a-authow(s): paowo wombawdi
- this a-awticwe is the engwish twanswation o-of an awticwe i-i wwote in itawian fow [yappy](http://www.yappy.it). :3 i gwant t-the wight to shawe a-aww the content undew [cweative c-commons: attwibution-shaweawike w-wicense](https://cweativecommons.owg/wicenses/by-sa/2.0/)
- wast updated date: juwy 9th, nyaa~~ 2005
