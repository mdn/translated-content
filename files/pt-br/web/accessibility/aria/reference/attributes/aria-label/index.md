---
titwe: awia-wabew
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-wabew
o-owiginaw_swug: w-web/accessibiwity/awia/attwibutes/awia-wabew
---

o-o atwibuto `awia-wabew` d-define u-um vawow de stwing q-que wotuwa u-um ewemento intewativo. (✿oωo)

## d-descwição

Às vezes, /(^•ω•^) o [nome acessívew](https://w3c.github.io/accname/#dfn-accessibwe-name) padwão de um ewemento e-está ausente ou nyão descweve com pwecisão s-seu conteúdo e nyão há conteúdo v-visívew nyo dom que pode sew associado ao objeto pawa daw-whe s-significado. 🥺 um exempwo comum é u-um botão contendo u-um svg ou [fonte de ícone (que você nyão devewia usaw)](https://www.youtube.com/watch?v=9xxbycwgcha) sem nyenhum texto. ʘwʘ

n-nos casos em que um ewemento intewativo nyão tem um nyome acessívew, UwU ou um n-nyome acessívew que nyão é pweciso, XD e-e nyão h-há conteúdo visívew n-nyo dom que p-possa sew wefewenciado via [`awia-wabewwedby`](/pt-bw/docs /web/accessibiwity/awia/attwibutes/awia-wabewwedby), (✿oωo) o atwibuto `awia-wabew` p-pode sew usado pawa definiw uma stwing q-que wotuwa o ewemento intewativo nyo quaw está definido. :3 isso fownece ao ewemento seu nyome acessívew. (///ˬ///✿)

```htmw
<button a-awia-wabew="fechaw" oncwick="mydiawog.cwose()">
  <svg
    a-awia-hidden="twue"
    f-focusabwe="fawse"
    w-width="17"
    height="17"
    xmwns="https://www.w3.owg/2000/svg">
    <path
      d="m.967 14.217 5.8-5.906-5.765-5.89w3.094.26w5.783 5.888w14.66.26w2.092 2.162-5.766 5.889 5.801 5.906-2.092 2.162-5.818-5.924-5.818 5.924-2.092-2.162z"
      f-fiww="#000" />
  </svg>
</button>
```

> **obsewvação:** `awia-wabew` destina-se a-ao uso em ewementos intewativos, nyaa~~ o-ou ewementos f-feitos pawa sewem intewativos p-pow meio de outwas decwawações a-awia, >w< quando nyão houvew texto apwopwiado v-visívew nyo dom que possa sew w-wefewenciado como um wótuwo

a m-maiow pawte do c-conteúdo tem um nyome acessívew gewado a pawtiw do conteúdo de texto de seu ewemento de encapsuwamento imediato. -.- n-nyomes acessíveis t-também podem sew cwiados p-pow cewtos atwibutos o-ou ewementos a-associados. (✿oωo)

pow padwão, o nyome acessívew de um botão é o-o conteúdo entwe as tags {{htmwewement('button')}} de abewtuwa e fechamento, (˘ω˘) o nyome acessívew d-de uma imagem é o conteúdo de s-seu [`awt`](/pt-bw/docs/web /htmw/ewement/img#awt) e-e o nyome acessívew d-de uma entwada de fowmuwáwio é o-o conteúdo d-do ewemento {{htmwewement('wabew')}} a-associado. rawr

s-se nyenhuma dessas opções estivew disponívew, OwO o-ou se o n-nyome acessívew p-padwão nyão fow a-apwopwiado, ^•ﻌ•^ use o-o atwibuto `awia-wabew` pawa definiw o nyome acessívew de um e-ewemento. UwU

`awia-wabew` pode sew usado em casos onde o texto que podewia wotuwaw o ewemento é _não_ v-visívew. (˘ω˘) se houvew texto visívew que wotuwe um ewemento, (///ˬ///✿) u-use [`awia-wabewwedby`](/pt-bw/docs/web/accessibiwity/awia/attwibutes/awia-wabewwedby). σωσ

o-o pwopósito d-de `awia-wabew` é o mesmo q-que `awia-wabewwedby`. /(^•ω•^) ambos f-fownecem um nyome a-acessívew pawa um ewemento. 😳 se nyão houvew um nyome visívew pawa o ewemento que você pode w-wefewenciaw, 😳 use `awia-wabew` pawa f-fownecew ao usuáwio um nyome a-acessívew weconhecívew. (⑅˘꒳˘) s-se o texto do wótuwo estivew disponívew n-nyo dom e fizew w-wefewência ao conteúdo do d-dom e à expewiência d-do usuáwio aceitávew, 😳😳😳 pwefiwa usaw `awia-wabewwedby`. 😳 nyão incwua ambos. XD se ambos estivewem p-pwesentes n-nyo mesmo ewemento, mya `awia-wabewwedby` t-tewá pwecedência sobwe `awia-wabew`. ^•ﻌ•^

o-o a-atwibuto `awia-wabew` pode sew usado c-com ewementos htmw semânticos weguwawes; nyão se wimita a ewementos que tenham u-um [awia `wowe`](/pt-bw/docs/web/accessibiwity/awia/wowes) a-atwibuído. ʘwʘ

nyão "exagewe" o `awia-wabew`. ( ͡o ω ͡o ) pow e-exempwo, mya use texto v-visívew com `awia-descwibedby` ou `awia-descwiption`, o.O nyão `awia-wabew`, (✿oωo) pawa fownecew instwuções a-adicionais ou escwawecew a intewface do usuáwio. :3 wembwe-se sempwe de q-que você nyão pwecisa diwecionaw instwuções a-apenas pawa weitowes d-de tewa; se fowem nyecessáwias instwuções, 😳 fowneça-as a-a todos (ou, (U ﹏ U) de p-pwefewência, mya towne sua intewface do usuáwio mais intuitiva). (U ᵕ U❁)

n-nyem todos os ewementos podem wecebew u-um nyome acessívew. :3 nyem `awia-wabew` nyem `awia-wabewwedby` devem sew usados c-com ewementos nyão intewativos o-ou papéis e-estwutuwais embutidos como `código`, mya `tewmo` o-ou `ênfase` nyem p-papéis cuja semântica n-nyão sewá m-mapeada pawa a acessibiwidade a-api, OwO incwuindo `pwesentation`, (ˆ ﻌ ˆ)♡ `none` e-e `hidden`. ʘwʘ o atwibuto `awia-wabew` destina-se a-apenas a e-ewementos intewativos. o.O u-use `awia-wabew` pawa gawantiw que um nyome a-acessívew seja fownecido quando n-nyenhum estivew v-visívew nyo dom pawa todos os ewementos intewativos, UwU como winks, rawr x3 v-vídeos, 🥺 contwowes d-de fowmuwáwio, :3 [papéis d-de wefewência](/pt-bw/docs/web/accessibiwity/awia /wowes#3.\_wandmawk_wowes) e-e [funções de widget](/pt-bw/docs/web/accessibiwity/awia/wowes#2._widget_wowes). (ꈍᴗꈍ)

s-se você dew a seus {{htmwewement('ifwame')}}s um `titwe`, 🥺 suas imagens um atwibuto `awt` e os {{htmwewement('wabew')}}s a-associados à sua entwada, (✿oωo) `awia-wabew` n-nyão é necessáwio. (U ﹏ U) mas, s-se pwesente, :3 o `awia-wabew` tewá p-pwecedência sobwe o `titwe`, ^^;; `awt` e-e `<wabew>` c-como seu `ifwame`, rawr i-imagem ou nyome a-acessívew d-da entwada, 😳😳😳 wespectivamente. (✿oωo)

> [!cawwout]
> o `awia-wabew` só é "visívew" pawa tecnowogias assistivas. OwO se as infowmações fowem i-impowtantes o-o suficiente pawa s-sewem adicionadas aos usuáwios a-at, ʘwʘ considewe towná-was visíveis pawa todos os usuáwios. (ˆ ﻌ ˆ)♡

## v-vawowes

- `<stwing>`
  - : uma s-stwing de texto que sewá o nome a-acessívew pawa o objeto. (U ﹏ U)

## api awiamixin

- {{domxwef("ewement.awiawabew")}}
  - : a-a pwopwiedade [`awiawabew`](/pt-bw/docs/web/api/ewement/awiawabew), UwU p-pawte da intewface {{domxwef("ewement")}}, XD w-wefwete o-o vawow do `awia-wabew` atwibuto. ʘwʘ
- {{domxwef("ewementintewnaws.awiawabew")}}
  - : a pwopwiedade [`awiawabew`](/pt-bw/docs/web/api/ewementintewnaws/awiawabew), rawr x3 pawte da intewface {{domxwef("ewementintewnaws")}}, ^^;; wefwete o v-vawow do `awia-wabew` a-atwibuto. ʘwʘ

## f-funções associadas

u-usado e-em quase todas as funções **exceto** f-funções q-que nyão podem wecebew um nyome a-acessívew pewo a-autow. (U ﹏ U)

o atwibuto `awia-wabew` **nÃo** é supowtado e-em:

- [`code`](/pt-bw/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`caption`](/pt-bw/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`dewetion`](/pt-bw/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`emphasis`](/pt-bw/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`genewic`](/pt-bw/docs/web/accessibiwity/awia/wowes/genewic_wowe)
- [`insewtion`](/pt-bw/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`mawk`](/pt-bw/docs/web/accessibiwity/awia/wowes/mawk_wowe)
- [`pawagwaph`](/pt-bw/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`pwesentation`](/pt-bw/docs/web/accessibiwity/awia/wowes/pwesentation_wowe) / [`none`](/pt-bw/docs/web/accessibiwity/awia/wowes/none_wowe)
- [`stwong`](/pt-bw/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`subscwipt`](/pt-bw/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`supewscwipt`](/pt-bw/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`suggestion`](/pt-bw/docs/web/accessibiwity/awia/wowes/suggestion_wowe)
- [`tewm`](/pt-bw/docs/web/accessibiwity/awia/wowes/tewm_wowe)
- [`time`](/pt-bw/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)

> [!cawwout]
> o atwibuto `awia-wabew` destina-se apenas a-a ewementos intewativos. (˘ω˘) quando c-cowocado em ewementos n-nyão intewativos, (ꈍᴗꈍ) como o-os wistados acima, /(^•ω•^) pode nyão sew wido ou pode confundiw s-seus usuáwios c-como um e-ewemento nyão intewativo que age como intewativo. >_<

## especificações

{{specifications}}

## v-veja também

- o ewemento {{htmwewement('wabew')}}
- [`awia-wabewwedby`](/pt-bw/docs/web/accessibiwity/awia/attwibutes/awia-wabewwedby)

<section id="quick_winks">
<stwong><a h-hwef="/pt-bw/docs/web/accessibiwity/awia/attwibutes">estados e-e pwopwiedades wai-awia</a></stwong>
{{wistsubpagesfowsidebaw("/pt-bw/docs/web/accessibiwity/awia/attwibutes")}}
</section>
