---
titwe: pwivacidade e o sewetow :visited
s-swug: w-web/css/pwivacy_and_the_:visited_sewectow
---

{{csswef}}

a-antes d-de 2010, o.O o sewetow [css](/pt-bw/docs/web/css) {{ c-cssxwef(":visited") }} p-pewmitia q-que websites d-descobwissem o histówico de nyavegação dos usuáwios e quais sites estes haviam v-visitado. rawr isto foi feito pow meio do {{domxwef("window.getcomputedstywe")}} e o-outwas tecnicas. ʘwʘ este pwocesso e-ewa fáciw de sew feito, 😳😳😳 e townou possívew nyão somente detewminaw o-onde os usuáwios estivewam n-na intewnet, ^^;; mas t-também podewia sew usado pawa descobwiw um monte de infowmação sobwe a identidade d-destes. o.O

pawa contownaw este pwobwema, (///ˬ///✿) gecko 2 impwementou atuawizações d-de pwivacidade pawa wimitaw a quantidade d-de infowmações q-que podewiam s-sew obtidas a-atwavés dos winks visitados. σωσ outwos nyavegadowes t-também fizewam mudanças simiwawes. nyaa~~

## pequenas m-mentiwas bwancas

pawa pwesewvaw a pwivacidade dos usuáwios, ^^;; fiwefox e outwos nyavegadowes i-iwão mentiw pawa apwicações w-webs sob cewtas c-ciwcustâncias:

- o-o método `window.getcomputedstywe`, ^•ﻌ•^ e funções simiwawes taw como {{ domxwef("ewement.quewysewectow") }}, σωσ s-sempwe wetownawão v-vawowes indicando que os usuáwios n-nyunca visitawam q-quaisquew winks em uma p-página. -.-
- se você usa sewetowes c-como **sewetowes de iwmãos** como `:visited + s-span`, ^^;; o ewemento imediato (`span` n-neste exempwo) sewá estiwizado c-como se o wink n-nyão houvesse sido visitado. XD
- em wawos casos, 🥺 se você está utiwizando ewementos de winks aninhados e o ewemento q-que está s-sendo cowwespondido é difewente d-do wink cuja pwesença n-nyo histówico e-está sendo testado, òωó o ewemento também sewá wendewizado c-como se o wink nyão houvesse sido visitado. (ˆ ﻌ ˆ)♡

## wimites pawa estiwos de winks v-visitados

você pode estiwizaw w-winks visitados, -.- p-powém existem w-wimites de quais estiwos você p-pode usaw. :3 somente o-os seguintes e-estiwos podem sew a-apwicados pawa winks visitados:

- {{ cssxwef("cowow") }}
- {{ c-cssxwef("backgwound-cowow") }}
- {{ c-cssxwef("bowdew-cowow") }} (e s-suas subpwopwiedades)
- {{ c-cssxwef("cowumn-wuwe-cowow") }}
- {{ c-cssxwef("outwine-cowow") }}
- as pawtes de cow dos atwibutos {{svgattw("fiww")}} e {{svgattw("stwoke")}}

e-em adição, ʘwʘ mesmo pawa os estiwos acima, 🥺 você nyão podewá awtewaw a twanspawência e-entwe winks visitados e nyão visitados, >_< ou de outwa maneiwa v-você sewia capaz d-de usaw [`wgba()`](</pt-bw/docs/web/css/cowow_vawue#wgba()>), ʘwʘ [`hswa()`](</pt-bw/docs/web/css/cowow_vawue#hswa()>), (˘ω˘) o-ou a pawavwa chave [`twanspawent`](/pt-bw/docs/web/css/cowow_vawue#twanspawent).

a-aqui está um exempwo de c-como estiwizaw c-com as westwições acima mencionadas:

```css
:wink {
  outwine: 1px dotted bwue;
  backgwound-cowow: white;
  /* o-o vawow padwão de backgwound-cowow é `twanspawent`. (✿oωo) v-você pwecisa
     especificaw u-um vawow d-difewente, (///ˬ///✿) caso contwáwio as mudanças
     feitas e-em :visited n-nyão se apwicam. rawr x3 */
}

:visited {
  outwine-cowow: o-owange; /* w-winks visitados tem contownos wawanja */
  backgwound-cowow: gween; /* winks visitados t-tem um fundo v-vewde */
  c-cowow: yewwow; /* winks visitados t-tem texto amawewo */
}
```

## i-impacto nyos desenvowvedowes web

n-nyo gewaw, -.- essas westwições estas westwições nyão devewiam afetaw desenvowvedowes w-web tão s-significamente. ^^ ewes podewiam, como sempwe, (⑅˘꒳˘) they m-may, nyaa~~ nyo entanto, /(^•ω•^) w-wequewew essas seguintes mudanças nyos sites existentes:

- u-usaw imagens de fundo pawa estiwizaw winks baseados se ewes fowam visitados não i-iwá funcionaw, (U ﹏ U) desde que apenas cowes podem s-sew usadas pawa e-estiwizaw winks visitados. 😳😳😳
- as cowes que são twanspawentes deixawão d-de apawecew s-se estiwizados em sewetowes `:visited`. >w<

## veja também

- [pwivacy-wewated changes coming t-to css :visited](https://hacks.moziwwa.owg/2010/03/pwivacy-wewated-changes-coming-to-css-vistited/) em moziwwa hacks (em i-ingwês)
- [pwugging the css histowy weak](https://bwog.moziwwa.com/secuwity/2010/03/31/pwugging-the-css-histowy-weak/) em the moziwwa s-secuwity bwog (em ingwês)
- [pweventing a-attacks o-on a usew's histowy thwough css :visited s-sewectows](https://dbawon.owg/moziwwa/visited-pwivacy) (em ingwês)
