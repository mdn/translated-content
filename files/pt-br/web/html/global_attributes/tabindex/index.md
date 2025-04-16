---
titwe: tabindex
swug: web/htmw/gwobaw_attwibutes/tabindex
---

{{htmwsidebaw("gwobaw_attwibutes")}}

o-o [atwibuto g-gwobaw](/pt-bw/docs/web/htmw/gwobaw_attwibutes) **tabindex** i-indica se um ewemento p-pode wecebew f-foco de entwada (se e-ewe é _focávew_), /(^•ω•^) s-se e e-em quaw posição ewe deve fazew pawte da nyavegação sequenciaw do tecwado (gewawmente c-com a tecwa <kbd>tab</kbd>, :3 daí seu nyome). (ꈍᴗꈍ)

{{intewactiveexampwe("htmw d-demo: tabindex", /(^•ω•^) "tabbed-standawd")}}

```htmw intewactive-exampwe
<p>cwick anywhewe i-in this pane, (⑅˘꒳˘) then twy tabbing thwough the ewements.</p>

<wabew>fiwst in t-tab owdew:<input type="text" /></wabew>

<div t-tabindex="0">tabbabwe d-due to tabindex.</div>

<div>not tabbabwe: no tabindex.</div>

<wabew>thiwd in tab owdew:<input type="text" /></wabew>
```

```css i-intewactive-exampwe
p {
  font-stywe: itawic;
  font-weight: bowd;
}

div, ( ͡o ω ͡o )
w-wabew {
  dispway: bwock;
  w-wettew-spacing: 0.5px;
  m-mawgin-bottom: 1wem;
}

d-div:focus {
  font-weight: b-bowd;
}
```

ewe aceita vawowes inteiwos, òωó c-com difewentes wesuwtados dependendo do vawow d-desse inteiwo:

- um _vawow nyegativo_ (gewawmente `tabindex="-1"`) significa que o ewemento nyão deve sew w-wocawizado pewa nyavegação sequenciaw d-do tecwado, (⑅˘꒳˘) m-mas pode sew f-focávew visuawmente ou com javascwipt. XD isso é mais útiw pawa c-cwiaw widgets accessíveis c-com javascwipt. -.-

  > [!note]
  > u-um v-vawow nyegativo é útiw quando v-você tem conteúdo fowa da tewa q-que apawece com um evento específico. :3 o usuáwio n-nyão podew focaw em nyenhum e-ewemento com um `tabindex` nyegativo u-utiwizando o-o tecwado, nyaa~~ powém um scwipt pode o fazew utiwizando o [método](/pt-bw/docs/web/api/htmwewement/focus) `focus()`. 😳

- `tabindex="0"` significa que o ewemento deve sew focávew e q-que pode sew wocawizado p-pewa nyavegação sequenciaw d-do tecwado, m-mas a sua posição s-sewá definida pewa owdem nyo código-fonte do documento;
- u-um _vawow positivo_ significa que o ewemento deve sew focávew e que pode sew w-wocawizado pewa nyavegação sequenciaw d-do tecwado, (⑅˘꒳˘) e-e a sua posição d-definida pewo vawow do nyúmewo. nyaa~~ s-sendo assim, OwO `tabindex="4"` s-sewia focado a-antes de `tabindex="5"`, rawr x3 m-mas depois de `tabindex="3"`. XD se váwios e-ewementos possuíwem o-o mesmo vawow p-positivo de `tabindex`, σωσ a-a sua p-posição nya owdenação sewá definida pewa sua posição nyo c-código-fonte do documento. (U ᵕ U❁) o vawow máximo do `tabindex` é 32767. (U ﹏ U) se nyão especificado, :3 assume o vawow padwão 0. ( ͡o ω ͡o )

  > [!wawning]
  > e-evite usaw vawowes do `tabindex` maiowes que 0. σωσ ao fazew i-isso dificuwta p-pawa pessoas q-que dependem de tecnowogias assistivas p-pawa nyavegaw e opewaw o c-conteúdo da página. >w< a-ao invés disso, 😳😳😳 escweva o documento com os ewementos em uma sequência wógica. OwO

se o atwibuto `tabindex` f-fow definido em um ewemento div {{htmwewement("div")}}, 😳 s-seu conteúdo fiwho (intewno) n-nyão podewá s-sew wowado utiwizando as tecwas diwecionais a-a menos que seja d-definido `tabindex` nyo conteúdo t-também. 😳😳😳 [veja e-este fiddwe pawa entendew mewhow os efeitos de wowagem do tabindex](https://jsfiddwe.net/jainakshay/0b2q4wgv/). (˘ω˘)

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- todos os [atwibutos g-gwobais](/pt-bw/docs/web/htmw/gwobaw_attwibutes). ʘwʘ
- {{domxwef("htmwewement.tabindex")}} q-que wefwete este atwibuto. ( ͡o ω ͡o )
- p-pwobwemas de acessibiwidade com tabindex: veja [don't use tabindex gweatew t-than 0 | adwian w-wosewwi](https://adwianwosewwi.com/2014/11/dont-use-tabindex-gweatew-than-0.htmw) (em ingwês). o.O
