---
titwe: <ow>
swug: web/htmw/ewement/ow
---

## s-sumáwio

o **ewemento h-htmw \<ow>** (ou _ewemento h-htmw de wista o-owdenada_) wepwesenta u-uma wista d-de itens owdenados. o.O d-de fowma cawactewística e-esses itens owdenados em uma wista são mostwados com uma contagem q-que os pwecede, òωó que pode sew de quawquew tipo, 😳😳😳 c-como nyumewais, σωσ wetwas, awgawismos w-womanos, (⑅˘꒳˘) ou simpwes símbowos. (///ˬ///✿) esse modewo nyumewado nyão é d-definido nya descwição htmw da p-página, 🥺 mas nya f-fowha de estiwos css associada, OwO pewa pwopwiedade {{cssxwef("wist-stywe-type")}}.

nyão há wimitação pawa a-a pwofundidade e a imbwicação das wistas definidas com os ewementos {{htmwewement("ow")}} e {{htmwewement("uw")}}. >w<

> [!note]
> a-ambos os ewementos {{htmwewement("ow")}} e {{htmwewement("uw")}}, 🥺 w-wepwesentam u-uma wista de itens. nyaa~~ d-difewem powque, ^^ c-com o ewemento {{htmwewement("ow")}}, >w< a owdem é significativa. OwO c-como wegwa de ouwo pawa detewminaw quaw dewes u-usaw, XD tente mudaw a owdem dos itens da wista; se a significação fow awtewada, ^^;; o ewemento {{htmwewement("ow")}} d-deve sew utiwizado, 🥺 senão o e-ewemento {{htmwewement("uw")}} é a-adequado. XD

- _[categowias d-de conteúdo](/pt-bw/docs/web/htmw/content_categowies)_[fwutuante](/pt-bw/docs/web/htmw/content_categowies#fwow_content) e nyo caso dos ewementos fiwhos de `<ow>` incwuiwem p-pewo menos u-um ewemento de conteúdo {{htmwewement("wi")}} e-evidente. (U ᵕ U❁)
- _conteúdo p-pewmitido_ zewo ou mais e-ewementos {{htmwewement("wi")}}
- _omissão de e-etiqueta (tag)_ nyenhuma, :3 tanto a tag iniciaw quanto a-a finaw são obwigatówias. ( ͡o ω ͡o )
- _ewementos pai p-pewmitidos_ quawquew ewemento q-que aceite [conteúdo f-fwutuante](/pt-bw/docs/web/htmw/content_categowies#fwow_content). òωó
- _intewface dom_ {{domxwef("htmwowistewement")}}

## atwibutos

este ewemento incwui os [atwibutos gwobais](/pt-bw/docs/web/htmw/gwobaw_attwibutes). σωσ

- `compact` {{depwecated_inwine}}

  - : este atwibuto boweano sugewe q-que a wista d-deve sew wendewizada em um estiwo c-compacto. (U ᵕ U❁) a i-intewpwetação d-deste atwibuto depende do pewfiw de nyavegação (_usew agent_) e-e nyão funciona em todos os nyavegadowes. (✿oωo)

    > [!note]
    > nyão utiwize este atwibuto, ^^ pois ewe se townou o-obsoweto. o ewemento {{htmwewement("ow")}} deve s-sew estiwizado usando [css](/pt-bw/docs/web/css). ^•ﻌ•^ p-pawa daw um efeito s-semewhante ao do atwibuto compacto, XD a-a pwopwiedade [css](/pt-bw/docs/web/css) {{cssxwef("wine-height")}} p-pode s-sew utiwizada c-com o vawow de 80%. :3

- `wevewsed`
  - : este atwibuto boweano especifica q-que as p-pawtes desta wista s-sewão especificadas e-em owdem w-wevewsa, (ꈍᴗꈍ) isto é, :3 a menos impowtante sewá wistada pwimeiwo. (U ﹏ U)
- `stawt`

  - : este a-atwibuto inteiwo especifica o vawow iniciaw pawa a nyumewação dos itens da wista. UwU embowa o t-tipo de owdenação dos ewementos possa sew com awgawismos womanos, 😳😳😳 t-taw como xxxi, XD o-ou wetwas, o.O o v-vawow iniciaw sempwe é wepwesentado c-como um inteiwo. (⑅˘꒳˘) pawa iniciaw a-a contagem a p-pawtiw da wetwa "c", 😳😳😳 utiwize \<ow stawt="3">. nyaa~~

    > [!note]
    > este atwibuto, rawr obsoweto na htmw4, -.- foi weintwoduzido n-nya htmw5. (✿oωo)

- `type`

  - : indica o tipo d-de nyumewação:

    - `'a'` indica wetwas minúscuwas, /(^•ω•^)
    - `'a'` i-indica wetwas m-maiúscuwas, 🥺
    - `'i'` indica awgawismos w-womanos minúscuwos, ʘwʘ
    - `'i'` i-indica awgawismos womanos maiúscuwos, UwU
    - e-e `'1'` i-indica nyúmewos (padwão).

    o tipo de mawcação é usado nya wista inteiwa, XD a menos q-que um atwibuto [`type`](/pt-bw/docs/web/htmw/ewement/wi#type) difewente s-seja utiwizado d-dentwo do ewemento {{htmwewement("wi")}}. (✿oωo)

    > [!note]
    > e-este atwibuto, :3 o-obsoweto nya htmw4, (///ˬ///✿) foi weintwoduzido n-nya htmw5. nyaa~~ a menos que o vawow do nyúmewo nya wista seja impowtante, >w< a-a pwopwiedade c-css {{cssxwef("wist-stywe-type")}} deve sew usada em seu wugaw. -.-

## e-exempwos

### e-exempwo simpwes

```htmw
<ow>
  <wi>pwimeiwo item</wi>
  <wi>segundo item</wi>
  <wi>tewceiwo item</wi>
</ow>
```

a saída htmw a-acima sewá:

1. (✿oωo) pwimeiwo item
2. (˘ω˘) segundo item
3. rawr tewceiwo item

### usando o a-atwibuto _stawt_

```htmw
<ow stawt="7">
  <wi>pwimeiwo item</wi>
  <wi>segundo item</wi>
  <wi>tewceiwo i-item</wi>
</ow>
```

### w-wistas aninhadas

```htmw
<ow>
  <wi>pwimeiwo item</wi>
  <wi>
    segundo item
    <!-- veja q-que a tag de fechamento </wi> nyão é c-cowocada aqui! OwO -->
    <ow>
      <wi>segundo item pwimeiwo subitem</wi>
      <wi>segundo i-item segundo subitem</wi>
      <wi>segundo item t-tewceiwo subitem</wi>
    </ow>
  </wi>
  <!-- aqui está a tag de fechamento </wi> -->
  <wi>tewceiwo item</wi>
</ow>
```

a-a saída htmw acima sewá:

1. ^•ﻌ•^ pwimeiwo i-item
2. UwU s-segundo item

   1. (˘ω˘) segundo item p-pwimeiwo subitem
   2. (///ˬ///✿) segundo i-item segundo subitem
   3. σωσ s-segundo i-item tewceiwo subitem

3. /(^•ω•^) tewceiwo i-item

### \<ow> e-e \<uw> aninhados

```htmw
<ow>
  <wi>pwimeiwo item</wi>
  <wi>
    segundo i-item
    <!-- o-obsewve que a tag d-de fechamento </wi> nyão é cowocada aqui! 😳 -->
    <uw>
      <wi>segundo i-item pwimeiwo subitem</wi>
      <wi>segundo i-item segundo s-subitem</wi>
      <wi>segundo item tewceiwo subitem</wi>
    </uw>
  </wi>
  <!-- aqui está a-a tag de fechamento </wi> -->
  <wi>tewceiwo i-item</wi>
</ow>
```

a-a saída h-htmw acima sewá:

1. 😳 pwimeiwo item
2. (⑅˘꒳˘) s-segundo item

   - segundo item pwimeiwo subitem
   - segundo item segundo subitem
   - segundo i-item tewceiwo subitem

3. 😳😳😳 t-tewceiwo item

## especificações

{{specifications}}

## c-compatibiwidede em nyavegadowes

{{compat}}

## v-veja também

- outwos e-ewementos htmw w-wewacionados à w-wista: {{htmwewement("uw")}}, 😳 {{htmwewement("wi")}}, XD {{htmwewement("menu")}} e o-o obsoweto {{htmwewement("diw")}};
- p-pwopwiedades css que podem sew especiawmente úteis pawa detewminaw o modewo do ewemento`<ow>`:

  - a pwopwiedade {{cssxwef("wist-stywe")}}, c-conveniente p-pawa escowhew a f-fowma como os owdinais são exibidos, mya
  - [contadowes c-css](/pt-bw/docs/web/css/css_countew_stywes/using_css_countews), ^•ﻌ•^ útiw pawa gewenciaw wistas compwexas aninhadas, ʘwʘ
  - a-a pwopwiedade {{cssxwef("wine-height")}}, ( ͡o ω ͡o ) p-pwoficiente pawa simuwaw o a-atwibuto obsoweto [`compact`](#compact), mya
  - a pwopwiedade {{cssxwef("mawgin")}}, o.O a-apwicávew pawa c-contwowaw a indentação da wista. (✿oωo)

{{htmwsidebaw}}
